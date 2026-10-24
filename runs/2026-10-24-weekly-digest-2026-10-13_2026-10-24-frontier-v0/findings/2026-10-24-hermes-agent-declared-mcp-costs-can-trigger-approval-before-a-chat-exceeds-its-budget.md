---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-declared-mcp-costs-can-trigger-approval-before-a-chat-exceeds-its-budget
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/4baddd2606d0e30ef9f971aa16838c6cd550b0e3
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/mcp_tool_costs.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/mcp_tool_handlers.py#L55-L165
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/meshy.yaml
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-declared-mcp-costs-can-trigger-approval-before-a-chat-exceeds-its-budget

Declared MCP costs can trigger approval before a chat exceeds its budget. MCP servers can declare `tool_costs`, `spend_limit`, and `cost_unit`. Hermes reserves declared cost under a lock before dispatch; range declarations use their upper bound. The tally is scoped to a profile/server/chat, transfers across compaction/branch handling, and treats cron run IDs separately. An over-limit call needs explicit consent, even for a fully trusted server; lack of a usable approval channel fails closed. The tally is in process memory, not a durable billing ledger, and an undeclared or zero-priced tool has no cost gate. The official Meshy catalog entry supplies a concrete use: version 0.4.0 pins plugin `c16e967d798d8dd3b1827a62673c18627f31e0ed`, pins `@meshy-ai/meshy-mcp-server@0.6.5`, and declares paid-call estimates and a 200-credit per-chat threshold.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Configure estimates and limits before delegating paid MCP work; check vendor billing separately. This is an approval threshold, not a hard account spending cap, and restarts do not preserve its accounting. For Meshy, the catalog also discloses the API key, Node requirement, and content sent to Meshy's API. The primitive lets an agent operate a paid tool with fewer ad hoc wrapper checks, but the operator still owns prices, permissions, and explicit over-budget decisions.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/4baddd2606d0e30ef9f971aa16838c6cd550b0e3
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/mcp_tool_costs.py
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/mcp_tool_handlers.py#L55-L165
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/meshy.yaml
