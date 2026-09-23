---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-hermes-agent-approval-gate-integrity-cluster-in-v2026-9-21-breaker-attribution-smart-approval-silence
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/cc295509b412f76785ecf548a7cf0a7d2a4e285f
    precision: commit
---
# 2026-09-21-hermes-agent-approval-gate-integrity-cluster-in-v2026-9-21-breaker-attribution-smart-approval-silence

Approval-gate integrity cluster in v2026.9.21: breaker, attribution, smart-approval silence, new flagged patterns. (a) The tirith command-scanner circuit breaker latched open forever after consecutive spawn failures, so one transient failure meant every later command skipped scanning until restart. It now half-opens after a TTL with a single probe. (b) An approval prompt that was withdrawn (parent delegation ended, /stop, turn end) or never delivered (CLI callback raised, input interrupted) used to be reported as "User denied", so the parent agent reasoned about a refusal that never happened. It is now outcome `cancelled` with a cause; still fail-closed. (c) The smart-approval guardian had no explicit timeout (a stalled provider froze a turn for 62 minutes with no log) and an empty 200 answer mapped silently to ESCALATE. Both now log at WARNING. On any guardian failure the verdict is ESCALATE to the human or pattern gate, not approve. (d) Newly flagged: shell expansions that could synthesize destructive find flags, and `bun`/`deno` inline eval.

Channel: tagged-release (v2026.8.27 for the guardian timeout; v2026.9.21 for the rest). Half: defect. Date: 2026-08-27 to 2026-09-21.

Operator consequence: On v2026.9.14 and earlier, a Hermes that ever logged a tirith crash may have stopped scanning silently; restart or upgrade. If you parse approval hook outcomes, add `cancelled` as a distinct value. If you run smart mode on a reasoning model as the guardian, watch WARNING logs for empty answers; each one is a human prompt you will be asked to answer.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/cc295509b412f76785ecf548a7cf0a7d2a4e285f
