---
schema_version: bitter.frontier_harvest.v0
provider: eve
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/eve.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased]
window_volume: 32 stable eve@ tags (eve@0.64.0 through eve@0.79.0, all prerelease=false), 463 commits eve@0.63.0...eve@0.79.0 (ahead 463, behind 0); end-of-window main 8 commits ahead of 0.79.0; 4 GitHub prerelease objects (tool-stub preview tarballs, never on npm); 12 @eve/buzz-acp-adapter dependency-only releases followed by source removal; 25 material changes (4 capability, 6 defect, 15 both)
lane: primary sources, profile-refresh researcher
---

# Harvest: eve (primary sources)

Punctuation is ASCII. Identity: `gh api repos/vercel/eve` -> full_name vercel/eve, owner vercel, homepage https://eve.dev, license Apache-2.0, 5,540 stars, description "The Open Framework for Building Agents", default_branch main. The npm package `eve` maps one-to-one onto `eve@` GitHub releases in this window (32 versions, 32 tags at the window close), and the README at eve@0.78.0 still opens "eve is a filesystem-first framework for durable AI agents" (https://github.com/vercel/eve/blob/eve%400.78.0/README.md?plain=1#L17). Read via a blobless clone (tags fetched; ancestry by `git merge-base --is-ancestor`, `git tag --contains` and `git rev-list --count`), source tarballs at eve@0.63.0, eve@0.69.0, eve@0.77.0 and eve@0.78.0 from codeload, `gh api` for release objects, prerelease flags, PR bodies and advisories, and `npm view` for publish times and dist-tags. Cloned code was read, never executed. Baseline: eve@0.63.0 (parent window-close pin, tag commit d004e6d47e9d, published 2026-09-19T16:34:12Z). The live docs page https://eve.dev/docs/human-in-the-loop (retrieved 2026-10-13, unversioned) carries the same text as `docs/tools/human-in-the-loop.md` at eve@0.78.0, so docs claims below are pinned to the tag.

## Install today

