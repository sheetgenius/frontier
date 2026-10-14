---
schema_version: bitter.frontier_harvest.v0
provider: omp
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/omp.yml
channels_present: [tagged-release, main-unreleased]
window_volume: 44 GitHub releases after v18.2.8 through v18.10.4, none prerelease; 18.2.9 on npm and Homebrew without a current tag or release; v18.4.7 and v18.6.2 tags without releases or npm versions; 5,925 commits through stable; reconstructed main close 13 commits ahead; 25 material sections; no matching published advisory found in bounded searches
lane: primary sources, profile-refresh researcher and write-up correction
---

# Harvest: omp (primary sources)

OMP is Oh My Pi, can1357/oh-my-pi and @oh-my-pi/pi-coding-agent, not upstream Pi. Facts about OMP are not assumed to hold in Pi. This record now covers the complete inclusive 13 October date, rather than the original 09:31Z snapshot. Correction date: 2026-10-14. Upstream code, pages and registry replies were read as untrusted data; no upstream code, installer, binary or tests were executed.

## Install today

Posture date: 2026-10-13. The crosscheck observed registries and service replies on 14 October, using publication timestamps to establish the 13 October close.

- Stable is v18.10.4, published 2026-10-13T19:38:04Z, prerelease=false, at 687892d1046ecaf18829b45f5b86928a308258f4: https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4. npm published @oh-my-pi/pi-coding-agent@18.10.4 at 19:54:08.077Z, latest as the only dist-tag: https://www.npmjs.com/package/@oh-my-pi/pi-coding-agent/v/18.10.4.
- Registry install: bun install -g @oh-my-pi/pi-coding-agent@18.10.4. No install was performed here.
- Homebrew install: brew install can1357/tap/omp. Formula 22d4f9b973c504af44c1c54907dcc8c5c6729caf declares 18.10.4, downloads from build.stencil.so and pins four platform hashes matching GitHub SHA256SUMS: https://github.com/can1357/homebrew-tap/blob/22d4f9b973c504af44c1c54907dcc8c5c6729caf/Formula/omp.rb.
- The moving omp.sh/install redirect remains. At the crosscheck it matched scripts/install.sh at v18.10.4, unchanged from v18.10.3, sha256 cd2ea5553e9ad8f89fe5e04f771ec13db6f33a773f7ba8f85c84b63cdbeb9065. Matching Bun uses the registry; otherwise the script resolves the stable binary service and checks SHA-256. The documented pinned binary form uses sh -s with --binary --ref v18.10.4: https://github.com/can1357/oh-my-pi/blob/v18.10.4/scripts/install.sh.
- The dated stable build response was 20261013-193832-687892d, version 18.10.4, published_at 2026-10-13T19:40:08Z; macos-arm64 hash 7459333760ef0e265d5d40445ea459da3d18a10ef3ec4958302e1977b52c8a2b matched Homebrew and GitHub. Canary answered the same stable build; beta, nightly and preview returned 400 invalid channel. These replies are timestamped observations, not immutable code receipts: https://build.stencil.so/api/products/omp/latest/macos-arm64?channel=stable.
- Pin source builds with nix run github:can1357/oh-my-pi/v18.10.4. Bare Nix follows main even if package.json still labels it 18.10.4: https://github.com/can1357/oh-my-pi/blob/v18.10.4/nix/package.nix#L114-L117.
- Reconstructed complete-date main is b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c, merged 22:39:57Z, 13/0 ahead/behind stable. Its composer-steering redesign is unreleased at this date (section 22). The earlier main-only plan review, approval dialog, Codex Code Mode removal and Claude archive fix are all in v18.10.4.
- Defaults relevant here: yolo approval, idle cache warming, IDA discovery when locally installed and terminal program status are on; computer API, worktree startup, gitGuard and structured task results are off. Sections 4, 5, 9, 11, 12 and 16 carry pinned receipts.
- Pi's different package, @earendil-works/pi-coding-agent, is 1.2.0 at this close; its legacy-node20 tag is separate. Section 9 names the registry receipts without attributing Pi behavior to OMP.
- Guidance is install 18.10.4 for the specific fixes recorded below, not a general security floor: unconditional project input loading and GitHub credential forwarding remain.

## Release ledger

Stable = non-prerelease GitHub release. ahead/behind from `git rev-list --count <previous stable>..<tag>` and the reverse, spot-checked against `gh api compare` (v18.2.8...v18.2.10 -> ahead 322, behind 0; v18.10.3...818dd42b -> ahead 42, behind 0). History is linear: behind_by is 0 at every step.

