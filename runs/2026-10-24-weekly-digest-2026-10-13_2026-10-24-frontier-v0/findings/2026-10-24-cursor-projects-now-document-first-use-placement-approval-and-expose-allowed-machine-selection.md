---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-projects-now-document-first-use-placement-approval-and-expose-allowed-machine-selection
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/release-notes/agents-window#oct-20-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/cloud-agents#oct-12-2026
    precision: official_docs
  - url: https://cursor.com/docs/cloud-agent/settings#security-settings
    precision: official_docs
  - url: https://cursor.com/docs/agent/projects
    precision: official_docs
---
# 2026-10-24-cursor-projects-now-document-first-use-placement-approval-and-expose-allowed-machine-selection

Projects now document first-use placement approval and expose allowed-machine selection. The profile's blanket statement that no Project approval setting is documented is no longer complete. Current docs require approval before a coordinator uses a new machine, pool or environment unless an admin enables automatic placement; repository/environment approvals can be revoked, and approving a repository also approves its Origin mirror. The 3.26 client lets an operator select allowed machines and start a worker from a chosen local folder. Current settings say automatic placement defaults off for every team; the older week-of-2026-10-05 web note says on outside Enterprise. Current operational guidance therefore differs from that older note. No per-Project spend or concurrency ceiling was found.

Channel: docs-only. Half: both. Date: 2026-10-20 client notes; hosted settings observed 2026-10-24.

Operator consequence: Review the coordinator's allowed targets and the team's actual switch. Approving placement is a durable grant to a destination, not approval of every later action or a spending cap. Projects can remove manual routing between cloud and local workers, while moving judgment to the initial destination, secrets and billing identity. Test that a new target stops before allowing unattended expansion.

## Receipt
- https://cursor.com/docs/release-notes/agents-window#oct-20-2026
- https://cursor.com/docs/release-notes/cloud-agents#oct-12-2026
- https://cursor.com/docs/cloud-agent/settings#security-settings
- https://cursor.com/docs/agent/projects
