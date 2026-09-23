---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-antigravity-settings-json-the-1-1-16-no-overwrite-fix-was-incomplete-1-1-20-closes-the-startup-path
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.1.20/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-antigravity-settings-json-the-1-1-16-no-overwrite-fix-was-incomplete-1-1-20-closes-the-startup-path

settings.json: the 1.1.16 no-overwrite fix was incomplete; 1.1.20 closes the startup path. Parent recorded 1.1.16 as the fix for "a parse failure silently reverts every setting." 1.1.16 through 1.1.19 still truncated the file when startup met an unknown value or a syntax error.

Channel: tagged-release. Half: defect. Date: 2026-08-25.

Operator consequence: Correct the parent guidance: the safe floor for settings integrity is 1.1.20, not 1.1.16. If you hand-edit or template settings.json (new keys from a newer version, comments), keep a copy until you are on >= 1.1.20.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.1.20/CHANGELOG.md
