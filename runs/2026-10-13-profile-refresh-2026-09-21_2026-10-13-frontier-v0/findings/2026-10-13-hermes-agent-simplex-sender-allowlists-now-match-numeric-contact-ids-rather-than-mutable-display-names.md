---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-simplex-sender-allowlists-now-match-numeric-contact-ids-rather-than-mutable-display-names
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/467046753420c40aba05a118e5ffd5061e42f481
    precision: commit
---
# 2026-10-13-hermes-agent-simplex-sender-allowlists-now-match-numeric-contact-ids-rather-than-mutable-display-names

SimpleX sender allowlists now match numeric contact ids rather than mutable display names. A contact could change its display name to an allowlisted name and gain that sender's access. The SimpleX adapter and intake matching now use the numeric contactId only; the earlier author date does not change the first stable boundary.

Channel: tagged-release (first stable v0.21.6). Half: defect. Date: 2026-09-27.

Operator consequence: Upgrade to v0.21.6+ and replace SIMPLEX_ALLOWED_USERS display-name entries with numeric contact IDs. This deliberately breaks name-based configuration.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/467046753420c40aba05a118e5ffd5061e42f481
