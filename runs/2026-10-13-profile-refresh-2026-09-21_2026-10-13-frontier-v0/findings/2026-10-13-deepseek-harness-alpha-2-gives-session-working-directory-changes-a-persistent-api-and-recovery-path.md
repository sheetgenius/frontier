---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-alpha-2-gives-session-working-directory-changes-a-persistent-api-and-recovery-path
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/working-directory/README.md#L42
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/working-directory/README.md#L80
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/tool-working-directory/README.md#L28
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-alpha-2-gives-session-working-directory-changes-a-persistent-api-and-recovery-path

Alpha.2 gives Session working-directory changes a persistent API and recovery path. Session directory changes can now be validated, persisted and supplied to the model through supported tools/SDK APIs rather than a process-local shell cd. A change is not automatically a new sandbox write grant. If both effective and original directories vanish, even chat turns reject.

Channel: preview-or-beta; alpha-only. Half: capability. Date: 2026-10-09 (alpha.2).

Operator consequence: Use working_directory or SDK setWorkingDirectory/set_working_directory for relocation. Preserve independent grant/process lifetimes. Restore the original directory or set an existing absolute directory through the SDK before retrying a Session with missing projects.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/working-directory/README.md#L42
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/working-directory/README.md#L80
- https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/tool-working-directory/README.md#L28
