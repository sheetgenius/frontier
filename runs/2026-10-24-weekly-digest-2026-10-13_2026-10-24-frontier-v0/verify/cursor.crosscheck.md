# Crosscheck: cursor

Run: `2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0`.
Window: after `2026-10-13T23:59:59Z` through this verification on 2026-10-24 UTC.
Inputs: `harvest/cursor.primary.md` and `harvest/cursor.origin.md`.
Independent primary-source reads: 2026-10-24T10:16:54Z through 10:35:37.904562Z.

The stable installation recommendations survive. The harvests need corrections before publication: two moving preview pointers advanced, several Origin consequences overstate the receipts, and six material changes were omitted. One claimed window change cannot be dated inside the window.

Counts below cover the 28 numbered findings only. Other section verdicts and the six misses are additional checks.

| Input | VERIFIED | CORRECTED | REFUTED | UNVERIFIABLE |
| :--- | ---: | ---: | ---: | ---: |
| cursor.primary.md, sections 1-15 | 15 | 0 | 0 | 0 |
| cursor.origin.md, sections 1-13 | 4 | 8 | 1 | 0 |
| Total | 19 | 8 | 1 | 0 |

VERIFIED means the receipt supports the stated, bounded evidence level. A dated vendor note verifies what Cursor reports, not server enforcement. REFUTED includes an asserted window attribution I could not independently establish; it does not mean the current product statement is false.

## Method and receipt pins

Read the researcher brief, source contract and notes, active profile, parent harvest, writing feed, THESIS.md, METHOD.md, EDITORIAL.md and CONTRIBUTING.md. The Frontier lens was consulted as research criteria, without invoking a publication cycle.

Every Receipt URL in the 28 numbered findings was requested. Registry archives and version-addressed CLI archives were independently downloaded and read as data. HTTP 403 responses to Python's default user agent were resolved by a normal browser user agent. No downloaded code was executed. No product was installed, no account mutation or runtime enforcement test was attempted, and no site build, npm install or repository git write command was run.

The contract permits versioned official notes for closed products. Such anchors identify the vendor's release group but are not immutable Git tags. Undated docs support read-time posture only. No moving main/HEAD blob is accepted as implementation evidence. The public Cursor tracker is an advisory surface, not agent source.

Several Wayback text receipts initially returned only a playback wrapper. I followed raw playback and decompressed gzip bodies before comparing them. In particular, the [14 October reference][old-ref], [24 October reference][new-ref], [old OpenAPI][old-openapi] and [new OpenAPI][new-openapi] are independently readable. The historical comparison is supported after that recovery, not by the toolbar response.

Local read receipts, HTTP metadata, archives and static text are under `/Users/c3po/co/frontier/tmp/cycle-2026-10-24/cursor-verify/`. The separate blobless, no-checkout SDK clone is `/Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones/cursor-verify/sdk-bridge/`.

Independent archive SHA256 matches:

| Artifact | SHA256 |
| :--- | :--- |
| [Default Agent CLI 2026.10.22-27dcf5f][cli] | `2f5b0a3dd5fb951cecffac813867d8a08d810e59837d59fd5f12d69b922398d7` |
| [Baseline Agent CLI e373342][cli-old] | `629e51de43a0b7fb3b86f5ebc7e579f7df7df941b39f29e82945cde750145afc` |
| [Parent lab d47ca18][cli-lab-old] | `b6bc844fd2ec1ae99f5f24fa68fa08b0acf14fdb6c7b924916226fd59a55f3e7` |
| [npm SDK 1.0.37][sdk-old] | `992e4889e298f1ac5dfeeda6cf4db5eb1008aa3b1ea03883a17c2ea052f1efd2` |
| [npm SDK 1.0.40][sdk] | `025ab7f4e945de7ba88b6914a8db434d2c83eed4240091397c2d6fd83217457a` |
| [npm SDK 1.1.0-beta.0][sdk-beta] | `a84e6d515b7de72bf717a70ea33211a1351889aacf606d7aadefe7f238bb3923` |
| [Origin baseline ea1dfe5][origin-old] | `391b0cdd182d11aff173ced422ba537b28e89362a05ebfe2d901231e73c5107c` |
| [Origin stable f52be1e][origin] | `66844cb094a67ba1217a39430c9271b6a2e77b7a0aac313cc9e7949ccfd6e3e2` |
| [Origin earlier latest 624e85d][origin-earlier-latest] | `fd1912f08e8451ed19147f5069d0531573ffaf61feec4e5742a76f8993bb690e` |
| [Origin current latest 1b4d3b5][origin-latest] | `11b6172bf1bf7a2c658c9ce0aa6ba4a352ddcf8d23f7be91083e3ff4b15f3e36` |

All three npm tarballs also match registry SHA512 integrity. All four Origin archives match their versioned manifests. These checks bind the inspected bytes; they do not create an independent vendor signature.

## Install today: CORRECTED

The researchers' timestamped observations are historical snapshots, not errors merely because a pointer moved later. For a profile current at this verification, use the following snapshot.

