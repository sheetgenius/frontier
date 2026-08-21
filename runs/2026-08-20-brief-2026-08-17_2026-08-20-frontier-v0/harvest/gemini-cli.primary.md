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

**What changed.** Parent window said the preview channel was not ahead of stable: v0.56.0-preview.1 was v0.55.1 minus one fix. This window cuts v0.56.0 as a non-prerelease tag whose GitHub release body has no feature list, and whose compare against v0.55.1 is two release-chore commits. npm `latest` now points at 0.56.0.

**Operator consequence.** `npm i -g @google/gemini-cli` now lands 0.56.0. Do not read this tag as a large capability drop. The interesting fact is channel: preview.1 was promoted. The parent main-unreleased retry/TTL work is not evidenced by these two chore commits; it remains unconfirmed in this tag until a researcher shows those SHAs in the v0.56.0 history.

## 2. Preview is ahead of stable again: v0.57.0-preview.0 on the same day

- **Date:** 2026-08-19
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** `gh api repos/google-gemini/gemini-cli/releases/tags/v0.57.0-preview.0` published 2026-08-19T19:18:35Z, prerelease=true. npm dist-tag preview=0.57.0-preview.0 while latest=0.56.0. Nightlies v0.56.0-nightly.20260818/19/20 exist in the window; 20260821 is out of window.
- **Receipt:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0-preview.0
- **Half:** neither | **Confidence:** high

**What changed.** Parent's "preview is not ahead of stable" is no longer the current posture. Preview moved to 0.57.0-preview.0 as 0.56.0 cut.

**Operator consequence.** If you run the preview dist-tag you are on a different line than latest again. Watch the 0.57 notes; do not assume they already shipped.

## Researcher lane notes

Loaded sources/gemini-cli.yml. Marketing vs substance: the v0.56.0 GitHub release is a compare URL with no New Features section. Substance is the two-commit delta. Parent carry of retry/TTL on main is not settled by this harvest.

## Surfaces checked

- GitHub releases (first page): v0.56.0, v0.57.0-preview.0, nightlies 08-17 through 08-21
- gh compare v0.55.1...v0.56.0 (2 commits, both chore(release))
- npm view @google/gemini-cli dist-tags
- CHANGELOG.md at tag v0.56.0: 404 at repo root
