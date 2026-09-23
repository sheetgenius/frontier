---
schema_version: bitter.frontier_harvest.v0
provider: antigravity
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/antigravity.yml
channels_present: [tagged-release]
window_volume: 19 new stable cuts (1.1.18-1.1.28, 1.2.0-1.2.7), 0 prereleases; 9 material changes, 5 security-relevant, 4 capability-bearing
lane: primary sources, researcher; closed source, all claims rest on release bodies and CHANGELOG at the tag
---

# Harvest -- antigravity (primary sources)

Punctuation is ASCII. Repo google-antigravity/antigravity-cli (identity: the repo is Google's `agy` distribution repo; its tree holds only `.github`, `CHANGELOG.md`, `README.md`, `agy-cli-demo.gif`, `examples`; binaries ship as release assets `agy_cli_<os>_<arch>`). Parent ended at 1.1.17 (2026-08-20T22:13:58Z). Closed source: every behavior claim below is the vendor's release note, not read enforcement. Nothing here has been probed locally.

## 1. The tag-vs-notes collision is repaired from 1.1.18 on; every in-window tag now carries its own notes and a unique binary

- **Date:** 2026-08-22 onward
- **Channel:** `tagged-release` (all 19 cuts prerelease=false)
- **Ancestry evidence:** For every consecutive pair 1.1.17...1.1.18 through 1.2.6...1.2.7, `gh api repos/google-antigravity/antigravity-cli/compare/A...B` -> status=ahead, behind_by=0, ahead_by=1 (1.1.17...1.1.18 ahead_by=2), files=[CHANGELOG.md]. Each tag resolves to the "Update CHANGELOG.md for <v>" commit created 1-2 seconds after the release's published_at (e.g. 1.1.18 tag f09d6b58 committed 2026-08-22T01:46:59Z, published 01:46:57Z). CHANGELOG.md at each tag tops with `## <that version>`, and the section text equals the GitHub release body (whitespace-normalized compare, 20/20 match including 1.2.8). The orphaned 1.1.17 notes commit adfa9eb8 is now an ancestor of 1.1.18 (`compare adfa9eb8...1.1.18` ahead_by=1, behind_by=0), so `## 1.1.17` is in the record from 1.1.18 on. The 1.1.16 and 1.1.17 tags still both resolve to efa16f09 (unchanged). Asset digests: all six assets per release have distinct sha256 across 1.1.16-1.2.8 (0 duplicate digests over 132 assets); linux_x64 sizes move every cut (55,721,724 bytes at 1.1.18 to 61,763,170 at 1.2.7). CHANGELOG history below `## 1.1.16` is byte-identical at 1.1.17 and 1.2.8, and each tag's history below its predecessor's heading is unchanged at the successor: no post-publish rewrites in window (contrast parent's 1.1.14 rewrite). No non-CHANGELOG commit landed on main in window; main = 1.2.8 = ad7d7034.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/compare/1.1.17...1.1.18
- **Half:** capability (verifiability) | **Confidence:** high

**What changed.** The failure parent recorded twice (a release object whose git tag is the previous tree) did not recur across 19 cuts. The repo's git record now tracks the release page one-to-one. It is still only a notes record: the tag cannot tell you what the binary does, and lightweight tag 1.1.13 still points at fbf22703, not the f7519c90 parent-of-parent recorded.

**Operator consequence.** An operator can now pin an Antigravity receipt to the tag (`/blob/<tag>/CHANGELOG.md`) and pin the install to the release asset's sha256. Keep pinning to digests: the tag proves the notes, not the binary. Stop treating the 1.1.17 anomaly as ongoing.

## 2. 1.1.18: a valueless prompt flag could silently turn the sandbox off

- **Date:** 2026-08-22
- **Channel:** `tagged-release`
- **Ancestry evidence:** release 1.1.18 published 2026-08-22T01:46:57Z, prerelease=false, tag f09d6b58; compare 1.1.17...1.1.18 ahead_by=2. Body: "Fixed a valueless prompt flag swallowing the next flag as its prompt, so `--print --sandbox 'do the task'` no longer runs with the prompt `--sandbox` and the sandbox off; both that and a stray trailing argument are now errors." Same cut: print mode no longer exits 0 with an empty response when the agent state stream drops.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/blob/1.1.18/CHANGELOG.md
- **Half:** defect | security-relevant | **Confidence:** high (vendor-stated)

**What changed.** On 1.1.17 and earlier, a headless invocation that put the prompt after `--sandbox` ran unsandboxed, with `--sandbox` as the prompt text, and gave no error.

