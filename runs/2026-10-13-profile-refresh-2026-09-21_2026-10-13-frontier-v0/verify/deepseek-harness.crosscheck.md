# Crosscheck: deepseek-harness

Run: `2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0`.
Window: 2026-09-21 through 2026-10-13, excluding changes already recorded by the parent run unless their channel changed.
Independent verification performed on 2026-10-14. This report does not backdate that observation to the profile date.

**Disposition: do not promote the harvest unchanged.** The release ledger and core install-channel answer are correct. Seven numbered sections need corrections. Six in-window CVE/GHSA publications were missed, as were a credential-to-operator trust path and material defaults and migration requirements.

Counts cover the eleven numbered harvest sections only: **VERIFIED 4; CORRECTED 7; REFUTED 0; UNVERIFIABLE 0.** A corrected section retains its independently supported finding and explicitly rejects unsupported clauses. Rejected subclaims and unconfirmed vulnerability mechanisms are identified below; their publication is not treated as proof of exploitability.

## Method and evidence boundary

Read the house authorities, researcher brief, watched-source contract and notes, current profile, parent harvest, and assigned harvest. Independently listed GitHub releases, fetched registry JSON and Desktop feeds, and read tagged code and release bodies. Used the separate blobless, no-checkout clone at `/Users/c3po/co/frontier/tmp/refresh-2026-10-13/clones/deepseek-harness-verify/` for `git show`, `git rev-list`, and `git merge-base --is-ancestor`. An ancestry result of 0 means contained; 1 means not contained.

All links on the harvest's numbered `Receipt` lines point to a tag, full commit, or commit-pinned blob. I opened those receipts through the release API or the matching git objects, then checked supporting code. This passes the pin-format check, not automatically the claim-support check. Registry dist-tags, Desktop feeds, release-object metadata and discussion bodies are mutable observations. Pinned CVE record snapshots below preserve the advisory text available by the window close.

No upstream code, exploit, package installation, build, or runtime probe was executed. No publication-repository git write operation was used. Exact installed dependency-tree counts, installer signatures, active mandatory-update policy, network payloads and live exploit outcomes therefore receive no independent runtime certification.

## Channel truth and release ledger

