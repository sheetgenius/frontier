---
source: temporal-agent-harness
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
window: 2026-09-21..2026-10-13
profile_date: 2026-10-13
verified_on: 2026-10-14
install_today_correct: true
verified: 4
corrected: 5
refuted: 0
unverifiable: 0
---

# Adversarial crosscheck: temporal-agent-harness

Disposition: CORRECT BEFORE PROMOTION. The release and install-channel answers are right. Five of the nine numbered sections need narrower claims, and four material omissions need recording. Counts above classify the nine numbered sections only. Unsupported assertions inside a corrected section are explicitly REFUTED below; they are not silently accepted because the section's core is sound.

`install_today_correct: true` refers to the requested version/channel check: 0.6.0 is the newest PyPI release through 2026-10-13, GitHub has no non-prerelease stable release or latest release, and the three npm latest tags point to 0.1.0. It does not approve the entire install box: its artifact-identity claim, blanket session-reset instruction and unqualified advisory summary need the corrections below.

## Scope and independent method

Read AGENTS.md's authorities in order, the researcher brief, source contract and notes, current profile, prior harvest and the assigned harvest. Reviewed the receipts as evidence, not instructions. Used the independent blobless, no-checkout clone at `/Users/c3po/co/frontier/tmp/refresh-2026-10-13/clones/temporal-agent-harness-verify`. Read source with `git show`, compared trees and ran `git merge-base --is-ancestor` independently. Downloaded wheel and npm archive bytes for inspection and hashing only. No cloned code, installation, build, replay test or exploit was executed.

Registry and GitHub API observations below were made on 2026-10-14 and filtered against the 2026-10-13 cutoff. They corroborate the recorded channel state; they are not archived observations made on 2026-10-13. Code receipts use full SHAs. Release pages use named tags; PR receipts were resolved to their merge SHAs. Registry responses, release flags, environment settings and advisory records remain mutable metadata, not SHA-pinned historical configuration.

Independent identity check matches temporal-community/temporal-agent-harness, created 2026-06-18, MIT, not archived. The community organization's support disclaimer remains distinct from Temporal authorship. LICENSE and CODEOWNERS have no change between the baseline and checked main head. [Repository metadata][repo-api], [organization metadata][org-api], [pinned license][license].

## Channel truth and release ledger

`gh release list` returned six releases, 0.1.0 through 0.6.0, all prereleases, none drafts and none latest. `/releases/latest` returned 404. Thus there is no GitHub stable release to recommend. PyPI has non-yanked 0.3.0, 0.4.0, 0.5.0 and 0.6.0; its newest normal version is 0.6.0, with Python >=3.11 and a Pre-Alpha classifier. No newer version appeared in the independent enumeration. Under the source contract these remain preview-or-beta, despite PyPI's non-prerelease version syntax. [Release enumeration][releases-api], [latest endpoint][latest-api], [PyPI metadata][pypi-api].

| Pin | Full commit | Commit time, UTC | GitHub publication, UTC | PyPI wheel upload, UTC | Ahead / behind |
| --- | --- | --- | --- | --- | --- |
| T4: 0.4.0 | e4bde4beb078d7ec3432c84b71e64e1efd554752 | 2026-09-16 01:34:53 | 2026-09-15 23:46:50 | 2026-09-16 01:42:54.474838 | 7 / 0 versus 0.3.0 |
| T5: 0.5.0 | 4cef523a285b0c585f169678e1dbbf5e7644c98f | 2026-09-30 21:53:04 | 2026-09-30 21:58:56 | 2026-09-30 22:02:16.175260 | 17 / 0 versus T4 |
| T6: 0.6.0 | 04a49d1b037de46da2cba31676d2aa2f4c59118f | 2026-10-03 00:47:50 | 2026-10-03 00:48:08 | 2026-10-03 00:51:06.276727 | 4 / 0 versus T5 |
| M: checked main head | 091c8756126ca9684e0b8fe57d82d9122c29f517 | 2026-10-12 23:58:41 | Not released | Not published | 8 / 0 versus T6 |

The ledger's times, versions and counts check out. There are 21 commits T4..T6, including three before the window, and eight additional commits at M. There are 26 main commits dated within the window. The 0.4.0 publication predating its present target is real, not a date transcription error. [0.5.0 release][release5], [0.6.0 release][release6], [T4 to T5 comparison][compare45], [T5 to T6 comparison][compare56], [T6 to M comparison][compare6m].

| npm package | Versions and latest | 0.1.0 publication, UTC |
| --- | --- | --- |
| @temporalio/agent-harness-client | Only 0.1.0; latest=0.1.0 | 2026-09-30 16:03:45.605 |
| @temporalio/agent-harness-react | Only 0.1.0; latest=0.1.0 | 2026-09-30 16:12:35.312 |
| @temporalio/agent-harness-svelte | Only 0.1.0; latest=0.1.0 | 2026-09-30 16:11:37.391 |

All three registry records name gitHead `faec13de3ee346597f179ee8cb9c8e474beeb03b`. Independently read complete registry time/version/dist-tag data and each version's metadata and tarball. No later version or dist-tag was found. [Client registry][npm-client], [React registry][npm-react], [Svelte registry][npm-svelte]. PyPI has no npm-style latest dist-tag; say "newest compatible PyPI version" rather than treating info.version as an unconditional resolver guarantee.

## Receipt and ancestry audit

Opened the numbered sections' code receipts at their supplied full SHAs, plus the release bodies, linked PRs, referenced commit changes, action runs and environment API. No supplied code blob relies on main or HEAD. The environment API in section 5 is the material unpinned configuration receipt; its current state cannot prove an unbroken historical policy. Versioned PyPI/npm records and advisory IDs identify releases or disclosures, but are not immutable code snapshots.

Independent `git merge-base --is-ancestor` results, with exit 0 meaning contained and exit 1 meaning absent:

| Section | Change checked | T4 | T5 | T6 | M |
| --- | --- | --- | --- | --- | --- |
| 1 | d7a55f8855c31eb1a3281d2502f626c8a153aa44, CORS | 1 | 0 | 0 | 0 |
| 2 | e62c778b4abbde588204c0ac294f35d4d46bfa33, first-class messages | 1 | 0 | 0 | 0 |
| 2 | 6285ba709ef30405ab85e84d43f54f02e069d04c, agent.defn | 1 | 0 | 0 | 0 |
| 2, 5 | faec13de3ee346597f179ee8cb9c8e474beeb03b, init data/npm gitHead | 1 | 0 | 0 | 0 |
| 3 | 1d19ec93657006f7b8d4e03b38a4ddedd7c829ac, auto mode | 1 | 0 | 0 | 0 |
| 3 | 70842387b6fb4e87b8d0fdff60c6fb1b2068468e, audit panel | 1 | 0 | 0 | 0 |
| 4 | 2d0c06bdeaf08e80500256ebd3c5405e9a342e01, Code Mode | 1 | 1 | 0 | 0 |
| 5 | 762e692acc8f5444656fed5d2e7cc48e6391f9f0, npm publishing | 1 | 0 | 0 | 0 |
| 6 | d2e7abc74d28d2248f8659cf577b438a96706ee4, Nexus rename | 0 | 0 | 0 | 0 |
| 7 | d54bef90153a5201aff680cfa36b921bea7cc2e4, chat server | 1 | 0 | 0 | 0 |
| 8 | 4b8798de9fa5fc90c52ebbef2748db2312e226b6, Gemini | 1 | 1 | 0 | 0 |

For section 9, all eight commits are absent from T6 and every published tag, and present at M: `049e01c9d726ef68bff7be857c735723b9801512`, `f843bc8b66a5c20b6f319fccafbeb48918ad9274`, `c0f148f90499728a1fd305d7229113970c305f1a`, `f50412138cab078f19c54e683e7ba5e529323f17`, `30b0c7f0affb0629cac4c846d0cb88589571e484`, `a1cd66f4ffa0aead976ccf86d0ff84a50deb5383`, `a794e3715a043d607c707cc3f3520e17ac18afe7`, and M. The three 0.5.0 misses below are also absent from T4 and present at T5, T6 and M.

## 1. Wildcard CORS and unauthenticated server: CORRECTED

Confirmed the 2026-09-17 CORS commit first shipped in 0.5.0 on 2026-09-30. T5 and T6 app.py lines 176-184 install wildcard origins, methods and headers; CLI line 149 and serve.py line 44 default to 0.0.0.0. Session creation, messages, approval and callback-result routes contain no caller authentication. T6 has 11 justfiles explicitly binding that host, versus eight at T4. README lines 933-938 describe auth middleware as something a self-hosted app could add. M retains this posture. [T5 app][t5-app], [T6 app][t6-app], [CLI][t6-cli], [server][t6-serve], [README][t6-readme], [CORS commit][cors-commit].

Exact corrections:

- Replace "lists running sessions ... with each session's first user message" with "combines manager sessions with a discovery query capped at 200 workflows; includes a first-message preview when found within the bounded history scan." app.py lines 481-554 and the 96-event preview limit at line 66 disprove the exhaustive wording.
- Replace unconditional browser access with "permits cross-origin reads and JSON requests when the browser and network allow the page to reach this unauthenticated endpoint." Wildcard CORS is confirmed; reachability on a particular browser is not. The harvest's "LAN" versus "any web page" framing must not imply that every browser can reach loopback or that 0.4.0 was categorically browser-safe.
- Retain the security consequence: an allowed network/browser path to these endpoints conveys approval and message authority. Label that as source-derived exposure, not a successful live exploit.

## 2. First-class messages and approval-policy handlers: VERIFIED

Confirmed #137 first shipped in T5. The removed slash-command module/routes and removed expected_turn/is_message_queuing_enabled fields are absent at T6. Read the pinned message-dispatch change, T6 subagent_toolset.py lines 18-29 and 57-109, both example policy handlers, HTTP create_session and runner configuration precedence. `model_callable=False` is not an authorization boundary: a parent policy can expose such handlers, and HTTP/chat clients can address them. The example handlers can select skip-all, and a policy relaxation re-evaluates pending calls. HTTP session creation supplies an empty AgentConfig; Temporal callers can supply policy overrides. [Message change][message-commit], [subagent policy][subagent], [Monty handler][monty-policy], [auto-mode handler][auto-policy], [T6 app][t6-app], [runner][runner].

Date/channel are correct: the September 17 implementation was a prior-window main-only item, newly installable in the September 30 prerelease. The migration list is incomplete, not false; see miss M4 for state and lifecycle breaks.

## 3. Auto mode and the Jev evaluator: CORRECTED

Confirmed the September 22 merge reached T5 and the Jev extra exists in T5/T6. The generic gate consumes approve/deny decisions, escalates errors or unusable results, and lets a human decision cancel the pending evaluation. A confident deny can finish without a person. The release note's broader claim that every non-approval reaches a human is contradicted by the code. The built-in evaluator sends the tool name, description, arguments, criteria and optional extra_state to the System One activity; its default model is jev-latest. The external TypeSafe integration's pinned README recommends a fixed model version. [PR 142][pr142], [runner lines 480-628 and 2494-2622][runner], [criteria and policy][interface], [Jev approver][jev-approver], [Jev activity][jev-activity], [Jev model][jev-model], [TypeSafe README][typesafe-readme].

Exact corrections:

- Prefix the confidence/irreversibility claim with "With the built-in Jev evaluator". Defaults 0.8 and 0.5 are real, but the generic harness does not independently enforce those numerical thresholds on every custom evaluator. AutoApprovalDecision carries a verdict, reason and details; Jev's own decision conversion enforces these thresholds.
- Replace "never consulted ... again in the session" with "bypassed while the tool remains on the by-name allow-list." remember=True adds a name, but subsequent policy replacement or name removal can restore gating; the example policy handler replaces the allowed-name list.
- Retain the history/privacy consequence as an observed activity-input contract. No claim about TypeSafe retention or a successful live evaluation was verified.