| Surface | Independent UTC read | Result |
| :--- | :--- | :--- |
| [IDE stable selector][ide-stable] | 2026-10-24T10:17:06.918267Z | 3.27.12, commit `df132ffba90dfc15a12e6b8f020ba4e5d026c4be` |
| [IDE latest selector][ide-latest] | 2026-10-24T10:17:06.918152Z | Same version and commit; darwin-arm64 only |
| [Agent CLI default installer][cli-install] | 2026-10-24T10:17:02.668754Z | 2026.10.22-27dcf5f |
| [Agent CLI lab installer][cli-install-lab] | 2026-10-24T10:17:02.808825Z | **2026.10.24-334b38e**, newer than the recorded 87b92de |
| [npm registry][npm] | 2026-10-24T10:17:03.572572Z | `latest=1.0.40`, `next=1.1.0-beta.0`; independently repeated with `npm view @cursor/sdk time dist-tags --json` |
| [PyPI JSON][pypi] | 2026-10-24T10:17:03.323792Z | 1.0.40; no Python beta corresponding to npm next |
| [SDK bridge release list][bridge-releases] | 2026-10-24T10:16Z | v1.0.40 newest, `isLatest=true`, `isPrerelease=false` |
| [Apple US lookup][apple] | 2026-10-24T10:17:03.248226Z | 1.15.0, release 2026-10-22T18:21:01Z, `co.anysphere.cursor` |
| [Origin stable manifest][origin-stable-pointer] | 2026-10-24T10:17:03.022440Z | 2026.10.23-18-47-36-f52be1e |
| [Origin latest manifest][origin-latest-pointer] | 2026-10-24T10:17:02.937621Z | **2026.10.24-09-27-15-1b4d3b5**; primary harvest already saw this, Origin companion saw the earlier 624e85d |

Exact fixes: append the newer lab observation, and update the companion's current latest selection while preserving its earlier read. The [new lab archive][cli-lab-new] answered a range GET at 2026-10-24T10:25:20Z with Last-Modified 2026-10-24T10:00:00Z. It was not implementation-inspected. Origin latest's [versioned manifest][origin-latest-manifest] gives publishedAt 2026-10-24T09:36:59Z. It is not the stable default.

The [commit-addressed IDE DMG][ide] returned the reported Last-Modified 2026-10-23T04:01:26Z. Neither DMG metadata nor the selector proves an installed app's signature or behavior.

## Release ledger: CORRECTED

The existing stable rows are correct. Independent Homebrew history queries returned all six recorded IDE advances, with exactly the cited SHAs and UTC commit times, and all seven recorded CLI cask advances. These are packaging observations, not vendor release times. The [baseline cask][cask-baseline] and baseline DMG metadata independently corroborate 3.24.18 on 2026-10-13.

`gh release list --repo cursor/sdk-bridge` and registry reads reproduce the SDK ledger:

| Version | GitHub publication UTC | npm publication UTC | Earliest PyPI upload UTC |
| :--- | :--- | :--- | :--- |
| 1.0.37 baseline | 2026-10-07T20:07:14Z | 2026-10-07T20:13:46.368Z | 2026-10-07T20:05:32.913299Z |
| 1.0.38 | 2026-10-16T22:08:35Z | 2026-10-16T22:07:11.518Z | 2026-10-16T22:05:59.286611Z |
| 1.0.39 | 2026-10-20T17:56:42Z | 2026-10-20T18:01:07.788Z | 2026-10-20T17:55:00.025435Z |
| 1.0.40 | 2026-10-20T20:44:33Z | 2026-10-20T18:24:56.360Z | 2026-10-20T18:18:49.493279Z |
| 1.1.0-beta.0 | No matching public bridge release | 2026-10-22T21:00:50.391Z | Absent |

Receipts: [release objects][bridge-releases], [npm][npm], [PyPI][pypi]. The [official release RSS][release-rss] reproduces the 2026-10-14, 2026-10-20 and 2026-10-22 IDE/Agents Window group dates, and CLI/SDK dates. Group dates do not identify the first fixed patch.

Re-ran `git merge-base --is-ancestor` for v1.0.37 to v1.0.38, v1.0.38 to v1.0.39, v1.0.39 to v1.0.40 and v1.0.40 to fetched origin/main. Every exit status was 0. Corresponding `rev-list --left-right --count` results were `0 1`, `0 1`, `0 1`, `0 0`. Baseline to v1.0.40 is `0 3`. The peeled stable commit and fetched branch are `1ba4fe546ea597c2f14b571b0ebe59ab1d20b70e`; the annotated v1.0.40 tag object is `3b6fa72cd2df26802e5648465d98a8d30a26bbe9`. The [manifest at that commit][bridge-manifest] names SDK 1.0.40. This is protocol ancestry, not ancestry of the closed implementation.

The [Origin API changelog capture][origin-api] independently counts 26 entries on nine dated days: 9 Breaking, 12 Added, 4 Changed, 1 Deprecated. The OpenAPI comparison adds only `OriginService_DeleteRepo`, 119 to 120 operations, with none removed. Origin stable's manifest publication remains 2026-10-23T18:54:53Z; the earlier latest remains a real 2026-10-24T05:19:36Z artifact. Append the newer latest row and lab row above. Do not invent intermediate Origin promotions or a complete count of builds since the 6 October notes.

