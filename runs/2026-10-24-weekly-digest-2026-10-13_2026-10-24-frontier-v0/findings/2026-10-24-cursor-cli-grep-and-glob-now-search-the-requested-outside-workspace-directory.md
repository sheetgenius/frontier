---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-cli-grep-and-glob-now-search-the-requested-outside-workspace-directory
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/cli/changelog#oct-15-2026
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
---
# 2026-10-24-cursor-cli-grep-and-glob-now-search-the-requested-outside-workspace-directory

CLI Grep and Glob now search the requested outside-workspace directory. Grep and Glob now honor an outside-workspace target instead of silently searching the workspace. Cursor says .cursorignore and Read deny rules continue to apply, and Glob reports truncated results.

Channel: tagged-release. Half: both. Date: 2026-10-15.

Operator consequence: Re-test a harmless outside file under the intended read policy before unattended runs. Correct search scope removes misleading answers but makes the unresolved account-level Workspace boundary consequential; this is not evidence of an approval bypass.

## Receipt
- https://cursor.com/docs/cli/changelog#oct-15-2026
- https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
