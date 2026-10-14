---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-windows-delete-confinement-improves-in-0-1-7-workspace-low-labels-persist-and-require-modu
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/d5ad3baeb5d531e31da5e586c3ec3ebedd825169
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-windows-acl/README.md#L125-L130
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/SAFETY.md
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-windows-delete-confinement-improves-in-0-1-7-workspace-low-labels-persist-and-require-modu

Windows delete confinement improves in 0.1.7; workspace Low labels persist and require module revocation. The vendor's fix confines Windows deletes using Low-integrity execution and workspace security-descriptor changes. Workspace Low labels and access entries persist after DSH exits by design; cleanup must use the ACL module's revocation path. Manual icacls cleanup of the derived SID can fail. A standing Low label broadens access for other Low-integrity processes while it remains. Discretionary permissions still matter; a Low label alone is not universal write permission. No matching Windows-delete advisory was found in the checked sources.

Channel: preview-or-beta. Half: both. Date: 2026-09-22 (alpha.1); first rc 2026-09-23 (0.1.7-rc.1).

Operator consequence: Move Windows evaluations off 0.1.5-rc.x/0.1.6-alpha.x to the current rc and review what directories receive grants. Avoid granting a home directory, drive root or install directory as a writable workspace. Use the documented module revocation path for cleanup rather than calling the changes irrevocable. Keep an outer disposable environment around the evaluation, as SAFETY.md recommends.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/d5ad3baeb5d531e31da5e586c3ec3ebedd825169
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-windows-acl/README.md#L125-L130
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/SAFETY.md
