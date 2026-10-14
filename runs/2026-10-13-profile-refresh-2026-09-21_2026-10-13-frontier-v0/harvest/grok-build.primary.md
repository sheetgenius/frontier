---
schema_version: bitter.frontier_harvest.v0
provider: grok-build
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/grok-build.yml
channels_present: [tagged-release, preview-or-beta, docs-only]
window_volume: 16 binary builds (1.0.41 to 1.0.56), 5 apparent stable targets reconstructed from notes and packaging history, 4 public syncs (last 2026-09-29, crate 1.0.45), 0 GitHub tags, 0 GitHub releases, 0 attributable in-window advisories found, 21 material items
lane: primary sources, profile-refresh researcher; crosscheck applied by write-up author
---

# Harvest: grok-build (primary sources)

Identity is xai-org/grok-build and the grok CLI, not chat, Grok Bot or an API model. The public source is Apache-2.0 Rust synced from a private monorepo. The vendor tree names @xai-official/grok, and registry maintainer metadata identifies xai-security. Receipts: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/README.md, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/LICENSE, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/npm/grok/package.json, https://registry.npmjs.org/@xai-official%2Fgrok, https://docs.x.ai/build/overview.

There are no GitHub tags or releases. For this source, tagged-release names the stable artifact distribution channel, not a Git tag; preview-or-beta names builds not established as stable. Per-version files are versioned objects, identified here by GCS generation and digest. Equal timeCreated and updated does not prove immutability. The source fetcher points /release-notes at per-version external Markdown. A cumulative note is not proof of exact pointer history. Shipped-guide claims describe documentation unless independently tested; no Grok code, installer or binary was executed.

Pins: public mirror 2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8, 2026-09-29T16:57:09Z; SOURCE_REV 559751fdcec02d413e4c57c8832ab275e4f44980; crate 1.0.45. Baseline 4247f661689354b831191f11eeeac8424993fe3d, crate 1.0.38. Compare ahead 4, behind 0, 1,312 files changed. Public main cannot identify the complete source of later builds.

## Install today

Stable on 2026-10-13 is 1.0.52. Linux x86_64 generation 1791762841427964 was created 2026-10-11T23:54:01Z, 188,326,752 bytes, MD5 7uquEK788pKAH73vJNFMig==, independently reproduced SHA256 1668414b047e1050a96d25fe17dfc3efe63190fbf66d8cc1c3de8633caf50d11. The stable pointer generation was created 2026-10-12T17:27:15.533Z. Receipts: https://storage.googleapis.com/grok-build-public-artifacts/cli/stable?generation=1791826035416926, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875.

- npm: npm i -g @xai-official/grok@1.0.52. npm checks published package integrity; record the version and platform-package SHA512. A global install does not establish a project-lockfile pin, source correspondence or persistent CLI updater pin. Registry signatures exist; no provenance attestation is listed.
- Script: curl -fsSL https://x.ai/cli/install.sh | bash selects stable; bash -s <version> selects an initial version; GROK_CHANNEL selects alpha or enterprise. The Unix branch checks only --version; the Git Bash Windows branch has no check. A version selection preserves an existing auto_update setting and does not disable updates.
- PowerShell: irm https://x.ai/cli/install.ps1 | iex. Its hash check covers MinGit, not grok.exe; no Grok hash check or version smoke test. The live scripts match the September 29 pinned tree. References: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/scripts/install.sh#L207-L345 and https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/scripts/install.ps1#L228-L347.
- WinGet: xAI.GrokBuild 1.0.52 was merged at 2026-10-13T17:56:46Z, with x64/arm64 InstallerSha256. Verify what the client index offers; propagation was not tested. Receipt: https://github.com/microsoft/winget-pkgs/blob/b057f0992015764a607c7e6f9c07eaa1de8a98d0/manifests/x/xAI/GrokBuild/1.0.52/xAI.GrokBuild.installer.yaml.
- Platforms: Linux/macOS x86_64 and aarch64 raw, gzip and zstd; Windows x86_64 and aarch64 executables. All 24 tested SHA256/signature sidecar names for 1.0.52 returned 404. npm/WinGet integrity does not prove a complete public source/binary match.
- Channels: enterprise 1.0.53 is ahead of stable. Alpha 1.0.55 is only the researcher's 09:36 UTC observation. Non-stable 1.0.56 appeared later on October 13; its end-of-day alpha assignment is unknown. October 14 builds are excluded.
- Update policy: auto-update defaults on in the inspected code; eligible successful checks can move script installs up or down. Hold through the documented explicit-version updater or [cli] auto_update = false and verify the setting. Cache, policy and fetch failures can prevent a check or update.
- Flag-off/gated: sandbox profile off by default; workspace exposure is opt-in/account-gated; Cursor worker auto_start defaults false, with account and sandbox-profile refusals. Its any_repo setting is opt-in, but a clone-pool door is also documented. long_reasoning_reminder defaults false. These gates are documentation, not demonstrations of runtime confinement.

## Release ledger

Build times are GCS timeCreated and npm times are registry publication times, all 2026. No version string has a semver prerelease suffix. GitHub prerelease flags and release-tag ancestry are not applicable. Parent-reported stable 1.0.41 and pinned stable 1.0.52 are observations; earlier target/promotion reconstructions are bounded as stated. Note creation times are not promotion timestamps and cumulative blocks do not establish that intermediate versions were never stable. The last column identifies mirror labels, not binary ancestry.

