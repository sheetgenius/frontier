---
schema_version: bitter.frontier_harvest.v0
provider: omnigent
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/omnigent.yml
channels_present: [tagged-release, preview-or-beta]
window_volume: 4 material changes, 3 capability-bearing, 2 defect-bearing, 3 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- omnigent (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. worktree_guard's absolute-path arm shipped fixed in v0.8.0, ten hours after the merge

- **Date:** 2026-08-03 | **Version:** v0.8.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/omnigent-ai/omnigent/compare/v0.8.0...1c6dfedce7cb88186775d427f77203870b30483f -> status "behind", ahead_by 0, behind_by 34 (the fix commit is an ancestor of the v0.8.0 tag). The same compare against v0.7.0 returns status "diverged", ahead_by 374 (not in v0.7.0). Confirmed at the file level: https://raw.githubusercontent.com/omnigent-ai/omnigent/v0.8.0/omnigent/policies/builtins/orchestration.py line 589 reads `normalized = posixpath.normpath(path)` with `import posixpath` at line 12, while the same file at v0.7.0 line 586 still reads `normalized = os.path.normpath(path)`.
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/3856
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** PR #3856 replaced `os.path.normpath` with `posixpath.normpath` in the `worktree_guard` policy. The bug (issue #3855, filed 2026-08-01) was that `os.path` is `ntpath` on Windows and rewrites forward slashes to backslashes, so `normalized.startswith("/")` could never be true: `/etc/passwd` passed the backslash guard as a clean forward-slash string, became `\etc\passwd`, and the policy returned ALLOW. The `..` and `~` arms survived by coincidence; the hole was specifically absolute paths, including `C:/Windows/System32/...` and UNC `//server/share`. Merged 2026-08-03T11:31:21Z; v0.8.0 was tagged and published the same day at 21:45:24Z.

**Operator consequence.** Upgrade to v0.8.0 or later and stop tracking this one. Anyone running v0.7.0 or earlier on a Windows runner with `worktree_guard` as the only containment for unsandboxed implementer worker specs has a policy that returns ALLOW for any absolute write target; there is no config workaround, the fix is the upgrade. Note that the sibling defect is still open: issue #3852 and PR #3854 (Claude Code's MultiEdit/NotebookEdit missing from the built-in write policies) were filed the same day and remain unmerged as of this harvest.

## 2. v0.8.0 narrowed sandbox dotfile masking to top-level only, by default, on upgrade

- **Date:** 2026-08-03 | **Version:** v0.8.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #3519 merge commit e957f1b76289; gh api repos/omnigent-ai/omnigent/compare/v0.8.0...e957f1b76289 -> status "behind", ahead_by 0 (ancestor of the v0.8.0 tag). Listed under "Breaking changes" in the v0.8.0 release body. Merged 2026-07-30, i.e. outside the window; the release that carries it is inside it.
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/3519
- **Half:** both | security-relevant | **Confidence:** high

**What changed.** `cwd_hidden_scan_recursive` was introduced with default `false`. The sandbox previously walked the entire working-directory tree hiding every dotfile; it now scans only the top level of the cwd and of each `read_paths` root. The PR states the consequence in its own words: a dotfile nested below the first level (e.g. `services/api/.env`) is now readable by the sandboxed helper unless the flag is set to true, and this changes masking scope for existing configs on upgrade, not only new ones. A new `mask_paths` option was added to name non-dotfile secrets explicitly.

**Operator consequence.** Re-audit before upgrading past v0.7.0. If you run untrusted source trees under an Omnigent os_env sandbox, an in-place upgrade to v0.8.0+ silently widens what the sandboxed helper can read; set `cwd_hidden_scan_recursive: true` or enumerate the sensitive paths under `mask_paths`. Old configs parse unchanged, so nothing warns you.

## 3. Tag-push protection exists only on the nightly channel; no stable tag carries it

- **Date:** 2026-08-07 | **Version:** v0.10.0.dev20260812 and later nightlies
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** PR #3620 merge commit 5798d74e5b8a64d9215591c7f5914ea8c2979621, merged 2026-08-07T17:36:53Z. gh api repos/omnigent-ai/omnigent/compare/v0.9.0...5798d74e5b8a64d9215591c7f5914ea8c2979621 -> status "diverged", ahead_by 37 (NOT in the newest stable tag, which was cut four days later). Against the nightly prerelease tags v0.10.0.dev20260812, v0.10.0.dev20260813 and v0.10.0.dev20260817 -> status "behind", ahead_by 0 in each case. No GitHub release exists for any .dev tag, and PyPI carries zero .dev versions across all 28 published versions of the `omnigent` project.
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/3620
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** A `deny_tag_push` parameter, default `true`, blocks `git push --tags`, `git push --follow-tags` and explicit `refs/tags/` refspecs, and filters tag refspecs out of the branch set so they cannot pollute `write_branches` checks. The stated motivation is that an agent pushing a tag can trigger releases and deployments. It merged three days after its force-push sibling (#3570) but missed the v0.9.0 cut, which was branched before 2026-08-07 and only backported six named fixes.

**Operator consequence.** Watch, do not plan around it. If your release pipeline fires on tag push and you assumed the GitHub policy covers it because force-push protection shipped, it does not: on v0.9.0 an agent can still push a tag. Reaching it today means riding `omni upgrade --nightly` or pinning a git ref, both of which put you on an untagged, unreleased build. This is the cleanest illustration this window of why release channel has to be resolved by ancestry rather than by merge date: two sibling PRs three days apart, one released, one not.

## 4. Omnigent added an automated nightly channel that exists only as git tags

- **Date:** 2026-08-03 | **Version:** v0.8.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #3475 merge commit cfb431c20c6b, merged 2026-08-03T19:08:42Z; gh api repos/omnigent-ai/omnigent/compare/v0.8.0...cfb431c20c6b -> status "behind", ahead_by 0 (the workflow itself is in the v0.8.0 tag). The channel it creates is separately verified: git tags v0.9.0.dev20260804 through v0.9.0.dev20260811 and v0.10.0.dev20260812 through v0.10.0.dev20260817 exist, none of them has a GitHub release (the releases API returns 11 entries, all prerelease=false, newest v0.9.0), and the PyPI JSON API for `omnigent` lists 28 versions with zero containing "dev".
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/3475
- **Half:** capability | **Confidence:** high

**What changed.** A nightly workflow cuts a PEP 440 dev-datestamped tag (`0.9.0.dev0` on main becomes `v0.9.0.dev20260804`) from the newest fully-green commit on main, at 04:30 UTC, with no human in the loop. The nightly commit is detached and reachable only through its tag; main is never bumped. Consumption is `omni upgrade --nightly`, which resolves the newest nightly tag and reinstalls git-pinned with the detected installer, or `scripts/update_nightly.sh`. The PR is explicit that this is tag-only and does not go to the index: GitHub Releases, the changelog, Homebrew and `pip install omnigent` all ignore prerelease tags.

**Operator consequence.** Watch, and read it as a channel map rather than a feature. Omnigent now has four distinguishable channels -- PyPI stable, PyPI rc, git nightly tag, and main -- and only the first two are what `pip install omnigent` or `brew install omnigent` will ever hand you. Fourteen nightly tags accumulated in this window and none of them is installable through a package manager. If you read a merged PR and want the behaviour, the nightly tag is the only route short of a git pin, and it is an untested-by-release build.

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
