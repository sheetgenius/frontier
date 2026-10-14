---
schema_version: bitter.frontier_harvest.v0
provider: agent-flywheel
window: 2026-09-21..2026-10-13
run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
source_contract: sources/agent-flywheel.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased, mixed, docs-only]
window_volume: 1 stable tag (v0.10.0, 173 commits past v0.9.0), 1 binary-mirror prerelease, reconstructed UTC cutoff f405ac94 480 ahead of stable and 565 window-dated reachable commits; 25 numbered observations, 15 capability-bearing and 20 defect-bearing (both counts include mixed observations)
lane: primary sources, profile-refresh researcher
---

# Harvest: agent-flywheel (primary sources)

Punctuation is ASCII. Identity: `gh api repos/Dicklesworthstone/agentic_coding_flywheel_setup` returns full_name Dicklesworthstone/agentic_coding_flywheel_setup, owner Dicklesworthstone, description "Bootstraps a fresh Ubuntu VPS into a complete multi-agent AI development environment in 30 minutes: coding agents, session management, safety tools, and coordination infrastructure", default_branch main, pushed_at 2026-10-13T07:54:59Z. That is the contract's priority-1 repo. `main` and `master` point at the same commit (0bf744a8), as the v0.10.0 notes say ("These changes are on both main and master"). Read through a blobless clone with tags fetched (ancestry), codeload tarballs of v0.9.0, v0.10.0 and main at 0bf744a81c319accaa62d763bce97073ac693ef5 (file reads), and `gh api` (release objects, issues, advisories). Cloned code was read, never executed. The original researcher reports downloading and hashing upstream installer scripts without running them; no per-URL record of that October 13 live observation was retained. The official site https://agent-flywheel.com/ serves content built after v0.10.0 (it publishes the main-only /cloud-agents page). Parent baseline: v0.9.0, with main 125 ahead on 2026-09-23. The morning snapshot is not the inclusive cutoff: reachable first-parent history selects f405ac94b84104ebcbf721fb0e4f6345a0ee154d at 2026-10-13T23:42:55Z. This reconstruction is not an archived midnight remote tip. No October 14 commit or mirror upload enters the window.

## Install today

- **Newest stable:** [v0.10.0](https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.10.0), published 2026-10-03T01:52:21Z, source-only, no uploaded binary assets. The release command is `curl -fsSL "https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.10.0/install.sh" | bash -s -- --yes --mode vibe --ref v0.10.0`. It is an evaluation entrypoint, not a full-install qualification.
- **Qualification:** the maintainer reports eight passing critical smoke checks but installer exit 1 after uv/dcg checksum refusals. The October 4 repin is outside stable, later in the mirror source tree. The closure still asks for a factory re-run. See section 1.
- **Two references:** a version tag pins ACFS scripts, while `ACFS_CHECKSUMS_REF` defaults to main. `--checksums-ref <sha>` fixes acceptance policy, not availability of moving upstream bytes. Static ledger equality is 27/48 at stable and 18/48 at baseline against the pinned morning snapshot; the unretained 48/48 live claim is not promoted. Receipt: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L173-L185.
- **Moving shortcuts:** the tagged /install route and README Quick Install use main; the tagged production example still names v0.9.0. HTTP results in the original harvest are October 13 researcher observations; the independent re-fetch on October 14 cannot establish earlier deployment. Receipt: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/apps/web/app/install/route.ts#L14-L19, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/README.md#L30-L56.
- **Registry:** the root, manifest and web packages are private; checked npm names agentic-coding-flywheel-setup, @acfs/manifest and @acfs/web returned 404. There is no publication or dist-tag for these names, not a universal registry-absence claim.
- **Prerelease:** cloud-binaries-v1, published October 9, mirrors JSM 0.3.25 and UBS 5.4.17 during the window; UBS 5.5.0 was uploaded October 14 and is excluded. Its source tree contains initial cloud, fleet and other post-stable changes, but the assets are not an ACFS upgrade. Subsequent hardening is main-unreleased. See sections 9 and 10.
- **Cutoff:** morning 0bf744a8 is 459 ahead of stable; reconstructed cutoff f405ac94 is 480 ahead and 0 behind, with 565 reachable window-dated commits. No v0.11.0 tag or release was found. The Unreleased changelog is empty. Receipt: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/compare/v0.10.0...f405ac94b84104ebcbf721fb0e4f6345a0ee154d.
- **Stable opt-ins:** explicit --target-ubuntu=26.04 (unqualified by the release), reviewed plugin execution with --yes plus --accept-plan, and swarm launch with --launch. The launcher previews by default. See sections 3, 7 and 8.
- **Existing hosts:** the nightly attempts agent/tool updates at 04:00 local with up to five minutes of jitter when resource gates permit. Holds, backoff, checksum refusals and install failures can prevent changes. It disables self-update by default; ACFS_NIGHTLY_SELF_UPDATE=true opts in. Self-update can discover a separate checkout outside ~/.acfs even on a tarball-deployed host; if none is found, explicit --bootstrap-self-update can create a main checkout. Self-update follows origin/main, not a documented tag-to-tag upgrade. Receipt: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L302-L335, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/nightly_update.sh#L519-L534, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/templates/acfs-nightly-update.timer.

## Release ledger

| Tag | Published (UTC) | Prerelease | Tag commit | ahead_by / behind_by vs previous stable | Registry publish |
|---|---|---|---|---|---|
| v0.9.0 (baseline) | 2026-09-04T04:45:16Z | false | 5eaf1464 (2026-09-04T04:38:57Z) | 61 / 0 vs v0.8.0 | none: no registry package |
| v0.10.0 | 2026-10-03T01:52:21Z | false | aff61992 (2026-10-03T01:29:30Z), tag object 86226099 | 173 / 0 vs v0.9.0 (compare status ahead) | none |
| cloud-binaries-v1 | 2026-10-09T17:41:29Z | true | e5eb614d, lightweight (2026-10-09T17:40:52Z) | 303 / 0 vs v0.10.0; binary mirror, not an ACFS release | none (2 GitHub release assets) |

Morning main at observation (2026-10-13T09:00Z) is 0bf744a8, 459 ahead of stable with 544 reachable window-dated commits. Reconstructed UTC cutoff f405ac94b84104ebcbf721fb0e4f6345a0ee154d is 480 ahead and 0 behind, with 565 reachable window-dated commits. The 21 additional commits are in the bounded compare at https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/compare/0bf744a81c319accaa62d763bce97073ac693ef5...f405ac94b84104ebcbf721fb0e4f6345a0ee154d. This is timestamp-based history reconstruction, not an archived midnight remote-tip receipt. Stable has no uploaded assets by design.

## 1. v0.10.0 withholds full-install qualification and reads its checksum ledger from main

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** Release published_at 2026-10-03T01:52:21Z, prerelease=false, peeled commit aff6199215cf6396e3ace3053cad1dc4e26ce7cc, no uploaded assets; 173 ahead of v0.9.0. The 2026-10-04 repin 8616be9c is absent from stable and contained in the cloud-binaries-v1 source tree. The tagged installer defaults version-tag/SHA checksum refs to main. Static ledger comparison: 27/48 stable URL/hash pairs and 18/48 baseline pairs equal the corresponding pairs at 0bf744a81c319accaa62d763bce97073ac693ef5.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.10.0, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/427, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/427#issuecomment-5981082040, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L173-L185, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L3998-L4022, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/checksums.yaml, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/checksums.yaml, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/8616be9cd387e4258752f98e4b18922a098d3819
- **Half:** defect | **Confidence:** high

**What changed.** The newest stable is a source installer whose release explicitly declines to claim a successful full factory installation. The maintainer reports that the published tag retained Ubuntu 24.04.5 and passed eight critical smoke checks but exited 1 after uv and dcg checksum refusals. On 2026-10-04 the maintainer closed #427 after reviewing and repinning those upstream bytes, while still calling for a factory re-run. The repin is outside stable but can affect a tagged install because its ledger defaults to main; acfs update refreshes from main independently. Comparing the pinned ledgers establishes 21 changed URL/hash pairs since v0.10.0, not a retained receipt that every upstream URL served matching bytes on October 13. The original live 48/48 assertion stays an attributed lead.

