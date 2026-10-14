---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-canvas-v1-26-0-adds-explicit-organization-scope-to-cloud-conversation-requests
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/commit/96bcee6a4f9a69b99f8cfa1315681228f82b3557
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/compare/v1.25.0...v1.26.0
    precision: git_compare
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.26.0
    precision: github_release
---
# 2026-10-13-openhands-canvas-v1-26-0-adds-explicit-organization-scope-to-cloud-conversation-requests

Canvas v1.26.0 adds explicit organization scope to Cloud conversation requests. The Cloud proxy sends X-Org-Id from the active backend organization, and both paginated listing and individual-conversation queries wait until an organization is selected. This repairs missing or incorrect org context; the receipt does not itself establish cross-tenant unauthorized access.

Channel: tagged-release. Half: both. Date: 2026-10-08 (Canvas v1.26.0).

Operator consequence: Use Canvas v1.26.0 or later for multi-org Cloud conversation work. Confirm selected organization and request headers when diagnosing missing or stale lists, and test switching organizations. Do not turn the client context repair into an unproven tenant-isolation incident.

## Receipt
- https://github.com/OpenHands/OpenHands/commit/96bcee6a4f9a69b99f8cfa1315681228f82b3557
- https://github.com/OpenHands/OpenHands/compare/v1.25.0...v1.26.0
- https://github.com/OpenHands/OpenHands/releases/tag/v1.26.0