| Version | Built (UTC) | Semver prerelease suffix | Channel role | Builds grouped by note | npm publish (UTC) | Public sync label |
|---|---|---|---|---|---|---|
| 1.0.40 (baseline) | 2026-09-20T23:42:15Z | no | baseline reconstruction; note written 2026-09-21T01:57:53Z, pointer unknown | 6 | 2026-09-20T23:48:33Z | none |
| 1.0.41 | 2026-09-22T16:34:24Z | no | stable from 2026-09-22T21:32:45Z (observed) | 1 | 2026-09-22T16:39:47Z | 07e35a3dfeed (09-22), f0e3be1100ef (09-23) |
| 1.0.42 | 2026-09-26T18:17:07Z | no | included in cumulative notes for 1.0.44 | - | 2026-09-26T22:41:22Z | none |
| 1.0.43 | 2026-09-27T22:53:44Z | no | included in cumulative notes for 1.0.44 | - | 2026-09-28T00:26:22Z | none |
| 1.0.44 | 2026-09-28T22:02:30Z | no | apparent stable target; note written 2026-09-29T04:37Z | 3 | 2026-09-28T22:10:13Z | none |
| 1.0.45 | 2026-09-29T06:04:32Z | no | included in cumulative notes for 1.0.46 | - | 2026-09-29T06:10:58Z | 97f190f644ae, 2bdd1d6a6369 (both 09-29) |
| 1.0.46 | 2026-09-30T22:05:50Z | no | apparent stable target; note written 2026-10-01T00:53Z | 2 | 2026-09-30T22:11:16Z | none |
| 1.0.47 | 2026-10-01T19:06:49Z | no | included in cumulative notes for 1.0.50 | - | 2026-10-01T19:23:48Z | none |
| 1.0.48 | 2026-10-02T01:13:34Z | no | included in cumulative notes for 1.0.50 | - | 2026-10-02T01:21:20Z | none |
| 1.0.49 | 2026-10-02T18:48:00Z | no | included in cumulative notes for 1.0.50 | - | 2026-10-02T18:53:36Z | none |
| 1.0.50 | 2026-10-06T22:04:50Z | no | apparent stable target; note written 2026-10-08T16:01Z | 4 | 2026-10-06T23:07:37Z | none |
| 1.0.51 | 2026-10-09T17:27:10Z | no | included in cumulative notes for 1.0.52 | - | 2026-10-09T17:35:00Z | none |
| 1.0.52 | 2026-10-11T23:54:01Z | no | stable from 2026-10-12T17:27:15Z (observed) | 2 | 2026-10-11T23:59:56Z | none |
| 1.0.53 | 2026-10-12T17:48:31Z | no | enterprise pointer from 2026-10-12T18:15:14Z; non-stable | - | 2026-10-12T17:55:09Z | none |
| 1.0.54 | 2026-10-12T22:29:02Z | no | available non-stable | - | 2026-10-12T22:35:15Z | none |
| 1.0.55 | 2026-10-13T06:16:53Z | no | alpha morning observation 2026-10-13T09:36:38Z | - | 2026-10-13T06:23:26Z | none |
| 1.0.56 | 2026-10-13T20:57:37Z | no | available non-stable, end-of-day pointer unknown | - | 2026-10-13T21:03:44Z | none |

## 1. Stable is 1.0.52; enterprise is ahead, and npm supplies package integrity

- **Date:** 2026-09-22..2026-10-13
- **Channel:** `tagged-release` (stable artifact channel, no GitHub tag); `preview-or-beta` (enterprise 1.0.53 and available non-stable builds)
- **Ancestry evidence:** At 2026-10-13T09:36:38Z the researcher read stable 1.0.52, alpha 1.0.55 and enterprise 1.0.53. Generation-pinned stable and enterprise objects were created 2026-10-12T17:27:15.533Z and 2026-10-12T18:15:14.877Z. Registry metadata corroborates latest 1.0.52. Five apparent stable targets (1.0.41, 1.0.44, 1.0.46, 1.0.50, 1.0.52) are reconstructed from notes and packaging history, not five independently verified pointer transitions. Historical alpha-only assignments and end-of-day alpha are unrecovered. The npm wrapper pins its platform optional dependencies to 1.0.52; package SHA512 and registry signatures are present, no provenance attestation is listed.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/stable?generation=1791826035416926, https://storage.googleapis.com/grok-build-public-artifacts/cli/enterprise?generation=1791828914730794, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140, https://registry.npmjs.org/@xai-official/grok/1.0.52, https://registry.npmjs.org/@xai-official/grok-linux-x64/1.0.52, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/npm/grok/package.json#L2
- **Half:** capability | **Confidence:** high for stable, enterprise and package metadata; medium for historical target reconstruction

**What changed.** Stable serves 1.0.52, and enterprise serves 1.0.53, reversing the earlier enterprise lag. Cumulative notes group intermediate changes into apparent stable targets, but do not prove intermediate versions were never stable. The baseline 1.0.40 stable value on 21 September is a reconstruction, not a recovered pointer. npm supplies package integrity, not proof that its binary matches the public source.

**Operator consequence.** Install 1.0.52. npm checks the published package integrity; record the version and platform-package digest. Control the CLI updater separately to hold a version. Test enterprise as a channel ahead of stable. Keep alpha 1.0.55 as a morning observation and 1.0.56 as an available non-stable build (section 13), without inventing an end-of-day pointer.

## 2. Selecting a version with install.sh does not disable automatic updates

- **Date:** 2026-10-13 (re-check of pre-window behavior, not a new introduction)
- **Channel:** `tagged-release` (1.0.52 documentation and messages); implementation read at the September 29 mirror
- **Ancestry evidence:** auto_update.rs defaults unset auto_update to true, permits script-install downgrades and declines npm downgrades. Eligible checks compare versions and channel targets; fresh cache, opt-outs, version policy, unavailable targets and failed fetches can skip updates. install.sh preserves an existing auto_update setting. Explicit-version grok update attempts to persist auto_update = false. The 1.0.52 guide documents opt-outs, and embedded messages corroborate update and pinning paths without proving every older implementation branch unchanged. version.rs describes smoke-test download validation.
- **Receipt:** https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/auto_update.rs#L560-L790, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/auto_update.rs#L2637-L2652, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/version.rs#L28, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/scripts/install.sh#L207-L345, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
- **Half:** defect | **Confidence:** high on code and shipped documentation; no execution

**What changed.** Selecting a version with install.sh does not disable automatic updates. With updates enabled and a successful eligible update check, the script installation can follow its configured pointer in either direction. The prior profile treated installation-time selection as a lasting pin. These observations correct that advice; they do not establish a one-session lifetime or that every installation has updated.

**Operator consequence.** Disable automatic updates with [cli] auto_update = false, or use the documented explicit-version updater, grok update --version <X>, and verify its saved setting. Per process, --no-auto-update or GROK_DISABLE_AUTOUPDATER=1 are documented opt-outs. Managed maximum_version and required_minimum_version bound fleet versions. Read grok --version before attributing a run to a chosen version. Script and in-app downloads still lack a published checksum check.

## 3. The September 29 mirror cannot identify the complete source of stable 1.0.52

