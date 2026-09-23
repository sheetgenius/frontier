---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-cursor-cloud-agents-without-an-scm-start-from-scratch-writes-to-origin-by-default
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20260901121134/https://cursor.com/changelog/start-from-scratch
    precision: official_docs
---
# 2026-09-21-cursor-cloud-agents-without-an-scm-start-from-scratch-writes-to-origin-by-default

Cloud agents without an SCM: Start from scratch writes to Origin by default. Cloud agents no longer require GitHub or another SCM. Choosing "Start from scratch" makes Cursor create an Origin repo "in the background"; "Create repo" later names it private or internal. Cursor port-forwards the cloud agent's live environment to the browser for preview; a connected Vercel account can publish a live URL.

Channel: docs-only. Half: capability. Date: 2026-08-27.

Operator consequence: Surface is cloud agents plus Origin. This is the first entry where agent output lands on Cursor-hosted git by default rather than on the operator's forge. Origin is a storage location, not a permission model (contract). If your org requires code to live on your own SCM, Origin is opt-out for Enterprise admins per the 08-17 launch, so confirm your org's setting; for everyone else, work started this way lives on Cursor's host until you move it.

## Receipt
- https://web.archive.org/web/20260901121134/https://cursor.com/changelog/start-from-scratch
