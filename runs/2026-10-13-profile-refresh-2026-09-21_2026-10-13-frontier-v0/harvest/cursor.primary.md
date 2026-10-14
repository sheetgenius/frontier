---
schema_version: bitter.frontier_harvest.v0
provider: cursor
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/cursor.yml
channels_present: [tagged-release, preview-or-beta, docs-only]
window_volume: 3 main-changelog entries; IDE and Agents Window through 3.24.18; 5 observed default agent-CLI advances after the baseline; SDK 1.0.32 through 1.0.37 (5 releases); iOS 1.13.0; Origin CLI October 13 artifacts; 25 material sections
lane: primary sources, profile-refresh researcher, crosscheck applied
---

# Harvest: cursor (primary sources)

Corrected against verify/cursor.crosscheck.md, independently checked on 2026-10-14. The posture remains dated 2026-10-13. Later installer observations are identified as later observations, never backdated into the window. The original researcher's CLI pointer checks were at 08:55Z and 09:13Z on October 13; neither establishes the pointer at the end of that day.

Closed source. The tracker tree at commit 654b1b4775ca67aef473bd31a14c8c04a1abde2d contains .github, README.md and SECURITY.md, not the product. The sdk-bridge repository contains protocol definitions and releases, not the full agent implementation. Version-addressed CLI bundles were read as data; no downloaded code was executed. A code comparison establishes only the inspected path. A dated official release note is evidence of the vendor's stated release behavior, not a runtime test. Moving documentation establishes a reported posture, not an independently pinned historical rollout.

The corrected findings retain both capability and failure evidence. No matching public advisory or CVE was found in the sources searched; that is a bounded search result. The token-efficiency post reports vendor measurements over preceding months, not newly measured Frontier results.

## Install today

This is the dated install snapshot, with verification limits.

| Surface | Version or pointer | Receipt and qualification |
| --- | --- | --- |
| IDE and Agents Window | 3.24.18, commit be4c9e5350d77747b42cd467cbd3370a753d464b | Vendor DMG https://downloads.cursor.com/production/be4c9e5350d77747b42cd467cbd3370a753d464b/darwin/arm64/Cursor-darwin-arm64.dmg, HTTP 200, Last-Modified 2026-10-13T19:33:03Z; Homebrew commit https://github.com/Homebrew/homebrew-cask/commit/1631cd110809dda09cbd4054146f5ca488037879 at 21:42:53Z corroborates availability October 13. Stable and latest vendor API pointers were independently observed October 14. Install from Cursor's download page. |
| Agent CLI default, recorded October 13 morning | 2026.10.01-e373342 | Original installer observation at 08:55Z; pinned Homebrew cask and vendor artifact corroborate the version, not an all-day pointer guarantee. Vendor install command: curl https://cursor.com/install -fsS followed by bash. Retain version-addressed bytes and disable auto-updates to freeze the version. No vendor agent-CLI digest was located; inspected installer and updater do not verify one. |
| Agent CLI lab, recorded October 13 morning | 2026.10.12-d47ca18 | Original lab installer observation at 09:13Z; versioned artifact Last-Modified 2026-10-12T22:43:27Z. This is the researcher's nightly snapshot, not proof of lab-only membership through the close. |
| SDK | npm @cursor/sdk and PyPI cursor-sdk 1.0.37; bridge v1.0.37 | npm publication 2026-10-07T20:13:46Z, PyPI 20:05:32Z, bridge 20:07:14Z. npm latest resolves to 1.0.37; next remains on the old, still resolvable 1.0.27-beta.0. Notes stop at 1.0.35; the 1.0.37 declarations add typed computerUse events relative to 1.0.35. |
| Cursor for iOS | 1.13.0 | Apple lookup https://itunes.apple.com/lookup?id=6767085653&country=us reports currentVersionReleaseDate 2026-10-06T21:12:09Z; mobile notes stop at 1.12.0. Store metadata was independently read October 14, not archived. |
| Origin CLI | stable artifact 2026.10.13-14-06-43-ea1dfe5; latest artifact 2026.10.13-04-14-45-7ea7628 | Official installer https://downloads.cursor.com/origin/install.sh defaults to stable and verifies SHA256 before extraction. Both artifacts are dated October 13 and their hashes match the installer; the channel pointers were independently observed October 14. Latest is not chronologically newer here. |

The agent CLI is distinct from Origin CLI. The agent CLI's undocumented static channel disables both background and manual updates in the inspected default bundle; downloading a versioned URL alone does not disable its updater. CLI Read Access has a false client fallback for its server-controlled gate, not proof that every account has it off. The unchanged v2026.08.11 note still describes /goal as gated. Projects Enterprise defaults remain ambiguous in the notes. Public source ancestry for the IDE and agent CLI is unavailable.

## Release ledger

Artifact Last-Modified values are object timestamps, not proof of first default-channel selection. Homebrew history describes Homebrew observations. SDK registry and GitHub release publication times are separately identified.

