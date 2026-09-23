---
schema_version: bitter.frontier_harvest.v0
provider: github-copilot-cli
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/github-copilot-cli.yml
channels_present: [tagged-release, preview-or-beta, docs-only]
window_volume: 6 in-window stable GitHub releases (1.0.81, 1.0.82, 1.0.83, 1.0.85, 1.0.86, 1.0.87), 1 npm-only stable version with no tag or notes (1.0.84), 37 in-window prerelease tags, 0 new advisories, 10 material items
lane: primary sources, researcher from changelog.md at pinned SHA + GitHub Releases + npm times + github/docs commits
---

# Harvest -- github-copilot-cli (primary sources)

Punctuation is ASCII. Closed source: the channel is GitHub Releases (non-prerelease) plus npm `@github/copilot`. First full cycle; no parent harvest. Baseline is the 2026-08-21 intake: npm latest and newest non-prerelease tag both 1.0.80 (2026-08-14), prerelease 1.0.81-7.

Identity check: `gh api repos/github/copilot-cli` -> full_name github/copilot-cli, default_branch main, license NOASSERTION (proprietary LICENSE.md), description "GitHub Copilot CLI brings the power of Copilot coding agent directly to your terminal." Tree is changelog, license, installer; not agent source. Every item below is from `changelog.md` for the `copilot` binary. Nothing here is VS Code Copilot, the cloud coding agent, or `gh copilot`.

Changelog pin: `changelog.md` at SHA `c13b3dcae4f1` ("Update changelog.md for version 1.0.87", 2026-09-21T15:31:10Z, in window): https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1. Line numbers below are at that SHA. Each GitHub Release body matches its changelog section (checked 1.0.85).

## 1. 1.0.83 sandbox cuts localhost and pins Linux egress to the proxy (breaking default)

- **Date:** 2026-09-04
- **Channel:** `tagged-release`
- **Ancestry evidence:** release v1.0.83 prerelease=false, published_at 2026-09-04T15:38:08Z; npm 1.0.83 2026-09-04T15:42:30Z. `compare v1.0.82...v1.0.83` ahead_by=1 behind_by=0 (the repo only carries the changelog commit; the binary is in the release assets).
- **Receipt:** https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L181-L185 and https://github.com/github/copilot-cli/releases/tag/v1.0.83
- **Half:** both | **Confidence:** high that the vendor shipped it; enforcement not probed

**What changed.** On macOS and Linux, sandboxed commands can no longer reach services on the local machine. On macOS that includes a server the command itself starts on 127.0.0.1, so test suites that bind a local port fail until "Allow local network" is turned on in `/sandbox` (L181). Linux sandboxing now requires slirp4netns, nsenter, iptables, ip6tables and the restore tools on PATH (L182), and Linux sandboxes restrict network egress to the configured proxy (L185). 1.0.86 made `/sandbox policy` report local-network access from the configured setting (L33). 1.0.87 made sandbox proxies work on Windows and with username/password everywhere (L7).

**Operator consequence.** Upgrade test: if you run the sandbox, rerun any test suite that binds a port after moving to 1.0.83 or later; expect failures on macOS until you set Allow local network. On Linux hosts and containers, install the listed network tools first or sandboxed commands fail to launch. The capability half: sandbox network isolation now covers loopback, which closes a lateral path to local dev services (databases, metadata proxies) that the prior sandbox left open.

## 2. 1.0.83 sandbox grants file tools read access to token-bearing dev config by default

- **Date:** 2026-09-04
- **Channel:** `tagged-release`
- **Ancestry evidence:** as item 1. The key it names was renamed pre-window in 1.0.79 (`allowDevToolCaches` -> `allowDevToolAccess`, old key silently ignored, L303).
- **Receipt:** https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L168
- **Half:** defect | **Confidence:** high on the text

**What changed.** Sandboxed file tools now read the same developer-tool paths as sandboxed shell commands, "including token-bearing registry config such as ~/.npmrc". The opt-out is `sandbox.allowDevToolAccess: false`.

