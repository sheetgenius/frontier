---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-stable-makes-cost-receipts-durable-and-can-hold-admission-on-unknown-prices
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/799e4d556f5c1bc17b398147c7e0abff91446de0
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/usage-receipts.ts
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/run-cost-accounting.ts
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/accounting-transaction.ts
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budget-reservations.ts
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budgets.ts#L224-L230
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-stable-makes-cost-receipts-durable-and-can-hold-admission-on-unknown-prices

Stable makes cost receipts durable and can hold admission on unknown prices. Filesystem receipts use exclusive creation, restricted permissions, sync and rename; reconciliation retains receipts until the database transaction commits. Run settlement uses a stable idempotency key, records ledger/runtime acknowledgment together and cleans receipts after commit. Company-row locking serializes accounting and admission reservations. Exact fractional cents and reported/estimated/unpriced states replace invented zero charges. The default `unpricedUsagePolicy` is `block`, but the actual predicate applies only to active, positive-amount policies with hard stops enabled. Such a policy can also hold for pending unrecovered accounting. The [release's cost reporting](https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0) adds subscription fees and visible pricing gaps; this is not evidence that every provider charge has been independently reconciled.

Channel: tagged-release. Half: both. Date: 2026-10-24.

Operator consequence: Upgrade to v2026.1023.0 and reconcile interrupted or retried runs against provider billing before trusting historical totals. Choose explicitly whether each applicable hard-stop policy allows unpriced usage. Preserve unresolved receipts and use audited adjustments to settle them. The reservation code explicitly treats estimates as admission controls, not a cap on the provider's final bill. Durable accounting removes some manual reconstruction, while unresolved prices create deliberate human reconciliation work. No provider-billed replay or dollar-total comparison was run in this research.

## Receipt
- https://github.com/paperclipai/paperclip/commit/799e4d556f5c1bc17b398147c7e0abff91446de0
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/usage-receipts.ts
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/run-cost-accounting.ts
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/accounting-transaction.ts
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budget-reservations.ts
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budgets.ts#L224-L230
