---
schema_version: bitter.frontier_harvest.v0
provider: openhands
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/openhands.yml
channels_present: [tagged-release, docs-only]
window_volume: 2 material changes, 2 capability-bearing, 1 defect-bearing, 1 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- openhands (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Per-run LLM cost is now visible in the Activity Log and leaves the product in an export

- **Date:** 2026-08-06
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #16351 merge commit 82bdd88269afaa5298f79a6c1f282221126d807e, merged 2026-08-06T11:25:27Z; gh api compare/82bdd88269afaa5298f79a6c1f282221126d807e...v1.11.0 returns status ahead, ahead_by 10, behind_by 0. Companion PR #16234 (activity log export) merge commit 877e56a15399822a46e62d894f362b155d220b80, merged 2026-08-03T22:13:04Z; compare/877e56a15...v1.10.0 returns status ahead, ahead_by 20, behind_by 0. Both tags are non-prerelease releases.
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/16351
- **Half:** capability | **Confidence:** high

**What changed.** Activity log export landed in v1.10.0 (PR #16234) and per-run LLM cost was added to both the Activity Log and those exports in v1.11.0 (PR #16351). Together they mean a run's cost is attributable to that run and the record can be taken out of the product as a file rather than read off a dashboard. On the Enterprise side the same window wired Export CSV buttons on the Usage & Monitoring Overview and Models tabs (Enterprise 0.41.0, OpenHands/enterprise PR #78, a link the public cannot open -- see the Enterprise receipts finding).

**Operator consequence.** Try it if you are trying to answer 'what did this agent cost us' with something better than a monthly invoice. Per-run cost plus export is the minimum viable evidence trail for agent spend: it survives the vendor, it can be diffed, and it can be joined to your own ticket IDs. Adopt the shape even if you do not adopt the platform -- a harness that cannot tell you the cost of one run cannot be governed.

## 2. OpenHands Enterprise shipped 0.36.1 to 0.41.0 with a changelog whose every receipt 404s

- **Date:** 2026-08-07
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** OpenHands/docs PR #699, merge commit 67a568a3ced444d6517477ff5bab23f619025ed9, merged 2026-08-07T20:35:17Z, single file enterprise/release-notes.mdx, +70 lines. Channel is docs-only by construction: the code repositories it describes are not public, so no ancestry can be established for any item in it. Link resolution: gh api repos/OpenHands/enterprise -> 404; gh api repos/OpenHands/runtime-api -> 404; unauthenticated curl of https://github.com/OpenHands/enterprise/pull/89 -> HTTP 404; curl of https://github.com/OpenHands/runtime-api/pull/685 -> HTTP 404.
- **Receipt:** https://github.com/OpenHands/docs/pull/699
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** Enterprise release notes jumped from 0.36.1 (added 2026-08-03) to 0.41.0 (added 2026-08-07) -- four days, and no notes for anything between. The 0.41.0 entry covers the Agent Canvas rollout into Enterprise (homepage banner, chart image bumped to Agent Canvas 1.9.0 then 1.10.0), GLM 5.2 as the SaaS default, Codex credential pre-flight and validation, a serialized-writes fix for a lost-write race on secrets (OHE-3052), pod security context propagation from runtime-api warm configs to sandbox start, and an idempotency fix on POST /api/organizations/provision-user (OHE-2980). Every one of those items is cited as a pull request in OpenHands/enterprise or OpenHands/runtime-api. Both repositories are private; all of those links return 404 to the public. The only cited repository a reader can open is OpenHands/OpenHands-Cloud.

**Operator consequence.** Study, but do not treat it as a record. For Enterprise customers this is now a vendor assertion with the shape of a changelog: it names fixes to secrets handling and sandbox pod security context -- exactly the items you would want to verify -- and hands you links that resolve to nothing. If you run Enterprise, ask your account team for the diff or the advisory behind OHE-3052 and OHE-2980 rather than accepting the summary, and note that going private is what made the release notes unverifiable, not a decision anyone announced.

## Researcher lane notes

Channel discipline. Every tagged-release claim here was resolved by ancestry, not by date: for each merge commit I ran gh api repos/OpenHands/OpenHands/compare/<sha>...<tag> and required status "ahead" with behind_by 0, and confirmed each tag is a non-prerelease, non-draft GitHub release. The one main-unreleased item (PR #16523) was proved the same way in reverse -- compare/e9ca71d13...v1.14.0 returns status "behind", ahead_by 0, behind_by 1, so v1.14.0 does not contain it, and compare/v1.14.0...main lists it among exactly three commits. Note that date would have gotten that one wrong: it merged 49 seconds before v1.14.0 was published.

Docs receipts are pinned to merge commit SHAs in OpenHands/docs, not to /blob/main/ paths, since docs.openhands.dev is a moving surface with no version indicator or changelog of its own.

Gaps and things I could not resolve, recorded rather than guessed:

1. openhands.dev could not be dated. The live site prominently features Agent Canvas and prints "npm install -g @openhands/agent-canvas && agent-canvas" as its primary local install, with a "Product > Agent Canvas / Cloud / Agent Control Plane / SDK" nav -- a positioning that matches the post-migration docs. But the site is a JS-rendered marketing surface with no changelog and no version string, and I could not date the change. The Wayback CDX index does hold snapshots inside the window (20260803221458, 20260813161039), but every attempt to retrieve a snapshot body via web.archive.org/web/<ts>id_/ returned zero bytes. So I am reporting no site change. What the site says today is stated here as an undated observation only, and I have not claimed it moved in this window. Worth a second attempt with a browser next cycle if positioning matters.

2. Enterprise is now unverifiable. OpenHands/enterprise and OpenHands/runtime-api both return 404 to authenticated gh and to anonymous curl. The Enterprise 0.41.0 release notes are therefore the only surface for a large body of security-adjacent work (a lost-write race on secrets, pod security context propagation, Codex credential handling), and every receipt they cite is a dead link. I have reported this as a finding rather than reporting its contents as verified fact -- none of the Enterprise items can be resolved by ancestry, and I have marked that entry's channel docs-only for exactly that reason. Do not let any Enterprise item be written up as if it were a code change we confirmed.

3. Scope decision. The contract's primary_surfaces name only openhands.dev, docs.openhands.dev, and OpenHands/OpenHands, so I stayed on those plus the docs repository that backs the docs site. The contract's watch list mentions SDK and CLI, but after the migration those live in OpenHands/software-agent-sdk, OpenHands/OpenHands-CLI, and OpenHands/automation -- separate public repositories, all of them active in this window (software-agent-sdk pushed 2026-08-18). I did not harvest them. If the SDK and CLI are meant to remain inside the "openhands" source, the contract's primary_surfaces list is now stale and should be extended; otherwise they want their own contracts. Flagging for the coordinator either way, since the platform's execution component is no longer in the repo this source watches.

4. Security. gh api repos/OpenHands/OpenHands/security-advisories returns exactly one advisory, GHSA-7h8w-hj9j-8rjw (high, command injection in the Git Diff Handler), published 2026-03-23 -- outside the window and not re-reported. No new CVE or GHSA in the window. The two items I marked security_relevant are a hardening fix with no advisory (#16093, where the demonstrated impact is a launch failure, not a proven injection -- I have said so plainly in the entry rather than upgrading it) and a documentation clarification of the isolation boundary. Neither is a patched vulnerability, and neither should be written up as one.

5. Capability/defect balance. Six capability or mixed entries, four defects, three neither. The window genuinely produced both halves: real new operator surface (context meter and manual compaction, per-run cost with export, external gateway chaining) alongside real breakage (an npm publish that silently did not happen for four days, a docs train that lost a version, a profile fallback that can start the wrong agent).

6. Editorial note on the carry-forward. The 2026-08-03 issue's anomaly has resolved, but not by correction -- the line climbed past its own duplicate and the two 1.11.0 releases both still stand. The story this window is one step further along: the reason the automation never noticed is a single boolean, "include-v-in-tag": true, inherited from the archived repository. That is the sharper version of last issue's finding and probably the lead if this source gets a signal.

## Surfaces checked

- https://github.com/OpenHands/OpenHands/releases (full list, 100 entries)
- git ls-remote --tags https://github.com/OpenHands/OpenHands.git
- gh api repos/OpenHands/OpenHands/releases/latest
- gh api repos/OpenHands/OpenHands/compare/... (ancestry proofs for every tagged claim)
- https://github.com/OpenHands/OpenHands default branch (compare v1.14.0...main)
- https://github.com/OpenHands/OpenHands/blob/v1.14.0/release-please-config.json and .release-please-manifest.json
- https://github.com/OpenHands/OpenHands/blob/v1.14.0/.github/workflows/npm-publish.yml
- gh api repos/OpenHands/OpenHands/actions/workflows/npm-publish.yml/runs (+ per-attempt jobs)
- https://registry.npmjs.org/@openhands/agent-canvas (versions, publish times, dist-tags)
- gh api repos/OpenHands/OpenHands/security-advisories and gh api advisories?ecosystem=pip&affects=openhands-ai
- https://github.com/OpenHands/docs commits 2026-08-03..2026-08-18, plus PRs 688/693/699/702/712/714/718/722 and issue 686
- https://docs.openhands.dev/
- https://openhands.dev/ (live HTML)
- web.archive.org CDX index for openhands.dev (snapshot bodies unretrievable)
- gh api orgs/OpenHands/repos (visibility and archive state)
