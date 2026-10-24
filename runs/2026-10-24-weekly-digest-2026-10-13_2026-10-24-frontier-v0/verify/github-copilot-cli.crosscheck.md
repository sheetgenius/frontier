# Crosscheck: github-copilot-cli

Run: 2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0
Window: after 2026-10-13T23:59:59Z through the verifier's 2026-10-24 UTC reads.
Source: `harvest/github-copilot-cli.primary.md` in this run.

Result: Install today is correct. Of the 15 numbered sections, 13 are VERIFIED and two are CORRECTED. No numbered section is REFUTED or UNVERIFIABLE. Four material omissions are recorded below. These counts describe numbered sections only, not individual sentences or the separate prior-claim spot checks.

I read the researcher brief, THESIS.md, METHOD.md, EDITORIAL.md, CONTRIBUTING.md, the source contract and notes, the current profile, and the parent harvest. I independently cloned `github/copilot-cli` blobless with no checkout into `/Users/c3po/co/frontier/tmp/cycle-2026-10-24/clones/github-copilot-cli-verify/`. Release and registry data came from fresh reads. Documentation receipts were opened with `git show` at their exact SHAs in the existing scratch docs clone, and their ancestry was rerun. No cloned code, installer, package binary, or test was executed. No site build, install, or repository git write command was run.

VERIFIED below means that the pinned primary text supports the stated change and its release placement. It does not certify proprietary binary enforcement. The harvest makes that distinction explicitly, so unperformed runtime tests are not silently treated as successful tests.

## Channel truth and Install today: VERIFIED

- Fresh `gh release list` and release API reads began at 2026-10-24T10:01:40Z. A second release-list/latest-selector read completed during 10:07:58Z through 10:08:00Z. Both identify [1.0.103][r103] as newest stable, `prerelease=false`, published 2026-10-22T16:21:56Z. No newer stable or preview than the harvest records was found.
- `npm view @github/copilot dist-tags --json`, `npm view @github/copilot time --json`, and an independent [registry metadata][registry] read at 2026-10-24T10:01:44Z agree. A recheck at 10:08:00Z still gives `latest=1.0.103`, `prerelease=1.0.104-2`, and `unstable=1.0.102-0.unstable.r40052750844.g2fea6b7`. These are the only three tags. Publication times match the harvest, including 2026-10-24T01:06:24.440Z for preview and 2026-10-24T04:44:34.023Z for unstable. Registry selectors are timed observations, not immutable historical receipts.
- The [exact stable package][pkg103] identifies the `copilot` npm loader, eight native optional dependencies at 1.0.103, and private build commit `131fc866123`. The public notes tree cannot prove ancestry of that private implementation. The explicit `@github/copilot@1.0.103` install target is correct.
- Homebrew's cask APIs read at 2026-10-24T10:04:29Z return stable 1.0.103 and preview 1.0.104-2. Their tap head had advanced to `12865dc5fe70b59d5d5f33e23f7c9fe1507c8abf`; the harvest's pinned [stable cask][brew-stable] and [preview cask][brew-preview] already contain those versions. A newer tap head is not a newer Copilot release.
- WinGet was checked both at the harvest's immutable snapshot and at newly resolved master `1e892b30989841be5df724fd0ed9dd3ef6179a92`, read at 2026-10-24T10:07:49Z. The current [stable directory][winget-stable] still tops out at v1.0.103 and [preview directory][winget-preview] at v1.0.78-3. The harvest correctly avoids equating WinGet preview with npm preview.
- `git ls-remote origin refs/heads/main` at 2026-10-24T10:02:37Z returned `7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120`. The [pinned comparison][cli-compare] is one public notes commit ahead and zero behind stable. The docs API at 10:07:52Z independently confirmed `02c25d16369fe27f9bdb28d1201f6b452f0d21dd`, dated 2026-10-23T20:35:27Z, as the current docs head.
- The default update channel and updater remain [stable and enabled][config-update], with [the documented environment opt-out][programmatic-update]. The sandbox's enabled key still defaults false. Computer use remains disabled by default and preview; ACP and dynamic workflows remain preview. The local-network default change and Assisted preview gate are correctly separated in sections 1 and 15.

