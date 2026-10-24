# Cross-profile fact consistency

Lens: CROSS-PROFILE FACT CONSISTENCY.

Run: `2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0`.

Window: after `2026-10-13T23:59:59Z` through the individual 24 October UTC reads recorded in the corrected harvests. Review performed on 24 October; reference clock read `2026-10-24T10:56:34Z`. This pass did not refresh mutable release selectors. A later review time does not advance a harvest's channel observation.

## Result

No confirmed contradictory version claim remains in the cross-product passages checked. The apparent version disagreements largely describe different executables, adapters, service routes, or release channels. Four `should` directives below make those distinctions explicit. None requires changing a version number, importing a standalone upgrade into a wrapper, or removing an earned comparison.

The four nonempty `compared_with` lists retain support in their public bodies. Pi omits the field; the other seven drafts use an empty list. No stale comparison entry was established. The draft sentences need narrower subjects in two model passages, a concrete compatibility consequence in Paperclip, and a clearer engine-inventory instruction in OpenHands.

## Scope and method

Read THESIS.md, METHOD.md, EDITORIAL.md and CONTRIBUTING.md. Read all twelve `writeup.md` memos in full. Inspected all twelve profile frontmatters and searched their complete text for product names, aliases, model names, composition claims and comparison entries; read the relevant public paragraphs and their owning harvest sections. Consulted the corresponding crosschecks where they qualify those sections, the prior profiles where comparison retention mattered, Cursor's Origin companion, and the eight-source watchlist scan.

The corrected owning harvest is the record of fact. Wrapper behavior belongs first to the wrapper's harvest; the wrapped product's harvest establishes its own version, service and policy boundaries. A reference to another product does not transfer that product's current standalone behavior into an adapter. Historical claim IDs in retained frontmatter are not statements that the historical version is current.

One additional immutable source read opened Canvas v1.33.0's ACP provider file, already cited by the OpenHands harvest. It confirmed local-only Pi/OpenCode entries and that launch metadata comes from the SDK registry. Attempts to reopen the tagged OpenClaw Google guide and Paperclip permissions helper returned web cache misses; the supplied corrected harvests and crosschecks remain the evidence for those two paths. No executable, installer, package, test, or cloned code was run. No git command, site build, or package installation was run. The only written file is this artifact.

## Instructions for final drafters

Quotes reproduce the sentence text, with its inline link destinations moved into the evidence. Priority is `should` because these are supported scope and decision-utility improvements, not evidence that the underlying pinned implementation facts are false.

### C01. openclaw: name the owner of the Google default