## Numbered findings: cursor.primary.md

### P01. Cloud canvases: VERIFIED

Read the [dated 2026-10-16 launch][launch] and [canvas guide][canvas]. Sharing, publish/refresh, team-only read access, paid-plan/storage conditions and the publisher-only dashboard match. `docs-only` is correct for this hosted capability. The proposed attention saving is inference, not a measured result. The undated sharing details are current posture, not proven launch-day conditions.

### P02. Environments API: VERIFIED

The [launch][launch] labels it beta. The [endpoint reference][environments] confirms replacement semantics, separate build-settings updates, pagination qualifications and repository-edit limits. Its create operation says 500; the launch says 300. The [2026-10-22 CLI note][cli22] confirms redeploying an existing public environment ID. Neither capacity nor fivefold speed was independently tested.

### P03. Mac desktop worker and signed helper: VERIFIED

Read [27dcf5f][cli] `index.js`, `1375.index.js`, `2478.index.js`, the [explicit helper manifest][helper] and [computer-use guide][computer-use]. Worker computer use is opt-in. The installer binds the manifest to 3.27.0-pre.0/source 7e5ccee and checks SHA256, Gatekeeper, bundle ID and team. Helper 0.0.1003 and its reported digest match. The Darwin sharing resolver presets `view`; Linux presets `view_and_control`. The Darwin provider supports the claimed documentation conflict. No helper was launched.

### P04. Linux live workspace: VERIFIED

The [3.26 Agents Window note][aw26], [self-hosted guide][self-hosted] and [default artifact][cli] agree. `worker-cursor-server.ts` returns unsupported unless explicitly enabled and on Linux. The guide documents the 3.25 minimum, verified server builds, localhost transport and OS-user authority. This is client/document evidence, not a Linux enforcement test.

### P05. Project placement approval: VERIFIED

Read [3.26 allowed-machine controls][aw26], [current security settings][cloud-settings] and [week-of-12 cloud notes][cloud12]. The settings explicitly say off by default for every team. The harvest correctly preserves the conflict with the older non-Enterprise default. No exact backend introduction date, budget ceiling or account setting is proven.

### P06. Git reads and checkout reuse: VERIFIED

Compared [e373342][cli-old], [d47ca18][cli-lab-old] and [27dcf5f][cli]. The current shared git wrapper inserts both disabling flags for the five stated verbs and removes conflicting flags. Checkout-reuse code issues both untracked-file probes and refuses contaminated reuse. The changes are in today's default artifact. Read the independent [IDE 3.25 security note][ide25] as a separate surface. Additional Git restrictions omitted from this finding are M05 below.

### P07. Nested Claude hook denial: VERIFIED

Compared the integrity-checked [1.0.37][sdk-old] and [1.0.40][sdk] bundles. The normalizer exists in both; only 1.0.40's local construction enables `enableClaudeNestedHookSpecificOutputCompatibility:!0`. Traced nested permission normalization and the pre-tool rejection path in `dist/esm/331.js`. The [1.0.40 note][sdk40-notes] identifies the same defect. Static confirmation supports the bounded claim; no denied-tool run occurred.

### P08. Explicit team identity: VERIFIED

Read [SDK 1.0.40][sdk] team declarations, parser and header construction, plus [CLI 27dcf5f][cli] worker team-scope code. Positive safe integers produce `x-cursor-team-id`; invalid/absent values omit it. The [SDK note][sdk40-notes] and [CLI note][cli22] support persistence and team-selection qualifications. This does not identify a Project's billing principal.

### P09. Subagent models and billing: VERIFIED

The [IDE 3.25][ide25], [CLI 15 October][cli15] and [CLI 22 October][cli22] entries support the exact Private Inference, normalization, fallback, failure-reporting and Composer tier statements. These are versioned vendor reports, not observed-model or billing tests. They do not close the older prefix-overlap issue.

### P10. Hooks and nested rules: VERIFIED

The [15 October][cli15], [17 October][cli17] and [22 October][cli22] CLI entries cover the specified Windows, child-hook, transcript and edit-first instruction changes. The [hook reference][hooks] supports the stated fail-open/failClosed distinction and cloud deferrals. Instructions being loaded is not policy enforcement.

### P11. Worker draining: VERIFIED

The [17 October note][cli17] explicitly covers `/readyz`, 503/draining, bind failure, stale claims and refusal of new runs during shutdown. The [15 October note][cli15] separately covers MCP deadlines. [Pool monitoring][pool] agrees. No orchestration or fault-injection outcome was claimed as observed.

### P12. Always Run persistence: VERIFIED

The [IDE 3.26 entry][ide26] says personal-file approvals persist in `terminalAllowlist`, while admin control suppresses the option. The [general permissions reference][permissions] retains the older blanket description. The harvest accurately preserves the conflict and does not confuse this with Run Everything's unresolved exception.

### P13. Steering and process lifetime: VERIFIED

The [IDE 3.25][ide25], [IDE 3.26][ide26] and [Agents Window 3.26][aw26] notes support the new-install default, unchanged existing preferences, persistent shells, archive effects/warnings and crash Resume behavior. These remain vendor release statements.

### P14. Stable SDK lifecycle and zod: VERIFIED

