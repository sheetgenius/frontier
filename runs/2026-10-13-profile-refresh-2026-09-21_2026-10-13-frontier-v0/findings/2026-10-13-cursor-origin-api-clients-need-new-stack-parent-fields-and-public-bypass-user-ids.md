---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-origin-api-clients-need-new-stack-parent-fields-and-public-bypass-user-ids
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
  - url: https://cursor.com/docs/api/origin/changelog#sep-22-2026
    precision: official_docs
  - url: https://cursor.com/docs/api/origin/changelog#oct-2-2026
    precision: official_docs
  - url: https://cursor.com/docs/api/origin/changelog#oct-3-2026
    precision: official_docs
---
# 2026-10-13-cursor-origin-api-clients-need-new-stack-parent-fields-and-public-bypass-user-ids

Origin API clients need new stack-parent fields and public bypass-user IDs. Origin's create-PR API rejects the old parentPullNumber field instead of silently dropping stack structure. Integrations must send parentPullRequest with a number member. Ruleset bypass actors move from numeric Cursor user IDs to public user IDs; the dated follow-up rejects the old form.

Channel: docs-only (hosted API labeled Early Beta). Half: defect. Date: 2026-09-22; 2026-10-02 and 2026-10-03 dated API notes.

Operator consequence: Migrate request schemas and stored bypass identities, then check the resulting stack and ruleset. Treat this API's Early Beta label as a compatibility cost. Other daily API changes lack the historical pins requested by the crosscheck and remain leads, not accepted release facts.

## Receipt
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://cursor.com/docs/api/origin/changelog#sep-22-2026
- https://cursor.com/docs/api/origin/changelog#oct-2-2026
- https://cursor.com/docs/api/origin/changelog#oct-3-2026
