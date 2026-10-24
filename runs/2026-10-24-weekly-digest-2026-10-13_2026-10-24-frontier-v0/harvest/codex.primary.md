---
schema_version: bitter.frontier_harvest.v0
provider: codex
window: 2026-10-13..2026-10-24
run: 2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0
source_contract: sources/codex.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased, docs-only]
window_volume: "2 stable releases; 19 alpha release objects; 2 additional alpha tags without release objects; 35 numbered changes; 19 active profile claims re-checked"
lane: primary sources, profile-refresh researcher
---

# Harvest: codex (primary sources)

Identity: the source is [OpenAI's Codex repository](https://github.com/openai/codex/tree/rust-v0.164.0), whose [tagged README identifies the CLI and its npm and Homebrew installation paths](https://github.com/openai/codex/blob/rust-v0.164.0/README.md). The blobless, no-checkout clone at `tmp/cycle-2026-10-24/clones/codex/` has origin `https://github.com/openai/codex.git` and `remote.origin.partialclonefilter=blob:none`. This harvest distinguishes the inspectable CLI/app-server from the closed desktop app, hosted Codex Cloud, model service, and account entitlements. Code, release objects, registries, and docs are evidence; fetched content was never treated as instructions or executed. The interval starts strictly after 2026-10-13T23:59:59Z. Moving pointers below are observations at their individual UTC read times, not a reconstruction of the end of 2026-10-24.

## Install today

**Newest stable: 0.164.0, released 2026-10-23T04:48:10Z.** GitHub marked [rust-v0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0) Latest and `prerelease=false` when read at **2026-10-24T09:50:31.899655Z**. An explicit npm selection is [`npm install -g @openai/codex@0.164.0`](https://registry.npmjs.org/@openai%2fcodex/0.164.0). The [tagged README](https://github.com/openai/codex/blob/rust-v0.164.0/README.md#L14-L47) also documents standalone installers, release downloads, and `brew install --cask codex`; no installer was run in this research.

| Moving surface | UTC read time | Observed selection and receipt |
|---|---|---|
| GitHub release selector and release inventory | 2026-10-24T09:50:31.899655Z | Stable [0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0); newest published preview [0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1), published 2026-10-23T14:09:53Z, `prerelease=true`. |
| npm CLI | 2026-10-24T09:36:56.520591Z | [`@openai/codex`](https://registry.npmjs.org/@openai%2fcodex): `latest=0.164.0`, `alpha=0.165.0-alpha.1`; six stable platform selectors also point to their 0.164.0 packages. Legacy `beta=0.1.2505172116` and `native=0.1.2505291658` are parked old selectors, not a current 0.164 beta channel. |
| npm TypeScript SDK | 2026-10-24T09:36:57.530612Z | [`@openai/codex-sdk`](https://registry.npmjs.org/@openai%2fcodex-sdk): `latest=0.164.0`, `alpha=0.165.0-alpha.1`. |
| PyPI Python SDK | 2026-10-24T09:36:58.387480Z | [`openai-codex`](https://pypi.org/pypi/openai-codex/json): latest **0.163.0**; no 0.164.0 publication in the returned release inventory. [Version 0.163.0](https://pypi.org/pypi/openai-codex/0.163.0/json) first uploaded 2026-10-15T21:50:50.773186Z. |
| Homebrew cask | 2026-10-24T09:36:58.909989Z | [`codex` cask API](https://formulae.brew.sh/api/cask/codex.json): 0.164.0, resolving to this project's release archive; [cask pinned to tap head 9ec411cdc7fb37ffd19f74613fe46b8859117ad0](https://github.com/Homebrew/homebrew-cask/blob/9ec411cdc7fb37ffd19f74613fe46b8859117ad0/Casks/c/codex.rb). |
| Fetched default-branch snapshot | 2026-10-24T09:37:52.033705Z | Main `970111f6cb62cc02fe36a82ea7d71b37a2889c97`, committed 2026-10-23T18:50:54Z; [91 ahead / 1 behind stable](https://github.com/openai/codex/compare/rust-v0.164.0...970111f6cb62cc02fe36a82ea7d71b37a2889c97). Counts rechecked at the release inventory read. This is the fetched main snapshot, not a promise about later pushes. |

**SDK lockstep no longer holds.** npm CLI and TypeScript SDK have [0.164.0 packages](https://registry.npmjs.org/@openai%2fcodex-sdk/0.164.0), while [Python remains 0.163.0](https://pypi.org/pypi/openai-codex/0.163.0/json). Do not instruct Python users to install an unpublished 0.164.0. Align versions deliberately and verify embedding behavior rather than infer compatibility from the shared project name.

**Pin the runtime as well as the command.** The [0.164.0 daemon remains experimental, retains its startup environment, and has a separately controlled updater](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md). Use [`codex --no-daemon`](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/tui/src/cli.rs#L88-L89) for a fixed interactive process baseline, or disable automatic daemon updates in `CODEX_HOME/app-server-daemon/settings.json` and restart to apply that preference. Explicit `daemon update` still selects stable and can interrupt running work. The updater's network-policy defect is fixed in stable, but CLI overrides do not configure that independent updater; use saved network settings (section 1).

**Availability is not the same as default activation.** At [0.164.0's feature definitions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs), `credential_masking`, `network_proxy`, `code_mode_tool_search`, `multi_agent_v2_dynamic_tools`, `guardianv2`, `guardianv2_decisions_comparison`, `runtime_agent_instances`, `async_compaction`, and `token_budget`, `mcp_tool_list_changed`, `subagent_thread_environments`, and `wake_on_agent_messages` remain off by default. `daemon_auto_start`, `write_stdin_approval`, `guardian_approval`, `cli_daybreak`, and `api_key_cyber_access_programs`, `incremental_tools`, and `mcp_oauth_refresh_coordination` default on; `instant_interrupt` defaults on while still marked under development. Worktree and realtime-conversation feature flags are marked removed. Eligible account/model access and managed requirements remain separate gates. The Google Cloud provider is in the [0.165.0-alpha.1 preview](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1), while the Windows `SystemRoot` helper fix is only on the recorded main snapshot (sections 14 and 15).

## Release ledger

Stable means a non-prerelease GitHub `rust-v` release object. Counts were computed locally with `git rev-list --left-right --count previous...candidate`, then reported as candidate ahead / behind. Release branches can be behind mainline even when their version is newer. npm timestamps come from the [CLI registry](https://registry.npmjs.org/@openai%2fcodex) and [SDK registry](https://registry.npmjs.org/@openai%2fcodex-sdk); pointer read times are above.

| Tag | Published UTC | Prerelease | ahead_by / behind_by vs previous stable | Registry publication UTC |
|---|---|---|---|---|
| [rust-v0.162.1, baseline](https://github.com/openai/codex/releases/tag/rust-v0.162.1) | 2026-10-09T19:44:51Z | false | 3 / 1 vs 0.162.0 | CLI 2026-10-09T19:50:30.512Z; TS 19:51:57.415Z; Python 20:00:27.613413Z |
| [rust-v0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0) | 2026-10-15T21:30:38Z | false | [232 / 4 vs 0.162.1](https://github.com/openai/codex/compare/rust-v0.162.1...rust-v0.163.0) | CLI 2026-10-15T21:37:11.083Z; TS 21:37:13.897Z; Python 21:50:50.773186Z |
| [rust-v0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0) | 2026-10-23T04:48:10Z | false | [330 / 5 vs 0.163.0](https://github.com/openai/codex/compare/rust-v0.163.0...rust-v0.164.0) | CLI 2026-10-23T04:52:29.240Z; TS 04:52:53.894Z; no Python publication observed |
| [rust-v0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1) | 2026-10-23T14:09:53Z | true | [68 / 1 vs 0.164.0](https://github.com/openai/codex/compare/rust-v0.164.0...rust-v0.165.0-alpha.1) | CLI 2026-10-23T14:22:16.936Z; TS 14:23:09.596Z |
| [rust-v0.163.0-alpha.12](https://github.com/openai/codex/tree/rust-v0.163.0-alpha.12) | No release object; annotated tag date 2026-10-14T09:38:13Z | No release flag; alpha name | 261 / 4 vs 0.162.1 | Not established |
| [rust-v0.163.0-alpha.13](https://github.com/openai/codex/tree/rust-v0.163.0-alpha.13) | No release object; annotated tag date 2026-10-14T14:46:39Z | No release flag; alpha name | 271 / 4 vs 0.162.1 | Not established |

The 150-object [release inventory](https://api.github.com/repos/openai/codex/releases?per_page=100) spans the cutoff and contains **2 stable and 19 alpha releases after it**; the table intentionally omits intermediate alpha objects. `gh release view` returned `release not found` for alpha.12 and alpha.13. Their tag dates are not package publication dates. The [0.163.0-alpha.11.2 branch release](https://github.com/openai/codex/releases/tag/rust-v0.163.0-alpha.11.2), published 2026-10-22T06:41:14Z, matters to the Windows desktop report in section 14; it is not stable 0.163.0.

Stable commit identities: 0.162.1 is `092d3acd6bec3e3a14bdc7e7a2810ab628ab759d`; 0.163.0 is `83086188ae0614bd882818ff1aa23f3194962012`; 0.164.0 is `6aaac694803004a63c6f393d153c96d22521a6b9`. Preview alpha.1 is `4cf2c16e4bc67809f620582d1999818e1b51eb2e`. These were resolved from the fetched tags. For numbered findings, "absent" means `git merge-base --is-ancestor` returned 1; "present" means it returned 0. Main-only findings were additionally checked with `git tag --contains`.

## 1. Stable updater requests now require successfully loaded network policy

- **Date:** 2026-10-15
- **Channel:** `tagged-release`
- **Ancestry evidence:** `d570b3632b100e36f931797cdbdb8906d0fcafa8` is absent from rust-v0.162.1 and present in rust-v0.163.0 and rust-v0.164.0. The parent recorded this in previews; stable availability is the new fact.
- **Receipt:** [updater policy commit](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8), [0.164.0 factory and regression tests](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464), [daemon update contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L48-L70).
- **Half:** defect | **Confidence:** high

**What changed.** The [updater client factory now propagates configuration failure and activates the embedded network policy](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464), replacing the older fallback to a default HTTP client. The tag includes tests for configuration failure and denied destinations. The [standalone MCP path also acquired network-policy enforcement](https://github.com/openai/codex/commit/79773e8826aeb6bca09305728297908b0d5bc6c3), first contained in 0.163.0. This does not turn the updater into part of the invoking CLI process: [saved network settings govern it, and CLI `-c` overrides do not reach it](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L63-L70).

**Operator consequence.** The profile's wait for a stable tag is settled. Restricted fleets can test 0.164.0 with invalid configuration and blocked destinations before reconsidering automatic updates. Continue recording CLI and running-daemon versions separately. The human task moves from waiting for a release to verifying the fleet's actual saved policy; no network or updater probe was run here.

## 2. Proxy hardening and credential masking reached stable, with an unmasked fallback

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** DNS authorization `37eaae6eeb71c3bd3d165f52515086db8f5e7dee`, initial masking `bd274564e1b1b3febb3886d274e6d97c2a3d275e`, alias checks `65b82cdf96f9d305494bc8c6c8d2404d37709030`, and duplicate-Host rejection `12cca49c81c8aa6a37a5cc4e39964ee3b70f9458` are absent from 0.162.1 and present in 0.163.0 and 0.164.0. Remote masking `7d33d0d93f9c751281e0f5e8e9e76353eee87ea8`, fallback `db58a987b8a0b94b81ab321f0e0192757758df67`, and trusted-origin injection `82ef0672e34391ffe1bd61e1185ed6e9d664a64e` are absent from 0.163.0 and present in 0.164.0.
- **Receipt:** [DNS authorization](https://github.com/openai/codex/commit/37eaae6eeb71c3bd3d165f52515086db8f5e7dee), [tagged proxy contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/network-proxy/README.md), [execution fallback](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/runtimes/unified_exec.rs#L558-L565), [feature defaults](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1469-L1487).
- **Half:** both | **Confidence:** high

**What changed.** Stable now [authorizes before DNS resolution](https://github.com/openai/codex/commit/37eaae6eeb71c3bd3d165f52515086db8f5e7dee) and checks aliases and duplicate Host headers. In 0.164.0, masking extends to remote execution, shell snapshots and custom provider credentials. When an injected-header action configures a placeholder, [substitution requires exactly that whole-header value and HTTPS on port 443; the proxy also supports injected-header actions without a placeholder](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/network-proxy/README.md#L277-L285). Scheme/port matcher lists are optional and preserve existing behavior when empty; the [implementation takes the authenticated tunnel origin separately from request headers](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/network-proxy/src/mitm_hook.rs). However, masking is default-off, and [unsupported execution-server, proxy, shell, or snapshot conditions can warn and continue with real credentials restored](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/runtimes/unified_exec.rs#L706-L745). This is not an unconditional fail-closed secret-isolation guarantee.

**Operator consequence.** Upgrade for proxy enforcement, then separately trial masking with the actual remote server and shell. Treat fallback warnings as material evidence, inspect the environment delivered to tools, and verify denied origins and placeholders. This can remove handcrafted secret forwarding, but the operator still has to establish which execution paths actually mask credentials.

## 3. Guardian must reassess a retry that requests more authority

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `4b9c24f98c6d886134fd2fc237355064708ff21f` is absent from rust-v0.163.0 and present in rust-v0.164.0, rust-v0.165.0-alpha.1, and recorded main.
- **Receipt:** [retry approval fix](https://github.com/openai/codex/commit/4b9c24f98c6d886134fd2fc237355064708ff21f), [0.164.0 orchestration branch](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/orchestrator.rs#L484-L518).
- **Half:** defect | **Confidence:** high

**What changed.** When execution fails under a sandbox and retries with escalation, [a prior Guardian approval no longer supplies the exemption used for explicit user or hook approvals](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/orchestrator.rs#L484-L518). The retry constructs an escalated approval request and clears the old additional-permissions field so review covers the authority actually requested. This is a specific retry-path correction, not proof that every approval source or Full Access mode now invokes Guardian.

**Operator consequence.** Test an initially allowed action that fails under containment and then asks to escalate. On 0.164.0, expect a fresh review rather than treating the first model approval as reusable authorization. This preserves automated review while putting human policy work at the change in authority, where it matters.

## 4. Plugin hook approval now checks file contents before execution

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `2bf2bdf82c33f4c66ba3f0767b8e4b6a933aac40` is absent from rust-v0.163.0 and present in rust-v0.164.0 and the recorded preview/main snapshots.
- **Receipt:** [content trust change](https://github.com/openai/codex/commit/2bf2bdf82c33f4c66ba3f0767b8e4b6a933aac40), [tagged trust implementation](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/engine/plugin_trust.rs).
- **Half:** both | **Confidence:** high

**What changed.** The hook path [recomputes plugin content hashes and compares the trusted contents and declaration before running a hook](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/engine/plugin_trust.rs). A changed plugin requires approval again. The compatibility path matters: older declaration-only approvals are migrated by establishing a content baseline on first use; that migration is not retroactive proof that those bytes were previously reviewed.

**Operator consequence.** On 0.164.0, test approving a plugin, changing its hook file, and attempting the hook again. Re-audit existing approvals when upgrading, especially the first-use migration. The durable primitive is approval bound to contents; a one-time human review is useful only if its object stays the same.

## 5. Sandbox protection covers case aliases and replaceable helper paths

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** macOS alias fix `3bae578af33e43268e7bc2d6d5d0266f704bb554`, helper-path fix `b8f880bc38b885bcca81cdfb50dae0ed18d7c3b4`, and Windows provisioning fix `d34f104c22ae815fc213641b8a637c5947f14ac1` are absent from 0.163.0 and present in 0.164.0.
- **Receipt:** [macOS metadata aliases](https://github.com/openai/codex/commit/3bae578af33e43268e7bc2d6d5d0266f704bb554), [helper-path checks at the tag](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/sandboxing/src/bwrap.rs#L179-L310), [Windows provisioning](https://github.com/openai/codex/commit/d34f104c22ae815fc213641b8a637c5947f14ac1), [0.164.0 release](https://github.com/openai/codex/releases/tag/rust-v0.164.0).
- **Half:** defect | **Confidence:** high

**What changed.** The macOS policy [accounts for case aliases of protected repository metadata](https://github.com/openai/codex/commit/3bae578af33e43268e7bc2d6d5d0266f704bb554). Linux helper lookup [checks both the alias and canonical path, including whether ancestors can be replaced](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/sandboxing/src/bwrap.rs#L239-L310). [Windows sandbox provisioning now rejects clients without an installed Codex package identity; the debug foreground-mode exception remains](https://github.com/openai/codex/commit/d34f104c22ae815fc213641b8a637c5947f14ac1). These are separate mechanisms; no matching new public CVE/GHSA was found in the advisory inventories checked.

**Operator consequence.** Use 0.164.0 for tests involving hostile repositories and protected metadata. On macOS exercise case variants; on Linux exercise replaceable symlinks and writable parents; on Windows check package identity before depending on provisioning; unpackaged clients can now be rejected. A release-note security fix is a reason to retest a boundary, not evidence that the entire boundary is now proven.

## 6. Compaction commits only completed summaries and resume restores more state

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** cold-resume permissions `7c9bfb910ef65c8f4a957c53affbd43d5fac2882` and saved-permission restoration `bf4ca52b61686398aafb6f4467da4202b6bdec53` first reach stable 0.163.0. Compaction isolation `400f2356d60c4663d46817a40b4d09c5c86f35ad`, background fallback `e8aa7c1678caa9a368243d72bf0e9b7859d97f15`, compressed-rollout resume `76ed3b484d62ccceb9fa512ff4dd139f421814c3`, and saved thread settings `430a16799d90e296fb27b1e94f206023902b7e56` are absent from 0.163.0 and present in 0.164.0.
- **Receipt:** [compaction implementation](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890), [permission restoration](https://github.com/openai/codex/commit/7c9bfb910ef65c8f4a957c53affbd43d5fac2882), [compressed resume](https://github.com/openai/codex/commit/76ed3b484d62ccceb9fa512ff4dd139f421814c3), [saved settings](https://github.com/openai/codex/commit/430a16799d90e296fb27b1e94f206023902b7e56).
- **Half:** both | **Confidence:** high

**What changed.** The [compaction attempt buffers output and records it only on response completion](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890); a failed attempt no longer leaves a partial summary in history. [Background-compaction failure can fall back to the blocking path](https://github.com/openai/codex/commit/e8aa7c1678caa9a368243d72bf0e9b7859d97f15), although async compaction remains default-off. Resume now handles compressed rollouts and saved model/settings more consistently. The earlier [cold-resume change restores permissions and network grants while preserving explicit overrides and managed restrictions](https://github.com/openai/codex/commit/7c9bfb910ef65c8f4a957c53affbd43d5fac2882).

**Operator consequence.** For long runs, test interruption during compaction, restart from a compressed rollout, and compare the restored model, effort, and permission state with the intended run contract. These fixes reduce recovery supervision; they do not establish automatic recovery from every capacity error, cache persistence, or the Windows helper regression in section 14.

## 7. Enterprise authentication gains native MCP grants and Windows proxy support

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** enterprise MCP `1569abc5dcff34a161a37c0697617b5025e1a851`, account grants `6b13dffc5e4c334fe87f823b214ed15a4bf37a11`, confidential OAuth `6203846fb3ef040f62eed9b35bc6629c8e88980a`, config-server enforcement `342ed69a174c206c1de52a59491b131e0753cfa5`, Windows managed requirements `18795fc12571a3530d3e4ac18366e41cd2f57448`, and proxy authentication `f496b09bd141af0a6ec1a7ebf3e5fc557ac795dc` are absent from 0.163.0 and present in 0.164.0.
- **Receipt:** [enterprise MCP change](https://github.com/openai/codex/commit/1569abc5dcff34a161a37c0697617b5025e1a851), [config-server binding](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/state.rs), [Windows integrated authentication](https://github.com/openai/codex/commit/f496b09bd141af0a6ec1a7ebf3e5fc557ac795dc), [release scope](https://github.com/openai/codex/releases/tag/rust-v0.164.0).
- **Half:** both | **Confidence:** high

**What changed.** Eligible accounts can [use enterprise MCP grants and a dedicated sign-in flow](https://github.com/openai/codex/commit/6b13dffc5e4c334fe87f823b214ed15a4bf37a11), with confidential-client OAuth support. Windows can [authenticate to Negotiate/NTLM proxies using the signed-in user](https://github.com/openai/codex/commit/f496b09bd141af0a6ec1a7ebf3e5fc557ac795dc). The managed configuration path [requires the configured trusted server to match the server whose configuration was applied](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/state.rs), failing rather than silently proceeding with a mismatch. The same release also [enables the Bedrock setup wizard by default](https://github.com/openai/codex/releases/tag/rust-v0.164.0).

**Operator consequence.** Trial the native sign-in and proxy flows before maintaining custom credential bridges. Verify account eligibility, server identity, applied managed requirements, and reconnect behavior with the deployment's actual identity system. Fewer bespoke login steps can reduce setup attention, but successful sign-in is not proof that the intended organization policy was applied.

## 8. Read-only calls can overlap and full-history forks preserve their prefix

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** parallel read-only tools `c9e0fffbbc05c36478686444f6ab1edbadfe2768`, CodeMode interruption `72c959528ee4ca74abdb8575fbbc4e36960a8c47`, and history-independent capability inheritance `845345b1dd4f8e2a5d5ce91363fff666e41b07fc` are absent from 0.162.1 and present in 0.163.0 and 0.164.0. Dynamic-tool parallelism `beae473be8564d884a8cfe9704194a5c803d2ac1` and default prefix preservation `e1b9c9457ceca75a99b034a5df39ac48c3998d15` are absent from 0.163.0 and present in 0.164.0.
- **Receipt:** [parallel reads](https://github.com/openai/codex/commit/c9e0fffbbc05c36478686444f6ab1edbadfe2768), [CodeMode cancellation](https://github.com/openai/codex/commit/72c959528ee4ca74abdb8575fbbc4e36960a8c47), [fork prefix default](https://github.com/openai/codex/commit/e1b9c9457ceca75a99b034a5df39ac48c3998d15), [tagged fork configuration](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/feature_configs.rs#L316-L319).
- **Half:** capability | **Confidence:** high

**What changed.** Native execution can [overlap eligible read-only calls](https://github.com/openai/codex/commit/c9e0fffbbc05c36478686444f6ab1edbadfe2768) and cancel CodeMode work when interrupted. In 0.164.0, full-history subagent forks [preserve the parent prefix by default, with a documented legacy-compaction exception](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/feature_configs.rs#L316-L319). This supports reuse of existing context; the code does not prove a particular cache-hit rate or quota saving. Fresh-child dynamic-tool inheritance remains [a separate default-off feature](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1525-L1529).

Selected skills and plugin choices [also survive either fresh or full-history spawning from 0.163.0](https://github.com/openai/codex/commit/845345b1dd4f8e2a5d5ce91363fff666e41b07fc). That removes a dependency between copying conversation history and retaining selected capabilities; it does not switch on the separate dynamic-client-tool feature.

**Operator consequence.** Compare native parallel reads and forks against catalog-scanning, reinjection, and scheduling wrappers before retaining those layers. Measure accepted results, interruption latency, and context volume. Do not turn a prefix-preservation implementation into a claim that caching lasts forever or that child work is free.

## 9. Patched zsh and retired feature switches leave less configuration to maintain

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** patched-zsh removal `cd85a26cae00385a0dd9247381ef5d1d7ffe9ef3` and package removal `a645742bb5615026ae673c9527f146ee551d4949` first reach stable 0.163.0. Worktree/realtime flag retirement `bb64b894fd67158be0f874872e6d7bfe717e7368` is absent from 0.163.0 and present in 0.164.0.
- **Receipt:** [backend removal](https://github.com/openai/codex/commit/cd85a26cae00385a0dd9247381ef5d1d7ffe9ef3), [unbundling](https://github.com/openai/codex/commit/a645742bb5615026ae673c9527f146ee551d4949), [retired switches](https://github.com/openai/codex/commit/bb64b894fd67158be0f874872e6d7bfe717e7368), [current definitions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs).
- **Half:** both | **Confidence:** high

**What changed.** Codex [removes the patched-zsh execution backend and stops bundling that patched shell](https://github.com/openai/codex/commit/a645742bb5615026ae673c9527f146ee551d4949). This is not removal of zsh support: section 2's snapshot work includes zsh. The worktree and realtime-conversation flags [become removed compatibility entries](https://github.com/openai/codex/commit/bb64b894fd67158be0f874872e6d7bfe717e7368), rather than switches operators should rely on to disable those capabilities.

**Operator consequence.** Remove obsolete patched-shell assumptions and test shell snapshots and command policy on the supported path. Audit configuration-management templates for retired feature flags; use actual permissions and platform controls where a capability must be constrained. A deleted switch reduces setup surface only if operators stop mistaking it for a working control.

## 10. Terminal configuration becomes easier to inspect and reuse

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** searchable configuration `cc7ba33601286a751477832b01de7b6f8de0dd9c` first reaches stable 0.163.0. Presets `dcd9e954598cd5e9f80570204896d779c60c1ecd`, inline model settings `0884c8047af8b02df31da8c622110a724c6b3cbc`, and inline permissions `b095b2ef236d8f45f85a9d5526bfbf2618ab2d63` are absent from 0.163.0 and present in 0.164.0.
- **Receipt:** [0.163.0 terminal changes](https://github.com/openai/codex/releases/tag/rust-v0.163.0), [presets](https://github.com/openai/codex/commit/dcd9e954598cd5e9f80570204896d779c60c1ecd), [inline settings](https://github.com/openai/codex/commit/0884c8047af8b02df31da8c622110a724c6b3cbc), [0.164.0 terminal changes](https://github.com/openai/codex/releases/tag/rust-v0.164.0).
- **Half:** capability | **Confidence:** high

**What changed.** The terminal gets [searchable `/config`, `/keymap`, and daemon controls that warn before a restart and reconnect afterward](https://github.com/openai/codex/releases/tag/rust-v0.163.0). In 0.164.0, [ten `/presets` slots, inline model/reasoning/speed and permission selection, and Kitty/Sixel image previews](https://github.com/openai/codex/releases/tag/rust-v0.164.0) reduce repeated menu navigation. These are terminal capabilities, not evidence that every desktop UI has the same controls.

**Operator consequence.** Save deliberate evaluation and work settings as presets, then inspect the resolved settings when resuming or switching server. Native image previews can shorten visual review in supported terminals. Keep the distinction between a convenient setting selector and a managed policy boundary.

## 11. Daybreak's CLI and API-key gates are now stable defaults

- **Date:** 2026-10-15
- **Channel:** `tagged-release`
- **Ancestry evidence:** `6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7` and `6cc7d9cc5c702c0ca133f7ea48432166e0b880be` are absent from 0.162.1 and present in 0.163.0 and 0.164.0. The parent already recorded them in alpha.10; this is their stable transition.
- **Receipt:** [CLI gate](https://github.com/openai/codex/commit/6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7), [API-key gate](https://github.com/openai/codex/commit/6cc7d9cc5c702c0ca133f7ea48432166e0b880be), [current defaults](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1449-L1459), [current eligibility documentation](https://learn.chatgpt.com/docs/cyber-safety).
- **Half:** capability | **Confidence:** high

**What changed.** Stable now defaults [both `cli_daybreak` and `api_key_cyber_access_programs` to true](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1449-L1459). That does not grant a model entitlement. Current [cyber-safety documentation](https://learn.chatgpt.com/docs/cyber-safety), read 2026-10-24, describes separate approvals for GPT-Daybreak-Blue and GPT-Daybreak-Red and scopes access to the approved identity, organization/workspace, model, and surface. It does not make a CLI feature flag permission to ignore organization policy or supply automatic ZDR.

**Operator consequence.** Replace the profile's stable-off warning with a stable-on, eligibility-qualified description. Eligible security teams can test the released CLI path without adopting an alpha solely for this gate. Confirm the actual account and model approval; do not infer access from a picker, a social model name, or the enabled flag.

## 12. Runtime signing is present but default-off, with ephemeral keys

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** runtime signing `79a19cbb3008afe2882ccc2c5d93f02cde9a0823` and authorization modes `cb00a67569450aea2fdb1b1f31fc042fc0b5416f` are absent from 0.163.0 and present in 0.164.0.
- **Receipt:** [runtime key and signer](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/runtime.rs), [registration](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/registration.rs), [authorization modes](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/auth.rs), [feature gate](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs).
- **Half:** capability | **Confidence:** high

**What changed.** The runtime can [generate an Ed25519 key, register an instance, and sign agent assertions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/runtime.rs). In the implementation read, the key is generated for registration and retained in memory; it is not a durable private key written to disk. Registration uses a [restricted HTTPS or loopback endpoint with redirects disabled](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/registration.rs). [Dual-header and assertion-only authorization modes exist](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/auth.rs), while `runtime_agent_instances` remains default-off. Code presence does not establish server enforcement against third-party clients.

**Operator consequence.** Authentication adapters should watch this protocol and test it only when intentionally enabled. Do not report the social prediction of durable-key client lockout as shipped fact. The useful question is whether a named service begins requiring these assertions and under which account contract; neither service-side enforcement nor a lockout test was observed.

## 13. Managed installations and logs gain automatic disk cleanup

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** daemon installation pruning `0960e379a5555f1b6d7b97d7980039902213c26c`, standalone pruning `89461ea6833832b0551ce24ee32205824d5c108d`, and bounded logs `6bae551093d24ad6539a7daba2d9a13b80b28d15` are absent from 0.163.0 and present in 0.164.0.
- **Receipt:** [daemon pruning](https://github.com/openai/codex/commit/0960e379a5555f1b6d7b97d7980039902213c26c), [standalone pruning](https://github.com/openai/codex/commit/89461ea6833832b0551ce24ee32205824d5c108d), [bounded logs](https://github.com/openai/codex/commit/6bae551093d24ad6539a7daba2d9a13b80b28d15), [release scope](https://github.com/openai/codex/releases/tag/rust-v0.164.0).
- **Half:** both | **Confidence:** high

**What changed.** The release [prunes old managed installations and marketplace cache material and bounds managed app-server/updater stderr logs](https://github.com/openai/codex/releases/tag/rust-v0.164.0), adding native maintenance for state that accumulates during repeated updates and long-running use. The [managed logger can drop oversized or queued-out records and trims files above 1 MiB to a 256 KiB tail](https://github.com/openai/codex/commit/6bae551093d24ad6539a7daba2d9a13b80b28d15); this is not a transcript-retention guarantee or a measured desktop disk reduction.

**Operator consequence.** Inspect retained versions and log retention on 0.164.0 before keeping external cleanup jobs. Export evidence that needs longer retention to a controlled destination. Less janitorial work is useful, but bounded local logs change what a later incident review can recover.

## 14. The Windows resume helper's SystemRoot fix is still untagged

- **Date:** 2026-10-23
- **Channel:** `main-unreleased`
- **Ancestry evidence:** `d4bdafd378a8e328a67a4cd3557b5fe634af378c` is absent from rust-v0.164.0 and rust-v0.165.0-alpha.1, present in main `970111f6cb62cc02fe36a82ea7d71b37a2889c97`; `git tag --contains` returned no tags.
- **Receipt:** [SystemRoot fix](https://github.com/openai/codex/commit/d4bdafd378a8e328a67a4cd3557b5fe634af378c), [original issue 56264](https://github.com/openai/codex/issues/56264), [recorded main comparison](https://github.com/openai/codex/compare/rust-v0.164.0...970111f6cb62cc02fe36a82ea7d71b37a2889c97).
- **Half:** defect | **Confidence:** high

**What changed.** The [merged patch supplies `SystemRoot` when spawning the Windows filesystem helper](https://github.com/openai/codex/commit/d4bdafd378a8e328a67a4cd3557b5fe634af378c). The [reporter describes a desktop resume failure with a bundled 0.163.0-alpha.11.2 CLI](https://github.com/openai/codex/issues/56264), not a controlled reproduction on standalone stable 0.164.0. The patch matches that missing-environment failure mechanism. It has not reached even the newest published preview in this snapshot.

**Operator consequence.** Do not tell affected Windows users that installing 0.164.0 or alpha.1 contains this fix. Record the desktop and bundled CLI versions and the failing helper's error; watch for a tag containing the patch, then retest resume. Main availability is useful triage evidence, not an installable release receipt.

## 15. The Google Cloud provider is in preview while public availability remains prospective

- **Date:** 2026-10-23
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** provider commit `3fd148a20c18cfc72beb7dedfa52951b1f9c4cb1` is absent from stable 0.164.0 and present in rust-v0.165.0-alpha.1 and recorded main. Follow-up project/location configuration `970111f6cb62cc02fe36a82ea7d71b37a2889c97` is absent from alpha.1 and has no containing tag.
- **Receipt:** [provider implementation at alpha.1](https://github.com/openai/codex/blob/rust-v0.165.0-alpha.1/codex-rs/model-provider-info/src/lib.rs), [initial provider commit](https://github.com/openai/codex/commit/3fd148a20c18cfc72beb7dedfa52951b1f9c4cb1), [untagged configuration follow-up](https://github.com/openai/codex/commit/970111f6cb62cc02fe36a82ea7d71b37a2889c97), [OpenAI announcement](https://openai.com/index/openai-models-google-cloud/).
- **Half:** capability | **Confidence:** high

**What changed.** Alpha.1 includes [a `gcp` provider using Responses over HTTP without OpenAI authentication, WebSockets, or standalone web search](https://github.com/openai/codex/blob/rust-v0.165.0-alpha.1/codex-rs/model-provider-info/src/lib.rs). The later project/location configuration is main-only. OpenAI's [2026-10-21 Google Cloud announcement](https://openai.com/index/openai-models-google-cloud/) describes general availability in coming weeks. The announcement proves vendor intent; the preview proves a client path exists. Neither proves a particular operator can obtain service access today.

**Operator consequence.** Teams already approved for that environment can assess the preview's authentication and transport limits before building a provider shim. Others should wait for actual service availability and a stable client tag. Keep Cloud contract, model entitlement, and client version as separate rollout decisions.

## 16. V8 sort safety backport reaches stable Code Mode

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `6ae8b8aa7c608730d4315d59c5c081897ae02780` Each listed commit is absent from 0.163.0 and present in 0.164.0 and 0.165.0-alpha.1.
- **Receipt:** [runtime update](https://github.com/openai/codex/commit/6ae8b8aa7c608730d4315d59c5c081897ae02780), [tagged backport](https://github.com/openai/codex/blob/rust-v0.164.0/patches/v8_array_sort_elements_kind.patch), [CNA record](https://cveawg.mitre.org/api/cve/CVE-2026-85046).
- **Half:** defect | **Confidence:** high

**What changed.** Codex upgrades V8 and [backports CVE-2026-85046 sort guards](https://github.com/openai/codex/blob/rust-v0.164.0/patches/v8_array_sort_elements_kind.patch). Comparator mutation could let optimized sort write objects into incompatible array storage. The [CNA record](https://cveawg.mitre.org/api/cve/CVE-2026-85046) describes arbitrary code execution inside Chrome's sandbox through crafted HTML, published on 3 September 2026. That Chrome impact is not evidence of a Codex sandbox escape or exploitation; the October event is the Codex backport reaching stable.

**Operator consequence.** Include 0.164.0 in Code Mode runtime upgrade tests. An empty repository/npm advisory feed would have missed this dependency repair. Verify the runtime version actually serving embedded scripts; no exploit was run.

## 17. Incremental tools and coordinated MCP OAuth refresh now default on

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `c953dacb42d2773d0ca9cc25a01129bba2ca36a8` `35757adb728b268a1e75eabeb3e4cf9a6def5c18` Each listed commit is absent from 0.163.0 and present in 0.164.0 and 0.165.0-alpha.1.
- **Receipt:** [incremental catalog default](https://github.com/openai/codex/commit/c953dacb42d2773d0ca9cc25a01129bba2ca36a8), [OAuth coordination default](https://github.com/openai/codex/commit/35757adb728b268a1e75eabeb3e4cf9a6def5c18), [stable definitions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs).
- **Half:** capability | **Confidence:** high

**What changed.** [Responses Lite tool catalog updates enter request history by default](https://github.com/openai/codex/commit/c953dacb42d2773d0ca9cc25a01129bba2ca36a8), and [MCP OAuth refresh coordination also becomes stable/default-on](https://github.com/openai/codex/commit/35757adb728b268a1e75eabeb3e4cf9a6def5c18). These are two distinct default changes, not activation of ranked Code Mode discovery or live MCP catalog refresh.

**Operator consequence.** Test request-history compatibility as catalogs change and refresh credentials through multiple clients. Compare native coordination with token-refresh wrappers before deleting the latter; no latency or refresh-rate benchmark was run.

## 18. Native model-request hooks observe attempts without authorizing them

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `70b3bb6d8814ab3f2045238b4ae14c43da99783b` Each listed commit is absent from 0.163.0 and present in 0.164.0 and 0.165.0-alpha.1.
- **Receipt:** [lifecycle hooks](https://github.com/openai/codex/commit/70b3bb6d8814ab3f2045238b4ae14c43da99783b), [diagnostic stdout](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/events/model_request.rs#L142-L148).
- **Half:** capability | **Confidence:** high

**What changed.** [PreModelRequest and PostModelRequest cover attempts, retries, completion, failure, cancellation, and available usage](https://github.com/openai/codex/commit/70b3bb6d8814ab3f2045238b4ae14c43da99783b). Hook stdout is diagnostic, even if it resembles a control directive: these events cannot veto requests or rewrite model context. Synchronous post-hooks finish before tool dispatch; asynchronous observers allow dispatch to continue.

**Operator consequence.** Replace request-observation shims where the native event contract suffices. Keep authorization in an enforcing path and measure synchronous hook latency before putting exporters there.

## 19. The Responses API proxy can exchange GitHub Actions OIDC credentials

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `57560e9d53f89c7737c7b2069ba2eb8fddbf0687` Each listed commit is absent from 0.163.0 and present in 0.164.0 and 0.165.0-alpha.1.
- **Receipt:** [OIDC change](https://github.com/openai/codex/commit/57560e9d53f89c7737c7b2069ba2eb8fddbf0687), [proxy contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/responses-api-proxy/README.md).
- **Half:** capability | **Confidence:** high

**What changed.** The [proxy offers optional GitHub Actions OIDC federation and renewable short-lived OpenAI credentials](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/responses-api-proxy/README.md), keeping API-key mode as default. OIDC mode restricts the upstream Responses endpoint. It requires HTTPS and rejects redirects for the supplied GitHub request URL, but does not establish that GitHub owns that destination. The caller supplies trusted identity mapping and request credentials.

**Operator consequence.** Evaluate this component before retaining long-lived CI API secrets. Protect the runner request credential and destination URL, scope repository/ref/workflow identity, and test renewal failure. This is not a universal new CLI sign-in method.

## 20. MCP catalogs can refresh during a turn behind a default-off flag

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `0df4aa67781ae45a3c97befa4db48b734afe46d9` Each listed commit is absent from 0.163.0 and present in 0.164.0 and 0.165.0-alpha.1.
- **Receipt:** [catalog refresh](https://github.com/openai/codex/commit/0df4aa67781ae45a3c97befa4db48b734afe46d9), [feature definitions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs).
- **Half:** capability | **Confidence:** high

**What changed.** [mcp_tool_list_changed](https://github.com/openai/codex/commit/0df4aa67781ae45a3c97befa4db48b734afe46d9) lets ordinary MCP tool-list notifications refresh catalogs before subsequent discovery or binding within the same turn. It coalesces refreshes, retains the prior catalog on failure, and backs off before retrying. The feature defaults off.

**Operator consequence.** Trial changing catalogs before keeping reconnect scaffolding. Test failed and paginated refreshes and whether stale tools remain callable; enabling incremental request catalogs does not itself enable this separate feature.

## 21. Subagent environments and idle wakes gain separate opt-in controls

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `e389b2444c75cbc92d40b2135ca5db300d076979` `8c076942cb70fba8e5c4732c23f1faabc4aed484` `66d0de9983e82b266e89ee29523324c9d08a5472` Each listed commit is absent from 0.163.0 and present in 0.164.0 and 0.165.0-alpha.1.
- **Receipt:** [environment inheritance](https://github.com/openai/codex/commit/e389b2444c75cbc92d40b2135ca5db300d076979), [root-session wake](https://github.com/openai/codex/commit/8c076942cb70fba8e5c4732c23f1faabc4aed484), [message lifecycle](https://github.com/openai/codex/commit/66d0de9983e82b266e89ee29523324c9d08a5472).
- **Half:** capability | **Confidence:** high

**What changed.** [subagent_thread_environments](https://github.com/openai/codex/commit/e389b2444c75cbc92d40b2135ca5db300d076979) inherits configured bindings rather than temporary turn attachments and preserves them across eviction. Separately, [wake_on_agent_messages](https://github.com/openai/codex/commit/8c076942cb70fba8e5c4732c23f1faabc4aed484) can start a new turn in a completed root session; interrupted sessions, Plan mode, and children are excluded. Both flags default off. [MessageLifecycleContributor](https://github.com/openai/codex/commit/66d0de9983e82b266e89ee29523324c9d08a5472) captures publication state and notifies consumption before sampling.

**Operator consequence.** Test environment inheritance and post-completion mail as separate contracts before removing reinjection or wake supervisors. Neither opt-in feature establishes recovery from every stalled Goal or every dead host process.

## 22. Stable memory resources retain fourteen days and selected v2 runs alone

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `c0cfbfbb989ff80c4027c8ea86a15d411d1d5214` `71ab2ea77bc7fca41bb641e8a131bcba7b304a21` Each listed commit is absent from 0.163.0 and present in 0.164.0 and 0.165.0-alpha.1.
- **Receipt:** [resource retention](https://github.com/openai/codex/commit/c0cfbfbb989ff80c4027c8ea86a15d411d1d5214), [v2-only pipeline](https://github.com/openai/codex/commit/71ab2ea77bc7fca41bb641e8a131bcba7b304a21).
- **Half:** both | **Confidence:** high

**What changed.** [Memory-extension resources remain for 14 days before pruning, up from 7](https://github.com/openai/codex/commit/c0cfbfbb989ff80c4027c8ea86a15d411d1d5214). When v2 is selected, [only its pipeline runs even if dual-write is enabled](https://github.com/openai/codex/commit/71ab2ea77bc7fca41bb641e8a131bcba7b304a21); dual-write prepares v2 while v1 remains selected. This does not make v2 the stable default for every fresh profile.

**Operator consequence.** Audit resource custody and pruning against fourteen days, then inspect the selected memory version before budgeting dual-write work. Retention and version migration need separate acceptance checks.

## 23. Preview selects v2 for eligible fresh memory profiles and exposes summaries

- **Date:** 2026-10-23
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** `a390571745da105cfdc85443dd1d38bf78e5ea6e` `b559e6a3988489b636e1e79672eff330bf0679dc` Each listed commit is absent from stable 0.164.0 and present in 0.165.0-alpha.1.
- **Receipt:** [fresh-profile v2](https://github.com/openai/codex/commit/a390571745da105cfdc85443dd1d38bf78e5ea6e), [summary read API](https://github.com/openai/codex/commit/b559e6a3988489b636e1e79672eff330bf0679dc).
- **Half:** capability | **Confidence:** high

**What changed.** Alpha.1 [selects v2 when memories are enabled and no v1 workspace exists](https://github.com/openai/codex/commit/a390571745da105cfdc85443dd1d38bf78e5ea6e), honoring explicit version and dual-write opt-outs. [thread/memory/read](https://github.com/openai/codex/commit/b559e6a3988489b636e1e79672eff330bf0679dc) reads the resolved version's summary without cross-version fallback, returning null for disabled, missing, unreadable, or blank summaries.

**Operator consequence.** Trial with both fresh and existing profiles. Record selected version and summary availability; stable 0.164.0 does not contain these preview changes.

## 24. Preview blocks a marketplace host-allowlist parser mismatch

- **Date:** 2026-10-23
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** `61a991990fa4fd0c511ccaaab3875371796be956` Each listed commit is absent from stable 0.164.0 and present in 0.165.0-alpha.1.
- **Receipt:** [URL policy repair](https://github.com/openai/codex/commit/61a991990fa4fd0c511ccaaab3875371796be956).
- **Half:** defect | **Confidence:** high

**What changed.** Alpha.1 [rejects literal backslashes in HTTP(S) marketplace URL userinfo](https://github.com/openai/codex/commit/61a991990fa4fd0c511ccaaab3875371796be956). Different URL parsing by the policy check and Git/libcurl could otherwise approve one host while connecting to another. The patch tests rejection before cloning or writing installation/configuration state; stable 0.164.0 lacks it.

**Operator consequence.** Where marketplace host patterns are a security boundary, constrain installation inputs and destinations outside the affected check. Track a stable tag containing this commit and test divergent URL forms before relying on the allowlist alone.

## 25. Preview fresh terminal sessions defer reviewer selection to the server

- **Date:** 2026-10-23
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** `47a1f6bb77baa8ba237757196a62cadf97dc854b` Each listed commit is absent from stable 0.164.0 and present in 0.165.0-alpha.1.
- **Receipt:** [reviewer precedence](https://github.com/openai/codex/commit/47a1f6bb77baa8ba237757196a62cadf97dc854b).
- **Half:** both | **Confidence:** high

**What changed.** Alpha.1 [leaves fresh-thread approval reviewer selection to the server unless invocation overrides are supplied](https://github.com/openai/codex/commit/47a1f6bb77baa8ba237757196a62cadf97dc854b). Explicit profile launches retain their resolved-configuration behavior. This extends server default handling for a separate setting from model and effort; stable 0.164.0 does not contain this fix.

**Operator consequence.** Test first-turn reviewer identity using a server default, explicit override, and named profile. Do not infer reviewer selection from stable model-default behavior.

## 26. Startup approval-policy precedence is repaired only on main

- **Date:** 2026-10-23
- **Channel:** `main-unreleased`
- **Ancestry evidence:** `398500106707f0a3217c7cf83edc2bf226cc342f` Each listed commit is absent from 0.164.0 and 0.165.0-alpha.1, present in recorded main 970111f6cb62cc02fe36a82ea7d71b37a2889c97, with no containing tag at the read.
- **Receipt:** [approval-policy precedence](https://github.com/openai/codex/commit/398500106707f0a3217c7cf83edc2bf226cc342f).
- **Half:** defect | **Confidence:** high

**What changed.** The [main-only change sends explicit approval-policy overrides and otherwise adopts the server-returned policy before queued input](https://github.com/openai/codex/commit/398500106707f0a3217c7cf83edc2bf226cc342f), preserving explicit profile exceptions and granular override semantics. Neither stable nor alpha.1 contains it.

**Operator consequence.** Inspect effective first-turn approval policy separately from model and reviewer selection. Wait for a containing tag, then test queued input and deliberate overrides before relying on this repair.

## 27. Permission menus hold queued prompts and active grants permit stdin review

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `7389eebf45df47895b386334bc1c5b9809eb9605` `d292f721242ef355ce5a38da90e0e33edc4790e6` Each listed commit is absent from 0.163.0 and present in 0.164.0 and 0.165.0-alpha.1.
- **Receipt:** [permission-menu guards](https://github.com/openai/codex/commit/7389eebf45df47895b386334bc1c5b9809eb9605), [stdin under grants](https://github.com/openai/codex/commit/d292f721242ef355ce5a38da90e0e33edc4790e6).
- **Half:** both | **Confidence:** high

**What changed.** Stable [holds queued prompts while permission-menu discovery is pending and guards local permission commands](https://github.com/openai/codex/commit/7389eebf45df47895b386334bc1c5b9809eb9605). Separately, [active matching grants let terminal input reach review when granular sandbox prompts are disabled](https://github.com/openai/codex/commit/d292f721242ef355ce5a38da90e0e33edc4790e6). Each input still requires review; expired authority or Never rejects it. Filesystem grants must match including entry order, with active network authority when needed.

**Operator consequence.** Test queued work during menu discovery and input after turn/session grant expiry. Clients must still handle approvals after a terminal starts; a matching grant is not unconditional permission for new input.

## 28. Preview managed hooks execute under the environment that owns them

- **Date:** 2026-10-23
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** `75a4146411d22e4c487ba86f026201594cdbaa85` `4610b573e59b211bf9430cf6ffb97cfb84623090` Each listed commit is absent from stable 0.164.0 and present in 0.165.0-alpha.1.
- **Receipt:** [managed-hook discovery](https://github.com/openai/codex/commit/75a4146411d22e4c487ba86f026201594cdbaa85), [executor routing](https://github.com/openai/codex/commit/4610b573e59b211bf9430cf6ffb97cfb84623090).
- **Half:** both | **Confidence:** high

**What changed.** Alpha.1 [discovers required environment-owned hooks](https://github.com/openai/codex/commit/75a4146411d22e4c487ba86f026201594cdbaa85) and [executes them using each owner's shell, directory, environment and managed network policy](https://github.com/openai/codex/commit/4610b573e59b211bf9430cf6ffb97cfb84623090). With hooks enabled, unloadable required hooks reject environment configuration. Rewrites cannot switch selected target environments, and environment hooks cannot grant permission requests.

**Operator consequence.** Trial two environments with different policy and verify ownership through rewrites and configuration failure. Stable plugin content hashing does not imply stable availability of this environment delivery path.

## 29. Preview proxy signing keeps AWS credentials in the proxy for supported requests

- **Date:** 2026-10-23
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** `9a8a85bc539325f2819dd0717f88b6ba6286495e` Each listed commit is absent from stable 0.164.0 and present in 0.165.0-alpha.1.
- **Receipt:** [AWS signing primitive](https://github.com/openai/codex/commit/9a8a85bc539325f2819dd0717f88b6ba6286495e).
- **Half:** capability | **Confidence:** high

**What changed.** Alpha.1 [adds an aws_sigv4 MITM action that re-signs authorized requests carrying placeholder credentials](https://github.com/openai/codex/commit/9a8a85bc539325f2819dd0717f88b6ba6286495e). Credentials stay in the trusted proxy. Supported forms include empty and explicitly unsigned payloads; incompatible scopes, presigned URLs, unsupported streaming signatures and ambiguous framing are rejected.

**Operator consequence.** Assess supported AWS request forms before retaining a signing shim. The proxy primitive alone does not supply complete local command/snapshot masking, which remains main-only in section 30.

## 30. Local AWS masking and signing configuration are still main-only

- **Date:** 2026-10-23
- **Channel:** `main-unreleased`
- **Ancestry evidence:** `15fbcac045c29f77783bb176c20f54102f97fe32` Each listed commit is absent from 0.164.0 and 0.165.0-alpha.1, present in recorded main 970111f6cb62cc02fe36a82ea7d71b37a2889c97, with no containing tag at the read.
- **Receipt:** [local AWS wiring](https://github.com/openai/codex/commit/15fbcac045c29f77783bb176c20f54102f97fe32).
- **Half:** capability | **Confidence:** high

**What changed.** The [main-only patch exposes AWS signing actions in configuration and supplies local managed commands and snapshots with masked credentials](https://github.com/openai/codex/commit/15fbcac045c29f77783bb176c20f54102f97fe32). It requires credential_masking, rejects overlapping real/placeholder pairs and multiple signing actions per hook, and sets the proxy CA bundle when needed. Alpha.1 contains the signing primitive but not this wiring.

**Operator consequence.** Wait for a containing release before planning native local AWS secret isolation. Test actual environment/snapshot delivery and signing together; generic stable masking and preview proxy signing are insufficient receipts for the combined path.

## 31. Preview supports custom managed-configuration bundle servers

- **Date:** 2026-10-23
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** `f3a90545aed3188ee1e5c119ec89a742de399cdc` `5a1c247dd5fd682c22a34af93df697dd06300a32` Each listed commit is absent from stable 0.164.0 and present in 0.165.0-alpha.1.
- **Receipt:** [custom bundle loader](https://github.com/openai/codex/commit/f3a90545aed3188ee1e5c119ec89a742de399cdc), [source decoupling](https://github.com/openai/codex/commit/5a1c247dd5fd682c22a34af93df697dd06300a32).
- **Half:** capability | **Confidence:** high

**What changed.** Alpha.1 [can load custom config-server bundles without redirects, with optional OAuth and endpoint/identity-scoped caches](https://github.com/openai/codex/commit/f3a90545aed3188ee1e5c119ec89a742de399cdc). Bootstrap network access is constrained, and invalid bundle errors avoid leaking configuration contents. This follows [separating bundle loading from ChatGPT-specific authentication](https://github.com/openai/codex/commit/5a1c247dd5fd682c22a34af93df697dd06300a32); stable server-mismatch rejection does not contain this complete delivery mechanism.

**Operator consequence.** Evaluate custom policy delivery with missing sign-in, changed endpoints, stale caches and failed validation. Keep stable enforcement and preview delivery as separate rollout decisions.

## 32. An opt-in native tool copies files between environments without model context

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `e7de1f444089c29ac002e3df08d940f6de8a2613` Each listed commit is absent from 0.163.0 and present in 0.164.0 and 0.165.0-alpha.1.
- **Receipt:** [file-copy tool](https://github.com/openai/codex/commit/e7de1f444089c29ac002e3df08d940f6de8a2613).
- **Half:** capability | **Confidence:** high

**What changed.** The [host-registered multi_env_copy_file extension transfers bytes between selected environments without loading file contents into model context](https://github.com/openai/codex/commit/e7de1f444089c29ac002e3df08d940f6de8a2613). It requires absolute endpoint-native paths and enforces each endpoint's sandbox policy and grants. Failed writes can leave truncated or partial targets; it is not transactional.

**Operator consequence.** Test binary transfers, denied endpoint access and interruption before replacing model-mediated transfer scripts. The host must register the opt-in tool, and recovery must account for partial destinations.

## 33. Dependency audits retain an explicit unmaintained-package exception

- **Date:** 2026-10-23
- **Channel:** `tagged-release`
- **Ancestry evidence:** `4dbd9d30ea0466ec5bb1524f24c56cfc8ee4c5b1` Each listed commit is absent from 0.163.0 and present in 0.164.0 and 0.165.0-alpha.1.
- **Receipt:** [audit exception](https://github.com/openai/codex/commit/4dbd9d30ea0466ec5bb1524f24c56cfc8ee4c5b1), [RustSec advisory](https://rustsec.org/advisories/RUSTSEC-2026-0374.html).
- **Half:** defect | **Confidence:** high

**What changed.** Stable [suppresses RUSTSEC-2026-0374 in cargo audit and cargo deny](https://github.com/openai/codex/commit/4dbd9d30ea0466ec5bb1524f24c56cfc8ee4c5b1), retaining basic-toml 0.1.10 through age localization dependencies in codex-secrets. [RustSec classifies the 20 October notice as informational unmaintained-package status with no patched release](https://rustsec.org/advisories/RUSTSEC-2026-0374.html). It is an exception, not a repaired exploitable vulnerability.

**Operator consequence.** Record the exception and remove it when age localization migrates away from basic-toml. A clean dependency-audit result must be read with its ignore list.

## 34. CLI and TypeScript reach 0.164.0 while Python remains 0.163.0

- **Date:** 2026-10-24
- **Channel:** `docs-only`
- **Ancestry evidence:** Registry observation, not a CLI ancestry claim. Author UTC reads: CLI 10:32:19.164436Z; TypeScript 10:32:18.327356Z; Python 10:32:17.273458Z; Homebrew 10:32:17.397701Z, all on 2026-10-24. GitHub Latest is based on the earlier successful inventory reads.
- **Receipt:** [stable release](https://github.com/openai/codex/releases/tag/rust-v0.164.0), [CLI registry](https://registry.npmjs.org/@openai%2fcodex), [TypeScript registry](https://registry.npmjs.org/@openai%2fcodex-sdk), [Python registry](https://pypi.org/pypi/openai-codex/json), [Homebrew API](https://formulae.brew.sh/api/cask/codex.json).
- **Half:** both | **Confidence:** high

**What changed.** The timed [CLI](https://registry.npmjs.org/@openai%2fcodex) and [TypeScript](https://registry.npmjs.org/@openai%2fcodex-sdk) reads select latest=0.164.0 and alpha=0.165.0-alpha.1; [Python](https://pypi.org/pypi/openai-codex/json) remains 0.163.0 with no 0.164.0 publication observed. Homebrew selects 0.164.0. These are individually timed channel observations, not end-of-day promises; the stable release date is 23 October.

**Operator consequence.** Install the explicit CLI version and check each SDK publication separately. Do not prescribe an unpublished Python 0.164.0 or infer runtime compatibility from matching project names.

## 35. Current documentation makes ChatGPT-authenticated auto-review free

- **Date:** 2026-10-24
- **Channel:** `docs-only`
- **Ancestry evidence:** Registry or living-document observation, not a CLI ancestry claim; read times are recorded below and in Install today.
- **Receipt:** [current plan help](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan), [comparison credential selection](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L57-L70), [comparison default](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs).
- **Half:** capability | **Confidence:** high

**What changed.** The [current plan help says auto-review safety checks are free and do not consume plan limits when signed in with a ChatGPT account](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan), independently read on 24 October at approximately 10:30 UTC. This is current billing documentation, not proof of when that policy began. Optional Decisions comparison remains off and selects a separate API credential path.

**Operator consequence.** Retire the broad open question about ordinary ChatGPT-authenticated review pricing. Obtain a request-matched billing record and provider terms for optional API-key comparison before generalizing the free-usage statement.

## Prior claims re-checked

The following are the 19 `status: active` claims in `content/profiles/codex.md`. These checks read the newest stable tree; they are static verification, not executed acceptance tests.

- `current-install-and-sdk`: **changed**. Stable is [0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0), [TypeScript is 0.164.0](https://registry.npmjs.org/@openai%2fcodex-sdk/0.164.0), and [Python is still 0.163.0](https://pypi.org/pypi/openai-codex/0.163.0/json). The lockstep installation advice is superseded by the individually timed registry reads above.
- `shared-background-server`: **holds at 0.164.0**. [`daemon_auto_start` remains stable/default-on](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1054-L1058), with [startup selection and standalone exceptions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/tui/src/startup_orchestration.rs). The [daemon README](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L22-L28) still describes a shared startup environment rather than per-client isolation. This is not proof that every closed desktop launch attaches to that same process.
- `daemon-updates-independent-of-cli`: **holds at 0.164.0; network-policy consequence changed in section 1**. [Installation selection can follow latest independently of the launching CLI](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/src/prepare_install.rs#L324-L331); [updater controls and explicit-update behavior remain separate](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L48-L70). A CLI pin still is not a complete runtime policy.
- `model-and-server-defaults`: **holds at 0.164.0**, with a hosted-availability qualification. The [bundled catalog ranks GPT-6.1 Sol first and gives it low default reasoning](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/models-manager/models.json). [Fresh TUI launches send invocation-selected model/effort and otherwise defer to server settings, except explicit profile launches](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/tui/src/app_server_session/startup_launch.rs). [`multiAgentMode` remains deprecated and ignored](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-protocol/src/protocol/v2/thread.rs#L110-L113). The bundled GPT-5.5 entry still has no retirement timestamp; it cannot override the dated hosted retirement notice discussed below.
- `stable-sandbox-helper-fixes`: **holds at 0.164.0 and is extended by section 5**. The [helper resolver rejects writable or replaceable executable paths](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/sandboxing/src/bwrap.rs#L179-L310), and [pre-confinement glob scanning uses that resolver](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/linux-sandbox/src/bwrap.rs#L484-L490). The original `bwrap` and `rg` fixes remain in the tree. No full sandbox escape assessment was performed.
- `escalated-terminal-input-review`: **holds at 0.164.0**. [`write_stdin_approval` defaults on](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1377-L1381); the [stdin approval path retains the empty-input and non-TTY Ctrl-C exceptions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/unified_exec/stdin_approval.rs#L190-L251). Section 3 concerns a different escalation-retry boundary.
- `explicit-distrust-and-project-config`: **holds at 0.164.0**. [Project AGENTS.md is skipped for explicit distrust](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/agents_md.rs#L63-L65), and [no saved trust decision is distinct from explicit Untrusted](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/config_toml.rs#L616-L623). [Project configuration is separately gated by trust](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/loader/mod.rs). Do not collapse reading instructions, enabling project configuration, and authorizing commands into one gate.
- `guardian-policy-and-audit-export`: **holds at 0.164.0, with a docs/code vocabulary qualification**. The [feature definitions retain Guardian approval on and V2/comparison off](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs); [Full Access still bypasses the older model reviewer while retaining host validation](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/ext/guardian-reviewer/src/routing.rs#L88-L94). Both [`guardian_policy_config` and `guardian_extra_policy` remain in managed requirements](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/config_requirements.rs#L1083-L1084). [Opt-in OTLP synchronous assessment export still excludes cached V2 approvals and caps rationale bytes](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/otel/README.md#L158-L174). Current [auto-review docs](https://learn.chatgpt.com/docs/sandboxing/auto-review) describe managed policy plus local `[auto_review].policy`; they are not a dated proof that the older tagged setting disappeared.
- `steering-and-worktree-tools`: **changed, see sections 8 and 9**. [`instant_interrupt` remains default-on/under-development, while worktree and realtime flags are retired](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs). The new cancellation path improves steering, but retaining an old worktree flag is no longer an effective capability switch.
- `stable-daybreak-gate`: **changed, see section 11**. [`cli_daybreak` is true in 0.164.0](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1449-L1453), first stable in 0.163.0. The stable-off description no longer holds; account eligibility remains separate.
- `remote-execution-authentication`: **holds at 0.164.0**. [`exec-server` still permits unauthenticated listeners](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/exec-server/src/server/transport.rs), whereas [app-server rejects a non-loopback WebSocket listener without authentication](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-transport/src/transport/websocket.rs#L166-L172). Runtime signing in section 12 does not erase this distinction.
- `removed-apis-and-fork-context`: **partly holds; the model-override restriction needs a historical correction**. [`thread/rollback` remains absent and `thread/revert` remains in the protocol](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-protocol/src/protocol/common.rs). [Positive legacy fork counts still mean full history, `none` starts fresh, and invalid values fail](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/handlers/multi_agents_v2/spawn.rs#L213-L238). However, the profile's absolute assertion that model overrides require `fork_turns: "none"` is not supported by the current backend: [child preparation applies requested model/effort independently of full-history mode, subject to model/effort validation](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/agent/child_config.rs#L52-L85). [The same behavior is already present at baseline 0.162.1](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agent/child_config.rs#L51-L84). Correct the profile, but do not invent an in-window release event for this discrepancy.
- `preview-isolation-work`: **changed, see sections 1 and 2**. The earlier proxy authorization, masking code, and sandbox-integrity work are now in stable. [Masking is still off](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1483-L1487); [integrity checks remain observational, and preparation failure or timeout does not block the sandbox launch](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/exec-server/src/sandbox_integrity/runner.rs#L17-L20). Stable containment of code is not default activation or proof of containment.
- `deny-globs-ignore-ripgrep-config`: **holds at 0.164.0**. [Glob expansion still supplies `--no-config` to ripgrep](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/linux-sandbox/src/bwrap.rs#L1018-L1022). No corresponding execution test was run.
- `forced-macos-managed-preferences`: **holds at 0.164.0**. [Managed preferences still test `CFPreferencesAppValueIsForced` and ignore non-forced values](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/loader/macos.rs#L160-L206). Windows additions in section 7 do not replace this macOS delivery requirement.
- `fresh-child-dynamic-tools-opt-in`: **holds at 0.164.0**. [Fresh V2 child inheritance checks its feature gate](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/agent/control/spawn.rs#L869-L872), and [`multi_agent_v2_dynamic_tools` remains false](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1525-L1529). Separately, [selected skills/plugin capabilities now survive either history mode](https://github.com/openai/codex/commit/845345b1dd4f8e2a5d5ce91363fff666e41b07fc), absent from 0.162.1 and present in 0.163.0/0.164.0; dynamic client tools and selected plugin capabilities are not interchangeable.
- `ranked-tool-discovery-and-streaming`: **holds at 0.164.0**. [`code_mode_tool_search` remains off](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1203-L1207); [search filters against the exact step's available nested tools before returning ranked results](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/handlers/tool_search.rs#L288-L325). [`as_settled` and `stream_settled` remain implemented](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/code-mode-runtime/src/runtime/settled.js). No throughput benchmark was run.
- `user-goal-origin-survives-compaction`: **holds at 0.164.0**. [User-goal context is explicitly distinguished from tool or automatic updates](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/context/user_goal.rs), and [the app-server processor records an explicit user update before changing goal state](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server/src/request_processors/thread_goal_processor.rs#L199-L213). This preserves authorization provenance; it does not promise that every stalled goal restarts itself.
- `preview-daybreak-defaults`: **superseded by stable availability, section 11**. [Both defaults are now in 0.164.0](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1449-L1459), not a reason by themselves to install a preview.

The five bolded paragraphs in "Where it stands, 2026-10-13" are checked separately:

- **Stable baseline: 0.162.1.** **Superseded** by [0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0). The [Python publication lag](https://pypi.org/pypi/openai-codex/0.163.0/json) also supersedes the paragraph's matching-newest-SDK instruction.
- **Use `codex --no-daemon` when the interactive baseline must stay fixed.** **Holds at 0.164.0**: [the switch remains](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/tui/src/cli.rs#L88-L89), [startup honors it](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/tui/src/startup_orchestration.rs), and [`codex exec` still has its direct execution path](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/exec/src/lib.rs). Explicit standalone pins remain a separate installation choice in the [daemon contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md).
- **If you keep the server, control its updater separately.** **Holds at 0.164.0**, but the following warning about default-client fallback is **superseded by section 1**. [Disable automatic updating and restart to apply it; explicit update still selects stable](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L48-L70). Restart is not a rollback to the invoking CLI's version.
- **Set the server's environment and telemetry.** **Holds at 0.164.0**. [The server retains its startup environment](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L22-L28); [daemon launch still enables analytics by default](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/src/backend/pid.rs#L417-L421). Replacing a token in a new terminal is not evidence of changing a live server's copy.
- **Set the model and effort for cost or evaluation baselines.** **Holds at 0.164.0**. [Invocation inputs and explicit profiles still determine which values override server defaults](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/tui/src/app_server_session/startup_launch.rs); [`multiAgentMode` is still ignored](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-protocol/src/protocol/v2/thread.rs#L110-L113). Record the effective model on the running thread, not just a local configuration file.

## Carry-forward answers

- **`stance.watch_next`: stable updater network enforcement. Yes.** The [fix](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8) is an ancestor of 0.163.0 and 0.164.0, and the [newest stable factory](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464) retains it. The required next evidence is a fleet-specific blocked-network/configuration-failure probe, not another release announcement.
- **Unresolved: trace a pinned installation. Still open.** [The check schedule, selected package, explicit update, and restart behavior remain documented](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md), but no daemon was launched, updated, or interrupted here. A code read cannot establish an installation's exact update timing or interruption cost.
- **Unresolved: wait for stable updater network enforcement and probe it. Yes for release availability; still open for the probe.** Section 1 settles the first part. [The updater reads saved network configuration](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L63-L70); the fleet's actual saved configuration and network behavior remain unobserved.
- **Unresolved: require a daemon lifecycle commitment. Still open.** The [0.164.0 README still calls the lifecycle contract experimental](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L1-L9). Default use by the terminal does not supply the missing support commitment.
- **Unresolved: confirm review prices and the account charged. Partly settled by current documentation; optional comparison billing remains open.** The [OpenAI Help Center now explicitly says ChatGPT-authenticated auto-review safety checks are free and do not consume plan limits](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan). This was read on 2026-10-24; the page's relative update label is not an immutable date for when that policy began. Narrow the profile's open question accordingly. Separately, [Decisions comparison selects an explicit credential or eligible OpenAI API credential](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L57-L70), and [its flag remains off](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs). The [2026-10-22 Decisions API announcement](https://openai.com/index/decisions-api/) does not identify the account billed for that optional comparison. No matched billing record was available, and the ChatGPT-sign-in statement should not be generalized to API-key comparisons.

The parent harvest has no separate final "Observed after window close" section. Its dated preview and unplaced leads were nevertheless followed: updater/proxy/masking and Daybreak reached 0.163.0; cold-resume permissions are in 0.163.0; observational integrity checks remain observational at 0.164.0. The parent's scheduled GPT-5.5 retirement is now a [dated 2026-10-14 changelog entry, effective 19:00 UTC for ChatGPT-authenticated surfaces, with API-key access unaffected](https://learn.chatgpt.com/docs/changelog). This is a hosted-service notice, not evidence from the [bundled model catalog](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/models-manager/models.json), which still includes GPT-5.5. Account-level enforcement was not tested.

## Operator questions settled

- **Does this change how an operator should run, trust, or govern Codex?** Yes. Use the [released 0.164.0 baseline](https://github.com/openai/codex/releases/tag/rust-v0.164.0), control the daemon separately, test the [updater policy](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8), and distinguish [masking fallback](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/runtimes/unified_exec.rs#L706-L745) from a hard secret boundary.
- **Does this affect long-horizon autonomous software work?** Yes. [Compaction buffers incomplete attempts](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890), [compressed histories resume](https://github.com/openai/codex/commit/76ed3b484d62ccceb9fa512ff4dd139f421814c3), and [full-history forks preserve prefixes by default](https://github.com/openai/codex/commit/e1b9c9457ceca75a99b034a5df39ac48c3998d15). These narrow recovery mechanisms do not settle social reports of stalled Goal runs.
- **Does this affect verification, replay, resume, permissions, memory, or receipts?** Yes. [Retry review follows the escalated authority](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/orchestrator.rs#L484-L518), [hook trust follows contents](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/engine/plugin_trust.rs), and [cold resume restores permissions within overriding constraints](https://github.com/openai/codex/commit/7c9bfb910ef65c8f4a957c53affbd43d5fac2882). Bounded local logs require a deliberate evidence-retention choice.
- **Does this change whether teams should wrap, test, adapt, or ignore Codex capability?** Yes. Compare [native read concurrency](https://github.com/openai/codex/commit/c9e0fffbbc05c36478686444f6ab1edbadfe2768), [enterprise MCP](https://github.com/openai/codex/commit/1569abc5dcff34a161a37c0697617b5025e1a851), and presets with existing wrappers; remove [patched-zsh assumptions](https://github.com/openai/codex/commit/a645742bb5615026ae673c9527f146ee551d4949). Retain external durability only for a failure contract it actually proves, rather than equating native resume with replay of every tool side effect.
- **Does this make serious agent work easier to start, inspect, or control without hiding authority?** Partly. [Native configuration/presets](https://github.com/openai/codex/releases/tag/rust-v0.164.0) and [Windows proxy authentication](https://github.com/openai/codex/commit/f496b09bd141af0a6ec1a7ebf3e5fc557ac795dc) reduce setup friction. The operator still needs the running server identity, active feature flags, applied managed requirements, and account entitlement. The service and client do not become one release boundary.

## Leads not promoted

All X URLs below are discovery pointers from the supplied sweeps, never receipts for product behavior. Gists are paraphrased, not quoted. Where a lead's technical portion was verified, its numbered section is named; unverified numerical, commercial, or broader causal claims remain here. A GitHub issue is likewise evidence of a report, not independent proof of the reported behavior.

**Codex sweep and overlapping banter leads:**

- **Desktop disk reduction, 2026-10-13** ([maintainer lead](https://x.com/thsottiaux/status/2110151780478927344)): outside this interval's cutoff. Section 13 establishes later CLI cleanup mechanisms, not the claimed desktop percentage. No measured desktop before/after result or versioned desktop storage change was established.
- **Conflicting environment-variable approvals across harnesses, 2026-10-14** ([operator lead](https://x.com/nicksainato/status/2110195784603795850)): no action payload, resolved policies, or versions sufficient for a controlled comparison. The [current approval orchestrator](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/orchestrator.rs) cannot establish what happened in that session. Unverified case report, not a general Codex permission rule.
- **Capacity relief and automatic continuation, 2026-10-15; Goal stalls, 2026-10-19 and 2026-10-24** ([maintainer](https://x.com/thsottiaux/status/2110750421367287996), [first stalled-run report](https://x.com/yagcidev/status/2112101075348021447), [later report](https://x.com/willdepue/status/2113789643275862025)): the [release record](https://github.com/openai/codex/releases/tag/rust-v0.164.0) proves narrower compaction/resume fixes in section 6. It does not prove added backend capacity or automatic continuation for every Goal path. No matched transcript, retry log, or original regression issue established the reported stalls' mechanism. Both the improvement claim and the counterreports remain unverified beyond attribution.
- **Codex origin story and usage scale, 2026-10-15** ([interview lead](https://x.com/danshipper/status/2110802324939485505)): history and usage assertions do not establish a released operator capability. No audited usage series was found in the versioned records. Not promoted.
- **Subagent context reuse, 2026-10-16** ([maintainer lead](https://x.com/thsottiaux/status/2111244596131111253)): the [prefix-preservation default](https://github.com/openai/codex/commit/e1b9c9457ceca75a99b034a5df39ac48c3998d15) is promoted in section 8. Claimed quota savings and cache-hit improvements require workload measurements; no percentage or perpetual caching claim is promoted.
- **Internal Slack, telemetry, and dead-code workflows, 2026-10-16** ([practitioner lead](https://x.com/rrroim/status/2111171952849334585)): the [app-server implementation and daemon contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md) support integrations in general, not the claimed internal deployment or a newly released Slack telemetry workflow. No reproducible internal artifact was available.
- **Subscription ZDR, 2026-10-17** ([criticism](https://x.com/GeoffreyHuntley/status/2111389399342797280)): [authentication documentation](https://learn.chatgpt.com/docs/auth) distinguishes ChatGPT account policy from API organization data controls, and [cyber access documentation](https://learn.chatgpt.com/docs/cyber-safety) does not confer ZDR merely through program access. A blanket rule about every subscription or every enterprise contract is not established. No retention behavior was tested.
- **Desktop editing of prior messages, 2026-10-19** ([maintainer lead](https://x.com/thsottiaux/status/2111990254408434095)): [`thread/revert` already exists at baseline](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/app-server-protocol/src/protocol/common.rs). That does not date a closed desktop UI rollout. No versioned desktop entry for this particular change was established; not relabeled as a new CLI API.
- **OpenCode-linked credit incident and refunds, 2026-10-19** ([Codex maintainer lead](https://x.com/thsottiaux/status/2112034063934742720), [OpenCode's 2026-10-17 statement](https://x.com/opencode/status/2111519637049319818)): targeted official-source searches did not yield a technical incident record establishing access path, credential scope, or affected Codex accounts. Refund delivery requires account evidence. The [Daybreak gate changes](https://github.com/openai/codex/commit/6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7) are independently verified in section 11; they are not proof of the incident or of a remedy. No exploit or attribution is inferred from the social gists.
- **Wrong usage plan for about 40,000 accounts, 2026-10-20** ([maintainer lead](https://x.com/thsottiaux/status/2112592264686149749), [reset question](https://x.com/arb5z/status/2112596615379001776)): no account ledger or incident record verifies the count or credited amounts. The [current help article explains plan-dependent usage and one-time reset eligibility](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan), but does not independently prove this cohort or refund. Keep that distinction even though the statement is from a maintainer.
- **Runtime registration as durable-key client lockout, 2026-10-20** ([criticism](https://x.com/dcolascione/status/2112420058064417132)): the verified implementation is section 12. [Keys are generated in memory and the feature is off by default](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/runtime.rs). Persistent-key and universal lockout claims are not supported. The [OpenAI access-policy post](https://openai.com/index/broad-access-through-consistent-standards/) describes future review standards, not observed mandatory runtime attestation in this release.
- **Twelve-hour API caching versus indefinite ChatGPT caching, 2026-10-21; missing cache after a long pause, 2026-10-24** ([maintainer](https://x.com/thsottiaux/status/2112712984644784534), [operator](https://x.com/bra1n_dump/status/2113854374804086988)): [API prompt-caching documentation](https://developers.openai.com/api/docs/guides/prompt-caching) documents retention options, including twelve hours for eligible Responses models; this is not a universal ChatGPT Codex cache-duration contract. [Issue 56050](https://github.com/openai/codex/issues/56050) separately reports a desktop Plus thread losing cached-input credit after an 11-hour-44-minute gap, while acknowledging that identical cache keys/prefixes were not proven. Do not merge that issue with the separate CLI anecdote or treat either as proof of universal cache failure. No perpetual Codex caching guarantee was found in the primary docs checked.
- **PHP vulnerability checker, 2026-10-21** ([OpenAI lead](https://x.com/OpenAI/status/2112945805686604033)): the [disclosure program](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/) links an [OpenAI checker repository, read at ffcd3fc82e5b404f2a04a95b2805ca7639d530fa](https://github.com/openai/php2shell-checker/blob/ffcd3fc82e5b404f2a04a95b2805ca7639d530fa/README.md). Its version/header checks, unknown-result cases, and backport caveat do not prove exploitability or a safe installation. This is an adjunct checker/skill, not a Codex sandbox fix. It was neither installed nor run, and no PHP CVE mechanism is inferred here.
- **Google Cloud availability, 2026-10-21** ([OpenAI lead](https://x.com/OpenAI/status/2112988118471295323)): the client portion is promoted in section 15. The [official announcement](https://openai.com/index/openai-models-google-cloud/) says availability is forthcoming; no live access or stable-client availability is inferred from the launch post.
- **Git clone fails while curl works unless sandbox networking is enabled, 2026-10-21** ([Japanese-language operator report](https://x.com/jion_rockford/status/2112884274596835572)): [proxy authorization now occurs before DNS](https://github.com/openai/codex/commit/37eaae6eeb71c3bd3d165f52515086db8f5e7dee), but that specific mechanism does not establish the cause of this report. No exact CLI version, protocol, effective policy, and DNS trace were supplied for reproduction. Do not advise enabling broad network access as a verified fix.
- **Cloud work is unavailable or unobservable from desktop, 2026-10-22** ([operator lead](https://x.com/pvncher/status/2113284531046527151)): current [Codex Cloud docs explicitly describe starting and reviewing work from desktop, web, and mobile, with cloud tasks continuing while the computer sleeps](https://learn.chatgpt.com/docs/cloud). That cuts against a categorical availability claim. It does not prove live stream/GUI parity with another product or this account's rollout; no desktop session was observed.
- **Claude finishes a task faster, Codex app feels slow, and alternative remote interfaces feel better** ([2026-10-22 comparison](https://x.com/GeoffreyHuntley/status/2113119417303454155), [2026-10-23 app complaint](https://x.com/AtaeiMe/status/2113779581945811312), [2026-10-24 remote-interface comparison](https://x.com/theo/status/2113865156778430680)): no matched task, configuration, accepted output, or timing method. Opinion and workload anecdotes remain leads; no performance verdict or regression mechanism is promoted.
- **Source builds advertise 0.0.0 and fail a model request, 2026-10-22** ([report](https://x.com/dcolascione/status/2113092189383205106)): [issue 55658](https://github.com/openai/codex/issues/55658) is an open original report describing version-header behavior, with no maintainer confirmation in the read. It does not prove the runtime-signing lockout theory. No source build, header override, or service request was executed.
- **ChatGPT uses app-server, 2026-10-23** ([observation](https://x.com/theo/status/2113384521962062332)): the [current shared-server contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md) supports the architectural connection, but the default shared CLI path predates this interval. No new release event is inferred.
- **Daybreak Blue/Red model availability, 2026-10-23** ([operator lead](https://x.com/codestantine/status/2113418894274888183)): section 11 proves the stable gates. [Current cyber-safety docs](https://learn.chatgpt.com/docs/cyber-safety) describe separately approved Blue/Red access; they do not prove that every older social model slug is generally available or entitled on an ordinary Codex account.
- **Decisions GA, OpenResponses, customer deployment, and usage resets, 2026-10-23** ([maintainer roundup](https://x.com/thsottiaux/status/2113492187770175603)): [Decisions GA](https://openai.com/index/decisions-api/) and the [AAIF project announcement](https://aaif.io/news/agentic-ai-foundation-announces-four-new-projects) are primary announcements. The Codex [comparison feature remains off](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs), so neither announcement proves a new default reviewer or new CLI integration. Customer stories and account reset claims do not establish a reproducible harness change.
- **Compaction and Guardian retry fixes, 2026-10-23** ([release-summary lead](https://x.com/tbs142857/status/2113672854520881210)): promoted only after [compaction](https://github.com/openai/codex/commit/400f2356d60c4663d46817a40b4d09c5c86f35ad) and [retry](https://github.com/openai/codex/commit/4b9c24f98c6d886134fd2fc237355064708ff21f) containment and code checks, sections 3 and 6. No broader reliability percentage is claimed.
- **Windows SystemRoot resume failure, 2026-10-23** ([lead](https://x.com/SiftByte/status/2113677104990798060)): [issue 56264](https://github.com/openai/codex/issues/56264) and the [matching patch](https://github.com/openai/codex/commit/d4bdafd378a8e328a67a4cd3557b5fe634af378c) support section 14. A shipped fix is expressly not promoted because no tag contains it.
- **Presets, enterprise MCP, resume, proxy auth, and doubled CLI usage, 2026-10-23** ([maintainer lead](https://x.com/thsottiaux/status/2113770862860222611)): the [0.164.0 features](https://github.com/openai/codex/releases/tag/rust-v0.164.0) are promoted in sections 6, 7, and 10. The usage multiplier has no independently inspectable denominator or series; it remains an attributed claim only.
- **Replace Goals with manager agents and scheduled tasks, 2026-10-24** ([advice](https://x.com/pvncher/status/2113794328690647521)): [Goals remain a stable/default-on feature](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs), and [explicit goal provenance remains implemented](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/context/user_goal.rs). The advice is not a product deprecation or proof that its proposed replacement is more reliable.
- **Guardian reads AGENTS.md, 2026-10-24** ([aside](https://x.com/pvncher/status/2113794706144444463)): [project instructions enter context subject to explicit distrust](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/agents_md.rs); [auto-review docs](https://learn.chatgpt.com/docs/sandboxing/auto-review) describe retained transcript/action context and managed policy. This does not make AGENTS.md a guaranteed organization-policy enforcement interface or prove how the reported decision was reached.
- **Desktop and CLI do not share one live runtime, 2026-10-24** ([lead](https://x.com/JoshRadDev/status/2113878280625692672)): [issue 41014](https://github.com/openai/codex/issues/41014) remains an open report with user evidence of desktop spawning a private stdio process under launch overrides. The [daemon contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md) cannot prove every closed desktop launch attaches. Shared persisted history and shared live process are different claims. No 0.164.0 desktop reproduction or verified fix was obtained.
- **Codex lacks remote control, 2026-10-24** ([criticism](https://x.com/antirez/status/2113884823068791059), [correction](https://x.com/reach_vb/status/2113904766975680663)): [`remote-control start`, `stop`, and `pair` exist at 0.164.0](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/remote_control_cmd.rs#L58-L67), and [already exist at 0.162.1](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/cli/src/remote_control_cmd.rs). The categorical absence claim fails a code check; the feature is not new in this interval. Pairing usability and account reach were not tested.

**Additional banter and topic-sweep leads:**

- **Quota comparisons and intentional slowdown theories** ([hakmgpt](https://x.com/hakmgpt/status/2113310831165198826), [iuditg](https://x.com/iuditg/status/2112599494135263672), [NYCounihan](https://x.com/NYCounihan/status/2111896812009521660)): the [current help article](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan) explains workload-dependent/shared usage and account reset options. It does not validate matched-workload economics, the complained-of account state, or intentional latency discrimination. Its explicit statement that ChatGPT-authenticated auto-review checks are free does settle part of the profile's separate cost question.
- **Stale memory mistaken for provider refusal** ([noahreeveshq](https://x.com/noahreeveshq/status/2111544480457445781)): an operator's self-correction about another harness, reportedly diagnosed with Codex. [Codex's explicit instruction and trust handling](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/agents_md.rs) does not reproduce that session or make it a new Codex capability. Retain as a diagnostic caution, not provider defect evidence.
- **Compaction laundering security claim** ([cristian_le0](https://x.com/cristian_le0/status/2113658709981163933)): chased to the [original paper, version 1](https://arxiv.org/html/2610.29869v1), dated 2026-10-21. Its E10 experiment reports zero successful escalation cases for Codex in 15 tested cases using typed-role serialization, while reporting failures for some flattened transcript formats. This is evidence against a blanket assumption that all compaction loses authority, but a bounded paper result is not proof that current 0.164.0 resists every injection. The tested harness revision and full method were not independently reproduced; no paper code was executed.
- **Agent Skills and OpenResponses governance** ([ClaudeDevs lead](https://x.com/ClaudeDevs/status/2113328526413996100)): the [AAIF announcement dated 2026-10-22](https://aaif.io/news/agentic-ai-foundation-announces-four-new-projects) confirms project donations. It establishes governance, not a new Codex runtime flag, universal skill portability, or the safety of a supplied skill. Platform adoption counts were not independently audited.
- **External durability for Codex** ([Vercel lead](https://x.com/vercel/status/2112653833382027729)): the [primary Vercel engineering post dated 2026-10-19](https://vercel.com/blog/making-every-harness-durable) describes durable-harness, intent/outcome logging, mirrored Codex rollouts, replay of completed results, and special handling of tools whose interrupted execution may already have occurred. Its Codex adapter requires Vercel Sandbox and opt-in built-in tools. This is substantive evidence of an external recovery layer, not native Codex durability or a proven months-long run. No adapter, failure injection, or billing result was tested. It is a relevant counterexample to assuming the native harness has made all recovery scaffolding redundant.
- **Moving from Codex Mac to cloud agents** ([kouky](https://x.com/kouky/status/2113900977275416718)): individual switching evidence, not proof Codex lacks remote execution. [Codex Cloud docs describe tasks continuing while the computer sleeps](https://learn.chatgpt.com/docs/cloud). They do not establish the reporter's desktop experience or feature parity with Amp; no cross-product execution test was performed.
- **Shared session stores, replay, and S3 exports** ([BHolmesDev](https://x.com/BHolmesDev/status/2113281001715597358)): [Codex's shared daemon](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md) is not a distributed session warehouse. The Vercel record above describes one external approach. The named team's private S3 workflow and another product's replay guarantees were not available for verification.
- **Stale AGENTS.md audit implies every harness would trust all claims** ([AnonyfoxCom](https://x.com/AnonyfoxCom/status/2112879852567101668)): [Codex can ingest project instructions unless explicitly distrusted](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/agents_md.rs); that does not prove it believed every statement or acted on the alleged stale entries. No exact instruction revision, Codex run, or acceptance trace establishes the claimed six-error effect. No failure rate is promoted.
- **Kilo's Cursor migration offer and OpenAI-model removal claim** ([Kilo lead](https://x.com/kilocode/status/2111165272484725019)): adjacent vendor marketing, not a Codex release or proof of Codex account entitlement inside another client. The [Codex authentication contract](https://learn.chatgpt.com/docs/auth) distinguishes supported ChatGPT and API sign-in surfaces; it does not validate the offer or the future Cursor cutoff. No corresponding Codex change was established.
- **JetBrains adoption percentages circulated as current growth** ([survey lead](https://x.com/william40152988/status/2112662419600519527)): the [primary JetBrains article is dated 2026-08 and describes May-July survey observations](https://blog.jetbrains.com/research/2026/08/ai-coding-agent-adoption-2026/). It is historical context, not October growth; broad Copilot is not Copilot CLI. Do not merge those percentages with this window's CLI usage claim.
- **CLI growth caused by Claude-driven wrappers** ([LundstenA](https://x.com/LundstenA/status/2113821190926012910)): a proposed explanation for an unverified aggregate. The [CLI and non-interactive implementation](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/exec/src/lib.rs) permits orchestration, but says nothing about the usage-share denominator or causality. Not promoted.
- **Cross-harness preferences and human routing overhead** ([hunvreus](https://x.com/hunvreus/status/2113449702712918147), [badlogicgames](https://x.com/badlogicgames/status/2113302439164281308), [korenmiklos](https://x.com/korenmiklos/status/2112639255872987156), [morganlinton](https://x.com/morganlinton/status/2113782141918343386), [joayats](https://x.com/joayats/status/2113726495394799786), [possibly_harsh](https://x.com/possibly_harsh/status/2113520994837213217), [ai_suxiaole](https://x.com/ai_suxiaole/status/2113499148154761724)): useful questions about accepted work and human attention, without a shared task/method or primary product change. No comparative ranking or universal replacement claim follows.
- **The human becoming the tool** ([maintainer reflection](https://x.com/thsottiaux/status/2113838156193894447)): editorial framing only, with no released behavior to verify. It does not substitute for measuring setup, intervention, and recovery work.
- **API CLI naming discussion** ([LyalinDotCom](https://x.com/LyalinDotCom/status/2113367898727272897)): a distinction about Google's API utility, not a change to the [Codex CLI identified by its tagged README](https://github.com/openai/codex/blob/rust-v0.164.0/README.md). No Codex finding.
- **Pre-cutoff comparison and prompt-extraction posts** ([OrcaRouter, 2026-09-30](https://x.com/OrcaRouter/status/2105364729422344549), [Yuchenj_UW, 2026-10-03](https://x.com/Yuchenj_UW/status/2106435001340621147), [SAKSHAM111, 2026-10-03](https://x.com/SAKSHAM111/status/2106437243686867048), [Hesamation, 2026-10-10](https://x.com/Hesamation/status/2109070439666327856), [joshmatz, 2026-10-11](https://x.com/joshmatz/status/2109105661166448890), [Teknium, 2026-10-12](https://x.com/Teknium/status/2109529382419395051)): the sweeps include historical context, but these dates precede this interval. No current product fact or new-window usage count is inferred from them.

**Writing-lane, docs, and advisory leads:**

- The 109-item writing lane was scanned for Codex, OpenAI, model access, approvals, cloud execution, security, and harness durability. The Google Cloud, Decisions, vulnerability-checker, AAIF, and Vercel leads are resolved above. [OpenAI's 2026-10-21 access-policy post](https://openai.com/index/broad-access-through-consistent-standards/) describes future access standards; it does not establish a released runtime-attestation requirement. Customer deployments, model-training infrastructure, storage for hosted services, and a ChatGPT connector announcement did not supply a new versioned Codex mechanism and were not promoted as one.
- The [2026-10-14 GPT-5.5 retirement entry](https://learn.chatgpt.com/docs/changelog) is retained as a dated hosted-service fact and carry-forward answer, rather than assigned to a CLI commit. Update saved ChatGPT-authenticated selections; API-key sessions have a separately stated exception. The [0.164.0 bundled catalog](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/models-manager/models.json) is not proof of continuing hosted entitlement.
- The [repo advisory inventory](https://api.github.com/repos/openai/codex/security-advisories) and [GitHub advisory query for the npm package](https://api.github.com/advisories?affects=%40openai%2Fcodex) returned no newly published in-window advisory in this read. Older [GHSA-w5fx-fh39-j5rw / CVE-2025-59532](https://github.com/openai/codex/security/advisories/GHSA-w5fx-fh39-j5rw) concerns a model-generated working directory becoming the writable sandbox root, allowing writes and commands outside the intended workspace; its fixes are CLI 0.39.0 and IDE 0.4.12. Older [GHSA-xrxf-jgv3-qmrm / CVE-2025-61260](https://github.com/advisories/GHSA-xrxf-jgv3-qmrm) concerns malicious project-local environment/MCP configuration executing commands without confirmation on CLI through 0.23.0. Neither is a new October 2026 finding; the V8 dependency repair in section 16 shows why the narrow feeds are not a complete runtime inventory. No absence-of-vulnerabilities claim follows from this inventory.
- The parent's macOS desktop CVE-2026-100754 lead remains **impact unverified**. The [vendor changelog notice](https://learn.chatgpt.com/docs/changelog) is not a public mechanism or affected-version analysis; [CVE Services still returned no record](https://cveawg.mitre.org/api/cve/CVE-2026-100754). No secondary description of impact is promoted.
- Current [enterprise agent-security documentation](https://learn.chatgpt.com/docs/enterprise/agent-security) distinguishes local and cloud enforcement and describes limits around escalation, hooks, and visibility. It was used as current operational context, not as a newly dated October code change or a guarantee that every action is audited.

## Surfaces checked

- Authorities and baseline: `THESIS.md`, `METHOD.md`, `EDITORIAL.md`, contributor scope, `RESEARCHER-BRIEF.md`, `sources/codex.yml`, `sources/codex.notes.md`, the current Codex profile, the parent Codex harvest, and the Frontier lens in `.claude/skills/frontier-cycle/SKILL.md`. This was a single-source research assignment, not a full publication cycle.
- Identity and channels: the upstream remote and blobless configuration; GitHub release inventory through 150 objects, both in-window stable release bodies, latest preview, the baseline release, and explicit missing-release checks for alpha.12/.13; npm CLI and TypeScript package metadata; PyPI Python metadata; Homebrew cask metadata and pinned tap source. The channel observations have individual UTC read times in Install today.
- Local git reads: tag resolution, complete commit ancestry, branch comparisons, tag containment, release-range logs, and patches. Numbered-section commits were checked against 0.162.1, 0.163.0, 0.164.0, 0.165.0-alpha.1, and the fetched main snapshot where relevant. Only the authorized scratch clone was fetched; no Frontier git write command was run.
- Deep newest-stable reads: updater factory and tests; execution approval orchestration; credential-mask setup and fallback; proxy contract and MITM origin handling; plugin trust hashing and migration; compaction attempt buffering; runtime key generation/registration/auth modes. Additional claim checks read daemon startup/install/updater/environment/telemetry, feature definitions, model catalog, fresh-thread defaults, trust loader, stdin approvals, sandbox helper lookup, ripgrep flags, forced macOS preferences, managed requirements, Guardian routing/export, tool discovery and settlement helpers, subagent parsing/configuration/inheritance, and goal provenance. The GCP provider was read at the newest preview tag; the Windows helper patch was read at its full commit SHA.
- Original issue records: [55658](https://github.com/openai/codex/issues/55658), [56050](https://github.com/openai/codex/issues/56050), [56264](https://github.com/openai/codex/issues/56264), and [41014](https://github.com/openai/codex/issues/41014). Reports and replies were kept distinct from independently verified behavior.
- Official documentation and publication sources read on 2026-10-24: changelog, authentication, cyber safety, auto-review, enterprise agent security, Codex Cloud, prompt caching, Codex plan/usage help, and pricing context; the dated Google Cloud, Decisions API, access-policy, and vulnerability-disclosure posts. The large changelog exceeded the web parser limit, so its HTML was separately text-extracted; this was a read, not execution. The old attempted `/docs/codex/cloud` path failed, but the correct `/docs/cloud` page was reached. Living docs have no immutable historical snapshot in this harvest; no first-publication date is inferred merely from their current wording.
- Social/writing coverage: all 35 records in `social/codex.raw.md`, all of `banter.raw.md`, and all four `topic-*.raw.md` files: agent challengers, coding-agent landscape, Cursor origin, and Pi ecosystem. The Cursor-origin sweep supplied no additional Codex-specific mechanism; unrelated product and model commentary was not converted into Codex evidence. All 109 writing-feed titles were scanned, with relevant leads followed to the primary sources recorded above. X gists were neither quoted nor treated as instructions.
- External primary context: original compaction-laundering paper version 1; Vercel's durability engineering post; AAIF's dated project announcement; JetBrains' dated survey article; the OpenAI PHP checker README at its recorded SHA. No external research or checker code was executed. Advisory inventories and the unresolved desktop CVE identifier were checked as described above.

## Not reached

- No installation, build, test suite, daemon update, blocked-network probe, sandbox attack, credential injection experiment, source-build request, or upstream program was executed. The result establishes source behavior and release containment, not production acceptance. The site was not built and no npm installation occurred.
- Closed desktop, iOS, IDE, and hosted execution were not observed in an authenticated session. In particular, desktop-to-daemon attachment, Windows resume after the untagged fix, remote-control pairing, perpetual caching, capacity recovery, and Goal continuation remain untested. Current docs can establish a supported surface without proving an account's rollout or UI parity.
- Billing records, the asserted usage-growth denominator, the wrong-plan cohort, refunds, incident emails, and the OpenCode-linked credit incident's technical mechanism were unavailable. ChatGPT-authenticated auto-review has a current free-usage statement; optional Decisions comparison billing and API-key scope still require separate evidence.
- No replay/failure test of Vercel's Codex adapter and no independent reproduction of the compaction paper. Those primary authors' bounded claims do not become universal durability or security guarantees.
- No public impact record for desktop CVE-2026-100754 was obtained. Older advisories were identified as out of window, not re-audited as new vulnerabilities.
- No historical dist-tag audit log or immutable snapshot of the living docs was available. Alpha.12/.13 tag existence was established, but corresponding registry publication was not; no package availability is inferred from those tags alone.
- The primary researcher changed only the assigned harvest. The write-up pass applies the crosscheck here and derives the authorized Codex finding objects and scratch drafts; it does not edit the public profile or other repository files.

## Crosscheck applied

Applied the independent 24 October crosscheck: all 15 original sections retained, with exact corrections in sections 2 (optional placeholder mode), 5 (Windows package-identity rejection), and 11 plus Install today (api_key_cyber_access_programs). No numbered item was refuted or unverifiable. Clarified managed stderr retention in section 13 and supplied the old advisory mechanisms. All M1-M15 misses were checked against immutable commit/patch receipts and release ancestry, then added as sections 16-33; multi-channel items were split. Sections 34-35 capture the installation and current billing observations needed by the refreshed posture.

Author checks used git object/ancestry reads with GIT_NO_LAZY_FETCH=1 and GIT_OPTIONAL_LOCKS=0, and immutable HTTPS patch reads where blobs were unavailable; no Git write command or cloned code was run. All miss ancestry vectors reproduced the crosscheck. Immutable patch, tagged proxy contract, V8 CNA and RustSec reads completed by 2026-10-24T10:32:05.810769Z. The current auto-review and plan-help pages were independently opened around 10:30 UTC. No runtime, account, billing or exploit acceptance test was executed. Original pointer read times remain intact. Author re-reads: npm CLI 2026-10-24T10:32:19.164436Z and TypeScript 2026-10-24T10:32:18.327356Z both still select latest=0.164.0 and alpha=0.165.0-alpha.1; PyPI 2026-10-24T10:32:17.273458Z still selects 0.163.0 with no 0.164.0; Homebrew 2026-10-24T10:32:17.397701Z still selects 0.164.0. A new GitHub latest API request returned 403 rate-limit exceeded, so the successful 09:50:31.899655Z primary and 10:21:54.413706Z crosscheck release-inventory observations remain the release-selector basis.
