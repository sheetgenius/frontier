---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-cursor-hooks-beforemcpexecution-gains-server-identity-and-the-doc-tells-allowlist-hooks-to-deny
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20260820212459/https://cursor.com/docs/hooks
    precision: official_docs
  - url: https://web.archive.org/web/20260902233313/https://cursor.com/docs/hooks
    precision: official_docs
---
# 2026-09-21-cursor-hooks-beforemcpexecution-gains-server-identity-and-the-doc-tells-allowlist-hooks-to-deny

Hooks: beforeMCPExecution gains server identity, and the doc tells allowlist hooks to deny on missing names. Before, a hook could only tell which MCP server a call targeted by matching a URL or a free-form command string. Now there is a stable server key.

Channel: docs-only. Half: both. Date: between 2026-08-20 and 2026-09-02 (bracketed by captures).

Operator consequence: Re-audit any MCP allowlist hook: if it matches on `command`, it can be evaded by a server launched with a different path or via `${CURSOR_PLUGIN_ROOT}` expansion. Switch to `mcp_server_name` + `tool_name`, and fail closed when the field is absent (older client builds). Enterprise-managed hooks now reach self-hosted workers, so a managed hook is a control on those machines too.

## Receipt
- https://web.archive.org/web/20260820212459/https://cursor.com/docs/hooks
- https://web.archive.org/web/20260902233313/https://cursor.com/docs/hooks