## Release ledger: VERIFIED

Fresh GitHub release objects, npm times, and independent local history reproduce the ledger. All dates below are in 2026. The git command returns left/right counts; `0 1` for `previous...tag` means ahead 1, behind 0, matching the harvest's presentation.

| Tag | GitHub published UTC | Prerelease | Previous stable | ahead / behind | npm published UTC |
| --- | --- | --- | --- | --- | --- |
| [v1.0.97][r97] | 2026-10-13T18:37:05Z | false | v1.0.96 | 1 / 0 | 2026-10-13T18:37:41.431Z |
| [v1.0.98][r98] | 2026-10-14T19:52:33Z | false | v1.0.97 | 1 / 0 | 2026-10-14T19:53:33.740Z |
| [v1.0.100][r100] | 2026-10-19T18:43:10Z | false | v1.0.98 | 1 / 0 | 2026-10-19T18:45:13.799Z |
| [v1.0.101][r101] | 2026-10-20T18:49:53Z | false | v1.0.100 | 1 / 0 | 2026-10-20T18:49:47.372Z |
| [v1.0.102][r102] | 2026-10-21T18:05:00Z | false | v1.0.101 | 1 / 0 | 2026-10-21T18:04:47.108Z |
| [v1.0.103][r103] | 2026-10-22T16:21:56Z | false | v1.0.102 | 1 / 0 | 2026-10-22T16:21:46.381Z |
| [v1.0.104-0][r1040] | 2026-10-23T18:49:26Z | true | v1.0.103 | 1 / 0 | 2026-10-23T18:48:58.958Z |
| [v1.0.104-2][r1042] | 2026-10-24T01:06:24Z | true | v1.0.103 | 1 / 0 | 2026-10-24T01:06:24.440Z |

The window contains five incremental stable releases, 16 GitHub prereleases, and eight npm-only unstable publications. The excluded 1.0.98-0 preview predates the cutoff. No stable 1.0.99 exists in the inspected release list, clone tags, or npm versions. The unlisted 1.0.104-1 release is real, published 2026-10-23T21:28:36Z, with npm publication 2026-10-23T21:28:38.897Z and only a generic release body. Its omission from the compact table does not change the ledger's stated preview count.

### Independent ancestry receipts

`git merge-base --is-ancestor SHA v1.0.103` returned:

| Public notes commit | Notes for | Exit |
| --- | --- | --- |
| `c01c66377d25426dda70c21750e1956e4dd25657` | 1.0.98 | 0 |
| `84a2bd392a397e3dafaa9a1212b2964c3bd694bc` | 1.0.100 | 0 |
| `c66d206a3b37d29ec082d4d42e8f4b99a0839c25` | 1.0.101 | 0 |
| `17631dc79466e1cf4a3e3f19e9ea907a56217d2c` | 1.0.102 | 0 |
| `7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120` | 1.0.103 | 1 |

The v1.0.103 tag resolves to `17631dc79466e1cf4a3e3f19e9ea907a56217d2c`. All three 1.0.104 preview tags resolve to `7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120`. Each stable tag points to the previous notes commit. The [1.0.103 release object][r103] and [versioned package][pkg103] therefore establish shipment of its own changes; absence of its notes commit from its tag does not establish an unreleased binary.

For docs, `git merge-base --is-ancestor SHA 02c25d16369fe27f9bdb28d1201f6b452f0d21dd` returned 0 for every cited change commit:

