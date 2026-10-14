# Grok Build crosscheck

Source: grok-build. Window: 2026-09-21 through 2026-10-13 inclusive.
Verification performed: 2026-10-14 UTC. Profile date remains 2026-10-13.

**Disposition: corrections required before publication.** The stable version is
right. The full-day channel inventory is incomplete, and several passages turn
documentation changes or public-mirror code into stronger claims about shipped
behavior than the receipts establish.

Counts cover the 13 numbered harvest sections only: **VERIFIED 3, CORRECTED 9,
REFUTED 1, UNVERIFIABLE 0**. A VERIFIED release-note claim means the vendor
documents that change in the specified version. It is not an independent exploit
test. Unsupported shipping and historical-behavior claims are rejected rather
than assumed true.

## Install today and release ledger

**Install today: CORRECTED.** Its central recommendation, stable **1.0.52**, and
npm **latest = 1.0.52**, survive. The current stable pointer is still the object
created on 2026-10-12T17:27:15.533Z; enterprise is still 1.0.53, with its object
created on 2026-10-12T18:15:14.877Z. These observations support the October 13
stable and enterprise values. I independently ran gh release list, fetched the
tag list, and queried npm time and dist-tags. GitHub has zero releases and zero
tags. [Stable pointer][stable-pin], [enterprise pointer][enterprise-pin],
[registry metadata][registry].

Two changes happened after the harvest's 09:36 UTC observation but before its
declared window closed:

- **1.0.56 exists inside the window:** Linux build created
  2026-10-13T20:57:37.110Z; npm published
  2026-10-13T21:03:44.026Z. Its note is dated 2026-10-13 and specifies only minor
  fixes. The volume is therefore **16 builds, 1.0.41 through 1.0.56**, not 15.
  Do not invent a security fix from that note. [Build metadata][b56-meta],
  [versioned note][n56], [registry publication record][registry].
- **WinGet's repository added 1.0.52** at
  2026-10-13T17:56:46Z, commit
  b057f0992015764a607c7e6f9c07eaa1de8a98d0. The statement that its manifests
  stop at 1.0.50 is stale for the full day. The manifest names Windows x64 and
  arm64 downloads and their SHA256 values. I verified the merged manifest, not
  propagation to every WinGet client's index. [Commit][winget-commit],
  [pinned installer manifest][winget52].

On the verification date, npm alpha and the artifact alpha pointer are **1.0.58**.
Builds 1.0.57 and 1.0.58 were published on 2026-10-14 and are outside the window.
The registry does not expose historical dist-tag assignments, and listing GCS
object versions returned HTTP 401. Thus I cannot independently recover the
alpha pointer at the end of October 13. Preserve 1.0.55 only as the researcher's
morning observation; add 1.0.56 as an available non-stable build without asserting
an unobserved alpha-pointer promotion. [Current alpha metadata][alpha-meta],
[registry][registry].

I independently read GCS metadata and npm publish times for every row below.
All dates are in **2026**. The harvest's existing build and npm timestamps agree
to the displayed second. GitHub prerelease flags and release ancestry are
**not applicable**, not false: there are no release objects or tags. All these
version strings lack a semver prerelease suffix; that does not make them stable.

| Version | Linux build UTC | npm publish UTC | Channel evidence at the cutoff |
| --- | --- | --- | --- |
| 1.0.40 | 2026-09-20 23:42:15 | 2026-09-20 23:48:33 | Baseline candidate; cumulative note, not independently recovered stable pointer |
| 1.0.41 | 2026-09-22 16:34:24 | 2026-09-22 16:39:47 | Parent reports a stable observation; note independently read |
| 1.0.42 | 2026-09-26 18:17:07 | 2026-09-26 22:41:22 | Included in cumulative 1.0.44 notes |
| 1.0.43 | 2026-09-27 22:53:44 | 2026-09-28 00:26:22 | Included in cumulative 1.0.44 notes |
| 1.0.44 | 2026-09-28 22:02:30 | 2026-09-28 22:10:13 | Cumulative note and WinGet history support a stable-channel reconstruction |
| 1.0.45 | 2026-09-29 06:04:32 | 2026-09-29 06:10:58 | Included in cumulative 1.0.46 notes |
| 1.0.46 | 2026-09-30 22:05:50 | 2026-09-30 22:11:16 | Cumulative note and WinGet history support a stable-channel reconstruction |
| 1.0.47 | 2026-10-01 19:06:49 | 2026-10-01 19:23:48 | Included in cumulative 1.0.50 notes |
| 1.0.48 | 2026-10-02 01:13:34 | 2026-10-02 01:21:20 | Included in cumulative 1.0.50 notes |
| 1.0.49 | 2026-10-02 18:48:00 | 2026-10-02 18:53:36 | Included in cumulative 1.0.50 notes |
| 1.0.50 | 2026-10-06 22:04:50 | 2026-10-06 23:07:37 | Cumulative note and WinGet history support a stable-channel reconstruction |
| 1.0.51 | 2026-10-09 17:27:10 | 2026-10-09 17:35:00 | Included in cumulative stable 1.0.52 notes |
| 1.0.52 | 2026-10-11 23:54:01 | 2026-10-11 23:59:56 | Stable pointer and npm latest independently confirmed |
| 1.0.53 | 2026-10-12 17:48:31 | 2026-10-12 17:55:09 | Enterprise pointer independently confirmed; ahead of stable |
| 1.0.54 | 2026-10-12 22:29:02 | 2026-10-12 22:35:15 | Available non-stable build |
| 1.0.55 | 2026-10-13 06:16:53 | 2026-10-13 06:23:26 | Available non-stable build; researcher observed alpha |
| 1.0.56 | 2026-10-13 20:57:37 | 2026-10-13 21:03:44 | Additional available non-stable build |

