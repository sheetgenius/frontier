# Posture and fairness review

Completed review of 22 profiles, 22 complete write-up memos, all draft public bodies, all tagline/stance fields and 66 claim spot checks. This file is the only output of this lens.

Profile date: 2026-10-13. Research window: 2026-09-21 through 2026-10-13, inclusive. Review date: 2026-10-14.

## Scope and standard

This is a review of the supplied draft profiles against their corrected primary harvests and adversarial crosschecks. It does not independently reproduce product behavior, fetch current vendor pages, or certify an installed release. Later observations in the research record do not move the profile cutoff. No cloned code, installer, product runtime, site build, package installation, or git write was run.

The authorities are THESIS.md's safeguard, METHOD.md's evidence and capability lanes, EDITORIAL.md's severity, both-halves and trust-firewall rules, and CONTRIBUTING.md's distinction between a correction and an editorial judgment. The title test is `.claude/skills/frontier-cycle/SKILL.md:358-360`: title the finding rather than a verdict on its vendor. Proposed public replacements also follow `skills/humanizer/SKILL.md`.

All 22 draft taglines and all 66 stance fields were read together before the bodies. All earlier published taglines and stances were also compared as a set. The earlier profile is a comparison posture, not evidence that its claim remains true. Twenty-one earlier files are dated September 21; `content/profiles/unreal-agent.md:18` is dated September 23, as its memo notes. That exception does not change this run's September 21 start. A negative finding is not automatically a gotcha; a responsibility reminder is not automatically sneer. A factual warning should survive a tone edit when its mechanism and affected channel survive the record.

## Set-level finding

The collection is caution-heavy, but the record does not support calling it a set of 22 vendor convictions. Its use recommendations name actual capabilities and audiences. Its avoidance recommendations usually name an affected version, an unmet containment requirement, a particular configuration assumption or a trust-domain mismatch. Conditions such as inspecting source or governing a local host are operator requirements, not points deducted because a product is closed or experimental.

The counts below describe the reviewed v1 drafts, before the proposed edits:

- Literal public body titles: 22 tool names, zero rhetorical gotcha titles.
- Taglines, treated as the meaningful headline test: one clear gotcha-style sting, Hermes's "finally consult"; one borderline grudging construction, DeepSeek's "a real Web login still leaves." This is an editorial classification, not a claim that either underlying defect is unsupported. PF01 and PF07 keep the severe facts.
- Five taglines use "but": openhands, eve, flue, cursor and grok-build. Eight use "still": openhands, pi-coding-agent, eve, github-copilot-cli, deepseek-harness, heypi, agent-flywheel and unreal-agent. The union is 11 of 22, not 13. This repetition creates a recognizable capability-then-warning register. It is a selection/voice risk, not proof of bias by word count. Several of these are essential qualifications, particularly Eve's different fixed and unfixed approval paths.
- Two public "finally" stings: the Hermes tagline and the DeepSeek directory heading. The memos' additional "finally" usages are internal and are not counted as public sneer. PF01 and PF08 flatten the public instances.
- Zero personal attacks, slurs or supported allegations of vendor motive were found in the public bodies. Grok's "fake MCP option rows" describes the specific documented UI mechanism, not a fake product. References to abandoned requests describe cancellation state, not abandoned maintainers.
- Zero public body mentions of Bitter as an analytic answer or product recommendation. A text scan found no literal Bitter mention in these bodies; the full reading also found no substitute sales conclusion. The memo lens sections discuss the house ideas, and the Cursor memo at 82 explicitly challenges the assumption that independent operating infrastructure is sheltered from provider absorption.

The earlier set had more obvious prosecution language: Gemini's "the fix you reported may never board it," Copilot's "notes admit," Antigravity's "finally trustworthy," Eve's "including its approval bugs," and Flywheel's recycled "v0.7.0 never installed." The new drafts drop those constructions rather than refresh their dates. Keep that improvement. Positive interpretations receive the same scrutiny: Paperclip's permissions-over-manuals ranking would be clearer as the actual grant change. Omnigent's local dialog-removal mechanism survives checking; its tagline need not be read as a claim of measured net human hours saved.

| Profile | Tagline/stance judgment | Disposition from this lens |
| --- | --- | --- |
| codex | Concrete process/version mismatch, qualified audience and action | Retain |
| claude-code | Plugin admission becomes authority; managed and unmanaged cases separated | Retain |
| gemini-cli | Headless continuation is a permission choice, not evidence of universal shutdown | Retain |
| openclaw | New chat setup plus an explicit permission choice; backport progress retained | Retain |
| hermes-agent | A real repair with an unnecessary sigh; scanner trade compressed away | PF01-PF02 |
| paperclip | An editorial ranking would be clearer as the actual grant/default change | PF03 |
| openhands | Serious local-secret path with real automation/delegation gains | Retain |
| pi-coding-agent | MCP gain and documented operator containment responsibility | Retain |
| agent-zero | Messaging authority expansion, not a charge of hostile intent | Retain |
| eve | Different repaired identity and unrepaired consent timing deserve separation | Retain |
| omp | Programmable review really can revise and approve the same plan | Retain |
| flue | Real repairs and lost public upgrade evidence; issue-conversion framing can improve | PF04-PF05 |
| antigravity | Exact version and updater choice, with old daemon policy left unknown | Retain |
| github-copilot-cli | GA containment earns credit; default-off and fleet setup remain material | Retain |
| cursor | Monitoring gain deserves surface-specific containment advice | PF06 |
| grok-build | Approval repairs and incomplete source correspondence are independently supported | Retain |
| deepseek-harness | Static same-user path supports severity; flatten grudging/concession wording | PF07-PF08 |
| heypi | Supported dependency drift in one optional runtime, not general abandonment | PF09 optional |
| agent-flywheel | Disposable-host advice follows stock authority, not only a past failed install | Retain |
| omnigent | Particular dialogs are removed; net supervision saving remains unmeasured | Retain at that scope |
| temporal-agent-harness | Workflow/interpreter coupling is a concrete migration consequence | Retain |
| unreal-agent | External-boundary warning holds; a supported input-token direction needs retaining | PF10 |

