---
schema_version: bitter.frontier_harvest.v0
provider: omp
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/omp.yml
channels_present: [tagged-release]
window_volume: 3 material changes, 1 capability (write fallback now released), 1 channel, 1 breaking tokenizer
lane: primary sources, coordinator; fork can1357/oh-my-pi not earendil-works/pi
---

# Harvest -- omp (primary sources)

Punctuation is ASCII. This is Oh My Pi, the fork. Not Pi Coding Agent.

## 1. v17.3.7 gained a GitHub release and an npm publish; v17.3.6 still has neither

- **Date:** 2026-08-18
- **Channel:** `tagged-release` for 17.3.7; v17.3.6 remains tag-without-release
- **Ancestry evidence:** `gh api repos/can1357/oh-my-pi/releases/tags/v17.3.6` -> HTTP 404. `gh api .../releases/tags/v17.3.7` -> prerelease=false, published_at=2026-08-18T08:47:33Z. Tag v17.3.6 SHA 54e1a8c900d30e5b6185975ab02a4a923faf1717 still exists. npm view time: 17.3.6 MISSING, 17.3.7 published 2026-08-18T08:51:09Z. Current npm latest at observation is 17.4.2 (2026-08-21, OUT); at window close the in-window npm tip is 17.4.0 (2026-08-20T06:42:13Z).
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.3.7
- **Half:** neither | **Confidence:** high

**What changed.** Parent asked whether v17.3.6 and v17.3.7 would gain releases. 17.3.7 did, including npm. 17.3.6 did not, on either GitHub Releases or npm. Tag-ahead-of-release happened once and was not cleaned up; it is not "every tag" but it is not gone.

**Operator consequence.** Name the install path. `npm i @oh-my-pi/pi-coding-agent@17.3.7` works. There is no npm 17.3.6. Do not report a version from `git tag` without checking the release and the registry.

## 2. The filesystem-write fallback hook is in the 17.3.7 release an operator can install

- **Date:** 2026-08-18
- **Channel:** `tagged-release`
- **Ancestry evidence:** v17.3.7 release body includes `ExtensionAPI.registerFileWriteFallback(handler)` under @oh-my-pi/pi-coding-agent. Parent recorded this on tags that had no release; the hook is now in a GitHub release and npm 17.3.7.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.3.7
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** An extension can service a filesystem write or delete after the native path refused it. That is now on a released, npm-published version, not only a dangling tag.

**Operator consequence.** If you run OMP 17.3.7+, inspect installed extensions for registerFileWriteFallback. The OS denial is no longer the last word when an extension is loaded.

## 3. v17.3.8 and v17.4.0 cut in-window; 17.4.0 breaks the tokenizer API

- **Date:** 2026-08-19 and 2026-08-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** v17.3.8 published 2026-08-19T11:11:02Z. v17.4.0 published 2026-08-20T06:37:51Z. v17.4.0 body: breaking change replacing global token counting functions with model-scoped Tokenizer instances; also a tool-argument repair fix for union schemas that had been corrupting tool call and subagent payloads.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.4.0
- **Half:** both | **Confidence:** high

**What changed.** 17.4.0 is the window-close npm tip (before 08-21 17.4.1/17.4.2). Breaking tokenizer API. Union-schema tool-argument repair is a real defect fix (corrupted payloads).

**Operator consequence.** If you call countTokens as a global, 17.4.0 breaks you. Upgrade through 17.3.7 first if you only wanted the write-fallback hook without the tokenizer break.

## Researcher lane notes

v17.4.1 and v17.4.2 are 2026-08-21, out of window. Homebrew/Bun/script paths not re-probed in this coordinator pass; parent said only Nix reached 17.3.6/7. npm now reaches 17.3.7 and 17.4.0.

## Surfaces checked

- GitHub releases tags v17.3.6 (404), v17.3.7, v17.3.8, v17.4.0, v17.4.1, v17.4.2
- git matching-refs tags/v17.3
- npm view @oh-my-pi/pi-coding-agent time and dist-tags
