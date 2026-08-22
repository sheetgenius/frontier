---
schema_version: bitter.frontier_harvest.v0
provider: openhands
window: 2026-08-20..2026-08-22
run: 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0
source_contract: sources/openhands.yml
channels_present: [tagged-release]
window_volume: 1 material tagged cut
lane: primary sources, coordinator
---

# Harvest -- openhands (primary sources)

Punctuation is ASCII. Last brief left v1.15.0 on the other side of midnight.

## 1. v1.15.0 tags the wrong-profile launch fix and the ACP persist fix

- **Date:** 2026-08-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release v1.15.0 published 2026-08-21T14:01:34Z, prerelease=false, tag object SHA `ab23be62ad724fe83483036a0900bed7b7859166`. `gh api .../compare/e9ca71d138a658ea15d930b2be3a5b28c251a7f2...v1.15.0` status=ahead, ahead_by=37, behind_by=0 (wrong-profile launch fix, PR #16523, is in the tag). `gh api .../compare/28be38adac...v1.15.0` status=ahead, ahead_by=8, behind_by=0 (ACP model-pick persist fix, PR #16701, is in the tag). Release body names both: "prevent silent agent profile downgrade" and "do not silently persist ACP model picks to agent_settings when profile discovery fails." Same notes: chore bump openhands-automation to 1.8.0 (PR #16712), the Git Sync backend pin last brief said v1.14.0 lacked.
- **Receipt:** https://github.com/OpenHands/OpenHands/releases/tag/v1.15.0
- **Half:** defect | **Confidence:** high

**What changed.** The silent wrong-profile fallback is no longer main-unreleased. It is in a non-prerelease tag an operator can name.

**Operator consequence.** Upgrade to v1.15.0 if you run v1.14.0 and care that a missing profile cannot silently swap the agent. The Git Sync page in v1.14.0 that 404'd against automation 1.7.1 is the same cut that pins 1.8.0.

## Surfaces checked

- GitHub releases (tip v1.15.0)
- gh compare of parent leftover SHAs into v1.15.0