## Fairness, uncertainty and contrary evidence

Most uncertainty is usefully scoped. Codex asks for a daemon trace rather than inventing an update deadline. Claude, Copilot and Grok leave reported Git/plugin paths unresolved when a current fix or probe is missing. OpenHands distinguishes a source-level secret path from a live reproduction. Cursor separates terms, notes, artifacts and hosted deployment. Temporal keeps browser reachability and old-history replay conditional. These are specific unknowns with settling evidence, not hedges to evade a verdict. Do not replace them with "may be unsafe" or "use caution."

The severity that should survive is equally specific. A default-local OpenHands agent can inherit the automation-key alias; DeepSeek's same-user command can obtain cookie signing material; Omnigent's affected bubblewrap helper could escape; Unreal can ingest a valid tool call from a failed response. Flattening their tone does not mean downgrading those mechanisms to vague risks. It also does not make a repository issue or a dependency version match into proof of a deployed exploit.

Two positive results lose material context between memo and profile. Hermes's scanner removal is presented mainly as a lost detector, dropping the author's small-corpus false-positive/coverage trade. Unreal presents the cost-accounting limits but omits the narrower aggregate input-token direction that both harvest and verifier support. PF02 and PF10 restore exactly that evidence, with attribution and limits. They do not manufacture a favorable outcome or transfer a benchmark to today's installed version.

Other disconfirming facts are already well kept: OpenClaw's extended-stable fixes and operation-time file checks; Pi's existing default headless refusal; Copilot's refuted policy-bypass inference; heypi's historical authentication and functioning required-write gate; Paperclip's zero-run prompt comparison; Eve's non-separating benchmark; Temporal's continuing need for a specialized workflow substrate; and Flywheel's exact-plan plugin admission alongside deliberately broad stock agent commands. Preserve these distinctions in final compression. They prevent the publication from having a predetermined answer about either provider harnesses or independent orchestration.

No quota of positive titles follows from this review. The corrective act is to state the actual gain and its actual limit at the same evidence standard, and to retain evidence that complicates the thesis. It is not to alternate praise and criticism on a schedule. The directives below are the supported changes: two must, seven should and one could. Other drafts pass this lens's sampled checks; that is not a full factual or runtime certification.

## Claim spot checks

Each profile receives three checks below. Draft sentence quotations are reflowed only across Markdown line wraps. H means this run's `harvest/<id>.primary.md`; X means `verify/<id>.crosscheck.md`; D means `tmp/refresh-2026-10-13/drafts/<id>/profile.v1.md`. Line numbers refer to the reviewed files. These are checks against the supplied research, not fresh runtime acceptance.

### codex

Read the complete 70-line memo and the complete public body, D:298-426. The tagline identifies a runtime-pinning mechanism rather than attacking OpenAI. The draft keeps real progress in permission-filtered discovery, result streaming, fresh-child tools, worktrees and retained user direction. It also distinguishes Guardian V2 being off from the older reviewer being on. No supported posture edit is required.

