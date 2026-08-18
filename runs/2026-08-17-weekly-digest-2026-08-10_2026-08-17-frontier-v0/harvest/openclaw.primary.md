---
schema_version: bitter.frontier_harvest.v0
provider: openclaw
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/openclaw.yml
channels_present: [preview-or-beta, main-unreleased]
window_volume: 8 material changes, 4 capability-bearing, 4 defect-bearing, 5 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- openclaw (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. The boundary fix jumped beta lines: 2026.7.2 was abandoned, 2026.8.1-beta.2 carries it

- **Date:** 2026-08-15 | **Version:** v2026.8.1-beta.2
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** gh api repos/openclaw/openclaw/compare/v2026.8.1-beta.2...cc027149e553ff4be1afe2ca9cc3de9ccdea6f68 -> status=behind, ahead_by=0 (fix IS an ancestor of the beta tag). The 2026.7.2 line that first carried it never produced a stable tag: the tag list goes v2026.7.2-beta.1..beta.7 then straight to v2026.8.1-beta.1/beta.2, with no v2026.7.2. compare/v2026.8.1-beta.2...v2026.7.2-beta.7 -> diverged, ahead_by=66, behind_by=5470, so 8.1-beta is a new cut from main rather than a promotion of the 7.2 betas. npm dist-tag `beta` = 2026.8.1-beta.2 (published 2026-08-15T05:35:31Z).
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.2
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** v2026.8.1-beta.2 (2026-08-15) contains the workspace-boundary fix, as did v2026.7.2-beta.5 through beta.7. But the 2026.7.2 beta line that this publication tracked last window was never promoted -- no v2026.7.2 stable tag exists -- and beta numbering restarted at 2026.8.1. The fix survived the line change because it lives on main and both beta lines are cut from main, not because 7.2 was promoted.

**Operator consequence.** If you need the fix today, `openclaw update --channel beta` is the only channel that has it, and you are accepting the rest of a 5,470-commit beta with it. Treat 'it shipped in beta.5' from the prior window as expired information: that beta line is dead, and beta.5 is not on the path to any current release.

## 2. One-paste node onboarding: `openclaw devices join-code` to `npx openclaw connect <url>`

- **Date:** 2026-08-12 | **Version:** in v2026.8.1-beta.2
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Merge commit ade3456dd48f638cd5c8c50ecc0a3da3fe76d2ec (PR #122499, merged 2026-08-12T13:17:40Z, base main). compare/v2026.8.1-beta.2...ade3456dd -> status=behind, ahead_by=0. compare/v2026.7.1-2...ade3456dd -> diverged, ahead_by=13303. compare/v2026.6.34...ade3456dd -> diverged, ahead_by=16456. In no stable tag.
- **Receipt:** https://github.com/openclaw/openclaw/pull/122499
- **Half:** capability | **Confidence:** high

**What changed.** Adding a second machine to a Gateway went from pasting a full setup blob to running `openclaw devices join-code` on the host and pasting the printed `npx openclaw connect <url>` on the new machine. A `GET /j/<shortcode>` endpoint exchanges a 128-bit shortcode for the canonical pairing payload exactly once; unknown, expired, malformed and already-used codes are all opaque and share a dedicated strict rate-limit scope. `openclaw connect` accepts HTTPS join URLs, `oc-pair://` URLs, or bare setup codes, refuses non-loopback plaintext, and fetches through the SSRF guard with no redirects. With `--service`, the first authenticated hello completes before service installation, so the durable device credential is persisted and the one-shot bootstrap bearer never lands in service arguments.

**Operator consequence.** Try it on beta if multi-machine setup is your friction point -- this is the clearest reduction in terminal-fluency cost OpenClaw shipped this window. Note the credential design when you evaluate it: the short code is single-use and burns on redemption, so a join URL that fails is a signal someone else redeemed it, not a retry.

## 3. The agent's screen becomes a first-class surface -- click-to-control in the browser, and a view from iOS and Android

- **Date:** 2026-08-13 | **Version:** in v2026.8.1-beta.2
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Merge commits 2a8b322ebf52d6d32dbf1170fc4344fee158a474 (PR #123097, merged 2026-08-13T11:10:49Z) and 2278ca6952ea8e5f97decf932fde4ee2c7799e1f (PR #123096, merged 2026-08-13T10:07:12Z), plus df707a96702d8c0c77fc9f45e432ab4e9a7c04af (PR #122545 'view this machine in the Desktop panel') and 0c824f09d545f82715da4d022015aa5645eedb00 (PR #122724 'observe paired node desktops'). compare/v2026.8.1-beta.2...<each sha> -> status=behind, ahead_by=0 for all four. compare/v2026.7.1-2...2a8b322eb -> diverged, ahead_by=13657. In no stable tag.
- **Receipt:** https://github.com/openclaw/openclaw/pull/123097
- **Half:** capability | **Confidence:** high

**What changed.** The Control UI Desktop panel -- previously a 380px-minimum dock panel with no touch affordances and no mobile entry point -- gained a full-bleed document mode at `/?view=desktop` (and `/desktop`), and the iOS and Android apps now open it in their existing authenticated webview. Separately, taking control stopped being a toolbar button you had to find: a transparent overlay covers the view-only stage so clicking anywhere on the desktop reconnects with `control: true`, and the overlay is a real `<button>` with the same accessible name and a `:focus-visible` outline. The panel also now covers the Gateway host machine itself and paired node desktops, not just cloud workers. View-only remains the default and the server still enforces a single controller.

**Operator consequence.** Watch this one -- it is the source's thesis made concrete: agent work that was invisible unless you were at a desk is now something you can look at from a phone. Before enabling it, decide who should be able to see and drive those screens, because the panel now reaches the Gateway host and every paired node, not just leased cloud boxes. Nothing to do on stable yet; none of it is in a stable tag.

## 4. Approved exec could run different bytes than the ones you approved

- **Date:** 2026-08-17 | **Version:** none -- main only
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** Merge commit ab5611f0be610380fe48803fe4311896ca85806e (PR #124858, merged 2026-08-17T01:26:43Z, base main). compare/v2026.8.1-beta.2...ab5611f0b -> status=diverged, ahead_by=619 (merged after the beta tag was cut, not contained). compare/v2026.7.1-2...ab5611f0b -> diverged, ahead_by=14760. compare/v2026.6.34...ab5611f0b -> diverged, ahead_by=17913. In no tag of any kind.
- **Receipt:** https://github.com/openclaw/openclaw/pull/124858
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** A time-of-check/time-of-use hole in exec approval: an operator could approve a command referencing a script, and the runtime would execute whatever that file contained at spawn time, not the bytes that were summarised in the approval prompt. The PR carries a verified live reproduction on commit 66dc9d1 -- write a script printing BENIGN-ORIGINAL, request execution, rewrite the file to print MUTATED-PAYLOAD-EXECUTED while approval is pending, resolve with allow-once, observe the mutated payload run. Because Codex is the default harness, default installations routed exec approvals through the unbound path. The fix snapshots every mutable executable or script operand before the first policy, lifecycle or operator wait, fails closed on missing/unreadable/unsafe operand topologies, and revalidates canonical real paths and SHA-256 byte identities at the last OpenClaw-owned boundary before spawn. Issue #124738. No GHSA has been published for it.

**Operator consequence.** Re-audit your approval model now; there is nothing to upgrade to. This is a defect in the meaning of an approval -- the prompt you read is not a commitment about what executes -- and it is not in stable, not in extended-stable, and not in the current beta. Until a tag carries it, treat allow-once on any command that references a file on disk as approving the path, not the contents; that matters most where the agent itself can write to the directory the script lives in.

## 5. Onboarding printed a reusable Gateway token inside a dashboard URL

- **Date:** 2026-08-17 | **Version:** none -- main only
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** Merge commit 44e8b6f12b0c5de77c60e75a468bd34b34df3d87 (PR #124687, merged 2026-08-17T23:23:17Z, base main). compare/v2026.8.1-beta.2...44e8b6f12 -> status=diverged, ahead_by=885 (not contained). compare/v2026.7.1-2...44e8b6f12 -> diverged, ahead_by=15026. compare/v2026.6.34...44e8b6f12 -> diverged, ahead_by=18179. In no tag.
- **Receipt:** https://github.com/openclaw/openclaw/pull/124687
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Classic onboarding could print a reusable Gateway token embedded in a dashboard URL, including through a headless SSH formatter path -- output that survives in terminal transcripts, shell history, session recordings, CI logs and support bundles. The fix deletes the authenticated-URL builder, the unused SSH token parameter and the token-specific onboarding copy, and prints only the uncredentialed Control UI URL plus `openclaw dashboard --no-open` as the recovery command. The separate `openclaw dashboard` command is unchanged and keeps its short-lived one-time `browserUrl`.

**Operator consequence.** Go look at your own artifacts. If you onboarded a Gateway through the classic flow on any released version, a long-lived credential may be sitting in a terminal transcript, a support bundle you sent someone, or a recorded setup walkthrough -- rotate on that assumption rather than waiting for a release. The fix is on main only, so a fresh install today still prints it.

## 6. An exec approval prompt could surface in a channel it did not come from

- **Date:** 2026-08-14 | **Version:** in v2026.8.1-beta.2
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Merge commit d8a1ebbb492749fa56f47393fe8438dae6e03306 (PR #122517, merged 2026-08-14T07:41:04Z, base main). compare/v2026.8.1-beta.2...d8a1ebbb4 -> status=behind, ahead_by=0 (contained in the beta tag). compare/v2026.7.1-2...d8a1ebbb4 -> diverged, ahead_by=13923. In no stable tag.
- **Receipt:** https://github.com/openclaw/openclaw/pull/122517
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** A foreign-channel exec approval could fall through native approval routing and be delivered to Telegram whenever Telegram held the sole eligible account, exposing an approval prompt outside its source channel. Root cause named in the PR: `doesApprovalRequestSelectChannelAccount` preferred recorded account bindings and configured forwarding targets, but its final sole-account fallback ignored a conflicting `turnSourceChannel`. The fix rejects only the unbound foreign-channel fallback at the shared approval-account owner boundary; recorded bindings and explicit forwarding targets keep precedence, and Telegram and Matrix regression tests encode the same shared contract. Issue #122495.

**Operator consequence.** If you run a multi-channel Gateway where Telegram is the only configured account for some agents, assume approval prompts have leaked across channel boundaries on stable and check who could see them. The containment is in beta only. This is also a reminder that OpenClaw's approval routing is a function of your account topology, not just your channel bindings -- one sole-eligible account is enough to change where a prompt lands.

## 7. Plugin and skill installs gain a reviewable `warn` verdict and an explicit acknowledgement

- **Date:** 2026-08-14 | **Version:** CLI half in v2026.8.1-beta.2; UI half main-only
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Merge commit bf40269cb7924a37ed096ac30b7e44cf305af193 (PR #116489, merged 2026-08-14T17:58:46Z, base main). compare/v2026.8.1-beta.2...bf40269cb -> status=behind, ahead_by=0. compare/v2026.7.1-2...bf40269cb -> diverged, ahead_by=14038. The Control UI half (PR #120900, 47442197a100b1b76f0bc8d3538415e3735e394b, merged 2026-08-15T03:07:03Z) is NOT in the beta: compare/v2026.8.1-beta.2...47442197a -> diverged, ahead_by=19, i.e. main-unreleased.
- **Receipt:** https://github.com/openclaw/openclaw/pull/116489
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** An external `security.installPolicy` command can now return `warn` in addition to allow/block, letting an authorized operator review a suspicious plugin or skill before deciding. Interactive CLI installs print the bounded reason and findings and require the operator to type the exact target name; `--acknowledge-install-policy-warning` approves every warning in that invocation; each acknowledged warning is re-evaluated against the staged source before install proceeds. A changed same-stage warning, a `block`, malformed output, timeout, execution failure, oversized review or dependency-boundary failure all stay terminal. Automatic, system-agent and Claw package flows cannot borrow prompt authority from an ambient TTY, and the deprecated `--dangerously-force-unsafe-install` flag remains non-authorizing. The v2026.8.1-beta.2 notes pair this with provenance warnings that require explicit `--force` for arbitrary executable plugin sources while keeping trusted ClawHub, bundled and official-catalog installs frictionless. Security-owner sign-off is recorded in the PR (OpenClaw secops, 2026-08-14).

**Operator consequence.** Adapt any automation that installs plugins non-interactively: a `warn` verdict is now terminal for automatic, system-agent and Claw package flows, so a policy hook that starts returning `warn` will stop those installs rather than prompting. Note the split channel -- the CLI enforcement is in beta, the Control UI review surface is main-only, so a beta operator gets the block without the place to review it.

## 8. macOS app fulfils computer-use natively, under the signed app's own TCC identity

- **Date:** 2026-08-14 | **Version:** in v2026.8.1-beta.2
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** Merge commits 19ace6830b17a20cf5b103c1893a2c5d7bca6bc3 (PR #123635, merged 2026-08-14T17:24:09Z) and 4a6edc0d27bcaa47f2951523788ce127148b4406 (PR #123801, merged 2026-08-14T21:12:26Z), both base main. compare/v2026.8.1-beta.2...19ace6830 -> status=behind, ahead_by=0; compare/v2026.8.1-beta.2...4a6edc0d2 -> status=behind, ahead_by=0. compare/v2026.7.1-2...4a6edc0d2 -> diverged, ahead_by=14082. In no stable tag.
- **Receipt:** https://github.com/openclaw/openclaw/pull/123635
- **Half:** capability | **Confidence:** medium

**What changed.** OpenClaw.app could not use the CUA computer-use provider without giving the driver a separate macOS TCC identity, because a daemon spawned by the Gateway or a TypeScript worker inherits that process's responsibility chain rather than the signed app's Accessibility and Screen Recording grants. The signed app now owns the embedded-daemon lifecycle and exposes a generation-scoped private socket to its node worker; Settings picks exactly one provider (Peekaboo by default, or CUA) with no per-call fallback. Packaging downloads a pinned universal MCP proxy binary and verifies SHA-256 733e28a3782ac8d325f8fce8b5d97486c1054af755b40dfd086151b34c79377e before signing it into the bundle. A companion PR (#123801) makes the native Peekaboo path fulfil the computer.act v2 contract -- exact-window observation, background window and element input, lifecycle operations -- with process-local refs invalidated on lifecycle-generation change, and browser, recording, zoom and escalate_scope still rejected and unadvertised.

**Operator consequence.** Watch rather than adopt: this is macOS-only, beta-only, and it moves screen-recording and accessibility authority into the signed app bundle. The consequence worth tracking is the permission story -- if computer use runs under the app's own TCC grants, the macOS permission dialog an ordinary user already said yes to becomes the grant that lets an agent drive their machine. Confidence is medium on operator-visible behaviour because the substance here is read from the PR bodies and the beta release notes; I did not run the app.

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
