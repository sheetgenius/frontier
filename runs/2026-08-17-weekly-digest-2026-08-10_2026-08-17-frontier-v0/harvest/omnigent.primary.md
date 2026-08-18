---
schema_version: bitter.frontier_harvest.v0
provider: omnigent
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/omnigent.yml
channels_present: [tagged-release]
window_volume: 8 material changes, 3 capability-bearing, 4 defect-bearing, 5 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- omnigent (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Shell-gate parser failed open on option-taking command wrappers; fixed on main in w1, released in v0.9.0

- **Date:** 2026-08-11 | **Version:** v0.9.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #3559 merge commit a4a924ae7582a11ecd4a809dbc5c38e7a18088d8, merged 2026-08-05T05:24:31Z. gh api repos/omnigent-ai/omnigent/compare/v0.9.0...a4a924ae7582a11ecd4a809dbc5c38e7a18088d8 -> status "behind", ahead_by 0. The same compare against v0.8.2 -> status "diverged", ahead_by 83, so the v0.8.x line released 2026-08-11 does NOT carry it. Confirmed in the generated CHANGELOG under [v0.9.0].
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/3559
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** `sudo`, `env`, `command`, `time` and `exec` were classified as skip-one-word wrappers rather than flag-taking wrappers, so `sudo -u root git push ...` left `-u` where the command should be: the classifier saw no `git`, the policy abstained, and the shell gate returned ALLOW. The same hole existed one level down for bundled short options (`sudo -nu root git push`, `env -iu FOO git push`, and pre-existing `nice -qn 10 git push` against the wrappers fixed by the June advisory GHSA-7mqg-cx4g-x2rf). The fix moves the wrappers into the flag-aware table, scans option bundles character by character, and adds `is_unresolved_invocation()` as a fail-safe so an unmodelled wrapper routes to each policy's existing can't-parse path (ASK in github.py, the configured action in working_dir.py) instead of abstaining.

**Operator consequence.** Upgrade to v0.9.0. This is the same failure class as the June guardrail-bypass advisory, reached through a different wrapper table, and it defeats both the GitHub Repo & Branch Access policy and the Block Working Directory policy. Anyone pinned to the v0.8.x line, including v0.8.2 released the same day as v0.9.0, is still exposed. No advisory was published for it.

## 2. GitHub policy denies force-push by default in v0.9.0

- **Date:** 2026-08-11 | **Version:** v0.9.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #3570 merge commit 0af9ad141a541b13930f6e222fea15f35844cd44, merged 2026-08-04T13:24:08Z. gh api repos/omnigent-ai/omnigent/compare/v0.9.0...0af9ad141a541b13930f6e222fea15f35844cd44 -> status "behind", ahead_by 0; against v0.8.2 -> "diverged", ahead_by 42. Also listed in the generated CHANGELOG under [v0.9.0] (#3570).
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/3570
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** A `deny_force_push` parameter, default `true`, blocks `git push` carrying `--force`, `-f`, `--force-with-lease` or `--force-if-includes` regardless of the repo and branch allowlists. The check fires before repo/branch gating, so a force push to an undeterminable remote alias is DENY rather than ASK, and it survives a `bash -c` wrapper. Operators opt out with `deny_force_push: false`.

**Operator consequence.** Test before upgrading if any of your agents legitimately force-push (rebase-and-push automation, release branch resets); the default flips to deny and the deny is unconditional. Otherwise this is a control you now get without writing it, and it is the first of the two push-shaped controls to actually reach a release.

## 3. Omnigent now gates ACP harnesses' delegated file I/O with its own result-phase policy -- and it fails open

- **Date:** 2026-08-11 | **Version:** v0.9.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #1222 merge commit 300c5fd9333cb12d217d120753cb204b76355a03, merged 2026-08-05T03:04:51Z. gh api repos/omnigent-ai/omnigent/compare/v0.9.0...300c5fd9333cb12d217d120753cb204b76355a03 -> status "behind", ahead_by 0; against v0.8.2 -> "diverged", ahead_by 75.
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/1222
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** For the qwen and goose ACP harnesses, file reads and writes that the harness delegates back to Omnigent's OSEnvironment now emit a paired ToolCallRequest/ToolCallComplete onto the turn stream (so they appear in history) and run the read or written bytes through PHASE_TOOL_RESULT policy. An explicit POLICY_ACTION_DENY refuses the operation -- on read the bytes never reach the agent, on write the evaluation happens before OSEnvironment.write so the write never happens. The PR states the semantics plainly: it fails open otherwise, for an unwired policy, an evaluation error, or any non-deny verdict, because FAIL_CLOSED_PHASES contains PHASE_TOOL_CALL only. The gate is content-only: the server reads result-phase tool identity from request_data, which the harness policy round-trip does not carry.

**Operator consequence.** This is the first receipted answer to the meta-harness question of which layer refuses, and the answer is conditional. For qwen and goose on v0.9.0, Omnigent's policy can now refuse a delegated file operation -- but only on an explicit DENY, and an evaluation error or an unwired policy is an ALLOW. Test it rather than assume it, and do not generalise: this is two ACP harnesses, not the harness list. It is a fact about the Omnigent/qwen and Omnigent/goose pairs.

## 4. v0.9.0 reverted owner-only approval: a shared editor can again authorize tool calls that run with the owner's credentials

- **Date:** 2026-08-11 | **Version:** v0.9.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #4318 landed on main as 7efe05623b687db9373191d323d58687ec383fb0 on 2026-08-07T04:54:05Z. Ancestry against the tag is misleading and must be read carefully: gh api repos/omnigent-ai/omnigent/compare/v0.9.0...7efe0562 returns status "diverged" (ahead_by 15, behind_by 2, merge base 0b00c53026642c3de4d8cc05003fae53a44ff76d), because releases are cut on release/vX.Y branches and this change was cherry-picked, not merged. The v0.9.0 tag object points at cc4720a79fbdf9ccee56724bf571e7d48e1d9ac2, whose commit message is "Backport six post-cut fixes onto release/v0.9.0 (#4596)" and contains the line "(cherry picked from commit 7efe05623b687db9373191d323d58687ec383fb0)". Content is in the tag; the SHA is not.
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/4318
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** The whole #2150 stack was unwound: delegated `can_approve` authority (#3446), model-visible shared-message attribution (#3422), and owner-only approval gating (#3416). #3416 was a security fix, and its revert is labelled a security regression in the PR body and again in the backport commit message: shared-session tools execute with the session owner's runner identity and ambient credentials, so with #3416 reverted a shared editor can once again authorize owner-credentialed tool calls. Issue #2150 was re-opened. Note the whiplash: the delegation feature was announced as a headline in the v0.8.0 notes eight days earlier.

**Operator consequence.** Re-audit your session sharing before or immediately after upgrading to v0.9.0. Anyone you have granted edit access to a shared session can approve tool calls that then execute as you, with your credentials. Treat shared editor as equivalent to approver until #2150 lands again. Also note the process fact: a governance property that appeared in one release's headline features was removed in the next.

## 5. Smart Routing picks the harness and the model -- and a routed switch writes Claude Code's default model outside Omnigent

- **Date:** 2026-08-11 | **Version:** v0.9.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #4074 merge commit b2681303401ca3e5d90d57d2c0fb318040991474, merged 2026-08-05T22:34:55Z. gh api repos/omnigent-ai/omnigent/compare/v0.9.0...b2681303401ca3e5d90d57d2c0fb318040991474 -> status "behind", ahead_by 0. Headlined in the v0.9.0 release body (#4074, #4181, #4213).
- **Receipt:** https://github.com/omnigent-ai/omnigent/pull/4074
- **Half:** capability | **Confidence:** high

**What changed.** Smart Routing scores each task and selects both the model and, where allowed, the harness, across Claude Code and Codex; subagent spawns are routed per task, and a spawn that names a model is honored only when the router independently picks the same arm. The PR documents a boundary crossing in its own words: Omnigent still never writes the user's ~/.claude/settings.json itself, but Claude Code saves the model typed via the injected `/model <id>` command as the user's default, so a routed switch changes the default model for new Claude sessions started outside Omnigent. The PR calls this an accepted trade-off. v0.9.0 also adds Databricks AI Gateway smart routing alongside the OSS LLM-classifier router.

**Operator consequence.** Try it deliberately, not by default. Two things follow for an operator. First, when the router selects the harness, the governance layer an action lands under changes without you choosing it -- your Omnigent policy set is constant but the harness's own permission system underneath is not. Second, a routed session mutates state outside Omnigent: your bare `claude` sessions afterwards start on whatever model the router last picked. If that matters, pin the harness rather than using auto.

## 6. Omnigent's max_cost_usd is still a downgrade gate, not a hard stop, unless you write expensive_models: []

- **Date:** 2026-08-11 | **Version:** v0.9.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Read the policy source at https://raw.githubusercontent.com/omnigent-ai/omnigent/v0.9.0/omnigent/policies/builtins/cost.py and diffed it against the same file at v0.7.0: the only differences across the whole window are type-annotation and isinstance hardening from the pyrefly lint sweep (commit 1262652a039c, 2026-08-03, #3972). No semantic change. gh api "repos/omnigent-ai/omnigent/commits?path=omnigent/policies/builtins/cost.py&since=2026-08-01" returns exactly one commit, that lint sweep. The docstring at v0.9.0 lines 21-28 still reads: "once spend reaches this, the policy forces a model downgrade. Rather than stopping the session, it DENYs while the session is still on an expensive model ... the budget becomes a 'downgrade gate,' not a hard stop."
- **Receipt:** https://github.com/omnigent-ai/omnigent/blob/v0.9.0/omnigent/policies/builtins/cost.py
- **Half:** neither | **Confidence:** high

**What changed.** Nothing, and that is the finding. Across v0.8.0, v0.8.1, v0.8.2 and v0.9.0 the semantics of `max_cost_usd` are unchanged. `_resolve_expensive_models` at v0.9.0 lines 380-414 returns `block_all_models=True` when `expensive_models` is `None` or `[]` -- that path is a true hard stop, and it was established by #1631 on 2026-06-30, before this window. Supply a non-empty `expensive_models` list and you get the downgrade gate: over budget, tool calls are DENYed while the session sits on a listed model and ALLOWed again once it moves to a cheaper one. The cap is evaluated at the request phase as well as the tool-call phase, and it fails closed when the active model is undeterminable.

**Operator consequence.** Read your own config rather than the feature name. If you wrote `cost_budget` with an explicit `expensive_models` list expecting the number to stop the session, it does not -- it forces a model switch and the session keeps spending on the cheaper arm. Omitting `expensive_models` entirely, or setting it to `[]`, is the hard stop. Nothing in this window changed that, so anyone who checked in July does not need to re-check.

## 7. The same blind-approval hole reappeared through a tool's wire-level alias and was fixed again in v17.3.5

- **Date:** 2026-08-16 | **Version:** v17.3.5
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Fix commit 1fc05fc635ce2c1ae53ef9de10fc26d37902da61, "fix(tui): waited for wire-aliased edit previews", authored 2026-08-15T03:32:17Z. gh api repos/can1357/oh-my-pi/compare/v17.3.5...1fc05fc635ce -> status "behind", ahead_by 0; against v17.3.4 -> status "ahead", ahead_by 1. GitHub release v17.3.5 published 2026-08-16T08:00:13Z; npm published 17.3.5 at 2026-08-16T08:03:37Z; the Homebrew tap moved to 17.3.5 at 2026-08-16T08:00:38Z.
- **Receipt:** https://github.com/can1357/oh-my-pi/blob/v17.3.5/packages/coding-agent/CHANGELOG.md
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** The v17.3.5 changelog entry: "Fixed always-ask approval prompts bypassing edit preview readiness when a built-in tool executes under its wire-level alias, such as edit running as apply_patch." The preview-readiness wait added five days earlier keyed on the tool's own name, so the same built-in reaching the approval path under its wire alias skipped the wait and reproduced the original defect.

**Operator consequence.** Upgrade to v17.3.5 or later, and treat the pair as the lesson rather than either fix alone. A human-in-the-loop control was repaired, then routed around by the same code path under a different name, inside one release window. If you are auditing an approval gate in any harness, the question to ask is not whether the gate fires but whether every alias of the gated operation reaches it.

## 8. Both of OMP's stored-state behaviour systems had scoping and delivery defects fixed this window

- **Date:** 2026-08-13 | **Version:** v17.3.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** Published GitHub release https://github.com/can1357/oh-my-pi/releases/tag/v17.3.0, published_at 2026-08-13T07:02:57Z, prerelease=false. The earlier of the two fixes is in https://github.com/can1357/oh-my-pi/releases/tag/v17.2.9, published_at 2026-08-05T01:32:09Z. Both changelog sections pinned at https://github.com/can1357/oh-my-pi/blob/v17.3.0/packages/coding-agent/CHANGELOG.md.
- **Receipt:** https://github.com/can1357/oh-my-pi/releases/tag/v17.3.0
- **Half:** defect | **Confidence:** medium

**What changed.** Hindsight memory, OMP's server-side memory backend, had two defects fixed in this window. v17.2.9 (2026-08-05): `autoRecall` intermittently never reached the model, because two recall paths shared a `hasRecalledForFirstTurn` flag and the `agent_start` path could consume it first, injecting only through an unawaited background prompt rebuild that a fast turn outran; `beforeAgentStartPrompt`, awaited before the turn builds, is now the sole injection path (issue #7568). v17.3.0 (2026-08-13): Hindsight scoping was splitting one repository across multiple scopes on case-sensitive filesystems, now fixed by lowercasing the project label. Separately on the rules side, docs/rulebook-matching-pipeline.md at v17.3.5 documents that TTSR (Time Traveling Stream Rules) and rulebook rules are discovered from in-workspace sources -- native `.omp` rules, OMP plugin roots, agents, Cursor, Windsurf, Cline and GitHub providers -- and that rule identity and precedence are name-based only, so two different files sharing a `name` are treated as the same logical rule.

**Operator consequence.** Upgrade, and treat memory-driven behaviour as non-deterministic before v17.3.0. An intermittent autoRecall means two identical sessions could have had different context, and a scope split means recall could be reading a different repository's memories than you expect -- neither is visible in the transcript. The doc fact is the one to carry forward rather than act on: rules that steer the agent are loaded from files inside the repository being worked on, and precedence is decided by name alone, so a repository under review can present a rule whose name collides with one of yours. I did not probe that, so it is a reading of the documented pipeline, not a demonstrated defect.

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
