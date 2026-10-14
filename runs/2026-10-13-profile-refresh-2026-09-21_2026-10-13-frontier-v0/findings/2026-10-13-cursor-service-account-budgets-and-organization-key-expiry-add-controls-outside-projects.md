---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-service-account-budgets-and-organization-key-expiry-add-controls-outside-projects
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
  - url: https://cursor.com/docs/release-notes/web#sep-21-2026
    precision: official_docs
---
# 2026-10-13-cursor-service-account-budgets-and-organization-key-expiry-add-controls-outside-projects

Service-account budgets and organization key expiry add controls outside Projects. Admins can inspect and edit service-account spend limits for a billing period. New organization API keys can expire after 30, 90 or 180 days, or a year. Organization keys can read organization-wide audit events through an API.

Channel: docs-only (web and organization API notes). Half: capability. Date: week of 2026-09-21.

Operator consequence: Give unattended accounts a deliberate budget and choose credential expiry when issuing new organization keys. Confirm which identity a workload bills to. These are concrete general controls and must not be conflated with a documented per-Project ceiling.

## Receipt
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://cursor.com/docs/release-notes/web#sep-21-2026
