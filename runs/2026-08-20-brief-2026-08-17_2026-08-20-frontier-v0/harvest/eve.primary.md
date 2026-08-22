---
schema_version: bitter.frontier_harvest.v0
provider: eve
window: 2026-08-17..2026-08-20
run: 2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0
source_contract: sources/eve.yml
channels_present: [tagged-release]
window_volume: 3 material changes, 2 capability-bearing, 1 defect-bearing
lane: primary sources, coordinator; 0.43/0.44 are 08-21 OUT
---

# Harvest -- eve (primary sources)

Punctuation is ASCII. Repo vercel/eve. Parent ended at 0.39.0.

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

- GitHub releases eve@0.40.0, 0.41.0, 0.42.0, 0.43.0, 0.44.0
