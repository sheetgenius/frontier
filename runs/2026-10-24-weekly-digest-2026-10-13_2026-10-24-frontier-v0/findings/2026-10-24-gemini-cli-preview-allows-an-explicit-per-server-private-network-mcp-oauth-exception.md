---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-preview-allows-an-explicit-per-server-private-network-mcp-oauth-exception
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/b041de0171144b3dc7d31822196bc21761817ad0
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/mcp/oauth-utils.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/docs/tools/mcp-server.md
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-preview-allows-an-explicit-per-server-private-network-mcp-oauth-exception

Preview allows an explicit per-server private-network MCP OAuth exception. `oauth.allowPrivateNetwork` defaults off and can be enabled for a specific MCP server. It permits the documented private address ranges and internal/local hostnames in OAuth endpoint validation. HTTPS is still required for non-loopback endpoints; link-local addresses remain blocked, loopback has a separate control, and resolved addresses are checked. The exception is scoped to MCP OAuth, not arbitrary web-fetch access.

Channel: preview-or-beta. Half: both. Date: 2026-10-20.

Operator consequence: An enterprise MCP integration with an internal authorization server can now try the regular preview without a public-endpoint workaround. Review the specific endpoints and DNS resolution before enabling the option. The harness removes infrastructure scaffolding but moves the trust decision into a durable, visible per-server setting.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/b041de0171144b3dc7d31822196bc21761817ad0
- https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/packages/core/src/mcp/oauth-utils.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/docs/tools/mcp-server.md
