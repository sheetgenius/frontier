---
schema_version: bitter.frontier_harvest.v0
provider: grok-build
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/grok-build.yml
channels_present: [tagged-release, docs-only]
window_volume: 33 in-window binary builds (1.0.8 to 1.0.40), 13 in-window public syncs, 0 GitHub tags, 0 GitHub releases, 8 material items
lane: primary sources, researcher from public mirror at pinned SHAs (SOURCE_REV + in-tree per-version changelogs + in-tree user guide) + install script + GCS artifact headers + Wayback captures of x.ai/build/changelog
---

# Harvest -- grok-build (primary sources)

Punctuation is ASCII. First full cycle; no parent harvest. Baseline is the 2026-08-21 intake: last public sync 19d42e35c07a (2026-08-19T19:55:30Z, SOURCE_REV 7d67deacbeb1), public changelog topped at v1.0.5 (2026-08-15), 0 tags, 0 releases.

Identity check: `gh api repos/xai-org/grok-build` -> full_name xai-org/grok-build, Apache-2.0, default_branch main, description "SpaceXAI's coding agent harness and TUI." Every sync commit in window has the message "Synced from monorepo". This file is about the `grok` binary only. It is not grok.com chat, not the Grok model, and not Grok Bot (item 8).

Channel vocabulary for this source. There is still no git tag. The versioned ship channel is the install script's artifact store: `https://x.ai/cli/<channel>` (fallback `https://storage.googleapis.com/grok-build-public-artifacts/cli/<channel>`) returns a version string, and `grok-<version>-<platform>` is a per-version binary with a GCS `Last-Modified` and an `x-goog-hash` md5. A version found there is labeled `tagged-release`. The public changelog (x.ai/build/changelog) is a curated subset; the fuller notes ship in the tree at `crates/codegen/xai-grok-shell/changelogs/<version>.md`. Code and doc claims are pinned to a public SHA and its SOURCE_REV.

Pin for this file: sync 4247f661689354b831191f11eeeac8424993fe3d (2026-09-19T17:07:56Z), SOURCE_REV 9bb727ccdff0a793ee73bcde4e2e09cbef6b5387, `crates/codegen/xai-grok-shell/Cargo.toml` version 1.0.38. `compare 19d42e35c07a...4247f6616893` -> ahead_by=12, behind_by=0, status=ahead (public main is linear).

## 1. The channel question now has an answer: version string, per-version binary, digest, and a source join

- **Date:** window
- **Channel:** `tagged-release` (artifact store) + mirror SHA
- **Ancestry evidence:** `curl https://x.ai/cli/install.sh` (2026-09-23): `CHANNEL="${GROK_CHANNEL:-stable}"` with valid values stable, alpha, enterprise (script line 207 and the case block after it); `bash -s <version>` pins a version (line 10). GCS pointers at observation: stable=1.0.41 (Last-Modified 2026-09-22T21:32:45Z, OUT), alpha=1.0.41, enterprise=1.0.35 (Last-Modified 2026-09-16T23:47:45Z). HEAD on `grok-1.0.N-linux-x86_64` for N=0..45: 200 for 1.0.0 through 1.0.41, 404 from 1.0.42. Each sync's `xai-grok-shell/Cargo.toml` version joins a public SHA to a build (table below). Install-time verification is `"$binary_tmp" --version` only (script ~line 303); no checksum or signature check.
- **Receipt:** https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/SOURCE_REV and https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/Cargo.toml ; https://x.ai/cli/install.sh
- **Half:** capability | **Confidence:** high

**What changed.** At intake the contract said the channel could not be pinned. It can: a version can be installed by name, each binary carries a GCS md5 (1.0.38 linux-x86_64: md5=L+vB046em3UEGVxsK6GQFQ==, 164567296 bytes, Last-Modified 2026-09-19T00:52:45Z), and each public sync names the crate version it mirrors. The mirror trails builds by 0 to 3 days (1.0.38 binary 09-19T00:52Z; sync naming 1.0.38 09-19T17:07Z).

**Operator consequence.** Pin with `curl -fsSL https://x.ai/cli/install.sh | bash -s 1.0.38` and record the `x-goog-hash` md5 of the artifact yourself, because the script will not check it. For a code claim, read at the sync whose Cargo.toml version equals `grok --version`. Enterprise installs lag: the `enterprise` channel sat on 1.0.35 from 09-16 while stable moved on; name the channel you ran.

## 2. Public changelog is a curated, lagging subset; the in-tree notes are the fuller record