| Tag | GitHub release published (UTC) | Prerelease | ahead_by/behind_by vs previous stable | npm publish (UTC) |
|---|---|---|---|---|
| v18.2.8 (baseline) | 2026-09-21T17:31:56Z | false | 23/0 vs v18.2.7 (parent) | 2026-09-21T17:42:15Z |
| 18.2.9 (npm and Homebrew only; no tag, no release) | none | n/a | bump commit 4d528596 is in v18.2.10 | 2026-09-22T18:52:27Z |
| v18.2.10 | 2026-09-22T23:42:53Z | false | 322/0 | 2026-09-22T23:51:17Z |
| v18.2.11 | 2026-09-23T05:16:14Z | false | 83/0 | 2026-09-23T05:26:48Z |
| v18.3.0 | 2026-09-24T02:21:31Z | false | 115/0 | 2026-09-24T02:31:40Z |
| v18.3.1 | 2026-09-25T04:16:36Z | false | 260/0 | 2026-09-25T04:27:15Z |
| v18.3.2 | 2026-09-26T00:00:25Z | false | 65/0 | 2026-09-26T00:08:34Z |
| v18.3.3 | 2026-09-27T02:48:57Z | false | 118/0 | 2026-09-27T02:56:18Z |
| v18.3.4 | 2026-09-27T04:47:45Z | false | 7/0 | 2026-09-27T04:55:08Z |
| v18.3.5 | 2026-09-27T13:35:03Z | false | 24/0 | 2026-09-27T13:42:26Z |
| v18.4.0 | 2026-09-28T03:33:34Z | false | 136/0 | 2026-09-28T03:40:05Z |
| v18.4.1 | 2026-09-28T06:49:42Z | false | 340/0 | 2026-09-28T07:00:19Z |
| v18.4.2 | 2026-09-28T11:50:29Z | false | 79/0 | 2026-09-28T11:57:23Z |
| v18.4.3 | 2026-09-29T04:24:47Z | false | 77/0 | 2026-09-29T04:32:28Z |
| v18.4.4 | 2026-09-29T19:35:17Z | false | 169/0 | 2026-09-29T19:44:01Z |
| v18.4.5 | 2026-09-30T19:08:59Z | false | 242/0 | 2026-09-30T19:17:46Z |
| v18.4.6 | 2026-10-01T02:16:13Z | false | 56/0 | 2026-10-01T02:24:34Z |
| v18.4.7 (tag only, commit 2026-10-01T04:01:35Z) | none | n/a | 3/0 vs v18.4.6; in v18.4.8 | none (E404) |
| v18.4.8 | 2026-10-01T06:08:07Z | false | 5/0 | 2026-10-01T06:16:04Z |
| v18.4.9 | 2026-10-01T14:47:01Z | false | 106/0 | 2026-10-01T14:55:30Z |
| v18.4.10 | 2026-10-02T01:35:53Z | false | 214/0 | 2026-10-02T01:43:42Z |
| v18.4.11 | 2026-10-02T15:12:46Z | false | 74/0 | 2026-10-02T15:23:47Z |
| v18.4.12 | 2026-10-02T16:03:50Z | false | 56/0 | 2026-10-02T16:11:58Z |
| v18.5.0 | 2026-10-03T01:26:08Z | false | 67/0 | 2026-10-03T01:33:22Z |
| v18.5.1 | 2026-10-03T12:30:49Z | false | 406/0 | 2026-10-03T12:37:32Z |
| v18.6.0 | 2026-10-03T22:06:50Z | false | 42/0 | 2026-10-03T22:15:10Z |
| v18.6.1 | 2026-10-04T16:12:44Z | false | 42/0 | 2026-10-04T16:20:30Z |
| v18.6.2 (tag only, commit 2026-10-04T21:34:30Z) | none | n/a | 12/0 vs v18.6.1; in v18.6.3 | none (E404) |
| v18.6.3 | 2026-10-06T13:17:27Z | false | 569/0 | 2026-10-06T13:26:06Z |
| v18.7.0 | 2026-10-06T20:05:49Z | false | 284/0 | 2026-10-06T20:14:44Z |
| v18.8.0 | 2026-10-07T07:15:26Z | false | 80/0 | 2026-10-07T07:25:23Z |
| v18.8.1 | 2026-10-07T17:14:44Z | false | 46/0 | 2026-10-07T17:29:56Z |
| v18.8.2 | 2026-10-07T17:52:59Z | false | 6/0 | 2026-10-07T18:09:48Z |
| v18.8.3 | 2026-10-07T18:47:02Z | false | 9/0 | 2026-10-07T19:08:36Z |
| v18.8.4 | 2026-10-08T03:25:18Z | false | 92/0 | 2026-10-08T03:30:01Z |
| v18.8.5 | 2026-10-08T14:14:16Z | false | 183/0 | 2026-10-08T14:24:01Z |
| v18.8.6 | 2026-10-08T19:05:03Z | false | 108/0 | 2026-10-08T19:11:05Z |
| v18.8.7 | 2026-10-09T13:45:03Z | false | 190/0 | 2026-10-09T13:53:20Z |
| v18.8.8 | 2026-10-10T15:02:52Z | false | 180/0 | 2026-10-10T15:12:33Z |
| v18.8.9 | 2026-10-10T17:15:16Z | false | 58/0 | 2026-10-10T17:21:47Z |
| v18.9.0 | 2026-10-11T08:08:01Z | false | 572/0 | 2026-10-11T08:15:49Z |
| v18.9.1 | 2026-10-11T11:10:18Z | false | 15/0 | 2026-10-11T11:17:06Z |
| v18.9.2 | 2026-10-11T19:07:17Z | false | 166/0 | 2026-10-11T19:17:31Z |
| v18.10.0 | 2026-10-12T01:18:39Z | false | 22/0 | 2026-10-12T01:25:30Z |
| v18.10.1 | 2026-10-12T05:55:11Z | false | 9/0 | 2026-10-12T06:03:29Z |
| v18.10.2 | 2026-10-12T14:08:38Z | false | 26/0 | 2026-10-12T14:19:51Z |
| v18.10.3 | 2026-10-12T19:23:53Z | false | 100/0 | 2026-10-12T19:35:00Z |
| v18.10.4 | 2026-10-13T19:38:04Z | false | 105/0 | 2026-10-13T19:54:08.077Z |

All 44 earlier GitHub-release rows, including the baseline, were independently checked by the crosscheck. The additional row makes 44 releases after v18.2.8 and 5,925 commits through v18.10.4. Present-day 404s do not prove whether an 18.2.9 release briefly existed and was deleted.

## 1. The agent can change OMP settings, including approval policy; session grants span keys but distinguish saving

- **Date:** 2026-09-25 (v18.3.1); 2026-10-04 (v18.6.1)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 13226ae7 and 0ccfbdc4 are absent from v18.3.0 and present in v18.3.1; 548ccb3e is absent from v18.6.0 and present in v18.6.1. All are ancestors of v18.10.4. cfg-protocol.ts L120-L148 checks session identity and persistence kind, not the setting key. The test grants on advisor.enabled and changes advisor.syncBacklog without asking again. writerSettings L305-L318 refuses task subagents and callers without settingsApproval. The TUI selector defaults to Allow once and routes prompts to writable collab guests; first answer wins.
- **Receipt:** https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L120-L148, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L305-L318, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L399-L461, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/test/internal-urls/cfg-protocol.test.ts#L108-L135, https://github.com/can1357/oh-my-pi/commit/548ccb3e9edbeed9e0c543aff98a1fcb28d803c3, https://github.com/can1357/oh-my-pi/releases/tag/v18.3.1, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/collab.md#L129-L146, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/collab.md#L168-L174
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** cfg:// lets the interactive agent read settings with credentials redacted and change registered keys for the session or persist them to global config.yml with /save. An effective change requires cfg approval unless an existing session grant covers it; yolo alone does not supply that grant. A session-only grant covers later session-only changes across keys, but the first /save still asks. A grant on a /save prompt covers subsequent saves as well. No-op session writes return unchanged without asking; environment-shadowed session writes are refused before prompting. Reachable keys include tools.approvalMode, tools.approval, bash.patterns and disabledProviders. Since v18.6.1 writable collab guests can answer the prompt. Task subagents and print, RPC and ACP callers cannot write settings through this handler. The instruction to change settings only when asked is model guidance, not a user-intent check. The production collab relay source and binaries remain unpublished; its stated lack of retention is not independently established here.

**Operator consequence.** Choose Allow once. Inspect the setting and before/after values, especially approval, provider and collab settings. An Always for this session grant is not confined to the key shown. Sharing a control link delegates the ability to answer settings prompts, including persistence to your global config. ask.timeout controls unattended denial.

**Lens.** Harness tuning is now agent-operable. The human decision is whether to grant a bounded change or a session-wide delegation across settings.

## 2. Binary distribution moved to Stencil in 18.9.0, while installer integrity improved

