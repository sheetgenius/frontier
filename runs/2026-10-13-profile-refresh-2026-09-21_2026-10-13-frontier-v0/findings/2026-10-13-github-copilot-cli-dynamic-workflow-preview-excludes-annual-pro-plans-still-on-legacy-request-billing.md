---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-dynamic-workflow-preview-excludes-annual-pro-plans-still-on-legacy-request-billing
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/docs/commit/1230337ad5f6292d236569791a6fe5d79777c76f
    precision: commit
  - url: https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/concepts/agents/dynamic-workflows.md?plain=1#L68-L72
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-dynamic-workflow-preview-excludes-annual-pro-plans-still-on-legacy-request-billing

Dynamic workflow preview excludes annual Pro plans still on legacy request billing. Dynamic workflows are documented for the CLI, Copilot app and SDK. Availability covers Copilot plans except existing annual Pro/Pro+ subscribers who remain on legacy premium request billing. The feature remains public preview and has no CLI introduction version in the changelog.

Channel: docs-only. Half: capability. Date: 2026-10-05.

Operator consequence: Check plan and billing eligibility before proposing a workflow trial. A documented command does not make the preview available to every paid account. Keep permission pre-grants and extension code review in the trial scope.

## Receipt
- https://github.com/github/docs/commit/1230337ad5f6292d236569791a6fe5d79777c76f
- https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/concepts/agents/dynamic-workflows.md?plain=1#L68-L72
