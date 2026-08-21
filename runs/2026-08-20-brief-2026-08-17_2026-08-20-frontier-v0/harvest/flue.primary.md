---
schema_version: bitter.frontier_harvest.v0
provider: flue
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/flue.yml
channels_present: []
window_volume: 0 material changes
lane: primary sources, coordinator, identity checked against contract repo
---

# Harvest -- flue (primary sources)

Punctuation is ASCII. No material change in this window.

## 1. No material change: latest tag remains v2.0.3 (2026-08-05)

- **Date:** 2026-08-20 (observation; last event 2026-08-05)
- **Channel:** none in window
- **Ancestry evidence:** `gh api repos/withastro/flue/commits` newest: bf86b8726f "v2.0.3" dated 2026-08-05T00:04:42Z. Tags: v2.0.3 SHA bf86b8726f5ba189844185fdbeca0e194344ded1. GitHub releases list empty (tags without GitHub release objects). No default-branch commit dated 2026-08-17 through 2026-08-20.
- **Receipt:** https://github.com/withastro/flue/commit/bf86b8726f5ba189844185fdbeca0e194344ded1
- **Half:** neither | **Confidence:** high

**What changed.** Nothing in this window. Last cut is v2.0.3 on 2026-08-05, which is the parent window, not this one.

**Operator consequence.** Ignore. Stay on v2.0.3 if you already run it.

## Researcher lane notes

Loaded sources/flue.yml first. Identity: withastro/flue, not an unrelated "Flue". CHANGELOG.md is named in the contract; no in-window commit exists to pin a changelog delta against.

## Surfaces checked

- GitHub commits: gh api repos/withastro/flue/commits
- GitHub tags: gh api repos/withastro/flue/tags
- GitHub releases: empty
- Contract changelog URL: https://github.com/withastro/flue/blob/main/CHANGELOG.md (moving; not used as a historical pin)
