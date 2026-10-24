---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-cipher-key-rotation-gains-a-migration-path-and-refuses-destructive-writes-under-a-lost-key
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/software-agent-sdk/commit/53757a33283d8d412189421b852640b83a8868cf
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/README.md#L273-L286
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.30.1/config/defaults.json
    precision: tagged_commit_file
---
# 2026-10-24-openhands-cipher-key-rotation-gains-a-migration-path-and-refuses-destructive-writes-under-a-lost-key

Cipher-key rotation gains a migration path and refuses destructive writes under a lost key. `OH_PREVIOUS_SECRET_KEYS` supplies old decryption keys while `OH_SECRET_KEY` supplies the new encryption key. Settings and secret stores are re-encrypted at startup; other encrypted records migrate when saved. If encrypted settings or secrets cannot be decrypted, writes refuse with HTTP 409 instead of overwriting the unreadable data. Without an explicit encryption key the first session API key is a fallback, so rotating an authentication key can also change decryption behavior.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Upgrade, back up encrypted state, retain old keys until all relevant stores are migrated, and distinguish authentication rotation from encryption rotation. This gives operators a supported recovery mechanism instead of a destructive trial-and-error sequence. It does not itself migrate the separate automation key-value store or revoke exported provider keys; those remain separate responsibilities.

## Receipt
- https://github.com/OpenHands/software-agent-sdk/commit/53757a33283d8d412189421b852640b83a8868cf
- https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/README.md#L273-L286
- https://github.com/OpenHands/OpenHands/blob/v1.30.1/config/defaults.json
