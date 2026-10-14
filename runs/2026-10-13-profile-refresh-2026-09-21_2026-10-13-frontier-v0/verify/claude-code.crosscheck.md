# Crosscheck -- claude-code (adversarial verify of the primary harvest)

Target: `runs/2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0/harvest/claude-code.primary.md`.
Observed 2026-10-13, about 09:30Z. Default was REFUTED unless I confirmed a claim myself.

## Verdict summary

- **Install today:** the channel facts are right. On 2026-10-13 `latest` is 2.1.296, `stable` is 2.1.287, `next` is 2.1.296, and no version was newer. Two wording fixes are listed below.
- **Numbered sections:** 6 VERIFIED (3, 4, 6, 9, 11, 12), 8 CORRECTED (1, 2, 5, 7, 8, 10, 13, 14), 0 REFUTED, 0 UNVERIFIABLE.
- **Biggest correction:** mods became on by default in 2.1.286, not 2.1.287. 2.1.286 was the stable build from 2026-10-08T05:04:58Z, so stable had mods on a day earlier than the harvest says.
- **Biggest misses:**
  - Since 2.1.285 (on stable), `disableWorkflows` no longer stops Code Review or `/ultrareview` unless MDM or the machine's managed-settings file sets it.
  - Until 2.1.280, a write through a symlinked path was judged by its in-tree spelling, so `acceptEdits`, allow rules and auto mode approved writes that landed outside the tree. The fix carries no security label.
- **Also wrong:** the identity paragraph's "New this window" for `mods/`. The folder dates from 2026-09-09.

## How I checked (independent of the researcher's clone)

- **Repository clones (in scratch, never executed):**
  - A blobless clone of anthropics/claude-code.
  - Depth-1 clones of tag v2.1.296 (2301018b1f61) and main (bf2323b3021c).
- **Channel sources:**
  - `npm view @anthropic-ai/claude-code dist-tags`, `time` and `versions`.
  - `gh release list` (30 rows).
  - https://downloads.claude.ai/claude-code-releases/{stable,latest} and their Last-Modified headers.
  - The apt stable and latest `Release` and `Packages.gz` files, and the HEAD Last-Modified of every stable pool file from 2.1.236 to 2.1.287.
  - Homebrew cask commits via `gh api` and the formulae.brew.sh API.
- **Changelog:** CHANGELOG.md at 2301018b1f61. A script mapped every line number the harvest cites to its version heading.
- **Binaries:** linux-x64 platform tarballs of 2.1.278, 2.1.285, 2.1.286, 2.1.287 and 2.1.296. I fetched each with curl, checked its sha512 against the registry `dist.integrity` (all matched), extracted it, removed the execute bit and string-searched it only.
- **Docs:** fetched as `.md` on 2026-10-13. Wayback `id_` captures: billing 20260921092459 (exact, 200, the only CDX row from 2026-09-10 to 2026-10-13), setup 20260918144154, 20261001172341 and 20261004045043, and the hipaa-setup CDX.
- **Advisories:** `gh api repos/anthropics/claude-code/security-advisories`, `advisories/<id>`, `advisories?affects=@anthropic-ai/claude-code`, the same checks for claude-code-action and the Agent SDK, and the NVD API.

## Channel truth

- **VERIFIED: npm.** `latest` 2.1.296 (2026-10-09T16:58:10Z), `next` 2.1.296, `stable` 2.1.287 (2026-10-01T16:59:25Z), `modified` 2026-10-09T19:31:26Z. 2.1.279 was never published. Nothing exists after 2.1.296, and no 2.2.x or 3.x line exists.
- **VERIFIED: GitHub.**
  - v2.1.296 published 2026-10-09T19:28:59Z, isLatest true. All 17 in-window releases have isPrerelease false.
  - Tag v2.1.296 = 2301018b1f61 (2026-10-09T19:28:36Z).
  - `main` = bf2323b3021c (2026-10-13T04:34:03Z). It is 5 commits ahead and 0 behind, all "chore: Update mods/" by GitHub Actions (publish-mods).
- **VERIFIED: vendor pointers.** stable = 2.1.287 and latest = 2.1.296. Both pointer files were last modified 2026-10-09 at 19:28:08Z and 19:28:04Z.
- **VERIFIED: apt.**
  - stable `Release` Date 2026-10-09T19:29:41Z. Its `Packages.gz` ends 2.1.231, 2.1.236, 2.1.267, 2.1.273, 2.1.274, 2.1.277, 2.1.280, 2.1.285, 2.1.286, 2.1.287; 2.1.278 is absent.
  - latest `Packages` tops at 2.1.296-1.
