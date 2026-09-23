---
schema_version: bitter.frontier_harvest.v0
provider: agent-flywheel
window: 2026-08-20..2026-09-21
run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
source_contract: sources/agent-flywheel.yml
channels_present: [tagged-release, main-unreleased]
window_volume: 2 stable tags (v0.8.0, v0.9.0), 433 default-branch commits in window; 6 material changes, 3 capability-bearing, 4 defect-bearing
lane: primary sources, researcher; identity checked; tag-bounded per contract, main noted only where it changes the read
---

# Harvest -- agent-flywheel (primary sources)

Punctuation is ASCII. Repo Dicklesworthstone/agentic_coding_flywheel_setup
(owner Dicklesworthstone, description "Bootstraps a fresh Ubuntu VPS into a
complete multi-agent AI development environment..."). Parent baseline: last
tag v0.7.0 (2026-06-26), main 163 ahead. This window ended the tag drought
twice.

## Release ledger

| Tag | Published | Prerelease | Tag commit | ahead_by from previous stable |
|---|---|---|---|---|
| v0.8.0 | 2026-08-25T17:14:41Z | no | f659b12ad11f6fe2d5de648785d7d06de6240df2 (2026-08-25T17:09:59Z) | 433 vs v0.7.0 (compare status=ahead, behind_by=0) |
| v0.9.0 | 2026-09-04T04:45:16Z | no | 5eaf1464b370813b9280a09b6b1b5054fcff0dc1 (2026-09-04T04:38:57Z) | 61 vs v0.8.0 (ahead, behind_by=0) |

main at observation (2026-09-23) is 125 ahead of v0.9.0, behind_by=0; 86 of
those commits are dated 2026-09-04 through 2026-09-21. No assets on either
release by design: the release is the install script.

## 1. v0.8.0: the maintainer states v0.7.0 never installed; v0.8.0 is the first working pinned cut since v0.5.0

- **Date:** 2026-08-25
- **Channel:** `tagged-release`
- **Ancestry evidence:** `gh api repos/.../releases/tags/v0.8.0` -> name "v0.8.0 -- the installer works again", prerelease=false, published_at 2026-08-25T17:14:41Z, tag SHA f659b12a. compare v0.7.0...v0.8.0 ahead_by=433, behind_by=0. Release body: v0.7.0 "fails its own internal integrity check before doing anything"; "v0.5.0 -- two releases back -- was the newest ref that actually installed"; cause was committed `checksums.yaml` / `internal_checksums.sh` drifting from covered files, plus a structural `missing` entry for install.sh itself. Verified by the maintainer in a clean ubuntu:22.04 container with the README pipe command (INTEGRITY failures 0). At the tag, `install.sh` line 138 reads ACFS_VERSION="0.8.0" but the VERSION file still reads 0.7.0 (fixed and gated in v0.9.0, GH #352).
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.8.0
- **Half:** both | **Confidence:** high (on the maintainer's claim and the tag; we did not rerun the v0.7.0 install)

**What changed.** The watchlist's standing premise ("what you install is still
v0.7.0") was worse than recorded: by the maintainer's own account the pinned
v0.7.0 install path failed outright. Our profile and every July finding cited
v0.7.0 as the installable cut.

**Operator consequence.** Stop pinning v0.7.0. Pin v0.9.0 (below). Re-audit
Frontier's own claims that describe v0.7.0 as the thing operators run: the
governance findings read its source correctly, but the "installable" framing
needs a correction note. The release notes also warn that main can break again
whenever a covered file lands without regenerating checksums: install from a
tag, never main.

## 2. v0.9.0: per-tool holds, smoke-checked rollback, partial-failure exit codes, service repair

- **Date:** 2026-09-04
- **Channel:** `tagged-release`
- **Ancestry evidence:** v0.9.0 published 2026-09-04T04:45:16Z, prerelease=false, name "v0.9.0 -- service repair, per-tool holds with rollback, Gemini 3.8 Antigravity". compare v0.8.0...v0.9.0 ahead_by=61, behind_by=0. Body cites 00be20a9 and 7c102849 (holds, rollback, exit codes 0/1/2, GH #357), 4567aad8 (smoke probes, GH #378), 7c4e3462 (services repair and running-binary drift from /proc/<pid>/exe, GH #381-383), 045d0400 (per-UID flock on `acfs update`, GH #347). VERSION file reads 0.9.0 and install.sh ACFS_VERSION="0.9.0" at the tag; `scripts/release-doctor.sh` now gates VERSION == ACFS_VERSION (81ac331c).
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.9.0
- **Half:** capability | **Confidence:** high

**What changed.** `acfs hold <tool> --reason --version --expiry --owner`
freezes a bundled tool; a fresh tool install that fails its smoke probe rolls
back to the retained `.prev` binary; `acfs update` exits 0/1/2 for
success/total/partial failure; `acfs services` relaunches only dead panes and
reports services still running a replaced inode.

**Operator consequence.** This is the first tag that gives the operator a
per-tool version lever. It partly answers the contract question "does the
installer pin agent versions and channels?": the operator can now hold, but the
installer still does not pin by default (finding 4). Wire `acfs update`'s exit
code 2 into whatever alerts you; before v0.9.0 a partial failure looked like
success.

## 3. Carry-forward: safe mode is still not a boundary at v0.9.0; dangerous aliases unchanged

- **Date:** 2026-09-04 (tag read)
- **Channel:** `tagged-release`
- **Ancestry evidence:** Read at tag v0.9.0 (tarball of 5eaf1464): `acfs/zsh/acfs.zshrc` lines 628-637 define, unconditionally and under the header "Agent aliases (dangerously enabled by design)", `cc` = claude `--dangerously-skip-permissions`, `cod` = codex `--dangerously-bypass-approvals-and-sandbox --search -m gpt-5.6-sol -c model_reasoning_effort=xhigh`, and `agy`/`gmi` = `agy-locked`. No MODE conditional in acfs.zshrc. `install.sh` lines 7157-7184: vibe mode writes `/etc/sudoers.d/90-ubuntu-acfs` (or `90-acfs` on Arch) with NOPASSWD:ALL; the safe branch only adds a password-prompted `%wheel` drop-in on Arch and never removes an existing 90-ubuntu-acfs. Same shape as v0.7.0 (install.sh line 4865; zshrc lines 527-531).
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/acfs/zsh/acfs.zshrc#L628-L637
- **Half:** defect | **Confidence:** high

**What changed.** Two things moved, the boundary did not. (a) Since v0.8.0,
`~/.zshrc.local` is sourced last (v0.8.0 line 746, v0.9.0 line 762; v0.7.0
line 238 sourced it before the aliases), so an operator override such as
`alias cc='claude'` now actually sticks; the in-file comment says the earlier
order "silently re-armed them on every new shell". (b) `cod` now pins a model
and xhigh effort on the command line, overriding `~/.codex/config.toml`.

**Operator consequence.** The profile's avoid_for stands at v0.9.0: switching
to safe mode does not revoke an earlier vibe run's sudoers file, and the
dangerous shortcuts ship regardless of mode. New mitigation that works: put
un-dangerous alias overrides in `~/.zshrc.local` on v0.8.0+. On v0.7.0 that did
not work. Note the `cod` model pin is a model-and-effort pin, not a CLI version
pin.

## 4. Bundled agents still float: Codex installs @latest, Claude from the upstream installer

- **Date:** 2026-09-04 (tag read)
- **Channel:** `tagged-release`
- **Ancestry evidence:** `acfs.manifest.yaml` at v0.9.0 line 941: `bun install -g --trust @openai/codex@latest`, falling back to unversioned `@openai/codex`; line 921: Claude updated via a staged verified installer from claude.ai/install.sh. Antigravity default model moved to "Gemini 3.8 Flash (High)" in agy-locked and docs (3b66d00d, cd1c7854 in v0.9.0). Twelve third-party installer checksums re-pinned (GH #374).
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/acfs.manifest.yaml#L941
- **Half:** defect | **Confidence:** high

**What changed.** Checksums of the installer scripts are pinned; the agent
versions those scripts fetch are not. Model defaults for Codex and Antigravity
are pinned in launchers.

**Operator consequence.** A v0.9.0 install on two different days can land two
different Codex CLIs (released-is-not-merged inherited from upstream). Use
`acfs hold codex --version X` after install if you need fleet parity.

## 5. main after v0.9.0: Codex alias re-pinned to gpt-6-astra; Ubuntu 26.04 LTS paths; reviewed plugin installs

- **Date:** 2026-09-04 to 2026-09-21
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 236c6b07ec "fix(codex): persist gpt-6-astra xhigh defaults" 2026-09-04 (compare v0.9.0...236c6b07ec ahead_by=5, behind_by=0) rewrites `cod` in acfs.zshrc, README, onboarding lesson 04, and web copy from `-m gpt-5.6-sol` to `-m gpt-6-astra`, keeping `--dangerously-bypass-approvals-and-sandbox`. 55a7065415 "fix(installer): pin wizard and recovery commands to Ubuntu 26.04 LTS" 2026-09-17 and e257a06418 "feat(upgrade): implement reviewed Ubuntu 26.04 LTS release paths" (ahead of v0.9.0 by 55). Plugins series 2026-09-17/18 (fe39bafbaf through 45a3b9a645, e.g. 655ad8fc33 "expose reviewed plan-to-install CLI with explicit approval", 295d745fd7 "checksum-bound user installs with resumable receipts"); none in a tag.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/236c6b07ec
- **Half:** both | **Confidence:** high on ancestry; medium on plugin semantics (commit titles only)

**What changed.** Main is moving toward a reviewed, digest-pinned, receipt-
bearing plugin installer with explicit approval, which is the first sign of an
approval step inside ACFS's own install flow. None of it is installable from a
tag yet.

**Operator consequence.** Watch whether the next tag carries the plugin
approval flow and whether it covers the bundled agents or only third-party
plugins. A v0.9.0 `cod` pins gpt-5.6-sol; main pins gpt-6-astra: model choice
now depends on which ref you installed.

## 6. Contract watch items: CHANGELOG records versions again; published cost figures unchanged

- **Date:** 2026-09-04
- **Channel:** `tagged-release`
- **Ancestry evidence:** CHANGELOG.md at v0.9.0 has headings for v0.9.0 (2026-09-04), v0.8.0 (2026-08-25), and v0.7.0 (2026-06-26) plus an Unreleased compare link (lines 11-53); the profile's watch_next noted v0.7.0 had no heading. The "$440 -- $656" monthly budget example appears in `apps/web/app/page.tsx` at both v0.7.0 and v0.9.0; the live homepage (HTTP 200 on 2026-09-23) still shows $440.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/CHANGELOG.md
- **Half:** capability (receipts) | **Confidence:** high

**What changed.** The release record is now legible from the repo; the cost
model did not move.

**Operator consequence.** Close the "CHANGELOG has no v0.7.0 heading" watch
item. Cost figures: no change to report.

## Researcher lane notes

Identity confirmed against the contract repo. Scope fence respected: related
repos (Agent Mail, br, bv, NTM, CASS, DCG, SLB) only appear as installer
entries. The v0.7.0 "never installed" claim is the maintainer's, in a release
body at a tag; Frontier did not reproduce it. The v0.8.0 body says the tag was
verified at f659b12a, which matches the tag SHA.

Operator questions settled: "Does the installer pin agent versions and
channels?" -- no for Codex/Claude CLIs at v0.9.0, but per-tool holds now exist.
"Do the bundled safety tools enforce?" -- not re-read this window (dcg hook
fail-open finding stands unverified at v0.9.0; see Not reached). License rider:
not re-read.

## Observed after window close

- 2026-09-23: swarm series on main (d2e4ebfaaf "add admission-checked native agent startup with durable intent", 34eee93b34 "integrate native launch into verified installation and CLI"), f489c43a77 update pin-retry fix. main-unreleased; OUT.

## Surfaces checked

- gh api repos/Dicklesworthstone/agentic_coding_flywheel_setup (identity, pushed_at)
- gh api releases v0.8.0 and v0.9.0 (bodies, prerelease flags, published_at); tags list
- gh compare v0.7.0...v0.8.0 (433/0), v0.8.0...v0.9.0 (61/0), v0.9.0...main (125/0), v0.9.0...236c6b07ec (5/0), v0.9.0...655ad8fc33 (54/0), v0.9.0...55a7065415 (55/0)
- gh api commits 2026-08-20..2026-09-22 (433) and 2026-09-04..2026-09-22 (86 subjects read)
- tarballs at v0.7.0, v0.8.0, v0.9.0: install.sh (ACFS_VERSION, NOPASSWD, mode branch), VERSION, acfs/zsh/acfs.zshrc (aliases, .zshrc.local order), acfs.manifest.yaml (codex/claude install lines), CHANGELOG.md headings, apps/web/app/page.tsx cost figures
- commit 236c6b07ec diff
- curl https://agent-flywheel.com/ (200)

## Not reached

- Reproduction of the v0.7.0 integrity-check failure or of a v0.9.0 install.
- DCG Antigravity hook fail-open posture and the LICENSE rider at v0.9.0 (not re-read).
- Semantics of the main-only plugins approval flow beyond commit titles.