**Operator consequence.** For a disposable evaluation host, use the release entrypoint with --ref v0.10.0 and record the checksum-ledger revision separately. --checksums-ref <sha> fixes which hashes are accepted; it does not preserve the moving upstream downloads or guarantee installation. Inspect the exit code, failure list and acfs doctor before handing work to the host. No complete post-repin factory run is established in this record.

## 2. Checksum publication stalled three times; main now defers an unauthorized tool instead of every repin

- **Date:** 2026-10-12
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 2354efba and 400601d2 are ancestors of the cutoff, absent from v0.10.0 and cloud-binaries-v1. Monitor docs describe a 15-minute timer in a dedicated maintainer clone. The maintainer reports a 1,450-plus run earlier streak, a 376-run recovery on October 10, and a final 175-run recovery at 2026-10-12T19:31:02Z. The commit cites 174 as an intermediate count. Independent issue search found 34 external-authorization issues, #405 through #447, opened September 22 through October 12.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2354efbaa6b355b93a53d6052fcc8f56950893b1, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/400601d2a7ae3894c89fc52cc03b2e20bda16cc9, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/433#issuecomment-6131196991, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/433#issuecomment-6135303881, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2a595c42b107cdf4ae0a78387847b14221f37d38, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/README.md#L2873-L2886
- **Half:** both | **Confidence:** high

**What changed.** External installer bytes need human authorization before their digest changes; installers in the maintainer namespace can be repinned automatically. The maintainer attributes three fail-closed publication streaks to stale state, a Bun hard-link problem and a pending external review, and reports fleet-wide update failure during the last one. Its completed count was 175, not the intermediate 174 in the fix commit. The October 12 patch leaves an unauthorized tool on its old pin, opens one issue per digest, and publishes other eligible changes. A follow-up binds candidate construction to one observation. The October 13 status comment reports healthy runs on the fixed revisions; this is the maintainer timer's status, not an independent fleet observation.

**Operator consequence.** Alert on updater exit 2 and inspect the refused tools. Claude and Codex update paths honor holds; holds are not universal at stable (section 14). A stale tool can remain unavailable even when other repins publish. Human byte review remains deliberate authority, while coupling every repin to one pending review was avoidable serial work. Watch a stable tag containing the deferral and retained timer health, rather than inferring recovery from a merge.

## 3. Ordinary installs now keep the host's Ubuntu LTS; v0.9.0 defaulted to upgrading toward 25.10, which ACFS's own code now calls end-of-life

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** adda9880 "fix(installer): preserve supported LTS hosts by default" (2026-10-02) is an ancestor of v0.10.0 (2 commits before the tag) and not of v0.9.0. v0.10.0 install.sh L6632-L6641: unless `--target-ubuntu` is explicit, "Keeping the current Ubuntu release; use --target-ubuntu=26.04 to request an upgrade." v0.9.0 install.sh L467 `TARGET_UBUNTU_VERSION="25.10"`, and L6325-L6343 skip the upgrade on an LTS host only when `apt list --upgradable` counts zero; v0.9.0 scripts/lib/ubuntu_upgrade.sh L4 and L12 "default: 25.10", path 24.04 -> 25.04 -> 25.10 (L411-L413). v0.10.0 scripts/lib/ubuntu_upgrade.sh L849: "Ubuntu 25.10 is end-of-life and must upgrade to 26.04 LTS". Post-stable follow-ups, contained in the mirror source tree: 5c8b6a70 (2026-10-04) says 25.10 "went end-of-life on 2026-07-09" and that the setup wizard had told beginners to pick "25.10 (preferred)"; 57a3ba44 (2026-10-09) says "Ubuntu 25.10 -> 26.04 recovery failed twice on a real 25.10 cloud image".
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L6632-L6641, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/install.sh#L6325-L6343, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/ubuntu_upgrade.sh#L840-L852, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57a3ba443d90e8b482b87c1377c094ca62ef6c24, https://lists.ubuntu.com/archives/ubuntu-announce/2026-July/000325.html
- **Half:** both | **Confidence:** high

**What changed.** Before v0.10.0 the installer was also a distribution upgrader. Unless the operator passed `--skip-ubuntu-upgrade`, a 22.04 or 24.04 LTS host with any pending package update was walked through reboot-driven release upgrades toward 25.10, an interim release; the code's own comment concedes LTS users "should not be forced to upgrade to a non-LTS target". v0.10.0 inverts the default. Ordinary installs keep a supported LTS, and an upgrade happens only with an explicit `--target-ubuntu` of 22.04, 24.04 or 26.04, with `--skip-ubuntu-upgrade` winning in either argument order. Non-root sudo, Docker and WSL installs no longer enter the root-only reboot phase. The release leaves the opt-in 26.04 upgrade unqualified. The same tag's upgrade library calls 25.10 end-of-life, and the maintainer dates that to 2026-07-09, so v0.9.0 (2026-09-04) was steering LTS hosts toward a release that had already lost support, independently confirmed by Canonical at https://lists.ubuntu.com/archives/ubuntu-announce/2026-July/000325.html. A post-stable fix contained in the mirror source tree records that recovery from 25.10 to 26.04 failed twice on a real 25.10 image: stock 25.10's `env` lacks `--default-signal`, and old-releases still returned 404 for that release on 2026-10-09.

**Operator consequence.** Use v0.10.0 for new hosts: it leaves 22.04 and 24.04 alone, which is what most operators want from a tool installer. Check `/etc/os-release` on hosts built with v0.9.0 or older. If one is on 25.10, rebuild it on a 24.04 or 26.04 LTS image rather than relying on the v0.10.0 recovery path, which the maintainer's post-stable fix reports failed on a real image. If you want 26.04 in place, pass `--target-ubuntu=26.04` knowing the release does not qualify that path. This is scaffolding removed: the installer stopped acting as a distribution manager by default.

## 4. v0.10.0 redacts tokens in self-update origin warnings, including discovered checkouts

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** 63f24b80, committed 2026-09-26, is in v0.10.0 and not v0.9.0. The tagged updater removes URL userinfo before origin comparison and all three warnings. Self-update can discover a separate source checkout even when the deployed runtime is a tarball. No matching public ACFS advisory was found in the checked repository advisory list, GHSA query and NVD name searches; this is a bounded search result.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/63f24b80d2aca35ea34513ec181ab0e29029b96b, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L938-L973, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L5512-L5619, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L302-L335
- **Half:** defect | **Confidence:** high

**What changed.** Git remote get-url applies insteadOf rewrites, so a credential-bearing GitHub URL could reach the old unexpected-origin warning. The fix commit reports tokens printed into update logs and world-readable /data/tmp logs, with two hosts stranded on old code after origin rejection. Stable strips the userinfo and accepts the intended GitHub origin. The affected path runs where self-update discovers or bootstraps a Git checkout, including /data/projects/agentic_coding_flywheel_setup, /dp/agentic_coding_flywheel_setup or $HOME/agentic_coding_flywheel_setup outside a deployed ~/.acfs tarball. A person reading an affected log could exercise the token's granted GitHub access; no live exposure was reproduced.

**Operator consequence.** If an older deployed updater used credentialed insteadOf rewrites, inspect retained update and /data/tmp logs and rotate any exposed token. Absence of ~/.acfs/.git is not an exemption. Deliver the corrected updater runtime deliberately; the nightly disables self-update by default, with ACFS_NIGHTLY_SELF_UPDATE=true as an opt-in. Do not describe the empty advisory searches as proof that no advisory or vulnerability exists.