- **VERIFIED: Homebrew.** cask `claude-code` 2.1.287 and `claude-code@latest` 2.1.296.
- **VERIFIED: docs.** The docs changelog tops at 2.1.296 ("October 9, 2026"). What's New: w37 returns 200, w38 to w42 return 404.

## Release ledger

- **VERIFIED: times.** All 17 GitHub publish times, prerelease flags and npm publish times match to the second.
- **VERIFIED: ahead_by.** I recomputed every ahead_by value from the promotion times; all 18 rows match.
- **VERIFIED: promotion times.** All 7 stable pool Last-Modified times match: 2.1.273 2026-09-23T19:30:34Z, 2.1.274 09-24T19:01:00Z, 2.1.277 09-28T18:03:49Z, 2.1.280 09-29T19:28:34Z, 2.1.285 09-30T19:11:13Z, 2.1.286 10-08T05:04:58Z, 2.1.287 10-09T19:30:20Z.
- **VERIFIED: cask commits.** All 7 SHAs and times match: 789f9a010c, e055ec27cc, b91b771b92, 664982bc40, b2aae8bf47, e4b0a8dd0e, a1326862d9.
- **VERIFIED: counts.**
  - 1,581 bullet lines from 2.1.280 to 2.1.296, ranging from 2 (2.1.291, 2.1.294) to 190 (2.1.290).
  - 57 commits in v2.1.278..v2.1.296.
  - The only commits that rewrote published lines in window are 163ae3a264ca and 52c76441cae9. 8187baa, on 2026-09-21, is the parent's pin.
- **CORRECTED: regression count.** "3 more lines naming regressions (2.1.285, 2.1.296)" should read: two more lines use the word, L938 (2.1.285) and L15 (2.1.296). A third line, L484 (2.1.290), names a slowdown "since 2.1.285".
- **Added fact, not in the harvest:** every in-window stable promotion landed 1 to 23 minutes after a new latest GitHub release.

  | Stable build | Pool upload (UTC) | Latest release | Released (UTC) | Gap |
  |---|---|---|---|---|
  | 2.1.273 | 2026-09-23 19:30:34 | v2.1.281 | 19:19:15 | 11 min |
  | 2.1.274 | 2026-09-24 19:01:00 | v2.1.282 | 18:38:05 | 23 min |
  | 2.1.277 | 2026-09-28 18:03:49 | v2.1.284 | 18:02:03 | 2 min |
  | 2.1.280 | 2026-09-29 19:28:34 | v2.1.285 | 19:27:30 | 1 min |
  | 2.1.285 | 2026-09-30 19:11:13 | v2.1.286 | 19:10:13 | 1 min |
  | 2.1.286 | 2026-10-08 05:04:58 | v2.1.294 | 05:03:54 | 1 min |
  | 2.1.287 | 2026-10-09 19:30:20 | v2.1.296 | 19:28:59 | 1 min |

  Stable moves only when a latest build ships. With no release since 2026-10-09, stable cannot have moved since then.

## Identity paragraph

**CORRECTED.** The harvest says "New this window: the repository's `mods/` folder holds the source of four built-in mods". The folder predates the window:

- `mods/README.md` was added by d9c456d on 2026-09-09: "Add mods: sec-default, diff and telemetry, the hooks-module plugins built into Claude Code".
- `mods/agents-md` was added by a92ea1cdb11a on 2026-09-18.
- Both are ancestors of the baseline v2.1.278, and `mods/` is in the v2.1.278 tree.

What is new in window is that mods load by default and that the guard gained options.

Fix: "First recorded this run: the repository's `mods/` folder (public since 2026-09-09) holds ...". The quote "published as it is built into the binary" is VERIFIED at 2301018b1f61 `mods/README.md`.

## Install today

**VERIFIED:**

- The newest release, the stable channel, the "Preview and beta: none" bullet, and "Main only".
- The 3.7-day gap: from 2.1.296's npm publish to 2026-10-13T08:58Z is 3.67 days, longer than the 3.58-day gap from 2.1.278 to 2.1.280.
- Opt-in items:
  - You should know: L713.
  - `onFailure`: requires v2.1.295 or later.
  - `allowModsToOverrideDenyRules`: the README at the tag says "Off unless it is the literal `true`".
  - Server classifier: "as Anthropic rolls it out".
  - `CLAUDE_CODE_ENABLE_TODO_TOOLS`: per the env-vars page.
  - HIPAA configuration: requires v2.1.285 or later.

**CORRECTED: mods version.** "mods are on by default from 2.1.287" should read "from 2.1.286". See section 1.

**CORRECTED: what the main-only commits change.** The harvest says "They change the source of the built-in guard and AGENTS.md mods". `git diff --numstat v2.1.296 origin/main` shows:

- `mods/sec-default`: 107 files, +3649/-291.
- `mods/diff`: 12 files, +248/-25 (open-outcome text for the `/diff` pane).
- `mods/types`: +257/-3.
- `mods/agents-md`: 2 files, +3/-2 (a resumed fork keeps its own nested-file set).
- `mods/README.md`: +1/-1.

The guard dominates the diff, but `/diff` and the type declarations also changed.

## Numbered sections

### 1. Mods ship on by default ... -- CORRECTED

**Verified evidence:**

- L712 and L713 are in 2.1.287, and the v2.1.287 release body carries both.
- The mods overview quotes ("Mods are on by default. In the terminal, use Claude Code v2.1.287 or later", the `CLAUDE_CODE_ENABLE_FUNCTION_HOOKS` sentence, "Mods aren't sandboxed", "Act without asking you") match line for line.
- The admin page matches: the guard loads with managed settings or a Team or Enterprise sign-in; the API-key, Bedrock, Agent Platform and Foundry sentence; `$.fs`/`$.process` are not covered.
- The permissions page "Extend permissions with hooks" list matches word for word.
- `register.ts` L67-L104 and L106-L114 at 2301018b1f61 do what the harvest says.
- The guard-fix lines map to the stated versions: L590, L599 (2.1.289); L441, L450 (2.1.290); L307, L345, L353 (2.1.292); L125, L143, L159 (2.1.295).
- Probe counts reproduced:

  | String | 2.1.278 | 2.1.287 | 2.1.296 |
  |---|---|---|---|
  | `allowManagedModsOnly` | 0 | 4 | 4 |
  | `allowModsToOverrideDenyRules` | 0 | 4 | 4 |

- The flag code reproduces: 2.1.278 has `var J4t=()=>!1;var XUe=()=>a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS??x(YUe,J4t())` and 2.1.287 has `var kjt=!0;var dQ=()=>C(HXe,kjt)`.
- The create page checks out: "Enable for this session", and no load under `-p`, `dontAsk`, an untrusted workspace, `--safe-mode`, `--bare` or `disableAllHooks`.
- The overview says `disableAllHooks`, `--bare` and `--safe-mode` "don't stop built-in mods".
- `allowManagedModsOnly` reads from managed settings only, and the guard "fails closed" (admin page L226).

**What is wrong:**

- **(a) The default flipped one version earlier.** I probed two more binaries:
  - 2.1.285 has `var xNt=()=>!1;var n6=()=>a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS??x(Y6e,xNt())`, with 0 occurrences of either option and of the deny-held notice.
  - 2.1.286 has `var FFt=!0;var C6=()=>a.CLAUDE_CODE_ENABLE_FUNCTION_HOOKS??R(u8e,FFt)`, with the options at 4 and 4 and "tried to lift a deny rule in your settings" at 2.
  - So the rollout default flipped to on in 2.1.286 (npm 2026-09-30T17:14:38Z), where `CLAUDE_CODE_ENABLE_FUNCTION_HOOKS=0` still turned mods off. 2.1.287 stopped reading the variable.
  - 2.1.286 was the stable build from 2026-10-08T05:04:58Z to 2026-10-09T19:30:20Z.
  - This matches the admin page ("on by default in Claude Code v2.1.286 and later") and the overview's Desktop note. It settles the "Not reached" disagreement: both pages are right about different things.
  - At 2.1.296 the default is still on: `var PL=!0` read through `k(DI,PL)`. The researcher left this untraced.
- **(b) `disableSideloadFlags` does more than the harvest says.** The admin page says it "also rejects `--agents` and `--mcp-config`". A fleet following the operator consequence would break CI that passes those flags.
- **(c) Tag ancestry is not channel evidence here.** The ancestry sentence argues from tag ancestry of `mods/` commits. But 0d7f14dd352f and 16da1ecd3ff1 are also ancestors of v2.1.285 (tag cut 2026-09-29T19:27:09Z), whose binary (npm 17:32:09Z) has neither option. Only the binary probe dates mods code.

**Exact fixes:**

- Date: "2026-09-30 (2.1.286, latest: rollout default on, env var still honored); 2026-10-01 (2.1.287: 'Added Claude Mods', env var ignored); 2026-10-08 (2.1.286 reaches stable); 2026-10-09 (2.1.287 reaches stable)".
- Probe sentence: "defaults to true at 2.1.286 (`FFt=!0`, still overridable by `CLAUDE_CODE_ENABLE_FUNCTION_HOOKS`) and at 2.1.287 (`kjt=!0`, no longer overridable)".
- What changed: "Mods went from flag-off early access to on by default in 2.1.286, and 2.1.287 stopped honoring the early-access off switch".
- Operator consequence: "`disableSideloadFlags` (stops `--plugin-dir`, `--plugin-url` and Claude-written mods, and also rejects `--agents` and `--mcp-config`)".
- Delete the tag-ancestry clause or mark it non-channel.