| Docs commit | Commit date UTC | Subject checked |
| --- | --- | --- |
| `02b43700ed9d226db3896245651db87dca1aed84` | 2026-10-16T08:33:05Z | One-session trust |
| `c37d2a6553ee545f3d2ee155f862f8759e3e76b9` | 2026-10-19T08:18:34Z | OTLP helper |
| `8bebcac020dee52f1a71fc30ab5da6da47586d00` | 2026-10-19T17:16:35Z | Telemetry opt-out |
| `92991ed6d17c5023f52e324ee70d36fe7c36dd7d` | 2026-10-20T14:46:47Z | MCP names and base64 key |
| `4dc0b8276c24e2e24fe45b1bde0747c5da3cce10` | 2026-10-20T16:30:53Z | Extension modes |
| `8562ce861fa0760cdab713ecc7dbabc779b5b749` | 2026-10-23T08:56:34Z | Usage metric names |
| `2a3ff0fb09e4f3527e029fd0473c4189737819b9` | 2026-10-23T09:20:08Z | CLI reference migration |
| `7bd329989069858e274414422264dbeafc210a7f` | 2026-10-23T09:42:52Z | ACP and remote documentation |
| `2843f3a6c3f21ac46f6503475a24b0080059490d` | 2026-10-23T16:13:10Z | Default availability |

## 1. Local-network default and macOS exception: VERIFIED

I read [1.0.100][r100], [1.0.101][r101], the [stable-tag notes][stable-notes], and both pinned documentation passages: [the false default row][network-default] and [the macOS explanation][network-platforms]. They support the default change on 2026-10-19 and the narrower macOS direct-TCP exception on 2026-10-20. The latter requires local access and no host filters. The harvest correctly exposes the documentation conflict and does not generalize the macOS change to Windows or every network policy. Notes ancestry is exit 0 for both changes.

## 2. ACP sandbox inheritance: VERIFIED

[1.0.103][r103], [the closing notes at line 4][closing-acp], and [ACP launch configuration][acp] support saved settings, both sandbox flags, and resumed sessions. The package publication independently places this in stable on 2026-10-22. The pinned ACP text also assigns tool filters and initial effort to the server launcher and states the managed-policy override. The harvest correctly distinguishes this repair from older managed MCP/permission/plugin coverage. The closing notes ancestry exit 1 is already disclosed correctly.

## 3. Proxy inheritance and command reliability: VERIFIED

The three release receipts, [1.0.100][r100], [1.0.102][r102], and [1.0.103][r103], support the specific proxy variables, long-command repair, developer-tool cache/grant changes, and explicitly configured Git token path. [Pinned proxy rules][proxy] support the HTTP(S)-only restriction, precedence, and the distinction between bypassing an inherited upstream and bypassing local host rules. The date field selects the 2026-10-21 core repair; the text separately attributes additions to 1.0.103 on 2026-10-22. Nothing proves a universal proxy repair or ambient token restoration, and neither is claimed.

## 4. One-session trust and repository inputs: CORRECTED

The substance is supported by [1.0.100][r100], [1.0.101][r101], [1.0.102][r102], [scoped instructions][instructions], and [optional versus enforced team plugins][team-plugins]. Public notes ancestry is exit 0. The new flag, automatic preparation, instruction delivery, Team distribution, and git-subdir support are correctly assigned to their versions.

Exact citation fix: the harvest's one-session-trust link ends in `cli-programmatic-reference.md#L32-L48`, which stops before the relevant row. Replace its fragment with `#L51`, or `#L49-L53`. [Line 51][trust] explicitly supports all the stated limits: one new non-interactive session, no persisted trust, no parent/sibling trust, no tool/path/URL grant, managed policy retained, and incompatible resume selectors. This is a receipt-anchor correction, not a refutation of flag behavior.

## 5. Assisted approval, skill parsing, and extension requests: VERIFIED

[1.0.98][r98], [1.0.100][r100], and [1.0.101][r101] support the pending-permission and hook repairs, account-policy repair, broader judge inputs, ambiguous skill rules, instructions setting, and explicit extension approval. The [skill schema][skills] and [managed ask contract][managed-ask] are pinned. The release's safe-action handling and the docs' fresh-approval requirement do conflict. The harvest reports that conflict rather than certifying a human-per-request gate. Versions and 2026 dates check out; notes ancestry is exit 0.

