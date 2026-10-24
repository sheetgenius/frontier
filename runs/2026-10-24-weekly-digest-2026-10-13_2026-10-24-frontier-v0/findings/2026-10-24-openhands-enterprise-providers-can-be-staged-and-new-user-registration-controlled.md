---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-enterprise-providers-can-be-staged-and-new-user-registration-controlled
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/enterprise/commit/f31c63a7bf677150f36f8a94920d2a84504b0a7f
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/0893792cd133eae70aa79852769e059577b43238
    precision: commit
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/migrations/versions/196_add_auth_provider_enabled.py
    precision: tagged_commit_file
---
# 2026-10-24-openhands-enterprise-providers-can-be-staged-and-new-user-registration-controlled

Enterprise providers can be staged and new-user registration controlled. Provider registration is permitted by default; disabling registration gates new-user creation rather than all existing-user linking. New providers now start disabled, while pre-existing rows migrate enabled. Disabling a provider blocks new login/link flows without revoking existing sessions or tokens.

Channel: tagged-release. Half: both. Date: 2026-10-19 (Enterprise 1.72.0); 2026-10-23 (1.78.0).

Operator consequence: Stage provider configuration before enabling it and test registration, existing-user linking and disabled-provider login separately. Handle session/token revocation separately when removing access. This removes the need to expose half-configured providers, but the enabled flag is not an emergency sign-out control.

## Receipt
- https://github.com/OpenHands/enterprise/commit/f31c63a7bf677150f36f8a94920d2a84504b0a7f
- https://github.com/OpenHands/enterprise/commit/0893792cd133eae70aa79852769e059577b43238
- https://github.com/OpenHands/enterprise/blob/1.79.0/migrations/versions/196_add_auth_provider_enabled.py
