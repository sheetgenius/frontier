# Thread Check

Run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
Window: 2026-09-21 through 2026-10-13, inclusive, UTC.
Profile posture: 2026-10-13. Thread review performed 2026-10-14.

This lens checks what the new record completes, contradicts or repairs in the publication's existing claims. It does not turn every new finding into a weekly item. All 22 write-up memos were read in full, together with the public bodies of all prior profiles, the three assigned issues and both features. Relevant draft passages, corrected harvest entries and independent crosschecks were read against those claims. No installer, product, cloned code or site build was run. Only this file was written.

Evidence shorthand below: "harvest" and "crosscheck" mean the named source's files in this run's harvest and verify directories. "Draft" means tmp/refresh-2026-10-13/drafts/<id>/profile.v1.md. The corrected harvest is the record of fact; an earlier crosscheck can describe wording that has since been repaired. A retired claim is not automatically a retraction or a regression.

The baseline needs one exception: content/profiles/unreal-agent.md is dated 2026-09-23, not 2026-09-21. Some other profiles contain checks or explicitly identified leads from after their displayed close. Those are compared as published statements, without moving the refresh window or pretending every repair is an October product change.

## The argument that survives the refresh

"Extensible All the Way Down" located refusal above replaceable components. "Approvals Belong to the App" put approval ownership in the integration. "Before the First Turn" showed that a better judge cannot cover work that never reaches it. This window extends those arguments into different concrete seams: a mod can answer before the classifier, a gateway flag can bypass unattended policy, a local terminal can hold the key to secrets its profile excludes, and an earlier queued answer can approve a later request.

The affirmative movement is equally concrete. Reviewer records become more inspectable; a configured unattended policy finally takes effect; an extended-stable line inherits important fixes; ordinary users gain a sandbox and credential brokerage; agents can prepare automations or watch a deployment. These gains establish new operating primitives. None of the supplied packets establishes a watchlist-wide reduction in human hours or an increase in accepted company output.

The two features need narrower updates. Codex's institution around the reviewer gained a useful synchronous audit export, while its default terminal became a client of an experimental, independently updating service. OMP's Rust successor still has not shipped, while the TypeScript line kept adding real operating features. Neither thread warrants declaring its earlier thesis settled.

## codex

**Prior thread.** The August feature, content/features/2026-08-23-codex-the-body-not-the-pencil.md, asks whether reviewer decisions become auditable, whether Guardian V2 defaults on, whether Code Mode graduates and whether App Server acquires a support contract. The September issue and profile repeat default-off Guardian V2 and advise package/model pinning. The prior profile's CI advice at lines 252-260 says an undecided checkout must be trusted to retain AGENTS.md.

**Disposition.** Auditability is partly answered: 0.158.0 adds opt-in OTLP export for completed synchronous assessments, including rationale, risk and authorization. It excludes cached V2 approvals; usage labels are not prices or invoices. Guardian V2 remains off through stable 0.162.1 and the checked preview. The older approval reviewer is a separate enabled feature. Code Mode discovery and settlement primitives are tagged, with named feature/model qualifications, rather than proof that every earlier experimental surface graduated. The experimental support question remains open.

Package pinning needs a material new qualification. From 0.157.0, eligible interactive launches use a shared server that retains its startup environment. Eligible seeded npm/Homebrew server packages can follow latest independently of the CLI. This is source-derived behavior, not an observed fleet update, and codex exec does not use this daemon path. The AGENTS.md consequence is a historical repair: only explicit Untrusted suppresses the file; project config/hooks/exec policies have a different gate.

**Draft instruction.** Keep the server/CLI distinction and limited OTLP claim. Replace the public opening "Contrary to our earlier CI guidance" with the current rule. Do not describe User mode's skipped background scoring as the absence of every synchronous review; require_guardian is an exception.

**Profile sentence:** For interactive Codex, [hold and record the running app-server version as well as the CLI version](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L48-L68), because an eligible shared server can update while its npm-pinned client stays put.

