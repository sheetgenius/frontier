---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-per-model-compaction-numbers-became-scaled-bases-instead-of-exact-triggers
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/a5e542daa2e648397957f2c987aa3b3be9cf1309
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L791-L808
    precision: tagged_commit_file
---
# 2026-10-13-omp-per-model-compaction-numbers-became-scaled-bases-instead-of-exact-triggers

Per-model compaction numbers became scaled bases instead of exact triggers. A numeric compaction.modelThresholds entry now supplies a base the configured policy scales, rather than an exact compaction trigger. At v18.10.4 f400k preserves an exact 400K trigger subject to the model-window cap. Per-agent numeric overrides remain exact. A base above the standard model window can opt into extended context and its pricing even if the scaled trigger lands inside the standard window.

Channel: tagged-release. Half: both. Date: 2026-10-10 (v18.8.8).

Operator consequence: Inspect existing numeric model limits and the /models preview. Use the f form for an exact trigger, and keep bases at or below the standard window or fixed triggers below it when avoiding extended-context rates. Recheck model and agent limits separately.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/a5e542daa2e648397957f2c987aa3b3be9cf1309
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L791-L808