The five-promotion sequence is a **reconstruction**, not five independently
verified pointer transitions. In particular, note creation times for 1.0.40,
1.0.44, 1.0.46 and 1.0.50 are not promotion timestamps. A cumulative note does
not prove that intermediate versions were never stable. The parent's observation
does not independently establish the value of stable on 2026-09-21T23:59Z.
Replace categorical language accordingly. [Cumulative 1.0.40 note][n40],
[1.0.44][n44], [1.0.46][n46], [1.0.50][n50], [1.0.52][n52].

The six-platform 1.0.52 artifact matrix checks out: raw, gzip and zstd for Linux
and macOS x86_64/aarch64; executable files for Windows x86_64/aarch64. All 24
tested SHA256/signature sidecar names returned 404. Both live install scripts
match the pinned tree byte for byte. The shell installer smoke-tests the Unix
download; the PowerShell hash check is for MinGit, not grok.exe. [Shell script][install-sh],
[PowerShell script][install-ps1].

## Ancestry and artifact identity

I made the requested blobless, no-checkout clone at
/Users/c3po/co/frontier/tmp/refresh-2026-10-13/clones/grok-build-verify/.
No cloned code, installer, or downloaded binary was executed.

For each adjacent pair below, git merge-base --is-ancestor returned **0**.
git rev-list --left-right --count for the baseline versus final sync returned
**0 4**. The four sync dates, crate versions, and SOURCE_REV values agree with
the harvest. None is a stable-release tag.

| Public SHA | Commit UTC | Crate | SOURCE_REV |
| --- | --- | --- | --- |
| 4247f661689354b831191f11eeeac8424993fe3d | 2026-09-19T17:07:56Z | 1.0.38 | Baseline |
| 07e35a3dfeed2f200d319ef6c893b5ea286d9a51 | 2026-09-22T17:53:08Z | 1.0.41 | 84745de98b3d3996729aefcefd518890ffb73930 |
| f0e3be1100ef5252488e3be8bb0e91cf68d8c305 | 2026-09-23T16:52:41Z | 1.0.41 | 036a5d8348cd744767cd0b08518ab17bf608fa7f |
| 97f190f644ae1ba07fd6ee185ef54c650e142666 | 2026-09-29T11:19:53Z | 1.0.45 | f589e31cc17fbf9a41072a379dba4673f6aa0861 |
| 2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8 | 2026-09-29T16:57:09Z | 1.0.45 | 559751fdcec02d413e4c57c8832ab275e4f44980 |

[Public comparison][compare], [last commit][last-commit],
[last SOURCE_REV][source-rev].

I separately downloaded the four Linux artifacts into memory, compared MD5
against GCS metadata, and inspected bytes and embedded guides. The hashes below
are independent observations. Binaries were not saved or run.

| Artifact | GCS generation | SHA256 |
| --- | --- | --- |
| [1.0.45][b45] | 1790661872193104 | 3ef9bf5689ae9cc58f1bc918ae6067627a3667c7519245b9e8aacd9288559718 |
| [1.0.46][b46] | 1790805950398756 | 41626a53292324140b92556b9d42ff5542e3dcd04aff85eafb8689dd4adb44fc |
| [1.0.50][b50] | 1791324290710388 | c80de0155706ff2d995623887b102f2d0abd2c62b2643dea3a0cebaf7dd724d5 |
| [1.0.52][b52] | 1791762841427964 | 1668414b047e1050a96d25fe17dfc3efe63190fbf66d8cc1c3de8633caf50d11 |