**Operator consequence.** Upgrade scripted `agy -p` / `--print` callers to >= 1.1.18. Re-audit CI and cron wrappers for flag order (`--print --sandbox '...'`) and treat runs on older builds as having had no sandbox. Pair with 1.2.1: the status line reported the sandbox as disabled when launched with `--sandbox` until 1.2.1, so the UI was not evidence either way before 1.2.1.

## 3. Default gates loosened: workspace reads auto-granted (1.1.20), always-proceed now covers MCP and page reads (1.1.21), headless runs auto-pass plan review (1.1.28)

- **Date:** 2026-08-25, 2026-08-26, 2026-09-09
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1.1.20 (published 2026-08-25T02:58:27Z, tag ade702a5): "automatically granting workspace-scoped read access under the default review mode ... while strictly maintaining confirmation prompts for file modifications and external access." 1.1.21 (2026-08-26T02:21:06Z, tag 7cc1925c): "Improved the `always-proceed` permission mode to auto-approve MCP tool calls and page reads as well." 1.1.28 (2026-09-09T00:43:52Z, tag baef32d9): "non-interactive runs now proceed through plan review automatically." 1.1.26 (tag 3bc5795f) also fixed subagents prompting in always-proceed while their detail panel is open. Each compare vs predecessor ahead_by=1, behind_by=0.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/blob/1.1.21/CHANGELOG.md
- **Half:** both | security-relevant | **Confidence:** high (vendor-stated)

**What changed.** Three human gates were removed by default change, not by opt-in. The largest is MCP: before 1.1.21, `always-proceed` still stopped on MCP tool calls; after, any configured MCP server's tools run unprompted in that mode. Headless plan review, previously a hang, is now auto-approval.

**Operator consequence.** If you run `always-proceed`, re-audit `mcp_config.json` and plugin-bundled MCP servers as if every tool on them is pre-approved, because on >= 1.1.21 it is. If you relied on the implementation-plan approval as a checkpoint in `-p` runs, it no longer exists on >= 1.1.28. Workspace reads under default review no longer prompt; nothing to do unless your workspace root holds secrets.

## 4. Default gates tightened: URL fetch now asks (1.1.28); allow-always pins the script (1.1.21); headless denials are reported (1.1.27)

- **Date:** 2026-08-26, 2026-09-05, 2026-09-09
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1.1.28 (tag baef32d9): "Changed the default permission for fetching URLs from always allowed to asking first." Same cut: approval prompts now name the action and add a `Reason:` line (hook flag, file in a different project); plugin reinstall replaces the managed directory exactly and refuses install-from-own-directory. 1.1.21 (tag 7cc1925c): allow-always suggestions for `npm run`, `yarn`, `pnpm`, `cargo run` now pin the script name, "so approving `npm run dev` no longer grants every script in the project." 1.1.27 (published 2026-09-05T04:23:25Z, tag 1ae9cb7b): "-p silently skipping tool actions they were not permitted to take ... now end with a notice ... and report them as `denied_actions` in the JSON output"; MCP calls with arguments the server schema never declared are now rejected (1.2.1 re-opens this for open object schemas).
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/blob/1.1.28/CHANGELOG.md
- **Half:** both | security-relevant | **Confidence:** high (vendor-stated)

**What changed.** URL fetch was allowed by default until 1.1.28: an agent reading a page from injected text needed no approval. Allow-always on a script runner was a wildcard over every script until 1.1.21.

**Operator consequence.** Expect new URL prompts after upgrading to 1.1.28; grant per-domain rather than blanket. Review existing allow-always entries written before 1.1.21 for bare `npm run` / `pnpm` / `cargo run` grants and narrow them; the fix changes new suggestions, and the notes do not say it rewrites old grants. Headless pipelines should parse `denied_actions` (>= 1.1.27) and treat a non-empty list as a failed run; 1.1.20 had made denials non-fatal to the exit code.

## 5. Remote Control grew into a boot-persistent service, and remote-triggered turns ran without the session's permission mode until 1.2.6