- **Date:** 2026-09-29..2026-10-13
- **Channel:** `tagged-release` artifacts compared with an older public mirror; no release-tag ancestry
- **Ancestry evidence:** Public main ends at 2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8, 2026-09-29T16:57:09Z, crate 1.0.45 and SOURCE_REV 559751fdcec02d413e4c57c8832ab275e4f44980. Baseline comparison is ahead 4, behind 0; each adjacent sync passes is-ancestor. There is no newer public sync for 1.0.46 through 1.0.56, 11 later builds. The snapshot contains physical/lexical cwd matching later documented in 1.0.46, but the label and note do not establish a complete binary mapping or absence from every 1.0.45 build.
- **Receipt:** https://github.com/xai-org/grok-build/commit/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/SOURCE_REV, https://github.com/xai-org/grok-build/compare/4247f661689354b831191f11eeeac8424993fe3d...2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-permission-rules/src/policy/path_match.rs#L8-L73, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.46.external.md?generation=1790815986081588, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/LICENSE, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/README.md#L31-L35, https://www.manifold.security/blog/ai-coding-agents-git-hijack, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-fast-worktree/src/git/safety.rs#L310-L324
- **Half:** defect | **Confidence:** high

**What changed.** The prior instruction to join grok --version to a matching public crate version cannot identify stable 1.0.52. The public Apache-2.0 Rust repository is a periodic private-monorepo mirror, with zero GitHub tags and releases. A September 29 snapshot labeled 1.0.45 contains a change later documented in 1.0.46. Its label does not certify the contents of any binary. The GitSpawn report tested Grok 1.0.13 on 2026-09-01 using a repository directory delivered with malicious .git/config. Ordinary cloning does not copy that local config. It reports background Git running attacker commands with user privileges; it does not establish 1.0.52 status. No named fix was found through 1.0.56, and limited public probe hardening does not prove current safety or exposure.

**Operator consequence.** Use the September 29 mirror for claims about that snapshot. Read generation-pinned notes and embedded guides for shipped-version claims, while distinguishing documentation from tested enforcement. A new complete sync with an explicit binary/source correspondence would settle the gap; another crate version alone would not.

## 4. The binary documents a Cursor worker whose implementation is absent from the public mirror

- **Date:** 2026-10-13 (packaging observation, not an introduction date)
- **Channel:** `tagged-release` (text and source-location strings in inspected 1.0.45, 1.0.46, 1.0.50 and 1.0.52 artifacts); account-gated and off by default
- **Ancestry evidence:** Independent byte probes reproduce 1,191 source paths in 1.0.45, 137 absent from the final public tree, 127 absent from all public history and 12 of 84 crate names wholly absent, including crates/common. Absent crates include xai-grok-cursor-worker (45 files), xai-grok-cursor (23), xai-repo-changes, xai-grok-grove-dataplane, grove, grove-git, grove-shm, grove-daemon-db, grove-git-api, xai-identity-sdk, xai-agent-host-state and xai-agent-host-transport. Public leader/mod.rs wires cursor_worker_stub.rs. The shipped config documents registering a Cursor private worker, auto_start false, opt-in any_repo, an account gate and refusal under a selected sandbox profile. It also says successful startup opens a clone-pool door for git URLs outside worker_dirs, in all four inspected guides. Requirements values for this mode are accepted but not enforceable pins.
- **Receipt:** https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell/src/leader/cursor_worker_stub.rs#L1-L24, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell/src/leader/mod.rs#L54-L55, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.45-linux-x86_64?generation=1790661872193104, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/README.md#L31-L35
- **Half:** both | **Confidence:** high on packaging and documentation; no worker execution

**What changed.** The shipped artifacts expose a packaging/source discrepancy and a documented execution-backend capability for Cursor Cloud Agents. Private Cursor and Grove paths are absent from public history. Source-location strings do not prove every path is reachable. The probes do not establish when this capability was introduced or that no code changed during the window.

**Operator consequence.** Leave worker startup off on credential-bearing hosts until its authority is understood. Leaving any_repo off alone does not establish a repository allowlist because of the documented clone-pool door. Verify both doors and actual command confinement before enabling the worker. Public permission crates are readable, but they are not a complete account of the installed binary.

## 5. Stable 1.0.52 carries corrections for approval scope and deceptive permission cards

- **Date:** 2026-10-02..2026-10-12 (build-note dates and current stable availability)
- **Channel:** `tagged-release` (1.0.48 and 1.0.49 changes in cumulative 1.0.50 notes; 1.0.51 changes in stable 1.0.52 notes)
- **Ancestry evidence:** 1.0.48 notes: WebSearch/WebFetch ask rules prompt instead of running. 1.0.49: Allow once is limited to the next shell command rather than the session; hook prompts appear in every approval mode; web search, fetch and image generation respect prompt_policy and rules. 1.0.51: MCP cards cannot display fake option rows; typing/arrows/Enter and send-now no longer approve actions or enable always-approve; /new inherits its own tab setting; background subagents honor saved approvals; auto mode asks before unclassified deletes; TUI hooks/tools cannot read or write the interactive terminal; disabling bypass restores prompts across open sessions. The 1.0.52 guide, absent this wording in 1.0.50, scopes Allow all edits this session to the session folder.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.48.external.md?generation=1790903532775974, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.49.external.md?generation=1790966793575972, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
- **Half:** defect | **Confidence:** high on notes and documentation; fixes not exercised

**What changed.** The vendor documents grants wider than the approval UI advertised and fixes available by stable 1.0.52. A shell Allow once had applied to the session; MCP calls could draw fake option rows; unrelated keystrokes could approve calls; TUI-launched hooks and tools could reach the terminal used for approvals. These notes establish reported defects and fixes, not that any particular server exploited a user.

**Operator consequence.** Run 1.0.52. Review pre-1.0.49 shell Allow once decisions as potentially session-wide grants, and inspect calls approved through affected MCP cards. Re-test the cards and approval modes your policy relies on after upgrading. An upgrade repairs the documented mechanism; it cannot reconstruct a prior user decision.

## 6. Deny-rule fixes cover alternate paths, while strict still reads workspace secrets

- **Date:** 2026-09-30..2026-10-11
- **Channel:** `tagged-release` (changes documented in 1.0.46, 1.0.50, 1.0.51 and 1.0.52, available by stable 1.0.52)
- **Ancestry evidence:** Notes cover symlinked cwd relative rules (1.0.46); Grep Read denies with ./ and native tool names such as run_terminal_command/Shell (1.0.50); delete rules matching shell rm and Bash(rm ...) rules across .. and symlinked cwd (1.0.51); Read denies on mentions/images, Auto redirects with wildcard/variable paths and out-of-root startup instruction files (1.0.52). The shipped guide limits its symlink statement to project startup loading; home rules and extra_rule_dirs differ. Folder trust still gates project permission rules, startup instructions and skills; headless requires --trust or a prior grant. Claude-style settings can load, but the Claude bypass lock is advisory to Grok; Grok locks bypass through requirements.toml. Strict permits CWD, system-path and Grok-home reads; custom deny lists are the documented specific-file boundary.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.46.external.md?generation=1790815986081588, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-permission-rules/src/policy/path_match.rs#L8-L73, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/18-sandbox.md#L26-L61, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
- **Half:** defect | **Confidence:** high on notes and shipped guide; only the cwd implementation read