Evidence: harvest sections 1, 2, 6, 7 and carry-forward lines 447-461; crosscheck section 7, lines 249-280; draft lines 321-370. The [OTLP change](https://github.com/openai/codex/commit/30758e5c77c14e6ddcc53a6c7407a477fed4ac76) partially answers the feature's audit question; the [explicit-Untrusted test](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agents_md.rs#L63-L66) repairs the CI advice.

## claude-code

**Prior thread.** The last issue recommended restricted graders on stable, treated malformed managed settings as fail-closed and reported a silent Plugin4Shell repair. The profile also says a stripping gateway stalls a headless run, AGENTS.md lacks some cloud-provider coverage, and stable had frozen before a large jump.

**Disposition.** The grader recommendation needs a later release: neither restricted nor an explicit tools list covered late-registering built-ins until 2.1.295. Stable 2.1.287 still lacks that fix. The new OS-denied managed-file exception in 2.1.285 is distinct from parse failures, which still stop startup. The gateway claim was already wrong at the prior close: headless prints a notice and continues on billed local review.

AGENTS.md coverage reaches the named providers in 2.1.281, with loader precedence caveats. Stable moved seven times this window; the prior eighteen-day freeze is history, not a standing cadence prediction. Plugin4Shell now has a vendor advisory published October 9 for a fix shipped in 2.1.179 in June. This closes disclosure, not a new October vulnerability or patch. The second GitSpawn path and actual platform rollout of server review remain unsettled.

Mods deepen the earlier plugin-gate argument. Default-on mods can answer tool.check after classic rules/hooks and skip the classifier when they approve. Deny precedence depends on whether the guard loads; mod code's own process/filesystem access remains outside tool rules. This cannot be compressed into "auto mode reviews every call."

**Draft instruction.** Preserve the current grader floor, delayed disclosure and bounded GitSpawn watch. Carry the concrete grader sentence instead of recreating a correction section.

**Profile sentence:** For graders, [pin 2.1.295 or later and retain containment](https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L123), because earlier restricted and explicit-tool-list runs could still expose built-ins registered after launch.

Evidence: harvest sections 1, 5, 6, 10, 13, 14 and carry-forward lines 401-410; crosscheck lines 187-237 and 282-294; draft lines 300-320 and 332-338. The [Plugin4Shell advisory](https://github.com/anthropics/claude-code/security/advisories/GHSA-pq7j-f95f-qfcv) names the attacker-controlled plugin repository and fixed build.

## gemini-cli

**Prior thread.** The profile and September issue locate build-file guards in preview, describe a clean weekly promotion train, report AIR's deprecation answer and leave RemoteSessionInvocation's destination undocumented.

**Disposition.** The build-file gate reaches stable 0.61.0 on September 23. The final non-interactive ASK-to-DENY conversion first reaches 0.63.0 on October 6. This distinction is present in the corrected harvest and crosscheck but is lost in the draft's "From 0.61.0 ... are denied headless" sentence. Replace that sentence; do not backdate the final denial behavior. The gate applies to recognized edit tools with extractable targets, not every filesystem write.

Plan Mode supplies the useful complication: 0.63.0 directs headless planning toward implementation, but the exit-to-YOLO authority transition predates this window. A former wait instruction was never a containment guarantee. Manual promotion and about 67 minutes of preview exposure for one cherry-pick defeat a promised testing week.

Google now directly documents the end of new Standard/Enterprise Code Assist subscriptions, with separate existing-license, renewal and contract-end dates. That closes part of the support question, without establishing universal CLI/API shutdown or Google's future patch policy for Plugin4Shell. FETCH_HEAD remains unchecked. Remote-agent definitions already documented the destination; that was a historical reading error.

**Draft instruction.** Correct the build-file chronology, retain the existing-subscription qualifications and retire the guaranteed weekly-train language.

**Profile sentence:** [Build-file tool gates are in stable from 0.61.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0), with [the final headless ASK-to-DENY conversion arriving in 0.63.0](https://github.com/google-gemini/gemini-cli/commit/2fe7c2d3f065dc40ad573d50b2091116f8a4aa18), so verify the version and tool path your job uses.

Evidence: harvest sections 1, 3, 5 and carry-forward lines 340-353; crosscheck lines 203-219 and 475-479; draft lines 323-329. The primary diff independently re-opened for this lens contains the final nonInteractive conversion. The [sunset notice](https://docs.cloud.google.com/gemini/docs/codeassist/sunset) is mutable current documentation displaying an October 13 update date, not archived window bytes.

## openclaw

**Prior thread.** Three issues waited for the approved-exec fix; the September issue closed main-stable delivery but warned that extended-stable 2026.7.35 lacked it. The old profile also called filesystem containment a validation-time barrier and advised Workshop pending policy as the skill-edit control.

**Disposition.** The August extended-stable line closes the remaining delivery watch. Exec byte binding, the symlink-then-dot-dot validation repair and Codex child-tree termination are inherited by 2026.8.35. July 7.35 itself did not acquire those fixes. The August line's narrower defaults are a real option; later backports still require mechanism-specific checks.

The filesystem description needs repair: current reads/edits use fs-safe root handles and writes have root-bound handling and an authority guard. Residual raw-path consumers remain to inspect; their existence does not disprove all shipped operation-time protection. Workshop pending alone never covered autonomous auto maintenance. Use propose or off for autonomous mode when review must precede those edits.

The new hook-argument defect is a separate watch: stable and extended-stable can apply an ordinary hook's replacement after trusted inline approval; beta.3 binds final parameters. Completing August exec delivery does not certify this different approval path. Chat-driven setup and broader bot admission move the attention question toward who may start administrative work.

**Draft instruction.** Keep the August-line closure and residual scope limits. Remove "This corrects earlier advice" from the Workshop paragraph; state the effective controls directly.

**Profile sentence:** [Extended-stable 2026.8.35 inherits the August exec, workspace-validation and sandbox-stop repairs](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35), making it a narrower-default option whose later fixes still need checking in the release tree.

Evidence: harvest sections 1, 4, 7, 19 and carry-forward lines 355-360; crosscheck lines 60-68; draft lines 299-305 and 334-335. Verified [exec ancestry](https://github.com/openclaw/openclaw/compare/ab5611f0...v2026.8.35), [validation ancestry](https://github.com/openclaw/openclaw/compare/cc027149...v2026.8.35) and [child-reaper ancestry](https://github.com/openclaw/openclaw/compare/fd8326c5...v2026.8.35) are separate receipts.

## hermes-agent

**Prior thread.** "Before the First Turn" set the GitSpawn floor at v2026.9.7. The profile promised immediate unattended refusal, treated vault and real-profile browsing as opt-in and left the lead engineer's leaner-core direction untagged.

**Disposition.** The configured unattended policy was bypassed by the process-wide gateway ask flag through v0.21.6. Both repairs first ship in v0.21.7. A job can now stop where the guardian formerly approved it, or a saved approve setting can become effective. Earlier denies/hard floors and separate container/YOLO paths remain qualifications. The old no-notifier API outcome was unanswerable pending, not a universal five-minute stall.

The startup Git story also advances: clean/smudge/process filter and LSP project-code paths move the current floor to v0.21.6, before the gateway repair adds v0.21.7. The earlier fix was real but insufficient for every later path. Shell hook action:approve now asks, while decision:approve allows, from v2026.9.24. Optional memory-provider extraction is tagged, with catalog custody and consent obligations; a fresh default home still uses built-in memory. Vault availability was already broader than the old opt-in claim. Dashboard OIDC also predates the window; no SSO was a historical error, while role/group authorization remains open.

**Draft instruction.** Preserve the repaired unattended branch and lean-core qualifications. Replace "Retire the old v2026.9.7 floor" and "Our earlier profile got this wrong" with current operating facts.

**Profile sentence:** On an unattended Gateway, [upgrade to v0.21.7 and inspect approvals.unattended_mode](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/tools/approval.py#L910-L942), because the repaired webhook path now consults that setting instead of bypassing it through the guardian.

Evidence: harvest sections 1, 2, 10, 11, 14 and carry-forward lines 464-470; crosscheck lines 61-70 and 137-148; draft lines 360-376. Scope excludes treating the setting as a universal gate on every action.

## paperclip

**Prior thread.** The September profile emphasized hiring defaults, self-resolved confirmations, responsibility-bound credentials and review/sandbox gates. It left budgets/watchdog/CEO controls as old main-only uncertainty and predicted Grok would stall after dontAsk was removed.

**Disposition.** New standard-agent authority materially widens in v2026.1012.0. The fourteen grants include unscoped tools:use, which is evaluated after applicable policies but before a tool profile on a reachable connection. New agents are affected; existing agents are not backfilled, and low-trust/built-in exclusions matter. This is why an org chart or restrictive profile alone is insufficient. Certain scoped-grant forms are repaired in the same release, so improved matching and wider defaults coexist.

Confirmations can now use an agent's interpretation of the latest user reply; human_only is the human-resolver control, while not_creator may admit another agent. The old Grok consequence was wrong: alwaysApprove was already true. Budgets, watchdog and CEO controls have been tagged since v2026.626.0, and the secret access trail is board-queryable. These are historical closures, not new October capability launches. Redaction still holds; upgrading does not prove historically exposed keys were rotated.

**Draft instruction.** Preserve the grant-before-profile decision order, new-agent scope and corrected Grok flags. Do not reintroduce a guaranteed beta-to-stable delivery promise or present prompt cuts as measured success.

**Profile sentence:** For new standard agents on 2026.1012.0, [scope or remove the unscoped tools:use grant when a tool profile is meant to restrict access](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L1466-L1480), while retaining connection access and earlier policy checks.

Evidence: harvest sections 3, 4, 7 and carry-forward lines 388-401; crosscheck lines 62-68 and 94-98; draft lines 311-335. [Default grants](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28) establish the affected population.

## openhands

**Prior thread.** The September issue and profile called profiles enforceable scopes for MCP and secrets, qualified by an unperformed live test. They left Docker execution workspaces main-only and noted that Canvas pages sometimes preceded their pinned backends.

**Disposition.** The broad secret-boundary endorsement reverses on the default local runtime. Canvas v1.27.1 aliases the stack key as OPENHANDS_AUTOMATION_API_KEY; SDK v1.54.0 leaves that alias in terminal subprocesses; the authenticated secret-value route lacks a conversation-profile check. This is a verified source path, not a reproduced exploit. Server filtering still exists, and SDK v1.51.0 separately repairs delegated tool/MCP escalation.

The working container option is a full agent server per conversation. Client code for an execution-only SDK design tagged, but that design closed unmerged; tagged client code is not working delivery. The specific outer-key alias is not copied wholesale into the whole-conversation container, without establishing universal isolation. Network HTML key injection closes in v1.25.0, while the local terminal path survives. The single-env-key Docker authentication gap is another surviving issue. Canvas v1.27.1 repairs a broken 1.27.0 image; hosted Cloud dates remain separate from enterprise tags.

**Draft instruction.** Keep the secret path and positive delegation/container progress distinct. The profile must not revive "profiles became scopes" as a blanket credential guarantee.

**Profile sentence:** On the default local runtime, [profile secret selection is a launch default rather than a credential boundary](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522), because a terminal-enabled conversation can hold the stack key used to read other saved secrets.

Evidence: harvest sections 1, 4, 5, 14 and carry-forward lines 408-416; crosscheck lines 68-72 and 142-144; draft lines 315-343. The [launcher alias](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L906-L915) and [subprocess sanitizer](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-sdk/openhands/sdk/utils/command.py#L16-L30) complete the source-derived path.

## pi-coding-agent

**Prior thread.** The September issue used HarnessTax to argue for subtraction. The profile made "no MCP" a product distinction, treated defaultTools as a boundary and waited for the facet/plugin host to become installable. The OMP feature located Pi's redesign in TypeScript, separately from OMP's Rust branch.

**Disposition.** Built-in CLI MCP and codemode arrive in 0.99.0 on September 29. Trusted project server configuration can launch host-side stdio processes inheriting Pi's environment; isolating only bash leaves those processes outside it. CLI delivery does not imply SDK built-ins load automatically. Tool declarations are no longer a sufficient callable-set shorthand, especially with codemode/deferred MCP exposure.

The old facet-host watch is obsolete: the experimental harness leaves pi-agent-core in 1.0.0 and the client/server/plugin stack is removed in 1.2.0. Pi Durable is separately installable and experimental; it is not graduation of that old export. The headless trust question was already answered: default ask declines protected resources without a UI; context files remain a separate untrusted-input surface. HarnessTax is historical evidence for its tested versions and tasks, not a current 1.2.0 or long-horizon result.

**Draft instruction.** Keep MCP as a deliberate reversal of the earlier distinction and separate whole-process containment from tool hooks. Delete "The earlier profile confused no prompt with no decision"; the present decision rule carries the repair.

**Profile sentence:** Since [0.99.0 brought MCP into the CLI](https://github.com/earendil-works/pi/releases/tag/v0.99.0), review the configured servers and [contain the whole Pi process when host-side extensions and stdio servers must share bash's boundary](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L13-L17).

Evidence: harvest sections 1, 2, 3, 5, 7 and carry-forward lines 472-482; crosscheck lines 76-84 and 125-129; draft lines 274-277, 302-329 and 341-360.

## agent-zero

**Prior thread.** The August issues emphasized a shared browser identity and wide ACP host grants. The September profile waited for v2.13, a nested-secret fix and confirmation of whether browser sign-ins still crossed chats.

**Disposition.** v2.13 ships on September 23 and v2.14 on October 13, with CLI v2.14 and Launcher v1.9 as companion decisions. The retained parallel fix addresses unresolved placeholders through the worker argument dictionary; the recursive change was reverted. No secret-value disclosure is demonstrated by this record, and ancestry alone would have overstated what shipped.

The internal browser remains one sign-in profile; panel-state repairs do not create independent cookie stores. CLI v2.14 separately keys host shell state by chat context and session number. That is useful concurrency without OS-user or browser-identity isolation.

Telegram/WhatsApp now administer plugins and profile permissions. Empty sender lists admit every sender once the integration is configured; plugin toggles are instance-wide, while permission edits use the active project's profile scope or global scope without a project. ACP's broad grants remain editor/CLI connection defaults, not evidence of an unauthenticated public listener. input_remote is a separate execution-capable ID that an old exec-only deny can miss.

**Draft instruction.** Keep the secret-placeholder qualification and the distinction between separated shells and shared browser identity.

**Profile sentence:** [CLI v2.14 separates host shell sessions by chat](https://github.com/agent0ai/a0-connector/commit/dd5468f0a450973edc73f6fa48638505347012c9), while [the internal browser still shares one sign-in profile](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/helpers/runtime.py#L3192-L3217), so separate trust groups still need separate workcells.

Evidence: harvest sections 2, 3, 4, 5, 11 and carry-forward lines 297-303; crosscheck lines 63-77; draft lines 230-242 and 258.

## eve

**Prior thread.** The last three issues followed dropped queue policy and then last-sender authorization. The profile treated 0.52.5/0.56.0 as useful floors, said parked approval did not brake follow-up turns and recommended staying on 0.63.0 against local development editing.

**Disposition.** Held turns replace the old follow-up scenario, but introduce a new confirmed identity defect in 0.70.0 through 0.77.0: approved calls ran with the approver's credentials. Through 0.71.2 the rest of the turn could borrow that identity too. 0.78.0 makes consent separate from execution credentials. This is related to the earlier identity theme, not evidence that the same defect existed before the confirmed range.

Stable 0.79.0 still accepts a queued approve reply that predates its later prompt; the admission-sequence repair is main-only. The credential fix cannot close this intention-binding problem. Deferred workflow dispatch also needed a 0.69.0 fix, so staying on 0.63.0 is not safety advice. Local mounts must be disabled deliberately. An internal conformance harness now exists, but upstream reports it passed on both vulnerable and repaired code; existence does not settle the operator's specific denial tests.

**Draft instruction.** Preserve both the fixed identity boundary and the unshipped queued-text repair. Replace the universal "everything merged ships" posture with dated releases.

**Profile sentence:** [0.78.0 keeps approved calls under the requester's identity](https://github.com/vercel/eve/commit/9559de83b65e89c24172c2b9c1a80382033556aa), but on 0.79.0 [an earlier queued reply can still approve a later prompt](https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244), so test that sequence before relying on typed consent.

Evidence: harvest sections 1, 2, 4 and carry-forward lines 395-401; crosscheck lines 38-50 and its queued-text miss; draft lines 257-269 and 297-299.

## omp

**Prior thread.** "Oh My Pi, without the Pi" expected an incompatible Rust/Python successor, while saying the installed program was still TypeScript. The September profile confirmed an unshipped, quiet Rust branch and unconditional project configuration/extension loading.

**Disposition.** No Rust cut completes the feature's migration watch. The independent check finds omp2 still at 2f92f3b5, dated September 4, with no common ancestor or containing release tag. Meanwhile 44 stable releases in this window and tagged extension work show the shipping TypeScript line is materially active. The August report of paused core work must not become a current assumption or a claim that a Rust migration is imminent.

The refusal theme advances on the TypeScript line: 18.10.4 lets extensions revise and answer plan review before a terminal user, while project extensions still load without trust approval. Tool approval policy remains downstream. The Ctrl+Enter guard is separate positive work, not proof that a person made the plan decision. Pi import rewriting and selected Pi 1.x ports establish compatibility work, not inherited Pi trust behavior.

**Draft instruction.** Add one channel sentence in existing prose to keep the feature's unresolved migration visible; do not add a Rust-history section or revive speed predictions.

**Profile sentence:** [18.10.4 is still the TypeScript shipping line](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4), while the [Rust successor remains untagged at its September 4 tip](https://github.com/can1357/oh-my-pi/commit/2f92f3b5aa2035d21c9f016f9ff6350795e5685a), so judge extension compatibility against the program you can install.

Evidence: harvest sections 5, 7, 8, 9 and carry-forward lines 432-434; crosscheck lines 116-122 and 168-179; draft lines 148-158 and 174. No measured Rust startup/memory result, public successor release or completed extension migration is established.

## flue

**Prior thread.** The September issue welcomed Changesets and per-package releases. The profile advised reading package changelogs and left allowed-tools wording as a main-only correction, while warning that content capture was on by default.

**Disposition.** 2.3.0 reverses the release surface: Changesets, per-package changelogs, main's release workflow and 27 public test files are removed; npm provenance disappears after 2.2.2. Read the root changelog at the tag. Source remains inspectable; this does not establish the absence of private tests.

The allowed-tools doc/type correction ships in 2.1.1 on September 23, without adding enforcement. 2.2.0 documents an application-built approval pattern over stored arguments and authenticated decisions, not a new built-in approval service. This reinforces "Approvals Belong to the App." 2.3.0 repairs finish-hook stale state, process-group cleanup and interceptor identity. Keeping the newest attested 2.2.2 does not provide those repairs. Trace content remains opt-out.

**Draft instruction.** Preserve the repair/provenance trade and root-changelog change; do not leave package-changelog watching or the main-only allowed-tools watch active.

**Profile sentence:** [2.3.0 repairs finish hooks and process cleanup](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L3-L16), but [drops npm provenance and the public release/test machinery](https://github.com/withastro/flue/commit/95a8c86244557e4c257b0fbd7eef2481de2c2150), so supply the upgrade checks your deployment requires.

Evidence: harvest sections 1, 2, 4, 5, 10, 11 and carry-forward lines 302-315; crosscheck lines 102-200 and 370-379; draft lines 247-282. Issue-to-Discussion conversion is not a falsely claimed implementation or a shipped deletion API.

## antigravity

**Prior thread.** The September profile used 1.2.6 as the Remote Control floor, recommended a headless process reaper, lacked a readable sandbox description and treated a downloaded digest as a pin.

**Disposition.** 1.3.4 reveals a separate daemon-serve gap: those sessions only now use saved settings.json. The earlier session-mode fix was real but does not settle the daemon path. Browser-approved rules that survived removal are also repaired in 1.3.4, without proof that old saved copies are cleaned on upgrade.

1.2.9 reverses headless process persistence: background daemons now end with the run, and waits have a cap. Start deliberate persistent services outside agy. Vendor sandbox documentation existed before this window; finding it closes a reporting gap, not a new sandbox launch. Enforcement remains unprobed, and 1.3.3 exposes a macOS read gap.

The installer already checks its updater manifest; automatic updates still defeat a lasting asset pin without the explicit opt-out. Interactive plan review separates from tool bypass in 1.3.2; headless plans still auto-proceed. Do not transfer that interactive repair to headless jobs.

**Draft instruction.** Retain the daemon-specific floor, upgrade/revocation uncertainty and updater-aware pin.

**Profile sentence:** For Remote Control daemons, [use 1.3.4 and review earlier browser-driven sessions](https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L11), because the daemon only now loads the saved permission settings.

Evidence: harvest sections 1, 3, 4, 6, 8 and carry-forward lines 318-339; crosscheck lines 48-65; draft lines 217-262. The old effective daemon policy remains unknown.

## github-copilot-cli

**Prior thread.** The September issue emphasized local-network restrictions, managed settings, falsey allow-all and the unresolved Plugin4Shell checkout. The profile called this the most pinnable closed agent and said releases lacked checksum files.

**Disposition.** Local sandboxing becomes generally available in 1.0.93, with credential brokerage progress in 1.0.92. It stays default-off. User keys remaining in config.json are ignored from 1.0.93, so availability is not rollout. 1.0.88 separately extends managed policy into ACP/AHP/server entry points; exact effective-policy enforcement remains to probe.

The old checksum absence was already false at baseline. The installer checks available sums but can skip on fetch/utilities failure. Package pinning must disable the default runtime updater. Old macOS "enable local network" advice is now incomplete: credential masking's proxy can still prevent self-connect. Windows proxy rules are cooperative, a distinct platform limit.

Stable 1.0.97 carries resume/disabled-hook/canceled-write repairs that an early snapshot left in preview. Plugin4Shell still has no named repair through 1.0.97; silence proves neither current exposure nor safety.

**Draft instruction.** Retain settings migration, explicit enablement and updater opt-out alongside the positive GA statement.

**Profile sentence:** [Local sandboxing is generally available from 1.0.93](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L42), but move user settings to settings.json and enable it explicitly before treating an upgraded host as contained.

Evidence: harvest sections 1, 2, 3, 7, 10, 11 and carry-forward lines 300-307; crosscheck lines 70-74 and 126-130; draft lines 169-191. The [ignored old settings](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L45) are a separate release fact from sandbox availability.

## cursor

**Prior thread.** The September issue/profile described a cloud-only beta coordinator unavailable to Enterprise, an unnoted CLI and a corporate/model-supply uncertainty. They warned about self-hosted egress and an unresolved fsmonitor allegation.

**Disposition.** Projects now includes Enterprise in documentation, without a verified GA event or per-Project budget/approval/concurrency control. Other account/service budgets do not settle that ceiling. Per-surface release notes improve discoverability but can describe work absent from the recorded default CLI artifact. A versioned download still updates unless its channel is static.

The material containment change belongs to the IDE: 3.24's October 9 note says Run Everything runs without the sandbox, with an undocumented permissions.json exception. The CLI already had unrestricted/no-sandbox mapping; do not call it a newly introduced CLI defect. Auto-review documentation allows classifier-approved outside retries and does not establish a security boundary.

Rollouts expands the operating loop beyond merge into deployment monitoring, issue creation and repair handoff, while retaining human merge/rollback. This directly tests the assumption that provider harnesses leave the company operating layer untouched. The OpenAI cutoff date and fsmonitor fixed-build question remain unanswered; deleting the corporate narrative from the draft is not their resolution.

**Draft instruction.** Keep IDE attribution, retained human rollback and the open budget/build questions separate.

**Profile sentence:** The [3.24 IDE note makes Run Everything an unsandboxed choice](https://cursor.com/docs/release-notes/ide#oct-9-2026), so teams that relied on containment should select a sandboxed mode and test the restriction they need.

Evidence: harvest sections 1, 3, 8, 9, 10 and carry-forward lines 375-381; crosscheck lines 88-92; draft lines 180-209 and 278-284. [Rollouts](https://cursor.com/changelog/rollouts-and-security-reviewer) is a post-merge workflow capability, not autonomous rollback.

## grok-build

**Prior thread.** The September profile said the pinning problem was solved, that a matching crate version identified the public sync to read, that enterprise lagged and that hooks failed open. The weekly left GitSpawn unresolved.

**Disposition.** The lasting-pin and complete-source mapping assurances do not hold. Named installation leaves auto-update enabled unless separately configured. The September 29 mirror labeled 1.0.45 cannot account for stable 1.0.52's complete binary, including the documented Cursor worker. A mirror label and later note are not a source correspondence proof.

Enterprise is now 1.0.53, ahead of stable 1.0.52. Generation-pinned per-version notes provide fuller operational notices, including approval-card and Allow once scope repairs. These are vendor-described binary repairs, not tested retrospective assurance. Hooks gain useful HTTP support but request errors still fail open; imported Claude/Cursor semantics need translation.

GitSpawn remains unresolved on current binaries. The report tested delivered directories carrying malicious .git/config, not an ordinary clone that would not transfer that local config. Wrong-checkout fork behavior is fixed in non-stable 1.0.54, not stable 1.0.52.

**Draft instruction.** Preserve the distinction between named installation, updater policy and source correspondence. Do not turn mirror presence into a current shipping guarantee.

**Profile sentence:** For stable 1.0.52, [disable automatic updates to hold the installed version](https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/scripts/install.sh#L207-L345) and use the shipped versioned notes rather than a matching public-mirror label as the complete record.

Evidence: harvest sections 1, 2, 3, 8 and carry-forward lines 324-331; crosscheck lines 164-198; draft lines 170-195. Hook repairs do not close the failure-path watch.

## deepseek-harness

**Prior thread.** The August issues waited for Web login and a stable release. September correctly reported a login and placed extra session-log upload on alpha, recommending rc and telemetry switches. It also claimed headless NDJSON/resume at an rc pin lacking those flags.

**Disposition.** Session-log upload reaches the ordinary rc line in 0.1.7-rc.1 on September 23 and remains enabled at 0.2.0-rc.2. OTel's environment switch does not disable it. Eligible DeepSeek-adapter requests can carry bounded pending events; re-enabling resumes backlog recorded while disabled. Desktop analytics is another control.

The real Web login survives, but it does not establish separation between the agent and operator. Source confirms an owner-readable signing key, same-user read reach and operator admission for a valid cookie. An outer environment remains required; this is not an executed remote pre-auth exploit. Headless flags are now on rc, so the old unsupported recommendation is repaired at a runnable channel.

No stable release appears. Approval remains replaceable, optional Auto unload retains Full Access, and Host plugins/terminal reach rc. Cordis provenance resolves to DeepSeek's vendored fork; ranged dependencies defeat a version-string-only freeze. Six external disclosures narrow the old advisory-free story, with different mechanisms and unresolved current-version mappings. Schedule's model-written text framed as user messages is a separate trust change.

**Draft instruction.** Keep the rc privacy reversal and login/inner-boundary distinction. Remove "Our previous recommendation ... was wrong" from the headless paragraph and state the current versioned capability.

**Profile sentence:** On [0.2.0-rc.2, disable session-log-deepseek separately before the first request](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/src/index.ts#L51-L77), because choosing rc or disabling OTel no longer removes the enabled session-log upload.

Evidence: harvest sections 2, 10, 18 and carry-forward lines 366-368; crosscheck lines 76-82 and 208-214; draft lines 202-218. The wording applies to eligible adapter requests rather than every model request.

## heypi

**Prior thread.** All three issues said heypi had no material change. The September profile called its contract sound, its audit record a necessary precursor to every executed call and the older admin surface unauthenticated until the rewrite.

**Disposition.** No new heypi release exists, but "unchanged beta" is not "unchanged deployment." just-bash 3.6.0, eligible under the optional runtime's range, adds createExclusive, which bypasses the wrapper's named-mutator denylist. With mktemp available and a writable staged root, empty entries can be created in the purported read-only skills mount. This proves an integration path, not arbitrary outside-root writing or overwritten skill content.

Queryable JSONL closes the old discoverability question but is not tamper-evident or a record of every execution. Fast allow/block/absent-policy and reused-approval paths can return before request auditing. Older 0.1.3 and 0.2.0-beta.0 admin implementations already authenticated by default; the later rewrite fix cannot establish blanket prior exposure or justify that blanket rotation advice. Memory is default-on in beta.2 and omitted runtime uses host Bash, with different defaults on the legacy stable line.

Pi 1.x and Durable do not arrive through heypi's sub-0.80 range. A forced override requires a port. Keep the upstream hard-link and TOML fixes while repairing the wrapper; reverting to its old just-bash lock is not a safe general remedy.

**Draft instruction.** Replace the public admin take-back section with a direct current rule; retain historical evidence here. Remove watchlist-superiority or exhaustive audit claims.

**Profile sentence:** Even with heypi still on beta.2, [just-bash 3.6.0 can pass temporary-entry creation through its read-only skills proxy](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-just-bash/src/index.ts#L26-L64), so inspect the resolved dependency and validate the mount before trusting it.

Evidence: harvest sections 9, 11, 16, 17 and carry-forward lines 271-273; crosscheck lines 143-159 and 165-173; draft lines 230-248. The source-supported path requires command availability and service-account write permission.

## agent-flywheel

**Prior thread.** The September issue corrected v0.7.0 as an installable recommendation. The profile put reviewed plugin installation and the Astra alias on main, described holds as freezes and advised a tagged installer on a disposable VPS.

**Disposition.** The reviewed third-party plugin flow and native swarm admission reach v0.10.0. Neither confines stock agent commands: Claude/Codex bypass shortcuts and Antigravity's permissive wrapper remain. Safe mode still does not revoke old sudo privilege.

A tagged installer is only one part of its reproducibility contract: upstream installer checksums default to main. The published-tag factory record passed eight critical smoke checks but exited 1, and the release withholds complete install qualification. A later repin changes accepted bytes without changing stable scripts, with another factory run requested. A hold is path-specific; some source-build update paths and best-effort binary retention defeat a universal freeze/rollback promise.

The earlier history correction can leave today's profile. The new attention evidence is a review queue and reported monitor stalls; main's deferral repair is untagged. Neither agent count nor repository activity settles verified progress per human hour.

**Draft instruction.** Keep the plugin-flow closure and its limited scope, with separate installer/ledger identities and acceptance limits.

**Profile sentence:** [v0.10.0 ships reviewed third-party plugin installation](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L1-L62), but its stock agent bypasses remain and [the checksum ledger still needs a separate pin](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L173-L185).

Evidence: harvest sections 1, 7, 8, 14 and carry-forward lines 369-378; crosscheck lines 54-64 and 100-102; draft lines 199-221. Passing component smokes is not a successful assembled-host receipt.

## omnigent

**Prior thread.** The September issue explicitly answered the outage-layering question as no opinion/fall-through to the wrapped harness. The profile also said unpriced models failed closed, left root-child budgets untagged and described direct editor shell access.

**Disposition.** The no-opinion read was already wrong from v0.13.0: merged code emits ASK on Claude/Codex policy-server outages. Whether a deployed bypass-mode harness honors it remains untested. The new bounded response/tool-result wait is separate and can fail open after at most 120 seconds. Do not transfer that behavior to the tool-call admission phase.

Missing total_cost_usd with nonzero reported tokens asks; it is not unconditional refusal. The approval is root-scoped while the predicate holds. Root policies reach native children from v0.15.0, closing that earlier release watch. Ordinary editors lose the raw shell in v0.15.0 but retain approval authority; public Edit can widen that audience with administrator opt-in.

Five October 13 advisories move the patch floor to 0.18.0, including affected Linux bubblewrap helpers escaping via host temporary files. The old distinction between an unsandboxed runner and reassuring containment cannot stand alone. Patch execution hosts and restart helpers, as well as upgrading central services. This is a concrete sandbox repair, not a claim that every sandbox/provider is equivalent.

**Draft instruction.** Remove both public "Correction:" prefixes. Keep explicit ASK, missing-price predicate and pair-test uncertainty in ordinary current prose.

**Profile sentence:** During a policy-server outage, [Omnigent's Claude Code and Codex hooks emit ASK](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/native/native_policy_hook.py#L543-L584), so verify that the deployed harness honors it in the mode you actually run.

Evidence: harvest sections 6, 7, 8, 13 and carry-forward lines 311-318; crosscheck lines 97-101; draft lines 162-176. The [bubblewrap advisory](https://github.com/omnigent-ai/omnigent/security/advisories/GHSA-v3vj-mch3-x6c2) carries the separate upgrade/restart action.

## temporal-agent-harness

**Prior thread.** The September issue/profile valued durable approvals while warning about an unauthenticated all-interface server, remembered tool-name grants and unreleased first-class messages. It waited for auto approval and history-custody guidance.

**Disposition.** First-class messages and opt-in auto approval reach prerelease 0.5.0 on September 30. Removing the packaged slash-command skip route does not remove examples' policy-changing handlers. model_callable=false is a tool-generation hint, not client authorization.

Wildcard CORS, formerly main-only, ships in 0.5.0 while the server remains unauthenticated and all-interface through 0.6.0. Browser/network reachability is conditional, but loopback alone is not a complete browser boundary. Auto can deny without asking a person; generic errors/unusable results escalate, while Jev-specific thresholds and data transfer belong to that evaluator. A remembered name bypasses it only while the name remains allowed.

0.6.0 moves Monty execution into the workflow, making worker/interpreter versions part of the history contract. Old batch activities disappear without an established compatibility path; replay-test the cutover rather than predict universal failure or prescribe an untested reset. Current packaged-source/publishing equality improves delivery evidence without erasing the old moved-tag history or establishing independent review. History/TypeSafe retention remains open.

**Draft instruction.** Close the two delivery watches, preserve prerelease status and retain the unchanged/widened server boundary in the same current read.

**Profile sentence:** [0.5.0 delivers first-class messages and opt-in automatic approval](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.5.0), while [0.6.0 still needs application authentication and origin checks around its approval routes](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/web/app.py#L176-L184).

Evidence: harvest sections 1-4 and carry-forward lines 241-250; crosscheck lines 71-95; draft lines 113-149. Durability remains distinct from authorization and idempotent side effects.

## unreal-agent

**Prior thread.** The September 23 intake said no benchmark results or scored method were published, called a Docker look-alike namespace unclaimed and recommended putting the thin loop inside an external box.

**Disposition.** The benchmark absence was false at intake. A September 22 archived launch post already contained four tables and public Harbor links for three suites. Those vendor records support a lower aggregate input-token direction, without independently reproduced dollar accounting, exact score aggregation or a public release identity for the benchmarked builds. This is a historical repair; do not announce it as an October evaluation or claim v0.3.1 saves the reported percentage.

The look-alike account predates launch; inspected public data does not establish vendor ownership or a future transfer. Keep the digit-one image spelling without the false absence claim. v0.3.1's packaged TUI is a material new workstation entry point to the existing no-approval, externally contained design. It uses the user's shell/environment and can reuse Codex credentials without inheriting Codex approvals or sandboxing.

All-kind restart deduplication improves the earlier durability promise, while operation errors arriving through Updates, unknown cancellation outcomes and failed-response tool dispatch limit what a successful method return or quiet process proves. None of these observations establishes end-to-end productivity.

**Draft instruction.** Keep the vendor experiment as contrary evidence to a simplistic "harness engineering adds no value" read, with precise accounting/build limits. Do not reinstate no-results or current-release savings claims.

**Profile sentence:** [The vendor's September 22 runs give the async-loop claim experimental content](https://web.archive.org/web/20260922183130/https://unreallabs.ai/blog/unreal-agent/), but [their missing inference-cost accounting and unassigned public build identities](https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6) still call for a comparison on the version you install.

Evidence: harvest sections 1, 9, 15, 16 and carry-forward lines 289-313; crosscheck lines 134-148; draft lines 120-136 and 192-213. The previous profile's actual date is September 23.

## What the next weekly should pick up

The weekly should advance a few connected arguments, not enumerate all 22 refreshes. These are recommendations for the issue synthesizer, separate from the profile sentences.

1. **Approval needs an action, an identity and a moment.** Use Eve's 0.78.0 requester-identity repair as the concrete case, then its still-unreleased queued-text repair to show why durable consent must bind to the request that existed when the answer arrived. OpenClaw beta.3 binds a hook's final arguments; OMP 18.10.4 lets software answer plan review; Claude mods can approve before the classifier. These are distinct mechanisms with a shared operator decision: inspect who answers, which exact action they answer and which credentials execute it. Keep the channels explicit: Eve identity fixed in stable, Eve admission repair on main, OpenClaw argument repair in beta, OMP review API and Claude mods released. Receipts are the corresponding source sections above. Do not call all five one vulnerability.

2. **A policy file is useful only on the path that reads it.** Advance "Before the First Turn" with Hermes v0.21.7's repaired unattended gateway branch, Antigravity 1.3.4's saved-settings daemon repair, Claude 2.1.285's OS-denied managed-file exception and OpenHands' local stack-key path. Lead with one actual branch, not four abstract warnings. The gain is that policy now takes effect on named paths; the cost is checking the running mode and principal once per environment. Copilot's GA sandbox plus ignored config.json is a positive companion case: availability improved, configuration must migrate. No packet proves a fleet-wide enforcement result.

3. **The runtime pin moved behind the command.** Codex's shared server is the new event. Compare it with already-existing updaters now correctly covered by the Antigravity, Copilot, Cursor and Grok profiles, and with Flywheel's separately moving checksum policy. Record client, selected server/package, model, effective policy and updater state. Label the latter cases as corrected operating advice, not five newly introduced updaters. Codex exec and direct app-server integrations require their own invocation trace; a bundled Codex dependency does not establish daemon exposure.

4. **Providers are entering the operating loop.** Give Cursor Rollouts, OpenHands' automation-form tool and OpenClaw/Agent Zero's chat administration genuine positive space. These let agents inspect deployments, prepare future work or configure their environment. State the retained decisions: Cursor does not merge/roll back automatically; an OpenHands automation runs as its creator; messaging admission now admits administration. This cuts against treating independent operating-layer software as automatically sheltered from provider absorption. It does not establish a provider solved company governance or saved a measured number of hours.

5. **Minimalism is a configuration, not a permanent product identity.** Pi's tagged MCP/codemode reverses the old no-MCP distinction; Hermes actually extracts optional integrations, with custody moving into catalog plugins; Cursor's prompt-removal account concerns preceding months; Paperclip cuts role/planning text without provider-run evidence, while its core protocol grows. Retain HarnessTax as a reason to run a matched experiment, not proof for current Pi 1.2.0 or long-horizon jobs. Unreal's launch runs were already public on September 22 and deserve the qualified input-token counter-read, not an October benchmark headline.

6. **Release receipts and successful deployment are different gains.** Flue repairs real runtime defects while dropping public tests and attestations. Hermes binds release identities more clearly while the checked releases skip required tests/native smokes. Flywheel adds stronger installer failure accounting, yet its published-tag factory run fails after eight passed component checks. The comparison is available evidence and operator acceptance cost, without claiming omitted checks caused a bug or that private tests do not exist. This extends the earlier release-channel argument beyond ancestry into qualification.

7. **Durable execution makes upgrades part of the workload.** Temporal 0.6.0's workflow-local interpreter creates a worker/history cutover decision. Pi Durable is a separate experimental package, not a feature that automatically reaches heypi. Eve's held turns and Flue's stored-argument approval pattern show different places to wait. Compare ownership of identity, replay and idempotent effects; do not rank durability from a shared label or imply exactly-once execution.

### Brief closures worth naming once

- OpenClaw's August extended-stable repairs the remaining August delivery watch. Keep later hook binding and backport coverage as different questions.
- Gemini's former preview build-file gate is stable; distinguish 0.61.0 introduction from 0.63.0 headless denial. The Code Assist sunset now has a primary notice, but other auth/support paths remain separate.
- Claude's silent Plugin4Shell fix now has a vendor advisory for its older fixed build. Copilot's checkout repair and Gemini's unchanged checkout remain unresolved at their inspected versions; delayed Claude disclosure cannot settle another product.
- Hermes's shell-hook repair and optional-provider removals are tagged. This completes specific old watches without certifying every hook or plugin.
- Paperclip's old budget/watchdog/CEO and secret-audit discovery questions are historical closures. Current grants and provider bypasses deserve the space in the issue.
- Temporal's first-class messages and auto approval are installable previews. Its login/bind/history-custody watch remains open.
- Agent Zero's v2.13 wait is over; the recursive secret change was reverted, so describe the retained placeholder fix and shared internal browser accurately.

### Threads to keep open, without another catalog

Guardian V2's default and total review cost; Codex's production App Server contract; Claude's second GitSpawn path and actual server-review rollout; Copilot's named Plugin4Shell repair; Cursor's fsmonitor fixed build, model-supply cutoff and per-Project ceiling; Grok's current GitSpawn/source correspondence; OMP's Rust release and relay retention; DeepSeek's first stable and inner key separation; heypi's wrapper/SDK port; Temporal's replay cutover and payload custody. Each needs its named release, implementation, billing, service or behavior receipt. Silence and omitted draft prose do not settle them.

The OMP feature should get one linked channel update in the weekly, with no sequel manufactured from an unchanged branch. Codex's feature can be linked from the limited audit/runtime update. A new feature would require a primary dispute or architecture consequence large enough to exceed this bounded issue, under EDITORIAL.md's three-part feature bar; this lens has not established a new public dispute.

## Final-drafter constraints supported by this lens

Carry the forward sentence in existing prose, never as a corrections or thread-history section. Correction history belongs here or in the quieter claim/correction layers. Remove public take-backs in the Codex trust paragraph, Hermes floor/vault paragraphs, OpenClaw Workshop paragraph, Pi headless paragraph, DeepSeek headless paragraph, heypi admin paragraph and Omnigent budget/outage paragraphs. This is not permission to hide the current restriction: keep its precise replacement and primary receipt.

The fresh factual edit is Gemini's backdated headless denial. Quote the sentence when editing it: "From 0.61.0, recognized edit tools with an extractable build-file target ask even in YOLO and are denied headless." Replace it with: "Build-file gates arrived in 0.61.0; from 0.63.0, their final ASK decisions become DENY in headless runs." Keep the existing tool-target and shell-redirection scope limits.

Do not carry any profile's old upgrade floor as a universal safety certificate, publish removed prose as newly false merely because its metadata retires, or use the current refresh to rewrite the historical windows of the issues and features. The useful continuity is the changed decision a reader can make now.
