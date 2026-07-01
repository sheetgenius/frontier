---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-hermes-agent-mcp-oauth-401-recovery-task-no-longer-garbage-collected
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/55952
    precision: merged_pr
---
# 2026-07-01-hermes-agent-mcp-oauth-401-recovery-task-no-longer-garbage-collected

MCP OAuth 401 recovery task no longer garbage-collected mid-flight (fixes hung reconnections) (channel: main-unreleased, 2026-06-30). Operator consequence: Reliability fix on the MCP-persistence surface (this window's carry-forward theme). handle_401() spawned recovery tasks with asyncio.create_task() but dropped the handle; the event loop's weak reference let the coroutine be GC'd between awaits, hanging concurrent callers forever and 'poisoning' the manager for that token until process restart. Fix anchors tasks in an _inflight_tasks set with add_done_callback cleanup (tools/mcp_oauth_manager.py). Operators wrapping Hermes as an MCP client with OAuth-authed servers should watch/upgrade for reconnection reliability; still main-only, not yet tagged (merge SHA 20ca2d5). Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/55952
