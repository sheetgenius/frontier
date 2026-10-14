# Cursor crosscheck

Run: `2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0`.
Window: 2026-09-21 through 2026-10-13 inclusive.
Independent verification: 2026-10-14.
Input: `harvest/cursor.primary.md`, SHA256 `79824f66d45a31e8447113b1e6d47799ab6a928e809a3b5ca666a0c35a4f8251`.

**Install today: CORRECTED, not correct for the full October 13 close.** The IDE reached 3.24.18, iOS reached 1.13.0, and the Origin installer exposes versioned stable and latest channels that the harvest did not inspect. The main changelog has a third in-window entry, Origin App Marketplace, dated October 13.

Section verdict totals, counting only the harvest's 13 numbered material sections: **2 VERIFIED, 10 CORRECTED, 1 REFUTED, 0 UNVERIFIABLE**. An unsupported component is refused even when nearby vendor prose is accurate. These totals do not count the install table, prior-claim spot checks, or misses separately.

## Evidence standard and execution boundary

Read the researcher brief, source contract and notes, prior profile and harvest, and the house authorities. Opened every numbered section's receipt, using the official `.md` representation when the HTML reader failed. Read versioned archives as data in memory; executed no downloaded code. Used GitHub release and compare APIs instead of cloning. No git write command, install, or site build was run. This report was the only repository file written.

Pin distinctions matter here:

- Build URLs, registry package versions, full commit URLs, and exact Wayback captures are the reproducible receipts below. Hashes identify the bytes independently downloaded in this check.
- Cursor's dated or versioned official notes qualify under the brief's closed-source exception. A date fragment on a live page is not an immutable snapshot or git ancestry. I identify those receipts as versioned notes or `docs-only`, rather than pretending they are SHA pins.
- Undated live docs establish the text read on October 14. Without an archive or an artifact, they cannot independently establish when that text first appeared, a rollout percentage, or runtime enforcement on October 13.
- A tarball's Last-Modified is an artifact timestamp, not necessarily the moment it entered a default channel. Homebrew is an independent receipt for Homebrew's channel, not Cursor source code.

## Install today and independent release ledger

### Corrected channel snapshot