**Install today is correct about stable/latest:** there was no stable harness release by 2026-10-13. Independently observed 27 tags, all rc/alpha; 26 GitHub release objects, all prereleases and none drafts; and 31 npm CLI versions, all prereleases. The newest CLI package remains `0.2.1-alpha.2`; `latest` and `next` point to `0.2.0-rc.2`, while `alpha` points to `0.2.1-alpha.2`. There is no newer in-window CLI release missing from the ledger. [GitHub release metadata](https://api.github.com/repos/deepseek-ai/deepseek-harness/releases?per_page=100), [npm CLI packument](https://registry.npmjs.org/@deepseek-ai%2Fdsh).

The registry's `time.modified` is 2026-10-09T08:18:00.724Z. This is consistent with the researcher's 2026-10-13 dist-tag snapshot, but it is not a dist-tag audit trail. Reject the claimed human/manual promotion, exact promotion time, and independently unconfirmed installed-tree counts. Desktop's documented signing and mandatory-update support are not evidence that I verified an installer signature or observed an active blocking policy. Those qualifications belong in Install today as well as sections 1 and 6.

All timestamps below are UTC in 2026. GitHub dates are release publication times except the explicitly labeled tag-only row. npm times are truncated to seconds, matching the harvest. Ahead/behind counts were independently rerun and match.

| Tag | GitHub publication | npm publication | Ahead/behind against stated predecessor | Ahead/behind against 0.1.5-rc.2 |
|---|---|---|---|---|
| [0.1.5-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.5-rc.2) | 2026-09-10 15:09:34 | 2026-09-10 14:57:10 | 4/0 against 0.1.5-rc.1 | 0/0 |
| [0.1.6-alpha.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.6-alpha.2) | 2026-09-17 13:30:16 | 2026-09-17 13:52:10 | 887/0 against 0.1.6-alpha.1 | 1687/0 |
| [0.1.5-rc.3](https://github.com/deepseek-ai/deepseek-harness/tree/dsh-v0.1.5-rc.3) | No release object; tag commit 2026-09-22 05:26:23 | 2026-09-22 05:55:20 | 3/0 against 0.1.5-rc.2 | 3/0 |
| [0.1.7-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-alpha.1) | 2026-09-22 06:16:27 | 2026-09-22 06:23:31 | 1299/0 against 0.1.6-alpha.2 | 2986/0 |
| [0.1.7-alpha.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-alpha.2) | 2026-09-22 15:49:49 | 2026-09-22 16:08:55 | 162/0 against 0.1.7-alpha.1 | 3148/0 |
| [0.1.7-rc.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1) | 2026-09-23 13:30:24 | 2026-09-23 13:44:12 | 156/0 against 0.1.7-alpha.2; 3301/0 against 0.1.5-rc.3 | 3304/0 |
| [0.1.7-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.2) | 2026-09-24 14:10:21 | 2026-09-24 14:18:11 | 346/0 against 0.1.7-rc.1 | 3650/0 |
| [0.2.0-rc.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.1) | 2026-09-28 12:36:21 | 2026-09-28 12:34:03 | 261/0 against 0.1.7-rc.2 | 3911/0 |
| [0.2.0-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.0-rc.2) | 2026-09-29 09:42:36 | 2026-09-29 09:56:27 | 187/0 against 0.2.0-rc.1 | 4098/0 |
| [0.2.1-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.1) | 2026-10-03 06:42:19 | 2026-10-03 04:53:22 | 266/0 against 0.2.0-rc.2 | 4364/0 |
| [0.2.1-alpha.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2) | 2026-10-09 11:09:26 | 2026-10-09 08:18:00 | 669/0 against 0.2.1-alpha.1 | 5033/0 |

All release-object rows have `prerelease: true`; the tag-only row has no such flag. Its release endpoint independently returned HTTP 404. The branch exception matters: 0.1.7-alpha.1 is 2986 ahead and 3 behind 0.1.5-rc.3, so the section 1 shorthand that every tag fast-forwards its predecessor needs the ledger's explicit comparison pairs.

`master` and HEAD resolve to `d743267388641bc76f17c45ce8b4c231aed1d32c`, identical to 0.2.1-alpha.2 and 935/0 ahead of `639ed015397290b3745d163aafe02ffee4aa3f84` (0.2.0-rc.2). Nothing observed is main-only. The parent's closing commit `08b73684` is an ancestor, with 2066 later commits. The alpha.2 annotated tag object is `6851e496285b2c9670066fdd142e7e46da586649`, tagged 2026-10-09T09:40:56Z, after npm publication and before its release object. [Pinned comparison](https://github.com/deepseek-ai/deepseek-harness/compare/639ed015397290b3745d163aafe02ffee4aa3f84...d743267388641bc76f17c45ce8b4c231aed1d32c).

Other distribution checks:

- Desktop feeds independently return 0.2.0-rc.2: [macOS arm64](https://download.deepseek.com/dsh-desk/feeds/mac-arm64/nightly-mac.yml), [macOS x64](https://download.deepseek.com/dsh-desk/feeds/mac-x64/nightly-mac.yml), [Windows x64](https://download.deepseek.com/dsh-desk/feeds/win-x64/nightly.yml). Their release dates are 2026-09-29 at 10:18:12, 10:21:51 and 10:35:27 respectively. These are current mutable feed observations, not archived proof of their 2026-10-13 state. The [pinned feed-selection code](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/apps/desktop/scripts/desktop-auto-update-environment.mjs#L72-L81) supports those targets and nightly filenames.
- Both [PyPI SDK](https://pypi.org/pypi/deepseek-harness-sdk/json) and [runtime-bin](https://pypi.org/pypi/deepseek-harness-runtime-bin/json) stop at 0.1.5rc1, published 2026-09-10; neither has an in-window release.
- Component dist-tags match the harvest's stale `latest` examples. CLI dependencies, rather than those bare component tags, determine the CLI's requested component versions.
- [Cordis registry history](https://registry.npmjs.org/@deepseek-ai%2Fcordis) confirms 4.0.3 on 2026-09-22T03:47:06Z, 4.0.4 on 2026-09-22T15:36:40Z and 4.0.5-alpha.1 on 2026-10-03T03:15:06Z. A newer 4.0.5-alpha.2 appeared on **2026-10-14T11:44:16Z**, outside this window; do not count it as a researcher miss or backdate its dist-tag. `latest` remains 4.0.4.

## Independent ancestry checkpoints

The following results supplement tagged file comparisons for each section. All containing tags here are `preview-or-beta`, never stable.

| Change | Commit checked | Not contained in | Contained in |
|---|---|---|---|
| Windows delete confinement | `d5ad3baeb5d531e31da5e586c3ec3ebedd825169`, merge `eb7d3af91ce0c5aaa3df0d1e62f4900ea4d4371c` | 0.1.5-rc.3, 0.1.6-alpha.2 | 0.1.7-alpha.1, 0.1.7-rc.1, 0.2.0-rc.2, 0.2.1-alpha.2 |
| Scheduled-user framing | `af39300572bf4494370a1d0be19ce3c1ff330d36`, merge `511a62cd1b26977e4cf1a3319f78683c1ff6d055` | 0.2.0-rc.1 | 0.2.0-rc.2, both 0.2.1 alphas |
| 0.1.5 vendor dependency pin | `943af81a185ea4d70eda2b36598938857b1f851b` | 0.1.5-rc.2, 0.1.7-alpha.1 | 0.1.5-rc.3, 0.1.7-rc.1, 0.2.0-rc.2 |
| Revert transactional reload | `e07f41d5fd8ca172287fda0f923b4d1f69c592f3` | 0.1.5-rc.2 | 0.1.6-alpha.2, 0.1.7-rc.1, 0.2.0-rc.2 |
| Old Bubblewrap PID fix | `82db1515fbbf3c161a62e6a989d4e19fca6dde85` | 0.1.0-rc.8 | 0.1.1-rc.1, 0.2.0-rc.2 |
| Unlimited job-completion wakes | `b6775f6d4f55eaa0bcac36318cd7dfc98d70195c` | 0.1.7-alpha.1 | 0.1.7-alpha.2, 0.1.7-rc.1, both current channel heads |
| E2B retirement; workflow worker replacement | `c49db8bc8c2924e115308692d34af7539288e7bb`; `35af8698c24c1b7654cd5c83dcbec224e50f2337` | Old affected implementations read separately below | 0.1.6-alpha.1, 0.1.7-rc.1, both current channel heads |
| Remove mixed tool presentation | `4359d3ee17c002c05818d03c6e903767b0705a16` | 0.2.0-rc.2, 0.2.1-alpha.1 | 0.2.1-alpha.2 |
| Concrete binds and remove webRuntime | `cb9a590c86d90948989247863bd921261bc0350b` | 0.2.0-rc.2, 0.2.1-alpha.1 | 0.2.1-alpha.2 |

## Section 1: CORRECTED

The release counts, npm heads, Desktop feed names and prerelease status are supported. The 2026-09-29 release date is correct. The [release selector](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/scripts/release/families.ts#L355-L361) maps rc publication to `next`; it does not prove that a human, rather than another script, service or workflow, subsequently set `latest`. **REFUTED for promotion:** "moved by hand", "someone outside the release workflow", and a proven historical promotion interval based only on packument modification time.

Exact replacement: "npm `latest` is observed at 0.2.0-rc.2. The checked release path publishes rc versions to `next`; the actor, mechanism and exact time of the `latest` promotion are unrecorded."

The [Desktop update documentation](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/apps/desktop/README.md#L399-L419) describes ten-minute polling with jitter, manual download/restart decisions and support for mandatory policy. It does not show that every check downloads or installs an update. Describe signing as the vendor's documented packaging design, and mandatory blocking as a supported policy whose live endpoint was not observed. Do not claim independent binary verification.

## Section 2: CORRECTED

The important default flip is verified: `enabled` is false at 0.1.5-rc.2/rc.3, true in the earlier alpha and 0.1.7-rc.1, and true at both current heads. First rc shipment is 2026-09-23. [Pinned default and preparation logic](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/src/index.ts#L51-L54), [backlog behavior](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/session/session-log-deepseek/README.md#L33-L47), [OTel-only environment switch](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/app-boot/src/profile-context.ts#L39-L55).

Exact replacement for "Every session request ... now carries ... until DeepSeek acknowledges it": "Eligible requests through the DeepSeek adapter can include a bounded contiguous prefix of unaccepted session events, with an 8 MiB default cap; successful HTTP responses advance the local acceptance watermark. Re-enabling resumes the backlog, including events recorded while disabled."

The code requires an eligible live Session and pending serializable data. An oversized or unserializable first event can prevent a field from being attached; a specific application-level acknowledgement is not required. The [adapter](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/adapter.ts#L106-L112) does not destination-gate this extension. Retain the relay/baseURL warning, but do not imply account-token forwarding is similarly unrestricted: account credentials have a separate origin check. The package inventory, feedback OTel and Desktop analytics findings are supported by their rows, not measured wire traffic. The sentence attributing the default to the lab's desire for real-session data is an inference, not a documented motive.

## Section 3: CORRECTED

The Web terminal and Plugin Manager reach the rc line in 0.1.7-rc.1 on 2026-09-23; the CLI includes optional Auto review from 0.1.7-rc.2 on 2026-09-24. [Terminal authority](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/api/terminal-controller/README.md#L30), [in-process plugins and manager protection](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/README.md#L31), and [Auto review lifecycle](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/experimental/auto-review/README.md#L58-L62) support the consequential security claims.

Three exact fixes:

- "Config hot reload is on for profile launches" becomes "The base/Web composition enables configuration reload; headless, SDK and ACP explicitly disable it, and custom profiles may override it." Read the [headless override](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/headless/cordis.patch.yml#L33-L34), SDK lines 24-25 and ACP lines 23-24 at the same commit.
- "A denied call goes to the human" becomes "Under Auto's usual `ask` policy, a denial may request human approval if later listeners do not deny or cancel it; under `never`, the denial is final." This qualification comes directly from README line 58.
- "Nothing rolls back" becomes "Activation failures can leave partially applied plugin changes; parse failures preserve the previous configuration." [0.1.7-rc.1 notes](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1).

Unloading Auto really does move live Auto Sessions to Full access with `never`. Installed does not mean enabled, and the optional reviewer does not provide a file sandbox. The terminal and plugin installer remain operator-authority surfaces.

## Section 4: VERIFIED

The [framing commit](https://github.com/deepseek-ai/deepseek-harness/commit/af39300572bf4494370a1d0be19ce3c1ff330d36) and merge are absent from 0.2.0-rc.1 and present in 0.2.0-rc.2, released 2026-09-29. I read both the renderers and the [decision note](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/.agents/notes/implemented/architecture/2026-09-24-scheduled-message-framing.md#L15): the note explicitly recognizes model-written reminder content and the removed untrusted-content instruction.

The Schedule bundle is optional at the rc head. The [alpha Standard preset](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/bundle/web-app/presets/standard.patch.yml#L35-L36) enables its tools; this does not mean every custom or Minimal profile does. Preserve the claim as a source-confirmed framing/trust change, not a demonstrated prompt-injection exploit.

## Section 5: CORRECTED

The [Windows fix](https://github.com/deepseek-ai/deepseek-harness/commit/d5ad3baeb5d531e31da5e586c3ec3ebedd825169) explicitly describes out-of-workspace deletion under both confined modes and the relevant ambient ACL rights. It is absent from 0.1.5-rc.3/0.1.6-alpha.2 and present from 0.1.7-alpha.1 on 2026-09-22 and 0.1.7-rc.1 on 2026-09-23. This is source and vendor-test evidence, not a Windows reproduction by this verifier.

Exact replacement for "permanent", "icacls cannot remove it" and "for good": "Workspace Low labels and access entries persist after DSH exits by design; cleanup must use the ACL module's revocation path. Manual `icacls` cleanup of the derived SID can fail. A standing Low label broadens access for other Low-integrity processes while it remains." The [same README lines 128-129](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-windows-acl/README.md#L128-L129) that the harvest cites explicitly describe module revocation. Persisting is not irrevocability. Windows writes still depend on the relevant discretionary permissions; a Low label alone is not permission to every process.

Replace "there is no advisory" and "No advisory feed will tell you any of this" with "No matching Windows-delete advisory was found in the checked sources." The repository advisory list is empty, but six global CVE/GHSA disclosures exist in this window. Package-filtered queries missed them; see M1-M6.

## Section 6: CORRECTED

The dependency-range problem and DeepSeek's ownership of its published Cordis fork are independently supported. Registry manifests for 0.1.5-rc.2 request component carets and Cordis `^4.0.2`; 0.1.5-rc.3 pins the vendor dependency, and the current rc pins internal components while permitting selected vendor patch updates. [Pinning commit](https://github.com/deepseek-ai/deepseek-harness/commit/943af81a185ea4d70eda2b36598938857b1f851b), [fork provenance and ranges](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/vendor/README.md#L5), [local lifecycle and reload changes](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/vendor/README.md#L38-L40).

**REFUTED for independent promotion:** the exact 230/231 and 278 installed-package counts, two installed Cordis copies, and exact hoisting layout. These are the researcher's claimed resolver experiment, not an attached lockfile or a probe independently rerun here. This job expressly forbids `npm install`, including a lockfile-only install. Manifests alone do not prove a complete installed graph.

Exact replacement: "Pinning the CLI version does not freeze dependencies expressed as ranges. Commit a reviewed lockfile; the current rc still permits vendor patch updates." Keep the verified version constraints and npm publication dates, remove the unsupported graph totals and installation outcome from both section 6 and Install today. The alpha pi-ai range is `^1.0.2`, and the registry contains compatible 1.2.0 dated 2026-10-12T23:01:40Z; describe that as a permitted resolution, not an observed installed version.

## Section 7: VERIFIED

At 0.2.0-rc.2, [the webserver schema](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/host/webserver/src/index.ts#L127) permits a wildcard through configuration while the CLI rejects the corresponding flag. Alpha.2 [rejects unspecified addresses](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/host/webserver/src/index.ts#L262-L268), and its [public-deployment guide](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/docs/user/guide/public-deployments.md#L27-L35) distinguishes URL/Host configuration from authentication.

Keep dates separate: public-URL support is in 0.2.1-alpha.1 on 2026-10-03; concrete binds and native TLS reach alpha.2 on 2026-10-09. The bind commit's author date is 2026-10-04 and committer date is 2026-10-08, not its release date. Cookie authentication remains, now TLS-aware. "Login is unchanged" must not be used as proof that the cookie key is isolated from an agent: M7 changes that security assessment. M10 adds the omitted migration consequence of the same bind change.

## Section 8: VERIFIED

The account provider is present by 0.1.7-rc.2 on 2026-09-24, with separate account-funded and API-key entries. The [platform/inference origins](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/credentials/deepseek-account-platform/src/index.ts#L53-L56), [OAuth/PKCE design](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/credentials/deepseek-account-platform/README.md#L41), [release notes](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.2), and [Desktop runtime ownership](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/architecture.md#L51-L55) support the finding.

The callback deliberately bypasses RPC-cookie authentication but validates OAuth state and PKCE; do not shorten this into an unprotected callback claim. The 0.2.0-rc.2 Desktop release dated 2026-09-29 bundles its CLI; documentation says the installed command survives application removal. Account credit availability, actual billing and installer contents were not exercised. Code establishes the route and packaging contract, not a successful paid task.

## Section 9: VERIFIED

Read the [0.1.7-rc.1 release body](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.1) and the [protocol rejection](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/config.ts#L206-L207). The old `protocol` key really is rejected; the official adapter uses the Messages route. The release notes support the settings and preset migration, E2B retirement, PTC rename/runtime changes, event rename, Session V4, byte-to-token spill setting and compatibility checks. These changes reach the rc channel on 2026-09-23 and remain at 0.2.0-rc.2.

The separately labeled runtime-invariant and stats changes are alpha-only. The section is accurate but incomplete: alpha.2 adds the migration requirements in M9-M10. Do not translate a documented compatibility gate into a claim that every old plugin necessarily fails; the harvest's instruction to expect a compatibility review is appropriate.

## Section 10: CORRECTED

Ralph's default is off at the rc head; the [base-row comment](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/base/cordis.patch.yml#L440-L449) distinguishes worker self-report from independent evaluation. It does not establish a broader vendor loss of trust. Replace that attributed motive with the documented reason and retain the recommendation for an independent completion check. The plugin was disabled, not deleted from the rc implementation.

The [headless flags](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/bundle/headless/src/startup.ts#L43-L44) and [0.1.7-rc.2 capabilities](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.7-rc.2) are supported. **REFUTED:** cache-preserving tool changes require the model and harness to come from the same lab, or cannot be shipped by a third-party harness. The evidence establishes a model/API capability plus a compatible adapter, not common ownership. The [alpha.2 notes](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2) also describe model-declared in-conversation tool support through pi-ai.

Timed questions are opt-in; the shipped schema remains blocking, and a timeout does not grant approval. [Pinned question contract](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/interaction/tool-ask-user/README.md#L30-L44). Add the missing background-wake default in M8.

## Section 11: CORRECTED

The [alpha.2 release](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2), [global-instruction contract](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/context/agent-instructions/README.md#L30-L40) and [Codex default](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/subagent/subagent-codex/src/run.ts#L69) support catalog installation and shared instructions on 2026-10-09. The 2026-10-03 alpha.1 notes describe the Mods experiment as a capability comparison, not practical compatibility. Both wrappers retain the same approval defaults at the rc head and alpha head; Claude Code's [default is `dontAsk`](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/subagent/subagent-claude-code/src/run.ts#L56).

Exact fixes: replace "whatever is there now enters every dsh session" with "Base-backed profiles with the instruction plugin and a filesystem provider load eligible global files on the first request, subject to the byte budget and deduplication." Replace "never come back to you" with "default to unattended approval modes"; those settings do not imply every requested operation succeeds or that every kind of user communication is suppressed. The wrappers already existed on rc; the new catalog and global-instruction behavior are alpha-only. Also record that per-row home overrides are ignored, M9.

## Prior claims re-checked at the newest rc

There is no newest stable to inspect. I used 0.2.0-rc.2 and separately checked relevant differences at 0.2.1-alpha.2.

- **Web login: holds as an authentication mechanism; the isolation conclusion needs qualification.** [RPC admission](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112) checks Host/Origin before the signed cookie, including loopback. The source's 401 branch is verified, not a live request. M7 shows why a same-user sandbox is not independent of that cookie authority.
- **All-prerelease status: holds; old pin superseded.** Use the independently checked channel table. Manual dist-tag promotion and exact resolved dependency counts do not hold as independently verified facts.
- **Replaceable approval gate and unsandboxed plugins: hold.** [Architecture](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/architecture.md#L11-L39), the ordinary `approval` row at base lines 245-248, and Plugin Manager's own-component-only protection support this. The approval subsystem's `never` check precedes its waterfall; it is not a privileged immutable core.
- **Session upload: changed as the harvest says, with section 2's payload qualification.** The prior alpha-only wording is obsolete at the default rc install. Desktop analytics is a separate row.
- **WebFetch and removed gates: mostly hold.** [Public WebFetch policy](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/subsystems/web.md#L129-L131) requires no per-call confirmation across sandbox/approval modes. Auto remains optional; denial handling is conditional, and unloading retains the Full-access transition.
- **Sandbox warning: holds.** [SAFETY.md](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/SAFETY.md) is unchanged from the old rc. The [PID-namespace fix](https://github.com/deepseek-ai/deepseek-harness/commit/82db1515fbbf3c161a62e6a989d4e19fca6dde85) is independently contained in 0.1.1-rc.1 and current rc, not 0.1.0-rc.8. Do not conflate that `/proc` mechanism with M1's mount/capability report or call the whole product advisory-free.
- **Default model: holds at rc.** Base selects `deepseek-official` / `deepseek-flash`; [model metadata](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/llm/llm-deepseek/src/models.ts#L8-L9) labels it DeepSeek-V41-Flash. The protocol half changes as section 9 says.
- **Headless NDJSON/resume: prior recommendation was wrong at its old pin.** Those flags are absent at 0.1.5-rc.2, present in 0.1.6-alpha.1 and the current rc. The 8-child, depth-1 default and remote-workspace capabilities have rc release-note support.
- **Rival providers and harnesses: hold as supported routes.** The pi-ai row and provider guide remain; this does not certify every external model's behavior. Unattended approval defaults were re-read at both heads.
- **English/Chinese authority: documentary answer holds.** The [i18n contract](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/docs/i18n/README.md#L9) gives equal authority. I did not run its pairing gate or certify all translations.
- **Public mirror/private development home: overclaimed.** Nonpublic PR references and HTTP 404 observations establish unavailable public review history, not the precise private development location or the cause of a 404. Replace "mirror confirmed" with the observable limitation unless a direct maintainer statement or mirror configuration is supplied. This does not invalidate the public tag ancestry.

## Misses: security publications

The repository's [published advisory list](https://api.github.com/repos/deepseek-ai/deepseek-harness/security-advisories) is empty. That negative result does not cover the global databases. Broad GitHub advisory and NVD searches found the six records below. All six GitHub entries are `unreviewed` and have an empty `vulnerabilities` array, explaining why the researcher's npm `affects` filters found none. Each is an in-window **publication**, even when the affected implementation or underlying report predates the window. None of the metadata alone proves that the newest rc is affected or fixed.

### M1. CVE-2026-101078 / GHSA-23q9-h232-4q79

Published 2026-09-28T15:30:18Z; GitHub publication 18:31:24Z. The record describes local sandbox isolation failure through 0.1.7-rc.2. [Pinned CVE record](https://github.com/CVEProject/cvelistV5/blob/71c9c9757e4d1553ee3e16032c43469dfec5a9fd/cves/2026/101xxx/CVE-2026-101078.json), [GHSA](https://github.com/advisories/GHSA-23q9-h232-4q79), [NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-101078).

Plain consequence alleged by the referenced [original report](https://github.com/Ruoyyy/My_vulnerable/blob/364965b90bd1674eb70477b92607e965cec43376/SECURITY-MOUNT-ESCAPE.en.md): a root-run confined command retaining mount capability can remount host filesystems and write outside the intended workspace. This is not an ordinary unprivileged desktop escape. The CVE names Landlock, whereas the report principally argues about Bubblewrap and privileged mounts. The current [profile builders](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-local/src/profiles.ts#L16-L35) were read, but launch arguments alone do not settle backend capability handling. **Publication VERIFIED; that exact root-escape mechanism and current affected/fixed status REFUTED for product-fact promotion without further evidence.** Channel: advisory/docs-only; stated affected range is prerelease. Do not label the old PID fix as this CVE's fix.

### M2. CVE-2026-101102 / GHSA-m9ww-cpfc-8cf2

Published 2026-09-28T18:00:07Z; GitHub publication 18:31:26Z. The record names Code Mode `run_code` through 0.1.0-rc.7. [Pinned CVE record](https://github.com/CVEProject/cvelistV5/blob/f9975a22f71be782aff19e6fac192da4b9ca5613/cves/2026/101xxx/CVE-2026-101102.json), [GHSA](https://github.com/advisories/GHSA-m9ww-cpfc-8cf2), [NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-101102).

The old [worker-runtime contract](https://github.com/deepseek-ai/deepseek-harness/blob/dsh-v0.1.0-rc.7/packages/code-runtime/code-runtime-worker-thread/README.md#L5) explicitly grants model-written code host-user execution rather than a hostile-code security boundary. In plain words, code in that worker can reach files and processes with the harness user's rights despite a user's expectation of confinement. The current [Node PTC runtime](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/ptc-runtime/ptc-runtime-node/README.md#L62-L74) uses separate sandboxed processes. **Publication and old trust model VERIFIED; no unauthenticated remote exploit or current-version CVE fix attribution is established.** Channel: advisory/docs-only; the replacement runtime is on the rc channel from 0.1.7-rc.1. Record the architectural replacement, not a vendor-certified CVE fix.

### M3. CVE-2026-101131 / GHSA-vcc3-4jvw-qx89

Published 2026-09-28T18:30:14Z; GitHub publication 21:31:16Z. The record alleges a local attacker can influence a trusted sandbox-setup decision through `E2B_API_KEY`, through 0.1.5-rc.3. [Pinned CVE record](https://github.com/CVEProject/cvelistV5/blob/a16e0dce460042963be9c343d261234166097f54/cves/2026/101xxx/CVE-2026-101131.json), [GHSA](https://github.com/advisories/GHSA-vcc3-4jvw-qx89), [NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-101131).

The old [E2B implementation](https://github.com/deepseek-ai/deepseek-harness/blob/dsh-v0.1.5-rc.3/packages/e2b/e2b/src/index.ts#L93-L106) reads the key from configuration or the environment and uses it to create the remote sandbox; its contract says the key is not forwarded into that sandbox. **Publication VERIFIED; a specific key-exfiltration claim or practical exploit is REFUTED for promotion.** The referenced detailed submission was inaccessible, and choosing an API credential alone does not prove a security bypass. The component was [retired on 2026-09-11](https://github.com/deepseek-ai/deepseek-harness/commit/c49db8bc8c2924e115308692d34af7539288e7bb), already present in 0.1.6-alpha.1 and 0.1.7-rc.1 ancestry. Channel: new advisory/docs-only about an old prerelease component; the current rc does not contain that E2B implementation. Do not call its removal a newly released September 28 fix.

### M4. CVE-2026-101132 / GHSA-rh7q-h525-wx9f

Published 2026-09-28T18:45:08Z; GitHub publication 21:31:16Z. The record identifies bundle-patch path traversal through 0.1.7-rc.2. [Pinned CVE record](https://github.com/CVEProject/cvelistV5/blob/f9975a22f71be782aff19e6fac192da4b9ca5613/cves/2026/101xxx/CVE-2026-101132.json), [GHSA](https://github.com/advisories/GHSA-rh7q-h525-wx9f), [NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-101132).

Independently confirmed at both channel heads: [`bundlePatchPaths`](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/app-boot/src/profile.ts#L58-L75) validates strings then joins them to the package directory without containment enforcement. The loader later reads and parses those paths. A malicious installed bundle can select a patch file outside its own package; valid patch content can then affect composed configuration. This does not prove unrestricted disclosure of every file, because successful patch parsing/composition has format requirements, nor is it a pre-auth network endpoint. **Publication and missing path-containment check VERIFIED statically.** Channel: current rc and alpha retain the check gap; no fixed tag established. Operator consequence: package/bundle review must include patch paths and contents, not just npm names.

### M5. CVE-2026-108788 / GHSA-5mvr-2xwh-9v9q

Published 2026-10-12T02:00:56Z; GitHub publication 03:32:55Z. The record names local manipulation of `spawn`'s `Profile` argument through 0.1.1-rc.2. In plain language it alleges a locally controlled launch profile can bypass intended sandbox restrictions and let a command operate outside them. [Pinned CVE record](https://github.com/CVEProject/cvelistV5/blob/20d9248c60fe62803efade3177e8b82b586d154c/cves/2026/108xxx/CVE-2026-108788.json), [GHSA](https://github.com/advisories/GHSA-5mvr-2xwh-9v9q), [NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-108788).

**Publication VERIFIED; exact mechanism, current exposure and fixed release REFUTED for promotion.** The referenced VulDB submission and external detailed exploit document were inaccessible, and the broad description does not identify a defensible payload or fixing commit. Reading old/current spawn paths is not enough to infer one. Channel: advisory/docs-only about older prereleases. Keep this disclosure in the security inventory, clearly attributed, rather than inventing a current vulnerability or fix.

### M6. CVE-2026-108789 / GHSA-wc99-rg5g-w3c8

Published 2026-10-12T02:15:31Z; GitHub publication 03:32:56Z. The record names the workflow worker's `agent` function through 0.1.1-rc.2. [Pinned CVE record](https://github.com/CVEProject/cvelistV5/blob/30f71dd3a295cf4496adceec548e18604139026b/cves/2026/108xxx/CVE-2026-108789.json), [GHSA](https://github.com/advisories/GHSA-wc99-rg5g-w3c8), [NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-108789).

The referenced report alleges model-written workflow code can escape its VM through injected host-realm functions and gain the worker's filesystem, process and network access as the harness user. The old [realm contract](https://github.com/deepseek-ai/deepseek-harness/blob/dsh-v0.1.1-rc.2/packages/workflow/workflow-worker-thread/src/realm.ts#L1-L7) independently confirms it trusts model-written scripts and is not a security boundary. The [2026-09-13 replacement](https://github.com/deepseek-ai/deepseek-harness/commit/35af8698c24c1b7654cd5c83dcbec224e50f2337) moves workflow execution into sandboxed PTC and is contained in 0.1.6-alpha.1 and 0.1.7-rc.1/current rc. **Publication and architectural replacement VERIFIED; live exploit not run.** Channel: new advisory/docs-only, old implementation already replaced on current rc. A registry label of remote attack is not proof of unauthenticated network access; the described path requires workflow execution. No vendor CVE-specific fix designation was found.

## Misses: current behavior and migration

### M7. The browser-cookie signing key is reachable across the same-user sandbox boundary

An older in-window [2026-10-02 disclosure thread](https://github.com/deepseek-ai/deepseek-harness/discussions/8678) supplied a lead that the harvest's title-only October 13 thread did not resolve. The product facts below come from pinned code, not the post.

At the current rc, [browser authentication](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/browser-auth.ts#L125-L177) signs cookies with a durable secret in the credential provider's `browser-session` record. [The local provider](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/credentials/credentials-local/src/index.ts#L675-L691) writes the record to the owner's credential file with mode 0600. That stops other ordinary users, not a command running as the same user. The [Linux profiles](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/sandbox/sandbox-local/src/profiles.ts#L16-L35) retain read access to `/`; Windows documentation likewise describes unconfined reads. A valid cookie is admitted as the [operator](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/connection/src/rpc-host.ts#L103-L112), whose surfaces include [permission changes](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/interaction/permission-presets/src/index.ts#L252-L273) and the OS-user terminal.

**VERIFIED static trust path; runtime exploit not executed.** A same-user confined command that can read that file and reach the local API has the signing material needed to impersonate an operator, rather than merely attack the signed-cookie algorithm. Loopback binding and owner-only file mode do not separate those principals. Alpha.2 retains the persistent-secret design; TLS does not remove it. This is not a newly assigned CVE, a proven remote pre-auth exploit, or evidence that arbitrary prompt injection always succeeds. Channel: current rc and alpha exposure, newly relevant in-window disclosure. Operator consequence: retaining a real login is compatible with a broken inner agent/operator boundary; use an outer environment without valuable host credentials and do not present loopback plus Workspace Write as independent protection for the control plane.

### M8. Background-job completion wakes lost their default cap

The [2026-09-22 commit](https://github.com/deepseek-ai/deepseek-harness/commit/b6775f6d4f55eaa0bcac36318cd7dfc98d70195c) removes the default `maxConsecutiveWakes: 3`; absence now means every eligible idle completion can wake its owner. The commit is absent from 0.1.7-alpha.1 and contained in 0.1.7-alpha.2, first rc 0.1.7-rc.1 on 2026-09-23, and both current heads. **VERIFIED; channel preview-or-beta, including npm latest.** This is more material than merely listing background jobs as a capability: self-exciting job/turn chains no longer have that default cap. Set an explicit `maxConsecutiveWakes` if bounded unattended cost or attention is required. The capability gain is fewer completions stranded waiting for a human prompt.

### M9. Alpha.2 adds breaking tool, subagent and instruction contracts

The [2026-10-09 release](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2) removes mixed `both` tool presentation; subagent calls return child identifiers immediately and use follow-up/wait operations; Agent Team delivery moves from direct Inbox writes to an outbox with retries/deduplication. The [mixed-presentation removal](https://github.com/deepseek-ai/deepseek-harness/commit/4359d3ee17c002c05818d03c6e903767b0705a16), committed 2026-10-06 UTC, is absent from alpha.1 and current rc and present in alpha.2. The [instruction contract](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/context/agent-instructions/README.md#L40) also ignores per-row `dshHome` and `agentsHome`; process environment owns those locations.

**VERIFIED documentation/code changes; channel alpha only.** Custom tools, SDK callers, team plugins and profiles must migrate these assumptions. The section 11 catalog summary does not cover that work. Do not tell an operator that changing the old row-level home option redirects instruction loading.

### M10. webRuntime removal is confirmed, with a migration guide

The harvest leaves discussion #9598 unverified. The [concrete-bind commit](https://github.com/deepseek-ai/deepseek-harness/commit/cb9a590c86d90948989247863bd921261bc0350b) removes `WEB_RUNTIME_SERVICE`, `WebRuntimeValues`, `resolveLanTrust` and the service provision. The [pinned upgrade guide](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/docs/upgrade-guide/v0.2.1-alpha.1/web-listener-trust-config/guide.md) instructs callers to inject `webStartup`, read `ctx.webStartup.trustedHosts`, remove `lanAddresses`, and migrate trust configuration. Old injections wait for a service that never mounts and can prevent Connection startup.

**VERIFIED; first containing tag 0.2.1-alpha.2, 2026-10-09, not npm latest.** The guide directory says alpha.1, but ancestry excludes the commit from that tag; do not let a directory label override the release evidence. This is a concrete plugin/profile break attached to section 7's exposure improvement, not an unverified forum complaint.

### M11. Optional reasoning translation creates a separate data destination

Alpha.2 adds [reasoning translation](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/cot-translation-bundle/README.md#L12), disabled in shipped profiles, with Bing as its default provider once enabled. Expanding a reasoning row sends text to the selected service; it can include private code or conversation details. [The contract](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/experimental/cot-translation-bundle/README.md#L28-L32) describes Google/Bing POST requests, explicit paid native DeepSeek alternatives, saved translations and no automatic cross-provider fallback.

**VERIFIED documented behavior; channel alpha.2 on 2026-10-09, opt-in.** This makes reasoning readable across languages but adds a separate egress and sometimes billing decision. Session-log opt-out does not govern this feature. Do not report it as on by default or claim to have observed its traffic.

### M12. Session working-directory changes now have a supported persistent path

The [alpha.2 release](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-alpha.2), [working-directory service](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/working-directory/README.md#L42) and [tool contract](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/tool-working-directory/README.md#L28) provide durable, validated directory changes and model context updates. Existing processes and sandbox grants retain independent lifetimes; changing cwd is not automatically a new write grant. If both the effective directory and original project disappear, [even chat turns fail until the directory is repaired](https://github.com/deepseek-ai/deepseek-harness/blob/d743267388641bc76f17c45ce8b4c231aed1d32c/packages/session/working-directory/README.md#L80), including through the SDK setter.

**VERIFIED; channel alpha.2 on 2026-10-09.** Operators and SDK authors gain a supported way to relocate/resume work and a concrete recovery action for missing projects, rather than relying on a shell's process-local `cd`.

### M13. Plugin installation has a public mirror fallback by default

The newly rc-reachable Plugin Manager defaults `fallbackRegistries` to `https://registry.npmmirror.com/`, confirmed in both 0.1.7-rc.1 and 0.2.0-rc.2. It can fall through when the preceding registry is unavailable or lacks the requested package/version. [Pinned default and policy](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/README.md#L50), [registry planning code](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/src/registry.ts#L40-L65). A registry outside the configured public set is queried alone, so the code does not indiscriminately leak private-registry package lookups to the public mirror.

**VERIFIED; channel preview-or-beta, reaching rc operators on 2026-09-23.** This changes plugin-install source and network policy beyond the bare npm CLI install. Operators requiring one approved registry should explicitly configure the fallback list; do not describe the behavior as fastest-mirror selection or as automatic fallback from every private registry. The harvest describes live installs but omits this default supply-chain destination.

## Rule checks and residual limits

- **Receipt/channel rules:** numbered receipt URLs are pinned. Dynamic registry/feed observations are explicitly dated and qualified here. There is no stable release; all shipped harness changes discussed here are prerelease. No known newer CLI release was omitted. Root LICENSE is unchanged between the old pin and alpha.2; no license change was found.
- **Security rule:** the harvest's broad advisory absence is not defensible. Add M1-M6 with plain-language consequences, reported version ranges, current-code qualifications and publication dates. Three mechanisms remain insufficiently established for product-fact promotion; an identifier is not exploit proof. M7's static evidence is separate from the CVE inventory.
- **Marketing rule:** the live landing page is positioning, not a capability or safety receipt. Remove or qualify attributed vendor motives and the same-lab exclusivity claim. The code and release record support useful capabilities without those claims.
- **Social rule:** no social quotation is used as proof here. Discussion reports supplied leads; their alleged outcomes were either checked against pinned code or left explicitly unconfirmed. No exploit text was executed. A 404 does not prove a private organizational arrangement.
- **Limits:** no installer inspection, runtime 401 probe, traffic capture, Windows reproduction, root-capability test, live OAuth/billing task or dependency installation. Historical dist-tag movement is not independently recoverable from the present packument. Those gaps do not justify filling in claims from the researcher's narrative.

The harvest file was not edited. Only this crosscheck is the repository deliverable.
