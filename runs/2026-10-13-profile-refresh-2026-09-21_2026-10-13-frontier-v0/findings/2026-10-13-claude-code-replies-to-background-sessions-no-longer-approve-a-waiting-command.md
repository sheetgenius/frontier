---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-replies-to-background-sessions-no-longer-approve-a-waiting-command
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L969
    precision: tagged_commit_file
---
# 2026-10-13-claude-code-replies-to-background-sessions-no-longer-approve-a-waiting-command

Replies to background sessions no longer approve a waiting command. Text sent to a background agent could be treated as permission for the command it was waiting to run. The fix separates a conversational reply from approval of that pending action.

Channel: tagged-release (on stable from 2026-09-30). Half: defect. Date: 2026-09-29 (2.1.285).

Operator consequence: Update older background-agent pins to 2.1.285 or later. Test a reply while a harmless command awaits approval and confirm the command stays pending or denied until deliberately answered. Stable includes the fix.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L969