- **Newest stable at window close: eve@0.79.0**, GitHub release published 2026-10-13T18:41:08Z, tag commit de7a408e4dc515e4fff6295cb0e8b4f371843c67; npm published 2026-10-13T18:45:16.490Z. Install pinned with `npm install eve@0.79.0`, or scaffold with `npx eve@0.79.0 init <name>`. Node >=24; Apache-2.0 metadata unchanged. Receipts: https://github.com/vercel/eve/releases/tag/eve%400.79.0, https://registry.npmjs.org/eve/0.79.0, https://github.com/vercel/eve/blob/eve%400.79.0/README.md, https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/package.json. GitHub's non-prerelease flag describes the install channel; Eve still describes the product as beta.
- **Registry:** observed 2026-10-14, latest=0.79.0 and beta=0.6.0-beta.20. The last in-window version publication and GitHub release establish the dated stable recommendation; live dist-tags do not supply an immutable movement history. Skip the stale beta line. Every in-window npm Eve version has a corresponding stable tag and release (32/32); 0.76.1 is absent from both. Receipt: https://registry.npmjs.org/eve.
- **Preview:** four GitHub prerelease objects carry tool-stub tarballs, checksums, and URL installs. Three distinct PR-branch commits are outside stable ancestry. Tool stubs themselves shipped in 0.75.0; there is no need to install a preview for that feature. Receipt: https://github.com/vercel/eve/releases/tag/eve-preview-pr-4524-724846842.
- **Main at the UTC window close:** 80f15de21abb8a575d5bfdee333e72a9e7d1742c, eight commits ahead of 0.79.0. The morning 0.78.0/main identity was a valid snapshot, not the end-of-day state. The queued-message consent fix (section 14) and same-host connection-result identity fix (section 25) were main-unreleased. Receipt: https://github.com/vercel/eve/compare/de7a408e4dc515e4fff6295cb0e8b4f371843c67...80f15de21abb8a575d5bfdee333e72a9e7d1742c.
- **In no channel:** the v27 session protocol stack, QuickJS/Monty code mode, world-hub, explicit approver-credential access (#4604), and internal-team telemetry proposals remained unmerged. MCP tool annotations (#4596) shipped in 0.79.0 (section 13); remove them from the open-only inventory.
- **Opt-in:** `auto()` per tool, `turnPolicy: "queue"` (default `steer`), MCP tools and skills publication (both off by default), tool stubs (denied even in development unless authorized), remote self-modification (explicit mount and authorize callback), and `defineDynamicSchedules` from `eve/experimental/schedules`. **Default local exposure:** every `eve dev` mounts bundled self-modification unless disabled. `--no-default-extensions` does not disable an explicit mount under `agent/extensions/`; inspect those mounts too (section 5).
- **Fix-specific minimums:** 0.78.0 for requester execution identity; 0.69.0 for the verified deferred workflow dispatch fix; 0.70.0 for held prompts and cancellation withdrawal. These are not universal approval-integrity floors: later lifecycle fixes shipped in 0.75.0 and 0.77.0, and section 14 remains unfixed in 0.79.0. Recommend 0.79.0 for installation. No Eve-specific GitHub advisory was found in the records checked on 2026-10-14; dependency advisories exist (section 15).

## Release ledger

All `eve@` stables are prerelease=false. ahead_by / behind_by from local `git rev-list --count` (history is linear; spot-checked with `gh api compare/eve@0.63.0...eve@0.78.0` -> ahead 453, behind 0). npm times from `npm view eve time --json`.

| Tag | Published (UTC) | Prerelease | ahead_by / behind_by vs previous stable | npm publish (UTC) |
|---|---|---|---|---|
| eve@0.63.0 (baseline, parent pin) | 2026-09-19T16:34:12Z | false | n/a | 2026-09-19T16:38:15Z |
| eve@0.64.0 | 2026-09-22T19:34:09Z | false | 27 / 0 vs 0.63.0 | 2026-09-22T19:42:13Z |
| eve@0.64.1 | 2026-09-22T22:59:13Z | false | 7 / 0 vs 0.64.0 | 2026-09-22T23:05:21Z |
| eve@0.65.0 | 2026-09-23T14:02:39Z | false | 9 / 0 vs 0.64.1 | 2026-09-23T14:10:42Z |
| eve@0.66.0 | 2026-09-23T19:48:22Z | false | 18 / 0 vs 0.65.0 | 2026-09-23T19:55:26Z |
| eve@0.66.1 | 2026-09-24T02:22:54Z | false | 10 / 0 vs 0.66.0 | 2026-09-24T02:29:02Z |
| eve@0.66.2 | 2026-09-24T15:26:27Z | false | 4 / 0 vs 0.66.1 | 2026-09-24T15:44:00Z |
| eve@0.66.3 | 2026-09-24T20:43:49Z | false | 5 / 0 vs 0.66.2 | 2026-09-24T20:52:00Z |
| eve@0.67.0 | 2026-09-26T04:39:00Z | false | 27 / 0 vs 0.66.3 | 2026-09-26T04:46:04Z |
| eve@0.67.1 | 2026-09-26T16:27:10Z | false | 4 / 0 vs 0.67.0 | 2026-09-26T16:32:18Z |
| eve@0.67.2 | 2026-09-27T15:11:59Z | false | 4 / 0 vs 0.67.1 | 2026-09-27T15:17:07Z |
| eve@0.68.0 | 2026-09-28T22:56:55Z | false | 20 / 0 vs 0.67.2 | 2026-09-28T22:58:56Z |
| eve@0.69.0 | 2026-10-01T01:33:33Z | false | 64 / 0 vs 0.68.0 | 2026-10-01T01:38:37Z |
| eve@0.70.0 | 2026-10-02T01:25:29Z | false | 20 / 0 vs 0.69.0 | 2026-10-02T01:32:33Z |
| eve@0.70.1 | 2026-10-02T14:57:52Z | false | 8 / 0 vs 0.70.0 | 2026-10-02T15:03:01Z |
| eve@0.70.2 | 2026-10-02T23:37:51Z | false | 23 / 0 vs 0.70.1 | 2026-10-02T23:46:00Z |
| eve@0.70.3 | 2026-10-03T14:49:40Z | false | 9 / 0 vs 0.70.2 | 2026-10-03T14:53:48Z |
| eve@0.71.0 | 2026-10-03T17:52:16Z | false | 4 / 0 vs 0.70.3 | 2026-10-03T17:59:20Z |
| eve@0.71.1 | 2026-10-05T17:53:52Z | false | 20 / 0 vs 0.71.0 | 2026-10-05T18:02:03Z |
| eve@0.71.2 | 2026-10-05T18:46:25Z | false | 3 / 0 vs 0.71.1 | 2026-10-05T18:51:35Z |
| eve@0.71.3-tool-stubs.4370.4127e565 | 2026-10-05T22:43:20Z | true | 19 / 0 vs 0.71.2 (PR-branch commit, in no stable tag; marked superseded) | not on npm (release asset) |
| eve-preview-pr-4370-4127e565 | 2026-10-05T22:48:23Z | true | 19 / 0 vs 0.71.2 (same commit) | not on npm (release asset) |
| eve@0.71.3 | 2026-10-06T17:33:53Z | false | 17 / 0 vs 0.71.2 | 2026-10-06T17:42:08Z |
| eve-preview-pr-4370-a94c7c789 | 2026-10-06T18:17:52Z | true | 15 / 0 vs 0.71.3 (in no stable tag) | not on npm (release asset) |
| eve@0.72.0 | 2026-10-07T01:20:15Z | false | 18 / 0 vs 0.71.3 | 2026-10-07T01:35:23Z |
| eve@0.72.1 | 2026-10-07T04:42:58Z | false | 3 / 0 vs 0.72.0 | 2026-10-07T04:50:46Z |
| eve@0.73.0 | 2026-10-07T18:15:22Z | false | 19 / 0 vs 0.72.1 | 2026-10-07T18:27:25Z |
| eve@0.74.0 | 2026-10-08T03:22:29Z | false | 15 / 0 vs 0.73.0 | 2026-10-08T03:34:37Z |
| eve-preview-pr-4524-724846842 | 2026-10-08T18:56:19Z | true | 88 / 0 vs 0.74.0 (in no stable tag) | not on npm (release asset) |
| eve@0.75.0 | 2026-10-08T19:49:03Z | false | 20 / 0 vs 0.74.0 | 2026-10-08T19:52:06Z |
| eve@0.75.1 | 2026-10-08T23:37:05Z | false | 11 / 0 vs 0.75.0 | 2026-10-08T23:42:14Z |
| eve@0.76.0 | 2026-10-09T17:22:20Z | false | 22 / 0 vs 0.75.1 | 2026-10-09T17:28:30Z |
| eve@0.76.2 | 2026-10-10T16:27:16Z | false | 15 / 0 vs 0.76.0 | 2026-10-10T16:31:25Z |
| eve@0.76.3 | 2026-10-10T18:25:27Z | false | 2 / 0 vs 0.76.2 | 2026-10-10T18:29:36Z |
| eve@0.77.0 | 2026-10-11T20:11:01Z | false | 16 / 0 vs 0.76.3 | 2026-10-11T20:26:17Z |
| eve@0.78.0 | 2026-10-13T01:47:36Z | false | 9 / 0 vs 0.77.0 | 2026-10-13T01:52:46Z |
| eve@0.79.0 | 2026-10-13T18:41:08Z | false | 10 / 0 vs 0.78.0 | 2026-10-13T18:45:16.490Z |

Dates are 2026, from GitHub release `published_at`. Also in window: 12 `@eve/buzz-acp-adapter` releases (0.0.35 through 0.0.46), whose bodies list only "Updated dependencies". Its source was later removed (section 22).

## 1. Approved calls ran with the approver's identity and credentials until 0.78.0

- **Date:** 2026-10-13 (eve@0.78.0; fix merged 2026-10-12T15:58:56Z)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 9559de83b65e (#4515) first stable tag containing it is eve@0.78.0; `merge-base --is-ancestor 9559de8 eve@0.77.0` -> false. Earlier steps: ddc8e12ff9ef (#4135, approvals hold the turn) first in eve@0.70.0, not 0.69.0; a8262be2ba5c (#4364) first in eve@0.71.3, not 0.71.2; 9d42f05ceb6f (#4368) first in eve@0.72.0, not 0.71.3. Code at eve@0.77.0 `packages/eve/src/execution/coordination-dispatch-step.ts` L62-L64: comment "An approved call runs as whoever approved it; the rest as the turn's caller." and `current: batch.approvers?.[task.callId] ?? prepared.auth`; at eve@0.78.0 L72-L73 the same field is `current: prepared.auth`, and `approvers` appears nowhere in non-test source. Docs `docs/tools/human-in-the-loop.md` at eve@0.71.3 L229 through eve@0.77.0 L235: "If a tool is approved by another user, only the approved call runs with that user's auth." At eve@0.78.0 L235: "Approval is consent only. An approved tool call runs with the requesting user's identity, connections, and credentials, including its policy recheck. The approver's access is never lent to the call." No GHSA (see Install today).
- **Receipt:** https://github.com/vercel/eve/commit/9559de83b65e89c24172c2b9c1a80382033556aa, https://github.com/vercel/eve/blob/eve%400.79.0/docs/tools/human-in-the-loop.md?plain=1#L257, https://github.com/vercel/eve/releases/tag/eve%400.78.0, https://github.com/vercel/eve/pull/4515, https://github.com/vercel/eve/blob/eve%400.77.0/packages/eve/src/execution/coordination-dispatch-step.ts#L62-L64, https://github.com/vercel/eve/blob/eve%400.78.0/docs/tools/human-in-the-loop.md?plain=1#L235, https://github.com/vercel/eve/pull/4364
- **Half:** defect | **Confidence:** high for 0.70.0 through 0.77.0; medium for the pre-0.70.0 range (inferred from docs, not tested)

**What changed.** When someone other than the requester approved a tool call, eve ran it with the approver's identity, connections and credentials. #4515 calls this "a privilege escalation": "a requester without release access can obtain that access when an authorized responder approves." From 0.70.0 through 0.71.2 it was worse: per #4363/#4364, once Bob approved a call in Alice's turn, the rest of Alice's turn ran as Bob, so Alice could steer later tool calls onto Bob's credentials and later approvals were "requested" by Bob. 0.71.3 confined the lending to the approved call and documented that as the rule. 0.72.0 made requester-only the default for approvals without an `approval.response` policy, which left lending live for every tool whose policy admits other approvers (designated approvers, four-eyes) and for calls requested by anonymous callers, which anyone may approve. 0.78.0 runs every approved call as the requester and rechecks approved workflow and agent calls before dispatch; the PR's new tests fail on the pre-fix base "because a task is dispatched despite policy denial". The consent record keeps who approved (`approval.settled.responderPrincipalId`). Before 0.70.0 an approval click started a fresh turn (#4135); whose identity that turn ran under was not verified in code, though the 0.63.0 auth guide describes follow-ups replacing `auth.current` with the new caller, which points to the clicker.

**Operator consequence.** Install current stable 0.79.0 (this particular fix first shipped in 0.78.0) on any channel where more than one person can answer approvals and tools use user-scoped connections. Re-audit 0.70.0 to 0.77.0 history: list `approval.settled` events whose `responderPrincipalId` differs from the requesting principal and check what each call (and, on 0.70.0 to 0.71.2, every later call in that turn) did with the approver's credentials. If a flow depended on an approver lending access (an IT approver granting someone else access), it stops working at 0.78.0; the explicit replacement, `ctx.approval.getToken` in #4604, is an open draft in no channel. The queued-text defect in section 14 remains in 0.79.0; this is not a blanket approval guarantee. Attention moves from "who clicked" to "what the tool checks": approval is now consent only, so the access check must live in the tool or its policy.

## 2. Approval-gated workflow tools could start before approval until 0.69.0, and approvals outlived cancelled turns until 0.70.0

- **Date:** 2026-10-01 (eve@0.69.0), 2026-10-02 (eve@0.70.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** bb70743186612 (#3983, merged 2026-09-29T18:15:13Z) first in eve@0.69.0, not 0.68.0. 1a5bc56e8539 (#3954) and 5181b14f055d (#3928) first in eve@0.69.0, not 0.68.0. ddc8e12ff9ef (#4135) first in eve@0.70.0, not 0.69.0. Docs at eve@0.63.0 `docs/tools/workflows.mdx` L301-L302 described the `approval` policy as one "which gates the call before `execute` runs"; at eve@0.78.0 `docs/tools/human-in-the-loop.md` L16 adds "a call waiting for approval does not start its workflow, and a call denied by a policy or person never runs."
- **Receipt:** https://github.com/vercel/eve/commit/bb70743186612e13bd0b05c58d37e5b024d17a76, https://github.com/vercel/eve/commit/1a5bc56e8539e0c7d555402a932a07cbd88ac4d6, https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/harness/tool-loop.ts#L2967-L2971, https://github.com/vercel/eve/pull/3983, https://github.com/vercel/eve/pull/3954, https://github.com/vercel/eve/releases/tag/eve%400.69.0, https://github.com/vercel/eve/blob/eve%400.63.0/docs/tools/workflows.mdx?plain=1#L301-L302, https://github.com/vercel/eve/pull/4135
- **Half:** defect | **Confidence:** high on what was fixed and when; medium on the affected range (the first affected version was not established)

**What changed.** #3983: "Workflow tools could start while awaiting approval, and automatic policy denials did not prevent deferred dispatch." The 0.63.0 docs promised the opposite. #3954: "anyone could cancel a policy-guarded approval, so a requester-only policy ... still let someone else dismiss the request"; it also closed a path where "an approval parked alongside deferred workflow calls settled without its policy" and one where ACP's Deny was dropped instead of treated as Cancel. #4135: sign-in and approval prompts "outlived the turn that raised them" and "a later click started a fresh turn"; from 0.70.0, cancelling a turn withdraws its approval and "a later answer to it approves nothing."

**Operator consequence.** Audit approval-gated blocking/deferred workflow dispatch on 0.63.0 through 0.68.0; the first affected release and exposure of every legacy background path are not established. Compare start times with approval settlement and look for calls that ran despite denial. The baseline deferred-path predicate explicitly excludes `execution: "background"`, so this evidence cannot label every background path ungated or safe. The dispatch repair first shipped in 0.69.0 and prompt withdrawal in 0.70.0; install current stable 0.79.0, and include the later lifecycle and queued-text cases in authority tests. Write a test that a denied call never starts.

## 3. A hook that throws no longer stops the turn: from 0.68.0 hooks fail open and must call ctx.cancel()

- **Date:** 2026-09-28 (eve@0.68.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 2cfcecc3965 (#3718, merged 2026-09-28T19:41:33Z) first in eve@0.68.0, not 0.67.2. `docs/guides/hooks.md` at eve@0.63.0 L177-L179: "A thrown handler propagates through the emit composer and surfaces as `turn.failed` ... eve treats a thrown hook as a real failure." At eve@0.78.0 L189-L191: "Throwing from a hook does not reject work or veto a turn. To stop the running turn, call `ctx.cancel()`."
- **Receipt:** https://github.com/vercel/eve/commit/2cfcecc3965185c5df31130366de4cb292d85859, https://github.com/vercel/eve/pull/3718, https://github.com/vercel/eve/releases/tag/eve%400.68.0, https://github.com/vercel/eve/blob/eve%400.63.0/docs/guides/hooks.md?plain=1#L177-L179, https://github.com/vercel/eve/blob/eve%400.78.0/docs/guides/hooks.md?plain=1#L189-L191
- **Half:** both | **Confidence:** high

**What changed.** Before 0.68.0, a `turn.started` or `step.started` hook that threw ended the turn with `EVENT_HANDLER_FAILED`, and the PR notes that #3091 "used that throw as the only way to reject a turn." From 0.68.0, eve logs the failure, runs the remaining subscribers and lets the turn continue; the changeset is a minor "because throwing no longer vetoes a turn." Hooks gain `ctx.cancel()`, which settles like `session.cancel()` before the next model call. Side effects a hook made before throwing are not rolled back.

**Operator consequence.** Before upgrading past 0.67.2, grep `agent/hooks/` for handlers that throw to block work (credential loads, tenancy or entitlement checks). On 0.68.0 and later they log an error and let the model run without the guard. Replace each throw-to-veto with `ctx.cancel()` and add a test that the turn ends with `turn.cancelled`. The capability half: an audit or metrics hook with a dead sink no longer takes the agent down. The cost: a guard that throws is now a guard that silently stops guarding.

## 4. A pending approval holds the turn; authenticated requesters answer by default, with an anonymous exception

- **Date:** 2026-10-01 (eve@0.69.0) to 2026-10-07 (eve@0.73.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** ddc8e12ff9ef (#4135) first in eve@0.70.0, not 0.69.0. 9d42f05ceb6f (#4368) first in eve@0.72.0, not 0.71.3. c8d38a8f1d1 (#3850) first in eve@0.69.0, not 0.68.0, and introduces per-principal steering: `packages/eve/src/execution/session/input-queue.ts` lacks "Only the turn's own principal steers it" at every tag 0.64.0 to 0.68.0 and has it at 0.69.0 (L224-L232) and 0.78.0 (L229-L244, `principalOf(delivery.auth) === turn.principal`). 7c60065ebd1 (#4430, Discord presses) first in eve@0.73.0. Docs: `docs/tools/human-in-the-loop.md` at eve@0.63.0 L179 ("Follow-up turns run normally and may call other tools while the approval remains unresolved") versus eve@0.78.0 L237 and L87.
- **Receipt:** https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/harness/hitl/coordinator.ts#L158-L176, https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244, https://github.com/vercel/eve/pull/4135, https://github.com/vercel/eve/blob/eve%400.63.0/docs/tools/human-in-the-loop.md?plain=1#L179, https://github.com/vercel/eve/blob/eve%400.78.0/docs/tools/human-in-the-loop.md?plain=1#L235-L237, https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/execution/session/input-queue.ts#L229-L244, https://github.com/vercel/eve/pull/4368
- **Half:** both | **Confidence:** high

**What changed.** The 0.45.0 behavior the profile warned about is gone. From 0.70.0 a tool approval or connection sign-in holds the same turn open (`turn.waiting` with `on: "input"`), with no prompt-wait timeout; surrounding sessions and resources may still have lifetime limits. A message from the requester that does not match an option steers the turn and cancels the pending approval (`input.resolved` outcome `ignored`; the call does not run), even when sent with `turnPolicy: "queue"`; messages from anyone else wait until the turn ends. From 0.69.0 only the turn's own principal can steer a running turn at all, so other people's messages queue even under the default `steer` policy. From 0.72.0, without an `approval.response` policy, only an authenticated requester can answer their own request; anonymous or unidentified requesters allow any responder. A custom response policy replaces that default (0.79.0 coordinator L158-L176). 0.70.0 also resumes a completed sign-in as the user who started it; before, in a shared thread, it ran as the last speaker. Discord button presses answered anonymously until 0.73.0, so response policies did not work there, and apps with a custom `onCommand` must now set `onInputResponse` or presses are dropped.

**Operator consequence.** The old follow-up-turn workaround is superseded by held turns from 0.70.0. However, a held turn alone does not establish consent to its particular prompt: 0.79.0 can consume approval-shaped text queued before the prompt existed (section 14), and the fix was only on main at window close. Include that timing case before removing application-level protections. An unrelated requester message cancels their pending approval; other speakers wait while the turn is held. Choose an explicit response policy for designated approvers and an operational cancellation path for abandoned requests.

## 5. Local self-modification is mounted by default in eve dev, serves any admitted caller, and installs registry items without approval

- **Date:** 2026-09-22 (eve@0.64.0) to 2026-10-07 (eve@0.73.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** aceb298cc31a (#3590) first in eve@0.64.0, not 0.63.0. 155d24ad82a3 (#3658, default mounts) first in eve@0.65.0, not 0.64.1. 7e4ceb80221f (#4056) first in eve@0.69.0, not 0.68.0. 9de88f7012db (#4251, local/remote split) first in eve@0.73.0, not 0.72.1. Code at eve@0.78.0: `packages/eve/src/runtime/local-dev-capability.ts` L30-L37 ("the capability is available to every execution on that host; callers admitted to the development server are trusted with enabled local editing tools") and L107-L111 ("Request provenance affects only the optional dev-TUI hint, never access to the authored tree"); `packages/eve/src/self-modification/subagent-guidance.ts` L38 (agent source "mounted read-write at /source") and L50 (new capabilities are written as authored tools under /source/tools). `registry_add` carried `approval: once()` at eve@0.63.0 (`self-modification/extension/subagents/agent/tools/registry_add.ts` L365, L382); no local self-modification tool carries an approval at 0.78.0. `localDev()` authenticates every request while `eve dev` runs, "a property of the deployment, not the request" (`docs/guides/auth-and-route-protection.md` L104-L108). Bind address: `start-development-server.ts` L457-L458 uses `options.host ?? devServer.hostname ?? DEFAULT_DEVELOPMENT_SERVER_HOST`, which `dev-server-url.ts` L1 sets to "127.0.0.1"; the CLI reference table says the `eve dev --host` default is "all interfaces" (`docs/reference/cli.md` L266, same text at 0.63.0 L220).
- **Receipt:** https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/self-modification.md?plain=1#L79-L87, https://github.com/vercel/eve/commit/aceb298cc31a296636223beaebbe9a1e235d9738, https://github.com/vercel/eve/commit/7e4ceb80221fcec27674d6315d61023b26566a90, https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/runtime/local-dev-capability.ts#L30-L37, https://github.com/vercel/eve/blob/eve%400.78.0/docs/guides/self-modification.md?plain=1#L6-L8, https://github.com/vercel/eve/pull/3590, https://github.com/vercel/eve/pull/4056, https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/internal/nitro/host/start-development-server.ts#L457-L458
- **Half:** both | **Confidence:** high on each fact; medium on the end-to-end consequence (inferred from the cited code and docs, not run)

**What changed.** The relaxed guard flagged after the last window stayed and widened. 0.64.0 made local self-modification depend on `eve dev` host facilities instead of request provenance. The PR says operators "must protect access to the server", that "direct remote and forwarded callers alike can exercise self-modification when admitted to the agent", and that `localDev()` "is a permissive development-server fallback, not individual caller authentication". 0.65.0 mounts the self-modification subagent in every `eve dev` server unless you pass `--no-default-extensions` (self-modification.md L6, L81-L87). 0.69.0 removed the `registry_add` approval in both local and deployed modes as "a deliberate behavior change". 0.73.0 split the extension: `eve/self-modification` (now an alias of `/local`) rejects the `deployed` option, and deployed proposals come from `eve/self-modification/remote`, which still requires an `authorize` function (`remote/config.ts` L83-L95) and opens draft pull requests only (`github-publisher.ts` L137-L138, L306). Eve's fallback is 127.0.0.1; explicit host or Nitro hostname takes precedence. Actual network binding was not tested, and the CLI table still says all interfaces.

**Operator consequence.** Treat access to an admitted development host as authority to edit authored tools, based on source rather than an executed remote-code-execution demonstration. Protect server access and use `eve dev --no-default-extensions` where others can reach it. That flag disables bundled defaults, not explicit mounts: also inspect and disable unwanted local self-modification under `agent/extensions/`. Verify explicit host and Nitro hostname configuration rather than assuming the loopback fallback wins. Staying on 0.63.0 leaves approval fixes absent. Migrate deployed self-modification to `eve/self-modification/remote`; its authorize callback and draft-PR review remain deliberate boundaries.

## 6. An agent's tools and skills can be served over MCP to other harnesses, with no model in the loop

- **Date:** 2026-10-06 (eve@0.71.3) to 2026-10-07 (eve@0.73.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 55d4604d140 (#4080, `invokeTool`) first in eve@0.71.3, not 0.71.2. a2c2687a455 (#4124, `tools: true`) first in eve@0.72.0, not 0.71.3. 933996ce63d (#4235, tool sessions), 866cb415a5b (#4236, forwarded user) and 279e2b6a811 (#4234, SEP-2640 skills) first in eve@0.73.0, not 0.72.1. a490d885391 (`trustedForwarders` sees the asserted principal) first in eve@0.66.1. Docs at eve@0.78.0 `docs/channels/mcp.mdx` L216-L242 (publishing and error codes), L252-L277 (forwarded principals), L304-L306 (tool sessions), L325-L334 (skills).
- **Receipt:** https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx?plain=1#L216-L346, https://github.com/vercel/eve/commit/a2c2687a45513eeda8c5f4d236aca7de08b338ca, https://github.com/vercel/eve/blob/eve%400.78.0/docs/channels/mcp.mdx?plain=1#L216-L242, https://github.com/vercel/eve/pull/4124, https://github.com/vercel/eve/pull/4234, https://github.com/vercel/eve/releases/tag/eve%400.73.0
- **Half:** capability | **Confidence:** high

**What changed.** `mcpChannel({ tools: true })` publishes every tool the agent can run outside a conversation, with input and output JSON schemas, and runs each `tools/call` "as the route-authenticated caller ... with no model, turn, or workflow run" (L230). Approval policies still apply: a call whose policy needs a person returns `approval_required` and does not run (L242). `skills: true` serves the agent's skills as SEP-2640 resources under `skill://` with sizes and SHA-256 digests, byte for byte except that a `SKILL.md` without conforming frontmatter gets generated frontmatter. Framework, workflow, provider, dynamic-resolver and subagent tools are excluded from publication. Tool sessions let several calls share one sandbox per caller and key on Vercel Sandbox or just-bash, not Docker or microsandbox, and a keyed call from an anonymous caller is denied (L306). A router can forward an end user's identity only to a channel with `trustedForwarders`; otherwise the header earns a 403 (L275-L277). Channel routes also get `invokeTool(name, input, { auth })`. Both flags default off. MCP calls may run in parallel, and retrying after a lost response runs the tool again; retained sandbox state is not durable authored state or ordered exactly-once execution.

**Operator consequence.** The filesystem-first agent is now consumable at runtime by other agents (another eve, or any MCP client such as Codex or Claude Code) as a typed tool and skill server. Try it where you would otherwise hand another harness raw shell or API access. Before you set `tools: true`, re-audit every published tool as if it were a public API: the docs say every admitted caller can call them "outside the agent's instructions" (L230), so authorization belongs in the tool or its approval policy, never in the system prompt. Scope `trustedForwarders` to exact forwarders; `() => true` trusts every caller that passes route auth, preview deployments included (auth guide L242).

## 7. eve deleted scaffolding: the todo tool, default ask_question, background tasks, and per-connection tool listings

- **Date:** 2026-09-23 (eve@0.65.0) to 2026-10-09 (eve@0.76.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 60998d606bf (#3648) first in eve@0.65.0, not 0.64.1. efa0869033c (#3840) and c8d38a8f1d1 (#3850) first in eve@0.69.0, not 0.68.0. 8c55ea7c132 (#4400) first in eve@0.76.0, not 0.75.1. 8582a3661ca (#4300, bash jobs) first in eve@0.71.0, not 0.70.3. `taskDeliveryPolicy` was added by 3be0b749e2c (eve@0.64.0, 2026-09-22) and removed by efa0869 (eve@0.69.0, 2026-10-01).
- **Receipt:** https://github.com/vercel/eve/commit/60998d606bfceb4ab367de869d73769065eadd04, https://github.com/vercel/eve/commit/8c55ea7c132f9a23829214bda48069d710da77fa, https://github.com/vercel/eve/commit/db71190b2c3abce9f375b06fc890d90b035d1fe7, https://github.com/vercel/eve/pull/3648, https://github.com/vercel/eve/pull/4400, https://github.com/vercel/eve/releases/tag/eve%400.69.0, https://github.com/vercel/eve/releases/tag/eve%400.76.0
- **Half:** capability | **Confidence:** high

**What changed.** 0.65.0 removed the default `todo` tool and made `ask_question` an opt-in workflow tool; the PR says "Codex and opencode v2 have both removed or opted out of equivalent default tools." 0.69.0 removed background tasks, and with them the `taskDeliveryPolicy` setting that had shipped nine days earlier, in favor of `task()` and `serve()` tools that return a receipt and a resumable task id. 0.76.0 put deferred tools, subagents, connection tools and skills behind three fixed catalog tools (`eve__search`, `eve__tool`, `eve__skill`) and deleted `load_skill`, `connection_search` and `connection_execute` with no compatibility layer; the PR reports about 85% fewer tool tokens per request on a 70-tool catalog as a vendor example, not an independent measurement. From 0.78.0, catalog tools appear only when the session first reaches an eligible entry, then stay present, so the set can grow at that point. 0.71.0 lets a slow `bash` command keep running as a sandbox job after 30 seconds instead of blocking the turn.

**Operator consequence.** Remove a hand-built planning shim only after checking whether it adds needed oversight; the removal itself does not measure a general-model improvement. Add `ask_question` back with `eve add tool/ask_question` only if you want it. Agents with large connection catalogs can stop hand-pruning tool lists and mark entries `deferred: true`. Update anything that matches tool names: approval policies, hooks and evals that name `load_skill`, `connection_execute`, `task_wait`, `task_cancel` or `final_output` (now `eve__*`), and expect saved "always approve" decisions for connection tools to reset at 0.76.0. Code reading `BashToolOutput.exitCode` must check `status` first. Lens: the harness is shedding planning scaffolding as models improve, the same move Codex made when rust-v0.152.0 turned `update_plan` off by default (recorded in the 2026-09-21 Codex harvest).

## 8. From 0.63.0 to 0.79.0 is a migration: run modes, tasks, stream and handoff formats all broke, and three releases block handing sessions back

- **Date:** 2026-09-22 (eve@0.64.0) to 2026-10-13 (eve@0.79.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** First containing tags confirmed with `git tag --contains` and absent from the prior tag for: 49971b7ef41 (#3271, sandbox environments, 0.64.0), da906b62480 (getSkill removed, 0.66.0), f9addc3a903 (#3817, run modes removed, 0.67.0), 04b6464f9c8 (#3814, CLI, 0.67.0), efa0869 (stream version 26 and remote protocol check, 0.69.0), b34bab8eb39 (#3970, handoffs rejected both ways, 0.69.0), 384af57 (checkpoint shape, 0.70.0), 198d6f5cefe (#4426, `evaluate` -> `decide`, 0.72.0), a3c2f405862 (#4370, new checkpoint version, 0.75.0), 8c55ea7c132 (#4400, `eve` namespace, 0.76.0), 0248e696a58 (#4635, `read_file` `image` -> `file`, 0.77.0).
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.69.0, https://github.com/vercel/eve/releases/tag/eve%400.70.0, https://github.com/vercel/eve/releases/tag/eve%400.75.0, https://github.com/vercel/eve/releases/tag/eve%400.67.0
- **Half:** both | **Confidence:** high

**What changed.** Between the profile's pin and 0.78.0, minor versions replaced object-form sandbox definitions with provider environments (0.64.0), removed the conversation/task run mode and `outputSchema` on agent definitions and replaced `eve dev <url>` with `eve remote connect` (0.67.0), replaced background tasks, removed the `subagent.*` events and hooks, moved Slack `events` to `renderers`, and bumped the message stream to version 26, "which older eve clients reject" (0.69.0), made remote agents check a protocol version (0.69.0, which still serves callers on 0.66 to 0.68), renamed decision and instrumentation APIs (0.72.0), and reserved the `eve` namespace (0.76.0). Three releases changed the session handoff checkpoint: 0.69.0 rejects handoffs across its boundary "in both directions", 0.70.0 changed the checkpoint shape (0.70.1 then let newer deployments import checkpoints written by 0.66.0 and later), and 0.75.0 gives every session a new checkpoint version, "so sessions cannot hand off to deployments running an older version." 0.76.2 added `ctx.session.predecessor` so a session that replaces a stranded one can read the earlier transcript.

**Operator consequence.** Plan 0.63.0 to 0.79.0 as a migration, not a version bump: read the 0.65.0, 0.67.0, 0.69.0, 0.72.0 and 0.76.0 notes, rebuild extensions, upgrade clients with the server, and upgrade remote agents and their callers together. Do not roll back across the 0.69.0, 0.70.0 or 0.75.0 checkpoint boundaries while sessions are live, because they cannot hand off to the older deployment; keep the old deployment up until its sessions end. Also migrate 0.75.0 sandbox lifecycle hooks, experimental schedule providers and payload ownership, and 0.79.0 reporters whose assertion fields became optional. The 0.72.0 evaluation-to-decision rename is an API break, not new custom-model support; model instances were already accepted at 0.63.0. The answer to the contract's stability question is unchanged: sessions, tasks, approvals and sandbox APIs all broke on minors again, so treat eve's API as watch-only.

## 9. Defaults that flipped: an unconfigured agent now runs GPT-6 Luna Fast at high reasoning, and Eve attempts 100% trace sampling on newly created Vercel projects

- **Date:** 2026-09-22 (eve@0.64.0), 2026-09-24 (eve@0.66.2), 2026-10-01 (eve@0.69.0), 2026-10-08 (eve@0.75.1)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 47c2844b7fa (#4010) first in eve@0.69.0, not 0.68.0. `packages/eve/src/shared/default-agent-model.ts` at eve@0.63.0 L5: `DEFAULT_AGENT_MODEL_ID = "openai/gpt-5.6-luna-fast"` (no default reasoning constant); at eve@0.78.0 L7-L8: `"openai/gpt-6-luna-fast"` and `DEFAULT_AGENT_REASONING = "high"`. 306f2ce2fdc (#3734, `eve deploy`) first in eve@0.66.2, not 0.66.1; 30c88ee0095 (#4540, `eve link` and shared project creation) first in eve@0.75.1, not 0.75.0. The audience-to-content table in `docs/guides/instrumentation/instrumentation.mdx` is identical at eve@0.63.0 (L89-L93) and eve@0.78.0 (L94-L98).
- **Receipt:** https://github.com/vercel/eve/commit/3d96b698e14391437b3886e27cd3a1380837396f, https://github.com/vercel/eve/commit/47c2844b7fa17a10440d174ffcb2497dbabd03a9, https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/setup/vercel-trace-sampling.ts, https://github.com/vercel/eve/pull/4010, https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/shared/default-agent-model.ts#L7-L8, https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/shared/default-agent-model.ts#L5, https://github.com/vercel/eve/pull/4540, https://github.com/vercel/eve/pull/3734
- **Half:** both | **Confidence:** high

**What changed.** Unconfigured agents ran GPT-5.6 Luna Fast at 0.63.0, Grok 4.7 from 0.64.0, then GPT-6 Luna Fast with high reasoning from 0.69.0. This changes the default route and reasoning settings, not a measured performance or cost result. Eve deploy (0.66.2), and link/integration project creation from 0.75.1, attempt 100% trace sampling on newly created Vercel projects. The helper catches setup failures and warns; existing projects retain their settings. The opt-out is documented for `eve deploy --no-trace-sampling`, not every creation command. The runtime audience-to-content table stayed unchanged: development content for any audience, preview/production content only for public conversations. Datadog eval export has a separate, changed default (section 16).

**Operator consequence.** Pin model and reasoning when cost, latency or eval baselines matter, and rerun evals after changing the route. For newly created Vercel projects, inspect actual sampling settings and setup warnings instead of assuming every trace was sampled. Review runtime trace policy separately from eval reporter content options.

## 10. The Workflow SDK under eve left beta: eve now pins the 5.x stable line

- **Date:** 2026-10-02 (eve@0.70.2), 2026-10-08 (eve@0.75.1)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1f81fcd (stable 5.0.1 family) first in eve@0.70.2, not 0.70.1; a4d38b3 (stable 5.2 family) first in eve@0.75.1, not 0.75.0. `packages/eve/package.json` at eve@0.63.0 L520-L526: `@workflow/core` 5.0.0-beta.53, `@workflow/world` 5.0.0-beta.36, `@workflow/world-local` 5.0.0-beta.45, `@workflow/world-vercel` 5.0.0-beta.48; at eve@0.79.0, in devDependencies used for build/vendor inputs: 5.2.0, 5.0.3, 5.1.0, 5.2.0. 1062c92 (fresh workflow run after compaction) first in eve@0.70.2; 99b4166 (steps store only state deltas) first in eve@0.69.0. `docs/guides/deployment/self-hosting.md` at eve@0.78.0 L45 still says "The current line is `5.0.0-beta`".
- **Receipt:** https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/package.json, https://github.com/vercel/eve/commit/1f81fcd5ac1f255ce31cc2d8ead012ac38b6a4d0, https://github.com/vercel/eve/commit/a4d38b365df91b8e6ed3dc018e17ab55f9af924b, https://github.com/vercel/eve/releases/tag/eve%400.70.2, https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/package.json#L623-L628, https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/package.json#L520-L526, https://github.com/vercel/eve/blob/eve%400.78.0/docs/guides/deployment/self-hosting.md?plain=1#L45
- **Half:** capability | **Confidence:** high

**What changed.** Eve's Workflow build/vendor inputs moved from prerelease builds to stable version pins; these are devDependencies, not the consumer dependency list. Alongside it, long sessions move to a fresh workflow run on the same deployment after compaction, so the event log stops growing without bound (0.70.2), and session steps store only the state they changed rather than a full copy (0.69.0). eve itself is still beta under the Vercel beta terms (README L146-L148), and the self-hosting guide still names the beta Workflow line.

**Operator consequence.** Stable Workflow version strings are architectural evidence, not a measured recovery guarantee, and local restarts now require explicit recovery (section 17). Eve remains beta: the checkpoint format above it changed three times in this window (section 8). If you self-host with your own Workflow world, build it against the 5.x stable line eve pins, not the `5.0.0-beta` line the self-hosting guide still names.

## 11. eve ships a coding-agent extension, and its own benchmark does not separate it from Pi or opencode

- **Date:** 2026-09-23 (eve@0.66.0), 2026-09-28 (eve@0.68.0), 2026-10-09 (eve@0.76.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** d50a774 (`eve/extensions/code`) first in eve@0.66.0, not 0.65.0; 52a18ac (computer use moved to `eve/computer-use`) first in eve@0.68.0, not 0.67.2; 2cc43ca (`eve/extensions/git`, `code({ github })` deprecated) first in eve@0.76.0, not 0.75.1. Benchmark data at eve@0.78.0 `apps/docs/lib/evals/eve-code-benchmark.json` (generatedAt 2026-10-03T03:29:12Z): DeepSWE-lean, 12 tasks x 3 attempts, model `anthropic/claude-sonnet-5.5`; eve-code 24/36 resolved (0.67, 95% interval 0.53 to 0.81); opencode 1.18.30 18/36 (0.50, 0.28 to 0.72); pi 0.85.1 26/36 (0.72, 0.50 to 0.92). `docs/code-extension.mdx` L12-L27 states the method and "When the lines of two harnesses overlap, the benchmark does not show a difference between them."
- **Receipt:** https://github.com/vercel/eve/blob/eve%400.79.0/apps/docs/lib/evals/eve-code-benchmark.json, https://github.com/vercel/eve/blob/eve%400.79.0/docs/code-extension.mdx, https://github.com/vercel/eve/blob/eve%400.78.0/apps/docs/lib/evals/eve-code-benchmark.json, https://github.com/vercel/eve/blob/eve%400.78.0/docs/code-extension.mdx?plain=1#L6-L27, https://github.com/vercel/eve/releases/tag/eve%400.66.0
- **Half:** capability | **Confidence:** high on what the vendor published; the benchmark is the vendor's own small-sample run

**What changed.** Mounting `eve/extensions/code` turns an eve agent into a coding agent: `apply_patch`, `grep`, coding skills, a read-only worker subagent and sandbox bootstrap helpers, with GitHub and pull-request work in the companion `eve/extensions/git` and computer use in its own `eve/computer-use` extension. The docs publish a benchmark against opencode and Pi with the method stated. It measures Eve source 4d1491477a2e4f220131a3eb857a030c9eec0419, not eventual release 0.79.0, and was not reproduced here. On the vendor's numbers, Pi resolved the most attempts, and all three 95% intervals overlap, which by the vendor's stated rule does not establish a difference; that does not demonstrate equivalence.

**Operator consequence.** If you already run agents on eve, try the code extension for repository work inside the same durable, approval-gated runtime. Do not switch from Pi or opencode on these numbers: 36 attempts per harness on one model cannot separate them, and the vendor says so. Lens: a framework vendor now ships and benchmarks its own coding harness, so the framework-versus-coding-agent line on the watchlist is blurring.

## 12. Channel facts: 32 stables in 22 days, every npm version tagged, previews only as GitHub prerelease tarballs, and no Eve-specific advisory found in checked GitHub records

- **Date:** 2026-09-22 to 2026-10-13
- **Channel:** `tagged-release` (32 stable tags); `preview-or-beta` (4 GitHub prerelease objects)
- **Ancestry evidence:** `npm view eve time`: 32 versions 0.64.0 through 0.79.0, each matching a prerelease=false GitHub release and tag; no npm-only and no tag-only versions in the window. Prerelease objects: `eve@0.71.3-tool-stubs.4370.4127e565` (2026-10-05T22:43:20Z, titled "Superseded"), `eve-preview-pr-4370-4127e565` (2026-10-05T22:48:23Z), `eve-preview-pr-4370-a94c7c789` (2026-10-06T18:17:52Z), `eve-preview-pr-4524-724846842` (2026-10-08T18:56:19Z); each tag commit is in no stable tag; the feature merged as a3c2f405862 (#4370) and 1cfb21298b5 (#4528), both first in eve@0.75.0. Security fixes shipped as notes only: #4515 (0.78.0, section 1), 0cd423996906 (#3810, 0.67.0: `/eve/v1/info` limited to the priority tier "so credentials stored under unexpected keys cannot be exposed there"; `build-agent-info-response.ts` L210-L215 at 0.78.0), 64301d168ce (#4427, 0.73.0: the PR's tests show the pre-fix `eve eval --url` client "emitted credentials" to a mismatched project). No Eve-specific GitHub advisory found in the records checked on 2026-10-14. This does not cover dependency advisories or prove absence of vulnerabilities.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.79.0, https://registry.npmjs.org/eve/0.79.0, https://github.com/vercel/eve/commit/0cd423996906ae61008e5ab53f131512c9565cd8, https://github.com/vercel/eve/commit/64301d168cea6cd6ef2637f762113dd6874fdfae, https://www.npmjs.com/package/eve?activeTab=versions, https://github.com/vercel/eve/releases/tag/eve-preview-pr-4524-724846842, https://github.com/vercel/eve/releases/tag/eve%400.75.0, https://github.com/vercel/eve/blob/eve%400.78.0/docs/evals/tool-stubs.mdx?plain=1#L159-L184, https://github.com/vercel/eve/pull/4427
- **Half:** both | **Confidence:** high

**What changed.** Provenance improved on the parent window, which found three npm versions with no tag: all 32 versions published in this window have a tag and release notes. Main was eight commits ahead of stable at the UTC close. Previews now ship as GitHub prerelease tarballs installed by URL, with checksums, and never touch npm `latest`. What they previewed, tool stubs, shipped in 0.75.0: evals can replace a tool's output per session with matched JSON responses or thrown errors, but replacement "is denied by default, including in development," is granted only through verified subjects or a custom authenticator, and "Anyone your channel admits to an existing session can use its stubs." Security fixes still arrive as ordinary patch bullets without an Eve-specific GHSA found in the checked records, including one the vendor's own PR calls a privilege escalation.

**Operator consequence.** Pin current stable 0.79.0, whose registry artifact has a matching source tag. Skip stale beta and superseded preview tarballs. Monitor release notes as well as dependency advisory feeds: the latter caught Undici, while the Eve approval and credential repairs were documented as release bullets. Grant allowToolStubs only to an eval runner subject, preferably on an isolated eval deployment; anyone a channel admits to an existing session can use that session's stubs.

## 13. 0.79.0 adds annotation-aware approval policies, readable prompts, and scored eval reporting

- **Date:** 2026-10-13 (eve@0.79.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** f5e5183, 302a4d3, bc2be45 and 76f6854 are absent from eve@0.78.0 and present in eve@0.79.0. Release published 18:41:08Z.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.79.0, https://github.com/vercel/eve/commit/f5e5183ae40287c9c922b6b4591fb36b53950412, https://github.com/vercel/eve/commit/302a4d341059d93cd6de8f5f1744eff4bf21ff6e, https://github.com/vercel/eve/commit/bc2be45f02269a3e3d91f02ded40699719006e01, https://github.com/vercel/eve/blob/eve%400.79.0/docs/connections/mcp.mdx
- **Half:** both | **Confidence:** high

**What changed.** Connection approval policies receive toolAnnotations from the MCP server, or undefined when none were declared. Tools can supply an input-aware approval.prompt; Slack retains full input below the summary. t.score records a score separately from a verdict; score, threshold and passed are optional, so custom reporters test passed === false. The six release bullets also consolidate tracing and per-turn durable checkpoints, preserve schema 4, and share tool/approval action fields with non-Eve hosts.

**Operator consequence.** Use summaries to make consequential calls reviewable, but treat readOnlyHint as a server assertion rather than enforced safety. Review missing annotations explicitly. Migrate custom reporters to the optional-field contract and inspect trace integrations against schema 4.

## 14. Queued approval text can settle a prompt that did not exist when it was sent; the fix is only on main

- **Date:** 2026-10-13 (merge 22:38:36Z)
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 0dea0ded869be7db30ae90ed8072d29e6e57df61 is absent from eve@0.79.0 and present at end-of-window main 80f15de21abb8a575d5bfdee333e72a9e7d1742c. Commit time is 22:38:35Z; PR merge time is one second later.
- **Receipt:** https://github.com/vercel/eve/commit/0dea0ded869be7db30ae90ed8072d29e6e57df61, https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244, https://github.com/vercel/eve/pull/4749
- **Half:** defect | **Confidence:** high on source and regression-test mechanism; not reproduced

**What changed.** At 0.79.0 the held-on-person queue override has no admission-time cutoff. A requester can send approve with turnPolicy queue before a later prompt exists; the held turn can then consume it as an answer. The patch records when the hold began and excludes earlier queued messages. The regression test constructs this sequence and expects no approval settlement or tool execution until a later answer. The test was read, not run.

**Operator consequence.** Do not call 0.78.0 or 0.79.0 a complete consent repair. Include pre-prompt typed replies in application authority tests and watch for a tag containing this exact commit. Preserve a deliberate gate for consequential effects until the relevant timing path is checked. This is a consent-timing defect, not renewed approver-credential lending; the patch does not establish closure of every steer timing case.

## 15. Undici 8.10.2 replaces a dependency version matching ten advisories

- **Date:** 2026-10-01 (eve@0.69.0); advisories published 2026-09-28 and 2026-09-29 by API timestamps
- **Channel:** `tagged-release`
- **Ancestry evidence:** 21e11d0ced7d17f166f943790e2fc4f025a205b6 is absent from 0.68.0 and present in 0.69.0 and 0.79.0; manifests show direct dependency 8.9.0 then 8.10.2.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.69.0, https://github.com/vercel/eve/commit/21e11d0ced7d17f166f943790e2fc4f025a205b6, https://github.com/vercel/eve/blob/eve%400.68.0/packages/eve/package.json, https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/package.json, https://github.com/advisories/GHSA-pmjh-fq2x-6v4x, https://github.com/advisories/GHSA-r53p-7pc4-xj5r, https://github.com/advisories/GHSA-rfgv-xxqx-mfg5, https://github.com/advisories/GHSA-3xpg-4rpp-hhhm, https://github.com/advisories/GHSA-2jfj-6hjv-fm6j, https://github.com/advisories/GHSA-2gqq-gqf2-x968, https://github.com/advisories/GHSA-w293-vg96-wgc3, https://github.com/advisories/GHSA-8436-99hf-9mmv, https://github.com/advisories/GHSA-rx4f-c7p8-82vq, https://github.com/advisories/GHSA-3wwx-pv8p-q78v
- **Half:** defect | **Confidence:** high for version matches and shipped update; deployment reachability unverified

**What changed.** The dependency update covers ten vulnerable ranges that include 8.9.0 and name 8.10.2 as patched. The required API scopes are retry bodies that hang (CVE-2026-18149), retry response splitting with a forwarder that preserves stale framing (18540), unrequested WebSocket subprotocol crashes (19534), decompression-interceptor memory exhaustion (84890), shared-cache cookie replay to another user (84933), dump-interceptor truncation (84947), BalancedPool dropping custom TLS/connector callbacks (84961), unsafe-method cache replay skipping origin work (85008), locked-writer WebSocketStream close crashes (85014), and malformed compressed WebSocket crashes (85024). Default certificate checks are not all disabled by the BalancedPool bug. These are dependency matches, not ten demonstrated Eve exploits.

**Operator consequence.** Keep the patched dependency or upgrade Eve, and inspect whether the affected cache, interceptor, pool or WebSocket APIs are actually used. The dependency advisory lane remains useful even though no Eve-specific advisory was found. API dates were checked instead of relying on rendered advisory HTML.

## 16. Configured Datadog eval reporters export content by default

- **Date:** 2026-10-01 (eve@0.69.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** f0a9ee199cc3ea0048d4d8c527888d888f8bade6 is absent from 0.68.0 and present in 0.69.0 and 0.79.0; old and new reporter docs were read.
- **Receipt:** https://github.com/vercel/eve/commit/f0a9ee199cc3ea0048d4d8c527888d888f8bade6, https://github.com/vercel/eve/releases/tag/eve%400.69.0, https://github.com/vercel/eve/blob/eve%400.79.0/docs/evals/reporters.mdx
- **Half:** both | **Confidence:** high

**What changed.** The Datadog reporter changes from metadata/scores by default to recording eval prompts, outputs, authored expectations, errors and assertion details. It reuses a dataset across runs for comparison. Without Datadog credentials it skips reporting; the respective record options can disable content.

**Operator consequence.** Before running sensitive fixtures, review recordInputs, recordOutputs, recordExpectedOutputs, recordErrors and recordAssertionDetails and set them false where necessary. Review this separately from runtime audience-based trace policy; its unchanged table does not establish unchanged eval export.

## 17. Local development recovery becomes explicit rather than automatic

- **Date:** 2026-09-28 (eve@0.68.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 0ac01f6bc85d2d18e463aa9c97834ca524ad9df3 is absent from 0.67.2 and present in 0.68.0 and 0.79.0.
- **Receipt:** https://github.com/vercel/eve/commit/0ac01f6bc85d2d18e463aa9c97834ca524ad9df3, https://github.com/vercel/eve/releases/tag/eve%400.68.0
- **Half:** both | **Confidence:** high on source/release contract; no recovery probe

**What changed.** Earlier local-development invocations remain dormant by default. eve dev --resume attempts retained-snapshot recovery even after framework or authored source changes, and replay may perform work before failing. Missing snapshots are cancelled; malformed generation metadata remains dormant. Requests to dormant conversations fail explicitly.

**Operator consequence.** Choose recovery deliberately after a development restart and review source changes and possible effects before using --resume. A durable architecture is not a promise of automatic local restart recovery or side-effect-free replay.

## 18. Unpinned models, agent-aware sandbox commands, and demand-added catalogs change defaults

- **Date:** 2026-09-22 (eve@0.64.0), 2026-10-13 (eve@0.78.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 3d96b698e14391437b3886e27cd3a1380837396f first appears in 0.64.0; 3445e89e736cb91211746b515d82e62deb5dbed3 and db71190b2c3abce9f375b06fc890d90b035d1fe7 first appear in 0.78.0; each is absent from the preceding stable and present in 0.79.0.
- **Receipt:** https://github.com/vercel/eve/commit/3d96b698e14391437b3886e27cd3a1380837396f, https://github.com/vercel/eve/commit/3445e89e736cb91211746b515d82e62deb5dbed3, https://github.com/vercel/eve/commit/db71190b2c3abce9f375b06fc890d90b035d1fe7, https://github.com/vercel/eve/releases/tag/eve%400.78.0
- **Half:** both | **Confidence:** high

**What changed.** The intermediate default model was Grok 4.7 before the GPT-6 switch in section 9. From 0.78.0 sandbox commands receive AI_AGENT=eve unless environment or per-call settings override it, so agent-aware CLIs can become noninteractive. Catalog tools appear when a session reaches an eligible entry and then persist; search output gains searched and remaining counts.

**Operator consequence.** Pin the model and check CLIs that infer interaction mode from AI_AGENT. Treat prompt/tool-list stability as conditional on first reaching the catalog, not an unconditional fixed-prefix guarantee. Use the search counts to inspect coverage instead of repeatedly searching blindly.

## 19. Experimental dynamic schedules activate immediately and payload edits transfer creator identity

- **Date:** 2026-10-08 (eve@0.74.0 and 0.75.0), 2026-10-09 (eve@0.76.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** bc101b508c2ac7af8239690e1ce8aa4697c6a6e8 first in 0.74.0; 84793edce6d9f99b4bfbded59a170b3c98c2fcc5 first in 0.75.0; 14f2af0f993af050b4b3bd8b0cc6476701829574 first in 0.76.0. All absent from preceding stables and present in 0.79.0.
- **Receipt:** https://github.com/vercel/eve/commit/bc101b508c2ac7af8239690e1ce8aa4697c6a6e8, https://github.com/vercel/eve/commit/84793edce6d9f99b4bfbded59a170b3c98c2fcc5, https://github.com/vercel/eve/commit/14f2af0f993af050b4b3bd8b0cc6476701829574, https://github.com/vercel/eve/releases/tag/eve%400.74.0, https://github.com/vercel/eve/releases/tag/eve%400.75.0, https://github.com/vercel/eve/releases/tag/eve%400.76.0
- **Half:** both | **Confidence:** high

**What changed.** The opt-in eve/experimental/schedules export supplies model-callable operations with per-operation approval, prepared-payload checking and creator-bound execution; production scheduling uses Vercel. From 0.75.0 creation accepts no initial disabled state: schedules are active, or completed if a one-time occurrence is past. From 0.76.0 timing and complete payload can be updated; replacing payload makes the updater the creator, and custom providers must implement update.

**Operator consequence.** Try autonomous scheduling with explicit creation authority and inspect owner changes on payload updates. Do not assume a staged-disabled creation flow; disable is an operation after creation. Treat the export as released experimental capability despite missing dedicated docs, and migrate custom providers.

## 20. Further cancellation and child-approval lifecycle defects are repaired

- **Date:** 2026-10-08 (eve@0.75.0), 2026-10-11 (eve@0.77.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 20c1317b388febc95f160c777873e30ee968a055 and 6ab30a50b446b71e18a2aa51fd2f4eae5b9f1392 first in 0.75.0; caf61ffb9b9977c7d1bc058fa227e894ec7304e7 first in 0.77.0. Absent from preceding stables; all in 0.79.0.
- **Receipt:** https://github.com/vercel/eve/commit/20c1317b388febc95f160c777873e30ee968a055, https://github.com/vercel/eve/commit/6ab30a50b446b71e18a2aa51fd2f4eae5b9f1392, https://github.com/vercel/eve/commit/caf61ffb9b9977c7d1bc058fa227e894ec7304e7, https://github.com/vercel/eve/releases/tag/eve%400.75.0, https://github.com/vercel/eve/releases/tag/eve%400.77.0
- **Half:** defect | **Confidence:** high on release/source contracts; tests not reproduced

**What changed.** 0.75.0 stops restoring an already answered approval after a cancelled response and reports interrupted approved calls instead of rerunning them. Child approvals stay visible on the parent until the child settles them, so a refused responder does not strand the prompt. 0.77.0 restores cancellation requests from clients/stores after input resumes a held turn.

**Operator consequence.** Add cancelled responses, refused child responders and cancellation after resume to regression coverage. Earlier fixes were real, but 0.70.0 was not a universal integrity floor; none of these repairs closes section 14 in stable.

## 21. Durable session endings clean up sandbox resources and provider hooks are renamed

- **Date:** 2026-10-08 (eve@0.75.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 33a95cffaf7ddd90cc9a6285fe9c0012540e58be and 32af96d238132f4ba3ac3d1b37fec378392e52f8 are absent from 0.74.0 and present in 0.75.0 and 0.79.0.
- **Receipt:** https://github.com/vercel/eve/commit/33a95cffaf7ddd90cc9a6285fe9c0012540e58be, https://github.com/vercel/eve/commit/32af96d238132f4ba3ac3d1b37fec378392e52f8, https://github.com/vercel/eve/releases/tag/eve%400.75.0
- **Half:** both | **Confidence:** high

**What changed.** Provider cleanup runs when a durable session completes, expires or fails; onSessionEnd can release resources from persisted state. Custom handle hooks onSessionStop and onSessionDelete become onSandboxStop and onSandboxDelete.

**Operator consequence.** Migrate custom provider handles and verify cleanup at each session ending. The 0.64.0 sandbox-definition rewrite is not the last breaking sandbox change in this migration; resource lifetime remains an operating cost.

## 22. Buzz ACP adapter source disappears while its last npm artifact remains available

- **Date:** 2026-10-09 (eve@0.76.0 source removal); adapter published 2026-10-08T19:52:08.894Z
- **Channel:** `tagged-release`
- **Ancestry evidence:** 44c8a9bca65d538bc165637246859df7f73f4819 is absent from 0.75.1 and present in 0.76.0 and 0.79.0. Diff-tree and commit removal were read; registry metadata was independently read.
- **Receipt:** https://github.com/vercel/eve/commit/44c8a9bca65d538bc165637246859df7f73f4819, https://registry.npmjs.org/@eve%2fbuzz-acp-adapter/0.0.46
- **Half:** both | **Confidence:** high

**What changed.** The repository deletes packages/eve-buzz-acp-adapter and current catalog references. The separate @eve/buzz-acp-adapter package remains at 0.0.46 with no deprecation field in the metadata checked on 2026-10-14. Source removal is not npm unpublication.

**Operator consequence.** Do not choose a current ACP integration solely because the package still resolves. Check the source and maintenance path or evaluate the documented MCP publishing route for compatible clients; this is a protocol decision, not proof of universal interoperability.

## 23. Attachment integrity checks and richer intake make file workflows more reliable

- **Date:** 2026-10-03 (eve@0.70.3), 2026-10-11 (eve@0.77.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** f234b513067f8dc315d4cfc5703174dd7e243fd0 first in 0.70.3; b6b353f1bd0512d0adde137b31406656a123e981 and 0248e696a5858755ba79fc86c89c3c9f2f9e277e first in 0.77.0. Absent from preceding stables; all in 0.79.0. Attachment-staging patch was read through the commit API.
- **Receipt:** https://github.com/vercel/eve/commit/f234b513067f8dc315d4cfc5703174dd7e243fd0, https://github.com/vercel/eve/commit/b6b353f1bd0512d0adde137b31406656a123e981, https://github.com/vercel/eve/commit/0248e696a5858755ba79fc86c89c3c9f2f9e277e, https://github.com/vercel/eve/releases/tag/eve%400.70.3, https://github.com/vercel/eve/releases/tag/eve%400.77.0
- **Half:** both | **Confidence:** high

**What changed.** Staged attachment bytes are checked against their content address before model use; overwritten bytes degrade to FileNotFound rather than masquerading as the upload. 0.77.0 applies upload policies to final bytes and verified media types across intake paths. Supported public HTTPS links become staged files with public-address checks, a 25 MB cap, 30-second timeout and at most ten links per message, sequentially. read_file can reopen PDFs after compaction up to 20 MiB; output image becomes file, with PDF pages. Unsupported/private/failed links become notes rather than persistent model-call failures.

**Operator consequence.** Test document workflows and custom fetchFile/uploadPolicy integrations, including overwritten bytes and disallowed media. Update read_file output consumers and preserve the published download and file-size limits. This is bounded intake, not arbitrary URL fetching or a measured end-to-end recovery result.

## 24. Gateway-native search and silent-stream retry extend unattended work

- **Date:** 2026-10-09 (eve@0.76.0), 2026-10-11 (eve@0.77.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** f8ea556b508c967ecf109287b3cdd60daf2172f6 first in 0.76.0; b56b4ff2a8617b8d9e037d008ada4d1db68eb20b first in 0.77.0; absent from preceding stables and present in 0.79.0.
- **Receipt:** https://github.com/vercel/eve/commit/f8ea556b508c967ecf109287b3cdd60daf2172f6, https://github.com/vercel/eve/commit/b56b4ff2a8617b8d9e037d008ada4d1db68eb20b, https://github.com/vercel/eve/releases/tag/eve%400.76.0, https://github.com/vercel/eve/releases/tag/eve%400.77.0
- **Half:** both | **Confidence:** high

**What changed.** webSearch with provider native uses OpenAI, Anthropic or Gemini 3+ hosted search through AI Gateway. Unsupported Gateway models need an explicit fallback, and pre-3 Gemini loses Google Search because it interfered with other tools. After ten minutes without model-stream output, Eve abandons and retries the call; tool-work time is excluded, and exhausted retries still fail the turn. ai >=7.0.137 is required.

**Operator consequence.** Check the selected model route and configure a fallback rather than assuming every agent has search. Pin the AI SDK peer version and test silent-stream recovery without counting long-running tool work as a stall. This removes one manual recovery task; it does not establish uninterrupted completion.

## 25. Same-host MCP and OpenAPI connection result identities are repaired only on main

- **Date:** 2026-10-13 (merge 22:06:24Z)
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 57d4272b7a39c6a179c7b88aff3111bafaf99b2c is absent from 0.79.0 and present in end-of-window main 80f15de21abb8a575d5bfdee333e72a9e7d1742c; commit time 22:06:23Z. Commit API source patch was read.
- **Receipt:** https://github.com/vercel/eve/commit/57d4272b7a39c6a179c7b88aff3111bafaf99b2c, https://github.com/vercel/eve/pull/4745
- **Half:** defect | **Confidence:** high on source mechanism; no runtime reproduction

**What changed.** Fallback toolResultFrom identity now includes both URL and description, keeping same-host connections such as Jira and Confluence distinct across separately loaded definition copies. The helper also accepts OpenAPI connections, including those without baseUrl. Identical URL and description remain ambiguous.

**Operator consequence.** For integrations sharing a host, check hook/result matching and watch for a tag containing this exact commit. 0.79.0 lacks the fix. This is routing correctness, not a demonstrated cross-user credential disclosure.

## Prior claims re-checked

The newest stable checked is 0.79.0. Historical defects remain history; current implementations do not undo historical exposure.

- `queue-auth`: holds for principal separation; authenticated principals batch separately and anonymous deliveries do not batch. Within one principal the latest claims win, not full-auth-context equality. Receipt: https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L179-L200.
- `byok-key`: holds for the current priority-tier allowlist, hardened in 0.67.0. Past key-rotation advice stands; no actual rotation was established. Receipt: https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/internal/nitro/routes/agent-info/build-agent-info-response.ts#L210-L215.
- `auto-approval`: holds as existing opt-in behavior; custom model instances predate the window. 0.72.0 renames evaluation APIs to decisions. Current limits remain 64 KiB, 30 seconds, zero retries, default TypeSafe Jev; ordinary error falls back to a person, while an already-aborted turn rethrows. The cited docs give no false-negative audit guarantee; no exhaustive telemetry absence is asserted. Receipts: https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/tools/approval/policies.ts#L14-L16, https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/tools/approval/policies.ts#L14-L93, https://github.com/vercel/eve/commit/198d6f5cefed3496fcc78fff0482893fa70bfd8b, https://github.com/vercel/eve/blob/eve%400.79.0/research/automatic-tool-approval.md.
- `approval-integrity-once-keys`: holds for the documented independent-prompt and bare-tool-name rule. Connection-name changes reset saved approvals in 0.76.0; this is not blanket consent integrity. Receipt: https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/tools/approval/policies.ts#L74-L78.
- `queue-binds-at-0-63-0` and `turnpolicy-queue-did-not-bind-until-0-39-3`: binding holds, default remains steer. A held turn overrides queue for its requester, including the section 14 stale-message path at 0.79.0. Receipt: https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244.
- `trace-content-defaults`: runtime audience table holds, but provider capture option is superseded by tracePolicy. Add separate eval-export and best-effort sampling changes. Receipts: https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/instrumentation/instrumentation.mdx#L94-L98, https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/instrumentation/provider.ts#L154-L163.
- `deployed-self-modification`: changed mount to eve/self-modification/remote; required authorize and draft-only publication hold. Local disable advice must include explicit mounts. Receipts: https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/self-modification/remote/config.ts#L83-L95, https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/self-modification/github-publisher.ts.
- `chat-channel-approvals`: documented Slack private delivery and failure behavior hold; later lifecycle fixes prevent calling this blanket conformance. Receipt: https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/slack.mdx#L631-L644.
- `breaking-execution-model`: holds and extends to the 0.79.0 migration, with schedule/provider/reporter changes (sections 8, 13, 19, 21).
- `npm-versions-without-tags`: holds as prior-window history only; none new in this window. `fast-beta-velocity` now means 32 stable releases from 22 September to 13 October, not 31 (section 12).
- `duplicate-pending-approvals-closed-in-0-39-1`: the particular follow-up-turn scenario is superseded by held turns; not a guarantee against every duplicate or stale consent. Receipt: https://github.com/vercel/eve/blob/eve%400.79.0/docs/tools/human-in-the-loop.md#L259.
- `channel-hitl-metadata-and-credential-redaction`: old bootstrap-log mechanism not traced; do not mark the whole claim verified. Typed-history changes were read, but do not settle that half.
- `filesystem-first-agent` and `initial-public-release`: directory-based definitions and current beta description hold. Receipt: https://github.com/vercel/eve/blob/eve%400.79.0/README.md.
- `durable-resumable-execution`: documented architecture and stable Workflow build/vendor pins hold; recovery was not measured and local restarts now need the section 17 caveat.
- `hitl-approval-gates`: changed shape: held turns, requester credentials, anonymous-requester exception, and unresolved stale-message consent (sections 1, 2, 4, 14, 20).
- `multi-backend-sandbox`: listed backends and fallback order hold; just-bash has no native process isolation and retained MCP sandbox support is narrower. Receipts: https://github.com/vercel/eve/blob/eve%400.79.0/docs/sandbox/index.mdx#L240-L244, https://github.com/vercel/eve/blob/eve%400.79.0/docs/sandbox/default.mdx#L15.
- `subagents-and-mcp-connections`: root-only built-in agent remains the documented shape, connection tools now use the catalog, and tools/skills can be explicitly published over MCP. Receipts: https://github.com/vercel/eve/blob/eve%400.79.0/docs/subagents/index.mdx, https://github.com/vercel/eve/blob/eve%400.79.0/docs/channels/mcp.mdx.
- `ai-gateway-oidc`: current hosting guide retains Vercel OIDC and an off-Vercel AI_GATEWAY_API_KEY path. Receipts: https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/deployment/vercel.mdx, https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/deployment/self-hosting.md.

## Carry-forward answers

- The relaxed local development capability stayed and broadened: default mounts from 0.65.0, registry approval removal in 0.69.0, and host-level trust at 0.79.0. Disable bundled and explicit local mounts and protect access; do not stay on 0.63.0 for safety.
- No Eve-specific advisory was found in the checked GitHub records on 2026-10-14. This is a bounded observation; Undici has ten applicable-version advisories and a shipped update.
- auto custom/local model configuration was already possible at 0.63.0; no newly unlocked private-model deployment was established. Cited research still gives no false-negative audit guarantee.
- An internal channel-conformance harness now exists, but is not exported. PR #4515 reports 591 conformance tests passing on both vulnerable and fixed code. This is upstream reporting, not reproduced testing. Operator tests must cover requester/approver separation, denied dispatch, anonymous requesters, cancellation, child prompts and pre-prompt queued text. Receipt: https://github.com/vercel/eve/pull/4515.
- Off-Vercel hosting remains unmeasured. The current guide says default workspace-peer transport requires Vercel; production dynamic scheduling is Vercel-based, and remote self-modification needs Vercel Sandbox or supported microsandbox. The stable Workflow pins do not settle cross-host recovery. Receipt: https://github.com/vercel/eve/blob/eve%400.79.0/docs/guides/deployment/self-hosting.md.

## Operator questions settled

- Approval gating changed decisively: same-turn waits, default authenticated requester responses, policy checks, and requester execution identity. Anonymous requests and queued-message timing remain distinct authority questions.
- The Workflow build/vendor line reached stable versions; Eve's API remains beta and changed on minors. Stable substrate is not stable application protocol.
- Filesystem tools/skills gained an MCP consumption path without a model in the loop, but conversation-only tools and unsupported retained sandbox providers remain excluded.
- Human pauses can remain in the owning workflow; local restarts are opt-in recovery, handoff versions constrain rollback, and no recovery benchmark was run.
- Released experimental schedules are a capability, not an unreleased lead. They bring immediate activation and creator changes that operators must account for.

## Leads not promoted

- Original section 9's claimed new custom-model capability is refuted and deleted. The verified API rename lives in section 8 and the prior auto-approval recheck. Actual self-hosted model operation remains unverified.
- Pre-0.70.0 approved-call execution identity and the first affected workflow-gate release remain unestablished. No legacy-background exposure range is claimed.
- The old bootstrap-log credential-redaction mechanism was not independently traced; no positive current guarantee is made.
- An exhaustive absence of auto-approval telemetry is unverified. The narrower documentation limitation is retained.
- Actual network binding and Nitro environment influence were not probed; fallback, explicit host and hostname precedence are code facts only.
- Writing feeds had no Eve-specific item; X access was signed out. No social-post evidence or quote is used.
- The CLI all-interfaces table predates the window and conflicts with the fallback code; it is context, not a new change.
- gray-matter removal was hardening: the old wrapper already replaced code-capable engines. No exploitable frontmatter path was established.
- Delegated-budget behavior described in #3956 was not made a separate material finding; no deployment-level cost result was measured.
- Open-only proposals: v27, QuickJS/Monty code mode, world-hub, explicit approver credentials and internal-team telemetry. #4596 is removed from this list because it shipped. Future labels are not channel evidence.

## Surfaces checked

- Original researcher surfaces: complete stable/prerelease ledger through the morning 0.78.0 snapshot, tagged source/docs, PRs, registry and security records.
- Crosscheck surfaces: all 32 release records and registry publish metadata through 0.79.0, end-of-window pinned main, tagged source/docs, dependency advisories and open proposal status.
- Author pass on 2026-10-14: independently read 0.64.0, 0.68.0, 0.69.0, 0.70.3, 0.74.0, 0.75.0, 0.76.0, 0.77.0, 0.78.0 and 0.79.0 release metadata/bodies through GitHub's API. Read all six 0.79.0 bullets.
- Existing eve-verify clone was read with lazy fetching disabled. Independently checked first-stable containment, preceding-stable non-containment, latest-stable and pinned-main containment for all 26 miss-related commits; checked 10 commits from 0.78.0 to 0.79.0, 463 from baseline to latest and eight on end-of-window main.
- Independently read the current queue, coordinator anonymous exception, MCP publication exclusions and sandbox session limits, self-modification mount exception, trace-sampling warning helper, baseline/latest Undici manifests, and current Workflow devDependency pins. Read queued-message regression source without executing it.
- Independently read attachment-staging and same-host identity implementation patches through GitHub's commit API when local blob reads were unavailable. No lazy fetch, clone mutation or execution occurred.
- Registry: Eve 0.79.0 metadata, live latest/beta and version publication times; adapter 0.0.46 metadata, live latest and publish time. Observations are dated 2026-10-14.
- Ten Undici advisory API records: description, affected ranges, first patched version, CVE and ISO publication timestamps. Rendered HTML dates were not used.

## Not reached

- No end-to-end approval, workflow, development-host exposure, recovery, scheduling, intake, search, model or self-hosting probe was executed. Claimed behavior is bounded to source, documentation and release records.
- No demonstration of dependency API reachability or an Eve exploit for any Undici advisory.
- No proof of pre-0.70.0 execution identity, complete legacy background exposure, actual dev bind, or exhaustive automatic-approval telemetry.
- No code after the 2026-10-13 UTC window is used as a shipped capability or repair.

## Crosscheck applied

Applied on 2026-10-14 against the 2026-10-13 posture. Original sections 2, 4, 5, 7, 10 and 13 are corrected; original 9 is deleted as refuted. Six verified sections retain their scoped facts. Unverified subordinate assertions are bounded or moved to leads. The current stable, 32-release ledger, main-only inventory and #4596 status are corrected. Each of M1 through M13 is independently receipted and added as a numbered section. The result has 25 sequential sections; no wholly unverifiable numbered section remains. No cloned code was executed and no site build or install was run.