**What changed.** The notes describe separate gaps through symlinked cwd, .., dedicated delete tools, Grep, mentions and Auto redirects. Stable 1.0.52 includes the documented corrections and skips startup project instructions resolving outside the repository. Folder-trust gating holds as documentation, without runtime certification. Strict does not convert a Read deny on an in-repository secret into kernel denial.

**Operator consequence.** Upgrade to 1.0.52 and re-test sensitive denies through each affected route. Use strict to narrow reads outside the workspace, and a custom sandbox deny list for specific sensitive files, including secrets inside the workspace. Add --trust only to controlled CI repositories. Inspect the Grok requirements setting rather than assuming an imported Claude bypass lock applies.

## 7. Invalid policy now has distinct startup errors, skipped entries and retained rules

- **Date:** 2026-10-06..2026-10-12 (notes; requirements behavior documented by 1.0.50)
- **Channel:** `tagged-release` (1.0.50 and 1.0.52); `preview-or-beta` (disabled-hooks-file fix in enterprise/non-stable 1.0.53)
- **Ancestry evidence:** 1.0.50 notes preserve valid entries despite bad rule/managed keys and enforce requirements pins for title_refresh=false and use_leader=false against environment/flag overrides. 1.0.52 notes load permission rules alongside compact lists, stop startup for invalid shell_environment_policy and show unrecognized skipped keys in grok inspect. Unreadable/unparseable requirements stop startup in the 1.0.50/1.0.52 guides; the 1.0.46 guide lacks this, and 1.0.47 to 1.0.49 guides were not inspected. A wrong-type managed deny/ask list or non-string member suppresses that file's allow list; a rule that merely fails to parse is skipped alone. An edited signed user requirements file still downgrades enforced hooks without fail_closed=true. The 1.0.53 note keeps disabled hooks disabled if their state file is unreadable.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.53.external.md?generation=1791827231375569, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.46-linux-x86_64?generation=1790805950398756, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.50-linux-x86_64?generation=1791324290710388, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/10-hooks.md#L234-L240
- **Half:** defect | **Confidence:** high on notes and shipped documentation; implementation not exercised

**What changed.** Some invalid policy now stops startup; other invalid entries are skipped while valid entries remain. The requirements-file startup refusal is documented by 1.0.50, absent from the inspected 1.0.46 guide, with its exact implementation debut unproven. Signed-file edits and parse failures have different consequences; the prior blanket fail-closed account was too broad.

**Operator consequence.** Use stable 1.0.52 or the separately tested enterprise channel, run grok inspect and read skipped entries. Keep fail_closed=true for signed requirements. Exercise wrong types, malformed individual rules, unreadable files and environment-table errors independently; a typo does not have one universal policy result.

## 8. Generation-pinned per-version notes are the fuller upgrade record

- **Date:** 2026-10-13 researcher observation; live-page corroboration 2026-10-14, exact historical page unrecovered
- **Channel:** `docs-only` (moving web page) and versioned notes for shipped builds
- **Ancestry evidence:** The source fetcher points /release-notes at x.ai/cli/changelogs/<version>.external.md. Public in-tree notes stop at 1.0.45. The researcher reported the web page reaching 1.0.52 on October 13; its exact state was not independently recovered. A live read on October 14 corroborates omissions of MCP spoofing, TUI terminal access, path bypasses and environment-policy details, and the shortened 1.0.49 Allow once line. Equal object timeCreated/updated does not prove names immutable; use the recorded generations.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.41.external.md?generation=1790112725279394, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell-base/src/util/changelog.rs#L1-L13, https://x.ai/changelog/build
- **Half:** defect | **Confidence:** high for versioned notes and fetcher; historical web-page state unverified

**What changed.** The per-version external Markdown is the fuller readable record for current builds. The old instruction to read in-tree notes no longer reaches stable 1.0.52. The live page read on 2026-10-14 corroborates the reported omissions; its exact 2026-10-13 state was not independently recovered. That later observation does not establish a new in-window catch-up event.

**Operator consequence.** Read each versioned note between your installed version and the target, including cumulative blocks, or use /release-notes. Record generation pins for historical comparisons. Do not use the curated web page alone for security triage.

## 9. The 1.0.52 guide corrects imported-hook compatibility and documents fail-open traps

- **Date:** 2026-10-11 (1.0.52 documentation; selected notes from 2026-09-26 and 2026-10-09)
- **Channel:** `tagged-release` (shipped 1.0.50/1.0.52 guides and versioned notes)
- **Ancestry evidence:** The 1.0.52 guide corrects SessionStart sources to new/load and explicitly disclaims native Cursor reply compatibility; startup/resume/clear/compact do not match, Cursor-format entries do not run and native replies are not read. Older documentation does not prove historical execution. Exact plain-name/pipe-list matching already exists in the pre-window matcher; newer docs add precision and broader lists. The 1.0.52 guide documents missing root scripts in package hooks failing open even for deny, PATH fallback ignoring relative entries, managed-only re-read at load, invalid updatedInput and oversized gate replies denying. Notes add fresh-session plugin hooks (1.0.42), PATH handling (1.0.51) and subfolder project hooks (1.0.52). Crash, timeout and malformed-output fail-open wording persists.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.50-linux-x86_64?generation=1791324290710388, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.42.external.md?generation=1790446548796174, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875, https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-hooks/src/matcher.rs#L22-L70, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-hooks/src/matcher.rs#L22-L70, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L430
- **Half:** both | **Confidence:** high on documentation and matcher code; no imported-hook execution

**What changed.** The stable guide changes the compatibility promise, rather than proving a newly introduced SessionStart regression or historical ineffective Cursor execution. It now explicitly names new/load and rejects native Cursor reply compatibility. The package-root path trap is documented at 1.0.52; its first affected version is unknown. General fail-open behavior has specific exceptions for oversized gate replies and invalid input rewrites.

