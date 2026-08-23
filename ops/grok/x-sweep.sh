#!/usr/bin/env bash
#
# x-sweep.sh -- the X social-discovery lane of a Bitter Frontier cycle.
#
# Drives the `grok` CLI directly against the grok.com subscription (OIDC, not a
# metered xAI API key) instead of routing through Hermes. Same lane, same rule,
# one less moving part. See ops/hermes/grok-harvest.sh for the superseded path
# and docs/hermes-grok-harvest-setup.md for why that one existed.
#
# DISCOVERY ONLY. Everything this produces is a candidate lead, never a receipt.
# No lead becomes a finding, signal, digest, or profile without independent
# primary-source verification against the source contract.
#
# It is deliberately impossible to quote from this lane's output. The schema has
# no verbatim field, so a fragment cannot be copied out of a sweep even by
# accident: a post that will be quoted must be re-fetched by URL in a separate
# capture pass that is given no expected text to anchor on. That is rule 4, and
# encoding it in the schema is cheaper than remembering it.
#
# Usage:
#   ops/grok/x-sweep.sh doctor
#   ops/grok/x-sweep.sh banter <start> <end> <out-dir> [extra focus...]
#   ops/grok/x-sweep.sh source <source-id> <start> <end> <out-dir>
#   ops/grok/x-sweep.sh topic <slug> <start> <end> <out-dir> <topic sentence...>
#
# Exit codes: 0 ok, 2 misconfigured, 3 degraded (subscription unavailable).
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
GROK_BIN="${GROK_BIN:-grok}"
MODEL="${GROK_MODEL:-grok-4.6}"
EFFORT="${GROK_EFFORT:-xhigh}"

log() { printf '%s\n' "$*" >&2; }
die() { log "error: $*"; exit 2; }

# No JSON Schema here, deliberately. Constraining the output with --json-schema
# made the model emit conforming JSON on its first turn without ever running a
# search: one turn, zero posts, a perfectly well-formed empty answer. The record
# format below is enforced by prompt and parsed afterwards, which keeps the
# search loop alive. Enums are pinned with their exact allowed values because an
# unpinned enum in this lane once produced eight invented variants of one field.
RECORD_FORMAT='Return ONLY records in exactly this format, nothing before or after:

===POST===
handle: @example
post_url: https://x.com/example/status/1234567890
event_date: 2026-08-11
date_precision: day            # exactly one of: day, month, unknown
kind: voice                    # exactly one of: claim, voice
stance: criticism              # exactly one of: praise, criticism, frustration, joke, comparison, question, announcement, neutral
frameworks: codex, claude-code # watchlist ids this post is about, comma separated
author_is_maintainer: false    # exactly one of: true, false
cuts_against_consensus: true   # exactly one of: true, false
needs_primary_crosscheck: true # exactly one of: true, false; ALWAYS true when kind is claim
gist: one or two sentences in YOUR OWN WORDS describing what they said
why_it_matters: one sentence on what it would change for an operator, or why the argument is worth reporting
===END===

After the last record, emit one line beginning COVERAGE_NOTE: followed by what
you searched, what you could not reach, and where this sweep is thin.

There is no verbatim field and you must not include one. Do not reproduce post
text. The exact wording is captured later by re-fetching the URL.'


RULES='You are running the X social-discovery lane for Bitter Frontier, a receipted editorial publication about coding agents and their harnesses.

DISCOVERY ONLY. You are finding leads, not evidence. Never assert a product fact; report that somebody said it.

HARD RULES:
- Every post MUST have a real, public, resolvable x.com status URL. If you cannot produce the URL, drop the post. Never construct, guess, or pattern-match a status id.
- Do NOT quote post text. Give a gist in your own words. Exact wording is captured later by re-fetching the URL. A gist that reads like a quotation is a bug.
- Resolve each date to a full ISO YYYY-MM-DD where possible; otherwise set date_precision to month or unknown and say so.
- kind=claim means the post asserts something about a product (a version, a feature, a defect). kind=voice means it is somebody take, framing, frustration or joke. Set needs_primary_crosscheck true for EVERY claim post, including posts from official accounts.
- Set author_is_maintainer true when the author works on the project they are posting about.
- Set cuts_against_consensus true when the post argues against the prevailing take. These are the most valuable posts in the sweep and you should go looking for them specifically.
- Prefer posts that carry a reason over posts that carry a reaction. Engagement count is not a selection criterion and popularity is not signal.
- Do not include posts about the publication itself, and do not include marketing threads with no argument in them.
- In coverage_note, say plainly what you searched, what you could not reach, and where the sweep is likely thin. A recorded gap is worth more than a padded list.'

cmd_doctor() {
  command -v "$GROK_BIN" >/dev/null 2>&1 || die "grok CLI not found (set GROK_BIN)"
  local out
  if ! out="$("$GROK_BIN" -p 'reply with exactly: OK' -m "$MODEL" --effort low 2>&1)"; then
    log "grok: probe failed"; log "$out"; return 3
  fi
  printf 'grok:    %s\n' "$(command -v "$GROK_BIN")"
  printf 'model:   %s (effort %s)\n' "$MODEL" "$EFFORT"
  printf 'probe:   %s\n' "$(printf '%s' "$out" | tr -d '\n' | tail -c 60)"
  return 0
}

