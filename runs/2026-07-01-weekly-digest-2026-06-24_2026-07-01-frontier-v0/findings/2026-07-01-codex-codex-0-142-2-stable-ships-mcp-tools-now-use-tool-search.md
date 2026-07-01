---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-codex-codex-0-142-2-stable-ships-mcp-tools-now-use-tool-search
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/pull/29486
    precision: merged_pr
---
# 2026-07-01-codex-codex-0-142-2-stable-ships-mcp-tools-now-use-tool-search

Codex 0.142.2 stable ships: MCP tools now use tool search by default when supported (channel: tagged-release, 2026-06-25). Operator consequence: Runtime behavior change for anyone wiring MCP servers into Codex: tool discovery now defaults to tool-search rather than dumping the full tool list. Re-verify that your MCP-backed workflows still resolve the tools you expect against your model/provider; older models retain compatibility but discovery path differs. Upgrade to 0.142.2+ to get it. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/openai/codex/pull/29486
