#!/usr/bin/env bash
#
# capture.sh -- the capture pass. Rule 4, operationally.
#
# Takes URLs and nothing else. Returns the exact text of each post.
#
# THE POINT OF THIS SCRIPT IS WHAT IT DOES NOT RECEIVE. The discovery sweep
# already produced a gist of every post, and that gist must never reach this
# pass. A fetcher told what it expects to find will find it: across 302 posts a
# single harvest silently expanded t.co links, dropped trailing hashtags, and
# truncated tails, none of it fabrication and none of it visible without a
# second look. So the input here is a bare URL list, the operator cannot pass
# expected text even by accident, and the copy this returns is the only one
# that may be stored as `verbatim`.
#
# A post that cannot be re-fetched is DROPPED, never guessed at.
#
# Usage:
#   ops/grok/capture.sh <out-file> <url> [<url>...]
#   ops/grok/capture.sh <out-file> --from-file <file-of-urls>
set -uo pipefail

GROK_BIN="${GROK_BIN:-grok}"
MODEL="${GROK_MODEL:-grok-4.6}"
EFFORT="${GROK_EFFORT:-high}"

out="${1:?usage: capture.sh <out-file> <url>...}"; shift
if [ "${1:-}" = "--from-file" ]; then
  urls="$(grep -E '^https://x\.com/[^/]+/status/[0-9]+$' "${2:?url file}")"
else
  urls="$(printf '%s\n' "$@")"
fi
[ -n "$urls" ] || { echo "error: no valid x.com status URLs given" >&2; exit 2; }

count="$(printf '%s\n' "$urls" | wc -l | tr -d ' ')"
echo "capturing $count posts (no expected text supplied)" >&2

prompt="Retrieve each X post at the URLs listed below and return its text exactly as published.

Return one block per URL, in this format and nothing else:

===CAPTURE===
url: <the url>
handle: <the posting account handle, including the @>
display_name: <the account display name exactly as it appears; if you cannot read it, write UNKNOWN>
posted_at: <ISO 8601 date, YYYY-MM-DD>
VERBATIM_BEGIN
<the complete post text, character for character>
VERBATIM_END
===END===

Rules for the text between the fences:
- Reproduce it exactly. Do not fix spelling, grammar, capitalisation or punctuation. Do not convert straight quotes to curly ones or the reverse.
- Preserve line breaks, emoji, hashtags and @ mentions exactly where they appear, including trailing ones.
- Do not expand, shorten, or resolve any link. If the post shows a t.co link, reproduce the t.co link.
- Do not add ellipses and do not truncate. If the post is long, return all of it.
- Do not translate. A non-English post stays in its own language.
- Do not include quoted-tweet text, reply context, or thread continuations. Only this post's own text.
- If you cannot retrieve a post, emit its block with UNAVAILABLE on a single line between the fences. Never reconstruct one from memory.

URLs:
$urls"

if ! raw="$("$GROK_BIN" -p "$prompt" -m "$MODEL" --effort "$EFFORT" --max-turns 40 2>&1)"; then
  echo "capture failed" >&2; exit 3
fi
printf '%s\n' "$raw" > "$out"
got="$(grep -c '===CAPTURE===' "$out" 2>/dev/null || echo 0)"
un="$(grep -c 'UNAVAILABLE' "$out" 2>/dev/null || echo 0)"
echo "wrote $out: $got blocks, $un unavailable" >&2
