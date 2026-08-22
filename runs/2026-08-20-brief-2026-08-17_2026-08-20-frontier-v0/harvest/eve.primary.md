---
schema_version: bitter.frontier_harvest.v0
provider: eve
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/eve.yml
channels_present: [tagged-release]
window_volume: 6 tagged cuts in-window (0.39.1 through 0.42.0), 3 capability-bearing, 4 defect-bearing
lane: primary sources, coordinator; leftover 0.39.x applied after independent gh compare; 0.43/0.44 are 08-21 OUT
---

# Harvest -- eve (primary sources)

Punctuation is ASCII. Repo vercel/eve. Parent ended at eve@0.39.0 (published 2026-08-17T21:49:08Z, overlap). In-window tags: 0.39.1, 0.39.2, 0.39.3 (2026-08-19) and 0.40.0, 0.41.0, 0.42.0 (2026-08-20). All six: prerelease=false. compare eve@0.39.0...eve@0.39.1 ahead_by=24; 0.39.1...0.39.2 ahead_by=6; 0.39.2...0.39.3 ahead_by=7; 0.39.3...0.42.0 ahead_by=16. eve@0.43.0 and eve@0.44.0 published 2026-08-21 are OUT. npm dist-tag latest is already 0.44.0 as of the 2026-08-21 observation; window-close pin is eve@0.42.0.

## 0. eve@0.39.1 stops follow-up turns from re-issuing a gated tool while an approval is pending

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release eve@0.39.1 published 2026-08-19T04:30:45Z, prerelease=false. compare eve@0.39.0...eve@0.39.1 ahead_by=24. Body names f02bc3d (pending tool approvals stay visible so follow-up turns cannot re-issue the gated call) and c9d3e25 (Slack approval cards wait for settlement; rejected responses leave the shared card open). compare eve@0.39.1...f02bc3d3d3 status=behind, ahead_by=0.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.39.1
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** A parked approval no longer disappears from the model's view, so a follow-up message cannot mint a second copy of the same tool call. Slack cards stop painting a rejection as answered.

**Operator consequence.** Upgrade past 0.39.0 if a channel keeps chatting while a tool is parked.

## 0b. eve@0.39.2 rebuilds dependency-created tools and their approval policies on durable continuations

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** eve@0.39.2 published 2026-08-19T18:12:24Z, prerelease=false. compare eve@0.39.1...eve@0.39.2 ahead_by=6. Body names 2c01eab: rebuild untransformed session-scoped dynamic tool executors and approval policies on durable continuations so dependency-created tools remain available after replay.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.39.2
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** Tools and approval policies that live in an imported package, not in authored agent/tools, survived a durable pause in 0.39.1 only if they happened to still be in process memory. 0.39.2 rebuilds them.

**Operator consequence.** If approval policies come from a package, 0.39.1 and earlier can drop the gate across a worker replacement.

## 0c. eve@0.39.3 makes turnPolicy queue bind again; it had silently steered since 0.34.0

- **Date:** 2026-08-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** eve@0.39.3 published 2026-08-19T22:41:34Z, prerelease=false. Body names 542c380: preserve configured turnPolicy on built-in and custom channels, and restore the option for Slack. PR #2173 merged 2026-08-19T22:23:07Z, merge SHA 542c380eec. compare eve@0.39.3...542c380eec status=behind, ahead_by=0. compare eve@0.42.0...542c380eec status=behind, ahead_by=0. Parent finding told operators to set queue after 0.33.0; PR body states the field fell back to steer on built-in channels since 0.34.0 because defineChannel stopped copying it. Same tag also adds a development-only @eve/self-modification subagent (9a7964b) that mounts authored source read-write without an approval round trip, gated to eve dev by the notes.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.39.3
- **Half:** defect | security-relevant | **Confidence:** high on turnPolicy; high on the self-mod EVE_DEV gate at the tag

