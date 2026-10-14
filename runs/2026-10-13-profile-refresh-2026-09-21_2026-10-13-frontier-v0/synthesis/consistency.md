# Cross-profile fact consistency

Lens: CROSS-PROFILE FACT CONSISTENCY.

Run: `2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0`.
Window: 2026-09-21 through 2026-10-13, inclusive. Profile posture: 2026-10-13.

## Result

Six supported `should` directives follow. I found no demonstrated cross-draft factual contradiction requiring a `must` correction, and no retained `compared_with` entry that needs deletion. The useful changes concern a second Codex updater, precise ownership of Pi provider settings, historical benchmark versions, and requested versus runtime model identity.

Several apparent inconsistencies are real distinctions the final drafts should preserve. Agent Flywheel explicitly selects Astra/xhigh while standalone Codex's unset-model catalog selects Sol/low. heypi remains on Pi 0.79.x while Flue admits Pi 1.x. Paperclip bundles older child versions and has its own remote-Codex compatibility ceiling. Unreal Agent's Codex-authenticated client is not the Codex CLI. A shared configuration filename or package namespace does not transfer another harness's permissions, defaults, release channel, or compatibility guarantees.

## Scope and evidence handling

I read all 22 `writeup.md` memos in full, inspected draft frontmatter and cross-product prose, and checked the relevant corrected harvest and crosscheck sections. I also compared the prior profiles' comparison lists with the drafts. This is a consistency review of the supplied evidence, not a new runtime verification. Primary URLs below are receipts retained in those inputs; I did not execute cloned code or independently reproduce their behavior.

Notation used below:

- `D(id):line` means `/Users/c3po/co/frontier/tmp/refresh-2026-10-13/drafts/<id>/profile.v1.md` at that line. Wrapped source lines are joined when quoting visible prose; Markdown link destinations are omitted from quotations.
- `H(id) section N` means this run's `harvest/<id>.primary.md`, numbered section N. The corrected harvest is the record of fact.
- `V(id)` means this run's `verify/<id>.crosscheck.md`. Its earlier corrections are not treated as unresolved when the corrected harvest and draft already apply them.
- An embedding project's harvest owns its invocation, dependency range, and adapter behavior. The upstream product's harvest owns its release versions, native defaults, and API changes. An upstream harvest need not mention every downstream wrapper for the wrapper's own pinned source to establish an integration.

The 22 memo IDs read were: codex, claude-code, gemini-cli, openclaw, hermes-agent, paperclip, openhands, pi-coding-agent, agent-zero, eve, omp, flue, antigravity, github-copilot-cli, cursor, grok-build, deepseek-harness, heypi, agent-flywheel, omnigent, temporal-agent-harness, unreal-agent.

## Owning-product anchors

These are the upstream facts needed to adjudicate downstream references, not a proposal to add a release ledger to every profile.