## 4. Workflow-local Code Mode and upgrades: CORRECTED

Confirmed #167 merged 2026-10-03 00:40:20 UTC and shipped in 0.6.0 minutes later. T5 registers code_start_batch, code_resume_batch and code_type_check activities; T6 removes their implementation/registration and steps Monty from the workflow. The exact dependency pin changes from 0.0.18 to 1.0.0. There is no old/new execution migration branch or continue-as-new implementation in the package; the patch markers found are abort handling. Missing the extra now raises from the workflow-side driver. [PR 167][pr167], [T5 activities][t5-code-activities], [T5 activity names][t5-batch], [T5 plugin][t5-plugin], [T6 driver][code-driver], [T6 stepper][stepper], [T6 dependency declaration][pyproject].

Exact corrections:

- The watchdog is one second for live execution and a three-second replay backstop, not one second universally. Read monty_stepper.py lines 44-58 and 93-106, and the separate live/replay pools.
- A history has code_resume_batch only if execution resumed after suspension. code_type_check appears only when the separate preflight API was called. Do not say every session that used Code Mode contains all three activity types.
- Host calls pass through runner.run_tool. Activity-backed host tools remain activities; the harness also supports other tool kinds. Replace "only host calls are activities" with "the Monty batch activities disappear; host tools keep their own dispatch semantics."
- The command-sequence change supports an upgrade/replay risk, not a reproduced failure for every existing history. REFUTED as an established remedy: "drain or reset every open session". No reset strategy was tested. Use: "Keep existing Code Mode histories on compatible workers and replay-test/version the cutover before moving them to 0.6.0. No compatibility path was found in this change." A blind reset can replay the same incompatible history prefix.

Monty 1.1.0 was published on 2026-10-05 and its release documents changed script semantics, including boolean arithmetic; the harness remains pinned to 1.0.0. This is not evidence of a Monty advisory. [Monty 1.1.0 release][monty110].

## 5. Release integrity, review gate and npm provenance: CORRECTED

Confirmed successful release-event runs 36782833724 at T5 and 37083572183 at T6, with tests, build, version check and publication successful. Check-runs include Python 3.11-3.14 and the committed-UI/source check. Current pypi environment metadata specifies one reviewer, self-review permitted, admin bypass permitted and numeric-version tag deployment rules. Read run approval histories: the release author's account approved both new uploads and the four cited earlier approval events. [T5 publish run][run5], [T6 publish run][run6], [environment API][environment], [tag policy API][env-policy], [pinned publishing workflow][publish].

Independent wheel SHA-256 values match PyPI:

- 0.5.0: `d0b1f055c8c66a91de0406d632f92cf3947ead898c5550ccb2b679513a9adbef`
- 0.6.0: `9a6a15bf3804a6ec6754b4dd7108435bbc396d4b986a60bcdcd721c5f475f534`

Every one of the 100 packaged files under temporal_agent_harness/ matches its tag byte-for-byte in each wheel. But each tag has four additional files absent from the wheel: ai_sdks/google_genai_plugin/justfile, ai_sdks/openai_agents/README.md, harness/stream_merge/README.md and nexus_agent_adapter/agent.nexusrpc.yaml. REFUTED literally: "same artifact", "file for file" and an unrestricted directory diff reporting nothing. Exact fix: "Every packaged file matches the release commit; four source-tree support/documentation files are omitted." No runtime failure from those omissions was established. [Versioned 0.5.0 metadata][pypi5], [versioned 0.6.0 metadata][pypi6], [T6 package tree][package-tree].

PR 158 explicitly reports manual publication of all three 0.1.0 npm packages. Their archive hashes match registry metadata; their published manifests differ from the reported gitHead, where they were private and used a different scope. No dist.attestations field, npm release tag or npm-publish workflow run was found. These support "manual and without recorded provenance attestation". REFUTED as proven: "published from an uncommitted tree that matches no commit" and "the published code is current". A manifest difference does not establish the complete build tree, and unchanged packages/client/src does not prove compiled archive equivalence or cover the React/Svelte wrappers. Exact fix: "The published manifests differ from the recorded gitHead; build-to-source equivalence was not verified." [PR 158][pr158], [gitHead manifest][old-manifest], [npm workflow][publish-npm], [client 0.1.0 record][npm-client-version], [React 0.1.0 record][npm-react-version], [Svelte 0.1.0 record][npm-svelte-version].

Also replace "neither tag moved after its release" with "each current tag equals its release-event publishing SHA". Present equality cannot rule out intervening movements. The environment API's created/updated timestamp is 2026-09-11, and historical approval events exist, but current settings alone cannot prove every policy field was continuously identical since then.

## 6. The missing Nexus MCP distribution: CORRECTED

Confirmed T6 wheel metadata requires temporal-nexus-mcp for the nexus-mcp extra without a version/source constraint. T6 pyproject.toml lines 91-108 explicitly describe checkout-only workspace resolution, and nexus/mcp/pyproject.toml names the local package. Both the PyPI simple and JSON endpoints returned 404. The September 4 rename is an ancestor of T4, T5 and T6. The requirement already exists in 0.3.0, initially with a Python >=3.13 marker. [T6 pyproject][pyproject], [local package][nexus-project], [checkout instructions][nexus-readme], [rename commit][nexus-rename], [PyPI JSON endpoint][nexus-pypi], [PyPI simple endpoint][nexus-simple].

REFUTED as established fact: "nobody has registered" the name and "if anyone registers the name". A 404 proves there is no public distribution at that endpoint; it does not prove that a name is available for registration, unreserved, unblocked or unowned.

