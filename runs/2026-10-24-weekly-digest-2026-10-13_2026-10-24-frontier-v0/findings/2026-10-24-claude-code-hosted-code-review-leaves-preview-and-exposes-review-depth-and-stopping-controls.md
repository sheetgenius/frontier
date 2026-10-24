---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-hosted-code-review-leaves-preview-and-exposes-review-depth-and-stopping-controls
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://claude.dev/blog/solving-code-review-at-anthropic/
    precision: official_docs
  - url: https://web.archive.org/web/20261017030656/https://code.claude.com/docs/en/code-review
    precision: official_docs
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.304
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.307
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.309
    precision: github_release
---
# 2026-10-24-claude-code-hosted-code-review-leaves-preview-and-exposes-review-depth-and-stopping-controls

Hosted Code Review leaves preview and exposes review depth and stopping controls. The hosted Team/Enterprise service is GA. Owners choose Quick, Standard or Deep, with Standard the default and per-repository overrides. The service verifies candidate findings before posting inline comments and a check; it does not approve or block a pull request. Version 307's product notes add `@claude review stop` and aliases to end a review-always subscription; 309 repairs queued pushes still starting reviews after a stop. Local `/code-review` remains a distinct session command available on any plan.

Channel: docs-only. Half: both. Date: 2026-10-15.

Operator consequence: Try native review before maintaining a PR-comment orchestration service, but keep ownership of merge policy and measure false positives and missed bugs on the team's code. Set depth and cost policy per repository, and verify queued work actually stops. Anthropic's account of reduced internal reverts is a vendor report about its own process, not an independently established result of enabling this product.

## Receipt
- https://claude.dev/blog/solving-code-review-at-anthropic/
- https://web.archive.org/web/20261017030656/https://code.claude.com/docs/en/code-review
- https://github.com/anthropics/claude-code/releases/tag/v2.1.304
- https://github.com/anthropics/claude-code/releases/tag/v2.1.307
- https://github.com/anthropics/claude-code/releases/tag/v2.1.309
