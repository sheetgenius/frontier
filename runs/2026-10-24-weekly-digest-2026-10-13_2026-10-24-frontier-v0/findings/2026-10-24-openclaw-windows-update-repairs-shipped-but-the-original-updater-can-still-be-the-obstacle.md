---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-windows-update-repairs-shipped-but-the-original-updater-can-still-be-the-obstacle
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/bba7238a1be3a0d4e92c371988f94e81011a06b2
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/plugin-generation-source-lookup.ts#L376-L424
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/backup-scratch.ts#L169-L199
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/state/openclaw-database-preflight.messages.ts#L51-L65
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/CHANGELOG/2026.10.7.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/issues/170956
    precision: official_docs
---
# 2026-10-24-openclaw-windows-update-repairs-shipped-but-the-original-updater-can-still-be-the-obstacle

Windows update repairs shipped, but the original updater can still be the obstacle. Recovery relocates Windows junction targets before disposing their source; scratch retirement uses an absent destination rather than renaming over a pre-created directory; transient SQLite inspection contention gets retry guidance instead of an unconditional restore instruction. 10.7 adds activation and recovery repairs, including bounded post-activation Doctor waits and preservation of successful activation through later maintenance errors. The October 22 report linked from the social sweep was an attempted update from a locally repaired 10.5 installation, not a reproduced failure of stock 10.6. Issue #170956 remained open on October 24; its later restore-startup timeout repair, `071f27c2b58ce383e1a70f71b6fec66461261cb8`, was on main and absent from 10.7/beta.3.

Channel: tagged-release. Half: defect. Date: 2026-10-24.

Operator consequence: Target 10.7, preserve the failed step and installed updater version, and use the documented recovery path for that failure. Do not repeat database restoration merely because a contention warning suggested it. A fix in the target package cannot retroactively change the old updater running the handoff. The concrete repair coverage is stronger than either a blanket claim that updates are fixed or a blanket claim that every upgrade is broken.

## Receipt
- https://github.com/openclaw/openclaw/commit/bba7238a1be3a0d4e92c371988f94e81011a06b2
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/plugin-generation-source-lookup.ts#L376-L424
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/backup-scratch.ts#L169-L199
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/state/openclaw-database-preflight.messages.ts#L51-L65
- https://github.com/openclaw/openclaw/blob/v2026.10.7/CHANGELOG/2026.10.7.md
- https://github.com/openclaw/openclaw/issues/170956
