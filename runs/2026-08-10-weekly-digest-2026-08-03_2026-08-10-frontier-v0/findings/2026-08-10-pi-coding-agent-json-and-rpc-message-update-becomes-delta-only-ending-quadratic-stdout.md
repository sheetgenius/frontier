---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-pi-coding-agent-json-and-rpc-message-update-becomes-delta-only-ending-quadratic-stdout
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/a4475344fb765850ec5321efe3c67e6f364ead5c
    precision: commit
---
# 2026-08-10-pi-coding-agent-json-and-rpc-message-update-becomes-delta-only-ending-quadratic-stdout

JSON and RPC `message_update` becomes delta-only, ending quadratic stdout growth that OOM-killed agents.

Before this change, every `message_update` event in `--mode json` and `--mode rpc` carried the entire cumulative assistant message twice  --  once as `message`, once as `assistantMessageEvent.partial`  --  and one event was emitted per token delta. Streaming a single large tool call therefore re-serialized all of its arguments on every delta, so stdout grew with the square of the argument size. Issue #7290 documents the measurements: a 19 KB file emitted 165 MB of JSON, a 39 KB file emitted 691 MB, and around 99 KB in one `write` the process exceeded Node's default heap and died with `FATAL ERROR: Reached heap limit`. v0.84.0 removes both cumulative fields; clients must now assemble deltas between `message_start` and `message_end`, with `message_end` authoritative. The v0.84.0 release notes list this under Breaking Changes.

Channel: tagged-release. Ancestry: Commit a4475344fb765850ec5321efe3c67e6f364ead5c ("fix(coding-agent): make JSON streaming output linear (#7394)", authored 2026-08-03T16:33:22Z). `gh api repos/earendil-works/pi/compare/v0.84.0...a4475344` returned status=behind, behind_by=139 (ancestor of the v0.84.0 tag). `gh api repos/earendil-works/pi/compare/v0.83.0...a4475344` returned status=ahead, ahead_by=202 (not in v0.83.0). v0.84.0 is a stable, non-prerelease tag: releases API shows prerelease=false, draft=false, published 2026-08-06T11:07:05Z.

Operator consequence: Adapt, then upgrade. Anyone driving Pi non-interactively  --  `--mode json`, `--mode rpc`, or any wrapper parsing its event stream  --  must rewrite the client to accumulate deltas; code that read `message_update.message` or `assistantMessageEvent.partial` now gets nothing. In exchange, long file writes under automation stop dying at ~99 KB. If you run Pi headless and have seen unexplained heap-limit crashes on large writes, this is the cause and 0.84.0 is the fix.

## Receipt
- https://github.com/earendil-works/pi/commit/a4475344fb765850ec5321efe3c67e6f364ead5c
