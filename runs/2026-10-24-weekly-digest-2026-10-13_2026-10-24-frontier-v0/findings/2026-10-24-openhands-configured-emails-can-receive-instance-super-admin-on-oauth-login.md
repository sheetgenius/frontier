---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-configured-emails-can-receive-instance-super-admin-on-oauth-login
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/enterprise/commit/dbdbf0d60c648d9f3f9ec059387dcba20e0b0914
    precision: commit
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/server/auth/constants.py
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/server/routes/oauth_v2.py
    precision: tagged_commit_file
---
# 2026-10-24-openhands-configured-emails-can-receive-instance-super-admin-on-oauth-login

Configured emails can receive instance super-admin on OAuth login. `SUPER_ADMIN_EMAILS` is empty by default. On every successful OAuth v2 login, a stored user email matching the configured case-insensitive list receives instance super-admin if needed. This supplies a recovery/grant input independent of first-user designation.

Channel: tagged-release. Half: both. Date: 2026-10-23 (Enterprise 1.78.0).

Operator consequence: Audit this list alongside provider email identity, linking and verification policy. Removing a configured address is not itself evidence of revoking an already granted role. This is an explicit privilege input, not an automatically active bypass or proof of exploitation; no login was tested.

## Receipt
- https://github.com/OpenHands/enterprise/commit/dbdbf0d60c648d9f3f9ec059387dcba20e0b0914
- https://github.com/OpenHands/enterprise/blob/1.79.0/server/auth/constants.py
- https://github.com/OpenHands/enterprise/blob/1.79.0/server/routes/oauth_v2.py
