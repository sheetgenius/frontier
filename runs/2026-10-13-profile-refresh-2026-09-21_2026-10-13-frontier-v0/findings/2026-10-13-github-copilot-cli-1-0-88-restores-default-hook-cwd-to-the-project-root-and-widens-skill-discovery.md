---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-1-0-88-restores-default-hook-cwd-to-the-project-root-and-widens-skill-discovery
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.88
    precision: github_release
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L171-L178
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-1-0-88-restores-default-hook-cwd-to-the-project-root-and-widens-skill-discovery

1.0.88 restores default hook cwd to the project root and widens skill discovery. Hooks without explicit cwd again execute at the project root instead of the session current directory. Skill discovery supports namespaced custom skills and ignored skill directories. The note dates these repairs but does not establish that discovered content ran before trust.

Channel: tagged-release. Half: both. Date: 2026-09-22.

Operator consequence: Review relative hook paths when upgrading and supply an explicit cwd when the execution location matters. Inspect newly discoverable skills, including ignored directories, rather than assuming ignored means invisible to the agent.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.88
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L171-L178
