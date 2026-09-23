---
schema_version: bitter.frontier_harvest.v0
provider: openclaw
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/openclaw.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased]
window_volume: 7 stable GitHub releases (v2026.8.1 through v2026.9.5), 2 betas, 2 extended-stable releases (v2026.6.35, v2026.7.35) plus 2 extended-stable tags without releases (v2026.7.33, v2026.7.34), 75 GHSA advisories published 2026-09-11; 11 material changes below
lane: primary sources, Lane A researcher
---

# Harvest -- openclaw (primary sources)

Punctuation is ASCII. Receipts are pinned to tags or SHAs. Identity check: `gh api repos/openclaw/openclaw` is the repo named in `sources/openclaw.yml` primary_surfaces. Release bodies link docs.openclaw.ai and npm `openclaw`, and the Publication evidence sections carry the same tag SHAs the tags API returns (for example v2026.9.5 -> ec9c1a13).

## 1. The approved-exec fix is now in stable, but not on extended-stable

- **Date:** 2026-08-24 (first beta), 2026-08-31 (first stable)
- **Channel:** `tagged-release` (latest/beta dist-tags); absent from `extended-stable`
- **Ancestry evidence:** `gh api repos/openclaw/openclaw/compare/<tag>...ab5611f0be610380fe48803fe4311896ca85806e` gives status=behind, ahead_by=0 for every tag cut in the window on the main line: v2026.8.1-beta.3 (behind_by=1690), v2026.9.1-beta.1 (3186), v2026.8.1 (4990), v2026.8.2 (5765), v2026.9.1 (6987), v2026.9.2 (8199), v2026.9.3 (10093), v2026.9.4 (11633), v2026.9.5 (15870). The extended-stable tags are diverged: v2026.7.33, v2026.7.34 and v2026.7.35 each ahead_by=14760 (behind 299/307/310); v2026.6.35 ahead_by=17913, behind_by=362. Code check: `src/infra/system-run-mutable-file-operand.ts` (the operand snapshot the fix adds) returns blob 938c1687 at v2026.8.1 and 404 at v2026.7.35 and v2026.7.1-2. PR #124858 is listed in the v2026.8.1 contribution record in CHANGELOG.md at v2026.9.4. npm dist-tags on 2026-09-23: latest=2026.9.5, beta=2026.9.5, extended-stable=2026.7.35.
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.8.1 ; https://github.com/openclaw/openclaw/commit/ab5611f0be610380fe48803fe4311896ca85806e ; https://github.com/openclaw/openclaw/blob/v2026.8.1/src/infra/system-run-mutable-file-operand.ts
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** The parent's residual is settled. The fix binds an approved command to the SHA-256 bytes of its script/executable operands and revalidates them just before spawn. It first appeared in a prerelease on 2026-08-24 and in stable v2026.8.1 on 2026-08-31. The human-facing 8.1 highlights do not mention it; it appears only as "PR #124858" in the contribution record. It is not on the extended-stable line. v2026.7.35 was promoted to the `extended-stable` dist-tag on 2026-09-21 and is described as "OpenClaw from the end of July 2026, plus critical security updates". It lacks the operand snapshot file entirely.

**Operator consequence.** Upgrade: `openclaw update --channel stable` (npm latest 2026.9.5) now carries the fix. Re-audit if you run extended-stable. The approval prompt on 2026.7.35 is still not bound to the bytes that run. Before 2026.8.1, one-time approvals of scripts that the agent can write should be treated as approvals of a path, not of content. Expect re-prompts after upgrading: the PR downgrades byte-bound durable grants to one-shot.

## 2. The Codex sandbox stop-success fix and the rest of the parent's main-only pile reached the same tags

