---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-direct-subagents-gain-visible-working-state-and-an-independent-stop
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/f4700b4256a9bd88d2a29d817961f8abaa919554
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/tools/call_subordinate.py
    precision: tagged_commit_file
---
# 2026-10-13-agent-zero-direct-subagents-gain-visible-working-state-and-an-independent-stop

Direct subagents gain visible working state and an independent Stop. Direct delegation now runs through the child's own context task, so child chats show Working/Paused and can be stopped independently. Caller cancellation kills the child task; stopping only the child produces a recoverable error for the parent. This extends v2.13's deeper worker rendering with a usable intervention point.

Channel: tagged-release. Half: capability. Date: 2026-10-13 (first stable; implementation 2026-09-30T13:55:03Z).

Operator consequence: Use the child Stop when one delegated worker needs intervention instead of cancelling the whole parent run. Check cancellation semantics in a bounded task before relying on them for costly work. The attention gain is targeted intervention; the record contains no measured end-to-end throughput improvement.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/f4700b4256a9bd88d2a29d817961f8abaa919554
- https://github.com/agent0ai/agent-zero/blob/v2.14/tools/call_subordinate.py