**Operator consequence.** Re-audit: the sandbox's default read set now includes registry credentials for the agent's file tools, not only its shell. If your threat model is prompt injection exfiltrating tokens, set `allowDevToolAccess` to false, and check that any managed/MDM policy uses the new key name (the 1.0.79 rename means an old `allowDevToolCaches: false` does nothing).

## 3. 1.0.85: COPILOT_ALLOW_ALL falsey values used to enable auto-approval

- **Date:** 2026-09-16
- **Channel:** `tagged-release`
- **Ancestry evidence:** release v1.0.85 prerelease=false, 2026-09-16T02:44:45Z; npm 1.0.85 2026-09-16T02:45:55Z. `compare v1.0.83...v1.0.85` ahead_by=9 behind_by=0.
- **Receipt:** https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L99
- **Half:** defect | **Confidence:** high on the text

**What changed.** The note says COPILOT_ALLOW_ALL no longer refuses to start on values such as 1, 0, yes or empty, "and falsey values now disable automatic tool approval instead of enabling it." Read plainly: before 1.0.85, setting `COPILOT_ALLOW_ALL=0` (or another falsey value that parsed) turned auto-approval on. No advisory was published for it (`gh api repos/github/copilot-cli/security-advisories` lists only GHSA-9ccr-r5hg-74gf, patched 1.0.43, and GHSA-g8r9-g2v8-jv6f, patched 0.0.423; both pre-window).

**Operator consequence.** Upgrade to 1.0.85 or later. Then grep CI and wrapper environments for `COPILOT_ALLOW_ALL`; any job that set it to 0/false to be safe was running with all tools auto-approved on 1.0.84 and earlier. Remove the variable rather than set it false. Same release: the `/permissions` picker marks Allow all only when all three `--allow-all-*` flags are set (L69), and "approve-for-location" now persists (L124), so re-check persisted approvals after upgrade.

## 4. 1.0.85: allowManagedHooksOnly was bypassable by extension callbacks

- **Date:** 2026-09-16
- **Channel:** `tagged-release`
- **Ancestry evidence:** as item 3.
- **Receipt:** https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L127
- **Half:** defect | **Confidence:** high on the text

**What changed.** The `allowManagedHooksOnly` policy now also blocks extension-registered `preToolUse`, `postToolUse` and `postToolUseFailure` callbacks, which "previously bypassed the managed-only lockdown." Same release: configured hooks now keep running after an extension restart instead of silently stopping and later denying every tool call (L126); managed Edit and Write rules now apply to recognized shell redirections and in-place `sed` (L135); an MDM or managed-settings sandbox policy no longer discards `sandbox.allowBypass` (L90).

**Operator consequence.** Enterprise admins who rely on managed-only hooks as a control should treat every version before 1.0.85 as not enforcing it against extensions, and require 1.0.85+ fleet-wide. The Edit/Write-via-redirection change means a deny rule on writes to a path now also catches `echo > path` and `sed -i`; expect new prompts in scripts that wrote that way.

## 5. 1.0.85: session-scoped sandbox bypass for users when policy allows

- **Date:** 2026-09-16
- **Channel:** `tagged-release`
- **Ancestry evidence:** as item 3.
- **Receipt:** https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L139 and #L51
- **Half:** capability | **Confidence:** high on the text

**What changed.** `/sandbox disable` turns the sandbox off for the current session when the organization's policy allows bypass (L139), and a managed sandbox session can be disabled for the rest of the session from an approved bypass prompt (L51). Approved retries are labeled "sandbox relaxed" (network policy still enforced) or "sandbox bypassed" (fully unsandboxed) (L80). The managed startup notice now names `/sandbox disable` instead of claiming sandboxing cannot be turned off (L91).

**Operator consequence.** This settles one contract question in the vendor's words: the admin's `sandbox.allowBypass` decides whether a local user can turn off an org-managed sandbox; the user decides only within that. If you manage policy, decide `allowBypass` explicitly now, because a single approved prompt disables the sandbox for the whole session, not one command. Not probed locally.

