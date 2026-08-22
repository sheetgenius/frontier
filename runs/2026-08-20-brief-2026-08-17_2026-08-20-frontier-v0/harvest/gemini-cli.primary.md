---
schema_version: bitter.frontier_harvest.v0
provider: gemini-cli
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/gemini-cli.yml
channels_present: [tagged-release, preview-or-beta]
window_volume: 2 material changes, 0 capability-bearing in the 0.56.0 diff itself, 1 channel repair
lane: primary sources, coordinator; researcher may deepen
---

# Harvest -- gemini-cli (primary sources)

Punctuation is ASCII.

## 1. v0.56.0 became the stable tag, and it is two chore(release) commits past v0.55.1

- **Date:** 2026-08-19
- **Channel:** `tagged-release` (prerelease=false)
- **Ancestry evidence:** `gh api repos/google-gemini/gemini-cli/releases/tags/v0.56.0` -> prerelease=false, published_at=2026-08-19T19:29:38Z, body is only "Full Changelog: .../compare/v0.55.1...v0.56.0". `gh api .../compare/v0.55.1...v0.56.0` -> ahead_by=2, behind_by=2, status=diverged. The two commits on the 0.56.0 side are 8f05769501 "chore(release): v0.56.0-preview.1" (2026-08-11T19:40:14Z) and b6e23a7dc2 "chore(release): v0.56.0" (2026-08-19T19:22:03Z). CHANGELOG.md is not at the repo root at that tag (contents API 404). npm dist-tags: latest=0.56.0, preview=0.57.0-preview.0.
- **Receipt:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0
- **Half:** neither | **Confidence:** high

**What changed.** Parent window said the preview channel was not ahead of stable: v0.56.0-preview.1 was v0.55.1 minus one fix. This window cuts v0.56.0 as a non-prerelease tag whose GitHub release body has no feature list, and whose compare against v0.55.1 is two release-chore commits (diverged, merge_base 659c7aac). File diff is version strings. fa2f27aee (PR #28790 retry/TTL) is not an ancestor (compare diverged, behind_by=7). v0.56.0 is also behind v0.55.1 by 58ba19945 (#28688 Cloud Workstations OAuth redirect).

**Operator consequence.** `npm i -g @google/gemini-cli` now lands 0.56.0. Do not read this tag as a capability drop. Unattended/CI operators still have the parent defect: a capacity blip is terminal. If you needed #28688, v0.56.0 is a regression versus v0.55.1. Use preview 0.57.0-preview.0 or hold 0.55.1.

## 2. Preview is ahead of stable again: v0.57.0-preview.0 on the same day

- **Date:** 2026-08-19
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** `gh api repos/google-gemini/gemini-cli/releases/tags/v0.57.0-preview.0` published 2026-08-19T19:18:35Z, prerelease=true. npm dist-tag preview=0.57.0-preview.0 while latest=0.56.0. Nightlies v0.56.0-nightly.20260818/19/20 exist in the window; 20260821 is out of window.
- **Receipt:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0-preview.0
- **Half:** neither | **Confidence:** high

**What changed.** Parent's "preview is not ahead of stable" is no longer the current posture. compare v0.56.0...v0.57.0-preview.0 is diverged, ahead_by=24, and the 24-commit list includes fa2f27aee (#28790 retry/TTL) and 58ba19945 (#28688). modelAvailabilityService.ts at preview.0 has markedAt and a 30000 ms TTL; at v0.56.0 it does not.

**Operator consequence.** `npm i -g @google/gemini-cli@preview` is actually ahead of latest. Re-test unattended runs here before trusting retry semantics. This is the first tag to try for retry/TTL, not v0.56.0.

## Researcher lane notes

Loaded sources/gemini-cli.yml. Marketing vs substance: the v0.56.0 GitHub release is a compare URL with no New Features section. Substance is the two-commit delta. Parent carry of retry/TTL on main is not settled by this harvest.

## Surfaces checked

- GitHub releases (first page): v0.56.0, v0.57.0-preview.0, nightlies 08-17 through 08-21
- gh compare v0.55.1...v0.56.0 (2 commits, both chore(release))
- npm view @google/gemini-cli dist-tags
- CHANGELOG.md at tag v0.56.0: 404 at repo root