| Owner | Dated fact that governs cross-profile claims | Owning record and receipt |
| --- | --- | --- |
| Codex | Stable CLI 0.162.1. The eligible interactive daemon path is default from 0.157.0; an npm-seeded daemon can update separately from the CLI. `codex exec` does not use that daemon. | [H(codex)](../harvest/codex.primary.md), install snapshot and sections 1-2; [0.162.1 release](https://github.com/openai/codex/releases/tag/rust-v0.162.1), [daemon lifecycle and update rules](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md?plain=1#L22-L55). |
| Codex | The unset-model bundled catalog changes to `gpt-6.1-sol` in 0.159.1, with low effort. Explicit launch/configuration values and server defaults matter; this is not a universal model forced on wrappers. | H(codex) section 3; [0.159.1](https://github.com/openai/codex/releases/tag/rust-v0.159.1), [0.162.1 model catalog](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/models-manager/models.json#L177-L248). |
| Claude Code | Latest and next are 2.1.296; vendor stable is 2.1.287. The native installer defaults to latest. Opus, Sonnet, and Haiku 5.5 changes have their own dates and account/provider scopes. | [H(claude-code)](../harvest/claude-code.primary.md), install snapshot and sections 12-13; [2.1.296 release](https://github.com/anthropics/claude-code/releases/tag/v2.1.296). |
| Pi | Coding agent, pi-ai, pi-agent-core, and pi-durable reach 1.2.0. They are different packages. The experimental core harness was removed in 1.0.0; experimental client/server/plugin source was removed in 1.2.0. Pi Durable is separate and experimental. | [H(pi-coding-agent)](../harvest/pi-coding-agent.primary.md), install snapshot and sections 5-6; [1.2.0](https://github.com/earendil-works/pi/releases/tag/v1.2.0), [core-harness removal](https://github.com/earendil-works/pi/commit/7fd478a2e888ebc28869566f33a186303d372838), [Durable README](https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3). |
| Pi | In 1.0.3 the Azure provider ID becomes `azure`; API ID `azure-openai-responses` and `AZURE_OPENAI_*` names remain. Pi's legacy OpenAI Codex provider and xAI provider have their own model defaults. | H(pi-coding-agent) section 11; [Azure changelog](https://github.com/earendil-works/pi/blob/v1.0.3/packages/ai/CHANGELOG.md#L5-L11), [legacy Codex route default](https://github.com/earendil-works/pi/releases/tag/v0.99.1). |
| Gemini CLI | Stable is 0.64.0. From 0.61.0, the latest-Flash gate can rewrite explicit Flash IDs before sending requests. That is client request mapping, not proof of the model served. | [H(gemini-cli)](../harvest/gemini-cli.primary.md), install snapshot and section 2; [mapping code](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/models.ts#L144-L164), [access gate](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/config.ts#L3585-L3618). |
| Gemini CLI / Antigravity | The June 18 consumer-service transition and the later Code Assist Standard/Enterprise subscription sunset describe different populations and dates. Neither establishes termination of all Gemini CLI API-key or Vertex use. | H(gemini-cli) section 1; [H(antigravity)](../harvest/antigravity.primary.md), prior claims; [Google's consumer transition notice](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/). |

## Cross-product claim inventory

This inventory includes substantive public cross-product references and relevant memo-only leads. A provider/model name is not automatically a claim about the similarly named watched CLI.

| Draft | Cross-product locations and ownership check | Disposition |
| --- | --- | --- |
| codex | No substantive factual claim about a different watched harness in the body. Its daemon, model, and channel facts supply the upstream checks for Flywheel, Paperclip, OpenHands, Omnigent, Agent Zero, DeepSeek, and Unreal. H(codex) sections 1-3. | No peer-fact correction. |
| claude-code | No substantive peer-harness claim in the body. Native channel and model facts are checked against wrappers separately. H(claude-code) sections 12-13. | No peer-fact correction. |
| gemini-cli | D:325 names the Antigravity migration path, with distinct consumer and enterprise dates; D:352 explicitly leaves API-key/Vertex/Gateway support scope open. H(gemini-cli) section 1 and H(antigravity) prior claims agree. | Retain the population and service-scope qualifications. |
| openclaw | D:301 names Codex child-tree reaping and tells Gateway users to inspect OpenClaw's integration controls. H(openclaw) sections 1 and 18 own the child supervision and stale-session fixes. They are not claims that a particular standalone Codex release contains an OpenClaw fix. The memo's Pi reference is only the `pi-tui` dependency. | No contradiction and no upstream Codex version substitution. |
| hermes-agent | No public peer-harness claim requiring comparison. Anthropic credential handling and signed reasoning concern provider routes. They do not establish a Claude Code bundle or Claude Code runtime behavior. | No peer directive; the removed Paperclip comparison should stay removed. |
| paperclip | D:311-320 distinguishes native ACPX/OpenCode, legacy Codex, native Codex, legacy Claude/OpenCode, and Grok adapter defaults. H(paperclip) sections 1 and 7 own those invocation choices. Its memo's Codex/Claude versions are Paperclip pins, not upstream latest assertions. | Preserve adapter qualifiers and explicit opt-outs; do not harmonize them with standalone defaults. |
| openhands | D:381-387 lists Pi/OpenCode alongside Claude Code/Codex/Gemini CLI on local backends, model discovery, and the SDK 1.54.0 Gemini repair. H(openhands) sections 9 and 23 support all three. H(gemini-cli) section 2 adds an independent child-side model-mapping issue. | C06 adds requested/runtime model verification. No Cloud support or universal latest-child claim is present. |
| pi-coding-agent | D:377-384 correctly distinguishes Azure provider ID from API ID, but calls a Pi provider route simply "Codex". H(pi-coding-agent) section 11 and H(codex) section 3 describe separate default changes. | C02 clarifies ownership. |
| agent-zero | D:254 reports Orchestrator's Codex and non-root Claude Code example commands. H(agent-zero) section 6 supports bypass flags and says adapters/guidance do not prove that the CLIs are installed. D:256's Claude summary instructions concern model routes. | Retain "example" and the host/container decision; no native-default assertion. |
| eve | D:273's Grok 4.7 and GPT-6 Luna Fast/high are Eve's model choices, not Grok Build or Codex defaults. D:285 compares a dated Eve vendor run against Pi and opencode. H(eve) sections 9 and 11 own those facts; Pi's current release is independently 1.2.0. | C04 adds the historical comparator and model identities. |
| omp | D:144 says Pi imports resolve to OMP's own bundles; D:174 limits compatibility to named gaps and a ported cache-warming strategy. H(omp) section 9 supports this. H(pi-coding-agent) section 7 establishes upstream trust behavior that OMP explicitly does not inherit. | Correct distinction between a fork and upstream Pi. |
| flue | D:224 names Pi as the model catalog/agent loop; D:296-307 identifies pi-ai/pi-agent-core, the `^1.1.0` range, possible 1.2.0 resolution, and Azure rename. H(flue) section 3 and H(pi-coding-agent) sections 5, 6, and 11 agree. D:313's history cursor is not the Cursor product. | C03 makes the Azure API-ID exception as explicit here as in Pi's profile. |
| antigravity | D:201-202 describes consumer Gemini CLI users' June transition. H(antigravity) prior claims and H(gemini-cli) section 1 agree. D:267-272 describes Antigravity's own plan/model identifiers, not Claude Code plans or IDs. | Keep both distinctions; no universal Gemini shutdown claim. |
| github-copilot-cli | D:187 says Copilot reads Claude Code rule files and names Copilot's introduction versions. H(github-copilot-cli) section 8 establishes the consumer behavior. D:169's `claude-sonnet-5.5` is Copilot's documented identifier. | Correct; shared files do not imply shared trust or permission semantics. |
| cursor | D:302 discusses Grok Bot, whose identity, plan bundling, and terms are owned by H(cursor) section 12. It is distinct from xAI's Grok Build, as that draft explicitly says at D(grok-build):166. | Correct product separation. No reason to retain Grok Build in Cursor's comparison list for this paragraph. |
| grok-build | D:176 and D:190 describe the Cursor Cloud Agents worker and its account/sandbox gates, not general Cursor availability. D:182 describes Grok's incompatibility with Claude startup matchers and native Cursor hook replies. H(grok-build) sections 4 and 9 own the adapter and documented acceptance rules. | Correctly bounded to Grok's guide and binary; no verified end-to-end compatibility asserted. |
| deepseek-harness | D:196 and D:224 name Claude Code/Codex delegation and alpha catalog convenience, with `dontAsk`/`never` wrapper defaults. H(deepseek-harness) section 11 says wrappers already exist on rc and the new catalog/global behavior is alpha-only. | Accurate wrapper defaults; do not rewrite them as native harness defaults or call alpha catalog availability stable. |
| heypi | D:224, D:228, D:242, and D:246 separate Pi execution/state from heypi policy, identify the resolved 0.79.10 runtime, describe encrypted handoff, and rule out automatic adoption of Pi 1.2/Durable. H(heypi) sections 2 and 5 agree with H(pi-coding-agent) section 5. `codex-tag` is a starter-template argument, not evidence of a Codex executable. | Correct old dependency range and separate recovery contract. |
| agent-flywheel | D:195, D:203, D:207, D:211, D:215, D:217, D:223, and D:225 cover bundled agents, bypass wrappers, hook/updater interactions, explicit Astra/xhigh, rehearsal, and cloud tool modes. H(agent-flywheel) sections 7, 9, 11, and the prior/default checks support these wrapper facts. H(codex) sections 1-2 supplies an unmentioned update path. | C01 adds the daemon caveat. Keep the explicit model and permission overrides. |
| omnigent | D:156, D:170, D:176, and D:180 place policy above Claude Code/Codex, attribute a Claude 2.1.269 observation, distinguish emitted ASK from honored ASK, and scope the Databricks Codex executor. H(omnigent) sections 5, 6, and 14 agree. | Historical tested version and untested current behavior are already qualified. No update of the historical version to 2.1.296. |
| temporal-agent-harness | No public claim of a shipped Codex/Claude Code wrapper. D:175's Gemini helper is a model SDK integration, not Gemini CLI. H(temporal-agent-harness), "Leads not promoted", leaves Codex/Claude adapters off main. | Correct omission of unreleased integrations. The Pi Durable memo lead can now be sourced from Pi's own harvest if needed elsewhere. |
| unreal-agent | D:131-136 uses a Codex login for Unreal's own client with Sol/high and external token renewal; D:172-175 describes its Anthropic route and an `openai-codex` cap exception. D:194 compares dated vendor results with Codex and Pi. H(unreal-agent) sections 9 and the provider findings distinguish these from current CLI behavior. | C05 adds historical comparator versions. Do not import Codex's low effort or daemon lifecycle into Unreal's client. |

## Apparent conflicts adjudicated

### Pi inside other systems

| Consumer | What is actually connected | Why its version or behavior can differ from Pi's profile |
| --- | --- | --- |
| Flue 2.3.0 | `@earendil-works/pi-ai` and `pi-agent-core` at `^1.1.0`; fresh resolution can reach 1.2.0. | This uses the provider library and loop, not necessarily the coding-agent CLI or its trust loader. [Runtime manifest](https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/package.json#L87-L88), H(flue) section 3. |
| heypi 0.3.0-beta.2 | `pi-coding-agent` range `^0.79.6`, lock/fresh allowed resolution 0.79.10. | The range excludes 0.80 and 1.x; older consumer locks can retain earlier allowed versions. Pi 0.80.8 removed `AuthStorage`, which heypi imports. This is a porting requirement, not an ordinary update. [heypi manifest](https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64), [Pi 0.80.8](https://github.com/earendil-works/pi/releases/tag/v0.80.8), H(heypi) section 2. |
| OMP 18.10.4 | OMP copies behind Pi-named imports and selected compatibility exports. | Its context still reports project trust as true. Filling three pi-optchat gaps does not establish Pi 1.x compatibility or import Pi's trust gating. [OMP extension loading](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extension-loading.md#L280), [compatibility port](https://github.com/can1357/oh-my-pi/commit/597c8d17b54e1e30120f917f24bf0d2688be5821), H(omp) section 9. |
| OpenHands Canvas | A Pi ACP profile on local backends, with credential fields and model discovery. | A menu entry is not proof of a particular installed Pi version, successful runtime acceptance, or Cloud availability. [Provider table](https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/constants/acp-providers.ts#L129-L190), H(openhands) section 9. |
| OpenClaw | Memo-only `@earendil-works/pi-tui` 0.86.1. | A TUI library is not proof that Pi's reasoning loop is embedded. [OpenClaw manifest](https://github.com/openclaw/openclaw/blob/v2026.10.3/package.json), H(openclaw) cross-profile touchpoints. |
| Paperclip preview | Memo/harvest names Pi 1.0 as an experimental runner provider. | Preserve preview/experimental scope; no public draft claims an installed current Pi CLI or stable Durable integration. H(paperclip) preview findings. |
| Eve and Unreal | Pi 0.85.1, plus one 0.86.1 job in Unreal's linked comparisons. | These are historical benchmark subjects, not dependencies to bump and not evidence about Pi 1.2.0. C04 and C05 below. |

Pi Durable is not a new name for the coding-agent CLI. H(pi-coding-agent) section 5 explicitly closes the old experimental stack and gives the separate package. heypi correctly says it has no integration. Temporal's memo initially had only a secondary discovery lead; the corrected Pi harvest now supplies a primary [Durable README](https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md#L3) if the coordinator elects to compare the two. This does not justify adding a durability claim to heypi or a shipped Pi integration to Temporal.

### Wrapper choices and native defaults

Agent Flywheel's `gpt-6-astra/xhigh` is not stale prose. Its fresh-host NTM configuration explicitly passes those values, and existing NTM configuration is not overwritten merely because a new installer exists. [ACFS install template](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L9748-L9765), H(agent-flywheel) section 7. Codex's own Sol/low catalog applies when no overriding selection determines the model, per H(codex) section 3. Unreal independently chooses Sol/high for its own client. The three statements can all be true.

The same distinction applies to permissions. Flywheel's Claude/Codex shortcuts and Antigravity wrapper deliberately bypass ordinary review; Agent Zero reports bypassing example commands; DeepSeek's child wrappers default to `dontAsk` and `never`; Paperclip has distinct legacy and native paths. These are not conflicting descriptions of the standalone products. Do not turn Codex `never` alone into a claim that its filesystem sandbox is disabled: the explicit Flywheel/Paperclip legacy bypass flag establishes both, while DeepSeek's quoted approval default alone does not. Receipts: [Flywheel aliases](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs/zsh/acfs.zshrc#L633-L642), [Agent Zero Orchestrator examples](https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_orchestrator/README.md#L82-L97), [DeepSeek Codex wrapper](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/subagent/subagent-codex/src/run.ts#L69), [Paperclip legacy Codex arguments](https://github.com/paperclipai/paperclip/blob/v2026.1001.0/packages/adapters/codex-local/src/server/codex-args.ts#L53-L80).

Paperclip's corrected harvest section 6 records stable child pins Codex 0.160.0 and Claude Code 2.1.286, with remote Codex accepted at `>=0.149.0` and `<0.161.0`. These are older than the products' current standalone releases, but they are not erroneous current-version claims. Do not replace the pins with Codex 0.162.1 or Claude 2.1.296 in synthesis. In particular, the independent Codex recommendation cannot be copied into Paperclip's remote path without checking its ceiling. The public draft does not currently promise latest-child compatibility, so this warrants a retained research constraint, not a fabricated correction.

Omnigent's Claude Code 2.1.269 statement is explicitly a maintainer observation about previously declined MCP servers. Changing that number to the current Claude version would fabricate testing. Its ASK section already requires validation on deployed child versions, rather than treating Omnigent's JSON output as proven enforcement. [Omnigent launch builder and trust state](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/harnesses/claude_native/bridge.py#L2555-L2572), [ASK output](https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/native/native_policy_hook.py#L543-L584), H(omnigent) sections 5-6. Its stable Codex `>=0.146.0` gate belongs only to the Databricks signer-backed executor in section 14, not every Codex launch.

Model strings also belong to routes. Copilot's `claude-sonnet-5.5`, Antigravity's `claude-sonnet-5-5-<level>`/`claude-opus-5-5-<level>`, Unreal's `claude-opus-5-5`, and Eve's benchmark `anthropic/claude-sonnet-5.5` should not be normalized to one spelling. H(github-copilot-cli) section 7, H(antigravity) model findings, H(unreal-agent) provider findings, and H(eve) section 11 own those identifiers. Eve's Grok default is not the Grok Build product; Temporal's Gemini helper is not Gemini CLI; a Codex login in Unreal is not execution of Codex's agent loop.

### Shared files, adapters, and release channels

Copilot's `.claude/rules` support is a claim about Copilot reading an existing format, not a claim that it runs Claude Code. The draft does not infer loading before folder trust. [Copilot changelog](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L123), H(github-copilot-cli) section 8.

Grok's hook paragraph says its own `SessionStart` accepts `new`/`load` and cannot consume native Cursor replies. The owning compatibility receipt is Grok's shipped guide; absence of those details from a different product's harvest does not refute Grok's documented input contract. The paragraph does not promise successful translation or equal failure policy. H(grok-build) section 9, [versioned 1.0.52 distribution containing the guide](https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964). The Cursor worker's account requirement, default-off auto mode, sandbox refusal, and clone-pool path are likewise Grok integration facts, not a general statement about Cursor's public availability.

Flywheel's cloud paragraph is correctly outside stable v0.10.0. H(agent-flywheel) section 9 and V(agent-flywheel) distinguish initial cloud setup present in the `cloud-binaries-v1` source from later main-only hardening. The draft's "mirror's tagged source" is therefore not a mistaken stable claim. Its pinned script, moving manifest reference, reuse of callable tools, Claude MCP mode, and Codex CLI mode are separately described. [Pinned cloud script](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/e5eb614dff527ec280f9fdd711cc2c58de9958df/scripts/claude-code-web-setup.sh). Flywheel's late main-only Argon configuration is not proof of Antigravity model availability; the public draft does not make that leap.

The Gemini and Antigravity profiles do not disagree on a shutdown date. Antigravity's sentence is explicitly about consumers in June. Gemini's new sales, license additions, annual renewal, and monthly renewal dates concern Code Assist Standard/Enterprise. The profile also preserves uncertainty for other authentication routes. No universal CLI shutdown should be synthesized from either.

### One research-layer snapshot discrepancy

H(flue), install snapshot line 26, calls Cloudflare Sandbox 1.0.0 the latest package. H(heypi), section 4 and dependency table, establishes that 1.0.1 was published on October 13 at 10:20:44.828Z; its source still lacks the old session interface. The latter record explicitly distinguishes publication timestamps from observed dist-tag assignment. For an end-of-window synthesis, use "1.0.1 was published by cutoff", not a reconstructed exact historical latest-pointer claim. [Cloudflare 1.0.1 release](https://github.com/cloudflare/sandbox-sdk/releases/tag/%40cloudflare/sandbox%401.0.1), [1.0.1 exports](https://github.com/cloudflare/sandbox-sdk/blob/e4877c7368f8b1620bd4400ff831e28fba152eff/packages/sandbox/src/index.ts#L37-L44).

This does not create a public-draft correction: Flue says SDK 1.0 generically, and both drafts correctly say the old interface was removed. Flue's `^0.11.0` and heypi's `^0.12.3` are also different ranges; the latter can admit 0.12.10, the former cannot. Do not transfer heypi's 0.12.10 recommendation to Flue as proven compatible. Neither harvest establishes that runtime test.

## Comparison metadata audit

`absent` means the field is missing, not an invalid reference. A populated list need not be reciprocal. The judgment is whether the text uses the relationship to change an operator decision, following METHOD.md and EDITORIAL.md.

| Profile | Prior list | Draft list | Judgment |
| --- | --- | --- | --- |
| codex | claude-code, gemini-cli | empty | Correct removal; current prose focuses on its own daemon and authority. |
| claude-code | codex, gemini-cli | empty | Correct removal; no peer comparison in current body. |
| gemini-cli | antigravity | empty | Acceptable. The sourced migration reference can stand without a reciprocal comparison entry. |
| openclaw | codex | codex | Earned by the Gateway's child supervision and the direction to inspect integration controls alongside the launched runtime. |
| hermes-agent | paperclip | empty | Correct removal; no Paperclip comparison remains. |
| paperclip | hermes-agent | empty | Correct removal. Mentioning child adapters does not require a new comparison list. |
| openhands | claude-code, codex, gemini-cli | claude-code, codex, gemini-cli, pi-coding-agent | Earned by local ACP engine choice, configuration ownership, and credential/model consequences. |
| pi-coding-agent | absent | absent | Acceptable; no peer catalog needs to be manufactured. |
| agent-zero | absent | codex, claude-code | Earned by delegation commands overriding familiar child-agent permission expectations. |
| eve | absent | pi-coding-agent | Earned by the bounded vendor benchmark and advice against switching on it. |
| omp | pi-coding-agent, openclaw, claude-code | pi-coding-agent | Correct narrowing to import compatibility, differing trust, and cache warming. |
| flue | absent | pi-coding-agent | Earned by the shared libraries, floating range, and migration costs. |
| antigravity | gemini-cli | gemini-cli | Earned by the consumer migration and resulting product choice. |
| github-copilot-cli | claude-code, antigravity, cursor, grok-build | claude-code | Correct narrowing to shared repository instructions. |
| cursor | claude-code, antigravity, github-copilot-cli, grok-build | empty | Correct removal. Grok Bot is not Grok Build. |
| grok-build | codex, claude-code, pi-coding-agent, deepseek-harness, antigravity | claude-code, cursor | Earned by hook translation and the Cursor worker's separate operating requirements. |
| deepseek-harness | codex, claude-code, gemini-cli, omnigent | codex, claude-code | Correct narrowing to the rival-harness wrappers and their policy settings. |
| heypi | pi-coding-agent, openclaw, eve | pi-coding-agent | Correct narrowing to the actual execution dependency and missing upgrade/recovery integration. |
| agent-flywheel | claude-code, codex, antigravity, heypi | claude-code, codex, antigravity | All three assembled-agent relationships are operationally substantive; heypi removal is correct. |
| omnigent | paperclip, openhands, hermes-agent | claude-code, codex | Current prose earns the two wrapped-agent comparisons; the old peers no longer drive the read. |
| temporal-agent-harness | omnigent, openhands, codex | empty | Correct removal; the candidate native-agent integrations are unreleased leads. |
| unreal-agent | pi-coding-agent, temporal-agent-harness, openhands | codex, pi-coding-agent | Earned by the historical benchmark and the explicit need for local measurement. |

No comparison deletion directive is supported. Do not restore old lists merely because a product remains broadly adjacent.

## Directives for final drafters

### C01: agent-flywheel, should

**Exact sentence, D(agent-flywheel):211:** "Codex installs `@latest`, and Claude updates through its latest installer with hold checks."

**Fix:** Keep the installer statement and add the independent Codex daemon update path to this paragraph. An ACFS hold alone does not freeze an eligible npm-seeded interactive Codex server. Tell operators requiring repeatability to compare `codex --version` with `codex app-server daemon version` and control the daemon updater, or use `--no-daemon`. The documented updater setting is `{"updater":{"autoUpdateEnabled":false}}` in `CODEX_HOME/app-server-daemon/settings.json`, followed by a daemon restart; restart does not downgrade an already advanced daemon. Keep the claim conditional on the eligible interactive path. `codex exec` does not use it. Do not claim a Flywheel runtime failure was reproduced.

**Why this priority:** The current paragraph already says holds are path-specific, so it is not a false universal-freeze claim. The upstream change nevertheless adds a directly relevant path missing from its concrete advice.

**Evidence:** H(agent-flywheel), install snapshot and update-path findings, owns the npm installation. H(codex) sections 1-2, lines 70-94, owns the daemon eligibility and updater. [ACFS manifest](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs.manifest.yaml#L932-L963), [Codex package seeding](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/prepare_install.rs#L272-L338), [updater default](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/src/settings.rs#L27-L37), [daemon lifecycle](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-daemon/README.md?plain=1#L48-L55).

### C02: pi-coding-agent, should

**Exact sentence, D(pi-coding-agent):380-382:** "Codex and xAI defaults changed, as did Fireworks, Together, OpenCode Go and NVIDIA defaults."

**Fix:** Name the owner of each default. For example: "Pi's legacy OpenAI Codex route changed its default to `gpt-6.1-sol` in 0.99.1, and its xAI route changed to Grok 4.7 in 0.87.1; Fireworks, Together, OpenCode Go and NVIDIA defaults changed too." Keep the provider-specific receipts attached. Do not use the Pi release as evidence of when the standalone Codex CLI changed its default.

**Why this priority:** The section heading supplies provider context, but the bare product name can be read as the watched Codex harness. This is an ownership clarification, not a claim that the named models conflict.

**Evidence:** H(pi-coding-agent) section 11, lines 171-181, owns the legacy-route label and Pi default changes. [Pi 0.99.0 provider change](https://github.com/earendil-works/pi/releases/tag/v0.99.0), [Pi 0.99.1 default](https://github.com/earendil-works/pi/releases/tag/v0.99.1), [Pi 0.87.1 xAI default](https://github.com/earendil-works/pi/releases/tag/v0.87.1). H(codex) section 3 separately dates the native change to [Codex 0.159.1](https://github.com/openai/codex/releases/tag/rust-v0.159.1).

### C03: flue, should

**Exact sentence, D(flue):304-306:** "Azure users must rename azure-openai-responses specifiers and provider keys to azure, a break introduced in Pi's 1.0.3 patch."

**Fix:** Retain the provider/specifier migration, then state the exception already present in Pi's own draft: keep the API ID `azure-openai-responses` and `AZURE_OPENAI_*` environment-variable names. Make clear that `azure` replaces provider keys and the provider portion of Flue model specifiers, not every occurrence of the old string.

**Why this priority:** The current sentence correctly says provider keys/specifiers. Adding the upstream exception makes its migration instruction as precise as the owning profile and avoids a needless API configuration change.

**Evidence:** H(flue) section 3 and H(pi-coding-agent) section 11, especially line 181. [Flue 2.3.0 migration note](https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L7), [Pi 1.0.3 changelog distinguishing provider and API IDs](https://github.com/earendil-works/pi/blob/v1.0.3/packages/ai/CHANGELOG.md#L5-L11).

### C04: eve, should

**Exact sentence, D(eve):285:** "Eve's 3 October vendor benchmark covers 12 tasks with three attempts each: Pi resolves 26/36 attempts, Eve 24/36 and opencode 18/36, with overlapping intervals on one model; it does not measure 0.79.0."

**Fix:** Identify Pi as 0.85.1, opencode as 1.18.30, and the test model as `anthropic/claude-sonnet-5.5`. Keep the date, vendor attribution, sample size, overlapping-interval limitation, and existing warning that Eve 0.79.0 was not measured. Say the result does not establish performance against current Pi 1.2.0. Do not replace the historical Pi version with 1.2.0 or describe overlapping intervals as proof of equivalence. The measured Eve source SHA can remain in the quieter evidence layer.

**Why this priority:** The present numbers are accurate and bounded, but only Eve receives an explicit current-release exclusion. Naming the tested competitor gives the Pi reader the same protection against treating a dated run as a current-product comparison.

**Evidence:** H(eve) section 11, lines 192-202, and V(eve)'s benchmark check. [Tagged benchmark JSON](https://github.com/vercel/eve/blob/eve%400.79.0/apps/docs/lib/evals/eve-code-benchmark.json) records Pi 0.85.1, opencode 1.18.30, that model, and Eve source `4d1491477a2e4f220131a3eb857a030c9eec0419`; [method](https://github.com/vercel/eve/blob/eve%400.79.0/docs/code-extension.mdx). H(pi-coding-agent), install snapshot, independently establishes the current [Pi 1.2.0 release](https://github.com/earendil-works/pi/releases/tag/v1.2.0).

### C05: unreal-agent, should

**Exact sentence, D(unreal-agent):194:** "The vendor's 22 September tables claim up to 40% savings over Codex and 20% over Pi."

**Fix:** Immediately scope the linked Harbor comparisons to Codex 0.154.0/0.155.1 and Pi 0.85.1, with one Pi 0.86.1 job. Preserve the existing vendor-accounting and unmatched-Unreal-build caveats. These are historical jobs, not measurements of the October 13 Codex 0.162.1 or Pi 1.2.0 releases. Do not imply that every table has a linked Codex run: the Terminal-Bench Codex number is a leaderboard figure without a linked job. Keep the recommendation to compare installed versions locally.

**Why this priority:** The dated, attributed sentence is not false. Its named peer versions should be as visible as its qualification of the Unreal build, especially in a simultaneous profile refresh.

**Evidence:** H(unreal-agent) section 9, lines 146-156, and V(unreal-agent) section 9. [Dated launch capture](https://web.archive.org/web/20260922183130/https://unreallabs.ai/blog/unreal-agent/), [Codex SWE-Atlas job](https://hub.harborframework.com/jobs/11a440fb-b1c4-473b-98a6-907500b3fdaf), [Codex DeepSWE job](https://hub.harborframework.com/jobs/e20ecafd-695a-417c-90f5-35fd36d2786f), [Pi Terminal-Bench job](https://hub.harborframework.com/jobs/6ccd097a-747b-4867-be57-a56969df988f), [Pi SWE-Atlas job](https://hub.harborframework.com/jobs/da4ac972-9d5a-4142-b057-85f07375f14e), [Pi DeepSWE job](https://hub.harborframework.com/jobs/cd7d8de6-c152-48de-9840-b22bbea96d99). H(codex) and H(pi-coding-agent), install snapshots, establish the current standalone versions.

### C06: openhands, should

**Exact sentence, D(openhands):384:** "Pin a model for cost or evaluation baselines."

**Fix:** Replace with "Pin a model and record the runtime-reported model ID for cost or evaluation baselines." Add a brief, receipted qualification that Gemini CLI can rewrite selected Flash IDs independently of Canvas's repaired selection transport. The client mapping applies from 0.61.0 when latest-Flash access is enabled; it is not proof of the served model. Do not generalize the rewrite to every model or claim an OpenHands integration test was run.

**Why this priority:** The SDK 1.54.0 repair delivers the requested choice to Gemini correctly, but it cannot make the child CLI's own alias mapping disappear. The cross-product recommendation should cover both layers. H(openhands) also retains a Gemini `gemini-2.5-pro` preselection exception, so "Agent default" is a selectable behavior, not a claim that every new provider starts unset.

**Evidence:** H(openhands) sections 9 and 23, especially its instruction to check the runtime-reported model; [ACP model-selection repair](https://github.com/OpenHands/software-agent-sdk/pull/5579). H(gemini-cli) section 2, lines 69-79: [Flash mapping](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/models.ts#L144-L164), [access gate](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/config.ts#L3585-L3618), [mapping consumer](https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/core/modelMappingContentGenerator.ts#L44-L90).

## Completion boundary

This review changes only this synthesis artifact. Drafts, harvests, crosschecks, and prior profiles remain inputs. No git write command, site build, dependency installation, cloned-code execution, or live acceptance test was performed. The directives preserve the October 13 posture and do not promote October 14 observations into releases inside the window.
