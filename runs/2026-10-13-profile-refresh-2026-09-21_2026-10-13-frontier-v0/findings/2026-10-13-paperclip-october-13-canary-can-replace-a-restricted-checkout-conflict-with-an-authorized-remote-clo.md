---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-october-13-canary-can-replace-a-restricted-checkout-conflict-with-an-authorized-remote-clo
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/c7f4b74111d16f0b57112fa6d0b6a59c2d63bfe8/doc/project-repositories.md#L39-L58
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/c7f4b74111d16f0b57112fa6d0b6a59c2d63bfe8
    precision: commit
  - url: https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
    precision: official_docs
---
# 2026-10-13-paperclip-october-13-canary-can-replace-a-restricted-checkout-conflict-with-an-authorized-remote-clo

October 13 canary can replace a restricted checkout conflict with an authorized remote clone. A fresh task using an implicit project default can clone the authorized remote to a separate company/task source when the project checkout contains another task restricted workspace. Current source ACLs and the run Git identity still apply. It excludes low-trust review, reused workspaces, explicit/ambiguous old bindings, pinned branches, task-independent branch templates and local-only repositories. The fallback neither grants access to the restricted checkout nor copies unpublished local changes.

Channel: preview-or-beta (2026.1013.0-canary.16; absent from stable, beta and October 13 nightly). Half: capability. Date: 2026-10-13.

Operator consequence: Trial blocked fresh-task admission with a disposable remote and verify the selected branch/source. Keep unpublished work in its original checkout. This can remove a manual checkout-repair interruption while retaining privacy; it is not a recovery method for uncommitted files.

## Receipt
- https://github.com/paperclipai/paperclip/blob/c7f4b74111d16f0b57112fa6d0b6a59c2d63bfe8/doc/project-repositories.md#L39-L58
- https://github.com/paperclipai/paperclip/commit/c7f4b74111d16f0b57112fa6d0b6a59c2d63bfe8
- https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
