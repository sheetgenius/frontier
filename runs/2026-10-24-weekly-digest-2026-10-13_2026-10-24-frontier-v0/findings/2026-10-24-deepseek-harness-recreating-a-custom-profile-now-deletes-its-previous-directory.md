---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-recreating-a-custom-profile-now-deletes-its-previous-directory
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/8843c37e378706185cfb9ea308572a4d461cf6e4
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.2/from-default-profile-replaces-target/guide.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.3
    precision: github_release
---
# 2026-10-24-deepseek-harness-recreating-a-custom-profile-now-deletes-its-previous-directory

Recreating a custom profile now deletes its previous directory. `--from-default-profile` previously refused an existing custom target; it now replaces that directory every time, deleting its package dependencies, installed `node_modules` and `cordis.patch.yml`. Replacement also occurs when the invocation requests help or a configuration dump. Shipped profile names remain rejected as targets. This supplies an explicit reset operation while changing the safety of repeated launch commands.

Channel: preview-or-beta. Half: both. Date: 2026-10-14.

Operator consequence: Remove the option from recurring launch scripts and shortcuts unless a reset is intended. Preserve the custom patch before recreating a profile and reinstall any wanted plugins afterward. A help invocation is not a harmless way to inspect a command that still carries this option. No destructive invocation was run here.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/8843c37e378706185cfb9ea308572a4d461cf6e4
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/upgrade-guide/v0.2.1-alpha.2/from-default-profile-replaces-target/guide.md
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.3
