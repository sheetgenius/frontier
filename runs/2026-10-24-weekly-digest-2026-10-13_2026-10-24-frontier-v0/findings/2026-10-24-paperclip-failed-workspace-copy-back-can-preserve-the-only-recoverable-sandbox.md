---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-failed-workspace-copy-back-can-preserve-the-only-recoverable-sandbox
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L102
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/4611d6e95a683d6750120ee103f77c5490b4a9a5
    precision: commit
  - url: https://github.com/paperclipai/paperclip/commit/f1c44b7b565b8cddb0567d091539d2e7cc517ec8
    precision: commit
---
# 2026-10-24-paperclip-failed-workspace-copy-back-can-preserve-the-only-recoverable-sandbox

Failed workspace copy-back can preserve the only recoverable sandbox. Eligible transient copy-back failures get at most three total attempts, only before host files have been written. Unsafe archives, permission failures and partially applied writes do not get the same retry. When required legacy sandbox copy-back still fails, the exact source lease and repair hold can remain, with the provider stopped rather than its recoverable allocation destroyed. Board-only recovery names the expected action and lease; successful repair restores evidence but does not automatically wake the task. The UI provides guidance, not a complete repair form.

Channel: tagged-release. Half: both. Date: 2026-10-24.

Operator consequence: On v2026.1023.0, inspect and recover the retained source before deleting infrastructure or creating replacement work. Retention may keep storage charges running. Automatic retries remove a narrow class of transient repair work; ambiguous/partially written state still requires judgment. This is not whole-folder atomicity or a guarantee that every failed run is recoverable. Keep the established writer-drain procedure during upgrades and rollbacks.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L102
- https://github.com/paperclipai/paperclip/commit/4611d6e95a683d6750120ee103f77c5490b4a9a5
- https://github.com/paperclipai/paperclip/commit/f1c44b7b565b8cddb0567d091539d2e7cc517ec8
