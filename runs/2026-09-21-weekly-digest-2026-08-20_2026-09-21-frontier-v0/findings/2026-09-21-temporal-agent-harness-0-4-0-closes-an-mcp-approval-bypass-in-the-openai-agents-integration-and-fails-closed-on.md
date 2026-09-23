---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-temporal-agent-harness-0-4-0-closes-an-mcp-approval-bypass-in-the-openai-agents-integration-and-fails-closed-on
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/pull/128
    precision: merged_pr
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/ai_sdks/openai_agents/_openai_runner.py#L181-L189
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/ai_sdks/openai_agents_harness.py#L542
    precision: tagged_commit_file
---
# 2026-09-21-temporal-agent-harness-0-4-0-closes-an-mcp-approval-bypass-in-the-openai-agents-integration-and-fails-closed-on

0.4.0 closes an MCP approval bypass in the OpenAI Agents integration, and fails closed on unwrapped servers. The PR body says "MCP tools right now bypasses tool approvals + event emission. This fixes that." At 0.3.0, the first PyPI version, MCP tools in the OpenAI Agents SDK integration ran with no approval gate and no tool events. At 0.4.0 an MCP server must be wrapped with `as_harness_mcp_server(...)` or the run raises. The `inherently_safe` flag applies to the whole server, not per tool; the PR itself flags that as a TODO. The 0.4.0 release notes mention only Observable agent state and say nothing about this fix.

Channel: preview-or-beta (0.4.0 tag and PyPI 0.4.0). Half: both. Date: merged 2026-09-14T21:27:30Z (#128, c01a9f0e3b71); shipped in the 0.4.0 wheel 2026-09-16.

Operator consequence: Anyone on the 0.3.0 wheel with MCP servers under the OpenAI Agents integration should upgrade and re-audit what those tools did, because none of it was gated or logged as tool events. On upgrade, expect a hard ValueError until each server is wrapped. Marking a server `inherently_safe` auto-approves every tool it exposes under `allow_inherently_safe()`.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/pull/128
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/ai_sdks/openai_agents/_openai_runner.py#L181-L189
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/ai_sdks/openai_agents_harness.py#L542
