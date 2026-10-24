---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-session-archiving-is-restored-through-durable-events-and-api-state
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/fa9da987be20f189408edd6494fc425c1235d502
    precision: commit
---
# 2026-10-24-opencode-session-archiving-is-restored-through-durable-events-and-api-state

Session archiving is restored through durable events and API state. [Commit fa9da987be20f189408edd6494fc425c1235d502](https://github.com/anomalyco/opencode/commit/fa9da987be20f189408edd6494fc425c1235d502) adds archived filtering, archived=true/false updates, and durable session.archived/session.unarchived events. First v2.1.0, absent from v2.0.32.

Channel: tagged-release. Half: capability. Date: 2026-10-20.

Operator consequence: Integration owners can remove finished sessions from active lists and restore them without deleting their record. Adapt list filters and event consumers. This is a durable-state/workflow capability absent from the harvest's standing session discussion.

## Receipt
- https://github.com/anomalyco/opencode/commit/fa9da987be20f189408edd6494fc425c1235d502
