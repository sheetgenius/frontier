---
schema_version: bitter.frontier_harvest.v0
provider: codex
window: 2026-08-20..2026-08-22
run: 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0
source_contract: sources/codex.yml
channels_present: [tagged-release, preview-or-beta]
window_volume: no new stable; alpha moved to 0.150.0-alpha.6
lane: primary sources, coordinator
---

# Harvest -- codex (primary sources)

Punctuation is ASCII. Do not re-litigate rust-v0.149.0 / Guardian from last brief.

## 1. npm latest is still 0.149.0; 0.150.0 is alpha only

- **Date:** 2026-08-21 (alpha tip); 0.149.0 published 2026-08-20T21:09:05Z was last brief's latest
- **Channel:** npm `latest` = tagged-release 0.149.0. npm `alpha` = preview-or-beta 0.150.0-alpha.6.
- **Ancestry evidence:** npm dist-tags: latest=0.149.0, alpha=0.150.0-alpha.6. GitHub: rust-v0.149.0 published 2026-08-20T21:04:55Z prerelease=false. rust-v0.150.0-alpha.1 through alpha.6 are prerelease=true; tip rust-v0.150.0-alpha.6 published 2026-08-21T22:42:06Z. No rust-v0.150.0 non-prerelease exists in the first page of GitHub releases matching 0.150.
- **Receipt:** https://www.npmjs.com/package/@openai/codex
- **Half:** neither | **Confidence:** high

**What changed.** The stable channel did not move after 0.149.0. The alpha train left 0.149.0-alpha.* for 0.150.0-alpha.*.

**Operator consequence.** `npm i -g @openai/codex` is still 0.149.0. `@openai/codex@alpha` is 0.150.0-alpha.6 and is a prerelease. Do not install alpha as if it were 0.150.0 stable. Guardian V2 posture is last brief's 0.149.0 fact; not re-opened.

## Surfaces checked

- npm dist-tags and time for @openai/codex
- GitHub releases rust-v0.149.0 and rust-v0.150.0-alpha.*
