---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-eve-eve-0-30-7-adds-experimental-persistent-subagent-sessions-so-delegated
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.30.7
    precision: github_release
---
# 2026-08-10-eve-eve-0-30-7-adds-experimental-persistent-subagent-sessions-so-delegated

eve 0.30.7 adds experimental persistent subagent sessions, so delegated children park instead of terminating.

Behind `experimental.subagentPersistentSessions`, opted-in agents keep delegated children alive after they answer. Each child is owned by a lifecycle handle, settles every turn with an explicit outcome carrying its per-turn token usage, and parks instead of terminating. The parent's subagent tools gain an `agentId` parameter to continue a parked child, discoverable from a per-model-call `<agents>` system injection that lists only parked (resumable) children. An omitted, empty, or unknown `agentId` starts a fresh child; continuing a child that is still starting or working fails with `AGENT_BUSY`. Without the opt-in, children keep running as one-shot tasks. A companion fix stops cancellation from leaking child handles as permanently `running`  --  the cancellation epilogue now parks each abandoned child as "(cancelled)" so it stays resumable.

Channel: tagged-release. Ancestry: `gh api repos/vercel/eve/releases` lists eve@0.30.7 published 2026-08-05T17:29:19Z, prerelease=false, draft=false. The feature is gated behind an `experimental.subagentPersistentSessions` flag in `agent.ts`  --  that is a runtime opt-in inside a stable tag, not a prerelease channel, so the channel is tagged-release and the experimental status belongs in the finding text rather than in the channel.

Operator consequence: Try this if you are paying to re-establish a subagent's context on every delegation. The interesting part for operators is not the resumption, it is that each child settles every turn with explicit per-turn token usage  --  that is the accounting hook you need to answer "which subagent is costing me money" without instrumenting it yourself. Do not build a production dependency on it: it is a named experimental flag on a framework that shipped ten minor versions in fourteen days, and the `<agents>` injection it relies on was itself reworked one release later in 0.31.0 to stop breaking parent resume on models that reject assistant-final requests.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.30.7
