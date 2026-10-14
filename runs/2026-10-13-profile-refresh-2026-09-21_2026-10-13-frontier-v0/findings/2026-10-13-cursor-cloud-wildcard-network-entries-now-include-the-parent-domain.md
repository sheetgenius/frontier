---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-cloud-wildcard-network-entries-now-include-the-parent-domain
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
  - url: https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026
    precision: official_docs
---
# 2026-10-13-cursor-cloud-wildcard-network-entries-now-include-the-parent-domain

Cloud wildcard network entries now include the parent domain. A Cloud Agents allowlist entry for a wildcard subdomain now includes the apex domain too. Existing wildcard entries can therefore authorize a destination outside their earlier meaning.

Channel: docs-only (Cloud Agents hosted policy notes). Half: both. Date: week of 2026-09-28.

Operator consequence: Audit cloud wildcard entries whose parent domain hosts a different service or trust level. Replace a wildcard with explicit destinations when the broader reach is unwanted. Evaluate cloud egress separately from the local sandbox policy.

## Receipt
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026
