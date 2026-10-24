---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openhands-mcp-oauth-installation-and-refresh-improve-while-acp-credential-forwarding-remains-unrelea
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/commit/55c5b7dd54d22fef5bc14ac8b0ce357c16f4f933
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/df393e38d8f1436c14414ab011386fae351c9d83
    precision: commit
  - url: https://github.com/OpenHands/software-agent-sdk/commit/f331fa667b7a55b1573121993a8a843593c75de9
    precision: commit
  - url: https://github.com/OpenHands/enterprise/commit/015214afbfe404a7ea54badb03e51728577d275e
    precision: commit
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/mcp/mcp_tool_call_router.py#L128-L140
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/mcp/mcp_test_router.py#L418-L435
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/commit/87bec04de8e08117399d5cab68042cc794bc2199
    precision: commit
---
# 2026-10-24-openhands-mcp-oauth-installation-and-refresh-improve-while-acp-credential-forwarding-remains-unrelea

MCP OAuth installation and refresh improve, while ACP credential forwarding remains unreleased. Canvas can install library MCP servers that require OAuth without another auth mechanism. SDK registration chooses an authentication method supported by the server and avoids duplicate Basic credentials. A conversation's failed refresh no longer destroys its stored OAuth credentials. Enterprise resolves saved-secret references in the connection-test path, which then rejects OAuth-authenticated probes. The tool-call route expands references only when `server.oauth_auth is None`, avoiding copying OAuth client secrets into refreshed state. These are not general OAuth-server probe support. The separate change forwarding OAuth2 MCP credentials into ACP agents is only on main.

Channel: tagged-release (installation and refresh); main-unreleased (ACP forwarding). Half: both. Date: 2026-10-22 (Canvas v1.31.0 and SDK v1.58.0); 2026-10-23 (Enterprise 1.78.0 and ACP main change).

Operator consequence: Upgrade the matched stable bundle for installation and refresh failures before manually recreating credentials. Test the actual MCP operation, not only the connection indicator. Operators using an ACP engine must not assume stable 1.58.1 includes the forwarding repair. This reduces auth glue and repeated consent work, while backend and engine compatibility still determine which credential path is in use.

## Receipt
- https://github.com/OpenHands/OpenHands/commit/55c5b7dd54d22fef5bc14ac8b0ce357c16f4f933
- https://github.com/OpenHands/software-agent-sdk/commit/df393e38d8f1436c14414ab011386fae351c9d83
- https://github.com/OpenHands/software-agent-sdk/commit/f331fa667b7a55b1573121993a8a843593c75de9
- https://github.com/OpenHands/enterprise/commit/015214afbfe404a7ea54badb03e51728577d275e
- https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/mcp/mcp_tool_call_router.py#L128-L140
- https://github.com/OpenHands/enterprise/blob/1.79.0/openhands/app_server/mcp/mcp_test_router.py#L418-L435
- https://github.com/OpenHands/software-agent-sdk/commit/87bec04de8e08117399d5cab68042cc794bc2199
