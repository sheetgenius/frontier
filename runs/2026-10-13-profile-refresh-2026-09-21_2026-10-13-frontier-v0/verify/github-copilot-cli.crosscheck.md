# Crosscheck: GitHub Copilot CLI

Run: `2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0`

Window: 2026-09-21 through 2026-10-13, excluding the baseline already recorded. Verification performed on 2026-10-14. Historical cutoff: 2026-10-13T23:59:59Z.

**Install today is incorrect.** Stable 1.0.97 shipped before the window closed. The harvest also preserves two documentation contradictions that GitHub resolved on 2026-10-13. Do not promote it unchanged.

Numbered-section verdicts: **3 VERIFIED, 8 CORRECTED, 1 REFUTED, 0 UNVERIFIABLE**. These counts cover sections 1 through 12 only. VERIFIED means the primary record supports the documented or release-note claim. It does not mean the closed binary's enforcement was tested. Unsupported behavioral conclusions are rejected below.

## Independent evidence and ancestry

Read the researcher brief, source contract and notes, existing profile, parent harvest's boundary, and THESIS.md, METHOD.md, EDITORIAL.md, and CONTRIBUTING.md. Independently cloned the upstream release repository, blobless and without checkout, into:

`/Users/c3po/co/frontier/tmp/refresh-2026-10-13/clones/github-copilot-cli-verify/`

Independent docs and MXC clones are beside it with suffixes `-docs` and `-mxc`. Only git object reads were used on cloned content. No vendor program or cloned script was executed.

Read every numbered section's receipt, including the referenced file contents at the supplied SHAs/tags. Independently compared all stable release bodies from 1.0.87 through 1.0.97 with their versioned changelog sections: all match after whitespace normalization. Listed releases with `gh release list -R github/copilot-cli --limit 100`; read npm publication times and dist-tags with `npm view @github/copilot time dist-tags --json`; checked package build metadata separately.

The public tree still contains license, README, changelog, installer, and repository metadata, not the agent implementation. Its tags lag their own notes by one commit. These are actual `git merge-base --is-ancestor` exit codes, where 0 means contained and 1 means not contained:

| Notes version | Notes commit | Own stable tag | v1.0.97 |
| --- | --- | --- | --- |
| 1.0.88 | `57dd2440141b` | 1 | 0 |
| 1.0.89 | `8dfa6009c4a0` | 1 | 0 |
| 1.0.90 | `659e4652ac91` | 1 | 0 |
| 1.0.91 | `a9ba11a19125` | 1 | 0 |
| 1.0.92 | `6783c47bfd23` | 1 | 0 |
| 1.0.93 | `475c5ba9cfe9` | 1 | 0 |
| 1.0.94 | `a7ae5b0ce17b` | 1 | 0 |
| 1.0.95 | `dcdc0273c025` | 1 | 0 |
| 1.0.96 | `a3f560eca2c0` | 1 | 0 |
| 1.0.97 | `76c3172eb38f` | 1 | 1 |

`a3f560eca2c0` is not an ancestor of v1.0.96, but is exactly v1.0.97. `76c3172eb38f` is an ancestor of v1.0.98-0. The observed main tip is `76c3172eb38f5e7537b90b9800a7023d81156438`, one commit ahead and zero behind v1.0.97. Every stable pair from v1.0.86 through v1.0.97 is 1 ahead and 0 behind. No newer-version public tag lacks a matching GitHub Release. These relationships describe changelog custody, not binary inclusion; release objects and package publication establish this closed source's channel.

The closing docs snapshot is `d67ced7268844cdf7d856f4eb0b9b2018406da29`, committed 2026-10-13T20:01:39Z. Independently tested containment of `339429df5ad0`, `03b432e6d532`, `64d77f5e0fcf`, `2b461a06671e`, `a88a068893ec`, `af7c0325c64f`, `8a740f91003a`, `9bc3914265fa`, `d0b0714881f0`, and `6c2c8cdcebf9`: all return 0 against that snapshot. These are docs-only receipts, not Copilot binary ancestors.

## Install today and release ledger: CORRECTED

