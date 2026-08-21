---
schema_version: bitter.frontier_harvest.v0
provider: agent-flywheel
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/agent-flywheel.yml
channels_present: [main-unreleased]
window_volume: 2 material changes, 1 capability-bearing, 1 defect-bearing, 0 tagged
lane: primary sources, coordinator; last tag still v0.7.0
---

# Harvest -- agent-flywheel (primary sources)

Punctuation is ASCII. Repo: Dicklesworthstone/agentic_coding_flywheel_setup.

## 1. No new tag: v0.7.0 from 2026-06-26 still the only installable cut

- **Date:** 2026-08-20
- **Channel:** none tagged in window
- **Ancestry evidence:** `gh api repos/Dicklesworthstone/agentic_coding_flywheel_setup/releases` tip remains v0.7.0 published 2026-06-26T22:46:27Z. Tags tip v0.7.0 SHA edaee4f6ceff772d4f56d42eda65b1d659fead73. `gh api .../compare/v0.7.0...HEAD` -> ahead_by=163, behind_by=0.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0
- **Half:** neither | **Confidence:** high

**What changed.** The tagged channel did not move.

**Operator consequence.** Anyone installing from the release still gets June software. Default-branch work below is not in that tag.

## 2. Optional EE, FMD, Pi, and PFR tools landed on main as a stack unit

- **Date:** 2026-08-19
- **Channel:** `main-unreleased`
- **Ancestry evidence:** commit f3a089ce95992433c4e4e7ed2b52536afca228e4 "feat(stack): add optional EE, FMD, Pi, and PFR tools with lessons, installers, and checksums" dated 2026-08-19T15:50:43Z, +2520/-22. Not an ancestor of v0.7.0 (v0.7.0...HEAD ahead_by 163 includes this SHA). Adjacent contract repos (pi as pi_agent_rust) are wrapped here; do not attribute the wrapper's installer to earendil-works/pi.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/f3a089ce95992433c4e4e7ed2b52536afca228e4
- **Half:** capability | **Confidence:** high

**What changed.** Four recommended-but-optional stack entries: eidetic_engine_cli, franken_markdown, pi_agent_rust, power_failure_resumer, with installers, checksums, doctor checks, and onboard lessons 39-42.

**Operator consequence.** Try only if you run this repo from main and want those CLIs. A v0.7.0 install does not get them. Treat pi_agent_rust as this stack's Pi wrapper, not as a Pi Coding Agent release.

## 3. Installer 429 retry, postgres fallback, and checksum-monitor work on main

- **Date:** 2026-08-17 to 2026-08-20
- **Channel:** `main-unreleased`
- **Ancestry evidence:** in-window default-branch commits include cbce746569 "fix(install): close the still-unretried default-path 429" (2026-08-17T18:39:02Z), 0bb30463e2 "fix(install): fall back to Ubuntu-native postgresql when PGDG 18 is uninstallable" (2026-08-20T06:01:58Z), 0552b54d35 "feat(monitor): local checksum monitor replacing the Actions workflow" (2026-08-20T05:54:50Z). All dated after v0.7.0.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/cbce746569
- **Half:** defect | **Confidence:** high

**What changed.** Install path: GitHub 429s that previously were not retried on the default path, PGDG 18 uninstallable on some Ubuntu images, and checksum monitoring moved off GitHub Actions.

**Operator consequence.** If a v0.7.0 install is failing on 429 or Postgres 18, the fixes are on main only.

## Researcher lane notes

Identity: this is the flywheel setup repo, not beads/ntm/cass themselves except as adjacent installers. 08-21 commits (OpenAI File Downloader UA, rch checksums) are out of window.

## Surfaces checked

- GitHub releases and tags
- gh compare v0.7.0...HEAD
- gh api commits filtered 2026-08-17 <= date < 2026-08-21
- feat(stack) commit files via commits API