- **Date:** 2026-09-03 (tunnel hardening), 2026-09-10 (service), 2026-09-18 (permission fix)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1.1.25 (2026-09-03T02:30:18Z, tag 7e1316ca): "Hardened Remote Control reverse-tunnel routing" (no detail). 1.2.0 (2026-09-10T01:43:29Z, tag 34406bef): `remote-control start|status|stop` run the CLI "as a background service registered with your operating system's service manager so your machine stays reachable across logouts and reboots." 1.2.1 (tag e4afe6b6): remote companion UIs showed an unauthenticated sign-in screen instead of the session's state. 1.2.6 (2026-09-18T04:21:05Z, tag d39491f6): "Fixed turns triggered from a connected Remote Control session or running across secondary workspaces executing without the CLI session's active permission mode, cycle mode, and non-workspace file access grants." 1.2.6 also re-describes session-scoped `--remote-control` / `/remote-control` with teardown on `/remote-control off`.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md
- **Half:** both | security-relevant | **Confidence:** high on the text; the direction of the pre-1.2.6 defect (looser or stricter than the session) is not stated

**What changed.** Capability: a machine can now be left reachable for remote agent control across reboots. Defect: before 1.2.6 (the note gives no start version; `--remote-control` already existed at 1.1.19), a turn started remotely did not carry the local session's permission mode, cycle mode, or outside-workspace grants. The note does not say what it ran under instead.

**Operator consequence.** Do not run the 1.2.0 background service below 1.2.6; if you used Remote Control before 1.2.6, treat remote-triggered turns in that span as having run under an unknown permission posture and review their transcripts. On >= 1.2.6, `remote-control status` belongs in your host inventory: it is a persistent inbound control path. Prefer the session-scoped form unless you need reboot survival.

## 6. settings.json: the 1.1.16 no-overwrite fix was incomplete; 1.1.20 closes the startup path

- **Date:** 2026-08-25
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1.1.20 (tag ade702a5): "Fixed the CLI overwriting and discarding unparsed configuration in `settings.json` when encountering an unrecognized setting value or syntax error on startup, preserving the existing configuration file on disk instead of saving a truncated version." Parent baseline: 1.1.16 fixed the refused-save path. 1.1.25 (tag 7e1316ca): duplicate permission grants no longer accumulate in settings across reloads and subagent invocations. 1.1.26 adds `pickerGrouping` (cosmetic).
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/blob/1.1.20/CHANGELOG.md
- **Half:** defect | security-relevant | **Confidence:** high (vendor-stated)

**What changed.** Parent recorded 1.1.16 as the fix for "a parse failure silently reverts every setting." 1.1.16 through 1.1.19 still truncated the file when startup met an unknown value or a syntax error.

**Operator consequence.** Correct the parent guidance: the safe floor for settings integrity is 1.1.20, not 1.1.16. If you hand-edit or template settings.json (new keys from a newer version, comments), keep a copy until you are on >= 1.1.20.

## 7. Customization inheritance flipped to on for Markdown agents; plugin MCP servers namespaced; cross-session customization leak fixed

- **Date:** 2026-09-03 to 2026-09-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1.1.25 (tag 7e1316ca): "Changed custom agents defined in Markdown to inherit ambient skills, rules, and subagents by default." 1.1.21: explicitly configured skill and plugin paths now win a name collision over nearby auto-discovered ones. 1.2.2 (2026-09-12T03:51:08Z, tag ba985e6b): plugin MCP servers auto-namespaced `<plugin>_<server>` after colliding with each other or with user servers; "Fixed conversations launched without a workspace folder inheriting workspace paths and customizations from other open sessions." 1.2.3 (tag 444063c7): `/hooks` omitted plugin-bundled hooks from its listing; `enable_mcp_tools: true` subagents now inherit the parent's MCP servers. 1.2.4 (tag e5dcb824): `hooks.json` silently dropped under customization token-budget truncation. 1.2.7 (tag 7bb195ac): plugin ID path validation hardened on uninstall.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/blob/1.2.2/CHANGELOG.md
- **Half:** both | security-relevant | **Confidence:** high (vendor-stated)

**What changed.** A Markdown agent written before 1.1.25 under the 1.1.14 `inheritCustomizations` switch now gets ambient rules, skills and subagents unless it opts out. Before 1.2.2 a plugin MCP server could shadow a user-configured server of the same name. Before 1.2.3 `/hooks` hid plugin hooks, and before 1.2.4 hooks could be dropped entirely, so the audit tool and the running hook set disagreed.

**Operator consequence.** Re-read every Markdown custom agent for an explicit `inheritCustomizations` (or `excludeDefaultComponents`, new in 1.2.1) if you meant it to be isolated. After upgrading to >= 1.2.2, MCP server names from plugins change; update any allow rules keyed on server name. Re-run `/hooks` on >= 1.2.4 to see the real hook set.

## 8. `unsandboxed` permission rules are deprecated in favor of `command` rules

