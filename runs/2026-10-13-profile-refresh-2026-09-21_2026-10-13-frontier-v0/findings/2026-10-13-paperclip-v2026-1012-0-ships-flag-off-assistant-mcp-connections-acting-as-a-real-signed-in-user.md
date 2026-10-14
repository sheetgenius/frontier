---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-v2026-1012-0-ships-flag-off-assistant-mcp-connections-acting-as-a-real-signed-in-user
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/shared/src/feature-catalog.ts#L116-L122
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/public-mcp.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/pull/14846
    precision: merged_pr
---
# 2026-10-13-paperclip-v2026-1012-0-ships-flag-off-assistant-mcp-connections-acting-as-a-real-signed-in-user

v2026.1012.0 ships flag-off assistant MCP connections acting as a real signed-in user. Assistant connections use browser OAuth with PKCE/rotating refresh/revocation or device consent through paperclip mcp. Claude Code, Codex, OpenCode and other MCP clients can read/search tasks and documents; write-consented clients can create/delegate work and leave human comments, with signed event webhooks and human/client mutation attribution. It requires an authenticated deployment with real users, explicitly enabling Assistant connections, and a suitable public origin (HTTPS except loopback). Implicit local-trusted board identity and agent keys cannot approve OAuth consent. Consent binds a selected company; read-only consent does not permit delegation. Revocation stops future calls but does not cancel previously delegated work. PAPERCLIP_PUBLIC_MCP_ENABLED is retired.

Channel: tagged-release (flag-off). Half: capability. Date: 2026-10-12.

Operator consequence: Try a test company with proper user authentication and an HTTPS public URL if people already work in coding assistants and want durable handoffs. Keep edge rate limiting and consent scope explicit. This makes the assistant a person-authorized client of the control plane rather than only an internal worker. A shipped off-by-default feature is not evidence that a particular Cloud tenant has enabled it.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/shared/src/feature-catalog.ts#L116-L122
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/public-mcp.md
- https://github.com/paperclipai/paperclip/pull/14846
