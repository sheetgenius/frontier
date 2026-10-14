---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-beta-widens-human-operator-authority-and-tightens-budget-accounting-with-conditional-unpri
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/paperclipai/2026.1012.1-beta.0
    precision: official_docs
  - url: https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/services/company-member-roles.ts
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/services/budgets.ts#L224-L230
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/pull/14997
    precision: merged_pr
  - url: https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/AGENT-IDENTITY.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/ISSUE-PRIVACY.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/CUSTOMER-SUCCESS-INSPECTION.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/routes/customer-success.ts#L79-L125
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/4a641d0980fdaffc4c4e805f6f0a8809eb5702f2/releases/beta/v2026.1012.1-beta.0.md
    precision: tagged_commit_file
---
# 2026-10-13-paperclip-beta-widens-human-operator-authority-and-tightens-budget-accounting-with-conditional-unpri

Beta widens human Operator authority and tightens budget accounting with conditional unpriced holds. The human Operator invitation preset grows from tasks:assign alone to 14 grants and startup seeding adds missing grants to existing Operators. This is separate from section 3 agent defaults. A durable exact-cents ledger repairs maintainer-reported interruption, duplicate-receipt, rounding and concurrency accounting problems; it does not establish that every stable total is wrong. Unpriced usage blocks only under applicable active positive-amount policies with hard stops enabled and unpricedUsagePolicy:block; choosing allow trades that protection away. Preview also places GitHub review bots behind a default-off flag and requires Cloud approval before the first self-hosted managed GitHub connection. MCP configuration access needs separate consent. Private tasks/projects enforce their ACL by default, while shadow/off modes do not; owner/admin break-glass reads are audited, but trusted shared-agent memory remains an exfiltration risk. New agents get persistent Ed25519 identities at creation and existing agents on their next supported managed run; HTTP/gateway and API-hosted paths do not receive private keys. Managed hosts can retain and sign with the key outside Paperclip. OpenAI Dot and Pi 1.0 are experimental runner providers. Cloud inspection requires authority enabled on the inspecting instance, inspection enabled on the target tenant, trust configuration and a consumed single-use maximum-60-second permit. The separate read-only inspection path can read private content without normal actor ACL or tenant break-glass notice, and pasted secrets in readable content can remain. No receipt establishes live-tenant enablement.

Channel: preview-or-beta (2026.1012.1-beta.0). Half: both. Date: 2026-10-12.

Operator consequence: Before adopting this preview or a later stable containing it, inventory human Operators and remove access that should not gain agent/configuration/connection administration. Reconcile interrupted/retried runs against provider receipts on stable; retain margin rather than declaring every cap ineffective. Identify unpriced providers and decide deliberately whether to hold or allow them. Plan any managed GitHub approval dependency. Trust managed runtime hosts with persistent identity keys and back up the matching wrapping key. For tenant privacy, inspect INSPECTION_ENABLED and Cloud permit policy; disabling the tenant authority endpoint alone does not disable reads. Treat the October 15 date as a draft until an actual stable is published.

## Receipt
- https://registry.npmjs.org/paperclipai/2026.1012.1-beta.0
- https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/services/company-member-roles.ts
- https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/services/budgets.ts#L224-L230
- https://github.com/paperclipai/paperclip/pull/14997
- https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/AGENT-IDENTITY.md
- https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/ISSUE-PRIVACY.md
- https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/CUSTOMER-SUCCESS-INSPECTION.md
- https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/server/src/routes/customer-success.ts#L79-L125
- https://github.com/paperclipai/paperclip/blob/4a641d0980fdaffc4c4e805f6f0a8809eb5702f2/releases/beta/v2026.1012.1-beta.0.md
