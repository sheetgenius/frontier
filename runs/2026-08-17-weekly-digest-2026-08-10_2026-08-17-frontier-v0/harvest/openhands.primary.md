---
schema_version: bitter.frontier_harvest.v0
provider: openhands
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/openhands.yml
channels_present: [tagged-release, main-unreleased, docs-only]
window_volume: 10 material changes, 3 capability-bearing, 4 defect-bearing, 2 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- openhands (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. The OpenHands release line passed 1.11.0 a second time -- and nothing broke, because the second one wears a v

- **Date:** 2026-08-07
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** git ls-remote --tags returns BOTH refs/tags/1.11.0 -> 11ca68ab2e15dcd85c21e4d7d3409e7a259369ac and refs/tags/v1.11.0 -> 3c562fa694e54741f41ad7acf7210430079495fe. gh api repos/OpenHands/OpenHands/compare/1.11.0...v1.11.0 returns {"status":"ahead","ahead_by":955,"behind_by":0}, so they are one line, 955 commits apart, not a fork. gh api releases/tags/v1.11.0 returns prerelease=false, draft=false. gh api repos/OpenHands/OpenHands/releases/latest returns tag_name v1.14.0, prerelease=false, published_at 2026-08-17T21:41:36Z; compare/1.11.0...v1.14.0 returns status ahead, ahead_by 1001, behind_by 0.
- **Receipt:** https://github.com/OpenHands/OpenHands/releases/tag/v1.11.0
- **Half:** neither | **Confidence:** high

**What changed.** Six stable releases landed in the window on the migrated Agent Canvas number series: v1.9.0 (2026-08-03), v1.10.0 (08-05), v1.11.0 (08-07 18:01 UTC), v1.12.0 (08-07 19:33 UTC), v1.13.0 (08-13), v1.14.0 (08-17). On 2026-08-07 the series reached 1.11.0 -- the exact number the pre-migration OpenHands agent line had already published on 2026-07-09. The release automation did not collide, error, or acknowledge it: v1.11.0 and 1.11.0 are different git refs, so Release Please created the tag and the GitHub release cleanly and npm-publish ran green. Both release bodies title themselves the same way -- the July release opens '## 1.11.0 (2026-07-09)' and the August release opens '## 1.11.0 (2026-08-07)'. The repo now carries two stable releases numbered 1.11.0 whose only distinguishing mark is a lowercase v. The line then kept climbing past the collision: v1.12.0, v1.13.0, v1.14.0, and GitHub currently marks v1.14.0 as Latest. The old unprefixed series has published nothing since 1.11.0 on 2026-07-09; the cloud-* series has published nothing since cloud-1.47.1 on 2026-07-21.

**Operator consequence.** Re-audit any automation that resolves OpenHands versions by string or semver rather than by exact ref. 'Latest' on the release page is now v1.14.0, but the repo also contains 1.11.0 from July with different content, and a tag matcher written as ^v?1\.11\.0$ will match two different commits 955 apart. Pin container digests and npm versions, not tag patterns. If you were watching the unprefixed release feed for the OpenHands agent, that feed is dead -- it went silent on 2026-07-09 and the agent now ships from OpenHands/software-agent-sdk, OpenHands/automation, and OpenHands/OpenHands-Cloud.

## 2. GitHub said v1.13.0 was Latest for four days while npm still served 1.12.0

- **Date:** 2026-08-13
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Workflow run 31659305449 on ref v1.13.0: created_at 2026-08-13T01:57:01Z, run_attempt 2, run_started_at 2026-08-17T16:48:11Z, conclusion success. Attempt 1 (gh api .../attempts/1) returns conclusion failure, updated_at 2026-08-13T02:05:29Z, with step 'Run tests' = failure and every publish step skipped. Registry cross-check: registry.npmjs.org/@openhands/agent-canvas time["1.12.0"]=2026-08-07T19:41:56.110Z, time["1.13.0"]=2026-08-17T16:53:44.291Z. Tag v1.13.0 is a non-prerelease GitHub release published 2026-08-13T01:57:00Z.
- **Receipt:** https://github.com/OpenHands/OpenHands/actions/runs/31659305449
- **Half:** defect | **Confidence:** high

**What changed.** The v1.13.0 tag push cut the GitHub release immediately on 2026-08-13, but its npm publish job failed at the 'Run tests' step and skipped every build and publish step after it. A second attempt was started manually on 2026-08-17 at 16:48 UTC and succeeded at 16:53. For four days and fifteen hours the GitHub releases page presented v1.13.0 as the Latest release of the project while `npm install -g @openhands/agent-canvas` -- the install command the project's own homepage prints -- resolved to 1.12.0. This is the second npm publish failure on this line: the v1.7.0 run (30497136947, 2026-07-29) also failed, and npm has no 1.7.0 at all; the registry jumps 1.6.1 to 1.7.1.

**Operator consequence.** Re-audit: stop treating a GitHub release as evidence that an artifact shipped. The release is created by the tag push; the artifact is created by a job that can fail after it. If you are pinning OpenHands Agent Canvas, read the version from the registry or the image digest, not from the releases page. The gap is not theoretical -- it has now happened twice on this line in three weeks, once leaving a released version permanently absent from npm.

## 3. The default model changed twice in fourteen days, both times to a free OpenHands-routed endpoint

- **Date:** 2026-08-17
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #16657 merge commit 8989bf3bb5762041baa52b91ecf1f347f9360db4 (merged 2026-08-17T19:12:29Z); gh api compare/8989bf3bb5762041baa52b91ecf1f347f9360db4...v1.14.0 returns status ahead, ahead_by 1, behind_by 0. PR #16146 merge commit 246dbd48c3705511b2c1c94f113072f1184027f5 (merged 2026-08-03T21:04:10Z); compare/246dbd48c...v1.10.0 returns status ahead, ahead_by 21, behind_by 0. PR #16281 merge commit 7d897d766990088da90af1a697b6293a107442e7; compare/7d897d766...v1.12.0 returns status ahead, ahead_by 1, behind_by 0. All three tags are non-prerelease GitHub releases.
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/16657
- **Half:** capability | **Confidence:** high

**What changed.** Agent Canvas's default LLM moved from MiniMax M2.7 to openhands/glm-5.2 in v1.10.0 (PR #16146, merged 2026-08-03) and from GLM 5.2 to openhands/kimi-k3 in v1.14.0 (PR #16657, merged 2026-08-17). Both PRs change DEFAULT_SETTINGS.llm_model, the agent_settings default, and ONBOARDING_DEFAULT_LLM_MODEL, and both add the new model to FREE_OPENHANDS_MODELS listed first. In between, v1.12.0 shipped a single feature (PR #16281) whose stated purpose was that 'only the OpenHands-routed endpoints are free' and that users were confusing openhands/glm-5.2 with similarly named non-OpenHands provider endpoints. The Enterprise SaaS default moved to GLM 5.2 on the same footing (Enterprise 0.41.0 release notes, OpenHands/enterprise PR #89).

**Operator consequence.** Pin, don't inherit. If you run Agent Canvas and never set llm_model in your profile, the model underneath your agents changed twice in fourteen days -- including a change to a model family from a different vendor -- and the change arrives on upgrade with no migration note. Set llm_model explicitly in the profile for anything whose output you compare across time, and note that the free tier is free only through the openhands/ prefix; the same model name from a direct provider endpoint bills you.

## 4. Context window meter, usage drawer, and manual compaction shipped in v1.13.0

- **Date:** 2026-08-10
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #16311 merge commit be636f7141095e7b45e33bead116f070a2446a6e, merged 2026-08-10T16:04:30Z. gh api repos/OpenHands/OpenHands/compare/be636f7141095e7b45e33bead116f070a2446a6e...v1.13.0 returns {"status":"ahead","ahead_by":10,"behind_by":0}. v1.13.0 is a non-prerelease GitHub release published 2026-08-13T01:57:00Z.
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/16311
- **Half:** capability | **Confidence:** high

**What changed.** Agent Canvas gained a context-window usage meter, a usage drawer, and an operator-triggered manual compaction, contributed by @georgeglarson and merged 2026-08-10. The PR body records verification against a live agent-server 1.39.1 with compaction exercised across multiple models, and a follow-up fix in the same release (#16534) corrects how the meter ring is drawn. Documentation for it merged in OpenHands/docs #722 on 2026-08-14.

**Operator consequence.** Try it if you run long conversations. Until now compaction was something that happened to you at a threshold you could not see; the meter makes context consumption legible and the manual trigger lets you compact at a point you choose -- before a handoff, before a long tool run -- rather than mid-reasoning. This is the kind of instrumentation that turns an opaque budget into an operator decision, and it is worth copying in any harness you maintain yourself.

## 5. Launcher services no longer spawn through an implicit shell

- **Date:** 2026-08-11
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #16093 merge commit 2e1502f39d8f7357fca35c6c18cc2c0dadcf0da3, merged 2026-08-11T14:50:54Z. gh api repos/OpenHands/OpenHands/compare/2e1502f39d8f7357fca35c6c18cc2c0dadcf0da3...v1.13.0 returns {"status":"ahead","ahead_by":5,"behind_by":0}. v1.13.0 is a non-prerelease GitHub release published 2026-08-13T01:57:00Z.
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/16093
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** getProcessTreeSpawnOptions() previously spread caller-supplied spawn options without neutralizing an explicit shell: true, so a service could be launched through cmd.exe with its arguments subject to shell metacharacter interpretation. The reported symptom was concrete: the default agent-server uvx argument 'agent-client-protocol<0.11' had its '<0.11' parsed by cmd.exe as input redirection, the agent-server exited before binding port 18000, and ingress returned Bad Gateway. The fix forces shell: false centrally and adds a cross-platform regression test proving the literal string reaches the child executable even when a caller passes shell: true. Shipped in v1.13.0.

**Operator consequence.** Upgrade past v1.13.0 if you run the Windows launcher, and re-audit your own spawn paths for the same shape. No advisory was filed and the demonstrated impact is a launch failure, not a proven injection -- but a process-spawn helper that lets a caller re-enable shell interpretation of arguments it did not author is a shell-injection surface waiting for the argument to come from somewhere less trusted than a hardcoded version constraint. The maintainers' own framing is that centralizing the guarantee, rather than fixing the one caller, is the point.

## 6. A fix that stops the agent silently starting under the wrong profile missed v1.14.0 by 49 seconds

- **Date:** 2026-08-17
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** PR #16523 merge commit e9ca71d138a658ea15d930b2be3a5b28c251a7f2, merged 2026-08-17T21:40:47Z. gh api repos/OpenHands/OpenHands/compare/e9ca71d138a658ea15d930b2be3a5b28c251a7f2...v1.14.0 returns {"status":"behind","ahead_by":0,"behind_by":1} -- v1.14.0 is behind the commit, so the commit is NOT in the tag. gh api compare/v1.14.0...main lists e9ca71d13 as one of exactly three commits main is ahead by. No tag contains it as of 2026-08-17.
- **Receipt:** https://github.com/OpenHands/OpenHands/pull/16523
- **Half:** defect | **Confidence:** high

**What changed.** Agent Profile activation in Agent Canvas is pointer-only, so the global agent_settings block may describe a different agent than the profile does. When /api/agent-profiles failed during front-page launch, the client silently fell back to those global settings and could start the wrong ACP agent. PR #16523 propagates the profile-discovery failure out of useCreateConversation and blocks conversation creation on stale inline agent_settings, replacing the regression test that had codified the unsafe fallback. It merged at 21:40:47 UTC on 2026-08-17; v1.14.0 was published at 21:41:36 UTC and does not contain it.

**Operator consequence.** Watch, and do not assume the latest release has it. As of the window close this fix exists only on main -- v1.14.0 and every release before it still fall back to global settings when profile discovery errors, which means a transient API failure can start an agent other than the one your profile names, with that agent's tools and permissions, and no visible signal. This is exactly the class of failure that makes a profile a suggestion rather than a control. Wait for v1.15.0, or verify the running agent identity rather than trusting the profile you selected.

## 7. The docs finally state where OpenHands lives now -- and that host-process mode has no container isolation

- **Date:** 2026-08-12
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** OpenHands/docs PR #688, merge commit 53ac00f3d127cbef311681f929a92dc65b019d54, merged 2026-08-12T19:24:22Z, 24 files, +1659/-1058, approved by jpelletier1 2026-08-12T14:39:32Z after review rounds from enyst, DevinVinson and smolpaws. Content read at the pinned merge commit, not at main. Docs-only channel: this is the documentation repository; no code surface in OpenHands/OpenHands changed with it. Repo-visibility claims verified independently: gh api repos/OpenHands/enterprise and repos/OpenHands/runtime-api both return 404; OpenHands/agent-canvas and OpenHands/legacy both return archived=true in gh api orgs/OpenHands/repos.
- **Receipt:** https://github.com/OpenHands/docs/blob/53ac00f3d127cbef311681f929a92dc65b019d54/openhands/usage/agent-canvas/architecture.mdx
- **Half:** neither | security-relevant | **Confidence:** high

**What changed.** The tracking issue (OpenHands/docs#686, opened 2026-08-04) states the new boundaries plainly: OpenHands/OpenHands is now the home of Agent Canvas; OpenHands/agent-canvas is an archival pointer; OpenHands/legacy preserves the prior monorepo snapshot; OpenHands/enterprise is now private; the previous frontend is deprecated in favor of Agent Canvas. PR #688 rewrites the docs to match and adds a canonical architecture page that separates Agent Canvas (React browser client, 'not an agent runtime or sandbox') from Agent Server (execution, in OpenHands/software-agent-sdk), Automation Server (OpenHands/automation), and the workspace or sandbox that 'defines which files, processes, credentials, and networks an agent can access'. Its execution table says of host-process mode, verbatim: 'Agent Server and tools run directly on the backend host without container isolation. If the backend is remote, that host -- not the browser's machine -- is the execution boundary.'

**Operator consequence.** Re-audit your mental model and your threat model. Two things changed under operators without a code release: the repository you were watching is now a different product, and the isolation guarantee you may have assumed from 'it runs in Agent Canvas' does not exist -- Canvas is a browser client, and in host-process mode the agent runs on the backend host with no container between it and the filesystem. If you self-host, confirm which backend mode you are actually in before deciding what the agent can reach. Also note the docs' own boundary: Sandbox Server is now described as community-driven and explicitly not a core or supported Agent Canvas backend.

## 8. Enterprise conversations are force-paused at 12 hours, and the cap is not configurable

- **Date:** 2026-08-13
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** OpenHands/docs PR #718, merge commit 30d3bf45e31897db395e8c5c43b4b326512be887, merged 2026-08-13T18:51:54Z, +26 lines in enterprise/conversations-and-sandboxes.mdx and +8 in enterprise/vm-install/admin-console-configuration.mdx. Docs-only: the PR body states it 'clarifies the behavior without exposing any new configuration', i.e. no code channel accompanies it and the underlying code is in the now-private Enterprise repositories.
- **Receipt:** https://github.com/OpenHands/docs/pull/718
- **Half:** neither | **Confidence:** high

**What changed.** Prompted by customer questions about running conversations indefinitely, the Enterprise docs now document three limits that were previously only alluded to as 'cleaned up due to idle timeout'. Idle Time pauses an idle conversation's sandbox and is reset by activity; Deletion Time permanently deletes a paused conversation and its storage. Both are admin-console settings. Separately, and verbatim: 'a single running session is capped at a maximum of 12 hours. This cap applies even to a continuously-active conversation: once a session has been running for 12 hours it is force-paused. Resuming the conversation starts a new 12-hour window. This maximum session duration is not currently configurable.' The docs also state these limits are deployment-wide and cannot be set per conversation or per Agent Profile -- Agent Profiles configure model, tools, and behavior, not sandbox lifetime.

**Operator consequence.** Adapt if you run long jobs on Enterprise. Any agent task that could exceed twelve hours must checkpoint its state somewhere that survives a force-pause and be resumable, because the pause will happen mid-work and there is no setting to raise the ceiling. This also closes off a design many teams reach for: you cannot give a heavyweight profile a longer lifetime than a lightweight one, because lifetime is a deployment property and profiles do not touch it.

## 9. The bot-driven docs train ran out of order and lost a version

- **Date:** 2026-08-14
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** gh api search/issues over repo:OpenHands/docs for 'update documentation for OpenHands' in title: #722 (v1.13.0) merged 2026-08-14T00:35:58Z; #714 (v1.11.0) merged 2026-08-14T12:51:14Z; #693 (v1.10.0) merged 2026-08-14T12:50:55Z; #712 (v1.12.0) state=open, draft=false, created 2026-08-10T13:38:21Z, still open at window close; #684 (v1.9.0) merged 2026-08-04T17:57:52Z; #675 (v1.7.0) merged 2026-08-03T17:38:23Z for a release published 2026-07-29. A search for v1.14.0 across repo:OpenHands/docs returns zero results. All authored by all-hands-bot.
- **Receipt:** https://github.com/OpenHands/docs/pull/712
- **Half:** defect | **Confidence:** high

**What changed.** Documentation for this release line is produced by an agent (all-hands-bot) opening one PR per release, and in this window the train desynchronized from the releases it describes. v1.13.0's docs merged at 00:35 on 2026-08-14; v1.10.0's and v1.11.0's merged twelve hours later the same day, nine and seven days after their releases. v1.12.0's docs PR (#712, opened 2026-08-10, with a duplicate #707 also open) was never merged and was still open when the window closed. v1.14.0, the release GitHub currently marks Latest, has no docs PR at all. v1.7.0's docs landed five days after the release. So docs.openhands.dev describes v1.13.0 features while omitting v1.12.0's and v1.14.0's, and it acquired v1.13.0's documentation before v1.10.0's.

**Operator consequence.** Do not use the docs as the version-of-record. If you are evaluating whether a feature exists in the build you run, check the release notes and the code at the tag, not docs.openhands.dev -- the docs can be up to nine days behind, can describe a newer release before an older one, and can skip a version entirely. The deeper lesson for anyone automating their own docs: a per-release bot PR gives you the appearance of a synchronized changelog with none of the ordering guarantees, because nothing merges the queue in sequence.

## 10. Enterprise can now chain its built-in LiteLLM to a customer's own LLM gateway

- **Date:** 2026-08-14
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** OpenHands/docs PR #702, merge commit ee751c973fb55ff4a595875abd88428ef96e978b, merged 2026-08-14T19:06:04Z. Files: enterprise/integrations/external-llm-gateways.mdx added (+630) and docs.json nav (+2). Docs-only: the Enterprise code it describes lives in the private OpenHands/enterprise repository (gh api -> 404), so no code channel can be resolved and no ancestry established.
- **Receipt:** https://github.com/OpenHands/docs/pull/702
- **Half:** capability | **Confidence:** medium

**What changed.** A new 630-line Enterprise integrations page documents pointing OHE's built-in LiteLLM instance at a customer's existing OpenAI-compatible gateway (LiteLLM or Bifrost) rather than at LLM providers directly, including how to attribute traffic per team and per user as it traverses both gateways. The PR is explicit that OHE does not point the runtime at an external gateway directly -- the built-in instance forwards.

**Operator consequence.** Study it if you already run a gateway as your routing, rate-limiting, audit and cost point of record and were told OpenHands Enterprise would displace it. The documented pattern keeps your gateway authoritative and makes OHE a client of it, which is the right shape: the platform gets convenience, you keep the ledger. Note the caveat, though -- traffic passes through two gateways, so per-user attribution depends on OHE forwarding identity correctly, and the code that does that forwarding is in a repository you cannot read.

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
