---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-custom-agents-receive-tools-declared-through-the-documented-aliases
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.100
    precision: github_release
  - url: https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L70
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-custom-agents-receive-tools-declared-through-the-documented-aliases

Custom agents receive tools declared through the documented aliases. Custom agents declaring search, web, todo, or github-mcp-server/web_search now receive the matching tools. This repairs tool availability and is distinct from 1.0.102's inheritance of approvals for tools already granted.

Channel: tagged-release. Half: both. Date: 2026-10-19.

Operator consequence: Retest affected custom-agent definitions and inspect the tools they now expose before retaining a missing-tool workaround. A previously absent tool may now become callable; check a denied request as well as a successful one. Correct declaration resolution does not establish approval confinement or task quality.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.100
- https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L70