| Version | Surface | Artifact or publication UTC | Channel evidence |
| --- | --- | --- | --- |
| 2026.09.18-9a7762b | Agent CLI baseline | 2026-09-18T22:42:21Z | Recorded baseline default |
| 2026.09.15-d2fe57e | Agent CLI, backfilled note | 2026-09-16T00:04:40Z | Pre-window artifact; note backfill is a separate event |
| 2026.09.23-86fc751 | Agent CLI | 2026-09-23T19:51:56Z | Observed default advance 1 |
| 2026.09.26-dd393fe | Agent CLI | 2026-09-26T01:39:10Z | Observed default advance 2 |
| 2026.09.28-64d2043 | Agent CLI | 2026-09-28T19:17:47Z | Observed default advance 3; note-to-build mapping not established |
| 2026.10.01-14929f9 | Agent CLI | 2026-10-01T05:37:48Z | Observed default advance 4 |
| 2026.10.01-e373342 | Agent CLI | 2026-10-01T19:22:58Z | Observed default advance 5; October 13 morning snapshot |
| 2026.10.12-d47ca18 | Agent CLI | 2026-10-12T22:43:27Z | October 13 morning lab snapshot |
| 3.21.18 through 3.24.12 | IDE and Agents Window | 2026-09-22 through 2026-10-09 | Vendor version-addressed builds; 3.22, 3.23 and 3.24 notes |
| 3.24.12 DMG | IDE | 2026-10-09T22:13:07Z | ZIP timestamp is 22:13:02Z; do not interchange formats |
| 3.24.18 DMG | IDE | 2026-10-13T19:33:03Z | October 13 cask corroboration; stable API observed October 14 |
| SDK 1.0.32 | npm / PyPI / bridge | 2026-09-22T15:59:03Z / 18:50:25Z / 18:52:04Z | Stable; bridge 1 ahead, 0 behind v1.0.31 |
| SDK 1.0.34 | same | 2026-09-29T22:06:02Z / 23:22:24Z / 23:24:01Z | Stable; bridge 1 ahead, 0 behind v1.0.32 |
| SDK 1.0.35 | same | 2026-10-01T01:25:07Z / 01:17:00Z / 01:18:33Z | Stable; bridge 1 ahead, 0 behind v1.0.34 |
| SDK 1.0.36 | same | 2026-10-05T16:38:15Z / 16:29:10Z / 16:31:35Z | Stable; bridge 1 ahead, 0 behind v1.0.35 |
| SDK 1.0.37 | same | 2026-10-07T20:13:46Z / 20:05:32Z / 20:07:14Z | Stable; bridge 1 ahead, 0 behind v1.0.36 |
| iOS 1.13.0 | App Store | 2026-10-06T21:12:09Z | Apple's release metadata |
| Origin stable / latest artifacts | Origin CLI | 2026-10-13T14:12:28Z / 04:17:47Z | Pinned artifacts; installer pointers observed October 14 |

SDK 1.0.33 is absent from the checked npm and PyPI lists. The bridge baseline-to-v1.0.37 diff changes only proto/manifest.json; main resolved to 5e70039b2402f8c94a870fbe8f9e7ecba736fca0, identical to v1.0.37, at verification. This establishes protocol-repository ancestry, not executable bridge behavior. Current October 5 cloud and Bugbot notes were discovered after the close; their first publication time is unpinned.

## 1. Agent CLI snapshot: freezing the recorded build also requires disabling updates

- **Date:** 2026-10-01 (artifact); 2026-10-13 (morning pointer observations)
- **Channel:** tagged-release (recorded default 2026.10.01-e373342); preview-or-beta (recorded lab 2026.10.12-d47ca18); docs-only (v2026.10.08 notes)
- **Ancestry evidence:** Closed product, no public ancestry. Five default advances are corroborated by cask history. e373342 updater modules 3241.index.js and 5697.index.js stream curl into tar without a digest and skip updates on static. The ACP watch title and repository-limit refusal are present in d47ca18, absent in e373342. This does not map the entire October 8 note to a build. Default SHA256 is 629e51de43a0b7fb3b86f5ebc7e579f7df7df941b39f29e82945cde750145afc; lab SHA256 is b6bc844fd2ec1ae99f5f24fa68fa08b0acf14fdb6c7b924916226fd59a55f3e7.
- **Receipt:** https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz, https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz, https://github.com/Homebrew/homebrew-cask/blob/471099ac3a43daa5b83ed76718493dc8255b6b67/Casks/c/cursor-cli.rb, https://cursor.com/docs/cli/changelog#oct-8-2026, https://cursor.com/docs/cli/installation
- **Half:** both | **Confidence:** high

**What changed.** Five observed default advances followed the September 18 baseline. The October 13 morning default was e373342 while the lab pointer named d47ca18. Newer dated notes describe some paths absent from e373342. No vendor agent-CLI digest was located; the inspected installer and updater do not verify one. The default bundle's static channel disables background checks and agent update.

**Operator consequence.** Retain the version-addressed archive, record its digest, set channel to static in ~/.cursor/cli-config.json and compare agent --version to the pin. A versioned download alone does not freeze updates. The inspected lab paths are a reason to test that artifact, not a guarantee that every October 8 fix is present or that it remained nightly-only at the close.

## 2. Remote Control adds phone direction of local agents while two vendor descriptions disagree

- **Date:** 2026-10-06
- **Channel:** docs-only (dated announcement; no client version established for this path)
- **Ancestry evidence:** The announcement says local execution stays local, pairing requires desktop approval, and Remote Control defaults on except Enterprise. The mobile doc instead describes a cloud-loop handoff, per-session opt-in and a Teams/Enterprise admin gate. The older toggle explanation appears in September 21 cloud notes. The moving mobile page was rechecked October 14.
- **Receipt:** https://cursor.com/changelog/remote-control-local-agents, https://cursor.com/docs/cloud-agent/mobile#remote-control, https://cursor.com/docs/release-notes/cloud-agents#sep-21-2026
- **Half:** both | **Confidence:** high

**What changed.** Cursor's October 6 announcement lets the iOS app view and reply to desktop-local agents after pairing approval. It says the new path does not require Cloud Agents and defaults on outside Enterprise. The same-name documentation describes an older cloud-loop flow with different opt-in rules. The texts disagree on loop placement, defaults and the Teams admin gate; client behavior was not probed.

**Operator consequence.** Review paired devices and local run modes. Enterprise admins have a named Remote Control setting; a Teams-wide off switch for the new path is not established. Test whether the documented Self-Hosted switch affects it before treating that switch as a control. Phone pairing expands who can direct local work without proving any new tool containment.

## 3. IDE 3.24 describes Run Everything without a sandbox and classifier-reviewed escape from sandbox restrictions

- **Date:** 2026-10-09 (IDE 3.24 notes); independent archived-to-live doc comparison 2026-09-21..2026-10-14
- **Channel:** tagged-release (IDE 3.24 family); docs-only (current run-mode and classifier documentation)
- **Ancestry evidence:** The 3.24 note describes unsandboxed Run Everything, with an exception for permissions.json that the reference does not explain. The September 21 capture names Haiku or GPT-5.4 Mini; current docs name Gemini 3.5 Flash Lite with Haiku fallback and classifier-reviewed unsandboxed retries. The original researcher read the current posture October 13; the independent documentation interval ends October 14. Both baseline and e373342 CLI bundles already map unrestricted mode to insecure_none.
- **Receipt:** https://cursor.com/docs/release-notes/ide#oct-9-2026, https://web.archive.org/web/20260921222031/https://cursor.com/docs/agent/security/run-modes, https://cursor.com/docs/agent/security/run-modes, https://cursor.com/docs/reference/permissions, https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
- **Half:** both | **Confidence:** high

