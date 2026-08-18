---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-pi-coding-agent-the-v0-84-0-streaming-rewrite-dropped-cumulative-usage-from-json-and
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/pull/7982
    precision: merged_pr
---
# 2026-08-17-pi-coding-agent-the-v0-84-0-streaming-rewrite-dropped-cumulative-usage-from-json-and

The v0.84.0 streaming rewrite dropped cumulative usage from JSON and RPC events for eight days.

"Fixed JSON and RPC `message_update` events dropping cumulative usage during streaming." When v0.84.0 stripped the cumulative `message` and `assistantMessageEvent.partial` fields to kill the quadratic output problem, it also took running usage figures with them. From v0.84.0 (2026-08-06) through v0.84.1 to the v0.84.2 fix (2026-08-14), clients reading token usage off the streaming event feed saw nothing until the turn completed. The same release also fixed `pi.sendMessage(..., { triggerTurn: false })` steering an active run instead of only recording the custom message (PR #8022, @cristinaponcela), and custom system prompts concatenating the working directory with later appended prompt content (PR #7887, @distributedlock).

Channel: tagged-release. Ancestry: Listed under Fixed in the v0.84.2 release body, referencing PR #7982 by @christianklotz. v0.84.2 is a stable tag at sha 914cf1472e715297caa30db4b9535d534a9eb718 (gh api repos/earendil-works/pi/tags), prerelease=false and draft=false per gh api repos/earendil-works/pi/releases, published 2026-08-14T10:14:32Z. The regression it repairs was introduced by the v0.84.0 `message_update` change (a4475344, ancestor of v0.84.0 per the compare above).

Operator consequence: Upgrade to 0.84.2 and skip 0.84.0/0.84.1 if you meter tokens off the stream. This is the honest shape of the breaking change above: a fix for a real OOM shipped with a collateral gap in the same event, caught by an outside contributor eight days later. If you built cost dashboards or budget cutoffs on streaming usage and upgraded to 0.84.0 or 0.84.1, your numbers were blank mid-turn, not wrong  --  but a budget guard that reads zero does not fire.

## Receipt
- https://github.com/earendil-works/pi/pull/7982
