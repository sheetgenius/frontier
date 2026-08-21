---
schema_version: bitter.frontier_harvest.v0
provider: heypi
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/heypi.yml
channels_present: []
window_volume: 0 material changes
lane: primary sources, coordinator plus contract surfaces, no in-window commits
---

# Harvest -- heypi (primary sources)

Punctuation is ASCII. No material change in this window.

## 1. No material change: latest tag remains 0.3.0-beta.2, last commit 2026-07-22

- **Date:** 2026-08-20 (observation; last event 2026-07-22)
- **Channel:** none in window
- **Ancestry evidence:** `gh api repos/hunvreus/heypi/commits` first page: newest commit 436da22cea "chore: release 0.3.0-beta.2" dated 2026-07-22T01:35:42Z. `gh api repos/hunvreus/heypi/tags` newest tag 0.3.0-beta.2 SHA 436da22ceab0bc4e2db133e8626649b4bf76286d. `gh api repos/hunvreus/heypi/releases` returned empty. No tag, release, or default-branch commit dated 2026-08-17 through 2026-08-20.
- **Receipt:** https://github.com/hunvreus/heypi/commit/436da22ceab0bc4e2db133e8626649b4bf76286d
- **Half:** neither | **Confidence:** high

**What changed.** Nothing on the inspectable surfaces in this window.

**Operator consequence.** Ignore. The last runnable tag is still 0.3.0-beta.2 from 2026-07-22.

## Researcher lane notes

Loaded sources/heypi.yml first. Repo hunvreus/heypi. Docs https://heypi.dev/docs/ and landing https://heypi.dev/ were not used as a historical pin (moving pages). Identity: this is Ronan Berder's heypi, not HeyPi the unrelated product.

## Surfaces checked

- GitHub commits: gh api repos/hunvreus/heypi/commits (newest 2026-07-22)
- GitHub tags: gh api repos/hunvreus/heypi/tags (0.3.0-beta.2 tip)
- GitHub releases: empty list
- Source contract primary_surfaces: repo, docs, landing