## 6. 1.0.81: fail-closed managed settings, ACP allow-all revoke fixed, per-entry managed plugins

- **Date:** 2026-08-27
- **Channel:** `tagged-release`
- **Ancestry evidence:** release v1.0.81 prerelease=false, 2026-08-27T17:10:08Z; npm 1.0.81 2026-08-27T17:10:54Z. `compare v1.0.80...v1.0.81` ahead_by=6 behind_by=0. Fifteen prereleases (1.0.81-0 through -14) preceded it; 1.0.81-7 through -14 are in window.
- **Receipt:** https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L200-L257 and https://github.com/github/copilot-cli/releases/tag/v1.0.81
- **Half:** both | **Confidence:** high on the text

**What changed.** `forceRemoteSettingsRefresh` now fails closed: no cached policy on fetch failure; the session applies the restrictive undetermined-policy posture (non-default MCP servers blocked, bypass-permissions mode unavailable, plugin mutations blocked) (L249). Turning allow-all off from an ACP client now actually reaches the permission engine; before, it could report success while permissions stayed on (a launch-flag `--allow-all-*` baseline is still left intact) (L228). Managed settings win per entry for `enabledPlugins` and `extraKnownMarketplaces` (L252). New `defaultMode` and `defaultPermissionMode` settings choose startup approval behavior (L210). MCP spec 2026-07-28 support (L203). Hooks receive OpenTelemetry `traceparent` (L204). Removed `/plugins`; hook and LSP enable/disable toggles are "temporarily unavailable" (L256-L257).

**Operator consequence.** If you drive Copilot over ACP (Omnigent or any other ACP client), a revoke of allow-all before 1.0.81 may have been cosmetic; upgrade and do not rely on revoke when the session was launched with `--allow-all-*`. That also answers the contract's ACP question: ACP is a shipping, versioned surface, and the launch flags, not the ACP client, set the floor. Admins using `forceRemoteSettingsRefresh` should expect sessions to start restricted when GitHub is unreachable. Anyone who toggled hooks from `/plugins` lost that UI in 1.0.81; edit settings instead.

## 7. 1.0.85: CLI parser rewrite and `copilot plugins` flag removals (breaking)

- **Date:** 2026-09-16
- **Channel:** `tagged-release`
- **Ancestry evidence:** as item 3.
- **Receipt:** https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L141-L152
- **Half:** both | **Confidence:** high

**What changed.** Command-line parsing moved from Commander to a Rust grammar; error and help wording changed (L141). `copilot plugins install --skill [--scope project]` is replaced by `copilot skill add [--project]` (L149). The cross-kind `--kind`, `--scope`, `--mcp`, `--skill` flags on `copilot plugins` are gone (L150). `copilot plugins list --json` now emits a flat array instead of `{ plugins, errors }` (L151). New `copilot mcp` / `copilot skill` enable/disable subcommands (L49).

**Operator consequence.** Adapt: scripts that parse `copilot plugins list --json` or install skills via `plugins install --skill` break on 1.0.85. Grep provisioning scripts before upgrading a fleet. Scripts that match CLI error text also need a recheck.

## 8. 1.0.83 and 1.0.87: enterprise login pinning, MCP policy race closed, marketplace lockdown

- **Date:** 2026-09-04 and 2026-09-21
- **Channel:** `tagged-release`
- **Ancestry evidence:** v1.0.83 as item 1. Release v1.0.87 prerelease=false, 2026-09-21T15:31:08Z; npm 1.0.87 2026-09-21T15:32:31Z; `compare v1.0.86...v1.0.87` ahead_by=1.
- **Receipt:** https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L161 , #L175 , #L12 , #L21
- **Half:** both | **Confidence:** high on the text

**What changed.** 1.0.83: `forceLoginOrgs` managed setting pins sign-in to approved GitHub orgs (L161); enterprise-denied MCP servers could previously start before the managed allow/deny policy resolved, and startup now waits for the fetch (L175). 1.0.87: an empty `strictKnownMarketplaces` allowlist now hides and blocks built-in plugin marketplaces (L12); secrets exported in the launching shell are no longer written to debug logs on session create or resume (L21); `--yolo` stays enabled after startup policy checks for authenticated unmanaged sessions (L11); Auto routing tier gains managed startup defaults (L3).

