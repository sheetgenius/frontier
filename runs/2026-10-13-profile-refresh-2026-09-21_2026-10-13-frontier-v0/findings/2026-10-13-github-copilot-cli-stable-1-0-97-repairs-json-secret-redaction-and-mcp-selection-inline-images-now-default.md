---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-stable-1-0-97-repairs-json-secret-redaction-and-mcp-selection-inline-images-now-default
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.97
    precision: github_release
  - url: https://github.com/github/copilot-cli/blob/76c3172eb38f/changelog.md?plain=1#L3-L27
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-stable-1-0-97-repairs-json-secret-redaction-and-mcp-selection-inline-images-now-default

Stable 1.0.97 repairs JSON secret redaction and MCP selection; inline images now default on. 1.0.97 repairs secret redaction in --output-format json while preserving valid variable references. Remote plugin and marketplace fetches retry once with the signed-in GitHub token after HTTPS authentication fails. Explicit GitHub MCP tool/toolset selections retain requested write tools through the correct endpoint; cached MCP calls recheck definitions when concurrent discovery refreshes the catalog. Skills and agents from --plugin-dir plugins return to autocomplete and invocation. Inline images render by default on supported terminals without experimental mode; /settings inlineImages false turns them off. The notes do not define the old redaction defect's full reach or token destination restrictions.

Channel: tagged-release. Half: both. Date: 2026-10-13.

Operator consequence: Upgrade to 1.0.97 and review archived JSON for possible secret exposure without assuming every export leaked. Re-test intentionally selected MCP tools and plugin-dir agents. Review authenticated fetch retries and opt out of inline images where terminal rendering is unwanted.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.97
- https://github.com/github/copilot-cli/blob/76c3172eb38f/changelog.md?plain=1#L3-L27