### 2. Unreleased on main after 2.1.296 ... -- CORRECTED (omission)

**Verified:**

- `git rev-list --count v2.1.296..origin/main` = 5 (3deb873 to bf2323b). Diff 123 files, +4158/-322.
- The new `tool.check` row quote, the `env.set` row (9 policy and sign-in variables, 10 code-loading variables), the "managed settings or a managed-mcp.json" seat, and the `session.append` and `session.compact` rows: all at bf2323b3021c `mods/sec-default/README.md`.
- At the tag, the guard registers no `env.*` hook (register.ts at 2301018b1f61). Main adds `on('env.get')` and `on('env.set')` at register.ts L156 and L163.
- The probe reproduces. "is not for plugins outside policy to change" and `managedMcpServersUnreadable` appear 0 times in the 2.1.287 and 2.1.296 binaries. "tried to lift a deny rule in your settings" appears twice in each. On main the refusal text is in `pinned-variable-refusal.ts`.

**Omission:** the same README at bf2323b3021c says:

> That pin is a list, not a boundary.
> A person's plugin can start a process as the person by other roads.
> The pin keeps the organization's hook commands and tools from being re-pointed by accident or by a careless plugin, not by a hostile one.

It also lists carve-outs to the ask hold: a classic `PermissionRequest` hook, a plain `-p` run, and hosted sessions without the guard.

**Fix:** after "No published binary contains it." add: "The vendor's README calls the env pin 'a list, not a boundary' that stops a careless plugin, not a hostile one, so even after it ships `allowManagedModsOnly` remains the control against a hostile user mod."

### 3. Auto mode becomes the starting mode ... -- VERIFIED

**Verified:**

- L1216 (2.1.283), L1112 (2.1.284), L1002 and L1001 (2.1.285), L303 (2.1.292), L275 (2.1.293) and L1448 (2.1.281) all match.
- The permission-modes starting-mode table matches exactly: terminal and VS Code `auto` with v2.1.283; `-p`/SDK `auto` without flag fetch with v2.1.285; HIPAA `default`; `disableAutoMode` `default`.
- The "Isolation needed: None; a sandbox or container adds defense in depth" row is still live.
- The repo CLAUDE.md at 2301018b1f61 "Security hardening for GitHub Actions" requires the egress-firewall runner, an enforce-mode allow list and `--permission-mode auto`.
- 732e167ee9d7 is an ancestor of v2.1.286, v2.1.287 and v2.1.296, and not of v2.1.285.

**Notes, no change needed:**

- The docs date the all-plans default to v2.1.283, while L1112 dates "every plan and provider" to 2.1.284. On stable both arrived together with 2.1.285 on 2026-09-30.
- CLAUDE.md also keeps an exemption table, and its check "cannot see a job that calls Claude another way". "Every job" is the rule, not an enforced fact.

### 4. The server-side classifier reaches every direct-API session type ... -- VERIFIED

**Verified:**

- L1474 and L1475 (2.1.281), L1308 (2.1.282), and L695, L684 and L635 (2.1.288) match.
- The permission-modes "Server-side classifier review" text matches: version gates 2.1.271, 2.1.278, 2.1.281, 2.1.282 and 2.1.280, "as Anthropic rolls it out", and "denies the action rather than run it unreviewed".
- The live billing page matches: "temporary setting", and "Where the notice can't wait for an answer ... continues in auto mode ... -p it prints the text to stderr".
- The Wayback capture 20260921092459 (exact, HTTP 200) contains the same `-p` sentence, the same "temporary" line, and "The variable isn't read on a direct connection to the Anthropic API".
- So the correction to the profile's "stalls a `-p` run" sentence stands.
- `CLAUDE_CODE_AUTO_MODE_SERVER` still appears in the 2.1.287 and 2.1.296 binaries.

**Note:** "For CI on the direct API, Anthropic's server is now the default judge" holds only "as Anthropic rolls it out", except for telemetry-off sessions, where it is the default from 2.1.282.

### 5. Four repository advisories in fifteen days ... -- CORRECTED

**Verified from the advisory objects:**

| Advisory | Published (UTC) | Severity | CVE | Range | Notes |
|---|---|---|---|---|---|
| GHSA-pq7j-f95f-qfcv | 2026-10-09T15:14:01Z | high | CVE-2026-86063 | < 2.1.179 | Credit: "Or Nevo Michrowski of Air Security" in the description |
| GHSA-5j29-h97v-84ch | 2026-10-05T12:45:33Z | high | CVE-2026-103435 | < 2.1.129 | TOCTOU symlink write |
| GHSA-gfvf-j8jh-jxxw | 2026-09-29T21:44:55Z | low | CVE-2026-103012 | >= 2.0.68 < 2.1.260 | Team from 2.1.38; endpoint-managed unaffected; NVIDIA AI Red Team |
| GHSA-v234-4jrq-mgg6 | 2026-09-25T21:54:09Z | high | none | Claude Desktop >= 1.1.3918 < 1.15962.0 | |