Read both [stable tarballs][sdk] [and baseline][sdk-old], [SDK release notes][sdk-notes], and the [pinned protocol][bridge-proto]. The zod peer range is newly present. The protocol adds failure code/message fields. The described lifecycle/store fixes match their versioned notes. LICENSE.md is byte-identical across 1.0.37, 1.0.40 and the beta; this comparison identifies no SDK license change.

### P15. Beta filesystem tree: VERIFIED

The [beta tarball][sdk-beta] adds the declarations and validation absent from [1.0.40][sdk]. Read `filesystem/local-fs.d.ts`, `options.d.ts` and bundled validation. Cloud mode and conflicting executor sources are rejected; hooks and skill discovery are omitted; resume needs the tree again. This is npm next, not stable or an OS containment guarantee.

## Numbered findings: cursor.origin.md

### O01. Agentic and app code owners: VERIFIED

Read the [captured weekly note][origin-weekly], [Create Ruleset capture][ruleset] and both [baseline][origin-old] and [stable][origin] bundles. The reported UI choice and app-owner capability are vendor-described; the added protocol fields support client availability. They do not reveal thresholds or prove a person's approval is safely replaceable. Weekly first-publication uncertainty remains.

### O02. Credential-bound, explicit bypass: VERIFIED

Read [weekly notes][origin-weekly], [API migration entries][origin-api], [Agents Window 3.26][aw26] and both Origin bundles. In stable `performChangeMerge`, `bypassFailingRules` is sent only when true. Its refusal handling and flag help support the qualified client claim. Hosted bypass behavior and audit coverage remain vendor reports.

### O03. Agent prompt CI and required checks: VERIFIED

Read the [weekly CI announcement][origin-weekly] and [required-check schema][ruleset]. Their combination supports the consequence about neutral/skipped completion. The required-check rule is documentation, not a tested job result. Keep the team-service-account and missing public configuration-reference qualifications.

### O04. Archive IP checks: CORRECTED

The before/after [reference][old-ref] [comparison][new-ref], [archive endpoint][tarball] and [allowlist reference][ip-list] support the exception, but the paragraph collapses distinct allowlists. Exact replacement: "The API checks installation credentials against the installation namespace's list, and service accounts against their owning team's list. Signed downloads check the repository namespace's enforced list and, for service accounts, the owning team's list too." A generic claim that every such request gets 403 from the repository namespace check is too broad. Other ordinary git/API exemptions remain documented; no refusal was tested.

### O05. Defect disclosures and advisory absence: CORRECTED

Read the [weekly repair record][origin-weekly], recovered references and OpenAPI. The reported enforcement, stale-ref, revocation and privacy defects, and added soft-delete operation, are supported. Replace "no advisory or CVE covers any of them" with "none identified in the vendor advisory lists and the bounded NVD searches described below." Search silence cannot prove universal absence. Preserve unknown affected windows and distinguish a reported repair from tested enforcement.

### O06. Repository creation and bot reviewers: CORRECTED

Read [Create Repo][create-repo], [scopes][scopes], both OpenAPI versions and the shipped scope catalog. The new installation grant and reviewer changes are supported. Delete the inference that a new repository necessarily starts with only protections added afterwards: finding no namespace-level rule in the pages read does not establish effective defaults. Replacement: "Read back and qualify the new repository's effective protections before permitting writes; inherited or implicit defaults were not established." The all-repository-selection requirement remains.

### O07. Merge gates and refusals: CORRECTED

Two fixes are necessary. First, the [15 October API entry][origin-api] says the linear-history case previously appeared mergeable but failed when pushed; it does not say it landed wrongly. Replacement: "One refusal prevents landing on an obsolete stack branch; the other reports an existing linear-history failure earlier."

Second, [Create Ruleset][ruleset] identifies groups by immutable `group.id`, not slug. Replace "deleting or renaming that group freezes merges" with "a group that no longer resolves blocks covered merges; a display-name change is not documented to do so." File-size limits and approval bounds otherwise match the references.

### O08. Nine breaking changes: CORRECTED

The [captured changelog][origin-api] supports the nine Breaking labels. The phrase "ruleset team shape introduced on 14 October" overstates the change: that date added validation of an existing bypass-team shape; `requiredReviewers` was the addition. The [old reference][old-ref] already carries bypass `team` objects. Replacement: "The 14 October required-reviewer addition used the team shape; the 17 October migration replaced that shape in both reviewer requirements and bypass actors." Do not turn a validation change into a new authority grant.

### O09. Undocumented CLI additions: CORRECTED

Compared [baseline][origin-old], [stable][origin], [earlier latest][origin-earlier-latest] and [current latest][origin-latest]. Gates, commandeer, import mapping/dry-run, installation-token handling and server gating are supported. The same 806-line extracted command/option/description set occurs in the three newer samples (SHA256 `8c0a3c68cb2d9a385e8da164783c9e72b6151db03c1705533da88888e703ba08`). Update latest to 1b4d3b5 at this read. Replace "ahead of its documentation by two builds" with "the sampled newer builds contain commands missing from notes that still end on 6 October." No complete build/promotion count is available.

### O10. Default-on telemetry behind a server flag: CORRECTED

