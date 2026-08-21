---
schema_version: bitter.frontier_harvest.v0
provider: openhands
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/openhands.yml
channels_present: [main-unreleased]
window_volume: 2 material changes, both unreleased at window close
lane: primary sources, coordinator; v1.14.0 is parent overlap
---

# Harvest -- openhands (primary sources)

Punctuation is ASCII. v1.14.0 published 2026-08-17T21:41:36Z was already harvested by the parent. Not re-litigated.

## 1. The wrong-profile launch fix is still in no in-window tag

- **Date:** 2026-08-20 (observation; merge 2026-08-17)
- **Channel:** `main-unreleased` at window close
- **Ancestry evidence:** Parent merge e9ca71d138a658ea15d930b2be3a5b28c251a7f2 (PR #16523). `gh api .../compare/e9ca71d138a658ea15d930b2be3a5b28c251a7f2...v1.14.0` -> status=behind, behind_by=1: the tag does not contain the commit. `gh api .../compare/e9ca71d138a658ea15d930b2be3a5b28c251a7f2...v1.15.0` -> status=ahead, ahead_by=37, behind_by=0: v1.15.0 contains it. v1.15.0 published_at=2026-08-21T14:01:34Z, which is out of this window. At 2026-08-20 close the operator's newest tag is still v1.14.0.
- **Receipt:** https://github.com/OpenHands/OpenHands/commit/e9ca71d138a658ea15d930b2be3a5b28c251a7f2
- **Half:** defect | **Confidence:** high

**What changed.** Channel only: the parent main-unreleased fix did not reach an in-window release. It is in v1.15.0, which is a day after the window.

**Operator consequence.** Through 2026-08-20, `v1.14.0` still has the silent wrong-profile fallback. Do not tell an operator they are protected because v1.15.0 exists on GitHub after the window. The next cycle can record the tagged-release.

## 2. A related ACP model-pick persist fix landed on main on 2026-08-20, also unreleased

- **Date:** 2026-08-20
- **Channel:** `main-unreleased`
- **Ancestry evidence:** commit 28be38adac "fix: do not silently persist ACP model picks to agent_settings when profile discovery fails (#16701)" dated 2026-08-20T13:12:32Z. `gh api .../compare/v1.14.0...28be38adac` -> ahead_by=30, behind_by=0, status=ahead. Not in v1.14.0. v1.15.0 is out of window.
- **Receipt:** https://github.com/OpenHands/OpenHands/commit/28be38adac
- **Half:** defect | **Confidence:** high

**What changed.** When profile discovery fails, ACP model picks are no longer silently written into agent_settings. Same class as the parent launch fallback: a discovery error must not mutate the durable agent identity.

**Operator consequence.** Same as (1): wait for a tag that contains #16701, or verify the running agent rather than the saved settings.

## Researcher lane notes

Capability half searched in the 08-18 to 08-20 default-branch log: conversation overview panel (#16230), automations dashboard (#16688), LLM provider-connections UI (#16616). All main-unreleased at window close. Not elevated without a tag unless an operator can run main.

## Surfaces checked

- GitHub releases: v1.15.0 (08-21 OUT), v1.14.0 (08-17 overlap)
- gh compare for e9ca71d13 vs v1.14.0 and v1.15.0
- gh compare v1.14.0...28be38adac
- default-branch commits 2026-08-19 through 2026-08-21
