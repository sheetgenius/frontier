# Crosscheck -- antigravity (adversarial verification of the primary harvest)

Run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0. Target: `harvest/antigravity.primary.md` (299 lines, read in full). Verifier lane, checks run on 2026-10-13 between about 09:30Z and 10:30Z.

Method, independent of the researcher's clone and conclusions: my own blobless clone of google-antigravity/antigravity-cli with tags fetched; `gh api` for release objects (all 65), `releases/latest`, repo metadata, `security-advisories`, the global advisory database, and five issue reads; the vendor installers (`install.sh`, `install.ps1`, `install.cmd`) and ten updater manifests downloaded as data; the 1.3.4 linux_x64 and mac_arm64 archives downloaded from GCS and the 1.2.7 linux_x64 asset downloaded from GitHub, extracted as data with the exec bit removed, read with `strings` and byte search, never executed; docs Markdown variants re-fetched; Wayback CDX and captures; the Homebrew cask API and the cask's git history; npm registry lookups; NVD keyword search. Every verdict below rests on something I read myself.

## Verdict summary

| Part | Verdict |
|---|---|
| Install today | VERIFIED. Nothing newer than 1.3.4; every "latest" pointer right. One channel missing (Homebrew cask, M2). |
| Release ledger | VERIFIED on every number. One sentence CORRECTED (CHANGELOG embedding predates the window and is one version behind). |
| 1. Remote Control settings and rules | CORRECTED (missed implication of the 1.3.4 `serve` note) |
| 2. Denials | VERIFIED |
| 3. Sandbox off by default, macOS gap | VERIFIED (evidence added) |
| 4. --dangerously-skip-permissions and /plan | VERIFIED (pinned docs receipt added) |
| 5. Subagent isolation in multi-repo workspaces | VERIFIED |
| 6. Headless as CI driver | VERIFIED |
| 7. Plugin marketplace | VERIFIED |
| 8. Self-updater | CORRECTED (scope of the digest-pin sentence; receipt for `agy update`) |
| 9. Verbosity default flip | VERIFIED |
| 10. Gate scope both ways | VERIFIED |
| 11. Credential and lock fixes, no advisory channel | VERIFIED |
| 12. Model removal on 2026-11-02 | CORRECTED (dated; Ultra already lost 4.6; Enterprise and Free/Plus detail) |

Counts over the 12 numbered sections: 9 verified, 3 corrected, 0 refuted, 0 unverifiable.

## Channel truth (Install today)

