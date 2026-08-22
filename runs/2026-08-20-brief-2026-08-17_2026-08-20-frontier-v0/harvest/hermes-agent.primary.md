---
schema_version: bitter.frontier_harvest.v0
provider: hermes-agent
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/hermes-agent.yml
channels_present: [tagged-release]
window_volume: 2 material changes, 1 security carry-forward completed, 1 capability
lane: primary sources, coordinator
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

**Operator consequence.** Install v2026.8.18. Do not assume SkillEvaluator is on unless `skillevaluator` is on PATH. Do not treat the release-body sentence as a blocking gate.

## Researcher lane notes

v2026.8.16.2 is 2026-08-17 overlap with parent. v2026.8.19 is 08-21 OUT. Windows destructive-command fix from parent is already tagged; not re-litigated.

## Surfaces checked

- GitHub releases: v2026.8.18, v2026.8.16.2, v2026.8.19
- gh compare 6e22d265 vs both tags
