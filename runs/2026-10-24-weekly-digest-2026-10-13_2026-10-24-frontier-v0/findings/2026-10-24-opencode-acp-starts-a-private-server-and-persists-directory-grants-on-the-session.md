---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-acp-starts-a-private-server-and-persists-directory-grants-on-the-session
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/acp.mdx
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/commands/handlers/acp.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/acp/directories.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/acp/sessions.ts
    precision: tagged_commit_file
---
# 2026-10-24-opencode-acp-starts-a-private-server-and-persists-directory-grants-on-the-session

ACP starts a private server and persists directory grants on the session. The standing editor surface is `opencode acp`, using ACP protocol 1 over stdin/stdout. The handler starts a private, password-authenticated standalone OpenCode server; it does not attach to the shared background service or put ACP itself on a network port. It uses existing provider credentials or the supported terminal login flow. Load/resume/fork require the correct absolute session working directory. Additional-directory grants are saved on the session, remain relevant when another OpenCode client uses it, and are copied to new child sessions; they do not disable read/edit/shell rules. Client-supplied stdio or HTTP MCP servers are registered for the directory for that ACP process's life, can replace a configured server of the same name, and use supplied headers rather than OAuth. Policies still apply. MCP over ACP and MCP-over-SSE advertisement are not supported in the documented contract.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Pin the executable launched by the editor and test authentication, cancellation, resume and approval delivery with the actual editor version. Review persistent directory grants and any client-supplied MCP configuration before assuming editor access is confined to one visible tab. ACP deletes custom editor integration glue, but this process model is an exception to the shared-service story. No marketplace extension version or third-party editor compatibility matrix was verified here.

## Receipt
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/acp.mdx
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/commands/handlers/acp.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/acp/directories.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/acp/sessions.ts
