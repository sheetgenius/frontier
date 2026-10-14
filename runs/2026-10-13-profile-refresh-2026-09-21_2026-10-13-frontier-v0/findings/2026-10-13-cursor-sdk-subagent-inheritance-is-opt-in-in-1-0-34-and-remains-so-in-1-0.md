---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-sdk-subagent-inheritance-is-opt-in-in-1-0-34-and-remains-so-in-1-0
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.34.tgz
    precision: official_docs
  - url: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.37.tgz
    precision: official_docs
  - url: https://registry.npmjs.org/@cursor%2fsdk/1.0.34
    precision: official_docs
  - url: https://registry.npmjs.org/@cursor%2fsdk/1.0.37
    precision: official_docs
  - url: https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/sdk#sep-29-2026
    precision: official_docs
---
# 2026-10-13-cursor-sdk-subagent-inheritance-is-opt-in-in-1-0-34-and-remains-so-in-1-0

SDK subagent inheritance is opt-in in 1.0.34 and remains so in 1.0.37. TypeScript local SDK embedders can opt Task children into the parent's executor, workspace and tool-limit configuration. Unset does not transmit the parent's allowlist headers. Custom tools can also receive a child session identifier for host-owned per-child state. Declaration and vendor-note evidence does not prove every child enforces every restriction at runtime.

Channel: tagged-release (npm 1.0.34 through inspected 1.0.37). Half: both. Date: 2026-09-29 (1.0.34); 2026-10-01 (1.0.35 custom-tool context).

Operator consequence: Configure local.subagentInherit explicitly and probe a child and a nested child against a denied tool. Do not assume parent restrictions propagate. Binding tool state to sessionId can replace ad hoc child tracking, but each executor and the actual workspace remain the embedder's responsibility.

## Receipt
- https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.34.tgz
- https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.37.tgz
- https://registry.npmjs.org/@cursor%2fsdk/1.0.34
- https://registry.npmjs.org/@cursor%2fsdk/1.0.37
- https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes
- https://cursor.com/docs/release-notes/sdk#sep-29-2026
