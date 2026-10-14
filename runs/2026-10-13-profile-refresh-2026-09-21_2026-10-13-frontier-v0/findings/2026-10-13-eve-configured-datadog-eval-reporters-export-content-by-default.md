---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-configured-datadog-eval-reporters-export-content-by-default
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/f0a9ee199cc3ea0048d4d8c527888d888f8bade6
    precision: commit
  - url: https://github.com/vercel/eve/releases/tag/eve%400.69.0
    precision: github_release
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/docs/evals/reporters.mdx
    precision: tagged_commit_file
---
# 2026-10-13-eve-configured-datadog-eval-reporters-export-content-by-default

Configured Datadog eval reporters export content by default. The Datadog reporter changes from metadata/scores by default to recording eval prompts, outputs, authored expectations, errors and assertion details. It reuses a dataset across runs for comparison. Without Datadog credentials it skips reporting; the respective record options can disable content.

Channel: tagged-release. Half: both. Date: 2026-10-01 (eve@0.69.0).

Operator consequence: Before running sensitive fixtures, review recordInputs, recordOutputs, recordExpectedOutputs, recordErrors and recordAssertionDetails and set them false where necessary. Review this separately from runtime audience-based trace policy; its unchanged table does not establish unchanged eval export.

## Receipt
- https://github.com/vercel/eve/commit/f0a9ee199cc3ea0048d4d8c527888d888f8bade6
- https://github.com/vercel/eve/releases/tag/eve%400.69.0
- https://github.com/vercel/eve/blob/eve%400.79.0/docs/evals/reporters.mdx
