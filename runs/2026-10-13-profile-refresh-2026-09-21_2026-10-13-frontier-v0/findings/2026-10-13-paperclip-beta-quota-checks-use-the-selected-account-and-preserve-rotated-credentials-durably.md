---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-beta-quota-checks-use-the-selected-account-and-preserve-rotated-credentials-durably
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/892b0b3606f066dd7344d6397daf25c8b52f598b
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/connections/AI-CONNECTIONS.md
    precision: tagged_commit_file
---
# 2026-10-13-paperclip-beta-quota-checks-use-the-selected-account-and-preserve-rotated-credentials-durably

Beta quota checks use the selected account and preserve rotated credentials durably. Quota checks use the authorized selected company account instead of host-local credential fallback. Cache identity follows credential revision. Managed single-use refresh-token rotation serializes credential reads/writes and saves encrypted replacement tokens to a fsynced recovery journal before vault/database writes. Restart recovery checks the original grant/credential fingerprint and cannot revive revoked access or overwrite a reconnect. Persistent save failures retain recovery evidence and need operator intervention; lost durable storage can still require reconnecting.

Channel: preview-or-beta (2026.1012.1-beta.0). Half: both. Date: 2026-10-12.

Operator consequence: Check which account funds the task before reading its quota result. Back up quota-credential-recovery and the matching instance secrets master key with instance data. Do not discard a retained private runtime home or journal while investigating failed write-back. The change makes account identity and token custody operational state, rather than something reconstructed from a CLI login on the host.

## Receipt
- https://github.com/paperclipai/paperclip/commit/892b0b3606f066dd7344d6397daf25c8b52f598b
- https://github.com/paperclipai/paperclip/blob/1b4c803816e82b0265c8422e1a804327a7ed8c54/doc/connections/AI-CONNECTIONS.md
