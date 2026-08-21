---
schema_version: bitter.frontier_harvest.v0
provider: paperclip
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/paperclip.yml
channels_present: []
window_volume: 0 new tagged changes; v2026.817.0 publish timestamp is overlap
lane: primary sources, coordinator
---

# Harvest -- paperclip (primary sources)

Punctuation is ASCII.

## 1. No material change beyond the parent v2026.817.0 tag

- **Date:** 2026-08-18 (GitHub published_at of a tag the parent already harvested)
- **Channel:** none new
- **Ancestry evidence:** GitHub releases tip is still v2026.817.0, published_at=2026-08-18T03:17:29Z, prerelease=false. Parent harvested this tag as 2026-08-17. Next listed release is v2026.722.0. No newer stable in the first 8 releases.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
- **Half:** neither | **Confidence:** high on "no newer stable"; medium on canary/nightly (slash-prefixed tags not fully re-enumerated in this coordinator pass)

**What changed.** The operator-installable stable did not move past v2026.817.0. Parent main-unreleased items (review-policy bypass, CWE-78 CLI guidance) were not shown to have reached a new tag in this pass.

**Operator consequence.** Ignore unless you are waiting on those master-only security fixes; they are still a next-cycle check.

## Researcher lane notes

Parent taught slash-prefixed canary tags. A later pass should git/matching-refs for canary/nightly/beta after 817.0. Researcher spawned for that.

## Surfaces checked

- GitHub releases (8)
