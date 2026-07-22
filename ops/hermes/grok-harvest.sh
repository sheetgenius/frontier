#!/usr/bin/env bash
#
# grok-harvest.sh -- the X social-discovery lane of a Bitter Frontier cycle.
#
# The loop (an orchestrating agent, or you) drives Hermes as a one-shot sub-agent:
# `hermes -z "<prompt>"` runs the full Hermes agent with its web/X search tools on
# Grok (via a SuperGrok / X Premium+ subscription, the xai-oauth provider) and
# prints the final text. This script wraps that call for one watched source.
#
# DISCOVERY ONLY. Everything this produces is a candidate lead, never a receipt.
# No lead becomes a finding, signal, digest, or profile without independent
# primary-source verification against the source contract. See
# docs/hermes-grok-harvest-setup.md and docs/x-social-harvest-workflow.md.
#
# Secrets never touch this repo. Hermes manages the xai-oauth token under
# ~/.hermes/. This script does not read, write, log, or print it.
#
# Usage:
#   ops/hermes/grok-harvest.sh doctor                         preflight (hermes + Grok probe)
#   ops/hermes/grok-harvest.sh harvest <source-id> [<start> <end>]
#   ops/hermes/grok-harvest.sh help
#
# Exit codes: 0 ok, 2 misconfigured, 3 degraded (Grok/subscription unavailable).
#
# Overrides (env): HERMES_BIN (default: hermes), HERMES_ONESHOT_ARGS (extra flags
# passed to `hermes -z`, e.g. "--provider xai-oauth --model grok-4.20-0309-reasoning"),
# HARVEST_TIMEOUT_SECS (default 900; needs timeout/gtimeout, else ignored).

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
HERMES_BIN="${HERMES_BIN:-hermes}"
HARVEST_TIMEOUT_SECS="${HARVEST_TIMEOUT_SECS:-900}"
# Extra flags for `hermes -z`. Empty by default: the model/provider come from
# `hermes model` config. Set this to override per run without editing config.
read -r -a ONESHOT_ARGS <<< "${HERMES_ONESHOT_ARGS:-}"

log() { printf '%s\n' "$*" >&2; }
die() { printf 'error: %s\n' "$*" >&2; exit 2; }

require_hermes() {
  command -v "$HERMES_BIN" >/dev/null 2>&1 || die \
    "hermes not on PATH. Install it and authenticate:
    curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
    hermes auth add xai-oauth --type oauth   # or: hermes model  (pick xAI Grok OAuth)
  See docs/hermes-grok-harvest-setup.md."
}

# Portable one-shot: use timeout/gtimeout if present, else run directly.
TIMEOUT_BIN=""
for t in timeout gtimeout; do command -v "$t" >/dev/null 2>&1 && { TIMEOUT_BIN="$t"; break; }; done
run_oneshot() { # run_oneshot <prompt>
  if [[ -n "$TIMEOUT_BIN" ]]; then
    "$TIMEOUT_BIN" "$HARVEST_TIMEOUT_SECS" "$HERMES_BIN" -z "${ONESHOT_ARGS[@]}" "$1"
  else
    "$HERMES_BIN" -z "${ONESHOT_ARGS[@]}" "$1"
  fi
}

# Classify a probe: echoes ok | degraded | error; never exits on its own.
probe_grok() {
  local out rc
  out="$(run_oneshot 'Reply with exactly: OK' 2>&1)"; rc=$?
  if [[ $rc -eq 0 && -n "$out" ]] && ! grep -qiE '403|forbidden|allowlist|unauthor|no active subscription' <<< "$out"; then
    echo ok; return 0
  fi
  if grep -qiE '403|forbidden|allowlist|unauthor|no active subscription' <<< "$out"; then
    echo degraded; return 0
  fi
  echo "error"; return 0
}

cmd_doctor() {
  require_hermes
  log "hermes:  $(command -v "$HERMES_BIN")"

  # Hermes' own environment check. Advisory: report, do not fail the lane on it.
  if "$HERMES_BIN" doctor >/dev/null 2>&1; then
    log "hermes doctor: OK"
  else
    log "hermes doctor: reported issues -- run '$HERMES_BIN doctor' for detail"
  fi

  case "$(probe_grok)" in
    ok)
      log "grok:    OK (one-shot probe returned text)"
      return 0 ;;
    degraded)
      log "grok:    DEGRADED -- the xAI OAuth surface refused the request (403 / allowlist)."
      log "         A valid SuperGrok / X Premium+ subscription can still be rejected here."
      log "         Skip the social lane this cycle; harvest primary sources only."
      return 3 ;;
    *)
      log "grok:    probe failed -- check '$HERMES_BIN model' (provider = xai-oauth) and auth."
      return 2 ;;
  esac
}