- **Date:** window
- **Channel:** `docs-only`
- **Ancestry evidence:** Wayback captures of https://x.ai/build/changelog: 20260822171924, 20260829032302, 20260906084923 (distinct digests; no later capture). The 09-06 capture tops at "v1.0.13, Aug 28, 2026" while binaries 1.0.14 through 1.0.23 already existed (GCS Last-Modified 08-31 through 09-07). The public 1.0.9 entry omits two in-tree 1.0.9 lines: "New sessions in the interactive TUI now start in auto mode by default" and, under Bug Fixes, "Interactive grok sessions now start in ask mode by default again instead of auto" (in-tree `changelogs/1.0.9.md` at 4247f6616893).
- **Receipt:** https://web.archive.org/web/20260906084923/https://x.ai/build/changelog ; https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/changelogs/1.0.9.md
- **Half:** defect | **Confidence:** high for the captures; the live page was not reachable (403)

**What changed.** The contract names x.ai/build/changelog as the dated operator channel. In this window it trailed builds by at least 9 days and dropped a permission-default line.

**Operator consequence.** Read `crates/codegen/xai-grok-shell/changelogs/<version>.md` at a pinned sync for what a version changed, not the web page. For 1.0.9 specifically, the default mode flip to auto and back happened inside one release; if you installed 1.0.9, check that new sessions start in ask. 1.0.11 made the default mode configurable ("Default permission mode for new interactive sessions is now configurable").

## 3. Folder trust now gates project permission rules, instructions, and skills (previously applied with no trust prompt)

- **Date:** between 2026-09-01 and 2026-09-08 (builds 1.0.17 to 1.0.24)
- **Channel:** `tagged-release` (in the build joined to sync 75810042ca27, crate 1.0.24); not in any release note
- **Ancestry evidence:** `docs/user-guide/22-permissions-and-safety.md` at 19d42e35c07a says project permission rules in `.grok/config.toml` and `.claude/settings.json`, "including `allow` rules, apply without a separate trust prompt." Bisect of the replacement sentence "Folder trust gates project permission rules" across syncs: absent at 72a61251fcff (crate 1.0.16, 2026-09-01), present at 75810042ca27 (crate 1.0.24, 2026-09-08) and every later sync. At the pin, L559 adds that headless startup with these sources requires `--trust` or a prior grant; `10-hooks.md` says a trust grant covers MCP, LSP, hooks, project instructions, and project skills, and that a nested git checkout is a separate workspace. `grep -i trust` over in-tree changelogs 1.0.8 to 1.0.40 finds only 1.0.36 "`grok --sandbox` no longer exits when accepting folder trust."
- **Receipt:** https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L559 vs https://github.com/xai-org/grok-build/blob/19d42e35c07a9c9244f03f6df0c4c353f970d4f9/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md
- **Half:** defect | **Confidence:** high that the documented behavior changed; the enforcing code was not read

**What changed.** Before about 1.0.24, a cloned repo could ship `.grok/config.toml` or `.claude/settings.json` `allow` rules that took effect without any trust prompt. Now they wait for folder trust, and headless runs need `--trust`.

**Operator consequence.** Upgrade past 1.0.24. Headless CI that relied on repo-local allow rules will now need `--trust`; add it only for repos you control. Anyone who ran `grok` in an untrusted checkout on 1.0.16 or earlier should assume the repo's own allow rules were live. No advisory was published for this; the only record is the doc diff.

## 4. Sandbox profiles now write-deny Grok's own config, trust, and policy files

- **Date:** between 2026-09-15 and 2026-09-17 (builds 1.0.33 to 1.0.35); `strict` narrowing in 1.0.14 (2026-08-31)
- **Channel:** `tagged-release` (joined to sync a28ee2b20634, crate 1.0.35); the config write-deny has no release note
- **Ancestry evidence:** `docs/user-guide/18-sandbox.md`: string `trusted_folders.toml` absent at 482711333c71 (crate 1.0.32), present at a28ee2b20634 (crate 1.0.35). At the pin, L48 "Direct global write protection" and L55 list `~/.grok/config.toml`, `trusted_folders.toml`, `managed_config.toml`, `requirements.toml`, `sandbox.toml` as kernel write-denied under `workspace`, `read-only`, and `strict`; before, only hook source paths were denied. In-tree 1.0.14: "--sandbox strict now restricts writes to ~/.grok/sessions only" (L32 table: strict writes CWD + `~/.grok/sessions` + temp). L28: `off` is still the default profile.
- **Receipt:** https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/18-sandbox.md#L28-L55
- **Half:** defect | **Confidence:** high on the doc; enforcement is in `crates/codegen/xai-grok-sandbox/src/hook_write_deny.rs` (14339 -> 14929 bytes across the window), not read line by line

