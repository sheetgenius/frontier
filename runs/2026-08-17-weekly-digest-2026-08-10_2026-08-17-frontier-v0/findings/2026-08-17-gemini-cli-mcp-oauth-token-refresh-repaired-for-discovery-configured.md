---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-gemini-cli-mcp-oauth-token-refresh-repaired-for-discovery-configured
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/28481
    precision: merged_pr
---
# 2026-08-17-gemini-cli-mcp-oauth-token-refresh-repaired-for-discovery-configured

MCP OAuth token refresh repaired for discovery-configured servers.

For MCP servers added via OAuth discovery plus dynamic client registration (`gemini mcp add --transport http ...` with no explicit `oauth` block), `DynamicStoredOAuthProvider` passed an empty OAuth config to `refreshAccessToken`, which threw on the missing `clientId` before any network call  --  and the catch block then deleted the stored credentials, so every reconnect forced a fresh interactive re-auth. `getValidToken` had the same gap and returned null silently. The fix resolves `config.clientId ?? credentials.clientId`, passes it into the refresh call, and persists it when saving the refreshed token in both paths. Fixes issue #27745.

Channel: tagged-release. Ancestry: `git tag --contains eef19f25c` -> v0.55.1 (stable, non-prerelease per `gh api .../releases/tags/v0.55.1` prerelease:false). Commit eef19f25c325f35634bdf5fdea5f245414ed4390 merged to main 2026-08-10T19:49Z; first stable tag containing it is v0.55.1, published 2026-08-11T21:15Z.

Operator consequence: Upgrade to v0.55.1 if you run OAuth-backed MCP servers that were registered by discovery. Before this, refresh never worked for that class of server and the failure destroyed recoverable credentials  --  meaning any long-running or headless session against such a server would eventually stall waiting for a human to re-authorize. After upgrading, confirm your stored credentials survive a reconnect rather than assuming it.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/28481
