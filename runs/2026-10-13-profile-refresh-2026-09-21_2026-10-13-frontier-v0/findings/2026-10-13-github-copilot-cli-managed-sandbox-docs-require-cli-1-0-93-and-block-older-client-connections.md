---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-managed-sandbox-docs-require-cli-1-0-93-and-block-older-client-connections
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/docs/commit/6c2c8cdcebf9fc0887c96220a6a5b616da300983
    precision: commit
  - url: https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L463-L471
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-managed-sandbox-docs-require-cli-1-0-93-and-block-older-client-connections

Managed sandbox docs require CLI 1.0.93 and block older client connections. The closing enterprise reference says adding the sandbox key to managed settings requires clients supporting local sandboxing. Connections remain blocked until users update to the minimum client version, which is CLI 1.0.93. This differs from the generic 1.0.94 update-guidance note that says normal prompts are not blocked.

Channel: docs-only. Half: both. Date: 2026-10-13.

Operator consequence: Inventory fleet client versions before applying managed sandbox policy. 1.0.88 closes the session-entry-point policy gap but does not meet this later managed-sandbox minimum. Upgrade to closing stable 1.0.97 and separately inspect host sandbox prerequisites and failIfUnavailable; client version eligibility is not host containment.

## Receipt
- https://github.com/github/docs/commit/6c2c8cdcebf9fc0887c96220a6a5b616da300983
- https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L463-L471