Exact replacement: "The extra cannot resolve from public PyPI alone as observed. Its unqualified requirement would trust whatever compatible distribution a configured index supplies, if one became available. No malicious publication or dependency-confusion attack was observed." A trusted private index is a different configuration; "do not install from any index" is broader than the evidence. This is newly verified prior posture, not a change on 2026-10-03 or within the window.

## 7. Chat approvals: VERIFIED

Confirmed #143 merged on 2026-09-22 and first shipped in the 2026-09-30 tag as a private, repository-only Node package, outside the wheel/npm releases. The chat directory is unchanged from T5 to T6 to M. Read app.tsx lines 104-112 and 1073-1127: the click handler resolves the pending tool call without a session-owner/permitted-user check, and Always allow sends remember=True. Display name is posted into the conversation, not an approver identity in the harness approval payload. The README exposes all handlers regardless of model_callable; the approval design document still lists identity as future work. [PR 143][pr143], [chat application][chat-app], [chat README][chat-readme], [approval design][approval-doc].

The exact supported boundary is any participant who can reach the bot's approval control under the platform's permissions. No live Slack/Discord test or claim that platform access controls are bypassed is made. The source-based consequence for shared channels is sound.

## 8. Gemini conversation state and retry classification: VERIFIED

Confirmed #165 merged 2026-10-02 00:27:02 UTC, absent at T5 and present at T6, released 2026-10-03. InteractionConversation retains and sends the full conversation rather than relying on prior interaction IDs; five example loops adopt the helper. The helper is available to custom agents, not an automatic rewrite of every application's loop. Read _errors.py beyond the receipt's introductory lines: ClientError 4xx other than 408/429 and equivalent Interactions statuses become non-retryable ApplicationErrors. [PR 165][pr165], [conversation helper][gemini-conversation], [error translation][gemini-errors].

Read run_tool's keyword parameter and the wiki example's explicit injections=None. Passing it explicitly prevents model-supplied kwargs from supplying that injection parameter. Internal subagent examples still show the older unpacking form. Full conversation activity inputs and the 1,500,000-byte offload default support the stated history/storage consequence, without settling Cloud retention. [runner][runner], [wiki example][wiki], [subagent documentation][subagent-doc], [offload defaults][offload]. No provider call was executed to reproduce the PR's reported third-result failure.

## 9. Unreleased filesystem, viewer, memory and TypeSafe: VERIFIED

Confirmed the eight-commit comparison and each commit's exclusion from every release. VFS starts on 2026-10-04, viewer on 2026-10-06, memory on 2026-10-07 and TypeSafe integration at M on 2026-10-12. At M, app.py lines 336-353 expose file view/OKF graph; file_view.py lines 61-74 and 112-133 take caller-supplied filesystem config/task queue and launch a standalone activity without a session identity. The backend's config validation remains the application boundary. Code Mode fs_* calls use the ordinary approval path; a by-name remembered approval covers that operation across mounts while the name remains allowed. [Pinned comparison][compare6m], [M app][m-app], [file viewer][file-view], [filesystem contract][activity-fs], [VFS dispatch][vfs], [memory example][memory-disk], [M README][m-readme].

The typesafe extra is distinct from the existing Jev approver; #179 does not replace that approver. temporalio-typesafe 0.0.1 was published on 2026-10-09 and the official integration README labels its maturity as prerelease. PyYAML is newly in the harness base dependencies at M. None of these harness changes is in 0.6.0. No live viewer exposure was probed. [TypeSafe merge][typesafe-merge], [TypeSafe PyPI record][typesafe-pypi], [pinned TypeSafe README][typesafe-readme], [M dependency declaration][m-pyproject]. The omitted security significance of #175 is miss M3.

## Prior claims re-checked at T6

There is no stable GitHub tag, so these checks use the newest installable tag, 0.6.0, with wheel equivalence limited as section 5 specifies.

| Prior claim | Verdict and independent evidence |
| --- | --- |
| approvals-server-no-login | VERIFIED for the packaged server: wildcard CORS, 0.0.0.0 default and no built-in route authentication persist. Browser exploitability remains conditional. [app][t6-app], [CLI][t6-cli], [serve][t6-serve]. |
| always-allowlists-the-tool | VERIFIED: the shim maps always to remember=True; the runner adds the bare tool name and re-evaluates pending calls. The frontend's patterns do not narrow that server-side grant. [shim mapping][shim], [dialog patterns][shim-backend], [interface lines 455-469][interface], [runner lines 2292-2295 and 2624-2655][runner]. The grant can subsequently be removed. |
| caller-policy-wins | VERIFIED for a Temporal caller: supplied approval_policy and auto_approval_criteria override runner defaults. HTTP start supplies an empty config; exposed example handlers can change policy later. [runner lines 2002-2014][runner], [app][t6-app], [auto-mode handler][auto-policy]. |
| tags-re-pointed | CORRECTED: current T5/T6 match their successful publishing runs; full artifact identity and a never-moved history are not proven. The original 0.4.0 release-event run recorded 16bb1bdf3badbd18f625bc04f111dc82f16d87fd, different from current T4. The original 0.3.0 target remains unconfirmed here. [old 0.4.0 run][old-run4], [T5 run][run5], [T6 run][run6]. |
| Durability and retries | VERIFIED with precise wording: activity tools default to a 30-second start-to-close timeout and no explicit harness retry override. That does not mean the Temporal SDK performs no retries or guarantees exactly-once side effects. The README's no-double-run line is a claim, not a demonstrated universal guarantee. [runner lines 3769-3775][runner], [README lines 218-223][t6-readme]. |
| History/offload posture | VERIFIED default: local /tmp/temporal-large-payloads, threshold 1,500,000 bytes. No built-in codec/encryption implementation was found in the package. That does not exclude encryption supplied by an application's Temporal client. Cloud retention and reader permissions remain unverified. [offload][offload]. |
| Skip-all defaults | VERIFIED seven T6 examples: agent_dag step agent, wiki_agent, monty/workflow, nexus_hello, openai_hello, pydantic_ai_hello and react_agent. These are example defaults, not the universal library default. [example tree][examples], [DAG step agent][dag-step], [wiki][wiki]. |
| Main ahead of wheel | VERIFIED supersession: #137 reached T5; the new eight-commit gap contains different work. [comparisons][compare45], [T6 to M][compare6m]. |