- Patched-build npm dates match: 2.1.129 2026-05-05, 2.1.179 2026-06-16, 2.1.260 2026-09-03.
- The changelog is silent where the harvest says: the 2.1.129 entry at L5310 has 27 bullets and the 2.1.179 entry at L4369 has 9, and neither names the fix. The 2.1.260 leftover-API-key line carries no label.
- The parent finding's Plugin4Shell is the same SHA-pin bug in 2.1.179, so the identification holds.
- `gh api advisories/<id>` returns 404 for all four.

**What is wrong:**

- **(a) Wrong "previous" advisory.** "The previous repository advisory, GHSA-7835-87q9-rgvv, reached it a month after publication" picks the outlier. GHSA-4vp2-6q8c-pvq2 was published 15 minutes after GHSA-7835 on the same day (2026-06-25T13:29:49Z) and reached the global database at 16:53:00Z, about 3.5 hours later. Earlier lags:

  | Advisory | Lag to global database |
  |---|---|
  | GHSA-q5hj | 4h41m |
  | GHSA-5cwg | 11.6h |
  | GHSA-mmgp | 15h |
  | GHSA-vp62 | 1.4 days |
  | GHSA-fg94 | 4.3 days |
  | GHSA-7835 | 29 days |

- **(b) Scanners will raise them eventually.** "dependency scanners will not raise these" overstates. They have not raised them yet: 4 to 14 days for the three npm-scoped advisories, longer than the usual hours-to-days lag.
- **(c) GHSA-v234 is filed under ecosystem "other".** It covers Claude Desktop, not npm, so npm scanners would not cover it at all.
- **(d) NVD is not mentioned.** NVD already lists CVE-2026-103012 (published 2026-09-30) and CVE-2026-103435 (published 2026-10-07), both "Awaiting Analysis". CVE-2026-86063 has no NVD record.

**Fixes:**

- Replace the GHSA-7835 sentence with: "the two previous repository advisories, both 2026-06-25, reached it after about 3.5 hours (GHSA-4vp2-6q8c-pvq2) and 29 days (GHSA-7835-87q9-rgvv)".
- Replace the scanner clause with: "dependency scanners have not raised them yet; NVD lists CVE-2026-103012 and CVE-2026-103435".
- For plain words, add the advisory's precondition: an attacker "controlling a plugin's upstream repository", on a git host that permits SHA-shaped branch names.

### 6. Managed settings: an OS-denied read now starts sessions ... -- VERIFIED

**Verified:**

- L920 is in 2.1.285 and in the release body. L1270, L1271 and L1311 (2.1.282), L1193 (2.1.283), L939 (2.1.285), L406 (2.1.290) and L307 (2.1.292) all match.
- managed-settings L339 to L342 match word for word, including "and no admin source supplies a policy".
- L352 lists `disableAutoMode` as a single-restrictive-value key. L364 and L365 cover the withholding. L367 gives the v2.1.282 requirement.

### 7. Hooks still fail open by default ... -- CORRECTED (channel field)

**Verified:**

- L87 (2.1.295) and the hooks reference L883 and L878 quotes match.
- L676 (2.1.288), L512 (2.1.290), L233 (2.1.294, a two-line release), L23 and L11 (2.1.296), L309, L359 (2.1.292) and L1604 (2.1.280) all match.
- L309 is the only "Security:" line from 2.1.280 to 2.1.296. L703 mentions "security setting" but is not a label.

**Fix:** the Channel field says "(all after stable 2.1.287; latest only)", but the section cites L1604 from 2.1.280, which is on stable. Use: "`tagged-release` (2.1.288 to 2.1.296, latest only; the 2.1.280 PermissionRequest change at line 1604 is on stable)".

### 8. Bash checks ... -- CORRECTED (test shape)

**Verified:**

- L603 and L604 (2.1.289), L1373 and L1476 (2.1.281), L728 (2.1.287) and L673 (2.1.288) match.
- L472, L474, L448 and L500 (2.1.290), L35 (2.1.296), L1200 (2.1.283) and L957 (2.1.285) match.
- The permissions page L358 quote matches.
- No in-window line re-lands Read deny on arbitrary Bash arguments or on unparsed lines.

**What is wrong:** the operator consequence tests "after `X=1 cmd` or `TZ="$HOME" cmd`". Neither fixed line names a literal prefix like `X=1 cmd`:

- L604 is "a bare variable assignment came before the command", for example `X=1; rm -rf build`.
- L603 is an env prefix "with an expanded value", for example `TZ="$HOME" rm -rf build`.

A test with `X=1 rm` can pass on stable while the real gap stays open.

**Fixes:**

- Use `X=1; rm -rf build` (line 604) and `TZ="$HOME" rm -rf build` (line 603).
- Add L480 (2.1.290, latest only): "sandboxed Monitor tool commands skipping the permission prompt under sandbox auto-allow". It is the same posture.

### 9. Repository files lose telemetry, sandbox, Chrome and attachment switches ... -- VERIFIED

Every cited line maps to its stated version: L1310, L1252, L1309 (2.1.282); L1015, L1006 (2.1.285); L538, L555, L476, L419 (2.1.290); L1377 (2.1.281); L262 (2.1.293); L1084, L1085 (2.1.284); L1272 (2.1.282).

### 10. Graders and unattended runs ... -- CORRECTED (operator consequence)

**Verified:**

- L123 (2.1.295), L507 and L509 (2.1.290), L1378 (2.1.281), L996 and L928 (2.1.285), L694 (2.1.288), L314 (2.1.292) and L91 (2.1.295) match.
- The CLI reference still documents `--restricted` (v2.1.248) and `--permission-prompts none` (v2.1.259).

**What is wrong:** "Graders on stable 2.1.287 should pass an explicit `--tools` allowlist and not assume `--restricted` removed every tool" contradicts the line the section cites. L123 reads "Fixed `--tools` and `--restricted` not applying to built-in tools that register after launch". On stable an explicit `--tools` list has the same gap.

**Fixes:**

- Replace the advice with: "On stable 2.1.287 neither `--restricted` nor an explicit `--tools` list removes a built-in tool that registers after launch; pin graders to 2.1.295 or later and keep a sandbox or deny rules behind them."
- Add L444 (2.1.290): "an `@`-mention under the read block or `--restricted` being able to read a file outside the working directories through a link changed mid-read".

### 11. Telemetry and data exposure ... -- VERIFIED

**Verified:**

- L715 (2.1.287), L1157 (2.1.283), L506 (2.1.290), L304 (2.1.292), L955 (2.1.285), L1595 (2.1.280) and L837 to L840 (2.1.286) match.
- monitoring-usage L779 and L1641 cover `prompt_text`.
- Admin L81 has "Before v2.1.288, the variable stopped every mod's `$.http.fetch` request". No 2.1.288 changelog line mentions it (searched L618 to L709).

### 12. Defaults moved to Opus 5.5, Sonnet 5.5 and Haiku 5.5 ... -- VERIFIED

**Verified:**

- L1520, L1597 and L1598 (2.1.280), L1051 (2.1.284), L238 (2.1.293), L790 (2.1.287), L998 and L916 (2.1.285), and L1155 and L1156 (2.1.283) match. The v2.1.283 release body carries both settings.
- Settings reference L897, L901, L905 and L907 match. `deniedModels` requires v2.1.283, `allowedProviders` requires v2.1.285, and "never widen it" is at L5526.
- Probe: `deniedModels`, `availableModelsMatch` and `allowedProviders` appear 0 times in 2.1.278 and 61, 24 and 94 times in 2.1.287.
- The setup-page sentence about new models is absent at Wayback 20261001172341 and present at 20261004045043.
- permission-modes L337 says Haiku 5.5 in auto mode needs v2.1.293.
- The hipaa-setup page requires v2.1.285 and sets `allowedProviders` to `["anthropic"]`. Its first capture is 20261005204031. The changelog never mentions HIPAA.

**Related miss** (listed below, not a correction to this section): since 2.1.284, a safety flag can switch a session off a pinned Opus model (L1116). "Pin full model IDs" is still right for alias drift but does not fix the model.

### 13. Stable moved seven times ... -- CORRECTED (two numbers)

**Verified:** the full apt history, all 7 pool times, all 7 cask commits, the computed lags (8.1, 7.85, 10.1, 7.2, 1.07, 7.5 and 8.1 days), the Release Date, and the setup wording at the 20260918, 20261001 and 20261004 captures.

**Fixes:**

- "one to five versions at a time" should read "one to six". 2.1.267 to 2.1.273 crosses six published versions, 2.1.268 to 2.1.273.
- "bumped 1 to 6 hours after each" should read "50 minutes to 6 hours". For 2.1.277 the pool upload was 18:03:49Z and cask b91b771b92 landed at 18:53:39Z.

The 2.1.277 lag of 10.1 days sits just outside "seven to ten days".

### 14. AGENTS.md reaches Bedrock, Vertex, Foundry and gateways ... -- CORRECTED

**Verified:**

