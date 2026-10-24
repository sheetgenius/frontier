---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-workers-report-draining-and-refuse-new-work-during-shutdown
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/cli/changelog#oct-17-2026
    precision: official_docs
  - url: https://cursor.com/docs/cli/changelog#oct-15-2026
    precision: official_docs
  - url: https://cursor.com/docs/cloud-agent/self-hosted/pool#monitoring
    precision: official_docs
---
# 2026-10-24-cursor-workers-report-draining-and-refuse-new-work-during-shutdown

Workers report draining and refuse new work during shutdown. The worker's management readiness endpoint stays alive during shutdown and reports HTTP 503 with draining state. Binding failure now prevents startup; stale-claim workers exit, and draining workers reject new runs. A separate CLI change makes stdio MCP tool timeouts configurable by server or tool and honors server startup timeouts. These are lifecycle controls, not model improvements.

Channel: tagged-release. Half: both. Date: 2026-10-17; MCP timeout notes 2026-10-15.

Operator consequence: Let pool orchestration act on readiness and process exit instead of compensating with polling scripts or assigning to a dying worker. Set MCP deadlines from the workload rather than raising every timeout. The attention saving is fewer stranded jobs and manual restarts; verify a real drain before treating that reduction as achieved.

## Receipt
- https://cursor.com/docs/cli/changelog#oct-17-2026
- https://cursor.com/docs/cli/changelog#oct-15-2026
- https://cursor.com/docs/cloud-agent/self-hosted/pool#monitoring
