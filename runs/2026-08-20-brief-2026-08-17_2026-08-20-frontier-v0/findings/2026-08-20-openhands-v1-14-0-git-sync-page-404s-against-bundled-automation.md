---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-openhands-v1-14-0-git-sync-page-404s-against-bundled-automation
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.14.0
    precision: github_release
  - url: https://github.com/OpenHands/OpenHands/pull/16712
    precision: merged_pr
---
# 2026-08-20-openhands-v1-14-0-git-sync-page-404s-against-bundled-automation

v1.14.0 contains the Git Sync page (PR #16521). config/defaults.json at that tag pins openhands-automation 1.7.1. The git-sync endpoints live in automation PR #327, which is not in 1.7.1 and is in automation 1.8.0 (published 2026-08-19T12:03:03Z). Canvas PR #16712, which bumps the pin 1.7.1 -> 1.8.0, is not in v1.14.0. On the tagged install the four git-sync calls 404 and the page renders an unsupported state with a no-op button.

Channel: tagged-release for the UI; main-unreleased for the working backend pin. Half: defect.

Operator consequence: do not test Git Sync on v1.14.0 and conclude the product cannot do it. The page is in the tag; the service is not. v1.15.0 (2026-08-21, out of window) is the next-cycle tagged pin.

## Receipt
- https://github.com/OpenHands/OpenHands/releases/tag/v1.14.0
- https://github.com/OpenHands/OpenHands/pull/16712
