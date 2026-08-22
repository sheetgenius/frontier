---
schema_version: bitter.frontier_harvest.v0
provider: github-copilot-cli
window: 2026-08-20..2026-08-22
run: 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0
source_contract: sources/github-copilot-cli.yml
channels_present: [preview-or-beta]
window_volume: prerelease train moved; latest unmoved
lane: primary sources, coordinator
---

# Harvest -- github-copilot-cli (primary sources)

Punctuation is ASCII. Identity trap: Copilot CLI is not VS Code Copilot, not the cloud coding agent, and not `gh copilot`. Package is `@github/copilot`. Repo is github/copilot-cli.

## 1. npm latest is still 1.0.80; prerelease tip is 1.0.81-7

- **Date:** 2026-08-21 (prerelease tip); latest 1.0.80 published 2026-08-14T02:30:35Z (before this window)
- **Channel:** npm `latest` = 1.0.80 (no in-window tagged latest). npm `prerelease` = 1.0.81-7, GitHub release v1.0.81-7 published 2026-08-21T18:39:24Z, prerelease=true.
- **Ancestry evidence:** npm dist-tags: latest=1.0.80, prerelease=1.0.81-7. GitHub releases first six are all prerelease v1.0.81-2 through v1.0.81-7. changelog.md on moving `main` was not line-audited (blob SHA 381986dd at observation).
- **Receipt:** https://www.npmjs.com/package/@github/copilot
- **Half:** neither | **Confidence:** high on dist-tags; low on what 1.0.81-7 contains without reading the prerelease notes

**What changed.** Unpinned npm did not move. The 1.0.81 prerelease train continued through 08-21.

**Operator consequence.** `npm i -g @github/copilot` is still 1.0.80. Do not take 1.0.81-7 as latest. Do not confuse this with VS Code Copilot.

## Surfaces checked

- npm dist-tags and time
- GitHub releases (prerelease flag)