**Operator consequence.** Re-test migrated hooks on 1.0.52: translate SessionStart matchers, convert Cursor entries to Grok-supported matcher groups and point package hooks at scripts that exist. Review package/subfolder hook sources. Make reachable script error paths return explicit deny, while recognizing that a missing script or failed request cannot return one. Do not use a fallible hook as the only boundary.

## 10. The 1.0.52 sandbox guide scopes hook-folder protection and leaves failure behavior conflicted

- **Date:** 2026-10-11 (documented in 1.0.52, absent from inspected 1.0.50 guide)
- **Channel:** `tagged-release` (stable artifact documentation); default profile off
- **Ancestry evidence:** The guide names workspace/read-only/strict and custom derivatives for direct global config/trust/hook write protection. Project .claude/.grok/.cursor folders in the workspace and ancestors through the git root are protected; descendant package folders and worktree-subagent copies are excluded. Outside a repository only the workspace's own folders are covered. Devbox is explicitly excluded. Profiles requiring direct write protection refuse startup when it cannot be applied, including unverified Linux read-only mounts. A generic platform section still says warn-and-continue, so broader failure behavior is internally conflicted. Child-network blocking is Linux-only. Enforcement and earlier exploit behavior were not tested.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.50-linux-x86_64?generation=1791324290710388, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/18-sandbox.md#L26-L61
- **Half:** defect | **Confidence:** high on shipped documentation; runtime enforcement unresolved

**What changed.** The hook-folder restriction is documented in 1.0.52, absent from the inspected 1.0.50 guide; these receipts do not prove its exact first implementation or a prior exploit. The prior profile's assertion that every sandbox protects Grok config must be narrowed to the named bases and derivatives, excluding devbox. The specific fail-closed requirement must survive the generic warn-and-continue conflict.

**Operator consequence.** Select a protected base deliberately and inspect startup enforcement. Check descendant package hook folders after sandboxed runs. Use a custom deny list for sensitive files. Do not rely on a blanket fail-open or fail-closed statement until implementation or a controlled runtime failure probe resolves the conflicting guide passages; macOS child networking remains outside the documented network block.

## 11. Worktree and file-loss fixes are stable; the wrong-checkout fork fix remains non-stable

- **Date:** 2026-10-06..2026-10-12
- **Channel:** `tagged-release` (1.0.50 and stable 1.0.52); `preview-or-beta` (available non-stable 1.0.54)
- **Ancestry evidence:** 1.0.50 notes: worktree rm without -f refuses in-use/unsaved trees, stops deleting unrelated names, Discard affects selected files, failed writes retain old contents and -w retains uncommitted changes. 1.0.51: cancel/edit-resend no longer revert workspace files. 1.0.52: rm rejects repositories/.git/non-owned directories and live-session worktrees; shell commands stop on quit/signal. 1.0.54: -w -r and /fork into a worktree run shell commands there instead of the original checkout. Export/copy overwrite refusal is a separate miss, section 18.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.54.external.md?generation=1791844061749505
- **Half:** defect | **Confidence:** high on versioned notes; no worktree execution

**What changed.** The vendor documents multiple ways parallel-worktree operations could delete or revert work and corrections available in stable 1.0.52. The wrong-checkout fork correction is announced only in non-stable 1.0.54 at the cutoff. Worktree isolation and correct command working-directory selection are separate obligations.

**Operator consequence.** Use 1.0.52 for the stable deletion/write fixes. Avoid -w -r or /fork into worktrees containing valuable uncommitted work until the fork fix reaches stable, or confirm pwd in the fork before writes. Removal scripts must handle refusal on in-use/unsaved trees. A larger non-stable version is not an automatic upgrade recommendation.

## 12. Headless goals and ACP gain capability while sharing and memory controls shrink

- **Date:** 2026-09-26..2026-10-12
- **Channel:** `tagged-release` (1.0.42/1.0.44/1.0.45/1.0.51 changes available by stable 1.0.52); `preview-or-beta` (interactive tool flags in enterprise/non-stable 1.0.53)
- **Ancestry evidence:** 1.0.51 removes /share and CLI/SDK sharing, removes memory rollout/file_writes_enabled knobs, adds persisted folder-domain WebFetch grants, model-hidden request-form values, headless waiting for goals with background-wait-timeout, ACP session listing and the headless allowed-tools alias. 1.0.45 adds per-request MCP token-file reads and custom-agent selection in spawn_subagent; 1.0.44 adds model context-window choice; 1.0.42 adds worktree create and Auto-review labeling. The 1.0.52 guide keeps tools/disallowed-tools headless-only with a TUI warning; 1.0.53 announces interactive application. The ACP guide is byte-identical between 1.0.45 and 1.0.52 and retains Grok permission handling. Auto allow rules remain an open classifier-assisted set, not a closed allowlist. The official overview lists Grok Bot separately; its API-model promotion does not establish a CLI model change.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.42.external.md?generation=1790446548796174, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.44.external.md?generation=1790656650477799, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.45.external.md?generation=1790661788238032, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.53.external.md?generation=1791827231375569, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/15-agent-mode.md#L9, https://docs.x.ai/build/overview
- **Half:** capability | **Confidence:** high on notes and shipped guides; no goal or secret-handling execution

**What changed.** Goal-driven headless runs can now wait for background work to finish, ACP clients can list sessions and MCP credentials can rotate via token files. Per-folder web grants and request forms are documented capability additions, not demonstrations that secrets cannot escape elsewhere. Sharing is removed and memory loses rollout knobs. Interactive tool filters remain ahead of stable.

**Operator consequence.** Adapt scripts that used /share. Set background-wait-timeout for headless goals in CI and review persisted domain grants. Stable 1.0.52 TUI users must use deny rules rather than tools/disallowed-tools. ACP wrappers, including Omnigent, do not replace Grok's permission pipeline. Keep Grok Bot, chat and API-model claims separate from the CLI.

## 13. Late on October 13, build 1.0.56 appeared and WinGet added stable 1.0.52

