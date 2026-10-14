# OMP adversarial cross-check

- Source: omp, can1357/oh-my-pi, package @oh-my-pi/pi-coding-agent.
- Run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0.
- Window: 2026-09-21 through 2026-10-13, excluding facts already recorded in the parent window.
- Independent verification: 2026-10-14 UTC.
- Install today correct: **false for the complete 2026-10-13 date**. The harvest explicitly stopped at 09:31Z; a later release falls inside the requested inclusive window.
- Numbered-section verdicts: **6 VERIFIED, 7 CORRECTED, 0 REFUTED, 0 UNVERIFIABLE**. These counts cover sections 1 through 13 only. Install/channel, prior-claim spot checks, omissions, and limitations are reported separately.

The harvest is not ready to supply a profile unchanged. Its principal trust and approval findings survive inspection. Its newest release is stale, its main-only changes shipped later that day, and its plugin-token fix omits a shipped GitHub exception. The unqualified claim that model restoration now fails closed also needs the interactive fallback exception.

I read AGENTS.md, THESIS.md, METHOD.md, EDITORIAL.md, CONTRIBUTING.md, the researcher brief, sources/omp.yml and omp.notes.md, the current profile, the parent harvest, and the assigned harvest. I independently cloned upstream with blob filtering and no checkout into tmp/refresh-2026-10-13/clones/omp-verify. All upstream code was treated as data. No cloned code, installer, binary, tests, or site build was executed.

## Install today and release ledger: CORRECTED

The correct stable release for the end of 2026-10-13 is [v18.10.4](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4), published **2026-10-13T19:38:04Z**, prerelease=false, at commit **687892d1046ecaf18829b45f5b86928a308258f4**. Independent gh release list and the release API returned no later stable or prerelease. The [tagged package metadata](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/package.json) agrees.