**Operator consequence.** The MCP race means a denied server could run briefly on versions before 1.0.83; treat that as a gap in the enterprise MCP deny list for older clients. Anyone who collected debug logs (`--collect-debug-logs`, now available to all users in 1.0.85, L138) before 1.0.87 should treat those bundles as possibly containing shell secrets and rotate or scrub before sharing.

## 9. Capability: worktrees out of experimental, `--fleet`, custom agents read repo instructions

- **Date:** 2026-09-15 to 2026-09-21
- **Channel:** `tagged-release` (1.0.85, 1.0.86, 1.0.87); `docs-only` for `--fleet`
- **Ancestry evidence:** releases as above. `--fleet` appears in no changelog section at c13b3dcae4f1 (grep); it is documented in github/docs commit d33e22cae269 (2026-09-15T09:21:37Z, "Document the --fleet command-line option for Copilot CLI (#63200)").
- **Receipt:** https://github.com/github/copilot-cli/blob/c13b3dcae4f1/changelog.md?plain=1#L137 , #L31 , #L5 ; https://github.com/github/docs/commit/d33e22cae269
- **Half:** capability | **Confidence:** high for the changelog lines; medium for `--fleet` (docs-only, no version named)

**What changed.** `/worktree`, `/move`, and `--worktree` work without experimental mode (1.0.85, L137); `worktreePathTemplate` controls where they go (1.0.87, L5). Custom agents can opt into AGENTS.md, copilot-instructions.md and CLAUDE.md with `include-custom-instructions: true` (1.0.86, L31). Plugin-contributed agents can be selected and run (1.0.85, L109). Docs describe `--fleet` for parallel sub-task fan-out from `-p`, not supported with `--acp`.

**Operator consequence.** Try: parallel worktree sessions are now a supported path, not an experiment. `--fleet` is a doc claim with no version pin; confirm with `copilot --help` on your installed version before building CI on it.

## 10. Content exclusion now documented as applying to the CLI (docs-only)

- **Date:** 2026-09-02
- **Channel:** `docs-only`
- **Ancestry evidence:** github/docs commit 104e649542fd (2026-09-02T21:16:38Z, "[Copilot] App and CLI adding content exclusion (#63004)") adds a Content exclusion section to `content/copilot/concepts/agents/copilot-cli/about-copilot-cli.md` and to the enterprise admin page. No in-window changelog line names content exclusion; pre-window entries (L874, L924) show the CLI already had content-exclusion code paths.
- **Receipt:** https://github.com/github/docs/commit/104e649542fd
- **Half:** capability | **Confidence:** medium (vendor docs, not probed)

**What changed.** Docs now state that for Copilot Business and Enterprise users the CLI respects enterprise, org, and repo content exclusion; excluded files are not used as context.

**Operator consequence.** Observe. If content exclusion is part of your data-handling story, this is the first dated doc that puts the CLI inside it. A local probe (excluded file, ask the agent to read it) is the only way to know whether it holds for shell reads, which the docs do not address.

## Release ledger

| Tag | GitHub published | npm published | prerelease | ahead_by vs previous stable |
|---|---|---|---|---|
| v1.0.81 | 2026-08-27T17:10:08Z | 2026-08-27T17:10:54Z | false | 6 (vs v1.0.80) |
| v1.0.82 | 2026-08-29T23:39:31Z | 2026-08-29T23:40:30Z | false | 3 |
| v1.0.83 | 2026-09-04T15:38:08Z | 2026-09-04T15:42:30Z | false | 1 |
| (none) 1.0.84 | no tag, no release | 2026-09-15T22:55:13Z | n/a (npm plain version) | n/a |
| v1.0.85 | 2026-09-16T02:44:45Z | 2026-09-16T02:45:55Z | false | 9 (vs v1.0.83) |
| v1.0.86 | 2026-09-17T22:57:47Z | 2026-09-17T22:57:31Z | false | 1 |
| v1.0.87 | 2026-09-21T15:31:08Z | 2026-09-21T15:32:31Z | false | 1 |