Read `telemetry/record.ts`, `spool.ts`, `send.ts`, config and RPC mapping in the [stable bundle][origin], and compared the [baseline][origin-old]. Gating, opt-outs, repository field and generic author classification are supported.

Exact distinction: the 16-hex account hash is stored in the local spool envelope; `recordCliUsage` does not put it in the transmitted event fields. Requests use the caller's authenticated token. The event reports `human`, `cursor_agent` or `other_agent`, not a specific rival harness. Replacement: "The local spool carries an account hash; transmitted events carry the generic author category and repository, under the caller's authenticated identity." This narrows the data claim without implying anonymity. Debug mode also prints the would-be event and returns before spooling; it is not solely a reason logger.

### O11. Availability changed this window: REFUTED

The [11 October overview][origin-overview-old] and [24 October overview][origin-overview] confirm changed text. They do not locate the change after 2026-10-13T23:59:59Z. The stated interval includes days before this window. Retain the current early-beta eligibility statement and disagreement with [Create Repo][create-repo] as a 24 October posture observation, not one of eleven proven window changes. Neither the removal of staged-access wording nor a plan name proves account-level availability.

### O12. Member delegation authority map: CORRECTED

The [acting-as-users guide][acting], [token endpoint][user-token], [scope catalog][scopes] and [IP rules][ip-list] support optional confirmation, intersected grants, short lifetimes and no individual revocation. Narrow the heading's unqualified IP claim to "ordinary git/API access, except repository archives". Delete "nothing else does": other authorization and ruleset checks still apply. Add that uninstall/deletion and account closure invalidate tokens, while scope removal/suspension stops new mints and grant changes apply no later than expiry. This is current state, not a new window release.

### O13. Cloud sessions versus Grok Bot reviews: VERIFIED

Read current and historical [MCP descriptions][mcp], the [tool capture][mcp-tools], [agent guide][origin-agents] and both stable bundles. The client guards the two merge RPCs and recognizes attenuated-session refusal; the review tool explicitly says confirmation No, while merge/dismiss say Yes. This supports the stated design/document distinction, not a tested server refusal or proof that a Bot approval satisfies a protected branch. Existing client guards are not new this window.

## Prior claims re-checked: CORRECTED in the specified places

The following high-impact checks were independently repeated at the newest stable artifact or, for hosted products, the current primary reference. Other "holds" verdicts are not elevated to runtime proof.

- **Agent CLI updater-aware pin: VERIFIED.** [27dcf5f][cli] modules `8004`, `8008` and `8779` retain static-channel skip logic and the unchecked archive-stream path. Helper verification is a separate path. Origin's [stable updater][origin] checks a manifest hash and does not automatically install updates.
- **Run Everything and Read Access defaults: VERIFIED as vendor posture.** The [IDE note][ide24] and [run-mode guide][run-modes] retain the unsandboxed Run Everything/default System read posture and classifier caveats. The [CLI artifact][cli] still calls `sandbox_read_control_portal` with a false fallback. This proves neither a server flag value nor an Enterprise account's effective boundary.
- **SDK child policy opt-in: VERIFIED.** [1.0.40][sdk] `agent/options.d.ts` retains the documented unset behavior and opt-in inheritance. The beta filesystem mode does not repair the stable default.
- **Hook identity/failure handling: VERIFIED within documented scope.** [Current hooks][hooks] and [CLI modules][cli] retain identity fields and failClosed handling. Cloud MCP-hook deferrals prevent a universal claim.
- **Self-hosted data egress: VERIFIED as current documentation.** The [guide][self-hosted] names both artifact hosts and says blocking them does not stop tool results. Desktop/workspace opt-ins are separate. No packet capture occurred.
- **Project approvals: CHANGED, correctly identified in P05.** [Settings][cloud-settings] now document placement approval, but do not establish a per-Project budget/concurrency ceiling.
- **Service-account cap: VERIFIED as current documentation.** [The reference][service-accounts] still says new accounts have no limit and excludes Bugbot from these caps. Do not infer the Project's principal or cap.
- **Origin credential/IP claim: CHANGED.** Preserve ordinary credential exemptions while applying O04's exact endpoint/credential distinctions. The profile's blanket exemption is stale.
- **Origin expected-head and install verification: VERIFIED as client/document evidence.** Both [Origin samples][origin] [and baseline][origin-old] carry expected-head arguments and server request fields. [Merge Pull Request][origin-merge] documents 409/nothing merged. A client sending a precondition is not an observed server check.
- **Origin marketplace: VERIFIED with its qualification.** [Publishing documentation][publish] distinguishes public direct-link installation from reviewed listing; marketplace review is not an installation gate or runtime validation.
- **Git fsmonitor: STILL OPEN.** All three inspected CLI versions already carry `core.fsmonitor=false` overrides. M05 is additional hardening, not an affected/fixed pair or a reproduction of the separate allegation.

## Other sections and rule checks