# Emit the harvest instruction for one source. The agent starts from the source
# contract's official surfaces and returns the workflow doc's claim-record fields.
render_prompt() {
  local source="$1" start="$2" end="$3"
  cat <<EOF
You are a scout for Bitter Frontier's X social-discovery lane. This is DISCOVERY
ONLY: you produce candidate leads, never receipts. Do not state anything as a
verified fact and do not tell an operator to upgrade, migrate, or trust anything.

Source: ${source} (its contract is sources/${source}.yml in this repo; read it
first so you begin from official surfaces and its accepted/rejected evidence).

Window: ${start} to ${end}.

Use your web and X search tools to find public X/Twitter posts in the window that
may reveal maintainer intent, adoption, user pain, ecosystem tension, benchmark
discourse, or unverified feature chatter about this source.

For every item, output one YAML record with exactly these fields:
  claim_id, source, claim, primary_url, author, observed_at, event_date,
  date_precision (day|month_only|year_only|unknown), date_note, evidence_kind,
  channel (x.com), status (candidate|needs_primary_crosscheck|single-source-unconfirmed),
  crosscheck_status (needs_primary_crosscheck by default), release_channel,
  operator_consequence (cautious; a lead to investigate, not an instruction), notes.

Rules: persist exact public post URLs, never paraphrased snippets; resolve each
date to full ISO YYYY-MM-DD when possible, else set date_precision and explain in
date_note; mark every product/version claim needs_primary_crosscheck; keep
reputational or conduct claims about named people or organizations as notes unless
a direct primary post supports the exact claim. Return only the YAML records.
EOF
}

cmd_harvest() {
  require_hermes
  local source="${1:-}"
  [[ -n "$source" ]] || die "usage: $0 harvest <source-id> [<start> <end>]"
  local contract="${REPO_ROOT}/sources/${source}.yml"
  [[ -f "$contract" ]] || die "unknown source '${source}': ${contract} not found"

  local today start end
  today="$(date -u +%Y-%m-%d)"
  start="${2:-$today}"
  end="${3:-$today}"

  local run_id="${today}-x-social-harvest-${start}_${end}-frontier-v0"
  local run_dir="${REPO_ROOT}/runs/${run_id}"
  mkdir -p "${run_dir}/harvest"

  # Gate on Grok health. A degraded lane records the gap and exits soft (3) so the
  # surrounding cycle proceeds with primary sources rather than failing.
  if ! cmd_doctor; then
    log "---"
    log "social-discovery lane unavailable for '${source}'. Recording the gap and exiting soft."
    {
      printf 'lane: x-social-discovery\n'
      printf 'source: %s\n' "$source"
      printf 'window: %s..%s\n' "$start" "$end"
      printf 'status: unavailable\n'
      printf 'reason: hermes/grok preflight failed (see doctor output above)\n'
      printf 'observed_at: %s\n' "$today"
    } > "${run_dir}/harvest/${source}.UNAVAILABLE.md"
    return 3
  fi

  local prompt out
  prompt="$(render_prompt "$source" "$start" "$end")"
  log "driving Hermes (Grok) to dig X for '${source}' [${start}..${end}] -- this can take a few minutes"
  if ! out="$(run_oneshot "$prompt")" || [[ -z "$out" ]]; then
    log "harvest returned nothing (timeout, refusal, or error). Recording the gap."
    printf 'lane: x-social-discovery\nsource: %s\nwindow: %s..%s\nstatus: empty\nobserved_at: %s\n' \
      "$source" "$start" "$end" "$today" > "${run_dir}/harvest/${source}.UNAVAILABLE.md"
    return 3
  fi
  printf '%s\n' "$out" > "${run_dir}/harvest/${source}.raw.md"

  log "wrote ${run_dir}/harvest/${source}.raw.md"
  log "NEXT: run the cross-check pass in docs/x-social-harvest-workflow.md. Keep only"
  log "      public post URLs with resolved dates; mark product/version claims"
  log "      needs_primary_crosscheck. Nothing here is a receipt until a source clears it."
}

usage() {
  sed -n '17,20p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'
}

main() {
  local sub="${1:-help}"
  shift || true
  case "$sub" in
    doctor)        cmd_doctor "$@" ;;
    harvest)       cmd_harvest "$@" ;;
    help|-h|--help) usage ;;
    *) die "unknown subcommand '${sub}' (try: doctor | harvest | help)" ;;
  esac
}

main "$@"