- **Date:** 2026-09-12
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1.2.2 (tag ba985e6b): "Improved the startup warning for deprecated `unsandboxed` permission rules across CLI, shared, and project configuration files to list each affected file path, up to five offending rules, and step-by-step instructions for migrating them to `command` rules." No earlier CHANGELOG section (searched the full file at 1.2.8) announces the deprecation itself; this is its first appearance in the git record.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/blob/1.2.2/CHANGELOG.md
- **Half:** both | **Confidence:** high that the rule kind is deprecated; removal date not stated

**What changed.** The rule kind that let a command escape the sandbox is on its way out, and the deprecation arrived without its own changelog entry.

**Operator consequence.** Grep CLI, shared and project configs for `unsandboxed` and migrate to `command` rules now; the notes give no removal version. Treat a project-level config carrying `unsandboxed` rules as a finding in review.

## 9. Headless became a first-class driver: unlimited default timeout, structured errors, background daemons kept alive

- **Date:** 2026-09-09 to 2026-09-18
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1.1.28: `--print-timeout` expiry now returns partial output and exits 0 with a stderr warning; headless runs leave daemon background tasks such as dev servers running. 1.2.6 (tag d39491f6): default headless timeout "from 5 minutes to unlimited"; `AGY_ERROR: {...}` JSON line on stderr and exit code 3 on agent/model API failure; daemon background commands enabled in headless `GEMINI_API_KEY` sessions. 1.2.7 (tag 7bb195ac): legacy `find_by_name`, `grep_search`, `list_dir` retired from the default toolset.
- **Receipt:** https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md
- **Half:** capability | **Confidence:** high (vendor-stated)

**What changed.** A headless run no longer dies at five minutes, reports machine-readable failure codes, and can leave processes behind on purpose.

**Operator consequence.** CI wrappers that relied on the 5-minute cap as a runaway guard must now pass `--print-timeout` explicitly (>= 1.2.6). Handle exit code 3 and parse `AGY_ERROR`. Note that a timed-out run exits 0 since 1.1.28; check stderr, not the code. Reap leftover daemon processes on shared runners.

## Release ledger

| Tag | Published (UTC) | Prerelease | ahead_by vs previous | Tag SHA | linux_x64 sha256 (prefix) |
|---|---|---|---|---|---|
| 1.1.18 | 2026-08-22T01:46:57Z | false | 2 (vs 1.1.17) | f09d6b58 | 1aa7e3c1f5ba |
| 1.1.19 | 2026-08-22T23:30:26Z | false | 1 | ee5766c1 | a02132a7c6c6 |
| 1.1.20 | 2026-08-25T02:58:27Z | false | 1 | ade702a5 | 6ceeb0ac91df |
| 1.1.21 | 2026-08-26T02:21:06Z | false | 1 | 7cc1925c | 4806a347119d |
| 1.1.22 | 2026-08-27T04:03:21Z | false | 1 | 556846a4 | 1e1a219a86e7 |
| 1.1.23 | 2026-09-01T04:47:50Z | false | 1 | 4c150a22 | 379693509ca4 |
| 1.1.24 | 2026-09-02T02:38:18Z | false | 1 | bf27ce11 | cff1fb7ed735 |
| 1.1.25 | 2026-09-03T02:30:18Z | false | 1 | 7e1316ca | 45ab4a99884d |
| 1.1.26 | 2026-09-04T03:28:48Z | false | 1 | 3bc5795f | c47c0726266b |
| 1.1.27 | 2026-09-05T04:23:25Z | false | 1 | 1ae9cb7b | f874d4f6b8a7 |
| 1.1.28 | 2026-09-09T00:43:52Z | false | 1 | baef32d9 | 074ff4f732a7 |
| 1.2.0 | 2026-09-10T01:43:29Z | false | 1 | 34406bef | d9bfee1ae6e4 |
| 1.2.1 | 2026-09-11T06:46:48Z | false | 1 | e4afe6b6 | 6a2c53db6c68 |
| 1.2.2 | 2026-09-12T03:51:08Z | false | 1 | ba985e6b | 2cfa5c9a4a1e |
| 1.2.3 | 2026-09-15T02:03:04Z | false | 1 | 444063c7 | 57afb34f2a4b |
| 1.2.4 | 2026-09-16T03:54:29Z | false | 1 | e5dcb824 | dcd3e4d8c8af |
| 1.2.5 | 2026-09-17T04:10:06Z | false | 1 | 48e88e07 | e450caab5682 |
| 1.2.6 | 2026-09-18T04:21:05Z | false | 1 | d39491f6 | 3d4973187c4c |
| 1.2.7 | 2026-09-19T01:01:46Z | false | 1 | 7bb195ac | e410dd56d8c2 |