- **Frontmatter and identity: CORRECTED.** Product identities are right. The primary heading uses `# Harvest:` instead of the brief's required `# Harvest --`. The Origin frontmatter and O02 use `mixed`, outside the brief's four channel values. Represent O02's hosted part as docs-only with a separately identified versioned-artifact component; remove `mixed` from machine-readable channels. Origin's O11 reclassification also changes the claimed split to ten window-change sections and three current-state sections, with weekly dates still qualified.
- **Carry-forward answers: VERIFIED as open questions, with O04/O07/O12 corrections.** Workspace-policy account enforcement, Run Everything's config exception, phone/team pairing, Project ceilings, the older prefix-overlap fix build, fsmonitor reproduction and meeting availability remain unsettled. The new search behavior in M01 makes the Workspace read test more important; it does not settle that test.
- **Operator questions settled: VERIFIED within scope.** The surfaces and two distinct CLI installation models are separated. Sudo/IPC statements remain vendor claims. Omnigent's refusal boundary is not established here. Correct the Origin current-state map's latest pointer and use O04/O12's credential qualifications.
- **Leads not promoted: VERIFIED as dispositions, not product proof.** Social gists are not quoted as receipts. No social incident, invoice, adoption or comparative-performance claim is accepted by this verification. The single Cursor-bearing writing item is discovery only.
- **Origin Feature case: CORRECTED.** [EDITORIAL.md](../../../EDITORIAL.md) says "decide or disagree in public". It does not require a counterparty dispute. Lack of a GitHub response alone cannot establish failure of condition 2. A decision not to commission a feature may still stand, but evaluate whether identifiable decision-makers have spoken publicly and whether the required reporting shape can be filled; do not add a mandatory opposing-party requirement.
- **Marketing separation: VERIFIED.** The 5x loading assertion is not an independent measurement; canvases, model scores, marketplace listing and user preference are not proof of acceptance or adoption. Keep those boundaries.
- **Security language: CORRECTED in O05 and one primary carryover.** Explain the bare [CVE-2026-63093][cve-old] reference if retained: the NVD record describes Windows binary planting where a repository-root `git.exe` is executed as the user when a crafted checkout is opened. It was published 2026-07-17, outside this window; do not call it a new October fix or infer a fixed build from these notes.
- **Surfaces checked / Not reached: VERIFIED within the verifier's own work.** Read current per-product notes and RSS, installers/selectors, registries, advisories, docs and the listed static artifacts. Closed editor/service ancestry and runtime enforcement remain unavailable here. The older all-products index is not a date authority. The investigators' claims about having performed their own tests or searches are not independently auditable merely from their prose.

## Security sweep and absence limits

