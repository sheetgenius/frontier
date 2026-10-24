# Signals adversarial crosscheck

Run: 2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0

Window: strictly after 2026-10-13T23:59:59Z through the source-specific reads on 2026-10-24 UTC. The 2026-10-13..2026-10-24 issue label denotes the 11 reporting days 2026-10-14 through 2026-10-24, not an end-of-day snapshot.

Disposition: 14 retained, 0 dropped. All 14 records were corrected or supplemented: nine had substantive wording or current-channel corrections; five had date qualification and/or additional delivery receipts only. For the structured result, this is 0 unchanged, 14 corrected, 0 dropped. All 20 distinct finding IDs exist and support the retained mechanisms. All 41 why_action_bearing lines were checked. There is no dropped ID.

The title, summary, action lines, accessibility and security fields were checked against independently fetched primary material. Tagged GitHub files were fetched from raw.githubusercontent.com at their stated tag; commits, comparisons and release metadata were fetched through the GitHub API. Registries supplied publication timestamps and current selectors. Archived official contracts were fetched again, including Origin. Existing clones under /Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones supplied read-only ancestry checks. No cloned code was executed.

Source-level behavior and provider release contracts are distinguished from runtime observations below. Tests requested by a signal are proposed operator acceptance checks, not tests completed by this verification. No net human-time saving, exactly-once external effect, deployed refusal matrix, installed package migration or hosted launch date was inferred.

## Per-signal decisions

### 01. Pi's MCP adapter replaces its interpreter with native tool composition