Every row: compare status=ahead, behind_by=0, files=[CHANGELOG.md]; CHANGELOG top section = release body; all 6 asset digests unique. ahead_by counts notes commits only (the repo carries no source), so it is not a size measure.

## Carry-forward answers

- **Tag-tree vs asset digest, per release:** clean for all 19 in-window cuts (section 1). The 1.1.16/1.1.17 shared SHA efa16f09 persists as history; 1.1.17 notes are now in git via 1.1.18.
- **Workspace access:** 1.1.20 auto-grants workspace reads under default review (section 3); 1.1.27 stops a redundant prompt for another conversation's artifact files once outside-workspace access is allowed; 1.2.2 stops workspace-less conversations inheriting other sessions' workspace paths; 1.2.6 makes remote and secondary-workspace turns honor non-workspace grants. No change to the 1.1.14 read-only-outside rule is recorded.
- **Settings handling:** 1.1.20 closes the startup overwrite path 1.1.16 missed; 1.1.25 dedupes accumulated grants (section 6).
- **Approvals:** loosened (1.1.20, 1.1.21, 1.1.28 plan review) and tightened (1.1.21 script pinning, 1.1.28 URL fetch, 1.1.27 denied_actions) in the same train (sections 3, 4). This is the contract's named gate tension, again.
- **Security fixes:** 1.1.18 sandbox-off flag parse; 1.2.6 remote turns without permission mode; 1.1.20 settings truncation; 1.2.2 cross-session customization leak; 1.2.7 plugin ID path validation. No GHSA (advisories endpoint returns 0), no SECURITY.md.

## Operator questions settled this window

- *What does proceed-in-sandbox / sandbox actually isolate?* Not settled. The window shows the sandbox flag could be silently dropped (1.1.18) and misreported (1.2.1), and that `unsandboxed` rules are being replaced by `command` rules (1.2.2), but no primary text describes the isolation boundary.
- *How does an operator verify a governance claim in closed code?* Partly: the git record now matches the release page one-to-one and binaries are digest-pinned (section 1), so the claim is at least stable and attributable. Enforcement still needs a local probe.

## Researcher lane notes

Nothing in this file has been probed against a binary. Priority probes: `agy --print --sandbox 'x'` on 1.1.17 vs 1.1.18; `always-proceed` with an MCP tool on 1.1.20 vs 1.1.21; URL fetch prompt on 1.1.27 vs 1.1.28. Remote Control's 1.1.25 "hardened reverse-tunnel routing" gives no detail; watch for an advisory. 1.1.22 removed a daemon banner line that printed a localhost URL "never a supported way to connect." The 1.1.3/1.1.4 shared SHA and the 1.1.13 retarget from parent still stand.

## Observed after window close

- 1.2.8 published 2026-09-22T04:12:17Z (OUT), tag ad7d7034, prerelease=false, compare 1.2.7...1.2.8 ahead_by=1, body==CHANGELOG, digest unique. Content: compaction budget fixes, custom-model media flags, forked conversations inheriting post-fork step data, canceled creation requests no longer provisioning in background. Nothing permission-bearing.

## Surfaces checked

- `gh release list` and `gh api releases/tags/<v>` for 1.1.16-1.2.8 (published_at, prerelease, target, 6 assets each with sha256 digest, size, created_at)
- `gh api commits/<tag>` for tag SHA and commit date, all 22 tags; `git/refs/tags/1.1.13` (fbf22703)
- `gh api compare` for every consecutive pair 1.1.17...1.2.8; `compare adfa9eb8...1.1.18`
- CHANGELOG.md raw at every tag 1.1.18-1.2.8 and at 1.1.17; top-section vs body equality; history-stability diff
- `gh api commits?since=2026-08-20` (only CHANGELOG update commits in window); main HEAD ad7d7034 = 1.2.8
- repo contents listing; security-advisories (0)

## Not reached

- antigravity.google/docs/cli/settings and /docs/cli/permissions: JS-rendered, 389 and 407 byte shells; could not re-check whether the `allowNonWorkspaceAccess` read-and-write wording parent flagged was corrected, or read any sandbox/`command` rule docs.
- antigravity.google/changelog: fetched (HTTP 200) but version sections not present in static HTML.
- Transition blog post: not re-read; no lifecycle change surfaced in release notes.
- No local binary probe.