**What changed.** Under a sandbox profile, the agent could previously write its own settings, folder-trust list, and requirements file, which is a path to relax its own permissions for the next session. That path is now closed at the kernel level for the named files. Side effect: accepting folder trust, `/model`, and mode changes inside a sandboxed session no longer persist.

**Operator consequence.** If you use `--sandbox`, run 1.0.35 or later. Remember the default is `off`: none of this applies unless you pass a profile. Child-network blocking is Linux-only (documented as a no-op on macOS).

## 5. Enterprise enforcement: signed requirements.toml, model restriction, enforced and managed-only hooks

- **Date:** 2026-09-01 (1.0.16), 2026-09-02 (1.0.18), 2026-09-17 (1.0.36)
- **Channel:** `tagged-release`
- **Ancestry evidence:** in-tree 1.0.16 (dated 2026-09-01) under "Breaking Changes": "Enterprise policies can now restrict which models users may select via signed requirements.toml." 1.0.18 (2026-09-02): "Managed policy now blocks disallowed MCP servers and marketplace installs before any change is written." 1.0.36 (2026-09-17): "New policy setting allows organizations to disable hooks that are not from managed policy." `10-hooks.md` "### Enforced hooks" absent at a28ee2b20634, present at 4247f6616893 (L234): hooks from `/etc/grok/requirements.toml`, `/etc/grok/managed_config.toml`, or a `~/.grok/requirements.toml` whose bytes match the server-signed policy are enforced and cannot be disabled; an edited file silently downgrades to user hooks unless `fail_closed = true`.
- **Receipt:** https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/changelogs/1.0.16.md , .../1.0.36.md , https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/10-hooks.md#L234
- **Half:** both | **Confidence:** high on text; `signed_policy.rs` present before the window (28695 -> 30495 bytes), not audited

**What changed.** Org policy gained a signature, a model allowlist, a managed-only hook switch, and a pre-write MCP/marketplace block.

**Operator consequence.** Admins: set `fail_closed = true`, or a user can edit `~/.grok/requirements.toml` and turn enforced hooks back into ordinary ones. The signed file only binds on the `enterprise` channel build you actually shipped; check which version that pointer serves (1.0.35 at observation, which predates the "Enforced hooks" doc and the 1.0.36 managed-only switch).

## 6. Hooks gained power, and still fail open

- **Date:** 2026-08-28 (1.0.13), 2026-08-31 (1.0.14), by 2026-09-19 (UserPromptSubmit blocking)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1.0.13: "Hooks can now ask the user to confirm a tool call instead of always allowing or denying" and "can now request deferral or add context shown to the model after a tool runs." 1.0.14: PostToolUse hooks can feed the model. `10-hooks.md` at the pin: `UserPromptSubmit` can now block a prompt (L109, absent at 19d42e35c07a); PostToolUse can replace the output the model reads. `22-permissions-and-safety.md` L430 and `10-hooks.md` L679 at the pin: hooks fail open on crash, timeout, missing file, or malformed output.
- **Receipt:** https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L430
- **Half:** both | **Confidence:** high

**What changed.** Hooks can now ask, block prompts, and redact tool output before the model sees it. The failure mode did not change.

**Operator consequence.** A redaction or allowlist hook is a control only if it cannot crash: wrap it so every error path prints an explicit deny. In `auto` mode, L332 says allow rules are not a closed allowlist and the classifier can approve commands no rule mentions; use `deny` rules or a PreToolUse hook for hard limits.

## 7. Headless and auto mode: more that runs without a person

- **Date:** 2026-08-26 (1.0.11), 2026-09-04 (1.0.19), 2026-09-07 (1.0.22)
- **Channel:** `tagged-release`
- **Ancestry evidence:** 1.0.11: "Headless sessions can now auto-allow permission prompts via a startup hint"; "Subagent messages are now allowed automatically in permission Auto mode"; mkdir/touch no longer prompt in auto mode; "Background monitors no longer have a 10-hour default timeout." 1.0.19 (Breaking): scheduled `/loop` tasks always run in the background; `grok -p` supports `--worktree`. 1.0.22: "Auto mode no longer instantly runs destructive `git checkout --` commands; they now go through the model." 1.0.16: long-running subagent waits default to a one-hour ceiling instead of ten minutes. 1.0.29: multiple concurrent `grok agent stdio` processes on one GROK_HOME no longer crash.
- **Receipt:** https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/changelogs/1.0.11.md , .../1.0.22.md
- **Half:** both | **Confidence:** high on text

