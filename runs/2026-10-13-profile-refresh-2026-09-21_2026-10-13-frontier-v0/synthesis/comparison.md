# Comparison map

Lens: COMPARISON MAP. Profile posture: 2026-10-13. Research window:
2026-09-21 through 2026-10-13, inclusive, with release boundaries in UTC.
Comparison review: 2026-10-14.

I read all 22 write-up memos in full, audited the first drafts' public comparison
passages and compared_with fields against the previous profiles, and consulted
the corrected harvests and relevant crosscheck verdicts. The corrected harvest,
rather than an earlier crosscheck's uncorrected section numbering, is the fact
record. Selected tagged blobs were also read directly from the existing
verification clones. No upstream code, installer, binary or tests were executed.
No site build or package installation was run. This file is the only authored
file.

The previous Unreal profile is actually dated 2026-09-23. Its launch benchmark
correction therefore concerns an error already present at that posture, even
though the common research window starts on 2026-09-21.

The controlling standard is THESIS.md's question about the nearest precedent,
METHOD.md's evidence and channel rules, EDITORIAL.md's event plus comparison plus
consequence unit, and exemplar-pass bar point 12. The joins below are structural
divergences unless otherwise stated. They establish neither a comparative winner
nor measured attention savings. A counterpart can illuminate this window without
having introduced its own mechanism this window.

An empty public comparison list is valid. A memo's candidate join does not have to
be put in the profile. A dependency, model name, historical benchmark and current
standalone harness are different referents. Compared_with should index public
comparisons that change a decision, including an explained composition boundary;
it should not become a roster of every model or dependency mentioned. Lists need
not be reciprocal.

**The common movement.** Authority and state are increasingly decided somewhere
other than the visible prompt: in a long-lived service, a parent invocation, an
extension callback, a grant evaluated before a profile, or a request adapter.
These comparisons are useful because they tell the operator which object to
inspect. They do not establish that every provider has the same default or that
one fix closes another provider's failure.

## The nearest join for each profile

**codex: github-copilot-cli, runtime pinning.**

