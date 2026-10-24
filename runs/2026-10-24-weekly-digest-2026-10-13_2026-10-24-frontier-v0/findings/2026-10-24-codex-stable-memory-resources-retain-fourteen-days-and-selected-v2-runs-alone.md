---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-stable-memory-resources-retain-fourteen-days-and-selected-v2-runs-alone
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/c0cfbfbb989ff80c4027c8ea86a15d411d1d5214
    precision: commit
  - url: https://github.com/openai/codex/commit/71ab2ea77bc7fca41bb641e8a131bcba7b304a21
    precision: commit
---
# 2026-10-24-codex-stable-memory-resources-retain-fourteen-days-and-selected-v2-runs-alone

Stable memory resources retain fourteen days and selected v2 runs alone. [Memory-extension resources remain for 14 days before pruning, up from 7](https://github.com/openai/codex/commit/c0cfbfbb989ff80c4027c8ea86a15d411d1d5214). When v2 is selected, [only its pipeline runs even if dual-write is enabled](https://github.com/openai/codex/commit/71ab2ea77bc7fca41bb641e8a131bcba7b304a21); dual-write prepares v2 while v1 remains selected. This does not make v2 the stable default for every fresh profile.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Audit resource custody and pruning against fourteen days, then inspect the selected memory version before budgeting dual-write work. Retention and version migration need separate acceptance checks.

## Receipt
- https://github.com/openai/codex/commit/c0cfbfbb989ff80c4027c8ea86a15d411d1d5214
- https://github.com/openai/codex/commit/71ab2ea77bc7fca41bb641e8a131bcba7b304a21