Independent npm view time and dist-tags returned [@oh-my-pi/pi-coding-agent 18.10.4](https://www.npmjs.com/package/@oh-my-pi/pi-coding-agent/v/18.10.4), published **2026-10-13T19:54:08.077Z**, and the sole dist-tag latest=18.10.4. Registry observations were made on October 14; npm metadata's modified timestamp is 2026-10-13T19:54:08.432Z. Do not describe the researcher's earlier latest=18.10.3 observation as fabricated; extend its cutoff.

The other channels now agree on the version, subject to the source-build distinction:

- [Homebrew formula 22d4f9b973c504af44c1c54907dcc8c5c6729caf](https://github.com/can1357/homebrew-tap/blob/22d4f9b973c504af44c1c54907dcc8c5c6729caf/Formula/omp.rb), committed 2026-10-13T19:40:29Z, declares 18.10.4 and build.stencil.so binary URLs. All four formula hashes match the corresponding entries in [v18.10.4 SHA256SUMS.txt](https://github.com/can1357/oh-my-pi/releases/download/v18.10.4/SHA256SUMS.txt). I compared metadata and checksums; I did not download or run the binaries.
- The [build service stable response](https://build.stencil.so/api/products/omp/latest/macos-arm64?channel=stable) returned build 20261013-193832-687892d, version 18.10.4, the tag SHA above, and published_at=2026-10-13T19:40:08Z. macos-arm64 SHA-256 was 7459333760ef0e265d5d40445ea459da3d18a10ef3ec4958302e1977b52c8a2b, matching Homebrew and GitHub. Canary returned that same stable build; beta, nightly, and preview returned HTTP 400, invalid channel. These are dated service observations, not immutable historical receipts.
- The install URL still redirects to moving main. Its fetched SHA-256, cd2ea5553e9ad8f89fe5e04f771ec13db6f33a773f7ba8f85c84b63cdbeb9065, equals [scripts/install.sh at v18.10.4](https://github.com/can1357/oh-my-pi/blob/v18.10.4/scripts/install.sh), unchanged from v18.10.3. Its matching-Bun path selects the registry package; its binary path uses the build service and verifies SHA-256. A plain Python HTTP user agent initially received Cloudflare 403; the documented omp user agent returned the JSON and installer successfully.
- Pin Nix to github:can1357/oh-my-pi/v18.10.4. [nix/package.nix](https://github.com/can1357/oh-my-pi/blob/v18.10.4/nix/package.nix#L114-L117) takes the source package version. A bare flake follows main and is not the stable tag even when its label matches.

Every one of the harvest's **44 existing GitHub-release rows**, including the baseline v18.2.8, passed independent comparison of published_at, prerelease flag, forward and reverse commit counts, and npm publication time to the recorded second. Add this row:

| Tag | Published UTC | Prerelease | Ahead/behind previous stable | npm publication UTC |
| --- | --- | --- | --- | --- |
| v18.10.4 | 2026-10-13T19:38:04Z | false | 105/0 against v18.10.3 | 2026-10-13T19:54:08.077Z |

The full window therefore has **44 releases after v18.2.8**, not 43, and **5,925 commits** from v18.2.8 to v18.10.4, not 5,820. The earlier counts were accurate for v18.10.3. [Release compare](https://github.com/can1357/oh-my-pi/compare/v18.10.3...v18.10.4).

The anomalous channel rows hold: 18.2.9 exists in npm and the [dated tap formula](https://github.com/can1357/homebrew-tap/blob/a0f144b0d1cd75fa9429281279aa665d73a15498/Formula/omp.rb), but no current Git tag or release object exists. v18.4.7 and v18.6.2 exist as tags but have neither release objects nor npm versions. I independently checked the local refs, release endpoints, and registry time map. This does not establish whether a subsequently deleted 18.2.9 release existed briefly.

The complete-date main pin also changes. [b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c](https://github.com/can1357/oh-my-pi/commit/b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c), merged 2026-10-13T22:39:57Z, is 13 commits ahead of v18.10.4, behind=0. This pin is reconstructed from current first-parent history and the PR merge timestamp. Today's fetched main, f5145fd0271906cdf3bca6a218912fa1d8db3500, is 78 ahead of v18.10.4 and includes October 14 work; do not backdate those later changes. The harvest's 818dd42b pin was correctly 42 ahead of v18.10.3.

## Ancestry method

For each row below I ran git merge-base --is-ancestor against the previous stable or intervening tag and the stated first release. Every listed earlier-tag check returned 1; every first-release check returned 0. All shipped commits below also returned 0 against v18.10.4. Full SHA receipts appear in the section text where needed.

| Section | Commit prefixes independently checked | Absent from | Present in |
| --- | --- | --- | --- |
| 1 | 13226ae7, 0ccfbdc4 | v18.3.0 | v18.3.1 |
| 1 | 548ccb3e | v18.6.0 | v18.6.1 |
| 2 | 4585b144 | v18.8.9 | v18.9.0 |
| 3 | de256ead | v18.4.0 | v18.4.1 |
| 3 | 8aaf115b, dae48481 | v18.6.2 | v18.6.3 |
| 3 | 8deae638 | v18.8.3 | v18.8.4 |
| 4 | 876af508 | v18.4.0 | v18.4.1 |
| 4 | 30f0e680, 231fb4f9 | v18.4.2 | v18.4.3 |
| 5 | a5a5f1d1 | v18.6.3 | v18.7.0 |
| 6 | 45cef58d | v18.3.0 | v18.3.1 |
| 6 | 844fdbf8, 7bcf6ac1 | v18.4.3 | v18.4.4 |
| 7 | 7738a3f0, ce9d35ec, e95a113e, 818dd42b, 7b2bd46d, d40b86cf | v18.10.3 | v18.10.4 |
| 8 | 4d528596 | v18.2.8 | v18.2.10 |
| 9 | 5ee7b69c | v18.3.4 | v18.3.5 |
| 9 | 597c8d17 | v18.8.9 | v18.9.0 |
| 10 | f89a6db1 | v18.2.11 | v18.3.0 |
| 10 | 31876ff5 | v18.8.1 | v18.8.2 |
| 11 | 134bcf29 | v18.3.0 | v18.3.1 |
| 11 | a608a9ca | v18.9.2 | v18.10.0 |
| 12 | bb863d99 | v18.2.8 | v18.2.10 |
| 12 | 0c8a3a0a | v18.8.5 | v18.8.6 |
| 12 | 098abb90 | v18.8.6 | v18.8.7 |
| 13 | 9532eb39 | v18.4.4 | v18.4.5 |
| 13 | ba9b31b9 | v18.8.3 | v18.8.4 |
| 13 | 4b6b3edb | v18.8.4 | v18.8.5 |
| 13 | 1f63a9b6, c1791690, 1d56352d, 2c3458ed | v18.8.9 | v18.9.0 |

Release dates above and below come from GitHub published_at, not author dates. Some commits were authored well before their release or PR merge, notably the plugin change 1f63a9b6. The September 12 commit date does not invalidate its October 11 first release.

## 1. Agent-controlled settings: CORRECTED

The mechanism holds at v18.10.4. I opened all five section receipts, read the cfg handler and test at v18.10.3 and v18.10.4, and read the TUI selector and collab write-permission paths. The [grant check](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L120-L148) checks session identity and persistence kind, not the setting key. The [test](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/test/internal-urls/cfg-protocol.test.ts#L108-L135) explicitly changes a second key without another prompt and separately tests the save boundary. Writer restrictions remain at lines 305-318. The [collab change](https://github.com/can1357/oh-my-pi/commit/548ccb3e9edbeed9e0c543aff98a1fcb28d803c3) first shipped in v18.6.1 on 2026-10-04; cfg itself first shipped in v18.3.1 on 2026-09-25.

Exact correction: replace "Each write raises its own prompt regardless of approval mode" with "An effective change requires cfg approval unless an existing session grant covers it; yolo alone does not supply that grant. A session-only grant covers later session-only changes across keys, but the first /save still asks. A grant on a /save prompt covers subsequent saves as well." No-op writes return unchanged without asking, and environment-shadowed session writes are refused before prompting. These branches are in [write()](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/internal-urls/cfg-protocol.ts#L399-L461).

The recommendation to use Allow once and to treat writable collab links as settings authority remains supported. This is source verification, not a live exploit reproduction.

## 2. Binary distribution and hash checking: VERIFIED

The historical transition is correct: release publication to the new host was noted in v18.8.7 on 2026-10-09; [4585b144](https://github.com/can1357/oh-my-pi/commit/4585b144ff86b9d3dd6d9d17263cbd541a4ba8aa) first shipped in v18.9.0 on 2026-10-11. I read the commit, tagged installer, [build-service client](https://github.com/can1357/oh-my-pi/blob/v18.10.3/packages/coding-agent/src/cli/build-service.ts#L1-L27), pinned 18.10.3 tap formula, release metadata, and checksum asset. The four historical formula hashes match the 18.10.3 GitHub checksum file.

The code supports hash verification, build-service delta downloads, the PI_BUILD_URL override, version-bearing User-Agent, startup.checkUpdate=true, and update.channel=stable with canary available. The hash is supplied by the same service as the binary, so the harvest's corruption-versus-service-compromise distinction is sound. Advance example pins and observed channel responses to 18.10.4 as specified above.

## 3. Provider exclusions and restored models: CORRECTED

The disabled-provider defects and first fixed releases are supported. I read both linked PRs, their merge metadata, release notes, and the pinned settings receipt, then the code changes and latest model registry. [de256ead](https://github.com/can1357/oh-my-pi/commit/de256ead9f8286bed702833e330e3debdcbae25d) adds checks to literal model lookup and credential lookup; these remain in [v18.10.4 model-registry.ts](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/config/model-registry.ts#L3168-L3180). Routing and usage fixes are separately pinned at [dae48481](https://github.com/can1357/oh-my-pi/commit/dae484818f88254cc72a73c7bde082adcdf7eee5) and [8deae638](https://github.com/can1357/oh-my-pi/commit/8deae638069c88a8af2ed3b0dce06f12ae0387cb).

Exact correction: qualify "All of these now fail closed." Headless startup and session switching fail if no saved model can be restored and no explicit model override is supplied. Interactive TUI sessions still warn and switch when fallback is permitted and retry.modelFallback is on. The exception is explicit in [8aaf115b](https://github.com/can1357/oh-my-pi/commit/8aaf115b8e5f54e6bddeffa969e43e290a1efa01), [SDK options](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/sdk.ts#L854-L864), and [runtime restore](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/agent-session.ts#L11541-L11550).

First releases remain v18.4.1 on 2026-09-28, v18.6.3 on 2026-10-06, and v18.8.4 on 2026-10-08 for the respective fixes. The project-array override is real; it is not a provider allowlist enforced outside project configuration.

## 4. Invalid approval flags and AST guards: VERIFIED

I read the v18.4.2 flag handler, both PRs, the tagged TTSR coordinator, lifecycle documentation, and the [AST fix diff](https://github.com/can1357/oh-my-pi/commit/876af5084f1bdfc11410c2ad4426a0e5cab0ac20). The old handler only logged invalid approval modes. [30f0e680](https://github.com/can1357/oh-my-pi/commit/30f0e6806f02f41a83839664769ef36d4e1326ef) and [231fb4f9](https://github.com/can1357/oh-my-pi/commit/231fb4f9ebfab0d80604743ced743cb9408e1edf) support rejection before ordinary or ACP operation in v18.4.3, released 2026-09-29.

The AST fix first shipped in v18.4.1, 2026-09-28. The evidence supports a deterministic late check on chat-completions end-of-stream paths and timing-dependent behavior on other transports; preserve that distinction. At v18.10.4, [afterBridgedToolCall](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/ttsr-coordinator.ts#L294-L306) still receives a completed result and adds guidance. It is not a pre-execution AST barrier for eval-bridged calls.

## 5. Project trust remains unconditional: VERIFIED

I opened every receipt and checked [README trust guidance](https://github.com/can1357/oh-my-pi/blob/v18.10.4/README.md#L593-L602), extension types, the live context construction, settings precedence, and schema defaults at v18.10.4. [runner.ts](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/runner.ts#L1401-L1404) still returns true for isProjectTrusted; tools.approvalMode still defaults to yolo. The README change [a5a5f1d1](https://github.com/can1357/oh-my-pi/commit/a5a5f1d128fac3bbb558696b62f1c1cc5d5aa9f7) first shipped in v18.7.0 on 2026-10-06.

The narrowing controls are not a trust gate. Preserve the README's nested YAML requirement for mcp.enableProjectConfig; a literal flat dotted key is ignored. Do not turn the README's description of current design into a prediction that maintainers will never add a gate.

## 6. Extension context and reply rewriting: VERIFIED

I opened the two tagged documentation receipts, both PRs, and the v18.3.1 release record. [45cef58d](https://github.com/can1357/oh-my-pi/commit/45cef58d859f0e9c720f996a6aebe7b3116056c4) first shipped on 2026-09-25; [844fdbf8](https://github.com/can1357/oh-my-pi/commit/844fdbf8dfee9234215b824d800214cef65eb089) and [7bcf6ac1](https://github.com/can1357/oh-my-pi/commit/7bcf6ac11106cb33a28ed008e5f8b06d820f300f) first shipped on 2026-09-29 in v18.4.4.

The [tagged API contract](https://github.com/can1357/oh-my-pi/blob/v18.10.3/docs/extensions.md#L632-L641) supports developer/system priority where the transport supports it. Keep that qualifier. Pre-tool additionalContext is delivered only for a successful executed call; post-tool additionalContext can also carry failure guidance. The [assistant_message contract](https://github.com/can1357/oh-my-pi/blob/v18.10.3/docs/extensions.md#L487) allows text replacement in existing block positions, not arbitrary replacement of non-text blocks or retraction of already streamed text.

The post-rewrite approval check is present in [v18.10.4 wrapper.ts](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/wrapper.ts#L243-L325). The same recheck already exists at v18.2.8. Treat the new documentation sentence as clarification, not a new in-window defense.

## 7. Plan review and approval dialog: CORRECTED

The implementation claims were correct at the researcher's early snapshot, but the channel is now wrong for the complete date. Every stated main-only commit is an ancestor of v18.10.4. Replace main-unreleased with **tagged-release, v18.10.4, 2026-10-13**, and remove "Neither is in a release" and the corresponding wait-for-a-release recommendation. [Release](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4).

I read the PRs, pinned 818dd42b documentation, compare history, and latest tagged docs. [Plan review](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/extensions.md#L555-L561) also gained a later in-window addition, [d40b86cf](https://github.com/can1357/oh-my-pi/commit/d40b86cf7d6607fc349545ec67ed321023e53425): extensions can reopen a dismissed idle review and choose an execution tier with input.role. The original review-answer API alone does not describe all that shipped.

The [v18.10.4 approval documentation](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L96-L105) confirms Ctrl+Enter/Ctrl+Q, inert Enter, the half-second key guard, and compact versus full details. The follow-up timeout implementation is present. A further October 13 main-only redesign is recorded under misses below.

## 8. Release volume and divergent channels: CORRECTED

The anomalies and 43-release count are correct through v18.10.3; the complete-date total is 44 releases, 5,925 commits, and main 13 ahead of v18.10.4 at the reconstructed in-window pin. Use the corrected ledger above. The [npm-only 18.2.9 record](https://www.npmjs.com/package/@oh-my-pi/pi-coding-agent/v/18.2.9), pinned Homebrew formula, [v18.4.7 tree](https://github.com/can1357/oh-my-pi/tree/v18.4.7), [v18.6.2 tree](https://github.com/can1357/oh-my-pi/tree/v18.6.2), and Nix receipt were independently opened.

Keep the qualification that present-day 404s cannot prove Homebrew was broken throughout the historical five-hour interval. The site changelog again returned 404 during verification. Do not re-use the early snapshot's 1,093 merged-PR count as a complete October 13 count without recomputing it; it is not needed for the operator decision.

## 9. Pi ports and cache warming: CORRECTED

The OMP changes hold: [5ee7b69c](https://github.com/can1357/oh-my-pi/commit/5ee7b69ceba873b9566307485ddd8704a4d1b28e) first shipped in v18.3.5 on 2026-09-27, and [597c8d17](https://github.com/can1357/oh-my-pi/commit/597c8d17b54e1e30120f917f24bf0d2688be5821) in v18.9.0 on 2026-10-11. I read both PRs, the tagged session setting, extension-loader contract, and compatibility source. [providers.cacheWarming](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/settings.ts#L1137-L1141) still defaults to idle.

Exact corrections: update the version pair to **OMP 18.10.4 / Pi 1.2.0**. Independent npm time confirms Pi 1.0.0 on 2026-10-01T19:15:22.967Z and 1.2.0 on 2026-10-12T23:03:25.459Z. Its current dist-tags also include legacy-node20=0.74.2; that is Pi's channel, not OMP's.

Narrow "so that Pi 1.x extensions load under OMP" to "to fill three named compatibility gaps observed with pi-optchat." Neither one successful plugin nor added exports establishes blanket Pi 1.x compatibility. The [compatibility source](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/legacy-pi-transcript.ts#L1-L19) describes ported logic with structural type adaptations. Attribute "verbatim" to that source; do not claim independently established identity of the complete upstream and OMP files.

## 10. Tool removal and subagent model selectors: VERIFIED

I read all four listed receipts, compared tool registries at v18.2.11 and v18.3.0, and checked the removal commits. [f89a6db1](https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7) removes hub registration and documentation in v18.3.0 on 2026-09-24; "deprecated" understates the code change.

The [v18.5.0 release](https://github.com/can1357/oh-my-pi/releases/tag/v18.5.0), 2026-10-03, adds per-call selectors. [31876ff5](https://github.com/can1357/oh-my-pi/commit/31876ff53eeb81b1624fabdbf1306d31e30f34af) removes them in v18.8.2 on 2026-10-07. Latest [write restrictions](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/tools/write.ts#L788-L804) and [policyKey precedence](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L49) support the device and coordination caveats. Other material schema/default changes omitted from this section are listed below.

## 11. IDA and local IPC: CORRECTED

The capability, exposure default, approval tiers, and release dates hold. I opened the tagged IDA docs and setting plus both release receipts. [134bcf29](https://github.com/can1357/oh-my-pi/commit/134bcf29595d491fce6c79ec97c737b8a591dc85) first shipped in v18.3.1 on 2026-09-25. [a608a9ca](https://github.com/can1357/oh-my-pi/commit/a608a9ca07c9443634e80d877d61c602099dab91) first shipped in v18.10.0 on 2026-10-12. The native [Windows pipe implementation](https://github.com/can1357/oh-my-pi/blob/v18.10.4/crates/pi-natives/src/ipc/windows.rs#L152-L188) installs a current-user DACL and rejects remote clients.

Exact operator correction: **upgrade Windows hosts and close older OMP sessions**. The [v18.10.0 release](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.0) explicitly says old Windows daemons are not reused and older sessions should be closed. Installing a new binary does not retrofit an already running older daemon. No earlier exploit or cross-user exposure was established by these receipts; do not imply one.

## 12. Multiple sessions and worktree controls: VERIFIED

I read all four listed receipts and checked the defaults again at v18.10.4. [0c8a3a0a](https://github.com/can1357/oh-my-pi/commit/0c8a3a0a30eed995aa27893327fd9b450eb9a6ba) first shipped worktree lifecycle controls in v18.8.6 on 2026-10-08. [098abb90](https://github.com/can1357/oh-my-pi/commit/098abb906b5b70c244b0a45c00d646e9bf2cf997) first shipped gitGuard in v18.8.7 on 2026-10-09. The collab busy commit first shipped in v18.2.10 on 2026-09-22.

worktree.onStart=off, worktree.onExit=keep, bash.gitGuard=false, and terminal.programStatus=true are supported by tagged setting registrations. The [gitGuard documentation](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L679) excludes pty, services, path-invoked git, and other programs, and includes a conflict-resolution exception. It is an embedded-shell guard, not checkout-wide confinement.

## 13. Credential-handling fixes: CORRECTED

The claimed universal plugin-token fix is false. The original [1f63a9b6](https://github.com/can1357/oh-my-pi/commit/1f63a9b6bff918e1132af8e61c8aa93938d3bc1a) did strip tokens broadly. Before its first release, [c1791690](https://github.com/can1357/oh-my-pi/commit/c17916900b66c48fe818750f0d2000152ec0bf14) restored unchanged forwarding for github.com URLs, including inline credentials. Both commits are in v18.9.0.

At the newest stable, [gitInstallSpec](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/plugins/manager.ts#L77-L96) returns the original string immediately for github.com. The [regression test](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/test/plugin-install-git.test.ts#L401-L447) deliberately expects a credential-bearing GitHub URL to reach Bun unchanged. The [tagged documentation](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/plugin-manager-installer-plumbing.md#L82-L84) states the exception too.

Exact replacement: "v18.9.0 strips inline credentials from non-GitHub Git install specs. GitHub specs are forwarded unchanged, so upgrading does not establish that all plugin URLs are token-safe. Avoid embedded tokens and inspect existing plugin metadata and lockfiles regardless of version." This review establishes forwarding from source, not actual Bun persistence in a fresh runtime reproduction. The PR body and release summary cannot override the shipped exception.

The other fixes are supported: advisor preview boundaries at [1d56352d](https://github.com/can1357/oh-my-pi/commit/1d56352d20d8cabbb0ce739b4bc764de9efc1a82) and [2c3458ed](https://github.com/can1357/oh-my-pi/commit/2c3458ed2868835db5766b10b2836f4c32f989e2), Anthropic header merging at [4b6b3edb](https://github.com/can1357/oh-my-pi/commit/4b6b3edbe19aaad4e376f9d82b660d030a868fca), gateway bearer confinement at [9532eb39](https://github.com/can1357/oh-my-pi/commit/9532eb39ca916cdfac3be58eb66427331343a4c7), and broker logging at [ba9b31b9](https://github.com/can1357/oh-my-pi/commit/ba9b31b9ba42d7fdd3456b0a5d6758587ef84fff). First-release dates are 2026-10-11, 2026-10-08, 2026-09-30, and 2026-10-08 respectively.

Replace "None received a GHSA or CVE" with the bounded result: "No matching published advisory was found in the project, GitHub advisory, and NVD searches described below." That search result is not proof that every vulnerability or private report is known.

## Prior claims re-checked at v18.10.4

These are source-level spot checks, not a claim that an old release's entire fix set was re-tested.

- **repo-writes-policy: holds.** Latest README, extension context, approval registry, and settings precedence were re-read. [Trust context](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/runner.ts#L1401-L1404), [yolo default](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/tools/settings.ts#L311-L315), [precedence](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L166).
- **approval-bypasses-18-2-1: the missing-context defense holds.** I checked 75512322 ancestry and the current [resolver](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/tools/approval.ts#L58-L84), which returns always-ask with no user grants when settings and autoApprove are absent. hub is now removed. The historical advisor/Cursor claims were not all independently re-exercised; do not turn this spot check into a blanket current security guarantee.
- **collab-view-link-could-steer: the fix holds in source.** I checked 156093b9 ancestry, [room recreation clearing the permission map](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/collab/host.ts#L1046-L1068), and current canWrite checks on UI replies and mutations. [Writable guests can answer host prompts](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/collab.md#L129-L146); autoStart is still off. Relay retention remains an unverified statement about a closed service.
- **eval-orchestration-ungated-by-patterns and bash-patterns-do-not-gate-eval: hold.** The latest [approval documentation](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/approval-mode.md#L75-L90) retains the distinction between bash pattern checks and eval's ambient execution. The computer API remains disabled by default; neither that setting nor read_only is a general JavaScript sandbox.
- **tags-without-releases and install-paths-agree-18-2-8: superseded.** Use the corrected 18.10.4 channel record, the two tag-only versions, npm-only 18.2.9, and the Nix pin distinction above.
- **stored-state-fixes-18-2-1: Hindsight and malformed-config paths hold in source.** [Memory rebinding](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/hindsight/backend.ts#L219-L249) waits for rebuilds and propagates failures; [the move lifecycle awaits it](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/slash-commands/builtin-lifecycle.ts#L848-L850). [Invalid/unreadable YAML handling](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/config/settings.ts#L2332-L2363) quarantines invalid files or refuses overwrite, and throws on unreadable files. I did not independently renew the dotenv member of this aggregate claim. "Holds by ancestry" alone is not a sufficient new verification for the entire cluster.
- **blind-approval-fixed-twice: the preview wait holds in source.** [wrapper.ts](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/extensibility/extensions/wrapper.ts#L351-L354) still awaits the preview; [event-controller.ts](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/modes/controllers/event-controller.ts#L529-L538) waits for preview settlement. The new stable approval dialog is a separate shipped change, not a future watch item.
- **Rust rewrite does not ship: holds.** origin/omp2 remains 2f92f3b5aa2035d21c9f016f9ff6350795e5685a, dated 2026-09-04; merge-base with v18.10.4 returned no ancestor, and tag --contains returned no tags. [Branch-tip commit](https://github.com/can1357/oh-my-pi/commit/2f92f3b5aa2035d21c9f016f9ff6350795e5685a). [MIT license](https://github.com/can1357/oh-my-pi/blob/v18.10.4/LICENSE) is unchanged from v18.2.8.

The old "floor" should identify the particular fixes included, not imply a generally safe release. Current install guidance should name 18.10.4 and retain the unresolved project-trust and plugin-token boundaries.

## Material misses and incomplete leads

The following additions affect provider selection, authority, stored state, compatibility, or defaults. For every commit below I independently checked absence from the preceding release and presence in the stated release. Leads already mentioned by the researcher are explicitly distinguished.

1. **OAuth account pools and out-of-pool reset-credit spending.** New capability in v18.8.1, **2026-10-07**, tagged-release: task.agentAccountPools restricts a named agent's provider session to specified OAuth identities and refuses API-key or other-account fallback. [6aafbc09](https://github.com/can1357/oh-my-pi/commit/6aafbc0924366f1d146502955913fd13ab1c4910), absent v18.8.0. A separate defect allowed a quota-blocked session to redeem another account's saved reset even though it could not use that account. [e31a0e43](https://github.com/can1357/oh-my-pi/commit/e31a0e43dbc353af2f54c49604ce34224c969f3f) and [6e0be09b](https://github.com/can1357/oh-my-pi/commit/6e0be09b632c2133c22e9847b3dbfc0373e9f6ee), absent v18.8.9 and first in v18.9.0 on **2026-10-11**, enforce pool membership both while planning and immediately before redemption. This is unauthorized consumption of a saved reset credit, not evidence that task inference used an excluded account. Operators allocating accounts by workload need both the configuration and the later fix.

2. **A late broker refresh could undo logout or replace a newer login.** Tagged-release v18.4.11, **2026-10-02**. [9b54ded2](https://github.com/can1357/oh-my-pi/commit/9b54ded2389745ffd6ed36e892ceefc8512ab5e7), absent v18.4.10, makes the client re-read broker state when its local credential changed while a refresh was outstanding. Previously a removed account could return to that client's rotation. This affects broker clients including gateways; upgrading the client closes this specific refresh-reply race. It does not claim to fix every delayed credential mutation.

3. **Plain-text subagent results became the default.** Tagged-release v18.10.2, **2026-10-12**. The harvest lists task.structured=false without explaining the behavior change. [3ad2b788](https://github.com/can1357/oh-my-pi/commit/3ad2b788d7a078ec79a6962f5c9e690d00bbb268), absent v18.10.1, hides outputSchema/schemaMode and removes yield/schema injection when the setting is off; the final assistant text becomes the result. Consumers requiring schema-validated task output must explicitly enable task.structured. This belongs beside the section 10 compatibility changes.

4. **Web search defaults changed and the setup picker was removed.** Tagged-release v18.4.3, **2026-09-29**. [cbe9bc20](https://github.com/can1357/oh-my-pi/commit/cbe9bc206d07c4395ff465623e229d279d0dd437), absent v18.4.2, moves search selection to the web model role and changes the default fallback chain to the project's free-only chain, including hosted search on the session's own model. Paid engines and other providers' chat models require explicit selection. Operators with an established provider or billing policy must re-check the role/fallback configuration; do not translate "free-only" into a universal guarantee that the session's model incurs no charges.

5. **Saved tool output became bounded by default.** Tagged-release v18.4.9, **2026-10-01**. [cbf7898c](https://github.com/can1357/oh-my-pi/commit/cbf7898ce150c8a903db24fabe8f111567a3dc97), absent v18.4.8, caps bash, Python, and JavaScript eval artifacts at 16 MiB, retaining a beginning and rolling tail around a truncation notice. tools.artifactMaxBytes=0 restores unbounded output. Workflows that treat the saved artifact as a complete log need an explicit retention decision.

6. **Existing compaction numbers changed meaning in a patch release.** Tagged-release v18.8.8, **2026-10-10**. [a5e542da](https://github.com/can1357/oh-my-pi/commit/a5e542daa2e648397957f2c987aa3b3be9cf1309), absent v18.8.7, makes a per-model token limit a base scaled by compaction policy rather than an exact trigger. [Tagged settings](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L791-L808) document f-prefixed exact triggers and the possibility that a larger base opts into an extended context window and its pricing. Revisit existing numeric limits; f400k preserves an exact 400K trigger subject to the model-window cap.

7. **Additional tool-input breaks were omitted.** Tagged-release v18.3.0, **2026-09-24**, also removed irc.timeoutMs and replaced SM edit headers with Edit File/Find/Replace headers, as recorded in [the release](https://github.com/can1357/oh-my-pi/releases/tag/v18.3.0) and [f89a6db1](https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7). Tagged-release v18.3.4, **2026-09-27**, replaced task.complexity with solutionSpace and changed auto effort selection to use it alone: [2b4af27b](https://github.com/can1357/oh-my-pi/commit/2b4af27b5124359c538f16fccba6c47d8354bc74), absent v18.3.3. Custom tool callers and stored prompts need updating.

8. **The late stable release contains additional material changes.** Tagged-release v18.10.4, **2026-10-13**: extension review reopening and tier selection are added by [d40b86cf](https://github.com/can1357/oh-my-pi/commit/d40b86cf7d6607fc349545ec67ed321023e53425); [7b2bd46d](https://github.com/can1357/oh-my-pi/commit/7b2bd46db7e175abc09b0d37004bf5dc8ccd0962) removes Codex Code Mode and its two settings, so Codex uses the full direct tool surface. The [release](https://github.com/can1357/oh-my-pi/releases/tag/v18.10.4) also fixes Claude refusing sessions snapcompacted under another reasoning model and lowers default windows for Devin models with long-context pricing tiers to their 272K/200K thresholds, requiring extended context for the larger window. Some were noted as main-only leads; their stable availability and the extra tier-control API were missing. These are OMP integration changes, not independently verified claims about the providers' products.

9. **Approval steering changed again after the stable release.** Main-unreleased at **2026-10-13T22:39:57Z**, [b91db66e](https://github.com/can1357/oh-my-pi/commit/b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c), not an ancestor of v18.10.4 and contained in no fetched tag. It keeps the composer usable during approval; new steering denies the waiting call and pending approvals in that batch. It also removes the just-added ApprovalDetailsOptions API and changes compact details again. Keep this separate from what 18.10.4 users receive.

10. **Session transfer and the exact credential-export boundary.** Tagged-release v18.10.0, **2026-10-12**, [3df76b1c](https://github.com/can1357/oh-my-pi/commit/3df76b1c6f1a92c9f64196701321be26045f329d), absent v18.9.2. The harvest mentions auth transfer only as an unread lead and omits session pack/unpack/moved: sessions travel with artifacts, and a moved-away copy forks when resumed. [Auth export code](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/commands/auth.ts#L202-L225) writes plain JSON to stdout, including OAuth refresh tokens; it warns that importing and refreshing elsewhere can sign out the source machine. It refuses a remote-broker setup. Use an appropriately protected transfer path and treat the output as live credentials, not an encrypted backup.

11. **Device documentation moved out of the system prompt by default.** Tagged-release v18.3.0, **2026-09-24**. [f89a6db1](https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7) changes tools.xdevDocs from builtins to catalog. I compared the [v18.2.11 registration](https://github.com/can1357/oh-my-pi/blob/v18.2.11/packages/coding-agent/src/config/settings-schema.ts#L4783-L4786) with [v18.3.0](https://github.com/can1357/oh-my-pi/blob/v18.3.0/packages/coding-agent/src/config/settings-schema.ts#L4767-L4770); [v18.10.4 documentation](https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L617-L618) retains catalog. The agent now fetches mounted-device docs on demand; integrations that assume those instructions are always inlined must set the mode explicitly. The commit changelog incorrectly labels this catalog default as bash.autoBackground.strategy. Use the actual setting registration, not that mislabeled line.

An additional security lead can be narrowed, rather than exaggerated: [3751293a](https://github.com/can1357/oh-my-pi/commit/3751293a941cef28aa8c67fc0809e3109874eeda), first in v18.7.0 on **2026-10-06**, rejects dot and dot-dot session IDs when choosing the local:// temporary fallback root. The test supplies no artifacts directory and expects tmp/omp-local/session. This proves a fallback-root containment fix; it does not establish a remotely exploitable traversal of every persisted session directory. The researcher already recorded this lead, so it is not counted as a wholly omitted event.

The ACP gate lead is a documentation clarification on the inspected path: session/acp-permission-gate.ts is byte-identical at v18.2.8 and v18.10.4, including destructive edit/delete/move intent handling. [Latest gate](https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/coding-agent/src/session/acp-permission-gate.ts#L6-L98). Do not invent an in-window first-fix release from the changed documentation alone.

## Security search, receipt rules, and boundaries

I independently queried [the project's security advisories](https://github.com/can1357/oh-my-pi/security/advisories), the repository security-advisories API, and GitHub's public advisory API for @oh-my-pi/pi-coding-agent, @oh-my-pi/pi-ai, and @oh-my-pi/pi-agent-core. All returned zero published matches. NVD API keyword searches for oh-my-pi and @oh-my-pi/pi-coding-agent each returned totalResults=0. Web searches against GitHub advisories and NVD produced no matching vulnerability record. No GHSA/CVE item was found to add; this is a bounded negative search, not evidence of absence of vulnerabilities.

The report describes what each security-relevant mechanism permits: provider disclosure, stale-login restoration, token forwarding/logging, rule checks after mutation, and spending another account's reset credits. No identifier is substituted for an explanation.

The numbered sections' blob receipts are pinned to tags or SHAs. Release URLs are version-specific. PR URLs are mutable conversation records, not tag/SHA pins. I opened the cited PRs for merge timestamps and explanations, then supplied commit or tagged-file receipts above for claim-bearing implementation details. The plugin PR demonstrates why that distinction matters: a summary or intermediate patch is not the shipped behavior. Registry dist-tags, advisory searches, and service responses are explicitly timestamped observations; they cannot serve as immutable code receipts.

Marketing remains separate. "Built by Stencil Labs" identifies publisher/distributor framing; no feature claim here rests on star counts, slogans, or provider advertising. No social post is quoted or used to establish a product fact. The harvest itself contains no social quotations.

Limits: no runtime reproduction, binary execution, or package installation; no independent relay-retention audit; no exhaustive dependency-CVE audit under unrelated package names; no proof of historical deleted release objects; no new verification of every member of the old advisor/Cursor/dotenv fix clusters. Unsupported extensions of those claims should not reach the profile. The only repository file written by this verification is this cross-check.
