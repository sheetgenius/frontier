---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-codemode-output-gets-host-memory-limits-and-linear-joining
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/319fecb89b17b7bf8a4b62734de9a6cc6ceabe49
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/f11e50f72ef8cdbdc828ad4196956cdc4cbf891e
    precision: commit
---
# 2026-10-13-pi-coding-agent-codemode-output-gets-host-memory-limits-and-linear-joining

Codemode output gets host-memory limits and linear joining. A printing loop could exhaust host memory despite QuickJS isolation. From 1.0.1 script output fails past 16 Mi characters or 100000 output items. In 1.2.0 adjacent text output is joined linearly instead of quadratically, repairing process stalls lasting seconds to minutes. The joining fix also reaches Durable. No Pi-repository advisory was found for either repair.

Channel: tagged-release. Half: defect. Date: 2026-10-12.

Operator consequence: Move codemode users to 1.2.0 and design scripts to summarize output or write large data through tools. A JavaScript sandbox does not by itself bound host output accumulation or worker lifetimes; the latter still awaits section 15's unreleased repair.

## Receipt
- https://github.com/earendil-works/pi/commit/319fecb89b17b7bf8a4b62734de9a6cc6ceabe49
- https://github.com/earendil-works/pi/commit/f11e50f72ef8cdbdc828ad4196956cdc4cbf891e
