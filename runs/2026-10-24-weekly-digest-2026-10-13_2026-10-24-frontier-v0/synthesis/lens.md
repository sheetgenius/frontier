# The lens across the watchlist

Run: `2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0`.
Window: after `2026-10-13T23:59:59Z` through the source-specific reads on 24 October 2026 UTC. Profile posture date: `2026-10-24`.
Lens read clock: `2026-10-24T10:55:09Z`. This is a synthesis read, not a new observation of release selectors.

## Scope and evidentiary limits

Read THESIS.md, METHOD.md, EDITORIAL.md and both canonical explainers. Read all twelve `writeup.md` memos in full. Consulted the relevant first-draft and previous-profile passages, corrected harvest sections, crosschecks, Cursor Origin deep-dive and eight-source watchlist scan. OpenCode has no previous profile. The corrected `*.primary.md` records govern facts; a memo's interpretation, the original Origin deep-dive, or a crosscheck's earlier selector snapshot cannot silently supersede their corrections.

Primary links below are pinned tags, commits, versioned packages, dated official announcements or captured official documents. Local references identify the section in the supplied record that resolves delivery and qualifications. Mutable selectors remain observations at their recorded harvest UTC times. In particular, this lens does not refresh a channel pointer, date a hosted launch from a CLI release, or convert an unsuccessful later fetch into product absence. A small direct web reread corroborated Pi's host-wake contract, Claude 302's mode/fork changes and OpenCode's public-contract break; the adapter changelog fetch returned a cache miss, so its evidence remains the supplied corrected record and pinned receipt.

The five patterns below concern harness capability and workflow reach. The reviewed record does not supply a matched experiment establishing a window-wide improvement in model reasoning, completed work per human hour, or net company throughput. An implementation can remove a real dependency without proving that the model became smarter. That distinction is central to this lens, not a reason to suppress the capability lane.

## The shared movement

More of a repository job can now stay inside a supported agent system across context selection, delegation, waiting, interruption and review. The immediate challenge to an independent builder is specific: justify another prompt copier, embedded interpreter, polling loop or conversation-reconstruction adapter against the native path. The remaining valuable work is also specific: own authority, runtime identity, persistent state, external effects and acceptance evidence.

The window supports upstream reuse more strongly than it supports a general claim that learned intelligence erased handcrafted software. Pi's downstream interpreter deletion is the clean example of reuse; OpenHands' shipped factory recipe and Paperclip's accounting state are counterexamples to the claim that specialist operating software is becoming unnecessary. The attention shift is an architectural inference: less per-turn assembly is possible, while configuration, migration, approval policy and exception reconciliation become more consequential. The receipts do not yet establish the net saving.

## Pattern 1. Native continuity expands, but saved history, durable wakes and external effects remain different contracts

**At least two current sources:** Codex, Claude Code and Pi; Cursor, DeepSeek Harness and Hermes corroborate distinct parts of the movement.

