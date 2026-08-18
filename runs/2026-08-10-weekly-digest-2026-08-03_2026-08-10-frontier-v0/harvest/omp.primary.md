---
schema_version: bitter.frontier_harvest.v0
provider: omp
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/omp.yml
channels_present: [tagged-release]
window_volume: 2 material changes, 2 capability-bearing, 0 defect-bearing, 2 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- omp (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. OMP shipped a desktop and browser-relay surface: driving the user's real Chrome tabs, plus window capture, input injection, accessibility trees and clipboard

- **Date:** 2026-08-03 | **Version:** v17.2.5
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.2.5, published_at 2026-08-03T05:06:56Z, prerelease=false, draft=false; tag v17.2.5 points at 5039b33a11b4a5cb0b74e7a3080d06ef5daa0813. The release body carries a first-party @oh-my-pi/browser-relay section ("Initial release of the Chrome MV3 extension, enabling the omp browser tool to attach to and drive existing browser tabs via chrome.debugger"). npm published 17.2.5 on the same day, so all package channels carry it.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.2.5
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Three things landed together. A relay browser mode drives the operator's own local Chrome tabs through a new MV3 extension using chrome.debugger, with automatic daemon startup and per-window tab grouping. A scriptable desktop session adds window-targeted screen capture, input injection, native accessibility trees, clipboard access and streamed screenshots. And broker-shared language servers (the `lsp.shared` setting) multiplex one LSP server across multiple OMP instances in a project. The same release carries two breaking tool-schema changes: the computer tool's coordinate-batch schema was replaced by persistent JavaScript runs (and `computer.backend` plus model-specific controller switching were removed), and the edit tool's replace mode went from a multi-edit batch schema to a single-edit `{ path, old_string, new_string, replace_all? }` schema.

**Operator consequence.** Adapt, then decide deliberately whether to enable it. The breaking schema changes will break any extension, hook or automation that constructs edit or computer tool calls. The larger point is scope: an agent that attaches to your live logged-in Chrome via chrome.debugger and can capture windows, inject input and read the clipboard is no longer confined to a terminal, and the changelog documents no permission surface specific to that reach -- the tool-approval layer is the same one that gates a file write. If you run OMP on a workstation with authenticated browser sessions, treat relay mode as a separate trust decision. This is a fact about OMP; do not carry it to upstream Pi.

## 2. OMP added an exact-path extension allowlist that bypasses ambient discovery

- **Date:** 2026-08-06 | **Version:** v17.2.10
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.2.10, published_at 2026-08-06T12:28:54Z, prerelease=false; tag v17.2.10 -> 43c1b245e79f845c7ed7c692b79b4acd0f5c56af; npm published 17.2.10 at 2026-08-06T12:33:09Z. Changelog entry pinned at https://github.com/can1357/oh-my-pi/blob/v17.2.10/packages/coding-agent/CHANGELOG.md.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.2.10
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** A `--trusted-extension <absolute-path>` CLI flag loads an exact extension-module allowlist and bypasses ambient extension discovery entirely. The same release carries a breaking change: the re-exported `zod` API is replaced by an omptype-backed compatibility facade (`@oh-my-pi/omptype/zod`), so plugins keep the Zod-style builder interface but real Zod-specific APIs are gone.

**Operator consequence.** Try `--trusted-extension` if you run OMP against repositories you do not control. Ambient extension discovery walks configured roots, and OMP's rule discovery already reads in-workspace config (`.omp` rules, plus Cursor, Windsurf, Cline and GitHub rule providers, per docs/rulebook-matching-pipeline.md at v17.3.5), so a repository under review has surface to influence agent behaviour by default. An explicit absolute-path allowlist is the flag that closes the extension half of that. Adapt any plugin importing Zod-specific APIs before upgrading.

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
