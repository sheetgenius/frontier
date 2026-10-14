---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-mcp-scopes-and-slash-name-filters-repaired-in-1-0-89-pre-discovery-toggles-repaired-in-1
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L127-L133
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L24
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.89
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.94
    precision: github_release
---
# 2026-10-13-github-copilot-cli-mcp-scopes-and-slash-name-filters-repaired-in-1-0-89-pre-discovery-toggles-repaired-in-1

MCP scopes and slash-name filters repaired in 1.0.89; pre-discovery toggles repaired in 1.0.94. 1.0.89 makes pre-registered MCP OAuth clients honor configured oauthScopes and repairs server/tool and server/* filters for tool names containing a slash. In 1.0.94, MCP enable/disable works before server discovery without starting the servers. These are documented selection, authorization and startup repairs, not proof of a particular prior exploit.

Channel: tagged-release. Half: both. Date: 2026-09-28 and 2026-10-08.

Operator consequence: Re-test restricted OAuth scopes and slash-containing tool filters, plus scripts that disable MCP servers before discovery. Distinguish server selection, credential scopes and effective tool permission; one repaired selector does not prove the other layers bind.

## Receipt
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L127-L133
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L24
- https://github.com/github/copilot-cli/releases/tag/v1.0.89
- https://github.com/github/copilot-cli/releases/tag/v1.0.94