## 5. The v0.9.0 nightly rewrote ~/.claude/settings.json every night; v0.10.0 stops it

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** 2a595c42 (2026-09-22) is an ancestor of v0.10.0 (77 commits before the tag) and not of v0.9.0. v0.9.0 scripts/lib/update.sh L7169 runs `update_run_verified_installer ubs --easy-mode`; v0.10.0 L7298-L7305 adds `--skip-hooks`, and acfs.manifest.yaml L2373-L2376 does the same for installs. Issue #400 was filed 2026-09-19 by a user, with log excerpts, and closed 2026-09-22.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/400, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L7298-L7305, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/scripts/lib/update.sh#L7169, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/2a595c42b107cdf4ae0a78387847b14221f37d38
- **Half:** defect | **Confidence:** high

**What changed.** Per #400, the 04:00 nightly first removed the legacy `git_safety_guard` hook, then three minutes later ran the UBS installer with `--easy-mode` from `$HOME`. That auto-accepted the installer's hook prompts, reinstalled `git_safety_guard.py`, and rewrote the user-level `~/.claude/settings.json` with project-relative hook paths, so every Bash and Edit call in every project reported a missing-hook error and the on-save scan never ran. v0.10.0 passes `--skip-hooks` in both the nightly and the manifest install; the commit says "ACFS owns agent hooks." The same commit makes `acfs doctor --fix --yes` actually forward `--yes` (before, it applied nothing) and lets unexpired holds pass doctor.

**Operator consequence.** On any host still running a v0.9.0 ACFS tree, inspect `~/.claude/settings.json` for UBS-added hooks and a `git_safety_guard` entry, and expect them back after each 04:00 run until the tree itself is updated, since the nightly will not update it. This was the installer rewriting Claude Code's global settings without asking, every day. That is the kind of default this watchlist tracks, and v0.10.0 fixes it.

## 6. A failed DCG install now fails the install; on v0.9.0 it could finish green with exit 0

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** 24b5c423 (2026-09-07T00:44:36Z) is an ancestor of v0.10.0 (156 commits before the tag) and not of v0.9.0. v0.10.0 install.sh L5180-L5201: `acfs_optional_module_install_failed` records a module the manifest marks required as a failure, and main exits non-zero; acfs.manifest.yaml L2639-L2644 marks `stack.dcg` `optional: false`. The v0.10.0 release body: "Current required-DCG failure reporting is an intentional change from the old warning-only verdict." Still warn-only at the tag: the finalize step's Claude Code hook registration (install.sh L10988-L10991, "DCG hook installation failed (optional)"), and the Antigravity hook still answers allow when dcg is unavailable (scripts/lib/agy_locked.py L155-L157, L195-L203).
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/24b5c42303fe98afa2c2cb759cfe97c485616961, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L5180-L5201, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L10988-L10991
- **Half:** defect | **Confidence:** high

