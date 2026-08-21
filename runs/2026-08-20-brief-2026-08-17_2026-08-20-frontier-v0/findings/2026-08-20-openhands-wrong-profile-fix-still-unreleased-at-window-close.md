---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-openhands-wrong-profile-fix-still-unreleased-at-window-close
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/commit/e9ca71d138a658ea15d930b2be3a5b28c251a7f2
    precision: git_commit
---
# 2026-08-20-openhands-wrong-profile-fix-still-unreleased-at-window-close

Parent merge e9ca71d13 (PR #16523). compare e9ca71d13...v1.14.0 is behind (not in v1.14.0). compare e9ca71d13...v1.15.0 is ahead (in v1.15.0). v1.15.0 published 2026-08-21T14:01:34Z, out of this window. Related 28be38adac (#16701, 2026-08-20) is 30 commits ahead of v1.14.0.

Channel: main-unreleased at window close. Half: defect.

Operator consequence: through 2026-08-20, v1.14.0 still has the silent wrong-profile fallback. Do not tell an operator they are protected because v1.15.0 exists the next day.

## Receipt
- https://github.com/OpenHands/OpenHands/commit/e9ca71d138a658ea15d930b2be3a5b28c251a7f2
