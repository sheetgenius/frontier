---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-openhands-automations-get-view-manage-permissions-creator-only-re-enable-a-visible-run-as-identity
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/blob/v1.15.0/config/defaults.json
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/pull/17105
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17138
    precision: merged_pr
---
# 2026-09-21-openhands-automations-get-view-manage-permissions-creator-only-re-enable-a-visible-run-as-identity

Automations get view/manage permissions, creator-only re-enable, a visible run-as identity, and a working Git Sync backend. Carry-forward answer: yes, the Git Sync backend shipped. v1.15.0 is the first tag where the Git Sync page talks to an automation service that serves its endpoints. On cloud backends, org-admin Git Sync (#17216) is on main after the window and in v1.22.0 (out). The team model changed too. v1.17.0 splits `view_automations` from `manage_automations` and makes automations visible org-wide. v1.18.0 lets only the creator turn an automation back on. It also shows "Automation Runs As", the creator's email: an automation runs under its creator's identity.

Channel: tagged-release. Half: both. Date: 2026-08-21 (Git Sync backend), 2026-09-09, 2026-09-11.

Operator consequence: Retest Git Sync on v1.15.0 or later if you wrote it off on v1.14.0. On team deployments, audit who created each automation. It runs as that person, and after v1.17.0 every org member can see it.

## Receipt
- https://github.com/OpenHands/OpenHands/blob/v1.15.0/config/defaults.json
- https://github.com/OpenHands/OpenHands/pull/17105
- https://github.com/OpenHands/OpenHands/pull/17138