**What changed.** The commit records the old failure mode. Nine tools the manifest marks required (br, bv, cass, cm, caam, dcg, ru, ubs, ms) could fail in the legacy stack phase, which is what a plain `curl | bash` runs, and still be listed under an Optional heading below a green Installation Complete! banner with exit 0. v0.10.0 counts them as failures and exits non-zero, which is why the v0.10.0 factory run reported exit 1 when the dcg checksum was refused (#427). The guard's binary is now required. Registering its Claude Code hook in the finalize step is still logged as optional, and the Antigravity hook still allows commands when dcg cannot run.

**Operator consequence.** On hosts built with v0.9.0, confirm that `dcg` is installed and its hook registered: a green install was not evidence of either. On v0.10.0, treat a non-zero installer exit as real, read the failure list, and still check the hook-registration line in the log. The install-time verdict got honest; the runtime posture, allow when the guard is missing, did not change.

## 7. Swarm launch reached the tag: it gates how many agents start, not what they may do

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** d2e4ebfa and 34eee93b (2026-09-23 UTC, the parent harvest's after-close main-only leads) and 27d272a3 (2026-09-24, fleet capacity over SSH) are ancestors of v0.10.0 and not of v0.9.0; 236c6b07 (2026-09-04, "persist gpt-6-astra xhigh defaults") is in v0.10.0. v0.10.0 scripts/lib/swarm_launch.sh L184-L188 spawns through `ntm --robot-spawn ... --spawn-cc=N --spawn-cod=M ... --spawn-safety`; L641 adds `--launch`; L693 builds a hash-bound launch command. docs/operations/swarm-launch.md L1-L21: it supports 1 to 32 native Claude and Codex agents, and "NTM's configured commands, models and normal permission policy remain in effect." install.sh L9748-L9765 writes `~/.config/ntm/config.toml` only when absent; its Codex command at L9762 is `codex --dangerously-bypass-approvals-and-sandbox --search -m <model, default gpt-6-astra> -c model_reasoning_effort=<default xhigh>`. v0.9.0's template (install.sh L9384-L9399) set only model names. acfs/zsh/acfs.zshrc L638 at v0.10.0 pins `cod` to gpt-6-astra (v0.9.0 L633: gpt-5.6-sol).
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/swarm-launch.md#L1-L21, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/swarm_launch.sh#L184-L188, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L9748-L9765, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs/zsh/acfs.zshrc#L633-L642
- **Half:** both | **Confidence:** high

**What changed.** v0.10.0 is the first tag with `acfs swarm launch`. It previews by default, with live ACFS and NTM resource admission, then a separate hash-bound `--launch` starts 1 to 32 native Claude and Codex agents in a new tmux session and writes a durable launch receipt. Warnings need `--accept-warnings`; pressure or a hard blocker always stops it. The tag also ships `acfs swarm assign`, which proves non-overlap only among declared file scopes, and fleet capacity probes over SSH. What it does not gate is authority. The doc says NTM's configured commands and "normal permission policy remain in effect", and the NTM config ACFS writes on a fresh host now spells out Codex as `--dangerously-bypass-approvals-and-sandbox` at gpt-6-astra with xhigh effort. The `cod` alias moved to the same model on the tag, so tag and main now agree on the model. Executing launches across several hosts is absent from stable; 99c91d71 is contained in the mirror source tree (section 10).

**Operator consequence.** Before the first `--launch`, decide what a Codex pane may do. Edit `~/.config/ntm/config.toml` (ACFS writes it only when absent) if you do not want approvals and the sandbox bypassed, and remember the doc's warning that launching "can start paid provider processes", up to 32 per host. The human gate moved from starting each agent to approving one hash-bound launch and reviewing packets before dispatch. It batches launch decisions, but no measured attention saving was established, and the agents still run with the configured bypass flags. `cod` and NTM Codex panes now use gpt-6-astra on the tag; override both in `~/.zshrc.local` and the NTM config if your evals depend on another model.

## 8. Reviewed plugin installs shipped in v0.10.0, for third-party plugin archives only

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** 655ad8fc and 295d745f (2026-09-17; main-only in the parent harvest) are ancestors of v0.10.0 (119 and 120 commits before the tag) and not of v0.9.0. docs/operations/plugin-review-workflow.md at v0.10.0: L1-L13 (the narrow path; preview by default, `--yes` plus `--accept-plan` to execute), L42 (run as the target user, "not through sudo"), L59-L61 (it "does not migrate ACFS's root installer defaults"), L172-L193 (`setpriv --no-new-privs`, "not a filesystem or network sandbox"), L320-L326 (only baseline capabilities; root/current-user modules and default-enabled plugins refused).
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L1-L13, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L186-L193, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/655ad8fc336b0f15b8eaaec116a5c33127051aef
- **Half:** capability | **Confidence:** high

**What changed.** `bun run plugin:install`, run from a trusted checkout's packages/manifest, previews by default and executes only with `--yes` and the exact `--accept-plan` fingerprint. The fingerprint binds archive provenance, the external review, the target OS, checksums, the selection, installer bytes and arguments, and a saved plan is never accepted as authority. The scope is narrow by design: target-user installs only, three baseline capabilities, root and current-user modules refused, default-enabled plugins refused. Installers run under `setpriv --no-new-privs`, which the doc says is not a filesystem or network sandbox. The flow does not touch the root installer, the bundled agents, the aliases or the Antigravity policy.

**Operator consequence.** This answers the profile's watch item: the approval step reached a tag, and it covers third-party plugins, not the agents ACFS installs. Use it if you add tools beyond the stock stack. It provides an exact-plan approval path for these plugins; no complete historical review establishes a first-ever claim. Do not read it as a sandbox, and do not expect it to change `cc`, `cod` or `agy`.

## 9. Cloud setup hash-checks downloaded bundles but retains existing tools; stable does not contain it

- **Date:** 2026-10-08
- **Channel:** `mixed`
- **Ancestry evidence:** c816842e, 1f6b4bce, 19323256 and d9fd6e4b are absent from v0.10.0 and in cloud-binaries-v1's source tree (preview-or-beta ancestry). 5bcb9293, 31c81808 and ac10578b are absent from both tags (main-unreleased). The mirror is a binary publication for JSM and UBS, not a qualified ACFS preview upgrade. Recipes and ACFS_REF default to main. Its two in-window assets exclude UBS 5.5.0 uploaded October 14.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/claude-code-web-setup.sh#L154-L165, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/e5eb614dff527ec280f9fdd711cc2c58de9958df/scripts/claude-code-web-setup.sh, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/cloud-mirror.json, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/README.md#L468-L520, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/cloud-binaries-v1, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/issues/437
- **Half:** capability | **Confidence:** high

**What changed.** A new cloud-specific path supplies ten selected coordination tools without VPS provisioning, upstream installers or source builds. It hash-checks newly downloaded mirror bundles and keeps existing callable tools by default without matching their bytes or versions to the manifest; ACFS_CLOUD_REINSTALL=1 requests replacement. Claude mode registers Agent Mail as user-scope stdio MCP; Codex and generic modes get CLI access and a guide without that registration. It writes no user, sudoers file, OS upgrade or agent permission setting. Tool failures are logged while setup exits 0. The original researcher observed the official site advertising the main-fetching path on October 13. #437 is a user report of 55/55 executable checks and upstream Git writes rejected with 403, not independently reproduced provider behavior.

**Operator consequence.** Trial this only in a disposable cloud environment with script and ACFS_REF fixed to the same reviewed SHA. Inspect setup and per-tool logs plus actual executable versions; exit 0 and a manifest are not full-setup receipts. The initial implementation has mirror-source ancestry, later hardening is untagged, and neither is stable. This makes selected coordination tooling portable; it does not establish migration of accumulated state or the first-ever non-provisioning/pinning path. The unchanged tagged license rider merits review for intended hosted use; no enforceability conclusion is offered.

## 10. Post-stable source changes consent order, recovery, fleet execution and credential visibility

- **Date:** 2026-10-04..2026-10-13
- **Channel:** `mixed`
- **Ancestry evidence:** e2d7f935, 5c8b6a70, 40a0031b, 57a3ba44, 99c91d71 and 75d5e6db are absent from stable and ancestors of cloud-binaries-v1 (preview-or-beta source only). 33e41b1d and the credential-status series 19646480, e9afef5c, 7b6dd2c0 and 7411fd3f are absent from both tags (main-unreleased). Morning 0bf744a8 was 459 ahead; reconstructed UTC cutoff f405ac94 is 480 ahead and 0 behind. v0.11.0 candidate is only a merge-subject label, not a tag or released version.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/compare/v0.10.0...f405ac94b84104ebcbf721fb0e4f6345a0ee154d, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/e2d7f9358050a0f86d31e05badeb818e258b2d5f, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L12143-L12189, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57a3ba443d90e8b482b87c1377c094ca62ef6c24, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/99c91d7195fc8dfeae3f853d5dcb81dc6588e460, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/docs/operations/swarm-fleet-launch.md, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/1964648021e21cb9babbb1fe89206b9f096f2322, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/7b6dd2c00b9d3c027dfc79493279fd05091dbc53, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/7411fd3f3a89e47d8df4167ebc0912685bf544bf
- **Half:** both | **Confidence:** medium

**What changed.** Stable can change base packages before an interactive Proceed confirmation; e2d7f935 moves ensure_base_deps after that confirmation, with --yes unaffected. This is a narrow ordering fix, not a guarantee that no earlier bootstrap or explicit upgrade mutates the host. The recovery patch addresses the maintainer-reported Ubuntu 25.10 failures and removes Meta Skill ARM64 refusal (section 24). Multi-host fleet code adds dispatch, Git-bundle collection, candidate testing and guarded integration/publication over explicit SSH hosts. Later untagged work adds agent-readiness, credential-source status, OAuth lifecycle and vault references. The concrete permission, packet-redaction and website dependency mechanisms are recorded separately in sections 16 through 18.

**Operator consequence.** None is a stable ACFS upgrade; source containment in the binary mirror does not qualify a preview installer. Keep sensitive use on a reviewed stable tree and watch the next real tag for interactive consent order and exact fleet authority gates. Recovery, live fleet throughput and hosted readiness were not reproduced. Read the full bounded compare because the Unreleased changelog is empty.

## 11. v0.10.0's changelog describes the LTS fix and test limits, not most of what the tag ships; cost, license and lineup unchanged

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** CHANGELOG.md at v0.10.0 L13-L49 holds one v0.10.0 section: five bullets on the LTS default, privileged checkpoint reads, regression coverage, test-suite limits, and the factory result. The 173-commit compare also carries the swarm launcher, plugin installs, the gpt-6-astra re-pin, the credential-log and nightly-settings fixes, and the required-module verdict, none named there. apps/web/app/page.tsx L1063 at v0.10.0 and at 0bf744a8 shows the same "$440-$656/month" estimate as v0.9.0 (L901), and the live homepage showed it on 2026-10-13. LICENSE has the same SHA-256 (32a82e0a...) at v0.9.0, v0.10.0 and 0bf744a8. Manifest roster at v0.10.0: agents.claude L882, agents.codex L932 and agents.antigravity L1082 are default-enabled; gemini (legacy), opencode, omp and grok are optional and off, as at v0.9.0 and main. Post-stable, mirror-source 5f17293b (2026-10-05) adds a VPS cost note to the setup wizard (commitment terms), not a new budget figure.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/CHANGELOG.md#L13-L49, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/compare/v0.9.0...v0.10.0, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/apps/web/app/page.tsx#L1063, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/LICENSE
- **Half:** defect | **Confidence:** high

**What changed.** The profile credited v0.9.0 with legible receipts. v0.10.0 keeps a dated heading, but its entry is a qualification memo. A reader of the changelog would not learn that `cod` changed model, that `acfs swarm launch` and plugin installs arrived, or that a token-logging bug and a nightly settings rewrite were fixed. The README at the tag still offers v0.9.0 as its pinned example and says "Tagged releases are tested and stable," while the release body declines to claim a full install. Budget, license and the default agent lineup did not move.

**Operator consequence.** Before upgrading, read the compare (173 commits), not the changelog. Cost: nothing to report; the $440-$656/month figure is still the project's own example stack, not market pricing. The license rider and the three-agent default stand unchanged.

## 12. Stable updater locking now excludes root and user runs targeting the same home

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** 4501dd0a committed 2026-09-23T01:00:47Z; ancestor of stable, mirror and cutoff, absent from v0.9.0.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/4501dd0a47ccb90f31d1abe98966589df43694a8, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L61-L125, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/updater-locking.md
- **Half:** both | **Confidence:** high

**What changed.** The updater locks the resolved target-home directory before discovery, logging, self-update or component work. Root and target-user invocations against that home now contend; missing prerequisites or lock errors stop work. Busy returns 75 rather than a successful skip. Different target homes can still proceed independently. The guide requires all older updater processes, including queued runs, to finish before mixing in the new protocol. This is cooperative exclusion, not a sandbox against installed tools.

**Operator consequence.** Teach update automation that 75 means no update ran, distinct from exit 2 partial failure. Drain old updater processes before deploying the new runtime; different lock identities cannot exclude each other across versions.

## 13. Stable adds bounded isolated-account rehearsal before launching paid agents

- **Date:** 2026-10-03
- **Channel:** `tagged-release`
- **Ancestry evidence:** 622dd518 and 56a4da4e committed September 22 UTC; ancestors of stable, mirror and cutoff, absent from v0.9.0.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/agent-profile-rehearsal.md, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/622dd51845a34055d0e9ba171b0f611f0a651772, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/56a4da4ec9225a4041be96e3326af05593182326
- **Half:** capability | **Confidence:** high

**What changed.** The trusted-checkout helper accepts one to eight selected CAAM isolated profiles, previews by default and requires --run for bounded local checks. --native-auth queries Claude auth status and Codex login status through the same isolation; stricter --require-native-auth rejects inconclusive or unsupported results. Reports exclude raw captures and can be exported to a new mode-0600 file. It performs no login, account rotation or model prompt and does not establish server token validity, expiry, quota or successful model work. This tagged helper is distinct from later installed agent-readiness work.

**Operator consequence.** Rehearse selected identities before starting paid panes, then resolve missing login or quota separately. A pass is local status/startup evidence; it is not authority to launch or a provider-acceptance receipt.

## 14. Source-built aadc and rust_proxy bypass stable holds; the mirror source adds the missing check

- **Date:** 2026-10-07
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** 17609ca3 is absent from stable, present in mirror source and cutoff. Read stable helper and actual callers; ASB uses the verified-installer path, so the commit's three-tool generalization is not adopted.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/17609ca34bb5b20acd303ac4ada1ce808f1dd7dc, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L4520-L4575, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L7380-L7411, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L5001-L5023
- **Half:** both | **Confidence:** high

**What changed.** The stable cargo source-build helper clones and rebuilds aadc and rust_proxy without a hold check. The October 7 fix checks holds before cloning and records the source revision so an unchanged build can be skipped. It is contained in the mirror source tree but not delivered as an ACFS binary upgrade. Stable Claude/Codex hold checks remain; the generic claim that every tool freezes is false. Binary backups are best-effort and a failed backup leaves no rollback candidate. No build-time saving was measured here.

**Operator consequence.** Verify the updater path for a tool before treating its hold as a freeze. On stable, do not rely on holds to stop aadc/rust_proxy source builds. Check that a usable .prev binary exists before relying on rollback.

## 15. Brenner installation could overwrite coordination tools ACFS had just installed

- **Date:** 2026-10-08
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** 070af7b3 is absent from stable and present in mirror source and cutoff. Stable manifest passes only --skip-cass; the fix adds --skip-ntm and --skip-cm to both install paths.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/070af7b326b01000436b09262f0767f99b8fe49d, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs.manifest.yaml#L2804-L2818
- **Half:** defect | **Confidence:** high

**What changed.** The maintainer reports Brenner Bot's pinned NTM 1.8.0 and CM 0.2.3 replacing newer versions installed earlier by ACFS. The diff confirms that stable fresh-install arguments omit those skip flags while the post-stable patch supplies them. This source-level protection is in the mirror tree, not a stable ACFS upgrade; the overwrite was not reproduced locally.

**Operator consequence.** After a stable fresh install, inspect actual NTM and CM versions before swarm acceptance. A tagged ACFS source does not prove later installers preserved the assembled tool versions.

## 16. Post-stable root runtime permission repair had a user-controlled symlink race

- **Date:** 2026-10-10
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 57921111 is in neither stable nor mirror, but is in the cutoff. The affected runtime-mode repair series began after stable; this particular regression is not assigned to v0.10.0.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57921111a17405bc709c2fdc841b5fb3d57785cc, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/scripts/lib/update.sh#L3666-L3681
- **Half:** defect | **Confidence:** high

**What changed.** The prior post-stable repair let root chmod entries inside another user's runtime tree. That owner could swap an enumerated path for a symlink before chmod and cause root to change the target's permissions; the commit gives /tmp losing shared write access as an example. The fix skips root repair unless root owns the runtime, leaving user-owned repair to its owner. This is a conditional permission-change/denial-of-service mechanism, not a reproduced exploit or proof of remote code execution.

**Operator consequence.** For main evaluations, inspect the runtime-owner guard before invoking update as root. Do not label stable vulnerable to a regression introduced after it.

## 17. Shareable task packets retained raw data beside sanitized briefs

- **Date:** 2026-10-10
- **Channel:** `main-unreleased`
- **Ancestry evidence:** ae06b55c is in neither tag and is in the cutoff. Stable swarm_packet.sh passes the raw bead object into bead.source, separately from the sanitized brief.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/ae06b55cab0f0862776e5cbbe30b3a6e6f75dc97, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/swarm_packet.sh#L615-L650
- **Half:** defect | **Confidence:** high

**What changed.** A sanitized task brief coexisted with a duplicate raw Bead object in packet JSON, so credentials in task fields could still reach packet recipients. The October 10 patch removes that duplication, sanitizes titles and labels and extends service-key/webhook masking in packet and support artifacts. The fix remains untagged. This establishes conditional exposure through the export path, not that any particular secret leaked.

**Operator consequence.** Inspect every field of retained packet JSON and support artifacts before sharing them, including raw source, titles and labels. Sanitized Markdown alone is insufficient evidence that the exported object is safe.

## 18. Website dependency fixes change one lockfile; six advisories have conditional mechanisms

- **Date:** 2026-10-11
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 37f5c6de is in neither tag and is in the cutoff. Root stable lock selects Next 16.1.4 and Sharp 0.34.5; the patch selects 16.4.0 and 0.35.5. The separate web lock still selects Next 16.1.0 and Sharp 0.34.5 at the pinned morning snapshot. Advisory API dates and ranges were read independently; no deployed website SHA was established.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/37f5c6defa9ad2757c0becce72c3eca4ab0edd66, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/bun.lock, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/apps/web/bun.lock#L675, https://github.com/advisories/GHSA-cjq9-62q9-8jv4, https://github.com/advisories/GHSA-39w2-rjm5-chcv, https://github.com/advisories/GHSA-f87g-xv8r-7p7x, https://github.com/advisories/GHSA-mcj8-r9mp-w47p, https://github.com/advisories/GHSA-4jqv-mc3x-m676, https://github.com/lovell/sharp/security/advisories/GHSA-wq5f-xc86-pv6w, https://nvd.nist.gov/vuln/detail/CVE-2026-96889, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/apps/web/next.config.ts#L80-L87
- **Half:** defect | **Confidence:** high

**What changed.** Five Next advisories published October 7 match 16.1.4 and name 16.3.8 as the first fixed 16.x version. GHSA-cjq9 allows internal-address image requests through an attacker-controlled allowed remote endpoint; ACFS restricts remotePatterns to its GitHub repository. GHSA-39w2 exposes dev paths, source snippets, routes and logs through next dev MCP, not production. GHSA-f87g exposes omitted dynamic metadata-image routes in App Router webpack builds. GHSA-mcj8 permits shared-cache poisoning with root catch-all plus SSG/ISR routes. GHSA-4jqv permits cross-route cached-content substitution in self-hosted Pages Router SSG/ISR and excludes Vercel. Sharp GHSA-wq5f, published October 6, references CVE-2026-96889, which NVD published September 23: crafted SVG nested XML inclusions can trigger librsvg use-after-free and a crash or possible code execution, with Sharp limiting RCE to specific glibc/Linux conditions and recommending 0.35.5 prebuilt binaries. Deployment prerequisites are unverified. The older Next AVIF disclosure is outside the window.

**Operator consequence.** For website development or self-hosting, identify the authoritative install lock and image/rendering routes before assigning exposure. Do not extend web/build dependency findings to every provisioned VPS or claim the live site is fixed. The root upgrade is untagged and does not repair the independent web lock.

## 19. Antigravity changes to Gemini 4 Argon late on October 13 without changing permission posture

- **Date:** 2026-10-13
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 787a2359 committed 2026-10-13T23:09:20Z; f405ac94 follows at 23:42:55Z. Both are in the reconstructed cutoff and neither tag. Stable retains Gemini 3.8 Flash (High).
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/787a2359b0e08dac0be9c86559e643f343c941bd, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/f405ac94b84104ebcbf721fb0e4f6345a0ee154d/scripts/lib/agy_locked.py#L491-L519, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/f405ac94b84104ebcbf721fb0e4f6345a0ee154d
- **Half:** both | **Confidence:** high

**What changed.** The locked model becomes Gemini 4 Argon (High), with settings, shell guard, NTM template, manifest and readiness expectations moved together. The wrapper strips caller --effort alongside model overrides. Its permission bypass, terminal sandbox and workspace-access policies do not change. The follow-up repairs documentation that had retroactively renamed a historical full E2E; it does not claim that old E2E ran on Argon. No capability benchmark or independent provider run was established.

**Operator consequence.** Stable evaluations stay on the old locked model; main evaluations need model-specific acceptance and cannot treat the older complete E2E as qualification for Argon. Do not extend the morning model snapshot to the whole UTC window.

## 20. Main bounds nightly retry windows and records missed updates

- **Date:** 2026-10-13
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 94ab0556, df893064 and 68cf92ca are in the cutoff and neither tag; the first was already in the morning snapshot. Direct patches and ancestry checked.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/94ab0556cc6e70afe10d66ed722871de767e3d45, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/df893064f963fd7135088be19c9c128932bf0cc7, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/68cf92ca40dab944063b1a3b84a5c5986aeb39dc, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/nightly_update.sh#L420-L437, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/nightly_update.sh#L519-L534, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/templates/acfs-nightly-update.timer
- **Half:** both | **Confidence:** high

**What changed.** The resource-gated nightly now checks at most three times, serializes retry windows and retains skip/failure history until full success. Status and doctor expose missed runs and stale successes. Stable still schedules 04:00 local with up to five minutes of jitter, attempts tool/agent updates only when resource gates permit, and disables self-update unless ACFS_NIGHTLY_SELF_UPDATE=true. Holds, backoff, checksum refusal and install failure can prevent changes. A timer firing never guaranteed daily freshness.

**Operator consequence.** On stable, inspect execution logs and versions rather than timer activation alone. Watch the next tag for retained retry/health reporting. The branch fix neither forces updates on unsafe hosts nor proves a daily successful update.

## 21. Main stops rollback backoff from suppressing repaired upstream releases

- **Date:** 2026-10-13
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 0166c328 and 38ec8cda are in the cutoff and neither tag. Patches store the failed installer hash and upstream release tag and compare them before retaining backoff.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/0166c3285ec6e08db3c92bc91fd09aeea7d14520, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/38ec8cda5a9d4ef45ae710eeb7f83b0809926f4c
- **Half:** both | **Confidence:** high

**What changed.** After smoke-check failures, the updater kept an earlier binary when available and backed off retries for days, including after an upstream fix. One patch lifts backoff when installer bytes change; the second detects a new GitHub release behind an unchanged installer. Holds still win, failed release lookup retains backoff, and old records lacking release metadata can still need an explicit retry. The stranded-host examples are maintainer reports, not independently observed outcomes.

**Operator consequence.** A repaired upstream release is not proof an affected host retried it. On stable, inspect backoff state and perform a supervised retry only after confirming the fix; on main, check whether the record contains the metadata needed for the new comparison.

## 22. Main probes actual temp writes before staging verified installers

- **Date:** 2026-10-13
- **Channel:** `main-unreleased`
- **Ancestry evidence:** 7162c7bf, 3fb4abba and a39b2a1b are in the cutoff and neither tag. Separate updater run-directory, installer-security staging and updater-staging diffs checked.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/7162c7bffdeccdaff7ca7e76a3bf03546fa6a974, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/3fb4abbae3da8f6c169132d1084b1db0848dba45, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/a39b2a1bf324ef8d31fea2c76ca62aed4a48f806
- **Half:** defect | **Confidence:** high

**What changed.** Per-user temporary-file quota exhaustion can permit mktemp but refuse the later data write. The maintainer reports dozens of failed tools after verification succeeded, then more failures after only the outer TMPDIR fallback was changed. These patches probe actual writes and select fallbacks for the run directory and both verified-installer staging paths. The code change does not relax checksum trust. Failures and acceptance on the maintainer hosts are attributed.

**Operator consequence.** When a stable update reports Verified then a write/quota failure, inspect staging storage separately from checksum approval. Changing TMPDIR alone did not address both hard-coded staging paths; do not bypass checksum enforcement to solve a storage failure.

## 23. Main leaves healthy unchanged Agent Mail running during routine updates

- **Date:** 2026-10-13
- **Channel:** `main-unreleased`
- **Ancestry evidence:** ba279de1 committed 2026-10-13T19:45:05Z; in cutoff and neither tag. Diff replaces unconditional service restart with binary, unit, readiness, activity and PID checks.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/ba279de19b300f3f153a6f063ca21aafc08a9f62, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/f405ac94b84104ebcbf721fb0e4f6345a0ee154d/scripts/lib/stack.sh#L1861-L1923
- **Half:** both | **Confidence:** high

**What changed.** Routine updates previously restarted the shared Agent Mail server even when its binary and unit had not changed. The maintainer reports a midday interruption and more than 90 seconds of reload on large mailboxes. The untagged fix leaves an unchanged healthy service running and still restarts after binary/unit changes, failed readiness, inactivity or missing PID. No service or reload duration was measured here.

**Operator consequence.** Schedule stable updates around shared mail use rather than assuming no-op tool updates leave coordination untouched. Watch for a stable release containing conditional restart and verify service readiness after updates.

## 24. The mirror source removes Meta Skill ARM64 refusal gates

- **Date:** 2026-10-09
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** 57a3ba44 is absent from stable and in mirror source/cutoff. The combined recovery patch removes ARM64 refusal/warning from generated installation, updater, doctor and doctor-fix surfaces.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/57a3ba443d90e8b482b87c1377c094ca62ef6c24
- **Half:** capability | **Confidence:** high

**What changed.** The same patch that repairs Ubuntu recovery stops refusing Meta Skill on ARM64 Linux. The maintainer cites a checksummed upstream archive; the verified ACFS capability is removal of its local gate. Archive presence can vary by upstream release, and no ARM64 executable was run here.

**Operator consequence.** ARM64 operators can evaluate the reviewed post-stable source path while retaining checksum checks, or wait for a real ACFS tag. This does not qualify the binary mirror as a stable upgrade or prove every upstream release has an ARM64 artifact.

## 25. The mirror source adds additive module restore and read-only drift checks

- **Date:** 2026-10-05
- **Channel:** `preview-or-beta`
- **Ancestry evidence:** b57f0e3e and 685e4863 are absent from stable and in mirror source/cutoff. Pinned guide and both patches checked.
- **Receipt:** https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/b57f0e3efbec01c055b63dd31ee9298592f3a358, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/685e4863130c4074c3d3e538c068cd13251e3605, https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/0bf744a81c319accaa62d763bce97073ac693ef5/docs/operations/config-restore.md
- **Half:** capability | **Confidence:** high

**What changed.** Configuration import can capture current destination module selection with --against-current and install only missing modules while preserving extras. --check compares inventories without installer planning or application: exit 0 satisfied, 1 missing and 2 invalid input/export failure. The ordinary import defaults to safe mode and suppresses OS upgrades. Inventory presence can rely on recorded state and does not prove credentials, versions or functional health. No privileged restore was run.

**Operator consequence.** Use the read-only check to name missing modules before approving a restore. Treat portability here as a module-selection primitive, not a machine image or equivalence of account state and running tools.

## Prior claims re-checked

Frontmatter claims marked `active` in content/profiles/agent-flywheel.md, read at v0.10.0 unless stated:

- `v0-7-0-never-installed`: holds at v0.10.0 as a historical statement. The v0.8.0 release body still says v0.7.0 "fails its own internal integrity check" and that v0.5.0 was the newest ref that installed; the release object's updated_at equals its published_at (2026-08-25T17:14:41Z), so it is unedited. https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.8.0
- `v0-9-0-holds-and-rollback`: corrected at v0.10.0. Claude/Codex holds remain, but aadc/rust_proxy source builds bypass them (section 14); binary snapshots are best-effort and a failed backup leaves no rollback candidate. update.sh L8738-L8750 exits 2 on partial failure. New at the tag: unexpired holds pass `acfs doctor` (2a595c42). https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L8738-L8746
- `safe-mode-not-a-boundary-at-v0-9-0`: holds at v0.10.0 and at 0bf744a8. The aliases are unconditional under "Agent aliases (dangerously enabled by design)" (acfs.zshrc L633-L642); vibe mode writes `NOPASSWD:ALL` to /etc/sudoers.d/90-ubuntu-acfs and the safe branch only adds a password-prompted wheel drop-in on Arch (install.sh L7517-L7542); `MODE="vibe"` is the default (L435); the safe-mode smoke check only tests that sudo exists (L11201-L11229). No code path removes 90-ubuntu-acfs. https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L7517-L7542
- `bundled-agents-float`: holds for floating inputs at v0.10.0; daily change is not guaranteed. Codex installs `@openai/codex@latest` (acfs.manifest.yaml L957-L959); Claude uses the verified upstream installer with `args: ["latest"]` (L906). The default nightly attempts agent updates at 04:00 local with up to five minutes of jitter when resource gates permit. Holds, backoff, checksum refusal and install failure can prevent changes (section 20). https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs.manifest.yaml#L957-L959
- `main-codex-alias-and-plugin-approval`: changed (see sections 7 and 8). The tag now pins `cod` to gpt-6-astra (acfs.zshrc L638), so tag and main agree; the reviewed plugin flow is in v0.10.0, scoped to third-party plugins.
- `changelog-and-cost-at-v0-9-0`: changed for the changelog (see section 11); the v0.10.0 entry omits most shipped changes and main's Unreleased section is empty. Cost holds: page.tsx L1063.
- `three-agent-vps-assembly-layer`: holds at v0.10.0. Claude Code, Codex and Antigravity are the default-enabled agents (manifest L882, L932, L1082); the other four agent modules are optional and off.
- `dangerous-agent-shortcuts-shared-across-modes`: holds at v0.10.0 (acfs.zshrc L633-L642, no mode conditional). Extended: the NTM config ACFS writes now spells out Codex with `--dangerously-bypass-approvals-and-sandbox` (install.sh L9762), which `acfs swarm launch` panes use (section 7). Vibe mode also writes `"skipDangerousModePermissionPrompt": true` into `~/.claude/settings.json` (install.sh L10993-L11021; same at v0.9.0).
- `passwordless-sudo-vibe-default`: holds at v0.10.0 (install.sh L435 and L7517-L7529).
- `antigravity-always-proceed-wrapper`: holds at v0.10.0 and 0bf744a8. scripts/lib/agy_locked.py L59-L76 pins `artifactReviewPolicy` and `toolPermission` to always-proceed, `enableTerminalSandbox: False` and `allowNonWorkspaceAccess: True`; L634-L640 launches with `--dangerously-skip-permissions`. The morning snapshot kept that policy; late October 13 changes the locked model and effort filtering, not the permission policy (section 19). https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/agy_locked.py#L59-L76
- `dcg-antigravity-hook-fails-open`: holds at v0.10.0 (agy_locked.py L155-L157 allow on OSError or timeout; L195-L203 allow on non-zero exit other than 1 or unusable evaluator output outside the exit-1 path; malformed hook input and exit 1 without a usable verdict ask). Install-time DCG failure is now fatal (section 6); the runtime hook is unchanged. https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/agy_locked.py#L150-L206
- `cost-model-self-reported-in-tagged-web-source`: holds (page.tsx L1063 at v0.10.0; live homepage 2026-10-13).
- `individual-account-repository-outlier-paper-scope`: limited check; the version list at https://arxiv.org/abs/2606.07448v1 still shows only v1. That establishes no revision, not revalidation of repository counts or a causal productivity effect.
- `license-rider-disclosure`: holds; LICENSE is byte-identical at v0.9.0, v0.10.0 and 0bf744a8. https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/LICENSE

Bolded paragraphs of "Where it stands, 2026-09-21":

- **Channel.** changed (see sections 1 and 2): the newest stable is v0.10.0, and its install depends on main's checksum ledger. "Do not install from main" still stands, but the official site's /install, the README Quick Install and the cloud recipes all default to main.
- **Correction: v0.7.0 never installed.** holds (historical; release body unedited).
- **Safe mode is still not a boundary.** holds at v0.10.0 (see the claim above).
- **One override now works.** holds at v0.10.0: `~/.zshrc.local` is sourced last (acfs.zshrc L762-L767). Note that it does not reach the NTM config, which carries its own Codex command line (section 7).
- **Antigravity runs as a policy file.** holds at v0.10.0 (see above).
- **Versions float; you can now hold them.** corrected: the nightly attempts floating agent updates when resource gates permit. Holds are path-specific and .prev backups are best-effort (sections 14 and 20).
- **The receipts are legible again.** changed (see section 11).
- **Main disagrees with the tag on your model.** superseded: v0.10.0 pins gpt-6-astra like main; the plugin installer is in the tag.
- **The license is not plain MIT.** holds.

## Carry-forward answers

- watch_next: "Whether the next tag carries main's reviewed plugin-install flow with explicit approval, and whether it covers the bundled agents or only third-party plugins." Yes, it shipped in v0.10.0. It covers third-party plugin archives only: target-user, no root modules, no default-enabled plugins, and nothing about the bundled agents, aliases or Antigravity policy (section 8).
- watch_next: "whether any tag gates the aliases and the Antigravity policy behind safe mode." No. At v0.10.0 and at 0bf744a8 the aliases are unconditional (acfs.zshrc L633-L642) and agy_locked.py's policy is unchanged.
- watch_next: "whether the installer ever pins Codex and Claude versions by default." No. Codex `@latest` and Claude `latest` remain the inputs; the nightly attempts updates but can skip or fail. Their hold checks remain, without proving universal tool holds (sections 14 and 20).
- Unresolved: Agent Mail file reservations are "advisory"; what happens when two agents claim the same file. Still open, narrowed. v0.10.0's `acfs swarm assign` proves non-overlap among declared write sets only; its doc says it "neither verifies the agent's eventual writes nor checks live Agent Mail reservations" and that `launch_authorized` is always false (https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/swarm-assignment-scopes.md#L58-L75). No published collision test.
- Unresolved: whether the loop raises verified progress per hour of human attention. Still open. New evidence of attention cost rather than benefit: 34 checksum-authorization issues opened September 22 through October 12 and three maintainer-reported monitor stalls (section 2). The post-stable fleet pipeline adds human gates (fleet approval, packet review, integration and promotion) with no outcome measurement.
- Unresolved: Robbes et al. repository count. Still open; the paper is unchanged at v1.
- Contract discovery questions: safe mode does not gate the dangerous shortcuts (no); mode changes do not remove ACFS-created NOPASSWD state (no); provider-supplied passwordless sudo is not detected (no; the safe-mode smoke check at install.sh L11201-L11229 only checks that sudo exists and the user is in the admin group). Agent versions still float; Antigravity's upstream installer script is checksum-pinned and is passed no version argument (acfs.manifest.yaml L1104-L1109 at v0.10.0).
- Parent "Observed after window close" (swarm series d2e4ebfa and 34eee93b, update fix f489c43a): confirmed, and the channel changed. All three are ancestors of v0.10.0 (section 7).

## Operator questions settled

- Defaults across the three tier-1 agents: at v0.10.0, `cc` = Claude with `--dangerously-skip-permissions` and vibe mode writes `skipDangerousModePermissionPrompt: true`; `cod` = Codex with `--dangerously-bypass-approvals-and-sandbox`, gpt-6-astra, xhigh; `agy` = always-proceed, terminal sandbox off, workspace boundary off. Each vendor names these flags "dangerously". New this window: ACFS's NTM config carries the same Codex flags, so swarm-launched Codex panes inherit them (section 7).
- Version and channel pins: no for the agents (floating latest inputs and conditional nightly attempts). The installer scripts are pinned by checksum, but the ledger comes from main at install and update time, even for a tag install (sections 1 and 2). The cloud path hash-checks new mirror bundles but reuses existing callable tools by default; no first-ever claim is established (section 9).
- Credentials and session state: v0.10.0 fixes a token leak into update logs, including world-readable /data/tmp logs (section 4). Main adds passive credential-source reporting and redaction. Where agent auth files land on the VPS was not re-read this window.
- Do the safety tools enforce: at install time, more than before, since a required module failing (dcg among them) now fails the install (section 6). At run time, no change: the Antigravity hook allows when dcg is missing, and the plugin runtime's `setpriv` is "not a filesystem or network sandbox" (section 8).
- Budget examples: unchanged at $440-$656/month (section 11).
- Plan-to-graph-to-coordination attention: not settled; the window shows a new serial queue of checksum reviews (section 2).
- License rider: unchanged at v0.10.0. The cloud path targets environments operated by OpenAI and Anthropic; we offer no view on how the rider applies (section 9).

## Leads not promoted

- The original researcher reports 48/48 matching live installer downloads at 2026-10-13T09:02:30Z, but retained no per-URL receipt. Do not promote it as independently confirmed or as a successful-install result. The verifier's October 14 hashes establish later drift only, outside this posture.

- Writing lane (runs/2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0/feeds/writing.json, 161 items): no item concerns Agent Flywheel, ACFS, Emanuel or the related repos. Keyword hits were false positives: an LWN systemd article ("cass" inside a surname), a simonwillison.net post on OpenAI agents on Wikimedia ("swarm"), LWN security updates ("sudo").
- Web search ("Agent Flywheel ACFS v0.10.0", "agent-flywheel.com cloud agents ..."): only mirrors and aggregators (sourceforge mirror, newreleases.io, upd.dev, onworks, brightcoding) that lag at v0.9.0. Nothing promoted; none is a receipt.
- #437 (open, 2026-10-10) links an X post by @engelnyst and a maintainer reply asking for the issue. Social posts were not read (X lane down). The issue itself is a user's primary report, used in section 9 only as "a user reported".
- The cloud bootstrap recipe sends the user-agent string "OpenAI File Downloader, XaiImageApiFetch/1.0" (README L479 at 0bf744a8; added in ac10578b, whose message says only "harden curl download arguments"). The purpose is unstated; not promoted.
- #429 (closed 2026-10-04): a user's installed tree from a July main checkout still aliased `install` to `sudo apt install`. The fix (f67bcac5) is in v0.8.0 and later, so it is not a window change. It shows that installed trees persist, because the nightly disables self-update by default.
- #435 reports optional AADC builds from an unpinned source; the exact source-build hold defect is now section 14. The #448 nightly lead advanced to verified branch changes in section 20; no stable fix was found.
- #426 comment (2026-10-09): the maintainer lists 38 Next.js advisories against the website's lockfile as a release gate. That concerns agent-flywheel.com, not installs; main bumps Next to 16.4.0 (37f5c6de, 2026-10-11).

## Surfaces checked

- `gh api repos/Dicklesworthstone/agentic_coding_flywheel_setup` (identity); `gh release list`; `gh api releases/tags/v0.10.0`, `cloud-binaries-v1`, `v0.9.0`, `v0.8.0` (bodies, flags, publish times, assets).
- Blobless clone with tags: tag dates and objects; `git merge-base --is-ancestor` for every cited commit against v0.9.0, v0.10.0 and origin/main; `git rev-list --count`; commit messages of 2a595c42, 24b5c423, 63f24b80, 655ad8fc, 236c6b07, 8616be9c, 2354efba, 400601d2, e2d7f935, 57a3ba44, 5c8b6a70, 40a0031b, c816842e, 1f6b4bce, ac10578b, 5f17293b, 99c91d71, 75d5e6db; full subject lists for v0.9.0..v0.10.0 (173) and v0.10.0..main (459).
- `gh api compare` v0.9.0...v0.10.0 (173/0), v0.10.0...main (459/0), v0.10.0...cloud-binaries-v1 (303/0).
- Codeload tarballs at v0.9.0, v0.10.0, 0bf744a8: install.sh (checksums ref, mode default, sudoers branch, Ubuntu upgrade phase, NTM config template, Claude settings, DCG hook registration, base-deps order, required-module helper, smoke checks), scripts/lib/update.sh (ledger refresh, self-update, UBS flags, agent updates, exit codes, URL redaction), scripts/lib/nightly_update.sh, scripts/templates/acfs-nightly-update.timer, scripts/lib/tools.sh, scripts/lib/agy_locked.py (diffed), scripts/lib/ubuntu_upgrade.sh, scripts/lib/swarm_launch.sh, scripts/lib/user.sh, scripts/checksum-monitor-local.sh, acfs/zsh/acfs.zshrc (diffed), acfs.manifest.yaml (agent roster, install lines, stack.dcg), checksums.yaml, cloud-mirror.json, LICENSE (hashed), CHANGELOG.md, README.md, apps/web/app/page.tsx, apps/web/app/install/route.ts, apps/web/lib/commandBuilder.ts, docs/operations/plugin-review-workflow.md, swarm-launch.md, swarm-assignment-scopes.md, swarm-resource-isolation.md, swarm-fleet-launch.md, scripts/claude-code-web-setup.sh (main).
- Issues #400, #402, #405-#448 (titles and states), with bodies and comments for #422-#427, #429, #433, #437.
- `gh api repos/.../security-advisories` (empty); `gh api advisories?affects=agentic_coding_flywheel_setup` (0).
- `npm view agentic-coding-flywheel-setup`, `npm view @acfs/manifest` (both 404).
- Live: https://agent-flywheel.com/ (200), /cloud-agents (200), /claude-code-web (redirects to /cloud-agents), /install (302 to main/install.sh) on 2026-10-13.
- Original researcher probe at 2026-10-13T09:02Z: downloaded and hashed, never executed, but no retained per-URL receipt. Independent October 14 probe is described only as post-window drift in the crosscheck. Static historical ledger comparisons remain reproducible.
- https://arxiv.org/abs/2606.07448 (version list).

## Not reached

- No local install or factory reproduction was run. Neither matching ledger entries nor an attributed live checksum probe establishes that the tag installs today.
- The 25.10 recovery failure and the v0.9.0 auto-upgrade behavior on a live host were not reproduced; they are read from code and the maintainer's commit messages.
- A tag-to-tag upgrade path for existing hosts: re-running install.sh resumes and skips completed phases (install.sh L12160-L12205), and we did not establish whether `--force-reinstall` with a newer `--ref` redeploys the ACFS tree cleanly.
- Where agent credentials and CAAM profiles land on the VPS, and their file modes, were not re-read.
- NTM's own built-in default commands (NTM is a related repository, outside weekly scope), which decide the Claude pane command line under `acfs swarm launch`.
- Vendor-side behavior of the cloud path in Claude Code on the web and Codex cloud, beyond the open user report in #437.
- The maintainer's "acfs update failed fleet-wide" statement was not observed independently.
- Live-site pages beyond the homepage and /cloud-agents (for example /docs/security and the wizard's Ubuntu advice) were not read.

## Crosscheck applied

Applied on 2026-10-14 to the 2026-10-13 posture. Corrected sections 1, 2, 4, 9 and 10, retained the six verified sections, normalized UTC commit dates and repaired Install today plus prior-claim summaries. No numbered section was REFUTED or UNVERIFIABLE. The unsupported live 48/48 promotion moved to Leads not promoted. The finished monitor streak is 175; tarball runtimes can discover separate checkouts; holds/rollback and nightly guarantees are narrowed; cloud reuse, mode-specific MCP and mirror ancestry are explicit. Reconstructed cutoff replaces the morning snapshot as the inclusive window boundary, with no October 14 event imported. Added crosscheck misses M1 through M14 as sequential sections 12 through 25 after reading their GitHub API patches/guides/advisories and independently checking stable, mirror and cutoff ancestry. All fetched code remained data and was never executed. These broader source findings do not widen the source contract: public implementation posture stays tagged, with untagged patches identified only as unresolved changes or release comparisons against tagged affected code.
