---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-hermes-agent-approvals-deny-now-applies-inside-isolated-containers-v2026-9
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/1c37b9c45772fe284af0179df41f2b366cb6b0e9
    precision: commit
---
# 2026-09-21-hermes-agent-approvals-deny-now-applies-inside-isolated-containers-v2026-9

approvals.deny now applies inside isolated containers (v2026.9.7). approvals.deny now applies inside isolated containers (v2026.9.7)

Channel: tagged-release. Half: defect. Date: commit 2026-09-05; tagged 2026-09-07.

Operator consequence: If you enforce policy with `approvals.deny` on a remote or container backend, it was not enforced before v2026.9.7. Re-run `hermes approvals test` on your deny list after upgrading; the command mirrors the new order.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/1c37b9c45772fe284af0179df41f2b366cb6b0e9