- **Date:** 2026-08-24 / 2026-08-31
- **Channel:** `tagged-release` (not in extended-stable)
- **Ancestry evidence:** fd8326c5bf6fcf063fd1ac0d9e87bf032fbfa2dc (#125908, "stop sandbox processes surviving termination"): compare v2026.8.1-beta.3 -> behind (behind_by=1129), v2026.8.1 -> behind (4429), v2026.7.35 -> diverged 15321/310, v2026.7.1-2 -> diverged. The same pattern (behind at v2026.8.1-beta.3 and v2026.8.1, diverged at v2026.7.35) holds for 4b0d5734 (#124909 session permission modes), 554fc80e (#126210 Full access no longer prompts), 50720c3b (#125995 native approval scope), 0606e31d (#126306 Gateway-brokered GitHub publish), and 0a867022 (#126474 agent GitHub identities). v2026.8.1 highlights name "Session permission modes (#124909, #131547, #132989)".
- **Receipt:** https://github.com/openclaw/openclaw/commit/fd8326c5bf6fcf063fd1ac0d9e87bf032fbfa2dc ; https://github.com/openclaw/openclaw/releases/tag/v2026.8.1
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** The fix touches `extensions/codex/src/app-server/sandbox-exec-server/*` (commit file list): it reaps the process tree before reporting termination. It ships in the `@openclaw/codex` plugin published in lockstep at each version. The capability items from the parent (per-session read-only/guarded/workspace/full modes, forge credential kept on the Gateway) are installable on stable from 2026-08-31.

**Operator consequence.** On 2026.8.1+ a successful Codex sandbox stop means the tree is gone. Before 8.1, and on extended-stable, it did not. Operators can now plan around "cloud worker finishes, Gateway opens the draft PR, worker never holds the token".

## 3. The workspace symlink-then-`..` boundary fix is in stable, not in extended-stable

- **Date:** 2026-08-31 (first stable); merge 2026-07-27
- **Channel:** `tagged-release` (not in extended-stable)
- **Ancestry evidence:** cc027149e553ff4be1afe2ca9cc3de9ccdea6f68 (#113405): compare v2026.8.1-beta.3 -> behind (9326), v2026.8.1 -> behind (12626), v2026.7.1-2 -> diverged 7124/224, v2026.7.35 -> diverged 7124/310, v2026.6.35 -> diverged. Code check: `src/agents/sandbox-paths.ts` contains `assertRawParentWithinRoot`/`resolveRawPathViaExistingAncestor` 8 times at v2026.8.1 and v2026.9.5, 0 times at v2026.7.35. The parent noted cc027149 was already in the 2026.8.1 betas; the new fact is the stable cut.
- **Receipt:** https://github.com/openclaw/openclaw/blob/v2026.8.1/src/agents/sandbox-paths.ts ; https://github.com/openclaw/openclaw/pull/113405
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** The profile's standing "fixed in no release on any channel" is false as of 2026-08-31 for latest/beta. It stays true for extended-stable 2026.7.35. The maintainers' own caveat (validation-time check, not race-safe) is unchanged. A related advisory, GHSA-5rx7-34fw-64qg ("Unicode fallback could escape workspaceOnly roots", medium 5.3), is patched in 2026.8.1: on filesystems with canonically equivalent sibling directory names, a missing in-workspace path could be retried against a sibling outside the root. That escape needs no symlink.

**Operator consequence.** On stable, the workspace root is a validation-time barrier, not a race-safe one. On extended-stable it is still hygiene only. Update the profile's `avoid_for` line to name the channel rather than "every channel".

## 4. 75 advisories published in one batch; the exec-approval family is patched in 2026.8.1

- **Date:** 2026-09-11 (all 75 published between 00:56 and 00:59 UTC)
- **Channel:** `tagged-release` (patched versions named per advisory)
- **Ancestry evidence:** `gh api repos/openclaw/openclaw/security-advisories` filtered to published_at 2026-08-17..2026-09-21: 75 advisories, 30 high, 40 medium, 5 low, all dated 2026-09-11. None of them has a CVE ID. Patched versions by count: most name 2026.8.1; others name 2026.7.1, 2026.8.2, 2026.9.2, 2026.9.3, or iOS 2026.8.11. None is published after the window closed.
- **Receipt:** https://github.com/openclaw/openclaw/security/advisories/GHSA-74gc-hg2m-79p9 ; https://github.com/openclaw/openclaw/security/advisories/GHSA-ghpx-6xwq-2w4w ; https://github.com/openclaw/openclaw/security/advisories/GHSA-3mq7-q27j-mq7q ; https://github.com/openclaw/openclaw/security/advisories/GHSA-wwcw-jfpp-gpxw ; https://github.com/openclaw/openclaw/security/advisories/GHSA-rrxp-5mx8-mvhh
- **Half:** defect | security-relevant | **Confidence:** high on metadata; medium on per-advisory backport status for extended-stable

**What each allows (resolved from advisory text):**
- GHSA-74gc-hg2m-79p9 (high 7.5, vulnerable < 2026.8.1): clicking Allow Always on one exact command on macOS/Linux persisted a path-only grant. The same executable could then run later with different arguments and no prompt, for example to send files, overwrite files, or reach internal services.
- GHSA-ghpx-6xwq-2w4w (high 8.0, >= 2026.3.22 < 2026.8.1): an allowlisted or permanently approved wrapper (shell carrier, monitor, tracer, namespace or proxy tool) did not inspect its inner command. A later turn could substitute any command and run it with host privileges.
- GHSA-3mq7-q27j-mq7q (high 7.3, < 2026.8.1): reusable approvals were not bound to the working directory, so the same approved command could run against an unreviewed repo.
- GHSA-9f86-pvv5-rxfw (high, < 2026.8.1): escaped newlines confused exec allowlist parsing. The 2026.7.33 extended-stable notes claim a backport ("reject escaped-newline command words", PR #114134).
- GHSA-wwcw-jfpp-gpxw (high 8.8, < 2026.8.1): a per-chat `tools.allow` did not restrict Codex app-server native shell/file/patch tools. A lower-trust chat on a Codex runtime could still reach host commands.
- GHSA-rrxp-5mx8-mvhh (high 8.8, @openclaw/voice-call < 2026.8.1): admitted inbound callers inherited owner tool authority.
- GHSA-hpg5-cq3m-phqp (high, < 2026.8.1): the agent cron tool could reach operator command jobs.
- GHSA-7jfq-rmfm-29wp (medium, < 2026.8.1): file-transfer approvals could widen durable authority.
- GHSA-5m4g-88rg-69pj (low, < 2026.8.1): MCP loopback could omit sandbox tool deny policy.
- There is no advisory for the byte-binding fix in section 1 (#124858) or the sandbox-stop fix in section 2 (#125908). Searched summaries for script/sandbox/terminate/stop/approv.

**Operator consequence.** Upgrade to at least 2026.8.1. Then remove generated Allow Always entries created before the upgrade, because the advisories' own mitigation says the stored grant was broader than what you clicked. Extended-stable operators: 2026.7.35 sorts below 2026.8.1, so it falls inside the published vulnerable ranges. The advisories name only 2026.8.1 as patched. The 7.35 notes list no backport of the approval-scope PRs. Treat extended-stable as exposed unless a specific backport is named. This saves attention on one point: stable users get one upgrade target for the whole batch.

## 5. Extended-stable moved to a July line that predates every fix above

- **Date:** 2026-09-10 (v2026.6.35), 2026-09-18 / 09-20 (v2026.7.33 / v2026.7.34 npm, tags only), 2026-09-21 (v2026.7.35 release)
- **Channel:** `tagged-release` (extended-stable dist-tag)
- **Ancestry evidence:** npm time: 2026.6.35 2026-09-10T04:51Z, 2026.7.33 2026-09-18T05:10Z, 2026.7.34 2026-09-20T02:52Z, 2026.7.35 2026-09-21T12:16Z. dist-tag extended-stable=2026.7.35. Compares: v2026.7.1-2...v2026.7.33 ahead 75/0; v2026.7.33...v2026.7.35 ahead 11/0; v2026.6.34...v2026.6.35 ahead 30/0. So the July line is a branch off v2026.7.1-2, not off main. v2026.7.35 release body: "gateway-only extended-stable release ... our current equivalent to LTS"; "2026.7.33 and 2026.7.34 were unstable extended-stable builds and were intentionally not published as GitHub Releases"; 7.35 itself is a one-fix follow-up (Doctor plugin registry repair after 7.34). v2026.6.35: "final June 2026 Extended Stable (LTS) release". Docs at tag: `docs/install/development-channels.md` defines four channels and says extended-stable "never applies automatically".
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.7.35 ; https://github.com/openclaw/openclaw/blob/v2026.9.5/docs/install/development-channels.md
- **Half:** defect | channel | **Confidence:** high

**What changed.** The product now offers an LTS-labelled channel whose promise is "critical security updates". Its current build lacks the approved-exec binding, the workspace-boundary fix, and the sandbox-stop fix (sections 1 to 3, by code check and ancestry). It also shipped two unstable builds to npm in three days before the one it kept.

**Operator consequence.** "LTS" is not "more secure" here. If you pick extended-stable to reduce churn, you give up the 2026.8.1 approval and boundary fixes. Pin an exact version and read each advisory's backport status. Evidence that settles it: an extended-stable tag where `compare <tag>...ab5611f0` returns behind, or where `system-run-mutable-file-operand.ts` exists.

## 6. Seven stables in 20 days, with release gates visibly waived

- **Date:** 2026-08-31 to 2026-09-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** see Release ledger. Every consecutive stable is `diverged` with a small behind_by (5 to 41 commits), so each stable is a release branch off main with its own fix commits. v2026.9.4 body: "Telegram and Parallels checks: explicitly waived by the release owner, not passed"; "Android native qualification failed"; original publisher failed npm propagation readback and was finalized "through manual recovery". v2026.9.5 body: "Stable soak waived by operator"; "Android APK: skipped"; "npm Telegram beta E2E: not supplied". npm beta dist-tag equals latest (2026.9.5): the last beta tag is v2026.9.1-beta.1 (2026-08-28). Main at window close (73f058a4, 2026-09-21T23:58Z) is diverged from v2026.9.5, ahead_by=2344.
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.9.4 ; https://github.com/openclaw/openclaw/releases/tag/v2026.9.5
- **Half:** defect | channel | **Confidence:** high

**What changed.** The parent window was zero releases. This window shipped a stable roughly every three days. The v2026.9.4 and v2026.9.5 release pages no longer carry notes; they link docs.openclaw.ai and a `CHANGELOG/<version>.md` at raw main. That file 404s at v2026.9.4, and `CHANGELOG/2026.9.5.md` exists at v2026.9.5.

**Operator consequence.** For 9.4 and 9.5, the release page states which qualification lanes were skipped. Read that before auto-updating a production Gateway. The beta channel currently gives you nothing ahead of stable.

## 7. Defaults widened agent reach several times, each on a named stable

- **Date:** 2026-08-31 to 2026-09-19
- **Channel:** `tagged-release`
- **Ancestry evidence (merge SHA -> first stable, compare status behind at that tag and diverged at the previous one):**
  - #133469 5a6098b7 "default session tools to agent visibility" -> v2026.8.2 (not in v2026.8.1).
  - #136755 2fffd4e8 "enable cross-agent session access by default" -> v2026.9.2 (not in v2026.9.1). Notes: "session tools now default to all-session visibility and ordinary agent-to-agent access is enabled".
  - #136514 af9ba2ad "enable Swarm by default" -> v2026.9.2.
  - #138059 99860445 "allow bounded recursive session spawning by default" -> v2026.9.3 (not in v2026.9.2).
  - v2026.9.3 "CLI agents by default" (#139459; set `gateway.cliAgents.enabled=false` to disable).
  - #149875 135a685b "allow cross-provider messaging by default" -> v2026.9.5 (not in v2026.9.4).
  - Merged in July, first stable in window: #107690 3976ec47 "default skill workshop approvals to auto" and #115576 8fd49c84 "make self-learning automatic by default". Both are behind at v2026.8.1 and diverged at v2026.7.1-2 and v2026.7.35. 8.1 notes: self-learning applies "scanner-approved new or Workshop-owned skills by default".
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.9.2 ; https://github.com/openclaw/openclaw/releases/tag/v2026.9.3 ; https://github.com/openclaw/openclaw/blob/v2026.9.5/CHANGELOG/2026.9.5.md
- **Half:** both | **Confidence:** high

**What changed.** An upgrade from 2026.7.1-2 to 2026.9.5 turns on several things by default: agents read and message other agents' sessions, spawn swarms and recursive sub-sessions, message across providers, and apply self-authored skills without a prompt. Each note says sandbox and explicit restrictions "remain enforced".

**Operator consequence.** Re-audit shared or multi-agent Gateways after upgrading. Set `tools.sessions.visibility` to `agent` or `self`, and set `skills.workshop.approvalPolicy: "pending"` if you relied on the old gates. On single-owner installs, these defaults remove setup steps. That is the capability half.

## 8. Approval UX: grant once, bind to the operation, revoke later

- **Date:** 2026-08-31 to 2026-09-08
- **Channel:** `tagged-release`
- **Ancestry evidence:** #129526 473b4f19 "scoped standing grants make recurring cron automations approvable once" -> behind at v2026.8.1. #128548 53dcaaed "generic operator roles" -> v2026.8.1. #132407 67433ff4 "apply workspace permission changes to active runs" -> v2026.8.2. #136019 b3c82667 "Allow Always durable for MCP tools on OpenClaw-configured servers" -> v2026.9.1. #141471 e57e375a "honor exec allowlists for Claude native Bash" -> v2026.9.3.
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.8.1 ; https://github.com/openclaw/openclaw/releases/tag/v2026.9.1
- **Half:** capability | **Confidence:** high

**What changed.** 8.1 adds automation permissions for an exact operation that can be inspected and revoked, and that re-prompt when the job changes. It adds team operator roles, explicitly "collaboration controls, not hostile-tenant isolation". In 8.2, a permission change applies to runs already in flight and survives moving a session to a cloud worker. 9.1 makes Allow Always durable for MCP tools. 9.3 makes Claude-native Bash respect the agent exec allowlist under on-miss prompting.

**Operator consequence.** Try standing grants for cron jobs in place of blanket allowlists. They are bound to the operation, which the pre-8.1 path-only grants (GHSA-74gc) were not. Do not treat operator roles as a tenant boundary.

## 9. Distribution: one-prompt install, a Linux desktop app, a Linux update channel

- **Date:** 2026-09-01 (v2026.8.2), 2026-09-03 (v2026.9.1), 2026-09-19 (`linux-stable` pointer)
- **Channel:** `tagged-release`
- **Ancestry evidence:** #134221 87da4a74 "quick-start lane opens the web dashboard from one prompt" -> behind at v2026.9.1. v2026.8.2 highlight: Linux `.deb`/AppImage desktop companion, "AppImage updates are signature-verified". GitHub release `linux-stable` (prerelease=true, 2026-09-19, target ec9c1a13 = v2026.9.5) is a pointer page to the v2026.9.5 AppImage and .deb, not a version. Install docs (docs.openclaw.ai/install, fetched 2026-09-23) lead with desktop downloads (Windows Hub, macOS DMG) and `curl -fsSL https://openclaw.ai/install.sh | bash`. install.sh defaults `OPENCLAW_VERSION=latest` and resolves `npm view openclaw dist-tags.latest`.
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.9.1 ; https://github.com/openclaw/openclaw/releases/tag/v2026.8.2 ; https://github.com/openclaw/openclaw/releases/tag/linux-stable
- **Half:** capability | **Confidence:** high (docs page is unpinned; install.sh read live)

**What changed.** A fresh `npx openclaw@latest` detects existing Claude Code or Codex logins and API keys, verifies them live, and opens the web dashboard. The full wizard becomes "Custom setup". Linux joins macOS and Windows with a tray app.

**Operator consequence.** This answers the contract's approachability questions with a concrete surface. The terminal wizard is no longer the default path. Watch how the dashboard shows the widened defaults from section 7 to a first-run user. If it does not show them, this is convenience that hides authority.

## 10. Grok/xAI: small in-window moves; the subscription login predates the window

- **Date:** 2026-09-03, 2026-09-08, 2026-09-19
- **Channel:** `tagged-release`
- **Ancestry evidence:** #135766 9478cfdf "surface SuperGrok usage stats" -> behind at v2026.9.1. #140610 69cf3182 "preserve OAuth catalog and automatic selection" (xAI) -> behind at v2026.9.3. #149703 ccdb3168 "support Muse, Grok, and Cursor handoffs" (triage) -> behind at v2026.9.5. CHANGELOG.md at v2026.9.4 places "add xAI Grok OAuth login for SuperGrok subscribers ... without XAI_API_KEY" in the 2026.5.17 section, and headless xAI/Grok OAuth in 2026.7.1.
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.9.1 ; https://github.com/openclaw/openclaw/blob/v2026.9.4/CHANGELOG.md
- **Half:** capability | **Confidence:** high on these items; the Latent Space piece is not a primary source and was not used

**What changed.** OpenClaw's primary record shows no new Grok integration or Grok-specific distribution change in the window. It shows usage display for SuperGrok accounts, OAuth catalog continuity, and Grok added as a target for the triage-handoff workflow. Running OpenClaw on a SuperGrok subscription without an API key has been possible since 2026.5.17. v2026.9.5 also makes the macOS app default to the web experience (#148808 et al.). That is the nearest primary item to a "MacBook simplicity" framing, and it is not Grok-specific.

**Operator consequence.** Ignore for the approval story. If the Writing lane uses the Latent Space piece, the primary anchor is "subscription OAuth since May, usage display since 2026.9.1", not a new integration.

## 11. Breaking changes an upgrader will hit

- **Date:** 2026-08-31 (v2026.8.1), 2026-09-08 (v2026.9.3)
- **Channel:** `tagged-release`
- **Ancestry evidence:** release bodies at the tags.
- **Receipt:** https://github.com/openclaw/openclaw/releases/tag/v2026.8.1 ; https://github.com/openclaw/openclaw/releases/tag/v2026.9.3
- **Half:** defect | **Confidence:** high

**What changed.** 8.1: bundled OpenProse plugin and `/prose` removed. `codex/*` and `openai-codex/*` model refs migrate to `openai/*` via `openclaw doctor --fix`. 9.3: Node 24.16+ or 26.1+ required, and older Node risks SQLite text truncation. Skill Workshop moves to one writable collection per agent, and `skills.workshop.allowSymlinkTargetWrites` is retired. Several plugin SDK removals.

**Operator consequence.** Upgrade Node before OpenClaw. Run `openclaw doctor --fix` after crossing 8.1.

## Release ledger

| Tag | Published (UTC) | Prerelease | Line | vs previous stable (ahead/behind) | ab5611f0 in tag |
|---|---|---|---|---|---|
| v2026.8.1-beta.3 | 2026-08-24 04:40 | true | main | vs v2026.8.1-beta.2: 2309/22 | yes |
| v2026.9.1-beta.1 | 2026-08-28 20:43 | true | main | vs v2026.8.1-beta.3: 1507/11 | yes |
| v2026.8.1 | 2026-08-31 03:30 | false | stable | vs v2026.7.1-2: 19750/224 | yes |
| v2026.8.2 | 2026-09-01 16:00 | false | stable | vs v2026.8.1: 794/19 | yes |
| v2026.9.1 | 2026-09-03 18:31 | false | stable | vs v2026.8.2: 1230/8 | yes |
| v2026.9.2 | 2026-09-05 20:00 | false | stable | vs v2026.9.1: 1253/41 | yes |
| v2026.9.3 | 2026-09-08 14:15 | false | stable | vs v2026.9.2: 1899/5 | yes |
| v2026.6.35 | 2026-09-10 06:39 | false | extended-stable (June) | vs v2026.6.34: 30/0 | no |
| v2026.9.4 | 2026-09-11 03:46 | false | stable | vs v2026.9.3: 1578/38 | yes |
| v2026.7.33 | tag only (npm 2026-09-18) | n/a | extended-stable (July) | vs v2026.7.1-2: 75/0 | no |
| v2026.9.5 | 2026-09-19 01:55 | false | stable (npm latest, beta) | vs v2026.9.4: 4244/7 | yes |
| linux-stable | 2026-09-19 05:00 | true | pointer to v2026.9.5 Linux assets | n/a | n/a |
| v2026.7.34 | tag only (npm 2026-09-20) | n/a | extended-stable (July) | n/a | no |
| v2026.7.35 | 2026-09-21 13:14 | false | extended-stable (npm extended-stable) | vs v2026.7.33: 11/0 | no |

## Carry-forward answers

1. ab5611f0 is an ancestor of every main-line tag cut in the window: first v2026.8.1-beta.3 (2026-08-24), first stable v2026.8.1 (2026-08-31), and current npm latest/beta 2026.9.5. It is NOT in any extended-stable tag (v2026.6.35, v2026.7.33/34/35 all diverged; operand file 404 at v2026.7.35). install.sh and docs default to npm `latest` (2026.9.5). `openclaw update --channel extended-stable` installs 2026.7.35.
2. Stop-success fix fd8326c5: yes, same tags (v2026.8.1-beta.3, v2026.8.1 onward); not in extended-stable.
3. See sections 3, 4, 7, 8. The older workspace-boundary fix cc027149 is now in stable v2026.8.1 onward and absent from v2026.7.35 (code check).
4. See section 10. No new Grok integration on primary surfaces. In-window changes: SuperGrok usage display (9.1), xAI OAuth catalog fix (9.3), Grok triage handoff (9.5).

## Operator questions the window settles

- Reduce setup burden: yes, concretely. 9.1 one-prompt quick-start reuses existing Claude Code/Codex logins, and 8.2 adds a Linux tray app.
- Simplify while preserving visible authority: mixed. Approval grants became exact and revocable (section 8). In the same weeks, six reach-widening defaults flipped on (section 7), and they appear only as bullets in multi-thousand-line notes.
- New distribution surface: Linux desktop and a `linux-stable` update pointer. The macOS app now defaults to the web experience.

## Observed after window close

- None found. The newest GitHub release and npm version is 2026.7.35 (2026-09-21). No tag newer than v2026.9.5 on the main line. No advisory published 2026-09-22 or later at the 2026-09-23 check.

## Surfaces checked

- gh api repos/openclaw/openclaw/releases (40) and tags (60)
- npm view openclaw dist-tags and time (2026-09-23)
- gh compare <tag>...ab5611f0 for 13 tags; fd8326c5, cc027149, 0606e31d, 0a867022, 4b0d5734, 554fc80e, 50720c3b against v2026.8.1-beta.3, v2026.8.1, v2026.7.1-2, v2026.7.35, v2026.6.35
- gh compare for consecutive stables, betas, extended-stable lines, and v2026.9.5...73f058a4 (window-close main)
- gh api pulls for #124858 #125908 #113405 #124909 #132407 #133469 #136755 #136514 #138059 #149875 #107690 #115576 #141471 #136019 #129526 #128548 #148808 #134221 #135766 #140610 #149703 #149877
- Release bodies: v2026.8.1-beta.3, v2026.9.1-beta.1, v2026.8.1, v2026.8.2, v2026.9.1, v2026.9.2, v2026.9.3, v2026.9.4, v2026.9.5, v2026.6.35, v2026.7.35, linux-stable
- Raw at tag: CHANGELOG.md at v2026.9.4; CHANGELOG/2026.9.5.md at v2026.9.5; src/infra/system-run-mutable-file-operand.ts at v2026.8.1 / v2026.7.35 / v2026.7.1-2; src/agents/sandbox-paths.ts at v2026.7.35 / v2026.8.1 / v2026.9.5; docs/install/development-channels.md at v2026.8.1-beta.2 / v2026.8.1 / v2026.9.5
- gh api security-advisories (75 in window) and full text of GHSA-74gc, -3mq7, -ghpx, -5rx7, -wwcw, -rrxp
- docs.openclaw.ai/install.md, /install/development-channels.md, llms.txt; openclaw.ai/install.sh (live)

## Not reached

- Per-advisory backport status on the extended-stable 2026.7.x line was not verified code-by-code, except for the approved-exec and workspace-boundary fixes. It is inferred only from advisory ranges and the 7.33/7.35 notes.
- `CHANGELOG/2026.9.4.md` 404s at v2026.9.4 (the release page links it at raw main); the 9.4 section was read from CHANGELOG.md at the tag instead.
- docs.openclaw.ai pages are unpinned live reads (2026-09-23), used only where the repo docs at a tag did not cover them.
- The Latent Space piece (2026-09-05) was not opened; it is secondary.
