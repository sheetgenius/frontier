---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-mcp-rule-names-and-anthropic-proxy-redirects-become-stricter
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.299
    precision: github_release
---
# 2026-10-24-claude-code-mcp-rule-names-and-anthropic-proxy-redirects-become-stricter

MCP rule names and Anthropic proxy redirects become stricter. 299 repairs deny/ask matching for normalized MCP names containing double underscores. Bare mcp__a allow rules and corresponding agent tool lists reach only the intended normalized server, rather than similarly prefixed names. Requests no longer follow redirects at claude.ai connector, Anthropic-hosted MCP and session MCP proxy boundaries; redirects from a connector's own server remain unaffected.

Channel: tagged-release. Half: both. Date: 2026-10-14.

Operator consequence: Use the complete normalized server name in permission rules and inspect connector redirects before rollout. A policy or adapter that depended on prefix matching or proxy redirects can lose previously reachable tools; do not widen rules merely to restore that reach.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.299