- **Stable at the cutoff: 1.0.97**, GitHub publication 2026-10-13T18:37:05Z, prerelease=false. npm publication: 2026-10-13T18:37:41.431Z. Build metadata: `0ce88c5486a`. The observed 2026-10-14 npm `latest` is also 1.0.97. Use the [versioned release](https://github.com/github/copilot-cli/releases/tag/v1.0.97) and [versioned package metadata](https://registry.npmjs.org/@github/copilot/1.0.97).
- **Preview at the cutoff:** newest published GitHub/npm preview was 1.0.98-0, not 1.0.97-2. It has only a generic release body, so no additional feature can be assigned to it. The live 2026-10-14 `prerelease` value is 1.0.98-2; 1.0.98-1 and -2 are outside this UTC window. [1.0.98-0](https://github.com/github/copilot-cli/releases/tag/v1.0.98-0), [registry publication record](https://registry.npmjs.org/@github/copilot).
- **An omitted npm channel:** live `unstable` points to `1.0.93-unstable.r38480845218.gd06f261`, published on 2026-10-14. An in-window npm-only unstable package, `1.0.97-unstable.r38449241139.g37ffbf5`, was published at 2026-10-13T22:34:31.981Z. It is not an npm-only stable. [Pinned package](https://registry.npmjs.org/@github/copilot/1.0.97-unstable.r38449241139.g37ffbf5).
- **Historical dist-tag limit:** publication times do not establish the time of a dist-tag assignment. Replace claims that `latest` moved at every release, or that every prerelease was published under a particular dist-tag, with package/release publication facts. The live tag readings above are observations on 2026-10-14, not a historical tag archive.
- **Homebrew at the cutoff:** stable 1.0.97 at 2026-10-13T19:07:53Z; prerelease cask 1.0.97-3 at 19:08:28Z, still behind npm's newest published preview. Read both [stable cask](https://github.com/Homebrew/homebrew-cask/blob/d75c8d2ec6d755a794e396d7fece52cd104416e0/Casks/c/copilot-cli.rb) and [prerelease cask](https://github.com/Homebrew/homebrew-cask/blob/22b585f5f0c3f75a0f266fb5ba2dfd4be7951d51/Casks/c/copilot-cli@prerelease.rb).
- **WinGet at the cutoff:** stable v1.0.97 was added at 2026-10-13T22:04:01Z. The prerelease directory still tops out at v1.0.78-3. [Stable manifest](https://github.com/microsoft/winget-pkgs/blob/97347a244127a78a30f57182c83503b6c9a1077e/manifests/g/GitHub/Copilot/v1.0.97/GitHub.Copilot.yaml), [pinned prerelease directory](https://github.com/microsoft/winget-pkgs/tree/97347a244127a78a30f57182c83503b6c9a1077e/manifests/g/GitHub/Copilot/Prerelease).

The original baseline and 1.0.88 through 1.0.96 ledger rows have correct release timestamps, npm timestamps, prerelease flags, build commits, and ahead/behind counts. They are incomplete, not fabricated. Add:

| Tag/package | GitHub published UTC | Prerelease | Ahead/behind vs previous stable | npm published UTC |
| --- | --- | --- | --- | --- |
| v1.0.97-3 | 2026-10-13T16:25:48Z | true | n/a | 2026-10-13T16:26:21.324Z |
| v1.0.97 | 2026-10-13T18:37:05Z | false | 1 / 0 vs v1.0.96 | 2026-10-13T18:37:41.431Z |
| v1.0.98-0 | 2026-10-13T21:45:09Z | true | n/a | 2026-10-13T21:46:20.162Z |
| 1.0.97-unstable.r38449241139.g37ffbf5 | no GitHub release | npm unstable package | n/a | 2026-10-13T22:34:31.981Z |

Correct incremental volume: **10 stable GitHub releases, 49 GitHub prereleases, 0 npm-only stables, 1 additional npm unstable publication, and 10 new public-repo commits**. The baseline v1.0.87 and v1.0.88-0 remain excluded under the brief's rule.

Integrity: checksum files exist on every stable release inspected from 1.0.87 through 1.0.97, and on the independently checked [v1.0.60](https://github.com/github/copilot-cli/releases/tag/v1.0.60) and [v1.0.85](https://github.com/github/copilot-cli/releases/tag/v1.0.85). The latter's checksum asset predates publication by seven seconds. The harvest's correction to the old profile is sound. The [installer](https://github.com/github/copilot-cli/blob/a3f560eca2c0/install.sh#L91-L118) silently skips checking when checksum download fails; it also explicitly warns and skips when neither hash utility exists. A mismatch is fatal when verification runs.

Narrow the provenance claim: the v1.0.97 darwin-arm64 archive digest `sha256:5c38e13684a8ef3ee59e07bb791168acca5a0289d71494168f00177aa1fdafbb` returned HTTP 404 from GitHub's attestations API. The loader and all eight platform package metadata records for 1.0.97 lack `dist.attestations`; registry signatures and integrity hashes are present. This establishes what those queries returned, not universal absence of every possible provenance artifact. No in-window change appeared in `LICENSE.md` or `install.sh` history. MXC's MIT license does not change the CLI's [proprietary license](https://github.com/github/copilot-cli/blob/v1.0.97/LICENSE.md).

## 1. Managed policy across session entry points: CORRECTED

**Confirmed:** the 2026-09-22 [1.0.88 release](https://github.com/github/copilot-cli/releases/tag/v1.0.88), [notes](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L172), and [configuration reference](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L618) support the ACP, AHP-host and server policy repair. The later ACP fixes and 1.0.94 update-guidance note also match their release bodies. This remains vendor-described enforcement.

**Exact correction:** replace the universal conclusion that a managed minimum version only warns. The 1.0.94 note describes a warning, but [docs added on 2026-10-13](https://github.com/github/docs/commit/6c2c8cdcebf9fc0887c96220a6a5b616da300983) separately say managed sandbox policy blocks connections from Copilot CLI versions below 1.0.93. Keep the warning claim specific to its release note; add this docs-only sandbox minimum. Do not claim 1.0.88 alone satisfies current managed-sandbox requirements.

## 2. Sandbox GA, default off, unsupported hosts: VERIFIED

The 2026-10-07 availability change is [in the 1.0.93 notes](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L42). The [GA docs commit](https://github.com/github/docs/commit/03b432e6d532db63f40312771e3ba8212d1995c0), [default and file-tool distinction](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md#L42-L64), [unsupported-host behavior](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md#L116-L118), and [managed controls](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L351-L363) support the stated distinctions.

Also opened the [Windows/Linux prerequisites](https://github.com/github/docs/blob/602021b0ba16/data/reusables/cli/local-sandboxing-prereqs.md), [billing source](https://github.com/github/docs/blob/602021b0ba16/content/billing/concepts/product-billing/cloud-and-local-sandboxes.md), and [MXC v1.0.0 release](https://github.com/microsoft/mxc/releases/tag/v1.0.0). Their dates, versions, local-versus-cloud distinction, and default-off posture match. MXC's release does not identify the engine version embedded in a particular Copilot binary. Add section 1's new minimum-version condition when combining the findings.

## 3. Network documentation changed: VERIFIED

The [before-state macOS description](https://github.com/github/docs/blob/2c5e31e02c95/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md#L112) and [before-state configuration rows](https://github.com/github/docs/blob/2c5e31e02c95/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L502-L543) differ as claimed from the [2026-10-07 network instructions](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L250-L291). The 1.0.89 Windows localhost and 1.0.93 loopback entries are independently present in the release record.

Read the [MXC v1.0.0 builder](https://github.com/microsoft/mxc/blob/v1.0.0/src/mxc-sdk/src/backends/seatbelt/common/profile_builder.rs#L507-L536) and [Seatbelt caveats](https://github.com/microsoft/mxc/blob/v1.0.0/docs/backends/seatbelt/seatbelt-backend.md#L274-L315). The earlier rule also exists at [v0.8.0's old path](https://github.com/microsoft/mxc/blob/v0.8.0/src/backends/seatbelt/common/src/profile_builder.rs#L346-L374), and v0.8.0 is an ancestor of v1.0.0. Keep the enforcement/default rewrite labeled docs-only. Neither MXC history nor a corrected page dates a Copilot binary enforcement change or proves its wiring.

## 4. Credential withholding and masking: CORRECTED

The [1.0.92 withholding](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L60), [masked Git authentication](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L75), [1.0.91 CA commands](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L93), [credential destinations](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L151-L157), [bypass behavior](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md#L103), and [masking limitations](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md#L176-L182) support the documentary account. Version and date assignments through 1.0.96 match.

**Exact correction:** replace the assertion that a prompt-injected `env | curl` leaks placeholders rather than secrets with: "The vendor documents withholding ambient GITHUB_TOKEN unless configured, and placeholder substitution for configured masked variables and enabled Git/gh authentication. Exfiltration resistance has not been tested; credential files and unmasked variables remain outside this protection." Withholding is not the same as masking. A full bypass restores the ordinary environment, which can contain real secrets; it does not guarantee that every possible secret is present.

## 5. Managed domain boundary: CORRECTED

[1.0.93's addition](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L33) and the [limitTo reference](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L708-L726) support the documented domain restriction and its separation from general shell permissions.

**Exact correction:** remove "first managed egress allowlist" because no comparative historical proof establishes that priority. Replace the asserted runtime-assembled-URL gap with: "The docs say detected URLs are checked, but do not establish whether runtime-constructed destinations are detected. That requires a probe." The cited variable-path limitation concerns Edit/Write rules; analogy does not prove a limitTo bypass. Keep this as a permission-layer facility, not an independently tested network boundary.

## 6. Assisted Permissions and approval attribution: CORRECTED

The [1.0.94 policy switch](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L29), [1.0.96 attribution](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L11), [1.0.91 pipeline review](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L99), and [assisted-mode description](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L769-L775) support the release sequence. The 1.0.88 path-grant and 1.0.90 approval refinements also match.

**Exact correction:** delete the claim that allow-auto-only was the administrator's "only lever" before 1.0.94. The receipts establish a new manual-only policy capability, but do not establish that exhaustive historical claim. Preserve the unresolved managed key and unattended-fallback semantics. No judge decision or enforcement behavior was tested.

## 7. Allow-all while policy resolves: REFUTED

The [1.0.88 preservation note](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L162) and [1.0.96 availability note](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L5) exist. They do **not** establish that forceRemoteSettingsRefresh or a known managed bypass ban can be defeated. Command availability is not proof of effective authority. The older [fail-closed note](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L434) remains, as does a [pre-authentication exception explicitly scoped to absence of managed-policy evidence](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L298).

The harvest accurately found a contradiction between the [old enterprise page](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L234) and [old CLI table](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L667). However, [commit 6c2c8cdcebf9 on 2026-10-13](https://github.com/github/docs/commit/6c2c8cdcebf9fc0887c96220a6a5b616da300983) removes the cached-fallback statement and says affected operations remain restricted until current policy is confirmed. The [after-login statement](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L765) does not override that restriction.

**Replacement:** report the availability notes and resolved documentation error; leave policy-loading behavior as an untested question. Reject the claimed bypass/regression and the resulting assertion that server-only policy is ineffective. A controlled test distinguishing unmanaged startup, known-managed startup, cached policy, and forced refresh would be needed to establish that conclusion.

## 8. Configuration break and documented model default: VERIFIED

The [1.0.93 config.json break](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L45), [old migration promise](https://github.com/github/docs/blob/1d0d9a86ebdb/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L62), [replacement wording](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L62), and [documented default model](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L793) support the claims. Independently dated the default-model edit to 2026-10-07 and migration-text edit to 2026-10-08. The CA-command replacement and worktree deprecation are also present.

Keep the default-model change docs-only. No release note or runtime observation establishes its exact binary introduction. The missed Fast-tier removal below is a separate upgrade cost.

## 9. Repository inputs, plugins, and directory grants: CORRECTED

The [.claude/rules addition](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L123), [MCP hot reload](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L43), [/add-dir grant](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L6), [disabled-plugin fix](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L153), and [rule-file reference](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L959-L965) support the dated changes.

**Exact correction:** the [old troubleshooting contradiction](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md#L142) was resolved in [9bc3914265fa on 2026-10-13](https://github.com/github/docs/commit/9bc3914265fa9ea8f34b56e69d5e79f7c3d0b415). The closing docs say /add-dir grants session-only read/write sandbox access subject to managed policy. Do not present the contradiction as current. No receipt establishes loading .claude/rules before folder trust; leave that behavior unclaimed.

## 10. Computer use and dynamic workflows: CORRECTED

The [computer-use controls](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/agents/computer-use.md#L47-L55), [managed disable key](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L132), [workflow authority](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/agents/dynamic-workflows.md#L104-L114), and [programmatic loading conditions](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md#L66-L68) support the docs-only account, dated 2026-10-01. The preview declarations were resolved through their referenced reusable files.

**Exact correction:** add the [2026-10-05 availability restriction](https://github.com/github/docs/commit/1230337ad5f6292d236569791a6fe5d79777c76f): dynamic workflows exclude existing annual Pro/Pro+ subscribers who remain on legacy premium request billing. Also distinguish computer use, which follows tool permissions, from extension code that runs outside permission prompts. Saved application approval is not proof that computer use bypasses policy or the sandbox. Its sandbox relationship remains untested.

## 11. Resume and hook fixes described as preview-only: CORRECTED

Opened both [1.0.97-0](https://github.com/github/copilot-cli/releases/tag/v1.0.97-0) and [1.0.97-2](https://github.com/github/copilot-cli/releases/tag/v1.0.97-2). They contain the stated resume, disabled-hook, canceled-write, custom-agent and approval changes on the stated 2026 dates.

**Exact correction:** these fixes reached [stable 1.0.97 on 2026-10-13](https://github.com/github/copilot-cli/releases/tag/v1.0.97). Change the channel to tagged-release and recommend upgrading to 1.0.97, rather than waiting for it or installing a preview. Do not infer an unlimited affected-version range from a repair note; the notes establish prior behavior but not its earliest introduction. Stable receipt: [1.0.97 changelog](https://github.com/github/copilot-cli/blob/76c3172eb38f/changelog.md#L1-L27).

## 12. Release cadence and automatic updates: CORRECTED

The [auto-update defaults](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L452-L453) and [plugin update/migration rules](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-plugin-reference.md#L92-L97) support the documented posture. The marketplace edit is dated 2026-10-07. Preserve the CI and trust conditions, and the separate opt-in rules for non-default marketplaces; SDK/server sessions do not use that marketplace session-start updater.

**Exact correction:** ten stables and 49 GitHub prereleases after the baseline, through 2026-10-13. Do not claim historical dist-tag movements from publish times. The supplied releases index and registry root are moving discovery receipts, not pinned historical records; use individual releases/packages plus the dated observations above. Homebrew does not consistently follow within a few minutes: the [1.0.89 cask](https://github.com/Homebrew/homebrew-cask/commit/ce9abd4fdc06e7c77091ec64b46e7fc456bbaf1d) and [1.0.92 cask](https://github.com/Homebrew/homebrew-cask/commit/909d87adebd4e4e1e22384f7bfa4e23412c3d0e9) landed more than two hours after their GitHub releases. For 1.0.93 the npm lag was 182.114 seconds, slightly over the asserted three minutes.

## Prior claims re-checked at the newest stable

Read `v1.0.97:changelog.md` independently. It resolves to the harvest's `a3f560eca2c0` text. Also read the 1.0.97 release body and compared the closing docs against the harvest snapshot.

- **allow-all-falsey: holds as documented.** The [1.0.85 repair remains in the newest stable tag](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md#L284). The pinned environment-variable reference confirms the falsey spellings and the additional trust effect of exactly true. Not a behavioral test.
- **plugin4shell-no-fix: holds only as "no named fix found" through 1.0.97.** No inspected note or advisory names checkout-result verification. The resumed-disabled-hook repair is a different mechanism. Do not turn silence into proof of either a patch or continuing exploitability.
- **sandbox-localhost-proxy-egress: changed as sections 2 and 3 document.** The old macOS advice to enable local network alone is incomplete with a credential proxy active.
- **sandbox-file-tools-read-dev-config: holds as documented.** Re-read [the newest-tag token-bearing path grant](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md#L353), the current default for developer-tool access, and the masking exclusions. File tools remain an in-process, software-enforced surface.
- **managed-hooks-bypass: historical fix still documented.** [The newest-tag note](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md#L312) specifically covers extension-registered tool-hook callbacks. It does not establish confinement of arbitrary extension code.
- **session-sandbox-bypass: correct the scope.** The prior profile says one approved bypass disables the whole session. Current [bypass instructions](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L136-L147) distinguish approval for one attempt from an explicit session-wide opt-out. The policy can permit both. The harvest should not mark the broader old sentence simply "holds."
- **fail-closed-managed-settings-acp-revoke: split the verdict.** ACP coverage expanded in 1.0.88; the [ACP revoke repair and launch-baseline exception](https://github.com/github/copilot-cli/blob/v1.0.97/changelog.md#L413) remain documented. The forced-refresh fail-closed claim is not disproved by availability notes, and its docs conflict was resolved before close. See section 7.
- **parser-rewrite-breaking: holds as release history.** The newest-tag parser/list-format notes remain, and the docs retain the plural plugin alias.
- **login-pinning-mcp-race-marketplaces: holds as documented, with scope.** Re-read [forceLoginOrgs](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L667), the newest-tag MCP startup-race and marketplace notes, and the first-party-server exemption. Do not claim all MCP servers can be denied.
- **worktrees-fleet-custom-agents: holds as documented.** The worktree and instruction-opt-in notes persist. Fleet remains unversioned documentation; the [programmatic reference](https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md#L46) explicitly excludes ACP server mode. Agent precedence needs the omitted clarification below.
- **content-exclusion-docs: holds as a context-use promise.** Re-read [the concept page](https://github.com/github/docs/blob/602021b0ba16/content/copilot/concepts/copilot-surfaces/copilot-cli.md#L214-L216) and [enterprise page](https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/copilot-cli/administer-copilot-cli-for-your-enterprise.md#L53-L55). Neither establishes shell-read prevention.

The bold profile paragraphs map to these checks. The channel paragraph needs 1.0.97 and the checksum correction; the managed-controls paragraph needs the forced-refresh distinction and current sandbox minimum; the sandbox-bypass paragraph needs the one-attempt/session choice. The other historical paragraphs retain only their explicitly documented scope.

Carry-forward: no named Plugin4Shell fix found; no behavioral sandbox/hook/ACP/policy-loading probe performed; no fleet introduction version found. MXC source does not close the Copilot-binary probe. Wrapper authentication remains distinct from entitlement and policy: the [CLI credential order](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli.md#L72-L78) includes a gh token fallback, but that is not itself an authorization boundary.

## Material misses

Channel corrections and resolved contradictions above are not counted again here. The following additional changes warrant recording:

1. **2026-10-13, tagged-release 1.0.97: more than the resume fixes.** The release adds a JSON-output secret-redaction repair, authenticated retry for remote plugin/marketplace fetches after HTTPS authentication fails, cached MCP-definition rechecks during concurrent refresh, restoration of explicitly selected GitHub MCP write tools, and restoration of plugin-dir skills/agents to invocation. It also enables inline images by default on supported terminals, with `/settings inlineImages false` as the opt-out. Operators should review archived JSON for possible secret exposure, re-test MCP selections, and account for the terminal default change. The note does not establish the old redaction defect's exact reach or token destination restrictions. [Stable release](https://github.com/github/copilot-cli/releases/tag/v1.0.97), [pinned notes](https://github.com/github/copilot-cli/blob/76c3172eb38f/changelog.md#L3-L27).
2. **2026-10-13, docs-only: finer telemetry capture policy.** Independent classes separate identity, prompts, responses, tool arguments, tool output, and policy detail; defaults are off. Managed values override local/SDK/environment settings, with whole-object precedence between managed sources. Operators can collect attribution without collecting content, and must review legacy capture/lock settings rather than assume they cover identity. No CLI introduction version is given. [Dated change](https://github.com/github/docs/commit/d0b0714881f0ba6d484b2b7ced0c3d13f75e4d81), [closing policy reference](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L286-L340).
3. **2026-10-13, docs-only: managed sandbox minimum-version enforcement.** The closing page names CLI 1.0.93 as a connection-blocking minimum when managed sandbox settings apply. This is materially different from the generic update warning in section 1. Audit older fleet clients before applying the policy. [Dated change](https://github.com/github/docs/commit/6c2c8cdcebf9fc0887c96220a6a5b616da300983), [minimum table](https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L463-L471).
4. **2026-09-28, tagged-release 1.0.89: Fast routing removed.** Stored, exported, or resumed Fast preferences fall back to Balance. This is an upgrade behavior change beyond removing retired models. Review saved routing and cost assumptions. [Pinned note](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L139). Separately, the [2026-10-02 docs removal](https://github.com/github/docs/commit/9c7da1a58938cb45da17789618a85b7d9d26eb43) names gemini-3.5-flash and gemini-3.6-flash in the CLI list; do not assign every provider-wide retirement to the CLI without that scope.
5. **2026-09-28 and 2026-10-08, tagged-release 1.0.89 and 1.0.94: MCP selection and startup controls.** Pre-registered OAuth clients honor configured scopes, and server/tool filters handle tool names containing slashes. Later, MCP enable/disable works before discovery without starting the server. Re-test restricted MCP setups and scripts that disable servers before discovery. These are documented repairs, not proof of a particular prior exploit. [1.0.89 notes](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L127-L133), [1.0.94 note](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L24).
6. **2026-09-22, tagged-release 1.0.88: hook working directory and skill discovery.** Hooks without explicit cwd again run at the project root, and skill discovery adds namespaced skills and ignored skill directories. Review relative hook paths when upgrading; name an explicit cwd where execution location matters. [Pinned notes](https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md#L171-L178).
7. **2026-09-30, docs-only: custom-agent precedence corrected.** Personal agents win same-ID collisions over repository agents. Deduplication uses IDs rather than display names; all project .github agent directories precede .claude directories, and remote organization/enterprise agents are lowest priority in the documented order. Operators relying on a same-name repository or organization agent should inspect which definition is selected. This is a correction to documented behavior, not a dated binary flip. [Pinned correction](https://github.com/github/docs/commit/cf14212193e2ca638e086760c8f88008b1c60e23).
8. **2026-10-05, docs-only: workflow billing eligibility.** Existing annual Pro/Pro+ subscribers still on premium request billing are excluded. Include this condition before recommending a workflow trial. [Pinned availability edit](https://github.com/github/docs/commit/1230337ad5f6292d236569791a6fe5d79777c76f).

## Security and rule checks

Independently queried the repository security-advisories API, global GHSA records for npm package `@github/copilot`, and NVD's `keywordSearch=Copilot CLI` API. No matching advisory was published or updated in the window. Canonical records returned:

- [GHSA-9ccr-r5hg-74gf / CVE-2026-45033](https://github.com/github/copilot-cli/security/advisories/GHSA-9ccr-r5hg-74gf): an attacker-controlled nested bare Git repository can make routine agent Git operations execute commands from executable Git configuration, without approval. Patched in 1.0.43; published 2026-05-06 in the repo. [NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-45033).
- [GHSA-g8r9-g2v8-jv6f / CVE-2026-29783](https://github.com/github/copilot-cli/security/advisories/GHSA-g8r9-g2v8-jv6f): crafted shell expansions can hide executable commands inside apparently read-only operations and bypass approval classification. Patched in 0.0.423; published 2026-03-06 in the repo. [NVD](https://nvd.nist.gov/vuln/detail/CVE-2026-29783).
- NVD also returned [CVE-2026-59864](https://nvd.nist.gov/vuln/detail/CVE-2026-59864), a Kiota-generated Microsoft 365/Teams plugin-manifest path-injection issue. It is not this CLI and predates the window; excluded.

Read [AIR Security's primary Plugin4Shell report](https://www.air.security/blog-posts/plugin4shell), dated 2026-09-17. Its claimed mechanism is substitution of attacker-controlled plugin code for a pinned commit through an ambiguous hash-shaped branch, without checking the resulting checkout. GitHub rejects such branch names; the report describes other Git hosts. No newly named CLI fix was found. The report's promotional reach claims were not adopted, and its assertion that no patch exists was not promoted into a current binary fact.

The numbered harvest receipts are SHA/tag-pinned except the release index and registry root in section 12. Those moving surfaces are appropriate for discovery/current observations, but cannot alone prove historical tag movements. Marketing remains separate from the substantive changelog/docs claims. No social post was quoted or used as product evidence.

## Limits and handoff

This crosscheck establishes release, registry, documentation, and source-text facts. It does not establish binary enforcement, the embedded MXC version, a Plugin4Shell exploit result, runtime secret masking, or exact historical npm dist-tag transitions. The 1.0.96 binary size/string-scan claim was not independently repeated and should not be promoted as verifier-confirmed evidence. No additional in-window license or installer change was found.

Only this crosscheck file was written in the tracked repository. The harvest was not edited. No git write command was run against the Frontier repository, no site build or install was run, and no cloned code was executed.
