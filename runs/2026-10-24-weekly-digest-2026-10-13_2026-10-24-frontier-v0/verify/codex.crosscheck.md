# Codex adversarial crosscheck

Run: 2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0
Source: codex
Window: after 2026-10-13T23:59:59Z through the independent reads below on 2026-10-24 UTC.
Input: harvest/codex.primary.md and RESEARCHER-BRIEF.md.
Disposition: correct before profile promotion. Installation version selection is correct. Of the 15 numbered sections, 12 are VERIFIED and 3 are CORRECTED; none is REFUTED or UNVERIFIABLE. Additional omissions are listed below. Counts refer only to numbered harvest sections.

## Independent method and read times

Read the house authorities, source contract, brief, current harvest, prior profile, source notes, and relevant parent-harvest entries. Created a separate blobless, no-checkout clone at /Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones/codex-verify. Its origin is https://github.com/openai/codex.git and it is not shallow. All code inspection used git object reads. No upstream code, installer, tests, or build was executed. No Git command wrote Frontier's working tree or index.

For every numbered section, opened the tagged blobs and commit receipts independently, resolved the cited commit identities and dates, and reran git merge-base --is-ancestor against the baseline, both newer stable releases, newest preview, and fetched main. The complete numbered-section matrix is at the end. A commit's original merge date and its first stable release date are different facts; the harvest generally uses the latter correctly.