| Surface | Independent result | Evidence and limit |
| --- | --- | --- |
| IDE and Agents Window | **3.24.18**, commit `be4c9e5350d77747b42cd467cbd3370a753d464b`, available October 13 | The [commit-addressed vendor DMG](https://downloads.cursor.com/production/be4c9e5350d77747b42cd467cbd3370a753d464b/darwin/arm64/Cursor-darwin-arm64.dmg) returns HTTP 200, Last-Modified `2026-10-13T19:33:03Z`. [Homebrew's October 13 commit](https://github.com/Homebrew/homebrew-cask/commit/1631cd110809dda09cbd4054146f5ca488037879), at `21:42:53Z`, pins that version. The [stable download API](https://cursor.com/api/download?platform=darwin-arm64&releaseTrack=stable) and its `latest` variant both return it on October 14; Linux x64 and Windows x64 stable also return it. This is a material omission from the full-day close, although it postdates the researcher's morning check. |
| Agent CLI, last pre-close default corroborated | `2026.10.01-e373342` | The [pinned cask](https://github.com/Homebrew/homebrew-cask/blob/471099ac3a43daa5b83ed76718493dc8255b6b67/Casks/c/cursor-cli.rb), its history, and the [vendor artifact](https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz) corroborate the recorded default build. I could not independently recover the install script at `2026-10-13T08:55Z`, or prove that the pointer stayed there until 23:59:59Z. Do not turn that morning observation into an all-day assertion. |
| Agent CLI after the window | Default and Windows installer now name `2026.10.14-0f9edde`; lab names `2026.10.14-88a5947` | Independently read [default](https://cursor.com/install), [Windows](https://cursor.com/install?win32=true), and [lab](https://cursor.com/install?channel=lab) installers. These are October 14 observations, not October 13 release corrections. Homebrew first recorded `d47ca18` at [2026-10-14T01:14:46Z](https://github.com/Homebrew/homebrew-cask/commit/377e637c5e19d2ced5aca6f6e4fd7dd34495d68a), then `0f9edde` at [07:05:46Z](https://github.com/Homebrew/homebrew-cask/commit/e3623db4c5fa1cbc319842355fc2e19909f4131b). Those times do not establish the exact earlier Cursor pointer transition. |
| SDK | npm and PyPI **1.0.37**; bridge **v1.0.37** | [npm metadata](https://registry.npmjs.org/@cursor%2fsdk), [versioned npm metadata](https://registry.npmjs.org/@cursor%2fsdk/1.0.37), [PyPI 1.0.37](https://pypi.org/pypi/cursor-sdk/1.0.37/json), and [bridge release](https://github.com/cursor/sdk-bridge/releases/tag/v1.0.37) agree. npm `latest=1.0.37`, `next=1.0.27-beta.0`. Replace "no live prerelease track" with "next remains on an old beta"; the tag still resolves. No 1.0.33 exists in the returned npm or PyPI release lists. |
| iOS | **1.13.0**, released `2026-10-06T21:12:09Z` | Apple's [official lookup response](https://itunes.apple.com/lookup?id=6767085653&country=us) identifies Cursor and that exact version/date; [App Store listing](https://apps.apple.com/us/app/cursor/id6767085653). The [mobile notes](https://cursor.com/docs/release-notes/mobile#oct-1-2026) still stop at 1.12.0. The harvest correctly admitted it did not check the store, but 1.12.0 is not the newest installable version. Apple metadata is a release receipt, not an immutable historical snapshot. |
| Origin CLI | Default `stable=2026.10.13-14-06-43-ea1dfe5`; `latest=2026.10.13-04-14-45-7ea7628` in the script read October 14 | The [official installer](https://downloads.cursor.com/origin/install.sh) defaults to stable and accepts both channel names. Both version-addressed artifacts have October 13 timestamps and verified vendor hashes; see M10. The installer is moving, so the exact time these pointers were selected remains unverified. Do not infer that `latest` is newer than `stable`. |

### Agent CLI artifacts

All eight URLs below were independently HEAD-requested, with HTTP 200. Default-channel membership before the close is corroborated by cask history, not inferred from the `/lab/` directory name. There are **five**, not six, recorded default-channel advances after the September 18 baseline.

| Version | Artifact Last-Modified, UTC | Channel qualification |
| --- | --- | --- |
| [2026.09.18-9a7762b](https://downloads.cursor.com/lab/2026.09.18-9a7762b/darwin/arm64/agent-cli-package.tar.gz) | 2026-09-18T22:42:21Z | Baseline default |
| [2026.09.15-d2fe57e](https://downloads.cursor.com/lab/2026.09.15-d2fe57e/darwin/arm64/agent-cli-package.tar.gz) | 2026-09-16T00:04:40Z | Pre-window artifact; backfilled note is a separate event |
| [2026.09.23-86fc751](https://downloads.cursor.com/lab/2026.09.23-86fc751/darwin/arm64/agent-cli-package.tar.gz) | 2026-09-23T19:51:56Z | Default advance 1 |
| [2026.09.26-dd393fe](https://downloads.cursor.com/lab/2026.09.26-dd393fe/darwin/arm64/agent-cli-package.tar.gz) | 2026-09-26T01:39:10Z | Default advance 2 |
| [2026.09.28-64d2043](https://downloads.cursor.com/lab/2026.09.28-64d2043/darwin/arm64/agent-cli-package.tar.gz) | 2026-09-28T19:17:47Z | Default advance 3; no proof that every similarly dated note maps to it |
| [2026.10.01-14929f9](https://downloads.cursor.com/lab/2026.10.01-14929f9/darwin/arm64/agent-cli-package.tar.gz) | 2026-10-01T05:37:48Z | Default advance 4 |
| [2026.10.01-e373342](https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz) | 2026-10-01T19:22:58Z | Default advance 5 |
| [2026.10.12-d47ca18](https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz) | 2026-10-12T22:43:27Z | Researcher's lab snapshot; not proven to remain lab-only through the entire close |

The independently downloaded darwin/arm64 tarballs hashed to:

- `9a7762b`: `4e67b9ac80cc4a56e0a91b3b437894e0ba489ef7ec37f120d8084d2bfd02095d`.
- `e373342`: `629e51de43a0b7fb3b86f5ebc7e579f7df7df941b39f29e82945cde750145afc`, matching the pinned Homebrew cask.
- `d47ca18`: `b6bc844fd2ec1ae99f5f24fa68fa08b0acf14fdb6c7b924916226fd59a55f3e7`.

The IDE ledger's versions through 3.24.12 also resolve independently, but add 3.24.18. Correct the explicit 3.24.12 DMG timestamp: its [DMG](https://downloads.cursor.com/production/37b865941ccb31e2fc90c685157534efca87f964/darwin/arm64/Cursor-darwin-arm64.dmg) is `2026-10-09T22:13:07Z`; `22:13:02Z` belongs to the [ZIP](https://downloads.cursor.com/production/37b865941ccb31e2fc90c685157534efca87f964/darwin/arm64/Cursor-darwin-arm64.zip). Label the artifact and format instead of calling an object timestamp the publication time.

### SDK releases and ancestry rerun

`gh release list --repo cursor/sdk-bridge --limit 12 --json tagName,publishedAt,isPrerelease,isDraft,isLatest` lists v1.0.37 as latest; all five in-window releases below are non-draft and non-prerelease. Direct npm and PyPI JSON queries independently reproduce the harvest's times, to the second.

| Version | npm UTC | PyPI first-file UTC | Bridge release UTC | Compare against previous stable |
| --- | --- | --- | --- | --- |
| 1.0.31 baseline | 2026-09-03T21:03:33Z | 2026-09-03T21:03:49Z | 2026-09-03T23:20:46Z | Baseline |
| 1.0.32 | 2026-09-22T15:59:03Z | 2026-09-22T18:50:25Z | 2026-09-22T18:52:04Z | [1 ahead, 0 behind](https://github.com/cursor/sdk-bridge/compare/v1.0.31...v1.0.32) |
| 1.0.34 | 2026-09-29T22:06:02Z | 2026-09-29T23:22:24Z | 2026-09-29T23:24:01Z | [1 ahead, 0 behind](https://github.com/cursor/sdk-bridge/compare/v1.0.32...v1.0.34) |
| 1.0.35 | 2026-10-01T01:25:07Z | 2026-10-01T01:17:00Z | 2026-10-01T01:18:33Z | [1 ahead, 0 behind](https://github.com/cursor/sdk-bridge/compare/v1.0.34...v1.0.35) |
| 1.0.36 | 2026-10-05T16:38:15Z | 2026-10-05T16:29:10Z | 2026-10-05T16:31:35Z | [1 ahead, 0 behind](https://github.com/cursor/sdk-bridge/compare/v1.0.35...v1.0.36) |
| 1.0.37 | 2026-10-07T20:13:46Z | 2026-10-07T20:05:32Z | 2026-10-07T20:07:14Z | [1 ahead, 0 behind](https://github.com/cursor/sdk-bridge/compare/v1.0.36...v1.0.37) |

The API returned successive commit SHAs `9a15af18d82cadd1f9cb9e8f6df3778b0daf8b23`, `fd3f45c621b0b67d5f0787c3c2937cd4659dbc98`, `d932194bcaf3d8ca4cae7373dfec32633ed0c9d0`, `f95921bb11457960d0b76a4f9442d407ebb11360`, and `5e70039b2402f8c94a870fbe8f9e7ecba736fca0`. Main resolved to the last SHA; the [pinned final comparison](https://github.com/cursor/sdk-bridge/compare/v1.0.37...5e70039b2402f8c94a870fbe8f9e7ecba736fca0) is identical, 0/0. The [baseline-to-current diff](https://github.com/cursor/sdk-bridge/compare/v1.0.31...v1.0.37) changes only `proto/manifest.json`. This validates protocol-repository ancestry, not the behavior of separately built bridge executables. The [license at the current SHA](https://github.com/cursor/sdk-bridge/blob/5e70039b2402f8c94a870fbe8f9e7ecba736fca0/LICENSE) remains MIT.

## 1. CLI channel: CORRECTED

Read both linked tarballs and the pinned cask, plus the current installer and [v2026.10.08 notes](https://cursor.com/docs/cli/changelog#oct-8-2026). The ACP watch title and repository-limit refusal exist in d47ca18 and not e373342. The legacy-privacy refusal exists in e373342 and not the baseline. These are reproducible build comparisons, not ancestry for the entire note.

In e373342, `3241.index.js` pipes a curl subprocess into tar without a digest check; `5697.index.js` skips manual updates on `static`. The versioned bundle supports the static-channel claim. It does not support the proposed alternative that downloading a versioned URL alone freezes updates.

**Exact fixes:** say five observed default advances; identify e373342 as the corroborated morning/default snapshot; limit lab-only conclusions to specifically inspected code paths. To freeze this build, retain the version-addressed bytes and disable its auto-updater. Replace the universal absence claim with "no vendor agent-CLI digest was located; the inspected installer and updater do not verify one." Keep the agent CLI distinct from Origin CLI, whose installer does verify hashes. October 14 pointer movements belong after the window.

## 2. Remote Control: VERIFIED

The [October 6 announcement](https://cursor.com/changelog/remote-control-local-agents) states the default, pairing step, local execution, and Enterprise control described in the harvest. The [mobile documentation](https://cursor.com/docs/cloud-agent/mobile#remote-control) still describes the cloud-loop handoff and a Teams/Enterprise opt-in. The [September 21 cloud notes](https://cursor.com/docs/release-notes/cloud-agents#sep-21-2026) support the older toggle explanation.

Verified as a comparison of vendor statements, channel `docs-only`. It does not establish which implementation a particular client uses, a Teams-wide off switch, or a client release containing the new path. The announcement is dated; the mobile page is a moving receipt, not a historical pin. Preserve those limits and use iOS 1.13.0 in the install snapshot.

## 3. Run modes: CORRECTED

Read [IDE 3.24 notes](https://cursor.com/docs/release-notes/ide#oct-9-2026), the [September 21 run-modes capture](https://web.archive.org/web/20260921222031/https://cursor.com/docs/agent/security/run-modes), [current run modes](https://cursor.com/docs/agent/security/run-modes), and the [permissions reference](https://cursor.com/docs/reference/permissions). The old capture names Haiku or GPT-5.4 Mini; the current page names Gemini with Haiku fallback and describes classifier-reviewed reruns. Both inspected pre-window and October 1 CLI bundles map unrestricted mode to `insecure_none`.

**Exact fixes:** attribute the IDE behavior to its 3.24 release note, not a runtime test; update the install recommendation to 3.24.18. Say blocking Haiku **can** disable Auto-review, rather than inevitably making it unavailable. The archived-to-live documentation interval independently established here ends October 14, not October 13. The permissions reference still supplies no documented field proving the release note's exception. Do not invent one or infer enforcement from CLI code for the IDE.

## 4. Read Access: CORRECTED

Read [Read Access](https://cursor.com/docs/agent/security/run-modes#read-access), [sandbox configuration](https://cursor.com/docs/reference/sandbox), [IDE 3.23 notes](https://cursor.com/docs/release-notes/ide#oct-1-2026), and the pinned e373342 bundle. `8134.index.js` independently confirms repo, user, then CLI-config precedence and the System fallback. `src/sandbox-gate.ts` uses a false fallback for `sandbox_read_control_portal`; the baseline already contains that gate and read-boundary plumbing.

**Exact fixes:** remove "first control" and the universal claim that every earlier agent could read everything. State that the documented IDE setting requires 3.23 and defaults to System. A false client fallback does not prove the server currently disables the feature for everyone. For centralized containment, also inspect **Read Control User Extensions**: team Workspace mode can still include member/repository allowlist extensions unless the admin disables them. Read Access does not constrain Run Everything. These configuration details remain docs-only where not established by the downloaded CLI code.

## 5. Model selection: REFUTED as an exact shipped-build claim

The [web note for September 21](https://cursor.com/docs/release-notes/web#sep-21-2026) and [CLI note v2026.09.28](https://cursor.com/docs/cli/changelog#sep-28-2026) support the vendor's descriptions of both defects. The [Router page](https://cursor.com/docs/cursor-router) limits hidden model attribution to Balance and Intelligence routing.

The proposed fixed artifact `2026.09.28-64d2043` is inferred from its date. Finding an unrelated worker message in e373342 does not prove the model-selection fix reached either build. I did not independently establish that mapping. Under the requested default, the exact upgrade guarantee is REFUTED for promotion, not silently accepted as probable.

**Replacement:** "Cursor's v2026.09.28 notes report a model-ID selection fix; the first fixed downloadable CLI build has not been established." Separately report the web routing correction as `docs-only`. Replace "assume requests reached blocked models" with "requests may have reached them; inspect usage." Hidden Auto attribution is not evidence that the explicit CLI model substitution was hidden in the same way.

## 6. Security fixes: CORRECTED

Read the cited [IDE notes](https://cursor.com/docs/release-notes/ide#oct-9-2026), [Agents Window notes](https://cursor.com/docs/release-notes/agents-window#oct-1-2026), [cloud notes](https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026), [SDK 1.0.32 note](https://cursor.com/docs/release-notes/sdk#sep-22-2026), and the advisory APIs. The seven described mechanisms match vendor text: shell execution through crafted branch names, forged browser context, skipped repository hooks, confirmation bypass, unwanted crash-data upload, out-of-repository file reads, and checkout-controlled SDK bridge startup configuration.

**Exact fixes:** say "no matching public advisory or CVE found in the checked sources," not that no identifier exists anywhere. Recommend IDE 3.24.18 for the dated close. Add the omitted Windows hook failure in M3. The SDK note is a vendor claim about executables; protocol-tag ancestry and archive checksums do not inspect their autoload behavior. Keep IDE, SDK, and server-side fixes separate. Database checks and plain-language advisory descriptions are recorded below.

## 7. Self-hosted pools: CORRECTED

Read [September 22 CLI notes](https://cursor.com/docs/cli/changelog#sep-22-2026), [October 8 CLI notes](https://cursor.com/docs/cli/changelog#oct-8-2026), both weekly cloud receipts, and the versioned bundles.

The main security comparison is stronger than the harvest's marker test: e373342's `5424.index.js` checks tracked dirt with `--untracked-files=no`; d47ca18's `7201.index.js` adds a separate untracked agent-configuration check and refuses reuse when it finds such files. This supports the reused-checkout fix being absent from e373342 and present in d47ca18. It does not prove every worker change in the note, or the first-turn cache fix in e373342. The latter was placed there only by date order.

**Exact fixes:** attach the actual tarball receipts and this code comparison. Limit the default-versus-lab assertion to the researcher's observed channel snapshot. Drop the unsupported first-turn fixed-build guarantee until that code path is traced. The cloud notes say any **team member** may set a channel pool; they do not establish that any person in any Slack channel can do so, nor that an announcement is the system's only authorization check.

## 8. Origin gates and identities: CORRECTED

Read [Origin September 21](https://cursor.com/docs/release-notes/origin#sep-21-2026), [September 28](https://cursor.com/docs/release-notes/origin#sep-28-2026), [Bugbot September 21](https://cursor.com/docs/release-notes/bugbot#sep-21-2026), and their text in the [October 7 archive](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes). The listed merge-gate changes and installation-user delegation are supported as hosted-service notes.

**Exact fixes:** describe the IP exception by credential class. The note limits the allowlist to user credentials; an agent using a person's credential is not thereby exempt. Also qualify clone/fetch auditing: background autofetches and machine actors are excluded. The notes do not say every forge gate now fails closed. Add the API migration omissions in M5. No code ancestry exists for these hosted changes.

## 9. Projects: CORRECTED

Read the [September 22 Projects capture](https://web.archive.org/web/20260922133501/https://cursor.com/docs/agent/projects), [current Projects page](https://cursor.com/docs/agent/projects), [September 14 web note](https://cursor.com/docs/release-notes/web#sep-14-2026), [Agents Window 3.21 note](https://cursor.com/docs/release-notes/agents-window#sep-17-2026), and the archived index. Enterprise availability and a team switch are supported as documentation changes. Absence of a beta label is not a GA release declaration.

**Exact fixes:** replace "none exists yet" and "no spend cap or approval gate" with "the inspected Projects documentation names no per-Project budget, approval gate, or concurrency setting." General spend controls exist, including the in-window service-account controls in M9; they are not proven to cap a Project. The switch is labeled September 14, so keep its later discovery separate from its asserted release week. Do not derive the Enterprise default from the ambiguous opt-in wording.

## 10. Release-note restructuring: CORRECTED

Independently read the [September 24 CLI capture](https://web.archive.org/web/20260924032107/https://cursor.com/docs/cli/changelog) and the full [October 7 index capture](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes), including v2026.09.15, v2026.09.22, and v2026.09.28. The backfill and relabeling are confirmed. Read both current feeds as well.

**Exact fixes:** the index **supplements**, rather than replaces, the main changelog and existing CLI changelog. The full window has three main entries, including the [October 13 archived marketplace announcement](https://web.archive.org/web/20261013185441/https://cursor.com/changelog/origin-app-marketplace). Current cloud and Bugbot notes include October 5 weeks; their first publication before the close was not independently pinned, so describe them as later observations of in-window-labeled notes, not proof the researcher overlooked already-published pages. Remove the unmeasured superlative about this being the watchlist's largest verifiability gain.

## 11. Rollouts and Security Review: VERIFIED

Read the [September 23 announcement](https://cursor.com/changelog/rollouts-and-security-reviewer), [Rollouts documentation](https://cursor.com/docs/rollouts), [Security Agents documentation](https://cursor.com/docs/security-agents), and [Bugbot September 28 notes](https://cursor.com/docs/release-notes/bugbot#sep-28-2026). These support the stated hosted capabilities, admin enablement, monitoring schedule, service-account operation, and the absence of autonomous merging or rollback in Rollouts. This is vendor-described behavior, channel `docs-only`, not tested execution.

Keep the `.cursor/config/bugbot.yaml` statement scoped to **GitHub pull requests**, as its receipt says. The API-key and read-only telemetry recommendations are operator judgment, not claims that Cursor enforces least privilege. Live setup pages are not immutable snapshots of September 23 configuration.

## 12. Prompt and setting removal: CORRECTED

Read the [September 23 engineering post](https://cursor.com/blog/improved-token-efficiency) and both cited cloud-note weeks. The reported prompt reduction, tool-description reduction, caching change, line-number change, and subagent policy changes are accurately attributed to Cursor.

**Exact fixes:** the post describes changes over preceding months; it does not date every implementation to this window or identify a client build. "Method not published" is too strong: it describes A/B comparisons and measured quantities, but supplies no reproducible experiment or raw dataset. Keep the percentages as vendor measurements. Replace "there is nothing to configure" for the combined section: removing Long-running mode and forcing environment builds on changes operator choices and needs its own consequence. No absence of a searched client string proves the corresponding implementation is server-side.

## 13. Grok Bot meetings terms: CORRECTED

Independently compared the [October 5 capture of September 3 terms](https://web.archive.org/web/20261005223008/https://cursor.com/en-US/terms/grok-bot) with the [October 13 capture of October 12 terms](https://web.archive.org/web/20261013185637/https://cursor.com/en-US/terms/grok-bot). The added meetings clause is confirmed with historical pins. Also read the linked plan page and the security/team docs.

**Exact fixes:** retain the term change as `docs-only`; say the customer must obtain **required** notices and consents and determine what is required for the meeting. Do not convert that into a universal legal rule demanding every participant's consent in every situation. Neither terms nor absence from the selected documentation establishes whether the feature had already shipped. Replace "before the feature ships" with "before allowing meeting use; availability and controls are unverified." This is a report of contract text, not legal advice or product-release evidence.

## Prior claims independently re-checked

- **CLI channel and digest:** changed. The pinned e373342 tarball supports the updater, static-channel, and digest observations in section 1. IDE and iOS install conclusions require correction. The old beta npm tag remains resolvable.
- **Projects autonomy:** holds as vendor-described delegation, subscriptions, and local-worker capability in the current page. Enterprise availability changed. The claimed nonexistence of per-Project controls is refused; only absence from inspected documentation is established.
- **Self-hosted data exposure:** holds as a docs-only statement. The [self-hosted page](https://cursor.com/docs/cloud-agent/self-hosted#what-leaves-your-network) still lists file contents, terminal output, diffs, screenshots, local MCP results, and routing metadata leaving the worker. Blocking its artifact bucket does not stop tool-result transmission. No runtime packet-capture claim is made.
- **MCP identity and fail-open hooks:** holds for the inspected builds. `190.index.js` in both 9a7762b and e373342 puts `mcp_server_name` in `beforeMCPExecution`. The [hook reference](https://cursor.com/docs/hooks#beforemcpexecution) recommends server-plus-tool matching and denial for missing identity; failures need `failClosed: true` to block. The claimed six-build historical survey was not independently repeated. July 23 is not a proven first implementation date.
- **Start from scratch and Origin:** current [Agents Window 3.24 notes](https://cursor.com/docs/release-notes/agents-window#oct-9-2026) describe the repository-free fallback when Origin is disabled. Retain the conditional, not a universal assertion that all new projects write to Origin.
- **Git sandbox allegation:** still unresolved. The two default bundles retain the four recorded configuration overrides, with an allow-hooks mode added in e373342. M4 finds further hardening in d47ca18. None of these observations proves that the particular September social allegation is fixed, or identifies its first fixed build.
- **Grok Bot separation and defaults:** holds as current documentation, not an agent-CLI or IDE fact. The [team controls](https://cursor.com/docs/grok-bot/teams) and [security page](https://cursor.com/docs/grok-bot/security) retain allow-all when no network policy exists and Enterprise-only enforced review and Action Recording. Do not imply self-serve Teams has no administrative controls at all.
- **Model supply:** the [models page](https://cursor.com/docs/models-and-pricing) still lists OpenAI models without an end date. That verifies the page's current silence, not provider availability until a future date. No social quotation or unexamined OpenAI post was used to settle the cutoff.
- **Profile paragraphs:** channel and surface-count paragraphs need the install and marketplace corrections above; self-hosted exposure, MCP identity, Origin conditionality, and Grok Bot separation retain the limits just stated. Security-feed silence survives only as a bounded search result. The four unresolved questions remain open except that current MCP server identity is established at the two inspected default builds.

## Security search and rule checks

Queried `repos/cursor/cursor/security-advisories?per_page=100`, `repos/cursor/sdk-bridge/security-advisories?per_page=100`, global GitHub advisories for npm `@cursor/sdk` and pip `cursor-sdk`, and NVD with publication bounds `2026-09-21T00:00:00.000` through `2026-10-13T23:59:59.999`.

The tracker returned 33 advisories, newest published July 14; the bridge and both package advisory queries returned empty arrays. NVD's Anysphere keyword and `cpe:2.3:a:anysphere:cursor` queries returned zero. Its broader Cursor keyword query returned 11 records concerning other products or ordinary cursor data structures, not Anysphere Cursor. These are negative search receipts, not proof that unpublished, reserved, or differently indexed vulnerabilities do not exist.

- [GHSA-p9g2-cr55-cw9c / CVE-2026-73217](https://github.com/cursor/cursor/security/advisories/GHSA-p9g2-cr55-cw9c), cited only as the advisory-feed boundary, lets a sandboxed agent replace a Python virtual-environment executable with a malicious wrapper. On macOS, the Python extension can then invoke it outside the sandbox, running arbitrary host commands with the user's privileges. The advisory names versions below 3.1.2 as affected and 3.1.2 as patched. It is pre-window, not a new October finding.
- [CVE-2026-63093](https://nvd.nist.gov/vuln/detail/CVE-2026-63093), published July 17, allows a malicious repository's `git.exe` to execute as the Windows user when Cursor opens it. NVD identifies version 3.2.16; do not expand that into an independently verified all-versions-through range or a known fixed version.
- Security bullets explain what the bug enables. Neither a reassuring release-note heading nor lack of a CVE proves sandbox safety.
- Marketing remains attributed: prompt-efficiency numbers are not independently reproduced measurements. No social posts were quoted or promoted into a product fact.
- Blanket pinning does **not** pass. Most original Receipt fields include moving docs, installers, or feeds. Preserve closed-source precision, use the archive and artifact pins supplied here, and refuse unsupported historical or implementation conclusions.

## Material misses with receipts and channels

### M1. Origin App Marketplace on October 13

`docs-only`, dated hosted launch. The [October 13 capture](https://web.archive.org/web/20261013185441/https://cursor.com/changelog/origin-app-marketplace) confirms public submissions, installation-token authentication, webhooks, checks/comments/reviews, and a review step before listing. This expands Origin's integration surface and requires app-scope review. It is the third main-changelog entry, absent from the harvest. Partner performance and integration quality were not tested.

### M2. SDK subagent controls are opt-in

`tagged-release`, npm 1.0.34 on September 29, retained in 1.0.37. Independently read `package/dist/esm/options.d.ts` in [1.0.34](https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.34.tgz) and the corresponding declarations in [1.0.37](https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.37.tgz); both tarballs match npm's SHA512 integrity. `local.subagentInherit` forwards tool limits and selected executor/workspace overrides to Task descendants. Unset retains host executors/workspace without the parent's tool-allowlist headers. The [archived release notes](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes) corroborate the feature. Embedders must opt in and verify child behavior; parent restrictions must not be assumed to propagate automatically. Version 1.0.35 also adds custom-tool session identity, preserved in the inspected 1.0.37 declarations.

### M3. Windows hooks could report success without executing

`tagged-release`, vendor notes for IDE and Agents Window 3.23, dated October 1. The [October 7 archive](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes) and [3.23 IDE note](https://cursor.com/docs/release-notes/ide#oct-1-2026) describe extensionless hook commands that opened a console and falsely succeeded. The fix resolves matching script/executable extensions. Recheck approval/audit hooks used on Windows; success status before this fix does not establish that the control ran. This is a separate omission from the seven security bullets.

### M4. Additional git hardening in the lab artifact

`preview-or-beta` relative to the researcher's channel snapshot, artifact October 12. In the hash-verified [d47ca18 tarball](https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz), `dist-package/index.js`, module `../git-core/dist/git-exec.js`, inserts `--no-ext-diff` and `--no-textconv` for diff, show, blame, log, and whatchanged, and removes contrary command-line switches. The equivalent module in the [e373342 tarball](https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz) lacks that transformation. This narrows repository-controlled external-program execution during harness git reads. It is not proof of the alleged fsmonitor variant's fix, and is not an October 13 default-channel guarantee.

### M5. Origin has breaking API migrations, not just new gates

`docs-only`, hosted API labeled Early Beta. The [October 7 archive](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes) already records the changed stack-parent field and ruleset bypass-user identity. The dated [September 22 API note](https://cursor.com/docs/api/origin/changelog#sep-22-2026) specifies `parentPullNumber` rejection in favor of `parentPullRequest.number`; [October 2 and 3 notes](https://cursor.com/docs/api/origin/changelog#oct-2-2026) describe public user IDs replacing numeric IDs and subsequent rejection of the old form. Integration owners need schema migrations. The archive pins the existence of both breaking changes inside the window; the daily API details remain versioned-doc receipts, not source commits.

Further dated API changes deserve a separate pinned follow-up before promotion: removed namespace paths and outbound-mirroring transitions; split member/mirror scopes; omitted email/mirror fields without those scopes; deleted actors and closed merge-preview refs; changed service-account identities; merge rejection requiring restacking; and preview auto-merge endpoints on October 13. I read the [daily API ledger](https://cursor.com/docs/api/origin/changelog), but found no historical capture of that page to certify all details by the close. These specific historical assertions remain REFUTED for promotion pending a pin, not silently treated as shipped source facts.

### M6. Origin CLI removes commands and adds merge-head protection

`docs-only`, named releases October 1 and October 6; no tested binary mapping. The [October 7 index capture](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes) and [Origin CLI notes](https://cursor.com/docs/release-notes/origin-cli#oct-1-2026) record removal of `origin pr stack` and the PR-targeting `--branch` option. The [October 6 note](https://cursor.com/docs/release-notes/origin-cli#oct-6-2026) adds expected-head checks and merge requirements. Update automation and compare the reviewed head before merging; the harvest only listed the newest note date.

### M7. Bugbot branch and billing boundaries changed

`docs-only`, week of September 28, pinned in the [October 7 index capture](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes). The [Bugbot note](https://cursor.com/docs/release-notes/bugbot#sep-28-2026) fixes Autofix writing to the PR branch despite New Branch mode. It also makes team, rather than the installing user's personal, spend limits govern token-billed team runs. Inspect affected branch writes and set the team budget; personal limits are not the governing control for these runs.

### M8. Cloud network wildcards widened

`docs-only`, week of September 28. The [cloud note](https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026), also in the [October 7 capture](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes), changes `*.example.com` to include `example.com`. The harvest mentions wildcard semantics as local sandbox posture but misses this cloud-policy change. Audit wildcard entries if allowing the parent domain changes permitted egress.

### M9. Spend and organization-key controls

`docs-only`, week of September 21, pinned by the [October 7 index capture](https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes). The [web notes](https://cursor.com/docs/release-notes/web#sep-21-2026) add editable service-account billing-period limits, organization audit-log API access, and expiry choices for new organization API keys. These are concrete budget and credential-lifetime controls. They must not be confused with an unverified per-Project limit.

### M10. Origin CLI has versioned channels and vendor checksum verification

Install-channel evidence, with October 13 artifacts. The [installer](https://downloads.cursor.com/origin/install.sh) selects stable by default and checks SHA256 before extraction. Independently downloaded both darwin/arm64 artifacts without executing them:

- [Stable 2026.10.13-14-06-43-ea1dfe5](https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz): Last-Modified `2026-10-13T14:12:28Z`, SHA256 `391b0cdd182d11aff173ced422ba537b28e89362a05ebfe2d901231e73c5107c`.
- [Latest 2026.10.13-04-14-45-7ea7628](https://downloads.cursor.com/co/2026.10.13-04-14-45-7ea7628/darwin-arm64/co.tar.gz): Last-Modified `2026-10-13T04:17:47Z`, SHA256 `6f2b8fe979a06af8dc5906c34378b0f72d9602b83b48da663018cfe3b133503f`.

Both match the script's vendor-provided hashes. The artifacts are pinned; channel pointers are only independently observed October 14. This does not establish when checksum verification was introduced, but the harvest's Origin install snapshot is materially incomplete.

## Remaining limits and disposition

The newer IDE and iOS versions belong in the corrected ledger as well as the install snapshot. The October 5 cloud and Bugbot weeks now contain further material notes, including environment configuration being ignored, Project worker placement, Remote Control gating, and oversized-review disclosure. Without an independent before-close snapshot, their publication timing remains unresolved; do not silently backdate their discovery.

No sandbox exploit, approval bypass, server rollout, or IDE binary behavior was executed. No claim that a safety control holds at 3.24.18 is inferred merely because that is the newest download. The SDK bridge's source repository remains a protocol/release surface, and `cursor/cursor` remains an issue tracker: its latest commit is `654b1b4775ca67aef473bd31a14c8c04a1abde2d`, dated May 12, not the product source.

Do not publish the harvest unchanged. Correct the install snapshot, remove the unsupported exact-build guarantee in section 5, narrow the other absolute claims, and add the receipted misses. Preserve the distinction between a vendor's dated statement, independently read artifact code, and tested enforcement.
