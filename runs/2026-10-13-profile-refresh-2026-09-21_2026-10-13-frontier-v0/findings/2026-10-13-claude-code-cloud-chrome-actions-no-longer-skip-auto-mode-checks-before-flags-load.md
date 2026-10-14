---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-cloud-chrome-actions-no-longer-skip-auto-mode-checks-before-flags-load
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L33
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.296
    precision: github_release
---
# 2026-10-13-claude-code-cloud-chrome-actions-no-longer-skip-auto-mode-checks-before-flags-load

Cloud Chrome actions no longer skip auto-mode checks before flags load. A saved Chrome permission could let a cloud-session action run without auto-mode review before flags loaded. 2.1.296 closes that startup path.

Channel: tagged-release (latest only; stable 2.1.287 lacks it). Half: defect. Date: 2026-10-09 (2.1.296).

Operator consequence: Require 2.1.296 for cloud sessions relying on Chrome auto-mode review. Test startup with saved site permissions and delayed flags. Stable 2.1.287 lacks this fix.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L33
- https://github.com/anthropics/claude-code/releases/tag/v2.1.296
