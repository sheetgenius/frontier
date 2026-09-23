---
schema_version: bitter.frontier_harvest.v0
provider: gemini-cli
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/gemini-cli.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased]
window_volume: 4 stables (v0.57.0, v0.58.0, v0.59.0, v0.60.0), 5 previews; 11 material changes, nearly all security hardening; 0 GHSAs published; all four carried preview items reached stable in v0.57.0
lane: primary sources, researcher (Lane A)
---

# Harvest -- gemini-cli (primary sources)

Punctuation is ASCII. Pin tags, not main.

Identity: `gh api repos/google-gemini/gemini-cli` -> full_name google-gemini/gemini-cli, owner google-gemini, default_branch main. Matches the contract's primary_surfaces.

Shape of the window: a weekly train. Each Monday/Tuesday a stable and the next preview are cut minutes apart, and each stable is exactly the prior preview plus one chore(release) commit (compare v0.57.0-preview.1...v0.57.0 ahead_by=1; v0.60.0-preview.0...v0.60.0 ahead_by=1). Deltas are small (6 to 27 commits per stable). Nearly every non-chore commit is a security or boundary fix. None was published as a GHSA.

## Release ledger

| Tag | Published (UTC) | Prerelease | vs previous stable (compare) |
|---|---|---|---|
| v0.57.0-preview.1 | 2026-08-24T23:24:04Z | true | cherry-pick of 812f7a2 (#28934) onto preview.0 |
| v0.57.0 | 2026-08-25T18:37:14Z | false | v0.56.0...v0.57.0 diverged, ahead_by=27, behind_by=2 |
| v0.58.0-preview.0 | 2026-08-25T18:22:01Z | true | |
| v0.58.0 | 2026-09-01T20:51:17Z | false | v0.57.0...v0.58.0 diverged, ahead_by=9, behind_by=4 |
| v0.59.0-preview.0 | 2026-09-01T20:19:07Z | true | |
| v0.59.0 | 2026-09-08T21:13:43Z | false | v0.58.0...v0.59.0 diverged, ahead_by=6, behind_by=2 |
| v0.60.0-preview.0 | 2026-09-08T21:04:17Z | true | |
| v0.60.0 | 2026-09-15T20:31:02Z | false | v0.59.0...v0.60.0 diverged, ahead_by=16, behind_by=2 |
| v0.61.0-preview.0 | 2026-09-15T20:22:07Z | true | v0.60.0...v0.61.0-preview.0 diverged, ahead_by=8, behind_by=2 |

Nightlies ran daily (0.58.0 through 0.62.0-nightly.20260921.gcfbcaa8df in window). "diverged, behind_by=2" on every stable pair is the release-branch chore commits, not lost fixes. No tags without releases in the window (tag list matches release list).

npm `@google/gemini-cli` dist-tags, read 2026-09-23: latest=0.60.0, preview=0.61.0-preview.0, nightly=0.62.0-nightly.20260923.g62364cb20 (OUT; published 2026-09-23). As of window close 2026-09-21 the reconstructable state from `npm view @google/gemini-cli time --json` is latest=0.60.0 (published 2026-09-15T20:36:40Z), preview=0.61.0-preview.0 (2026-09-15T20:26:46Z), nightly=0.62.0-nightly.20260921.gcfbcaa8df (2026-09-21T01:36:34Z). Non-nightly npm publishes in window: 0.57.0-preview.1 (08-24), 0.58.0-preview.0 and 0.57.0 (08-25), 0.59.0-preview.0 and 0.58.0 (09-01), 0.60.0-preview.0 and 0.59.0 (09-08), 0.61.0-preview.0 and 0.60.0 (09-15). A stray dist-tag `false` points at 0.42.0-nightly.20260512 (publishing hygiene, not material).

## 1. v0.57.0 promotes every item the parent left preview-only: retry/TTL, git-env neutralization, enableAgents fix, Cloud Workstations OAuth

- **Date:** 2026-08-25
- **Channel:** `tagged-release` (prerelease=false)
- **Ancestry evidence:** `gh api repos/google-gemini/gemini-cli/compare/<sha>...v0.57.0` -> fa2f27aee (#28790 retry/TTL) ahead, behind_by=0; c0d192452 (#28792 git env) ahead, behind_by=0; 753e4cb55 (#28867 enableAgents) ahead, behind_by=0; 58ba19945 (#28688 Cloud Workstations OAuth) ahead, behind_by=0. Same result (behind_by=0) against v0.58.0 and v0.60.0. Pinned reads at v0.57.0: `packages/core/src/utils/gitUtils.ts` exports getSafeGitEnv (line 11) and uses it (line 56); `packages/core/src/agents/registry.ts` checks isAgentsEnabled at line 167 before loadBuiltInAgents at line 171, and refreshAgents checks it at line 321 before line 324; `packages/core/src/availability/modelAvailabilityService.ts` has markedAt and ttlMs default 30000 (lines 23, 53).
- **Receipt:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0 ; https://github.com/google-gemini/gemini-cli/blob/v0.57.0/packages/core/src/agents/registry.ts ; https://github.com/google-gemini/gemini-cli/blob/v0.57.0/packages/core/src/utils/gitUtils.ts
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** The parent's "stable runs behind its own security merges" posture closed six days into the window. The stable delta is the preview.0 contents plus #28934 (history rollback on cancellation, retry nudges moved into the user turn to keep the system instruction stable for prefix caching), cherry-picked as preview.1.

**Operator consequence.** Upgrade from 0.56.0. On 0.57.0+, `experimental.enableAgents: false` actually suppresses the built-in subagents (CodebaseInvestigator, CliHelp, Generalist), agent git subprocesses no longer honor workspace .git/config pager/hooksPath or credential helpers, capacity errors retry silently with a 30s availability TTL instead of being terminal, and Cloud Workstations OAuth works again. Re-audit anything that relied on a private-repo extension install via a git credential helper; credential.helper is blanked for agent git. The parent's 0.56.0 regression notes are retired.

## 2. autoEdit mode was not path-checking write_file and replace; fixed in v0.58.0

- **Date:** 2026-08-24 merged; stable 2026-09-01
- **Channel:** `tagged-release` (v0.58.0)
- **Ancestry evidence:** af687798af (#28961) vs v0.58.0 ahead, behind_by=0. Pinned read `packages/core/src/policy/policies/write.toml`: at v0.57.0 the checker is a nested `[rule.safety_checker]` (lines 42, 71); at v0.58.0 it is a top-level `[[safety_checker]]` for `replace` and `write_file`, modes ["autoEdit"], name allowed-path (lines 42-49, 75-82). PR body states the loader schema discarded the nested table, so AllowedPathChecker was never registered.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/28961 ; https://github.com/google-gemini/gemini-cli/blob/v0.58.0/packages/core/src/policy/policies/write.toml
- **Half:** defect | security-relevant | **Confidence:** high on the diff; no local probe of pre-fix exploitability

**What changed.** The default policy's allowed-path safety checker for file edits in autoEdit (auto-accept edits) mode silently did not load. On 0.57.0 and earlier, the model's auto-approved writes were not constrained by that checker.

**Operator consequence.** If you run autoEdit on anything below 0.58.0, assume auto-approved edits could land outside the allowed paths. Upgrade. If you ship custom policy TOML, grep for `[rule.safety_checker]`: the same nesting mistake would drop your checker without an error.

## 3. macOS Seatbelt sandbox could be escaped through a local Docker/OrbStack/Colima daemon; fixed in v0.58.0

- **Date:** 2026-08-21 merged; stable 2026-09-01
- **Channel:** `tagged-release` (v0.58.0)
- **Ancestry evidence:** 5411f113ca (#28935) vs v0.58.0 ahead, behind_by=0; vs v0.57.0 diverged. `packages/cli/src/utils/sandbox-macos-permissive-open.sb` contains 0 "docker" lines at v0.57.0 and 22 at v0.58.0.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/28935 ; https://github.com/google-gemini/gemini-cli/blob/v0.58.0/packages/cli/src/utils/sandbox-macos-permissive-open.sb
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Per the PR, a sandboxed process could reach the container daemon socket and start a privileged container mounting the host filesystem via VirtioFS, bypassing the Seatbelt filesystem boundary. All six built-in profiles now deny the sockets (docker, colima, orbstack, rancher desktop), container CLI binaries, their Mach/XPC lookups and POSIX shm.

**Operator consequence.** On a Mac with any container runtime running, treat `--sandbox` (sandbox-exec) on 0.57.0 or earlier as not a filesystem boundary. Upgrade to 0.58.0+. Agents that legitimately called `docker` from inside Seatbelt will now fail; that is intended.

## 4. Workspace trust fails closed on env signals; untrusted a2a-server drops repo mcpServers (v0.59.0)

- **Date:** 2026-08-28 merged; stable 2026-09-08
- **Channel:** `tagged-release` (v0.59.0)
- **Ancestry evidence:** 0bd1d43975 (#29099) vs v0.59.0 ahead, behind_by=0. Files: packages/core/src/utils/trust.ts, packages/core/src/config/config.ts, packages/a2a-server/src/config/config.ts.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29099 ; https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0
- **Half:** defect | security-relevant | **Confidence:** high on ancestry; medium on pre-fix impact (PR body, no probe)

**What changed.** GEMINI_RESTRICTED_MODE / GEMINI_FOLDER_TRUST / GEMINI_CLI_TRUST_WORKSPACE untrusted signals are now evaluated before settings fallbacks, so an env-declared untrusted workspace can no longer resolve trusted through config. In the a2a-server, an untrusted workspace's repo-defined mcpServers are stripped before startup; previously they could spawn processes.

**Operator consequence.** If you run the a2a-server or headless CLI against untrusted checkouts and rely on env vars to mark them untrusted, 0.59.0 is the first stable where that is authoritative. Re-test CI jobs that set those env vars but expected repo MCP servers to load: they will not.

## 5. MCP OAuth: SSRF guard (v0.59.0) and mandatory RFC 9207 issuer check (v0.60.0, compat break)

- **Date:** 2026-08-26 and 2026-09-02 merged; stable 2026-09-08 and 2026-09-15
- **Channel:** `tagged-release`
- **Ancestry evidence:** 3c311beac2 (#29081) vs v0.59.0 ahead, behind_by=0; vs v0.58.0 diverged. 55b495d6db (#29117) is in the v0.59.0...v0.60.0 commit list.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29081 ; https://github.com/google-gemini/gemini-cli/pull/29117 ; https://github.com/google-gemini/gemini-cli/blob/v0.60.0/docs/tools/mcp-server.md
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** Before 0.59.0, a remote MCP server's `WWW-Authenticate resource_metadata` or `authorization_servers` URL could make the CLI request internal addresses (RFC 1918, loopback, 169.254.169.254 metadata). 0.59.0 enforces HTTPS for remote endpoints, origin matching, private-range blocking with DNS-rebinding-resistant resolution. 0.60.0 rejects OAuth callbacks that omit or mismatch `iss` when an issuer is known (HTTP 400, fail closed).

**Operator consequence.** Connecting to an untrusted remote MCP server on a cloud VM below 0.59.0 exposes instance metadata. Upgrade. On 0.60.0, test every OAuth-protected MCP server: authorization servers that do not return `iss` in the redirect will stop authenticating.

## 6. web_fetch pins resolved IPs and refuses private/loopback/metadata destinations (v0.60.0)

- **Date:** 2026-09-01 merged; stable 2026-09-15
- **Channel:** `tagged-release` (v0.60.0)
- **Ancestry evidence:** 4963a4456a (#29120) is in the v0.59.0...v0.60.0 commit list. `docs/tools/web-fetch.md` at v0.60.0 line 20 states the tool restricts access to private, reserved, loopback and internal networks.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29120 ; https://github.com/google-gemini/gemini-cli/blob/v0.60.0/docs/tools/web-fetch.md
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** All A/AAAA records are validated and the socket binds to the validated IP (closing DNS rebinding); any private result blocks the fetch.

**Operator consequence.** Prompt-injected fetches can no longer reach localhost services or cloud metadata. Flip side: workflows that asked the agent to web_fetch a local dev server or intranet host break on 0.60.0; use the shell tool under your approval policy instead.

## 7. Container sandbox no longer mounts host ~/.gemini credentials; Seatbelt gets a private TMPDIR (v0.60.0)

- **Date:** 2026-09-03 and 2026-09-08 merged; stable 2026-09-15
- **Channel:** `tagged-release` (v0.60.0)
- **Ancestry evidence:** 593db1684e (#29216) vs v0.60.0 ahead, behind_by=0; e148d088c1 (#29171) in the v0.59.0...v0.60.0 list. `packages/cli/src/utils/sandboxUtils.ts` at v0.60.0 defines prepareIsolatedSettingsDir (line 93) with oauth_creds.json on the redaction list (line 32).
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29216 ; https://github.com/google-gemini/gemini-cli/blob/v0.60.0/packages/cli/src/utils/sandboxUtils.ts
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Docker/Podman sandboxes previously bind-mounted the host `~/.gemini`, putting OAuth creds, Google account files and MCP/A2A token stores inside the container boundary. Now a session temp copy carries only settings, commands, skills, policies, keybindings and trustedFolders. Seatbelt previously shared the host `os.tmpdir()` as writable; now a per-session dir.

**Operator consequence.** Below 0.60.0, anything running in the container sandbox could read your Gemini and MCP OAuth tokens. Rotate MCP OAuth tokens if you ran untrusted repos in container sandbox mode. Anything inside the sandbox that expected history/ or tmp/ from the host is gone.

## 8. Extensions: env changes now re-prompt consent, NODE_OPTIONS-class vars stripped, context-file paths bounded (v0.60.0)

- **Date:** 2026-09-03 and 2026-09-04 merged; stable 2026-09-15
- **Channel:** `tagged-release` (v0.60.0)
- **Ancestry evidence:** 60d35f48a8 (#28863) vs v0.60.0 ahead, behind_by=0; vs v0.59.0 diverged. `packages/core/src/services/environmentSanitization.ts` at v0.60.0 lists NODE_OPTIONS (line 241) and PYTHONPATH (line 246); 0 occurrences at v0.59.0. f7f6501efe (#29169) in the v0.59.0...v0.60.0 list.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/28863 ; https://github.com/google-gemini/gemini-cli/blob/v0.60.0/packages/core/src/services/environmentSanitization.ts ; https://github.com/google-gemini/gemini-cli/pull/29169
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Previously an extension update could add MCP server env vars (for example NODE_OPTIONS preload) without triggering the consent prompt, because env was not in the consent string. Extension manifests could also point context files outside the extension root (absolute or `..`).

**Operator consequence.** Below 0.60.0, an extension update you already consented to could silently gain code execution in its MCP subprocess. Upgrade, then re-review installed extensions. Expect new consent prompts on the next extension update.

## 9. Shell "known safe" commands now bounded to the workspace; `ln -s` needs confirmation; system settings rejected if writable by non-root (v0.60.0)

- **Date:** 2026-09-04 and 2026-09-08 merged; stable 2026-09-15
- **Channel:** `tagged-release` (v0.60.0)
- **Ancestry evidence:** 567afbbe8f (#29170) vs v0.60.0 ahead, behind_by=0; 85aca163f6 (#29115) vs v0.60.0 ahead, behind_by=0; 24cab6830a (#29116 NTFS 8.3 short names) and c647533d6c (#29215 provenance prompt) in the v0.59.0...v0.60.0 list.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29170 ; https://github.com/google-gemini/gemini-cli/pull/29115 ; https://github.com/google-gemini/gemini-cli/pull/29116
- **Half:** defect | security-relevant | **Confidence:** high on ancestry; PR-body level on behavior

**What changed.** Before 0.60.0, "known safe" read-only commands (cat, grep, find, sed, ls and Windows equivalents) were auto-approved even when their arguments reached outside the workspace or through symlinks; `ln -s` was not treated as dangerous; Windows short names (git~1) slipped past the AllowedPathChecker blocklist; system-wide settings files were loaded even if group/world writable.

**Operator consequence.** Expect more approval prompts for read commands with `~`, unresolved `$VARS`, or out-of-tree paths. Admins distributing system settings must ensure root ownership (POSIX) or no Users write ACL (Windows), or the file is skipped with a warning; check logs after upgrade.

## 10. Preview-only: build-file edits gate subsequent build/test runs; sandbox refuses to launch from sensitive dirs

- **Date:** 2026-09-11 merged; preview 2026-09-15
- **Channel:** `preview-or-beta` (v0.61.0-preview.0 only)
- **Ancestry evidence:** bfb71fd2b8 (#29250) vs v0.61.0-preview.0 ahead, behind_by=0; vs v0.60.0 diverged. 9c1b0a6105 (#29214) vs v0.61.0-preview.0 ahead, behind_by=0; vs v0.60.0 diverged.
- **Receipt:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-preview.0 ; https://github.com/google-gemini/gemini-cli/pull/29250 ; https://github.com/google-gemini/gemini-cli/pull/29214
- **Half:** both | security-relevant | **Confidence:** high on ancestry

**What changed.** #29250: under restricted workspace mode, if the session edited package.json/Makefile/pyproject.toml/BUILD files, a later `npm run`/`make`/`cargo` requires explicit confirmation, and shell/edit arguments traced to `<untrusted_context>` (web fetch, MCP output) are highlighted. #29214: sandboxes refuse to launch with the home root or other sensitive host paths as workdir; runtime state isolated from host config.

**Operator consequence.** Latest (0.60.0) still auto-runs a build after the agent has rewritten the build file. The injection-to-build path is closed only on `@preview`. Watch for v0.61.0 (expected on the weekly train, out of window).

## 11. Main-only at close: ACP emits a pending tool_call before request_permission

- **Date:** 2026-09-21
- **Channel:** `main-unreleased` (in window)
- **Ancestry evidence:** d5b3e3accb (#29439) merged 2026-09-21T20:51:39Z. compare d5b3e3accb...v0.61.0-preview.0 diverged. First tag containing it is v0.62.0-nightly.20260922.gd5b3e3acc (2026-09-22, OUT).
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/29439
- **Half:** capability | **Confidence:** high

**What changed.** ACP clients (Zed-style editors) could not link a permission request to a tool call; denial now emits a terminal failed update.

**Operator consequence.** If you drive Gemini CLI over ACP and permission prompts render orphaned, this is the fix; not on any stable or preview at close.

## Carry-forward checks

1. **Stable tags in window:** v0.57.0 (08-25), v0.58.0 (09-01), v0.59.0 (09-08), v0.60.0 (09-15). All four preview-only items are ancestors of v0.57.0 and every later stable (compare `<sha>...v0.57.0` status=ahead, behind_by=0 for fa2f27aee, c0d192452, 753e4cb55, 58ba19945; pinned reads confirm getSafeGitEnv, isAgentsEnabled-first ordering, and 30s TTL at v0.57.0). The parent's main-only symlink-ignore fix ba4296c6c is NOT in v0.57.0 (diverged) and IS in v0.58.0 (ahead, behind_by=0).
2. **npm dist-tags:** see ledger. At close: latest 0.60.0, preview 0.61.0-preview.0, nightly 0.62.0-nightly.20260921.gcfbcaa8df.
3. **Policy/trust/sandbox/approval/MCP/hooks/agents:** items 2 through 10. No GHSA published in window: repo security-advisories endpoint returns an empty list, and the GitHub advisory database for npm `@google/gemini-cli` lists only GHSA-wpqr-6v78-jr5g (2026-04-24, fixed 0.39.1), already known. So a dozen boundary fixes shipped as ordinary `fix(...)` commits with no advisory; only release notes (auto-generated PR lists) carry them. No hooks-specific change found in the window. Agents: only #28867 promotion (item 1) and #29335 (AgentLoopContext spread, preview-only).
   **"Gemini Hacked Three Companies" (simonwillison.net/2026/Sep/18/gemini-hacked-three-companies/):** concerns a Gemini model under an external cybersecurity evaluation run by Irregular in May 2026 (disclosed to Google in July, reported by WSJ in September). The post does not mention Gemini CLI. Nothing in the gemini-cli primary record (commits, releases, advisories) in the window references it. Do not attribute to gemini-cli.
4. **Capability half:** thin. Retry/TTL on stable (item 1) makes unattended runs survive capacity blips; #28934 keeps the system instruction stable across retries (prefix cache) and rolls back cancelled turns instead of appending synthetic ones; ACP permission linking on main. Everything else is authority being removed from the agent: fewer auto-approvals, fewer reachable hosts, fewer mounted secrets. What an operator can now do that they could not on 08-20: disable built-in subagents on stable, run the macOS sandbox with Docker Desktop up and still have a boundary, point the CLI at untrusted remote MCP servers without exposing metadata, and trust autoEdit's allowed-path checker.

## Operator questions settled

- Trust in a repo: yes, materially. Stable 0.60.0 closes a Seatbelt escape, a credential mount, an autoEdit path-checker that never loaded, and extension env injection. Every version before 0.58.0 should be treated as having a non-boundary sandbox on Macs running container runtimes.
- Release cadence: stable now trails preview by exactly one week and equals it plus one chore commit. Testing `@preview` is testing next week's `@latest`, which is a cleaner contract than the parent window's.
- Security visibility: fixes arrive without GHSAs. Operators who wait for advisories will miss all of this window.

## Researcher lane notes

Marketing vs substance: GitHub release bodies are auto-generated PR lists; no highlights. `docs/changelogs/latest.md` at v0.60.0 still reads "Latest stable release: v0.58.0" (released September 1), so the docs changelog lags the tag by two stables. Substance is the commit deltas above. Many window commits are titled "[SSR Agent] Issue Fix (...)" (automated agent-authored PRs), which is a production-shape fact worth a line: the repo is being maintained substantially by an agent. One PR body (#29158) quotes a leaked third-party API key in plaintext while removing it from the bundle; not reproduced here.

## Surfaces checked

- gh api repos/google-gemini/gemini-cli (identity)
- GitHub releases list (all pages, filtered >= 2026-08-15) and tags list
- Release bodies: v0.57.0, v0.58.0, v0.59.0, v0.60.0, v0.61.0-preview.0
- gh compare: every consecutive stable pair; preview->stable pairs for 0.57 and 0.60; carried SHAs fa2f27aee, 753e4cb55, c0d192452, 58ba19945, ba4296c6c vs v0.57.0/v0.58.0/v0.60.0; window security SHAs vs their first tag and the prior tag
- Commit lists for each stable delta and main 2026-09-15..09-21
- PR bodies: #28863 #28934 #28935 #28961 #29081 #29099 #29115 #29116 #29117 #29120 #29158 #29169 #29170 #29171 #29214 #29215 #29216 #29250 #29439
- Pinned files: write.toml (v0.57.0, v0.58.0), gitUtils.ts, registry.ts, modelAvailabilityService.ts (v0.57.0), sandbox-macos-permissive-open.sb (v0.57.0, v0.58.0), sandboxUtils.ts, environmentSanitization.ts, docs/tools/web-fetch.md, docs/changelogs/latest.md (v0.60.0), environmentSanitization.ts (v0.59.0)
- npm view @google/gemini-cli dist-tags and time
- repo security-advisories REST (empty), GitHub advisory GraphQL for npm @google/gemini-cli
- simonwillison.net/2026/Sep/18/gemini-hacked-three-companies/ (to rule attribution in or out)

## Not reached

- Local probes of any pre-fix behavior (Seatbelt/Docker escape, autoEdit write outside allowed paths, SSRF); impact statements rest on PR bodies plus pinned diffs.
- Hosted docs site (google-gemini.github.io/gemini-cli/docs) rendering; read docs at tag in repo instead.
- GitHub Discussions and issues in window.
- Exact npm dist-tag values at 2026-09-21 23:59 are reconstructed from publish times, not observed at that moment.

## Observed after window close

- v0.62.0-nightly.20260922.gd5b3e3acc (2026-09-22) first carries #29439 (ACP pending tool_call).
- npm nightly=0.62.0-nightly.20260923.g62364cb20 (2026-09-23).