Repo ahead_by counts are small because the public repo only receives changelog and installer commits; they are not a measure of binary change. Prereleases in window: 1.0.81-7 to -14, 1.0.82-0 to -2, 1.0.83-0 to -5, 1.0.84-0 to -9, 1.0.86-0 to -2, 1.0.87-0, 1.0.88-0 (2026-09-21T18:44:18Z) = 37 tags, all prerelease=true.

## Researcher lane notes

Carry-forward (profile claim `latest-lags-prerelease`): answered. 1.0.81 reached a non-prerelease tag and npm on 2026-08-27, 13 days after 1.0.80. The split is structural, not a lag incident: at every stable in the window a newer prerelease already existed, and at observation (2026-09-23) dist-tags are latest=1.0.88, prerelease=1.0.89-0. Both are OUT of window. At window close the last stable published was 1.0.87 (2026-09-21T15:32Z) and the newest prerelease was 1.0.88-0 (2026-09-21T18:44Z). npm has no dist-tag history API, so "latest=1.0.87 at 23:59 on 09-21" is inferred from publish order, not observed.

1.0.84 anomaly: npm has a plain (non-prerelease) `1.0.84` published 2026-09-15T22:55:13Z, not deprecated, with no `v1.0.84` git tag (`gh api .../git/refs/tags/v1.0.84` returns only the -0 to -9 prerelease refs), no GitHub Release, and no changelog section. 1.0.85 followed 3h50m later and its changelog section is unusually long (L39-L152), so it likely carries the 1.0.84 content. Anyone who installed during that window got an unnoted build. Name 1.0.84 as npm-only.

Changelog-is-not-binary: none of the sandbox, hook, or policy lines above was locally probed. They are the vendor's release notes. The operator questions on enterprise policy (who can turn it off) are settled only at the "vendor says" level (item 5).

install.sh changed in window: commits 345390158124 and 752496d8c1e5 (2026-09-08) report unsupported OSes and cache OS detection; no integrity-check change seen in the commit messages. Not read line by line.

Repo also adopted SHA-pinned Actions (7ea621658b52, 2026-09-12); repo hygiene, not product.

## Observed after window close

- v1.0.88 stable 2026-09-22T20:00:58Z (npm 20:02:19Z); npm latest=1.0.88 at 2026-09-23.
- v1.0.89-0 prerelease 2026-09-22T22:08:02Z; npm prerelease=1.0.89-0.

## Surfaces checked

- `gh api repos/github/copilot-cli` (identity, license NOASSERTION)
- `gh release list -R github/copilot-cli --limit 80` (tags, published_at, isPrerelease)
- `npm view @github/copilot time --json` and `dist-tags --json` (observed 2026-09-23)
- `npm view @github/copilot@1.0.84` (not deprecated); `gh api .../git/refs/tags/v1.0.84` (only prerelease refs)
- `gh api .../compare/` for each stable pair v1.0.80 through v1.0.87
- changelog.md raw at c13b3dcae4f1 (sections 1.0.81 to 1.0.87 read in full)
- `gh release view v1.0.85` body and asset list (10 platform assets, no checksums file listed)
- `gh api repos/github/copilot-cli/security-advisories` (two advisories, both pre-window)
- repo commits since 2026-08-19 (changelog, install.sh, Actions pins)
- github/docs commits under `content/copilot/how-tos/copilot-cli` 2026-08-20..2026-09-21; commits 104e649542fd and d33e22cae269 read

## Not reached

- A local `copilot --version` probe or any enforcement test of the sandbox, hook, or allow-all lines.
- Rendered docs page for sandbox and trusted directories at a pinned date (only github/docs commits were read).
- Release asset digests: the release carries no checksum file I could see; did not hash assets.
- install.sh diff content (commit messages only).