**What changed.** The IDE 3.24 release note says Run Everything now runs without the sandbox unless permissions.json restricts the mode. It also reports approval cards for matching block instructions and risky deletes. Current docs permit the backend classifier to review a sandbox-refused command for rerun outside the sandbox and to read local files for that review. They name Gemini by default and Haiku fallback, and say Auto-review is not a security boundary.

**Operator consequence.** At the dated close, use IDE 3.24.18 and choose a sandboxed run mode when containment matters. Auto-review can approve an unsandboxed retry without a human, so it does not replace containment. Blocking Haiku can disable Auto-review. Verify the documented exception before relying on permissions.json; no field or runtime test here establishes it.

## 4. Read Access needs a team boundary and control over user extensions

- **Date:** 2026-10-01 (documented IDE 3.23 requirement); 2026-10-13 posture read, corroborated October 14
- **Channel:** tagged-release (IDE setting requires 3.23; CLI plumbing in e373342); docs-only (admin policy semantics)
- **Ancestry evidence:** Documentation defaults Read Access to System. CLI 8134.index.js resolves repository sandbox.json, user sandbox.json, CLI config, then System, conditional on readControlEnabled. The sandbox_read_control_portal gate has a false client fallback, and existed in the baseline. Docs add that admins must disable Read Control User Extensions to ignore member/repository Read Allowlist paths. Read Access does not constrain Run Everything.
- **Receipt:** https://cursor.com/docs/agent/security/run-modes#read-access, https://cursor.com/docs/reference/sandbox, https://cursor.com/docs/release-notes/ide#oct-1-2026, https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
- **Half:** both | **Confidence:** high

**What changed.** The documented IDE setting requires 3.23 and adds a Workspace choice that asks before outside reads. System remains the default, including access to ~/.ssh for sandboxed commands. Repository settings replace a user's readBoundary and additionalReadPaths. Team Workspace policy outranks those choices, but member and repository allowlist extensions remain possible unless the admin disables them. The CLI server gate's false fallback does not establish its rollout to any particular account.

**Operator consequence.** Use team Workspace policy and turn off Read Control User Extensions for an administrator-owned read boundary. Otherwise inspect repository sandbox.json and the effective allowlist. Confirm CLI behavior with a harmless outside-workspace read before depending on the gate. Expect more prompts and manage the allowed paths deliberately; Run Everything bypasses this control.

## 5. Release-note security repairs need surface-specific upgrades and bounded advisory claims

- **Date:** 2026-09-22..2026-10-09
- **Channel:** tagged-release (IDE 3.22 through 3.24 and SDK 1.0.32); docs-only (Cloud Agents service fix)
- **Ancestry evidence:** Vendor notes describe crafted-branch shell injection, forged browser element/screenshot context, skipped Source Control hooks, confirmation-required MCP approvals, crash-data uploads under Privacy Mode, Bitbucket parent-path reads and SDK bridge checkout autoloading. The Windows hook false-success repair is separately recorded in section 15. SDK protocol-tag ancestry and archive checksums do not establish binary autoload behavior. Checked vendor/bridge advisories, npm and pip package advisories, and bounded NVD searches returned no matching in-window public advisory or CVE.
- **Receipt:** https://cursor.com/docs/release-notes/ide#oct-9-2026, https://cursor.com/docs/release-notes/ide#sep-24-2026, https://cursor.com/docs/release-notes/agents-window#oct-1-2026, https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026, https://cursor.com/docs/release-notes/sdk#sep-22-2026, https://github.com/cursor/cursor/security/advisories
- **Half:** defect | **Confidence:** high

**What changed.** Vendor release notes report seven repairs to execution, agent context or controls. These include a branch name reaching a shell, browser pages forging agent input, repository hooks being skipped, and MCP server confirmation requirements being bypassed. Privacy crash uploads, Bitbucket outside-repository reads and SDK bridge startup configuration also changed. No matching public advisory or CVE was found in the checked sources, not proof that none exists anywhere.

**Operator consequence.** Install IDE 3.24.18 for the dated close and SDK 1.0.32 or later; 1.0.37 is current. Audit earlier Source Control commits that depended on secret-scanning hooks and confirmation-required MCP actions before 3.23. The Bitbucket change is hosted-service behavior. Follow per-surface notes alongside advisories; neither a new binary nor advisory silence proves every sandbox path safe.

## 6. Reused worker checkouts gain an untracked agent-configuration check in the inspected lab build

