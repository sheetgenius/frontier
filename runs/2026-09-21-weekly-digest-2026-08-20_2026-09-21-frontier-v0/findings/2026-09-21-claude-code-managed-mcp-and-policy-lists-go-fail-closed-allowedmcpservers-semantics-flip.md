---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-managed-mcp-and-policy-lists-go-fail-closed-allowedmcpservers-semantics-flip
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.259
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.273
    precision: github_release
---
# 2026-09-21-claude-code-managed-mcp-and-policy-lists-go-fail-closed-allowedmcpservers-semantics-flip

2.1.259 (2026-09-02): an unparseable managed-settings file, drop-in, MDM plist or HKLM value was silently unenforced and now refuses to start; allowedMcpServers now governs only user-added servers, so a managed-mcp.json server the allowlist used to filter loads on upgrade; managedMcpServers ships HTTP and SSE servers to every user. 2.1.267: unreadable allowedHttpHookUrls, httpHookAllowedEnvVars and allowedChannelPlugins admit nothing rather than everything. 2.1.271: an unreadable managed-mcp.json keeps exclusive MCP control instead of being ignored; a cached org policy was reused after switching accounts. 2.1.273: allowManagedMcpServersOnly, deniedMcpServers and disableClaudeAiConnectors set via MDM or managed-settings.json were ignored when server-managed settings were also present.

Channel: tagged-release (2.1.259, 2.1.267 on stable; 2.1.271, 2.1.273 latest only). Half: both.

Operator consequence: If allowedMcpServers filtered managed-mcp.json, move exclusions to deniedMcpServers and check /mcp. Fleets layering MDM on server-managed settings had no working MCP deny list or connector kill switch before 2.1.273, and stable 2.1.267 still lacks that fix. A managed-settings file with a syntax error will now stop Claude Code from starting; fix it before rolling.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.259
- https://github.com/anthropics/claude-code/releases/tag/v2.1.273
