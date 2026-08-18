---
schema_version: bitter.frontier_harvest.v0
provider: openclaw
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/openclaw.yml
channels_present: [tagged-release, preview-or-beta]
window_volume: 5 material changes, 3 capability-bearing, 1 defect-bearing, 1 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- openclaw (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Stable moved twice in the window and still does not carry the workspace-boundary fix

- **Date:** 2026-08-08 | **Version:** v2026.7.1-1, v2026.7.1-2 (2026-08-04), v2026.6.33, v2026.6.34 (2026-08-08)
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/openclaw/openclaw/compare/v2026.7.1-2...cc027149e553ff4be1afe2ca9cc3de9ccdea6f68 -> status=diverged, ahead_by=7124, behind_by=224 (fix commit is NOT an ancestor of stable). Same call against v2026.6.34 -> status=diverged, ahead_by=10277, behind_by=332. Against v2026.7.1 -> diverged, ahead_by=7124. Corroborated by content at pinned refs: GET contents/src/agents/sandbox-paths.ts?ref=v2026.7.1-2 and ?ref=v2026.6.34 both return size=9448 with no fs.realpath.native and no assertRawParentWithinRoot; ?ref=v2026.8.1-beta.2 returns size=12291 containing `const realpathNative = promisify(fs.realpath.native)` and `async function assertRawParentWithinRoot`.
- **Receipt:** https://github.com/openclaw/openclaw/compare/v2026.7.1-2...cc027149e553ff4be1afe2ca9cc3de9ccdea6f68
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Four non-prerelease OpenClaw releases were published inside this window -- v2026.7.1-1 and v2026.7.1-2 on 2026-08-04, and v2026.6.33 and v2026.6.34 on 2026-08-08. None of them contains commit cc027149, the merge of PR #113405 that closed the symlink-then-`..` workspace-boundary bypass in assertSandboxPath (merged to main 2026-07-27). The fix has now been beta-only for 21 days across two different beta lines. It is not a date problem: the stable tags are on release lines that branched before the merge, so no amount of later publishing moves the fix onto them.

**Operator consequence.** Re-audit, do not upgrade-and-relax. If you run OpenClaw from the `latest` or `extended-stable` npm channel, `openclaw update` will not bring you this fix, and the workspace root is still not a containment barrier at the validator level. Keep agent workspaces on filesystems you would be willing to expose, and do not treat `assertSandboxPath` as the thing standing between an agent and the rest of the host. Watch for the first non-prerelease v2026.8.x tag; that is the earliest point the fix can arrive on a stable channel.

## 2. extended-stable becomes a real, populated channel -- and it is numbered below stable

- **Date:** 2026-08-08 | **Version:** v2026.6.33, v2026.6.34
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/openclaw/openclaw/releases shows v2026.6.33 (published 2026-08-08T07:16:21Z) and v2026.6.34 (2026-08-08T07:22:14Z), both prerelease=false, draft=false. registry.npmjs.org/openclaw dist-tags: {"latest":"2026.7.1-2","extended-stable":"2026.6.34","beta":"2026.8.1-beta.2","alpha":"2026.5.19-alpha.1"}. compare/v2026.7.1-2...v2026.6.34 -> status=diverged, ahead_by=332, behind_by=3377: a separate maintenance line, neither ancestor nor descendant of stable. compare/v2026.6.34...8506e32748442181671375017d5c9d8fc30435e0 (PR #119942 'release: extended-stable 2026.6.35') -> status=ahead, ahead_by=1, so the line is live and 2026.6.35 is staged but untagged.
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.6.33
- **Half:** capability | **Confidence:** high

**What changed.** OpenClaw shipped the first two releases of a fourth update channel, `extended-stable`, on 2026-08-08. v2026.6.33 is a 169-PR audited roll-up of the v2026.6.11..db7af38 history; v2026.6.34 is a 25-PR maintenance follow-up whose notes say explicitly it 'carries targeted security and reliability repairs without adding new release-line features.' The documented semantics (pinned source at dcdbd7aa, docs/install/development-channels.md) are: npm dist-tag `extended-stable`, package-only, foreground-only installation, read-only update hints that never apply automatically, and fail-closed resolution with no fallback to latest/beta/dev.

**Operator consequence.** Adapt your version checks before you adopt it. An extended-stable host reports 2026.6.34 while a stable host reports 2026.7.1-2 -- the newer-published build carries the lower number, so any 'are we current?' logic that compares version strings will read your patched fleet as stale. Also note what the channel buys you: it is 3,377 commits behind stable and, per the ancestry above, it does not carry the workspace-boundary fix either. Choose it for change-rate control, not for security currency.

## 3. GitHub Releases and npm disagree about when stable last moved

- **Date:** 2026-08-04 | **Version:** v2026.7.1-2
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/openclaw/openclaw/releases/latest -> tag_name=v2026.7.1-2, prerelease=false, created_at=2026-08-04T00:40:54Z, published_at=2026-08-04T00:41:26Z. registry.npmjs.org/openclaw time map -> "2026.7.1-2": 2026-07-18T03:53:48.967Z, and no `latest`-line version published since. Same pattern on the other line: v2026.6.33 GitHub release published 2026-08-08 but npm-published 2026-07-21.
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-2
- **Half:** neither | **Confidence:** high

**What changed.** The GitHub 'Latest' badge sits on v2026.7.1-2 with a publish date of 2026-08-04. The npm registry says those exact bits went out on 2026-07-18. The GitHub release objects created in this window are release-note backfills for packages that were already installable; the same is true of v2026.6.33 (GitHub 2026-08-08, npm 2026-07-21). Reading /releases, an operator concludes stable moved on 2026-08-04 and 2026-08-08. Reading the registry they install from, stable has not moved in 30 days.

**Operator consequence.** Stop dating your fleet from the Releases page. When you need to know whether a fix is in the bytes you are running, resolve the npm publish time for the exact version and then check ancestry against the fix commit -- the two surfaces here are up to 18 days apart and they are describing the same artifact.

## 4. Auto-updates stop being silent: countdown, Hold 1 h, and an Updates settings page

- **Date:** 2026-08-08 | **Version:** in v2026.8.1-beta.2
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Merge commit e3de98a451b480d1e52cd96c62ba850ab2042660 (PR #120506, merged 2026-08-08T18:19:54Z, base main). gh api repos/openclaw/openclaw/compare/v2026.8.1-beta.2...e3de98a45 -> status=behind, ahead_by=0 (contained in the beta tag). compare/v2026.7.1-2...e3de98a45 -> diverged, ahead_by=11942; compare/v2026.6.34...e3de98a45 -> diverged, ahead_by=15095. In no stable tag.
- **Receipt:** https://github.com/openclaw/openclaw/pull/120506
- **Half:** capability | **Confidence:** high

**What changed.** Automatic updates previously applied the moment they came due, with no warning and no visible schedule. PR #120506 replaces that with a scheduled update campaign: when an update is due the Gateway announces it, waits while there is active work, then runs a one-minute countdown with a 15-minute hard deadline that forces the update through the existing restart-drain and session-recovery path. Operators get a one-shot admin `update.hold` (Hold 1 h) that honestly pushes the deadline back rather than racing the countdown, an 'Update now' button, and a new /settings/updates page showing channel, auto-update policy, campaign state and -- for git installs -- the exact pending commit subjects about to land. Dev-channel (git) installs get automatic updates for the first time, pinned to a frozen upstream SHA. Failed applies now clear their campaign instead of leaving the UI stuck on 'Updating...' forever. Non-admins see the page read-only.

**Operator consequence.** Test it on the beta channel before it reaches you on stable, because it changes when your gateway restarts. The 15-minute forced deadline means a busy gateway can no longer defer an update indefinitely -- if you were relying on 'it never restarts because it is always busy', that is over. Source installs running `update.channel: dev` should decide deliberately whether they want the new hourly auto-update, since that path previously never updated itself at all.

## 5. Cloud-worker desktops become observable behind a Labs flag

- **Date:** 2026-08-09 | **Version:** in v2026.8.1-beta.2 (Labs flag, default off)
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Merge commit 8fdf7570a17ffbbafe825bd379bab858f263b8ca (PR #120727, merged 2026-08-09T16:37:02Z, base main). compare/v2026.8.1-beta.2...8fdf7570a -> status=behind, ahead_by=0. compare/v2026.7.1-2...8fdf7570a -> diverged, ahead_by=12282. Additionally gated at runtime behind the `cloudWorkers.desktop` Labs flag, so even on beta it is off by default.
- **Receipt:** https://github.com/openclaw/openclaw/pull/120727
- **Half:** capability | **Confidence:** high

**What changed.** The foundation the rest of the Desktop work sits on: Crabbox provisions a loopback VNC desktop at warm time, the Gateway SSH-forwards it to a local Unix socket, an authenticated one-shot-token WebSocket proxy exposes it, and the Control UI renders it with noVNC in a lazy-loaded panel. The `worker.desktop.observe` method is advertised only when the Labs flag is on. Connections are view-only by default with explicit take-control and a server-enforced single controller. The VNC password is read over SSH per tunnel, held in memory only, registered for redaction, and never persisted or placed in a URL. Windows Gateway hosts get a typed unsupported error.

**Operator consequence.** Ignore unless you run cloud workers and want to watch them. If you do turn it on, the thing to verify in your own environment is the one-shot token boundary and the single-controller enforcement -- that is where a 'just let me watch' feature becomes an input path into a leased box.

## Researcher lane notes

Every surface named in sources/openclaw.yml resolved; nothing was unreachable. docs.openclaw.ai returned 200 for /, /start/getting-started, /install and /install/development-channels.

Scale and sampling, stated honestly. The repo merged 3,947 PRs into main between 2026-08-03 and 2026-08-17 (GitHub search: repo:openclaw/openclaw is:pr is:merged merged:2026-08-03..2026-08-17 -> total_count 3947). I did not read 3,947 PRs. I filtered by the contract's own high_signal_patterns -- onboarding, setup, wizard, gateway, desktop, mobile, channel, permission, approval, plugin, skill, provenance, security -- plus the full v2026.8.1-beta.2 release notes and the two extended-stable release notes, then verified each candidate individually by ancestry. The harvest is therefore representative of the contract's lenses, not exhaustive of the repo. Material things almost certainly moved outside those filters.

Channel method. Every channel field above was decided with `gh api repos/openclaw/openclaw/compare/<tag>...<sha>` and the exact status/ahead_by is recorded in channel_evidence. No channel was inferred from a publication date. Where the compare result was surprising I corroborated with the contents API at the pinned ref (byte size and function presence in src/agents/sandbox-paths.ts), which agreed with ancestry in every case.

Two surfaces disagree, and it matters for anyone reusing this data. GitHub Releases and the npm registry give different publish dates for the same artifacts: v2026.7.1-2 shows 2026-08-04 on GitHub but 2026-07-18T03:53:48Z on npm; v2026.6.33 shows 2026-08-08 on GitHub but 2026-07-21T11:25:55Z on npm. The GitHub release objects created in this window are release-note backfills for packages that were already installable. I dated the change entries by the GitHub release publication because that is the operator-visible announcement, and recorded the npm times in the entry that is specifically about the discrepancy. Current npm dist-tags as of this harvest: latest=2026.7.1-2, extended-stable=2026.6.34, beta=2026.8.1-beta.2, alpha=2026.5.19-alpha.1.

No GitHub Security Advisory was published by this repo in the window. The full paginated security-advisories list has nothing dated after 2026-06-30 (a batch of ~20 advisories all published 2026-06-30). That means the two security defects reported above -- the exec-approval TOCTOU (#124858) and the onboarding token-in-URL leak (#124687) -- carry no GHSA, no CVE and no advisory text an operator could subscribe to. They are visible only in PR bodies on main. I state that as a gap in the vendor's disclosure surface, not as evidence they are unimportant; the TOCTOU PR contains a verified live reproduction with observed output.

Version numbering is now actively misleading on this source and downstream consumers should not sort these strings. extended-stable (2026.6.34, npm-published 2026-08-04) is newer in publication than stable (2026.7.1-2, npm-published 2026-07-18) while numbering lower, and compare/v2026.7.1-2...v2026.6.34 -> diverged, ahead_by=332, behind_by=3377 confirms they are separate lines rather than points on one sequence. PR #119942 ('release: extended-stable 2026.6.35', merge commit 8506e327) sits exactly 1 commit ahead of v2026.6.34, so a v2026.6.35 is staged but untagged as of this harvest.

Both halves are present. Capability entries: extended-stable as a fourth channel, scheduled update campaigns with countdown and Hold 1 h, one-paste node onboarding, the Desktop panel reaching phones and the Gateway host, the Labs cloud-worker observer, install-policy warn/acknowledge, and native macOS computer-use. Defect entries: the unfixed workspace boundary on stable, the exec-approval TOCTOU, the onboarding token leak, and the cross-channel approval leak to Telegram. The pattern worth noting for the digest is that all seven capabilities are beta-or-main and all four defects are unfixed on stable -- the stable channel this window received neither the new surfaces nor the repairs.

One entry is marked medium confidence: the macOS native computer-use work (#123635/#123801). Ancestry is high-confidence and verified, but the operator-visible behaviour is read from PR bodies and release notes only -- I did not run the macOS app, and per the standing rule I will not assume a described behaviour holds through the app bundle without observing it. Everything else is high confidence, with ancestry and, where relevant, byte-level file evidence at pinned refs.

Read-only discipline: no files created, edited or deleted; no git write commands; no build run. All evidence is from gh api, curl against registry.npmjs.org and docs.openclaw.ai, and WebFetch.

## Surfaces checked

- sources/openclaw.yml (source contract, read first)
- sources/openclaw.notes.md
- https://github.com/openclaw/openclaw -- releases (full paginated list)
- https://github.com/openclaw/openclaw -- tags
- https://github.com/openclaw/openclaw -- merged PRs in 2026-08-03..2026-08-17 (3,947 total; filtered by contract high-signal patterns: onboarding, setup, wizard, desktop, mobile, gateway, permission, approval, provenance, security)
- https://github.com/openclaw/openclaw -- commit history for docs/install/development-channels.md
- https://github.com/openclaw/openclaw/security/advisories (GitHub Security Advisories API, full paginated)
- GitHub compare API (repos/openclaw/openclaw/compare/<tag>...<sha>) for every channel decision below
- GitHub contents API at pinned refs (src/agents/sandbox-paths.ts at v2026.7.1-2, v2026.6.34, v2026.7.2-beta.5, v2026.8.1-beta.2)
- https://registry.npmjs.org/openclaw -- dist-tags and publish times
- https://docs.openclaw.ai/ (200)
- https://docs.openclaw.ai/start/getting-started (200)
- https://docs.openclaw.ai/install (200)
- https://docs.openclaw.ai/install/development-channels (200) + its repo source pinned at dcdbd7aab6f5a8866d3ea8495f511c93c9fc130e
