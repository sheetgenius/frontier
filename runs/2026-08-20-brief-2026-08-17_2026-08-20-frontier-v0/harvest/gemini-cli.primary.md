---
schema_version: bitter.frontier_harvest.v0
provider: gemini-cli
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/gemini-cli.yml
channels_present: [tagged-release, preview-or-beta]
window_volume: 5 material changes; 0 capability in the 0.56.0 diff; preview carries retry/TTL, git-env, enableAgents fix
lane: primary sources, coordinator; leftover harvest applied after independent file reads at both tags
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

**Operator consequence.** `npm i -g @google/gemini-cli@preview` is actually ahead of latest. Re-test unattended runs here before trusting retry semantics. This is the first tag to try for retry/TTL, not v0.56.0. docs/changelogs/latest.md at the v0.56.0 tag still opens at v0.54.0 (2026-08-06).

## 3. experimental.enableAgents false still loads built-in subagents on latest; preview stops doing that

- **Date:** 2026-08-18 (merged); first tagged 2026-08-19 on preview
- **Channel:** `tagged-release` for the hole; `preview-or-beta` for the fix
- **Ancestry evidence:** registry.ts at v0.56.0 blob 92405a0c: loadBuiltInAgents() at line 163, isAgentsEnabled() at line 168. refreshAgents() loads built-ins with no flag check (line 320). At v0.57.0-preview.0 blob 267e13b0: isAgentsEnabled first (line 167), then loadBuiltInAgents (line 171); refreshAgents returns immediately when disabled (line 321). PR #28867 merge 753e4cb55. compare v0.57.0-preview.0...753e4cb55 status=behind, ahead_by=0. compare v0.56.0...753e4cb55 status=diverged.
- **Receipt:** https://github.com/google-gemini/gemini-cli/blob/v0.56.0/packages/core/src/agents/registry.ts
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** The disable switch skipped project/user agent dirs and still registered CodebaseInvestigator / CliHelp / Generalist.

**Operator consequence.** If you set experimental.enableAgents false as a control on 0.55.1 or 0.56.0, built-in subagents still load. Preview is the first tagged channel where the flag suppresses them. Restart required.

## 4. Git subprocess env neutralization is preview, not v0.56.0

- **Date:** 2026-08-19 (first non-nightly tag)
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** gitUtils.ts at v0.56.0 has no getSafeGitEnv (85 lines). At v0.57.0-preview.0 it exports getSafeGitEnv and pins GIT_CONFIG_GLOBAL plus credential.helper. compare v0.57.0-preview.0...c0d192452 status=behind, ahead_by=0. compare v0.56.0...c0d192452 status=diverged.
- **Receipt:** https://github.com/google-gemini/gemini-cli/blob/v0.57.0-preview.0/packages/core/src/utils/gitUtils.ts
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** Parent recorded this as main-unreleased. It did not ride the 0.56.0 promotion.

**Operator consequence.** On latest, workspace .git/config can still set core.pager / core.hooksPath for agent git. Preview is the runnable channel. Re-test private-repo extension installs; credential.helper is blanked.

## 5. Ignore rules start evaluating symlink targets, only on main

- **Date:** 2026-08-20
- **Channel:** `main-unreleased`
- **Ancestry evidence:** SHA ba4296c6c merged 2026-08-20T18:49:45Z. compare v0.57.0-preview.0...ba4296c6c status=diverged. The only tag that later contains it is the 08-21 nightly, which is OUT.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/28915
- **Half:** both | security-relevant | **Confidence:** high on ancestry; no local probe

**What changed.** After checking the literal path, a symlink also has ignore filters run against its real path.

**Operator consequence.** On every in-window runnable channel, a symlink can still disagree with ignore rules. Do not treat .geminiignore as symlink-safe until a tag contains ba4296c6c.

## Researcher lane notes

Loaded sources/gemini-cli.yml. Marketing vs substance: the v0.56.0 GitHub release is a compare URL with no New Features section. Substance is the two-commit delta. Parent retry/TTL is in v0.57.0-preview.0, not v0.56.0.

## Surfaces checked

- GitHub releases (first page): v0.56.0, v0.57.0-preview.0, nightlies 08-17 through 08-21
- gh compare v0.55.1...v0.56.0 (2 commits, both chore(release))
- npm view @google/gemini-cli dist-tags
- CHANGELOG.md at tag v0.56.0: 404 at repo root
- docs/changelogs/latest.md at v0.56.0 still headed v0.54.0
- registry.ts loadAgents order at v0.56.0 and v0.57.0-preview.0
- gitUtils.ts getSafeGitEnv presence at both tags
- compare 753e4cb55, c0d192452, ba4296c6c vs both tags
