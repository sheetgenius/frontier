---
schema_version: bitter.frontier_harvest.v0
provider: eve
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/eve.yml
channels_present: [tagged-release]
window_volume: 3 material changes, 2 capability-bearing, 2 defect-bearing, 1 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- eve (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. eve 0.30.0 closes a Host-header path to the synthetic local-dev principal on self-hosted servers

- **Date:** 2026-08-04 | **Version:** eve@0.30.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/vercel/eve/releases` lists eve@0.30.0 published 2026-08-04T14:26:36Z with prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.29.5...eve%400.30.0'` returned the commit list 021dbbf 136749f ee50ae7 13420ab 15ab367 39662ad f43b22d 56651ee e1cd7b7 5e3119b cbf6f25 6c5f4fe, which contains the change commit f43b22d -- so f43b22d is in the history of the stable tag eve@0.30.0. No GitHub Security Advisory exists for this repo (`gh api repos/vercel/eve/security-advisories` returned empty), so there is no CVE or GHSA to cite; the release note is the only primary record.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.30.0
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** `localDev()` now grants the synthetic local principal based on the deployment -- an `eve dev` or `vercel dev` process -- instead of on the request URL host. Before this, a request `Host` header could obtain local-dev access on a self-hosted server. The previously exported `isLoopbackRequest` helper is removed, and the default eve channel now falls back to `[vercelOidc(), localDev(), placeholderAuth()]`, which keeps local development working while rejecting all production traffic.

**Operator consequence.** This is an authentication bypass class -- attacker-controlled request metadata (the `Host` header) was sufficient to be admitted as the trusted local principal. It bites self-hosted deployments specifically, not Vercel-hosted ones behind OIDC. If you run eve anywhere other than Vercel and your channel auth chain includes `localDev()`, upgrade to eve@0.30.0 or later and then re-audit: assume the local principal was reachable from outside for the life of your deployment, and check what tools and connections that principal could call. Anyone importing `isLoopbackRequest` has a compile break and should treat that break as the signal to re-derive their auth boundary, not to reimplement the helper.

## 2. eve 0.30.7 adds experimental persistent subagent sessions, so delegated children park instead of terminating

- **Date:** 2026-08-05 | **Version:** eve@0.30.7
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/vercel/eve/releases` lists eve@0.30.7 published 2026-08-05T17:29:19Z, prerelease=false, draft=false. The feature is gated behind an `experimental.subagentPersistentSessions` flag in `agent.ts` -- that is a runtime opt-in inside a stable tag, not a prerelease channel, so the channel is tagged-release and the experimental status belongs in the finding text rather than in the channel.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.30.7
- **Half:** capability | **Confidence:** high

**What changed.** Behind `experimental.subagentPersistentSessions`, opted-in agents keep delegated children alive after they answer. Each child is owned by a lifecycle handle, settles every turn with an explicit outcome carrying its per-turn token usage, and parks instead of terminating. The parent's subagent tools gain an `agentId` parameter to continue a parked child, discoverable from a per-model-call `<agents>` system injection that lists only parked (resumable) children. An omitted, empty, or unknown `agentId` starts a fresh child; continuing a child that is still starting or working fails with `AGENT_BUSY`. Without the opt-in, children keep running as one-shot tasks. A companion fix stops cancellation from leaking child handles as permanently `running` -- the cancellation epilogue now parks each abandoned child as "(cancelled)" so it stays resumable.

**Operator consequence.** Try this if you are paying to re-establish a subagent's context on every delegation. The interesting part for operators is not the resumption, it is that each child settles every turn with explicit per-turn token usage -- that is the accounting hook you need to answer "which subagent is costing me money" without instrumenting it yourself. Do not build a production dependency on it: it is a named experimental flag on a framework that shipped ten minor versions in fourteen days, and the `<agents>` injection it relies on was itself reworked one release later in 0.31.0 to stop breaking parent resume on models that reject assistant-final requests.

## 3. eve 0.31.0 replaces continuation-token sessions with fixed, ID-addressed handles across every public surface

- **Date:** 2026-08-06 | **Version:** eve@0.31.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/vercel/eve/releases` lists eve@0.31.0 published 2026-08-06T13:40:26Z, prerelease=false, draft=false. Ancestry: `gh api 'repos/vercel/eve/compare/eve%400.30.8...eve%400.31.0'` returned b7a2a14 a53a91e 40b09e6 3cfe8f8 2054b9f 84c3dfc cb15af6, containing the breaking-change commit 40b09e6 -- in the history of the stable tag eve@0.31.0.
- **Receipt:** https://github.com/vercel/eve/releases/tag/eve%400.31.0
- **Half:** both | **Confidence:** high

**What changed.** A breaking migration across the whole public session surface. TypeScript clients use `client.sessions.create(input)` and `client.sessions.attach(sessionId)`; `client.session(...)` and continuation-token client state are removed. Message delivery moves to positional `send(message, options)`, with human-in-the-loop replies split onto a separate `respond(inputResponses, options)` method that is mutually exclusive with `message`. Custom channels get `from(address)`, top-level `resolveSession(address)`, `attachSession(sessionId)`, and `to(channel, target)`. Slack hooks expose `ctx.send`, `ctx.respond`, `ctx.cancel`, `ctx.compact`, `ctx.clear`, `ctx.reset`, and `ctx.resolveSession`, while `ctx.receive` and `resolveActiveSession` are removed. Schedule handlers replace `receive(channel, {...})` with `to(channel, target).send(...)`. On the HTTP API, clear/compact/reset move from continuation-token body routes to `POST /eve/v1/session/:sessionId/{clear,compact,reset}`; accepted async work returns HTTP 202 and inactive follow-ups return HTTP 409 with `code: "session_not_active"`, exposed as `ClientError.code`. Canonical `onMessage` hooks can no longer drop an otherwise authorized delivery by returning `null`.

**Operator consequence.** Every integration you wrote against eve before 0.31.0 breaks, including your HTTP clients -- this is not a type-level rename you can absorb with a codemod. Two consequences outlive the migration. First, `onMessage` returning `null` no longer silently drops an authorized delivery, so if you were using that as an admission gate, your gate is gone and you must move the decision to a real auth or approval surface. Second, the split of `send` from `respond` makes the human-in-the-loop reply a distinct call rather than an overloaded message -- that is the shape to copy if you are designing your own approval surface. Note the compatibility work in 0.31.1: sessions pinned to 0.30.3 -- 0.30.8 get a transitional payload mirror, which is a deliberate, dated promise about resumability across an upgrade rather than a silent break.

## Researcher lane notes

All three contracts were read before any surface was touched, and no open-web search was used for any of the seventeen findings -- every receipt is a GitHub release, a SHA-pinned changelog, or the project's own homepage.

CHANNEL DISCIPLINE. Every finding is tagged-release and every one carries ancestry evidence, not date evidence. For Flue I dereferenced each tag and ran the compare API against it (`compare/v2.0.2...a171cc1` and `compare/v2.0.3...bf86b87`, both "identical"), which also confirms the contract's standing note that github.com/withastro/flue/releases is empty and the version-tagged CHANGELOG is the only receipt surface. For Eve I proved containment for twelve individual change commits by running `compare/eve%40<prev>...eve%40<tag>` and checking the returned commit list -- the commit lists are quoted in each channel_evidence field. Note the URL-encoding trap for anyone repeating this: Eve's tags contain `@`, and `gh api repos/vercel/eve/compare/eve@0.36.0...20a5201` 404s while `eve%400.36.0` works. Every Eve release in the window returned prerelease=false and draft=false.

WHAT I DELIBERATELY DID NOT CLASS AS PRERELEASE. Two Eve features carry the word "experimental" -- the `agent/instrumentation/` provider layout (0.34.0) and `experimental.subagentPersistentSessions` (0.30.7). Those are maturity labels on opt-in flags inside stable tags, not prerelease channels, so I classed them tagged-release and put the experimental status in the finding text where an operator will actually read it.

AGENT FLYWHEEL RETURNED ZERO FINDINGS, AND THAT IS THE FINDING. Its contract bounds weekly detection to releases and tags and explicitly lists `untagged_main_branch_commits` as rejected evidence. There has been no tag since v0.7.0 on 2026-06-26 -- fifty-two days. Meanwhile main took 55 commits inside this window, and they are not noise: they touch installer retry classification and HTTP 429 handling, a standalone Internal Checksum Guard so installer drift fails closed, preserving an operator-audited SLB binary during nightly updates, setting Claude Code's `cleanupPeriodDays` explicitly so 30-day pruning stops silently deleting session history (#330), recovering from systemd runtime masks on agent-mail.service (#328), and roughly a dozen bundled-tool checksum refreshes. Under the contract I cannot report any of it, and I have not. But the gap is structural rather than incidental, because the README pinned at v0.7.0 documents the default one-liner as installing from `/main/install.sh` with a cache-busting query string. The tag is not what operators run. I have recorded that as a carry-forward answer with a tagged receipt rather than smuggling untagged commits in as findings, and I flag it for the coordinator: for this one source the publication's central rule runs backwards, and a future contract revision may need a bounded mechanism for it. Two operator questions cannot be closed at the release surface as a result -- whether the next tag fixes the v0.7.0 mode boundary, and which bundled agent versions are pinned.

DATING GAPS, STATED RATHER THAN GUESSED. Flue's homepage no longer carries the "Agent = Model + Harness" formula this source was registered on, and the repo description now reads "The sandbox agent framework." Both are undated moving surfaces. I can receipt the current state and I can receipt the in-window v2.0.2 rename that makes `Sandbox` the first-class handle, but I cannot prove the repositioning itself happened inside the window -- v2.0.0 on 2026-07-31 is the likelier moment, four days before it opens. Reported as a carry-forward answer with the caveat attached, not as a w1 change. Flue's v2.0.3 also has a two-date problem: the CHANGELOG header says 2026-08-04 while the tag commit is 2026-08-05T00:04:42Z UTC. Both are w1; I used the git date and noted the discrepancy.

SECURITY. `gh api .../security-advisories` returned empty for all three repositories, so there is no CVE or GHSA to resolve this window. The one security-class defect is eve@0.30.0's `localDev()` fix, which I have classed as authentication bypass: a request `Host` header could obtain the synthetic local-dev principal on a self-hosted server. It has no advisory -- it is a release-note line -- which is worth saying plainly, because an operator watching a CVE feed would not have seen it. Four further findings are marked security_relevant for authority-surface reasons rather than vulnerability reasons: the approval-policy responder authentication (0.34.0), the trace-content default flip (0.35.0), extensions gaining the ability to mount channels and schedules (0.38.0), and a child session inheriting the parent's live sandbox (0.39.0).

BOTH HALVES. Twelve of seventeen findings are capability or both; the harvest is not a defect list. The single loudest capability signal is not a feature at all -- it is eve@0.36.0 changing its default agent model from Claude Sonnet 5 to `zai/glm-5.2` in a routine release with a one-line note, verified as a code change (`default-agent-model.ts` plus the setup picker) rather than a docs claim.

VOLUME NOTE FOR THE EDITOR. Eve alone shipped ten minor versions in fourteen days and produced thirteen of the seventeen findings; four of those are breaking changes. I compressed aggressively -- roughly forty release-note entries were read and discarded as noise (dependency bumps, CLI polish, registry search formatting, Windows path fixes, snapshot-copy performance work). If the digest needs fewer, the four I would defend hardest are eve@0.30.0 (the Host-header bypass), eve@0.34.0 (approval policies that authenticate the responder), eve@0.36.0 (the default-model swap), and Flue v2.0.3 (the harness taking ownership of a transitive pin).

An unexpected cross-source echo worth flagging: eve@0.39.0 promoted `chatgpt()` to stable with Codex-owned authentication and local-only deployment safeguards, i.e. a framework borrowing another harness's subscription credential rather than requiring a metered API key. That sits directly on the same axis as Agent Flywheel's published budget, which assumes Claude Max and ChatGPT Pro subscriptions rather than API spend. Two unrelated sources converging on subscription-backed agent execution in the same fortnight may be a thread for the synthesis.

## Surfaces checked

- sources/flue.yml + sources/flue.notes.md (contract read first)
- sources/eve.yml + sources/eve.notes.md (contract read first)
- sources/agent-flywheel.yml + sources/agent-flywheel.notes.md (contract read first)
- github.com/withastro/flue -- repo metadata, tags (27), releases (empty, as the contract predicts), main-branch commits 2026-08-03..2026-08-18, branches, merged PRs in window (0)
- github.com/withastro/flue CHANGELOG.md pinned at v2.0.2 (a171cc1) and v2.0.3 (bf86b87)
- flueframework.com homepage
- flueframework.com/docs/reference/agent-behavior/ (new reference page announced in v2.0.2)
- github.com/withastro/flue security advisories (none published)
- github.com/vercel/eve -- repo metadata, full paginated release list, release notes for eve@0.30.0 through eve@0.39.0 and every 0.30.x/0.31.x patch in window
- github.com/vercel/eve compare API for tag-containment ancestry on 12 change commits
- github.com/vercel/eve security advisories (none published)
- github.com/Dicklesworthstone/agentic_coding_flywheel_setup -- releases (7, newest v0.7.0 2026-06-26), tags (7, same set), main-branch commits in window (55)
- github.com/Dicklesworthstone/agentic_coding_flywheel_setup README.md pinned at the v0.7.0 dereferenced commit edaee4f
- github.com/Dicklesworthstone/agentic_coding_flywheel_setup security advisories (none published)
- agent-flywheel.com homepage
