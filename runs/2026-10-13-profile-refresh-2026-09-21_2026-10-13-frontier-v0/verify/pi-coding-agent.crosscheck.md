# Crosscheck: pi-coding-agent

Run: `2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0`.
Window: 2026-09-21 through 2026-10-13, excluding the parent's v0.87.0 baseline.
Profile date: 2026-10-13. Independent verification: 2026-10-14.
Input: `harvest/pi-coding-agent.primary.md` in this run.

Disposition: correct before publication. Of the 11 numbered sections, 4 are VERIFIED and 7 are CORRECTED; none is wholly REFUTED or UNVERIFIABLE. These are section counts, not counts of individual assertions. CORRECTED means the central finding survives but the exact replacement or evidence boundary below is required. Unsupported subsidiary assertions are not accepted merely because the section survives.

The newest stable and npm `latest` are correctly identified as 1.2.0. The release ledger is correct. The claimed window-close main snapshot is incomplete, and two proposed tool restrictions do not do what the harvest says.

## Method and receipt boundaries

Read AGENTS.md, THESIS.md, METHOD.md, EDITORIAL.md, CONTRIBUTING.md, the researcher brief, source contract and notes, dated profile, and harvest. Independently listed GitHub releases and npm publication times/dist-tags. Used the separate blobless, no-checkout clone at `/Users/c3po/co/frontier/tmp/refresh-2026-10-13/clones/pi-coding-agent-verify` for tagged files, commit diffs, and ancestry. No cloned code, installer, build, or package installation was executed.

Opened the harvest's numbered-section receipts. Its GitHub blob receipts name tags, its commit receipts name SHAs, and the referenced paths and line spans resolve. None of those code receipts uses main or HEAD. Issues, advisory indexes, registry dist-tags, installer scripts, live docs, and author posts are mutable observations. They cannot prove a past registry state or substitute for tagged implementation evidence. Product conclusions below use tagged code; posts establish what their authors said.

For each ancestry row below, independently ran `git merge-base --is-ancestor <commit> <first-tag>` and the same command against the previous stable. Results were exit 0 and exit 1 respectively. Commit dates were checked with git metadata; release dates came from release objects, not commit dates. No October 14 commit is promoted into this window.

## Channel truth and release ledger

