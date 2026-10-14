---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-october-13-canary-gives-call-api-rest-permission-parity-and-more-private-saved-receipts
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/fc3b15537b00f7cd50329926e24ea0c20487fad5/doc/runner-api-tools.md#L164-L220
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/fc3b15537b00f7cd50329926e24ea0c20487fad5
    precision: commit
  - url: https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
    precision: official_docs
---
# 2026-10-13-paperclip-october-13-canary-gives-call-api-rest-permission-parity-and-more-private-saved-receipts

October 13 canary gives call_api REST permission parity and more private saved receipts. Native call_api removes its extra endpoint/payload denylist and uses ordinary REST route permission checks with company/run/task identity and work-mode restrictions. Board-only routes still reject agents. Authorized credential-bearing mutation responses use encrypted replay storage, while durable native events/checkpoints/completion results omit API request/response bodies. Private response snapshots retain actor scoping. Mutation IDs reserve receipts before dispatch; a crash after reservation leaves an unknown outcome and is not automatically resent.

Channel: preview-or-beta (2026.1013.0-canary.16; absent from stable, beta and October 13 nightly). Half: both. Date: 2026-10-13.

Operator consequence: When trying canary, compare native API availability with the actual route authority instead of granting board identity to work around a transport limit. Plan audit queries around operation/status/digest rather than expecting every private response in native event logs. Preserve the secret store required to decrypt authorized replay receipts. This expands agent-operable API surface without expanding route permissions.

## Receipt
- https://github.com/paperclipai/paperclip/blob/fc3b15537b00f7cd50329926e24ea0c20487fad5/doc/runner-api-tools.md#L164-L220
- https://github.com/paperclipai/paperclip/commit/fc3b15537b00f7cd50329926e24ea0c20487fad5
- https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
