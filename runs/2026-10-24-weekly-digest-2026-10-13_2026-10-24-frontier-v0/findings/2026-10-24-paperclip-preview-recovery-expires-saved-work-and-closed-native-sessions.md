---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-preview-recovery-expires-saved-work-and-closed-native-sessions
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/recoverable-disk-cleanup.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/server/src/services/git-restore-point-ledger.ts#L8-L39
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/recoverable-disk-cleanup.md#L154-L191
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-preview-recovery-expires-saved-work-and-closed-native-sessions

Preview recovery expires saved work and closed native sessions. When cleanup and restore-point settings permit it, beta can remove worktrees containing unpushed or uncommitted work after a default three-day terminal delay, or seven idle days for open work. It first encrypts a restore point, verifies stored bytes and rechecks safety. Restore points default to ninety-day retention after terminal closure; after expiry, reopening starts fresh with an unsaved-work warning. Closed native sessions have a separate, enabled-by-default seven-day failover-copy expiration, subject to settled-run and lease checks; later work starts a fresh session. Beta omits ignored files. The October 24 canary source adds a separate ignored-file snapshot with environment-secret and regenerable-directory exclusions; older servers reject its v2 payload.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Inspect cleanup switches, retention deadlines, file coverage, storage and master-key backups before trusting 2026.1023.0-beta.0 or 2026.1024.0-canary.7 with the only copy of unsaved work. Test restore and rollback compatibility. This can reclaim disk automatically, but it makes recovery a time-limited obligation rather than an indefinite archive. Do not conflate these worktree/session policies with stable legacy copy-back repair holds.

## Receipt
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/recoverable-disk-cleanup.md
- https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/server/src/services/git-restore-point-ledger.ts#L8-L39
- https://github.com/paperclipai/paperclip/blob/5e26b733b9668d24b005418704d43f66109a7dd8/doc/recoverable-disk-cleanup.md#L154-L191
