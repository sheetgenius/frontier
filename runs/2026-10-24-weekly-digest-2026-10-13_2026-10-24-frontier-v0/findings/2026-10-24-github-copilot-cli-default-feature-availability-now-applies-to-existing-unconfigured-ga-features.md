---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-default-feature-availability-now-applies-to-existing-unconfigured-ga-features
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/docs/commit/2843f3a6c3f21ac46f6503475a24b0080059490d
    precision: commit
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/enterprise/default-availability.md
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-default-feature-availability-now-applies-to-existing-unconfigured-ga-features

Default feature availability now applies to existing unconfigured GA features. For Business/Enterprise governance, the default policy now covers new and existing unconfigured GA features, including the features/clients policy surface and MCP policy. The preceding notice said it was enabled by default and scheduled activation for 2026-10-22. Preview features are excluded. Explicit settings take priority, and Store local sessions in the Cloud for CLI/VS Code is specifically excluded. Model availability has a separate policy and does not select a session's default model.

Channel: docs-only. Half: both. Date: 2026-10-23.

Operator consequence: Inspect unconfigured feature/client policies and enterprise-to-organization delegation instead of assuming an earlier untouched setting remains disabled. Set intentional exceptions explicitly. This can remove repeated administrator enablement work, but moves judgment to the standing default. The docs do not prove any particular tenant's effective settings or rollout completion.

## Receipt
- https://github.com/github/docs/commit/2843f3a6c3f21ac46f6503475a24b0080059490d
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/enterprise/default-availability.md