VERIFIED: [v1.2.0](https://github.com/earendil-works/pi/releases/tag/v1.2.0) resolves to `06a466935536f8c9bcacb2d5efc0fc021be1bdff`, committed 2026-10-12T22:46:55Z. GitHub published it at 2026-10-12T23:03:53Z, non-prerelease and Latest. The [npm registry](https://registry.npmjs.org/@earendil-works/pi-coding-agent) gives 1.2.0 publication at 2026-10-12T23:03:25.459Z, `latest=1.2.0`, `legacy-node20=0.74.2`, and Node >=22.19.0. No newer stable or prerelease was found in either independent list, including on verification day.

The sibling latest versions match the harvest: pi-ai, pi-agent-core, pi-tui, pi-codemode, pi-mcp, pi-durable, pi-env, chord, and pi-telemetry are 1.2.0. pi-client, pi-protocol, and pi-server remain 1.1.0. The [old npm scope](https://registry.npmjs.org/@mariozechner/pi-coding-agent) remains at 0.73.1 and is deprecated in favor of the Earendil scope. Dist-tags are a fresh corroboration, not an independently archived October 13 dist-tag history.

Independently confirmed every row below from `gh release list`, release objects, `npm view ... time --json`, and consecutive-tag `rev-list` counts. All releases are non-prerelease, all have npm versions, and every behind count is zero. Times below omit npm subsecond precision.

| Tag | GitHub publication UTC | Commits ahead / behind previous stable | npm publication UTC |
| --- | --- | --- | --- |
| v0.87.0, baseline | 2026-09-21T18:29:47Z | 18 / 0 vs v0.86.1 | 2026-09-21T16:51:53Z |
| v0.87.1 | 2026-09-22T19:43:43Z | 19 / 0 | 2026-09-22T19:42:48Z |
| v0.99.0 | 2026-09-29T17:21:54Z | 87 / 0 | 2026-09-29T17:21:27Z |
| v0.99.1 | 2026-09-29T18:27:00Z | 5 / 0 | 2026-09-29T18:23:26Z |
| v0.99.2 | 2026-09-30T19:30:47Z | 42 / 0 | 2026-09-30T19:30:20Z |
| v1.0.0 | 2026-10-01T19:20:55Z | 46 / 0 | 2026-10-01T19:15:22Z |
| v1.0.1 | 2026-10-03T16:14:00Z | 29 / 0 | 2026-10-03T12:35:33Z |
| v1.0.2 | 2026-10-04T00:56:36Z | 6 / 0 | 2026-10-04T00:56:19Z |
| v1.0.3 | 2026-10-05T08:38:23Z | 23 / 0 | 2026-10-05T08:37:00Z |
| v1.0.4 | 2026-10-05T22:03:50Z | 28 / 0 | 2026-10-05T21:51:59Z |
| v1.1.0 | 2026-10-07T22:26:31Z | 53 / 0 | 2026-10-07T22:16:26Z |
| v1.2.0 | 2026-10-12T23:03:53Z | 81 / 0 | 2026-10-12T23:03:25Z |

There are 11 post-baseline stable releases and 419 commits from v0.87.0 to v1.2.0. Versions 0.88 through 0.98 are absent. The caret-range observation is correct: `^0.87.0` does not select 0.99 or 1.x.

The [managed installer API](https://pi.dev/api/installer/releases/latest) independently returned 1.2.0, the same full source SHA, and publishedAt 2026-10-12T23:03:31.125Z. Read both installer scripts as data. They obtain a version-specific package-lock and use npm ci with lifecycle scripts disabled; they were not run. SHA256 of the observed shell installer: `822e94298a79e61b5285fc559b7bfe89ac6ff64aac53d3dc9fc331a23d72e12e`; PowerShell installer: `bc228f9c0584b86d917561690963e767aa1841233a04ab6208f62f28ee72c40f`. These hashes identify this observation, not an archived October 13 script.

Nix is correctly separated from npm: the live stable ref is `abe508e1b89912adde45528136c3221eb69acdd7`, v1.1.0. [Run 38318646655](https://github.com/earendil-works/pi/actions/runs/38318646655) has three failed platform builds and a skipped update-stable job for v1.2.0. The [tagged workflow](https://github.com/earendil-works/pi/blob/v1.2.0/.github/workflows/nix.yml) explains that gate. The quickstart's latest-release description does not describe this actual Nix ref.

CORRECTION: `7d75a0e3eb273dff753d49c066ea29fbe7b3b6f6` is an early October 13 observation, not a complete inclusive-window close. The last October 13 commit in the current linear main history is `3daa20280f6a7c7cbe0935680c9a38fdc3863005`, at 2026-10-13T16:17:31Z. [Comparison with v1.2.0](https://github.com/earendil-works/pi/compare/v1.2.0...3daa20280f6a7c7cbe0935680c9a38fdc3863005) is 22 ahead, 0 behind: 14 more commits than the harvest records. This reconstruction is not an archived ref observation at midnight. It does prove omitted in-window work. Replace main +8 with main +22 for the complete dated window and remove the claim that main-unreleased matters only to Nix users. See M1.

## Independent ancestry for the numbered sections

The dates in this table are commit dates in UTC; first-release dates are in the ledger. All listed released changes are ancestors of v1.2.0. Source reads at the newest tag are described per section.

| Sections | Commit receipt | UTC commit date | First stable | Previous stable excludes it |
| --- | --- | --- | --- | --- |
| 1, 2 | [8562bcf6](https://github.com/earendil-works/pi/commit/8562bcf66a8eeefdf75ddd231ca9d7aa7d64f86e), MCP/codemode | 2026-09-29 | v0.99.0 | v0.87.1 |
| 1, 10 | [d850edee](https://github.com/earendil-works/pi/commit/d850edee9ccc5d3b6cec79553d4839a1cbab47ed), OAuth issuer | 2026-09-30 | v1.0.0 | v0.99.2 |
| 1, 10 | [c5f5b328](https://github.com/earendil-works/pi/commit/c5f5b3282d5e4203c085e59837ba17aeaf2829b5), issuer without metadata | 2026-10-10 | v1.2.0 | v1.1.0 |
| 2 | [6f1072cc](https://github.com/earendil-works/pi/commit/6f1072cc081f06b86a673bd142f03720d17afe15), prompt reduction | 2026-10-01 | v1.0.0 | v0.99.2 |
| 3 | [04b97ef0](https://github.com/earendil-works/pi/commit/04b97ef0007ad2d55615d0a545163387a701fc67), tool selection | 2026-10-05 | v1.0.4 | v1.0.3 |
| 4 | [1ffb6bd6](https://github.com/earendil-works/pi/commit/1ffb6bd621c29d7c8e38bb3b3c1cdcbda6b6ea90), disable dotenv | 2026-10-06 | v1.1.0 | v1.0.4 |
| 5 | [7fd478a2](https://github.com/earendil-works/pi/commit/7fd478a2e888ebc28869566f33a186303d372838), remove AgentHarness | 2026-10-01 | v1.0.0 | v0.99.2 |
| 5 | [7472cda0](https://github.com/earendil-works/pi/commit/7472cda0d6e51dfbf53c03f46b47aa42ac64bf64), remove client/server | 2026-10-12 | v1.2.0 | v1.1.0 |
| 5 | [0104fef1](https://github.com/earendil-works/pi/commit/0104fef1e95e07c19d63e4eb9f63c7ca1dc01b2d), replace facets | 2026-10-12 | v1.2.0 | v1.1.0 |
| 6 | [581e7ba7](https://github.com/earendil-works/pi/commit/581e7ba78141a4d8b61cc9d11b8b22ae7e59195e), remove shrinkwrap | 2026-10-02 | v1.0.1 | v1.0.0 |
| 6 | [c71a496f](https://github.com/earendil-works/pi/commit/c71a496ff994e5afc52b893b9c20711300e0acfc), Nix | 2026-10-02 | v1.0.1 | v1.0.0 |
| 6 | [0a8cfff4](https://github.com/earendil-works/pi/commit/0a8cfff4cbcbbdb0071ebe056f1fcb5710e7fcf0), Nix repair | 2026-10-12 | None | Not in v1.2.0 |
| 7 | [25cc5c7b](https://github.com/earendil-works/pi/commit/25cc5c7bf4cbc76b2e134c729eb8d57d521ed749), security documentation | 2026-09-22 | v0.87.1 | v0.87.0 |
| 8 | [a447ba11](https://github.com/earendil-works/pi/commit/a447ba11f3e7760fcff91e924bda8c20033953ea), before_agent_start | 2026-10-12 | v1.2.0 | v1.1.0 |
| 9 | [441f5767](https://github.com/earendil-works/pi/commit/441f5767c4fe4eebbec6ebe9bb4a57f430871eba), truncation exit | 2026-10-12 | v1.2.0 | v1.1.0 |
| 9 | [88ff80b9](https://github.com/earendil-works/pi/commit/88ff80b986e34d4fbd1fa94a4df65c60ae964516), fullscreen | 2026-10-01 | v1.0.0 | v0.99.2 |
| 10 | [d677d0ee](https://github.com/earendil-works/pi/commit/d677d0ee7134f834dfc163bf6bdb395df9e57c6b), output files | 2026-10-04 | v1.0.3 | v1.0.2 |
| 11 | [1a584a7a](https://github.com/earendil-works/pi/commit/1a584a7a56eb5e7b4ff8ccbd46430f1533282eed), Grok default | 2026-09-21 | v0.87.1 | v0.87.0 |

## 1. MCP built into the CLI: CORRECTED

The September 29 release, project trust gate, CLI built-ins, SDK opt-in, host-side stdio launch, inherited environment, and command-valued configuration are supported. Read the linked introduction commit and the v1.2.0 [configuration loader](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/config.ts#L91-L155), [runtime](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/runtime.ts#L98-L121), [stdio transport](https://github.com/earendil-works/pi/blob/v1.2.0/packages/mcp/src/transports/stdio.ts#L94), and [MCP documentation](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/mcp.md). The trust/environment consequence survives.

Exact fixes:

- Replace "auth is rejected outside the global file" with "project mcp.json cannot specify provider auth; global mcp.json and extension registrations can." The file-loader check only rejects project scope, and the [v0.99.2 release](https://github.com/earendil-works/pi/releases/tag/v0.99.2) explicitly includes extensions.
- Replace the two-key override list with `enabled`, `exposure`, and `toolExposure`. The [tagged configuration contract](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/config.ts#L4-L12) includes all three. Trusted projects can override per-tool exposure of a global server.
- Keep the September 29 Earendil post and October 6 Ronacher post as attributed rationale. The tagged implementation establishes product behavior; a homepage slogan does not establish its release date.

## 2. Codemode authority and only mode: CORRECTED

Read the [nested call hooks](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L730-L760), [callable set](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1562-L1571), [model operations](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/execute.ts#L740-L751), and [factory defaults](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/index.ts#L14-L45). Tool calls traverse hooks; classify/image operations call the model registry directly. The declaration-only restriction is supported by [request projection](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1771-L1789) and [execution lookup](https://github.com/earendil-works/pi/blob/v1.2.0/packages/agent/src/agent-loop.ts#L708-L735). Issue [10426](https://github.com/earendil-works/pi/issues/10426) remains open; PR [10553](https://github.com/earendil-works/pi/pull/10553) is closed without merging. This is static confirmation, not a reproduced exploit.

Exact fixes:

- Reject the suggested blanket rule denying every call without `parentToolCallId`: it also denies the initial codemode call. [Top-level hook installation](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L652-L674) supplies no parent, and [codemode itself](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/codemode/tool.ts#L371-L390) is model-only. A restriction must explicitly allow the top-level codemode entry, deny other disallowed root calls, and still apply policy to nested calls. This replacement is source-derived policy guidance, not a tested extension.
- Replace "MCP tools whatever the active tool set" with "registered codemode/deferred tools, plus active direct tools." Hidden tools and inactive direct tools are excluded, including MCP tools with those exposures.
- `autoEnableCodemode: false` prevents MCP from automatically activating codemode. It neither disables a separately activated codemode tool nor turns off its models API. State this limitation beside the spend advice. There is a factory `models` option, not a general user setting established by these receipts.
- Say a tool hook cannot separately intercept `models.classify()` or `models.generateImages()` after admitting the script. It can reject the enclosing codemode call. Attribute the 5,300-to-3,300 token result to the [v1.0.0 release notes](https://github.com/earendil-works/pi/releases/tag/v1.0.0); it was not measured here.

## 3. Tool selection is not a universal MCP boundary: CORRECTED

The v1.0.4 change and contrast with the [v0.87.0 strict-allowlist documentation](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/settings.md#L303) are confirmed. Read [allowlist filtering](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L500-L506) and [registration filtering](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1541-L1556).

Exact fix: `--exclude-tools 'mcp__*'` excludes namespaced server tools, but does not match `list_mcp_resources`, `list_mcp_resource_templates`, or `read_mcp_resource`. The [anchored matcher and resource names](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/mcp-servers.ts#L12-L40) prove that distinction. The [MCP extension](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/extensions/mcp/index.ts#L466-L488) registers those resource tools; they can reach resource-enabled, non-hidden servers.

For a complete built-in MCP shutdown, recommend `--no-mcp`. For tool exclusion, explicitly include all three resource names as well as the namespaced pattern. Neither tool visibility nor a tool-name filter establishes that stdio processes or command-valued configuration never run. Replace "every configured MCP server/tool" with the exposure-qualified callable set from section 2. Plain lists without a route to deferred/codemode tools retain the narrower behavior described by the harvest.

## 4. Standalone dotenv loading: CORRECTED

The defect and first fixed release are confirmed. [Issue 10473](https://github.com/earendil-works/pi/issues/10473), opened 2026-10-05 against 1.0.2, reports agent-directory redirection and a dotenv secret appearing in bash output. The pinned fix adds `--no-compile-autoload-dotenv` to both standalone build commands and first ships in v1.1.0 on 2026-10-07. Independently checked the flag absent at v0.74.0, v0.79.0, v0.84.0, v0.87.0, and v1.0.4, and present at v1.1.0.

Exact evidence correction: replace the categorical assertion about every standalone binary and every named dotenv file with "The reporter demonstrated the defect in 1.0.2. The sampled earlier build recipes also leave Bun dotenv autoload enabled; 1.1.0 disables it. Those historical binary assets were not executed." A recipe sample is not a test of every shipped asset or environment-specific dotenv selection.

The proposed trust-bypass chain is a supported inference: [v1.0.4 config](https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/config.ts#L605-L611) selects the agent directory from the environment, [extension loading](https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/core/extensions/loader.ts#L853-L855) uses that directory, and [pre-trust resource loading](https://github.com/earendil-works/pi/blob/v1.0.4/packages/coding-agent/src/core/resource-loader.ts#L501-L520) loads trust extensions before deciding project trust. Keep "source-derived, not reproduced" immediately beside this inference. Do not assign the binary-specific behavior to ordinary Node-based npm/managed installs. No Pi-specific advisory for this defect was found.

## 5. Harness removal and Durable: CORRECTED

The removals and channel split are verified by the three commits in the ancestry table, the [v1.0.0 agent changelog](https://github.com/earendil-works/pi/blob/v1.0.0/packages/agent/CHANGELOG.md#L7), and the [v1.2.0 coding-agent exports](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/package.json). The remaining coding-agent exports are `.` and `./rpc-entry`. The [Durable README](https://github.com/earendil-works/pi/blob/v1.2.0/packages/durable/README.md) describes an experimental API, durable tasks, blocking beforeTool hooks, and execution environments. The [pi-env README](https://github.com/earendil-works/pi/blob/v1.2.0/packages/env/README.md) describes remote deployment over SSH. These are separate library capabilities, not restored CLI plugin exports.

Exact fix: replace "pi-client, pi-protocol and pi-server will receive no fixes" with "their source packages were removed in 1.2.0; their npm latest versions remain 1.1.0, and no successor release was found." The code removal and registry state do not establish a binding promise about every future patch. No npm deprecation message was found for those three names. Retire the old facet-host watch item using the actual deleted design and exports; do not turn a source-tree search into a universal future-maintenance claim.

## 6. Install reproducibility and Nix: VERIFIED

The tagged removal commit, [v1.2.0 quickstart](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/quickstart.md#L7-L30), registry `_hasShrinkwrap` values, installer reads, and Nix run support the finding. `_hasShrinkwrap` is true at 0.87.0, 0.99.2, and 1.0.0, false at 1.0.1 and 1.2.0. The direct `brace-expansion` dependency remains exactly 5.0.12. Nix repair 0a8cfff4 is in the dated main history and no release tag.

The operational condition for Nix catching up is a successful tagged build and advancement of stable. The current main repair alone is not a released fix. No fresh npm dependency tree was installed or resolved here. Add the separate October 13 internal-version pinning change in M1; it has not shipped in 1.2.0.

## 7. Trust and pre-trust sessionDir: VERIFIED

Read [v1.2.0 security documentation](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/security.md#L31), [trust resolution](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/project-trust.ts#L47-L88), [startup settings/session directory](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/main.ts#L671-L694), and [settings-manager default](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-manager.ts#L333). The default ask decision refuses protected resources without a UI when no override, extension, or saved decision supplies trust. A project with no protected resources can be considered trusted without needing that decision; this does not authorize protected resources that are absent.

The [v0.79.0 security page](https://github.com/earendil-works/pi/blob/v0.79.0/packages/coding-agent/docs/security.md) already documents headless refusal. The sessionDir documentation addition first ships in v0.87.1, while the pre-trust lookup exists at the baseline. [Context loading](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/resource-loader.ts#L646-L652) remains separate from trust. The profile correction and explicit session-directory precedence are supported; this is not a newly introduced 1.2.0 trust defect.

## 8. Extension reach and before_agent_start: VERIFIED

Read the release entries at v0.99.0, v1.0.0, v1.0.1, and v1.2.0, [tagged extension types](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/extensions/types.ts), and [virtual-model documentation](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/virtual-models.md). Model registry access, tool-execution context, registration hooks, physical-model recording, and the new user/custom event union are present. `ctx.executeTool()` belongs to the tool execution context; do not imply every extension event context has that method.

The a447ba11 fix first ships in v1.2.0. [Commit 6a51a39d](https://github.com/earendil-works/pi/commit/6a51a39d4230c6a98948c14202ec76ae220232a6) also confirms the v1.2.0 tilde expansion repair for resource patterns. The `context_edit` correction is sound: appendContextEdit is internal. Add the startup-busy behavior from the same event change, recorded in M7, when describing migration work.

## 9. Exit behavior and fullscreen: VERIFIED

The [v1.2.0 print-mode branch](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/modes/print-mode.ts#L139-L157) limits the new truncation failure to text output, retains the partial answer, writes a warning, and sets exit status 1. The branch is absent at v1.1.0. The [v0.87.1 release](https://github.com/earendil-works/pi/releases/tag/v0.87.1) supports invalid/missing mode failures, and the [v1.0.0 release](https://github.com/earendil-works/pi/releases/tag/v1.0.0) supports requiring a model with provider selection. Fullscreen is the [v1.2.0 default](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-defaults.ts#L61), introduced in v1.0.0. No claim that JSON/RPC truncation gained the same exit behavior is accepted.

## 10. Security hygiene and advisory wording: CORRECTED

The file-mode repair is verified from d677d0ee and the [v1.2.0 output utility](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/utils/output-files.ts#L14-L34): new files use 0600 and exclusive creation. Earlier output streams used default permissions; under umask 022 on a shared temp filesystem, another local user could read that output. Platform and umask conditions matter. The OAuth issuer fixes and v1.0.4 built-in freezing are also supported by the tagged commits/releases.

Exact fixes:

- Replace "Neither these fixes nor the .env defect received a GHSA" with "No new Pi-repository advisory was found for the output-file or dotenv fixes; the brace-expansion dependency fixes explicitly address three GHSAs." The current sentence contradicts its own cited dependency advisories.
- Distinguish the June temporary-extension vulnerability from output-file confidentiality. [GHSA-jfgx-wxx8-mp94 / CVE-2026-54328](https://github.com/advisories/GHSA-jfgx-wxx8-mp94) allowed a local attacker to preplant extension code in a predictable directory and get it executed as the Pi user. The October output change does not establish that same code-execution exploit. Its old output names already used randomness.

The three dependency advisories, all published 2026-09-29, are independently confirmed:

| Advisory and CVE | What malicious input allows | Fixed 5.x version |
| --- | --- | --- |
| [GHSA-q2hr-2g5m-vwhr / CVE-2026-102277](https://github.com/advisories/GHSA-q2hr-2g5m-vwhr) | Quadratic brace parsing consumes CPU and stalls the event loop | 5.0.12 |
| [GHSA-qhr7-859c-m2p7 / CVE-2026-102278](https://github.com/advisories/GHSA-qhr7-859c-m2p7) | Deep nested expansion exhausts the stack and can crash the process | 5.0.11 |
| [GHSA-6j4f-fj2g-mc7p / CVE-2026-102276](https://github.com/advisories/GHSA-6j4f-fj2g-mc7p) | Recursive comma parsing/large argument lists exhaust the stack and can crash the process | 5.0.10 |

Pi v1.0.1 pins 5.0.12 and covers all three. These are availability defects, not evidence of credential theft or arbitrary code execution. The [v1.0.1 release](https://github.com/earendil-works/pi/releases/tag/v1.0.1) explicitly names them.

## 11. Provider migration and Radius: CORRECTED

The release channels are supported: ChatGPT sign-in on openai in v0.99.0, Codex GPT-6.1 Sol default in v0.99.1, Anthropic federation in v0.99.2, Radius menu entry in v1.0.0, Azure rename in v1.0.3, and Grok 4.7 default in v0.87.1. Read those release bodies and the tagged provider documentation.

Exact fixes:

- Radius is a top-level `/login` entry placed last, not "at the top of /login." The [v1.0.0 changelog](https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/CHANGELOG.md) explicitly distinguishes menu level from order. It is documented first on the providers page.
- Rename the Azure provider key and provider references, not every occurrence of `azure-openai-responses`. The [v1.0.3 SDK changelog](https://github.com/earendil-works/pi/blob/v1.0.3/packages/ai/CHANGELOG.md#L5-L11) says that API ID and `AZURE_OPENAI_*` variables remain unchanged. SDK imports change to `providers/azure`, `azureProvider`, and `AZURE_MODELS`. Old-provider sessions fall back and lose prompt-cache reuse.
- Anthropic federation is used when the relevant environment is configured and no existing API key/OAuth token takes precedence. Preserve that condition from the [tagged provider docs](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/providers.md).
- For standalone ChatGPT login, include the [v0.99.1 fix](https://github.com/earendil-works/pi/releases/tag/v0.99.1) for the missing bundled module. The feature's first tag is not proof that its first binary implementation worked.
- Radius organization controls/analytics are the vendor's description of an early-alpha service. The menu and client integration are verified; their existence does not independently verify server-side governance effectiveness. M9 adds a concrete client catalog correction.

## Prior claims spot-checked at newest stable

Security exposure and defaults received priority. These findings are fresh tagged-source checks, not acceptance of the harvest's holds labels.

| Prior claim | Verdict and independently read evidence |
| --- | --- |
| user-bash-fails-closed | VERIFIED at v1.2.0: [emitUserBash](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/extensions/runner.ts#L1269-L1297) throws on handler errors and invalid results. An undefined result can still mean ordinary fallthrough; this is not an unconditional ban on local shell execution. |
| rpc-steer-input-handlers | VERIFIED: [queueUserInput](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L2198-L2224) invokes input handlers; [RPC dispatch](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/modes/rpc/rpc-mode.ts#L416-L423) marks source rpc. |
| credential-print-commands | VERIFIED: [actual dispatcher](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/main.ts#L133-L208) resolves and writes the credential without a trust/consent prompt; main dispatches it before project trust. The auth-command parser blob is unchanged from v0.84.2 through the compared v0.87.0, v1.0.0, and v1.2.0 tags. This does not imply access without existing credentials. |
| project-trust-system; agents-override-before-trust; session-dir-env | VERIFIED with section 7's boundary. [Defaults](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-defaults.ts#L29) remain ask. [Resource loading](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/resource-loader.ts) prioritizes AGENTS.override.md and gates context only with noContextFiles. Startup session-dir CLI and environment overrides outrank project settings. |
| bug-upload-radius | VERIFIED: bug-report-upload.ts is the same git blob `2548ad7a8b0d8b2294c95444a240c7d8b5f14865` at v0.87.0, v1.0.0, and v1.2.0. Read [upload code](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/bug-report-upload.ts) and [interactive consent/offline handling](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/modes/interactive/bug-report.ts#L51-L56). The reported endpoint is not an automatic upload of every session. |
| telemetry defaults | VERIFIED at newest stable: [enableInstallTelemetry=true and enableAnalytics=false](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/settings-defaults.ts#L29-L32). Do not describe all egress as off by default. The `/bug` opt-in statement is narrower. |
| browser-launch hardening | VERIFIED: [open-browser.ts](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/utils/open-browser.ts#L10-L24) passes argument arrays to spawn, without a shell. |
| compaction failure/context hooks | VERIFIED: [failure emission](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/agent-session.ts#L1053-L1055) and [typed events](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/extensions/types.ts#L785-L818) include the stated failure/reason/retry information. |
| no MCP; old harness/plugin future | SUPERSEDED: sections 1 and 5. MCP is in the CLI; Durable's library subagent patterns do not establish built-in CLI subagents or approvals. |
| selective-provider base entrypoints | SUPERSEDED before this window: [717a8f95](https://github.com/earendil-works/pi/commit/717a8f958a1ac6ae245091a905672acebd2f3fe4) is in v0.80.0 and not v0.79.10. The [v0.80.0 ai changelog](https://github.com/earendil-works/pi/blob/v0.80.0/packages/ai/CHANGELOG.md#L10) explicitly removes the base entrypoint. Do not date that removal to this window. |

The historical [HarnessTax study](https://arena.ai/blog/coding-agents-harness-tax) was retrievable during this verification. It is dated 2026-09-16, updated 2026-09-18, with 30 sampled tasks from each of SWE-bench Lite and Terminal-Bench 2, three attempts per task, a 100-turn cap, and fixed September 1 API pricing. Its reported Fable 5 comparison is Claude Code 97.8% at $1.33 versus Pi 96.7% at $0.67. This confirms the historical study, not its transfer to v1.2.0 or long-horizon work. Refute any inference that a small system-prompt diff establishes an unchanged harness performance basis. Keep the current cost-gap question unresolved.

The parent's JSONL lead is correctly resolved: [898ab804](https://github.com/earendil-works/pi/commit/898ab804050730e9dcefb4443875d5a932aa6a32), committed 2026-09-22, is in v0.99.0 and not v0.87.1. Grok commit 1a584a7a first ships in v0.87.1. Both were independently checked.

## Misses with pinned receipts and channels

Every tagged change below was independently checked as an ancestor of its stated first stable and absent from that stable's predecessor in the ledger. Release dates refer to the ledger, not the dates the changes were committed. These additions are material under the source contract's defaults, SDK, MCP, extension, export, share, context, provider, and package patterns.

### M1. Four October 13 changes missing from main coverage

All four are `main-unreleased`: ancestor of 3daa20280f6a7c7cbe0935680c9a38fdc3863005, absent from v1.2.0, and no containing release tag was found.

- 2026-10-13T12:28:15Z: [f13c00fb](https://github.com/earendil-works/pi/commit/f13c00fb3a4d77ad3faa815057e31d614d42b3f1) pins internal Pi dependencies to exact versions. v1.2.0 still has caret dependencies. This addresses incompatible internal-package combinations on fresh installs; do not advertise it as shipped or as pinning every external transitive dependency.
- 2026-10-13T13:41:13Z: [cea25743](https://github.com/earendil-works/pi/commit/cea257439d5666ad6a987c065eb3ab0e230a135d) adds `sessionShareDestination` auto/gist/radius. Auto retains the existing authenticated-Radius/otherwise-gist choice; explicit radius requires authentication and does not silently fall back. This gives operators destination control. Its insertion beneath a 1.2.0 changelog heading after the tag does not make it part of that tag.
- 2026-10-13T13:55:12Z: [6f2f164a](https://github.com/earendil-works/pi/commit/6f2f164ab7e7f1516c4530da396b151ab2f84779) restores active tools on session resume, with explicit CLI selection taking precedence and additive/subtractive CLI entries applied to the restored set. This affects resumed authority and reproducibility.
- 2026-10-13T16:17:31Z: [3daa2028](https://github.com/earendil-works/pi/commit/3daa20280f6a7c7cbe0935680c9a38fdc3863005) makes Bun codemode abort/deadline handling return promptly despite non-interruptible built-ins and limits live workers to two across sessions, including canceled workers until they exit. It is a responsiveness/resource-bound repair, not proof every built-in becomes interruptible.

### M2. Theme default and validation break

`tagged-release`: [bf8e4b95](https://github.com/earendil-works/pi/commit/bf8e4b953183009507e68697750179951095a60c) makes the terminal-palette system theme the default in v0.99.0, published 2026-09-29. [96abe9a5](https://github.com/earendil-works/pi/commit/96abe9a5ad45005cae34ed1c52d42f71fc88bedc) applies schema validation during startup as well as reload in v1.2.0, published 2026-10-12. Custom themes need the new schema reference, reusable colors under vars, and removal of unsupported metadata. Fullscreen was not the only changed UI default, and previously accepted theme files can now fail validation.

### M3. Two unrecorded SDK breaks

`tagged-release`: [a328aa89](https://github.com/earendil-works/pi/commit/a328aa89ad6e6dc5c5628ff896769532ed3d29df) first ships in v0.99.0. The [package changelog](https://github.com/earendil-works/pi/blob/v0.99.0/packages/ai/CHANGELOG.md#L5-L9) removes the separate ImagesModels collection/factories and plural image types, requires `type: "image"`, and changes generated model schema to version 6. Embedders must migrate to the unified Models/Provider surface.

`tagged-release`: [36a686ee](https://github.com/earendil-works/pi/commit/36a686ee8dd73afe8242011db387040890e24093) first ships in v1.1.0, published 2026-10-07. [Custom stream functions must return AssistantMessageEventStream](https://github.com/earendil-works/pi/blob/v1.1.0/packages/ai/CHANGELOG.md#L5-L12); a handwritten generic EventStream subclass no longer type-checks. The change also records response/tool durations. Reading only the coding-agent release body misses this migration.

### M4. MCP could execute an already canceled call

`tagged-release`, v1.2.0, 2026-10-12: [da0eadf0](https://github.com/earendil-works/pi/commit/da0eadf0433d29516287c7e3d7b3db325a446281). An HTTP tool call canceled or timed out while awaiting a shared OAuth refresh could still be dispatched after refresh completed. The server could perform an operation the caller had abandoned. The fix propagates a per-request abort signal and checks it before dispatch. This matters directly to tool authority and is stronger than a generic OAuth-hardening note. No advisory identifier was found for it.

### M5. Codemode host memory and output stalls

`tagged-release`: [319fecb8](https://github.com/earendil-works/pi/commit/319fecb89b17b7bf8a4b62734de9a6cc6ceabe49) first ships in v1.0.1, 2026-10-03. A script that prints repeatedly could exhaust host memory and crash Pi; output now fails past 16 Mi characters or 100000 items. [f11e50f7](https://github.com/earendil-works/pi/commit/f11e50f72ef8cdbdc828ad4196956cdc4cbf891e) first ships in v1.2.0 and replaces quadratic output joining that could block the process for seconds or minutes. QuickJS isolation did not itself bound these host-side costs. No Pi advisory was found for either repair.

### M6. Export visibility and summary content

`tagged-release`: [b2bd111f](https://github.com/earendil-works/pi/commit/b2bd111f2d46eed1a4689c32f30fde6306498827) first ships in v0.99.0 and adds a hidden-message toggle to HTML exports. Messages marked display:false can be shown in the exported viewer. Operators should not treat a display flag as export redaction; this is not a claim that the underlying export data first became present in that release.

`tagged-release`: [15e7bdc1](https://github.com/earendil-works/pi/commit/15e7bdc14cae38786c4cde24870ffce888e062cd) first ships in v1.2.0 and omits thinking blocks from compaction and branch-summary serialization as well as bug reports. The harvest records only the bug-report part. This changes summary input/cost; it does not erase thinking from original session records.

### M7. Event startup and MCP JSON migrations

`tagged-release`, v1.2.0, 2026-10-12: [a447ba11](https://github.com/earendil-works/pi/commit/a447ba11f3e7760fcff91e924bda8c20033953ea) makes a session busy during before_agent_start: isIdle is false, sendMessage queues, sendUserMessage needs deliverAs, and an abort during startup is honored. The new event union is only part of the extension migration.

Also in v1.2.0, [f4cca2dc](https://github.com/earendil-works/pi/commit/f4cca2dc22ee4ce05ad75e185a025f6c664829c8) changes `pi mcp list --json` from resource/template counts to `resources: true` for capable servers. Resource enumeration no longer delays registration of tools on connection. Update JSON consumers and distinguish a capability flag from an enumerated resource count.

### M8. Other model defaults changed

`tagged-release`, v0.99.0: [6f755151](https://github.com/earendil-works/pi/commit/6f7551516b84278eb9da1c340c8e7bc66be1a6ba) and [28fd5908](https://github.com/earendil-works/pi/commit/28fd59086880aa6622c0ca2dfdfca31e879dab99) move Fireworks and Together defaults to Kimi K3 as old models are removed. [e1787702](https://github.com/earendil-works/pi/commit/e1787702d32e0a7fd7387840c918faa4d1286187) makes the same default change for OpenCode Go in v0.99.0. `tagged-release`, v1.0.1: [49b9df48](https://github.com/earendil-works/pi/commit/49b9df48952b155937e62fed11f03ad2e15ff3c1) changes NVIDIA's default to Nemotron 3 Ultra after the prior model retires. These belong beside the recorded Codex/xAI defaults because unpinned workflows change model and cost basis.

### M9. Catalog restrictions, costs, and sampling

`tagged-release`, v1.1.0: [43d37639](https://github.com/earendil-works/pi/commit/43d37639912fe15c0926ca5bc7965822ced5615c) stops merging Radius's bundled defaults back into the gateway catalog, which had kept organization-disabled models listed. `tagged-release`, v1.2.0: [ee409a85](https://github.com/earendil-works/pi/commit/ee409a85f6ad92bf8c6ab8ed735c6cd24f2e749e) lists OpenRouter models using the key's permitted catalog and applicable pricing, with cache/base-URL handling. Both improve client selection; neither alone proves server-side authorization enforcement.

`tagged-release`, v1.1.0: [943a10e7](https://github.com/earendil-works/pi/commit/943a10e744b87d9a593f3dca7406d4671910f490) preserves prompt-length pricing tiers previously omitted from multiple provider catalogs, correcting undercounted long-prompt costs. `tagged-release`, v1.0.2, published 2026-10-04: [76dfb88f](https://github.com/earendil-works/pi/commit/76dfb88f63ce51ff2e3fe2ead4fcf1f65f71f121) adds per-thinking-level sampling overrides. Cost comparisons and sampling configurations can change without a default-model change.

### M10. OAuth refresh must persist rotated credentials

`tagged-release`, v1.0.3, 2026-10-05: [bde882c7](https://github.com/earendil-works/pi/commit/bde882c7471c47dc31af3c622496df66c4fae010) lets an already started refresh finish and persist its rotated token even when the triggering request/catalog refresh is canceled or superseded. Before this, cancellation could invalidate a user's login by losing the new refresh token. This is distinct from M4's prohibition on dispatching an abandoned tool call.

### M11. Malformed streamed tool calls are rejected

`tagged-release`, v0.99.0, 2026-09-29: [1b2aa0ca](https://github.com/earendil-works/pi/commit/1b2aa0ca0e3b5bf918c31f4cdc28b3d09b4b5c7a) rejects unfinished Responses tool calls. Servers omitting output_index could previously mix call arguments and cause execution of the wrong assembled command. The fix changes execution safety, not merely rendering. No advisory identifier was found.

### M12. Worktree instructions and Anthropic cache behavior

`tagged-release`, v1.2.0: [f1b2e77f](https://github.com/earendil-works/pi/commit/f1b2e77f5b13b2a199b1052cb79c235451afe7d7) fixes nested worktrees whose symlinked AGENTS.md caused no project context file to load. Operators relying on shared worktree instructions should verify they are loaded after upgrading.

`tagged-release`, v1.0.1: [b271b0a5](https://github.com/earendil-works/pi/commit/b271b0a524b29e13c0c9e748aea0d34e1597f2db) switches supported Anthropic mid-conversation tool changes to inline definitions. Same-name redefinitions no longer resend the full tool list and invalidate its cached prefix; hasToolRedefinitions is deprecated. This is a concrete cache/economics change beyond the harvest's general context-shaping summary.

## Advisory, license, and rule checks

Independently queried the [repository advisory index](https://github.com/earendil-works/pi/security/advisories), its GitHub API, global GitHub advisories for the current and old package names, and the MCP/codemode package names. The repository still has four advisories, with repository publication timestamps on 2026-06-08. Global advisory publication dates are later in June; do not conflate those two timestamps. No additional Pi-specific advisory in this window was found. The dependency GHSAs above are real in-window advisories and must remain visible even though they are not authored in Pi's advisory index.

For clarity, the other historical Pi advisories allow the following:

- [GHSA-7v5m-pr3q-6453 / CVE-2026-54326](https://github.com/advisories/GHSA-7v5m-pr3q-6453): an unsafe link in an HTML transcript export can run browser script when clicked. This is export XSS, not automatic shell execution; fixed in 0.78.1.
- [GHSA-r95r-rj6r-c39x / CVE-2026-54327](https://github.com/advisories/GHSA-r95r-rj6r-c39x): an auth.json permission race can expose stored credentials to another local user; fixed in 0.78.1.
- [GHSA-mqxh-6gq7-558m / CVE-2026-54325](https://github.com/advisories/GHSA-mqxh-6gq7-558m): a checkout's project extension can execute as the user without an approval decision when Pi starts; fixed in 0.79.0.

NVD was checked separately. Its keyword API returned zero results for pi-coding-agent, while direct detail/API retrieval did not provide usable records. Treat NVD coverage as inconclusive, not proof that these CVEs or other vulnerabilities do not exist. GitHub's primary advisory records supply the descriptions and affected/fixed versions above.

No LICENSE or coding-agent LICENSE change appeared between v0.87.0 and the dated main close. The [v1.2.0 package](https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/package.json) remains MIT. No additional released install channel beyond those recorded was established. The scope migration predates this window; the new deprecation observation is a current registry fact.

Rule findings:

- All proposed corrections and misses have primary receipts. Dynamic index/API observations are labeled as such; merged October 13 changes are not promoted to the v1.2.0 tag.
- The numbered harvest explains brace-expansion's DoS class, but its blanket no-GHSA sentence needs section 10's correction. The old temporary-extension GHSA must have its actual code-execution mechanism explained instead of being used as an interchangeable shared-host label.
- Vendor usage figures, Radius governance claims, homepage positioning, and the codemode token result require explicit attribution. No independent user-count or governance audit was performed. The product mechanisms here rest on code and tagged releases.
- No social-post quotation was found. Maintainer-authored articles are used as statements/rationale, consistent with the brief's distinction from social evidence.
- The input contains a double-hyphen dash in its title. The requested crosscheck uses ASCII punctuation and no double-hyphen prose dash. CLI flags retain their literal spelling.

## Limits and delivery check

No runtime exploit, binary behavior, Nix build, fresh dependency resolution, Radius service policy, or live server authorization was tested. No full npm dist-tag history is available. These limits do not turn the incorrect tool-matching or top-level-hook advice into verified guidance: the tagged source directly contradicts those claims. The package-ecosystem-index question remains open. This is a targeted release/code/advisory audit, not a certification that every commit or vulnerability has been found.

Only this crosscheck file was authored in the repository. The harvest was left unchanged; its SHA256 before verification was `61893604ae4cf93455e4d2de5e75085fb13fa45197e84ed35d9b81b64eedde99`. No repository-writing git command, npm install, or site build was run.