## 6. Structured workflow output and inherited approvals: VERIFIED

[1.0.101][r101] dates native output on supported models to 2026-10-20; [1.0.102][r102] dates custom/MCP approval inheritance to 2026-10-21. Both notes commits are ancestors of stable. The [workflow permission text][workflow-permissions] distinguishes interactive prompts, pregranted unattended runs, and extension code outside those prompts. [Eligibility][workflow-eligibility] supports the legacy annual-plan exception. No output-correctness claim or original entry-point introduction version is smuggled into the finding.

## 7. MCP loading, authentication, and worktree caches: VERIFIED

I checked [1.0.100][r100], [1.0.101][r101], and [1.0.103][r103] for each stated behavior, plus [1.0.102][r102] for organization-plugin preparation. The release text supports skipping OAuth connections that need interactive sign-in while retaining renewable grants, inventory and restart repairs, and repository-scoped cached snapshots across registered worktrees. The latest cache change is stable on 2026-10-22 through the release object. No shared-credential or permission-isolation guarantee follows, and the harvest does not claim one.

## 8. Remote flags, history sync, and sharing: VERIFIED

[1.0.103][r103] and [1.0.100][r100] support the release changes. The exact [flag table][remote-flags] retains legacy SDK server use of `--remote`, removes `--no-remote`, and documents the sync renames. [The two settings][remote-settings] support their distinct defaults and the remote-control override of export opt-out. The [share row][share] explicitly replaces immediate publication with a menu. The harvest's migration advice matches these receipts and does not equate sync with remote control.

## 9. Semantic search and model/session recovery: VERIFIED

I read all five stable release bodies, [1.0.98][r98] through [1.0.103][r103], and the [current model table][models]. Argon support, online semantic-search default, compaction/recovery fixes, managed Auto prompt selection, mandatory-default resume, and usage-display repairs are supported at their stated versions and 2026 dates. The missing Argon table entry is real. The section does omit other material model changes; those are coverage misses below, not evidence that its recorded changes are false.

## 10. First-party client telemetry opt-out: VERIFIED

[1.0.100][r100], the [2026-10-19 docs commit][telemetry-diff], and [the exact scope][telemetry] agree. Restricted and unrestricted first-party client uploads are disabled for that invocation; server-side collection, configured OTel exports, and enabled SDK forwarding remain separate. The docs change is an ancestor of the closing snapshot. The harvest does not describe the flag as a no-egress or local-only mode.

## 11. Customization reporting and OTLP helpers: CORRECTED

The [metrics change][metrics-diff], [current metrics text][metrics], [helper contract][headers], and [managed precedence][managed-telemetry] support configured names, client minimums, name truncation, no backfill, helper ownership, 30-second deadline, 29-minute default refresh, and blocking dependent exports after refresh failure. Both docs commits are ancestors of the snapshot; the helper's binary introduction remains undated as stated.

Exact wording fix: replace the blanket sentence about arrays retaining 25 named entries with: "In per-user 1-day and aggregated 1-day reports, each customization array retains up to 25 named entries plus a trailing other entry; the same cap applies to each day_totals record in aggregated 28-day reports." [Lines 326-332][metrics-cap] distinguish that cap from the broader list of formats that expose configured names, which also includes per-user 28-day reports and corresponding exports. Do not infer a cap for every export or per-user 28-day array from this receipt. The names-exposure conclusion and trend-only advice remain supported.

## 12. Extension load versus management modes: VERIFIED

I checked the [actual addition diff][extension-diff], [the three modes][extensions], and [the experimental notice][extension-preview]. Despite its broader information-architecture subject, the 2026-10-20 commit genuinely adds the mode section; this is not merely a rename mistaken for a feature addition. Default Load & Augment, Load Only, immediate current-session effects, persisted disabling, and unaffected already-running sessions are all supported. `docs-only` is the correct channel because no introduction version is established.

