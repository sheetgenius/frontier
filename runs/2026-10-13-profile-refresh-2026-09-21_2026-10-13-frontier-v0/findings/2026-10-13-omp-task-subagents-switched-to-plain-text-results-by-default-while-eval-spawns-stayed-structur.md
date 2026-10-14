---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-task-subagents-switched-to-plain-text-results-by-default-while-eval-spawns-stayed-structur
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/3ad2b788d7a078ec79a6962f5c9e690d00bbb268
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/task/settings.ts#L255-L265
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.10.2
    precision: github_release
---
# 2026-10-13-omp-task-subagents-switched-to-plain-text-results-by-default-while-eval-spawns-stayed-structur

Task subagents switched to plain-text results by default, while eval spawns stayed structured. task.structured defaults false: the task tool hides outputSchema/schemaMode, removes schema and yield injection from its children, and returns the child's final assistant message as plain text. Enabling the setting restores validated task-result schemas. Eval agent() and workpool() spawns keep structured results independently.

Channel: tagged-release. Half: both. Date: 2026-10-12 (v18.10.2).

Operator consequence: Enable task.structured explicitly for task consumers requiring schema-validated output; do not assume the same default affects eval spawns. Check consumers before upgrading a fleet.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/3ad2b788d7a078ec79a6962f5c9e690d00bbb268
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/task/settings.ts#L255-L265
- https://github.com/can1357/oh-my-pi/releases/tag/v18.10.2
