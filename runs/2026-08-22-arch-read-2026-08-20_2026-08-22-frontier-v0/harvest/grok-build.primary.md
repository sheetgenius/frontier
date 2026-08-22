---
schema_version: bitter.frontier_harvest.v0
provider: grok-build
window: 2026-08-20..2026-08-22
run: 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0
source_contract: sources/grok-build.yml
channels_present: []
window_volume: 0 in-window changelog cuts
lane: primary sources, coordinator
---

# Harvest -- grok-build (primary sources)

Punctuation is ASCII. Identity trap: grok.com chat is not grok-build. Contract repo is xai-org/grok-build. Changelog is https://x.ai/build/changelog.

## 1. Changelog tip is still v1.0.5 (2026-08-15); nothing in this window

- **Date:** 2026-08-22 (observation)
- **Channel:** none in window. Last cut is tagged changelog v1.0.5 dated August 15, 2026, before 2026-08-20.
- **Ancestry evidence:** Official changelog page fetched 2026-08-22 lists Latest v1.0.5 Aug 15, 2026. Next older cut v1.0.4 Aug 13. No 2026-08-20, 08-21, or 08-22 heading on that page.
- **Receipt:** https://x.ai/build/changelog
- **Half:** neither | **Confidence:** high on the public changelog; the GitHub repo was not cloned this shift

**What changed.** Explicit zero.

**Operator consequence.** Ignore. Stay on whatever 1.0.5 already is if you run the install script.

## Surfaces checked

- https://x.ai/build/changelog