Codex's [eligible daemon seeding](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install.rs#L272-L338)
and [daemon-only updater](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L48-L68)
can leave the CLI command pinned while the server advances. Copilot's
[autoUpdate default](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L452-L453)
and [COPILOT_AUTO_UPDATE switch](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md?plain=1#L144)
describe updating the CLI itself. Copilot stable is
[1.0.97](https://github.com/github/copilot-cli/releases/tag/v1.0.97); Codex stable
is [0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1).

The consequence is two runtime identities for eligible interactive Codex sessions,
rather than one self-updating executable. Restarting the selected daemon does not
restore an older client pin. Explicit standalone pins and the headless exec path
qualify the comparison. Do not copy Copilot's updater recipe into Codex or describe
every pinned Codex install as floating. The public empty list is defensible; add
github-copilot-cli only if this divergence enters the final prose.

Record: codex harvest sections 1-2; github-copilot-cli section 11; Codex crosscheck's
updater correction requires restart as well as the settings change.

**claude-code: omp, software answering a review.**

Claude's [released guard](https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/sec-default/hooks/register.ts#L67-L114)
and [2.1.287 release](https://github.com/anthropics/claude-code/releases/tag/v2.1.287)
sit beside a mod event chain in which tool.check can replace classic permission
answers. The corrected binary checks distinguish 2.1.286's enabled rollout from
2.1.287's ignored early-access off switch. OMP
[18.10.4](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4) lets an
[extension revise and resolve plan review](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560).

These mechanisms make admission of extension code a prior authority decision.
Their scope differs: Claude mods can affect a tool verdict and skip the classifier;
OMP's plan callback chooses the plan/execution tier while downstream tool policy
still applies. OMP also loads project extensions without a trust decision. Claude's
deny holding depends on guard presence and its released fixes. A plan picker is
not proof of human review, and a classifier setting is not proof the classifier
was reached. The Claude draft already explains its mechanism well; no public
comparison addition is required and its empty list can stay.

Record: claude-code sections 1-2; omp sections 5-7. Do not claim the two extension
APIs have equivalent policy precedence or containment.

**gemini-cli: antigravity, which plan actually waits.**

Gemini stable 0.63.0 changed the
[headless planning instructions](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/prompts/snippets.ts#L602-L615).
Its [non-interactive exit-to-YOLO path](https://github.com/google-gemini/gemini-cli/blob/v0.62.0/packages/core/src/tools/exit-plan-mode.ts#L210-L268)
already existed. Antigravity
[1.3.2 separated interactive plan review from the permission bypass flag](https://github.com/google-antigravity/antigravity-cli/blob/1.3.2/CHANGELOG.md?plain=1#L13),
but [1.1.28 already made non-interactive plan review proceed automatically](https://github.com/google-antigravity/antigravity-cli/blob/1.1.28/CHANGELOG.md?plain=1#L23).
These remain the recorded postures at Gemini 0.64.0 and Antigravity 1.3.4.

This is an earned divergence for an operator considering Google's migration path:
Antigravity restored an interactive review stop, not a headless planning checkpoint.
Gemini encouraged use of existing authority rather than introducing the authority
transition. A plan-only runner must impose its boundary independently. This is
source-traced Gemini behavior versus a vendor-described closed Antigravity binary,
not a matched execution test. Add antigravity to Gemini's public list if this short
paired explanation is included.

Record: gemini-cli section 5; antigravity section 4. Neither the commercial sunset
nor the consumer transition proves universal CLI shutdown or equal model access.

**openclaw: paperclip, what a chat reply authorizes.**

OpenClaw [requires a structured approval rather than a typed agreement](https://github.com/openclaw/openclaw/blob/v2026.10.3/docs/cli/openclaw.md#L120-L143).
Paperclip lets an active agent
[interpret the latest post-card user reply and resolve an ordinary confirmation](https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/confirmation-comment-resolution.ts#L12-L96).
Paperclip's [resolver checks](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/issue-thread-interaction-resolution.ts#L158-L177)
make human_only different from not_creator; the latter may admit another agent.

The operator cannot transfer a chat-consent rule between these systems. OpenClaw's
structured change approval and Paperclip's ordinary confirmation have different
resolver authority. Governed Paperclip actions retain dedicated approvals.
OpenClaw's structure also does not settle its independent stable hook defect:
[10.3 can approve before argument replacement](https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.before-tool-call.policy.ts#L303-L411),
while [beta.3 binds replacement parameters](https://github.com/openclaw/openclaw/blob/v2026.10.5-beta.3/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436).

The current codex entry is an explained integration boundary, not evidence that
standalone Codex shares OpenClaw's reaper or hook defect. Keep it scoped that way.
Paperclip is an optional additional public comparison, not a required catalog entry.

Record: openclaw sections 4 and 8; paperclip section 4.

**hermes-agent: agent-zero, where the non-terminal tools run.**

Hermes's [placement repair](https://github.com/NousResearch/hermes-agent/commit/399d9569036d6e85420635c2f54e0177fb8b8d45)
and [v0.21.7 defaults](https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/config_defaults.py#L2518-L2543)
make auto screen/browser placement follow the terminal backend, with refusal for
unsupported screen backends. Agent Zero's
[host Computer Use contract](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/prompts/agent.system.tool.computer_use_remote.md#L4-L18)
uses deliberate session/lease-wide host enablement, while its
[internal browser shares a persistent sign-in profile](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_browser/helpers/runtime.py#L3192-L3217).

Hermes removed a silent host fallback; Agent Zero exposes an explicitly connected
host alongside its internal computer. These are different placements and identity
scopes. Inspect terminal, browser, screen, grants and persisted runtime separately.
A host connection is not a per-chat browser identity, and a replaced config is not
a replaced persisted Hermes container. This join can improve a deployment checklist
without being forced into the Hermes profile's main unattended-policy case. Keep
the empty list and the removal of the old Paperclip comparison.

Record: hermes-agent section 9; agent-zero's current host/browser receipts and
corrected prior claims. The two products are not demonstrated tenant-isolation
alternatives.

**paperclip: openhands, a profile can lose for two different reasons.**

Paperclip's [new standard-agent grants](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28)
include unscoped tools:use; [that explicit grant is checked before tool profiles](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L1466-L1480),
after earlier policies and connection access. OpenHands
[exports the stack key under the automation alias](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L906-L915);
the [SDK leaves it in terminal environments](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-sdk/openhands/sdk/utils/command.py#L16-L30),
and the [saved-secret value route lacks a conversation-profile check](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522).

Paperclip's case is explicit grant precedence for eligible new agents; OpenHands'
case is a local credential path around secret selection. Removing a Paperclip
grant and removing an OpenHands credential alias are different remedies. Neither
fix can be transferred from the shared word profile. This is useful system
synthesis, but the Paperclip draft need not add a public peer paragraph. Its old
Hermes entry was unearned and is correctly removed.

A separate composition check is worth putting in the final Paperclip profile.
[Its stable release](https://github.com/paperclipai/paperclip/releases/tag/v2026.1012.0)
pins Codex 0.160.0 and Claude Code 2.1.286; the corrected record also gives remote
Codex's accepted range as >=0.149.0 and <0.161.0. Upstream
[Codex 0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1) and
[Claude Code 2.1.296](https://github.com/anthropics/claude-code/releases/tag/v2.1.296)
do not establish what the selected Paperclip worker contains. Record the actual
image and runtime; qualify an upstream upgrade against the supported adapter.
The [native Codex restrictions](https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/paperclip-runner/src/drivers/codex/codex-security-config.ts#L187-L220)
also differ from legacy bypass. A newer standalone recommendation is not a tested
drop-in worker recommendation.

Record: paperclip sections 1, 3 and 6; openhands section 4. No Paperclip exploit
is inferred from a bundled version or from the OpenHands credential mechanism.

**openhands: gemini-cli, accepting a selection is only one model boundary.**

OpenHands SDK 1.54.0
[restored Gemini's legacy model API](https://github.com/OpenHands/software-agent-sdk/commit/6d51e7262fc234586ff5e8e519ce5a658d334cdf),
first bundled in Canvas 1.27.0. Previously a choice could be reported applied
while being ignored. Separately, Gemini 0.64.0
[rewrites named Flash requests](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/core/modelMappingContentGenerator.ts#L44-L90)
under its [auth-dependent access gate](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/config.ts#L3585-L3618).

Repairing the picker does not prevent a later request rewrite. Recording a model
selection alone cannot establish served identity. For relevant Gemini sessions,
record the selected ID, outgoing/requested ID and returned identity where available.
No backend response was observed in either packet. Pinning other exact model IDs
can still have value; the claim is not that every Gemini pin always remaps.

The current four-entry list mostly indexes the
[ACP provider roster](https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/constants/acp-providers.ts#L129-L190).
The paired Gemini paragraph earns gemini-cli. Claude Code, Codex and Pi may remain
in the engine roster, but they need their own consequence-bearing paired comparison
to stay in compared_with. Do not infer Codex daemon attachment from ACP availability.

Record: openhands sections 9 and 23; gemini-cli section 2. The public comparison
list should be narrowed to gemini-cli if this is the only resolved comparison used.

**pi-coding-agent: omp, project trust survives only in the actual implementation.**

At Pi 1.2.0 [trust resolution declines protected project resources without a UI
under the default ask policy when no earlier decision applies](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/project-trust.ts#L47-L88).
Project [MCP configuration is gated by that decision](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/config.ts#L134-L148).
OMP 18.10.4 [returns true from its extension trust shim](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/runner.ts#L1401-L1404)
and [documents unconditional project-input loading](https://github.com/can1357/oh-my-pi/blob/v18.10.4/README.md#L593-L602).

This resolves a comparison the OMP memo withheld pending a current Pi check.
Porting an extension that treats isProjectTrusted as a guard requires a new
authority design under OMP. Pi's boundary is scoped: context files and the initial
sessionDir lookup remain outside it, and explicit overrides, extensions and saved
trust can decide first. Do not describe Pi as refusing every repository input or
OMP as having no downstream tool policy. Pi's omitted public field is effectively
empty and can stay empty unless it takes this comparison. Its historical HarnessTax
watch item supplies no current winner.

Record: pi-coding-agent sections 1 and 7; omp section 5. Both current resolver
implementations were also read from their tagged blobs during this review.

**agent-zero: codex, an invocation selects a different runtime and authority path.**

Agent Zero's [Orchestrator example runs codex exec with approvals and sandbox
bypassed](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_orchestrator/README.md#L82-L97).
At Codex 0.162.1 [exec has no daemon path](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/exec/src/lib.rs),
while [eligible interactive startup takes the shared daemon path](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/tui/src/startup_orchestration.rs#L509-L512).
The [older reviewer skips model review in Full Access](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-reviewer/src/routing.rs#L85-L91).

The default interactive daemon finding is not automatically an Agent Zero
Orchestrator finding. The actual command selects headless execution and bypassed
authority; neither Guardian's feature default nor a familiar child name restores
approval or confinement. Read the installed binary and chosen host grants. The
non-root Claude command is similarly explicit about bypassPermissions, without
establishing every root/provider path's behavior. Keep codex and claude-code in
the list as explained composition boundaries, with the Codex path made explicit.

Record: agent-zero's tagged Orchestrator contract; codex sections 1 and 7.
The separately named input_remote route is not a demonstrated Codex stdin bug.

**eve: temporal-agent-harness, durable waiting and consent are separate contracts.**

Eve [0.78.0 binds approved execution to the requester](https://github.com/vercel/eve/commit/9559de83b65e89c24172c2b9c1a80382033556aa),
but [0.79.0 accepts queued text without an admission-time cutoff](https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/execution/session/input-queue.ts#L229-L244).
Its [repair is only on cutoff main](https://github.com/vercel/eve/commit/0dea0ded869be7db30ae90ed8072d29e6e57df61).
Temporal 0.6.0 [parks gated calls in workflow waits](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/docs/internal/human-in-the-loop-tool-approvals.md#L353-L369),
and its [remembered tool names precede argument-aware auto review](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L455-L469).

Keeping a wait alive does not establish intention to the current prompt, credential
ownership or the scope of a future remembered grant. Audit those separately.
Temporal's unauthenticated example/server boundary and installable prerelease are
not Eve's channel or authorization design. Do not transfer Eve's timing defect
to Temporal or claim Temporal fixes it. This is a system read, not a comparative
safety verdict. Eve's public pi-coding-agent entry is instead a historical vendor
benchmark comparison; retain it only with the exact tested versions below.

Record: eve sections 1, 4 and 14; temporal-agent-harness section 3.

**omp: pi-coding-agent, import compatibility does not import the trust gate.**

The reverse side of the Pi join is especially actionable in OMP.
[Pi-named imports are redirected to OMP's copies](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extension-loading.md#L280),
whose [trust shim always answers true](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/runner.ts#L1401-L1404).
The counterpart is [Pi 1.2.0's actual resolver](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/project-trust.ts#L47-L88).

Selective ports and three pi-optchat compatibility repairs do not establish that
an extension's trust-based guard is retained. Replace the draft's general warning
with this precise current difference and its limits. OMP's plan callback still
does not override downstream tool policy. The sole Pi entry is earned. Removing
OpenClaw and Claude Code from the old list is correct; Anthropic account handling
or an OMP Codex tool partition is not a Claude Code or standalone Codex release.

Record: omp sections 5 and 9; pi-coding-agent section 7. This is a source-derived
porting consequence, not a runtime exploit or blanket extension incompatibility.

**flue: pi-coding-agent, the library release is part of the downstream runtime.**

Flue 2.3.0 [ranges pi-ai and pi-agent-core from ^1.1.0](https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/package.json#L87-L88),
so it can receive [Pi 1.2.0's provider repairs](https://github.com/earendil-works/pi/releases/tag/v1.2.0)
without a new Flue release. [Pi 1.0.3 renamed the Azure provider ID while retaining
its API ID and environment variables](https://github.com/earendil-works/pi/blob/v1.0.3/packages/ai/CHANGELOG.md#L5-L11).
[Flue's migration](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L7)
changes its old Azure specifiers and provider keys.

Lock and record the two library resolutions. Do not rename every matching Azure
string, attribute a changed duration definition to speed, or inherit Pi CLI's
MCP/extension/permission defaults from these library dependencies. The existing
public Pi comparison already has both sides and a concrete migration consequence.
No additional comparison directive is needed.

Record: flue section 3; pi-coding-agent section 11. The Azure break is useful
contrary evidence to treating a patch-only dependency range as compatibility proof.

**antigravity: gemini-cli, the migration does not preserve a planning checkpoint.**

The paired planning receipts are [Antigravity 1.3.2's interactive change](https://github.com/google-antigravity/antigravity-cli/blob/1.3.2/CHANGELOG.md?plain=1#L13),
[its older headless rule](https://github.com/google-antigravity/antigravity-cli/blob/1.1.28/CHANGELOG.md?plain=1#L23),
and [Gemini's headless prompt](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/prompts/snippets.ts#L602-L615)
plus [exit transition](https://github.com/google-gemini/gemini-cli/blob/v0.62.0/packages/core/src/tools/exit-plan-mode.ts#L210-L268).

The current Gemini entry is already earned by the disclosed consumer succession
and operator migration context. If the planning comparison is used, say which
interactive or headless surface is being discussed. A wrapper such as Flywheel
can separately set artifactReviewPolicy to always-proceed, so removing the
permission-bypass flag's effect does not make every Antigravity installation wait.
The detailed pair can live in Gemini's profile without being duplicated here.

Record: antigravity section 4; gemini-cli section 5; agent-flywheel's tagged wrapper.
The old consumer transition and new commercial subscription sunset have different
audiences and dates.

**github-copilot-cli: codex, credential brokerage reached different channels.**

Copilot [1.0.92 withholds ambient GITHUB_TOKEN unless configured and supplies
masked Git authentication](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L60-L75).
Its [host-scoped injection documentation](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md?plain=1#L151-L157)
is paired with [full-bypass and credential-file limitations](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L103).
Codex [adds proxy-dependent credential masking in the 0.163.0 previews](https://github.com/openai/codex/commit/bd274564e1b1b3febb3886d274e6d97c2a3d275e),
through [alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.10),
with the feature off by default and absent from stable 0.162.1.

A same-name brokerage feature is not the same installable choice. Copilot's
sandbox is also off by default, withholding is not masking, and neither packet
demonstrates exfiltration resistance or protection of arbitrary credential files.
This can earn an optional Codex entry if the final profile gives the channel and
configuration difference. Its current Claude Code entry is independently earned
by [rule-file ingestion from 1.0.89](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L123),
not equal trust or enforcement. The removed Antigravity, Cursor and Grok entries
have no current public comparison to preserve.

Record: github-copilot-cli sections 2, 4 and 8; codex section 13. Engine reuse,
including MXC, does not identify the engine version or wiring in another product.

**cursor: grok-build, a native hook is not a portable hook.**

The pinned [Cursor default CLI artifact](https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz)
has SHA256 629e51de43a0b7fb3b86f5ebc7e579f7df7df941b39f29e82945cde750145afc.
The crosscheck read mcp_server_name in beforeMCPExecution in 190.index.js in that
artifact and the prior baseline. Grok's generation-pinned
[1.0.52 binary guide](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964)
explicitly says native Cursor reply formats are not read and Cursor-format entries
do not run. It requires Grok-supported matcher groups and reply formats.

The useful comparison is a policy-porting boundary: preserve server/tool identity
and verify an actual deny after translation. Similar hook names do not carry
native response semantics. The packets contain no imported-hook execution test.
The moving current Cursor hook reference is context, not an immutable proof of an
in-window introduction. The pinned binary supports the narrower existing identity
fact. No two-sided pinned result establishes that the IDE 3.24 Run Everything
change is equivalent to another provider's mode. Do not manufacture that join.

Keep Cursor's empty list. Its Grok Bot paragraphs concern a separate product,
not the watched grok-build CLI. Likewise Gemini and Haiku in Cursor's reviewer
identify model routes, not bundled Gemini CLI or Claude Code execution.

Record: cursor crosscheck's prior-claim MCP identity read; grok-build section 9.
The Grok worker's separate clone-pool door is an integration lead, not proof that
Cursor's lab checkout-cleanup repair is installed in a Grok execution host.

**grok-build: claude-code, hook errors have different configurable outcomes.**

The [Grok 1.0.52 guide](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964)
documents crashes, timeouts, missing package scripts and refused HTTP requests
allowing calls, with separate oversized-reply and invalid-rewrite deny exceptions.
Claude [2.1.295 adds onFailure block](https://github.com/anthropics/claude-code/releases/tag/v2.1.295)
for command and HTTP hooks; its default remains continue and vendor stable
2.1.287 lacks that option.

An imported Claude-style hook therefore needs more than a matcher translation.
Its owner must preserve the required failure outcome or retain independent
containment. A successful localhost policy reply tests neither absence nor timeout.
This is an earned Claude comparison and a real latest-versus-stable cost, not proof
that every Grok hook always fails open or that every Claude hook is fail-closed.
Keep Cursor only for the explained native-format/worker boundary, with the pinned
Cursor artifact above supplying the independent side.

Record: grok-build sections 9 and 19; claude-code section 7. The live Claude hook
reference was reachable during this review, but newly observed contents were not
used to backdate additional SessionStart names or behavior into this window.

**deepseek-harness: openhands, login is not inner principal separation.**

DeepSeek's [durable cookie signing material](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/browser-auth.ts#L125-L177)
and [Linux read reach](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-local/src/profiles.ts#L16-L35)
provide a static same-user path to [operator APIs](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112).
OpenHands' [inherited automation key alias](https://github.com/OpenHands/OpenHands/blob/v1.27.1/scripts/dev-with-automation.mjs#L906-L915)
opens a [saved-secret route outside profile selection](https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/settings_router.py#L492-L522).

DeepSeek's case requires reading signing material and reaching the API; OpenHands'
case carries an existing bearer key through terminal sanitization. Loopback and
login control external admission, not these inner paths. Secret separation,
runtime construction and API scope are the inspectable objects. Do not call either
a reproduced exploit, a shared CVE, or a reason to ignore the actual network fix.

The current Codex and Claude Code entries can remain as specific composition
boundaries: [the alpha Codex delegate defaults to never](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/subagent/subagent-codex/src/run.ts#L69)
and [the Claude delegate to dontAsk](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/subagent/subagent-claude-code/src/run.ts#L56).
Those are parent-selected child settings, not equivalent standalone defaults or
proof every child call is allowed. The optional OpenHands comparison is not
required in this already dense public profile.

Record: deepseek-harness sections 11 and 18; openhands section 4. A pi-ai library
dependency and a deepseek.v3 model route are not separately watched harness imports.

**heypi: pi-coding-agent, an upstream release can be both excluded and useful.**

heypi [declares Pi ^0.79.6](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64)
and [imports AuthStorage](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/model.ts#L1-L13).
[Pi 0.80.8 removed that export](https://github.com/earendil-works/pi/releases/tag/v0.80.8),
while [Pi Durable at 1.2.0](https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3-L7)
is a separate experimental recovery harness, not an embedded heypi feature.
heypi's [own failure contract declines arbitrary in-flight replay](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/reference/architecture.md#L54-L63).

Use the resolved 0.79.x API and own recovery until a tested port exists. An override
alone neither repairs the import nor adds Durable. The current public paragraph
already earns its sole Pi entry and correctly removes OpenClaw and Eve.

A useful internal secondary join is Flue: its
[Cloudflare blueprint admits ^0.11.0](https://github.com/withastro/flue/blob/v2.3.0/blueprints/sandbox--cloudflare.md#L77-L91),
whereas [heypi admits ^0.12.3](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-cloudflare/package.json#L41).
Both miss the 1.0 API rewrite, but only heypi's declared range can receive 0.12.10.
Neither range proves a live compatible deployment, especially for caller-owned
Worker objects. No additional public comparison is necessary.

Record: heypi sections 2 and 5; flue sections 3 and 8. A fixed beta package can
still receive changes through a different, wider dependency range.

**agent-flywheel: codex, an assembly hold does not identify every updater.**

Flywheel's [tagged manifest installs Codex latest](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs.manifest.yaml#L932-L963),
and its [fresh NTM command invokes interactive Codex without no-daemon](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L9748-L9765).
Compare the [Codex seeding rule](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install.rs#L272-L338)
and [independent managed updater](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md#L48-L68).

For eligible interactive launches on the relevant new Codex line, an ACFS hold on
its installer/update path does not itself govern the provider's daemon-only loop.
Inspect both client and server versions and configure the native updater where a
freeze is required. This is a conditional source-derived composition consequence,
not a recorded ACFS hold failure or proof of which Codex version every VPS installed.
Agent Zero's codex exec example above selects a different path. Treat these two
parents separately.

The existing Claude/Codex/Antigravity list remains meaningful because Flywheel
writes their invocation and settings. The [Antigravity wrapper](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/agy_locked.py#L59-L76)
also chooses always-proceed artifact review, independently of Antigravity's native
flag change. Removing heypi was correct. The monitor/checksum record measures
maintenance queues, not comparative provider productivity.

Record: agent-flywheel sections 7 and 14 and current defaults; codex sections 1-2.

**omnigent: claude-code, emitting ASK is not necessarily the last policy answer.**

Omnigent's [outage hook emits ASK](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/native/native_policy_hook.py#L543-L584),
and [its launch settings pre-accept project MCP and bypass consent](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/harnesses/claude_native/bridge.py#L2555-L2572).
Claude's [released guard](https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/sec-default/hooks/register.ts#L67-L114)
holds denies where applicable, while [the later ask-holding design remains on
cutoff main](https://github.com/anthropics/claude-code/blob/bf2323b3021c9d3db7a31e1e7d61068c3f704497/mods/sec-default/README.md).
The corrected Claude binary/documentation record establishes that a user mod can
approve an ask and avoid classifier review in released builds.

An outage test must include admitted mods and guard state as well as version and
bypass/auto mode. It should observe the decision and action, not only returned
hook JSON. This does not establish an Omnigent bypass incident or a paired runtime
failure. The current Claude/Codex entries are earned; their public uncertainty
already avoids claiming the wrapped engine necessarily honors ASK.

Codex's [bare codex-native auto_review selection](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/harnesses/codex_native/app_server.py#L4219-L4286)
does not mean [Guardian V2 was enabled upstream](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/features/src/lib.rs#L1805-L1808).
Reviewer selection, feature enrollment and the enclosing policy are separate.

Record: omnigent sections 5-6; claude-code sections 1-2; codex section 7.

**temporal-agent-harness: flue, a human wait belongs outside tool execution.**

Temporal's current [workflow wait design](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/docs/internal/human-in-the-loop-tool-approvals.md#L353-L369)
retains unbounded gated waits outside tool activities. Flue's
[bundled approval recipe](https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/tools.md#L228-L433)
ends the response, persists exact arguments, and accepts a decision through an
application-authenticated route. Flue provides no built-in approval service.

Both designs avoid spending a running tool's timeout budget on a person's delay.
The waiting state and operator responsibility differ: Temporal owns workflow
history and workers; a Flue application owns its route, expiry and idempotent
side effect. Neither durable waiting nor first-decision-wins means exactly-once
effects. Temporal [activity dispatch has its own timeout/retry semantics](https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L3769-L3775).

This updates Flue's memo's historical Temporal pin to the current 0.6.0 contract;
the file was re-read at the release commit. It is a useful optional architecture
comparison, not grounds to call Flue's recipe a Temporal-equivalent service.
Keep Temporal's empty list unless the paired explanation is published. Its Codex
and Claude adapter branches remain leads, not released integrations.

Record: flue section 11; temporal-agent-harness sections 3-4. Python 0.6.0 is an
installable prerelease; Flue 2.3.0 is a stable npm package with different provenance.

**unreal-agent: codex, shared login is not the same harness.**

Unreal [reads Codex credentials and calls the backend through its own client](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openaicodex/client.go#L44-L83),
while [its local process path inherits the environment](https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/primitives/process.go#L606-L609).
Codex's [released reviewer routing](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/ext/guardian-reviewer/src/routing.rs#L85-L91)
and [stdin review](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/unified_exec/stdin_approval.rs#L190-L251)
belong to Codex's runtime. They are not imported by reading its auth file.

Choose the execution environment and budget for Unreal's own loop. Its lack of
credential refresh is an Unreal client fact, not a finding about Codex's renewal
behavior or subscription authorization. Keep codex and pi-coding-agent because
the public benchmark is also an actual comparison, but bind that comparison to
the tested historical versions rather than today's profiles.

Record: unreal-agent sections 1 and 9; codex sections 5 and 7. No inference about
third-party subscription permission or current-version dollar savings is supported.

## Benchmark scope that must remain visible

**Eve versus Pi.** The [pinned benchmark JSON](https://github.com/vercel/eve/blob/eve%400.79.0/apps/docs/lib/evals/eve-code-benchmark.json)
records DeepSWE-lean v1, 12 tasks, three attempts per task and
anthropic/claude-sonnet-5.5. It compares Eve source
4d1491477a2e4f220131a3eb857a030c9eec0419, Pi 0.85.1 and OpenCode 1.18.30.
Pi resolves 26/36 and Eve 24/36; reported intervals overlap. That does not establish
equivalence or a winner. The [Pi 1.2.0 release](https://github.com/earendil-works/pi/releases/tag/v1.2.0)
and [new MCP/Code Mode introduction](https://github.com/earendil-works/pi/commit/8562bcf66a8eeefdf75ddd231ca9d7aa7d64f86e)
make the version gap material. The current draft explicitly excludes Eve 0.79.0
but leaves the Pi baseline unnamed. Name it in the claim-bearing sentence.

**Unreal versus Codex and Pi.** The [22 September launch capture](https://web.archive.org/web/20260922183130/https://unreallabs.ai/blog/unreal-agent/)
is evidence of vendor tables and claims. The [linked Unreal job](https://hub.harborframework.com/jobs/27133053-2015-46f3-8c72-6b6910859da6)
and [Pi comparator job](https://hub.harborframework.com/jobs/6ccd097a-747b-4867-be57-a56969df988f)
are part of the version-bound experimental record. The corrected harvest gives
Codex 0.154.0/0.155.1 and Pi 0.85.1, with one Pi 0.86.1 comparator. Unreal build
IDs cannot be assigned to public tags. The inspected Unreal job totals and
100 trial rows per job lack inference cost. Dollar savings remain vendor accounting;
the lower aggregate input-token direction is the narrower supported observation.
Nothing in [Codex 0.162.1](https://github.com/openai/codex/releases/tag/rust-v0.162.1)
or [Pi 1.2.0](https://github.com/earendil-works/pi/releases/tag/v1.2.0) lets those
results carry forward. Do not apply the launch claim to Unreal v0.3.1 either.

## Compared_with audit

The following audit accounts for every existing and proposed list. Square brackets
show IDs, not a requirement to use YAML flow syntax. None means the field is absent.
Internal nearest joins above do not automatically change these final lists.

| Profile | Previous list | Draft list | Disposition |
| --- | --- | --- | --- |
| codex | [claude-code, gemini-cli] | [] | Old generic peers correctly removed. Keep empty; add github-copilot-cli only with the runtime-identity paragraph. |
| claude-code | [codex, gemini-cli] | [] | Keep empty. Optional OMP extension-authority join is resolved internally, not required publicly. |
| gemini-cli | [antigravity] | [] | Recommend [antigravity] with the paired interactive/headless planning explanation. Migration does not establish feature parity. |
| openclaw | [codex] | [codex] | Keep the integration/version distinction. It does not attribute OpenClaw-owned fixes to standalone Codex. Add paperclip only with the consent comparison. |
| hermes-agent | [paperclip] | [] | Keep empty. The previous Paperclip reference did not carry a current decision. Pi/OpenClaw social positioning is not code equivalence. |
| paperclip | [hermes-agent] | [] | Keep empty unless an explained peer comparison is added. Name embedded runtime pins without automatically turning every worker into a comparator. |
| openhands | [claude-code, codex, gemini-cli] | [claude-code, codex, gemini-cli, pi-coding-agent] | Current field largely tracks an ACP roster. Recommend [gemini-cli] after the two-boundary model-selection paragraph; retain other names in the engine inventory, or earn them with paired authority evidence. |
| pi-coding-agent | None | None | Effective empty list is valid. Codex/xAI provider-default mentions do not require harness IDs. Add omp only if the trust divergence is published here. |
| agent-zero | None | [codex, claude-code] | Keep: explicit bypass invocations change the child posture. Clarify codex exec before applying the interactive daemon comparison. |
| eve | None | [pi-coding-agent] | Keep with Pi 0.85.1 and the tested Eve source/model named. A historical benchmark is not current equivalence. |
| omp | [pi-coding-agent, openclaw, claude-code] | [pi-coding-agent] | Keep Pi and make the trust-shim divergence specific. Other removals are correct. |
| flue | None | [pi-coding-agent] | Keep: paired dependency/provider-migration receipts already earn it. Do not inherit the CLI's controls from the two libraries. |
| antigravity | [gemini-cli] | [gemini-cli] | Keep the disclosed succession relation. The headless/interactive distinction may be explained on Gemini's page. |
| github-copilot-cli | [claude-code, antigravity, cursor, grok-build] | [claude-code] | Keep rule-file ingestion with scope limits. Optional Codex masking comparison earns another ID only if used. |
| cursor | [claude-code, antigravity, github-copilot-cli, grok-build] | [] | Keep empty. Reviewer model providers and the separate Grok Bot product are not watched CLI implementations. |
| grok-build | [codex, claude-code, pi-coding-agent, deepseek-harness, antigravity] | [claude-code, cursor] | Both can be earned by translated hooks and the host boundary. Add the native Claude failure-control receipt; keep Cursor's independent pinned artifact when making format claims. |
| deepseek-harness | [codex, claude-code, gemini-cli, omnigent] | [codex, claude-code] | Keep only the explained child invocations/bundles. Removed same-lab and generic orchestration peers were not equivalent authority or release evidence. |
| heypi | [pi-coding-agent, openclaw, eve] | [pi-coding-agent] | Keep: range, removed export and separate Durable package directly change the upgrade decision. Other removals are correct. |
| agent-flywheel | [claude-code, codex, antigravity, heypi] | [claude-code, codex, antigravity] | Keep the configured-worker authority boundary. Add the conditional native Codex daemon audit; remove heypi as drafted. |
| omnigent | [paperclip, openhands, hermes-agent] | [claude-code, codex] | Current entries are earned by startup settings and native policy routing. Hermes adapter repair stays a dependency finding, not a standalone Hermes defect. |
| temporal-agent-harness | [omnigent, openhands, codex] | [] | Keep empty. Branch SDK/app-server adapters are unshipped leads. Flue is optional with the current waiting-state comparison. |
| unreal-agent | [pi-coding-agent, temporal-agent-harness, openhands] | [codex, pi-coding-agent] | Keep the login/runtime distinction and version-bound vendor experiment. Old durability peers were unearned without a resolved failure model. |

## Comparisons to reject

- Model provider equals harness: DeepSeek's deepseek.v3 replay, Cursor's Gemini/Haiku
  reviewer, Unreal's Anthropic adapter and Copilot's retired Gemini model IDs do not
  establish changes in the separately watched DeepSeek Harness, Gemini CLI or
  Claude Code. Pi's Codex-authenticated model route is also not Codex CLI.
- Dependency equals full agent: OpenClaw's pi-tui package is a UI dependency;
  Flue's pi-ai/pi-agent-core and DeepSeek's pi-ai routes do not import Pi's CLI trust,
  MCP, extension loading or Durable package.
- Reviewer label equals enrollment: older Guardian approval on by default is not
  Guardian V2 on; Omnigent selecting auto_review does not flip the latter; a Claude
  mod approval can prevent classifier review entirely.
- Approval equals principal or exact effect: Paperclip's agent interpretation of a
  reply, OpenClaw's structured decision, Eve's requester-bound execution and
  Temporal's remembered name have different scope. None alone proves intent to
  every later argument or exactly-once execution.
- Pin equals same frozen object: Codex daemon, Copilot executable, Antigravity
  executable, Flywheel checksum ledger and ranged Pi libraries have different
  update owners. A tag on one layer is not the whole deployment.
- Same disclosure name equals same fix: Claude's new Plugin4Shell advisory names
  its SHA-shaped-branch mechanism and fixed 2.1.179 build. Gemini's FETCH_HEAD
  checkout path is a different pin-validation mechanism with hosted reach
  untested. Do not share CVE status, affected ranges or current exploitability.
- Durable equals delivery guarantee: DeepSeek removed Team outbox retries and
  deduplication on alpha; Temporal activities and Flue callbacks retain side-effect
  idempotency work; Unreal accepting Add/Cancel does not mean the operation finished.
  None is a common exactly-once contract.
- Architecture equals comparative benchmark result: old HarnessTax, Eve's small
  vendor run and Unreal's launch tables cannot certify the October 13 configurations.
  Deleted scaffolding, shared model names and smaller prompts do not bridge the gap.

## Directives for final drafters

Only two mandatory comparison-bar repairs are identified: naming historical
benchmark baselines on both sides. The remaining changes sharpen concrete
operator decisions or are explicitly optional. A profile not listed here has no
additional edit compelled by this lens; its candidate join and list verdict are
still recorded above.

**eve | must.** Edit the sentence: "Eve's 3 October vendor benchmark covers 12
tasks with three attempts each: Pi resolves 26/36 attempts, Eve 24/36 and opencode
18/36, with overlapping intervals on one model; it does not measure 0.79.0."
Name Pi 0.85.1, Eve source 4d1491477a2e4f220131a3eb857a030c9eec0419 and
anthropic/claude-sonnet-5.5. Preserve attribution, overlap and the bounded-trial
consequence; say the result establishes neither equivalence nor a current winner.
Evidence: the pinned benchmark JSON and Pi 1.2.0 receipts above; eve section 11.

**unreal-agent | must.** Edit: "The vendor's 22 September tables claim up to 40%
savings over Codex and 20% over Pi."
Bind it to Codex 0.154.0/0.155.1 and Pi 0.85.1, with one 0.86.1 comparator.
Keep Unreal's unassignable build IDs and missing inference-cost accounting beside
the claim. State that this is not a measured comparison of v0.3.1 against current
Codex 0.162.1 or Pi 1.2.0. Evidence: launch capture, Harbor jobs and unreal section 9.

**omp | should.** Sharpen: "OMP filled three gaps observed with pi-optchat, which
does not establish blanket Pi 1.x compatibility or import Pi's trust behavior."
Give the current practical divergence: OMP 18.10.4's shim answers true; Pi 1.2.0
has a scoped resolver and declines protected resources in an undecided headless
ask-policy run. A migrated extension must not treat the same import/method name
as the same guard. Preserve Pi's context/sessionDir exceptions and OMP's downstream
tool policy. Evidence: both tagged resolvers and OMP's loader contract above.

**agent-flywheel | should.** Extend: "Check the path and retained binary before
relying on a freeze or rollback."
For eligible interactive Codex 0.157+ launches, inspect the daemon version and
native updater setting alongside ACFS's client hold. Keep the seeding, support
and successful-update conditions explicit. Evidence: v0.10.0 NTM/manifest and
Codex 0.162.1 daemon seeding/updater pins. No ACFS hold failure was reproduced.

**openhands | should.** Extend: "Pin a model for cost or evaluation baselines."
For Gemini, record selected/requested and returned identity as available: the
restored SDK model API precedes the CLI's conditional Flash rewrite. Add both
receipts. Use compared_with [gemini-cli] if that is the only resolved paired
comparison; retain the other ACP engines in the roster rather than as unproved
analytical peers. Evidence: SDK commit 6d51e7262fc234586ff5e8e519ce5a658d334cdf
and Gemini 0.64.0 mapper/gate above.

**gemini-cli | should.** After the plan-only recommendation, add the specific
Antigravity divergence: 1.3.2 restores interactive plan review under the bypass
flag, while headless plan review still auto-proceeds from 1.1.28. Pair with Gemini's
new prompt and old exit-to-YOLO path. Add antigravity to compared_with if included.
Evidence: the four pinned planning receipts above; gemini section 5 and antigravity
section 4. Do not imply migration preserves a headless review checkpoint.

**grok-build | should.** Strengthen "Imported hooks need translation and failure
tests" with the native Claude comparison: 2.1.295+ has onFailure block, default
continue; vendor stable 2.1.287 lacks it. Grok 1.0.52's shipped guide still describes
missing/refused hooks allowing calls. Preserve its deny exceptions. Evidence:
Claude's pinned 2.1.295 release and Grok's generation-pinned guide above. This
earns a concrete configuration/channel consequence for the existing Claude entry.

**omnigent | should.** Extend: "Confirm that your installed version honors that
response in bypass or auto mode before relying on it; emitted JSON alone cannot
settle that question."
Include admitted Claude mods and guard presence in the paired outage test; a
released mod can approve an ask and skip the classifier. Check observed execution,
not only Omnigent's returned ASK. Evidence: v0.18.0 native_policy_hook, Claude's
released guard and main-only ask-holding design above. This is a test requirement,
not a claim of a demonstrated Omnigent bypass.

**paperclip | should.** Beside provider permission defaults, state stable's
declared Codex 0.160.0 / Claude Code 2.1.286 pins and the remote Codex range
>=0.149.0,<0.161.0. Compare these with the refreshed standalone recommendations,
then require actual worker/image identity and adapter compatibility for an
upgrade. Preserve native-versus-legacy containment differences. Evidence: the
Paperclip stable release and harvest section 6, plus Codex 0.162.1 and Claude
2.1.296 releases. A newer upstream fix is not established in that worker.

**pi-coding-agent | should.** Edit: "Codex and xAI defaults changed, as did
Fireworks, Together, OpenCode Go and NVIDIA defaults."
Clarify the first clause as "Pi's Codex-authenticated and xAI model routes changed
defaults."
Its Pi release receipts concern model-route defaults, not a release of either
watched CLI. Keep compared_with effectively empty unless a real paired harness
comparison is published. Evidence: Pi v0.99.1/v0.87.1 receipts in that paragraph,
Pi's current model-resolver and the separate Codex 0.159.1 release.

**agent-zero | should.** In "Orchestrator's Codex example bypasses approvals and
sandbox, and its non-root Claude Code example bypasses permissions," name the
Codex command as codex exec. When connecting it to Codex's new runtime posture,
state that 0.162.1's exec path does not use the interactive daemon. Evidence:
Agent Zero v2.14 Orchestrator README and Codex 0.162.1 exec/startup pins above.
This prevents the parent from inheriting the wrong runtime-pinning advice.

**codex | could.** Add the short Copilot divergence from the first profile entry:
Copilot's executable self-updates, whereas an eligible Codex daemon-only update
can leave the client command alone. The consequence is recording both identities.
Add github-copilot-cli to compared_with only if the paragraph is used. Evidence:
both pinned updater controls above. Retain explicit standalone/exec qualifications.

**openclaw | could.** After "Structured chat approval requires the button or
/approve, rather than a typed yes, and the standalone page now shows scope," add
the comparison with Paperclip's agent-resolved ordinary
confirmation and human_only resolver. Name which decision each mechanism governs.
Add paperclip only if this operator-relevant distinction is published. Evidence:
OpenClaw's tagged chat contract and both Paperclip confirmation/resolver pins.
Preserve the independent stable argument-rewrite defect and beta-only binding fix.

**github-copilot-cli | could.** Add the channel comparison for credential
brokerage: Copilot 1.0.92+ on stable versus Codex 0.163.0 previews with
proxy-dependent default-off masking. Explain configuration prerequisites,
withholding versus masking and remaining file/unmasked-variable reach. Add codex
only if used. Evidence: the paired pinned release/docs/code receipts above. Neither
side has an independently measured exfiltration result in this packet.

**temporal-agent-harness | could.** Pair the current workflow wait with Flue
2.3.0's response-ending approval recipe. Explain that Flue's application owns the
authenticated route, expiry and idempotent execution, while Temporal owns workflow
history/worker compatibility. Add flue only if used. Evidence: the current 0.6.0
approval design and Flue's tagged guide above. Keep both release channels and the
absence of an exactly-once side-effect guarantee explicit.

## Review limits

The audit is documentary and source-derived. It does not establish the installed
versions, service flags, hosted deployments or runtime acceptance of a particular
operator's fleet. A later retrieval of mutable docs or registry selectors is not
an archived window observation. A live Claude hook-page fetch during this review
was used only as a current reference check; newly observed details were excluded
from historical comparisons. Web retrieval failures for an archived Antigravity
page and a GitHub Gemini blob did not alter the corrected primary record; the
comparison uses the existing pinned receipts and verification reads.

No claim of provider superiority, total review-time reduction, universal policy
enforcement, common vulnerable range, automatic patch inheritance or actual
exactly-once execution follows from this map. The operator consequences are the
specific version, invocation, resolver, credential, grant and failure-path checks
identified above.
