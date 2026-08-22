---
schema_version: bitter.frontier_harvest.v0
provider: deepseek-harness
window: 2026-08-20..2026-08-22
run: 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0
source_contract: sources/deepseek-harness.yml
channels_present: [preview-or-beta]
window_volume: 2 prerelease tags; gate claim still in architecture.md
lane: primary sources, coordinator
---

# Harvest -- deepseek-harness (primary sources)

Punctuation is ASCII. Star count is not adoption. Public repo is a mirror (parent).

## 1. 0.1.1-rc.1 and rc.2 shipped; still no non-prerelease tag

- **Date:** 2026-08-21
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** GitHub releases: dsh-v0.1.1-rc.1 published 2026-08-21T07:12:39Z, prerelease=true, tag SHA `528c682e061696f5a160f363f236ecbf53cbd006`. dsh-v0.1.1-rc.2 published 2026-08-21T12:35:08Z, prerelease=true, tag SHA `b150a551b8d465e31e418e1b2eaf5e79bbb7d28e`. `gh api .../releases` filtered prerelease=false length=0. npm `@deepseek-ai/dsh` dist-tags: latest=0.1.1-rc.2, next=0.1.1-rc.2. Packument times: 0.1.1-rc.1 2026-08-21T06:49:18Z, 0.1.1-rc.2 2026-08-21T12:42:19Z.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.1-rc.2
- **Half:** neither | **Confidence:** high

**What changed.** The install command still resolves a prerelease. npm latest moved off rc.8.

**Operator consequence.** Still a developer preview. If you were pinned to `0.1.0-rc.8`, unpinned `npx @deepseek-ai/dsh` now pulls 0.1.1-rc.2. Last brief's SQLite schema warning: do not assume rc.2 opens an rc.8 database (not re-read this window).

## 2. architecture.md at rc.2 still says there is no privileged core

- **Date:** 2026-08-21
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** docs/architecture.md at SHA `b150a551b8d465e31e418e1b2eaf5e79bbb7d28e` still opens: every part of the product is a plugin, including the model adapter, the tool registry, the session log, and the agent loop; "There is no privileged core to patch"; dsh-base still owns "sandbox and approval policy" as the first layer. Did not re-open packages/interaction/user-approval/src/index.ts at this SHA. Last brief's never-before-waterfall / replace-the-row distinction is assumed until a later read of that file at b150a551.
- **Receipt:** https://github.com/deepseek-ai/deepseek-harness/blob/b150a551b8d465e31e418e1b2eaf5e79bbb7d28e/docs/architecture.md
- **Half:** neither (posture unchanged in the architecture page) | **Confidence:** high on the docs claim; medium that the approval implementation is byte-identical

**What changed.** The 0.1.1-rc train did not grow a privileged core in the architecture page.

**Operator consequence.** Same as rc.8: `--dump-config` is the security document. Do not treat 0.1.1-rc.2 as the gate becoming privileged.

## Surfaces checked

- GitHub releases (four refs, all prerelease)
- npm dist-tags and time for @deepseek-ai/dsh
- architecture.md at b150a551
