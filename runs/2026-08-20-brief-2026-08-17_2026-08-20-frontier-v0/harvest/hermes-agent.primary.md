---
schema_version: bitter.frontier_harvest.v0
provider: hermes-agent
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/hermes-agent.yml
channels_present: [tagged-release]
window_volume: 6 material tagged changes plus a main-unreleased approval cluster
lane: primary sources, coordinator; leftover harvest applied after independent compare
---

# Harvest -- hermes-agent (primary sources)

Punctuation is ASCII. Identity: NousResearch/hermes-agent.

## 1. The git-pull skill-injection scan reached v2026.8.18

- **Date:** 2026-08-18
- **Channel:** `tagged-release`
- **Ancestry evidence:** Parent merge 6e22d265835fe035e648f53b9f28d772037566f0 (PR #88643). `gh api .../compare/6e22d265...v2026.8.16.2` -> status=behind, behind_by=21 (not in that tag). `gh api .../compare/6e22d265835fe035e648f53b9f28d772037566f0...v2026.8.18` -> status=ahead, ahead_by=138, behind_by=0 (the tag contains the commit). v2026.8.18 published_at=2026-08-18T07:26:46Z, prerelease=false.
- **Receipt:** https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.18
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** Parent: project-local skills shipped without the scan that keeps a trusted repo trustworthy across `git pull`. That scan is in v2026.8.18.

**Operator consequence.** Upgrade to v2026.8.18 before widening project skill trust. v2026.8.16.2 still has the hole.

## 2. v2026.8.18 also rolls NVIDIA SkillEvaluator scanning on skill installs, with notes deferred to v0.21.0

- **Date:** 2026-08-18
- **Channel:** `tagged-release`
- **Ancestry evidence:** Release body for v2026.8.18 (named Hermes Agent v0.20.4) states it rolls ~74 PRs since v2026.8.16.2, including NVIDIA SkillEvaluator Tier 1 advisory scanning on skill installs (license + security checks). The same body says curated notes ship with v0.21.0. v2026.8.19 published 2026-08-21 is OUT of window.
- **Receipt:** https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.18
- **Half:** capability | security-relevant | **Confidence:** medium (release body, not a line-range on the scanner)

**What changed.** Skill install gained an optional advisory scanner. File at tag: tools/skillevaluator_scan.py exists at v2026.8.18 and is 404 at v2026.8.16.2. It is "Warn, don't block"; the NVIDIA binary is optional; default skills.tier1_advisory is a no-op without that binary. Enforcement remains tools/skills_guard.py.

**Operator consequence.** Install v2026.8.18. Do not assume SkillEvaluator is on unless `skillevaluator` is on PATH. Do not treat the release-body sentence as a blocking gate. Config at the tag: skills.tier1_advisory default true (config_defaults.py line 2013); still a no-op without the NVIDIA binaries.

## 3. list/steer/stop and hermes update honesty reached the same tag

- **Date:** 2026-08-18
- **Channel:** `tagged-release`
- **Ancestry evidence:** PR #88934 merge b95ec1cb: compare v2026.8.18...b95ec1cb status=behind, ahead_by=0, behind_by=9. PR #88928 merge 0bb23999: same shape, behind_by=10. Same tag: hermes peer 6229683b (behind_by=105) and plugin inline widgets aeabff6a (behind_by=141).
- **Receipt:** https://github.com/NousResearch/hermes-agent/commit/b95ec1cb5dd610130eedeb53d7b8f989737f0f35
- **Half:** both | **Confidence:** high

**What changed.** Steer/stop keyed on a weakref to the parent AIAgent, so /model or a credential refresh returned "No live subagent" while the child kept running. hermes update on a parked branch printed success and left the checkout stale.

**Operator consequence.** v2026.8.18 is also the cut where those two controls stop lying. Check git -C ~/.hermes/hermes-agent status if an earlier update claimed success.

## 4. Delegation docs at v2026.8.18 still say 50 turns and 3 children; config is 250 and 10

- **Date:** 2026-08-18
- **Channel:** `tagged-release` (mismatch is in the tag)
- **Ancestry evidence:** delegation.md at v2026.8.18 blob 15d27cc2 still has default 50 (line 188), concurrency 3 (line 120), sample 50/3 (lines 445-446). config_defaults.py at the same tag blob 29ae25d7: max_iterations 250 (line 1840), max_concurrent_children 10 (line 1865). agent.max_turns is 500 (line 46).
- **Receipt:** https://github.com/NousResearch/hermes-agent/blob/v2026.8.18/website/docs/user-guide/features/delegation.md
- **Half:** defect | **Confidence:** high

**What changed.** Parent reported this against v2026.8.16.2. v2026.8.18 did not repair the page.

**Operator consequence.** Dump effective config. Do not size spend from the docs.

## 5. execute_code CLI approval, /yolo false OFF, and bot-group approval cards missed the tag

- **Date:** 2026-08-19 to 2026-08-20
- **Channel:** `main-unreleased` as of window close
- **Ancestry evidence:** compare v2026.8.18...f0ffcbc7 (#90224 execute_code silent pending_approval) status=ahead, ahead_by=334. v2026.8.18...b0350365 (#90391 /yolo OFF while frozen YOLO still auto-approves) ahead_by=432. v2026.8.18...1179f148 (#90765 bot group approval tiles) ahead_by=610. v2026.8.18...e88d8831 (#89416 hub meta/bundle mix) ahead_by=75. Those SHAs later became ancestors of v2026.8.19 (2026-08-21 OUT).
- **Receipt:** https://github.com/NousResearch/hermes-agent/pull/90224
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** On the installable tag, dangerous execute_code on the classic CLI can queue an approval the human never sees. Process-level YOLO still ignores a session toggle that claims OFF. Bot Mode group members can sit on a command approval with no card until a 300s timeout.

**Operator consequence.** Do not treat a quiet CLI session or a /yolo OFF line as a stop on v2026.8.18. Restart the process to leave YOLO. Do not take v2026.8.19 as an in-window upgrade.

## Researcher lane notes

v2026.8.16.2 is 2026-08-17 overlap with parent. v2026.8.19 is 08-21 OUT. Windows destructive-command fix from parent is already tagged; this window's remaining Windows gap is the updater self-lock, also not in v2026.8.18. Release body claims ~74 PRs / ~146 commits since v2026.8.16.2; GitHub compare is 159 commits / 270 files. Use the compare number.

## Surfaces checked

- GitHub releases: v2026.8.18, v2026.8.16.2, v2026.8.19
- gh compare 6e22d265 vs both tags
- compare v2026.8.18 vs b95ec1cb, 0bb23999, 6229683b, aeabff6a, f0ffcbc7, b0350365, 1179f148, e88d8831
- config_defaults.py and delegation.md at v2026.8.18