| Surface | Independent UTC read | Result |
|---|---|---|
| npm CLI registry | 2026-10-24T10:11:04.124044Z | [@openai/codex](https://registry.npmjs.org/@openai%2fcodex): latest=0.164.0; alpha=0.165.0-alpha.1; all six ordinary platform selectors select 0.164.0 platform packages. beta and native retain the old versions recorded in the harvest. |
| npm TypeScript registry | 2026-10-24T10:11:02.851884Z | [@openai/codex-sdk](https://registry.npmjs.org/@openai%2fcodex-sdk): latest=0.164.0; alpha=0.165.0-alpha.1. |
| PyPI | 2026-10-24T10:11:02.195857Z | [openai-codex](https://pypi.org/pypi/openai-codex/json): newest publication is 0.163.0, first uploaded 2026-10-15T21:50:50.773186Z; no 0.164.0 release. |
| Homebrew | 2026-10-24T10:11:01.994073Z | [Cask API](https://formulae.brew.sh/api/cask/codex.json): 0.164.0. Tap head is now 12865dc5fe70b59d5d5f33e23f7c9fe1507c8abf. The harvest's older pinned cask was separately opened and also selects 0.164.0. This moving tap-head difference is not a version correction. |
| GitHub release inventory | 2026-10-24T10:21:54.413706Z | Independent gh release list of 40 entries reaches 2026-10-05 and therefore covers the cutoff. It contains 2 stable and 19 prerelease objects in the window. Latest is [0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0); newest preview is [0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1). No newer release was found. |
| Fetched default branch | 2026-10-24T10:11:39.283352Z | Main resolves to 970111f6cb62cc02fe36a82ea7d71b37a2889c97, committed 2026-10-23T18:50:54Z. Local comparison reproduces 91 ahead / 1 behind 0.164.0. |
| Repository and package advisories | 2026-10-24T10:12:24.080376Z and 10:12:24.774277Z | Repository API and global npm-package advisory query reproduce the harvest's inventory. NVD was checked independently as described below. |

The REST release-list request with per_page=100 returned HTTP 504. The successful gh release list above supplies a complete cutoff-spanning inventory; no absence claim depends on that failed REST request.

## Install today and release ledger

VERIFIED for the installation selection: npm install -g @openai/codex@0.164.0 selects the newest stable at this read. The [tagged README](https://github.com/openai/codex/blob/rust-v0.164.0/README.md) supports npm, standalone downloads/installers, and Homebrew. The Python publication lag is real. No new license change was found between the baseline and fetched main; the [stable license remains Apache-2.0](https://github.com/openai/codex/blob/rust-v0.164.0/LICENSE).

CORRECTION to the activation list: the actual key is api_key_cyber_access_programs, not api_key_cyber. Both it and cli_daybreak are stable/default-on. Other named on/off values in the harvest agree with the [0.164.0 feature definitions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs). The omitted default flips for incremental tools and MCP OAuth coordination are material and appear in the misses below.

Independently reproduced ledger, with counts expressed as candidate ahead / behind the stated base:

| Candidate | GitHub published UTC | Prerelease | Base | Ahead / behind | npm CLI / TypeScript publication UTC |
|---|---|---|---|---|---|
| rust-v0.162.1 | 2026-10-09T19:44:51Z | false | 0.162.0 | 3 / 1 | 2026-10-09T19:50:30.512Z / 19:51:57.415Z |
| rust-v0.163.0 | 2026-10-15T21:30:38Z | false | 0.162.1 | 232 / 4 | 2026-10-15T21:37:11.083Z / 21:37:13.897Z |
| rust-v0.164.0 | 2026-10-23T04:48:10Z | false | 0.163.0 | 330 / 5 | 2026-10-23T04:52:29.240Z / 04:52:53.894Z |
| rust-v0.165.0-alpha.1 | 2026-10-23T14:09:53Z | true | 0.164.0 | 68 / 1 | 2026-10-23T14:22:16.936Z / 14:23:09.596Z |
| rust-v0.163.0-alpha.12 | No release object | Not applicable | 0.162.1 | 261 / 4 | No publication found in either returned npm inventory |
| rust-v0.163.0-alpha.13 | No release object | Not applicable | 0.162.1 | 271 / 4 | No publication found in either returned npm inventory |

Receipts: the four [baseline](https://github.com/openai/codex/releases/tag/rust-v0.162.1), [0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0), [0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0), and [preview](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1) release objects; registry reads above; local rev-list comparisons. Explicit release-by-tag API requests for alpha.12 and alpha.13 returned 404 at 2026-10-24T10:12:22.743866Z and 10:12:23.367883Z. Their annotated tag times normalize to 2026-10-14T09:38:13Z and 14:46:39Z. The 0.163.0-alpha.11.2 release is dated 2026-10-22T06:41:14Z. Every ledger date is in 2026.

Stable commit identities independently match the harvest: 0.162.1=092d3acd6bec3e3a14bdc7e7a2810ab628ab759d; 0.163.0=83086188ae0614bd882818ff1aa23f3194962012; 0.164.0=6aaac694803004a63c6f393d153c96d22521a6b9. Preview alpha.1=4cf2c16e4bc67809f620582d1999818e1b51eb2e.

## Numbered-section verdicts

### 1. Updater network policy: VERIFIED

The [stable factory](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/cli/src/main.rs#L2459-L2464) propagates config failure through config?, activates EmbeddedNetworkPolicy, and returns the configured client factory. The same file contains independent tests for configuration errors and denied destinations at lines 2910-2960. The [MCP change](https://github.com/openai/codex/commit/79773e8826aeb6bca09305728297908b0d5bc6c3) and [updater change](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8) are absent from 0.162.1 and present in 0.163.0/0.164.0. The 2026-10-15 stable-transition date is correct, despite the October 8 merge dates. The [daemon contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md#L48-L70) confirms saved network settings and the absence of invoking CLI overrides. Static support only; no network probe was executed.

### 2. Proxy and credential masking: CORRECTED

The DNS, duplicate-Host, alias, remote masking, and unmasked-fallback claims survive. The [execution code](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/runtimes/unified_exec.rs#L706-L745) emits explicit unmasked-credential warnings for unsupported remote conditions, and lines 558-565 restore credentials when a protected snapshot is missing.

Exact fix: replace the assertion that the MITM contract always requires an exact whole-header placeholder with: "When an injected-header action configures a placeholder, substitution requires exactly that whole-header value and HTTPS on port 443; the proxy also supports injected-header actions without a placeholder." The [README says the placeholder is optional](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/network-proxy/README.md#L277-L285), and [InjectedHeaderConfig uses Option<String>, with tests explicitly constructing placeholder=None](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/network-proxy/src/mitm_hook.rs#L56-L65). Scheme/port matcher lists are also optional, preserving existing behavior when empty. Do not generalize the stricter substitution mode to every secret injection. The stated stable containment and 2026-10-23 release date are correct.

### 3. Guardian escalation retry: VERIFIED

The [tagged retry branch](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/orchestrator.rs#L484-L518) recognizes only User/Hook as the reusable approval sources, builds RequireEscalated authority where applicable, and clears additional_permissions. The [fix](https://github.com/openai/codex/commit/4b9c24f98c6d886134fd2fc237355064708ff21f) first reaches the checked stable line in 0.164.0 on 2026-10-23. The harvest correctly avoids extending this to Full Access or every possible review path.

### 4. Plugin hook content approval: VERIFIED

The entire [115-line trust implementation](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/engine/plugin_trust.rs) was read. It recomputes the content hash, checks declaration and content trust, and errors when contents change. Legacy approvals establish a persisted first-use baseline through migrate_legacy_trust, as the harvest acknowledges. The [content-binding commit](https://github.com/openai/codex/commit/2bf2bdf82c33f4c66ba3f0767b8e4b6a933aac40) is absent from 0.163.0 and present in 0.164.0. The release date and channel are correct.

### 5. Sandbox aliases and helper paths: CORRECTED

The [macOS case-alias patch](https://github.com/openai/codex/commit/3bae578af33e43268e7bc2d6d5d0266f704bb554) checks native case equivalence for protected metadata; the [stable helper resolver](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/sandboxing/src/bwrap.rs#L179-L310) checks aliases, canonical paths, and replaceable ancestors. Those parts hold.

The Windows sentence is reversed. [d34f104c](https://github.com/openai/codex/commit/d34f104c22ae815fc213641b8a637c5947f14ac1) removes the exception admitting a client without package identity when the provisioning service has one. Exact replacement: "Windows sandbox provisioning now rejects clients without an installed Codex package identity; the debug foreground-mode exception remains." This is a tighter authorization boundary and a compatibility restriction for unpackaged clients, not support for unpackaged installations. All three patches are in 0.164.0 and absent from 0.163.0, so the date/channel need no change.

### 6. Compaction and resume: VERIFIED

The [stable compaction loop](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890) buffers OutputItemDone items and records them only after Completed. Read the [cold-resume permissions](https://github.com/openai/codex/commit/7c9bfb910ef65c8f4a957c53affbd43d5fac2882), [compressed-rollout lookup](https://github.com/openai/codex/commit/76ed3b484d62ccceb9fa512ff4dd139f421814c3), [saved settings](https://github.com/openai/codex/commit/430a16799d90e296fb27b1e94f206023902b7e56), and [background fallback](https://github.com/openai/codex/commit/e8aa7c1678caa9a368243d72bf0e9b7859d97f15) receipts. They support the bounded claims. The 0.163.0 versus 0.164.0 transitions match the matrix. Background compaction remains off by default; no universal Goal recovery is established.

### 7. Enterprise MCP and Windows authentication: VERIFIED

The [enterprise MCP connection change](https://github.com/openai/codex/commit/1569abc5dcff34a161a37c0697617b5025e1a851), [account-grant selection](https://github.com/openai/codex/commit/6b13dffc5e4c334fe87f823b214ed15a4bf37a11), confidential-client implementation, and [Windows CONNECT retry](https://github.com/openai/codex/commit/f496b09bd141af0a6ec1a7ebf3e5fc557ac795dc) support the account-qualified claim. The [tagged config stack](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/state.rs#L402-L410) rejects a configured/applied config-server mismatch. The 0.164.0 release independently documents the Bedrock wizard default. All listed commits are absent from 0.163.0 and present in 0.164.0. No enterprise login was attempted.

### 8. Parallel reads and full-history forks: VERIFIED

The [parallel-read change](https://github.com/openai/codex/commit/c9e0fffbbc05c36478686444f6ab1edbadfe2768) names eligible read-only tools and keeps goal mutations serialized. The [Code Mode interruption change](https://github.com/openai/codex/commit/72c959528ee4ca74abdb8575fbbc4e36960a8c47) and [selected capability inheritance](https://github.com/openai/codex/commit/845345b1dd4f8e2a5d5ce91363fff666e41b07fc) first reach stable 0.163.0. Read the [0.164.0 fork-default change](https://github.com/openai/codex/commit/e1b9c9457ceca75a99b034a5df39ac48c3998d15) and [configuration definition](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/feature_configs.rs#L316-L319). They establish preserved prefixes with the stated legacy-compaction exception. The separate fresh-child dynamic-tool gate remains off. No measured cache saving follows.

### 9. Patched zsh and retired switches: VERIFIED

The [backend removal](https://github.com/openai/codex/commit/cd85a26cae00385a0dd9247381ef5d1d7ffe9ef3) and [unbundling](https://github.com/openai/codex/commit/a645742bb5615026ae673c9527f146ee551d4949) reach stable 0.163.0. The [worktree/voice flag retirement](https://github.com/openai/codex/commit/bb64b894fd67158be0f874872e6d7bfe717e7368) reaches 0.164.0, ignores those configuration overrides, and retains local trust/platform checks. The [stable definitions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs) agree. Ordinary zsh support was not removed.

### 10. Terminal settings and presets: VERIFIED

Independently opened both stable release bodies and the [presets commit](https://github.com/openai/codex/commit/dcd9e954598cd5e9f80570204896d779c60c1ecd) and [inline-model commit](https://github.com/openai/codex/commit/0884c8047af8b02df31da8c622110a724c6b3cbc). They support ten numbered slots, settings-only inputs, unchanged saved model defaults for inline commands, and validated model/reasoning/speed selection. The [0.163.0](https://github.com/openai/codex/releases/tag/rust-v0.163.0) and [0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0) bodies support the other named TUI controls and supported-terminal image previews. The date/channel split is correct.

### 11. Daybreak defaults: CORRECTED

The substantive stable transition holds: [both gate commits](https://github.com/openai/codex/commit/6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7) [reach 0.163.0](https://github.com/openai/codex/commit/6cc7d9cc5c702c0ca133f7ea48432166e0b880be), and [0.164.0 defaults remain true](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1449-L1459).

Exact fix: change api_key_cyber to api_key_cyber_access_programs in this section and Install today. Current [cyber-safety documentation](https://learn.chatgpt.com/docs/cyber-safety) was independently fetched and read: Blue and Red access are separately approved and scoped to identity, workspace/API organization and project, model, and surface; Trusted Access does not automatically grant ZDR. This living page supports current posture at the read, not an immutable date for its wording. The new event remains the 2026-10-15 CLI stable transition.

### 12. Runtime signing: VERIFIED

Read all three tagged runtime-agent-instance files: [runtime](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/runtime.rs), [registration](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/registration.rs), and [authentication](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/runtime-agent-instance/src/auth.rs). They generate an Ed25519 signing key in memory, restrict registration to HTTPS or HTTP loopback without credential/query/fragment components, disable redirects, and implement DualHeader and AssertionOnly. The feature is off by default. Both cited commits first reach the checked stable line in 0.164.0. No persistent private key or third-party-client lockout is established.

### 13. Installation and log cleanup: VERIFIED

The [daemon pruning](https://github.com/openai/codex/commit/0960e379a5555f1b6d7b97d7980039902213c26c), [standalone pruning](https://github.com/openai/codex/commit/89461ea6833832b0551ce24ee32205824d5c108d), and [managed logging](https://github.com/openai/codex/commit/6bae551093d24ad6539a7daba2d9a13b80b28d15) receipts and release body support the section. The logs here are managed app-server/updater stderr, not a general transcript-retention guarantee. Logging can drop oversized records or records when the queue is full, and trims live files over 1 MiB while retaining a 256 KiB tail. The stable transition is 0.164.0 on 2026-10-23; no desktop percentage reduction was independently measured.

### 14. Windows SystemRoot resume helper: VERIFIED

The [patch](https://github.com/openai/codex/commit/d4bdafd378a8e328a67a4cd3557b5fe634af378c) adds case-insensitive SystemRoot environment preservation. It is absent from both stable 0.164.0 and preview alpha.1, present in fetched main, and git tag --contains returns no tags. [Issue 56264](https://github.com/openai/codex/issues/56264), created 2026-10-22T21:00:04Z, reports desktop 26.1016.62342 with bundled CLI 0.163.0-alpha.11.2 and the exact missing-SYSTEMROOT failure. The harvest's 2026-10-23 date is the fix's merge date, not the report's creation date. The issue is a mutable report, not an independent reproduction or immutable product receipt; the code receipt is SHA-pinned.

### 15. Google Cloud preview provider: VERIFIED

Read the [alpha.1 provider](https://github.com/openai/codex/blob/rust-v0.165.0-alpha.1/codex-rs/model-provider-info/src/lib.rs#L620-L645), [initial change](https://github.com/openai/codex/commit/3fd148a20c18cfc72beb7dedfa52951b1f9c4cb1), and [project/location follow-up](https://github.com/openai/codex/commit/970111f6cb62cc02fe36a82ea7d71b37a2889c97). The first is preview-only and the follow-up main-only; neither is in 0.164.0. The [official announcement](https://openai.com/index/openai-models-google-cloud/) explicitly dates itself 2026-10-21 and plans general availability in coming weeks. The announcement is vendor intent; the tagged client supplies the narrower implementation receipt. No service entitlement or completed rollout follows.

## Prior claims independently spot-checked at 0.164.0

| Prior verdict | Independent result and pinned evidence |
|---|---|
| Shared server, updater independence, and fixed-process baseline hold | VERIFIED. Read the [daemon contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-daemon/README.md), including inherited startup environment, experimental lifecycle, automatic-update settings, explicit stable updates, and restart interruption. The [TUI switch](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/tui/src/cli.rs#L88-L89) still exists. Section 1 correctly supersedes the old default-HTTP-client warning. |
| Remote exec-server authentication exposure holds | VERIFIED. [exec-server explicitly retains unauthenticated listener compatibility](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/exec-server/src/server/transport.rs#L1-L2) and binds without the non-loopback prohibition used by [app-server](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/app-server-transport/src/transport/websocket.rs#L166-L172). Runtime signing does not fix or remove that distinction. |
| Escalated stdin review holds | VERIFIED, with omitted expansion M10 below. [Empty-input and non-TTY Ctrl-C exemptions remain](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/unified_exec/stdin_approval.rs#L190-L251), and write_stdin_approval defaults on. |
| Explicit distrust differs from missing trust | VERIFIED. [AGENTS.md loading exits only for explicit distrust](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/agents_md.rs#L63-L65). This is distinct from project-local configuration activation or command authorization. |
| Guardian policy and audit export hold | VERIFIED for the inspected implementation. [Full Access takes host validation without the older model reviewer](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/ext/guardian-reviewer/src/routing.rs#L88-L94). [OTLP assessment export is opt-in, caps rationale length, excludes cached V2 approvals, and is best effort](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/otel/README.md#L158-L174). No complete action-audit guarantee follows. |
| Preview isolation work became stable but is not unconditional containment | VERIFIED. Masking remains off and can fall back unmasked. [Sandbox integrity explicitly observes without affecting launch](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/exec-server/src/sandbox_integrity/runner.rs#L15-L20), including timeout/failure paths. |
| Forced macOS managed preferences hold | VERIFIED. [The loader checks CFPreferencesAppValueIsForced before and after reading](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/config/src/loader/macos.rs#L160-L206), rejecting ordinary user-default fallback. |
| Sandbox helper and deny-glob hardening hold | VERIFIED. Read the helper resolver and the [Linux glob path](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/linux-sandbox/src/bwrap.rs#L1018-L1022), which supplies ripgrep's no-config option. Section 5 extends these protections but misdescribes Windows. |
| Stable Daybreak default changed; fresh-child dynamic tools stay opt-in | VERIFIED with the corrected key. [Stable feature definitions](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs) distinguish the on-by-default Daybreak gates from off-by-default multi_agent_v2_dynamic_tools, guardianv2, comparison, and credential masking. |
| Historical full-fork model-override correction | VERIFIED as a backend correction. [Current child preparation](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/agent/child_config.rs#L52-L85) applies requested model/effort outside the history-mode branch, as does the [baseline](https://github.com/openai/codex/blob/rust-v0.162.1/codex-rs/core/src/agent/child_config.rs#L51-L84). The current spawn handler passes those arguments independently. This does not erase stricter caller instructions or tool contracts and is not an in-window capability launch. |

## Material misses

All entries below have independently checked commit dates and local ancestry. "Stable 0.164.0" means absent from 0.163.0 and present in 0.164.0. "Preview alpha.1" means absent from stable 0.164.0 and present in 0.165.0-alpha.1. Main-only entries have no containing tag at the read. These are source and channel findings, not executed acceptance tests.

### M1. V8 CVE backport reached stable

Channel: tagged-release, 0.164.0 on 2026-10-23; patch merged 2026-10-16. [6ae8b8aa](https://github.com/openai/codex/commit/6ae8b8aa7c608730d4315d59c5c081897ae02780) upgrades V8 and [explicitly backports CVE-2026-85046](https://github.com/openai/codex/blob/rust-v0.164.0/patches/v8_array_sort_elements_kind.patch). The missing guard permits optimized sort to write objects into incompatible array storage after comparator mutation. The [CNA record](https://cveawg.mitre.org/api/cve/CVE-2026-85046) describes arbitrary code execution inside Chrome's sandbox through crafted HTML; [NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-85046) is the canonical index link. [Google's 2026-09-03 notice](https://chromereleases.googleblog.com/2026/09/stable-channel-update-for-desktop_01882797386.html) reports Chrome exploitation in the wild. That is not evidence of exploitation or a sandbox escape in Codex. The October event is the Codex backport reaching stable, not a newly published October CVE. Operators embedding Code Mode should include this runtime fix in upgrade decisions.

### M2. Two additional feature defaults flipped on in stable

Channel: tagged-release, 0.164.0 on 2026-10-23. [incremental_tools](https://github.com/openai/codex/commit/c953dacb42d2773d0ca9cc25a01129bba2ca36a8), merged 2026-10-19, becomes stable/default-on for Responses Lite catalog updates. [mcp_oauth_refresh_coordination](https://github.com/openai/codex/commit/35757adb728b268a1e75eabeb3e4cf9a6def5c18), merged 2026-10-20, also becomes stable/default-on. Both are visible in the tagged feature definitions. Test catalog-history compatibility and multi-client credential refresh rather than assuming the prior opt-in posture remains.

### M3. Native model-request observation hooks

Channel: tagged-release, 0.164.0; merged 2026-10-18. [70b3bb6d](https://github.com/openai/codex/commit/70b3bb6d8814ab3f2045238b4ae14c43da99783b) adds PreModelRequest/PostModelRequest hooks, including retries, completion/failure/cancellation, and available usage. [Hook stdout is diagnostic](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/events/model_request.rs#L142-L148); it cannot veto a request or rewrite model context. Synchronous post-hooks can delay tool dispatch. This offers native instrumentation while preserving a clear distinction from an authorization gate.

### M4. GitHub Actions OIDC in the Responses API proxy

Channel: tagged-release, 0.164.0; merged 2026-10-19. [57560e9d](https://github.com/openai/codex/commit/57560e9d53f89c7737c7b2069ba2eb8fddbf0687) and the [tagged proxy contract](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/responses-api-proxy/README.md) add optional federation and renewable short-lived credentials while keeping API-key mode the default. This is the proxy component, not universal new CLI sign-in. The caller must configure the identity mapping and protect the GitHub request credential and its destination URL; HTTPS is required but destination ownership is not established by the proxy. Evaluate this before retaining long-lived CI API secrets.

### M5. MCP tool catalogs can refresh inside a turn, behind a flag

Channel: tagged-release, 0.164.0; merged 2026-10-16. [0df4aa67](https://github.com/openai/codex/commit/0df4aa67781ae45a3c97befa4db48b734afe46d9) adds off-by-default mcp_tool_list_changed for ordinary MCP servers, refreshing before later discovery/binding while retaining the previous catalog and backing off after failure. This can remove reconnect scaffolding for changing tool sets; it is not a new always-on default.

### M6. More subagent environment, wake, and message primitives

Channel: tagged-release, 0.164.0. [Configured thread environment inheritance](https://github.com/openai/codex/commit/e389b2444c75cbc92d40b2135ca5db300d076979), merged 2026-10-19, is off by default and prevents temporary turn attachments from becoming persistent child bindings when enabled. [wake_on_agent_messages](https://github.com/openai/codex/commit/8c076942cb70fba8e5c4732c23f1faabc4aed484), merged 2026-10-18, is also off by default and can wake completed root sessions, with interruption, Plan mode, and child boundaries. [MessageLifecycleContributor](https://github.com/openai/codex/commit/66d0de9983e82b266e89ee29523324c9d08a5472), merged 2026-10-20, captures publication state and notifies consumption before sampling. These are bounded native coordination mechanisms, not evidence that every stalled Goal resumes.

### M7. Memory retention and version selection changed across channels

Stable 0.164.0 includes [14-day memory-extension resource retention, up from 7 days](https://github.com/openai/codex/commit/c0cfbfbb989ff80c4027c8ea86a15d411d1d5214), merged 2026-10-14, and [v2-only execution once memory v2 is selected](https://github.com/openai/codex/commit/71ab2ea77bc7fca41bb641e8a131bcba7b304a21), merged 2026-10-19. Preview alpha.1 includes [fresh-profile v2 selection](https://github.com/openai/codex/commit/a390571745da105cfdc85443dd1d38bf78e5ea6e), merged 2026-10-22, when memories are enabled and no v1 workspace exists, preserving explicit version and dual-write opt-outs. [thread/memory/read](https://github.com/openai/codex/commit/b559e6a3988489b636e1e79672eff330bf0679dc), merged 2026-10-23, is likewise preview-contained and returns the selected version's summary without cross-version fallback. Audit retention and migration separately; do not describe fresh-profile v2 as stable 0.164.0 behavior.

### M8. Preview marketplace host allowlist fix

Channel: preview-or-beta, alpha.1; merged 2026-10-22. [61a99199](https://github.com/openai/codex/commit/61a991990fa4fd0c511ccaaab3875371796be956) rejects literal backslashes in HTTP(S) marketplace URL userinfo. The URL parser could otherwise identify an allowed host while Git/libcurl connected elsewhere. Read the policy patch and tests asserting that denied URLs do not invoke the cloner or write install/configuration state. Stable 0.164.0 does not contain this fix. Operators relying on marketplace host patterns should retain their policy boundary and track a stable tag containing the patch.

### M9. Reviewer defaults and approval-policy defaults moved on different channels

[47a1f6bb](https://github.com/openai/codex/commit/47a1f6bb77baa8ba237757196a62cadf97dc854b), merged 2026-10-22, is preview alpha.1: fresh TUI startup defers reviewer selection to the server unless explicitly overridden, with explicit profile exceptions. [39850010](https://github.com/openai/codex/commit/398500106707f0a3217c7cf83edc2bf226cc342f), merged 2026-10-23, is main-only: it similarly fixes startup approval_policy precedence and accepts the server-returned policy before queued input. Model/effort defaults, reviewer defaults, and approval policy are separate settings; the profile's server-default explanation should not flatten them into one stable guarantee.

### M10. Stable permission-selection and stdin review behavior expanded

Channel: tagged-release, 0.164.0. [7389eebf](https://github.com/openai/codex/commit/7389eebf45df47895b386334bc1c5b9809eb9605), merged 2026-10-20, holds queued prompts while permission-menu discovery is pending and routes local permissions commands through guards. [d292f721](https://github.com/openai/codex/commit/d292f721242ef355ce5a38da90e0e33edc4790e6), merged 2026-10-14, permits stdin to reach review under active matching grants even when granular sandbox prompts are disabled; each input still requires review, and expired authority or Never rejects it. These are more precise upgrade tests than saying the old stdin rule merely holds.

### M11. Environment-owned managed hooks reached preview

Channel: preview-or-beta, alpha.1; merged 2026-10-23. [Managed-hook discovery](https://github.com/openai/codex/commit/75a4146411d22e4c487ba86f026201594cdbaa85) and [executor ownership routing](https://github.com/openai/codex/commit/4610b573e59b211bf9430cf6ffb97cfb84623090) use each owning environment's shell, directory, environment, and network policy. Required unloadable hooks reject environment configuration when hooks are enabled; hook rewrites cannot switch selected target environments. Environment hooks cannot grant permission requests. This is a material multi-environment authority boundary and should not be described as stable 0.164.0 behavior.

### M12. Proxy AWS signing differs between preview and main

[9a8a85bc](https://github.com/openai/codex/commit/9a8a85bc539325f2819dd0717f88b6ba6286495e), merged 2026-10-22, adds preview alpha.1 MITM AWS SigV4 signing with placeholder credentials and bounded supported request forms. [15fbcac0](https://github.com/openai/codex/commit/15fbcac045c29f77783bb176c20f54102f97fe32), merged 2026-10-23, is main-only and wires local command/snapshot masking and configuration to that signing path, requiring credential_masking. Do not infer complete local AWS masking from the preview signing primitive or from stable generic credential masking.

### M13. Custom managed configuration server loaders reached preview

Channel: preview-or-beta, alpha.1; merged 2026-10-23. [f3a90545](https://github.com/openai/codex/commit/f3a90545aed3188ee1e5c119ec89a742de399cdc) fetches custom config-server bundles without redirects, supports optional OAuth and endpoint/identity-scoped caching, and constrains bootstrap network access. It follows [decoupling the loader from ChatGPT-specific authentication](https://github.com/openai/codex/commit/5a1c247dd5fd682c22a34af93df697dd06300a32) on 2026-10-22. This extends section 7's stable mismatch rejection with a newer delivery mechanism; it is not evidence that stable already supports that complete path.

### M14. Native file copying between environments

Channel: tagged-release, 0.164.0; merged 2026-10-16. [e7de1f44](https://github.com/openai/codex/commit/e7de1f444089c29ac002e3df08d940f6de8a2613) adds host-registered, opt-in multi_env_copy_file, transferring bytes without loading file contents into model context. Each endpoint's policy and grants still apply. Failed writes can leave partial targets. This is a concrete workflow primitive for reducing model-mediated transfer scaffolding, not a transactional copy guarantee.

### M15. A dependency advisory was explicitly suppressed, not fixed

Channel: tagged-release, 0.164.0; merged 2026-10-20. [4dbd9d30](https://github.com/openai/codex/commit/4dbd9d30ea0466ec5bb1524f24c56cfc8ee4c5b1) adds RUSTSEC-2026-0374 to both dependency-audit ignore lists for basic-toml 0.1.10 via age localization dependencies in codex-secrets. [RustSec](https://rustsec.org/advisories/RUSTSEC-2026-0374.html), issued 2026-10-20, classifies this as informational unmaintained-package status with no patched release. It does not establish an exploitable bug. Dependency-policy owners need the retained exception and removal condition, not an invented security fix.

## Advisory inventory and rule checks

The narrow repository/npm advisory inventory statement is VERIFIED. It should not become a claim that no relevant vulnerability or runtime dependency fix exists. M1 is the material counterexample to using only those two feeds.

The harvest names old CVE/GHSA identifiers without explaining their mechanisms. Before copying that inventory into public prose, add the plain-language consequences:

- [GHSA-w5fx-fh39-j5rw / CVE-2025-59532](https://github.com/openai/codex/security/advisories/GHSA-w5fx-fh39-j5rw): a model-generated working directory could become the writable sandbox root, permitting writes and commands outside the intended workspace within the process's permissions. The advisory names CLI 0.39.0 and IDE 0.4.12 as fixes. It did not disable the network restriction.
- [GHSA-xrxf-jgv3-qmrm / CVE-2025-61260](https://github.com/advisories/GHSA-xrxf-jgv3-qmrm): starting old Codex in a malicious repository could load project-local environment/MCP configuration and execute attacker-controlled commands without confirmation. The global record covers CLI through 0.23.0 and was published in April 2026, not this October window.
- The broader [NVD keyword query](https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=OpenAI%20Codex), read 2026-10-24T10:14:52Z, returned nine records. The older Codex records add historical desktop and CLI context, not new in-window release events. CVE-2026-19593 was modified on October 15; the [NVD change history](https://services.nvd.nist.gov/rest/json/cvehistory/2.0?cveId=CVE-2026-19593&changeStartDate=2026-10-14T00:00:00.000&changeEndDate=2026-10-24T10:20:00.000) shows only a reference replacement. Its [ZDI advisory](https://www.zerodayinitiative.com/advisories/ZDI-26-651/) is dated September 10, 2026, so this is not a newly disclosed October defect. The [CNA record](https://cveawg.mitre.org/api/cve/CVE-2026-19593) explains that preserved malicious Git configuration can launch filters outside the desktop command sandbox when opening a workspace; ordinary cloning does not preserve the needed local configuration.
- The newly published October 23 record [CVE-2026-107685](https://nvd.nist.gov/vuln/detail/CVE-2026-107685) concerns req_llm's WebSocket certificate verification, not openai/codex. It allows an on-path attacker to read/modify affected third-party sessions and authorization tokens. It is excluded from Codex findings.
- [CVE-2026-100754](https://cveawg.mitre.org/api/cve/CVE-2026-100754) still returned 404 from CVE Services on 2026-10-24T10:14:55.700951Z. The harvest correctly withholds impact. No secondary description or social statement was used to fill that gap.

Pinning: all numbered code blobs are tag-pinned, and commit URLs resolve to full SHAs. Release pages identify fixed tags but their bodies are editable metadata. Current cyber-safety docs and the dated Google Cloud announcement are contextual receipts, not immutable historical snapshots. Issue 56264 is likewise a dated report. Keep those roles explicit; none is used alone to prove released code behavior. No main/HEAD blob is needed for a numbered claim.

Marketing separation: VERIFIED in sections 12 and 15. Runtime code presence does not prove universal attestation enforcement; a Google Cloud launch post does not prove present entitlement. Social URLs in the harvest are leads with paraphrased gists; no social quotation or usage/performance claim was promoted by this verifier.

## Limits and required editorial fixes

Apply the exact section 2, 5, and 11 corrections, add the material omissions selected for the profile, and give any retained CVE/GHSA identifier its plain-language impact. The harvest itself was not edited.

This check establishes source behavior, dates, package selections, and ancestry. It does not establish a working installation, a reproduced exploit, account rollout, hosted billing, cache performance, or closed desktop parity. No site build or npm installation was run, as required by the job rules. Only this crosscheck repository file was written; scratch clone objects are confined to the authorized verification clone.


## Independently rerun ancestry matrix

Columns B, S1, S2, P, M mean 0.162.1, 0.163.0, 0.164.0, 0.165.0-alpha.1, and main 970111f6cb62cc02fe36a82ea7d71b37a2889c97. Each digit is the literal exit status of git merge-base --is-ancestor: 0 means contained; 1 means absent. All 40-character tokens in the numbered sections were checked, including commits mentioned outside their Receipt line.

| Section | Commit | B / S1 / S2 / P / M | Commit UTC date |
|---|---|---|---|
| 1 | [d570b363](https://github.com/openai/codex/commit/d570b3632b100e36f931797cdbdb8906d0fcafa8) | 1 / 0 / 0 / 0 / 0 | 2026-10-08T18:53:17Z |
| 1 | [79773e88](https://github.com/openai/codex/commit/79773e8826aeb6bca09305728297908b0d5bc6c3) | 1 / 0 / 0 / 0 / 0 | 2026-10-08T18:22:39Z |
| 2 | [37eaae6e](https://github.com/openai/codex/commit/37eaae6eeb71c3bd3d165f52515086db8f5e7dee) | 1 / 0 / 0 / 0 / 0 | 2026-10-07T11:10:20Z |
| 2 | [bd274564](https://github.com/openai/codex/commit/bd274564e1b1b3febb3886d274e6d97c2a3d275e) | 1 / 0 / 0 / 0 / 0 | 2026-10-08T22:27:00Z |
| 2 | [65b82cdf](https://github.com/openai/codex/commit/65b82cdf96f9d305494bc8c6c8d2404d37709030) | 1 / 0 / 0 / 0 / 0 | 2026-10-09T18:04:48Z |
| 2 | [12cca49c](https://github.com/openai/codex/commit/12cca49c81c8aa6a37a5cc4e39964ee3b70f9458) | 1 / 0 / 0 / 0 / 0 | 2026-10-12T23:46:16Z |
| 2 | [7d33d0d9](https://github.com/openai/codex/commit/7d33d0d93f9c751281e0f5e8e9e76353eee87ea8) | 1 / 1 / 0 / 0 / 0 | 2026-10-15T14:41:16Z |
| 2 | [db58a987](https://github.com/openai/codex/commit/db58a987b8a0b94b81ab321f0e0192757758df67) | 1 / 1 / 0 / 0 / 0 | 2026-10-21T01:30:29Z |
| 2 | [82ef0672](https://github.com/openai/codex/commit/82ef0672e34391ffe1bd61e1185ed6e9d664a64e) | 1 / 1 / 0 / 0 / 0 | 2026-10-21T22:42:48Z |
| 3 | [4b9c24f9](https://github.com/openai/codex/commit/4b9c24f98c6d886134fd2fc237355064708ff21f) | 1 / 1 / 0 / 0 / 0 | 2026-10-15T11:16:13Z |
| 4 | [2bf2bdf8](https://github.com/openai/codex/commit/2bf2bdf82c33f4c66ba3f0767b8e4b6a933aac40) | 1 / 1 / 0 / 0 / 0 | 2026-10-16T14:38:19Z |
| 5 | [3bae578a](https://github.com/openai/codex/commit/3bae578af33e43268e7bc2d6d5d0266f704bb554) | 1 / 1 / 0 / 0 / 0 | 2026-10-15T12:01:04Z |
| 5 | [b8f880bc](https://github.com/openai/codex/commit/b8f880bc38b885bcca81cdfb50dae0ed18d7c3b4) | 1 / 1 / 0 / 0 / 0 | 2026-10-19T21:26:58Z |
| 5 | [d34f104c](https://github.com/openai/codex/commit/d34f104c22ae815fc213641b8a637c5947f14ac1) | 1 / 1 / 0 / 0 / 0 | 2026-10-20T14:48:59Z |
| 6 | [7c9bfb91](https://github.com/openai/codex/commit/7c9bfb910ef65c8f4a957c53affbd43d5fac2882) | 1 / 0 / 0 / 0 / 0 | 2026-10-11T15:48:35Z |
| 6 | [bf4ca52b](https://github.com/openai/codex/commit/bf4ca52b61686398aafb6f4467da4202b6bdec53) | 1 / 0 / 0 / 0 / 0 | 2026-10-12T16:09:41Z |
| 6 | [400f2356](https://github.com/openai/codex/commit/400f2356d60c4663d46817a40b4d09c5c86f35ad) | 1 / 1 / 0 / 0 / 0 | 2026-10-14T09:44:24Z |
| 6 | [e8aa7c16](https://github.com/openai/codex/commit/e8aa7c1678caa9a368243d72bf0e9b7859d97f15) | 1 / 1 / 0 / 0 / 0 | 2026-10-20T13:50:13Z |
| 6 | [76ed3b48](https://github.com/openai/codex/commit/76ed3b484d62ccceb9fa512ff4dd139f421814c3) | 1 / 1 / 0 / 0 / 0 | 2026-10-14T15:22:02Z |
| 6 | [430a1679](https://github.com/openai/codex/commit/430a16799d90e296fb27b1e94f206023902b7e56) | 1 / 1 / 0 / 0 / 0 | 2026-10-21T15:34:43Z |
| 7 | [1569abc5](https://github.com/openai/codex/commit/1569abc5dcff34a161a37c0697617b5025e1a851) | 1 / 1 / 0 / 0 / 0 | 2026-10-19T17:57:35Z |
| 7 | [6b13dffc](https://github.com/openai/codex/commit/6b13dffc5e4c334fe87f823b214ed15a4bf37a11) | 1 / 1 / 0 / 0 / 0 | 2026-10-20T23:27:33Z |
| 7 | [6203846f](https://github.com/openai/codex/commit/6203846fb3ef040f62eed9b35bc6629c8e88980a) | 1 / 1 / 0 / 0 / 0 | 2026-10-21T22:30:35Z |
| 7 | [342ed69a](https://github.com/openai/codex/commit/342ed69a174c206c1de52a59491b131e0753cfa5) | 1 / 1 / 0 / 0 / 0 | 2026-10-22T02:15:00Z |
| 7 | [18795fc1](https://github.com/openai/codex/commit/18795fc12571a3530d3e4ac18366e41cd2f57448) | 1 / 1 / 0 / 0 / 0 | 2026-10-20T04:49:25Z |
| 7 | [f496b09b](https://github.com/openai/codex/commit/f496b09bd141af0a6ec1a7ebf3e5fc557ac795dc) | 1 / 1 / 0 / 0 / 0 | 2026-10-21T22:26:16Z |
| 8 | [c9e0fffb](https://github.com/openai/codex/commit/c9e0fffbbc05c36478686444f6ab1edbadfe2768) | 1 / 0 / 0 / 0 / 0 | 2026-10-08T19:29:47Z |
| 8 | [72c95952](https://github.com/openai/codex/commit/72c959528ee4ca74abdb8575fbbc4e36960a8c47) | 1 / 0 / 0 / 0 / 0 | 2026-10-07T21:28:56Z |
| 8 | [845345b1](https://github.com/openai/codex/commit/845345b1dd4f8e2a5d5ce91363fff666e41b07fc) | 1 / 0 / 0 / 0 / 0 | 2026-10-08T19:21:57Z |
| 8 | [beae473b](https://github.com/openai/codex/commit/beae473be8564d884a8cfe9704194a5c803d2ac1) | 1 / 1 / 0 / 0 / 0 | 2026-10-16T16:28:53Z |
| 8 | [e1b9c945](https://github.com/openai/codex/commit/e1b9c9457ceca75a99b034a5df39ac48c3998d15) | 1 / 1 / 0 / 0 / 0 | 2026-10-20T11:56:17Z |
| 9 | [cd85a26c](https://github.com/openai/codex/commit/cd85a26cae00385a0dd9247381ef5d1d7ffe9ef3) | 1 / 0 / 0 / 0 / 0 | 2026-10-08T16:19:09Z |
| 9 | [a645742b](https://github.com/openai/codex/commit/a645742bb5615026ae673c9527f146ee551d4949) | 1 / 0 / 0 / 0 / 0 | 2026-10-08T18:17:04Z |
| 9 | [bb64b894](https://github.com/openai/codex/commit/bb64b894fd67158be0f874872e6d7bfe717e7368) | 1 / 1 / 0 / 0 / 0 | 2026-10-15T03:48:33Z |
| 10 | [cc7ba336](https://github.com/openai/codex/commit/cc7ba33601286a751477832b01de7b6f8de0dd9c) | 1 / 0 / 0 / 0 / 0 | 2026-10-10T22:28:01Z |
| 10 | [dcd9e954](https://github.com/openai/codex/commit/dcd9e954598cd5e9f80570204896d779c60c1ecd) | 1 / 1 / 0 / 0 / 0 | 2026-10-15T19:02:09Z |
| 10 | [0884c804](https://github.com/openai/codex/commit/0884c8047af8b02df31da8c622110a724c6b3cbc) | 1 / 1 / 0 / 0 / 0 | 2026-10-15T19:01:10Z |
| 10 | [b095b2ef](https://github.com/openai/codex/commit/b095b2ef236d8f45f85a9d5526bfbf2618ab2d63) | 1 / 1 / 0 / 0 / 0 | 2026-10-15T19:09:34Z |
| 11 | [6fbfc352](https://github.com/openai/codex/commit/6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7) | 1 / 0 / 0 / 0 / 0 | 2026-10-13T15:33:50Z |
| 11 | [6cc7d9cc](https://github.com/openai/codex/commit/6cc7d9cc5c702c0ca133f7ea48432166e0b880be) | 1 / 0 / 0 / 0 / 0 | 2026-10-13T16:57:54Z |
| 12 | [79a19cbb](https://github.com/openai/codex/commit/79a19cbb3008afe2882ccc2c5d93f02cde9a0823) | 1 / 1 / 0 / 0 / 0 | 2026-10-19T23:01:54Z |
| 12 | [cb00a675](https://github.com/openai/codex/commit/cb00a67569450aea2fdb1b1f31fc042fc0b5416f) | 1 / 1 / 0 / 0 / 0 | 2026-10-20T17:29:40Z |
| 13 | [0960e379](https://github.com/openai/codex/commit/0960e379a5555f1b6d7b97d7980039902213c26c) | 1 / 1 / 0 / 0 / 0 | 2026-10-14T01:49:56Z |
| 13 | [89461ea6](https://github.com/openai/codex/commit/89461ea6833832b0551ce24ee32205824d5c108d) | 1 / 1 / 0 / 0 / 0 | 2026-10-19T00:13:28Z |
| 13 | [6bae5510](https://github.com/openai/codex/commit/6bae551093d24ad6539a7daba2d9a13b80b28d15) | 1 / 1 / 0 / 0 / 0 | 2026-10-21T10:31:12Z |
| 14 | [d4bdafd3](https://github.com/openai/codex/commit/d4bdafd378a8e328a67a4cd3557b5fe634af378c) | 1 / 1 / 1 / 1 / 0 | 2026-10-23T12:42:39Z |
| 14 | [970111f6](https://github.com/openai/codex/commit/970111f6cb62cc02fe36a82ea7d71b37a2889c97) | 1 / 1 / 1 / 1 / 0 | 2026-10-23T18:50:54Z |
| 15 | [3fd148a2](https://github.com/openai/codex/commit/3fd148a20c18cfc72beb7dedfa52951b1f9c4cb1) | 1 / 1 / 1 / 0 / 0 | 2026-10-22T21:01:14Z |
| 15 | [970111f6](https://github.com/openai/codex/commit/970111f6cb62cc02fe36a82ea7d71b37a2889c97) | 1 / 1 / 1 / 1 / 0 | 2026-10-23T18:50:54Z |

For d4bdafd378a8e328a67a4cd3557b5fe634af378c, 970111f6cb62cc02fe36a82ea7d71b37a2889c97, 398500106707f0a3217c7cf83edc2bf226cc342f, and 15fbcac045c29f77783bb176c20f54102f97fe32, git tag --contains returned no tags.

Miss ancestry was checked with the same commands. For M1-M6, the stable portions of M7, M10, M14, and M15, the vectors against S1 / S2 / P / M are 1 / 0 / 0 / 0. The preview portions of M7, M8, M9 reviewer selection, M11, M12 signing, and M13 are 1 / 1 / 0 / 0. M9 approval policy and M12 local AWS masking are 1 / 1 / 1 / 0.
