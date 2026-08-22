---
schema_version: bitter.frontier_harvest.v0
provider: hermes-agent
window: 2026-08-20..2026-08-22
run: 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0
source_contract: sources/hermes-agent.yml
channels_present: [tagged-release]
window_volume: 1 material tagged cut (the leftover approval cluster)
lane: primary sources, coordinator
---

# Harvest -- hermes-agent (primary sources)

Punctuation is ASCII. Identity: NousResearch/hermes-agent.

## 1. execute_code CLI approval, /yolo false-OFF, and bot-group cards reached v2026.8.19

- **Date:** 2026-08-21 (published_at; release body header says August 19)
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release v2026.8.19 published 2026-08-21T12:16:39Z, prerelease=false. Annotated tag peels to commit `fcbd1076a93841fa88855acce810e342a5b78101`. `gh api .../compare/f0ffcbc7...v2026.8.19` behind_by=0 (PR #90224 execute_code silent pending_approval). `.../compare/b0350365...v2026.8.19` behind_by=0 (PR #90391 /yolo OFF while frozen YOLO still auto-approves). `.../compare/1179f148...v2026.8.19` behind_by=0 (PR #90765 bot group approval tiles). Release body is a rollup (~323 PRs since v2026.8.18) and does not name those three PRs; ancestry is the proof. Curated notes deferred to v0.21.0.
- **Receipt:** https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19
- **Half:** defect | security-relevant | **Confidence:** high on ancestry; medium that the operator-visible strings match last brief without re-opening the three PRs at this tag

**What changed.** Last brief's three main-unreleased approval holes are ancestors of a non-prerelease tag.

**Operator consequence.** Upgrade to v2026.8.19 if you stayed on v2026.8.18 because of those three. Do not size the release from the body date (August 19); the GitHub published_at is 2026-08-21.

## Surfaces checked

- GitHub releases (tip v2026.8.19)
- annotated tag peel
- gh compare of the three leftover merge SHAs into the tag