- Re-listed at 2026-10-13T09:34Z: newest releases 1.3.4 (2026-10-13T05:09:33Z, prerelease=false, draft=false), 1.3.3, 1.3.2; `releases/latest` = 1.3.4; tag list tops at 1.3.4; `origin/main` = 9eebbedf051ffd75adb15e468f48b7b75be4b15b = `1.3.4^{commit}`; `git log 1.3.4..origin/main` empty; repo pushed_at 2026-10-13T05:09:39Z. Nothing newer than the researcher recorded.
- Prereleases: 0 across all 65 release objects, not only the 40 newest.
- Branches: six `changelog-1.1.x` branches, newest commit 2026-08-14T02:03:24Z (changelog-1.1.13). Matches.
- Updater manifests re-fetched for the same ten platform names: nine return 200 at version 1.3.4 under the GCS prefix `antigravity-cli/1.3.4-5524158944247808/`; `android_amd64` returns 404. Matches.
- `install.sh` sha256 62966c07365423bd4dc209355060744058fb30d60f5323e2d360e39de64e5042, identical to the researcher's. Read in full: manifest from the updater host, SHA-512 compared with the same manifest, `~/.local/bin/agy`, `xattr -d com.apple.quarantine`, then `agy install`; accepts only `-d/--dir` and `-h/--help`. `install.ps1` (sha256 51c2cb4fada22ce0228da71b9506370383d6544bfebcec85fe7616a52b805344) uses the same manifest host and SHA-512 check, installs a raw `agy.exe`, and calls `Unblock-File`; the harvest mentions only the macOS quarantine strip.
- Byte identity: GCS linux_x64 1.3.4 sha256 db5e81e8dee72d282cb1fb5fcd98dc5a43680730d71e3d637a67c874ec077ad3 equals the GitHub asset digest, and its SHA-512 (prefix dbdacfc5a1d9) equals the manifest. I also checked mac_arm64: GCS sha256 ede28149c568c69f549b796a6142ba592b44294111acf8b79cdbffae74e72147 equals the GitHub `agy_cli_mac_arm64.tar.gz` digest, and its SHA-512 (prefix 2c169f0270ca) equals the darwin_arm64 manifest.
- Docs changelog (https://antigravity.google/docs/changelog.md, retrieved 2026-10-13): the CLI section's first entry is v1.3.1, "Latest", October 7, 2026, and the page says "New versions roll out gradually and may take a few days to reach all users." Matches. I also compared its CLI bullets for 1.2.8 through 1.3.1 with the GitHub CHANGELOG at each tag (normalized set comparison): identical, so the docs changelog adds nothing the git record lacks.
- Package registries: no Google-published npm package exists (`@google/antigravity-cli`, `@google/antigravity`, `@google/agy`, `@google-antigravity/cli`, `@antigravity/cli` all 404). The npm names `antigravity-cli` (0.0.1, publisher joseph.chiang, modified 2025-11-19) and `agy` (0.0.0, 2022) belong to unrelated publishers; one line in the profile would keep operators off them. Homebrew does carry a live channel (M2).
- Verdict: "Install today" is correct about the newest stable and what `latest` points at. Its only gap is the Homebrew cask.

## Release ledger

Every row re-derived: tag SHAs (`git rev-parse`), published_at and prerelease flags (API), linux_x64 upload times (they are the assets' `created_at`), linux_x64 digest prefixes, asset counts (6 through 1.2.11, 8 from 1.2.12, the two musl assets added at 1.2.12 with no CHANGELOG line), and ancestry (`git merge-base --is-ancestor` true for every consecutive pair 1.2.6..1.3.4, `rev-list` ahead 1 / behind 0, `git diff --name-only` = CHANGELOG.md only). 15/15 in-window release bodies equal the tag's CHANGELOG section (whitespace-normalized); 112/112 in-window asset digests distinct; `git diff --stat 1.2.7 1.3.4` = 197 insertions, 0 deletions. The 145,150-byte CHANGELOG at 1.3.3 sits verbatim in the 1.3.4 linux_x64 binary (byte offset 94,544,145), followed by a newline and a proto descriptor.

CORRECTED, the sentence "so from this release the notes are bound to the binary that ships them, one version behind." Two problems. (a) The embedding is not new in this window: the baseline 1.2.7 linux_x64 asset (sha256 e410dd56d8c213ef12643d3ff5eaaab57a17e05bbf72e9415322f23879fc4a18, https://github.com/google-antigravity/antigravity-cli/releases/tag/1.2.7) carries the 110,315-byte CHANGELOG from tag 1.2.6 verbatim. (b) A binary carries the previous release's notes, not its own, so it shows the binary was built after notes N-1 were published; it does not bind notes N to binary N. Exact fix: "Each release binary embeds CHANGELOG.md as of the previous tag (observed for 1.3.4 -> 1.3.3 and for the baseline 1.2.7 -> 1.2.6), so a version's own notes first ship inside the next binary." Carry the same fix into the `tags-match-notes-from-1-1-18` bullet, the `closed-source-verifiability-gap` bullet ("The notes are now bound to the binary") and the operator-question answer ("Notes are bound to the binary"): this is a newly observed property, not a window change, and it binds the binary to the prior notes only.

## Numbered sections

### 1. Remote Control settings and browser-approved rules -- CORRECTED

Read: 1.3.4 L11 and L20, 1.3.3 L21, 1.2.14 L10, 1.2.10 L18, each at its own tag; every anchor lands on the quoted bullet, and every tag is an ancestor of 1.3.4. The live Remote Control docs still carry "CLI-controlled settings: You cannot toggle settings in the settings panel from the remote web interface; to change settings, use the CLI." The same line is in a pinned capture, https://web.archive.org/web/20261010210146/https://www.antigravity.google/docs/remote-control?tab=cli; cite it instead of the live page. The docs table says the Linux daemon starts at boot with nobody logged in and keeps running after sign-out; the docs place `cliRemoteControlHostname` and the editor's `remoteControlHostname` in the same `~/.gemini/config/config.json`. Binary strings "Removing the deprecated installer script's services (agy-remote-control)" and "Enabled linger for %s (daemon survives logout and starts at boot)." are present in 1.3.4 linux_x64.

Fix, a missed implication: 1.3.4 L11 says `agy remote-control serve` sessions "now use your saved `settings.json`". So before 1.3.4, sessions served by the daemon did not load `~/.gemini/antigravity-cli/settings.json`. The CLI permissions docs name that file as the home of the allow, ask and deny lists, and the settings docs place `toolPermission` there. The note does not say what those sessions ran under instead, the same gap the profile already flags for the 1.2.6 fix. Add to What changed: "Before 1.3.4, `remote-control serve` sessions did not use the saved settings.json; the note does not say what they ran under." Add to Operator consequence: "If you ran the daemon (`remote-control start`) on a build below 1.3.4, do not assume your saved deny rules or permission mode applied to browser-driven sessions; review those transcripts as you would pre-1.2.6 ones." In Prior claims, qualify `remote-control-permission-mode`: the 1.2.6 fix holds for the session path, and daemon `serve` sessions had a separate settings gap until 1.3.4. Lead only, not vendor-confirmed: issue 1123 (filed 2026-09-28 against 1.2.12) reports daemon conversations ignoring `toolPermission: always-proceed`.

### 2. Denials -- VERIFIED

1.2.15 L13 is quoted exactly; 1.3.3 L20 exact; `rev-list --count 1.2.15..1.3.4` = 7, behind 0. `denied_actions` arrived in 1.1.27 (https://github.com/google-antigravity/antigravity-cli/blob/1.1.27/CHANGELOG.md?plain=1#L17). No later note reverses either bullet. Wording note, optional: the title's "Denials started binding the agent" reads stronger than the note's "respects the denial". The body and the confidence line already say the notes do not state whether this is enforcement or model instruction. A safer title is "1.2.15: the agent stops working around denied permission requests".

### 3. Sandbox off by default; macOS read ~/Library/Application Support until 1.3.3 -- VERIFIED

1.3.3 L12 and L25, 1.2.17 L10 and 1.2.10 L12 are quoted exactly. The live `sandbox.md` CLI section supports every boundary statement: what commands can write and read, `~/.ssh` and `.env` blocked, namespaces on Linux and `sandbox-exec` on macOS, `read_file` grants as read-only mounts and `write_file` as read-write, `unsandboxed` running outside without a prompt, `enableTerminalSandbox` default `false`, `--sandbox` per session, and an "always allow" on a bypass recording an `unsandboxed(...)` rule. The 2026-09-16 capture of `/docs/cli/sandbox` carries the same CLI text, and `/docs/cli/sandbox` is now a meta-refresh to `/docs/sandbox?tab=cli` (fetched). I diffed the in-window captures the harvest listed but did not diff (2026-09-30, 2026-10-03, and 2026-10-10 `?tab=cli`): the changes are copy edits only (capitalization, dashes, connective sentences), with no rule or default change.

Evidence added, not a correction:
- macOS profile. The 1.3.4 mac_arm64 binary embeds the static header of its Seatbelt profile. After `(deny default)` it allows `mach-lookup`, `iokit-open`, `sysctl-read`, `user-preference-read`, `process-exec` and `process-fork`, with the comments "Other sandboxes restrict the list of mach-lookup services. We allow everything for now." The file rules are generated at run time from format strings (`(allow %s (subpath %q))`, `(deny %s (with message %q) (subpath %q))`, `(allow file-read* (literal "/"))`), so the readable set cannot be read statically, and the researcher's canary advice stands. The docs' "restrict filesystem access and socket connections" does not mention the unrestricted Mach service lookup. What a sandboxed command can reach through those services is unprobed.
- Linux mechanism. The vendor docs disagree with each other: the sandbox page says namespaces, the enterprise page (since 2026-10-10, see M1) says "bubblewrap on Linux", and the IDE settings section says `nsjail`. The 1.3.4 linux binary has no real `bwrap` or `nsjail` string (the three `bwrap` hits are inside `zlibwrapper`). It does carry "mount / private", "remount root ro", "bringLoopbackUp" and `_EXEBOX_SBOXSERVE`, which fits a built-in namespace sandbox.
- Lead only, not vendor-confirmed: issue 1197 (2026-10-11, labeled `security` by the repo, macOS, 1.3.3) reports a sandboxed shell command opening a path that a `read_file` deny blocked for the file tool.

### 4. --dangerously-skip-permissions stops auto-approving /plan plans in 1.3.2 -- VERIFIED

1.3.2 L13 is quoted exactly. The only `dangerously` hit in the full CHANGELOG at 1.3.4 is that bullet (L54 of the file, under `## 1.3.2`), so it is the first mention. The headless docs say `permission_mode` is `always-proceed` under the flag (L157), and the binary string is present. 1.1.28 L23 is exact and not reversed: it and 1.3.2 are the only plan-review bullets. The settings docs list the `artifactReviewPolicy` values and the `asks-for-review` default. Receipt to add for "while its docs described one": the headless.md capture of 2026-10-03, before 1.3.2 (https://web.archive.org/web/20261003090204/https://antigravity.google/docs/cli/headless.md), describes the flag only as approving tool calls ("Auto-approve all tool permission requests"), and it is byte-identical to the 2026-10-13 page.

### 5. Subagents given branch or share workspaces used the real checkout until 1.3.3 -- VERIFIED

1.3.3 L19 and 1.2.10 L19 are quoted exactly; both tags are ancestors of 1.3.4 with behind 0. Neither note gives a start version (confirmed).

### 6. Headless as a CI driver -- VERIFIED

Every anchor is exact: 1.2.9 L15-L16, 1.2.10 L17, 1.2.11 L13, 1.2.12 L10, 1.2.14 L14, 1.2.16 L16, and 1.3.4 L10, L15 and L16. The headless docs still say a run "waits up to five minutes" (L495), still list `--print-timeout` default `5m` (L515), and still accept primitive type names for `--json-schema` (L120). The 2026-10-03 capture is identical, so the docs have lagged 1.2.6 and 1.2.14 since at least then. The pre-1.2.11 inference is labeled and sound: 1.2.11 says project agents were not found under `--agent` in `-p` runs, and 1.3.4 says an unmatched `--agent` silently ran the default agent. Small addition: 1.2.9 also reverses 1.2.6, which had "enabled daemon background commands in headless `GEMINI_API_KEY` sessions so background servers stay running" (https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md?plain=1#L10), not only 1.1.28. Issue 1213 (2026-10-12) reported the `--agent` fallback one day before 1.3.4 fixed it.

### 7. Official plugin marketplace in 1.3.2 -- VERIFIED

1.3.2 L9-L10, 1.3.3 L10, 1.3.4 L9, 1.3.1 L12 and 1.2.11 L10 are exact, and so is the 1.0.9 external-plugin note. The marketplace docs lines (desktop installs "are automatically updated" and appear in the CLI; `agy plugin install https://github.com/<owner>/<repo>`) are live and in the pinned capture https://web.archive.org/web/20261010222428/https://antigravity.google/docs/marketplace. Minor: the root `agents.json` claim comes from 1.3.3 L11 (https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L11), which the ancestry line leaves out; add it.

### 8. The binary updates itself unless AGY_CLI_DISABLE_AUTO_UPDATE is set -- CORRECTED

Verified:
- The troubleshooting docs text: "native, statically linked self-updater", the 15-minute TTL marker `last_check.timestamp`, `update.lock` under `~/.gemini/antigravity-cli/updater/`, and `AGY_CLI_DISABLE_AUTO_UPDATE=true`. The 2026-09-18 capture carries the same text.
- 1.1.6 L21 is the only "updater" mention in the CHANGELOG.
- Binary strings: the `jetski/cli/updater` package, `RunBackgroundUpdate`, `TriggerUpdateAndRelaunch`, `checkManifest`, "Last check was less than 15 minutes ago, skipping update (under lock)", `AGY_CLI_DISABLE_AUTO_UPDATE`, and the updater URL.
- `install.sh` prints the "automatically self-updates" notice.
- All nine manifests serve 1.3.4, and none of the 65 releases has an Android asset.

Fix 1, scope. "So a GitHub digest is a valid pin for what the installer delivers" holds only for the tar.gz platforms. linux_x64 and mac_arm64 I checked directly. For mac_x64 and linux_arm64, the Homebrew cask's sha256 values for the GCS URLs equal the GitHub digests. The sentence does not hold for Windows: the updater serves a raw `cli_windows_x64.exe` or `cli_windows_arm64.exe`, GitHub ships `.zip`, and no GitHub digest covers the installed bytes. Exact fix: "For the Linux and macOS archives the updater's bytes equal GitHub's (linux_x64 and mac_arm64 checked directly, mac_x64 and linux_arm64 by Homebrew's sha256), so a GitHub digest pins what the installer delivers; on Windows the installer fetches a raw .exe that no GitHub digest covers."

Fix 2, receipt. `agy update` is documented only on `/docs/cli/install.md` ("or run `agy update` to update an existing installation"). That line is absent from the 2026-10-07 capture (https://web.archive.org/web/20261007031302/https://antigravity.google/docs/cli/install), so it is a docs-only addition from 2026-10-07..2026-10-13. Cite it in section 8. The binary carries `updater.CheckForUpdate` and `relaunchProcess`, which fits.

Fix 3, completeness. `install.ps1` calls `Unblock-File`, the Windows counterpart of the quarantine strip. Also add that the Homebrew cask declares `auto_updates true`, so a brew install updates itself too (M2).

### 9. Verbosity default flipped to medium in 1.3.0 -- VERIFIED

1.3.0 L9 and 1.2.10 L9 are exact. The settings docs carry the "sparse persistence" sentence and a Verbosity entry with only `high` and `low`, both live and in the pinned capture https://web.archive.org/web/20261010160504/https://antigravity.google/docs/settings/.

### 10. Gate scope moved both ways -- VERIFIED

1.2.9 L14, 1.2.10 L12 and L14, 1.2.15 L12 and L19, 1.2.16 L12 and L18, and 1.3.3 L17 are all quoted or paraphrased accurately at their tags. All are ancestors of 1.3.4.

### 11. Credential, session and lock fixes; no advisory channel -- VERIFIED

1.3.3 L15, 1.3.4 L14, and 1.2.9 L17 and L22 are exact. Repo `security-advisories` returns 0; the tree at 1.3.4 has no LICENSE and no SECURITY.md; license is null. I also checked two places beyond the harvest. The global GitHub advisory database has no Antigravity entry published 2026-09-01..2026-10-13. NVD keyword searches for "antigravity", "Google Antigravity" and "agy cli" return 0 results. The section's "no GHSA, CVE or advisory exists" stands.

### 12. Models page schedules Claude Sonnet 4.6, Claude Opus 4.6 and GPT-OSS-120b for removal on 2026-11-02 -- CORRECTED

Verified as of 2026-10-13: `models.md` marks the three models "Will be removed on November 2, 2026". The Claude Sonnet 5.5 and Opus 5.5 rows read: Free & AI Plus no, Pro yes (non-trial only), Ultra yes, Enterprise yes. The CHANGELOG at 1.3.4 names no model and no date. The binary slugs `claude-sonnet-4-6`, `claude-opus-4-6`, `gpt-oss-120b` and `claude-opus-5-5` are present; `claude-sonnet-5-5` is not. Headless docs L435 is quoted exactly.

Fixes:
- (a) Date it. The Wayback index answered on my run. The removal line and the 5.5 rows are absent from the 2026-10-02T02:21:57Z capture (https://web.archive.org/web/20261002022157/https://www.antigravity.google/docs/models/) and present in the 2026-10-03T07:01:47Z capture (https://web.archive.org/web/20261003070147/https://antigravity.google/docs/models). Date: 2026-10-02..2026-10-03, docs-only. Use the captures as the pinned receipts.
- (b) Ultra already lost Claude Sonnet 4.6 and Opus 4.6 at that change. The 2026-10-02 table shows Ultra "yes" for both; the 2026-10-03 table shows "no". For Ultra subscribers the removal is not scheduled for November 2; it has already happened.
- (c) Enterprise. Enterprise had no 4.6 or GPT-OSS access in any capture. Claude 5.5 for Enterprise was "no" in the 2026-10-03 and 2026-10-07 captures (https://web.archive.org/web/20261007130653/https://antigravity.google/docs/models.md) and is "yes" on 2026-10-13. The enterprise page added it between the 2026-10-09 and 2026-10-10 captures (M1): administrator opt-in, billed by token, with agy slugs `claude-opus-5-5-<level>` and `claude-sonnet-5-5-<level>` (levels low, medium as default, high, max), and `--effort` requiring agy 1.2.11 or later.
- (d) Free & AI Plus. These tiers have no 5.5 access, so after 2026-11-02 they keep only Gemini models. For them, "move the pins" means move to Gemini.
- (e) Replace "confirm the replacement slug with `agy models`" with the documented slugs from the enterprise page, and keep `agy models` as the check. Confidence can rise to high for the docs facts, which the captures now date. Keep medium for what the CLI exposes.

## Prior claims re-checked (spot checks at 1.3.4)

- `sandbox-valueless-flag`: holds. The only "valueless" bullet in the CHANGELOG is 1.1.18 (L445 of the file at 1.3.4).
- `gates-loosened`: holds. 1.1.20 L11, 1.1.21 L12 and 1.1.28 L23 are exact at their tags, and nothing later reverses them.
- `gates-tightened`: holds. The headless soft-deny text "the run continues, exits `0`, and prints a notice to `stderr`" is exact (L441).
- `remote-control-permission-mode`: holds for the session path; see the section 1 fix for the daemon `serve` gap until 1.3.4.
- `unsandboxed-rules-deprecated`: holds. The only `unsandboxed` mention in the CHANGELOG is 1.2.2. The binary carries `IsUnsandboxedRule`, `WarnUnsandboxedPermissions` and `warnUnsandboxed`. The CLI docs still present `unsandboxed(...)` as current, while the desktop half of the same sandbox page already tells users to use `command` rules for commands that run outside the sandbox.
- `strict-approve-rule-matching-default`: holds. The quoted phrase is the CLI table's `command` row ("Matches command prefixes word-by-word literally by default"), under the `## Antigravity CLI` heading.
- "Nested command substitutions" (could not verify): the cited evidence checks out. Both "When commands require an exact match" blocks sit under the Antigravity 2.0 headings (L56 for macOS and Linux, L176 for Windows). The CLI section (L262 on) mentions exact match only for Windows commands that cannot be split into words. The binary's model-instruction text is exact.
- `subagent-always-proceeds-auto-approve` (could not verify): fine. One precision: the modes docs say subagents spawned during an `accept-edits` session inherit `accept-edits`; they do not say subagents run in `accept-edits` otherwise.
- `closed-source-go-binary`: holds. The binary is a stripped x86-64 ELF with `google3/third_party/jetski` paths.
- `consumer-successor-to-gemini-cli` and `gemini-consumer-service-retired-june-18`: hold. I re-read the transition post: June 18, 2026 stop for AI Pro, Ultra and free Code Assist for individuals; enterprise access unchanged.
- `gemini-api-key-auth`: holds. The `modelProvider: "gemini"` requirement predates the window; the only `modelProvider` mention in the CHANGELOG is 1.1.13.
- `closed-source-verifiability-gap`: apply the release-ledger fix (the embedding predates the window, and each binary carries the prior notes).

## Leads section checks

- Headless auto-deny string: it exists. But the binary also carries a second variant, "%s required the %s %s that headless mode cannot prompt for, so %s auto-denied. Add an allow-rule under permissions.allow in settings.json (e.g. %s)", which matches the docs. The "Settings allow-rules do not apply" variant is therefore a special path, not the general one. The observation that it "sits next to destructive-action rules" is Go string-table packing, not a semantic link; drop that inference.
- bwrap/nsjail lead: add the enterprise page's "bubblewrap" statement (section 3).
- Argon: confirmed. The binary carries `gemini-4-argon` and its -low, -medium and -high variants; no docs page or CHANGELOG line mentions Argon.
- Docs inconsistencies: each re-confirmed at retrieval. These are the Remote Control settings line, the headless five-minute default and primitive schema types, `unsandboxed` presented as current, the Verbosity entry without `medium`, the install flags `--skip-aliases` and `--skip-path` (which `install.sh` rejects; it accepts only `-d` and `-h`), and the `allowNonWorkspaceAccess` read-or-write wording.
- Desktop v2.23.0 (October 12, 2026), "Permission prompts for commands that run a program from an installed plugin now show the plugin's name and icon.": exact.
- Writing lane: of 161 items, the two Google items the researcher listed are the only ones that touch Antigravity. Nothing missed.

## Misses

- M1, docs-only, 2026-10-09..2026-10-10. The enterprise page added Claude Opus 5.5 and Sonnet 5.5 for Gemini Enterprise as administrator opt-in, billed by token. It names agy slugs `claude-opus-5-5-<level>` and `claude-sonnet-5-5-<level>` and notes that `--effort` needs agy 1.2.11 or later. It also tells CLI users to keep "`--sandbox=true` enabled (`seatbelt` on macOS, `bubblewrap` on Linux)", which contradicts the sandbox page ("Namespaces") and the binary (no bwrap string). Absent from https://web.archive.org/web/20261009030952/https://www.antigravity.google/docs/enterprise; present in https://web.archive.org/web/20261010095514/https://antigravity.google/docs/enterprise/?hl=de; live at https://antigravity.google/docs/enterprise.md. It feeds section 12 (Enterprise replacement slugs) and section 3 (which Linux mechanism the vendor claims).
- M2, install channel. The Homebrew cask `antigravity-cli` (homebrew/cask, community-maintained since 1.0.0 on 2026-05-19) is a live install channel at 1.3.4. It was bumped at 2026-10-13T07:01:43Z, about two hours after the GitHub release, and it tracked every in-window release within hours. It downloads the vendor GCS archives, and its four sha256 values equal the GitHub digests for mac_arm64, mac_x64, linux_arm64 and linux_x64. It declares `auto_updates true`, so `brew upgrade` defers to the self-updater and a brew install drifts the same way. Receipt: https://github.com/Homebrew/homebrew-cask/blob/1bfd02a192f7ae793522978018d0c1dfdaabe556/Casks/a/antigravity-cli.rb. Channel: third-party registry that tracks the tagged releases. It belongs in "Install today" and in section 8.
- M3, tagged-release, 2026-10-10 and 2026-10-13. Two more audit listings disagreed with what actually loads, the same class as the profile's `/hooks` lesson. 1.3.3 L24: `agy plugin validate` and the plugin listings missed skills declared through `plugin.json` and ignored `skills.json` exclusions, so they "now match the skills that actually load". 1.3.4 L19: the `/plugin` Agents row left out subagents declared in a root `agents.json`. Receipts: https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L24, https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L19. Both tags are ancestors of 1.3.4. Fold them into section 7: before 1.3.4, do not trust the plugin listings as an inventory of what loads.
- Smaller unrecorded bullets, not worth sections: 1.3.1 L14 (subagents that stopped on an error, such as quota or capacity, were shown as `Done`; this matters to anyone orchestrating on that status), 1.2.13 L9 (rate-limit waits now follow the server's delay and stop at once above 30 seconds or on daily or billing caps), 1.2.16 L14 (image generation now runs as a built-in `image-generator` subagent), and 1.2.14 L17 (resuming a history with a missing step let new messages overwrite recent steps).

## Issue-tracker leads (user reports, not vendor statements; none can be promoted)

The harvest did not read the repo's issues. These in-window reports bear on its sections and belong in "Leads not promoted" or `watch_next`:
- 1197 (2026-10-11, labeled `security`, macOS 1.3.3): a sandboxed command opened a path denied to the file tool. Section 3.
- 1181 (2026-10-07, 1.3.1): headless `--mode plan` reportedly executes a write in the same turn while `stream-json` reports `permission_mode: "request-review"`. This bears on `headless-mode-flag-ignored-before-1-1-12` and sections 4 and 6.
- 1083 (2026-09-22, 1.2.8): a claimed bypass of the Remote Control read-only settings by the agent editing `settings.json`. A repo collaborator replied the same day that they could not reproduce it and that the agent is blocked from modifying that file. Section 1.
- 1123 (2026-09-28, 1.2.12): daemon conversations reportedly ignore `toolPermission`. Section 1 fix.
- 1097 (2026-09-24, open): a feature request for version pinning and signature verification in `install.sh`. Section 8.
- 1213 (2026-10-12): the `--agent` fallback, fixed in 1.3.4 the next day. Section 6.

## Rule checks

- ASCII: the harvest has 0 non-ASCII lines, and no em dashes or curly quotes.
- No social quotes. The X lane was down; the harvest contains no social URLs.
- Receipts: no main or HEAD blob URLs; every GitHub receipt is pinned to a tag. The docs receipts are live, unversioned URLs. Where a capture exists, use it as the pin: Remote Control 2026-10-10, settings 2026-10-10, marketplace 2026-10-10, headless.md 2026-10-03, troubleshooting 2026-09-18, models 2026-10-03 and 2026-10-07 (all URLs above).
- CVE and GHSA: none exist, and section 11 says so in plain words.
- Marketing separated: the Google September recap and the latent.space item stay leads; Argon is not promoted.

## Not verified by me

- Behavior. No probe of any claim; the binaries were never executed.
- Updater rollout across users. The manifests were read from one vantage point.
- The contents of the Windows `.exe` against the GitHub `.zip`.
- Whether earlier in-window binaries (1.2.8 through 1.3.3) embed their predecessor's CHANGELOG. Only 1.2.7 and 1.3.4 were tested; both do.