- **Date:** 2026-10-12 artifact; notes dated 2026-09-22, 2026-09-28 and 2026-10-08
- **Channel:** tagged-release (e373342 comparison baseline); preview-or-beta (researcher's d47ca18 lab snapshot); docs-only (hosted Slack and pool notes)
- **Ancestry evidence:** In hash-verified e373342, 5424.index.js tests tracked dirt with --untracked-files=no. In d47ca18, 7201.index.js additionally lists untracked agent-configuration files and refuses checkout reuse when found. The September 22 first-turn cache fix is vendor-described, not traced to a fixed artifact. Other October 8 worker changes are not established by this comparison.
- **Receipt:** https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz, https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz, https://cursor.com/docs/cli/changelog#sep-22-2026, https://cursor.com/docs/cli/changelog#oct-8-2026, https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026, https://cursor.com/docs/cloud-agent/self-hosted#what-leaves-your-network
- **Half:** both | **Confidence:** high

**What changed.** The inspected lab artifact refuses reuse of a checkout with untracked agent configuration that the recorded default's tracked-file check misses. This can prevent one agent's leftover instructions steering the next. Separately, hosted notes allow any team member to set or unset a Slack channel's Self-Hosted pool and announce changes. They do not establish that all Slack participants have that authority or that announcement is the only authorization check. Self-hosted docs still list code, terminal output, diffs, screenshots, local MCP results and routing metadata leaving the worker.

**Operator consequence.** For any-repo pools on e373342, clear directories between claims or keep one trust level per pool until you verify the cleanup path in your chosen worker version. Treat a worker upgrade as a CLI upgrade. Review pool placement authority. Do not buy self-hosting as data residency: blocking the artifact bucket does not stop model-bound tool-result transmission.

## 7. Origin tightens specified merge gates while widening app authority by credential class

- **Date:** weeks of 2026-09-21 and 2026-09-28; Agents Window 3.24 notes 2026-10-09
- **Channel:** docs-only (hosted forge notes); tagged-release (documented 3.24 repository-free project fallback)
- **Ancestry evidence:** October 7 index archive contains merge-when-ready head checks, blocking unknown rule types and unresolved code-owner requirements, Request Changes gating, rejected non-refs pushes and cancelled/errored Bugbot check fixes. IP allowlists now apply to user credentials; background autofetches and machine actors are excluded from clone/fetch auditing. User Delegation enables short-lived installation-user tokens. API migrations are separately recorded in section 17.
- **Receipt:** https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://cursor.com/docs/release-notes/origin#sep-21-2026, https://cursor.com/docs/release-notes/origin#sep-28-2026, https://cursor.com/docs/release-notes/bugbot#sep-21-2026, https://cursor.com/docs/release-notes/agents-window#oct-9-2026, https://cursor.com/docs/origin
- **Half:** both | **Confidence:** high

**What changed.** Origin reports specific merge gates becoming stricter, not universal fail-closed behavior. Apps can act as named members through User Delegation. The inbound IP rule now follows credential class: user credentials remain covered, app and service-account credentials are excluded. An agent using a person's credential is therefore not automatically exempt. Start from scratch remains an Origin repository path when enabled; 3.24 documents a repository-free cloud-project fallback when the team disables Origin.

**Operator consequence.** Review earlier merge-when-ready outcomes and required Bugbot checks satisfied by cancelled runs. Audit app delegation and credentials rather than treating the IP allowlist as an agent-wide block. Person clone/fetch audit events omit machine actors and background fetches. Check the team's Origin setting if the destination for new code matters.

## 8. Projects reaches Enterprise in documentation but per-Project controls remain unspecified

- **Date:** docs changed after 2026-09-22T13:35Z; team-switch note labeled week of 2026-09-14
- **Channel:** docs-only
- **Ancestry evidence:** September 22 capture excludes Enterprise; current documentation includes paid Enterprise teams on 3.21.9 or later. The beta label disappeared without a GA declaration. The switch note is labeled September 14 despite later discovery. Coordinator delegation, subscriptions, local workers and model reassignment are vendor-described; the Enterprise default is ambiguous.
- **Receipt:** https://web.archive.org/web/20260922133501/https://cursor.com/docs/agent/projects, https://cursor.com/docs/agent/projects, https://cursor.com/docs/release-notes/web#sep-14-2026, https://cursor.com/docs/release-notes/agents-window#sep-17-2026, https://cursor.com/docs/release-notes/cloud-agents#sep-21-2026
- **Half:** both | **Confidence:** high

**What changed.** The Projects page now includes Enterprise, and a team Enable Projects switch can hide the feature. The coordinator starts parallel agents and can move a worker to another model. The inspected Projects documentation names no per-Project budget, approval gate or concurrency setting. That does not mean no general spend controls exist; service-account limits are in section 21.

**Operator consequence.** Check Team Settings > Chat > Enable Projects and actual Enterprise availability instead of guessing from the opt-in wording. Monitor Project usage and model changes. Determine whether any chosen billing control caps this Project; the receipts do not establish that service-account limits do. A documented Project budget or approval setting would settle the narrower open question.

## 9. Per-surface release notes supplement the changelog and expose note backfills

- **Date:** restructuring established between 2026-09-24T03:21Z and 2026-10-07T02:09Z; third main entry 2026-10-13
- **Channel:** docs-only
- **Ancestry evidence:** September 24 CLI capture tops out at August 26; October 7 release index already contains v2026.09.15, v2026.09.22 and v2026.09.28. The index adds ten product surfaces and RSS while the main and CLI changelogs remain. October 13 marketplace archive establishes the third main entry. Tracker tree at full commit SHA is still only .github, README.md and SECURITY.md.
- **Receipt:** https://web.archive.org/web/20260924032107/https://cursor.com/docs/cli/changelog, https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://web.archive.org/web/20261013185441/https://cursor.com/changelog/origin-app-marketplace, https://cursor.com/docs/release-notes, https://cursor.com/docs/release-notes/rss.xml, https://github.com/cursor/cursor/tree/654b1b4775ca67aef473bd31a14c8c04a1abde2d
- **Half:** capability | **Confidence:** high

**What changed.** Versioned per-product notes and an index feed supplement the existing changelogs. CLI headings were relabeled and at least two earlier-dated entries were backfilled after September 24. The full window has three main entries, including Origin App Marketplace on October 13. Product implementation remains closed; the public tracker is not its source, and release notes are now a material security surface alongside advisories.

**Operator consequence.** Follow the per-surface feed rather than only the main changelog. Treat a note's displayed date as a vendor label unless independently pinned. October 5 cloud and Bugbot weeks observed later cannot be treated as known pre-close omissions without a publication snapshot. Versioned CLI bytes can establish inspected behavior but do not supply whole-product source ancestry.

## 10. Rollouts extends agent work into deploy verification without autonomous rollback

- **Date:** 2026-09-23; GitHub Bugbot config note week of 2026-09-28
- **Channel:** docs-only (hosted capabilities described by vendor)
- **Ancestry evidence:** Dated announcement describes Rollouts and Security Review on Teams and Enterprise, admin enabled. Rollouts is described as Firetiger Change Monitors rebuilt with the Bot Development Kit. Setup docs require observability and deploy events; Security Agents use a shared team service account. Bugbot repository config scope is GitHub pull requests.
- **Receipt:** https://cursor.com/changelog/rollouts-and-security-reviewer, https://cursor.com/docs/rollouts, https://cursor.com/docs/security-agents, https://cursor.com/docs/release-notes/bugbot#sep-28-2026
- **Half:** capability | **Confidence:** high

**What changed.** Rollouts writes a monitoring plan on the pull request, wakes at deploy and at later intervals, inspects telemetry, opens a regression issue and can hand a fix to a cloud agent. It does not autonomously merge or roll back. Security Review reports attack paths and proposed fixes. For GitHub pull requests, .cursor/config/bugbot.yaml overrides team settings and can lower Autofix but cannot turn it on.

**Operator consequence.** Trial deploy monitoring with a read-only telemetry connection and an appropriately scoped service-account key. The suggested privilege choices are operator judgment, not enforced defaults established here. Human attention can move from dashboard watching to monitoring-plan review and issue triage; rollback ownership remains human. Inspect GitHub repository overrides if team Bugbot settings matter.

## 11. Cursor reports prompt removal over preceding months and removes two cloud choices

- **Date:** 2026-09-23 engineering post; cloud notes weeks of 2026-09-21 and 2026-09-28
- **Channel:** docs-only
- **Ancestry evidence:** Vendor post describes A/B comparisons and quantities, without a reproducible experiment or raw dataset. It reports about 66% less system prompt, 60% less static tool-description context, 20% fewer cold cache misses and 7% lower token cost. Implementation spans preceding months and is not mapped to a client build. Cloud-note removals appear in the October 7 index archive.
- **Receipt:** https://cursor.com/blog/improved-token-efficiency, https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://cursor.com/docs/release-notes/cloud-agents#sep-21-2026, https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026
- **Half:** capability | **Confidence:** medium

**What changed.** Cursor attributes prompt and subagent-exploration instruction removal to improving models, while reporting lower token costs without reduced quality. These are vendor measurements published this window, not proof every implementation changed this window. Separately, cloud notes remove Long-running mode and the ability to turn environment builds off. Failure to find a client string does not locate implementation on a server.

**Operator consequence.** Run a bounded removal test on generic exploration instructions, measuring task completion and review work as well as tokens. Do not turn vendor percentages into a local savings forecast. Cloud users lose choices: update workflows expecting Long-running mode or disabled builds, and account for automatic builds and recurring build failures. This is not a section with nothing to configure.

## 12. Grok Bot terms add meeting-use obligations without establishing feature availability

- **Date:** 2026-10-12 terms; historically captured 2026-10-13
- **Channel:** docs-only
- **Ancestry evidence:** October 5 capture of September 3 terms compared with October 13 capture of October 12 terms confirms the added Meeting Features clause. It assigns required notices and consents to the customer. Current paid-plan and team/security docs retain bundling and Enterprise enforcement distinctions; no product release or tested meeting controls are established.
- **Receipt:** https://web.archive.org/web/20261005223008/https://cursor.com/en-US/terms/grok-bot, https://web.archive.org/web/20261013185637/https://cursor.com/en-US/terms/grok-bot, https://cursor.com/help/grok-bot/plans, https://cursor.com/docs/grok-bot/teams, https://cursor.com/docs/grok-bot/security
- **Half:** both | **Confidence:** high

**What changed.** The separate Grok Bot computer-use product's terms now cover listening, processing, capturing and transcribing meeting content. The customer must determine and obtain required notices and consents. This is contract text, not a universal rule about every meeting or proof the feature has shipped. The product remains bundled with paid individual Cursor plans and Teams; inspected docs retain allow-all networking without policy and Enterprise-only enforced review and Action Recording, off by default.

**Operator consequence.** Decide meeting-use policy before allowing it. Availability and admin controls are unverified; require a feature release and control documentation to settle them. Keep Grok Bot policy separate from the agent CLI and IDE. Do not infer legal obligations beyond the terms' required-notice and required-consent wording.

## 13. Origin App Marketplace opens public submissions on October 13

- **Date:** 2026-10-13
- **Channel:** docs-only (dated hosted launch)
- **Ancestry evidence:** October 13 archive of the vendor announcement confirms public submission, app JWT and installation access tokens, webhook inputs, checks/comments/reviews, and review before listing. Partner quality and performance were not tested.
- **Receipt:** https://web.archive.org/web/20261013185441/https://cursor.com/changelog/origin-app-marketplace, https://cursor.com/changelog/origin-app-marketplace
- **Half:** capability | **Confidence:** high

**What changed.** Origin opens its marketplace to public app submissions. Apps can authenticate with installation tokens, receive webhooks and write checks, pull-request comments and reviews. A submission passes vendor review before listing. This is the third main-changelog entry in the window.

**Operator consequence.** Origin becomes a broader integration destination for delivery and review tools. Review an app's installation permissions, delegation and uninstall path before enabling it. Marketplace listing is not proof that an integration has the scopes or operational behavior your team needs.

## 14. SDK subagent inheritance is opt-in in 1.0.34 and remains so in 1.0.37

- **Date:** 2026-09-29 (1.0.34); 2026-10-01 (1.0.35 custom-tool context)
- **Channel:** tagged-release (npm 1.0.34 through inspected 1.0.37)
- **Ancestry evidence:** Independently read package/dist/esm/options.d.ts in both npm archives; both match registry SHA512 integrity. local.subagentInherit forwards selected executor/workspace overrides and allowed/excluded tool headers into Task descendants, including nested children. Unset retains host executors/workspace without parent tool-allowlist headers. The October 7 archive records the release. The 1.0.37 declarations retain custom-tool sessionId described for 1.0.35.
- **Receipt:** https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.34.tgz, https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.37.tgz, https://registry.npmjs.org/@cursor%2fsdk/1.0.34, https://registry.npmjs.org/@cursor%2fsdk/1.0.37, https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://cursor.com/docs/release-notes/sdk#sep-29-2026
- **Half:** both | **Confidence:** high

**What changed.** TypeScript local SDK embedders can opt Task children into the parent's executor, workspace and tool-limit configuration. Unset does not transmit the parent's allowlist headers. Custom tools can also receive a child session identifier for host-owned per-child state. Declaration and vendor-note evidence does not prove every child enforces every restriction at runtime.

**Operator consequence.** Configure local.subagentInherit explicitly and probe a child and a nested child against a denied tool. Do not assume parent restrictions propagate. Binding tool state to sessionId can replace ad hoc child tracking, but each executor and the actual workspace remain the embedder's responsibility.

## 15. Windows hooks could report success without running until the 3.23 repair

- **Date:** 2026-10-01 (3.23 notes)
- **Channel:** tagged-release (vendor-described IDE and Agents Window 3.23 repair)
- **Ancestry evidence:** October 7 index archive and IDE 3.23 notes describe extensionless Windows hook commands opening a console and returning success without input or execution. The repair resolves matching script/executable extensions. No Windows runtime probe was run.
- **Receipt:** https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://cursor.com/docs/release-notes/ide#oct-1-2026, https://cursor.com/docs/release-notes/agents-window#oct-1-2026
- **Half:** defect | **Confidence:** high

**What changed.** Extensionless Windows hook commands could appear successful while the control did nothing. The 3.23 release notes report resolution to matching .ps1, .exe, .bat or .cmd files. A successful pre-fix hook result therefore does not establish that an approval or audit action ran.

**Operator consequence.** Use the dated current IDE 3.24.18, inspect extensionless hook commands and test their observable effect. Recheck approval and audit coverage from before 3.23. A hook process status alone is insufficient evidence of the control.

## 16. Lab git reads disable external diff and text conversion programs in the inspected artifact

- **Date:** 2026-10-12 artifact
- **Channel:** preview-or-beta relative to the researcher's October 13 morning lab snapshot
- **Ancestry evidence:** Read hash-verified d47ca18 dist-package/index.js, module ../git-core/dist/git-exec.js. It inserts --no-ext-diff and --no-textconv for diff, show, blame, log and whatchanged, stripping contrary switches. The equivalent e373342 module lacks the transformation; both flags are absent throughout that index.js. Lab SHA256 b6bc844fd2ec1ae99f5f24fa68fa08b0acf14fdb6c7b924916226fd59a55f3e7.
- **Receipt:** https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz, https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
- **Half:** defect | **Confidence:** high

**What changed.** The inspected lab wrapper suppresses repository-controlled external diff and text-conversion execution for five git read operations. The recorded default artifact lacks that transformation. This narrows an execution path; it does not establish a fix for the September fsmonitor allegation.

**Operator consequence.** Verify the wrapper in the actual worker or CLI build before relying on this hardening. This is no all-day default-channel guarantee and no blanket sandbox-safety claim. An advisory or tested reproduction tied to a build is needed to settle the different fsmonitor question.

## 17. Origin API clients need new stack-parent fields and public bypass-user IDs

- **Date:** 2026-09-22; 2026-10-02 and 2026-10-03 dated API notes
- **Channel:** docs-only (hosted API labeled Early Beta)
- **Ancestry evidence:** October 7 index archive pins the existence of both breaking migrations. Daily API notes specify rejection of parentPullNumber in favor of parentPullRequest.number, public ruleset bypass-user IDs on October 2 and rejection of the old numeric form on October 3. Daily details are versioned-doc receipts, not source commits.
- **Receipt:** https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://cursor.com/docs/api/origin/changelog#sep-22-2026, https://cursor.com/docs/api/origin/changelog#oct-2-2026, https://cursor.com/docs/api/origin/changelog#oct-3-2026
- **Half:** defect | **Confidence:** high

**What changed.** Origin's create-PR API rejects the old parentPullNumber field instead of silently dropping stack structure. Integrations must send parentPullRequest with a number member. Ruleset bypass actors move from numeric Cursor user IDs to public user IDs; the dated follow-up rejects the old form.

**Operator consequence.** Migrate request schemas and stored bypass identities, then check the resulting stack and ruleset. Treat this API's Early Beta label as a compatibility cost. Other daily API changes lack the historical pins requested by the crosscheck and remain leads, not accepted release facts.

## 18. Origin CLI removes PR-targeting syntax and documents expected-head merges

- **Date:** 2026-10-01 and 2026-10-06 release-note labels
- **Channel:** docs-only (no tested note-to-binary mapping)
- **Ancestry evidence:** October 7 index archive pins removal of origin pr stack and the PR-targeting --branch option. The dated October 6 Origin CLI note describes origin pr requirements and origin pr merge --expect-head <number>=<sha>. Exact binary inclusion and runtime behavior were not tested.
- **Receipt:** https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://cursor.com/docs/release-notes/origin-cli#oct-1-2026, https://cursor.com/docs/release-notes/origin-cli#oct-6-2026
- **Half:** both | **Confidence:** high

**What changed.** The notes remove origin pr stack and using --branch to select a pull request; a positional branch becomes the target. origin pr checkout --branch remains. The October 6 note adds a merge-requirements read and expected-head protection against a pull request moving after review.

**Operator consequence.** Update scripts using removed syntax. Bind merge decisions to the reviewed head and inspect requirements before merge. Verify these commands in the chosen version rather than inferring them from the October 13 installer artifact.

## 19. Bugbot fixes New Branch writes and moves team billing to the team limit

- **Date:** week of 2026-09-28
- **Channel:** docs-only (hosted Bugbot notes)
- **Ancestry evidence:** October 7 index archive pins the New Branch Autofix repair and token-billed team-limit rule. No branch mutation or billing experiment was performed.
- **Receipt:** https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://cursor.com/docs/release-notes/bugbot#sep-28-2026
- **Half:** both | **Confidence:** high

**What changed.** Bugbot reports fixing Autofix writing to the pull request's own branch despite New Branch mode. Token-billed team runs are governed by the team's spend limit instead of the installing user's personal limit.

**Operator consequence.** Inspect earlier Autofix commits if branch separation mattered. Set and monitor the team budget; a personal limit is not the governing control for these team runs. This is distinct from an unverified per-Project budget.

## 20. Cloud wildcard network entries now include the parent domain

- **Date:** week of 2026-09-28
- **Channel:** docs-only (Cloud Agents hosted policy notes)
- **Ancestry evidence:** October 7 index archive and cloud notes say *.example.com now also permits example.com. This is a cloud-policy change, not merely current local sandbox wildcard syntax.
- **Receipt:** https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://cursor.com/docs/release-notes/cloud-agents#sep-28-2026
- **Half:** both | **Confidence:** high

**What changed.** A Cloud Agents allowlist entry for a wildcard subdomain now includes the apex domain too. Existing wildcard entries can therefore authorize a destination outside their earlier meaning.

**Operator consequence.** Audit cloud wildcard entries whose parent domain hosts a different service or trust level. Replace a wildcard with explicit destinations when the broader reach is unwanted. Evaluate cloud egress separately from the local sandbox policy.

## 21. Service-account budgets and organization key expiry add controls outside Projects

- **Date:** week of 2026-09-21
- **Channel:** docs-only (web and organization API notes)
- **Ancestry evidence:** October 7 index archive pins editable per-billing-period service-account limits, organization audit-log API access and expiry choices for new organization API keys. No receipt proves these limits cap an arbitrary Project.
- **Receipt:** https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://cursor.com/docs/release-notes/web#sep-21-2026
- **Half:** capability | **Confidence:** high

**What changed.** Admins can inspect and edit service-account spend limits for a billing period. New organization API keys can expire after 30, 90 or 180 days, or a year. Organization keys can read organization-wide audit events through an API.

**Operator consequence.** Give unattended accounts a deliberate budget and choose credential expiry when issuing new organization keys. Confirm which identity a workload bills to. These are concrete general controls and must not be conflated with a documented per-Project ceiling.

## 22. Origin CLI has versioned channels and verifies vendor hashes before extraction

- **Date:** 2026-10-13 artifacts; installer pointers independently observed 2026-10-14
- **Channel:** tagged-release (version-addressed Origin artifacts); docs-only (moving channel-pointer observation)
- **Ancestry evidence:** Official installer defaults to stable and accepts stable and latest. Independently downloaded both darwin-arm64 archives as data. Stable Last-Modified 2026-10-13T14:12:28Z, SHA256 391b0cdd182d11aff173ced422ba537b28e89362a05ebfe2d901231e73c5107c; latest 04:17:47Z, SHA256 6f2b8fe979a06af8dc5906c34378b0f72d9602b83b48da663018cfe3b133503f. Both match installer hashes. Script read verifies SHA256 before extraction; its Last-Modified is 2026-10-13T14:13:27Z, not proof of channel selection timing.
- **Receipt:** https://downloads.cursor.com/origin/install.sh, https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz, https://downloads.cursor.com/co/2026.10.13-04-14-45-7ea7628/darwin-arm64/co.tar.gz
- **Half:** capability | **Confidence:** high

**What changed.** The corrected Origin install snapshot contains distinct stable and latest version-addressed artifacts with vendor hashes. Its installer verifies the downloaded archive before extraction. The stable artifact is newer than the latest artifact in this observation. Neither the first introduction of checksum verification nor the exact pointer-selection time is established.

**Operator consequence.** Keep Origin CLI pinning separate from agent-CLI pinning. Record channel, build and hash; do not rank builds by the latest label. Use the vendor verification mechanism without converting an October 14 pointer read into an October 13 end-of-day guarantee.

## 23. Auto routing now follows team model blocks in the hosted web notes

- **Date:** week of 2026-09-21
- **Channel:** docs-only (hosted routing correction)
- **Ancestry evidence:** September 21 web note and October 7 index archive report that Auto now respects Cursor-served model blocks and new-model release delays. Router docs limit hidden attribution to Balance and Intelligence modes. No per-request historical usage was examined.
- **Receipt:** https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://cursor.com/docs/release-notes/web#sep-21-2026, https://cursor.com/docs/cursor-router
- **Half:** defect | **Confidence:** high

**What changed.** Vendor notes say Auto no longer routes to a team's blocked Cursor-served model or one still under release delay. Before this correction, requests may have reached those models. Hidden underlying-model attribution in Router's Balance and Intelligence modes is a separate display behavior, not evidence of explicit CLI model substitution.

**Operator consequence.** Inspect relevant usage exports rather than assuming every blocked model received data. Enable underlying-model display where Router attribution matters. This hosted correction establishes no agent-CLI fixed-build guarantee.

## 24. The CLI notes report a model-ID fix without naming the first fixed artifact

- **Date:** 2026-09-28 note
- **Channel:** docs-only (fixed downloadable build not established)
- **Ancestry evidence:** v2026.09.28 notes describe prefix-overlap model-ID selection and appear in the October 7 archive. Dates and an unrelated worker marker do not prove inclusion in 2026.09.28-64d2043 or e373342.
- **Receipt:** https://web.archive.org/web/20261007020951/https://cursor.com/docs/release-notes, https://cursor.com/docs/cli/changelog#sep-28-2026
- **Half:** defect | **Confidence:** high

**What changed.** Cursor's v2026.09.28 notes report that --model and /model now select the requested model when its ID starts with another model's ID. They describe earlier silent selection of the shorter base model. The first fixed downloadable CLI build has not been established.

**Operator consequence.** Verify the actual model in an affected evaluation before accepting an upgrade as the fix. A note that names the artifact or a traced artifact comparison would settle the build mapping. Do not recommend 2026.09.28-64d2043 as a proven fixed version from this evidence.

## 25. The full dated install snapshot reaches IDE 3.24.18, iOS 1.13.0 and SDK 1.0.37

- **Date:** 2026-10-13 (IDE artifact); 2026-10-06 (Apple release); 2026-10-07 (SDK registries)
- **Channel:** tagged-release (vendor artifacts, App Store and package releases); docs-only (moving download pointers observed October 14)
- **Ancestry evidence:** Commit-addressed IDE DMG responds 200 with October 13 19:33:03Z timestamp; October 13 cask commit at 21:42:53Z pins 3.24.18. Apple lookup returns 1.13.0 and October 6 21:12:09Z. npm and PyPI publish 1.0.37 October 7; bridge tag resolves to 5e70039b2402f8c94a870fbe8f9e7ecba736fca0. API/store latest pointers are moving observations, not immutable historical snapshots.
- **Receipt:** https://downloads.cursor.com/production/be4c9e5350d77747b42cd467cbd3370a753d464b/darwin/arm64/Cursor-darwin-arm64.dmg, https://github.com/Homebrew/homebrew-cask/commit/1631cd110809dda09cbd4054146f5ca488037879, https://itunes.apple.com/lookup?id=6767085653&country=us, https://apps.apple.com/us/app/cursor/id6767085653, https://registry.npmjs.org/@cursor%2fsdk/1.0.37, https://pypi.org/pypi/cursor-sdk/1.0.37/json, https://github.com/cursor/sdk-bridge/releases/tag/v1.0.37, https://cursor.com/download
- **Half:** capability | **Confidence:** high

**What changed.** The original morning IDE snapshot omitted 3.24.18 later that day, and the mobile notes omitted store version 1.13.0. SDK 1.0.37 remains the current registry release; next still resolves to an old beta. Protocol-repository tags and vendor bridge checksums are not evidence of executable enforcement. The inspected 1.0.37 package also carries typed computer-use events not described in the release notes.

**Operator consequence.** Install the IDE from Cursor's download page, iOS from Apple's store, and pin @cursor/sdk@1.0.37 or cursor-sdk==1.0.37 where embedding. Verify the returned version instead of treating the newest note as the newest install. Do not infer that every published safety repair has been runtime tested at these versions.

## Prior claims re-checked

- github-tracker-is-not-source: source boundary holds; the old note calling advisories the only vendor security channel is retired. Versioned bundles permit limited implementation reads, not whole-product ancestry.
- changelog-mixes-surfaces: retain the retired historical entry. The new per-surface index supplements the main changelog; there are three main entries in this window.
- cli-build-unnoted-no-digest: retire the old lagging-changelog claim. Replace with the morning pointer snapshot, unlocated vendor digest and updater-aware pinning in section 1.
- projects-coordinator-beta: retire beta and Enterprise exclusion. Autonomy holds as described; replace with Enterprise documentation and unspecified per-Project settings in section 8.
- self-hosted-what-leaves: holds as vendor documentation, not a packet capture. Section 6 retains this material boundary; blocking artifacts does not block tool-result transmission.
- mcp-hook-server-identity: current identity holds in the two independently inspected default builds, 9a7762b and e373342. Hooks docs recommend mcp_server_name plus tool_name and denial for missing/unexpected identity. failClosed: true is required to block hook failures; do not claim the independent verifier repeated the six-build historical survey or located first implementation. Receipt: https://cursor.com/docs/hooks#beforemcpexecution and the section 1 tarball.
- start-from-scratch-origin: conditional posture holds when Origin is enabled. Section 7 adds the 3.24 repository-free fallback when disabled. No universal claim that every new project writes to Origin.
- no-advisory-sandbox-claim: remains unresolved under a bounded public-source search. Four existing git overrides and section 16's new lab flags do not settle the reported fsmonitor variant.
- grok-bot-separate-product: current bundling and enforcement distinctions hold as docs-only, not IDE/CLI facts; meeting terms change in section 12. Self-serve Teams has controls, so do not claim it has none.
- models-pool-openai-cutoff-undated: the current models page still lists OpenAI without an end date. That silence is not a future-availability guarantee. Retire the old corporate/social supply narrative from the refreshed body; no primary cutoff date was established. Receipt: https://cursor.com/docs/models-and-pricing.

## Carry-forward answers

1. The fsmonitor allegation remains unsettled: no matching advisory or dated fixed-build line was found. Require a named mechanism, affected/fixed artifacts and preferably a reproduction.
2. No Cursor-side dated OpenAI cutoff was established; a vendor model-availability notice would settle it.
3. Projects documentation names no per-Project spend, approval or concurrency setting. General controls exist; test the billed identity and any proposed ceiling.
4. The CLI notes no longer stop in August, but now include changes absent from the recorded default artifact. A build-addressed note or artifact comparison must resolve each relevant path.
5. MCP server identity is established in the baseline and recorded default. The earliest implementation date is still unknown and is not an operator upgrade requirement.

## Leads not promoted

- Original numbered section 5's exact CLI fixed-build guarantee was REFUTED and deleted. The two receipted statements survive only as new docs-only sections 23 and 24, without that mapping.
- Further Origin daily API claims: removed namespace paths, mirroring transitions, split scopes, omitted fields, deleted actors, preview refs, service-account identity changes, restacking rejection and October 13 auto-merge endpoints. No historical capture certifies all details by the close.
- October 5 cloud/Bugbot notes observed later: environment configuration handling, Project placement, Remote Control gating and oversized-review disclosure. In-window labels do not establish pre-close publication.
- The September 15 social fsmonitor allegation is a lead, not a product fact; no social quotation is used. A security-release statement or reproducible primary probe is needed.
- Unexamined OpenAI cutoff reports and traffic estimates remain leads.
- CVE-2026-63093 is pre-window. NVD names version 3.2.16; do not expand to all earlier versions or invent a fixed version.
- Every-tenth-line numbering and other prompt implementation locations are vendor-described, not located by a missing client string.
- Risky-delete classifier changes are release-note statements; no agent-CLI artifact was traced for the classifier.
- SDK bridge .env/bunfig autoload repair is vendor-described executable behavior, not proved by the protocol repo or archive checksum.
- Re-uploaded 3.22.7 Linux AppImages are a third-party digest observation; pin bytes if reproducing them.
- AgentRemoteWorkspaceAuthorities is release-note-only, without separately inspected policy documentation.
- Cyber Safeguards has no historical snapshot here to establish introduction timing.
- Writing-lane search found no Cursor/Anysphere items; no social lane was available. Neither absence establishes product behavior.

## Surfaces checked and remaining limits

Original surfaces: main changelog/RSS, per-product notes/RSS, CLI docs/installers, vendor artifacts and download API, registry metadata and SDK declarations, sdk-bridge tags/releases, Homebrew history, archive captures, advisories/NVD, and current security/project/Grok Bot documentation. The tracker was never treated as product source.

Write-up author independently reopened the October 7 release-note archive, October 13 marketplace archive, relevant current official notes, Origin installer, Apple lookup, tracker tree, IDE artifact HEAD, npm versions and declarations, and both agent/Origin versioned tarballs. Agent and Origin SHA256 values reproduced the crosscheck; npm 1.0.34 and 1.0.37 archives matched their registry integrity. No downloaded code, sandbox exploit, IDE executable, hook, billing workflow or hosted rollout was executed.

The newest IDE artifact is available within the window; agent and Origin channel transitions remain time-qualified. Moving docs are statements read, not proof of a past default. A current stable binary does not prove every control holds.

## Crosscheck applied

Applied all 10 CORRECTED numbered verdicts and both VERIFIED verdicts with their limits. Deleted original REFUTED section 5; its supported web and CLI-note components were independently checked and added as docs-only replacements. There were no wholly UNVERIFIABLE numbered verdicts. Unsupported components and unpinned follow-ups remain under Leads not promoted.

Added M1 through M10 as sections 13 through 22 after checking their receipts, plus the corrected install snapshot in section 25. Renumbered sequentially. Corrected IDE 3.24.18, iOS 1.13.0, five default CLI advances, DMG versus ZIP timestamps, old npm beta-tag wording, and Origin channels/checksums. October 14 agent pointer changes remain outside the dated posture. No git write command, install, site build or cloned-code execution was used.