## 13. MCP labels and base64 managed setting: VERIFIED

The [2026-10-20 diff][managed-diff] genuinely adds `requireBase64ImageAttachments` and broadens the allowlist grammar. [The image row][base64], [CLI matching rules][mcp-match], and [enterprise explanation][enterprise-mcp] support the exact summary, including case sensitivity, no label wildcards, and user-chosen names being insufficient identity. The docs commit is contained in the closing snapshot. No claim of tested enforcement or a minimum binary version is made.

## 14. Default availability of unconfigured GA features: VERIFIED

The [2026-10-23 diff][availability-diff] removes the prior 2026-10-22 activation notice and enabled-by-default warning and changes the policy description to active. The [pinned scope][availability] supports existing unconfigured GA features, the preview and cloud-session-storage exceptions, and separation from model selection. The harvest correctly treats this as service-policy documentation, with no claim that a particular tenant's effective settings were observed. The clarified delegation fallback is also in the diff.

## 15. Assisted gate and task waiting in preview: VERIFIED

[1.0.104-0][r1040] is prerelease on 2026-10-23; [1.0.104-2][r1042] is prerelease on 2026-10-24. Their bodies support experimental-gate removal, saved Auto preference fallback, managed fusion repair, and different interactive/SDK versus prompt-mode task waiting. [The exact preview package][pkg1042] matches npm's timed selector. All three preview tags share the public notes SHA, so individual release bodies are the appropriate version evidence. The section correctly avoids calling Assisted the default or claiming these changes in stable.

## Prior claims re-checked

