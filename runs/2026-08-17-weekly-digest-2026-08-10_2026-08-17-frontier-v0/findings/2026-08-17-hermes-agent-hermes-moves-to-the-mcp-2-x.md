---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-hermes-moves-to-the-mcp-2-x
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/pull/88180
    precision: merged_pr
---
# 2026-08-17-hermes-agent-hermes-moves-to-the-mcp-2-x

Hermes moves to the MCP 2.x SDK.

`mcp==1.28.1` -> `mcp==2.0.0` plus `httpx2==2.7.0` across the dev, mcp and computer-use extras; `FastMCP` -> `mcp.server.MCPServer` on both server entrypoints. The interesting part is the failure class it cleans up: a `mcp_field()` dual-name reader now covers every snake_case/camelCase model field, defusing silent `getattr(x, "camelCase", default)` traps that had been producing empty tool schemas, missed `is_error`, and dropped `structured_content`. The `MCP-Protocol-Version` header is now seeded from the handshake version the body actually speaks rather than the latest. Streamable-HTTP transport arity is accepted for both SDK generations. Back-compat E2E confirms the new client still registers and calls against a legacy mcp==1.28.1 FastMCP server  --  catalog servers stay on 1.x.

Channel: tagged-release. Ancestry: merge_commit_sha e0ce06e358d8e493846d4fb2d7465fbf6995c9c2; compare/e0ce06e3...v2026.8.16.2 -> status=ahead, ahead_by=106, behind_by=0 (ancestor of stable tag v2026.8.16.2).

Operator consequence: Upgrade path is clean for consumers but this is a dependency-floor move: anything in your environment pinning `mcp<2` or `httpx<2` will now conflict. Check your extras before `hermes update`. If you ever saw an MCP server register with empty tool schemas or lose structured content, this is likely the cause and it is now fixed.

## Receipt
- https://github.com/NousResearch/hermes-agent/pull/88180
