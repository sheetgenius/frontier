---
schema_version: bitter.frontier_harvest.v0
provider: eve
window: 2026-08-20..2026-08-22
run: 2026-08-22-arch-read-2026-08-20_2026-08-22-frontier-v0
source_contract: sources/eve.yml
channels_present: [tagged-release]
window_volume: 2 tags after 0.42.0
lane: primary sources, coordinator
---

# Harvest -- eve (primary sources)

Punctuation is ASCII. Identity: vercel/eve, npm `eve`. Last brief window-close pin was eve@0.42.0; npm latest had already left that window.

## 1. eve@0.43.0 forwards the caller on persistent subagent continuations

- **Date:** 2026-08-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release eve@0.43.0 published 2026-08-21T12:03:21Z, prerelease=false, tag SHA `6d4f03ee33133faebd613004503ac29d84e9f977`. npm time 0.43.0 2026-08-21T12:03:16Z. Release notes: "Forward the active caller on persistent local and remote subagent continuations so user-scoped connections resolve for the current turn without inheriting the previous caller's authority. Upgrade both remote-agent deployments before resuming existing persistent sessions; create-only receivers reject forwarded continuations rather than falling back to service authority." Also: dynamic tool approval/execution/output callbacks durable across cold starts.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.43.0
- **Half:** both | security-relevant | **Confidence:** high on the notes; did not open the implementation files at the tag

**What changed.** Persistent subagent resume no longer inherits the previous caller's authority. Both sides of a remote pair have to move together.

**Operator consequence.** If you run persistent remote subagents, upgrade both deployments to 0.43.0 before resuming those sessions. Unpinned `npm i eve` is already past this tag.

## 2. eve@0.44.0 is npm latest; traces default public-only

- **Date:** 2026-08-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release eve@0.44.0 published 2026-08-21T16:07:14Z, tag SHA `2582a3f9117546cb54656adf55ccac34df997035`. npm dist-tag latest=0.44.0, time 2026-08-21T16:07:10Z. Notes: traces public-only by default; unclassified HTTP/TUI sessions retained in zero-config local tracing; composable redaction on the export pipeline.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.44.0
- **Half:** neither (default narrowed) | **Confidence:** high on the notes

**What changed.** Latest moved. Tracing default is stricter.

**Operator consequence.** Pin if you needed 0.42.0's channel-approval work from last brief. 0.44.0 is what unpinned npm serves.

## Surfaces checked

- GitHub releases eve@0.42.0 / 0.43.0 / 0.44.0
- npm dist-tags and time
