#!/usr/bin/env bash
#
# grok-harvest.sh -- run the X social-discovery lane of a Bitter Frontier cycle
# by driving the Hermes agent (with its web/X search tools) on Grok, using a
# SuperGrok / X Premium+ subscription through Hermes' xai-oauth provider.
#
# DISCOVERY ONLY. Everything this produces is a candidate lead, never a receipt.
# No lead may become a finding, signal, digest, or profile without independent
# primary-source verification against the source contract. See
# docs/hermes-grok-harvest-setup.md and docs/x-social-harvest-workflow.md.
#
# Secrets never touch this repo. Hermes manages the xai-oauth token under
# ~/.hermes/. This script does not read, write, log, or print it.
#
# Usage:
#   ops/hermes/grok-harvest.sh doctor                       preflight + allowlist probe
#   ops/hermes/grok-harvest.sh gateway                      start the Hermes agent API server
#   ops/hermes/grok-harvest.sh models                       list the OAuth model catalog
#   ops/hermes/grok-harvest.sh harvest <source-id> [<start> <end>]
#
# Exit codes: 0 ok, 2 misconfigured, 3 degraded (Grok/allowlist unavailable).

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
GATEWAY_URL="${HERMES_GATEWAY_URL:-http://127.0.0.1:8642}"
CHAT_ENDPOINT="${GATEWAY_URL}/v1/chat/completions"
MODELS_ENDPOINT="${GATEWAY_URL}/v1/models"
# Any non-empty bearer; the gateway attaches the real subscription credentials
# itself. This is not a secret and must never be one.
GATEWAY_BEARER="${HERMES_GATEWAY_BEARER:-local-dev}"

# The OAuth (subscription) catalog lags the metered API. Grok 4.5 is API-only and
# will NOT appear here; do not hardcode it. Prefer the newest model the catalog
# actually exposes, falling back down this list.
MODEL_PREFERENCE=(
  grok-4.20-multi-agent-0309
  grok-4.20-0309-reasoning
  grok-4.20-0309-non-reasoning
  grok-build-0.1
  grok-4.3
)

log()  { printf '%s\n' "$*" >&2; }
die()  { printf 'error: %s\n' "$*" >&2; exit 2; }

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || die "$1 not on PATH.${2:+ $2}"
}

require_hermes() {
  require_cmd hermes "Install Hermes Agent and run 'hermes auth add xai-oauth'. See docs/hermes-grok-harvest-setup.md."
}

# Probe the gateway with a one-token completion and classify the outcome.
# Echoes ok | degraded | unreachable | error:<code>; never exits on its own.
probe_grok() {
  if ! curl -fsS -m 5 "$MODELS_ENDPOINT" -H "Authorization: Bearer ${GATEWAY_BEARER}" >/dev/null 2>&1; then
    echo "unreachable"; return 0
  fi
  local code
  code="$(curl -s -o /dev/null -w '%{http_code}' -m 30 "$CHAT_ENDPOINT" \
    -H "Authorization: Bearer ${GATEWAY_BEARER}" -H 'Content-Type: application/json' \
    -d '{"model":"hermes-agent","max_tokens":1,"messages":[{"role":"user","content":"ping"}]}' 2>/dev/null || true)"
  case "$code" in
    200) echo "ok" ;;
    403) echo "degraded" ;;
    *)   echo "error:${code}" ;;
  esac
}

cmd_doctor() {
  require_hermes
  log "hermes:  $(command -v hermes)"

  local cfg="${HOME}/.hermes/config.yaml"
  if [[ -f "$cfg" ]]; then
    log "config:  ${cfg} present"
  else
    log "config:  ${cfg} MISSING -- run 'hermes auth add xai-oauth', then 'hermes config set model.provider xai-oauth'"
  fi

  local status
  status="$(probe_grok)"
  case "$status" in
    ok)
      log "gateway: up at ${GATEWAY_URL}"
      log "grok:    OK (one-token probe returned 200)"
      return 0 ;;
    unreachable)
      log "gateway: NOT reachable at ${GATEWAY_URL} -- start it with '$0 gateway'"
      return 3 ;;
    degraded)
      log "gateway: up at ${GATEWAY_URL}"
      log "grok:    DEGRADED -- HTTP 403 from the xAI OAuth allowlist."
      log "         A valid SuperGrok / X Premium+ subscription can still be refused on"
      log "         this surface. Skip the social lane this cycle; harvest primary sources only."
      return 3 ;;
    error:*)
      log "gateway: up at ${GATEWAY_URL}"
      log "grok:    probe returned HTTP ${status#error:} -- check 'hermes gateway' logs and auth."
      return 2 ;;
  esac
}