run_sweep() {
  local prompt="$1" out_file="$2"
  local raw
  if ! raw="$("$GROK_BIN" -p "$prompt" -m "$MODEL" --effort "$EFFORT" --max-turns 40 2>&1)"; then
    log "sweep failed (subscription refusal, timeout, or error). Recording the gap."
    printf 'status: unavailable\nobserved_at: %s\nnote: grok call failed\n' "$(date -u +%Y-%m-%d)" > "$out_file"
    return 3
  fi
  printf '%s\n' "$raw" > "$out_file"
  log "wrote $out_file"
}

cmd_banter() {
  local start="${1:?start}" end="${2:?end}" out_dir="${3:?out dir}"; shift 3
  local focus="${*:-}"
  mkdir -p "$out_dir"
  local names
  names="$(grep -E '^  - id:' "$REPO_ROOT/sources/index.yml" | sed 's/.*id: //' | paste -sd', ' -)"
  run_sweep "$RULES

$RECORD_FORMAT

WINDOW: $start to $end. Only posts inside it.

TASK: sweep X for the actual conversation about these coding agents and harnesses: $names.

Go after the substance of the argument, not the announcements. What are practitioners saying that carries a reason? Prioritise, in this order:
1. Posts that cut against the prevailing take on a tool.
2. Maintainers and contributors arguing about design decisions, in public, with each other or with users.
3. Operators reporting concrete friction: an approval that did not hold, a channel that shipped the wrong thing, a migration that hurt.
4. Sharp comparisons between two named harnesses that give a reason rather than a preference.
5. Genuinely funny or barbed takes that make a real point. Wit that carries an argument counts; a dunk with nothing under it does not.
$( [ -n \"\$focus\" ] && printf 'ADDITIONAL FOCUS: %s' \"\$focus\" )

Aim for 25 to 40 posts with real spread across projects and across opinions. A sweep that only shows one side of an argument is a worse artifact than one that shows the argument." "$out_dir/banter.raw.md"
}

cmd_source() {
  local src="${1:?source id}" start="${2:?start}" end="${3:?end}" out_dir="${4:?out dir}"
  [ -f "$REPO_ROOT/sources/$src.yml" ] || die "unknown source '$src': sources/$src.yml not found"
  mkdir -p "$out_dir"
  local repo label
  label="$(grep -E '^label:' "$REPO_ROOT/sources/$src.yml" | head -1 | sed 's/^label: *//')"
  repo="$(grep -E 'url: https://github.com/' "$REPO_ROOT/sources/$src.yml" | head -1 | sed 's/.*url: *//')"
  run_sweep "$RULES

$RECORD_FORMAT

WINDOW: $start to $end. Only posts inside it.

TASK: sweep X for the conversation about $label (watchlist id: $src, canonical repo: $repo).

IDENTITY CHECK FIRST: several watched projects share a name with something else. Only include posts about the project at that canonical repo. If a post is about a different project with a similar name, drop it and say so in coverage_note.

Cover both what its own maintainers said and what its users said, and include the critical posts as well as the enthusiastic ones." "$out_dir/$src.raw.md"
}

# topic: chase one named thread of conversation across the whole window rather
# than one project or the whole watchlist. For "there was talk on X of ..."
# leads. Same rules, same record format, same firewall: leads, not receipts.
cmd_topic() {
  local slug="${1:?slug}" start="${2:?start}" end="${3:?end}" out_dir="${4:?out dir}"; shift 4
  local topic="${*:?topic sentence}"
  mkdir -p "$out_dir"
  local names
  names="$(grep -E '^  - id:' "$REPO_ROOT/sources/index.yml" | sed 's/.*id: //' | paste -sd', ' -)"
  run_sweep "$RULES

$RECORD_FORMAT

WINDOW: $start to $end. Only posts inside it. If the thread clearly began before the window, include the originating post and say so in COVERAGE_NOTE.

TASK: chase one specific thread of conversation on X and report everything substantive in it.

THE THREAD: $topic

Watchlist ids for the frameworks field: $names.

How to work it:
1. Find the originating post or posts: who first said it, and in what words (gist only, no quoting).
2. Follow the replies, quote-posts, and follow-ups from the people named and the people arguing with them. Maintainers of the projects involved are the priority; set author_is_maintainer accordingly.
3. Separate what was claimed (a plan, a repo, a branch, a release, a benchmark) from what was opined. Every claim gets needs_primary_crosscheck true. If anyone linked a repo, commit, PR, branch, or document, put that URL in why_it_matters so it can be verified against the primary source.
4. Look hard for the counter-read: people saying it is not happening, is misdescribed, is a different project, or does not matter. Those get cuts_against_consensus true.
5. Check identity: make sure the people and projects are the ones on the watchlist and not a similarly named fork, org, or model. Say what you ruled out.
6. Report a timeline in COVERAGE_NOTE: first sighting, how it spread, what it turned into, and what you could not reach.

Aim for every substantive post in the thread, not a sample. Ten good records beat thirty thin ones." "$out_dir/topic-$slug.raw.md"
}

case "${1:-help}" in
  doctor) cmd_doctor ;;
  banter) shift; cmd_banter "$@" ;;
  source) shift; cmd_source "$@" ;;
  topic)  shift; cmd_topic "$@" ;;
  *) sed -n '20,26p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//' ;;
esac