- **Date:** 2026-10-13
- **Channel:** `tagged-release` (WinGet stable 1.0.52 manifest); `preview-or-beta` (available non-stable 1.0.56, pointer promotion unobserved)
- **Ancestry evidence:** Generation 1791925057041067 identifies Linux 1.0.56, created 2026-10-13T20:57:37.110Z, 190,606,464 bytes, md5 wep5SShYIwOFaP4UF7T3NQ==. Registry time records publication at 21:03:44.026Z. Its generation-pinned note is dated October 13 and says only minor bug fixes. WinGet commit b057f0992015764a607c7e6f9c07eaa1de8a98d0 at 17:56:46Z adds a 1.0.52 manifest with x64/arm64 URLs and SHA256 values. Receipts re-fetched during write-up; no installer run. Historical alpha dist-tags and end-of-day pointer were not recovered.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.56.external.md?generation=1791924973862411, https://storage.googleapis.com/storage/v1/b/grok-build-public-artifacts/o/cli%2Fgrok-1.0.56-linux-x86_64?generation=1791925057041067, https://registry.npmjs.org/@xai-official%2Fgrok, https://github.com/microsoft/winget-pkgs/commit/b057f0992015764a607c7e6f9c07eaa1de8a98d0, https://github.com/microsoft/winget-pkgs/blob/b057f0992015764a607c7e6f9c07eaa1de8a98d0/manifests/x/xAI/GrokBuild/1.0.52/xAI.GrokBuild.installer.yaml
- **Half:** capability | **Confidence:** high on version availability and merged manifest; client-index propagation unverified

**What changed.** The full-day inventory is 16 builds, 1.0.41 through 1.0.56. WinGet no longer stops at 1.0.50 in the repository. Neither a generic minor-fixes note nor non-stable availability establishes a security fix or alpha-pointer value.

**Operator consequence.** Windows users can check for the merged xAI.GrokBuild 1.0.52 package and verify the version their client offers; repository merge is not proof of propagation to every client index. Keep stable 1.0.52 as the recommendation. Do not bring October 14 builds 1.0.57/1.0.58 into this dated posture.

## 14. Parallel tools editing the same file are serialized while unrelated calls remain concurrent

- **Date:** 2026-09-28 (1.0.44 note)
- **Channel:** `tagged-release` (1.0.44 documented change available by stable 1.0.52)
- **Ancestry evidence:** The generation-pinned 1.0.44 cumulative note places same-file serialization under Performance. The exact bullet was re-fetched during write-up. It describes tools within the harness, not coordination among arbitrary external processes.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.44.external.md?generation=1790656650477799
- **Half:** capability | **Confidence:** high on the versioned note; no scheduling probe

**What changed.** The vendor documents sequential execution for parallel tools editing the same file, while unrelated tools stay concurrent. This adds file-conflict coordination without making every operation serial.

**Operator consequence.** Try same-session parallel tool workflows on stable 1.0.52. Keep worktree/process isolation where independently running agents share state; the note does not promise an inter-process lock or cross-harness ownership. Measure conflicts and review cost separately from raw parallelism.

## 15. Plan mode refuses MCP resource downloads and headless runs honor no-subagents

- **Date:** 2026-10-09 (1.0.51 note)
- **Channel:** `tagged-release` (included in stable 1.0.52 notes)
- **Ancestry evidence:** 1.0.51 explicitly refuses FetchMcpResource downloads in plan mode and corrects --no-subagents in headless/-p sessions. Both lines were re-fetched from the generation-pinned note during write-up.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989, https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
- **Half:** defect | **Confidence:** high on versioned notes; no plan-mode or headless probe

**What changed.** Planning and unattended sessions gain documented limits that previously did not hold on these paths: plan mode rejects MCP resource downloads, and headless no-subagents is honored.

**Operator consequence.** Re-test CI commands using --no-subagents and plans that fetch resources on 1.0.52. Move needed downloads to an explicitly authorized execution step. Treat these as specific corrected routes rather than a certification of every plan-mode action.

## 16. Web-search hooks lose the ability to rewrite calls to restrict domains

- **Date:** 2026-10-09 (1.0.51 note)
- **Channel:** `tagged-release` (included in stable 1.0.52 notes)
- **Ancestry evidence:** The 1.0.51 note explicitly removes domain-restricting web-search rewrites; it separately corrects the web_search hook name and query field. The removal was re-fetched during write-up.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
- **Half:** defect | **Confidence:** high on the versioned note

**What changed.** A policy implemented by rewriting web-search domains no longer has that mechanism. The new per-domain WebFetch approval grants are a different tool surface and do not replace it.

**Operator consequence.** Inspect hooks that rewrite search-domain inputs before upgrading. Replace the control with a documented applicable boundary, or disable the search route until one exists. Do not treat a web-fetch grant as a search-domain restriction.

## 17. HTTP MCP JSON-RPC errors no longer cause repeated tool execution

- **Date:** 2026-10-11 (1.0.52 note)
- **Channel:** `tagged-release` (stable 1.0.52)
- **Ancestry evidence:** The generation-pinned 1.0.52 note says HTTP MCP tools returning JSON-RPC errors execute only once. That line was independently re-fetched during write-up; no MCP server or retry path was executed.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
- **Half:** defect | **Confidence:** high on the versioned note

**What changed.** The vendor documents a duplicate-execution correction on the HTTP MCP error path. A reported error in an older affected build was not assurance that a side-effecting tool ran zero or one times.

**Operator consequence.** Upgrade side-effecting HTTP MCP workflows to 1.0.52 and test an error-after-action case. Keep service-side idempotency keys and an action ledger where repeats are costly; this narrow client correction does not establish exactly-once delivery across disconnects or other retries.

## 18. Export and copy refuse destinations that already exist

- **Date:** 2026-10-11 (1.0.52 note)
- **Channel:** `tagged-release` (stable 1.0.52)
- **Ancestry evidence:** The 1.0.52 note explicitly describes refusal with a clear message instead of overwriting an existing file; re-fetched during write-up. This is separate from worktree removals and failed writes.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
- **Half:** defect | **Confidence:** high on the versioned note

**What changed.** Export/copy commands stop replacing an existing destination. The correction protects prior files but changes workflows that intentionally reused names.

**Operator consequence.** Use 1.0.52 and handle destination refusal in export automation. Choose a new destination or deliberately resolve the existing file rather than assuming overwrite is part of the command.

## 19. Local HTTP approval hooks work, but refused requests still fail open

- **Date:** 2026-10-11 (1.0.52 note and shipped-guide documentation)
- **Channel:** `tagged-release` (stable 1.0.52)
- **Ancestry evidence:** The note announces localhost HTTP hooks and invalid-URL reporting at load. The hash-checked 1.0.52 Hooks guide was independently read during write-up: HTTPS or loopback HTTP, non-public ranges refused except loopback, per-request expansion/DNS checks, no redirects, loopback bypasses proxies. A fake-ip proxy resolving names into 198.18.0.0/15 causes refusals even with HTTPS_PROXY; managed-policy requests still fail open. Some handler load errors are only logged on the shell route, and Linux network-restricted profiles refuse non-managed plain HTTP. These are documented constraints, not dated vulnerability introductions.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
- **Half:** both | **Confidence:** high on note and shipped guide; no HTTP hook execution

