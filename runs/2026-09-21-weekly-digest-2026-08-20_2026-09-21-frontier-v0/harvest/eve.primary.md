---
schema_version: bitter.frontier_harvest.v0
provider: eve
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/eve.yml
channels_present: [tagged-release, main-unreleased]
window_volume: 47 eve@ tags in window (eve@0.43.0 through eve@0.63.0, 21 minors, all prerelease=false), 549 commits eve@0.42.0...eve@0.63.0; 3 npm-only versions with no git tag; 10 material changes, 5 capability-bearing, 7 defect-bearing
lane: primary sources, researcher; identity checked (vercel/eve); window-close pin eve@0.63.0; 0.64.x is 09-22 OUT
---

# Harvest -- eve (primary sources)

Punctuation is ASCII. Repo vercel/eve (owner vercel, 5,324 stars). Parent
baseline: eve@0.42.0 (published 2026-08-20T21:06:06Z, tag commit 82015c11dc).
Window-close pin: eve@0.63.0 (published 2026-09-19T16:34:12Z, tag commit
d004e6d47e9d25d0380c24b5a47b65a18f8b2784). compare eve@0.42.0...eve@0.63.0 ->
status=ahead, ahead_by=549, behind_by=0. History is linear: every consecutive
tag pair below is status=ahead, behind_by=0. No GitHub security advisories
published (`gh api repos/vercel/eve/security-advisories` -> []). Several
changes below are security fixes shipped as ordinary patch notes; there is no
advisory channel to watch.

## Release ledger

All prerelease=false. ahead_by is vs the previous listed tag.

| Tag | Published | ahead_by | Tag | Published | ahead_by |
|---|---|---|---|---|---|
| 0.43.0 | 08-21 12:03 | 11 | 0.52.3 | 09-08 21:35 | 29 |
| 0.44.0 | 08-21 16:07 | 7 | 0.52.4 | 09-09 15:25 | 16 |
| 0.44.1 | 08-22 17:50 | 11 | 0.52.5 | 09-10 02:15 | 10 |
| 0.44.2 | 08-22 20:24 | 2 | 0.53.0 | 09-10 16:19 | 9 |
| 0.44.3 | 08-22 21:15 | 2 | 0.53.1 | 09-10 20:02 | 7 |
| 0.44.4 | 08-24 22:34 | 26 | 0.54.0 | 09-11 16:01 | 9 |
| 0.45.0 | 08-26 02:36 | 32 | 0.54.2 | 09-11 18:59 | 8 |
| 0.45.1 | 08-26 18:50 | 9 | 0.54.3 | 09-11 21:47 | 6 |
| 0.45.2 | 08-26 22:07 | 10 | 0.54.4 | 09-14 13:36 | 10 |
| 0.46.0 | 08-27 14:06 | 7 | 0.54.5 | 09-14 15:10 | 6 |
| 0.46.1 | 08-27 16:17 | 7 | 0.55.0 | 09-14 23:57 | 20 |
| 0.47.0 | 08-27 21:25 | 9 | 0.56.0 | 09-15 21:04 | 16 |
| 0.47.1 | 08-27 22:23 | 2 | 0.57.0 | 09-16 16:59 | 15 |
| 0.47.2 | 08-27 23:10 | 4 | 0.58.0 | 09-17 02:41 | 17 |
| 0.47.3 | 08-28 19:41 | 11 | 0.58.1 | 09-17 03:35 | 3 |
| 0.47.5 | 08-31 18:27 | 21 | 0.59.0 | 09-17 19:51 | 12 |
| 0.47.6 | 08-31 19:18 | 3 | 0.59.1 | 09-17 21:07 | 3 |
| 0.47.7 | 09-01 14:55 | 21 | 0.60.0 | 09-18 11:32 | 8 |
| 0.48.0 | 09-01 20:15 | 15 | 0.60.1 | 09-18 14:17 | 2 |
| 0.49.0 | 09-02 01:47 | 12 | 0.61.0 | 09-18 17:39 | 7 |
| 0.49.1 | 09-02 22:18 | 13 | 0.61.1 | 09-18 19:26 | 5 |
| 0.50.0 | 09-03 00:17 | 8 | 0.62.0 | 09-18 23:43 | 10 |
| 0.51.0 | 09-03 15:20 | 18 | 0.63.0 | 09-19 16:34 | 4 |
| 0.52.2 | 09-06 17:32 | 56 | | | |

