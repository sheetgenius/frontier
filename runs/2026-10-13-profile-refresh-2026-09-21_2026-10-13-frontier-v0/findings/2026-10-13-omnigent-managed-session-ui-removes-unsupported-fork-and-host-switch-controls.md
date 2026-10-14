---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-managed-session-ui-removes-unsupported-fork-and-host-switch-controls
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/commit/c17f0c447c3482e492cb4aa54b7bc18b75dec1f8
    precision: commit
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/web/src/lib/sessionCapabilities.ts#L1-L36
    precision: tagged_commit_file
---
# 2026-10-13-omnigent-managed-session-ui-removes-unsupported-fork-and-host-switch-controls

Managed-session UI removes unsupported fork and host-switch controls. v0.18.0 disables fork controls for sessions marked managed by the embedding deployment and for lakebox/arclet providers, and disables host switching for sandbox hosts. Other supported sandbox forks remain available. These are UI capability predicates aligning with existing backend restrictions, not a newly proved backend authorization boundary.

Channel: tagged-release. Half: both. Date: 2026-10-08 merged; 2026-10-13 stable package.

Operator consequence: Check the managed deployment before advising users to fork after the switch-agent endpoint's removal. Some sessions require starting another session through their supported flow. Do not infer a new security boundary from a disabled button.

## Receipt
- https://github.com/omnigent-ai/omnigent/commit/c17f0c447c3482e492cb4aa54b7bc18b75dec1f8
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/web/src/lib/sessionCapabilities.ts#L1-L36
