---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-tools-stopped-being-a-strict-allowlist-once-codemode-or-tool-search-is-in-the-list-1-0
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v1.0.4
    precision: github_release
  - url: https://github.com/earendil-works/pi/commit/04b97ef0007ad2d55615d0a545163387a701fc67
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/cli.md#L111-L138
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1541-L1556
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/settings.md#L303
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/mcp-servers.ts#L12-L40
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/index.ts#L466-L488
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-tools-stopped-being-a-strict-allowlist-once-codemode-or-tool-search-is-in-the-list-1-0

`--tools` stopped being a strict allowlist once `codemode` or `tool_search` is in the list (1.0.4). Through 0.87.0 the docs described --tools as a strict allowlist; the profile treated defaultTools as the nearest permission boundary. From 1.0.4, pi --tools read,codemode retains registered MCP tools with codemode/deferred exposure for scripts; active direct tools are also callable, hidden and inactive direct tools are not. An entry starting with mcp__ or an empty allowlist applies MCP filtering. --exclude-tools 'mcp__*' matches namespaced server tools but misses list_mcp_resources, list_mcp_resource_templates, and read_mcp_resource, which can reach resource-enabled non-hidden servers. The release calls retained MCP tools a fix because 0.99.0 through 1.0.3 left pi --tools codemode with no MCP servers. Plain lists without a route to codemode/deferred tools retain the narrower behavior. +codemode,-write edits defaults, project modifiers apply on top of user settings, and * patterns work in selection/exclusion.

Channel: tagged-release. Half: both. Date: 2026-10-05.

Operator consequence: Inspect CI/wrapper selections containing codemode or tool_search against the exposure-qualified callable set, not just declarations. Use `--no-mcp` for complete built-in MCP shutdown. For tool exclusions, include all three resource-tool names alongside mcp__*; a namespaced allowlist can narrow access to selected servers. Neither tool visibility nor a name filter proves that stdio processes or command-valued configuration never run. Plain lists such as read,grep,find,ls retain their previous narrower behavior.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v1.0.4
- https://github.com/earendil-works/pi/commit/04b97ef0007ad2d55615d0a545163387a701fc67
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/cli.md#L111-L138
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1541-L1556
- https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/settings.md#L303
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/mcp-servers.ts#L12-L40
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/index.ts#L466-L488
