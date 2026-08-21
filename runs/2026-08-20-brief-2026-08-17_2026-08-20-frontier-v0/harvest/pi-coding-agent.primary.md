---
schema_version: bitter.frontier_harvest.v0
provider: pi-coding-agent
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/pi-coding-agent.yml
channels_present: []
window_volume: 1 material change (unreleased harness on a non-default branch)
lane: primary sources, coordinator; distinct from omp
---

# Harvest -- pi-coding-agent (primary sources)

Punctuation is ASCII. Repo earendil-works/pi. Not can1357/oh-my-pi.

## 1. No new tag; the new harness the maintainer is talking about is on `dev`, not main

- **Date:** 2026-08-20
- **Channel:** none (not in a tag; not on default branch)
- **Ancestry evidence:** Latest GitHub release still v0.84.2 published 2026-08-14T10:14:32Z, SHA 914cf1472e715297caa30db4b9535d534a9eb718. `gh api .../compare/v0.84.2...main` -> ahead_by=83. `gh api repos/earendil-works/pi/branches/dev` -> SHA a17323e5b1e766433e76a3ed7a129f640924c079, committer date 2026-08-20T21:09:41Z. `gh api .../compare/main...dev` -> ahead_by=264, behind_by=11, status=diverged. `gh api .../compare/v0.84.2...dev` -> ahead_by=336, behind_by=0. Maintainer statement (discovery only, not a product receipt): https://x.com/mitsuhiko/status/2090368103972479324
- **Receipt:** https://github.com/earendil-works/pi/tree/a17323e5b1e766433e76a3ed7a129f640924c079
- **Half:** capability | **Confidence:** high that the work is unreleased; medium on what the 264 commits contain without a full diff read

**What changed.** Operators on v0.84.2 have no new tagged capability. A `dev` branch 264 commits ahead of main is where the maintainer says the new harness lives. Reading main's 83 unreleased commits is the wrong tree for that claim.

**Operator consequence.** Ignore main if you are trying to preview the new harness; it is not there. Do not install `dev` as if it were a release. Watch for a tag that contains a17323e5 or a later `dev` tip. Credential-command gating from parent was not re-audited in this coordinator pass.

## Researcher lane notes

A later pass should sample the `dev` diff for plugin/host architecture (KEisuke and mitsuhiko both pointed at it) without promoting branch work into a tagged-release claim.

## Surfaces checked

- GitHub releases and tags (tip v0.84.2)
- gh compare v0.84.2...main, main...dev, v0.84.2...dev
- branches/dev
