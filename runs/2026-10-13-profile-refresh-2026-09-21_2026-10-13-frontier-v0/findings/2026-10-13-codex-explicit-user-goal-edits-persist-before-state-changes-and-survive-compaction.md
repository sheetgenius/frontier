---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-explicit-user-goal-edits-persist-before-state-changes-and-survive-compaction
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/de020167989fde4937204a064ea2fedd54f3c931
    precision: commit
---
# 2026-10-13-codex-explicit-user-goal-edits-persist-before-state-changes-and-survive-compaction

Explicit user goal edits persist before state changes and survive compaction. Thread goal set and clear requests accept user or automatic origin. Explicit user edits and clears persist as user instructions before goal state changes, including unloaded threads and concurrent compaction. Automatic or omitted origins supply no user authorization; recording failure leaves state unchanged.

Channel: tagged-release. Half: both. Date: 2026-10-07 (0.161.0).

Operator consequence: Embedders should set origin deliberately, retain failure handling and test unloaded-thread edits during compaction on 0.161.0 or later. Machine-generated goal mutations must not silently become user authority.

## Receipt
- https://github.com/openai/codex/commit/de020167989fde4937204a064ea2fedd54f3c931
