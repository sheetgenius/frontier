---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-windows-hooks-could-report-success-without-running-until-the-3-23-repair
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/ide#oct-1-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/agents-window#oct-1-2026
    precision: official_docs
---
# 2026-10-13-cursor-windows-hooks-could-report-success-without-running-until-the-3-23-repair

Windows hooks could report success without running until the 3.23 repair. Extensionless Windows hook commands could appear successful while the control did nothing. The 3.23 release notes report resolution to matching .ps1, .exe, .bat or .cmd files. A successful pre-fix hook result therefore does not establish that an approval or audit action ran.

Channel: tagged-release (vendor-described IDE and Agents Window 3.23 repair). Half: defect. Date: 2026-10-01 (3.23 notes).

Operator consequence: Use the dated current IDE 3.24.18, inspect extensionless hook commands and test their observable effect. Recheck approval and audit coverage from before 3.23. A hook process status alone is insufficient evidence of the control.

## Receipt
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://cursor.com/docs/release-notes/ide#oct-1-2026
- https://cursor.com/docs/release-notes/agents-window#oct-1-2026