- Priority: **should**.
- Location: `tmp/cycle-2026-10-24/drafts/openclaw/profile.v1.md:430`.
- Exact sentence: "Claude and ChatGPT discovery can surface supported models without another core release, and Google now defaults to Gemini 4 Argon."
- Fix: "OpenClaw can discover supported Claude and ChatGPT models without another core release. Its Google API provider now defaults to Gemini 4 Argon." Link the second sentence to the Google provider guide. Keep this an OpenClaw route change; it does not establish a Gemini CLI default, entitlement or optimization result.
- Owning evidence: [OpenClaw harvest, section 13](../harvest/openclaw.primary.md), especially lines 194-202, records the provider-picker and default changes in 10.5/10.7. Its primary receipts are the [tagged Google provider guide](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/google.md#L11-L58) and [10.5 changes](https://github.com/openclaw/openclaw/blob/v2026.10.7/CHANGELOG/2026.10.5.md).
- Cross-check: [Gemini CLI harvest](../harvest/gemini-cli.primary.md), lines 107-115 and 346, records Google's separate warning that this CLI is not optimized for Argon. The [pinned Gemini CLI README](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/README.md#L1-L22) and [Copilot 1.0.98 release](https://github.com/github/copilot-cli/releases/tag/v1.0.98), recorded in [Copilot section 9](../harvest/github-copilot-cli.primary.md), describe different distribution paths. These facts are compatible once the subject is OpenClaw's provider route.

### C02. github-copilot-cli: scope retirement to GitHub's service

- Priority: **should**.
- Location: `tmp/cycle-2026-10-24/drafts/github-copilot-cli/profile.v1.md:268`.
- Exact sentence: "Gemini 3.7 Flash, GPT-5 mini, GPT-5.4, GPT-5.4 mini and GPT-5.5 retired on 19 October."
- Fix: "GitHub records the retirement of Gemini 3.7 Flash, GPT-5 mini, GPT-5.4, GPT-5.4 mini and GPT-5.5 from Copilot on 19 October." Preserve the following explore/task routing sentence as Copilot built-in-agent defaults. Do not turn this into a provider-wide model retirement date.
- Owning evidence: [Copilot harvest, section 16](../harvest/github-copilot-cli.primary.md), lines 226-236, confirms that all five removed supported-client rows included CLI. Primary receipts: [retirement diff](https://github.com/github/docs/commit/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b) and [retirement dates](https://github.com/github/docs/blob/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b/data/tables/copilot/model-deprecation-history.yml#L14-L32).
- Cross-check: [Codex harvest, line 514](../harvest/codex.primary.md), records a different GPT-5.5 event: the [OpenAI changelog](https://learn.chatgpt.com/docs/changelog) dated 14 October, effective 19:00 UTC for ChatGPT-authenticated surfaces, with API-key access unaffected. Pi's removal of `openai-codex/gpt-5.5` is a route-compatibility fact in [Pi section 6](../harvest/pi-coding-agent.primary.md), not a third global retirement date.

### C03. paperclip: spell out the remote Codex upgrade boundary

- Priority: **should**.
- Location: `tmp/cycle-2026-10-24/drafts/paperclip/profile.v1.md:433`.
- Exact sentence: "Stable declares Codex 0.160.0 and Claude Code 2.1.286, while native local Codex resolution prefers the installed CLI and remote admission remains >=0.149.0 and <0.161.0."
- Fix: Keep all these numbers. Follow the sentence with: "The standalone Codex recommendation, 0.164.0, is outside this remote range; qualify a compatible Paperclip worker separately before upgrading it." Do not replace Paperclip's declared pins with the native profiles' latest versions. Keep local resolution and remote admission separate.
- Owning evidence: [Paperclip harvest, section 6](../harvest/paperclip.primary.md), lines 106-116 and 418, and [Paperclip crosscheck, lines 95-97](../verify/paperclip.crosscheck.md). Primary receipts: [stable release](https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0), [remote compatibility predicate](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts), and [local command resolution](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/packages/paperclip-runner/src/drivers/codex/codex-command.ts).
- Cross-check: [Codex harvest, Install today](../harvest/codex.primary.md), records [0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0). [Claude Code harvest, Install today](../harvest/claude-code.primary.md), records latest 2.1.310 and stable selector 2.1.308. Those standalone facts do not establish Paperclip's compatibility with either newer Claude build. The Codex exclusion follows directly from the recorded numeric bounds; no failed worker launch was reproduced.

### C04. openhands: distinguish offered ACP engines from installed versions

- Priority: **should**.
- Location: `tmp/cycle-2026-10-24/drafts/openhands/profile.v1.md:417`.
- Exact sentence: "Canvas offers Pi and OpenCode locally, and the Gemini model-selection transport repair remains in its ACP adapter."
- Fix: "Canvas offers Pi and OpenCode as local ACP engines. Record the launched package, version and server before applying either standalone profile. The Gemini model-selection transport repair remains in OpenHands' ACP adapter." Keep the existing requested/reported-model check and main-only OAuth-forwarding limit.
- Owning evidence: [OpenHands harvest, lines 482 and 489](../harvest/openhands.primary.md), rechecks both claims at Canvas 1.33.0 / SDK 1.58.1. The [tagged engine list](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/constants/acp-providers.ts) marks Pi and OpenCode local-only and obtains launch metadata from the SDK registry. It does not establish the installed native engine versions. The [tagged ACP adapter](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/agent/acp_agent.py) supports the transport claim.
- Cross-check: [Pi harvest, Install today](../harvest/pi-coding-agent.primary.md), distinguishes current `@earendil-works/pi-coding-agent@1.4.0` from the abandoned `@mariozechner` scope. [OpenCode harvest, Install today](../harvest/opencode.primary.md), distinguishes `@opencode/cli@2.1.4` from `opencode-ai@1.19.4`, both providing `opencode`. The [OpenCode migration contract](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx) makes applying V2 advice to an unidentified executable unsafe as editorial inference. This is an inventory improvement, not a claim that Canvas launches the wrong major.

## Cross-product passage inventory

### codex

The public body contains no claim about another watched harness's implementation. Google Cloud is an OpenAI model-provider route in this paragraph, not Gemini CLI. Chrome's V8 advisory is explicitly distinguished from demonstrated Codex exploitation. `compared_with: []` is appropriate.

All three memo joins survive with their limits:

- Claude Code's 2.1.302 fork-default event is confirmed by [Claude section 9](../harvest/claude-code.primary.md), lines 153-163, and its [release](https://github.com/anthropics/claude-code/releases/tag/v2.1.302). It is compatible with Codex's separate full-history behavior; neither receipt proves common cache economics.
- Paperclip's assigned legacy Codex shell-secret delivery is confirmed by [Paperclip section 19](../harvest/paperclip.primary.md) and [commit 0420519](https://github.com/paperclipai/paperclip/commit/042051904d368f5514e287e5ca8e404dc8f78a0d). Codex masking remains default-off with fallback conditions in its own harvest. No contradiction and no end-to-end isolation conclusion.
- Pi Durable wake ownership is confirmed by [Pi section 8](../harvest/pi-coding-agent.primary.md) and the [1.4 host contract](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L139-L220). The memo's 0/15 Codex paper result is bounded to the research experiment in Codex harvest line 563. Pi's 3/6 poisoned and 0/5 clean results concern historical Pi 0.79.0, while its current serializer inspection concerns 1.4.0. These are not matched current-version rankings.

### claude-code

The public profile makes no cross-harness implementation claim and correctly leaves comparisons empty. Its memo distinguishes Earendil's `pi-claude-code` from `elidickinson/pi-claude-bridge`.

[Claude harvest lines 476-477](../harvest/claude-code.primary.md) and [Pi harvest lines 406-408](../harvest/pi-coding-agent.primary.md) agree on the same Earendil SHA, `70abb65186592ca788b29b3db22c3160d629c41f`: the extension uses the official Claude subprocess while Pi owns its tools and loop. The [architecture receipt](https://github.com/earendil-works/pi-claude-code/blob/70abb65186592ca788b29b3db22c3160d629c41f/ARCHITECTURE.md) is not proof that native Claude tool policy governs Pi tools. The separate prompt-capture project has a different pinned SHA. Pi correctly dates the inspected Earendil source to 12 October, outside the window.

The Vercel durable-harness join uses the same `ea8aa4060cf4fb8cd39737ce8ab21c4e0f40c741` snapshot across the Claude, Codex and Pi memos. Its [README](https://github.com/vercel-labs/durable-harness/blob/ea8aa4060cf4fb8cd39737ce8ab21c4e0f40c741/packages/durable-harness/README.md) supplies composition evidence. The native resume, task-survival and replay claims remain separate. No public draft promotes them into equivalent durability.

### cursor

The public Claude-format sentence at line 339 is supported: "The local SDK repair makes a nested Claude-format PreToolUse refusal reach the execution gate." [Cursor section 7](../harvest/cursor.primary.md) records the missing compatibility enablement in 1.0.37 and enabled rejection path in 1.0.40, with [versioned release notes](https://cursor.com/docs/release-notes/sdk#oct-20-2026) and inspected package artifacts. This is a Cursor adapter defect and repair, not a claim of a Claude Code defect. Claude's [hook contract capture](https://web.archive.org/web/20261019030048/https://code.claude.com/docs/en/hooks), named in its owning harvest, separately controls native hook behavior. The draft asks for a refusal test rather than claiming general policy equivalence.

The two Grok Bot passages, at lines 350 and 356, concern Origin review authority and unestablished meetings. [Cursor section 27](../harvest/cursor.primary.md) and [Origin section 13](../harvest/cursor.origin.md) identify a separate computer-use product and a documented approval tool without a confirmation flag. The [MCP tool reference](https://web.archive.org/web/20261024094434id_/https://cursor.com/docs/api/origin/mcp/tools.md) does not prove that its approvals satisfy protected-branch rules; the draft retains that test. The Grok Build 1.0.70 record in the [watchlist scan](../harvest/watchlist-scan.md) is a different CLI. No draft assigns Bot approval rights or meetings to Grok Build.

Memo touchpoints to Codex, Gemini CLI, OpenCode, Antigravity, OpenClaw and Pi describe Origin's marker classifier, not installed dependencies. The event category is `other_agent`, not a named rival. The Omnigent join remains explicitly unanswered rather than importing a wrapper policy. All are correctly bounded.

The Origin companion has two stale research details that the corrected main harvest and draft already supersede: section 10 includes an auth-id hash in its event description, whereas [Cursor section 25](../harvest/cursor.primary.md), line 381, separates the local spool envelope from transmitted fields; and Origin's earlier latest selector ends `624e85d`, whereas the later corrected observation ends `1b4d3b5`. These are source-record disagreements to resolve in favor of the corrected main harvest, not outstanding profile-edit directives. Do not restore the older wording during synthesis.

### github-copilot-cli

The `.claude/rules` sentence at line 258 describes Copilot ingestion, confirmed by [Copilot harvest line 303](../harvest/github-copilot-cli.primary.md) and the [tagged changelog](https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L256). It does not claim shared enforcement. The repository-review consequence earns the Claude comparison.

The hosted retirement and built-in-agent model paragraph needs C02's explicit GitHub subject. Its `gpt-5.6-luna` explore/task selection and `claude-haiku-4.5` task fallback agree with section 16. They are not the top-level default: the owning harvest separately records `claude-sonnet-5.5` in the current table, with no new default switch claimed. Nor do they conflict with Pi's `gpt-6.1-sol` default for Pi's Copilot provider.

The memo's review wrapper names Claude Code, Codex and Cursor as documented entry points at `76638b8b8d2f6918e6d634e846966992d6c2aa40`; [Copilot harvest line 359](../harvest/github-copilot-cli.primary.md) dates the newest inspected wrapper commit before the window. Argon support in Copilot 1.0.98 and schema repairs do not certify Gemini CLI support or equivalent adapters. The proposed Codex primitive comparison remains a handoff, with no borrowed default, version, or measured benefit in the public profile.

### gemini-cli

The Antigravity passage at line 436 attributes a recommendation to Google's pinned README, rather than independently asserting Antigravity model access or migration fidelity. [Gemini section 6](../harvest/gemini-cli.primary.md), lines 107-115, supports it; [the watchlist scan](../harvest/watchlist-scan.md) separately observes Antigravity 1.4.7 without refreshing that public profile. The retired `antigravity-plan-review-scope` claim stays retired. The new service/migration recommendation still earns the Antigravity reference.

The sentence at line 470, "The 24 October nightly converts Claude Code hook timeouts from seconds to milliseconds," is supported by [Gemini section 16](../harvest/gemini-cli.primary.md) and [crosscheck section 16](../verify/gemini-cli.crosscheck.md). The [nightly importer](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/hooks/migrate.ts#L65-L105) is the owner of the conversion. This does not transfer Claude's failure policy or prove older imports were rewritten. The draft states both limits. The Codex model-inventory/updater join stays in the memo as a question, not parity.

### pi-coding-agent

The public named downstream claims are all owned by the Pi ecosystem harvest: Pi-web 0.12.2 pins Pi 1.2.0; Pi Pocket 0.21.0 pins Pi/Durable 1.4.0, disables crash parking and overrides Undici to patched 8.12.3. [Pi sections 9-11 and 21](../harvest/pi-coding-agent.primary.md) carry the tagged host manifests and code. Neither host is described as a synchronized official CLI channel. The public Gemini-schema sentence concerns Pi's main-only provider adapter, not Gemini CLI's implementation.

Memo checks:

- OMP 18.12.6 agrees with the [watchlist scan's OMP record](../harvest/watchlist-scan.md). Its approvals, cancellation and model-file fixes must remain fork-specific; the memo does so.
- The official Claude subprocess bridge agrees with the Claude record above. Direct Anthropic OAuth is a separate Pi path, also explicitly separated.
- Pi's removed Codex-route models are catalog compatibility changes, not Codex CLI defaults. The GPT-5.5 service distinction is addressed under C02.
- Pi's `gpt-6.1-sol` Copilot-provider default does not contradict Copilot CLI's default or its specialized explore/task models. These have different owners and consumers.
- Main-only Gemini const-to-enum and literal-data fixes remain Pi adapter changes. No Gemini CLI defect is asserted.
- The Temporal mention is conditional historical precedent and establishes only Pi's side. No current Temporal compatibility assertion enters the profile.

No draft claims that updating standalone Pi updates OpenClaw, DeepSeek, Paperclip or OpenHands. The same Pi package family or provider abstraction is insufficient to infer a common installed graph. The profile's omitted `compared_with` field does not leave a stale comparison.

### openclaw

C01 narrows the model default's owner. The other public cross-product paragraph, line 420, explicitly names `@openclaw/codex` and its 2026.9.7 compatibility floor. [OpenClaw section 20](../harvest/openclaw.primary.md) supports this plugin-specific version and loader refusal. It is not an erroneous replacement for OpenAI's Codex 0.164.0. Keep the package coordinate.

The memo's native Claude session fingerprint is OpenClaw bridge behavior. Its Claude/Gemini host-CLI placement guards are main-only OpenClaw changes; they do not establish defects in those native products or claim the native CLIs inherit Docker containment. Its Copilot memory-trigger claim is an OpenClaw adapter/final-assembly contract in [harvest line 368](../harvest/openclaw.primary.md), not a new Copilot release. Empty comparisons remain appropriate because no independent comparative implementation verdict enters the body.

### hermes-agent

No other watched harness's product behavior enters the public body. The memo's Codex 0.162.1 daemon reference is explicitly a 13 October precedent, so it is not a stale current-version assertion. If the final synthesis uses a current shared-process comparison, [Codex's 0.164.0 daemon contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md), recorded in its owning harvest, supplies the current receipt.

The agent-importers catalog names OpenClaw, Claude Code, Codex CLI and Cursor setup import. [Hermes section 4](../harvest/hermes-agent.primary.md) confirms the plugin pin, preview behavior and distinct secret-migration rules. These are import targets, not bundled agent versions or equivalent policies. The memo makes that distinction. Its Unit 42 reference is correctly bounded to investigated abuse and does not establish a stock Cursor/Hermes vulnerability comparison. Empty comparisons are earned.

### openhands

The only public cross-product sentence is the Pi/OpenCode/Gemini paragraph covered by C04. Its facts hold at Canvas 1.33.0 / SDK 1.58.1. [OpenHands section 12](../harvest/openhands.primary.md) separately confirms that OAuth credential forwarding into ACP engines remains unreleased. A native engine's working OAuth is not proof of this hosted adapter path.

Gemini's own harvest retains gated outgoing Flash-ID rewriting at 0.65.0, lines 279-281, while OpenHands retains its requested-model transport repair. These solve different layers and do not contradict one another. The old imported Gemini finding is retired in the draft frontmatter; the model-identity warning survives without asserting a fresh Gemini defect. The memo's LiteLLM note does not construct an affected-harness roster from shared dependency names.

### deepseek-harness

The exact public comparison is: "Delegation also needs a child-policy check: DeepSeek's wrappers default to `dontAsk` for Claude Code and `never` for Codex." [DeepSeek harvest lines 377 and 428](../harvest/deepseek-harness.primary.md) and [crosscheck line 349](../verify/deepseek-harness.crosscheck.md) support both defaults in the optional wrappers. The subject is already DeepSeek's wrappers. The sentence does not call these standalone defaults or promise that every child command succeeds.

This is compatible with Claude's changed unconfigured headless default and with Codex's separate sandbox/approval policy. Keep the wrapper subject if shortening it. The two `compared_with` entries remain useful because an operator must review child policy rather than infer it from the parent composition.

The memo's main-only `llm-pi-ai` capacity fallback is correctly attributed to DeepSeek adapter policy in [section 20](../harvest/deepseek-harness.primary.md), lines 296-305. It does not report a Pi release or actual endpoint capacity. Its Undici join agrees with [Pi's dependency record](../harvest/pi-coding-agent.primary.md): Pi 1.4.0 uses 8.10.2, while DeepSeek's local fetch pins 8.11.2. Both are below the response-decoding fix, but neither record proves identical reachability of every advisory path.

### paperclip

The public native ACPX/OpenCode `approve-all`/`allow` sentence at line 419 is owned by [Paperclip section 6 and prior-claim recheck](../harvest/paperclip.primary.md), with [crosscheck line 196](../verify/paperclip.crosscheck.md) confirming its scope. These are Paperclip native-driver defaults. OpenCode's own base-agent allowances and child-specific permissions are separately documented in [OpenCode sections 2-3](../harvest/opencode.primary.md). No shared policy implementation follows from the word allow.

The declared Codex/Claude versions and remote range at line 433 are correct, with C03 adding the current concrete consequence. The same paragraph's qualified new-agent defaults and explicit saved-agent conversion agree with [Paperclip sections 10 and 20](../harvest/paperclip.primary.md). They are Paperclip rollout choices, not standalone provider defaults. The next paragraph's legacy Codex shell-secret delivery agrees with section 19; assigned service credentials do not imply all native routes expose ambient provider keys.

The memo's Pi 1.0 choice, packaged Copilot 1.0.88, Cursor integration, OpenCode translation, and distinct Grok Bot/legacy Grok adapter are correctly presented as Paperclip integration facts. Pi 1.4.0 and Copilot 1.0.103 being current upstream does not justify silently updating those embedded numbers. A Grok Bot hosted identity is not Grok Build 1.0.70. The [watchlist scan](../harvest/watchlist-scan.md) provides the latter identity only. Empty comparisons are consistent with the body concentrating on wrapper policy rather than native product comparisons.

### opencode

The public compatibility paragraph at line 144 says V2 drops the `CLAUDE.md` fallback while retaining controlled `.claude` skill-root discovery. [OpenCode sections 1 and 22](../harvest/opencode.primary.md) support this with the [V2 migration guide](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx) and [disable-flag repair](https://github.com/anomalyco/opencode/commit/775d1d0d7138fd9b4de455186ff2c1b1e2505a3b). An instruction-file fallback and a skill-root loader are different inputs. This is not internally contradictory and does not assert Claude Code changed its own discovery rules.

The memo's Pi codemode, Codex shared-server and Temporal replay joins are comparison questions. The cited Workerd host and external Vercel adapter do not promise safe replay for arbitrary effects. Empty `compared_with` is a defensible choice: the public paragraph primarily addresses migration between OpenCode majors rather than comparing Claude Code's current behavior.

## Comparison metadata decision

| Profile | Draft field | Decision and public basis |
| :--- | :--- | :--- |
| cursor | `[claude-code]` | Keep. Nested hook refusal crossing the local SDK adapter changes an upgrade/test decision. |
| github-copilot-cli | `[claude-code]` | Keep. `.claude/rules` ingestion changes which repository input must be reviewed during a harness swap. |
| gemini-cli | `[antigravity, claude-code]` | Keep. Attributed service-migration recommendation and a channel-specific hook-timeout conversion both remain in prose. The retired Antigravity Plan comparison is not revived. |
| deepseek-harness | `[codex, claude-code]` | Keep. Optional child wrappers have named approval defaults that the parent operator must inspect. |
| pi-coding-agent | omitted | No stale entry. Downstream host inventory does not require inventing a watched-provider comparison. |
| codex, claude-code, openclaw, hermes-agent, openhands, paperclip, opencode | `[]` | Keep. Integration references or internal comparison leads alone do not require a public comparative verdict. |

This is not a requirement for symmetric metadata. A comparison can earn space on one page while the other page concentrates on different operator decisions. METHOD's synthesis standard and EDITORIAL's premium unit require a meaningful consequence, not equal link counts.

## Version and channel conclusions

The source-owned current identities that matter to this comparison are Codex CLI/TypeScript 0.164.0 versus Python 0.163.0; Claude Code latest 2.1.310 versus stable selector 2.1.308; Copilot CLI 1.0.103; Gemini CLI 0.65.0 with separately named preview/nightly; Pi 1.4.0; and OpenCode V2 2.1.4 versus V1 1.19.4. Each is recorded in its owning harvest's Install today section with UTC reads. None is a license to relabel an embedded runtime.

Host identities also agree with their owning records: OpenClaw 2026.10.7, Hermes source 0.22.5, Canvas 1.33.0 with SDK 1.58.1, DeepSeek default rc.2 with rc.3 separately selected, and Paperclip 2026.1023.0. Cursor correctly separates IDE 3.27.12, default agent CLI `2026.10.22-27dcf5f`, SDK 1.0.40 and Origin's stable/latest identities. Later successful reads in the corrected harvests take precedence over earlier selector snapshots; failed rereads do not advance them.

No Agent Flywheel claim occurs in the twelve supplied memos or profile drafts. Agent Flywheel is also absent from the eight-source light scan. Its older public profile is not an input that this pass can refresh to 24 October. The prompt's example therefore produces no current Flywheel directive, bundled-version assertion or inferred installation result.

Antigravity and OMP references are bounded by the light scan, while Grok Bot stays distinct from Grok Build. The remaining scanned products are either absent from these public comparison passages or appear only as unanswered memo joins. Their retained 13 October profiles do not become 24 October postures by adjacency.

## Remaining limits

This is a consistency audit of the supplied record, not fresh runtime acceptance. The record does not identify the actual Pi/OpenCode process in an OpenHands deployment, every local or remote Paperclip worker, the effective provider model on a live request, or equivalent approval/recovery semantics through bridges. None of those gaps supports a factual accusation against a native harness. The final copy should retain the explicit product, route, package and channel subjects above rather than fill the gaps with shared names.