cmd_models() {
  require_cmd curl
  curl -fsS -m 10 "$MODELS_ENDPOINT" -H "Authorization: Bearer ${GATEWAY_BEARER}" \
    || die "could not reach ${MODELS_ENDPOINT} -- is the gateway running ('$0 gateway')?"
}

cmd_gateway() {
  require_hermes
  log "starting the Hermes agent API server (full agent + web/X search tools) on ${GATEWAY_URL}"
  log "model/provider comes from ~/.hermes/config.yaml; the request 'model' field is ignored"
  exec hermes gateway
}

# Emit the harvest instruction for one source. The agent starts from the source
# contract's official surfaces and returns the workflow doc's claim-record fields.
render_prompt() {
  local source="$1" start="$2" end="$3"
  cat <<EOF
You are a scout for Bitter Frontier's X social-discovery lane. This is DISCOVERY
ONLY: you produce candidate leads, never receipts. Nothing you return may be
stated as a verified fact.

Source: ${source} (its contract is sources/${source}.yml in the repo you were
started in; read it first so you begin from official surfaces and its accepted /
rejected evidence rules).

Window: ${start} to ${end}.

Search public X/Twitter for posts in the window that may reveal maintainer
intent, adoption signals, user pain, ecosystem tension, benchmark discourse, or
unverified feature chatter about this source. Use your web and X search tools.

For every item, output one YAML record with exactly these fields:
  claim_id, source, claim, primary_url, author, observed_at, event_date,
  date_precision (day|month_only|year_only|unknown), date_note, evidence_kind,
  channel (x.com), status (candidate|needs_primary_crosscheck|single-source-unconfirmed),
  crosscheck_status (needs_primary_crosscheck by default), release_channel,
  operator_consequence (cautious; a lead to investigate, not an instruction),
  notes.

Rules:
- Persist exact public post URLs, never paraphrased search snippets.
- Resolve each post date to full ISO YYYY-MM-DD when possible; otherwise set
  date_precision and explain in date_note.
- Mark every product or version claim needs_primary_crosscheck.
- Reputational or conduct claims about named people or organizations stay as
  journal notes unless a direct primary post supports the exact claim.
- Do not tell an operator to upgrade, migrate, or trust anything.
Return only the YAML records.
EOF
}

cmd_harvest() {
  require_hermes
  require_cmd curl
  require_cmd jq
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
  # surrounding cycle can proceed with primary sources rather than fail.
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

  local prompt_file="${run_dir}/harvest/${source}.prompt.txt"
  render_prompt "$source" "$start" "$end" > "$prompt_file"

  log "driving Hermes (Grok) to harvest X discovery signals for '${source}' [${start}..${end}]"
  local payload
  payload="$(jq -Rs '{model:"hermes-agent", messages:[{role:"user", content:.}]}' < "$prompt_file")"
  curl -fsS -m 900 "$CHAT_ENDPOINT" \
    -H "Authorization: Bearer ${GATEWAY_BEARER}" -H 'Content-Type: application/json' \
    -d "$payload" \
    | jq -r '.choices[0].message.content' \
    > "${run_dir}/harvest/${source}.raw.md"

  log "wrote ${run_dir}/harvest/${source}.raw.md"
  log "NEXT: run the cross-check pass in docs/x-social-harvest-workflow.md. Keep only"
  log "      public post URLs with resolved dates; mark product/version claims"
  log "      needs_primary_crosscheck. Nothing here is a receipt until a source clears it."
}

main() {
  local sub="${1:-help}"
  shift || true
  case "$sub" in
    doctor)  cmd_doctor "$@" ;;
    gateway) cmd_gateway "$@" ;;
    models)  cmd_models "$@" ;;
    harvest) cmd_harvest "$@" ;;
    help|-h|--help)
      sed -n '2,20p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'
      ;;
    *) die "unknown subcommand '${sub}' (try: doctor | gateway | models | harvest | help)" ;;
  esac
}

main "$@"
