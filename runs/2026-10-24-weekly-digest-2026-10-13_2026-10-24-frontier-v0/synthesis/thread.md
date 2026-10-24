# Thread check, 24 October 2026

Lens: THREAD CHECK. Window: strictly after 2026-10-13T23:59:59Z through the individually recorded 24 October UTC source reads. Profile date: 2026-10-24. This is an internal analysis for the final profile and weekly drafters, not publication copy.

## Basis and limits

Read THESIS.md, METHOD.md, EDITORIAL.md and CONTRIBUTING.md; all three requested issues; both files in content/features; all twelve writeup.md memos in full; the eleven existing profile bodies; all twelve profile.v1.md bodies; and the relevant corrected harvest and independent crosscheck sections. OpenCode has no prior profile. Cursor's Origin supplement was read alongside cursor.primary.md and cursor.crosscheck.md. Where the supplement preserves an earlier formulation, the corrections in the consolidated primary harvest and crosscheck govern.

The previous coverage is:

- [The Handoff Has an API](../../../content/digests/2026-09-21_2026-10-13-weekly.md), especially its planning, native-adapter, repair-handoff, consent and running-process sections.
- [Before the First Turn](../../../content/digests/2026-08-20_2026-09-21-weekly.md), especially startup execution, plugin pins, classifier routing, channel delivery and the subtraction argument.
- [Approvals Belong to the App](../../../content/digests/2026-08-17_2026-08-20-weekly.md), especially embedder-owned approval, reviewer visibility and the then-unreleased Pi redesign.
- [The Body, Not the Pencil](../../../content/features/2026-08-23-codex-the-body-not-the-pencil.md), including its reviewer-default, auditability, billing and protocol-compatibility questions.
- [Oh My Pi, without the Pi](../../../content/features/2026-08-23-oh-my-pi-without-the-pi.md), including the distinction between Pi, shipping OMP and the separate Rust rewrite.

Channel selections below are the harvests' timestamped observations, not new registry reads by this lens. Examples: Codex's author registry rereads were around 10:32 UTC; Claude's final selector reread was 10:18 UTC; Cursor's independent selectors were around 10:17 UTC; OpenClaw's later author reads reached 10:40 UTC. Do not flatten these into an end-of-day snapshot. No runtime, exploit, provider billing or hosted acceptance test was performed by this lens. Only this file was written; no site build, installation or git mutation was run.

## The historical argument changes in five specific ways

1. **Several waits end with a release, not with a safety verdict.** Codex's updater policy, Claude's managed guard, Gemini's project-settings refusal, Pi's four pending release items, OpenClaw's final-argument binding and OpenHands' secret-request UI have reached the relevant released channels. Each closes a delivery question. The deployment tests in the older profiles remain distinct work.
2. **The human gate is becoming a configuration choice in more places.** October's plan-review question now reaches Origin code ownership, OpenClaw's learned procedures and Copilot's managed asks. Claude supplies an important divergence: guarded policy asks and an explicit person-only decider preserve deliberate human choices, while some unconfigured headless jobs retreat from auto. These are different decisions, not one universal approval mechanism.
3. **The adapter-replacement argument gets an unusually good receipt.** pi-mcp-adapter 6.0.0 actually deletes QuickJS and its separate scripting surface in favor of native Pi codemode. That completes a mechanism proposed in the previous issue. It does not establish lower total review time or justify deleting every adapter.
4. **The institution around the loop continues to grow.** Pi Durable's wake contract, Paperclip's durable accounting, Hermes's continuing gateway jobs and OpenCode's public integration contracts all make state, recovery and compatibility more consequential. This supports the Codex feature's distinction between deleting defaults and growing the operating machinery. It also limits a provider-only reading of the thesis: independent harnesses and hosts supply useful primitives too.
5. **Pins still stop short of the whole system.** Codex's daemon, Hermes's gateway and extracted plugins, OpenCode's client/server pair and Paperclip's selected worker are separate identities. Hosted model retirement is separate again. A more current package number does not close these custody questions.

None of the supplied records measures an improvement in accepted work per human hour. The forward claim is increased operable reach with specific costs, plus one observed code deletion. Keep the older HarnessTax results historical until current versions, models, tools and prices are matched.