**What changed.** Local approval services become a documented usable integration. URL errors are surfaced, but a request refused at execution remains a hook error that allows the call. Proxy/DNS configuration can therefore defeat the intended policy without an affirmative deny.

**Operator consequence.** Try loopback approval services with an independent boundary for consequential actions. Test invalid URLs, DNS failures, proxy modes, timeouts and denied replies on the actual route. Verify that failure stops the action rather than trusting a loaded managed-policy hook.

## 20. Worktree commands gain Jujutsu compatibility

- **Date:** 2026-10-09 (1.0.51 note)
- **Channel:** `tagged-release` (included in stable 1.0.52 notes)
- **Ancestry evidence:** The generation-pinned 1.0.51 note says grok worktree commands work correctly inside Jujutsu repositories; independently re-fetched during write-up. The note does not enumerate every Jujutsu configuration.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
- **Half:** capability | **Confidence:** high on versioned notes; no Jujutsu execution

**What changed.** The supported worktree command workflow expands beyond the Git-only case described in earlier posture. The receipt is a compatibility announcement, not a tested guarantee for all repository layouts.

**Operator consequence.** Try bounded worktree creation/listing/removal on a disposable Jujutsu repository with 1.0.52 before using valuable working state. Keep the separately documented non-stable fork-working-directory fix in view.

## 21. Strict documents a daemon storage write allowance in addition to workspace and temporary paths

- **Date:** 2026-10-11 (documented by the 1.0.52 artifact, absent from inspected 1.0.50 guide)
- **Channel:** `tagged-release` (stable artifact documentation)
- **Ancestry evidence:** The independently MD5-checked 1.0.52 Sandbox Mode guide allows ~/.grok/daemon/run/strict for sockets, log and session storage only when the daemon backend runs the session; a custom profile gets ~/.grok/daemon/run/<name>. The inspected 1.0.50 binary lacks the allowance. Hashes and byte offsets below reproduce the receipt; no sandbox ran.
- **Receipt:** https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.50-linux-x86_64?generation=1791324290710388, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
- **Half:** capability | **Confidence:** high on guide delta; first implementation version unproven

**What changed.** The documented strict write surface includes a named daemon storage directory in sessions using that backend. This is a current documentation change, not proof that the implementation first gained it in 1.0.52.

**Operator consequence.** Include the daemon directory when auditing writable session state, alongside CWD, ~/.grok/sessions and temporary directories. Inspect custom profiles for their named run directory and preserve the direct global config/hook protections; strict does not mean workspace-only writes.

## Prior claims re-checked

- folder-trust-gates-project-rules: holds as documented at 1.0.52, not runtime-tested; headless needs trust or a prior grant. Section 6.
- channel-pinnable-no-checksum: changed. Named install is not an update-policy pin; npm integrity and late-day WinGet 1.0.52 qualify no-checksum. Sections 1, 2 and 13.
- public-changelog-lags: changed. External versioned notes are the fuller current record; exact October 13 webpage state is unrecovered. Section 8.
- sandbox-write-denies-own-config: changed in scope. Workspace/read-only/strict and derivatives, excluding devbox; direct-protection startup refusal and generic warn-and-continue conflict remain. Sections 10 and 21.
- enterprise-signed-requirements: edited signed files still downgrade hooks without fail_closed; requirements parse/read failures now refuse startup as documented by 1.0.50. Enterprise is ahead of stable. Sections 1 and 7.
- hooks-fail-open: holds with oversized-reply and invalid-rewrite deny exceptions. Package script-resolution and HTTP request failures are not denies. Sections 9 and 19.
- headless-auto-unattended: ACP permission handling holds as documentation; headless goal waiting is added. Older auto/headless statements are not recertified by these probes. Sections 12 and 15.
- grok-bot-is-not-grok-build: holds in the official overview; the CLI's Cursor worker is a different integration. Section 12.
- which-channel-is-the-product: the previous retired note's complete-sync/pin explanation is corrected by sections 1 to 4. A build name is not a complete source mapping.
- public-tree-is-a-monorepo-mirror: still a mirror, now confirmed filtered and lagging. Sections 3 and 4.

The old Channel, in-tree-note, sandbox and enterprise-channel paragraphs require replacement. Folder trust and qualified hook fail-open remain useful. The old unattended paragraph's broad examples are dropped rather than treated as current runtime proof.

## Carry-forward answers

- GitSpawn remains unresolved. The original report tested Grok 1.0.13 on 2026-09-01 using a malicious repository directory delivered with .git/config, causing background Git to run attacker commands with user privileges. Ordinary cloning does not copy that local config. No named fix was found through 1.0.56; limited public fast-worktree probe hardening and binary clone strings do not establish current safety or exposure. Receipts: https://www.manifold.security/blog/ai-coding-agents-git-hijack and https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-fast-worktree/src/git/safety.rs#L310-L324. A shipped fix covering background invocations, or a controlled 1.0.52 probe of that delivery path, would settle it.
- Script checksum verification remains open; npm and WinGet offer package/artifact integrity. Sections 1, 2 and 13.
- Security-note visibility is partly improved: versioned external notes describe permission defects, without advisories found in the bounded searches. The web page is a subset; no note establishes the hub gate's released state. Section 8 and Leads not promoted.
- Enterprise versus stable is settled at the dated cutoff: 1.0.53 versus 1.0.52. End-of-day alpha is not. Sections 1 and 13.
- Folder trust and sandbox enforcement remain untested; shipped documentation and a public implementation snapshot do not certify the installed version. Sections 6 and 10.
- Historical webpage state is not settled: the October 14 read corroborates the researcher's account, not the exact October 13 page.

## Operator questions settled

- Install stable 1.0.52; record the actual version and updater settings. Windows index availability requires a client check. Enterprise is 1.0.53; 1.0.56 is an available non-stable build.
- A public SHA cannot describe the complete stable binary: 11 later builds lack a sync, the mirror omits private modules, and crate labels are not release ancestry.
- ACP uses Grok's own permission pipeline. A separate documented Cursor private-worker path needs its own authority review, including the clone-pool door.
- The last public sync is 14 days old at the posture date. A gap in public history proves nothing about shipped behavior by itself.
- The overview's API-model section does not establish a CLI model upgrade; model catalog delivery is separate. Grok chat and Grok Bot remain distinct.

