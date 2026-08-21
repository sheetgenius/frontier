---
schema_version: bitter.frontier_harvest.v0
provider: openclaw
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/openclaw.yml
channels_present: [main-unreleased]
window_volume: 1 material change (carry-forward still unreleased)
lane: primary sources, coordinator ancestry on parent SHA
---

# Harvest -- openclaw (primary sources)

Punctuation is ASCII.

## 1. The approved-exec fix is still in no release

- **Date:** 2026-08-20 (observation of channel; merge was 2026-08-17)
- **Channel:** `main-unreleased`
- **Ancestry evidence:** Parent merge commit ab5611f0be610380fe48803fe4311896ca85806e ("fix(security): prevent approved scripts from changing before execution (#124858)", 2026-08-17T01:26:42Z). Latest GitHub release in or before window close: v2026.8.1-beta.2, prerelease=true, published 2026-08-15T05:36:23Z, tag SHA 8f382a202ff1e15833394b481615dcdda99b04d7. Latest non-prerelease: v2026.7.1-2 published 2026-08-04. `gh api repos/openclaw/openclaw/compare/v2026.8.1-beta.2...ab5611f0be610380fe48803fe4311896ca85806e` -> ahead_by=619, behind_by=22, status=diverged. The commit is not an ancestor of the newest beta tag. No newer release tag exists on the first 20 releases or first 15 tags through window close. Tags API tip is still v2026.8.1-beta.2.
- **Receipt:** https://github.com/openclaw/openclaw/commit/ab5611f0be610380fe48803fe4311896ca85806e
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Nothing an operator can install. The bytes-approved-versus-bytes-executed fix remains on the default branch. This window cut zero OpenClaw releases.

**Operator consequence.** Same as the parent brief: a stable or even beta-tagged install does not contain the approved-exec binding. Say that to anyone relying on the approval prompt. Evidence that would settle the residual is a non-prerelease (or at least any) tag whose `git merge-base --is-ancestor ab5611f0 <tag>` is true.

## Researcher lane notes

Carry-forward answer: no. Capability half searched: no new tagged capability in this window. Social: Crabbox+E2B (mlejva) is a claim about a sandbox provider, not a substitute for this channel fact.

## Surfaces checked

- gh api repos/openclaw/openclaw/releases (20)
- gh api repos/openclaw/openclaw/tags (15)
- gh api commit ab5611f0
- gh compare v2026.8.1-beta.2...ab5611f0