- **plugin4shell-no-fix: VERIFIED only as absence of a named repair.** I searched the complete [closing changelog][closing-notes], inspected the stable tag and public advisories, and reread [AIR's original report][air]. The described failure allows attacker-controlled plugin code to replace the reviewed pinned content by exploiting a hash-shaped default branch and unverified checkout result. AIR's report is dated 2026-09-17; it cannot independently establish 1.0.103 exploitability or patch absence today. The harvest already keeps that boundary. No current-vulnerable or current-safe verdict is justified.
- **sandbox-file-tools-read-dev-config: VERIFIED as retained documented posture.** [Stable line 486][dev-config] still gives file tools developer-configuration access, including token-bearing registry config, with the opt-out. [Default developer-tool access][dev-default] remains enabled. [The in-process caveat][file-tools] still says the OS sandbox cannot constrain these tools' file operations. These are not secret isolation guarantees.
- **Forced managed refresh: VERIFIED as a documentation claim.** [Current instructions][forced-refresh] forbid stale-cache fallback and distinguish first-startup device delivery from subsequent server-managed requirements. I found no basis to extend the retained claim to tested ACP revocation or a successful failed-refresh experiment.
- **Managed entry points: VERIFIED in the retained scope.** [Stable 1.0.88 history][stable-notes] and [the current mode list][managed-modes] name MCP, permission, and plugin policy across hosting modes. Section 2's new sandbox repair is a separate requirement; the older claim cannot be widened to all sandbox behavior.
- **Sandbox GA, default off, and bypass controls: VERIFIED as documented.** [The current enabled key][sandbox-enabled] remains false. [Managed rules][managed-sandbox] require explicit failure and bypass policy to express mandatory containment. [Minimum version][sandbox-minimum] remains CLI 1.0.93, which does not supersede the newer 1.0.103 ACP repair.
- **Network posture: VERIFIED that the old advice changed.** Stable release notes supersede the local-network-off and blanket macOS statements for the cases in section 1. [The Windows direct-connection warning][proxy] remains present; no release receipt here removes it.
- **Credential withholding and masking: VERIFIED as documented.** The [retained stable history][stable-notes] withholds ambient GITHUB_TOKEN unless configured. [Current masking exclusions][masking] still exclude credential files and other unconfigured paths. The new configured-token support is not proof that ambient values are restored.
- **Content exclusion and managed domain limits: VERIFIED at their narrow documented scope.** [Exclusion text][exclusion] promises context exclusion. [limitTo][limitto] cannot be widened by user grants but covers detected domain requests, not arbitrary shell/read/write activity. Neither receipt settles shell reads or constructed destinations.
- **Computer use and workflow permissions: VERIFIED as documented.** [Computer use][computer-use] remains default off with persistent local app approvals; deleting a saved approval does not revoke a running session's grant. [Workflow permissions][workflow-permissions] retain inherited grants and extension-code caveats. No runtime containment test was performed.
- **Settings, updates, and unattended repair history: VERIFIED documentary continuity.** [Settings location][settings] still ignores user keys in config.json, [update controls][config-update] remain documented, and [stable 1.0.97 history][stable-notes] retains disabled-hook resume, canceled-write, unattended-hook, and JSON-redaction repairs. These historical notes do not prove an absence of later regressions.

## Misses

1. **Model retirements and built-in routing changes, 2026-10-19. Channel: `docs-only`, describing hosted model availability and CLI defaults.** [Docs commit 4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b][retire-diff] records retirement of Gemini 3.7 Flash, GPT-5 mini, GPT-5.4, GPT-5.4 mini, and GPT-5.5 on 2026-10-19. Its deleted supported-client rows explicitly mark all five as CLI models, so this is not a product-identity inference. It also changes `explore` from gpt-5.4-mini to gpt-5.6-luna and removes gpt-5.4-mini from `task`'s fallback chain. [Pinned retirement dates][retire-history] and [current built-in defaults][agent-defaults] confirm the result. Independent ancestry to the closing docs snapshot returns 0. The prior harvest's older 1.0.92 retired-model note does not record this later retirement event. Operators should review model pins, fallback expectations, and evaluation baselines; pinning CLI 1.0.103 does not restore a retired hosted model. No binary introduction version or tenant-specific availability was tested.

2. **Custom-agent tool declarations start resolving correctly, 2026-10-19. Channel: `tagged-release`, 1.0.100, retained at 1.0.103.** [Stable-tag line 70][agent-aliases] and [the 1.0.100 release][r100] say agents declaring `search`, `web`, `todo`, or `github-mcp-server/web_search` now receive the matching tools. The notes commit is an ancestor of stable. The harvest covers subagent approval inheritance but omits this distinct tool-availability repair. Retest affected custom agents and their declared tool surface before maintaining missing-tool workarounds or assuming the formerly absent tools remain unavailable.

3. **Built-in browser plugin renamed, 2026-10-19. Channel: `tagged-release`, 1.0.100, retained at 1.0.103.** [Stable-tag line 94][browser-rename] and [the release][r100] rename it to `browser-use` and explicitly preserve existing browser-plugin preferences. Notes ancestry is exit 0. This is a plugin identity/compatibility change, not evidence of lost saved preferences. Inventory checks, documentation, and name-based automation should recognize the new identity without treating it as a second independently installed plugin.

4. **GPT-5 Responses default verbosity repaired, 2026-10-22. Channel: `tagged-release`, 1.0.103.** [The release][r103] and [closing notes line 7][verbosity] say model-specific default Responses verbosity now applies unless session verbosity is explicit. Section 9 discusses routing and schemas but omits this default-sensitive behavior. Recheck output-length expectations and evaluation settings after upgrading; no numerical token saving or new universal verbosity value is established. Shipment is supported by the stable release object and npm package, not by pretending the closing notes commit is inside its own lagging tag.

No new matching public CLI advisory, license change, or installer-script change was found. `git diff v1.0.97 v1.0.103` for README.md, LICENSE.md, and install.sh is empty. [The stable license][license] remains proprietary and [the tree][tree] remains release documentation and infrastructure rather than agent implementation.

## Security search and rule checks

- The repository advisory API and global npm advisory API, freshly read at 2026-10-24T10:03:49Z and 10:03:50Z, each return the same two CLI advisories. [The repository advisory page][advisories] agrees. Neither has an in-window publication or update.
- [GHSA-9ccr-r5hg-74gf / CVE-2026-45033][ghsa-bare] allows attacker-controlled configuration in a nested bare Git repository to execute commands during routine agent Git operations. Structured advisory data bounds affected versions through 1.0.42 and gives 1.0.43 as patched. The narrative's inconsistent earlier-version wording should not override those structured bounds. This is not Plugin4Shell.
- [GHSA-g8r9-g2v8-jv6f / CVE-2026-29783][ghsa-shell] allows crafted shell expansion to hide command execution inside operations classified as read-only, bypassing the intended approval assessment. Affected versions are through 0.0.422; patched is 0.0.423. These are old stable fixes, not October repairs.
- NVD keyword API reads at 2026-10-24T10:05:49Z and 10:06:39Z return the same two relevant records, [CVE-2026-29783][nvd-shell] and [CVE-2026-45033][nvd-bare], plus [CVE-2026-59864][nvd-kiota]. The latter concerns Kiota-generated Microsoft 365/Teams plugin manifests, not this CLI. It is excluded on product identity, not counted as a missing CLI advisory. No result is a proof that undisclosed flaws do not exist.
- Numbered-section receipts use tags, exact package versions, or full docs SHAs. No numbered claim relies on main/HEAD. Live release indexes and registry selectors are correctly restricted to timed channel observations. The section 4 anchor correction is required for precise navigation.
- Security identifiers are accompanied by plain-language effects. The harvest separates marketing from substance, including the README's simplified every-action approval language. It quotes no social post in the numbered findings and treats social reports as leads rather than product facts. I did not re-audit every unpromoted social lead or reproduce external experiments.

## Corrections to carry into synthesis

Apply section 4's `#L51` trust-receipt anchor and section 11's report-format-specific cap wording. Add the four omissions with their stated channel boundaries. Retain the harvest's unresolved network-docs and managed-ask contradictions. Do not turn a retained release note, an absent advisory, or an original disclosure into a present-day binary security test.

## Not established

Private implementation ancestry, binary sandbox enforcement, ACP boundary behavior under failure, failed mandatory refresh behavior, current Plugin4Shell exploitability, constructed-domain enforcement, runtime telemetry suppression, account-specific entitlement, and measured performance remain untested. Missing runtime evidence is not supplied by public notes ancestry. No harvest edit or publication action was performed.

[r97]: https://github.com/github/copilot-cli/releases/tag/v1.0.97
[r98]: https://github.com/github/copilot-cli/releases/tag/v1.0.98
[r100]: https://github.com/github/copilot-cli/releases/tag/v1.0.100
[r101]: https://github.com/github/copilot-cli/releases/tag/v1.0.101
[r102]: https://github.com/github/copilot-cli/releases/tag/v1.0.102
[r103]: https://github.com/github/copilot-cli/releases/tag/v1.0.103
[r1040]: https://github.com/github/copilot-cli/releases/tag/v1.0.104-0
[r1042]: https://github.com/github/copilot-cli/releases/tag/v1.0.104-2
[registry]: https://registry.npmjs.org/@github%2fcopilot
[pkg103]: https://registry.npmjs.org/@github/copilot/1.0.103
[pkg1042]: https://registry.npmjs.org/@github/copilot/1.0.104-2
[brew-stable]: https://github.com/Homebrew/homebrew-cask/blob/9ec411cdc7fb37ffd19f74613fe46b8859117ad0/Casks/c/copilot-cli.rb
[brew-preview]: https://github.com/Homebrew/homebrew-cask/blob/9ec411cdc7fb37ffd19f74613fe46b8859117ad0/Casks/c/copilot-cli@prerelease.rb
[winget-stable]: https://github.com/microsoft/winget-pkgs/tree/1e892b30989841be5df724fd0ed9dd3ef6179a92/manifests/g/GitHub/Copilot
[winget-preview]: https://github.com/microsoft/winget-pkgs/tree/1e892b30989841be5df724fd0ed9dd3ef6179a92/manifests/g/GitHub/Copilot/Prerelease
[cli-compare]: https://github.com/github/copilot-cli/compare/v1.0.103...7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120
[stable-notes]: https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md
[closing-notes]: https://github.com/github/copilot-cli/blob/7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120/changelog.md
[closing-acp]: https://github.com/github/copilot-cli/blob/7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120/changelog.md#L4
[config-update]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L452-L453
[programmatic-update]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md#L145
[network-default]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L504
[network-platforms]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L256-L272
[acp]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/acp-server.md#L37-L55
[proxy]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L546-L552
[trust]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md#L51
[instructions]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L959-L977
[team-plugins]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L588
[skills]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1283-L1290
[managed-ask]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L253-L261
[workflow-permissions]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/dynamic-workflows.md#L106-L116
[workflow-eligibility]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/dynamic-workflows.md#L71-L73
[remote-flags]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L720-L750
[remote-settings]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L494-L497
[share]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L610
[models]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L790-L806
[telemetry-diff]: https://github.com/github/docs/commit/8bebcac020dee52f1a71fc30ab5da6da47586d00
[telemetry]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli.md#L280-L293
[metrics-diff]: https://github.com/github/docs/commit/8562ce861fa0760cdab713ecc7dbabc779b5b749
[metrics]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-usage-metrics/copilot-usage-metrics.md#L311-L352
[metrics-cap]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-usage-metrics/copilot-usage-metrics.md#L326-L332
[headers]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1762-L1789
[managed-telemetry]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L291-L305
[extension-diff]: https://github.com/github/docs/commit/4dc0b8276c24e2e24fe45b1bde0747c5da3cce10
[extensions]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1346-L1372
[extension-preview]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/data/reusables/copilot/copilot-cli/cli-extensions-experimental.md
[managed-diff]: https://github.com/github/docs/commit/92991ed6d17c5023f52e324ee70d36fe7c36dd7d
[base64]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L678
[mcp-match]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L755-L767
[enterprise-mcp]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L353-L360
[availability-diff]: https://github.com/github/docs/commit/2843f3a6c3f21ac46f6503475a24b0080059490d
[availability]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/enterprise/default-availability.md
[air]: https://www.air.security/blog-posts/plugin4shell
[dev-config]: https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L486
[dev-default]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L221
[file-tools]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes.md#L64
[forced-refresh]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L241-L249
[managed-modes]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L624
[sandbox-enabled]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L500
[managed-sandbox]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L388-L405
[sandbox-minimum]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L464-L472
[masking]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md#L180-L182
[exclusion]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/copilot-surfaces/copilot-cli.md#L214-L216
[limitto]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L717-L733
[computer-use]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/computer-use.md#L47-L57
[settings]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L55-L68
[retire-diff]: https://github.com/github/docs/commit/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b
[retire-history]: https://github.com/github/docs/blob/4dd188c2c92f0b57e7f7ec863fd9cca1e093b09b/data/tables/copilot/model-deprecation-history.yml#L14-L32
[agent-defaults]: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1383-L1388
[agent-aliases]: https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L70
[browser-rename]: https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L94
[verbosity]: https://github.com/github/copilot-cli/blob/7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120/changelog.md#L7
[license]: https://github.com/github/copilot-cli/blob/v1.0.103/LICENSE.md
[tree]: https://github.com/github/copilot-cli/tree/v1.0.103
[advisories]: https://github.com/github/copilot-cli/security/advisories
[ghsa-bare]: https://github.com/advisories/GHSA-9ccr-r5hg-74gf
[ghsa-shell]: https://github.com/advisories/GHSA-g8r9-g2v8-jv6f
[nvd-shell]: https://nvd.nist.gov/vuln/detail/CVE-2026-29783
[nvd-bare]: https://nvd.nist.gov/vuln/detail/CVE-2026-45033
[nvd-kiota]: https://nvd.nist.gov/vuln/detail/CVE-2026-59864
