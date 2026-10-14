---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-beta-records-oauth-scope-provenance-instead-of-treating-requests-as-provider-proof
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/ea8e686197498cd3f6f7e9a26c4621159c2c3a22
    precision: commit
---
# 2026-10-13-paperclip-beta-records-oauth-scope-provenance-instead-of-treating-requests-as-provider-proof

Beta records OAuth scope provenance instead of treating requests as provider proof. OAuth grant metadata distinguishes provider-reported scopes from requested_fallback and retains a per-grant requested baseline. Unrequested scopes come from provider evidence, while a refresh omitting scope retains earlier evidence rather than erasing an over-grant warning. This changes evidence records, not provider authorization; it does not introspect every token or backfill all historical grants.

Channel: preview-or-beta (2026.1012.1-beta.0). Half: both. Date: 2026-10-12.

Operator consequence: When reviewing preview grants, inspect scopeSource as well as the scope list. An empty extra-scope list with requested_fallback means unproved, not verified least privilege. Combine this with fresh reduced Google consent in section 14 rather than treating a request string as token authority.

## Receipt
- https://github.com/paperclipai/paperclip/commit/ea8e686197498cd3f6f7e9a26c4621159c2c3a22