The 1.0.52 object is 188,326,752 bytes with MD5
7uquEK788pKAH73vJNFMig==, as recorded. Generation-qualified links here preserve
the exact objects read. Equal timeCreated and updated values do **not** establish
that a versioned object name has never been overwritten or is immutable.

For reproducibility, find the UTF-8 guide headings inside the binary and read
through the following numbered guide-file marker. Useful zero-based byte
offsets in the pinned 1.0.52 artifact are: Hooks 2172942, Sandbox Mode 2412062,
Permissions and safety 2467622, and the cursor_worker config heading 2573107.
Source-path counts used the byte pattern crates/[A-Za-z0-9_/.-]+\.rs and were
compared with git ls-tree and all public history. These observations establish
embedded text and source-location strings, not reachability of every feature.

## 1. CORRECTED: release channels and npm integrity

**Read:** every note from 1.0.40 through 1.0.56, pointer metadata, registry time,
dist-tags and version metadata, the npm wrapper tarball, and the pinned WinGet
manifest. The npm wrapper's SHA512 matched the registry. Its optional
dependencies pin each platform to 1.0.52; the Linux package publishes the
recorded SHA512, four-file count and unpacked size. Registry signatures exist;
no provenance attestation is listed. [npm wrapper][npm52], [Linux package][npm-linux52],
[pinned package source][npm-source], [WinGet][winget52].

**Exact fixes:** apply the channel and ledger corrections above. Change
"immutable per-version binary" to "versioned object, identified here by its GCS
generation and digest." Change "five promotions" to "five apparent stable
targets reconstructed from notes and packaging history." Historical alpha-only
assignments are not independently established.

