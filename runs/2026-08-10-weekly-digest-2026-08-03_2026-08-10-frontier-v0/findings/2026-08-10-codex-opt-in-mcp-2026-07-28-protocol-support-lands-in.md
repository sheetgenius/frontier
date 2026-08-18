---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-codex-opt-in-mcp-2026-07-28-protocol-support-lands-in
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.147.0
    precision: github_release
---
# 2026-08-10-codex-opt-in-mcp-2026-07-28-protocol-support-lands-in

Opt-in MCP 2026-07-28 protocol support lands in stable.

Codex adds opt-in support for the MCP 2026-07-28 protocol revision, including paginated discovery (`server/discover`), multi-round requests, and non-blocking server startup so unrelated tools can run while MCP servers come up. The MCP SDK (rmcp) moves to 3.0.0. Related work in the same tag routes MCP OAuth through configured HTTP clients (#35806, #35814) and restricts hosted MCP credentials to local environments (#36306).

Channel: tagged-release. Ancestry: grep of the rust-v0.146.0...rust-v0.147.0 compare commit list finds be2e4afcd7392339d6adbaf0d31b26316bcaa2ab 'Add MCP 2026-07-28 discovery support (#35724)' and a match for (#35725) 'Complete MCP 2026 client support'. Also in that range: (#35742) non-blocking optional MCP startup, (#36001) rmcp upgraded to 3.0.0. First non-prerelease tag containing them is rust-v0.147.0.

Operator consequence: Test against your MCP servers before relying on it, and note it is opt-in, so nothing changes until you turn it on. The interesting operator consequence is the startup change rather than the protocol version: optional MCP servers no longer block a turn, which means a broken or slow server degrades quietly instead of failing loudly. If you were using MCP startup failure as your signal that a tool is unavailable, that signal is now weaker.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.147.0
