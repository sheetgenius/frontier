---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-local-mcp-connections-negotiate-protocol-2026-07-28-by-default-on-latest
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L368
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L202
    precision: tagged_commit_file
---
# 2026-10-13-claude-code-local-mcp-connections-negotiate-protocol-2026-07-28-by-default-on-latest

Local MCP connections negotiate protocol 2026-07-28 by default on latest. Local MCP negotiation of this protocol version no longer depends on provider or a flag fetch. The same default reaches claude.ai connectors without flag fetching in 2.1.295. This establishes negotiation, not which additional protocol features any server implements.

Channel: tagged-release (latest only; stable 2.1.287 lacks both). Half: capability. Date: 2026-10-06 (2.1.292), 2026-10-08 (2.1.295).

Operator consequence: Re-test local MCP servers and connector handshakes before moving from stable to latest. Use `MCP_PROTOCOL_NEGOTIATION=legacy` as the documented compatibility fallback while fixing a server. Do not equate negotiation with a new server capability.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L368
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L202