**What changed.** A documented control did not bind from 0.34.0 through 0.39.2. 0.39.3 copies the field again. The self-mod subagent is a capability sitting next to that repair: writable source and no HITL, on purpose. At eve@0.39.3, packages/eve-self-modification/src/agent.ts exports the agent only when process.env.EVE_DEV === "1"; filesystem.ts mounts appRoot/agent read-write at /source; edit_file has no approval field.

**Operator consequence.** If you set turnPolicy queue after 0.33.0, 0.39.3 is the first tag that actually queues. Re-test. Do not ship the self-mod subagent. Do not leave EVE_DEV=1 set on a laptop agent overnight.

## 1. eve@0.40.0 redacts brokered credential transforms in sandbox bootstrap logs

- **Date:** 2026-08-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** GitHub release eve@0.40.0 published 2026-08-20T04:55:55Z, prerelease=false. Patch cda9539d in packages/eve/src/execution/sandbox/logging-session.ts: JSON.stringify replacer, `key === "transform" ? "[redacted]" : value`. Test asserts log contains `"transform":"[redacted]"` and does not contain the live credential. This is log redaction, not a change to the live policy object.
- **Receipt:** https://github.com/vercel/eve/commit/cda9539d03939b7875bc2f91f7c1f03c853b94de
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Credential material that was being written into sandbox bootstrap logs is redacted.

**Operator consequence.** Upgrade to 0.40.0 if you run sandboxes with brokered credentials and retain bootstrap logs.

## 2. eve@0.41.0 adds a first-class iMessage/SMS channel and rebuilds approval policies on durable continuations

- **Date:** 2026-08-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** eve@0.41.0 published 2026-08-20T20:33:52Z. Minor: Linq iMessage and SMS channel with Vercel Connect. Patch c47350f: rebuild untransformed session-scoped dynamic tool executors and approval policies on durable continuations so dependency-created tools remain available after replay; Teams tool-approval cards update only after settlement, with the Teams responder who acted.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.41.0
- **Half:** both | **Confidence:** high

**What changed.** A messaging channel that can approve tools is now first-class, and replay no longer drops the approval policy that was created for dynamic tools.

**Operator consequence.** If you embed eve with durable sessions, 0.41.0 is the cut where approval policy survives replay. The Linq channel is a new human-in-the-loop surface; treat it as an approval path, not just a chat skin.

## 3. eve@0.42.0 stops channel HITL responses from carrying channel-local metadata into the session inbox

- **Date:** 2026-08-20
- **Channel:** `tagged-release`
- **Ancestry evidence:** eve@0.42.0 published 2026-08-20T21:06:06Z. Commit a43e14f. At the tag, packages/eve/src/runtime/input/types.ts: inputResponseSchema is `.strict()` over `{ optionId?, requestId, text? }`; parseInputResponses() brands ValidatedInputResponse. Extra keys on a human approval cannot enter the session inbox.
- **Receipt:** https://github.com/vercel/eve/commit/a43e14f340e7695fdea8b4998afe59c890b3bac7
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** A channel-local extra key on a human approval could previously leak into the session inbox. That is closed.

**Operator consequence.** Upgrade to 0.42.0 if humans approve from Teams/iMessage/SMS.

## Researcher lane notes

eve@0.43.0 and eve@0.44.0 published 2026-08-21 are out of window.

## Surfaces checked

- GitHub releases eve@0.39.1, 0.39.2, 0.39.3, 0.40.0, 0.41.0, 0.42.0, 0.43.0, 0.44.0
- gh compare 0.39.0...0.39.1 (24), 0.39.1...0.39.2 (6), 0.39.2...0.39.3 (7), 0.39.3...0.42.0 (16)
- compare eve@0.39.3...542c380eec and eve@0.42.0...542c380eec (behind, ahead_by=0)
- npm view eve dist-tags and time (latest already 0.44.0; 0.42.0 is 2026-08-20)
- PR #2173 body
