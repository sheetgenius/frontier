---
schema_version: bitter.frontier_harvest.v0
provider: omp
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/omp.yml
channels_present: [tagged-release]
window_volume: 5 material changes, 3 capability-bearing, 3 defect-bearing, 4 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- omp (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. OMP's always-ask approval prompt opened before the diff rendered -- fixed twice in six days

- **Date:** 2026-08-11 | **Version:** v17.2.13
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Fix commit ee2f10764c0ac64460dacea3907b4ff7d05785d6, "fix(tui): waited for edit previews before approval", authored 2026-08-07T22:58:16Z. gh api repos/can1357/oh-my-pi/compare/v17.2.13...ee2f10764c0a -> status "behind", ahead_by 0; against v17.2.12 -> status "ahead", ahead_by 1 (not in the prior tag). GitHub release v17.2.13 published 2026-08-11T14:41:52Z and npm published 17.2.13 at 2026-08-11T14:45:07Z, so every install channel carries it.
- **Receipt:** https://github.com/can1357/oh-my-pi/issues/7957
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Issue #7957, filed 2026-08-07 and titled "Large/Moderate proposed edits by agent do not show before permission is asked to proceed", reported that under `always-ask` the approval dialog opened before large edit previews finished rendering. The operator was asked to approve a diff they could not see. The fix makes the prompt wait on preview readiness.

**Operator consequence.** Upgrade past v17.2.13 if you rely on always-ask as your review gate. Until then the gate was real but the evidence behind it was not -- the prompt fired first and the diff arrived after, which on a large edit means the approval was blind. If you ran OMP in always-ask during this window, the approvals you gave on large edits are worth revisiting.

## 2. OMP tags v17.3.6 and v17.3.7 carry an extension hook that brokers around a denied filesystem write -- and no install channel but Nix can reach them

- **Date:** 2026-08-17 | **Version:** v17.3.6
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Tag v17.3.6 -> 54e1a8c900d30e5b6185975ab02a4a923faf1717, commit dated 2026-08-17T14:16:40Z, "chore: bump version to 17.3.6"; tag v17.3.7 -> 644ad30d6e9436074a00f8bd08ecadcd98992fc1, 2026-08-17T20:55:09Z. Both are non-prerelease tags. Neither has a GitHub release: the releases API for can1357/oh-my-pi returns v17.3.5 (2026-08-16T08:00:13Z) as the newest. npm dist-tags for @oh-my-pi/pi-coding-agent read {"latest": "17.3.5"} and the newest published version is 17.3.5. The project's own normal tag-to-release lag is roughly 20-40 minutes (v17.3.5: commit 07:21:05Z, release 08:00:13Z; v17.3.4: commit 12:38:16Z, release 13:14:09Z), so at harvest time v17.3.6 is many hours past that.
- **Receipt:** https://github.com/can1357/oh-my-pi/blob/54e1a8c900d30e5b6185975ab02a4a923faf1717/packages/coding-agent/CHANGELOG.md
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** v17.3.6 adds `ExtensionAPI.registerFileWriteFallback(handler)` and `ExtensionAPI.registerFileDeleteFallback(handler)`. An extension supplies a fallback writer or deleter that is consulted when a native `write`, `edit` or `apply_patch` byte-write or unlink is denied with a permission error (EPERM/EACCES/EROFS). The stated purpose is hosts that embed the agent inside a sandbox denying direct filesystem access while exposing a privileged channel. The changelog names three guards on the brokered path: it is symlink-resolved so a handler's allowlist sees the real destination, a destination that cannot be resolved is not brokered at all, and `req.sessionId` identifies the issuing session so a handler sharing the process-wide registry can enforce per-session policy. v17.3.7 adds only a User-Agent change on xAI chat.

**Operator consequence.** Watch rather than act, and know that on three of four install paths you do not have it. The mechanism is legitimate -- a sandboxed host brokering writes through a privileged channel -- but its shape is a documented route by which an OS-level denial becomes an extension-mediated allow, so any host that registers such a handler has moved the real write policy into the handler. If you embed OMP, the handler's allowlist is now your filesystem boundary and it needs to be reviewed as such. As of this harvest the code is reachable only by `nix run github:can1357/oh-my-pi` or an explicit `--ref`; the install script, Homebrew and Bun all land on 17.3.5.

## 3. OMP v17.3.0 fixed the LSP concurrency defects created by the shared-language-server capability it shipped ten days earlier

- **Date:** 2026-08-13 | **Version:** v17.3.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.3.0, published_at 2026-08-13T07:02:57Z, prerelease=false; tag v17.3.0 -> 326d24bd40d9858e24e1036ae739c27c72eeb543. npm published 17.3.0 at 2026-08-13T07:06:31Z. Changelog section pinned at https://github.com/can1357/oh-my-pi/blob/v17.3.0/packages/coding-agent/CHANGELOG.md.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.3.0
- **Half:** both | **Confidence:** high

**What changed.** The v17.3.0 changelog lists, under one line: concurrent sessions sharing backend overlays, stale document overlays after workspace edits, incorrect transactional edit advertisements, unhandled snippet placeholders in rust-analyzer, and failure to restore overwritten targets during failed file renames. Separately, LSP `diagnostics` was reporting success when every language server had failed. The overlay-sharing and stale-overlay defects are the direct consequence of `lsp.shared` broker-multiplexed language servers, shipped in v17.2.5 on 2026-08-03. The same release adds Astral `ty` as a fallback Python LSP server behind pyright/basedpyright/pylsp, first-party Nix support with reproducible source builds and NixOS/Home Manager modules, and removes the global `advisor.subagents` setting as a breaking change with automatic migration to `task.agentAdvisor`.

**Operator consequence.** Upgrade if you used `lsp.shared` between 2026-08-03 and 2026-08-13. A shared language server handing a stale document overlay to a second session means the agent reasoned about a file that no longer looks like that, and `diagnostics` reporting a clean workspace when every server crashed means a green check that proves nothing. Neither is visible from the transcript. If you have LSP-gated work from that window, re-run diagnostics on it. Adapt any config carrying `advisor.subagents`, though the migration is automatic.

## 4. OMP's updater can now migrate your install from npm/Bun to a standalone binary in place

- **Date:** 2026-08-11 | **Version:** v17.2.13
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.2.13, published_at 2026-08-11T14:41:52Z, prerelease=false; npm published 17.2.13 at 2026-08-11T14:45:07Z. Changelog entry pinned at https://github.com/can1357/oh-my-pi/blob/v17.2.13/packages/coding-agent/CHANGELOG.md.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.2.13
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** `omp update` now honors an `omp.dist` distribution field published in the release's npm manifest, and treats a major-version bump without one as binary-only: a bun- or npm-managed install is migrated to the standalone GitHub release binary in place rather than running a package-manager install. On Windows, npm's script shims (`omp.cmd` / `omp.ps1`) are taken over by installing `omp.exe` beside them and retiring the shims. Separately, v17.3.0 added `omp update` and startup version-check support for an `omp.rename` pointer in the published manifest, described as preparation for an upcoming npm package rename. I checked the live manifest for @oh-my-pi/pi-coding-agent 17.3.5 and no `omp` or `omp.rename` key is present yet, so the client can follow a rename that has not been published.

**Operator consequence.** Watch this one closely if you manage OMP through a package manager. Two things are now true: the tool can change its own distribution method underneath you, so a machine you believe is npm-managed can silently become a standalone binary that npm no longer tracks; and the maintainer has pre-wired the client to follow a package rename that has not happened. Given that @oh-my-pi/pi-coding-agent and upstream Pi's @earendil-works/pi-coding-agent already share a basename under different scopes, a rename is the moment where an operator most needs to know exactly which package their machine is following. Pin explicitly if you cannot tolerate that.

## 5. OMP replaced libarchive tar parsing with a hardened in-process reader

- **Date:** 2026-08-12 | **Version:** v17.2.15
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.2.15, published_at 2026-08-12T02:01:24Z, prerelease=false; tag v17.2.15 -> 06aecdd51f07e689e970ceaa180abe2be0c14bbb; npm published 17.2.15 at 2026-08-12T02:04:11Z. Changelog entry pinned at https://github.com/can1357/oh-my-pi/blob/v17.2.15/packages/coding-agent/CHANGELOG.md.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.2.15
- **Half:** defect | security-relevant | **Confidence:** medium

**What changed.** The changelog entry: "Replaced libarchive-based tar parsing with a hardened, in-process tar reader to prevent crashes and safely handle complex archive structures, symlinks, and sparse metadata." No CVE or GHSA accompanies it, and can1357/oh-my-pi has published no security advisories at all. Naming symlinks and sparse metadata specifically is the signature of archive-extraction path handling, the class that produces path traversal on unpack, but the changelog does not claim a vulnerability and no advisory resolves the question.

**Operator consequence.** Upgrade to v17.2.15 or later if anything in your workflow makes OMP read a tar archive it did not produce -- plugin or marketplace installs, downloaded toolchains, extension packaging. Do not read more into it than the changelog says: this is a hardening entry with no advisory behind it, and I could not establish whether a traversal was reachable. Recorded here because the class matters and the receipt is thin.

## Researcher lane notes

Both sources moved substantially; nothing was quiet. Nineteen changes reported, ten capability or mixed, nine defect -- the capability detector fired, not only the defect one.

CHANNEL WORK, and one trap worth flagging to the coordinator. Omnigent cuts releases on `release/vX.Y` branches and BACKPORTS BY CHERRY-PICK, so plain ancestry gives a false negative. `compare/v0.9.0...7efe0562` (the #4318 approval revert) returns "diverged", which reads as not-released -- but the v0.9.0 tag object points at cc4720a79fbdf9ccee56724bf571e7d48e1d9ac2, whose commit message is "Backport six post-cut fixes onto release/v0.9.0 (#4596)" and contains the literal line "(cherry picked from commit 7efe05623b687db9373191d323d58687ec383fb0)". Content is in the tag, SHA is not. `git tag --contains` alone would have gotten that one wrong in both directions. Every other omnigent change here was verified by ordinary compare-API ancestry, and the v0.8.0 and v0.9.0 tag commits are each 1-2 commits off main (`compare/main...v0.8.0` -> diverged ahead=1), consistent with release-branch cutting.

CHANNEL SKEW ON PYPI. Omnigent's PyPI publish and its GitHub release are not the same event. 0.8.2 was uploaded to PyPI at 2026-08-04T22:34:40Z but its GitHub release was not published until 2026-08-11T21:18:04Z -- seven days later, and eighteen minutes AFTER the v0.9.0 release went up at 21:02:42Z. Anyone reading the releases page as a timeline gets the ordering wrong. `pip install omnigent` had 0.8.2 for a week before the release notes existed.

WHAT I COULD NOT RESOLVE.
- omp v17.2.15's tar-reader hardening (in-process reader replacing libarchive, explicitly naming symlinks and sparse metadata) has no CVE, no GHSA, and can1357/oh-my-pi has published zero security advisories. I could not establish whether a traversal or extraction escape was reachable, so I marked it medium confidence and said so in the entry rather than upgrading it to a security finding on shape alone.
- https://omp.sh/changelog returns HTTP 200 but is client-rendered; no version text is present in the served HTML, so I could not compare the site's public framing against the repo changelog. The contract lists that divergence as a priority-3 watch item; it stays unanswered.
- No probe was run against either project. Everything here is source, release metadata, registry metadata and docs. The docs/rulebook-matching-pipeline.md reading about workspace-supplied rules and name-only precedence is a reading, and I labelled it as such -- the contract's own note says that shape deserves a probe rather than a reading, and a probe would be a good use of next cycle.
- omp DAP: fourteen days, one docs clarification and one stdout-drain fix. The contract's question about whether a debugger session widens what the agent can execute past the tool permission layer has no public answer in this window's surfaces.

ATTRIBUTION DISCIPLINE. No OMP behaviour is attributed to upstream Pi or vice versa anywhere in this return. Upstream @earendil-works/pi-coding-agent (latest 0.84.2, published 2026-08-14) was fetched once, only to confirm the two packages are both live in the same week under the same basename; no upstream change is reported as an OMP change. Likewise, the Omnigent findings about qwen/goose delegated file I/O and about Smart Routing writing Claude Code's default model are stated as facts about the pair, not about the wrapped harness.

TWO THREADS THE EDITOR MAY WANT TO PULL. First, the same window produced, independently, an Omnigent release that removed owner-only approval and reopened a known security issue on purpose, and an OMP approval prompt that fired before the diff it was approving had rendered -- twice, the second time routed around through a tool's wire-level alias. Both are human-in-the-loop controls that existed but did not carry the evidence the human needed. Second, both projects are running channels that ordinary install paths cannot see: Omnigent has fourteen nightly `.dev` git tags and zero `.dev` versions on PyPI, and OMP has two stable-looking tags that only `nix run` can reach. In both cases something an operator would want (tag-push protection; a filesystem-write brokering hook) is sitting in that gap.

## Surfaces checked

- sources/omnigent.yml + omnigent.notes.md (contract read first)
- sources/omp.yml + omp.notes.md (contract read first)
- GitHub repo omnigent-ai/omnigent (metadata, default branch, branches)
- GitHub releases omnigent-ai/omnigent (11 stable releases, v0.2.0..v0.9.0, full bodies for v0.8.0/v0.8.1/v0.8.2/v0.9.0)
- GitHub tags omnigent-ai/omnigent (incl. v0.9.0.dev* and v0.10.0.dev* nightly tags)
- omnigent CHANGELOG.md pinned at a345e2c94bb39d7f32c690e9511703508f0a96f9 (v0.10.0.dev20260817)
- omnigent security advisories (GitHub Security tab)
- omnigent merged PRs #3475 #3479 #3519 #3559 #3570 #3620 #3856 #4074 #4318 and issues #3852 #3854 #3855
- omnigent source files omnigent/policies/builtins/orchestration.py and cost.py at raw refs v0.7.0, v0.8.0, v0.9.0
- GitHub compare API for ancestry on every omnigent change reported
- PyPI JSON API for project omnigent (28 versions)
- GitHub repo can1357/oh-my-pi (metadata)
- GitHub releases can1357/oh-my-pi (newest v17.3.5)
- GitHub tags can1357/oh-my-pi (newest v17.3.7)
- oh-my-pi packages/coding-agent/CHANGELOG.md pinned at 644ad30d6e9436074a00f8bd08ecadcd98992fc1
- oh-my-pi security advisories (GitHub Security tab, empty)
- npm registry @oh-my-pi/pi-coding-agent (dist-tags + full version manifest for 17.3.5)
- npm registry @earendil-works/pi-coding-agent (upstream Pi, for contrast only)
- https://omp.sh/install (install script, full source)
- GitHub can1357/homebrew-tap Formula/omp.rb + tap commit log
- oh-my-pi flake.nix and packages/coding-agent/package.json at main HEAD
- oh-my-pi docs/ tree listing and docs/rulebook-matching-pipeline.md at v17.3.5
- GitHub code search for time-traveling (TTSR) across can1357/oh-my-pi
- https://omp.sh/changelog (HTTP 200, client-rendered, no server-side version text)