**What changed.** Unattended runs got longer and quieter. The 1.0.22 line shows auto mode was running `git checkout --` (discarding local changes) without review before that build.

**Operator consequence.** If you ran auto mode before 1.0.22 and lost uncommitted work, this is the likely cause; upgrade. Audit how your headless jobs set the "auto-allow" startup hint. For ACP wrappers (Omnigent drives `grok agent stdio`), 1.0.29 is the first build where parallel stdio agents on one home directory are stable; the tool policy that refuses is still Grok's own permission pipeline, and the wrapper sits outside it.

## 8. "Grok Bot" is not Grok Build

- **Date:** product page captured 2026-08-11 (pre-window); Cursor docs section added in window (see cursor.primary.md item 7)
- **Channel:** `docs-only`
- **Ancestry evidence:** Wayback https://web.archive.org/web/20260812102557/https://x.ai/bot: "Grok Bot: A new kind of colleague", Bots that sign in to your tools on desktop and iOS, "The SpaceXAI team runs on Grok Bot", "Everything in Cursor Ultra, plus". https://cursor.com/docs/grok-bot.md: Bots work on a persistent cloud computer in Cursor's cloud; included with paid Cursor plans or a linked SuperGrok account. The public changelog header (09-06 capture) lists "Grok Bot" and "Grok Build" as separate products in x.ai's nav. No file under xai-org/grok-build describes Grok Bot.
- **Receipt:** https://web.archive.org/web/20260812102557/https://x.ai/bot ; https://cursor.com/docs/grok-bot.md
- **Half:** both | **Confidence:** high

**What changed.** Nothing in Grok Build. The Latent Space piece "OpenClaw Power, MacBook Simplicity: Five Days With Grok Bot" (2026-09-05) reviews the hosted teammate product: named Bots on a shared cloud computer, desktop and iOS apps, routines, and plugins, operated through Cursor's cloud and billed through Cursor or SuperGrok. It is not the `grok` terminal CLI this contract watches.

**Operator consequence.** Do not cite that review, or Grok Bot's security docs (Auto-review, network allowlist), as facts about the `grok` CLI's permissions. Grok Build's controls are items 3 to 7.

## Release ledger

Build dates are GCS Last-Modified for `grok-<v>-linux-x86_64` (upload time; could in principle be re-uploaded). In-tree changelog dates agree to the day where checked (1.0.8 2026-08-20, 1.0.9 08-24, 1.0.16 09-01, 1.0.19 09-04, 1.0.36 09-17, 1.0.38 09-19).

| Version | Build Last-Modified | Public sync that names it (crate version) | SOURCE_REV |
|---|---|---|---|
| 1.0.8 | 2026-08-20T21:15:02Z | 07b2f7144fd5 2026-08-23 (1.0.8), c2ad97f87aea 08-24 | 956313d459be, 437c7c928f3f |
| 1.0.9 / 1.0.10 | 08-24T22:19Z / 08-25T00:07Z | 77cd7eb675ba 08-25 (1.0.10), 9684fa3cdbf2 08-27 | 28439e8a8712, 70ec060ec3d2 |
| 1.0.11 / 1.0.12 | 08-26T21:14Z / 08-27T05:39Z | bc7f02eddd3d 08-28 (1.0.12) | d5a0335a4722 |
| 1.0.13 | 08-28T22:38Z | bb7f39d5858c 08-31 (1.0.13) | d761e8ba5380 |
| 1.0.14 to 1.0.16 | 08-31T17:51Z to 09-01T06:26Z | 72a61251fcff 09-01 (1.0.16) | a549186d9d39 |
| 1.0.17 to 1.0.24 | 09-01T18:29Z to 09-07T22:32Z | 75810042ca27 09-08 (1.0.24), 37949780c144 09-09 | eb4a894da8fb, c4ea71cfdbcd |
| 1.0.25 to 1.0.32 | 09-09T18:17Z to 09-15T00:25Z | 482711333c71 09-15 (1.0.32) | be7ce6e8cffe |
| 1.0.33 to 1.0.35 | 09-15T20:39Z to 09-16T23:30Z | a28ee2b20634 09-17 (1.0.35) | e8563f8f1822 |
| 1.0.36 to 1.0.38 | 09-17T23:08Z to 09-19T00:52Z | 4247f6616893 09-19 (1.0.38) | 9bb727ccdff0 |
| 1.0.39, 1.0.40 | 09-20T22:21Z, 09-20T23:42Z | none in window (07e35a3dfeed 09-22 names 1.0.41, OUT) | 84745de98b3d (OUT) |

