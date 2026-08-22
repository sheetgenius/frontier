---
schema_version: bitter.frontier_harvest.v0
provider: cursor
window: 2026-08-20..2026-08-22
run: 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0
source_contract: sources/cursor.yml
channels_present: []
window_volume: 0 in-window changelog cuts
lane: primary sources, coordinator
---

# Harvest -- cursor (primary sources)

Punctuation is ASCII. Identity trap: github.com/cursor/cursor is not this product. Changelog is https://cursor.com/changelog.

## 1. Latest public changelog heading is Aug 19, 2026 (subscriptions / /goal); nothing dated 2026-08-20 to 2026-08-22

- **Date:** 2026-08-22 (observation)
- **Channel:** none in this window. Aug 19, 2026 (`/changelog/08-19-26`) is before 2026-08-20 and sat in the previous brief window.
- **Ancestry evidence:** cursor.com/changelog fetched 2026-08-22. Newest dated entry is Aug 19, 2026 (cloud-agent subscriptions, custom modes, subagents on their own VMs, `/goal`, mid-turn steering). Prior: Aug 17 Origin hosting, Aug 13 Builds. No Aug 20, 21, or 22 heading.
- **Receipt:** https://cursor.com/changelog
- **Half:** neither | **Confidence:** high on the public changelog; CLI version channel was not separately probed

**What changed.** Explicit zero for this window. The Aug 19 cloud-agent `/goal` and subscriptions page is last brief's material, not this one's.

**Operator consequence.** Ignore for Monday unless a new changelog heading appears. Do not treat the Aug 19 page as a 2026-08-20 event.

## Surfaces checked

- https://cursor.com/changelog