## Source-by-source thread decisions

Each quoted sentence below is one proposed sentence for the ordinary profile flow. It is not a request for a retrospective or corrections section. The v1 drafts already handle most factual changes; retain those changes while shortening historical scaffolding.

### codex

**Previous claim.** The last issue told interactive 0.162.1 fleets under managed network policy to keep daemon auto-updates off until a stable release contained the repair. The old profile repeats that at lines 314-316 and 427-431. The August feature separately left reviewer price and auditability open.

**Answer.** Delivery is complete: [the updater policy repair](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8) first reaches stable 0.163.0 on 15 October, and [0.164.0 propagates configuration failure and activates network policy](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464). Saved settings govern the updater; invoking CLI overrides do not. The daemon remains independently selected and experimental. End the release wait, retain the fleet test and separate runtime inventory.

The feature's cost question is partly answered by [current plan help saying ChatGPT-authenticated safety checks are free and outside plan limits](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan). This is a current contract, not a dated October price change. Optional API-key Decisions comparison remains a separate billing question. OTLP synchronous assessment export still excludes cached V2 approvals. Do not declare the full auditability question solved. The new [escalated-retry reassessment](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/orchestrator.rs#L484-L518) sharpens the feature's central argument: approval must cover the authority about to be exercised.

One historical repair is real but not new capability: the old profile's absolute full-history/model-override restriction is contradicted by [baseline 0.162.1 child preparation](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agent/child_config.rs#L51-L84), as well as [0.164.0](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/agent/child_config.rs#L52-L85). The backend correction does not override stricter caller/tool contracts.

**Profile sentence.** "Codex 0.163.0 and later enforce the updater's saved network policy; test blocked destinations and broken configuration before enabling automatic updates."

**Draft direction: should.** Replace the retrospective sentence beginning "The old updater warning changes:" at draft line 414 with that sentence, and remove the duplicated test instruction. Preserve the independent-daemon and API-comparison distinctions already in v1. Keep the historical fork correction in the research trail; do not sell it as an October launch.

**Research locator.** [Harvest](../harvest/codex.primary.md), sections 1, 3, 34-35 and Prior claims re-checked; [crosscheck](../verify/codex.crosscheck.md), Updater network policy and Historical full-fork model-override correction.

### claude-code

**Previous claim.** The last issue and profile describe mods overriding asks or non-managed hook blocks, with additional ask/environment holds still on main. The profile's unattended paragraph describes the 285-era headless auto defaults. September's GitSpawn question remains open in the last issue.

