---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-18-10-4-lets-extensions-revise-and-execute-the-plan-review-while-tool-approvals-require
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4
    precision: github_release
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/commit/d40b86cf7d6607fc349545ec67ed321023e53425
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L358-L360
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L96-L105
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/pull/15550
    precision: merged_pr
---
# 2026-10-13-omp-18-10-4-lets-extensions-revise-and-execute-the-plan-review-while-tool-approvals-require

18.10.4 lets extensions revise and execute the plan review, while tool approvals require Ctrl+Enter. An extension can answer the interactive plan review while the terminal picker stays live; first answer wins. It can write its own plan revision before answering execute, reopen a dismissed review when the session is idle, and choose an available execution tier with input.role. Execution uses in-overlay edits if present, otherwise the plan file re-read at decision time. This API delegates plan-review choice; it does not itself override downstream tool policy. In the same stable release plain Enter cannot approve a tool call, Ctrl+Enter or Ctrl+Q approves only after a half-second key guard, and an approval timeout denies. Compact prompts depend on the transcript for full tool content unless tool activity is hidden. Writable collab guests still answer host selects.

Channel: tagged-release. Half: both. Date: 2026-10-13 (v18.10.4, published 19:38:04Z).

Operator consequence: On 18.10.4 treat plan review as a software-operable decision, not a human-only stop. Inspect extensions for resolvePlanReview and openPlanReview and restrict discovery with --no-extensions or an exact trusted-extension allowlist when that decision must remain yours. This trades away extension-driven review automation. Learn Ctrl+Enter and read full tool content before approving. The post-release composer-steering redesign is main-only in section 22.

## Receipt
- https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560
- https://github.com/can1357/oh-my-pi/commit/d40b86cf7d6607fc349545ec67ed321023e53425
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L358-L360
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L96-L105
- https://github.com/can1357/oh-my-pi/pull/15550
