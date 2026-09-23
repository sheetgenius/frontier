---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-gemini-cli-v0-59-0-and-v0-60-0-harden-mcp-oauth-web-fetch-credentials-and-extensions
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0
    precision: github_release
  - url: https://github.com/google-gemini/gemini-cli/pull/29216
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.60.0/packages/core/src/services/environmentSanitization.ts
    precision: tagged_commit_file
---
# 2026-09-21-gemini-cli-v0-59-0-and-v0-60-0-harden-mcp-oauth-web-fetch-credentials-and-extensions

v0.59.0 makes workspace trust fail closed on environment signals, drops repository mcpServers in an untrusted a2a-server, and adds an SSRF guard to MCP OAuth metadata discovery covering loopback, private and metadata addresses (PRs 29099, 29081). v0.60.0 requires a matching iss in MCP OAuth responses (RFC 9207, PR 29117), makes web_fetch refuse private, loopback and metadata destinations and pin the resolved IP (PR 29120), stops container sandboxes mounting the host ~/.gemini OAuth and MCP token stores (PR 29216), re-prompts consent when an extension changes its env and strips NODE_OPTIONS-class variables (PR 28863), bounds read-only shell auto-approval to the workspace and makes ln -s ask (PR 29170), and skips system settings files writable by non-root users (PR 29115).

Channel: tagged-release (v0.59.0 2026-09-08, v0.60.0 2026-09-15). Half: both.

Operator consequence: 0.60.0 breaks MCP OAuth servers that omit iss and breaks web_fetch against a local dev server; both are intended. Read the new extension consent prompt instead of accepting it. Container-sandbox users no longer expose host tokens to the box.

## Receipt
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0
- https://github.com/google-gemini/gemini-cli/pull/29216
- https://github.com/google-gemini/gemini-cli/blob/v0.60.0/packages/core/src/services/environmentSanitization.ts