- Codex 0.164.0 [records compaction output only after completion][codex-summary], [resumes compressed rollouts][codex-resume] and [restores saved thread settings][codex-settings]. These are released recovery improvements. They justify a native interruption/resume trial against a conversation supervisor; they do not resolve every capacity failure or an interrupted external write. Record: [codex.primary.md, section 6](../harvest/codex.primary.md#6-compaction-commits-only-completed-summaries-and-resume-restores-more-state); crosscheck section 6 verifies the scope.
- Claude 2.1.302 [makes forks default on specified headless/SDK surfaces][claude-forks], and 2.1.305 [resumes completed pipeline/parallel agents from its journal][claude-journal]. Its [captured MCP Tasks contract][claude-tasks] separately describes server-owned work surviving client exit. Tasks is public beta with provider, protocol, feature-flag and session restrictions; an ordinary one-shot headless invocation does not acquire it by installing 310. A [309 runner notice explicitly marks interrupted tool outcomes unknown][claude-unknown]. Record: claude-code.primary.md sections 9, 13 and 26; crosscheck sections 9 and 13.
- Pi Durable 1.4 [checkpoints a sleeping phase and lets the host release its invocation][pi-wake]. The host must arrange its durable wake, and the [SQLite upgrade is one way for older versions][pi-migration]. This is a different lifecycle primitive from resuming a transcript. It moves correctness into the checkpoint/alarm handoff. Record: pi-coding-agent.primary.md sections 8 and 9; crosscheck sections 8 and 9.
- Cursor's [17 October pause/resume repair avoids repeating already completed calls][cursor-resume], while DeepSeek's rc [SDK resume restores the saved conversation and directory][dsh-resume]. Hermes [keeps classic CLI execution in the gateway after detach or EOF][hermes-gateway]. These make a person less necessary as the courier between invocations, but they are not equivalent recovery guarantees. Record: cursor.primary.md section 33, deepseek-harness.primary.md section 4 and hermes-agent.primary.md section 2.

**General capability and layer pressure.** A general agent can carry more context and task state across a longer job. Prompt copying, rebuilding a conversation after restart, keeping an invocation alive solely to wait, and polling solely to discover a remote task's completion face supported alternatives. Those alternatives must be evaluated against the particular wrapper's purpose.

**Where attention moves.** Test one interruption around summary completion, one around task persistence/wake, and one around a harmless external effect. Preserve the external action's identity and reconcile an unknown outcome before repeating it. These are distinct acceptance cases; a successful transcript resume cannot stand in for all three.

**Contrary evidence.** Pi Pocket 0.21.0 [sets `restartLimit: Infinity` despite embedding Durable 1.4][pi-pocket]. A library default is not the product's policy. Claude's explicit unknown outcome is useful information precisely because native recovery cannot settle the external effect. The evidence supports retiring redundant recovery plumbing after a trial, while preserving host scheduling, effect reconciliation and product-specific failure policy.

## Pattern 2. Reusable tool and context primitives remove narrow scaffolding, without proving a model-intelligence leap

**At least two current sources:** Pi and Gemini CLI; Copilot and Codex supply additional released mechanisms.

- The strongest literal deletion is downstream of Pi: [pi-mcp-adapter 6.0.0 removes `mcpScript`, `jev.evaluate`, its scripting skill and QuickJS, and uses Pi codemode][pi-adapter]. It also exposes real deferred MCP tool identities to permission hooks and routes the recognized Executor approval pause to a person. Headless operation fails instead of letting the model approve itself. This is an optional adapter's release, not a deletion from Pi core. Record: pi-coding-agent.primary.md section 11; crosscheck section 11.
- Gemini CLI 0.65.0 [stops eagerly reading a referenced directory's files][gemini-directory], leaving the agent to choose what to read. This removes eager context packing from that path. A required file must be named explicitly; no token, latency or task-quality improvement was measured. Record: gemini-cli.primary.md section 5.
- Copilot [adds native structured workflow-child output in 1.0.101][copilot-structured] and [passes already granted custom/MCP approvals to children in 1.0.102][copilot-inheritance]. Response parsing and grant reinjection can become smaller. The workflow remains subject to its documented eligibility; schema conformance, correct content and denied-child behavior are separate tests. Record: github-copilot-cli.primary.md section 6.
- Codex [overlaps eligible read-only calls][codex-reads] and [preserves full-history fork prefixes by default, with a legacy-compaction exception][codex-prefix]. The separate [patched-zsh removal][codex-zsh] reduces a packaged execution branch. Ordinary zsh remains supported. None of these receipts proves perpetual cache reuse or that a more capable model caused the deletion. Record: codex.primary.md sections 8 and 9.

**General capability and layer pressure.** An existing model can discover context, compose tools, delegate structured work and reuse session context through more capable native interfaces. The defensible claim is that builders can reuse those primitives instead of duplicating an interpreter, eager directory injection, response parser or context copier. It is not that every application should delete every one of those layers.

**Where attention moves.** Review the actual callable tool identity and effective grant at the execution boundary; validate the child result; measure whether agent-selected files contain the constraints the task needs. For the adapter, port settings and hook names and test proxy, deferred and scripted paths before removing the old route.

**Contrary evidence.** Pi's [current serializer still flattens role provenance][pi-serializer]. The [new paper's Pi experiment used 0.79.0, not 1.4.0][pi-research]; it cannot supply a current exploit rate. OpenCode 2.1.4's [optional speculative compaction][opencode-compaction] spends inference and keeps the precomputation in memory. Context management remains an engineered trade among latency, cost, retained constraints and authority. Neither a longer summary nor a thinner interpreter establishes safer judgment.

## Pattern 3. Agents produce more review material, while products make different choices about who may accept the result

**At least two current sources:** Claude Code and OpenClaw have dated events inside the window; Cursor supplies a dated review-artifact launch and a separately qualified current ownership capability.

- Cursor's [16 October canvases launch][cursor-canvases] lets an agent deliver a shared, refreshable object for others to inspect. This can replace transcript repackaging. It does not verify the underlying data or prove fewer review minutes. Record: cursor.primary.md section 1.
- Anthropic's [15 October hosted Code Review GA announcement][claude-review-launch] and [captured service contract][claude-review] describe a reviewer that posts findings and a check but does not approve or block a pull request. It can replace parts of PR-comment dispatch, while the team continues to own merge authority. This is hosted-service availability, not something a local CLI pin proves. Record: claude-code.primary.md section 14; crosscheck section 14.
- Origin's [captured weekly note][origin-weekly] describes Agentic ownership review replacing the owner approval count, and installed apps satisfying ownership review for their paths. This is a meaningful divergence from Claude's non-approving reviewer. However, the week label spans the previous cutoff, first publication is unknown, and some rating machinery already existed in the baseline client. Treat it as current capability established by the 24 October read, not a proven in-window launch. Added client fields establish a before/after client change, not the hosted launch day. Record: cursor.primary.md section 16 and cursor.crosscheck.md O01.
- OpenClaw 10.5 [replaces proposals with direct, versioned Workshop edits][openclaw-workshop]. An edit takes effect before later review. `auto` remains the default, legacy `propose` becomes `off`, and the old `approvalPolicy` disappears. History is bounded to ten versions per skill and 500 change records per agent. Record: openclaw.primary.md sections 4 and 23.

**General capability and layer pressure.** Agents can produce a reviewable artifact, review code and revise reusable procedures inside the product. Presentation glue and review dispatch face upstream alternatives. A proposal queue can be removed as a product decision, but that does not establish that the human decision it carried became redundant.

**Where attention moves.** Distinguish checking the evidence from accepting responsibility for the outcome. A canvas needs data and freshness checks. Claude review needs missed-bug and usefulness sampling. Agentic ownership needs an explicit decision about paths where a person remains accountable. Workshop needs change inspection, restoration and independent backups. Origin's [required checks accept neutral and skipped as well as success][origin-checks]; an agent CI step deciding a check does not apply is therefore a separate acceptance-policy choice.

**Contrary evidence.** No shared measure establishes that fewer approvals increased accepted output. Origin does not publish the decision thresholds or audit location in the captured ownership note. A procedure can be used before an owner reverses it. Claude's reviewer deliberately leaves approval authority elsewhere. These are different designs, not maturity rankings. A retained human code-owner gate can be the correct system design.

## Pattern 4. Approval becomes useful when it covers the final action and has a deliberate decision maker

**At least two current sources:** Codex and OpenClaw; Claude Code and Copilot reveal important divergences rather than a common default.

- In Codex 0.164.0, [a sandboxed action's prior Guardian approval no longer exempts its more privileged retry from fresh review][codex-escalation]. [Plugin trust also includes file contents][codex-plugin-trust]. Legacy declaration-only approvals establish their first content baseline on use, which is not retroactive inspection. These bind a decision to its authority and bytes, not merely its previous name. Record: codex.primary.md sections 3 and 4; crosscheck sections 3 and 4.
- OpenClaw's released [final-argument binding][openclaw-final] compares plugin-rewritten arguments against the trusted approval snapshot and blocks unmatched changes. Both 10.7 and extended 9.33 carry the repair, so beta is no longer needed solely for it. Record: openclaw.primary.md section 2.
- Claude 302 [narrows unconfigured headless auto defaults in specified deployments][claude-forks]. Its [304 person-only decision option][claude-person] refuses when no person-capable dialog or host callback can answer. This is evidence against describing every approval interruption as accidental waste. Record: claude-code.primary.md sections 2 and 6.
- Copilot 1.0.100 [allows Assisted mode to decide safe managed ask requests][copilot-assisted], while the [pinned enterprise contract still promises fresh approval without automatic shortcuts][copilot-ask-docs]. Do not invent a resolution. Explicit extension-capability requests remain a separate approval case. Record: github-copilot-cli.primary.md section 5.

**General capability and layer pressure.** Automatic review and delegation can cover routine work with fewer repeated prompts when authority is unchanged. A wrapper that merely stores one universal allowed flag becomes harder to justify than a native decision tied to the actual request. None of these events makes model review an OS boundary or makes inherited approvals appropriate for every child.

**Where attention moves.** Decide the policy and decision maker before unattended launch. Exercise escalation, changed plugin bytes, rewritten parameters, an unavailable person and a denied child. Inspect who actually answered. Reuse and fresh review serve different cases: Copilot's grant propagation reduces repeated decisions; Codex's escalation repair deliberately prevents reuse when authority increases.

**Contrary evidence.** More automation is not the only movement. Claude retreats from auto under named conditions and adds a person-only seam. Pi's adapter refuses model self-approval. Copilot's release/docs conflict still requires deployment-specific evidence. The load-bearing human gate should be retained; accidental prompt repetition can be removed only after the boundary is explicit.

## Pattern 5. Harness composition becomes easier, while authority and upgrade compatibility stay attached to the selected host

**At least two current sources:** OpenHands, Paperclip and Hermes; the other profiles demonstrate why a shared model or protocol name is insufficient.

- OpenHands extensions 0.35.0, bundled from Canvas 1.32.0, [lets permitted GitHub mentions request branches, commits, pushes and PR updates][openhands-monitor]. The [poller checks repository permission][openhands-poller], with bypasses; the [fallback template expresses authorization and work restrictions in the prompt][openhands-template]. The [factory recipe][openhands-factory] packages issue-to-PR, review and triage setup. This is shipped composition, including handcrafted orchestration, not jobs starting on installation. Record: openhands.primary.md sections 16 and 17.
- Paperclip stable [makes usage receipts and settlement durable][paperclip-accounting] and [owns persisted lifecycle phases][paperclip-lifecycle]. Its beta [preserves one primary task across case phases and adopts revisioned written workflows][paperclip-cases]. These put administration and continuity inside a platform around replaceable agents. They do not establish fewer interventions or a cap on the provider's eventual bill. Record: paperclip.primary.md sections 2, 5 and 12.
- Hermes [supports approved experimental event subscriptions that launch unattended work][hermes-events] and [brokers plugin OAuth grants][hermes-oauth]. Meanwhile its [MCP-server extraction requires both an installed plugin and changed client arguments][hermes-migration]. A smaller core transfers maintenance to a plugin boundary; it does not prove cognition absorbed that feature. Record: hermes-agent.primary.md sections 4, 10 and 18.
- Portability has concrete failure modes. Cursor 1.0.40 [repairs a nested Claude-format denial that the earlier SDK parsed but did not enforce][cursor-hooks]. Gemini's [nightly importer converts Claude timeout units][gemini-hooks]. OpenHands [carries exactly the resolved parent MCP set into children][openhands-inheritance], while its [ACP OAuth forwarding remains main-only][openhands-acp-oauth]. Shared syntax and a working native engine do not establish equivalent policy through the wrapper.
- OpenCode [changes its public SDK, event and plugin contracts in 2.1 while retaining backward-readable stored data][opencode-break]. Native compaction replay is provider/model dependent. Paperclip stable [still has a remote Codex compatibility ceiling below standalone 0.164.0][paperclip-codex]. These prevent a standalone install recommendation from becoming universal embedded-runtime advice. Record: opencode.primary.md section 8 and paperclip.primary.md section 6.

**General capability and layer pressure.** A general agent can receive more kinds of work, request access, use a prepared profile and return a change without someone wiring every step anew. Trigger glue, repeated UI setup, copied OAuth refresh logic and per-run lifecycle reconstruction face supported alternatives. The substitutable unit is not merely a model name: engine, adapter, host, selected account, grants and execution location determine the actual job.

**Where attention moves.** Review who can start work, which profile supplies credentials, whether a child can enlarge the parent's grant, and whether the client/server/plugin tuple is compatible. Record the process actually serving the request. Count setup and migration time alongside review and recovery in any claimed saving.

**Contrary evidence.** The [Gemini README warning about current-model optimization and access][gemini-access] shows that model progress does not automatically improve every harness. OpenCode and Pi demonstrate reusable progress outside model-provider ownership. OpenHands adds a specialist factory recipe; Paperclip adds accounting machinery; Hermes moves code into separately pinned plugins. A claim that these systems were all made obsolete by provider intelligence would contradict the record.

## What deletion does and does not establish

| Receipt-backed change | Correct interpretation | Consequence to preserve |
| --- | --- | --- |
| [Pi adapter removes its interpreter and QuickJS][pi-adapter] | An existing upstream primitive replaces downstream implementation. | Port tool identities and approval paths; do not generalize to all policy. |
| [Gemini removes eager directory file injection][gemini-directory] | Context selection moves into the agent loop. | Explicitly include indispensable files; measure missed context. |
| [Codex removes patched zsh][codex-zsh] | A packaged execution branch disappears. | Ordinary zsh still works; retest the supported path. No model-causality claim. |
| [OpenClaw removes proposals][openclaw-workshop] | Review moves after a direct edit, with bounded recovery. | Manual initiation and longer-lived backups may remain necessary. |
| [Hermes extracts MCP serving][hermes-migration] | Code moves to a plugin; it does not disappear. | Migrate launcher and profile, pin plugin, preserve authority review. |
| [Paperclip beta removes Pipelines][paperclip-pipelines] | Operating surfaces disappear while stored rows remain. | Cases is separate; retained data is not a runnable or automatic migration. |
| [Paperclip beta removes historical file authorization][paperclip-files] | Policy changes to current authority plus OS boundaries. | Inspect shared directories; intelligence did not learn to enforce confidentiality. |
| [DeepSeek main removes fetch destination filtering][dsh-fetch] | Proxy/private-network compatibility trades away a tool-level filter. | Main only; rc.2/rc.3 retain checks. Required enforcement must live elsewhere. |

Only the first two are useful positive examples here of reusable execution or agent-directed selection displacing specific work. The remaining deletions can simplify software, but their correctness depends on compatibility and policy. A deleted setting is not automatically a deleted human bottleneck.

## Attention moved into four concrete queues

| Queue | Receipted examples | Useful trial evidence |
| --- | --- | --- |
| Admission and configuration | [Paperclip's existing-Operator grant seeding][paperclip-grants]; [OpenHands' mention trigger][openhands-monitor]; [Hermes subscription consent][hermes-events] | Effective grants after upgrade; unauthorized trigger refusal; exact recipient and credential identity. |
| Acceptance and review | [Cursor canvases][cursor-canvases]; [Origin ownership choice][origin-weekly]; [OpenClaw direct learning][openclaw-workshop] | Accepted results, missed faults, human reversals, bad procedures and reviewer minutes. |
| Recovery and reconciliation | [Pi host wakes][pi-wake]; [Claude unknown outcomes][claude-unknown]; [Paperclip committed accounting][paperclip-accounting] | Alarm survives process death; external effect is reconciled; interrupted bill agrees with provider evidence. |
| Upgrades and compatibility | [OpenCode public API break][opencode-break]; [Hermes MCP extraction][hermes-migration]; [Cursor's nine API breaks in ten days][origin-api] | Saved-session/client/plugin tests; working migrated launchers; total migration time and rollback behavior. |

These are inferred changes to the operator's work, not measured increases or decreases in queue size. No numerical Amdahl speedup can be calculated from this record. Deliberate approval, acceptance of consequential risk and resolution of unknown effects remain productive uses of scarce attention.

## Counterevidence that must survive synthesis

1. **Provider ownership is not necessary for useful reusable primitives.** [Pi's adapter reuse][pi-adapter] and [OpenCode's programmable host][opencode-sdk] are independent-harness evidence. They qualify a stronger claim that all meaningful reasoning-loop integration must belong to the model provider.
2. **Specialized orchestration remains useful.** [OpenHands' factory recipe][openhands-factory] is an affirmative example of shipped, handcrafted procedure. [Paperclip's durable accounting][paperclip-accounting] supplies state and reconciliation that improved reasoning does not replace.
3. **Fewer approvals can widen authority before outcomes improve.** [Workshop direct edits][openclaw-workshop], [Origin Agentic ownership][origin-weekly] and [Copilot's unresolved managed-ask contract][copilot-ask-docs] do not establish higher throughput. [Claude's narrower defaults][claude-forks] cut against a monotonic autonomy story.
4. **Interoperability can consume attention.** [OpenCode's contract break][opencode-break], [Cursor's API churn][origin-api] and [Hermes' launcher migration][hermes-migration] put real work back on integration owners. A compatibility layer can remain valuable even while a response parser becomes redundant.
5. **State and authority do not become interchangeable with natural-language recollection.** [Pi's retained flattening mechanism][pi-serializer], [Claude's unknown external outcomes][claude-unknown] and [DeepSeek's loss of PTC memory after resume][dsh-resume] preserve reasons for explicit state and external verification.

The correction to an easy thesis is therefore precise: integration primitives can move upstream while the durable host grows more important, and independent builders can contribute to both movements. The current evidence supports testing specific replacements, not predicting the disappearance of every handcrafted harness or operating platform.

## The eight lightly scanned sources bound the watchlist claim

The [watchlist scan](../harvest/watchlist-scan.md) is not eight full profile refreshes. Keep their public posture dates at 13 October. Its positive/negative results should prevent overgeneralization, rather than pad the refreshed profiles.

- Antigravity [shares conversation approvals across parent and children in 1.4.6](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.6); Grok Build [inherits main-checkout allows in worktrees from 1.0.67](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.67.external.md?generation=1792628778974656). These corroborate approval reuse beyond the immediate interaction, with different scopes and controls.
- Omnigent [adds approval for agent-created or edited schedules](https://github.com/omnigent-ai/omnigent/commit/7a12baaea202ebafef8c73022e9ed1dbd46f0970). That is counterevidence to a claim that every product removes human gates. OMP [defaults failed background computer input to foreground takeover](https://github.com/can1357/oh-my-pi/commit/89ae2976d783d33ec48de7ff2a6dc7aedf0a78e6); less intervention can also mean taking the person's desktop focus.
- Eve's [sandbox-provider removal](https://github.com/vercel/eve/commit/8b68a9283881c9ee750d83565873fd05c7e4d641) and [changed provider/state contract](https://github.com/vercel/eve/commit/12a1e90627ae04681271d0f6c5be522784ed82f2) corroborate migration and rollback work, not interchangeable execution environments.
- Agent Zero, Flue and Unreal Agent yielded no new operator action in the bounded scan. That is neither a claim of stagnation nor evidence that the whole watchlist moved together.

## One earned system-level sentence per refreshed profile

Each row is an editorial inference from the linked mechanism, not an extra product fact or an instruction to insert every sentence. Use at most one in the final posture and attach receipts to the concrete clauses. No cross-provider name is required inside a profile merely because it contributes to a pattern here.

| Profile id | Earned sentence | Evidence and boundary |
| --- | --- | --- |
| codex | Native recovery and context-sharing put conversation supervision inside Codex, while operators still own runtime selection and unresolved external effects. | [Completed summaries][codex-summary], [resume][codex-resume], [fork prefix][codex-prefix]; daemon selection remains separate. |
| claude-code | Journaled delegation can replace prompt-copy and restart glue, while unattended authority remains a job-level deployment choice. | [302 forks and mode defaults][claude-forks], [305 journal][claude-journal]; no universal Tasks eligibility or exactly-once claim. |
| cursor | Cursor can produce a shared review artifact and let an agent satisfy ownership review, moving the consequential human choice to which decisions may carry merge authority. | [Canvases][cursor-canvases], [current Agentic contract][origin-weekly]; ownership launch date and safe replacement thresholds remain unestablished. |
| github-copilot-cli | Released local-service access and structured child handoffs extend the development loop, concentrating setup judgment on reachable services and inherited grants. | [Network default][copilot-network], [structured output][copilot-structured], [inheritance][copilot-inheritance]; sandbox enablement and workflow eligibility remain separate. |
| gemini-cli | Agent-directed directory discovery can replace eager context packing, leaving the operator to identify indispensable files and verify the account's actual service route. | [Stable directory path][gemini-directory], [pinned access warning][gemini-access]; no measured selection-quality gain. |
| pi-coding-agent | A downstream adapter can delete its interpreter by reusing Pi's tool runtime, while a durable host still owns waking jobs and reconciling effects. | [Adapter 6.0.0][pi-adapter], [Durable host contract][pi-wake]; different packages, not one synchronized host release. |
| openclaw | Versioned direct learning moves judgment from approving proposed procedures to reviewing changes that can already affect later work. | [Workshop][openclaw-workshop]; reversible within bounded history, not measured self-improvement. |
| hermes-agent | Gateway-owned sessions and approved event subscriptions can replace duplicate dispatch plumbing, while operators retain control of continuing jobs and trigger grants. | [Gateway lifecycle][hermes-gateway], [experimental opt-in subscriptions][hermes-events]; no measured net orchestration saving. |
| openhands | A permitted GitHub request can now lead to a code change through packaged automation, concentrating human judgment on who may ask and what the automation accepts as complete. | [Released monitor][openhands-monitor], [factory recipe][openhands-factory]; prompt restrictions and deployed-bundle identity still matter. |
| deepseek-harness | Saved-session resume can replace conversation reconstruction, while the operator still has to check which external work actually finished. | [Rc SDK resume][dsh-resume]; process restoration and persistent PTC memory do not follow. |
| paperclip | Durable lifecycle and cost receipts reduce the need to reconstruct interrupted runs, while leaving authority migration and uncertain bills for explicit operator decisions. | [Lifecycle][paperclip-lifecycle], [accounting][paperclip-accounting], [grant seeding][paperclip-grants]; delivery is established, net attention saving is not. |
| opencode | A reusable execution host can displace integration glue even as its changing public interfaces make compatibility a continuing operator cost. | [SDK][opencode-sdk], [2.1 contract break][opencode-break]; independent-harness progress is a counterweight to provider-only assumptions. |

No additional system-level sentence is recommended for the eight unrefreshed profiles in this assignment.

## Directives for final drafters

No new factual error in the consulted draft passages requires a lens-specific `must` correction. The changes below are improvements or preservation constraints for cross-synthesis, not permission to widen the corrected facts. Other lenses may identify factual errors outside this scope.

1. **codex, should.** Bring the current native recovery trial into the opening and move the inherited opening sentence, "A pin can hold the command you typed while the process doing the work moves on," beside the channel/daemon guidance. The tagline now promises a recovery evaluation while the opening still leads on the earlier shared-daemon posture. Use the earned sentence above if needed. Evidence: corrected harvest sections 6 and 8; completed-summary, compressed-resume and fork-prefix receipts. Keep the distinction between recovery and external-effect reconciliation.
2. **claude-code, should.** Replace "That makes Claude Code worth watching as a place to delegate more work, while plugin code still runs unsandboxed" with a concrete link between journaled delegation and explicit unattended policy; keep the unsandboxed-mod warning in admission guidance. Evidence: 302's fork/default changes and 305's journal, alongside the released guard. This supplies the positive workflow mechanism without implying an improvement in model reasoning.
3. **cursor, should.** Preserve the current-capability dating limit on Agentic ownership in any new lede or comparison. If comparing review systems, distinguish Claude's non-approving hosted reviewer from Origin's ownership authority. Evidence: corrected harvest sections 14/16 on the two sources and cursor crosscheck O01. Do not call the weekly label a 12 October launch or an established post-cutoff hosted launch.
4. **github-copilot-cli, should.** Replace the generic opening, "We watch GitHub's standalone `copilot` executable for the work it can carry from a terminal into an editor or unattended job, and the authority that travels with it," with the earned sentence's concrete development-loop mechanism. Evidence: stable 1.0.100/101 local-network changes and 1.0.101/102 handoffs. Keep initial grants, sandbox enablement and denied-child tests visible; structured output does not validate content.
5. **gemini-cli, should.** Give the directory-discovery change its own short capability paragraph. Move this existing sentence to output-limit guidance: "Separately, handled tool-text fields retain a fixed 65,536-byte cap, with best-effort original saving; paginate large results and verify saved output before treating it as a complete record." Evidence: stable section 5 removes eager file injection, while the retained cap concerns a different output boundary. The current juxtaposition obscures the real transfer of selection work into the agent loop.
6. **pi-coding-agent, should.** Keep the optional adapter's interpreter deletion as the clearest reuse case, but name QuickJS and the adapter explicitly when compressing it. Keep Durable's host-wake obligation separate. Evidence: corrected sections 8 and 11, verified independently. Do not recast a downstream release as Pi core deleting its interpreter or as proof that model intelligence caused the removal.
7. **openclaw, should.** Replace "The judgment moves from approving a proposed procedure to deciding whether its result should persist" with the earned sentence above, making clear that changes can affect work before later review. Evidence: immediate Workshop mutation, removed proposal queue, preserved `auto` default and bounded history in corrected section 4. Keep manual initiation and backup migration beside this claim.
8. **hermes-agent, should.** Replace the tagline "Hermes v0.22.5 reduces orchestration work while making plugin migration and data retention explicit operator jobs" with a mechanism-based claim such as the earned sentence above. Evidence establishes gateway-owned execution, opt-in subscriptions and a mandatory MCP launcher migration, without a measured net work reduction. Do not treat extracting MCP serving as general intelligence absorbing that implementation.
9. **openhands, should.** Preserve the factory recipe as positive shipped capability and as counterevidence to a blanket anti-orchestration thesis. Anchor the system interpretation in who may turn a mention into a code change, rather than the generic opening's promise of approving repeatable work once. Evidence: corrected sections 16 and 17, including mechanical poller checks, prompt-based fallback checks and default-enabled guidance that does not start jobs.
10. **deepseek-harness, should.** Use saved-session resume for the profile's system-level claim; keep the main-only fetch deletion as an explicitly separate compatibility/policy trade. Evidence: corrected sections 4 and 16. Neither resume nor the preset promotion proves model-quality improvement, process restoration or released unrestricted fetch.
11. **paperclip, should.** Retain the contrast between stable durable receipts and beta removals. Describe Pipelines loss as a migration obligation and historical-file authorization loss as a changed policy; do not frame either as intelligence making governance redundant. Evidence: corrected sections 2, 12, 16, 17 and 25. Cases is separate, stable lacks the live-review replacement guard, and provider-bill reconciliation remains open.
12. **opencode, should.** Keep the independent execution host as a real counterexample to provider-only progress, with the public-contract break as the compatibility cost in the same interpretation. Evidence: corrected sections 5 and 8. Preserve the distinction between backward-readable storage and compatible SDK/event/plugin clients; avoid making optional background compaction a durability or throughput claim.

## Primary receipt keys

[codex-summary]: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890
[codex-resume]: https://github.com/openai/codex/commit/76ed3b484d62ccceb9fa512ff4dd139f421814c3
[codex-settings]: https://github.com/openai/codex/commit/430a16799d90e296fb27b1e94f206023902b7e56
[codex-reads]: https://github.com/openai/codex/commit/c9e0fffbbc05c36478686444f6ab1edbadfe2768
[codex-prefix]: https://github.com/openai/codex/commit/e1b9c9457ceca75a99b034a5df39ac48c3998d15
[codex-zsh]: https://github.com/openai/codex/commit/a645742bb5615026ae673c9527f146ee551d4949
[codex-escalation]: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/orchestrator.rs#L484-L518
[codex-plugin-trust]: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/engine/plugin_trust.rs
[claude-forks]: https://github.com/anthropics/claude-code/releases/tag/v2.1.302
[claude-journal]: https://github.com/anthropics/claude-code/releases/tag/v2.1.305
[claude-tasks]: https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp
[claude-unknown]: https://github.com/anthropics/claude-code/releases/tag/v2.1.309
[claude-person]: https://github.com/anthropics/claude-code/releases/tag/v2.1.304
[claude-review-launch]: https://claude.dev/blog/solving-code-review-at-anthropic/
[claude-review]: https://web.archive.org/web/20261017030656/https://code.claude.com/docs/en/code-review
[cursor-resume]: https://cursor.com/docs/cli/changelog#oct-17-2026
[cursor-canvases]: https://cursor.com/changelog/cloud-agent-canvases-and-environments
[cursor-hooks]: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz
[origin-weekly]: https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md
[origin-checks]: https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md
[origin-api]: https://web.archive.org/web/20261024094024id_/https://cursor.com/docs/api/origin/changelog.md
[copilot-network]: https://github.com/github/copilot-cli/releases/tag/v1.0.100
[copilot-structured]: https://github.com/github/copilot-cli/releases/tag/v1.0.101
[copilot-inheritance]: https://github.com/github/copilot-cli/releases/tag/v1.0.102
[copilot-assisted]: https://github.com/github/copilot-cli/releases/tag/v1.0.100
[copilot-ask-docs]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L253-L261
[gemini-directory]: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/ui/hooks/atCommandProcessor.ts#L535-L549
[gemini-access]: https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/README.md#L1-L22
[gemini-hooks]: https://github.com/google-gemini/gemini-cli/commit/5b36aacf5bf3d044badc881063f7671598c27c9d
[pi-wake]: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L139-L220
[pi-migration]: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/storage/sqlite/migrations.ts
[pi-pocket]: https://github.com/TannerMidd/pi-pocket/blob/v0.21.0/src/server/app.ts#L1083-L1100
[pi-adapter]: https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md
[pi-serializer]: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/utils.ts#L120-L155
[pi-research]: https://github.com/pixee/compaction-laundering/blob/9ce87b71301c628dfcd9232b01f1ccbdb0e67b16/disclosure/pi.md
[openclaw-workshop]: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md
[openclaw-final]: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436
[hermes-gateway]: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md
[hermes-events]: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/user-guide/features/mcp.md#L1027-L1081
[hermes-migration]: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/left_core_migration.py#L239-L278
[hermes-oauth]: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/plugin_oauth.py
[openhands-monitor]: https://github.com/OpenHands/extensions/commit/af0a4b816b0b711c79771b91a950726c0c6ed896
[openhands-poller]: https://github.com/OpenHands/extensions/blob/v0.35.0/skills/github-repo-monitor/scripts/main.py#L641-L663
[openhands-template]: https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114
[openhands-factory]: https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/README.md
[openhands-inheritance]: https://github.com/OpenHands/software-agent-sdk/commit/0bd5cc2d322d61f785816a29ef1f2e4c86db2460
[openhands-acp-oauth]: https://github.com/OpenHands/software-agent-sdk/commit/87bec04de8e08117399d5cab68042cc794bc2199
[dsh-resume]: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sdk/client/README.md
[dsh-fetch]: https://github.com/deepseek-ai/deepseek-harness/commit/2f01ad549c9dc7ecf480439f8e6801cc45ca14a0
[paperclip-accounting]: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/run-cost-accounting.ts
[paperclip-lifecycle]: https://github.com/paperclipai/paperclip/commit/2dd9811e8be1dab59cccd86cdb25e8953b02fe07
[paperclip-cases]: https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/maps/feature-map/cases.md
[paperclip-grants]: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135
[paperclip-pipelines]: https://github.com/paperclipai/paperclip/commit/90777488945fc2ceba6d27c407516d4a1df69b54
[paperclip-files]: https://github.com/paperclipai/paperclip/commit/813e808af462b6a6f9db38b6791e3bfe8465b51e
[paperclip-codex]: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts
[opencode-break]: https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes
[opencode-sdk]: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/build/sdk/index.mdx
[opencode-compaction]: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/compaction.mdx
