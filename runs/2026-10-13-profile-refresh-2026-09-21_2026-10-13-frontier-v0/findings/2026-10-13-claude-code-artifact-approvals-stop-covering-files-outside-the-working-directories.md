---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-artifact-approvals-stop-covering-files-outside-the-working-directories
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L948
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L951
    precision: tagged_commit_file
---
# 2026-10-13-claude-code-artifact-approvals-stop-covering-files-outside-the-working-directories

Artifact approvals stop covering files outside the working directories. Remembered Artifact approval no longer authorizes publication outside working directories. Approval in another mode no longer skips auto mode's review of uploads or another person's artifact reads.

Channel: tagged-release (on stable from 2026-09-30). Half: defect. Date: 2026-09-29 (2.1.285).

Operator consequence: Re-check retained Artifact allow rules and their directories. Add a legitimate publishing folder with `--add-dir`; confirm an outside folder prompts. Test entry into auto mode after prior approval so a saved answer does not substitute for the new review.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L948
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L951