Independently listed all 33 public [cursor/cursor advisories][advisories] using paginated `gh api`, and the empty [sdk-bridge advisory list][bridge-advisories]. Newest tracker publication remains 2026-07-14; no publication in this window was returned. The two newest entries describe, respectively, [host command execution after tampering with a Python interpreter later invoked outside the sandbox][ghsa-python], and [privileged-container access to the user's home and host execution][ghsa-container]. These are older disclosures, not this window's misses or evidence that all current paths are safe.

NVD API queries covered 2026-10-14T00:00:00Z through 2026-10-24T10:35:33.160Z. `anysphere` returned zero. `cursor` returned 19 unrelated records; each was inspected, including substring matches involving database cursors, graphics, kernels and parsers. None identifies this harness. [NVD search endpoint][nvd-query] and downloaded JSON are retained. This is a bounded public-record result, not "no CVE exists". No newly identified in-window advisory is added. Review did not establish a new license change; the SDK license comparison above is narrower than a product-wide licensing audit.

## Misses

Each item below is absent from both current harvests as a recorded material change. Dated closed-product notes establish vendor release claims; where a first fixed patch/build is not named, that uncertainty remains.

### M01. CLI search now reaches the requested outside-workspace directory

- Date/channel: 2026-10-15 note; current default 27dcf5f, `tagged-release` under the closed-product contract.
- Receipt: [v2026.10.15 Agent tools][cli15], [current versioned artifact][cli].
- Consequence: Grep/Glob previously searched the workspace despite an outside target; they now search that target while retaining documented ignore/read-deny checks. Re-test read boundaries on a harmless outside file before unattended runs. This is a scope-correctness change, not proof of an approval bypass.

### M02. Existing environment automation loses a flag and numeric-ID assumption

- Date/channel: 2026-10-15 note; current default 27dcf5f, `tagged-release`.
- Receipt: [v2026.10.15 environment commands][cli15], [versioned artifact][cli].
- Consequence: `agent env get` no longer accepts `--ref`; `env delete` takes the public ID instead of the old numeric form. Update scripts and saved identifiers. P02 records the new redeploy path but omits this separate compatibility break.

### M03. MCP Auto-review receives JSON-string schemas

- Date/channel: 2026-10-22 note; current default 27dcf5f, `tagged-release`.
- Receipt: [v2026.10.22 Auto-review repair][cli22], [versioned artifact][cli].
- Consequence: the reviewer now sees input schemas supplied as JSON strings. Requalify approval decisions for those servers. The note does not prove previous arbitrary execution, nor turn Auto-review into a security boundary.

### M04. Agents Window removes browser bookmarking controls

- Date/channel: Agents Window 3.26, 2026-10-20; current IDE 3.27.12, `tagged-release` vendor statement.
- Receipt: [3.26 Browser and design mode][aw26], [commit-addressed stable IDE][ide].
- Consequence: the bookmarks bar, favorites/history sidebar and Cmd+D bookmark shortcut are removed. History remains in address-bar/new-tab suggestions. Operators who kept review destinations in that UI need another durable location. This is an actual removed feature, not an inferred productivity improvement.

### M05. Default CLI adds a restricted Git executor beyond diff/textconv flags

- Date/channel: present in [27dcf5f][cli], absent from the [baseline][cli-old] and [parent lab sample][cli-lab-old]; default artifact 2026-10-22, `tagged-release`. First introduction between samples is not established.
- Evidence: `index.js` module `git-core/dist/no-repo-programs.js`; callers in `local-exec/dist/index.js` and `generated-file-detection.js`. The executor restricts verbs/flags, pins configuration, disables lazy fetch/interactive helpers, reads repository filter configuration where needed and disables those filters, or refuses the operation. Unsupported/help/submodule-execution paths can now fail rather than start repository-configured programs. This is called code, not only a protocol string.
- Consequence: qualify repositories with custom filters, submodules or unusual worktree flags. A safer read can now produce an explicit refusal. P06 records only the diff flags and checkout contamination checks. Existing fsmonitor overrides predate this addition; no blanket Git-execution or exploit-fix claim follows.

### M06. CLI no longer replays already completed calls after a pause

- Date/channel: v2026.10.17; current default 27dcf5f, `tagged-release` vendor statement.
- Receipt: [17 October Agent repair][cli17], [versioned artifact][cli].
- Consequence: completed tool calls are no longer rerun on resume, and a new message during pending approval no longer falsely reports user cancellation. Recheck pause/resume around harmless observable side effects before trusting it with non-idempotent work. Worker draining in P11 does not cover this agent-execution repair.

The newer lab pointer is separately recorded under Install today; it was not inspected for additional feature misses. Origin weekly omissions with only an overlapping week label are not silently converted into newly dated releases.

## Verification limits and custody

All important static findings were independently read, not accepted from the companion researcher. No security regression was reproduced and no hosted rule, review, IP refusal, billing limit, default flag value or performance claim was exercised. Artifact inclusion and vendor statements remain separate from effective account behavior.

The two harvest files were not edited. Their SHA256 at verification was `f592ee76107376047655108e0210b7ca3704c83b349b27f2e3eae51a4e327ab4` for cursor.primary.md and `a551a40ee6ed30e1ae300fd2fb151892980a44fbd184e8f7553e196bbc5e27ca` for cursor.origin.md. Only this crosscheck is written outside the authorized scratch directory.

[cli]: https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
[cli-old]: https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
[cli-lab-old]: https://downloads.cursor.com/lab/2026.10.12-d47ca18/darwin/arm64/agent-cli-package.tar.gz
[cli-lab-new]: https://downloads.cursor.com/lab/2026.10.24-334b38e/darwin/arm64/agent-cli-package.tar.gz
[cli-install]: https://cursor.com/install
[cli-install-lab]: https://cursor.com/install?channel=lab
[sdk]: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz
[sdk-old]: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.37.tgz
[sdk-beta]: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.1.0-beta.0.tgz
[npm]: https://registry.npmjs.org/@cursor%2fsdk
[pypi]: https://pypi.org/pypi/cursor-sdk/json
[apple]: https://itunes.apple.com/lookup?id=6767085653&country=us
[ide]: https://downloads.cursor.com/production/df132ffba90dfc15a12e6b8f020ba4e5d026c4be/darwin/arm64/Cursor-darwin-arm64.dmg
[ide-stable]: https://www.cursor.com/api/download?platform=darwin-arm64&releaseTrack=stable
[ide-latest]: https://www.cursor.com/api/download?platform=darwin-arm64&releaseTrack=latest
[cask-baseline]: https://github.com/Homebrew/homebrew-cask/commit/1631cd110809dda09cbd4054146f5ca488037879
[bridge-releases]: https://github.com/cursor/sdk-bridge/releases
[bridge-manifest]: https://github.com/cursor/sdk-bridge/blob/1ba4fe546ea597c2f14b571b0ebe59ab1d20b70e/proto/manifest.json
[bridge-proto]: https://github.com/cursor/sdk-bridge/blob/1ba4fe546ea597c2f14b571b0ebe59ab1d20b70e/proto/sdk/v1/sdk_messages.proto
[release-rss]: https://cursor.com/docs/release-notes/rss.xml
[launch]: https://cursor.com/changelog/cloud-agent-canvases-and-environments
[canvas]: https://cursor.com/docs/agent/tools/canvas
[environments]: https://cursor.com/docs/cloud-agent/api/endpoints#environments
[helper]: https://downloads.cursor.com/computer-use-sidecar/releases/explicit/3.27.0-pre.0/7e5ccee75ca9a9d583fa7a4ee338f40dd7b07198.json
[computer-use]: https://cursor.com/docs/cloud-agent/self-hosted/computer-use
[self-hosted]: https://cursor.com/docs/cloud-agent/self-hosted
[cloud-settings]: https://cursor.com/docs/cloud-agent/settings#security-settings
[cloud12]: https://cursor.com/docs/release-notes/cloud-agents#oct-12-2026
[aw26]: https://cursor.com/docs/release-notes/agents-window#oct-20-2026
[ide24]: https://cursor.com/docs/release-notes/ide#oct-9-2026
[ide25]: https://cursor.com/docs/release-notes/ide#oct-14-2026
[ide26]: https://cursor.com/docs/release-notes/ide#oct-20-2026
[cli15]: https://cursor.com/docs/cli/changelog#oct-15-2026
[cli17]: https://cursor.com/docs/cli/changelog#oct-17-2026
[cli22]: https://cursor.com/docs/cli/changelog#oct-22-2026
[sdk40-notes]: https://cursor.com/docs/release-notes/sdk#oct-20-2026
[sdk-notes]: https://cursor.com/docs/release-notes/sdk
[hooks]: https://cursor.com/docs/hooks
[pool]: https://cursor.com/docs/cloud-agent/self-hosted/pool#monitoring
[permissions]: https://cursor.com/docs/reference/permissions
[run-modes]: https://cursor.com/docs/agent/security/run-modes
[service-accounts]: https://cursor.com/docs/account/enterprise/service-accounts#spend-limits
[origin]: https://downloads.cursor.com/co/2026.10.23-18-47-36-f52be1e/darwin-arm64/co.tar.gz
[origin-old]: https://downloads.cursor.com/co/2026.10.13-14-06-43-ea1dfe5/darwin-arm64/co.tar.gz
[origin-earlier-latest]: https://downloads.cursor.com/co/2026.10.24-05-09-43-624e85d/darwin-arm64/co.tar.gz
[origin-latest]: https://downloads.cursor.com/co/2026.10.24-09-27-15-1b4d3b5/darwin-arm64/co.tar.gz
[origin-latest-manifest]: https://downloads.cursor.com/co/2026.10.24-09-27-15-1b4d3b5/manifest.json
[origin-stable-pointer]: https://downloads.cursor.com/co/channels/stable/manifest.json
[origin-latest-pointer]: https://downloads.cursor.com/co/channels/latest/manifest.json
[origin-weekly]: https://web.archive.org/web/20261024094000id_/https://cursor.com/docs/release-notes/origin.md
[origin-api]: https://web.archive.org/web/20261024094024id_/https://cursor.com/docs/api/origin/changelog.md
[old-ref]: https://web.archive.org/web/20261014204255id_/https://cursor.com/docs/api/origin/llms-full.txt
[new-ref]: https://web.archive.org/web/20261024093701id_/https://cursor.com/docs/api/origin/llms-full.txt
[old-openapi]: https://web.archive.org/web/20261014073947id_/https://cursor.com/docs/api/origin/openapi.yaml
[new-openapi]: https://web.archive.org/web/20261024093646id_/https://cursor.com/docs/api/origin/openapi.yaml
[ruleset]: https://web.archive.org/web/20261024094330id_/https://cursor.com/docs/api/origin/reference/create-ruleset.md
[tarball]: https://web.archive.org/web/20261024093815id_/https://cursor.com/docs/api/origin/reference/get-repo-tarball.md
[ip-list]: https://web.archive.org/web/20261024093747id_/https://cursor.com/docs/api/origin/reference/inbound-ip-allowlist.md
[create-repo]: https://web.archive.org/web/20261024094211id_/https://cursor.com/docs/api/origin/reference/create-repo.md
[scopes]: https://web.archive.org/web/20261024093800id_/https://cursor.com/docs/api/origin/reference/scopes.md
[origin-overview-old]: https://web.archive.org/web/20261011055932id_/https://cursor.com/docs/origin
[origin-overview]: https://web.archive.org/web/20261024092716/https://cursor.com/docs/origin
[acting]: https://web.archive.org/web/20261024092907/https://cursor.com/docs/api/origin/acting-as-users
[user-token]: https://web.archive.org/web/20261024094116id_/https://cursor.com/docs/api/origin/reference/create-installation-user-token.md
[mcp]: https://cursor.com/docs/api/origin/mcp
[mcp-tools]: https://web.archive.org/web/20261024094434id_/https://cursor.com/docs/api/origin/mcp/tools.md
[origin-agents]: https://web.archive.org/web/20261024093422/https://cursor.com/docs/origin/agents
[origin-merge]: https://web.archive.org/web/20261024093830id_/https://cursor.com/docs/api/origin/reference/merge-pull-request.md
[publish]: https://cursor.com/docs/origin/apps/publish
[advisories]: https://github.com/cursor/cursor/security/advisories
[bridge-advisories]: https://github.com/cursor/sdk-bridge/security/advisories
[ghsa-python]: https://github.com/cursor/cursor/security/advisories/GHSA-p9g2-cr55-cw9c
[ghsa-container]: https://github.com/cursor/cursor/security/advisories/GHSA-v4xv-rqh3-w9mc
[cve-old]: https://nvd.nist.gov/vuln/detail/CVE-2026-63093
[nvd-query]: https://services.nvd.nist.gov/rest/json/cves/2.0?pubStartDate=2026-10-14T00%3A00%3A00.000&pubEndDate=2026-10-24T10%3A35%3A33.160&keywordSearch=cursor
