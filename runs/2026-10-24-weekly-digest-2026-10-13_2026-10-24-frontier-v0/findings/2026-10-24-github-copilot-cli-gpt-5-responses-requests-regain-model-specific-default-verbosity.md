---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-gpt-5-responses-requests-regain-model-specific-default-verbosity
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.103
    precision: github_release
  - url: https://github.com/github/copilot-cli/blob/7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120/changelog.md#L7
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/@github/copilot/1.0.103
    precision: official_docs
---
# 2026-10-24-github-copilot-cli-gpt-5-responses-requests-regain-model-specific-default-verbosity

GPT-5 Responses requests regain model-specific default verbosity. Model-specific default Responses verbosity now applies correctly for GPT-5 models unless session verbosity is explicitly set. No universal verbosity value or numerical token saving is stated.

Channel: tagged-release. Half: defect. Date: 2026-10-22.

Operator consequence: Recheck output-length expectations and evaluation settings after moving to 1.0.103. Set session verbosity explicitly when a comparison requires it, and record the selected model. This is a default-sensitive request repair, not evidence of improved answer correctness or lower billed cost.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.103
- https://github.com/github/copilot-cli/blob/7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120/changelog.md#L7
- https://registry.npmjs.org/@github/copilot/1.0.103
