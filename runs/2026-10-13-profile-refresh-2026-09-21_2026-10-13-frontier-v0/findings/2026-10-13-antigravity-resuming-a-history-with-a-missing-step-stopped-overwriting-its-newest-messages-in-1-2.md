---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-resuming-a-history-with-a-missing-step-stopped-overwriting-its-newest-messages-in-1-2
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.14/CHANGELOG.md?plain=1#L17
    precision: tagged_commit_file
---
# 2026-10-13-antigravity-resuming-a-history-with-a-missing-step-stopped-overwriting-its-newest-messages-in-1-2

Resuming a history with a missing step stopped overwriting its newest messages in 1.2.14. When conversation history contained a missing step after a crash or interrupted write, resuming could hide the most recent steps and let new messages overwrite them. 1.2.14 fixes that path. The note does not promise recovery of steps already overwritten.

Channel: tagged-release. Half: defect. Date: 2026-09-30.

Operator consequence: Upgrade before resuming histories damaged by a crash or interrupted write. Preserve an existing damaged history for inspection before adding messages; the release note establishes a fix to future resume behavior, not restoration of lost audit records.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.14/CHANGELOG.md?plain=1#L17
