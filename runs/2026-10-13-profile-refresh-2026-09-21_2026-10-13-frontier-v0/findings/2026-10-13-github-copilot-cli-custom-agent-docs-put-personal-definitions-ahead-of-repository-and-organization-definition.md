---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-custom-agent-docs-put-personal-definitions-ahead-of-repository-and-organization-definition
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/docs/commit/cf14212193e2ca638e086760c8f88008b1c60e23
    precision: commit
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md?plain=1#L1293-L1311
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-custom-agent-docs-put-personal-definitions-ahead-of-repository-and-organization-definition

Custom-agent docs put personal definitions ahead of repository and organization definitions. Personal ~/.copilot/agents definitions win same-ID collisions over repository agents. Deduplication is by ID, not display name. Every project .github/agents directory precedes every project .claude/agents directory; then come added roots, plugins, and remote organization/enterprise agents at lowest priority. Same-name agents with different IDs can both load, and ambiguous selection uses the first match in that order.

Channel: docs-only. Half: both. Date: 2026-09-30.

Operator consequence: Inspect the selected definition when personal, repository or remote agents share an ID or name. Do not assume an organization-provided agent takes precedence locally. Keep managed permission policy distinct from custom-agent definition precedence.

## Receipt
- https://github.com/github/docs/commit/cf14212193e2ca638e086760c8f88008b1c60e23
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md?plain=1#L1293-L1311