The October 8 maintainer reply on #174 supports the stated intended rule that tightening policy does not revoke an already approved invocation; it is attributed commentary, with the code independently checked for pending-call re-evaluation. [Issue comment][policy-comment]. The four profile watch items resolve as the harvest says: no new server auth/loopback default, messages and auto mode released in T5, and Cloud payload retention still unsettled.

## Misses

### M1. Console state-patch prototype-chain guard shipped in 0.5.0

Date: 2026-09-29 05:49:29 UTC commit, released 2026-09-30. Channel: preview-or-beta, T5 and T6 console, including the packaged UI.

Commit 421636d5900320233df9f0096809b4462123ff04 (#152) adds a forbidden-token guard for __proto__, constructor and prototype before applying JSON state patches. The earlier walker follows ordinary object properties; a crafted patch path could write through the prototype chain rather than only the intended state document. The shipped guard rejects those paths. This is a concrete security hardening change affecting data rendered by the operator's console, not merely UI polish. No CVE or live exploit is claimed. [Pinned change][console-guard], [T6 guard lines 74 and 124-128][json-patch], [state projection consumer][state-projection].

The change includes rebuilt console assets; independent wheel/tag comparison and the source/dist CI check corroborate distribution. Do not misattribute this to the npm client: packages/client has a separate patch implementation with its own earlier own-property checks.

### M2. DAG Studio and Code Mode preflight checking shipped in 0.5.0

Date: 2026-09-30 21:14:08 UTC commit, released the same day. Channel: preview-or-beta; the DAG Studio is a repository example, while code_mode_type_check is in the Python package.

Commit 2d2a4b3841050190599e08e947d85b3c5d8323b7 (#156) adds separate generate, check and execute steps. Generated code can coordinate fresh subagents sequentially or in parallel with per-step configuration. That makes the plan an inspectable artifact before the operator runs it; the preflight API reports syntax/type errors without dispatching host tools. The harvest mentions code_type_check only as an old activity name, missing this operator workflow and public API. [Pinned change][dag-commit], [DAG workflow][dag-workflow], [DAG README][dag-readme], [public checking API][code-tool].

Do not repeat the absolute claim that checking never executes script code: at T6 monty_stepper.py lines 289-317 explicitly starts a clean script until its first suspension or a brief time limit, then discards it; it does not answer host calls. The example's step agent defaults to skip-all, so plan inspection is not a substitute for tool authorization. [Stepper][stepper], [step-agent policy][dag-step].

### M3. A main-only dependency rollup updates the root lock; released and Nexus locks still contain affected versions

Date: advisories published 2026-09-29 through 2026-10-05; harness rollup committed 2026-10-08 06:05:04 UTC. Channel: affected versions in T5/T6 repository lockfiles; root-lock updates only on main, beginning f50412138cab078f19c54e683e7ba5e529323f17 (#175). The separate nexus/mcp lock remains unchanged at M.

The harvest lists #175 only as one of eight commits and says there are no advisories. There are no public advisories assigned directly to this harness in the checked surfaces, but 19 in-window GitHub advisories match four dependencies in its release lockfile. These are dependency-version matches, not 19 demonstrated harness vulnerabilities. [Pinned rollup][dependency-rollup], [T6 root lock][lock6], [updated root lock][lock-fixed], [M Nexus lock][nexus-lock].

| Dependency | T5/T6 root lock | Root lock after #175 | Separate Nexus lock at T6 and M | Install/reachability qualification |
| --- | --- | --- | --- | --- |
| PyJWT | 2.13.0 | 2.15.0 | 2.13.0 | Transitive via mcp; relevant to optional SDK/Nexus environments. JWT configuration determines exploitability. |
| urllib3 | 2.7.0 | 2.8.0 | 2.7.0 | Transitive through requests/botocore and other dependencies; streaming/proxy use determines exposure. |
| multidict | 6.7.1 | 6.9.1 | Not present | Via aiohttp/aiobotocore/yarl; the specific C-extension set operations must be reached. |
| Werkzeug | 3.1.8 | 3.1.9 | Not present | Present through development moto/server tooling, not the harness's FastAPI server; issue is Windows-specific. |

The wheel does not distribute uv.lock and its dependency declarations do not pin all these transitive versions. A fresh wheel installation can resolve differently. Conversely, taking M's root lock does not fix the separate Nexus lock. No direct use of the advisory-specific JWT/DPoP, safe_join, items-view set-operation or read_chunked APIs was found in the harness/example/Nexus source scan; transitive library paths and deployment configuration were not exhaustively proven. Do not publish remote exploitation of the harness as established. Inspect actual installed versions and applicable call paths, and refresh both locks where relevant. [T6 extras/dev declarations][pyproject], [Nexus dependencies][nexus-project].

Each advisory below was opened, its 2026 publication date checked and its affected range matched to the locked version. The plain-language impact is conditional on the listed upstream API/configuration, not a claim about every harness session.

| Receipt | Published, UTC date | What the bug allows | Upstream fixed version |
| --- | --- | --- | --- |
| [GHSA-x33g-cr3x-6449 / CVE-2026-102275](https://github.com/advisories/GHSA-x33g-cr3x-6449) | 2026-10-05 | Inconsistent public/private OKP JWK material confuses key identity. A DPoP integration that accepts private key parameters from a proof header can accept a stolen bound token without the legitimate private key. That extra application behavior is required. | PyJWT 2.15.0 |
| [GHSA-gvp8-978c-rx2q / CVE-2026-103001](https://github.com/advisories/GHSA-gvp8-978c-rx2q) | 2026-09-30 | Reusing an options dict after a signature-disabled decode can silently leave claim checks disabled during a later signature-verified decode, accepting expired or wrong-audience/issuer tokens. This does not forge signatures. | Advisory field is null; fix commit is independently contained in 2.15.0, as detailed below. |
| [GHSA-42vr-xj54-vc7v / CVE-2026-101918](https://github.com/advisories/GHSA-42vr-xj54-vc7v) | 2026-09-30 | Deeply nested unsigned JWT payloads can raise an uncaught RecursionError before verification, failing authentication requests where that parser path is used. | PyJWT 2.15.0 |
| [GHSA-jwrc-g2q2-pq5p / CVE-2026-102270](https://github.com/advisories/GHSA-jwrc-g2q2-pq5p) | 2026-09-30 | Attacker-controlled PEM-format input can consume excessive CPU in the format-checking regular expression. | PyJWT 2.14.0 |
| [GHSA-9j54-fg26-wv3r / CVE-2026-102266](https://github.com/advisories/GHSA-9j54-fg26-wv3r) | 2026-09-29 | An empty octet JWK bypasses empty-HMAC-key validation; a verifier configured with such a key accepts tokens an attacker can sign. | PyJWT 2.14.0 |
| [GHSA-8wjv-2p76-3863 / CVE-2026-102265](https://github.com/advisories/GHSA-8wjv-2p76-3863) | 2026-09-29 | A deeply nested unsigned JWT header can cause an uncaught RecursionError and authentication-request denial of service. | PyJWT 2.14.0 |
| [GHSA-hxm8-2xgr-2p9m / CVE-2026-102269](https://github.com/advisories/GHSA-hxm8-2xgr-2p9m) | 2026-09-29 | Alternate signature encodings change the token string without invalidating its signature, bypassing revocation keyed on the raw token string/hash; jti-based revocation is a different case. | PyJWT 2.14.0 |
| [GHSA-ffc3-869f-jxw9 / CVE-2026-102268](https://github.com/advisories/GHSA-ffc3-869f-jxw9) | 2026-09-29 | PEM whitespace/line-ending variants can be accepted as HMAC secrets, allowing forged tokens when an application mixes symmetric and asymmetric algorithms with that raw public-key configuration. | PyJWT 2.14.0 |
| [GHSA-w2cx-738m-mc7w / CVE-2026-102273](https://github.com/advisories/GHSA-w2cx-738m-mc7w) | 2026-09-29 | Wrapped public JWK/JWKS containers can be accepted as HMAC secrets, enabling token forgery under the affected mixed-algorithm/raw-key configuration. | PyJWT 2.14.0 |
| [GHSA-9v7f-9g4p-ffgj / CVE-2026-102267](https://github.com/advisories/GHSA-9v7f-9g4p-ffgj) | 2026-09-29 | Following attacker-influenced JWKS redirects can disclose custom request headers and substitute trusted signing-key material. An arbitrary token kid alone does not establish that control. | PyJWT 2.14.0 |
| [GHSA-p4g4-x82p-q773 / CVE-2026-102271](https://github.com/advisories/GHSA-p4g4-x82p-q773) | 2026-09-29 | A DER public key can be treated as an HMAC secret, allowing token forgery when that key and mixed symmetric/asymmetric algorithms are configured. | PyJWT 2.14.0 |
| [GHSA-r6x4-923q-g947 / CVE-2026-102272](https://github.com/advisories/GHSA-r6x4-923q-g947) | 2026-09-29 | A BOM-prefixed public JWK evades the HMAC/public-key guard, enabling the same conditional token-forgery class. | PyJWT 2.14.0 |
| [GHSA-2gx3-rcp4-g85q / CVE-2026-101917](https://github.com/advisories/GHSA-2gx3-rcp4-g85q) | 2026-09-29 | Unauthenticated tokens with unknown kid values can force repeated JWKS network refreshes, amplifying requests and denying service. | PyJWT 2.14.0 |
| [GHSA-w6j9-cwv2-h6wq / CVE-2026-102274](https://github.com/advisories/GHSA-w6j9-cwv2-h6wq) | 2026-09-29 | One malformed RSA JWK aborts parsing of the entire key set, denying authentication when an attacker can influence that set. | PyJWT 2.14.0 |
| [GHSA-gh4c-6fx4-qh6g / CVE-2026-97688](https://github.com/advisories/GHSA-gh4c-6fx4-qh6g) | 2026-09-30 | A malicious chunked Deflate response can trap streaming decompression in a CPU loop; read timeouts do not stop that CPU loop. | urllib3 2.8.0 |
| [GHSA-vxq7-64xx-v4gw / CVE-2026-97689](https://github.com/advisories/GHSA-vxq7-64xx-v4gw) | 2026-09-30 | A malicious HTTP server can send an unbounded chunk-size line that exhausts client memory during chunked streaming. | urllib3 2.8.0 |
| [GHSA-8988-9cw3-xx77 / CVE-2026-97687](https://github.com/advisories/GHSA-8988-9cw3-xx77) | 2026-09-30 | Ignored/overridden HTTPS proxy TLS settings can let an intercepting attacker impersonate the proxy and observe or alter forwarded traffic under the affected configuration. | urllib3 2.8.0 |
| [GHSA-g6x2-hccm-hh4m / CVE-2026-102598](https://github.com/advisories/GHSA-g6x2-hccm-hh4m) | 2026-10-05 | Windows special device paths such as NUL: pass safe_join checks and can hang reads in send_from_directory indefinitely. | Werkzeug 3.1.9 |
| [GHSA-54p9-h82j-f925 / CVE-2026-104874](https://github.com/advisories/GHSA-54p9-h82j-f925) | 2026-10-05 | Reflected items-view union or subtraction in the C extension leaks references. Repeated operations over attacker-influenced tuples can exhaust a long-lived process's memory. Ordinary mapping use is not enough. | multidict 6.9.1 |

For GHSA-gvp8-978c-rx2q, do not invent a populated first_patched_version field. The advisory references fix 0c87c8c8b1a74cac99ad8115f3050efcb7fbed35; the independently queried compare result to release 2.15.0 is ahead=41, behind=0, with release head 1d41a6478e1562e68ff667fcd703356acf085f68. That provides separate code ancestry for the fix in the version #175 selects. [Fix commit](https://github.com/jpadilla/pyjwt/commit/0c87c8c8b1a74cac99ad8115f3050efcb7fbed35), [pinned comparison](https://github.com/jpadilla/pyjwt/compare/0c87c8c8b1a74cac99ad8115f3050efcb7fbed35...1d41a6478e1562e68ff667fcd703356acf085f68).

### M4. The 0.5.0 migration also removes runner.state and author-written run methods

Dates: 2026-09-25 and 2026-09-29 implementations, released 2026-09-30. Channel: preview-or-beta, T5 and T6.

Commit c0f8ca01bf550cf1da349b02c84e0ac545c2c1d2 (#147) replaces runner.state registration with class-declared agent.state. Commit faec13de3ee346597f179ee8cb9c8e474beeb03b (#155) makes agent.defn generate the workflow run method, rejects an authored run at import, adds setup/teardown hooks and validates required/optional typed init data. Invalid start input becomes a non-retryable workflow failure rather than a repeatedly failing workflow task. [State change][state-commit], [state declaration][state-decl], [lifecycle change][init-commit], [T6 implementation lines 993-1011, 1051-1095, 1130-1139 and 1216-1235][runner].

Add concrete migration steps beyond "move to agent.* decorators": migrate observable-state declarations, remove the old authored run wrapper, move asynchronous lifecycle work into setup/teardown, and handle rejected initialization as a terminal start failure. This is a breaking API change relevant to operators upgrading their own agents, not an additional claim that unchanged examples fail.

## Rule checks and remaining boundaries

- CVE/GHSA handling: the harvest's direct-package negative search is reproducible, but cannot stand for a dependency audit. The omitted advisories now have plain-language impact, release-lock receipts, disclosure dates and conditional reachability. Repository advisories returned an empty list; exact-package advisory queries for the harness, all three npm clients and pydantic-monty returned none. NVD keyword searches for temporal-agent-harness and pydantic-monty returned zero results. These are negative search results, not proof of security. [Repository advisories][repo-advisories], [NVD query][nvd-query].
- Marketing: the harvest separates the outside-window launch post and README durability claims from source-derived behavior. Keep that distinction, and do not turn successful CI or a support disclaimer into a product guarantee.
- Social: no social-post quotations are present. GitHub PR/issue statements are attributed development records; runtime claims above are supported separately by pinned code where possible.
- Dates/channels: no wrong-year release date found. Section 8's October 2 date is the merge date; installation begins October 3. Section 6 is prior posture, not a window change. M remains main-unreleased. No license change was found.
- Unverified runtime questions remain cross-origin browser reachability, old-history replay on 0.6.0, OpenCode drift behavior, live chat permissions, TypeSafe request retention, Temporal Cloud history access/retention and npm compiled-build equivalence. They must not be promoted as verified outcomes. No scripts were run to settle them because the task forbids executing cloned code.

Only this crosscheck was written. The harvest was not edited; no site build, dependency install or git write operation in the Frontier repository was run.

## Receipts

[repo-api]: https://api.github.com/repos/temporal-community/temporal-agent-harness
[org-api]: https://api.github.com/orgs/temporal-community
[license]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/LICENSE
[releases-api]: https://api.github.com/repos/temporal-community/temporal-agent-harness/releases
[latest-api]: https://api.github.com/repos/temporal-community/temporal-agent-harness/releases/latest
[pypi-api]: https://pypi.org/pypi/temporal-agent-harness/json
[pypi5]: https://pypi.org/pypi/temporal-agent-harness/0.5.0/json
[pypi6]: https://pypi.org/pypi/temporal-agent-harness/0.6.0/json
[release5]: https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.5.0
[release6]: https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0
[compare45]: https://github.com/temporal-community/temporal-agent-harness/compare/e4bde4beb078d7ec3432c84b71e64e1efd554752...4cef523a285b0c585f169678e1dbbf5e7644c98f
[compare56]: https://github.com/temporal-community/temporal-agent-harness/compare/4cef523a285b0c585f169678e1dbbf5e7644c98f...04a49d1b037de46da2cba31676d2aa2f4c59118f
[compare6m]: https://github.com/temporal-community/temporal-agent-harness/compare/04a49d1b037de46da2cba31676d2aa2f4c59118f...091c8756126ca9684e0b8fe57d82d9122c29f517
[npm-client]: https://registry.npmjs.org/@temporalio%2fagent-harness-client
[npm-react]: https://registry.npmjs.org/@temporalio%2fagent-harness-react
[npm-svelte]: https://registry.npmjs.org/@temporalio%2fagent-harness-svelte
[npm-client-version]: https://registry.npmjs.org/@temporalio%2fagent-harness-client/0.1.0
[npm-react-version]: https://registry.npmjs.org/@temporalio%2fagent-harness-react/0.1.0
[npm-svelte-version]: https://registry.npmjs.org/@temporalio%2fagent-harness-svelte/0.1.0
[t5-app]: https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/web/app.py
[t6-app]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py
[t6-cli]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/cli.py#L149
[t6-serve]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/serve.py#L44
[t6-readme]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md
[cors-commit]: https://github.com/temporal-community/temporal-agent-harness/commit/d7a55f8855c31eb1a3281d2502f626c8a153aa44
[message-commit]: https://github.com/temporal-community/temporal-agent-harness/commit/e62c778b4abbde588204c0ac294f35d4d46bfa33
[subagent]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/subagent_toolset.py
[monty-policy]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/monty/conversational_workflow.py#L179-L192
[auto-policy]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/auto_mode/workflow.py#L257-L284
[runner]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py
[interface]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_protocol/agent_interface.py
[pr142]: https://github.com/temporal-community/temporal-agent-harness/pull/142
[jev-approver]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/approver.py
[jev-activity]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/activity.py#L85-L97
[jev-model]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/jev_approvals/models.py#L21-L24
[typesafe-readme]: https://github.com/temporalio/ai-integrations/blob/681a1d7b97af5ef424f9c479ae0f5db529f517cc/python/typesafe/README.md
[pr167]: https://github.com/temporal-community/temporal-agent-harness/pull/167
[t5-code-activities]: https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/harness/code_mode/activities.py
[t5-batch]: https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/harness/code_mode/batch_models.py#L27-L29
[t5-plugin]: https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/plugin.py#L176-L180
[code-driver]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/driver.py
[stepper]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/monty_stepper.py
[pyproject]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml
[monty110]: https://github.com/pydantic/monty/releases/tag/v1.1.0
[run5]: https://github.com/temporal-community/temporal-agent-harness/actions/runs/36782833724
[run6]: https://github.com/temporal-community/temporal-agent-harness/actions/runs/37083572183
[environment]: https://api.github.com/repos/temporal-community/temporal-agent-harness/environments/pypi
[env-policy]: https://api.github.com/repos/temporal-community/temporal-agent-harness/environments/pypi/deployment-branch-policies
[publish]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/.github/workflows/publish.yml
[package-tree]: https://github.com/temporal-community/temporal-agent-harness/tree/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness
[pr158]: https://github.com/temporal-community/temporal-agent-harness/pull/158
[old-manifest]: https://github.com/temporal-community/temporal-agent-harness/blob/faec13de3ee346597f179ee8cb9c8e474beeb03b/packages/client/package.json
[publish-npm]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/.github/workflows/publish-npm.yml
[nexus-project]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/nexus/mcp/pyproject.toml
[nexus-readme]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/nexus_hello/README.md#L197-L200
[nexus-rename]: https://github.com/temporal-community/temporal-agent-harness/commit/d2e7abc74d28d2248f8659cf577b438a96706ee4
[nexus-pypi]: https://pypi.org/pypi/temporal-nexus-mcp/json
[nexus-simple]: https://pypi.org/simple/temporal-nexus-mcp/
[pr143]: https://github.com/temporal-community/temporal-agent-harness/pull/143
[chat-app]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/src/app.tsx
[chat-readme]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/third-party-platforms/chat-server/README.md
[approval-doc]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/docs/internal/human-in-the-loop-tool-approvals.md#L841-L844
[pr165]: https://github.com/temporal-community/temporal-agent-harness/pull/165
[gemini-conversation]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/ai_sdks/google_genai_plugin/_interactions_conversation.py
[gemini-errors]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/ai_sdks/google_genai_plugin/_errors.py
[wiki]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/callback_tools/wiki_agent/workflow.py
[subagent-doc]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/docs/internal/agents-as-subagents.md
[offload]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/utils/large_payload.py#L65-L72
[m-app]: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/web/app.py#L336-L353
[file-view]: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/web/file_view.py
[activity-fs]: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/harness/code_mode/activity_fs.py
[vfs]: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/temporal_agent_harness/harness/code_mode/vfs.py
[memory-disk]: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/examples/code_mode_memory/local_disk.py
[m-readme]: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/README.md
[typesafe-merge]: https://github.com/temporal-community/temporal-agent-harness/commit/091c8756126ca9684e0b8fe57d82d9122c29f517
[typesafe-pypi]: https://pypi.org/pypi/temporalio-typesafe/0.0.1/json
[m-pyproject]: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/pyproject.toml
[shim]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/callback_tools/coding_agent/opencode_shim/harness_backend.py#L289-L302
[shim-backend]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/callback_tools/coding_agent/opencode_shim/backend.py#L230
[old-run4]: https://github.com/temporal-community/temporal-agent-harness/actions/runs/35037180376
[examples]: https://github.com/temporal-community/temporal-agent-harness/tree/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples
[dag-step]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/step_agent.py#L66
[policy-comment]: https://github.com/temporal-community/temporal-agent-harness/issues/174#issuecomment-6053051749
[console-guard]: https://github.com/temporal-community/temporal-agent-harness/commit/421636d5900320233df9f0096809b4462123ff04
[json-patch]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/ui/src/lib/state/jsonPatch.ts#L74-L128
[state-projection]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/ui/src/lib/state/agentState.ts#L171
[dag-commit]: https://github.com/temporal-community/temporal-agent-harness/commit/2d2a4b3841050190599e08e947d85b3c5d8323b7
[dag-workflow]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/workflow.py
[dag-readme]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/README.md
[code-tool]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/tool.py#L208-L224
[dependency-rollup]: https://github.com/temporal-community/temporal-agent-harness/commit/f50412138cab078f19c54e683e7ba5e529323f17
[lock6]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/uv.lock
[lock-fixed]: https://github.com/temporal-community/temporal-agent-harness/blob/f50412138cab078f19c54e683e7ba5e529323f17/uv.lock
[nexus-lock]: https://github.com/temporal-community/temporal-agent-harness/blob/091c8756126ca9684e0b8fe57d82d9122c29f517/nexus/mcp/uv.lock
[state-commit]: https://github.com/temporal-community/temporal-agent-harness/commit/c0f8ca01bf550cf1da349b02c84e0ac545c2c1d2
[state-decl]: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/state/decl.py#L105-L116
[init-commit]: https://github.com/temporal-community/temporal-agent-harness/commit/faec13de3ee346597f179ee8cb9c8e474beeb03b
[repo-advisories]: https://api.github.com/repos/temporal-community/temporal-agent-harness/security-advisories
[nvd-query]: https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=temporal-agent-harness