**Answer.** [2.1.299 delivers the managed guard](https://github.com/anthropics/claude-code/releases/tag/v2.1.299), first on 14 October. In a seated guard, policy-backed asks hold over user mods; ordinary mode-owned asks are a different case, administrators can relax holds, and [mods' own code remains unsandboxed](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md). [2.1.302 narrows the unconfigured headless auto default](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) on third-party providers, with telemetry disabled, or on fresh installs. Explicit auto remains available. [2.1.304's person decider](https://github.com/anthropics/claude-code/releases/tag/v2.1.304) is useful counterevidence to treating every human pause as obsolete.

The ultrareview thread is partly repaired, not closed: [2.1.309 adds interactive workspace trust and noninteractive refusal unless explicitly trusted](https://github.com/anthropics/claude-code/releases/tag/v2.1.309). That supersedes absence of a named trust change, but does not map the researcher's withheld GitSpawn configuration to a tested fix. Stable selector 308 lacks this gate; latest 310 includes it. The September gateway-billing correction must not be reasserted as a freshly verified current contract: the independent reader could only read the historical billing capture.

**Profile sentence.** "In guarded sessions, Claude Code 2.1.299 holds policy-backed asks over user mods; set unattended permission modes explicitly after 2.1.302 narrowed the auto defaults."

**Draft direction: should.** Replace the opening's "the previous review could only inspect on main" framing with a direct account of the released guard, using the sentence above near the job-mode paragraph. Keep the exact ultrareview uncertainty already present in v1. Do not conflate shipped guard delivery with universal mod confinement or current billing verification.

**Research locator.** [Harvest](../harvest/claude-code.primary.md), sections 1-2, 5 and Carry-forward answers; [crosscheck](../verify/claude-code.crosscheck.md), sections 1-2, 5 and Prior claims re-checked.

### cursor

**Previous claim.** The last issue kept Rollouts merge/rollback human and treated the 13 October Origin marketplace as evidence that a provider might move beyond the coding loop. The old profile says app/service credentials escape Origin's IP allowlist and says no Project approval setting is documented.

**Answer.** Origin materially advances the earlier question: [Agentic ownership can replace the code-owner approval count, and installed apps can satisfy ownership review](https://web.archive.org/web/20261024094000/https://cursor.com/docs/release-notes/origin.md). This is newly established current posture. The overlapping week-of-12-October label does not establish a post-cutoff launch date. Added client fields support availability in the newer sample, without revealing server thresholds or auditability. Keep Rollouts' human-started repair/merge/rollback limits separate from Origin's different review authority.

Two earlier absences narrow. [22-23 October archive changes](https://web.archive.org/web/20261024094024/https://cursor.com/docs/api/origin/changelog.md) add endpoint-specific IP checks: API installation credentials use the installation namespace, service accounts their owning team, and signed downloads check the repository namespace plus the service-account team where applicable. Ordinary git/API exemptions remain. Project placement approval is now documented, but spend/concurrency ceilings remain unknown. New default Git hardening does not settle the separate fsmonitor allegation. Expected-head arguments existed in the baseline client too; their presence is not a newly proved server refusal.

**Profile sentence.** "Keep Classic code-owner review where a person must approve: Origin's Agentic mode can replace the approval count with its agent's ownership decision."

**Draft direction: should.** Use that decision as the opening rather than "Cursor earns a place here because..." The v1 paragraphs already carry the necessary date limit, archive exceptions and Project-budget distinction; retain them. Do not restore the supplement's refuted in-window eligibility claim. Origin may earn a feature, but this lens supplies no commissioned feature or measured replacement of human responsibility.

**Research locator.** [Consolidated harvest](../harvest/cursor.primary.md), sections 5, 16-19, 26-27 and Carry-forward answers; [Origin supplement](../harvest/cursor.origin.md), sections 1-4; [crosscheck](../verify/cursor.crosscheck.md), O01, O04, O11-O13 and prior-claim checks.

### github-copilot-cli

**Previous claim.** September describes localhost being cut off in 1.0.83; the last issue and profile warn that macOS masking can prevent a command reaching its own listener. The earlier integration-policy repair is not evidence that all ACP sandbox paths worked.

**Answer.** [1.0.100 permits localhost and private-network access by default](https://github.com/github/copilot-cli/releases/tag/v1.0.100), and [1.0.101 permits direct macOS localhost TCP with local access enabled and no host filters](https://github.com/github/copilot-cli/releases/tag/v1.0.101). The blanket old macOS warning is superseded for that case; the Windows direct-connection caveat remains. [1.0.103 repairs saved sandbox settings and flags in new/resumed ACP sessions](https://github.com/github/copilot-cli/releases/tag/v1.0.103). Sandbox enablement itself remains off by default.

The approval thread also becomes less literal: 1.0.100 lets Assisted approve safe managed asks, while pinned enterprise guidance promises fresh approval without automatic shortcuts. Report the conflict and require a decision trace. This is not settled by 1.0.101's explicit extension approvals. Plugin4Shell remains an absence-of-named-repair question, not a proved current exploit or safety verdict.

**Profile sentence.** "Copilot CLI 1.0.100 enables localhost and private-network access inside enabled sandboxes; set sandbox.allowLocalNetwork explicitly before expanding a 1.0.103 rollout."

**Draft direction: should.** Keep the v1 network-default paragraph prominent and use this as its concise takeaway. Preserve the conditional macOS case, unchanged Windows warning and separate default-off sandbox setting. Retain the Manual/Assisted test rather than promising every managed ask reaches a person.

**Research locator.** [Harvest](../harvest/github-copilot-cli.primary.md), sections 1-2, 5 and Carry-forward answers; [crosscheck](../verify/github-copilot-cli.crosscheck.md), sections 1, 5 and Prior claims re-checked.

### gemini-cli

**Previous claim.** The 13 October profile recommends backup/user scope or preview for project MCP writes in an untrusted folder. Rapid-exit history and companion shutdown repairs are preview-source questions. The last issue warns that plan-only is not read-only and commit pins are unchecked.

**Answer.** [0.65.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0) delivers [read-only unloaded project settings](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/settings.ts#L365-L492) and [project MCP write refusal](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/commands/mcp/add.ts#L45-L66). This is stable delivery of the already-known preview fix. Stable also contains the history repairs and companion source repair; Marketplace mapping remains unestablished. The later nightly IDE bridge is a different capability.

The installer [still checks out FETCH_HEAD without verifying resulting HEAD against the requested commit](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github.ts#L32-L80). JSON-download credential/redirect hardening does not close that defect. Headless plan exit still needs an enforced write boundary. Current README access warnings repair installation assumptions, but cannot establish the exact service wording at the old cutoff or a universal shutdown date.

**Profile sentence.** "Gemini CLI 0.65.0 refuses project MCP writes in untrusted folders; use user scope or make the trust decision explicitly when it refuses."

**Draft direction: should.** Preserve v1's delivery-first project-settings paragraph and the sentence above. Collapse the completed preview wait; keep the extension checkout, Marketplace and plan-only questions distinct. No general repository-trust breakthrough is established.

**Research locator.** [Harvest](../harvest/gemini-cli.primary.md), sections 1-2, 6, 11, 18 and Carry-forward answers; [crosscheck](../verify/gemini-cli.crosscheck.md), Prior claims re-checked and the downloader omission.

### pi-coding-agent

**Previous claim.** The last issue proposes comparing native MCP/codemode with private bridges. The profile leaves exact internal pins, sharing destination, resume selection and worker admission unreleased; Nix delivery is broken. The OMP feature correctly distinguishes upstream Pi's TypeScript redesign from a fork's Rust rewrite.

**Answer.** [pi-mcp-adapter 6.0.0 deletes its separate script tools and QuickJS](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md), reuses Pi codemode and changes hook identities and Executor approval routing. This is the strongest completion of a previous architectural prediction. It does not mean native MCP first appeared this window, and the adapter remains an optional compatibility surface.

All four pending release items first reach 1.3.0, with 1.4 refinements. The 1.4 Nix tag-bound workflow and selector settle delivery, not every installed host. [Durable 1.4's sleeping phases require the host to persist wakes and reopen/resume the harness](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L139-L220); its SQLite migration is one-way for older versions. Ordinary CLI resume is not this host contract. The compaction paper tests historical 0.79.0, while 1.4 retains the relevant flattening mechanism; do not transfer its small-sample rate to current Pi. None of this settles the OMP feature's rewrite-performance questions.

**Profile sentence.** "pi-mcp-adapter 6.0.0 replaces its own interpreter with Pi's codemode; port script settings and permission hooks before upgrading."

**Draft direction: should.** Retain the v1 deletion lead and use this sentence to attach the migration consequence immediately. Keep Durable, ordinary CLI and independently embedded hosts separate. End the old pending/Nix waits without burying the current OAuth and dependency release gaps.

**Research locator.** [Harvest](../harvest/pi-coding-agent.primary.md), sections 1-4, 8, 10-12 and Carry-forward answers; [crosscheck](../verify/pi-coding-agent.crosscheck.md), sections 1, 11 and the four pending-claim checks.

### openclaw

**Previous claim.** The last issue and profile require beta for final-hook-argument binding. The profile recommends August extended-stable for narrower collaboration defaults and Workshop propose/off plus pending approval. It also describes native compaction defaults.

**Answer.** [Stable 10.5 onward binds approval to final rewritten parameters](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436); extended 9.33 has the corresponding repair. The stale Telegram import gate is stable too. Stop recommending beta solely for either repair. September extended-stable has broad collaboration defaults, so the old channel-selection recipe no longer expresses narrow policy.

The major contradiction is [Workshop's immediate editing with versioned recovery](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md). [Propose migrates to off and approvalPolicy disappears](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/doctor/shared/legacy-config-migrations.runtime.skills.ts). Auto remains direct editing; history retains ten versions per skill and 500 change records per agent. This moves review after the edit rather than merely adding safer proposal approval. Native compaction opt-ins replace the old defaults. Meanwhile published cron/child host-CLI placement gaps qualify the older broad statement that sandbox controls apply; main's new guards are refusals, not containerization.

**Profile sentence.** "OpenClaw Workshop now edits skills immediately and retains ten versions per skill; set skills.workshop.autonomous.mode to off when a person must initiate learning."

**Draft direction: should.** Keep v1's Workshop choice near the top and use the sentence above. Retain stable final-argument delivery as a separate closed wait. Do not reconstruct the removed pending-proposal gate or use current extended-stable as a substitute for explicit collaboration settings.

**Research locator.** [Harvest](../harvest/openclaw.primary.md), sections 2-6, 17, 23 and Carry-forward answers; [crosscheck](../verify/openclaw.crosscheck.md), sections 2, 4, 6 and the host-CLI omissions.

### hermes-agent

**Previous claim.** September describes a move toward a smaller Pi-like core; the last issue/profile center unattended policy and a stable source release with skipped acceptance checks. The old installer starts from main, and the profile stops just before 0.22.0.

**Answer.** This is concrete follow-through on smaller core packaging with an operator cost: [v0.22.5 extracts the MCP conversation server](https://github.com/NousResearch/hermes-agent/commit/e3a962d087c503ac089f1563430b2b5b885f5ed2). [External launchers need a manual plugin install and new command](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/left_core_migration.py#L239-L278); the same ten tool names can conceal a broken launcher. The bridge's profile controls history, linked accounts and approval access. Core extraction is not reduced authority.

Fresh installers now select stable and selected v0.22.5 source/install-update checks passed. This repairs the old blanket skipped-test posture, but unchanged standalone installers and skipped native smoke checks prevent a platform-wide acceptance conclusion. The wrong-tree 0.22.1 episode also limits what a stable label proves. [Classic jobs continue under gateway ownership after EOF/detach](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md), adding a new completion owner to October's running-process thread. Dirty-worktree deletion and ignored-file loss are a separate retention decision from opt-in session deletion.

**Profile sentence.** "Before upgrading an embedded Hermes MCP server to v0.22.5, install mcp-serve in its launch profile and replace the old hermes mcp serve command."

**Draft direction: should.** Preserve v1's concrete launcher migration rather than leading with a generic smaller-core claim. Keep the continuing-job identity, explicit budget and actual artifact checks close to unattended-use advice. No inference that all MCP functionality left core is supported.

**Research locator.** [Harvest](../harvest/hermes-agent.primary.md), sections 1-4, 9, 16 and Prior claims re-checked; [crosscheck](../verify/hermes-agent.crosscheck.md), MCP server extraction and channel/delivery checks.

### openhands

**Previous claim.** September says profiles become enforceable MCP/secret scopes; the last issue gives the necessary local-terminal exception. The old profile retains a global-settings fallback workaround and waits for released in-conversation secret requests.

**Answer.** [Local launch now keeps the profile](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/hooks/mutation/resolve-conversation-launch.ts), and secret requests first ship in Canvas 1.28.0, with masked entry in 1.33.0. These complete two concrete waits. The request path filters through the selected profile, but a success card can follow filtering away the requested name; Cloud's helper is separate.

The standing credential reservation survives. The tmux repair deletes inherited keys absent from the sanitized environment, but [Canvas still exports OPENHANDS_AUTOMATION_API_KEY](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L927-L935), the sanitizer leaves that alias and [the saved-secret-value route has no profile check](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569). Profile fidelity and credential-request shipment therefore do not close the terminal path. This remains a source-derived composition, not a retrieved secret in a live exploit. The newly bundled monitor expands the previous automation-draft story into comment-triggered code changes under configured credentials, with different poller/template enforcement.

**Profile sentence.** "Canvas 1.33.0 preserves local profiles and offers credential requests; keep production secrets off the default local runtime while the stack-key alias survives."

**Draft direction: should.** Keep the v1 profile and secret-request gains together with the surviving alias warning. The sentence above makes the change and its limit legible without repeating a repair log. A tmux or argv-key repair must not be presented as closing this different path.

**Research locator.** [Harvest](../harvest/openhands.primary.md), sections 1-3, 15-17 and Carry-forward answers; [crosscheck](../verify/openhands.crosscheck.md), Default local terminal exposure and the separate profile/request checks.

### deepseek-harness

**Previous claim.** The old profile recommends rc.2 while leaving listener, instruction and integration migrations in an alpha appendix. It says Schedule is optional/off in rc, with ordinary Web tools enabled only in alpha. Older issues keep the replaceable approval gate and same-user authority questions open.

**Answer.** [17 October's 0.2.1-rc.1 promotes the earlier alpha contracts](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1). The observed npm default is now 0.2.1-rc.2, not the separately newer rc.3. [Ordinary Web presets expose Schedule](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/web-app/presets/standard.patch.yml), and reminders still arrive framed as user messages. The old leave-the-bundle-unselected recipe no longer expresses the desired policy. The rc promotion changes who must perform the migration, not when those mechanisms were invented.

Non-owner resource grants do not remove browser-owner cookie authority or isolate signing material from eligible same-user reads. The August login question was already answered in September; do not rediscover it as this window's fix. There is still no non-prerelease harness. Live Auto unload still grants Full access with never; main's shutdown repair does not settle that transition. Desktop now has a live analytics opt-out, though separate uploads and queued exports remain distinct.

**Profile sentence.** "DeepSeek's current rc enables Schedule in Standard, Creator and PTC; disable tool-schedule explicitly when model-written reminders must retain their origin."

**Draft direction: should.** Preserve v1's explicit preset opt-out and fold former alpha-only advice into the normal rc migration path. Keep the same-user boundary and no-stable recommendation intact. Do not describe non-owner grants or display masking as secret isolation.

**Research locator.** [Harvest](../harvest/deepseek-harness.primary.md), sections 1, 5, 9-10, 15, 25 and Carry-forward answers; [crosscheck](../verify/deepseek-harness.crosscheck.md), Rc promotion and API authorization/browser-owner authority.

### paperclip

**Previous claim.** The old profile leaves human Operator expansion and durable accounting in beta/nightly. It separately describes fourteen new-agent grants, ordinary agent-resolved confirmations, and no completed behavioral result for shorter manuals. The last issue recommends writer draining for the locking change.

**Answer.** [Stable v2026.1023.0 is published on GitHub on 24 October](https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0), from the former beta source. It delivers both [human-Operator grant seeding](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135) and [durable accounting](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/run-cost-accounting.ts). Close the preview-only delivery wait. Keep before/after persisted-grant inspection and provider-invoice reconciliation open. Missing rows can be reinserted; existing scoped rows survive. Human Operator backfill and the separate fourteen new-agent defaults are different populations.

The earlier stage/review story is narrowed by a live-review preservation guard that remains beta-only; stable also retains misleading soft-budget wording. Preview Cases does not close the unmeasured shorter-manual or task-overload questions. [Pipelines surfaces are removed while rows remain](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/DATABASE.md#L1106-L1113); Cases is not an automatic migration. Removing filesystem-history authorization is an explicit policy change, not proof that better models absorbed the need for access control. The writer-drain runbook remains applicable.

**Profile sentence.** "Paperclip 2026.1023.0 brings Operator-grant expansion and durable accounting to stable; inspect persisted human grants and reconcile interrupted runs before reopening dispatch."

**Draft direction: should.** Preserve v1's stable migration lead and use the sentence above as its concise takeaway. Keep preview removals and review/Stop fixes visibly separate. Retain the uncompleted manual and browser lifecycle trials rather than substituting Cases demonstrations.

**Research locator.** [Harvest](../harvest/paperclip.primary.md), sections 1-2, 14, 16-18, 25, 29 and Carry-forward answers; [crosscheck](../verify/paperclip.crosscheck.md), sections 1-2, Prior claims and Pipelines omission.

### opencode

**Previous claim.** There is no prior OpenCode profile to repair. Earlier benchmark references, and OpenHands/Paperclip engine listings, do not amount to an earlier dated operator posture. Do not manufacture a returning watch item.

**Answer.** [2.1.0's public contract break](https://github.com/anomalyco/opencode/commit/acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd) on 20 October supplies a useful new test of the earlier Codex feature's compatibility question: [stored sessions stay readable while SDK, HTTP/event and plugin interfaces change](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes). A successful import is not a successful integration migration. V2 architecture predates the window; intake is not launch.

This is meaningful contrary evidence to a claim that only provider-owned harnesses can supply reusable operating machinery. It is also an integration bill. The [2.1.4 elicitation delivery repair](https://github.com/anomalyco/opencode/commit/889abb4657e9a944a6ddcaaf5bc41eab5cd9a4c6) preserves a useful human decision; background compaction is optional, speculative and lost on restart, not a durable wake/replay contract. New third-party malware records require exact package response, separate from official runtime upgrades or the unconfirmed Console incident.

**Profile sentence.** "OpenCode 2.1 keeps older sessions readable while changing SDK, event and plugin contracts; test the installed client/server pair before replacing integration glue."

**Draft direction: should.** Keep v1's compatibility paragraph as the first material change after the installation choices. Use the sentence above without implying V2 launched this window or that an earlier profile existed. Do not label speculative compaction durable recovery.

**Research locator.** [Harvest](../harvest/opencode.primary.md), sections 6-8, 23, 29 and Prior claims re-checked; [crosscheck](../verify/opencode.crosscheck.md), section 8 and intake verification.

## The next weekly should pick up

### Carry the argument forward

1. **Lead with an actual transfer of responsibility, then compare the choices.** Origin can accept an agent ownership decision; OpenClaw removes proposal review; Copilot's released Assisted behavior conflicts with a literal managed-ask promise. Claude's guarded policy asks and person decider are the useful divergence. The actionable question is which choices should remain with a person. Do not claim these mechanisms or guarantees are equivalent, or give Origin an invented post-cutoff launch day. Receipts are in the source entries above.
2. **Use Pi's deleted interpreter as the concrete continuation of the last issue.** The native service bridge argument now has a downstream deletion, settings migration and real-tool hook identity. Pair the benefit with the cost of porting policy. This is stronger than a general statement that harnesses are getting thinner, and needs no measured throughput claim.
3. **Keep an owner for continuing work.** Hermes's terminal detaches from gateway work; Pi Durable releases a sleeping invocation and requires a persisted wake; Claude MCP Tasks has eligibility, cancellation and expiry limits; Codex native resume does not establish safe replay of external effects. The practical packet is session/task identity, wake owner, unknown-outcome handling and an external action receipt. OpenCode's speculative summary belongs on the latency side of that comparison.
4. **Make the operating-layer counterexample visible.** Paperclip's durable settlement and grant migration, OpenHands' packaged factory recipe, and OpenCode's SDK/state contracts all grow useful surrounding machinery. Vercel's [19 October durability report](https://vercel.com/blog/making-every-harness-durable), carried in the Codex/Claude/OpenCode memos, is another source-specific recovery design. It is not evidence that every named adapter has identical replay guarantees or that provider harnesses already make such hosts redundant.

The weekly should choose one of these as its main argument. The remainder can be concise consequences or links. Do not expand into twelve profile summaries to hold every thread.

### Close old waits in the Operator Brief or short provider notes

- Codex: stable 0.163.0 delivered updater network policy; test saved restrictions on 0.164.0. Keep daemon inventory and experimental lifecycle separate.
- Claude Code: 299 delivered the guard; 302 changed some headless defaults. Latest 310, not stable-selector 308, contains the full later trust/sandbox/Windows-hook set. Ultrareview trust delivery is a partial answer to GitSpawn.
- Gemini: 0.65.0 delivers project-settings refusal and history repairs. The companion's source delivery does not establish Marketplace delivery; downloader hardening does not verify extension HEAD.
- Pi: all four pending release items and Nix delivery are answered. Durable 1.4 adds a wake/migration decision; main-only OAuth and the affected CLI dependency graph remain separate.
- OpenClaw: 10.5 onward and extended 9.33 bind final hook arguments; stable also rejects stale Telegram imports. Name the surviving already-imported-row review and the new Workshop migration. Beta is no longer needed solely for these old waits.
- OpenHands: Canvas 1.28 shipped secret requests and the current local resolver keeps profiles. The stack-key alias and Docker custom-key path remain open, despite nearby repairs.
- Paperclip: stable now carries the former-beta Operator and accounting changes. Inspect the real migrated grants and bills; preview-only review/Stop fixes and Pipelines removal are different decisions.
- Hermes: fresh installs now choose stable, but an embedded MCP server needs the v0.22.5 plugin/launcher migration and actual platform delivery checks.

### Include the light-scan continuations without refreshing their profiles

The [watchlist scan](../harvest/watchlist-scan.md) is the evidence boundary for these eight sources. Their public profiles remain dated 13 October.

- **eve:** This is the most important additional closed thread. [0.79.1 contains the queued-approval timing repair](https://github.com/vercel/eve/compare/0dea0ded869be7db30ae90ed8072d29e6e57df61...649b511efde1f3ceff50e225f0c95ae76d795a71), and [0.81.0 makes the first approval answer final](https://github.com/vercel/eve/releases/tag/eve%400.81.0). The 0.79.0 wait in the last issue has a published answer. Test pre-prompt text, Cancel-then-Approve and unauthenticated answers before restoring consequential tools. Current non-prerelease package 0.83.0 remains a beta product and carries separate provider, rollback, spend-limit and retention migrations. The copied coding-template token repair is not delivered just by upgrading eve.
- **grok-build:** The old forked-worktree directory repair is now below stable 1.0.70, with [1.0.60 cumulative notes](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.60.external.md?generation=1792101112986009). [1.0.59 repairs ignored continue:false hooks](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.59.external.md?generation=1792017262276516); this is narrower than universal fail-closed hooks. [1.0.67 inherits main-checkout allows by default](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.67.external.md?generation=1792628778974656), so independent worktree review needs its explicit opt-out. None of these closes the named background-Git/GitSpawn question.
- **omp:** [18.11.0's ACP approval repair](https://github.com/can1357/oh-my-pi/commit/31191499c28d2283336ae88140515667447253ba), debug-dump redaction and advisor continuation defaults extend the earlier approval/delegation thread. Models-file permissions and several cancellation/cross-session defects still have main-only repairs. The scan does not settle the feature's Rust shipment, startup/memory comparison or extension-port questions. New OMP releases are not permission to assign upstream Pi behavior to the fork, or proof that the rewrite shipped.
- **antigravity:** [1.4.6 shares conversation approvals across the parent/child tree](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.6); choose the initial grant with that audience in mind. [1.4.7 repairs MCP OAuth tokens crossing Google-account switches](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.7). Use these as concrete upgrade checks, not a broad refreshed profile or proof of seamless Gemini migration.
- **omnigent:** [0.19.0 requires per-user delegated Slack credentials](https://github.com/omnigent-ai/omnigent/commit/934dd6fd351dec238713e3fd2cc00738b7bb9542), adds consent/PKCE and schedule approval; coordinate client/bot/server migration. [0.19.1's trust-bundle update](https://github.com/omnigent-ai/omnigent/commit/c4498d7cfc391abd11ebdde9552dbb52f8296bd8) does not update every OS/image trust store. These are new identity/operating checks, not a re-report of the older bubblewrap repair or evidence that shared-editor approval ceased.
- **agent-zero, flue, unreal-agent:** No new action surfaced in the bounded scan. Preserve dated precautions. There is no new evidence here of separate browser identities, restored npm provenance or a current-version Unreal benchmark comparison, respectively. Quiet is not acceptance and does not justify refreshing their profile dates.

### Keep these questions open and out of sweeping conclusions

- Gemini and Copilot extension checkout integrity; Claude's exact withheld GitSpawn path; Cursor's artifact-bound fsmonitor allegation; OpenHands' alias-mediated saved-secret path.
- Codex's complete reviewer audit trail and optional API-comparison bill, despite current free ChatGPT safety checks; Claude's session-specific reviewer/fallback/billing contract.
- Actual review-hour savings for Cursor Rollouts, Origin Agentic thresholds and reversals, Workshop correction burden, Paperclip's shorter manuals and paid browser lifecycle, and Hermes's exact Kanban handbacks.
- OMP's Rust rewrite delivery/performance/port story. This cycle supplies useful fork release changes, not a full sequel to the feature.

These are named next receipts or tests, not reasons to pad the public profiles with a history of our uncertainty. The forward sentences above carry the current decisions; this file carries the history that makes them worth saying.
