---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-mcp-oauth-adds-confidential-clients-and-in-session-login
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/83b56bc5ad9489a47a0eb3edc3e5852f597125be
    precision: commit
  - url: https://github.com/openai/codex/commit/4773a132c3512cc9dcfff1e03bcf57bbbd490cf8
    precision: commit
---
# 2026-10-13-codex-mcp-oauth-adds-confidential-clients-and-in-session-login

MCP OAuth adds confidential clients and in-session login. Pre-registered MCP OAuth clients can supply oauth.client_secret for exchange and refresh. Secrets persist in server configuration but are redacted from debug output and excluded from authorization URLs and OAuth token records. From 0.161.0, /mcp login <name> starts login inside an active TUI session and returns results to its originating thread.

Channel: tagged-release. Half: capability. Date: 2026-09-28 (0.158.0 secrets); 2026-10-07 (0.161.0 TUI login).

Operator consequence: Use 0.158.0 or later for confidential clients and 0.161.0 or later to repair login without leaving the session. Protect server configuration as credential-bearing storage and re-login when configured client identity changes.

## Receipt
- https://github.com/openai/codex/commit/83b56bc5ad9489a47a0eb3edc3e5852f597125be
- https://github.com/openai/codex/commit/4773a132c3512cc9dcfff1e03bcf57bbbd490cf8
