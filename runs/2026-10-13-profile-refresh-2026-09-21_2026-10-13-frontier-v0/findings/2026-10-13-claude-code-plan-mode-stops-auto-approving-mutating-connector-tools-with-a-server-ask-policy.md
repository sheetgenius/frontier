---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-plan-mode-stops-auto-approving-mutating-connector-tools-with-a-server-ask-policy
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L418
    precision: tagged_commit_file
---
# 2026-10-13-claude-code-plan-mode-stops-auto-approving-mutating-connector-tools-with-a-server-ask-policy

Plan mode stops auto-approving mutating connector tools with a server ask policy. A plan-mode session could execute a mutating connector call despite a server ask policy when the auto-mode classifier approved it. The fix is on latest only.

Channel: tagged-release (latest only; stable 2.1.287 lacks it). Half: defect. Date: 2026-10-05 (2.1.290).

Operator consequence: Do not use stable's plan mode as proof that a connector cannot mutate outside systems. Where that restriction matters, require 2.1.290+ and test a non-read-only connector with its server ask policy in force.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L418
