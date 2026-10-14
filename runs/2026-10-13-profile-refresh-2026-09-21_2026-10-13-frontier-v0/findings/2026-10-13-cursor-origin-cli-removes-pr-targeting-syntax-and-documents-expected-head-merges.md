---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-origin-cli-removes-pr-targeting-syntax-and-documents-expected-head-merges
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
  - url: https://cursor.com/docs/release-notes/origin-cli#oct-1-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/origin-cli#oct-6-2026
    precision: official_docs
---
# 2026-10-13-cursor-origin-cli-removes-pr-targeting-syntax-and-documents-expected-head-merges

Origin CLI removes PR-targeting syntax and documents expected-head merges. The notes remove origin pr stack and using --branch to select a pull request; a positional branch becomes the target. origin pr checkout --branch remains. The October 6 note adds a merge-requirements read and expected-head protection against a pull request moving after review.

Channel: docs-only (no tested note-to-binary mapping). Half: both. Date: 2026-10-01 and 2026-10-06 release-note labels.

Operator consequence: Update scripts using removed syntax. Bind merge decisions to the reviewed head and inspect requirements before merge. Verify these commands in the chosen version rather than inferring them from the October 13 installer artifact.

## Receipt
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://cursor.com/docs/release-notes/origin-cli#oct-1-2026
- https://cursor.com/docs/release-notes/origin-cli#oct-6-2026
