---
schema_version: bitter.frontier_harvest.v0
provider: pi-coding-agent
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/pi-coding-agent.yml
channels_present: []
window_volume: 1 material change (unreleased harness on a non-default branch)
lane: primary sources, coordinator; distinct from omp
---

# Harvest -- pi-coding-agent (primary sources)

Punctuation is ASCII. Repo earendil-works/pi. Not can1357/oh-my-pi.

## 1. No new tag; the new harness the maintainer is talking about is on `dev`, not main

- **Date:** 2026-08-20
- **Channel:** none (not in a tag; not on default branch)
- **Ancestry evidence:** Latest GitHub release still v0.84.2 published 2026-08-14T10:14:32Z, SHA 914cf1472e715297caa30db4b9535d534a9eb718. Window-close pins (`until=2026-08-21T00:00:00Z`): main tip 5cd93f688aaab89dbb6dfa4aca535f21796ae185 (2026-08-20T13:59:38Z); dev tip a17323e5b1e766433e76a3ed7a129f640924c079 (2026-08-20T21:09:41Z). compare v0.84.2...5cd93f68 ahead_by=79; 5cd93f68...a17323e5 ahead_by=264 behind_by=7 diverged; v0.84.2...a17323e5 ahead_by=336. Live HEAD after 2026-08-21 drifted; do not substitute it. packages/agent/docs/plugins.md 404 at v0.84.2 and at 5cd93f68; present at a17323e5. The `dev` docs say no privileged built-ins and reject Cordis in-process reload as the primary mechanism. Maintainer statement (discovery only): https://x.com/mitsuhiko/status/2090368103972479324
- **Receipt:** https://github.com/earendil-works/pi/tree/a17323e5b1e766433e76a3ed7a129f640924c079
- **Half:** capability | **Confidence:** high that the work is unreleased; medium on what the 264 commits contain without a full diff read

**What changed.** Operators on v0.84.2 have no new tagged capability. A `dev` branch 264 commits ahead of window-close main (5cd93f68) is where the maintainer says the new harness lives. Reading main's 79 unreleased commits is the wrong tree for that claim. Credential print (`pi auth print-api-key`) is still ungated on v0.84.2.

**Operator consequence.** Ignore main if you are trying to preview the new harness; it is not there. Do not install `dev` as if it were a release. Watch for a tag that contains a17323e5. Do not let an untrusted session run `pi auth print-api-key`.

## 2. Live compaction docs describe `session_compact_failed`; the npm package does not emit it

- **Date:** 2026-08-20 (docs vs tag); event SHA a6b1dbce 2026-08-17, still unreleased
- **Channel:** `main-unreleased` for the event; docs.latest is a moving page, not a release
- **Ancestry evidence:** compare v0.84.2...a6b1dbce ahead_by=22. compaction.md and extensions.md at v0.84.2 do not contain session_compact_failed. Both files at 5cd93f68 do. Unreleased at 5cd93f68 still lists the event under Fixed, not under a version heading. Follow-on 4495469a (2026-08-19) keeps threshold auto-compaction from being skipped when providers omit streaming usage; also not in v0.84.2 (ahead_by=61). On 0.84.2, AgentSession.setModel always writes the global default; at 5cd93f68 persist is behind options.persist (interactive /model passes false; Ctrl+S persists).
- **Receipt:** https://github.com/earendil-works/pi/commit/a6b1dbceb1af5bf8a21da0b437ef756ce9fe85e6
- **Half:** defect | **Confidence:** high

**What changed.** The live docs page tracks main. The npm package is still 0.84.2. Handlers written from pi.dev/docs/latest/compaction will not fire on the installable binary. Auto-compaction on 0.84.2 can also sit silent for providers that omit streaming usage.

**Operator consequence.** Do not implement against the live compaction page if you run 0.84.2. Stay on the tagged docs or the files at v0.84.2. `pi update` cannot pick this up.

## Researcher lane notes

KEisuke's "DeepSeek-style everything is a plugin" is right on composition (no privileged built-ins on `dev`) and wrong if it means Cordis in-process reload. The `dev` docs reject that as the primary mechanism. Not promoted to a product fact. Credential-command gating re-audited at v0.84.2: still absent.

## Surfaces checked

- GitHub releases and tags (tip v0.84.2)
- gh compare v0.84.2...main, main...dev, v0.84.2...dev
- branches/dev
