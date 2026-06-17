---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-gemini-cli-ci-fork-access
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.46.0-preview.0"
status: accepted_signal
change_type: workflow
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Commit title: 'fix(ci): use pull_request_target trigger to grant write access on fork PRs (#27637)' with 1 addition 1 deletion to .github/workflows/pr-size-labeler.yml line 4"
    url: https://github.com/google-gemini/gemini-cli/commit/cfcecebe8069f3714641a68e2898593698f739ba
    precision: commit
---
# CI Workflow: pull_request_target for Fork PR Write Access

## What Changed

PR size labeler workflow trigger changed from pull_request to pull_request_target event. This grants necessary write permissions when processing pull requests from forked repositories, enabling automated labeling in fork-based PRs.

## Operator Implication

Enables automated PR size labeling to work consistently across both internal and forked PRs. Eliminates permission errors for fork-based contributions. Improves CI/CD consistency for open-source workflows.

## Receipt

- [Commit title: 'fix(ci): use pull_request_target trigger to grant write access on fork PRs (#27637)' with 1 addition 1 deletion to .github/workflows/pr-size-labe](https://github.com/google-gemini/gemini-cli/commit/cfcecebe8069f3714641a68e2898593698f739ba)
