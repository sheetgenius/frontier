---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-the-origin-api-shipped-nine-breaking-changes-in-ten-days-including-a-required-reviewer-sha
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog
    precision: official_docs
  - url: https://web.archive.org/web/20261024094024id_/https://cursor.com/docs/api/origin/changelog.md
    precision: official_docs
---
# 2026-10-24-cursor-the-origin-api-shipped-nine-breaking-changes-in-ten-days-including-a-required-reviewer-sha

The Origin API shipped nine breaking changes in ten days, including a required-reviewer shape replaced three days after addition. Integration owners absorbed a breaking change roughly every working day. The 14 October required-reviewer addition used the team shape; the 17 October migration replaced that shape in both reviewer requirements and bypass actors. The 14 October bypass entry validated an existing shape; it did not introduce that authority. Several breaks fix real hazards (merges landing where commits never reach the target, a bypass kind that never worked), so the churn is partly the cost of tightening. The OpenAPI operation list grew by one and lost none.

Channel: docs-only (API labeled Early Beta). Half: defect. Date: 2026-10-14..2026-10-23.

Operator consequence: Budget Origin integrations as maintenance-bearing: read the daily changelog at least weekly, keep contract tests against the OpenAPI file, and expect field shapes adopted mid-week to change by the next. Code written to the 14 October ruleset shape broke on 17 October. For a team weighing a move from GitHub, this churn is a real switching cost that the marketplace launch does not show.

## Receipt
- https://web.archive.org/web/20261024092540/https://cursor.com/docs/api/origin/changelog
- https://web.archive.org/web/20261024094024id_/https://cursor.com/docs/api/origin/changelog.md