33 builds in window (1.0.8 to 1.0.40). No prerelease suffixes seen. GitHub tags 0, releases 0 at 2026-09-23. `alpha` and `stable` pointed at the same version at observation.

## Researcher lane notes

Contract operator questions. (1) Which channel is the operator running: name the install channel and version; all three can now be joined (item 1). (2) Does a rule at a public SHA bind in the binary: only if the SHA's crate version equals `grok --version`; the table gives the join. (3) ACP under a wrapper: Grok's own permission pipeline (hooks, then rules, then mode) applies to `grok agent stdio`; the in-tree guide says non-interactive and unidentified stdio sessions fail a blocked call rather than prompt. Wrapper behavior is not Grok's gate. (4) Mirror lag: 0 to 3 days behind builds in window; the gap between 09-19 and 09-22 syncs covers 1.0.39 and 1.0.40, whose notes exist only in the OUT-of-window sync. (5) Grok Bot vs this CLI: settled (item 8).

1.0.39 note of interest (read at 07e35a3dfeed, OUT sync, describing an in-window build): "The agent now keeps helper scripts, logs, and PR drafts in the system temp directory instead of the repository."

1.0.14 note: "grok inspect now correctly shows Claude bypass locks as advisory rather than enforced." Grok reads `.claude/settings.json` permissions and `defaultMode` (22-permissions guide L63, L300); a Claude Code bypass lock is not a Grok lock.

No security advisories: `gh api repos/xai-org/grok-build/security-advisories` returns 0 (2026-09-23), and none of the in-tree notes is labeled security. Items 3 and 4 are security-relevant fixes that shipped with no advisory and no release-note line.

## Observed after window close

- Sync 07e35a3dfeed (2026-09-22T17:53:08Z), crate 1.0.41, SOURCE_REV 84745de98b3d.
- Build 1.0.41 (Last-Modified 2026-09-22T16:34:24Z); stable pointer rewritten 2026-09-22T21:32:45Z to 1.0.41; alpha pointer 2026-09-22T16:38:02Z.

## Surfaces checked

- `gh api repos/xai-org/grok-build` (identity, license), `/tags` (0), `/releases` (0), commits since 2026-08-15 (all "Synced from monorepo")
- SOURCE_REV and `crates/codegen/xai-grok-shell/Cargo.toml` at 14 syncs from 19d42e35c07a to 07e35a3dfeed
- `gh api .../compare/19d42e35c07a...4247f6616893` (ahead_by=12, behind_by=0)
- In-tree changelogs `xai-grok-shell/changelogs/1.0.8.md` to `1.0.38.md` at 4247f6616893; 1.0.39 and 1.0.40 at 07e35a3dfeed
- In-tree user guides 10-hooks.md, 18-sandbox.md, 22-permissions-and-safety.md diffed 19d42e35c07a vs 4247f6616893, and bisected across all in-window syncs for three strings
- https://x.ai/cli/install.sh (517 lines; channels; no checksum); GCS channel pointers stable/alpha/enterprise; HEAD on grok-1.0.0 to 1.0.45 linux-x86_64 artifacts
- Wayback x.ai/build/changelog 20260906084923 (and CDX list); Wayback x.ai/bot 20260812102557
- docs.x.ai sitemap (build pages exist; no changelog page; docs.x.ai/build/changelog 404)

## Not reached

- Live https://x.ai/build/changelog (Cloudflare 403 to curl; Chrome extension did not respond). The public changelog's state after 2026-09-06 is unknown.
- Live https://x.ai/bot (403); used the Wayback capture.
- docs.x.ai/build pages were not diffed (undated; no in-window captures pulled).
- Source audit of `signed_policy.rs`, `hook_write_deny.rs`, and the folder-trust gate; claims above rest on the in-tree user guide and release notes at the pin.
- A local `grok --version` or any sandbox, hook, or trust probe (did not install).
- The version the `stable` pointer served at 2026-09-21T23:59Z: the pointer was rewritten 09-22, and no earlier snapshot was available; most likely 1.0.40 by build order, not observed.
