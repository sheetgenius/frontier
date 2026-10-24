---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-plugin-hook-delivery-failures-refuse-actions-and-missing-agent-hook-models-fall-back
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.299
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.300
    precision: github_release
---
# 2026-10-24-claude-code-plugin-hook-delivery-failures-refuse-actions-and-missing-agent-hook-models-fall-back

Plugin hook delivery failures refuse actions and missing agent-hook models fall back. 299 refuses blockable actions when a plugin hook cannot receive the event or return its answer; if a tool already ran, its result is withheld. 300 fixes agent hooks ignoring their configured model, resolves model aliases and falls back to the caller's model when the selected model is unavailable instead of allowing the action.

Channel: tagged-release. Half: defect. Date: 2026-10-14.

Operator consequence: Test malformed hook inputs, unreadable results and unavailable models as well as Windows shell failures. A withheld result is not rollback of a completed side effect. These specific repairs do not change the general onFailure default for command or HTTP hooks.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.299
- https://github.com/anthropics/claude-code/releases/tag/v2.1.300