- **Date:** 2026-10-09 (v18.8.7); 2026-10-11 (v18.9.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 4585b144 is absent from v18.8.9 and present in v18.9.0. The v18.10.4 installer is unchanged from v18.10.3. build-service.ts documents version-bearing User-Agent statistics. Crosscheck compared all four 18.10.4 Homebrew hashes with the GitHub SHA256SUMS asset and the stable service response, without downloading binaries.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/4585b144ff86b9d3dd6d9d17263cbd541a4ba8aa, https://github.com/can1357/oh-my-pi/blob/v18.10.4/scripts/install.sh#L15-L21, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/cli/build-service.ts#L1-L27, https://github.com/can1357/homebrew-tap/blob/22d4f9b973c504af44c1c54907dcc8c5c6729caf/Formula/omp.rb, https://github.com/can1357/oh-my-pi/releases/download/v18.10.4/SHA256SUMS.txt, https://github.com/can1357/oh-my-pi/releases/tag/v18.9.0
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** Homebrew, the installer binary path and binary self-update now use build.stencil.so; npm and Bun still use the registry. The script verifies SHA-256 before replacement, unlike through v18.8.9, and self-update supports binary deltas. Hashes returned by the same service detect corruption but do not independently authenticate a compromised service. GitHub releases still carry binaries and checksums. Compiled-binary startup checks send the installed version to the service, whose client documentation says it counts update checks; startup.checkUpdate defaults true.

**Operator consequence.** Install the 18.10.4 registry package or compare a binary with the matching GitHub checksum. Pin the documented binary installer ref to v18.10.4 or pin Nix to that tag. Set startup.checkUpdate: false if version reporting is unwelcome. Canary answered the stable build during the dated crosscheck, so it is not a separately verified preview.

**Lens.** The old starts-only integrity caveat is retired. A corruption check improved while distribution acquired a company-operated service dependency.

## 3. Provider exclusions and saved-model restoration stopped silently crossing boundaries, with an interactive fallback exception

- **Date:** 2026-09-25 (v18.3.1); 2026-09-28 (v18.4.1); 2026-10-06 (v18.6.3); 2026-10-08 (v18.8.4)
- **Channel:** `tagged-release`
- **Ancestry evidence:** de256ead is absent from v18.4.0 and present in v18.4.1. 8aaf115b and dae48481 are absent from v18.6.2 and present in v18.6.3; 8deae638 is absent from v18.8.3 and present in v18.8.4. PRs #13194 and #13689 describe CLI reproductions. Current SDK and runtime restoration explicitly retain interactive fallback. Settings precedence and array replacement remain at v18.10.4.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/de256ead9f8286bed702833e330e3debdcbae25d, https://github.com/can1357/oh-my-pi/pull/13194, https://github.com/can1357/oh-my-pi/commit/8aaf115b8e5f54e6bddeffa969e43e290a1efa01, https://github.com/can1357/oh-my-pi/pull/13689, https://github.com/can1357/oh-my-pi/commit/dae484818f88254cc72a73c7bde082adcdf7eee5, https://github.com/can1357/oh-my-pi/commit/8deae638069c88a8af2ed3b0dce06f12ae0387cb, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/sdk.ts#L854-L864, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/agent-session.ts#L11541-L11550, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L166-L168
- **Half:** defect | **Confidence:** high (source read; no runtime reproduction)

**What changed.** Before v18.4.1, retry chains, advisors and restored models could use disabled providers with reachable credentials. Before v18.6.3, an unrestorable saved model could silently send a resumed transcript to the current model in headless operation. Gateway routing and disabled-provider usage reporting were fixed in v18.6.3 and v18.8.4 respectively. Headless startup and session switching now fail when no saved model can be restored and no explicit override is supplied. Interactive TUI sessions still warn and switch when fallback is permitted and retry.modelFallback is on. A project disabledProviders array can still replace the global array.

**Operator consequence.** Use 18.10.4 rather than treating the old 18.2.1 floor as sufficient. Inspect retained JSON logs for retry_fallback_applied naming excluded providers and remove unwanted ambient credentials. Set your exclusion and fallback policy in a nested YAML --config overlay above project config. RPC clients should handle restore failure or specify provider/modelId; do not assume the TUI can never change model.

## 4. Invalid approval flags and late AST guards were fixed, but eval still sits outside those barriers

- **Date:** 2026-09-28 (v18.4.1); 2026-09-29 (v18.4.3)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 876af508 is absent from v18.4.0 and present in v18.4.1. 30f0e680 and 231fb4f9 are absent from v18.4.2 and present in v18.4.3. The old flag handler logs and leaves approvalMode unset. afterBridgedToolCall at v18.10.4 receives completed output. Latest approval docs retain the separate eval policy.
- **Receipt:** https://github.com/can1357/oh-my-pi/blob/v18.4.2/packages/coding-agent/src/cli/flag-tables.ts#L229-L238, https://github.com/can1357/oh-my-pi/commit/30f0e6806f02f41a83839664769ef36d4e1326ef, https://github.com/can1357/oh-my-pi/commit/231fb4f9ebfab0d80604743ced743cb9408e1edf, https://github.com/can1357/oh-my-pi/commit/876af5084f1bdfc11410c2ad4426a0e5cab0ac20, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/ttsr-coordinator.ts#L294-L306, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L75-L90
- **Half:** defect | **Confidence:** high (source read; no runtime reproduction)

**What changed.** Since v18.4.3 an invalid --approval-mode exits 2 before ordinary or ACP operation instead of quietly using configured policy, normally yolo. Since v18.4.1 directly dispatched AST-conditioned TTSR guards are awaited before execution. Previously the late check deterministically allowed writes on chat-completions end-of-stream paths; other transports were timing-dependent. Eval-bridged calls still receive only a reminder after execution. bash.patterns deny rules do not apply to commands spawned through eval, which keeps ambient filesystem, network and subprocess access. The eval computer API is disabled by default; its read_only guard is not a general JavaScript sandbox.

**Operator consequence.** Re-run launch scripts to find invalid approval flags. Gate eval with tools.approval.eval: prompt or deny when bash patterns or AST rules matter. Prompting removes unattended eval autonomy; a deny removes that execution surface entirely.

## 5. Project inputs still load without trust approval, and 18.7.0 documented that design

- **Date:** 2026-10-06 (v18.7.0); rechecked at v18.10.4
- **Channel:** `tagged-release`
- **Ancestry evidence:** a5a5f1d1 is absent from v18.6.3 and present in v18.7.0. At v18.10.4 runner.ts L1401-L1404 still returns true for isProjectTrusted. README L593-L602 names unconditional project-input loading and narrowing flags; tools.approvalMode remains yolo. approval-mode.md L166 orders runtime flags, overlays, project and global config. Arrays replace and objects deep-merge.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/a5a5f1d128fac3bbb558696b62f1c1cc5d5aa9f7, https://github.com/can1357/oh-my-pi/blob/v18.10.4/README.md#L593-L602, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/runner.ts#L1401-L1404, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/tools/settings.ts#L311-L315, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L166, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L166-L168
- **Half:** defect | **Confidence:** high (source read; no runtime reproduction)

**What changed.** The trust behavior did not change: settings, extensions, hooks, tools, commands, skills, rules and project MCP configuration load by design. Project config outranks global policy and can replace bash.patterns or disabledProviders and override individual tools.approval keys. The README now explicitly describes this and its partial controls. --no-extensions skips ambient discovery; --trusted-extension supplies an exact allowlist. --no-tools disables built-ins but project tool modules remain a separate surface. There is no inspected flag skipping the project settings layer. The README does not predict whether a future trust gate will ship.

**Operator consequence.** Before running in a repository you did not write, inspect its .omp directory and package.json extension declarations. Runtime approval controls and --config overlays outrank project config but do not exclude every input. For project MCP exclusion, use nested YAML with mcp followed by enableProjectConfig: false; a flat dotted key is ignored. Review hooks, commands and project tools too. A tagged gate preventing input loading before trust is decided would change this posture.

## 6. Loaded extensions can add privileged model context and rewrite finished reply text

- **Date:** 2026-09-25 (v18.3.1); 2026-09-29 (v18.4.4)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 45cef58d is absent from v18.3.0 and present in v18.3.1; 844fdbf8 and 7bcf6ac1 are absent from v18.4.3 and present in v18.4.4. Latest extension docs describe handler context and text-only rewrites. The post-input-rewrite approval check exists at both v18.2.8 and v18.10.4; the new documentation is clarification.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/45cef58d859f0e9c720f996a6aebe7b3116056c4, https://github.com/can1357/oh-my-pi/commit/844fdbf8dfee9234215b824d800214cef65eb089, https://github.com/can1357/oh-my-pi/commit/7bcf6ac11106cb33a28ed008e5f8b06d820f300f, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L642-L655, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L490, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/wrapper.ts#L243-L325
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** additionalContext carries handler-authored instructions after tool results at developer/system priority where the provider transport supports it, without changing displayed tool results. Pre-tool context is delivered only for a successful executed call; post-tool context can also add failure guidance. assistant_message handlers may replace finished reply text in history, persistence and the next request. Text-block count, order and positions must stay fixed; non-text blocks remain unchanged, and streamed text is not retracted. These APIs are available to unconditionally loaded project extensions. Tool input rewriting is still approved again before execution, a defense that predates this window.

**Operator consequence.** Inspect project extensions for additionalContext, addAdditionalContext and assistant_message handlers. The visible tool result is not the whole instruction stream; a streaming client can show text different from persisted history. Use reviewed extensions for policy injection rather than trusting all repository modules.

**Lens.** Policy extensions gain useful guidance and record-editing powers. Deciding which author may supply that guidance is now part of the operating environment.

## 7. 18.10.4 lets extensions revise and execute the plan review, while tool approvals require Ctrl+Enter

- **Date:** 2026-10-13 (v18.10.4, published 19:38:04Z)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 7738a3f0, ce9d35ec, e95a113e, 818dd42b and d40b86cf are absent from v18.10.3 and present in v18.10.4. The early main-only observation is superseded. Latest plan docs and the d40b86cf patch were read; the release confirms publication. Approval docs L96-L105 and #15550 support key behavior and timeout denial.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L560, https://github.com/can1357/oh-my-pi/commit/d40b86cf7d6607fc349545ec67ed321023e53425, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L358-L360, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L96-L105, https://github.com/can1357/oh-my-pi/pull/15550
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** An extension can answer the interactive plan review while the terminal picker stays live; first answer wins. It can write its own plan revision before answering execute, reopen a dismissed review when the session is idle, and choose an available execution tier with input.role. Execution uses in-overlay edits if present, otherwise the plan file re-read at decision time. This API delegates plan-review choice; it does not itself override downstream tool policy. In the same stable release plain Enter cannot approve a tool call, Ctrl+Enter or Ctrl+Q approves only after a half-second key guard, and an approval timeout denies. Compact prompts depend on the transcript for full tool content unless tool activity is hidden. Writable collab guests still answer host selects.

**Operator consequence.** On 18.10.4 treat plan review as a software-operable decision, not a human-only stop. Inspect extensions for resolvePlanReview and openPlanReview and restrict discovery with --no-extensions or an exact trusted-extension allowlist when that decision must remain yours. This trades away extension-driven review automation. Learn Ctrl+Enter and read full tool content before approving. The post-release composer-steering redesign is main-only in section 22.

**Lens.** Routine remote plan decisions can leave the human queue. A review boundary requiring accountable human choice must be preserved deliberately; an extension callback is not proof of improved judgment.

## 8. The close is 18.10.4: 44 releases, two tag-only versions, and one package without a tag

- **Date:** 2026-09-22 through 2026-10-13
- **Channel:** `tagged-release`
- **Ancestry evidence:** The crosscheck verified all release-ledger rows and added v18.10.4: 105/0 against v18.10.3 and 5,925 commits from v18.2.8. 18.2.9 bump 4d528596 is in v18.2.10; registry publication and the dated tap formula exist without a current tag/release. v18.4.7 and v18.6.2 are ancestors of following stables, without release objects or npm versions. Read-only rev-list rechecked 5,925 and main close pin b91db66e at 13/0 versus v18.10.4.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4, https://www.npmjs.com/package/@oh-my-pi/pi-coding-agent/v/18.10.4, https://www.npmjs.com/package/@oh-my-pi/pi-coding-agent/v/18.2.9, https://github.com/can1357/homebrew-tap/blob/a0f144b0d1cd75fa9429281279aa665d73a15498/Formula/omp.rb, https://github.com/can1357/homebrew-tap/blob/22d4f9b973c504af44c1c54907dcc8c5c6729caf/Formula/omp.rb, https://github.com/can1357/oh-my-pi/tree/v18.4.7, https://github.com/can1357/oh-my-pi/tree/v18.6.2, https://github.com/can1357/oh-my-pi/blob/v18.10.4/nix/package.nix#L114-L117, https://github.com/can1357/oh-my-pi/compare/v18.10.4...b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c
- **Half:** defect | **Confidence:** high (source read; no runtime reproduction)

**What changed.** At the complete 13 October close, stable is v18.10.4, published 19:38:04Z; npm followed at 19:54:08.077Z with latest as its sole dist-tag. Homebrew and the binary service also resolve 18.10.4. The window has 44 non-prerelease GitHub releases after v18.2.8. 18.2.9 reached npm and Homebrew without a current tag or release; v18.4.7 and v18.6.2 have tags but no release/npm version. Current 18.2.9 binary URLs return 404, which cannot prove the historical formula was broken for the entire interval. A bare Nix flake follows main while using package.json for its version label. The reconstructed in-window main pin is b91db66e, 13 commits beyond stable. No separately published beta, preview or nightly was found in the dated channel checks; canary returned the stable build.

**Operator consequence.** Install bun install -g @oh-my-pi/pi-coding-agent@18.10.4 or use the dated Homebrew formula; pin Nix to github:can1357/oh-my-pi/v18.10.4. Report the package scope and installed version rather than inferring availability from a tag. Read both Removed and Breaking Changes across skipped releases. Do not include 14 October main changes in this posture.

## 9. OMP ported Pi cache warming and filled three Pi 1.x compatibility gaps without adopting Pi trust

- **Date:** 2026-09-27 (v18.3.5); 2026-10-11 (v18.9.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 5ee7b69c is absent from v18.3.4 and present in v18.3.5; 597c8d17 is absent from v18.8.9 and present in v18.9.0. Tagged session settings still default cacheWarming to idle. The compatibility source describes verbatim ported transcript logic with structural type adaptations. Registry pair at the close: OMP 18.10.4 / Pi 1.2.0; Pi 1.0.0 published 1 October, 1.2.0 on 12 October. Pi also has legacy-node20=0.74.2, which is not OMP's channel.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/5ee7b69ceba873b9566307485ddd8704a4d1b28e, https://github.com/can1357/oh-my-pi/commit/597c8d17b54e1e30120f917f24bf0d2688be5821, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/settings.ts#L1137-L1141, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/legacy-pi-transcript.ts#L1-L19, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extension-loading.md#L280, https://www.npmjs.com/package/@earendil-works/pi-coding-agent/v/1.2.0
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** OMP explicitly ported Pi's cache-warming strategy. The main loop can replay the last request and stop at the first token to refresh an expiring five-minute cache; idle warming is on when its expected avoided-miss cost exceeds refresh cost by $0.05. Extensions can override the decision. Three exports, transcript helpers, compositeTuiLine and parseSkillBlock, filled named gaps seen with pi-optchat. That is not blanket Pi 1.x compatibility, nor independently established identity of complete upstream files. Pi-name imports resolve to OMP bundled copies, whose project-trust context still returns true.

**Operator consequence.** Set providers.cacheWarming: off if idle requests are unwelcome. Test the exact Pi extension against OMP; an import that resolves does not establish matching authority behavior. Do not use its Pi trust check as an OMP guard. Write the full package scope in inventories.

**Lens.** Cache warming remains a workaround for provider cache expiry. Selective ports contradict a story of complete fork independence; APIs can travel without their trust model.

## 10. Process control moved to URLs, and per-call subagent model overrides disappeared in a patch release

- **Date:** 2026-09-24 (v18.3.0); 2026-10-03 (v18.5.0); 2026-10-07 (v18.8.2)
- **Channel:** `tagged-release`
- **Ancestry evidence:** f89a6db1 removes hub registration and docs in v18.3.0. v18.5.0 adds per-call model selectors; 31876ff5 removes them in v18.8.2, absent v18.8.1. v18.10.4 policyKey precedence and device-only write restrictions were checked.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7, https://github.com/can1357/oh-my-pi/releases/tag/v18.3.0, https://github.com/can1357/oh-my-pi/releases/tag/v18.5.0, https://github.com/can1357/oh-my-pi/commit/31876ff53eeb81b1624fabdbf1306d31e30f34af, https://github.com/can1357/oh-my-pi/releases/tag/v18.8.2, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L49, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/tools/write.ts#L788-L804
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** hub is removed, despite release wording calling it deprecated. Process control uses wait, write and proc://; peers use agent://, settings cfg:// and mounted devices xd://. Per-call model fields on task items, eval agent() and workpool() existed from v18.5.0 to their removal in v18.8.2. A device write consults the device policyKey before tools.approval.write. A device-only write still permits peer coordination and local:// scratch while rejecting other filesystem writes.

**Operator consequence.** Migrate hub callers to wait and write proc://<id>/kill, remove obsolete model fields, and check device-specific approval keys. Read Removed as well as Breaking Changes. Task result defaults and other input breaks are separately recorded in sections 16 and 20.

**Lens.** A read/write grammar for devices and state is a reusable primitive. Tool-specific glue gets smaller while policy and compatibility review remain with the operator.

## 11. IDA Pro became agent-operable; owner-only Windows daemons require closing old sessions

- **Date:** 2026-09-25 (v18.3.1); 2026-10-12 (v18.10.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 134bcf29 is absent from v18.3.0 and present in v18.3.1. a608a9ca is absent from v18.9.2 and present in v18.10.0. Tagged IDA docs and settings show default-on discovery when IDA with idalib is installed. Windows IPC code installs a current-user DACL and rejects remote clients. Release notes explicitly require closing older Windows sessions.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/134bcf29595d491fce6c79ec97c737b8a591dc85, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/tools/ida.md#L1-L25, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/ida/settings.ts#L9-L11, https://github.com/can1357/oh-my-pi/commit/a608a9ca07c9443634e80d877d61c602099dab91, https://github.com/can1357/oh-my-pi/blob/v18.10.4/crates/pi-natives/src/ipc/windows.rs#L152-L188, https://github.com/can1357/oh-my-pi/releases/tag/v18.10.0
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** Agents can open binaries, change an IDA database and execute Python in persistent project-shared hosts. ida.enabled defaults true and exposes the tool when a compatible local IDA install is found. list is read tier, exec is exec tier, other actions write; default yolo permits them without an ordinary prompt. v18.10.0 made local IPC owner-only across platforms, including Windows pipes. Old Windows daemons are not reused by the new release. This does not establish an earlier cross-user exploit.

**Operator consequence.** Decide whether agents should operate your IDA installation: disable ida.enabled or prompt tools.approval.ida. Upgrade Windows hosts and close older OMP sessions; replacing the binary does not retrofit running older daemons.

**Lens.** The end-to-end operating surface now includes binary analysis. Approval and host ownership remain separate decisions.

## 12. Concurrent sessions gained opt-in worktrees and a limited git guard, with attention status on by default

- **Date:** 2026-09-22 (v18.2.10); 2026-10-08 (v18.8.6); 2026-10-09 (v18.8.7)
- **Channel:** `tagged-release`
- **Ancestry evidence:** bb863d99 first ships in v18.2.10; 0c8a3a0a is absent from v18.8.5 and present in v18.8.6; 098abb90 is absent from v18.8.6 and present in v18.8.7. Current setting defaults are worktree.onStart=off, worktree.onExit=keep, bash.gitGuard=false and terminal.programStatus=true.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/0c8a3a0a30eed995aa27893327fd9b450eb9a6ba, https://github.com/can1357/oh-my-pi/commit/098abb906b5b70c244b0a45c00d646e9bf2cf997, https://github.com/can1357/oh-my-pi/releases/tag/v18.8.6, https://github.com/can1357/oh-my-pi/releases/tag/v18.8.7, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/task/settings.ts#L104-L128, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L677
- **Half:** capability | **Confidence:** high (source read; no runtime reproduction)

**What changed.** Sessions can start in separate worktrees and keep them at exit. The embedded shell's git builtin can reject stash, hard reset and overwriting checkout/switch/restore; the guard defaults off, excludes path-invoked git, pty, services and other programs, and has a conflict-resolution exception. It is not checkout-wide confinement. OSC 7501 status defaults on and reports working, waiting, done or failed with the question; collab list also exposes busy state.

**Operator consequence.** Set worktree.onStart: create or ask for parallel repository work, and consider bash.gitGuard for the embedded-shell path. Use terminal status or collab busy data to find sessions needing a decision. Verify conflict handling and do not rely on the guard for arbitrary processes.

**Lens.** Work isolation is useful before adding more agents. Status reporting spends attention on a pending decision instead of repeated pane polling; no measured throughput gain is established.

## 13. Credential fixes include a GitHub plugin-token exception; advisory searches found no matching published record

- **Date:** 2026-09-30 (v18.4.5); 2026-10-08 (v18.8.4, v18.8.5); 2026-10-11 (v18.9.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1f63a9b6 initially stripped plugin credentials, but c1791690 restored unchanged GitHub forwarding before both shipped in v18.9.0. Tagged gitInstallSpec L77-L96 and plugin test L401-L447 preserve the exception. 1d56352d/2c3458ed first ship in v18.9.0, 4b6b3edb in v18.8.5, 9532eb39 in v18.4.5 and ba9b31b9 in v18.8.4. Crosscheck searched project/GitHub advisories and NVD, with zero matching published results.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/1f63a9b6bff918e1132af8e61c8aa93938d3bc1a, https://github.com/can1357/oh-my-pi/commit/c17916900b66c48fe818750f0d2000152ec0bf14, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/plugins/manager.ts#L77-L96, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/test/plugin-install-git.test.ts#L401-L447, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/plugin-manager-installer-plumbing.md#L82-L84, https://github.com/can1357/oh-my-pi/commit/1d56352d20d8cabbb0ce739b4bc764de9efc1a82, https://github.com/can1357/oh-my-pi/commit/2c3458ed2868835db5766b10b2836f4c32f989e2, https://github.com/can1357/oh-my-pi/commit/4b6b3edbe19aaad4e376f9d82b660d030a868fca, https://github.com/can1357/oh-my-pi/commit/9532eb39ca916cdfac3be58eb66427331343a4c7, https://github.com/can1357/oh-my-pi/commit/ba9b31b9ba42d7fdd3456b0a5d6758587ef84fff, https://github.com/can1357/oh-my-pi/security/advisories
- **Half:** defect | **Confidence:** high (source read; no runtime reproduction)

**What changed.** v18.9.0 strips inline credentials from non-GitHub Git install specs. GitHub specs are forwarded unchanged, so upgrading does not establish that all plugin URLs are token-safe. The source and regression test prove forwarding, not fresh Bun persistence reproduced here. Other fixes tighten advisor preview redaction boundaries, Anthropic web-search header merging, gateway bearer handling and forwarded-header attribution/logging. No matching published advisory was found in the project, GitHub advisory, and NVD searches described in the crosscheck; that is a bounded negative search, not proof of no vulnerabilities or private reports.

**Operator consequence.** Avoid embedded tokens and inspect existing ~/.omp/plugins/package.json and lockfiles regardless of version; rotate any credentials found. Use SSH or credential helpers for private repositories. For broker/gateway deployments, retain proxy-header trust only for your controlled proxy and use the newest fixed client. Read release notes as well as advisory feeds.

## 14. OAuth account pools became workload controls, then needed a fix for spending excluded accounts reset credits

- **Date:** 2026-10-07 (v18.8.1); 2026-10-11 (v18.9.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Read-only ancestry checks: 6aafbc09 absent v18.8.0/present v18.8.1; e31a0e43 and 6e0be09b absent v18.8.9/present v18.9.0. The first commit's docs and registration were read through GitHub API; reset planners and immediate pre-redemption membership checks were read from local commit diffs. All are in v18.10.4.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/6aafbc0924366f1d146502955913fd13ab1c4910, https://github.com/can1357/oh-my-pi/commit/e31a0e43dbc353af2f54c49604ce34224c969f3f, https://github.com/can1357/oh-my-pi/commit/6e0be09b632c2133c22e9847b3dbfc0373e9f6ee, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/task-agent-discovery.md
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** task.agentAccountPools maps exact named agents and listed providers to allowed OAuth identities. For those providers the child refuses other accounts and API keys; an empty list permits none. Pools choose identities, not providers; model and retry policy still choose providers, and a custom SDK getApiKey resolver bypasses pools. A quota-blocked session could nevertheless redeem a saved reset credit for an account it could not use. v18.9.0 checks pool membership both when planning that restore and immediately before spending it. This is an excluded-account credit-consumption defect, not evidence of task inference under that identity.

**Operator consequence.** Configure workload identity pools deliberately and use v18.9.0 or later for the blocked-reset fix, preferably 18.10.4. Check model/fallback policy separately and audit SDK custom key resolvers. Inspect reset-credit history for excluded identities when earlier versions handled quota recovery.

**Lens.** A named identity pool is durable operating state. Routing restrictions must also govern secondary economic actions; task authentication alone was too narrow.

## 15. Broker clients stopped letting a delayed refresh resurrect logout or replace a newer login

- **Date:** 2026-10-02 (v18.4.11)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 9b54ded2 absent v18.4.10/present v18.4.11 and in v18.10.4. Read remote-store.ts diff and test additions: capture local credential before request, compare after reply, re-read snapshot if changed, throw when the current row was removed.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/9b54ded2389745ffd6ed36e892ceefc8512ab5e7, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/ai/src/auth-broker/remote-store.ts
- **Half:** defect | **Confidence:** high (source read; no runtime reproduction)

**What changed.** A refresh reply used to overwrite newer local knowledge of broker credentials, potentially restoring a removed account to a client's rotation or replacing a newer login. The client now refreshes its snapshot when its copy changed during the outstanding request and keeps current broker state.

**Operator consequence.** Upgrade the broker client, including gateways using that client, to v18.4.11 or later. This closes the inspected refresh-reply race; it is not proof that every delayed credential mutation is guarded.

## 16. Task subagents switched to plain-text results by default, while eval spawns stayed structured

- **Date:** 2026-10-12 (v18.10.2)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 3ad2b788 absent v18.10.1/present v18.10.2 and in v18.10.4. Read task settings, schema suppression and resultParams changes; v18.10.4 setting explicitly says eval agent()/workpool retain structured results.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/3ad2b788d7a078ec79a6962f5c9e690d00bbb268, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/task/settings.ts#L255-L265, https://github.com/can1357/oh-my-pi/releases/tag/v18.10.2
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** task.structured defaults false: the task tool hides outputSchema/schemaMode, removes schema and yield injection from its children, and returns the child's final assistant message as plain text. Enabling the setting restores validated task-result schemas. Eval agent() and workpool() spawns keep structured results independently.

**Operator consequence.** Enable task.structured explicitly for task consumers requiring schema-validated output; do not assume the same default affects eval spawns. Check consumers before upgrading a fleet.

**Lens.** Less forced result scaffolding may help conversational tasks. Machine consumers still need an explicit contract; deleting it is not evidence that validation became unnecessary.

## 17. Web-search selection moved to the web model role and a narrower default fallback chain

- **Date:** 2026-09-29 (v18.4.3)
- **Channel:** `tagged-release`
- **Ancestry evidence:** cbe9bc20 absent v18.4.2/present v18.4.3 and in v18.10.4. Read web-search docs, priority.json and default-chain tests; separate setup picker removal is in the commit. The documentation calls the chain free, but hosted search uses the session's existing credential.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/cbe9bc206d07c4395ff465623e229d279d0dd437, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/tools/web_search.md
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** The setup search picker was removed; modelRoles.web and retry.fallbackChains.web govern selection. The built-in chain favors keyless engines and web/hosted through the session model instead of automatically trying other providers' paid chat models and paid engines. Those other candidates require explicit selection. The project's free-only label does not guarantee that the existing session credential or a configured engine incurs no charge.

**Operator consequence.** Recheck web-role and fallback settings against provider and billing policy after upgrading. Explicitly select paid alternatives when needed rather than counting on the former automatic chain.

## 18. Saved streaming tool output became a 16 MiB head-and-tail sample by default

- **Date:** 2026-10-01 (v18.4.9)
- **Channel:** `tagged-release`
- **Ancestry evidence:** cbf7898c absent v18.4.8/present v18.4.9 and in v18.10.4. Read tools/settings.ts registration and OutputSink diff: ARTIFACT_DEFAULT_MAX_BYTES changes from 0 to 16*1024*1024, preserves beginning and rolling tail, inserts truncation notice. The named setting uses MB units despite MaxBytes in its name.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/cbf7898ce150c8a903db24fabe8f111567a3dc97, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L615, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/tui/src/tools/streaming-output.ts
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** Bash, Python and JavaScript eval artifact files now default to a 16 MiB cap. Larger output retains its beginning and recent tail around a truncation notice; an artifact URL no longer implies the full raw stream is saved. tools.artifactMaxBytes: 0 restores unlimited output.

**Operator consequence.** If saved tool output is an audit log or parser input, inspect truncation notices and set an explicit retention policy. Unlimited output preserves completeness at the cost of storage growth.

**Lens.** Bounded state is sensible for long runs, but a smaller artifact is not a complete log. The operator owns that retention trade.

## 19. Per-model compaction numbers became scaled bases instead of exact triggers

- **Date:** 2026-10-10 (v18.8.8)
- **Channel:** `tagged-release`
- **Ancestry evidence:** a5e542da absent v18.8.7/present v18.8.8 and in v18.10.4. Read changed compaction-threshold code and docs. Latest tagged settings L791-L808 additionally document f-prefixed exact triggers, per-agent exceptions and extended-window pricing implications.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/a5e542daa2e648397957f2c987aa3b3be9cf1309, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L791-L808
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** A numeric compaction.modelThresholds entry now supplies a base the configured policy scales, rather than an exact compaction trigger. At v18.10.4 f400k preserves an exact 400K trigger subject to the model-window cap. Per-agent numeric overrides remain exact. A base above the standard model window can opt into extended context and its pricing even if the scaled trigger lands inside the standard window.

**Operator consequence.** Inspect existing numeric model limits and the /models preview. Use the f form for an exact trigger, and keep bases at or below the standard window or fixed triggers below it when avoiding extended-context rates. Recheck model and agent limits separately.

## 20. Additional task and edit inputs broke compatibility, including complexity and SM headers

- **Date:** 2026-09-24 (v18.3.0); 2026-09-27 (v18.3.4)
- **Channel:** `tagged-release`
- **Ancestry evidence:** f89a6db1 absent v18.2.11/present v18.3.0; 2b4af27b absent v18.3.3/present v18.3.4, both in v18.10.4. Read f89a6db1 settings/changelog diff and GitHub API patch for the task-effort change.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7, https://github.com/can1357/oh-my-pi/releases/tag/v18.3.0, https://github.com/can1357/oh-my-pi/commit/2b4af27b5124359c538f16fccba6c47d8354bc74, https://github.com/can1357/oh-my-pi/releases/tag/v18.3.4
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** v18.3.0 removed irc.timeoutMs and replaced SM-prefixed edit headers with Edit File, Find and Replace headers. v18.3.4 replaced task.complexity with solutionSpace; spawned-subagent auto effort is based on open-endedness alone rather than mechanical volume.

**Operator consequence.** Update custom task/edit callers and saved prompts, remove irc.timeoutMs, and test the changed input contract before a version upgrade. Do not infer compatibility from a patch/minor number.

## 21. 18.10.4 removed OMP Codex Code Mode and corrected cross-model compaction and Devin window defaults

- **Date:** 2026-10-13 (v18.10.4)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 7b2bd46d absent v18.10.3/present v18.10.4; read its GitHub API patch. Release API confirms published_at and the Claude/Devin changes. These facts were early main leads or omitted until the late stable release. Plan-review reopening and tier selection are included once in section 7.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/7b2bd46db7e175abc09b0d37004bf5dc8ccd0962, https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** OMP removed Codex Code Mode and providers.openai-codex.codeMode/codeModeDirectTools; Codex models now use the full direct tool surface in this harness. The release also fixes Claude refusing a session snapcompacted under another reasoning model by reading a reasoning-free archive variant. OMP's Devin catalog now defaults affected long-context-priced models to their 272K or 200K threshold, with larger windows requiring extended context. These are OMP integration and catalog changes, not claims independently verified about provider products.

**Operator consequence.** Remove the obsolete OMP Code Mode settings and recheck direct-tool policy. Use v18.10.4 for the stated cross-model session fix. Decide whether to enable extended context on affected Devin entries rather than assuming the old larger window.

**Lens.** A special tool-partition layer was deleted, but no performance evidence establishes that model improvement made it unnecessary. Provider-specific transcript and pricing adaptation still earns its place.

## 22. After stable, main kept the composer open during approval and denied waiting calls when steered

- **Date:** 2026-10-13T22:39:57Z (merged; after v18.10.4)
- **Channel:** `main-unreleased`
- **Ancestry evidence:** b91db66e is not an ancestor of v18.10.4; no fetched tag contains it. Read-only rev-list gives 13 commits beyond v18.10.4, behind 0. GitHub PR #15642 confirms merge time. Commit docs/changelog patch was read through the API.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c, https://github.com/can1357/oh-my-pi/pull/15642, https://github.com/can1357/oh-my-pi/blob/b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c/docs/approval-mode.md#L102-L105
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** On the reconstructed complete-date main pin, the composer stays usable while approvals wait. Sending a steering message denies every pending approval and later approvals from the same batch before delivery, then tells the agent why. The patch changes compact details again and removes the newly introduced ApprovalDetailsOptions API. This is not in v18.10.4.

**Operator consequence.** Keep stable approval behavior distinct. Main users and extension authors must handle the new denial/steering flow and removed details API; stable users should wait for a tagged release proving availability. Do not borrow 14 October changes for this window.

**Lens.** Steering can turn a denied call into useful direction without an extra human exchange. That gain remains unreleased at this posture date.

## 23. Session handoff became explicit, but credential export writes live secrets as plain JSON

- **Date:** 2026-10-12 (v18.10.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 3df76b1c absent v18.9.2/present v18.10.0 and in v18.10.4. Read session commands and auth.ts L202-L225: remote-broker refusal, OAuth rotation warning and JSON.stringify to stdout. Session command examples pack artifacts/images and mark moved copies stale so resume forks.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/3df76b1c6f1a92c9f64196701321be26045f329d, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/commands/session.ts#L1-L8, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/commands/session.ts#L66-L69, https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/commands/auth.ts#L202-L225
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** omp session pack/unpack transfers a session with artifacts and image blobs; moved marks the source copy so resuming it forks. Missing blobs are warned about rather than invented. omp auth export/import transfers stored sign-ins separately. Export writes plain JSON to stdout, including OAuth refresh tokens, refuses remote-broker configuration, and warns that refresh-token rotation on the destination may sign out the source machine.

**Operator consequence.** Treat auth output as live credentials. Use a protected transfer path, not an ordinary transcript or an assumed encrypted backup. Mark the session source moved after a deliberate handoff, and account for possible source sign-out.

**Lens.** Portable work state is a durable primitive. Session archives and identity delegation are different objects and require different handling.

## 24. Mounted device docs moved out of the system prompt by default

- **Date:** 2026-09-24 (v18.3.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** f89a6db1 absent v18.2.11/present v18.3.0 and in v18.10.4. Read settings-schema diff and latest settings table: tools.xdevDocs changes builtins to catalog. The commit changelog labels this bash.autoBackground.strategy incorrectly, so the setting registration controls the claim.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7, https://github.com/can1357/oh-my-pi/blob/v18.2.11/packages/coding-agent/src/config/settings-schema.ts#L4783-L4786, https://github.com/can1357/oh-my-pi/blob/v18.3.0/packages/coding-agent/src/config/settings-schema.ts#L4767-L4770, https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L617-L618
- **Half:** both | **Confidence:** high (source read; no runtime reproduction)

**What changed.** tools.xdevDocs now defaults to catalog, listing mounted devices while their docs are fetched on demand rather than inlining built-in device instructions. Integrations that depend on those instructions already being present no longer receive that default.

**Operator consequence.** Set tools.xdevDocs explicitly to builtins or inline if the integration requires preloaded docs. Inspect the actual schema rather than relying on the mislabeled changelog sentence.

**Lens.** Discovery plus on-demand reading reduces handcrafted prompt inventories. No measurement here establishes saved tokens or better outcomes.

## 25. The local scratch fallback now rejects dot session IDs without proving a general session-store traversal

- **Date:** 2026-10-06 (v18.7.0)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 3751293a absent v18.6.3/present v18.7.0 and in v18.10.4. Read safeSessionId diff and test: with no artifacts directory, both dot and dot-dot map to tmp/omp-local/session.
- **Receipt:** https://github.com/can1357/oh-my-pi/commit/3751293a941cef28aa8c67fc0809e3109874eeda
- **Half:** defect | **Confidence:** high (source read; no runtime reproduction)

**What changed.** The local:// temporary fallback-root sanitizer now rejects session IDs . and .. instead of allowing a path component to resolve outside that fallback session root. The inspected test supplies no artifacts directory. This supports a fallback-root containment fix, not remote exploitability or traversal of every persisted session directory.

**Operator consequence.** Use v18.7.0 or later for this inspected local-root fix. Keep assessments confined to that path unless caller-control and persisted-session evidence establishes a wider exposure.

## Prior claims re-checked

These checks are source-level renewal, not runtime re-testing of old aggregate findings.

- repo-writes-policy holds at v18.10.4 (section 5). New extension context, plan-review and settings authority widen the operating decision (sections 1, 6, 7).
- approval-bypasses-18-2-1: the missing-context fail-closed resolver remains at https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/tools/approval.ts#L58-L84. hub is removed; advisor/Cursor members were not independently renewed as a cluster. Retire the aggregate from the current body rather than declaring it all freshly tested. Later specific fixes supersede the old install floor.
- collab-view-link-could-steer: source fix remains, with room recreation clearing permissions at https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/collab/host.ts#L1046-L1068. Full-link guests already could answer host tool prompts before this window and gained cfg prompts in v18.6.1. autoStart remains off; relay retention remains a closed-service statement at https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/collab.md#L127-L174.
- eval-orchestration-ungated-by-patterns and bash-patterns-do-not-gate-eval hold in the latest approval docs (section 4). Computer support is still disabled by default and is not a general JavaScript sandbox.
- tags-without-releases and install-paths-agree-18-2-8 are superseded by section 8. The old starts-only binary check is superseded by section 2.
- stored-state-fixes-18-2-1: Hindsight rebinding and invalid/unreadable config handling remain at https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/hindsight/backend.ts#L219-L249 and https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/config/settings.ts#L2332-L2363; the move lifecycle awaits rebinding. The dotenv member was not independently renewed. Retire the aggregate from the current body rather than treating ancestry as complete new verification.
- blind-approval-fixed-twice: the preview wait remains at https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/wrapper.ts#L351-L354. The current body uses the new approval dialog instead (section 7); retain the old claim as retired history if it no longer carries a decision.
- Rust rewrite: omp2 still points to 2f92f3b5aa2035d21c9f016f9ff6350795e5685a from 4 September, shares no ancestor with v18.10.4 and is contained in no tag. This is unchanged channel evidence, not a new shipped capability: https://github.com/can1357/oh-my-pi/commit/2f92f3b5aa2035d21c9f016f9ff6350795e5685a.
- The old Pi 0.8x version comparison is stale: use OMP 18.10.4 / Pi 1.2.0 and the narrow compatibility claims in section 9. No current Pi-side trust comparison was independently established.

## Carry-forward answers

No project-trust gate or general eval pattern barrier was found at v18.10.4. Release-less tags recurred and npm-only 18.2.9 supplies the inverse case. Plan-review delegation and the Ctrl+Enter dialog are shipped, so waiting for their first release is no longer appropriate. The later composer-steering patch remains main-only. No tagged omp2 build or independent production-relay retention evidence was found. The original 1,093 merged-PR count was a 09:31Z observation, not recomputed for the whole date; it is omitted from the complete-date volume claim.

## Leads not promoted

- No OMP writing-lane item was identified in the original 161-item scan; Pi 1.0/Pi Durable discussion belongs to pi-coding-agent. The X lane was unavailable, so no social statement supplies a product claim here.
- Moving omp.sh docs were consistent with repo approval defaults but cannot prove historical behavior. Tagged files carry the current facts.
- archive browsing from eval and task.speculativeLaunch remain unused capability leads, rather than added profile claims. No outcome or throughput measurement was made.
- ACP destructive intent gate: the inspected acp-permission-gate.ts is byte-identical at v18.2.8 and v18.10.4. The changed doc sentence is clarification, not an in-window first fix: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/acp-permission-gate.ts#L6-L98.
- computer.run read_only was already handled at the baseline; the new wording does not establish a new general sandbox.
- The prior claim that dot session IDs escape every persisted session directory was too broad; the independently checked fallback-root fix is now section 25.
- Account identities, star counts and PR trial status do not establish code-review quality. No complete-date merge count or measured review effectiveness was obtained.

## Surfaces checked

Original researcher: repository identity, release bodies and assets, tags and ancestry, npm publication map, all installer channels, Homebrew formulas, Nix source, versioned docs and code, project advisory API, relevant PRs, original writing feeds. Its early snapshot was 2026-10-13T09:31Z.

Adversarial crosscheck on 14 October: every release row, late v18.10.4 release and registry metadata, four Homebrew checksum comparisons, build-service JSON channels, reconstructed complete-date main pin, each original numbered claim, previous-claim spot checks, omitted source changes, GitHub/project advisory APIs for the coding-agent/pi-ai/pi-agent-core packages and NVD keyword searches. No matching published advisory was found; no exhaustive dependency audit is implied.

Write-up author: re-opened v18.10.4 release via web and GitHub API; checked all new miss ancestry using read-only git with lazy fetching disabled; read available local diffs and tagged files; used read-only GitHub commit API patches for missing blobs; verified #15642 merge time; rechecked 5,925 stable commits and 13 main-only commits. New task-result qualification: eval agent()/workpool remain structured, stated by the tagged registration. No cloned code was executed and no git write command was used.

## Not reached

No local installation or live execution, cfg-grant demonstration, exploit reproduction, binary download, package install or upstream tests. No independent retention audit of the production relay or build service; no proof of a briefly existing deleted 18.2.9 release; no complete renewal of old advisor/Cursor/dotenv clusters; no general Pi 1.x compatibility test; no model/product benchmarking. Code supports the narrow mechanisms and defaults above, not measured end-to-end speed or a generally safe release.

## Crosscheck applied

Applied all seven numbered CORRECTED verdicts and the complete-date install/ledger correction. The six VERIFIED items retain their facts with stated qualifiers. There were zero REFUTED or UNVERIFIABLE numbered items to delete or move. Sections 14 through 24 add all eleven verified material misses after primary receipt checks; the late-release miss's plan API is housed in corrected section 7 and its remaining integration changes in section 21. Section 25 promotes the narrowed local scratch-root lead. ACP remains a clarification lead. Removed blanket fail-closed, blanket Pi 1.x compatibility, universal plugin-token safety, universal advisory absence and an implied safe-version floor. Findings are generated only from these 25 sequential numbered sections.
