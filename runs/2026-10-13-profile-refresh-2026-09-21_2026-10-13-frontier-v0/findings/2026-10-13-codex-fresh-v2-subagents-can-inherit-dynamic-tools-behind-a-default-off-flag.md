---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-fresh-v2-subagents-can-inherit-dynamic-tools-behind-a-default-off-flag
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/e4e33a56b073b5d9a550aaf513798480f88e4a38
    precision: commit
---
# 2026-10-13-codex-fresh-v2-subagents-can-inherit-dynamic-tools-behind-a-default-off-flag

Fresh V2 subagents can inherit dynamic tools behind a default-off flag. With multi_agent_v2_dynamic_tools enabled, fresh V2 subagents started without parent history inherit the parent client-defined dynamic tool definitions and persist them in session metadata. The flag is default-off; this is not ordinary child behavior.

Channel: tagged-release (multi_agent_v2_dynamic_tools off by default). Half: capability. Date: 2026-10-08 (0.162.0).

Operator consequence: Embedders can test fresh-child delegation with dynamic tools on 0.162.0 or later by explicitly enabling the flag. Verify the child calls its intended tools under the authority granted by policy.

## Receipt
- https://github.com/openai/codex/commit/e4e33a56b073b5d9a550aaf513798480f88e4a38
