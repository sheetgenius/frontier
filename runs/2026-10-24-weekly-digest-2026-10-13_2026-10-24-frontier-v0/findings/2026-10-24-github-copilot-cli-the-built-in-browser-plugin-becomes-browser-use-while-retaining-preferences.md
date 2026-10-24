---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-the-built-in-browser-plugin-becomes-browser-use-while-retaining-preferences
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
  - url: https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L94
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-the-built-in-browser-plugin-becomes-browser-use-while-retaining-preferences

The built-in browser plugin becomes browser-use while retaining preferences. The built-in browser plugin is renamed to browser-use. Existing browser-plugin preferences continue to work after upgrade, according to the same release note.

Channel: tagged-release. Half: capability. Date: 2026-10-19.

Operator consequence: Update inventory checks, internal instructions, and name-based automation to recognize browser-use. Do not count the rename as a second independent plugin or reset preferences on the assumption that the old identity was discarded. No new browser authority or containment guarantee follows from this naming change.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.100
- https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L94
