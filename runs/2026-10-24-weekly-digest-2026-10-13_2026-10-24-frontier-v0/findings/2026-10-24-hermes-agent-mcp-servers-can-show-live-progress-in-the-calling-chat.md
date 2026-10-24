---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-mcp-servers-can-show-live-progress-in-the-calling-chat
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/60affe7fe2ce8ac96e3208fc97dc092617498b33
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/bcb054ccc1bb45b48d0e7f5b9bfafe8f9b73f2c7
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/mcp_tool_handlers.py
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-mcp-servers-can-show-live-progress-in-the-calling-chat

MCP servers can show live progress in the calling chat. MCP tool calls carry progress tokens and forward server progress notifications as per-call `tool.progress` events into CLI, gateway and Desktop surfaces. The follow-up keys display state by chat and tool call, shows CLI progress only for its own call, and releases ephemeral stores.

Channel: tagged-release. Half: capability. Date: 2026-10-21.

Operator consequence: Use live progress during long tool calls to distinguish ongoing work from silence before interrupting or submitting duplicate work. Progress is server-reported activity, not completion or a billing receipt. Measure whether it actually reduces operator interruptions in the chosen integration.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/60affe7fe2ce8ac96e3208fc97dc092617498b33
- https://github.com/NousResearch/hermes-agent/commit/bcb054ccc1bb45b48d0e7f5b9bfafe8f9b73f2c7
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/tools/mcp_tool_handlers.py
