---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-pi-coding-agent-agent-reset-wiped-transcript-and-runtime-state-mid-run-it-now-rejects
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/pull/7717
    precision: merged_pr
---
# 2026-08-10-pi-coding-agent-agent-reset-wiped-transcript-and-runtime-state-mid-run-it-now-rejects

`Agent.reset()` wiped transcript and runtime state mid-run; it now rejects until idle.

Calling `Agent.reset()` while a run was in flight cleared the transcript and runtime state underneath the active turn. It now rejects until the agent is idle. Contributed by @wesleyzhangwq.

Channel: tagged-release. Ancestry: Commit 1532c999 ("fix(agent): reject reset during active runs (#7717)", 2026-08-06T15:12:25Z) appears in the commit list from `gh api repos/earendil-works/pi/compare/v0.83.0...v0.84.2`, after the v0.84.0 tag commit a5f43bf8 and before the v0.84.1 tag. Listed under Fixed in the v0.84.1 release body. v0.84.1 is a stable tag (prerelease=false).

Operator consequence: Upgrade if you embed Pi via the SDK and reset agents programmatically  --  for example a long-lived server that recycles an agent between requests. The old behaviour corrupted state silently rather than erroring, so the damage surfaced later as an inexplicably empty or truncated transcript. Callers now get a rejection they can await on instead.

## Receipt
- https://github.com/earendil-works/pi/pull/7717
