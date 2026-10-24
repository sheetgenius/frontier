---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-the-rc-upgrade-promotes-python-ptc-filesystem-confinement
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/11a0f85b34068b25a16ab45a6f8f38dc86f93d7c
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.1/python-ptc-sandbox/guide.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1
    precision: github_release
---
# 2026-10-24-deepseek-harness-the-rc-upgrade-promotes-python-ptc-filesystem-confinement

The rc upgrade promotes Python PTC filesystem confinement. Custom Python PTC compositions now require `sandbox` and `sandboxPolicy`, apply the shared filesystem policy to direct Python operations, and fail restricted runs with `sandbox-unavailable` if confinement cannot be established. Shipped profiles continue using Node. This removes the earlier contract in which direct Python operations ran without confinement; it is not a current-backend exploit test or an older-CVE fixed-version designation.

Channel: preview-or-beta. Half: both. Date: 2026-10-17.

Operator consequence: Supply the shared services when upgrading a custom Python composition, then test allowed workspace writes, denied outside writes and reported enforcement. The useful primitive is one shared file policy across direct execution and tools, while enforcement qualification remains backend-specific operator work.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/11a0f85b34068b25a16ab45a6f8f38dc86f93d7c
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.1/python-ptc-sandbox/guide.md
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1
