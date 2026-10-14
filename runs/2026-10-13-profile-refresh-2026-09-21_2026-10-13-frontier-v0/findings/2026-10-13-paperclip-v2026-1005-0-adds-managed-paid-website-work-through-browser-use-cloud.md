---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-v2026-1005-0-adds-managed-paid-website-work-through-browser-use-cloud
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/BROWSER-USE.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/d72389bee272ec705e5cf9fd864682048b1b214d
    precision: commit
---
# 2026-10-13-paperclip-v2026-1005-0-adds-managed-paid-website-work-through-browser-use-cloud

v2026.1005.0 adds managed paid website work through Browser Use Cloud. A vaulted API key delegates website work to Browser Use Cloud through seven reviewed tools. Conversations bind to task, agent and credential grant, with a human live viewer, cancellation/idle cleanup and attributable costs. Saved profiles can carry authenticated sessions; selecting one grants meaningful website access. Closing the viewer hides it, while provider cancellation/end controls request actual shutdown. A lost paid-create response remains unknown and is not automatically replayed; reconciliation searches the invocation marker and keeps cleanup pending until resolved. The vendor records a real basic website journey with a $1 cap and $0.01 reported cost. Live revocation, approval, rate-limit and restart acceptance remained outstanding in that record, with fixture coverage only.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: Authorize profiles and per-run caps deliberately, then trial a harmless real website task. Check provider-confirmed shutdown rather than equating tab closure with stopped spending. Inspect Browser Use before replacing an uncertain paid start. A routine browser handoff is now part of managed task state; ownership, paid idempotency and cleanup remain the durable work around it.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1005.0/doc/connections/BROWSER-USE.md
- https://github.com/paperclipai/paperclip/commit/d72389bee272ec705e5cf9fd864682048b1b214d