- L1477 (2.1.281) and L1158 (2.1.283) match.
- Commit 163ae3a264ca (2026-09-25T02:20:46Z, 33.3 hours after 2.1.281's npm publish) added L1477 and removed "(not yet on Bedrock, Vertex or Foundry)" from the 2.1.277 entry.
- Commit 52c76441cae9 (2026-10-01T18:43:08Z) changed "an opt-in plugin" to "a built-in mod". The live v2.1.287 release body now shows the new text.
- The memory page quotes match: "Before v2.1.281", the four values, the `pluginConfigs` scopes, `InstructionsLoaded`, and the external-import behavior.
- `mods/agents-md` exists at the tag.

**What is wrong:**

- The memory page row for `managed-only` reads "Only your organization's managed `CLAUDE.md` and auto memory at launch ... A subdirectory's `CLAUDE.md` and `.claude/rules/` files, and path-scoped rules, still load on demand."
- So "a managed `managed-only` value drops project, local and user instruction files and keeps the organization's" and "`managed-only` gives regulated fleets a way to keep repository instructions out of the prompt" overstate it.
- The page also says "Before v2.1.285, the plugin's ID was `agents-md@builtin`, and Claude Code ignored an entry under `cc-plugin-agents-md@builtin`". Fleets pinned at 2.1.281 to 2.1.284 need the old key.

**Fixes:**

- Say `managed-only` "keeps launch-time project, local and user instruction files and every AGENTS.md out; subdirectory CLAUDE.md, .claude/rules and path-scoped rules still load on demand".
- Add "(before v2.1.285 the key is `agents-md@builtin`)".

## Prior claims re-checked: spot checks at 2.1.296 and stable 2.1.287

**VERIFIED (I read the evidence):**

- server-side-classifier-default, including the sub-claim correction (Wayback 20260921092459).
- stable-pointer-jump (changed).
- project-bypass-ignored: permission-modes says "If you set `"bypassPermissions"` in those two files, it doesn't take effect either"; L262.
- gitspawn-second-path: no in-window line names a fix. Manifold still lists "Unpatched - confirmed 2.1.252", last confirmed 1 September.
- macos-read-deny-and-mcp-headershelper: no in-window line touches `headersHelper` or macOS read-deny; L592.
- session-recap-on-return: L1118.
- goal-completion-primitive: llms.txt L118.
- hook-continueonblock: hooks L3892.
- subagent-attribution-headers: llm-gateway-protocol L126 and L127.
- auto-mode-hard-deny: auto-mode-config `hard_deny`; managed-settings L365.
- api-key-cloud-surface-boundary: remote-control L400.
- skill-disallowed-tools: skills L408.
- message-display-hook: hooks L50.
- permission-rule-enforcement-cluster: L912 and L999.
- foreground-subagent-depth-enforcement-gap: no depth line in window.
- agent-permission-rule-enforcement-gap: L657.
- per-command-egress-hosts: sandboxing L614.
- claude-ai-skills-plugins-sync: settings-reference L4267 and L4285; admin L43 says a claude.ai-enabled mod counts as a user's.
- managed-lists-fail-closed (changed).
- agents-md-and-task-tools-removed: L848; env-vars `CLAUDE_CODE_ENABLE_TODO_TOOLS`.
- plugin4shell-silent-fix (changed).
- restricted-and-prompts-none.
- The paragraph verdicts for "Channel", "Managed settings fail closed" (2.1.273 on stable since 2026-09-23) and "Fixes arrive unannounced".

**CORRECTED, ultrareview-cloud-review:** the verdict "holds" stands, but its support is wrong. "In-window lines change only upload filters and errors" is false:

- L997 (2.1.285) makes Code Review and `/ultrareview` run when `disableWorkflows` is on, unless MDM or the machine's managed-settings file sets it.
- 2.1.285 also requires git 2.31 and refuses `--separate-git-dir` and symbolic-ref checkouts (L1005, L1008 to L1010).

**Addition to "Fixes arrive unannounced":** L1524 (2.1.280) is an unlabeled fix for symlink-path write approval, the same class as GHSA-5j29.

## Carry-forward answers

All eight are VERIFIED as stated. Two additions:

- **Item 1:** L459 (2.1.290) shows the `/ultrareview` upload now stops on filter drivers named `unset` or `unspecified`. That is more evidence the upload handles git config drivers, but it still names no GitSpawn fix, so "still open" holds.
- **Item 5:** confirmed in the binaries as well as the docs.

## Misses (2026-09-21..2026-10-13, not recorded by the harvest)

1. **`disableWorkflows` no longer stops Code Review PR reviews or `/ultrareview`** unless MDM or the machine's managed-settings file sets it. The claude.ai admin-console toggle and user settings no longer block them. The settings reference and workflows pages still present `disableWorkflows` as the org-wide off switch, with no exception.
   - Receipt: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L997
   - Channel: tagged-release, 2.1.285, on stable since 2026-09-30.
2. **Symlink writes were approved by their in-tree spelling.** "Fixed writes through a symlinked path being judged by their in-tree spelling ... `acceptEdits`, allow rules and auto mode no longer approve one landing outside." No security label. L789 (2.1.287) covers shell writes through repo-committed symlinks.
   - Receipt: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1524
   - Channel: tagged-release, 2.1.280, on stable since 2026-09-29.
3. **Safety-related model switches override a pinned Opus model.** In sessions pinned with `ANTHROPIC_DEFAULT_OPUS_MODEL` or `modelOverrides`, "the API now picks the model to switch to for each kind of flag, not the pinned model". L796 (2.1.287) keeps effort across such switches.
   - Receipt: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1116
   - Channel: tagged-release, 2.1.284, on stable via 2.1.285.
4. **MCP protocol version 2026-07-28 is negotiated by default.** It applies to every local (stdio) MCP connection on every install, Bedrock, Vertex and Foundry included (L368, 2.1.292), and to claude.ai connectors on installs that fetch no flags (L202, 2.1.295). `MCP_PROTOCOL_NEGOTIATION=legacy` opts out.
   - Receipt: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L368
   - Channel: tagged-release, latest only.
5. **Breaking change for self-hosted runners.** They now pass system prompts as files, and "a wrapper or `command` hook that appends `--system-prompt` or `--append-system-prompt` must switch to `--system-prompt-file` or `--append-system-prompt-file`".
   - Receipt: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1479
   - Channel: tagged-release, 2.1.281, on stable.
6. **Plugin and skill impersonation paths closed:**
   - Marketplaces imitating a reserved name are refused and stop loading (L1603, 2.1.280).
   - `Skill(anthropic-skills:*)` and `Skill(claude-ai:*)` allow rules cover only synced skills, and same-named local skills no longer load (L1312 to L1314, 2.1.282).
   - npm plugin sources that are git repos or folders are refused (L878, 2.1.286).
   - Receipt: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1603
   - Channel: tagged-release, on stable.
7. **Artifact tool exposure.** A "don't ask again" Artifact allow rule published files outside the working directories without asking (L948). Auto mode skipped its classifier for artifact uploads approved earlier in another mode (L951).
   - Receipt: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L948
   - Channel: tagged-release, 2.1.285, on stable.
8. **A reply could approve a pending command.** A reply sent from `claude agents` to a background session waiting on a permission prompt "sometimes approving the pending command".
   - Receipt: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L969
   - Channel: tagged-release, 2.1.285, on stable.
9. **Plan mode let the auto-mode classifier approve non-read-only connector tools** that carry a server-pushed ask policy.
   - Receipt: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L418
   - Channel: tagged-release, 2.1.290, latest only.
10. **The Claude apps gateway spend meter undercounted.** It priced 1-hour prompt cache writes at the 5-minute rate and counted only the first model call's input on streamed server-tool turns, so spend limits ran loose.
    - Receipt: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L827
    - Channel: tagged-release, 2.1.286, on stable.
11. **Cloud sessions skipped auto mode's checks on Claude in Chrome actions** that a saved permission allows when feature flags had not loaded.
    - Receipt: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L33
    - Channel: tagged-release, 2.1.296, latest only.

**Checked and found nothing new:**

- No in-window advisories for claude-code-action or the Agent SDK.
- NVD's only other in-window "Claude Code" hit, CVE-2026-100585, is OpenClaw's.
- No license change: LICENSE.md, README.md and SECURITY.md are unchanged from v2.1.278 to v2.1.296, and npm still says "SEE LICENSE IN README.md".
- No install-channel change: apt, dnf, apk and WinGet were all present at the 20260918 setup capture.

## Rule checks

- **CVE/GHSA in plain words:** yes for all four. Plugin4Shell should add the attacker precondition (see section 5).
- **Marketing vs substance:** no numbered section rests on a blog or launch post. Model launches cite the changelog, and launch posts sit under Leads with "not evaluated". This passes, though no explicit marketing paragraph exists.
- **Social:** nothing from social posts is quoted in numbered sections, and the X lane was down. Leads quote one blog title from the writing lane (ghuntley), which is not a social post. The Simon Willison 2026-09-28 Sonnet 5.5 lead is not in feeds/writing.json, whose simonw items start 2026-10-06, but the post exists at https://simonwillison.net/2026/Sep/28/.
- **Pinning:** every repository receipt is at a tag or SHA, with no main or HEAD blob links. Docs are unversioned, with Wayback cited where a date matters.
- **Dates and ASCII:** every date is 2026 and checked to the year. The harvest is ASCII-only (0 non-ASCII lines).