ID: `2026-10-24-pi-coding-agent-adapter-reuses-native-codemode`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-pi-coding-agent-the-mcp-adapter-removes-its-separate-script-engine-and-routes-approvals-through-real-tool](../findings/2026-10-24-pi-coding-agent-the-mcp-adapter-removes-its-separate-script-engine-and-routes-approvals-through-real-tool.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Pinned source](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md)
- [Pinned source](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/codemode-bridge.ts)
- [Pinned source](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/tool-approval.ts)
- [Pinned source](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/README.md)
- [Release](https://github.com/nicobailon/pi-mcp-adapter/releases/tag/v6.0.0)
- [Registry](https://registry.npmjs.org/pi-mcp-adapter)
- [Registry](https://registry.npmjs.org/@earendil-works%2fpi-coding-agent)

Held: The v6.0.0 changelog and source remove QuickJS, mcpScript, jev.evaluate and the separate scripting skill. Deferred calls expose the actual MCP tool identity. The bridge refuses model-issued approval resume. This is an optional adapter migration, not deletion of a Pi-core interpreter.

Action-line checks:

1. The migration and native-MCP takeover instructions support porting settings, hook matchers and uninstall configuration before removing duplicate code.
2. Proxy/deferred/scripted denial tests and UI/no-UI pause tests are proposed acceptance checks, not reported results.
3. The README distinguishes approved configuration from the contents of mutable project scripts. Neither that contract nor the author's benchmark establishes net human-time savings.

Corrected: Narrowed 'headless operation fails' to the recognized approval-pause path when no confirmation UI is available. Added independent release and package-selector receipts; release date is 2026-10-22.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 02. Origin lets an agent or installed app satisfy code-owner review

ID: `2026-10-24-cursor-origin-code-owner-review-can-be-delegated`. Decision: retain, corrected/supplemented. Channel: `preview-or-beta`.

Finding support: [2026-10-24-cursor-origin-lets-an-agent-s-ownership-decision-or-an-installed-app-s-approval-satisfy-code-owne](../findings/2026-10-24-cursor-origin-lets-an-agent-s-ownership-decision-or-an-installed-app-s-approval-satisfy-code-owne.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Archived official contract](https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md)
- [Archived official contract](https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md)
- [Archived official contract](https://web.archive.org/web/20261024092716/https://cursor.com/docs/origin)

Held: The archived official note and ruleset define Off, Classic and Agentic. Agentic can substitute an ownership decision for the approval count; an installed app listed as an owner can satisfy review. The archived overview identifies Origin as early beta. All three archived receipts were fetched successfully in this pass.

Action-line checks:

1. The original instruction to keep Classic did not ensure a human decision: an app can be an owner in Classic too. Human-required paths need human ownership without an app alternative.
2. A scratch-repository decision log and reversals are a proposed qualification, since the captured contract does not publish substitution thresholds or establish the requested audit trail.
3. App self-review counting and net waiting-time savings remain unestablished; the signal requests a test rather than asserting either.

Corrected: Replaced 'Classic retains human ownership approval' and its action line with the actual owner-principal condition. Kept the week-of-2026-10-12 note out of post-cutoff launch claims. The separate CLI is not proof of hosted delivery.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 03. Claude enables headless forks and reuses completed workflow steps

ID: `2026-10-24-claude-code-journaled-headless-delegation`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-claude-code-forked-delegation-reaches-headless-sessions-while-lifecycle-and-budget-holes-close](../findings/2026-10-24-claude-code-forked-delegation-reaches-headless-sessions-while-lifecycle-and-budget-holes-close.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.302)
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.304)
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.305)
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.309)
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.299)
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.308)
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.310)
- [Registry](https://registry.npmjs.org/@anthropic-ai%2fclaude-code)

Held: Release notes independently confirm fork defaults in 2.1.302, journal reuse for completed pipeline()/parallel() agents in 2.1.305, lifecycle repairs in 2.1.299/2.1.304 and split-pane restriction inheritance in 2.1.309. Both npm and native-download selectors distinguish stable 2.1.308 from latest 2.1.310.

Action-line checks:

1. Trying latest 2.1.310 includes the recorded later inheritance repair; resumed completed-step reuse is the concrete replacement candidate for restart scaffolding.
2. Max-turn, Stop, ended-input, child restriction and external-write checks remain proposed. No exactly-once guarantee is inferred from journal reuse.
3. The opt-out variable and mcp-serve exclusion are documented. Explicit permission modes remain a separate requirement from fork defaults.

Corrected: Changed the title to separate enabling headless forks from reusing completed workflow steps; it no longer implies that every fork is journaled by the workflow mechanism. Expanded abbreviated repair versions and added the missing release/selector receipts.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 04. Pi Durable checkpoints a wait and releases the invocation

ID: `2026-10-24-pi-coding-agent-durable-sleeps-need-a-wake-owner`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-pi-coding-agent-durable-1-4-can-hibernate-between-phases-with-a-one-way-sqlite-upgrade](../findings/2026-10-24-pi-coding-agent-durable-1-4-can-hibernate-between-phases-with-a-one-way-sqlite-upgrade.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Pinned source](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/CHANGELOG.md)
- [Pinned source](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L139-L220)
- [Pinned source](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/storage/sqlite/migrations.ts)
- [Release](https://github.com/earendil-works/pi/releases/tag/v1.4.0)
- [Registry](https://registry.npmjs.org/@earendil-works%2fpi-durable)

Held: The v1.4.0 Durable changelog, README and SQLite migration code support sleepUntil(), a persisted sleeping phase, invocation release, host-owned wake delivery, schema 2 and older-reader incompatibility. The package is experimental even though it travels in a non-prerelease Pi tag.

Action-line checks:

1. Storage backup, phase splitting and checkpointWhen follow the explicit migration contract.
2. Persisting an alarm outside the dying process and testing the checkpoint/alarm handoff follow from host ownership, not from an upstream crash-test result.
3. Idle-resource and recovery-intervention comparisons are proposed measurements. Installing the ordinary Pi CLI supplies no durable host scheduler.

Corrected: No mechanism correction. Qualified the release date as 2026-10-21 and added independent tag/package delivery receipts.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 05. Hermes keeps classic CLI work running after terminal detach

ID: `2026-10-24-hermes-agent-gateway-work-outlives-terminal`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-hermes-agent-the-gateway-owns-classic-cli-turns-and-live-revocations-reach-more-request-paths](../findings/2026-10-24-hermes-agent-the-gateway-owns-classic-cli-turns-and-live-revocations-reach-more-request-paths.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Pinned source](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md)
- [Pinned source](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/gateway_chat.py)
- [Pinned source](https://github.com/NousResearch/hermes-agent/commit/eea7c437ebd66e5ffbf9e525abe915f25e17d911)
- [Pinned source](https://github.com/NousResearch/hermes-agent/commit/876e37c07746642da12a59bf2088c3fcfdda6f6c)
- [Release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5)

Held: Tagged gateway-classic-cli documentation and gateway_chat.py confirm supported classic chat, chat -q and top-level -z paths, gateway-owned lifetime, no local fallback after an explicit remote failure, and the distinct budget/approval contract. Both revocation commits are ancestors of v0.22.5.

Action-line checks:

1. Persisted session identity and explicit cancellation are the appropriate operational controls when EOF/detach does not stop execution.
2. The documented run-budget setting, unsupported worktree/image invocations and home/profile identity justify the second action line.
3. Saved allowlist removal and plugin request/handshake gating require different tests. No net orchestration saving or installed deployment result is established.

Corrected: Narrowed cache revocation to saved permanent-allowlist removals. Changed websocket wording to new handshakes; the repair does not establish termination of an already-open socket. Added the v0.22.5 release receipt, published 2026-10-23T05:28:45Z.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 06. Gemini leaves directory references for the agent to explore

ID: `2026-10-24-gemini-cli-directory-context-becomes-agent-selected`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-gemini-cli-stable-directory-references-stop-eagerly-reading-the-entire-directory](../findings/2026-10-24-gemini-cli-stable-directory-references-stop-eagerly-reading-the-entire-directory.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Pinned source](https://github.com/google-gemini/gemini-cli/commit/9b6e0265d16bbd29ca51e33c9e0c01dc4cec5e83)
- [Pinned source](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/ui/hooks/atCommandProcessor.ts#L535-L549)
- [Pinned source](https://github.com/google-gemini/gemini-cli/commit/8b5cb8a6491e17b2dd3ba0cfb49fcfe41c48c4a3)
- [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0)
- [Registry](https://registry.npmjs.org/@google%2fgemini-cli)

Held: Commit 9b6e0265 and tagged atCommandProcessor.ts exclude directory references from eager read_many_files input and leave a resolved directory reference. Ignore-pruning is separate, and explicit reads remain possible. The directory change is absent from v0.64.0 and present in stable v0.65.0.

Action-line checks:

1. A directory-packing wrapper is a plausible replacement candidate because eager whole-directory injection was removed.
2. Naming indispensable inputs and measuring actual reads, quality and cost is warranted by the new discovery path. No gain or access-control property is claimed from smaller eager input.

Corrected: No mechanism correction. Expanded the release date to 2026-10-20 and added release/registry support for the stated stable channel.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 07. OpenHands packages mention-to-code work and a factory setup recipe

ID: `2026-10-24-openhands-mentions-can-start-code-changing-work`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-openhands-github-mentions-can-request-code-changes-under-a-repository-write-gate](../findings/2026-10-24-openhands-github-mentions-can-request-code-changes-under-a-repository-write-gate.md), [2026-10-24-openhands-software-factory-guidance-ships-and-becomes-default-enabled](../findings/2026-10-24-openhands-software-factory-guidance-ships-and-becomes-default-enabled.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Pinned source](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/github-repo-monitor/scripts/main.py#L641-L663)
- [Pinned source](https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114)
- [Pinned source](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/README.md)
- [Pinned source](https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json)
- [Pinned source](https://github.com/OpenHands/extensions/commit/5f0bc702a65b2165e4406227d845b87efd5d445a)
- [Pinned source](https://github.com/OpenHands/OpenHands/blob/v1.32.0/package.json)
- [Pinned source](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/SKILL.md)

Held: The monitor script and manifest support repository-write authorization, implement mode and the token-owner/allowlist/anyone bypasses. The fallback template is prompt-based. Canvas 1.32.0 and 1.33.0 package files pin extensions 0.35.0. The factory README and SKILL are data describing shipped setup procedure, not instructions executed by this verifier.

Action-line checks:

1. A bounded Canvas deployment trial follows from bundled extension delivery; the recipe itself does not instantiate production jobs.
2. The actual saved monitor and token determine admission. Reply mode and avoidance of anyone-plus-implement are supported configuration choices.
3. Authorized/unauthorized/out-of-policy mention tests remain unperformed; an updated package does not prove that a saved monitor migrated.

Corrected: Narrowed the default-enabled claim to new workspaces. Added the enabling commit 5f0bc702, the earlier Canvas package pin and the factory procedure receipt.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 08. Codex's released updater loads network policy before making requests

ID: `2026-10-24-codex-updater-enforces-saved-network-policy`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-codex-stable-updater-requests-now-require-successfully-loaded-network-policy](../findings/2026-10-24-codex-stable-updater-requests-now-require-successfully-loaded-network-policy.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Pinned source](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8)
- [Pinned source](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464)
- [Pinned source](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L48-L70)
- [Release](https://github.com/openai/codex/releases/tag/rust-v0.163.0)
- [Release](https://github.com/openai/codex/releases/tag/rust-v0.164.0)
- [Registry](https://registry.npmjs.org/@openai%2fcodex)

Held: The d570b363 diff and v0.164.0 client factory propagate configuration errors and enable network policy. The updater documentation explicitly separates saved configuration from invoking CLI -c overrides and describes the independent experimental daemon lifecycle. The fix is absent from rust-v0.162.1 and present in rust-v0.163.0 and rust-v0.164.0.

Action-line checks:

1. Using current stable ends the specific release wait while retaining the independent daemon identity.
2. Denied-destination and invalid-saved-configuration tests are necessary deployed checks; no network enforcement test was run here.
3. Restart/environment costs and update timing remain unmeasured. The research did not launch or update a daemon.

Corrected: No mechanism correction. Expanded the first stable date to 2026-10-15 and added both release objects and the npm selector.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 09. Claude's managed guard preserves policy asks over user mods

ID: `2026-10-24-claude-code-policy-asks-hold-over-user-mods`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-claude-code-the-published-guard-now-holds-policy-asks-and-environment-pins-over-user-mods](../findings/2026-10-24-claude-code-the-published-guard-now-holds-policy-asks-and-environment-pins-over-user-mods.md), [2026-10-24-claude-code-unconfigured-headless-jobs-revert-from-auto-to-default-in-several-cases](../findings/2026-10-24-claude-code-unconfigured-headless-jobs-revert-from-auto-to-default-in-several-cases.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Pinned source](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md)
- [Pinned source](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/held-verdict/verdicts/holds-over.ts)
- [Pinned source](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/policy/pinned-names.ts)
- [Pinned source](https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md)
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.299)
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.302)
- [Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.304)
- [Pinned source](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/types/claude-code.d.ts#L10120-L10140)
- [Registry](https://registry.npmjs.org/@anthropic-ai%2fclaude-code)

Held: Tagged sec-default code and its README support held policy asks/denies and pinned names when the guard is loaded, administrator relaxation, ordinary-mode distinctions and unsandboxed admitted mods. The bf2323b3 commit is in 2.1.299, 2.1.308 and 2.1.310. Release 2.1.302 documents the specified unconfigured-headless default changes. Release 2.1.304 documents decider: person; the 2.1.310 public type mirror still only lists host.

Action-line checks:

1. Loaded-guard and managed-mod admission checks follow from the implementation; they are not a sandbox claim.
2. Explicit job permission modes follow from the stated headless default cases.
3. The person decider routes to a permission dialog OR host callback. A required human decision must be enforced by that callback's routing; an unavailable dialog and callback should be tested separately from auto approval.

Corrected: Removed person-only/human-guarantee wording from the summary, action line, accessibility fields and packet note. Added the specific release and stale-type receipts. Native binary contents and deployed guard enforcement were not independently tested.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 10. OpenClaw's Bash predicate repair has not reached a published channel

ID: `2026-10-24-openclaw-bash-predicate-repair-remains-on-main`. Decision: retain, corrected/supplemented. Channel: `main-unreleased`.

Finding support: [2026-10-24-openclaw-bash-predicates-still-bypass-exec-allowlist-review-on-all-three-published-channels](../findings/2026-10-24-openclaw-bash-predicates-still-bypass-exec-allowlist-review-on-all-three-published-channels.md), [2026-10-24-openclaw-final-argument-approval-binding-reached-both-stable-lines](../findings/2026-10-24-openclaw-final-argument-approval-binding-reached-both-stable-lines.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Pinned source](https://github.com/openclaw/openclaw/commit/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8)
- [Pinned source](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/exec-safe-builtins.ts)
- [Pinned source](https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/src/infra/exec-safe-builtins.ts)
- [Pinned source](https://github.com/openclaw/openclaw/blob/v2026.9.33/src/infra/exec-safe-builtins.ts)
- [Pinned source](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436)
- [Pinned source](https://github.com/openclaw/openclaw/blob/v2026.9.34/src/infra/exec-safe-builtins.ts)
- [Release](https://github.com/openclaw/openclaw/releases/tag/v2026.9.34)
- [Registry](https://registry.npmjs.org/openclaw)

Held: The 2026-10-23 repair excludes unsafe -v predicates and uses case-sensitive builtin names. The classifier bytes are identical in stable v2026.10.7, beta v2026.10.10-beta.3, old extended v2026.9.33 and newly published extended v2026.9.34. The repair is absent from inspected tags; the new extended line was checked through both GitHub comparison and its actual source, not donor ancestry alone.

Action-line checks:

1. Restricting adversarial POSIX shell work follows from the inspected classifier and maintainer's described production-chain mechanism; this verifier did not execute the exploit.
2. A containing tag plus an installed approval-chain refusal test remains the release/acceptance condition.
3. Final-hook-argument binding is a separate repaired mechanism. It cannot protect a request classified as an exempt builtin.

Corrected: Refreshed extended-stable from 2026.9.33 to 2026.9.34, added its source/release and registry receipts, made the repair date explicit, and scoped the -v mechanism to Bash 4.2 and later. Retained main-unreleased.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 11. Copilot's enabled sandbox now permits local-network access by default

ID: `2026-10-24-github-copilot-cli-sandbox-local-network-default`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-github-copilot-cli-local-network-access-defaults-on-and-macos-gains-a-narrower-localhost-exception](../findings/2026-10-24-github-copilot-cli-local-network-access-defaults-on-and-macos-gains-a-narrower-localhost-exception.md), [2026-10-24-github-copilot-cli-acp-honors-saved-sandbox-settings-and-launch-flags-on-new-and-resumed-sessions](../findings/2026-10-24-github-copilot-cli-acp-honors-saved-sandbox-settings-and-launch-flags-on-new-and-resumed-sessions.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.100)
- [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.101)
- [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.103)
- [Pinned source](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L494-L515)
- [Pinned source](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md)
- [Registry](https://registry.npmjs.org/@github%2fcopilot)

Held: Release 1.0.100 changes local/private-network access inside an enabled sandbox. Release 1.0.101 narrows the direct macOS localhost TCP exception to local access enabled without host filters. Release 1.0.103 announces saved sandbox and launch-flag handling for new/resumed ACP sessions. The pinned configuration docs still show the older network default; sandbox enablement itself remains off by default.

Action-line checks:

1. Explicit allowLocalNetwork plus required/unintended-listener tests follow from the changed default.
2. Enabled/failIfUnavailable/allowBypass and actual ACP server identity are separate managed-containment checks.
3. Host filters and platform caveats remain. Release notes and npm establish a released contract, not independent per-platform connection/refusal results.

Corrected: Removed the prediction that one qualification pass will yield fewer per-session repairs. Replaced it with a conditional decision based on test results. Added npm delivery evidence.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 12. OpenClaw Workshop replaces proposals with immediate versioned edits

ID: `2026-10-24-openclaw-workshop-edits-before-review`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-openclaw-workshop-replaces-proposal-review-with-direct-edits-and-bounded-undo-history](../findings/2026-10-24-openclaw-workshop-replaces-proposal-review-with-direct-edits-and-bounded-undo-history.md), [2026-10-24-openclaw-workshop-retirement-requires-manual-migration-of-proposal-integrations-and-old-backups](../findings/2026-10-24-openclaw-workshop-retirement-requires-manual-migration-of-proposal-integrations-and-old-backups.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Pinned source](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md)
- [Pinned source](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/skills/workshop/skill-versions.ts)
- [Pinned source](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/doctor/shared/legacy-config-migrations.runtime.skills.ts)
- [Pinned source](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/self-learning.md)
- [Pinned source](https://github.com/openclaw/openclaw/blob/v2026.10.7/package.json)
- [Release](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5)
- [Registry](https://registry.npmjs.org/openclaw)

Held: The Workshop documentation, version-store code, migration source and v2026.10.5 release support immediate edits, ten versions per skill, 500 change entries, auto defaults, propose-to-off migration, old-method errors and manual handling of old backups. The implementation is in v2026.10.5 and v2026.10.7.

Action-line checks:

1. Patched Node and manual initiation are migration requirements; autonomous off is not an approval queue.
2. Bounded history, learned-skill allowlist behavior and the extra background review run justify inspection, backups and an Undo trial.
3. Porting old hooks/proposal integrations is required; restoration quality and attention savings remain proposed measurements.

Corrected: No mechanism correction. Added the initial stable release and current registry-channel receipts.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 13. Paperclip brings Operator grants and durable accounting to stable

ID: `2026-10-24-paperclip-stable-grants-and-accounting-migration`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-paperclip-stable-grants-existing-human-operators-company-editing-and-tool-administration](../findings/2026-10-24-paperclip-stable-grants-existing-human-operators-company-editing-and-tool-administration.md), [2026-10-24-paperclip-stable-makes-cost-receipts-durable-and-can-hold-admission-on-unknown-prices](../findings/2026-10-24-paperclip-stable-makes-cost-receipts-durable-and-can-hold-admission-on-unknown-prices.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0)
- [Pinned source](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135)
- [Pinned source](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/company-member-roles.ts#L57-L73)
- [Pinned source](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/run-cost-accounting.ts)
- [Pinned source](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budgets.ts#L224-L230)
- [Pinned source](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L56)
- [Pinned source](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts)
- [Pinned source](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/usage-receipts.ts)
- [Pinned source](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/accounting-transaction.ts)
- [Pinned source](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budget-reservations.ts)
- [Registry](https://registry.npmjs.org/paperclipai)

Held: The stable Operator role has fourteen grants, with missing-row compatibility seeding and conflict preservation of existing scopes. Usage-receipt, settlement, accounting-transaction and reservation code support durable pending evidence, idempotent settlement and company-row serialization. budgets.ts explicitly requires active, positive-amount, hard-stop policy before the unpriced-usage block applies.

Action-line checks:

1. Writer drain and SQLite lock preservation are documented. Deleting a grant row can trigger reinsertion, while an existing scoped row survives; its restrictive effect still needs verification.
2. Provider reconciliation and unpriced-policy choice remain necessary because reservation estimates do not cap every eventual provider charge.
3. The stable remote Codex range is >=0.149.0 and <0.161.0. The named call_api/review/Stop repairs are absent from stable and present in the separately resolved beta source.

Corrected: Qualified the date as GitHub publication on 2026-10-24, distinct from npm publication on 2026-10-23. Narrowed the scope advice to a verified restrictive stored scope. Added the receipt-persistence and serialization sources and registry.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

### 14. OpenCode 2.1 keeps old sessions readable while changing public APIs

ID: `2026-10-24-opencode-readable-state-changing-public-contracts`. Decision: retain, corrected/supplemented. Channel: `tagged-release`.

Finding support: [2026-10-24-opencode-v2-1-changes-public-replay-and-compaction-fields-while-preserving-legacy-stored-data](../findings/2026-10-24-opencode-v2-1-changes-public-replay-and-compaction-fields-while-preserving-legacy-stored-data.md). Each file was opened; its retained mechanism and channel support the signal, subject to the narrower wording below.

Opened independently:

- [Pinned source](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes)
- [Pinned source](https://github.com/anomalyco/opencode/commit/acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd)
- [Pinned source](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx)
- [Registry](https://registry.npmjs.org/@opencode%2fcli)
- [Registry](https://registry.npmjs.org/opencode-ai)

Held: The acdcdb8d diff and v2.1.4 changelog/migration guide support public replay-field consolidation under native, credential-answer metadata, removal of session.compacted and legacy storage decoding without a database migration. The commit is in v2.1.0 and v2.1.4. npm identifies @opencode/cli 2.1.4 and separate opencode-ai 1.19.4, both with an opencode executable.

Action-line checks:

1. Executable ownership and client/server/plugin contract migration follow from two separately delivered package lines and breaking public APIs.
2. The saved-session/tool/compaction/provider/model test matrix follows from backwards-readable storage plus provider-dependent native replay; import alone does not test integrations.
3. Replacing glue remains conditional on accepted API/event behavior and measured migration/review cost.

Corrected: Described 2026-10-20 as the v2.1.0 release date, supported by npm's publication time. Added both package receipts. GitHub release-object lookups for V2 returned 404; tagged source plus npm, not GitHub Latest, establish this released channel.

Drop decision: no drop; the narrower core claim is confirmed. Runtime limits remain explicit.

## Thread and carry-forward crosscheck

The companion files were edited in place. All 22 prior questions and ten new watches remain in their original order and wording. Answers were added to the ten new watches to record the observed lane; their requested deployment tests remain open.

| Check | Independent result |
| --- | --- |
| M01 | Stable Guardian V2 default remains false; no account-wide reviewer claim. |
| M02 | Historical ab5611f0 containment in v2026.8.35 reconfirmed; not an October launch. |
| M03 | Default rc.2/newer rc.3 remain prerelease; signed-cookie login does not prove same-user isolation. |
| M04 | Historical Paperclip v2026.824.0 release published 2026-08-25 reconfirmed; separate from the later live-review mechanism. |
| M05 | Historical c2cfd55e containment in v2026.831.0 reconfirmed. |
| M06 | v0.57.0 historical release receipt re-read; no reopening or new first-tag claim. |
| M07 | The old 0.39.3 channel test remains unperformed. Current deployed self-modification requirement is Vercel; earlier eve-dev-only advice is stale. |
| M08 | Earliest-containing status was not rederived; all three named PR merge SHAs are ancestors of historical v2026.8.19. |
| M09 | Eve timing repair in 0.79.1 and first-answer finality in 0.81.0 support delivery, not reply-authentication or race-test acceptance. |
| M10 | Final-argument binding is in main-line stable and the adapted extended source. Updated current extended receipt to 2026.9.34; deployment test remains open. |
| M11 | Replaced inherited Linux-binary inspection claim with this verifier's source/release evidence. Native binary contents and loaded-mode acceptance remain open. |
| M12 | Codex updater fix in 0.163.0/0.164.0; saved-policy source checked, fleet refusal test unperformed. |
| M13 | Gemini MCP-add trust gate and cancellation-history repair in 0.65.0; no external-effect cancellation guarantee. |
| M14 | Canvas secret requests delivered from 1.28.0, retained at 1.33.0. Raw-secret/automation alias receipts do not close local or Docker refusal tests. |
| M15 | Pi internal pins, resume and Bun cancellation/two-worker commits absent in 1.2.0 and present in 1.3.0/1.4.0. Installed dependency/cancellation tests stay open. |
| M16 | Both Omnigent commits are exact merge bases of comparisons with v0.19.1, zero behind; principal/credential runtime trace stays open. |
| M17 | Grok 1.0.60 cumulative notes support delivery; generation-pinned 1.0.67 notes support inherited worktree approvals. Forked-shell test stays open. |
| M18 | OMP composer change is an ancestor of 18.11.0; ACP fix is in 18.12.6. Downstream refusal acceptance stays open. |
| M19 | Agent Flywheel retirement verified locally; no current delivery or behavior closure inferred. |
| M20 | DeepSeek still has no observed non-prerelease; authentication source does not demonstrate separation from same-user commands. |
| M21 | Temporal retirement and prior 0.6.0 preview receipt checked; no no-change claim or authentication/replay closure. |
| M22 | Paperclip accounting stable; call_api parity, later review/Stop and soft-warning source fixes remain outside stable and in beta source. Named beta ref independently resolved. |
| M23 | Codex startup-precedence fix absent in stable 0.164.0 and alpha 0.165.0-alpha.1; main-source watch. |
| M24 | Codex marketplace parser fix absent in stable, present in 0.165.0-alpha.1. |
| M25 | Pi OAuth scheme check absent in v1.4.0; source-only watch. |
| M26 | OpenClaw Bash classifier remains unfixed in all three current published channels, including 2026.9.34. |
| M27 | OpenClaw Slack/Discord room-ID commits absent in stable 10.7, present in 10.10-beta.3. |
| M28 | OpenClaw cron/child host-CLI guards absent in both inspected main-line stable and beta tags; runtime fallbacks untested. |
| M29 | Gemini hook timeout conversion in the 2026-10-24 nightly, absent in stable 0.65.0. |
| M30 | OpenHands ACP OAuth forwarding absent in SDK/server 1.58.1; engine/account qualification remains open. |
| M31 | Paperclip live-review and Stop repairs absent in stable, present in resolved beta source; actual lifecycle behavior untested. |
| M32 | Hermes per-tool remembered consent absent in 0.22.5. That commit does not qualify every subsequent canary follow-up. |

The previous issue's W01 and W02 correspond to M09 and M10. Its uncertain lines remain bounded: Copilot's closing notes do not identify a named checkout-result repair; Gemini retains the inspected unchecked checkout path; Claude 2.1.309 announces ultrareview trust gating but does not expose the withheld GitSpawn test case; Grok's named background-Git question is not closed by worktree/hook notes; and Cursor Rollouts' published mechanism supplies no measured review-hour saving.

Additional thread checks:

- Origin: the archived ruleset permits success, neutral or skipped required-check conclusions. Its API changelog contains nine breaking entries dated 2026-10-14 through 2026-10-23, with endpoint-specific archive/IP changes. The ordinary machine-credential exemption is not a universal exemption for every archive endpoint. The changelog's replay wrapper was replaced with its working id_ endpoint.
- Claude: the MCP Tasks documentation specifies public-beta eligibility, protocol and session limits. It does not promise that interrupted external effects are exactly once. Hosted Code Review posts findings/a check and does not itself approve or block a pull request.
- Cursor: current Projects placement approval and the SDK hook-migration receipt were read. Broader account/runtime checks were narrowed to explicitly unperformed tests; the thread no longer implies an independent runtime closure from the owning harvest.
- Pi: the 1.4.0 compaction serializer still flattens role-labelled content. The disclosure's 3/6 poisoned and 0/5 control figures concern 0.79.0, not a measured 1.4.0 failure rate. Nix CI success was confirmed for source 4a080252f06caf63a525d7873c5d94d3c23887e0. Tool/codemode source does not close the proposed refusal/spend tests.
- OpenClaw: 2026.9.34 has the same inspected final-argument policy and sessions/subagents documentation bytes as 2026.9.33. Its classifier also retains the same vulnerable bytes. Compaction settings, stale Telegram importer and patched Node requirements were read at 10.7. The filesystem issue remains a reported residual audit, not an independently reproduced exploit.
- Hermes: tagged migration/plugin contracts and restart source were read; release CI success was confirmed at bf0203a794a07aac3ff764972ab9087baa4e4f4e. This is not reboot, platform or Kanban acceptance.
- OpenHands: native subagent-scope source and the main-only ACP commit were checked separately. Package delivery does not qualify an unidentified wrapper or inherited credentials.
- DeepSeek: rc source supports the Schedule default and scheduled-user framing. Broader listener/instruction/sandbox migrations remain explicitly pending installed-system qualification; no same-user security boundary was established.
- Paperclip: old-writer drain, worker range, uncompleted shorter-manual comparison, browser lifecycle cases and preview Pipelines removal were checked at their pinned sources. They do not close each other's tests.
- Light scan: Eve, Antigravity, Omnigent, OMP and Grok receipts were re-fetched. Fresh bounded GitHub scans found no post-cutoff commits or releases for agent0ai/agent-zero, agent0ai/a0-connector, agent0ai/a0-launcher, withastro/flue or unreallabsai/unreal-agent. Flue's three registry packages remain latest 2.3.0 with no in-window publication. These are bounded negative results, not proofs of unchanged behavior or restored provenance.
- Local authority: sources/index.yml records heypi, Temporal Agent Harness and Agent Flywheel retired_on: 2026-10-24. The stale editing notes about missing drafts and failed Wayback access were removed; they were not evidence for this verification.

## Dates and release channels

The following are GitHub release publication timestamps, not commit author dates, tag version strings or release-body dates. V2 OpenCode has no matching GitHub release object in the inspected endpoints; npm supplies its delivery date instead.

| Repository | Tag | Published at, UTC | Prerelease |
| --- | --- | --- | --- |
| anthropics/claude-code | [v2.1.299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299) | 2026-10-14T02:49:42Z | false |
| anthropics/claude-code | [v2.1.302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) | 2026-10-16T20:53:06Z | false |
| anthropics/claude-code | [v2.1.304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304) | 2026-10-19T21:34:39Z | false |
| anthropics/claude-code | [v2.1.305](https://github.com/anthropics/claude-code/releases/tag/v2.1.305) | 2026-10-20T20:46:50Z | false |
| anthropics/claude-code | [v2.1.308](https://github.com/anthropics/claude-code/releases/tag/v2.1.308) | 2026-10-22T04:34:55Z | false |
| anthropics/claude-code | [v2.1.309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) | 2026-10-22T22:18:57Z | false |
| anthropics/claude-code | [v2.1.310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) | 2026-10-23T23:39:00Z | false |
| deepseek-ai/deepseek-harness | [dsh-v0.2.1-rc.3](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.3) | 2026-10-23T15:26:39Z | true |
| earendil-works/pi | [v1.3.0](https://github.com/earendil-works/pi/releases/tag/v1.3.0) | 2026-10-15T19:17:33Z | false |
| earendil-works/pi | [v1.4.0](https://github.com/earendil-works/pi/releases/tag/v1.4.0) | 2026-10-21T22:49:48Z | false |
| github/copilot-cli | [v1.0.100](https://github.com/github/copilot-cli/releases/tag/v1.0.100) | 2026-10-19T18:43:10Z | false |
| github/copilot-cli | [v1.0.101](https://github.com/github/copilot-cli/releases/tag/v1.0.101) | 2026-10-20T18:49:53Z | false |
| github/copilot-cli | [v1.0.102](https://github.com/github/copilot-cli/releases/tag/v1.0.102) | 2026-10-21T18:05:00Z | false |
| github/copilot-cli | [v1.0.103](https://github.com/github/copilot-cli/releases/tag/v1.0.103) | 2026-10-22T16:21:56Z | false |
| google-antigravity/antigravity-cli | [1.4.6](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.6) | 2026-10-23T04:18:36Z | false |
| google-antigravity/antigravity-cli | [1.4.7](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.7) | 2026-10-24T02:47:49Z | false |
| google-gemini/gemini-cli | [v0.57.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0) | 2026-08-25T18:37:14Z | false |
| google-gemini/gemini-cli | [v0.65.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0) | 2026-10-20T21:17:57Z | false |
| nicobailon/pi-mcp-adapter | [v6.0.0](https://github.com/nicobailon/pi-mcp-adapter/releases/tag/v6.0.0) | 2026-10-22T20:41:03Z | false |
| NousResearch/hermes-agent | [v0.22.5](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.5) | 2026-10-23T05:28:45Z | false |
| NousResearch/hermes-agent | [v2026.8.19](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19) | 2026-08-21T12:16:39Z | false |
| openai/codex | [rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0) | 2026-10-15T21:30:38Z | false |
| openai/codex | [rust-v0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0) | 2026-10-23T04:48:10Z | false |
| openclaw/openclaw | [v2026.10.10-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.10.10-beta.3) | 2026-10-21T07:00:49Z | true |
| openclaw/openclaw | [v2026.10.5](https://github.com/openclaw/openclaw/releases/tag/v2026.10.5) | 2026-10-18T21:47:25Z | false |
| openclaw/openclaw | [v2026.10.7](https://github.com/openclaw/openclaw/releases/tag/v2026.10.7) | 2026-10-24T09:53:46Z | false |
| openclaw/openclaw | [v2026.9.33](https://github.com/openclaw/openclaw/releases/tag/v2026.9.33) | 2026-10-15T10:39:22Z | false |
| openclaw/openclaw | [v2026.9.34](https://github.com/openclaw/openclaw/releases/tag/v2026.9.34) | 2026-10-24T11:38:56Z | false |
| OpenHands/extensions | [v0.35.0](https://github.com/OpenHands/extensions/releases/tag/v0.35.0) | 2026-10-23T00:24:24Z | false |
| OpenHands/OpenHands | [v1.32.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.32.0) | 2026-10-23T03:03:37Z | false |
| OpenHands/OpenHands | [v1.33.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.33.0) | 2026-10-23T13:46:20Z | false |
| paperclipai/paperclip | [v2026.1023.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0) | 2026-10-24T00:03:59Z | false |
| paperclipai/paperclip | [v2026.824.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0) | 2026-08-25T04:23:27Z | false |
| temporal-community/temporal-agent-harness | [0.6.0](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0) | 2026-10-03T00:48:08Z | true |
| vercel/eve | [eve@0.79.1](https://github.com/vercel/eve/releases/tag/eve%400.79.1) | 2026-10-14T19:38:01Z | false |
| vercel/eve | [eve@0.81.0](https://github.com/vercel/eve/releases/tag/eve%400.81.0) | 2026-10-19T14:01:37Z | false |

Registry observations are source-specific reads. Dist-tags are mutable selectors and do not supply a historical selector audit trail. The table is limited to the channel names relevant to the edited files.

| Registry | Read at, UTC | Relevant selectors |
| --- | --- | --- |
| [@earendil-works/pi-coding-agent](https://registry.npmjs.org/@earendil-works%2fpi-coding-agent) | 2026-10-24T11:55:08.170730+00:00 | {"latest":"1.4.0"} |
| [@earendil-works/pi-durable](https://registry.npmjs.org/@earendil-works%2fpi-durable) | 2026-10-24T11:55:07.958875+00:00 | {"latest":"1.4.0"} |
| [pi-mcp-adapter](https://registry.npmjs.org/pi-mcp-adapter) | 2026-10-24T11:55:08.131517+00:00 | {"latest":"6.0.0"} |
| [@anthropic-ai/claude-code](https://registry.npmjs.org/@anthropic-ai%2fclaude-code) | 2026-10-24T11:55:08.915400+00:00 | {"stable":"2.1.308","latest":"2.1.310","next":"2.1.310"} |
| [@google/gemini-cli](https://registry.npmjs.org/@google%2fgemini-cli) | 2026-10-24T11:55:12.401962+00:00 | {"preview":"0.66.0-preview.0","latest":"0.65.0","nightly":"0.67.0-nightly.20261024.gcd1b45c2d"} |
| [@openhands/agent-canvas](https://registry.npmjs.org/@openhands%2fagent-canvas) | 2026-10-24T11:55:15.450773+00:00 | {"alpha":"1.0.0-alpha.4","beta":"1.0.0-beta.1","latest":"1.33.0"} |
| [@openhands/extensions](https://registry.npmjs.org/@openhands%2fextensions) | 2026-10-24T11:55:13.346412+00:00 | {"alpha":"0.0.1-alpha","latest":"0.35.0"} |
| [openclaw](https://registry.npmjs.org/openclaw) | 2026-10-24T11:55:22.483497+00:00 | {"extended-stable":"2026.9.34","beta":"2026.10.10-beta.3","latest":"2026.10.7"} |
| [@github/copilot](https://registry.npmjs.org/@github%2fcopilot) | 2026-10-24T11:55:19.597102+00:00 | {"latest":"1.0.103"} |
| [paperclipai](https://registry.npmjs.org/paperclipai) | 2026-10-24T11:55:35.295399+00:00 | {"nightly":"2026.1024.0-nightly.0","beta":"2026.1023.0-beta.0","latest":"2026.1023.0","canary":"2026.1024.0-canary.7"} |
| [@opencode/cli](https://registry.npmjs.org/@opencode%2fcli) | 2026-10-24T11:55:23.730725+00:00 | {"beta":"0.0.0-beta-19507","latest":"2.1.4"} |
| [opencode-ai](https://registry.npmjs.org/opencode-ai) | 2026-10-24T11:55:27.019524+00:00 | {"next":"0.0.0-next-202606270058","beta":"0.0.0-beta-202608110357","latest":"1.19.4"} |
| [eve](https://registry.npmjs.org/eve) | 2026-10-24T11:55:30.155535+00:00 | {"beta":"0.6.0-beta.20","latest":"0.83.0"} |
| [@xai-official/grok](https://registry.npmjs.org/@xai-official%2fgrok) | 2026-10-24T11:55:28.053831+00:00 | {"latest":"1.0.70","alpha":"1.0.70"} |
| [@oh-my-pi/pi-coding-agent](https://registry.npmjs.org/@oh-my-pi%2fpi-coding-agent) | 2026-10-24T11:55:36.125379+00:00 | {"latest":"18.12.6"} |
| [@deepseek-ai/dsh](https://registry.npmjs.org/@deepseek-ai%2fdsh) | 2026-10-24T12:00:13.264749+00:00 | {"alpha":"0.2.1-alpha.5","next":"0.2.1-rc.3","latest":"0.2.1-rc.2"} |
| [@flue/runtime](https://registry.npmjs.org/@flue%2fruntime) | 2026-10-24T12:00:13.809227+00:00 | {"next":"2.2.0-next.1","latest":"2.3.0"} |
| [@flue/cli](https://registry.npmjs.org/@flue%2fcli) | 2026-10-24T12:00:13.886204+00:00 | {"next":"2.2.0-next.1","latest":"2.3.0"} |
| [@flue/vite](https://registry.npmjs.org/@flue%2fvite) | 2026-10-24T12:00:13.709719+00:00 | {"next":"2.2.0-next.1","latest":"2.3.0"} |
| [@openai/codex](https://registry.npmjs.org/@openai%2fcodex) | 2026-10-24T12:00:20.953542+00:00 | {"beta":"0.1.2505172116","latest":"0.164.0","alpha":"0.165.0-alpha.1"} |

Date distinctions that matter:

- Adapter 6.0.0: GitHub publication 2026-10-22T20:41:03Z.
- Pi 1.4.0: GitHub publication 2026-10-21T22:49:48Z; CLI npm publication 2026-10-21T22:48:58.431Z.
- Paperclip v2026.1023.0: GitHub publication 2026-10-24T00:03:59Z; npm publication 2026-10-23T23:54:25.678Z. Its body names 2026-10-23. The signal explicitly identifies GitHub's event.
- OpenClaw extended-stable 2026.9.34: npm publication 2026-10-24T11:17:24.107Z; GitHub publication 2026-10-24T11:38:56Z. This later actual read supersedes 9.33 as the current extended selector.
- OpenCode @opencode/cli 2.1.0: npm publication 2026-10-20T07:15:26.616Z; 2.1.4: 2026-10-23T10:13:53.203Z. opencode-ai remains a separate V1 package.
- Origin: week-of-2026-10-12 is the note's period label. The 2026-10-24 archive timestamp is a capture, not a launch date. No first-publication time after the previous cutoff was established.

## Ancestry evidence

Commands used existing objects only, with GIT_NO_LAZY_FETCH=1 and GIT_OPTIONAL_LOCKS=0. The operation was git merge-base --is-ancestor COMMIT TAG, followed by read-only tag resolution. Exit 0 means ancestor, 1 means not ancestor, and 128 is an unavailable object/ref, never evidence of absence. Ancestry establishes source inclusion, not package-byte identity, activation or runtime enforcement.

| Clone | Commit | Target | Resolved target SHA | Exit |
| --- | --- | --- | --- | --- |
| codex-verify | d570b3632b100e36f931797cdbdb8906d0fcafa8 | rust-v0.162.1 | 092d3acd6bec3e3a14bdc7e7a2810ab628ab759d | 1 |
| codex-verify | d570b3632b100e36f931797cdbdb8906d0fcafa8 | rust-v0.163.0 | 83086188ae0614bd882818ff1aa23f3194962012 | 0 |
| codex-verify | d570b3632b100e36f931797cdbdb8906d0fcafa8 | rust-v0.164.0 | 6aaac694803004a63c6f393d153c96d22521a6b9 | 0 |
| codex-verify | 398500106707f0a3217c7cf83edc2bf226cc342f | rust-v0.164.0 | 6aaac694803004a63c6f393d153c96d22521a6b9 | 1 |
| codex-verify | 398500106707f0a3217c7cf83edc2bf226cc342f | rust-v0.165.0-alpha.1 | 4cf2c16e4bc67809f620582d1999818e1b51eb2e | 1 |
| codex-verify | 61a991990fa4fd0c511ccaaab3875371796be956 | rust-v0.164.0 | 6aaac694803004a63c6f393d153c96d22521a6b9 | 1 |
| codex-verify | 61a991990fa4fd0c511ccaaab3875371796be956 | rust-v0.165.0-alpha.1 | 4cf2c16e4bc67809f620582d1999818e1b51eb2e | 0 |
| claude-code-verify | bf2323b3021c9d3db7a31e1e7d61068c3f704497 | v2.1.298 | v2.1.298^{commit} | 128 |
| claude-code-verify | bf2323b3021c9d3db7a31e1e7d61068c3f704497 | v2.1.299 | db93774d73e8fdbaf315a6f4c175ae99ad3d515a | 0 |
| claude-code-verify | bf2323b3021c9d3db7a31e1e7d61068c3f704497 | v2.1.308 | 5ed799e5cc56bea9efff57398ca43e31d82784ff | 0 |
| claude-code-verify | bf2323b3021c9d3db7a31e1e7d61068c3f704497 | v2.1.310 | b70dc4113ad72e0ee44f7b1b95afaf510b53ee98 | 0 |
| gemini-cli | 9b6e0265d16bbd29ca51e33c9e0c01dc4cec5e83 | v0.64.0 | 4a0749aceac5643e6f85a36d7420314d85e13b52 | 1 |
| gemini-cli | 9b6e0265d16bbd29ca51e33c9e0c01dc4cec5e83 | v0.65.0 | 6006c14a4decfe4b891c6263ad6ad5992e404b5b | 0 |
| gemini-cli | 8b5cb8a6491e17b2dd3ba0cfb49fcfe41c48c4a3 | v0.65.0 | 6006c14a4decfe4b891c6263ad6ad5992e404b5b | 0 |
| gemini-cli | 204db94ae2a33f70afec7400ebf6b78f1b5e2575 | v0.65.0 | 6006c14a4decfe4b891c6263ad6ad5992e404b5b | 0 |
| gemini-cli | 5b36aacf5bf3d044badc881063f7671598c27c9d | v0.65.0 | 6006c14a4decfe4b891c6263ad6ad5992e404b5b | 1 |
| gemini-cli | 5b36aacf5bf3d044badc881063f7671598c27c9d | v0.67.0-nightly.20261024.gcd1b45c2d | ec71029abe3259d1101a0ee574507b912f25d927 | 0 |
| hermes-agent-verify | eea7c437ebd66e5ffbf9e525abe915f25e17d911 | v0.22.5 | bf0203a794a07aac3ff764972ab9087baa4e4f4e | 0 |
| hermes-agent-verify | 876e37c07746642da12a59bf2088c3fcfdda6f6c | v0.22.5 | bf0203a794a07aac3ff764972ab9087baa4e4f4e | 0 |
| hermes-agent-verify | ce11b6be1af2b1defe4b461b79a451a02af96a9f | v0.22.5 | bf0203a794a07aac3ff764972ab9087baa4e4f4e | 1 |
| openclaw-verify | ab5611f0 | v2026.8.35 | 713ba5785d72d6ed1cec971e21307f16cc4234a6 | 0 |
| openclaw-verify | 34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de | v2026.10.4 | 383c124cc32ffee3f8e56f549b88da94d269a4af | 1 |
| openclaw-verify | 34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de | v2026.10.5 | 1b58cb9a1b4f4353e1add63c8506db4d890962e8 | 0 |
| openclaw-verify | 34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de | v2026.10.7 | 157d8c2bc3ea2fa183afdc11088e69690bf8e64e | 0 |
| openclaw-verify | 34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de | v2026.9.33 | 5873f8174e0b2866a2b8bc0dbf4c4c8164d8dc82 | 1 |
| openclaw-verify | 69cd9c5edb96b5bd990e97030a45c01f9f8c10a8 | v2026.10.7 | 157d8c2bc3ea2fa183afdc11088e69690bf8e64e | 1 |
| openclaw-verify | 69cd9c5edb96b5bd990e97030a45c01f9f8c10a8 | v2026.10.10-beta.3 | 15dffe5258a93c3d9c5dfd0a2b2de9989ebe7e14 | 1 |
| openclaw-verify | 69cd9c5edb96b5bd990e97030a45c01f9f8c10a8 | v2026.9.33 | 5873f8174e0b2866a2b8bc0dbf4c4c8164d8dc82 | 1 |
| openclaw-verify | cfee851150c5603a6af8b04f748973b57e482af0 | v2026.10.4 | 383c124cc32ffee3f8e56f549b88da94d269a4af | 1 |
| openclaw-verify | cfee851150c5603a6af8b04f748973b57e482af0 | v2026.10.5 | 1b58cb9a1b4f4353e1add63c8506db4d890962e8 | 0 |
| openclaw-verify | cfee851150c5603a6af8b04f748973b57e482af0 | v2026.10.7 | 157d8c2bc3ea2fa183afdc11088e69690bf8e64e | 0 |
| openclaw-verify | 803744916a8f168a7c82e346bf6d37065a04780f | v2026.10.7 | 157d8c2bc3ea2fa183afdc11088e69690bf8e64e | 1 |
| openclaw-verify | 803744916a8f168a7c82e346bf6d37065a04780f | v2026.10.10-beta.3 | 15dffe5258a93c3d9c5dfd0a2b2de9989ebe7e14 | 0 |
| openclaw-verify | 68c3f3fb660c5dd808231199b0fe265ea26086f2 | v2026.10.7 | 157d8c2bc3ea2fa183afdc11088e69690bf8e64e | 1 |
| openclaw-verify | 68c3f3fb660c5dd808231199b0fe265ea26086f2 | v2026.10.10-beta.3 | 15dffe5258a93c3d9c5dfd0a2b2de9989ebe7e14 | 0 |
| openclaw-verify | 7abbf8507aa2fc52952621a497ece0e019b2748e | v2026.10.7 | 157d8c2bc3ea2fa183afdc11088e69690bf8e64e | 1 |
| openclaw-verify | 7abbf8507aa2fc52952621a497ece0e019b2748e | v2026.10.10-beta.3 | 15dffe5258a93c3d9c5dfd0a2b2de9989ebe7e14 | 1 |
| openclaw-verify | a19f1bf9eb6e5b22343c144a387a945d2cbc3525 | v2026.10.7 | 157d8c2bc3ea2fa183afdc11088e69690bf8e64e | 1 |
| openclaw-verify | a19f1bf9eb6e5b22343c144a387a945d2cbc3525 | v2026.10.10-beta.3 | 15dffe5258a93c3d9c5dfd0a2b2de9989ebe7e14 | 1 |
| openhands-verify/extensions | af0a4b816b0b711c79771b91a950726c0c6ed896 | v0.35.0 | a9056dbaa98aae1033d98466049cb057e343e1a0 | 0 |
| openhands-verify/extensions | 25fab14cac53f1795302a92dc099554c5f46c7d7 | v0.31.0 | 7dfa38b44d3a64b31b7cdfa370ced3618c1ef79a | 0 |
| openhands-verify/extensions | 25fab14cac53f1795302a92dc099554c5f46c7d7 | v0.35.0 | a9056dbaa98aae1033d98466049cb057e343e1a0 | 0 |
| openhands-verify/extensions | 5f0bc702a65b2165e4406227d845b87efd5d445a | v0.32.0 | 666e51ef16fc7a4c1286f841a7bff7af54f0bebf | 0 |
| openhands-verify/extensions | 5f0bc702a65b2165e4406227d845b87efd5d445a | v0.35.0 | a9056dbaa98aae1033d98466049cb057e343e1a0 | 0 |
| openhands-verify/canvas | da4c7564dcf460f80d1889fee1c951802c448c56 | v1.27.1 | f07aebdf5cdd71f4a05ebcf30f8bef5e4e3b70b9 | 1 |
| openhands-verify/canvas | da4c7564dcf460f80d1889fee1c951802c448c56 | v1.28.0 | f3caa2778553662c22715bfb52b5eb6edf975d5b | 0 |
| openhands-verify/canvas | da4c7564dcf460f80d1889fee1c951802c448c56 | v1.33.0 | b968abef4779eb47f5843c975a60c7b4ccf49886 | 0 |
| openhands-verify/sdk | 87bec04de8e08117399d5cab68042cc794bc2199 | v1.58.1 | 60192ed54db73ac658ac1a07462916126c32d3a0 | 1 |
| pi-coding-agent-verify | 9ffd27cfaaeed5c1ecf9369f393c3222975729b4 | v1.4.0 | 4a080252f06caf63a525d7873c5d94d3c23887e0 | 1 |
| paperclip-verify | c2cfd55e | v2026.831.0 | dbf052577d073bdac511d796e763c0bbd0bd9bab | 0 |
| paperclip-verify | 582911ba74350dbe9029eb132d69a257edd9d26a | v2026.1023.0 | 1b4c803816e82b0265c8422e1a804327a7ed8c54 | 0 |
| paperclip-verify | 799e4d556f5c1bc17b398147c7e0abff91446de0 | v2026.1023.0 | 1b4c803816e82b0265c8422e1a804327a7ed8c54 | 0 |
| paperclip-verify | fc3b15537b00f7cd50329926e24ea0c20487fad5 | v2026.1023.0 | 1b4c803816e82b0265c8422e1a804327a7ed8c54 | 1 |
| paperclip-verify | fc3b15537b00f7cd50329926e24ea0c20487fad5 | d69631b01b9c658f80bf8bed389863dce82643e1 | d69631b01b9c658f80bf8bed389863dce82643e1 | 0 |
| paperclip-verify | 880d4ae60fa691305a4703d4e25e367b63c2a7d7 | v2026.1023.0 | 1b4c803816e82b0265c8422e1a804327a7ed8c54 | 1 |
| paperclip-verify | 880d4ae60fa691305a4703d4e25e367b63c2a7d7 | d69631b01b9c658f80bf8bed389863dce82643e1 | d69631b01b9c658f80bf8bed389863dce82643e1 | 0 |
| paperclip-verify | 6dda8cc2b75e211dc62af264bfd0994f602099d1 | v2026.1023.0 | 1b4c803816e82b0265c8422e1a804327a7ed8c54 | 1 |
| paperclip-verify | 6dda8cc2b75e211dc62af264bfd0994f602099d1 | d69631b01b9c658f80bf8bed389863dce82643e1 | d69631b01b9c658f80bf8bed389863dce82643e1 | 0 |
| opencode-verify | acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd | v2.1.0 | 60c68d145a14127ce633e26aa5fdfb882a7baa6d | 0 |
| opencode-verify | acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd | v2.1.4 | 68bc26b7da1990ce10ffecfbc1e09eb13aa5d824 | 0 |
| eve | 0dea0ded869be7db30ae90ed8072d29e6e57df61 | eve@0.79.1 | 649b511efde1f3ceff50e225f0c95ae76d795a71 | 0 |
| omp/oh-my-pi | b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c | v18.11.0 | c2cb79e4c227aa4b22c4ccb933ff72fd88bceba4 | 0 |
| omp/oh-my-pi | 31191499c28d2283336ae88140515667447253ba | v18.12.6 | 45c35e40c46166dc726ccc52f5d27f40f2449f99 | 0 |
| omp/oh-my-pi | abb184ded7e2ac8158905504a7a32fd8cea68279 | v18.12.6 | 45c35e40c46166dc726ccc52f5d27f40f2449f99 | 0 |
| omp/oh-my-pi | d72f9ddb7d60c509a24992e1aec6bed47e1aee40 | v18.12.6 | 45c35e40c46166dc726ccc52f5d27f40f2449f99 | 1 |
| hermes-agent-verify | f0ffcbc7532f5ca58d62eba474b0a398082c6e93 | v2026.8.19 | fcbd1076a93841fa88855acce810e342a5b78101 | 0 |
| hermes-agent-verify | b0350365829ee67aee0cd40e7cb04774c57dab27 | v2026.8.19 | fcbd1076a93841fa88855acce810e342a5b78101 | 0 |
| hermes-agent-verify | 1179f148e436d80fdd36f78cfb758444f392780d | v2026.8.19 | fcbd1076a93841fa88855acce810e342a5b78101 | 0 |
| pi-coding-agent-verify | f13c00fb3a4d77ad3faa815057e31d614d42b3f1 | v1.2.0 | 06a466935536f8c9bcacb2d5efc0fc021be1bdff | 1 |
| pi-coding-agent-verify | f13c00fb3a4d77ad3faa815057e31d614d42b3f1 | v1.3.0 | 71023aec1546d6d677a65669c5665c0927ce0dd0 | 0 |
| pi-coding-agent-verify | f13c00fb3a4d77ad3faa815057e31d614d42b3f1 | v1.4.0 | 4a080252f06caf63a525d7873c5d94d3c23887e0 | 0 |
| pi-coding-agent-verify | 6f2f164ab7e7f1516c4530da396b151ab2f84779 | v1.2.0 | 06a466935536f8c9bcacb2d5efc0fc021be1bdff | 1 |
| pi-coding-agent-verify | 6f2f164ab7e7f1516c4530da396b151ab2f84779 | v1.3.0 | 71023aec1546d6d677a65669c5665c0927ce0dd0 | 0 |
| pi-coding-agent-verify | 6f2f164ab7e7f1516c4530da396b151ab2f84779 | v1.4.0 | 4a080252f06caf63a525d7873c5d94d3c23887e0 | 0 |
| pi-coding-agent-verify | 3daa20280f6a7c7cbe0935680c9a38fdc3863005 | v1.2.0 | 06a466935536f8c9bcacb2d5efc0fc021be1bdff | 1 |
| pi-coding-agent-verify | 3daa20280f6a7c7cbe0935680c9a38fdc3863005 | v1.3.0 | 71023aec1546d6d677a65669c5665c0927ce0dd0 | 0 |
| pi-coding-agent-verify | 3daa20280f6a7c7cbe0935680c9a38fdc3863005 | v1.4.0 | 4a080252f06caf63a525d7873c5d94d3c23887e0 | 0 |
| paperclip-verify | 2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9 | v2026.1023.0 | 1b4c803816e82b0265c8422e1a804327a7ed8c54 | 1 |
| paperclip-verify | 2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9 | d69631b01b9c658f80bf8bed389863dce82643e1 | d69631b01b9c658f80bf8bed389863dce82643e1 | 0 |

Supplementary comparisons and exceptions:

- Omnigent 6cf6acf2fde6b80ec929e0b1565ec5e50e6f7306 and 03beb88c01a966b04c6c762e723e8b4463dc16e0 are the exact merge bases against v0.19.1, with zero behind and 368/363 ahead respectively. This independently supplies ancestry where that clone was unavailable.
- OMP b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c is the exact merge base against v18.11.0, zero behind and 296 ahead, corroborating the local result.
- OpenClaw 69cd9c5e versus v2026.9.34 is diverged, 591 ahead and 15615 behind. Source inspection is decisive for a possible adapted backport: all four inspected classifiers have SHA-256 d1b71e49b55facf346263a0bf37bc960b746544d27f6e4ff8c15b4748e30aa8b and 1233 bytes. They still classify predicates without operand inspection.
- OpenClaw final-argument policy at 9.33 and 9.34 has SHA-256 568f5d66454c0ae1e0ee28f442fc853e9abba9638a85f0fc9c2951f282e4a19a. The sessions/subagents docs also match. A missing donor SHA on an extended branch was not mistaken for a missing adapted fix.
- Paperclip's unnamespaced beta lookup returned 404. The correct ref is beta/v2026.1023.0-beta.0, independently returned by the GitHub ref API as d69631b01b9c658f80bf8bed389863dce82643e1. Its name and npm version do not prove identical bytes.
- Claude v2.1.298 was unavailable locally. No negative inclusion claim was made from that exit 128. The v2.1.299 release/source positively supports the stated released floor.
- Initial unauthenticated API failures were retried using the same pinned authenticated GitHub API endpoints. OpenCode V2 release-object 404s were resolved through existing tags and independently published npm versions, not treated as unpublished code.

## Independent receipt ledger

Each row below is a successful fresh fetch. SHA-256 covers the full response bytes after HTTP/gzip decoding, before HTML extraction, JSON summarization or line selection. A linked line range was inspected in its surrounding context. The hash is not a statement of upstream immutability. This ledger includes supplementary and historical receipts; the original non-id_ Origin changelog wrapper is recorded as an opened wrapper and is not used for the API-change claim.

| Receipt | Read at, UTC | Bytes | SHA-256 |
| --- | --- | ---: | --- |
| [https://api.github.com/repos/paperclipai/paperclip/git/ref/tags/beta/v2026.1023.0-beta.0](https://api.github.com/repos/paperclipai/paperclip/git/ref/tags/beta/v2026.1023.0-beta.0) | 2026-10-24T12:06:37.038989+00:00 | 406 | c853ce68113d380429aaff2bb3ce05e7d39459e4b81cb521d085cf01f8babec5 |
| [https://cursor.com/docs/cloud-agent/settings#security-settings](https://cursor.com/docs/cloud-agent/settings#security-settings) | 2026-10-24T11:57:49.677924+00:00 | 236310 | 1febc226da457f8acae3d9bfe8a057958aa08c567d094b40fca809add35b67fb |
| [https://cursor.com/docs/origin.md](https://cursor.com/docs/origin.md) | 2026-10-24T11:51:46.986396+00:00 | 4260 | 78a5574de07b91324d80c0a40a623fba6d59d49d2c649d62c99c5b22224cc897 |
| [https://cursor.com/docs/release-notes/sdk#oct-20-2026](https://cursor.com/docs/release-notes/sdk#oct-20-2026) | 2026-10-24T11:57:50.030176+00:00 | 369972 | 95f6cca5edaad228e2d5970f8ae5dc6e8eab739c6c3a08864659dc1cb73fcda7 |
| [https://downloads.claude.ai/claude-code-releases/latest](https://downloads.claude.ai/claude-code-releases/latest) | 2026-10-24T11:56:12.414886+00:00 | 7 | c7bd3bb68246a448a938b39de32c8dccced86dc5aaface5d3d3cf19fb2185b46 |
| [https://downloads.claude.ai/claude-code-releases/stable](https://downloads.claude.ai/claude-code-releases/stable) | 2026-10-24T11:56:12.221292+00:00 | 7 | 38095e2eea3f5f2dd6c48f23fac87bc1f607a991e379beb9c3a8c0d431566f77 |
| [https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md#breaking-changes) | 2026-10-24T11:51:44.143676+00:00 | 50001 | 7c4cb74025c345d5a5df08195da5005674478055c6c804f25221f3bb931c519b |
| [https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/compaction.mdx](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/compaction.mdx) | 2026-10-24T11:55:10.305347+00:00 | 7925 | d10e5bb06a3d6857a52e7ebe16f183ca342481feb6e75264fe314e570decc662 |
| [https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx](https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/migrate-v1.mdx) | 2026-10-24T11:51:44.722518+00:00 | 20805 | f3d42b36cec1b498d19543b32e72a069e006ee2a4a6884e548ce3a9408fd78a0 |
| [https://github.com/anomalyco/opencode/commit/acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd](https://github.com/anomalyco/opencode/commit/acdcdb8dd9f6dcb6f80f268325d9cae2684a67fd) | 2026-10-24T11:52:41.057818+00:00 | 410689 | ac14c8ecc1213771dae442d040a45509254207065e58a547eaa1cc6f9823c44d |
| [https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md](https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md) | 2026-10-24T11:50:45.896742+00:00 | 1085784 | 27d7a0e1d5c1b98cce5153a4c9e467e8a361550c4cfe9d0aa471f46b8dc0ed83 |
| [https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/held-verdict/verdicts/holds-over.ts](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/held-verdict/verdicts/holds-over.ts) | 2026-10-24T11:50:41.103512+00:00 | 1487 | d95bb7a1d66309a8a4de11507c097c8ef9fce0a1fd304b62f091ca2020cdca7f |
| [https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/policy/pinned-names.ts](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/policy/pinned-names.ts) | 2026-10-24T11:50:42.427934+00:00 | 969 | 558d5d55a389c16b61f2c1803b79b098170e86753f51766a60e3d0b412a359d3 |
| [https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/README.md) | 2026-10-24T11:50:41.462071+00:00 | 34845 | d92997048667bf5b84abd9fe3371bdec4d17b6a8d214b6a82f887c6657bb1e8b |
| [https://github.com/anthropics/claude-code/blob/v2.1.310/mods/types/claude-code.d.ts#L10120-L10140](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/types/claude-code.d.ts#L10120-L10140) | 2026-10-24T11:57:21.791231+00:00 | 517451 | e51e637fbbebb2a6a49c4bdc3860a251c2ca2295884822dff0f4c3e3ec802163 |
| [https://github.com/anthropics/claude-code/releases/tag/v2.1.299](https://github.com/anthropics/claude-code/releases/tag/v2.1.299) | 2026-10-24T11:53:27.629124+00:00 | 45172 | b18e2af63412da5f63237325dab4d9a1e1aabe632fdde65215308785b6a9c397 |
| [https://github.com/anthropics/claude-code/releases/tag/v2.1.302](https://github.com/anthropics/claude-code/releases/tag/v2.1.302) | 2026-10-24T11:50:22.626081+00:00 | 27336 | 0a51bdc4567068c6629f5fc00d393c6232c746efeb3fd8cbe858d55db44ade0a |
| [https://github.com/anthropics/claude-code/releases/tag/v2.1.304](https://github.com/anthropics/claude-code/releases/tag/v2.1.304) | 2026-10-24T11:50:22.622454+00:00 | 28304 | 26c7d81f366206c04ec4a66dd77b45b770e7e5a8b93edc28ab226e80898f51e3 |
| [https://github.com/anthropics/claude-code/releases/tag/v2.1.305](https://github.com/anthropics/claude-code/releases/tag/v2.1.305) | 2026-10-24T11:50:22.793028+00:00 | 22963 | db8d5e85ff07036de243b8255ce662d832e19a4ca56eceacd2049333dda327cf |
| [https://github.com/anthropics/claude-code/releases/tag/v2.1.308](https://github.com/anthropics/claude-code/releases/tag/v2.1.308) | 2026-10-24T11:56:11.666757+00:00 | 17125 | 15b225f979b55188396a1901c188e92d81f0ab2ec7099e65fa098546eecd60f7 |
| [https://github.com/anthropics/claude-code/releases/tag/v2.1.309](https://github.com/anthropics/claude-code/releases/tag/v2.1.309) | 2026-10-24T11:50:23.496720+00:00 | 28815 | 1c0bcab007789c69d5e6c5e569e82654c55dded534a68e6dcd82b1fdc1eef0b5 |
| [https://github.com/anthropics/claude-code/releases/tag/v2.1.310](https://github.com/anthropics/claude-code/releases/tag/v2.1.310) | 2026-10-24T11:56:11.674264+00:00 | 20995 | 67f6c74568ce4f0a4d00d52a5777840b17322ce711be5f160dd9fe7470a63470 |
| [https://github.com/can1357/oh-my-pi/commit/31191499c28d2283336ae88140515667447253ba](https://github.com/can1357/oh-my-pi/commit/31191499c28d2283336ae88140515667447253ba) | 2026-10-24T11:55:14.619233+00:00 | 21433 | 5ca5e11246b6135ac308ee9e23ab44ca0b6498b680697b2326851a5ea3fb00cc |
| [https://github.com/can1357/oh-my-pi/commit/abb184ded7e2ac8158905504a7a32fd8cea68279](https://github.com/can1357/oh-my-pi/commit/abb184ded7e2ac8158905504a7a32fd8cea68279) | 2026-10-24T11:55:16.239485+00:00 | 13565 | 34485701b8f18ecf3b4675b5cba42fcb97b25bf73754f7cb4517c1d53c8fbefc |
| [https://github.com/can1357/oh-my-pi/commit/d72f9ddb7d60c509a24992e1aec6bed47e1aee40](https://github.com/can1357/oh-my-pi/commit/d72f9ddb7d60c509a24992e1aec6bed47e1aee40) | 2026-10-24T11:55:15.927241+00:00 | 16897 | 9410213cd31f6a51bedaa06def5b84d272467770d893cacf44116201c33a5389 |
| [https://github.com/can1357/oh-my-pi/compare/b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c...v18.11.0](https://github.com/can1357/oh-my-pi/compare/b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c...v18.11.0) | 2026-10-24T11:54:15.520919+00:00 | 2052996 | d1b20fa47406e357ace7763b796a41011b74e41c15d5e247c7bebb193899b9c5 |
| [https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/architecture.md](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/docs/architecture.md) | 2026-10-24T11:55:15.847127+00:00 | 18900 | 95a7722c7096d665d8adedeb733b8f5ad7740e67cb5c6e9dc91ec05f430cb760 |
| [https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/web-app/presets/standard.patch.yml](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/bundle/web-app/presets/standard.patch.yml) | 2026-10-24T11:55:08.181394+00:00 | 6799 | 0d398d2a6872a73a106cb3bd19303ecccf1637e1fcad4d0bf9d8a72d2c2c68f5 |
| [https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts) | 2026-10-24T11:53:02.614729+00:00 | 16185 | f1ebdb9fa8706414852420393d9f34b2d604a128928a2f5852d4832ce38b45f7 |
| [https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/schedule/schedule/src/domain.ts](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/schedule/schedule/src/domain.ts) | 2026-10-24T11:55:08.568199+00:00 | 79931 | d7a5ca9121a284276f841a7429302e447b8de77df76eedc9adcaf2b2a6d506cd |
| [https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.3](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.3) | 2026-10-24T11:53:02.916905+00:00 | 3078 | b24dbc29650ae1019c8142443b1d4343b4e104af9eb1bc151efcf728a91d5dad |
| [https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2354efbaa6b355b93a53d6052fcc8f56950893b1](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2354efbaa6b355b93a53d6052fcc8f56950893b1) | 2026-10-24T11:54:12.491840+00:00 | 50504 | 43ed3b65758738aa3f1cf730e775cd59645bd7c03e199cb7c10108cd7de599c7 |
| [https://github.com/earendil-works/pi/actions/runs/39686887389](https://github.com/earendil-works/pi/actions/runs/39686887389) | 2026-10-24T11:54:36.938621+00:00 | 216513 | 242a5cb2bfa36fb81915c401ca5883edb8de240203cb1bb83b87ecf0eb3ce86f |
| [https://github.com/earendil-works/pi/blob/v1.4.0/packages/agent/src/agent-loop.ts](https://github.com/earendil-works/pi/blob/v1.4.0/packages/agent/src/agent-loop.ts) | 2026-10-24T11:54:36.369113+00:00 | 29889 | 9d7589b5071ea3b8b3e3c624f9cfc09a976ebf7436024a58213837de4645167d |
| [https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/package.json) | 2026-10-24T11:59:20.346489+00:00 | 3873 | df6883685382d6a914e5797232744c26579fe7db5576ea0e9c859d018ca2d54e |
| [https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/utils.ts#L120-L155](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/utils.ts#L120-L155) | 2026-10-24T11:54:34.875745+00:00 | 5951 | 37eab7698cdbff8b5987d4529005ea16d7e1ae4a5344d7d0443c3466444aa90e |
| [https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/execute.ts) | 2026-10-24T11:53:27.782072+00:00 | 34882 | 2f7cdf2ec0497b5bbcd05e8db6476c792ae6a8c05e019a5dad94e3417449a556 |
| [https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/index.ts#L14-L45](https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/extensions/codemode/index.ts#L14-L45) | 2026-10-24T11:54:36.182264+00:00 | 2044 | 7684b16067a29ea1c83170afdce35437c54afdd679b250c7465a668624aff70f |
| [https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/CHANGELOG.md](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/CHANGELOG.md) | 2026-10-24T11:50:24.092814+00:00 | 30804 | 6d26c9fc85cdcacf7b62903a1e06c6e9a74aa06af4db2e5e219016d0b4c58eca |
| [https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L139-L220](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L139-L220) | 2026-10-24T11:50:24.404824+00:00 | 64918 | 64fe26df7c4451ed6aa10b210448f71c6267db6f0766e7d20c50a7d8f167a37c |
| [https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/storage/sqlite/migrations.ts](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/storage/sqlite/migrations.ts) | 2026-10-24T11:50:23.488176+00:00 | 6798 | dd0f6445e308133d86e7f9fac5945b0907b78f6a9012800ec53787f526d0dea9 |
| [https://github.com/earendil-works/pi/commit/3daa20280f6a7c7cbe0935680c9a38fdc3863005](https://github.com/earendil-works/pi/commit/3daa20280f6a7c7cbe0935680c9a38fdc3863005) | 2026-10-24T11:59:20.798875+00:00 | 42765 | 08de90912e68e32a521cbe654320dca8e997c508ee31cafea630638ef3081c07 |
| [https://github.com/earendil-works/pi/commit/6f2f164ab7e7f1516c4530da396b151ab2f84779](https://github.com/earendil-works/pi/commit/6f2f164ab7e7f1516c4530da396b151ab2f84779) | 2026-10-24T11:59:20.844559+00:00 | 15339 | 517b11782585e7904699125134a72b67a378a64b21a1b5f7234f9cdc1954424d |
| [https://github.com/earendil-works/pi/commit/9ffd27cfaaeed5c1ecf9369f393c3222975729b4](https://github.com/earendil-works/pi/commit/9ffd27cfaaeed5c1ecf9369f393c3222975729b4) | 2026-10-24T11:58:26.141078+00:00 | 11337 | 7682ddc55a3def43954a891f472e25397d412d65fcfa23368149c5025142c142 |
| [https://github.com/earendil-works/pi/commit/f13c00fb3a4d77ad3faa815057e31d614d42b3f1](https://github.com/earendil-works/pi/commit/f13c00fb3a4d77ad3faa815057e31d614d42b3f1) | 2026-10-24T11:59:20.797407+00:00 | 28284 | 2bac9f470b99de0da5cfd34eab9fb955829f22c8e93b073634e6aaf2285ea4ee |
| [https://github.com/earendil-works/pi/compare/v1.2.0...v1.3.0](https://github.com/earendil-works/pi/compare/v1.2.0...v1.3.0) | 2026-10-24T11:53:33.083796+00:00 | 1347214 | 97a48a166c125e97876a7ce371ebca391c2410e64ee8473e376230a50a65ef67 |
| [https://github.com/github/copilot-cli/blob/7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120/changelog.md](https://github.com/github/copilot-cli/blob/7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120/changelog.md) | 2026-10-24T11:54:14.556160+00:00 | 289859 | c4b793bd6555bf699c1f6ef61fb9052e6400df8f475c97fdae25ba5084531dfb |
| [https://github.com/github/copilot-cli/releases/tag/v1.0.100](https://github.com/github/copilot-cli/releases/tag/v1.0.100) | 2026-10-24T11:51:25.177995+00:00 | 42870 | 3c88d5a9584e314a49da169be76cc32cf6b63b92b0976021bee3cf605114246d |
| [https://github.com/github/copilot-cli/releases/tag/v1.0.101](https://github.com/github/copilot-cli/releases/tag/v1.0.101) | 2026-10-24T11:51:26.766253+00:00 | 40485 | 54354bfaac848160d136da418de2eadd2b3fca608af3b454fefb382ca413869a |
| [https://github.com/github/copilot-cli/releases/tag/v1.0.102](https://github.com/github/copilot-cli/releases/tag/v1.0.102) | 2026-10-24T11:54:34.266194+00:00 | 38148 | 3a4e4e8d24f312bef148828c2f9e7116b0eb788a1b21b1d46501588f07262e6c |
| [https://github.com/github/copilot-cli/releases/tag/v1.0.103](https://github.com/github/copilot-cli/releases/tag/v1.0.103) | 2026-10-24T11:51:26.240418+00:00 | 38582 | f07719a61e3484adb99deee986fbf92ef51168db673e0e87e0c78c3252b7542f |
| [https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L494-L515](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L494-L515) | 2026-10-24T11:51:26.727343+00:00 | 74935 | 287b8614c01f6af20b62c62f4a7694b8a13108455a2afc81f83ba76b5db78e07 |
| [https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md) | 2026-10-24T11:51:26.506978+00:00 | 39966 | da29834c3fcefd178611d7cf6e09d6c4efb2c5308d6a33428aa93171ee1d9dc6 |
| [https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L253-L261](https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L253-L261) | 2026-10-24T11:54:34.012893+00:00 | 39966 | da29834c3fcefd178611d7cf6e09d6c4efb2c5308d6a33428aa93171ee1d9dc6 |
| [https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.6](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.6) | 2026-10-24T11:55:15.095952+00:00 | 16695 | 405d3ec3bd6bfdc41232dd209921afd6406c99402997157ce9d36c555f6f34d7 |
| [https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.7](https://github.com/google-antigravity/antigravity-cli/releases/tag/1.4.7) | 2026-10-24T11:55:14.635083+00:00 | 16637 | 165f9152f82db6fa684b0423c49ece4500e94eb6deb6e4d35d00cdf90ff90040 |
| [https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/commands/mcp/add.ts#L45-L66](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/commands/mcp/add.ts#L45-L66) | 2026-10-24T11:55:16.640269+00:00 | 7934 | 338dee9d6ce6828353581084f1567bf85ce6707145d2f98829ec35717ca4e4d6 |
| [https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github.ts](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/extensions/github.ts) | 2026-10-24T11:54:11.776263+00:00 | 17845 | 395e33f12c50c601220f31676db60ac6f994cab8fc3cdf6b24996d9df8096309 |
| [https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/ui/hooks/atCommandProcessor.ts#L535-L549](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/ui/hooks/atCommandProcessor.ts#L535-L549) | 2026-10-24T11:50:39.053159+00:00 | 25463 | 5ecee598b43835d3fe0d266166d78e05b1cacf08175789c1ae92a688a193ab72 |
| [https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/vscode-ide-companion/src/ide-server.ts#L423-L475](https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/vscode-ide-companion/src/ide-server.ts#L423-L475) | 2026-10-24T11:54:34.740743+00:00 | 17571 | 715a787d5e11fd50464ad6031a876af67916aac5e7b05d6804779f27e7687081 |
| [https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/README.md](https://github.com/google-gemini/gemini-cli/blob/v0.66.0-preview.0/README.md) | 2026-10-24T11:54:34.021436+00:00 | 12107 | 7235196f55461732c246c20ce9996cc56ba2e52641f183ccf4e6493bd93c1c94 |
| [https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/hooks/migrate.ts#L65-L105](https://github.com/google-gemini/gemini-cli/blob/v0.67.0-nightly.20261024.gcd1b45c2d/packages/cli/src/commands/hooks/migrate.ts#L65-L105) | 2026-10-24T11:54:33.861406+00:00 | 8595 | 233f039e0edf1d98be5828a1a057fd8e31a586738ed1db7a49763e93a8765990 |
| [https://github.com/google-gemini/gemini-cli/commit/204db94ae2a33f70afec7400ebf6b78f1b5e2575](https://github.com/google-gemini/gemini-cli/commit/204db94ae2a33f70afec7400ebf6b78f1b5e2575) | 2026-10-24T11:53:27.279861+00:00 | 46858 | 2df39e0a422ceb18898fdd25a444fcdc34ada7a3ea3b9e9a92e9be94e1c1828a |
| [https://github.com/google-gemini/gemini-cli/commit/5b36aacf5bf3d044badc881063f7671598c27c9d](https://github.com/google-gemini/gemini-cli/commit/5b36aacf5bf3d044badc881063f7671598c27c9d) | 2026-10-24T11:58:26.250921+00:00 | 12262 | 89d5699cb742001a8429f8172bde7bc94f643c89b4e03dea41125834559701e6 |
| [https://github.com/google-gemini/gemini-cli/commit/8b5cb8a6491e17b2dd3ba0cfb49fcfe41c48c4a3](https://github.com/google-gemini/gemini-cli/commit/8b5cb8a6491e17b2dd3ba0cfb49fcfe41c48c4a3) | 2026-10-24T11:50:40.299631+00:00 | 47181 | 8f27c58c351c72906de54d617fdf4a73e8c6fa8ac7c7bfe73b1e2a3b21f15e06 |
| [https://github.com/google-gemini/gemini-cli/commit/9b6e0265d16bbd29ca51e33c9e0c01dc4cec5e83](https://github.com/google-gemini/gemini-cli/commit/9b6e0265d16bbd29ca51e33c9e0c01dc4cec5e83) | 2026-10-24T11:50:38.559415+00:00 | 24083 | b35a06f1554b474815e25dab332f64e0c5cf95c17e9e2e8761434f4e24ce28b5 |
| [https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0) | 2026-10-24T11:53:05.198000+00:00 | 10494 | f2b4feebea1af9b5c1cc83099f62042b805f11a315788e6ed5d23d54f7db72a1 |
| [https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0) | 2026-10-24T11:53:27.380012+00:00 | 11042 | e3952d4e0e039560f46d5d8fcb70d02a48ff2071ac0a0465052c5eeb2547faa9 |
| [https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/CHANGELOG.md) | 2026-10-24T11:50:21.922648+00:00 | 149728 | 3144e317ad4994ac1203b5429e99524fd531085f438ae2116c2bd74333c0c02a |
| [https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/codemode-bridge.ts](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/codemode-bridge.ts) | 2026-10-24T11:50:21.575661+00:00 | 5865 | 8cacc3cb1daf1135bf15a4f607509f4b11f324718889084fb6742a5b44898c89 |
| [https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/README.md](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/README.md) | 2026-10-24T11:50:21.521012+00:00 | 17152 | 398489370bbe44f35e2f70fcd9d64afe64ff4903fc60a667e3710ec5752a68c9 |
| [https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/tool-approval.ts](https://github.com/nicobailon/pi-mcp-adapter/blob/v6.0.0/tool-approval.ts) | 2026-10-24T11:50:21.588336+00:00 | 9415 | 18e36e2a8814a9bb3e8bd9c5e8de7b2eb42e91b2f5977cc7a3dfaced5baa1deb |
| [https://github.com/NousResearch/hermes-agent/actions/runs/39889504159](https://github.com/NousResearch/hermes-agent/actions/runs/39889504159) | 2026-10-24T11:54:44.152656+00:00 | 5113913 | 42350dc3716b1b7e4df37c906b9fa4b2f538b8ab7a5531aa2e3b68b2c9b18794 |
| [https://github.com/NousResearch/hermes-agent/blob/v0.22.5/gateway/host_rendezvous.py](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/gateway/host_rendezvous.py) | 2026-10-24T11:54:39.288471+00:00 | 34705 | 52d4e5a5ee3d1802f0a4d0fd06a482ff46c783b5befe3d85a2ecd155fe7cc903 |
| [https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/gateway_chat.py](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/gateway_chat.py) | 2026-10-24T11:50:38.443319+00:00 | 21899 | 9b5def2acc8291bd4eef9f7bcdf5605beaed97cd06d18c9a1a811a7befaff532 |
| [https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/left_core_migration.py#L239-L278](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/left_core_migration.py#L239-L278) | 2026-10-24T11:54:38.921367+00:00 | 36073 | 197c21fe68d24f0f6df519fcbed22b6d6be8e3fe85765e0663c50efc06b9a05d |
| [https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md](https://github.com/NousResearch/hermes-agent/blob/v0.22.5/website/docs/developer-guide/gateway-classic-cli.md) | 2026-10-24T11:50:38.200304+00:00 | 7521 | 52b0c0f940f06eeb7dab843a2536b8d5f7e982fdf8c45797e7640b6b3ea5b1b9 |
| [https://github.com/NousResearch/hermes-agent/commit/876e37c07746642da12a59bf2088c3fcfdda6f6c](https://github.com/NousResearch/hermes-agent/commit/876e37c07746642da12a59bf2088c3fcfdda6f6c) | 2026-10-24T11:50:39.034337+00:00 | 42139 | bee4fe496867395c641637d2afbd9a104e08f91721ec7a30dcaf1f810b3fa2fb |
| [https://github.com/NousResearch/hermes-agent/commit/ce11b6be1af2b1defe4b461b79a451a02af96a9f](https://github.com/NousResearch/hermes-agent/commit/ce11b6be1af2b1defe4b461b79a451a02af96a9f) | 2026-10-24T11:58:26.901146+00:00 | 15153 | 8e821b50419e4cf1e3f67c60bf10230648bd0c44c89925f69a3366334e2148fd |
| [https://github.com/NousResearch/hermes-agent/commit/eea7c437ebd66e5ffbf9e525abe915f25e17d911](https://github.com/NousResearch/hermes-agent/commit/eea7c437ebd66e5ffbf9e525abe915f25e17d911) | 2026-10-24T11:50:38.342040+00:00 | 15331 | a4180845f9a3760c0bf8563c36844762a05200d7574c3fa8a46a8d4f8919f170 |
| [https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19) | 2026-10-24T11:53:05.722206+00:00 | 3701 | 2dc1669584152f8c38f140a67ecb6abd8cf8abdaae7ce92c6d72db313e948205 |
| [https://github.com/NousResearch/hermes-official-plugins/blob/6389dd08c1e485db708688c69e42c2b7a7360f4e/mcp-serve/README.md](https://github.com/NousResearch/hermes-official-plugins/blob/6389dd08c1e485db708688c69e42c2b7a7360f4e/mcp-serve/README.md) | 2026-10-24T11:54:38.852316+00:00 | 4766 | 4173b7c1b5d23992b5993ab8d153b067f04d7e516344729511d67b6763fc6aa4 |
| [https://github.com/omnigent-ai/omnigent/commit/7a12baaea202ebafef8c73022e9ed1dbd46f0970](https://github.com/omnigent-ai/omnigent/commit/7a12baaea202ebafef8c73022e9ed1dbd46f0970) | 2026-10-24T11:55:14.631427+00:00 | 26715 | 8d87b58f7ec18493bc6a0a3a2dcac49fd3b0ae95bd22eca35d5c59a491f4ec8b |
| [https://github.com/omnigent-ai/omnigent/commit/934dd6fd351dec238713e3fd2cc00738b7bb9542](https://github.com/omnigent-ai/omnigent/commit/934dd6fd351dec238713e3fd2cc00738b7bb9542) | 2026-10-24T11:55:15.924279+00:00 | 45955 | b846e76a3b4fe09c69006eb9c281da2737eb77e455e763a6177e9d338949efa0 |
| [https://github.com/omnigent-ai/omnigent/commit/c4498d7cfc391abd11ebdde9552dbb52f8296bd8](https://github.com/omnigent-ai/omnigent/commit/c4498d7cfc391abd11ebdde9552dbb52f8296bd8) | 2026-10-24T11:55:15.145081+00:00 | 28435 | d109629dc5c32435682e533c44d50b48613d5bc70ce854f60f7030c123768169 |
| [https://github.com/omnigent-ai/omnigent/compare/03beb88c01a966b04c6c762e723e8b4463dc16e0...v0.19.1](https://github.com/omnigent-ai/omnigent/compare/03beb88c01a966b04c6c762e723e8b4463dc16e0...v0.19.1) | 2026-10-24T11:53:34.227705+00:00 | 2914266 | 12ca0e193f33a4edeb23a72fdc30f75cc91d8e039bc112b47986f53861242899 |
| [https://github.com/omnigent-ai/omnigent/compare/6cf6acf2fde6b80ec929e0b1565ec5e50e6f7306...v0.19.1](https://github.com/omnigent-ai/omnigent/compare/6cf6acf2fde6b80ec929e0b1565ec5e50e6f7306...v0.19.1) | 2026-10-24T11:53:33.703517+00:00 | 2910630 | e37405fe06ab5b865197794fc4fdcb67921826dce8f9888acec29533be36d538 |
| [https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L48-L70](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L48-L70) | 2026-10-24T11:50:40.556722+00:00 | 11200 | 65025a735da6fa63609e469de6d165d3ac3e91ccd5106703dc4e1fc35d52c42e |
| [https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464) | 2026-10-24T11:52:39.732897+00:00 | 185257 | ac51c153916132c0be2c37ea1136562685b832957bc2e43e53d71608d0b28a4a |
| [https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890) | 2026-10-24T11:54:13.538299+00:00 | 33612 | 8fdc85c3ccfb66cc41855622cd3219c43d3d55930c7a0e2595f29caaa74f895d |
| [https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1940-L1949](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1940-L1949) | 2026-10-24T11:53:03.805570+00:00 | 76503 | 53c99aa1176c0f4f8763cbf960f11eb574f63fb33214f2bcd3bf699ebb361337 |
| [https://github.com/openai/codex/commit/398500106707f0a3217c7cf83edc2bf226cc342f](https://github.com/openai/codex/commit/398500106707f0a3217c7cf83edc2bf226cc342f) | 2026-10-24T11:58:26.204410+00:00 | 32084 | 934090778446b029fb61a1acf8bbade6c5c54592dca401e4b05dc43e683c9e8a |
| [https://github.com/openai/codex/commit/61a991990fa4fd0c511ccaaab3875371796be956](https://github.com/openai/codex/commit/61a991990fa4fd0c511ccaaab3875371796be956) | 2026-10-24T11:58:27.256492+00:00 | 9906 | 6d46ceb7abb002e7e598a5c19dd62ab45192516d08d2f5afea8b9ee595afd3c2 |
| [https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8) | 2026-10-24T11:50:40.348966+00:00 | 7747 | a6ce6020b2c7551093f09dfd3fcba671e68ab468252de508949c69264ea4bb83 |
| [https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/src/infra/exec-safe-builtins.ts](https://github.com/openclaw/openclaw/blob/v2026.10.10-beta.3/src/infra/exec-safe-builtins.ts) | 2026-10-24T11:51:24.414526+00:00 | 1233 | d1b71e49b55facf346263a0bf37bc960b746544d27f6e4ff8c15b4748e30aa8b |
| [https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/anthropic.md#L906-L969](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/anthropic.md#L906-L969) | 2026-10-24T11:54:38.430634+00:00 | 51730 | b44681eb05506d3253c20839dff34df439049e2d32d8cda2d00f7a2c1778d9f2 |
| [https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/openai/advanced.md#L353-L362](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/providers/openai/advanced.md#L353-L362) | 2026-10-24T11:54:37.994822+00:00 | 19439 | 1939a051f5a1b3d6773817b6ce62ef140421d295db66da0d3d8dffc1f9d871e9 |
| [https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/self-learning.md](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/self-learning.md) | 2026-10-24T11:51:39.940915+00:00 | 7618 | 35d25685de9e3158f6a4c7b5711ac377e67c0bb15eefa3b16222b968fe5d5898 |
| [https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md](https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/tools/skill-workshop.md) | 2026-10-24T11:51:40.066149+00:00 | 16210 | e080d9a0b12617030155c80de47089167158eae199fe8b07f1a47276770ce99a |
| [https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/telegram/src/telegram-ingress-spool-migration.ts](https://github.com/openclaw/openclaw/blob/v2026.10.7/extensions/telegram/src/telegram-ingress-spool-migration.ts) | 2026-10-24T11:54:37.695030+00:00 | 11309 | 51b2141b111a514fa436a11929bf36228badf56de6a73dee65e93b300a1b2da2 |
| [https://github.com/openclaw/openclaw/blob/v2026.10.7/package.json](https://github.com/openclaw/openclaw/blob/v2026.10.7/package.json) | 2026-10-24T11:51:41.820899+00:00 | 146246 | 50f15c94adb967759861663441df3f897cad6dbe799d81e8739b5392ff672daf |
| [https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436) | 2026-10-24T11:51:24.719933+00:00 | 18558 | 4f41628946b3002efbddb7d4913bae654762ba688bd2bea20c8781b68eeb2125 |
| [https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/doctor/shared/legacy-config-migrations.runtime.skills.ts](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/commands/doctor/shared/legacy-config-migrations.runtime.skills.ts) | 2026-10-24T11:51:39.916221+00:00 | 3496 | 4448bb9b2f95a1410a7f0ff3e1d149d2411cec8873b82ac0e325eb68c2f0d23d |
| [https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/exec-safe-builtins.ts](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/infra/exec-safe-builtins.ts) | 2026-10-24T11:51:24.412711+00:00 | 1233 | d1b71e49b55facf346263a0bf37bc960b746544d27f6e4ff8c15b4748e30aa8b |
| [https://github.com/openclaw/openclaw/blob/v2026.10.7/src/skills/workshop/skill-versions.ts](https://github.com/openclaw/openclaw/blob/v2026.10.7/src/skills/workshop/skill-versions.ts) | 2026-10-24T11:51:39.920974+00:00 | 3968 | 04eb9cc974ef90ff7641249e0d047aa42a7bc7acbbd705b394608033035dde9e |
| [https://github.com/openclaw/openclaw/blob/v2026.9.33/docs/gateway/config-tools/sessions-and-subagents.md](https://github.com/openclaw/openclaw/blob/v2026.9.33/docs/gateway/config-tools/sessions-and-subagents.md) | 2026-10-24T11:54:37.818329+00:00 | 9632 | 74ab4d75d66a79ef2302fd0d8c8ba67494fcf4b3e393f98dae173cc87ae6a9de |
| [https://github.com/openclaw/openclaw/blob/v2026.9.33/src/agents/agent-tools.before-tool-call.policy.ts#L330-L436](https://github.com/openclaw/openclaw/blob/v2026.9.33/src/agents/agent-tools.before-tool-call.policy.ts#L330-L436) | 2026-10-24T11:53:07.189026+00:00 | 19696 | 568f5d66454c0ae1e0ee28f442fc853e9abba9638a85f0fc9c2951f282e4a19a |
| [https://github.com/openclaw/openclaw/blob/v2026.9.33/src/infra/exec-safe-builtins.ts](https://github.com/openclaw/openclaw/blob/v2026.9.33/src/infra/exec-safe-builtins.ts) | 2026-10-24T11:51:24.721776+00:00 | 1233 | d1b71e49b55facf346263a0bf37bc960b746544d27f6e4ff8c15b4748e30aa8b |
| [https://github.com/openclaw/openclaw/blob/v2026.9.34/docs/gateway/config-tools/sessions-and-subagents.md](https://github.com/openclaw/openclaw/blob/v2026.9.34/docs/gateway/config-tools/sessions-and-subagents.md) | 2026-10-24T11:58:26.998274+00:00 | 9632 | 74ab4d75d66a79ef2302fd0d8c8ba67494fcf4b3e393f98dae173cc87ae6a9de |
| [https://github.com/openclaw/openclaw/blob/v2026.9.34/src/agents/agent-tools.before-tool-call.policy.ts#L330-L436](https://github.com/openclaw/openclaw/blob/v2026.9.34/src/agents/agent-tools.before-tool-call.policy.ts#L330-L436) | 2026-10-24T11:58:27.042403+00:00 | 19696 | 568f5d66454c0ae1e0ee28f442fc853e9abba9638a85f0fc9c2951f282e4a19a |
| [https://github.com/openclaw/openclaw/blob/v2026.9.34/src/infra/exec-safe-builtins.ts](https://github.com/openclaw/openclaw/blob/v2026.9.34/src/infra/exec-safe-builtins.ts) | 2026-10-24T11:56:11.038524+00:00 | 1233 | d1b71e49b55facf346263a0bf37bc960b746544d27f6e4ff8c15b4748e30aa8b |
| [https://github.com/openclaw/openclaw/commit/68c3f3fb660c5dd808231199b0fe265ea26086f2](https://github.com/openclaw/openclaw/commit/68c3f3fb660c5dd808231199b0fe265ea26086f2) | 2026-10-24T11:58:26.385348+00:00 | 27388 | 610e406a5cc634dde28ecd86e04e562e58bda5d30627ebe8a20a9c1112283c07 |
| [https://github.com/openclaw/openclaw/commit/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8](https://github.com/openclaw/openclaw/commit/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8) | 2026-10-24T11:51:24.750135+00:00 | 13878 | 726dab6fa9e8753a9e1b8f624bf3ccad9fe9eb06f79f6133a0eb84e5ac80d8b2 |
| [https://github.com/openclaw/openclaw/commit/7abbf8507aa2fc52952621a497ece0e019b2748e](https://github.com/openclaw/openclaw/commit/7abbf8507aa2fc52952621a497ece0e019b2748e) | 2026-10-24T11:58:26.250681+00:00 | 29409 | 79cdc984a2131e7a2976b1ce1f914671496e030349659de8f3fe5bef2812d227 |
| [https://github.com/openclaw/openclaw/commit/803744916a8f168a7c82e346bf6d37065a04780f](https://github.com/openclaw/openclaw/commit/803744916a8f168a7c82e346bf6d37065a04780f) | 2026-10-24T11:54:38.102900+00:00 | 19251 | 8669de0192e42e1585dcbfabb2f92da0f0bd48cb46d8e2dd745a6cbb7796a4c0 |
| [https://github.com/openclaw/openclaw/commit/a19f1bf9eb6e5b22343c144a387a945d2cbc3525](https://github.com/openclaw/openclaw/commit/a19f1bf9eb6e5b22343c144a387a945d2cbc3525) | 2026-10-24T11:54:38.836814+00:00 | 38355 | ad4fdd2a19cf64fb51a4457bbeaf17076686d612cea4dfb93c18a6df1f47f7b2 |
| [https://github.com/openclaw/openclaw/compare/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8...v2026.9.34](https://github.com/openclaw/openclaw/compare/69cd9c5edb96b5bd990e97030a45c01f9f8c10a8...v2026.9.34) | 2026-10-24T11:56:13.125522+00:00 | 2275280 | 0a6be2585e22b2116efe48ed2e86662584afaec901adfd9a2d5957b1be7a82c0 |
| [https://github.com/openclaw/openclaw/compare/ab5611f0...v2026.8.35](https://github.com/openclaw/openclaw/compare/ab5611f0...v2026.8.35) | 2026-10-24T11:53:09.882364+00:00 | 2661795 | e31bd9c84d9483d2294b8ef32d0fd5cfd3e93f8b88e8008e99f3bc9906e9e6ff |
| [https://github.com/openclaw/openclaw/compare/v2026.9.33...v2026.9.34](https://github.com/openclaw/openclaw/compare/v2026.9.33...v2026.9.34) | 2026-10-24T11:59:21.429487+00:00 | 1700034 | f70cc17ee3b94745b15cc33571ed9e80c58475895deac16d073e268aa56f4f5e |
| [https://github.com/openclaw/openclaw/issues/114382](https://github.com/openclaw/openclaw/issues/114382) | 2026-10-24T11:54:39.167394+00:00 | 430709 | 6b73339537b6654838e067fd2d8127a3c528a9e91534487f1a310e715a8a7a38 |
| [https://github.com/openclaw/openclaw/releases/tag/v2026.9.34](https://github.com/openclaw/openclaw/releases/tag/v2026.9.34) | 2026-10-24T11:56:11.673962+00:00 | 17137 | a545034fa72999a05d6e31cb92b44789523defb16d8c9e7668f60e549b76a052 |
| [https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114](https://github.com/OpenHands/extensions/blob/v0.35.0/automations/catalog/github-repo-monitor/manifest.json#L78-L114) | 2026-10-24T11:50:39.374134+00:00 | 6476 | 6eb75712dad487722d43b745c15fb68f00a4b6f69666b4013e747957713c35b5 |
| [https://github.com/OpenHands/extensions/blob/v0.35.0/skills/github-repo-monitor/scripts/main.py#L641-L663](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/github-repo-monitor/scripts/main.py#L641-L663) | 2026-10-24T11:50:39.647078+00:00 | 44046 | 517e5b5ee1c8f3824d916e8a94655a68fb4c04ff5457feb6e87409e8d8c8aead |
| [https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/README.md](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/README.md) | 2026-10-24T11:50:39.429451+00:00 | 2868 | ef6fa9e6254dbaeccb62b256202f26934a0a392b7704ed97c54f67eee1edea44 |
| [https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/SKILL.md](https://github.com/OpenHands/extensions/blob/v0.35.0/skills/software-factory/SKILL.md) | 2026-10-24T11:56:10.973708+00:00 | 12983 | a103b0d878a98521df2adef56d9bb910da1cf21f5975299d6a31b4e234ca05dc |
| [https://github.com/OpenHands/extensions/commit/5f0bc702a65b2165e4406227d845b87efd5d445a](https://github.com/OpenHands/extensions/commit/5f0bc702a65b2165e4406227d845b87efd5d445a) | 2026-10-24T11:57:21.087212+00:00 | 20266 | 4a2989e39a53b229c30db21a62a4701e63e1c4aafbb5e928590f9d531964dc58 |
| [https://github.com/OpenHands/OpenHands/blob/v1.32.0/package.json](https://github.com/OpenHands/OpenHands/blob/v1.32.0/package.json) | 2026-10-24T11:57:21.325522+00:00 | 9814 | ee3b15e1a67d009d4789cd05d9642d4e5e721b95e73f2caac5030a91ecf3ad0d |
| [https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json](https://github.com/OpenHands/OpenHands/blob/v1.33.0/package.json) | 2026-10-24T11:50:39.744371+00:00 | 9814 | cae3c60b82ddb412a8a86b19ee2f9498505814e8c0a6327924c4876825492ea4 |
| [https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L927-L935](https://github.com/OpenHands/OpenHands/blob/v1.33.0/scripts/dev-with-automation.mjs#L927-L935) | 2026-10-24T11:53:27.208871+00:00 | 71389 | 87bc3e5afa78d61c4d395fb69c76cbe53bcd8e516b549ff86994428d101a5c8c |
| [https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/services/secret-request.ts](https://github.com/OpenHands/OpenHands/blob/v1.33.0/src/services/secret-request.ts) | 2026-10-24T11:53:26.672510+00:00 | 4231 | a0b1a08388f03874637d7ba94822142e6c2a3f7871f308c693f5032ff60168be |
| [https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-agent-server/openhands/agent_server/settings_router.py#L539-L569) | 2026-10-24T11:53:27.043714+00:00 | 26067 | afcc952efc6564ce6f6fb370242ca0193969fbcedd2e19c48d7725dddc8de507 |
| [https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/subagent/scope.py](https://github.com/OpenHands/software-agent-sdk/blob/v1.58.1/openhands-sdk/openhands/sdk/subagent/scope.py) | 2026-10-24T11:54:39.375088+00:00 | 4304 | 3574ccf2b7975d04b020e3d1ebee6700c80d989db08d12b9bb7a7e5e53120c9e |
| [https://github.com/OpenHands/software-agent-sdk/commit/87bec04de8e08117399d5cab68042cc794bc2199](https://github.com/OpenHands/software-agent-sdk/commit/87bec04de8e08117399d5cab68042cc794bc2199) | 2026-10-24T11:55:08.856853+00:00 | 15063 | b94a9f5120980bee998e6624d079b2e5c7467a520b76c8e7c1ebe6915a60a947 |
| [https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/DATABASE.md#L1106-L1113](https://github.com/paperclipai/paperclip/blob/d69631b01b9c658f80bf8bed389863dce82643e1/doc/DATABASE.md#L1106-L1113) | 2026-10-24T11:55:08.793615+00:00 | 68374 | ea926719beee9b4dd90c9ec1b2a6bd1631c2776bc7862fb5c4dcf8908ba31f05 |
| [https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/BROWSER-USE.md#L154-L191](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/connections/BROWSER-USE.md#L154-L191) | 2026-10-24T11:55:08.460451+00:00 | 26074 | 31dc6275c100c05912d97e2db79cd548046adfe4e0584815b58b4997629cb834 |
| [https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/plans/2026-10-05-plan-task-guidance.md#L44-L85](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/plans/2026-10-05-plan-task-guidance.md#L44-L85) | 2026-10-24T11:55:08.386217+00:00 | 6382 | d1d251bf5d93a2911397e82277ae1d34f43243ea46924945bd6d9e70b7f3cf16 |
| [https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L56](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/doc/workspace-restore-locks.md#L42-L56) | 2026-10-24T11:51:42.537404+00:00 | 6676 | 6703ee8ddb0e569566074bc7ddfa07e8a941881982c73daf1ae42beac5868c95 |
| [https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/accounting-transaction.ts](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/accounting-transaction.ts) | 2026-10-24T11:57:21.791992+00:00 | 2142 | 837105317998921b8583810ead73fb8182208420b3709d7073b8fd0cba727635 |
| [https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budget-reservations.ts](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budget-reservations.ts) | 2026-10-24T11:57:21.663535+00:00 | 5434 | 9a3a6249fea5d767330230362cc1142c1062fbcdc20b97abe2c8e3bbc63e9afb |
| [https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budgets.ts#L224-L230](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/budgets.ts#L224-L230) | 2026-10-24T11:51:42.926783+00:00 | 43807 | 039f48fb626d264488e96ce6da0bc324e9d96f8736c9bc11140aec52a33213f2 |
| [https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/company-member-roles.ts#L57-L73](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/company-member-roles.ts#L57-L73) | 2026-10-24T11:51:42.559406+00:00 | 3592 | a142c602eb94a381c3e9f28009d33eb8454d9a53b1757088002bbfec78203a21 |
| [https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/native-runtime/codex-runtime-compatibility.ts) | 2026-10-24T11:51:42.951714+00:00 | 1909 | 1a56a533122c9edaf6586b881b927b68ba31c9332daac4f9e64a7e7d0a1b2d34 |
| [https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135) | 2026-10-24T11:51:42.021847+00:00 | 4040 | 48b99175828e429a65908574d62ad57e4addb9e5822866a94acee19d74db9d9a |
| [https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/run-cost-accounting.ts](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/run-cost-accounting.ts) | 2026-10-24T11:51:41.730704+00:00 | 14285 | c49ae364340d359706ded0ba2711f3fc33e6bfb97f3c8078b955bb07b7af0954 |
| [https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/usage-receipts.ts](https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/usage-receipts.ts) | 2026-10-24T11:57:21.901187+00:00 | 21246 | 5d9bc80d264e75152d1f33395a3e6f706ac51a2248053d4c606eb4ecdbde281e |
| [https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9](https://github.com/paperclipai/paperclip/commit/2a56e5c7347e3a2ab99298f3fb84e6312b2ebeb9) | 2026-10-24T12:06:37.171419+00:00 | 30134 | 999c10e4262a53bf6a5c534968fbeea477f165b32c9a81042745881c3bc519ea |
| [https://github.com/paperclipai/paperclip/commit/6dda8cc2b75e211dc62af264bfd0994f602099d1](https://github.com/paperclipai/paperclip/commit/6dda8cc2b75e211dc62af264bfd0994f602099d1) | 2026-10-24T11:55:12.124899+00:00 | 262760 | d15f9a95dfd199ae8e9602f2055850f8485cae82cc3eddb4284996f234e9e9a3 |
| [https://github.com/paperclipai/paperclip/commit/880d4ae60fa691305a4703d4e25e367b63c2a7d7](https://github.com/paperclipai/paperclip/commit/880d4ae60fa691305a4703d4e25e367b63c2a7d7) | 2026-10-24T11:55:09.819300+00:00 | 23921 | 596a6cabc18110c64dd371d521d8bfb4e20e644bd81fbb88859a155418086d5a |
| [https://github.com/paperclipai/paperclip/commit/fc3b15537b00f7cd50329926e24ea0c20487fad5](https://github.com/paperclipai/paperclip/commit/fc3b15537b00f7cd50329926e24ea0c20487fad5) | 2026-10-24T11:54:12.645769+00:00 | 216815 | 3bdc2b5026ee7d983dffb3262a7e2992250c57f670c3596ddd91829059a3e120 |
| [https://github.com/paperclipai/paperclip/compare/c2cfd55e...v2026.831.0](https://github.com/paperclipai/paperclip/compare/c2cfd55e...v2026.831.0) | 2026-10-24T11:53:09.350516+00:00 | 3748386 | 30a4c1b287a03ba4a306f68b3b45e85c02c42d129c4f941992771e760f0b887b |
| [https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0) | 2026-10-24T11:51:41.218005+00:00 | 34721 | bdb34135d51a9cb53f41979fc5133cf69607e61483589bde43fb5385c67e83b3 |
| [https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.824.0) | 2026-10-24T11:53:03.495350+00:00 | 29363 | e05e3cd55064b69014670cc3e6bfe19a540abc60337c6f60374d7362316abfdf |
| [https://github.com/pixee/compaction-laundering/blob/9ce87b71301c628dfcd9232b01f1ccbdb0e67b16/disclosure/pi.md](https://github.com/pixee/compaction-laundering/blob/9ce87b71301c628dfcd9232b01f1ccbdb0e67b16/disclosure/pi.md) | 2026-10-24T11:54:34.884495+00:00 | 10694 | 722f8d9dd5f269bf20556c6c194b39732946ffc05d8786ec63ed4653e563c7d0 |
| [https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0](https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0) | 2026-10-24T11:54:11.647220+00:00 | 2612 | 8154e62e54cc516ff6716722a0b9664f506c63982d7cb222c5251a46ba28f418 |
| [https://github.com/vercel/eve/commit/12a1e90627ae04681271d0f6c5be522784ed82f2](https://github.com/vercel/eve/commit/12a1e90627ae04681271d0f6c5be522784ed82f2) | 2026-10-24T11:55:11.252539+00:00 | 104939 | d455cf71f77fcade42984376a50116e0c965128202d5c234f04ea643a966cfe7 |
| [https://github.com/vercel/eve/commit/45f04c95e0a6fb4cae9cea587b55e71d15c1968b](https://github.com/vercel/eve/commit/45f04c95e0a6fb4cae9cea587b55e71d15c1968b) | 2026-10-24T11:55:11.446926+00:00 | 9157 | b8a1b8dfc088ae2c8d976af79f9d23dc87f0c699533ffe32f28a8b5a5190d574 |
| [https://github.com/vercel/eve/commit/8b68a9283881c9ee750d83565873fd05c7e4d641](https://github.com/vercel/eve/commit/8b68a9283881c9ee750d83565873fd05c7e4d641) | 2026-10-24T11:53:06.475343+00:00 | 387459 | 65588e129e6eaec489975094c160e16f48e894201d9da292826e50223720ed9b |
| [https://github.com/vercel/eve/commit/c543585422cae0faf200965027bd53ac5cadc82a](https://github.com/vercel/eve/commit/c543585422cae0faf200965027bd53ac5cadc82a) | 2026-10-24T11:55:11.954023+00:00 | 231508 | 3f02cc75f3f8703cdf9829ea6e397be2fef4cdd9cca8494f8617843c056b41f8 |
| [https://github.com/vercel/eve/compare/0dea0ded869be7db30ae90ed8072d29e6e57df61...649b511efde1f3ceff50e225f0c95ae76d795a71](https://github.com/vercel/eve/compare/0dea0ded869be7db30ae90ed8072d29e6e57df61...649b511efde1f3ceff50e225f0c95ae76d795a71) | 2026-10-24T11:53:07.203363+00:00 | 661084 | 887f3f4fe1cfed8b80fedf361ddf275f2c7f1d4c6d06c42c60de7ef3c9ebe144 |
| [https://github.com/vercel/eve/releases/tag/eve%400.79.1](https://github.com/vercel/eve/releases/tag/eve%400.79.1) | 2026-10-24T11:55:17.245942+00:00 | 7335 | c92a7982971347c06017dc020feae203303bc7185b832400266e100ab3e9d312 |
| [https://github.com/vercel/eve/releases/tag/eve%400.81.0](https://github.com/vercel/eve/releases/tag/eve%400.81.0) | 2026-10-24T11:53:06.970791+00:00 | 6851 | 2959a90cdbee047dfd5d8417f97fba9f3fe2da5955dce668f01a82fdd71103a2 |
| [https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.60.external.md?generation=1792101112986009](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.60.external.md?generation=1792101112986009) | 2026-10-24T11:53:28.461516+00:00 | 6958 | 4028307126bf35cb770c5aecb1a15ecef5e77f53ef87c195193d20d211bff55d |
| [https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.67.external.md?generation=1792628778974656](https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.67.external.md?generation=1792628778974656) | 2026-10-24T11:53:28.706772+00:00 | 6746 | d9d6c638cb2f0db7402d58c5d353b59de717fe997c1a4f5b2c0d4ede8e1ed4b9 |
| [https://storage.googleapis.com/grok-build-public-artifacts/cli/stable?generation=1792806466279791](https://storage.googleapis.com/grok-build-public-artifacts/cli/stable?generation=1792806466279791) | 2026-10-24T11:59:20.977299+00:00 | 6 | f56579b5dab68a821e662fbe9c4d132a68422f1e79f6fc88cba3116017e80980 |
| [https://web.archive.org/web/20261002225942/https://cursor.com/changelog/rollouts-and-security-reviewer](https://web.archive.org/web/20261002225942/https://cursor.com/changelog/rollouts-and-security-reviewer) | 2026-10-24T11:57:49.847177+00:00 | 164760 | c4b158eb0853d69020d7a28b80e63000bb2b52119cd7d7400a6f9b5a47341975 |
| [https://web.archive.org/web/20261017030656/https://code.claude.com/docs/en/code-review](https://web.archive.org/web/20261017030656/https://code.claude.com/docs/en/code-review) | 2026-10-24T11:57:50.446565+00:00 | 494513 | f32d6525b5033e6b6d95f19be5d392fcfa8f950e749adec8ebd5279f74d90939 |
| [https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp](https://web.archive.org/web/20261024085041/https://code.claude.com/docs/en/mcp) | 2026-10-24T11:59:24.740053+00:00 | 1537033 | 3769e2c780a6f07f1ee299547adc6ec4ecedda94c711f01f1cd4707bef283a35 |
| [https://web.archive.org/web/20261024092716/https://cursor.com/docs/origin](https://web.archive.org/web/20261024092716/https://cursor.com/docs/origin) | 2026-10-24T11:57:50.045374+00:00 | 255858 | 976ed9ac4d17a87fa7e5b96d276b3f03ce9392738ec0d27113cde3563a67c367 |
| [https://web.archive.org/web/20261024093747id_/https://cursor.com/docs/api/origin/reference/inbound-ip-allowlist.md](https://web.archive.org/web/20261024093747id_/https://cursor.com/docs/api/origin/reference/inbound-ip-allowlist.md) | 2026-10-24T11:54:16.604950+00:00 | 2948 | 5e31e3eba97c07e5d5396595906b60278da54f950707bbb01ef364513832b8f9 |
| [https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md](https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md) | 2026-10-24T11:51:48.047943+00:00 | 60398 | d3eaf5c9b2793062ea0f319c0f7fd170e42f94712cd738170b32348a6c4bb399 |
| [https://web.archive.org/web/20261024094024/https://cursor.com/docs/api/origin/changelog.md](https://web.archive.org/web/20261024094024/https://cursor.com/docs/api/origin/changelog.md) | 2026-10-24T11:54:16.264180+00:00 | 8920 | 615aeb247717c7aab64fc71d510fc5aa7554dca3ca0431485c00b8cc35178e80 |
| [https://web.archive.org/web/20261024094024id_/https://cursor.com/docs/api/origin/changelog.md](https://web.archive.org/web/20261024094024id_/https://cursor.com/docs/api/origin/changelog.md) | 2026-10-24T11:59:21.196540+00:00 | 173394 | 4b9872b17788dbf015e3b641317f9e42543959b8a52f474e52c1989d12afaedc |
| [https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md](https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md) | 2026-10-24T11:51:47.279878+00:00 | 13519 | 70c15d0213362cc905b6279c3cdbc5d64bf8aef83c7a18320323631562076bb2 |

## Validation and write scope

The required command `node site/scripts/check-integrity.mjs` exited 0:

```text
integrity check: clean
  1554 findings indexed, 226 signal records indexed (225 accepted, 1 withdrawn)
  23 watchlist sources, 3 adjacent (3 referenced)
```

The focused structural check also passed: 14 signals, 20 distinct existing accepted finding IDs with matching source IDs, 41 action lines, and 32 carry-forward questions preserved verbatim in their original order. All 32 now have answers. YAML parsed successfully. All four authorized files use ASCII and contain no double-hyphen prose dash. No build was run.

Only signals/frontier-signals.yml, thread-check.md, verify/signals.crosscheck.md and /Users/c3po/co/frontier/tmp/cycle-2026-10-24/issue/carry-forward.yml were written. No git mutation, npm install, site build, downloaded-code execution or deployment test was performed.