Dates are 2026, UTC, from GitHub release published_at. Also in window:
@eve/self-modification 0.0.3 through 0.0.13 (9 releases, now a private
compatibility package forwarding to eve >= 0.54.0) and 22
@eve/buzz-acp-adapter releases (dependency bumps; not material). Channel facts
in finding 10.

## 1. Self-modification is no longer development-only: a deployed mode edits a git checkout and opens draft PRs

- **Date:** 2026-09-09 (0.52.4), consolidated through 2026-09-18 (0.62.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 8946bd592e35 "feat(self-modification): activate production file editing (#2873)" 2026-09-09T04:30:59Z; compare eve@0.52.4...8946bd5 status=behind (in tag), eve@0.52.3...8946bd5 ahead_by=10 (not in prior tag). 0.55.0 (09425a0) moves the registry item to `eve/self-modification` and removes its experimental label. 0.58.0 (bfc899d) replaces Vercel-specific credentials with an app-supplied GitHub credential provider, PAT via `{ pat: true }`. 9d394faa3ae2 (#3501, in eve@0.62.0, not in 0.61.1) repackages it as an extension-owned subagent and retires the scaffold. Code at eve@0.63.0: `packages/eve/src/self-modification/mode.ts` lines 6-11 return "local" only when `EVE_DEV === "1"` and local is enabled, else "deployed" when `config.deployed` is set, else "disabled". `extension/subagents/agent/agent.ts` lines 93-108: deployed mode returns null unless `config.deployed.authorize({ channel, principal })` resolves true (exceptions also return null). `extension/extension.ts` lines 16-36: deployed requires `source.git`, `target.branch`, and an `authorize` function. `github-publisher.ts` creates PRs with `draft: true` (line 306) and refuses to update a PR that is no longer a draft (line 137). `registry_add.ts` lines 365 and 382 use `approval: once()`; `edit_file.ts` and `publish.ts` carry no approval field.
- **Receipt:** https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/self-modification/mode.ts
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** The parent recorded a dev-only subagent that wrote authored
source under `EVE_DEV=1` with no approval. It now has a production form: a
deployed agent can, for principals your `authorize` callback admits, edit a
disposable checkout of its own repo and publish a draft pull request. It
cannot merge or deploy. The local form at 0.63.0 still requires `EVE_DEV=1`
and, per `runtime/local-dev-capability.ts` lines 30-38 and 80-90, a
host-signed loopback peer address.

**Operator consequence.** Answer to the carry-forward check: no, not
development-only any more, but deployed mode is off unless you configure
`deployed` with an `authorize` callback and GitHub credentials. Re-audit: if
you enabled it, your `authorize` function is the only thing between a chat
user and a draft PR against your agent's repo, and the GitHub credential scope
is the blast radius. Keep branch protection on the target branch; the draft PR
is the human gate. See "Observed after window close" for 0.64.0, which drops
the loopback restriction on local mode.

## 2. Approval integrity: three ways an approval could authorize the wrong thing, closed in-window

- **Date:** 2026-08-22 to 2026-09-06
- **Channel:** `tagged-release`
- **Ancestry evidence:** 02403b96130f (#2384) 2026-08-21, in eve@0.44.1 not 0.44.0 (ahead_by=4 vs 0.44.0): dynamic tool callbacks were identified by byte offset in authored source, so editing an agent file could make a parked approval replay the wrong tool after redeploy; now keyed by tool name, and a removed tool fails closed. 884cba8279ad (#2923) merged 2026-09-02T23:54:51Z, in eve@0.50.0 not 0.49.1 (ahead_by=7): when separate pending calls shared a `once()` approval key, approving one recorded the grant immediately and a resumed step could auto-authorize the others while their cards were still pending; PR body says it reproduced with three pending calls. Same tag 5b90f3d: approved calls silently did not execute when task state or a skill announcement was injected on the resume step. 0.52.2 (9cb98b9): input-scoped approval keys on dynamic tools are preserved on replay instead of collapsing to the bare tool name. Docs at eve@0.63.0 `docs/tools/human-in-the-loop.md` line 63 now state the independent-prompt rule.
- **Receipt:** https://github.com/vercel/eve/pull/2923
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Before 0.50.0, a human approving one of several visible
`once()` prompts could silently approve the rest. Before 0.44.1, a redeploy
with edited source could run a different tool under a parked approval. Before
0.52.2, input-scoped keys on dynamic tools degraded to tool-wide keys on
replay.

**Operator consequence.** Upgrade to at least 0.52.2 if any tool uses `once()`
or input-scoped keys. If you ran 0.43 to 0.49 with `once()` gates and
concurrent approvals, review tool logs for calls that executed while their
card was still open.

## 3. Cross-principal authority: queued messages from different users ran under the last sender's auth

- **Date:** 2026-08-21 to 2026-09-15
- **Channel:** `tagged-release`
- **Ancestry evidence:** 3bbf8e5c0d54 (#3172) merged 2026-09-09T18:05:55Z, in eve@0.52.5 not 0.52.4 (ahead_by=4). PR body: "Fixes queued messages from different users merging into one turn under the last sender's auth"; after the fix Alice, Alice, Bob, Alice becomes turns [Alice, Alice], [Bob], [Alice]. b57c9659adf4 (#2338) in eve@0.43.0 not 0.42.0: persistent subagent continuations forward the active caller instead of inheriting the previous caller's authority; release note says upgrade both remote-agent deployments before resuming persistent sessions. a63fb18 in eve@0.56.0: background subagents stay bound to the auth of the turn that created their task.
- **Receipt:** https://github.com/vercel/eve/pull/3172
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** In a shared channel (Slack thread, group chat), queued
input from several people was coalesced into one turn and executed with the
last sender's user-scoped connections. That is a privilege-mixing bug, and it
sits exactly on the queue path the parent told operators to enable.

**Operator consequence.** Anyone who set `turnPolicy: "queue"` on a
multi-user channel after the parent's 0.39.3 advice was exposed until 0.52.5.
Upgrade to >= 0.56.0 for all three fixes. Re-audit user-scoped connection
actions taken from shared threads between 0.39.3 and 0.52.5.

## 4. Credential exposure: BYOK provider key served from /eve/v1/info; ChatGPT login stored in plaintext

- **Date:** 2026-09-07 to 2026-09-11
- **Channel:** `tagged-release`
- **Ancestry evidence:** cf1510f7c444 (#3203) merged 2026-09-09T22:43:50Z, in eve@0.52.5 not 0.52.4 (ahead_by=8). PR body: the info response copied `providerOptions` verbatim, and the BYOK scaffold places the owner's provider apiKey under `gateway.byok`, so "any caller the application's channel auth admits to GET /eve/v1/info received the owner's reusable provider credential". 67f3b8d81719 (#3120) in eve@0.52.3 adds eve-owned ChatGPT subscription sign-in; 6cb22a4e040d (#3151) in eve@0.54.3 (not 0.54.2) moves refresh credentials to the OS credential store and removes "the old plaintext session file".
- **Receipt:** https://github.com/vercel/eve/pull/3203
- **Half:** defect | security-relevant | **Confidence:** high on the /info leak; medium on the plaintext window starting at 0.52.3 (inferred from the 0.54.3 note)

**What changed.** A deployed agent using the BYOK scaffold handed its model
provider API key to any admitted caller of the info route. Separately, eve's
own ChatGPT login wrote a plaintext session file from 0.52.3 until 0.54.3.

**Operator consequence.** If you deployed with BYOK on any version before
0.52.5 and channel auth admits anyone you do not fully trust (anonymous web
chat included), rotate the provider key now; upgrading does not revoke a
copied key. On developer machines that signed into ChatGPT via eve 0.52.3 to
0.54.2, sign in again on >= 0.54.3 so the plaintext file is removed.

## 5. Trace content defaults flipped four times; 0.55.0 recorded anonymous content for a day

- **Date:** 2026-08-21 to 2026-09-15
- **Channel:** `tagged-release`
- **Ancestry evidence:** 0.44.0 (47e8b64) traces public-only by default. 0.44.1 (85b2dc8) redacts model, tool, approval, and delivery content for private and unknown audiences. 0.46.0 (1d79217) emits traces for every audience, content only for public. 0.47.3 (05b12e3beb66, #2697): providers declaring `capture: "content"` receive full content "regardless of channel audience or OpenTelemetry tracePolicy". 0.55.0 (0e0f3cc2ea1d, #3325) makes `eveChannel` default anonymous callers to public. 7ea3b7a4acd5 (#3365) merged 2026-09-15T02:33:43Z, in eve@0.56.0 not 0.55.0: PR body says anonymous sessions "classified as `public` by default ... could record content from any reachable endpoint"; now `unknown`.
- **Receipt:** https://github.com/vercel/eve/pull/3365
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Whether conversation content lands in hosted traces
depended on which of five patch/minor versions you ran. eve@0.55.0 (published
2026-09-14T23:57Z, superseded 2026-09-15T21:04Z) recorded anonymous
conversations' content by default.

**Operator consequence.** If you ran 0.55.0 in preview or production with
anonymous channels, purge hosted trace content from that interval. If you
register an instrumentation provider with `capture: "content"`, audience
classification does not protect anything for that provider; treat it as a
full-content sink.

## 6. auto(): a model can now approve tool calls

- **Date:** 2026-09-17
- **Channel:** `tagged-release`
- **Ancestry evidence:** 7ef42fd9b6ce (#3481) merged 2026-09-17T20:59:38Z, in eve@0.59.1 not 0.59.0 (ahead_by=2). Docs at eve@0.63.0 `docs/tools/human-in-the-loop.md` lines 33-48: `auto()` asks an evaluation model (default `typesafe-ai/jev`) to classify each call `clear` or `caution`; caution, failed review, or incomplete input requires user approval; "The tool input is sent to the evaluation model's provider." Line 40: omitted `approval` behaves like `never()`. PR body: failures, timeouts, oversized, and non-serializable reviews fail closed to human approval.
- **Receipt:** https://github.com/vercel/eve/blob/eve%400.63.0/docs/tools/human-in-the-loop.md
- **Half:** capability | authority | **Confidence:** high

**What changed.** A fourth approval helper between `once()` and `always()`:
routine calls run without a human, and a classifier decides what is routine.

**Operator consequence.** Try it only where a wrong "clear" is recoverable.
The classifier sees the tool name and input, not the downstream effect, and
tool input leaves your deployment for the evaluator's provider. It answers
the contract question "does the approval-gate model change how teams gate
tool calls?": yes, eve now ships a first-party model-judged gate, which
moves human attention from every call to the classifier's false negatives.

## 7. Chat-channel approvals: private Slack DM routing, Telegram and Chat SDK HITL, pending approvals stop blocking

- **Date:** 2026-08-24 to 2026-09-14
- **Channel:** `tagged-release`
- **Ancestry evidence:** 4652b5d38967 (#3061) in eve@0.54.5 not 0.54.4: Slack `approvalChannel` callback routes each input request (tool approvals and `ctx.ask()`) to the thread or the triggering user's DM; docs at eve@0.63.0 `docs/channels/slack.mdx` line 464: if eve cannot resolve the triggering user, the request is logged and not posted ("private delivery fails closed"), and the existing response policy still decides who may respond. 0.54.5 7ba0c77: typed Telegram replies resume the pending tool. 0.45.0 cfa90d6: Telegram HITL authorization challenges; 0.44.4 2a34f75: Chat SDK DM HITL. 0.45.0 4a18994: tools stay available in follow-up turns while an earlier approval is unresolved; 0.45.2 a5917cd: pending approvals are trusted runtime state that newer user messages can revise or supersede; 0.47.3 17d2445 and 55649a5: Slack cards settle correctly out of order; follow-ups preserved while a responder-authorized approval is pending.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.54.5
- **Half:** both | **Confidence:** high

**What changed.** The approval surface widened to more channels and got a
private path. A parked approval no longer freezes the conversation.

**Operator consequence.** For Slack agents where the approval request itself
is sensitive (it shows tool input), route it to DM with `approvalChannel`.
Because unrelated work now proceeds while an approval is parked (0.45.0), do
not assume a pending approval pauses the agent; if you relied on that as a
brake, add an explicit block.

## 8. Carry-forward: turnPolicy queue binds on Slack and custom channels at 0.63.0; default is still steer

- **Date:** 2026-09-19 (pin read)
- **Channel:** `tagged-release`
- **Ancestry evidence:** At eve@0.63.0: `packages/eve/src/public/definitions/channel.ts` line 298 copies `turnPolicy: definition.turnPolicy` into the compiled channel (the line whose absence caused the 0.34.0-0.39.2 bug). `public/channels/slack/slackChannel.ts` line 662 declares `turnPolicy` on config and line 950 passes `turnPolicy: config.turnPolicy`; Discord, Linear, Linq, GitHub, Telegram, Teams, Photon, Chat SDK, and Twilio do the same. `internal/nitro/routes/channel-dispatch.ts` lines 260 and 264 thread `channel?.turnPolicy` into channel operations and session attach. `channel/channel-address.ts` line 105 and `channel/session.ts` line 128 fall back to `DEFAULT_TURN_POLICY`, which `channel/types.ts` line 202 sets to "steer". `execution/session/input-queue.ts` lines 322-331: a delivery steers only if `(delivery.turnPolicy ?? "steer") === "steer"`, so "queue" deliveries are queued. 0.57.0 (61d409744341, #3263, not in 0.56.0) rewrote execution so turns run inside the session's owning workflow and steering applies at the next committed step boundary.
- **Receipt:** https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/execution/session/input-queue.ts#L322-L331
- **Half:** both | **Confidence:** high on propagation (code read); medium on end-to-end behavior (not run)

**What changed.** Nothing regressed the 0.39.3 repair: configured queue
reaches the inbox on Slack and custom `defineChannel` channels. The queue's
contents are now split by auth context (finding 3). The eve dev TUI switched
Enter-during-turn to steer by default in 0.57.0.

**Operator consequence.** Keep `turnPolicy: "queue"` if you set it; it binds
at 0.63.0. You must set it explicitly per channel, since the default remains
steer. Upgrade past 0.52.5 before relying on queue in any multi-user channel.

## 9. Breaking capability moves: persistent subagents by default, one-workflow sessions, workflow-only background tools

- **Date:** 2026-08-26 to 2026-09-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** eve@0.45.0 (f439e3d): persistent subagent sessions are the default and `experimental.subagentPersistentSessions: false` is no longer an opt-out. eve@0.48.0 (b7321c9): a tool's `execute` can be a Workflow body with durable `ask()` to the human that stays answerable after the turn ends. eve@0.57.0 (61d4097, #3263): sessions run in one owner workflow with deployment handoff; release note: "Retain the original deployment until imported sessions end, and retire sessions before rolling back across this boundary." eve@0.63.0 (d2c92df): durable background tools must use `defineWorkflowTool`; `TaskExec` and `postMessage` removed. eve@0.53.1 (09df32c): `experimental.workflow.retention: 0` deletes a run's payloads, streams, and event log on completion.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.57.0
- **Half:** capability | **Confidence:** high

**What changed.** Durable human pauses became a tool-level primitive
(`ask()` inside a workflow tool), subagents remember by default, and the
execution model changed under running sessions.

**Operator consequence.** Do not roll back across 0.57.0 with live sessions.
If you need data minimization, 0.53.1 retention 0 is the first knob that
deletes workflow payloads at run end. Answers the contract's primitive-stability
question: sessions, subagents, and background tools were all still breaking in
September; watch-only as architecture precedent.

## 10. Channel facts: npm published three versions with no git tag; latest is 0.64.1

- **Date:** 2026-09-04
- **Channel:** npm (no tag)
- **Ancestry evidence:** `npm view eve time`: 0.51.1 2026-09-04T02:30:47Z, 0.52.0 2026-09-04T19:01:26Z, 0.52.1 2026-09-04T22:46:49Z. `gh api repos/vercel/eve/tags` has no eve@0.51.1, eve@0.52.0, or eve@0.52.1, and no GitHub releases exist for them. Neither npm nor git has 0.47.4 or 0.54.1. Observed 2026-09-23: npm dist-tags latest=0.64.1, beta=0.6.0-beta.20 (stale, from the pre-launch line).
- **Receipt:** https://www.npmjs.com/package/eve?activeTab=versions
- **Half:** defect (provenance) | **Confidence:** high

**What changed.** For three published versions there is no tag to audit
against. The minor 0.52.0 has no release notes; 0.52.2's notes cover the gap
(ahead_by=56 vs 0.51.0).

**Operator consequence.** Do not pin 0.51.1, 0.52.0, or 0.52.1; there is no
tagged source to review. Do not install `eve@beta`.

## Researcher lane notes

Identity: vercel/eve, homepage eve.dev, Apache-2.0. eve.dev/docs returns 200;
deep doc URLs guessed from the old layout 404, so docs claims above are read
from `docs/` at the eve@0.63.0 tag instead.

Carry-forward answers: (1) Tags: 47 in window, ledger above. (2) Queue binds
on Slack and custom channels at 0.63.0 (finding 8). (3) Self-mod: not
development-only; deployed mode exists behind an app-supplied `authorize`
callback and produces draft PRs only (finding 1). (4) Approvals from chat
channels: findings 2, 3, 7. Credential brokering and sandbox bootstrap: no
change to brokered credential transforms or bootstrap log redaction in any
in-window release note; sandbox changes were 0.47.0 `delete()` on the sandbox
handle, 0.51.0 base-image fixes (sudo, PATH, `.bash_logout`), 0.52.4 stable
template keys. Security fixes: findings 2 through 5, plus 0.44.4 (94a09529f09b,
#2510) `web_fetch` follows up to ten redirects and rechecks each for SSRF.
(5) Capability half: findings 1, 6, 7, 9; also workspace multi-agent
deployment (0.51.0, 0.54.3 `defineWorkspaceAgent`), `fileMemory()` and memory
providers (0.45.1-0.49.1), ChatGPT subscription models via Codex app-server
(0.54.4), `agentRouter()` model routing (0.60.1, 0.61.0).

Privacy note, not escalated: 0.45.0 (687c371) sends OpenAI and Anthropic a
safety identifier derived from the session caller when the agent sets none.

Marketing vs substance: no launch or blog surface consulted; all claims are
from release notes, PR bodies, and code at tags.

## Observed after window close

- eve@0.64.0 (2026-09-22T19:34:09Z) and eve@0.64.1 (2026-09-22T22:59:13Z). 0.64.0 includes aceb298cc31a (#3590, merged 2026-09-22T15:59:29Z): local self-modification now depends on `eve dev` host facilities instead of request provenance. The PR body says this "intentionally replaces the earlier revision's guarantees of rejecting remote access" and "Operators must protect access to the server to guard self-modification"; any caller admitted to a dev server, including remote or proxied, can invoke source editing. 0.64.0 also replaces object-form sandbox definitions with provider environments (49971b7) and adds `taskDeliveryPolicy`. OUT; flag for next window.

## Surfaces checked

- gh api repos/vercel/eve (identity); security-advisories (empty)
- gh api releases --paginate (eve@, @eve/self-modification, @eve/buzz-acp-adapter) and all eve@ release bodies 0.43.0..0.64.1
- gh api tags (eve@0.43.0..0.64.1; absence of 0.51.1, 0.52.0, 0.52.1)
- gh compare for every consecutive tag pair 0.42.0..0.63.0 (all ahead, behind_by=0; sum 549); eve@0.63.0...main (41/0)
- gh compare for 17 key commits vs their introducing tag and the prior tag (884cba8, 3bbf8e5, cf1510f, 02403b9, b57c965, 6cb22a4, 67f3b8d, 0e0f3cc, 7ea3b7a, 8946bd5, 7ef42fd, 4652b5d, 9d394fa, 05b12e3, 94a0952, 61d4097, aceb298)
- PR bodies #2923, #3172, #3203, #3365, #3481, #3590
- Tarball at eve@0.63.0: self-modification/{mode.ts, extension/extension.ts, extension/subagents/agent/agent.ts, github-publisher.ts, extension/subagents/agent/tools/*.ts, config.ts}, runtime/local-dev-capability.ts, channel/{types.ts, session.ts, channel-address.ts}, public/definitions/channel.ts, public/channels/*/ (turnPolicy), internal/nitro/routes/channel-dispatch.ts, execution/session/input-queue.ts, docs/tools/human-in-the-loop.md, docs/channels/slack.mdx
- npm view eve time and dist-tags; npm view @eve/self-modification
- curl https://eve.dev/docs (200)

## Not reached

- End-to-end reproduction of queue behavior on a live Slack workspace.
- Exact first version that shipped the BYOK scaffold (bounds the /info exposure window from below).
- Full diff reads for 02403b9, 884cba8, 3bbf8e5 (relied on PR bodies, release notes, and ancestry).
- Rendered eve.dev docs pages at a pin (used repo docs at the tag instead).