## Leads not promoted

- Writing lane (`feeds/writing.json`, 161 items from 15 feeds): no item mentions Grok, xAI, SpaceXAI or Grok Build (regex over title, URL, summary and source). No lead.
- X lane: down this run (signed out); no social capture.
- https://www.havoptic.com/releases/grok-build/2026/10 (third-party tracker): lists 1.0.47 to 1.0.50 in October, consistent with the vendor note files. Not a receipt.
- Reports at https://aiweekly.co/node/9806 and https://pasqualepillitteri.it/de/news/10624/grok-bot-xai-autonome-agenten say SpaceXAI and Cursor ship Grok Bot jointly and are mid-merger. Not verified, and Grok Bot is out of scope. The only Cursor tie in the primary record for this CLI is the Cursor worker (section 4).
- `sports_search`: the 1.0.41 note file announces this tool, but it appears in neither the public tree nor the 1.0.45 or 1.0.52 binary strings. It is likely a server-side tool. Not verified.
- In-tree `changelogs/1.0.41.md` lacks two lines the note file has (`sports_search`, and the long reasoning reminder documented in the 1.0.45 config reference). Folded into section 8.
- Sync 07e35a3dfeed lists a change that keeps a runtime-loaded API key out of the process environment: ACP `set_api_key` now stores the key in-process instead of setting `XAI_API_KEY` in the process environment ([auth_method.rs](https://github.com/xai-org/grok-build/blob/07e35a3dfeed2f200d319ef6c893b5ea286d9a51/crates/codegen/xai-grok-login/src/auth_method.rs)). The stated reason is a thread-safety race; any reduction in child-process exposure is inference. Not promoted.
- Sync 97f190f644ae (egress hold-and-ask with per-call credentials): the new `xai-grok-egress-proxy` crate's own header says starting it does not confine child networking. It is not documented in the 1.0.52 guide. Not promoted.
- Remote Control and Agent Host (sync change lists from 2026-09-22 to 2026-09-29): the 1.0.52 binary reports Remote Control as off, the agent-host crates are not public (section 4), and neither is documented. Not promoted.
- 1.0.44 note on macOS sandboxing through Seatbelt (`sandbox-exec`): the 1.0.38 guide already names Seatbelt for the TUI sandbox, so this likely concerns the daemon's command sandbox. Not promoted.
- Branding: the changelog page title and the docs say SpaceXSI; the README says SpaceXAI. Naming only.
- The web changelog lacks 1.0.26 to 1.0.29 (pre-window). Not investigated.

- Refuted original section 9: the September 22 public mirror disables the daemon hub gate; release status is unconfirmed. ToolApprovalGate::Off bypasses approve_hub_call in that source, but build timestamps do not establish shipped ancestry. Classification: main-unreleased / shipping unconfirmed. Workspace exposure is documented as opt-in/account-gated. Verify actual daemon approval and sandbox behavior before exposing it; do not assert stable 1.0.52 or Grok Desktop runs unprompted. Receipts: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-workspace/src/permission/hub_gate.rs#L61-L96, https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-workspace/src/hub.rs#L495-L516, https://github.com/xai-org/grok-build/commit/07e35a3dfeed2f200d319ef6c893b5ea286d9a51, https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964.

## Surfaces checked and reproducibility

The primary researcher read identity, tags/releases/advisories, all four public syncs and SOURCE_REV/crate labels; pinned updater/installer/permission/hooks/workspace code; channel pointers and GCS metadata; versioned notes; install scripts and archive captures; registry and WinGet manifests; the official overview; compiled guides and source-location strings. The crosscheck independently re-read every numbered receipt and reproduced the source-path counts and binary hashes. Its detailed inventories remain in verify/grok-build.crosscheck.md.

Write-up receipt checks re-fetched generation-pinned 1.0.44, 1.0.51, 1.0.52 and 1.0.56 notes; 1.0.56 metadata and registry record; the October 13 WinGet commit/manifest; pinned stable/enterprise objects. Binary 1.0.50 and 1.0.52 were read in memory, MD5 checked, never saved or executed. Independently reproduced SHA256: 1.0.50 c80de0155706ff2d995623887b102f2d0abd2c62b2643dea3a0cebaf7dd724d5; 1.0.52 1668414b047e1050a96d25fe17dfc3efe63190fbf66d8cc1c3de8633caf50d11. The HTTP Hooks and Sandbox Mode passages were read for misses 7 and 9.

Reproduce documentation by finding UTF-8 headings through the next numbered guide marker in the generation-pinned binary. Zero-based 1.0.52 offsets from the independent crosscheck: Hooks 2172942, Sandbox Mode 2412062, Permissions and safety 2467622, cursor_worker config heading 2573107. Source paths use crates/[A-Za-z0-9_/.-]+\.rs, compared with the public tree and complete public history. Embedded text establishes shipped documentation, not command reachability or kernel behavior.

Bounded advisory searches returned no published repository advisories, no npm advisory for @xai-official/grok and no NVD exact grok build result. No new attributable in-window CVE/GHSA was established. These negatives do not prove safety or exclude another identifier. Source license has no in-window change; npm 1.0.40 through 1.0.56 declares Apache-2.0, not complete source/binary correspondence. No social-derived product claim was used.

## Not reached

No runtime rule, hook, sandbox, trust, Cursor-worker, worktree or MCP probe. No enforcing-source audit tied to 1.0.52. No complete source/binary correspondence, shipped hub-gate value, historical alpha assignments, independently recovered earlier stable pointer transitions, exact October 13 webpage state, or WinGet client-index propagation. GitSpawn's background Git path remains unaudited. Docs changes do not prove first implementation dates. No October 14 build enters the profile.

## Crosscheck applied

Applied all nine CORRECTED dispositions and retained the three VERIFIED items with their note/documentation limits. Deleted REFUTED original numbered section 9; its public-code observation is a shipping-unconfirmed lead. No numbered item was UNVERIFIABLE. Added all nine verified misses as sections 13 to 21 after receipt checks. Renumbered continuously, corrected the full-day ledger, qualified stable reconstruction and object identity, and removed unsupported pin lifetime, shipped hub-gate, historical-hook and blanket sandbox claims. Profile posture remains 2026-10-13; October 14 corroboration is explicitly bounded.
