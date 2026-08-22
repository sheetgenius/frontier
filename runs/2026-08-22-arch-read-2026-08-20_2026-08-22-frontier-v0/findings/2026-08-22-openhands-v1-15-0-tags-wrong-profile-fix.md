---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-22-openhands-v1-15-0-tags-wrong-profile-fix
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-08-20
  end: 2026-08-22
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.15.0
    precision: github_release
  - url: https://github.com/OpenHands/OpenHands/commit/e9ca71d138a658ea15d930b2be3a5b28c251a7f2
    precision: git_commit
---
# 2026-08-22-openhands-v1-15-0-tags-wrong-profile-fix

v1.15.0 published 2026-08-21T14:01:34Z, prerelease=false, SHA ab23be62. compare e9ca71d1...v1.15.0 behind_by=0. compare 28be38ad...v1.15.0 behind_by=0. Last brief's wrong-profile launch fix and ACP persist fix are tagged-release. Release body also names the openhands-automation 1.8.0 pin.

Channel: tagged-release. Half: defect.

Operator consequence: upgrade off v1.14.0 if the silent profile fallback was the reason you waited.

## Receipt
- https://github.com/OpenHands/OpenHands/releases/tag/v1.15.0
- https://github.com/OpenHands/OpenHands/commit/e9ca71d138a658ea15d930b2be3a5b28c251a7f2