1. D:322-323, "Newly seeded npm or Homebrew packages can follow latest independently of the CLI pin." Supported with the sentence's eligibility and newly-seeded scope. H:84-94 and X:146-170 distinguish existing package selection, explicit standalone pins, the updater schedule and the absence of an observed update. Primary receipt: [package seeding](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install.rs#L245-L338). D:329 correctly excludes `codex exec`.
2. D:354-358, the claim that AGENTS.md is skipped only for explicit Untrusted, while project config/hooks/policy have a separate gate. Supported. H:132-142 and X:232-247 explicitly correct the earlier profile rather than claim a new October regression. Primary receipts: [AGENTS.md gate](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agents_md.rs#L63-L66) and [trust predicate](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/config/src/config_toml.rs#L614-L616).
3. D:362-370, older Guardian on by default, Full Access skips review, OTLP export excludes cached V2 approvals, and billing ownership remains to be checked. Supported. H:144-156 and X:249-280 prohibit the broader claims that all model review is off, every decision is exported, or code proves a charge. Primary receipt: [stable flags](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1763-L1814). The draft retains the narrower conclusions.

### claude-code

Read the complete 70-line memo and D:292-347. The plugin-admission tagline is severe but receipted. The draft credits AGENTS.md portability, fail-closed hook configuration, prompt-file transport and shipped repairs. It preserves the managed/Team/Enterprise guard distinction and the cost of sideload restrictions. No supported posture edit is required.

1. D:300, mods can approve over ask/non-managed hook blocks and, on specified unmanaged machines, deny rules. Supported. H:51-61 and X:111-151 separate the 2.1.286 default flip from 2.1.287 ignoring the old environment switch, and require binary rather than tag ancestry evidence. Primary receipts: [permissions](https://code.claude.com/docs/en/permissions#extend-permissions-with-hooks) and [mod administration](https://code.claude.com/docs/en/plugins/mods/admin). The profile does not turn this into a claim that every managed deny is ineffective.
2. D:304, an OS-denied managed-source read can start without that source's policy, while other read errors and parse failures still stop the session. Supported. H:111-121 and X:239-245 name the exception and the other-admin-source qualification. Primary receipt: [2.1.285](https://github.com/anthropics/claude-code/releases/tag/v2.1.285). This is the right degree of severity.
3. D:332, the new Plugin4Shell advisory names fixed 2.1.179 and requires attacker control of an upstream plugin repository on a host allowing SHA-shaped branch names. Supported. H:99-109 and X:200-237 distinguish delayed disclosure from a current unfixed CLI defect and reject a timeless scanner-failure claim. Primary receipt: [vendor advisory](https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv). D:337 separately leaves GitSpawn unresolved rather than treating a missing changelog line as exploit proof.

### gemini-cli

Read the complete 61-line memo and D:315-363. The new tagline drops the prior profile's prosecution-like "the fix you reported may never board it" framing. It states a prompt/permission decision and credits recovery, usage records and reviewable memory. No supported posture edit is required.

1. D:323, the new prompt encourages implementation, while the headless exit-to-YOLO transition predates it. Supported. H:105-115 and X:244-262 explicitly reject the suggestion that every earlier plan run was read-only. Primary receipts: [new prompt](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/prompts/snippets.ts#L602-L615) and [earlier exit implementation](https://github.com/google-gemini/gemini-cli/blob/v0.62.0/packages/core/src/tools/exit-plan-mode.ts#L210-L268).
2. D:325 and D:352, subscription sales end and renewal dates, with no universal CLI/API-key/Vertex/Gateway shutdown inferred. Supported as current official documentation, with mutable historical bytes explicitly qualified in H:57-67 and X:155-177. Primary receipt: [Google sunset schedule](https://docs.cloud.google.com/gemini/docs/codeassist/sunset). Existing service through contract end remains visible; active repository development is not made proof of subscription support.
3. D:347 and D:354, the installer does not compare resulting HEAD, while hosted acceptance of the special branch remains untested. Supported. H:302 and X:378-400 separate the source/plain-Git mechanism from hosted reach and reject "Google will not patch it" as a vendor-confirmed future fact. Primary receipt: [installer](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/extensions/github.ts#L32-L80). The public draft keeps that separation.

### openclaw

Read the complete 112-line memo and D:285-344. This is an important fairness repair over the earlier posture: extended-stable now gets credit for inherited fixes, root-handle work is acknowledged, and advisory imports are distinguished from original-ID lookup failures. New chat setup and native compaction are treated as capability. No supported posture edit is required.

1. D:301, August extended-stable inherits the named August fixes and keeps narrower defaults. Supported. H:52-64 and X:60-68 verify ancestry and matching mechanism blobs, while requiring code-specific checks for later squashed backports. Primary receipts: [release](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35) and [defaults](https://github.com/openclaw/openclaw/blob/v2026.8.35/src/config/types.tools.ts#L505-L524). Do not restore the old "the long-term channel is the one without them" tagline.
2. D:334, shipped file tools use root handles and guarded writes; residual raw-path coverage remains open. Supported. H:304-316 and X:143 refute blanket validation-time-only containment and do not establish complete atomic coverage. Primary receipt: [operation-time owners](https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.read.ts#L1362-L1495).
3. D:313, seven main-line stables with distinct waiver and not-supplied qualifications, plus eligible node updates. Supported. H:108-120 and X:100-106 distinguish waived checks, missing evidence and skipped builds, and do not infer either defect causation or no mobile build anywhere. Primary receipts: [9.6](https://github.com/openclaw/openclaw/releases/tag/v2026.9.6), [10.3](https://github.com/openclaw/openclaw/releases/tag/v2026.10.3) and [node policy](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/nodes/node-host.md#L177-L191).

### hermes-agent

Read the complete 77-line memo and D:348-394. The webhook finding is justified. Two presentation edits are warranted: flatten "finally" in the tagline, and retain the measured-but-limited trade behind scanner removal. The body keeps important counterweights on origin-bound fills, payment confirmation, release identity and resumed reasoning.

1. D:360, gateway ask state bypassed unattended policy through v0.21.6, with v0.21.7 restoring it for the named paths. Supported. H:71-81 and X:61-70 preserve earlier guard checks and distinguish notifier-backed waits from an unanswerable pending API result. Primary receipt: [fixed routing](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942). This does not justify saying every action now follows that policy.
2. D:380, skipped source/install/native gates and successful Docker jobs whose test work is bypassed by policy. Supported within the recorded workflow evidence. H:107-117 and X:88-99 explicitly say logs were not inspected and prohibit an independent census of every executed command. Primary receipt: [release policy](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/developer-guide/stable-releases.md#L102-L133). The draft credits artifact identity and requires acceptance separately.
3. D:376, bundled tirith removal and advice to operate it separately. The fact is supported, but the presentation drops contrary evidence present in the full memo at lines 32 and 67. H:119-129 and X:101-107 record the author's small corpus: 14/16 attack catches and 12/24 everyday flags with tirith, versus 13/16 and 5/24 for core. These are attributed, unreproduced results, not a general benchmark. Primary receipt: [removal and measurement](https://github.com/NousResearch/hermes-agent/commit/911da42e9e03ba8594ab2af5dfd1e50e7e721e3e). See PF02.

### paperclip

Read the complete 99-line memo and D:281-410. The body is substantially fairer than its tagline: it gives concrete delegation and consent gains, distinguishes provider prompts from OS/connection controls, and refuses to call shorter instructions a proved quality gain. The tagline should make the same evidentiary distinction.

1. D:322-328, new activated standard agents get broad grants that can precede tool profiles; exclusions, connection reach and earlier policy checks remain. Supported. H:62-72 and X:62-68 do not describe unrestricted skill editing or backfill of every existing agent. Primary receipt: [permission list](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28).
2. D:365-369, shorter defaults did not receive a completed model-run comparison. Supported. H:122-132 and X:100-108 establish zero agent runs, no behavioral grade and a larger core protocol. Primary receipt: [evaluation record](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/plans/2026-10-05-plan-task-guidance.md#L44-L85). This does not prove the tagline's architectural judgment false, but it does leave its comparative-value ranking unmeasured. A grant-change tagline would make the proved consequence clearer. See PF03.
3. D:371-377, the stable soft-budget card can imply work paused while the wording repair is canary-only. Supported. H:314-324 and X:214-216 distinguish a UI error from evidence that soft thresholds stop spend. Primary receipt: [component fix](https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9). The body gives the exact operator check without declaring all budget enforcement broken.

### openhands

Read the complete 84-line memo and D:289-438. The saved-secret warning is a specific default-local-runtime path, not a claim that every profile or container is ineffective. The opening and body credit automation drafts, engine choice, delegated scopes and recorded QA. The memo's internal "finally" does not appear in the public draft and is not a public sneer count. No supported posture edit is required.

1. D:311-316, setting only LOCAL_BACKEND_API_KEY can leave Docker agent-server authentication unset. Supported. H:59-69 and X:56-60 require absence of another key, distinguish npm/Helm paths, and specify a protected-route 401 test rather than a generic API or UI test. Primary receipt: [entrypoint](https://github.com/OpenHands/OpenHands/blob/v1.27.1/docker/entrypoint.sh#L208-L219).
2. D:318-324, a terminal-enabled default-local agent has a source-level route to excluded saved secrets through the automation-key alias. Supported as static inference. H:83-93 and X:68-72 trace the alias, incomplete environment sanitization and profile-free secret route. They also distinguish per-conversation Docker's explicit environment construction from a universal isolation guarantee. Primary receipt: [secret-value route](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522). D:415-419 leaves installed behavior to a live scope test.
3. D:396-402, the released verification harness supplies recipes and evidence for 27 feature families. Supported. H:191-201 and X:118-125 distinguish documented coverage and known bugs from exhaustive defect coverage or technical confinement. Primary receipt: [released QA artifact](https://github.com/OpenHands/OpenHands/blob/v1.27.1/.agents/skills/verify-openhands/SKILL.md). It was read as evidence, never treated as job instructions.

### pi-coding-agent

Read the complete 79-line memo and D:272-405. The tagline's "still your job" is a responsibility statement backed by the security design, not a character judgment. The draft credits integrated MCP, scripted tools, common hooks, interrupted-call repair and truthful failure exits. It explicitly corrects the earlier headless-trust implication and retires the historical benchmark winner from current advice. No supported posture edit is required.

1. D:302-310, configured enabled MCP servers start alongside the harness, inherit its environment and await project trust for project configuration. Supported. H:51-61 and X:76-84 retain CLI/SDK differences and distinguish whole-process containment from routing only bash into a VM. Primary receipt: [stdio transport](https://github.com/earendil-works/pi/blob/v1.2.0/packages/mcp/src/transports/stdio.ts#L94).
2. D:320-330, nested tools traverse hooks while admitted scripts' classifier/image operations use the model registry outside individual tool hooks; automatic activation and only-mode limitations differ. Supported. H:63-73 and X:86-95 explicitly permit rejecting the enclosing script, exclude hidden/inactive direct tools from the callable set, and reject a blanket root-call rule that would block codemode itself. Primary receipt: [model operations](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/execute.ts#L740-L751).
3. D:341-346, default headless ask already declines protected resources, while context files and the initial sessionDir lookup are separate. Supported. H:123-133 and X:125-129 establish the old behavior and documentation-only change. Primary receipt: [trust resolution](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/project-trust.ts#L47-L88). Do not turn the old profile's correction into a new current exploit.

### agent-zero

Read the complete 83-line memo and D:222-272. The phone/administration comparison states a concrete expansion of admitted users' powers. The profile gives concurrency, targeted child Stop, state repair and provider routing genuine credit. It keeps host grants separate from tool names and avoids a blanket multi-tenant claim. No supported posture edit is required.

1. D:230, messaging can administer plugins and edit non-Default profile policy, with instance-wide toggles but project/global profile scope. Supported. H:52-62 and X:47-53 correct the earlier all-chats implication, preserve active-run refusal and note that integrations ship unconfigured. Primary receipt: [scope owner](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_agent_editor/helpers/editor.py#L742-L781). The draft does not claim every installation starts a public bot.
2. D:242, internal browser sign-ins remain shared despite per-context tab views. Supported. H:88-98 and X:71-77 trace the persistent profile and distinguish internal Chromium from separately authorized host-browser profiles. Primary receipt: [shared runtime](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/helpers/runtime.py#L3192-L3217).
3. D:258, the parallel-call repair addresses unresolved placeholders and does not demonstrate secret-value disclosure. Supported. H:76-86 and X:63-69 establish the retained dictionary assignment, the reverted recursive change and the unsupported nature of an explanation for the issue remaining open. Primary receipt: [retained fix](https://github.com/agent0ai/agent-zero/commit/4d94c3b173ee42ceb64f99eb8ef493254417bde9). This narrower sentence is a fairness gain over the earlier leak framing.

### eve

Read the complete 74-line memo and D:249-307. The tagline combines a released identity repair with a different, still-unreleased timing repair. Those are distinct findings, not a rhetorical take-back of all progress. MCP publication, file workflows and accountable consent remain visible. No supported posture edit is required.

1. D:257, approved calls now use requester access, with confirmed historical ranges 0.70.0-0.77.0 and the broader-turn borrowing through 0.71.2. Supported. H:72-82 and X:38-44 prohibit extending the inferred pre-0.70.0 range and explain the compatibility cost to privileged-approver workflows. Primary receipt: [identity repair](https://github.com/vercel/eve/commit/9559de83b65e89c24172c2b9c1a80382033556aa).
2. D:259, a requester reply queued before a later prompt can settle it at 0.79.0; the fix is main-only. Supported as source/regression-test evidence. H:228-238 and X:159-163 distinguish consent timing from renewed credential lending and do not establish every steer-policy timing case. Primary receipt: [admission-sequence fix](https://github.com/vercel/eve/commit/0dea0ded869be7db30ae90ed8072d29e6e57df61). D:297 explicitly says the review did not reproduce it.
3. D:285, the vendor's 12-task, three-attempt benchmark reports Pi 26/36, Eve 24/36 and opencode 18/36 with overlapping intervals, on earlier Eve source. Supported. H:192-202 and X:116-120 reject superiority and equivalence, and identify the measured source rather than 0.79.0. Primary receipt: [vendor dataset](https://github.com/vercel/eve/blob/eve%400.79.0/apps/docs/lib/evals/eve-code-benchmark.json). The public advice to experiment without switching on those numbers is proportionate.

### omp

Read the complete 80-line memo and D:142-189. "Approve their own plan revisions" is literally within the extension API; it is not an unsupported motive claim. The public draft also credits deliberate automated review, reflex-approval defenses, worktrees, status, IPC and distribution integrity. It keeps current OMP behavior separate from the Pi names it resolves. No supported posture edit is required.

1. D:150, an extension can revise and execute a plan, reopen an idle review and select a tier, while tool approval gained separate key safeguards. Supported. H:166-178 and X:116-122 move this into released 18.10.4 and preserve downstream tool policy. Primary receipt: [released extension API](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560). This should not be recast as bypassing every tool denial.
2. D:152, project inputs load without a trust decision and can replace selected global arrays, subject to higher-priority flags/overlays. Supported. H:140-150 and X:102-106 call it the current design, not proof that a future trust gate will never exist. Primary receipt: [documented loading contract](https://github.com/can1357/oh-my-pi/blob/v18.10.4/README.md#L593-L602).
3. D:154, settings grants span keys, distinguish session-only from save, and are not supplied merely by yolo; writable collaborators can answer. Supported. H:88-100 and X:74-80 preserve writer restrictions and the first-save decision. Primary receipt: [grant check](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L120-L148). The draft states the convenience and the delegated authority together.

### flue

Read the complete 211-line memo and D:221-363. The release loses public upgrade evidence while fixing actual execution bugs; both sides are supported. There is no basis to say private testing stopped. The issue-conversion history deserves flatter treatment, and the removed-file count should name files. See PF04-PF05.

1. D:238-245, stale finish-hook state can repeat the reminder to the 32-cycle ceiling in 2.2.x; 2.3.0 fixes it. Supported. H:106-116 and X:275-295 distinguish this from the earlier AI Gateway model-ID regression and retain the precise source mechanism. Primary receipt: [release changelog](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L11-L28).
2. D:247-251, 2.3.0 removes public release tooling/test material and lacks npm provenance available in 2.2.2. Substantively supported, but the source counts 27 test files, not 27 individual tests. H:46-68; X:102-129,175-190. Primary receipts: [export diff](https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150) and [registry metadata](https://registry.npmjs.org/@flue%2Fruntime/2.3.0). Keep the requirement to resolve an attestation-policy conflict; do not present 2.2.2 as containing the new repairs.
3. D:254-256, issue closure is not shipment and conversation deletion moved to Discussions. The narrow fact is supported, but the phrasing leaves an avoidable implication of misleading issue handling. H:54-56 and X:133-158 show that 14 conversions preserve author/body/time in open feature discussions, eight other closures map to shipped changes, and one was not reproducible. Primary receipt: [deletion discussion](https://github.com/withastro/flue/discussions/855). The full memo at 133-138 explicitly refuses the "quietly claimed fixed" interpretation. Preserve that correction in the public framing.

### antigravity

Read the complete 84-line memo and D:199-323. The new tagline is version/pinning advice, not a verdict about Google's competence. The body attributes the closed product's behavior to vendor notes, gives marketplace/image-loop/remote-settings gains credit and avoids treating strings as model access. No supported posture edit is required.

1. D:225-234, 1.3.4 adds browser settings changes and saved-settings handling for daemon sessions; older effective policy and old-rule cleanup remain unknown. Supported as vendor-described behavior. H:54-64 and X:48-52 reject assuming what the earlier daemon did instead. Primary receipt: [1.3.4 notes](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L11). Review of transcripts is an action, not evidence that a particular command violated policy.
2. D:258-263, interactive plan review is separate from the tool bypass flag, while headless still proceeds automatically. Supported. H:90-100 and X:67-69 preserve both paths and avoid promising a headless human checkpoint. Primary receipt: [1.3.2 note](https://github.com/google-antigravity/antigravity-cli/blob/1.3.2/CHANGELOG.md?plain=1#L13).
3. D:217-223, a versioned download still self-updates unless disabled; Windows raw executable identity differs from GitHub zip hashes. Supported. H:138-148 and X:83-96 identify an older updater, not a newly introduced October defect, and bound the four-platform archive comparison. Primary receipt: [pre-window updater documentation](https://web.archive.org/web/20260918134151/https://antigravity.google/docs/cli/troubleshooting). The earlier no-checksum story is not repeated.

### github-copilot-cli

Read the complete 79-line memo, including the initially truncated lines 28-52, and D:161-206. The tagline leads with generally available containment and states rollout work without ridicule. The body retains useful credential brokerage, managed entry-point coverage, rule portability, resumption and attribution. It drops the old tagline's "notes admit" characterization. No supported posture edit is required.

1. D:167-175, local sandbox GA does not enable it by default; managed availability failure/bypass controls and network platform limits are separate. Supported as release/docs evidence. H:66-76 and X:70-74 distinguish MXC's public engine from the actual closed binary. Primary receipt: [GA notes](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L42).
2. D:195, failed forced policy refresh restricts affected operations according to closing docs; behavior remains a test question. Supported. H:304-305 and X:100-106 reject the original harvest's inference of an allow-all policy bypass from command availability. Primary receipt: [closing enterprise policy](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L241-L249). Do not resurrect the refuted claim as a current exploit.
3. D:185, 1.0.97 repairs JSON-output secret redaction, but the note does not establish that every earlier export leaked. Supported. H:186-196 and X:162 preserve unknown reach and the operator's file inspection. Primary receipt: [stable notes](https://github.com/github/copilot-cli/blob/76c3172eb38f/changelog.md?plain=1#L16). Uncertainty has an exact object rather than generic hedging.

### cursor

Read the complete 94-line memo and D:169-334. The body correctly separates IDE, CLI, SDK, hosted workers, Origin and Grok Bot. The tagline can carry that same surface discipline instead of making a general Cursor warning cancel its deploy-monitoring gain. See PF06. The memo's explicit counterevidence about provider expansion into operating infrastructure is material and must not be replaced by a corporate thesis victory.

1. D:193-199, the IDE 3.24 note describes unsandboxed Run Everything, with an undocumented permissions.json exception; current Auto-review docs describe an outside retry. Supported at the stated documentary level. H:86-96 and X:88-92 distinguish the IDE event from the CLI's pre-existing unrestricted mapping, and the independent docs interval ending October 14. Primary receipt: [IDE note](https://cursor.com/docs/release-notes/ide#oct-9-2026). Do not claim a runtime-tested configuration exception.
2. D:252-256, Rollouts can inspect deploy telemetry and hand off a fix, while merge/rollback remain deliberate human decisions. Supported as hosted vendor-described capability. H:170-180 and X:140-144 preserve admin enablement and identify read-only telemetry as a recommendation rather than an enforced default. Primary receipt: [Rollouts announcement](https://cursor.com/changelog/rollouts-and-security-reviewer).
3. D:302-307, Grok Bot terms add customer responsibility for required notices/consents, without proving meeting-feature availability or controls. Supported. H:194-204 and X:152-156 compare historical captures and reject a universal legal consent rule. Primary receipt: [captured terms](https://web.archive.org/web/20261013185637/https://cursor.com/en-US/terms/grok-bot). The draft keeps the product separate from Grok Build.

### grok-build

Read the complete 73-line memo and D:164-204. The source/binary discrepancy is a specific finding with missing worker code, not an allegation that the whole mirror is fake. The body gives same-file serialization, goal waiting, MCP credential reloads and Jujutsu concrete credit, and reverses the old enterprise-lag claim. No supported posture edit is required.

1. D:172, stable includes the vendor's approval-scope, deceptive-card and accidental-keypress repairs. Supported as notes rather than exercised fixes. H:105-115 and X:223-236 reject an inference that a particular MCP server actually exploited someone. Primary receipt: [1.0.51 notes](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989).
2. D:176, the mirror is labeled 1.0.45, has a worker stub and does not establish complete binary correspondence. Supported. H:81-91 and X:186-198 distinguish a later-documented change in an earlier-labeled tree from a complete version mapping. Primary receipt: [worker stub](https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell/src/leader/cursor_worker_stub.rs#L1-L24).
3. D:194, the GitSpawn report uses a delivered directory with malicious local config, not ordinary cloning, and current 1.0.52 status needs a fix or probe. Supported. H:89 and X:413-422 preserve the tested 1.0.13 date and refuse both exposure and safety conclusions from silence. Primary receipt: [researcher's original report](https://www.manifold.security/blog/ai-coding-agents-git-hijack).

### deepseek-harness

Read the complete 90-line memo and D:194-244. The severe evaluation-only stance is supported by the explicit same-user control-plane path and vendor isolation disclaimer. The body also gives account sign-in, headless resume, remote work and persistent directories concrete space. Two small tone/scope edits remove a concession that sounds dismissive and an unnecessary "finally" without weakening the findings. See PF07-PF08.

1. D:202, session-log upload reaches the default rc, while the OTel environment switch does not disable it. Supported. H:64-76 and X:76-82 require eligible DeepSeek-adapter requests and pending serializable data, distinguish pi-ai/custom routes and a separate account-credential origin check, and leave traffic unobserved. Primary receipt: [uploader](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/src/index.ts#L51-L214). The draft says "can include," not that every request uploads every event.
2. D:204, readable cookie signing material plus API reach gives same-user commands operator authority. Supported as static path, not a remote pre-auth exploit. H:266-278 and X:208-214 trace credential storage, sandbox reads, cookie admission and permission APIs. Primary receipt: [signing-key owner](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/browser-auth.ts#L125-L177). Owner-only mode protects against other ordinary users; it does not separate the same-user agent. Actual Web cookie authentication remains a real improvement.
3. D:218, current rc supports headless NDJSON/resume, the earlier recommended rc lacked those flags, and job wakes need a separate cap. The headless/resume and worker-self-report portions are supported by H:168-180 and X:136-142. Primary receipt: [headless flags](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/headless/src/startup.ts#L43-L44). No inference of same-lab exclusivity or vendor distrust of models survives. Directory persistence is separately alpha-only: H:328-338; X:238-242, supporting PF08.

### heypi

Read the complete 85-line memo and D:222-265. This is a bounded optional-runtime defect, not proof of abandonment or a broken default Docker scaffold. The body retracts a serious old authentication allegation, removes best-on-the-watchlist certification and credits the fail-closed request gate. The tagline could make the optional-runtime scope easier to see. See PF09.

1. D:230, just-bash 3.6.0 adds a method omitted by the read-only skills proxy. Supported under the stated command-availability and service-account-write conditions. H:168-178 and X:165-173 establish empty-entry creation within the mount, not arbitrary outside-root writes, existing-skill overwrite or an executed exploit. Primary receipt: [wrapper](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L64). D:238 and memo:11 identify the scaffold's Docker selection.
2. D:240-242, required request/resolution writes fail closed, but policies and approver lists are optional and the ledger is not every execution. Supported. H:228-238 and X:155-158 trace Pi's exception propagation and actor matching, while rejecting superiority and immutable-ID-only claims. Primary receipt: [approval owner](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L366-L506).
3. D:248, older 0.1.3 and 0.2.0-beta.0 already authenticated by default; the blanket pre-0.3 allegation and rotation advice are withdrawn. Supported. H:240-250 and X:143-151 distinguish different old/new implementations rather than infer an absent control from absent fix ancestry. Primary receipt: [older authentication](https://github.com/hunvreus/heypi/blob/a4f69da2ed64d42fc25e75341956ce7c34f77e73/packages/heypi/src/admin/index.ts#L119-L129). Keep this substantive correction; silence since July does not prove intent to abandon.

### agent-flywheel

Read the complete 87-line memo and D:193-244. The current disposable-host advice is grounded in stock bypass aliases, prior sudo state and the Antigravity wrapper, not merely a moving ledger. The body attributes factory failures, preserves later repinning and gives exact-plan plugin admission and batched launch real credit. No supported posture edit is required.

1. D:199, the maintainer's published-tag factory run passed eight smoke checks but exited 1; the release withholds full-install qualification. Supported as attributed reporting. H:38-48 and X:54-64 distinguish candidate from published-tag runs, the October 4 repin and the absence of a complete retained post-repin factory run. Primary receipt: [factory record](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/427). The draft does not claim every current installation fails.
2. D:201, a tag pins scripts while the checksum ledger follows main unless separately selected. Supported. H:42,46-48 and X:56,60-64 distinguish fixed acceptance hashes from obtaining immutable upstream bytes. Primary receipt: [installer defaults](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L173-L185). The unretained 48/48 URL check is not smuggled into current acceptance.
3. D:221, selected third-party plugins receive a reviewed-plan fingerprint and target-user install, without changing stock agent bypasses or supplying a sandbox. Supported. H:122-132 and X:100-102 establish this as shipped v0.10.0 progress, not a first-ever security claim. Primary receipt: [review workflow](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L1-L62).

### omnigent

Read the complete 52-line memo and D:154-194. The body corrects two old claims favorable to neither an easy safety story nor an easy indictment. It credits inherited budgets, agent installation, recurring managed work and explicit outage decisions. The tagline identifies a local prompt-substitution mechanism, not a number of saved human hours. H:91-101 and X:79-85 support removal of particular launch dialogs and persistent trust configuration; H:67-77 shows deliberate extra shell approvals. Accept the local workflow interpretation without inferring net attention savings. No supported posture edit is required.

1. D:162, affected Linux bubblewrap code could compromise a host launcher; hosts and helpers need the fixed package and restart. Supported. H:187-197 and X:155-159 name code already executing inside the affected sandbox, OS-account execution and the actual helper paths. Primary receipt: [bubblewrap advisory](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-v3vj-mch3-x6c2). This contradicts the older unsandboxed-only mitigation without alleging administrator privilege or every sandbox implementation is affected.
2. D:176 and D:184, outage hooks emit ASK, but installed Claude/Codex behavior in bypass modes needs a paired test. Supported. H:103-113 and X:97-101 distinguish emitted JSON from effective outside-harness enforcement and record that the behavior predates this window. Primary receipt: [fallback code](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/native/native_policy_hook.py#L543-L584).
3. D:172 and D:185, reported tokens without a total-cost key trigger ASK while that predicate holds, and priced usage is reconciled rather than capped mid-turn. Supported. H:115-125 and X:103-109 reject both an unconditional DENY and detection of every mixed priced/unpriced history. Primary receipt: [cost predicate](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/policies/builtins/cost.py#L84-L135). The body keeps the useful budget mechanism without treating its field name as a dollar ceiling.

### temporal-agent-harness

Read the complete 75-line memo and D:92-223. The workflow-local interpreter is a concrete capability and migration decision. The body keeps human plan inspection, durable waits and policy work useful rather than claiming a general model makes infrastructure disappear. It distinguishes examples, package contents, wheel resolution and branch-only integrations. No supported posture edit is required.

1. D:113-120, the packaged unauthenticated all-interface server now includes wildcard CORS, conditional on browser/network reach. Supported as source-derived exposure. H:48-58 and X:71-79 prohibit an unconditional browser exploit claim, an exhaustive session-discovery claim or suggesting the old version was categorically browser-safe. Primary receipt: [server middleware](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L176-L184).
2. D:122-130, 0.6.0 moves Monty from batch activities to the workflow, requiring an exact interpreter and tested old-history cutover. Supported with replay risk left as inference. H:84-94 and X:97-108 reject universal demonstrated replay failure and a blind-reset remedy. Primary receipt: [Code Mode change](https://github.com/temporal-community/temporal-agent-harness/pull/167). Durable replay does not establish exactly-once host effects.
3. D:132-140, opt-in auto mode can decide calls, errors escalate and remembered tool names precede argument-sensitive evaluation. Supported. H:72-82 and X:87-95 distinguish generic evaluators from Jev-specific numerical thresholds, allow confident denials without a human and preserve later name removal/policy replacement. Primary receipt: [name allowance](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L455-L469).

### unreal-agent

Read the complete 85-line memo and D:102-230. The external execution-boundary requirement is supported and the TUI makes it more consequential, rather than inventing a newly removed approval gate. The public benchmark paragraph loses an important contrary result retained in the memo, harvest and verifier. Restore that narrower positive result without restoring dollar or current-release claims. See PF10.

1. D:120-125, the terminal client runs the user's shell with inherited environment and no internal approval boundary. Supported. H:50-60 and X:39-52 distinguish the TUI from the runner's .env loader and sandbox assertion, and reject a disposable checkout as containment. Primary receipt: [TUI launch](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/unreal-agent-tui/run.go#L190-L262).
2. D:192-200, the vendor's historical savings claim has unrecorded inference cost and unmatched build identity. Those limits are supported, but H:146-156 and X:134-148 also support lower aggregate input-token direction for the vendor comparisons. Exact score aggregation is not reproduced and performance equivalence does not follow. Primary receipts: [historical tables](https://web.archive.org/web/20260922183130/https://unreallabs.ai/blog/unreal-agent/), [Unreal Terminal-Bench](https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6) and [Pi comparator](https://hub.harborframework.com/jobs/6ccd097a-747b-4867-be57-a56969df988f). Memo:49,57,69 explicitly keeps this result. Omitting it while foregrounding only accounting failures is selective reporting.
3. D:146-154, failed model responses can still dispatch valid tool calls, including recovery. Supported as a conditional source path. H:230-240 and X:224-230 distinguish ignored Response.Failure from a returned Go error; post-run logs do not provide a pre-dispatch barrier. Primary receipt: [coordinator](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/coordinator/loop.go#L231-L251). No live-provider exploit was reproduced.

## Directives for final drafters

### PF01 | hermes-agent | should

Original tagline (D:9): "For unattended Hermes, the important upgrade is v0.21.7: webhook approvals finally consult the policy you configured."

Replacement: "Hermes v0.21.7 makes webhook approvals consult the configured unattended policy."

Evidence: H:71-81; X:61-70; [fixed routing](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942). The version and mechanism carry the warning. "Finally" adds an editorial sigh without adding an affected path or consequence. Keep the earlier guard and alternate-path qualifications in D:360.

### PF02 | hermes-agent | should

Original sentence (D:376): "The [bundled tirith scanner was removed in that release](https://github.com/NousResearch/hermes-agent/commit/911da42e9e03ba8594ab2af5dfd1e50e7e721e3e); if it was part of your policy, operate and test it yourself."

Replacement: "[Hermes removed bundled tirith in v0.21.6](https://github.com/NousResearch/hermes-agent/commit/911da42e9e03ba8594ab2af5dfd1e50e7e721e3e). The removal author's small command-corpus test reported fewer everyday false flags and fewer attack catches with core alone; those results were not independently reproduced. If you relied on tirith's catches, operate and test it separately."

Evidence: H:119-129; X:101-107; complete memo:32,67. The removal is a tradeoff with a reported reduction in accidental blocking, not only a lost safeguard. This keeps the contrary evidence and attribution without declaring the replacement safer or models responsible for the removal.

### PF03 | paperclip | should

Original tagline (D:9): "Paperclip's growing autonomy makes explicit permissions more valuable than elaborate agent job descriptions."

Replacement: "New standard Paperclip agents gain setup and tool permissions that operators need to scope."

Evidence: H:62-72,122-132; X:62-68,100-108; D:365-369. The broad grants and shorter manuals are real. Zero live comparison runs leave the manuals' outcome quality and the comparative value unmeasured. This is a framing improvement, not proof the existing architectural opinion is false. [Default permissions](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28) supply a concrete capability and governance cost that do not depend on the thesis deciding that comparison.

### PF04 | flue | must

Original sentence (D:247-249): "The 2.3.0 cut [removed Changesets, per-package changelogs, the release workflow on main and 27 public tests](https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150), including the runtime's abort and deadline tests."

Replacement: "The 2.3.0 cut [removed Changesets, per-package changelogs, the release workflow on main and 27 public test files](https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150), including the runtime's abort and deadline tests."

Evidence: H:50,54; X:102-129; memo:19-27. The count is of files. This is a correction to the unit of the severe claim, not a reason to soften the loss of public regression evidence or imply private testing ended.

### PF05 | flue | should

Original sentence (D:254-256): "Inspectable source still helps; issue closure alone proves little, especially when [requests such as conversation deletion moved to Discussions](https://github.com/withastro/flue/discussions/855)."

Replacement: "Conversation deletion remains a [feature request in Discussion #855](https://github.com/withastro/flue/discussions/855)."

Evidence: H:54-56; X:133-158; memo:133-138. GitHub marks converted issues completed, while preserving their feature requests in open discussions; eight of the other nine closures map to shipped fixes. Name the unsupported feature and its status instead of leaving issue administration sounding like an attempt to pass off unfinished work.

### PF06 | cursor | should

Original tagline (D:10): "Cursor can watch a deploy, but Run Everything gives up the sandbox."

Replacement: "Cursor adds deploy monitoring; review sandbox policy before using IDE Run Everything."

Evidence: H:86-96,170-180; X:88-92,140-144; memo:7-11,28. The new run-mode event belongs to IDE 3.24; the CLI's unrestricted mapping predates the window. The replacement names the affected surface and gives the monitoring capability its own factual footing. Keep the severe unsandboxed-mode warning, undocumented configuration exception and human rollback owner in the body.

### PF07 | deepseek-harness | should

Original tagline (D:9): "The default install now enables session-log upload, and a real Web login still leaves a same-user path to operator authority."

Replacement: "DeepSeek's default rc enables session-log upload, and same-user commands can read its Web cookie signing key."

Evidence: H:64-76,266-278; X:76-82,208-214. The record supports both severe mechanisms. "A real Web login still" makes credit for authentication sound grudging; the concrete readable-key explanation is clearer and preserves the problem. Keep API reach and static-analysis scope in D:204 and the evaluation-only stance. Do not imply remote pre-auth access or observed exploitation.

### PF08 | deepseek-harness | should

Original heading (D:228): "**Directory changes finally survive resume.**"

Replacement: "**Alpha persists Session directory changes.**"

Evidence: H:328-338; X:238-242; [alpha.2 contract](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/working-directory/README.md#L42). The supported capability is alpha-only and deserves a flat capability heading. "Finally" adds a sigh, while the new wording states the channel. Keep independent process/grant lifetimes and the missing-directory recovery cost.

### PF09 | heypi | could

Original tagline (D:9): "An unchanged beta still needs a dependency audit: heypi's floating shell dependency outgrew its read-only wrapper."

Replacement: "An unchanged heypi beta still needs a dependency audit: its optional just-bash runtime outgrew the read-only skills wrapper."

Evidence: H:168-178; X:165-173; memo:11,21; D:238. The source path concerns the optional just-bash runtime, while the scaffold selects Docker. The body already scopes this correctly; naming that scope in the tagline would prevent a broader first impression without weakening the warning.

### PF10 | unreal-agent | must

Original sentence (D:195-196): "The linked [Unreal job omits inference cost](https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6), and its [benchmarked build cannot be matched to a public release](https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6)."

Replacement: "The linked [Unreal](https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6) and [Pi](https://hub.harborframework.com/jobs/6ccd097a-747b-4867-be57-a56969df988f) vendor runs support a lower aggregate input-token total for Unreal. The [Unreal job omits inference cost](https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6), and its [benchmarked build cannot be matched to a public release](https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6)."

Evidence: H:154-156; X:138-146; memo:49,57,69. Both research stages retain the lower aggregate input-token direction while refusing exact score and dollar reproduction. The public paragraph keeps only the favorable vendor assertion and the reasons to distrust it, omitting the narrower result the source record does support. Preserve that counterevidence. Keep the existing instruction to compare current installed versions, and do not call the historical builds v0.3.1, report equal quality or infer a dollar saving from token direction.