npm supplies package integrity; it does not prove the binary matches the
public source. The suggested global npm install does not establish the
project-lockfile workflow claimed in the consequence. Say "npm checks the
published package integrity; record the version and platform-package digest."
Do not promise a persistent pin without also controlling the CLI updater.
[npm's project-lockfile scope][npm-lock].

## 2. CORRECTED: install-time version selection is not a lasting updater pin

**Read:** updater comparisons, cache and policy gates, installer downgrade
selection, explicit-version update handling, download validation, installer
config writes, and the 1.0.52 guide and updater messages. The pinned code
defaults auto-update on; permits script-install downgrades; declines npm
downgrades; and attempts to persist auto_update = false after an explicit-version
update. [Updater][updater], [download validation][download-check],
[install script][install-sh], [1.0.52 artifact][b52].

**Exact fix:** "Selecting a version with install.sh does not disable automatic
updates. With updates enabled and a successful eligible update check, the script
installation can follow its configured pointer in either direction. Disable
automatic updates or use the documented explicit-version updater to hold it."

Reject "lasts one session" and "anyone ... has been on the stable pointer since
their next interactive launch." The code can skip checks because of a fresh
cache, existing opt-out, version policy, unavailable target, or failed fetch.
The installer preserves an existing auto_update setting. The stable binary's
messages corroborate the updater and pinning paths, but do not independently
prove every branch of the older source is unchanged.

## 3. CORRECTED: the mirror cannot identify stable's complete source

**Read:** public commit history, all four SOURCE_REV files and crate versions,
the ancestry checks above, the physical/lexical path matching implementation,
and the 1.0.46 note. [Comparison][compare], [SOURCE_REV][source-rev],
[path matching][path-match], [1.0.46 note][n46].

The stalled-mirror finding holds. **Exact fixes:** extend the unavailable
version range to **1.0.46 through 1.0.56**, or **11 later builds** at window close.
Replace "1.0.45 plus part of 1.0.46" with "a September 29 mirror snapshot labeled
1.0.45, containing a change later documented in 1.0.46." The label and a later
release note do not prove a complete binary/source mapping or that the fix was
absent from every 1.0.45 build.

## 4. CORRECTED: omitted source and Cursor worker exposure

**Read:** both named binary receipts, the other two comparison binaries, public
tree/history, the no-op worker stub, module wiring, README, worker help/error
strings, and the embedded config reference. The reported **1,191 source paths,
137 absent from the final tree, 127 absent from all public history, and 12 of 84
crate names wholly absent** reproduce. This includes the eight crates under
crates/common, not just crates/codegen. [1.0.45][b45], [1.0.52][b52],
[stub][cursor-stub], [module wiring][cursor-mod], [README][readme].

The binary documents worker registration, auto_start false, an opt-in any_repo
setting, an account gate, and refusal under a selected sandbox profile. The
config table distinguishes accepted requirements values from enforceable pins.

**Exact fix:** call this an observed packaging/source discrepancy and documented
worker capability; remove "No code changed in the window," which these probes
cannot establish. Also retain a material qualification the harvest omitted:
the same config section says a successful start opens a **clone-pool door for
git URLs outside worker_dirs**. This sentence exists in all four inspected
binaries. Leaving any_repo off alone does not establish a repository allowlist.
The relationship between those two doors needs a runtime or implementation
receipt before making a confinement promise.

## 5. VERIFIED: approval scope and deceptive cards

**Read:** 1.0.48, 1.0.49, 1.0.50, 1.0.51 and 1.0.52 notes, plus the 1.0.50 and
1.0.52 permission guides. The notes support the web ask-rule fix, shell-only
one-time approval correction, misleading MCP option rows, accidental
keypress approvals, terminal isolation, bypass restoration and subagent
approval handling. The newer guide restricts the session edit grant to that
session's folder. [1.0.48][n48], [1.0.49][n49], [1.0.50][n50],
[1.0.51][n51], [stable notes][n52], [stable guide artifact][b52].

Channel: the documented fixes are available by stable 1.0.52; cumulative notes
place the earlier pair in 1.0.50. Keep the harvest's qualification that no fix
was exercised. Do not turn the note into a claim that a particular MCP server
actually exploited a user.

## 6. CORRECTED: deny-rule fixes and the scope of strict sandboxing

**Read:** all four cited versioned notes, RuleBase and path_match_forms, and
the shipped permission, instruction and sandbox guides. The recorded path,
Grep, delete-tool, mention, redirect and project-instruction fixes are supported.
The 1.0.52 guide limits its symlink statement to project startup loading; home
rules and extra_rule_dirs retain different behavior. [1.0.46][n46],
[1.0.50][n50], [1.0.51][n51], [1.0.52][n52], [path implementation][path-match],
[stable guide][b52].

**Exact fix to the consequence:** "Use strict to narrow reads outside the
workspace, and a custom sandbox deny list for specific sensitive files,
including secrets inside the workspace." Strict still allows reads in the
working directory, system paths and Grok home. It does not turn a Read deny
rule on an in-repository secret into a kernel-enforced denial. The guide
explicitly supplies custom deny lists for that purpose. [Sandbox definitions][sandbox-source].

## 7. CORRECTED: policy parsing is not uniformly fail-closed

**Read:** 1.0.50, 1.0.52 and 1.0.53 notes, plus the requirements and permission
passages embedded in 1.0.46, 1.0.50 and 1.0.52. The notes support the preserved
valid rules, two enforced admin pins, environment-policy startup error, and
non-stable disabled-hooks-file fix. The newer guides document unreadable or
unparseable requirements stopping startup and retain the edited signed-file
hook downgrade unless fail_closed is set. [1.0.50][n50], [1.0.52][n52],
[1.0.53][n53], [1.0.46 artifact][b46], [1.0.50 artifact][b50], [1.0.52 artifact][b52].

**Exact fix:** "Some invalid policy now stops startup; other invalid entries are
skipped while valid entries remain." The stable permission guide says a
wrong-type deny/ask list or non-string member suppresses that managed file's
allow list, but a deny/ask rule that merely fails to parse is skipped by itself.
Do not imply that every malformed deny rule stops startup or suppresses allows.

For the requirements-file change, say "documented by 1.0.50, absent from the
1.0.46 guide"; the uninspected 1.0.47 to 1.0.49 guides prevent an exact
first-implementation claim. The older public hooks line also contains an
unreadable-file exception removed from the new guide, so it cannot stand in
for all of the new text. [Old hooks passage][hooks-source].

## 8. CORRECTED: fuller notes are established; the historical webpage is not pinned

**Read:** the live web changelog through the web reader, the 1.0.41, 1.0.51 and
1.0.52 note files, and the pinned changelog fetcher. Direct HTTP access still
returned 403. The readable page currently tops at 1.0.52 and omits the named
MCP spoofing, terminal access, path-bypass and environment-policy details.
Its 1.0.49 one-time-allow bullet omits the prior session-wide scope. The source
does point /release-notes at the per-version external Markdown. [Live page][web-changelog],
[1.0.41][n41], [1.0.51][n51], [1.0.52][n52], [fetcher][changelog-source].

**Exact fixes:** "The live page read on 2026-10-14 corroborates the reported
omissions; its exact 2026-10-13 state was not independently recovered." A moving
page is not a pinned historical receipt. Remove the assertion that note
objects were never rewritten. Keep the per-version-note recommendation, with
the generation pins recorded here.

## 9. REFUTED: the shipped workspace approval-gate claim is not established

**Read:** the old and new hub gates, the September 22 commit, the hub caller,
sandbox mode resolution, and 1.0.52 help/guide text. The public-code change is
real: Daemon switches from true to false, and the hub caller bypasses
approve_hub_call when the gate is Off. Ancestry independently places the change
in all later public syncs. [Old gate][hub-old], [new gate][hub-new],
[caller][hub-caller], [September 22 commit][sync41], [sandbox default][daemon-mode],
[mode semantics][sandbox-mode].

**Rejected claim:** that this proves stable 1.0.52, earlier released binaries,
or Grok Desktop runs hub calls unprompted. A later build timestamp is not
ancestry from the public source. There is no tag, reproducible source mapping,
or versioned note establishing the binary's gate value. The harvest itself
admits the value is unobservable and nevertheless advises operators as though
it were proven.

**Replacement:** "The September 22 public mirror disables the daemon hub gate;
release status is unconfirmed. Workspace exposure is documented as opt-in and
account-gated. Verify the actual daemon's approval and sandbox behavior before
exposing it." Classify the code observation **main-unreleased / shipping
unconfirmed**, not tagged-release by inference. The sandbox enforcement
workaround is likewise public-source behavior until tied to a shipped build.
[binary inspected][b52].

## 10. CORRECTED: compatibility documentation changed; a new regression is not proven

**Read:** all four binaries' hooks guides, 1.0.42/1.0.51/1.0.52 notes, and the
baseline and final public matcher implementations. The new guide wording,
missing-script fail-open behavior, PATH handling, managed-hook reload semantics
and additional deny exceptions are present as reported. [1.0.42][n42],
[1.0.51][n51], [1.0.52][n52], [1.0.50 guide][b50], [1.0.52 guide][b52].

**Exact fixes:** "The 1.0.52 guide corrects the documented SessionStart sources
to new/load and explicitly disclaims native Cursor reply compatibility."
Reject "Claude SessionStart matchers stop firing" as an established new
regression and "Cursor-format deny hooks were loaded and silently ineffective
until 1.0.52" as a verified historical execution path. The old guide's promise
and new guide's correction do not demonstrate the old implementation.

Likewise, plain-name and pipe-list exact matching already exists in the
**pre-window baseline** matcher. The new guide adds precision and broader list
syntax; it does not establish that exact-name matching first arrived at 1.0.50.
[Baseline matcher][matcher-old], [final matcher][matcher-new].

Keep the package-root path trap as documented at 1.0.52. Date its documentation,
not an untested first appearance of the vulnerability.

## 11. CORRECTED: sandbox scope and failure behavior need explicit exceptions

**Read:** sandbox guides from all four artifacts and the cited public guide.
The project-hook-folder paragraph is absent from 1.0.50 and present in 1.0.52.
The named ancestors are covered; descendant package folders are explicitly
excluded. Sandbox off-by-default and Linux-only child-network blocking also
check out. [1.0.50][b50], [1.0.52][b52], [public sandbox guide][sandbox-source].

**Exact fixes:** say "documented in 1.0.52, absent from the inspected 1.0.50
guide," not that the exact first fixed build and prior exploit were demonstrated.
Name the applicable profiles: workspace, read-only, strict and their custom
derivatives. **Devbox is explicitly excluded.**

Reject the blanket "only custom profiles refuse" and "a failed built-in profile
only warns." The same guide says profiles requiring direct write protection
refuse to start when that protection cannot be applied. Its generic platform
section still describes warn-and-continue, creating an internal documentation
conflict. Preserve the specific fail-closed requirement and mark the broader
failure behavior unresolved pending implementation or runtime evidence. Also
correct the prior profile's assertion that every sandbox profile protects
Grok's own config.

## 12. VERIFIED: worktree and file-loss fixes, with a non-stable fork fix

**Read:** 1.0.50, 1.0.51, 1.0.52 and 1.0.54 notes. They support the listed removal
guards, retained uncommitted work, selected-file discard behavior, failed-write
preservation, cancel/edit-resend change and wrong-checkout fork fix.
[1.0.50][n50], [1.0.51][n51], [1.0.52][n52], [1.0.54][n54].

Channel distinction is correct: stable 1.0.52 carries the first group, while
the fork correction is announced in available non-stable 1.0.54. Do not replace
stable with an alpha merely because its version is larger. Also add the
separate export/copy overwrite fix listed under misses.

## 13. VERIFIED: removals, unattended capability, and interactive tool flags

**Read:** 1.0.42, 1.0.44, 1.0.45, 1.0.51 and 1.0.53 notes, plus the shipped
headless and ACP guides. They support removed sharing, simplified memory
controls, domain grants, model-hidden sensitive form values, waiting for goals,
ACP listing, MCP token-file reloads, custom-agent selection and context-window
choice. [1.0.42][n42], [1.0.44][n44], [1.0.45][n45], [1.0.51][n51],
[1.0.53][n53], [1.0.52 artifact][b52].

The stable guide still labels tools/disallowed-tools as headless-only;
interactive application is announced in enterprise/non-stable 1.0.53.
The allowed-tools alias is specifically headless in the note. These are
documented capabilities, not demonstrations that secret values never escape
through some other channel.

## Prior claims re-checked at stable 1.0.52

There is no newest stable tag. These checks use the digest-identified stable
artifact and the versioned notes, not the mirror's crate label.

| Prior claim | Adjudication |
| --- | --- |
| folder-trust-gates-project-rules | Holds as documented in the shipped Permissions and safety guide: project rules, startup instructions and skills wait for trust; headless needs trust or a prior grant. Enforcement not exercised. |
| channel-pinnable-no-checksum | Changed. Named installation is distinct from an update-policy pin; npm carries integrity metadata; WinGet reached 1.0.52 during the window. |
| public-changelog-lags | Changed. Current page reaches stable but remains a subset. Historical October 13 page state is not independently pinned. |
| sandbox-write-denies-own-config | Correct the scope to workspace/read-only/strict and derivatives. Devbox is excluded. Do not retain the blanket fail-open assertion. |
| enterprise-signed-requirements | Holds as documented for edited signed files unless fail_closed is set. Unreadable/unparseable requirements now refuse startup. Enterprise 1.0.53 is ahead of stable. |
| hooks-fail-open | Holds with the documented exceptions for oversized gate replies and invalid rewrites. A package script-resolution failure is not a deny. |
| headless-auto-unattended | The ACP guide is byte-identical in 1.0.45 and 1.0.52 and retains Grok's own permission handling. Headless goal waiting is documented in 1.0.51. This is not a runtime certification of every older headless claim. |
| grok-bot-is-not-grok-build | Holds. The official overview lists Grok Bot separately. The Cursor worker is a distinct CLI path; naming it does not merge the products. |

Evidence read: [stable binary][b52], [comparison binary][b45],
[stable notes][n52], [older permission guide][permissions-source],
[older enforced-hook passage][hooks-source], [official overview][overview].

The bolded profile paragraphs resolve the same way: Channel and changelog advice
change; folder trust holds as documentation; sandbox needs the scope correction;
hooks retain the qualified fail-open posture; enterprise's channel lag reverses;
the ACP portion of unattended operation holds. **GitSpawn remains unresolved.**

For GitSpawn, the original researcher's dated report describes a malicious
repository directory, delivered with its .git/config, causing the harness's
background Git call to run attacker commands with the user's privileges.
Ordinary cloning does not copy that local config. The report tested Grok 1.0.13
on 2026-09-01; it does not establish 1.0.52's status. I read the public
fast-worktree probe hardening and found no named fix in the versioned notes
through 1.0.56. Neither that limited hardening nor silence proves a current
fix or current exposure. [Original report][gitspawn], [pinned probe][git-probe].

The checksum carry-forward remains open for the scripts; per-version notes
partly resolve the security-record question; enterprise/stable divergence is
settled by pointer metadata. Folder-trust and sandbox enforcement still require
a shipped implementation or runtime check.

## Misses to add

These are separate from corrections to overstated claims. Each is tied to a
versioned artifact, note, or commit. Stable channel labels below mean available
by stable 1.0.52; they do not assert exact historical promotion timestamps.

- **M1. Late-day distribution changes, 2026-10-13.** Add non-stable build
  1.0.56 and WinGet's merged stable 1.0.52 manifest. This changes the full-day
  ledger and the Windows installation advice. [1.0.56 note][n56],
  [build metadata][b56-meta], [WinGet commit][winget-commit].
- **M2. Same-file parallel edits become serialized, 1.0.44,
  2026-09-28; stable by 1.0.52.** The note describes sequential execution for
  tools editing the same file while unrelated calls remain concurrent.
  Operators should distinguish that coordination from worktree isolation.
  [1.0.44 note][n44].
- **M3. Plan-mode MCP downloads and unattended subagent limits, 1.0.51,
  2026-10-09; stable 1.0.52.** FetchMcpResource downloads are refused in plan
  mode, and no-subagents starts working in headless runs. These change what a
  planning or CI session may do; both deserve explicit review.
  [1.0.51 note][n51].
- **M4. Web-search hook domain rewriting is removed, 1.0.51,
  2026-10-09; stable 1.0.52.** Hooks can no longer rewrite a web-search call
  to restrict domains. A policy relying on that rewrite needs another control.
  This is separate from web-fetch approval-domain grants. [1.0.51 note][n51].
- **M5. HTTP MCP error replies no longer repeat execution, 1.0.52,
  2026-10-11; stable.** The note says a tool returning a JSON-RPC error executes
  only once. This matters for tools with side effects; a failure receipt does
  not necessarily mean no action occurred on older builds. [1.0.52 note][n52].
- **M6. Export/copy now refuses existing destinations, 1.0.52,
  2026-10-11; stable.** This is another file-loss fix, separate from failed
  writes and worktree deletion. Workflows that relied on overwriting need to
  handle refusal. [1.0.52 note][n52].
- **M7. Local HTTP hooks and URL validation, 1.0.52,
  2026-10-11; stable.** Local approval services become usable and invalid URLs
  surface on load. The shipped guide additionally documents non-public-address
  restrictions, proxy handling and fail-open request errors, including the
  fake-IP proxy trap. Treat those details as documented current constraints,
  not independently dated vulnerability introductions. [1.0.52 note][n52],
  [Hooks guide in stable][b52].
- **M8. Jujutsu worktree support, 1.0.51, 2026-10-09; stable 1.0.52.**
  The worktree command family gains documented Jujutsu compatibility. This
  expands the workflows operators can try beyond the deletion fixes.
  [1.0.51 note][n51].
- **M9. Strict's daemon storage allowance, documented by 1.0.52,
  2026-10-11; stable artifact documentation.** The newer sandbox guide adds
  write access to ~/.grok/daemon/run/strict when the daemon backend runs the
  session; custom profiles get their own named directory. The 1.0.50 guide
  lacks this allowance. Include it when describing the writable surface;
  the first implementation version is unproven. [1.0.50 guide][b50],
  [1.0.52 guide][b52].

The Cursor clone-pool qualification is recorded in section 4 instead of counted
again here. The old PostToolUse exit-code behavior was already covered by the
parent's broader hook finding; it is not a newly dated change.

## Security, license, and rule checks

- Repository security/advisories and the repository advisory API return zero
  published advisories. The GHSA API query for npm @xai-official/grok also
  returns zero. NVD's exact "grok build" keyword query returns totalResults 0.
  These are bounded negative searches, not proof that no advisory exists under
  another name. [Repository advisories][security],
  [package advisory query][ghsa-query], [NVD query][nvd-query].
- I did not find a new in-window CVE/GHSA attributable to this harness.
  Search results for the similarly named VS Code extension and Grok image
  compression library are different products and were excluded. No identifier
  belonging to another agent has been assigned to Grok Build here.
- The harvest describes what the approval and path defects allow in ordinary
  words. GitSpawn needs the delivery and version qualifications above.
  Claims of current safety or exposure must not be inferred from missing
  advisories.
- The source license has no in-window changes. npm versions 1.0.40 through
  1.0.56 all declare Apache-2.0. That metadata is not proof of a complete
  source/binary correspondence. No new license change was established.
  [Source license][license], [registry][registry].
- Marketing remains separate from harness facts. The overview's Grok 4.7 API
  promotion does not establish a CLI model change. No social quotation or
  social-derived product claim was used.
- Every numbered section's GitHub receipt was read at its explicit SHA.
  All named versioned note receipts were fetched. Binary receipts were
  independently hash-checked. The web changelog is the material unpinned
  exception and is bounded accordingly. A few harvest dates describe
  observation dates, not introductions; sections 4, 7, 10 and 11 need that
  distinction in any published finding.

## Verification limits and file custody

This review did not run Grok, its hooks, its sandbox, its worker, or any cloned
code. Embedded documentation supports what ships as documentation; it does not
prove kernel enforcement, account availability or an exploit's first affected
version. Historical alpha assignments, earlier stable pointer transitions and
the exact October 13 webpage remain unrecovered.

No site build, npm install, or repository Git write command was run. The only
authored repository file is this crosscheck; the requested scratch clone is
the only upstream checkout created. The harvest was not edited.

[registry]: https://registry.npmjs.org/@xai-official%2Fgrok
[npm52]: https://registry.npmjs.org/@xai-official/grok/1.0.52
[npm-linux52]: https://registry.npmjs.org/@xai-official/grok-linux-x64/1.0.52
[npm-lock]: https://github.com/npm/cli/blob/v11.6.0/docs/lib/content/configuring-npm/package-lock-json.md#L38-L42
[stable-pin]: https://storage.googleapis.com/grok-build-public-artifacts/cli/stable?generation=1791826035416926
[enterprise-pin]: https://storage.googleapis.com/grok-build-public-artifacts/cli/enterprise?generation=1791828914730794
[alpha-meta]: https://storage.googleapis.com/storage/v1/b/grok-build-public-artifacts/o/cli%2Falpha
[b56-meta]: https://storage.googleapis.com/storage/v1/b/grok-build-public-artifacts/o/cli%2Fgrok-1.0.56-linux-x86_64?generation=1791925057041067
[b45]: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.45-linux-x86_64?generation=1790661872193104
[b46]: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.46-linux-x86_64?generation=1790805950398756
[b50]: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.50-linux-x86_64?generation=1791324290710388
[b52]: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
[n40]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.40.external.md?generation=1789955873795574
[n41]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.41.external.md?generation=1790112725279394
[n42]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.42.external.md?generation=1790446548796174
[n44]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.44.external.md?generation=1790656650477799
[n45]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.45.external.md?generation=1790661788238032
[n46]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.46.external.md?generation=1790815986081588
[n48]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.48.external.md?generation=1790903532775974
[n49]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.49.external.md?generation=1790966793575972
[n50]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140
[n51]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
[n52]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
[n53]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.53.external.md?generation=1791827231375569
[n54]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.54.external.md?generation=1791844061749505
[n56]: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.56.external.md?generation=1791924973862411
[compare]: https://github.com/xai-org/grok-build/compare/4247f661689354b831191f11eeeac8424993fe3d...2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8
[last-commit]: https://github.com/xai-org/grok-build/commit/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8
[sync41]: https://github.com/xai-org/grok-build/commit/07e35a3dfeed2f200d319ef6c893b5ea286d9a51
[source-rev]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/SOURCE_REV
[install-sh]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/scripts/install.sh#L207-L345
[install-ps1]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/scripts/install.ps1#L228-L347
[npm-source]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/npm/grok/package.json
[updater]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/auto_update.rs#L560-L790
[download-check]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-update/src/version.rs#L28
[path-match]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-permission-rules/src/policy/path_match.rs#L8-L73
[cursor-stub]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell/src/leader/cursor_worker_stub.rs#L1-L24
[cursor-mod]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell/src/leader/mod.rs#L54-L55
[readme]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/README.md#L31-L35
[sandbox-source]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/18-sandbox.md#L26-L61
[hooks-source]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/10-hooks.md#L234-L240
[permissions-source]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L559
[changelog-source]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell-base/src/util/changelog.rs#L1-L13
[hub-old]: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-workspace/src/permission/hub_gate.rs#L66-L81
[hub-new]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-workspace/src/permission/hub_gate.rs#L61-L96
[hub-caller]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-workspace/src/hub.rs#L495-L516
[daemon-mode]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-workspace/src/sandbox_mode.rs#L1-L9
[sandbox-mode]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-config/src/sandbox_mode.rs#L8-L22
[matcher-old]: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-hooks/src/matcher.rs#L22-L70
[matcher-new]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-hooks/src/matcher.rs#L22-L70
[git-probe]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-fast-worktree/src/git/safety.rs#L310-L324
[winget-commit]: https://github.com/microsoft/winget-pkgs/commit/b057f0992015764a607c7e6f9c07eaa1de8a98d0
[winget52]: https://github.com/microsoft/winget-pkgs/blob/b057f0992015764a607c7e6f9c07eaa1de8a98d0/manifests/x/xAI/GrokBuild/1.0.52/xAI.GrokBuild.installer.yaml
[web-changelog]: https://x.ai/changelog/build
[overview]: https://docs.x.ai/build/overview
[gitspawn]: https://www.manifold.security/blog/ai-coding-agents-git-hijack
[security]: https://github.com/xai-org/grok-build/security/advisories
[ghsa-query]: https://api.github.com/advisories?ecosystem=npm&affects=%40xai-official%2Fgrok
[nvd-query]: https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=grok%20build
[license]: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/LICENSE

