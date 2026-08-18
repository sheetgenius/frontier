---
schema_version: bitter.frontier_harvest.v0
provider: gemini-cli
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/gemini-cli.yml
channels_present: [tagged-release]
window_volume: 3 material changes, 1 capability-bearing, 2 defect-bearing, 1 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- gemini-cli (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Gemini CLI v0.54.0 -- HTTPS enforced for Google credential auth, keychain tag validation

- **Date:** 2026-08-06 | **Version:** v0.54.0
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/google-gemini/gemini-cli/releases/tags/v0.54.0` -> prerelease:false, published_at 2026-08-06T01:35:59Z. `git tag --contains e2a5375d1` -> v0.54.0 v0.54.4 v0.55.1 (v0.54.0 is the earliest stable). Same for bef611950. Confirmed neither is in v0.53.1 via `git log v0.53.1..v0.54.0`.
- **Receipt:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** Stable v0.54.0 (19 commits over v0.53.1) is the first release containing #28517 (commit e2a5375d10d59f2378db6fb8b973eeaef4cf26eb), which enforces HTTPS in `GoogleCredentialsAuthProvider` to prevent credentials being sent in cleartext, and #28523 (commit bef6119500b0238ad84f6396d2a6cabda9991554), which enforces explicit tag length and validation in the file keychain -- an authenticated-encryption hygiene fix on the at-rest credential store. It also carries #28469, rotating the session ID on model fallback so a fallback no longer reuses server-side state from the exhausted model.

**Operator consequence.** Upgrade past v0.54.0 if you authenticate via `GOOGLE_APPLICATION_CREDENTIALS` or a service account, especially through a proxy or a non-TLS internal endpoint -- before this the provider would transmit over plain HTTP if pointed there. Neither issue has a published advisory, so version-scanning tools will not flag you; check your installed version directly.

## 2. Stable version numbers went discontinuous: 0.54.0 to 0.54.4 in 27 hours, 0.54.1-0.54.3 never published

- **Date:** 2026-08-07 | **Version:** v0.54.4
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `gh api repos/google-gemini/gemini-cli/tags` contains v0.54.0 and v0.54.4 with no v0.54.1/.2/.3. `npm view @google/gemini-cli versions` likewise jumps 0.54.0 -> 0.54.4. `git log v0.54.0..v0.54.4` returns exactly 5 commits: one cherry-pick (#28710), a bump to 0.54.2 (#28712), a revert of that bump (#28715), and two release chores.
- **Receipt:** https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.4
- **Half:** defect | **Confidence:** high

**What changed.** v0.54.4 published 2026-08-07T04:44Z, 27 hours after v0.54.0. Its entire content is one cherry-picked fix (#28700, stopping a new user message from fusing into an unanswered tool response) plus a version bump to 0.54.2 and a revert of that bump. The intervening patch numbers were burned by release-machinery churn, not by shipped code; neither GitHub nor npm has 0.54.1, 0.54.2, or 0.54.3. In the same window #28694 landed to handle npm dist-tag deletion failures on registries that forbid it, and npm still carries a stray dist-tag literally named `false` pointing at a May 2026 nightly.

**Operator consequence.** Ignore for behaviour; adapt your tooling. Any policy that infers 'how much changed' from patch distance, or that enumerates intermediate versions to build an upgrade path, will break on this line -- three of the four patch numbers do not exist. Pin exact versions and diff by git range, not by semver arithmetic.

## 3. The autonomous PR pipeline that writes those commits landed in-repo, undocumented

- **Date:** 2026-08-07 | **Version:** in v0.55.1 tree, not in the npm package
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** `git tag --contains bde504f25` -> v0.55.1 (stable). Same for cf22ac7e8 and the rest of the 2026-08-05..08-07 batch. Nuance: this code sits under `tools/caretaker-agent/`, and `git show v0.55.1:package.json` gives `workspaces: ["packages/*"]` -- so it is inside the stable tag's tree but is not part of the published npm package.
- **Receipt:** https://github.com/google-gemini/gemini-cli/pull/28431
- **Half:** capability | **Confidence:** high

**What changed.** Between 2026-08-05 and 2026-08-07, twelve PRs from @joneba-google and @chadd28 built out `tools/caretaker-agent/` in the Gemini CLI repo: a Cloud Run job, Workflows definition and Dockerfile for a PR generator (#28431, commit bde504f2500bd2326fd578c5828476cede9442d8); an iterative bug-fixing state machine and container worker entrypoint (#28433); an environment-config parser, command executor and GitHub client (#28435); an Antigravity agent runner with prompt templates (#28434); a Firestore-backed job store with dual locking (#28432); an LLM triage orchestrator with prompt hill-climbing (#28345, #28524); a triage evaluation framework with a judge runner and golden-issue collection (#28530, #28532); a Pub/Sub `ready-for-code` topic publisher (#28588); and a GCP deployment script (#28529). Google is running the loop against its own issue tracker -- earlier work in the same series (#28352) sanitizes and wraps GitHub issue titles in `untrusted_context` before feeding them to the triage model. No entry for any of this exists in `docs/`, README.md, or ROADMAP.md: `grep -rli 'caretaker|SSR agent|pr-generator' docs/ README.md ROADMAP.md` matches only the auto-generated changelog files.

**Operator consequence.** Observe -- this is the mechanism, not the product. Nothing here ships in `@google/gemini-cli`, so it changes no runtime behaviour. What it changes is what a commit on this repo means: from 2026-08-14 the same pipeline began landing fixes on main. If you maintain an adapter, a fork, or a security posture that assumes human authorship of upstream changes, that assumption expired in this window, and there is no upstream documentation to tell you so.

## Researcher lane notes

Method: read sources/gemini-cli.yml and gemini-cli.notes.md before any web access. Made a blobless clone into scratchpad (no writes to /Users/honey/co/frontier) so every channel call could be settled by `git tag --contains <sha>` rather than by publication date. All 45 default-branch commits in the window were reviewed; every claim above is pinned to a tag, a PR, or a SHA-pinned blob.

Confidence and calibration notes:
- The SSR-agent story is the window's centre of gravity and it is fully receipted, but I want to flag one place I nearly got it wrong. PR #28818, closed unmerged, is titled 'Change steering eval test to always pass' -- which reads like an agent proposing to neuter a failing test. It is the opposite: `ALWAYS_PASSES` is the *stricter* eval policy name and the PR raises the bar from `USUALLY_PASSES`. I have left that claim out entirely rather than report the tempting version. Anyone re-reporting this lane should not resurrect it.
- Similarly, I did not claim the a2a-server `setIsTrusted` feature-flag bug was exploitable in stable. `git grep setIsTrusted c0d192452^ -- packages/` shows it had no production caller in the a2a-server before #28792 revived it. It is a latent-divergence story, not a live-vulnerability story, and the finding says so.
- Issue #28761 was filed against 0.54.4, which contains neither #28599 nor #28716 by ancestry (`git tag --contains` puts both in v0.55.1 only). PR #28790 says it closes #28761 and is 'related to' the other two. I have stated the ancestry facts and the maintainers' own words rather than asserting that #28716 caused the reporter's symptom; the causal chain is the maintainers' claim, not mine.

Gaps recorded honestly:
- `gh api repos/google-gemini/gemini-cli/security-advisories` returns an empty array, and `/advisories?ecosystem=npm&affects=@google/gemini-cli` returns only GHSA-wpqr-6v78-jr5g (critical, 2026-04-24, outside the window). So none of this window's security-relevant work -- HTTPS enforcement on the credential provider, the keychain tag validation, the NODE_OPTIONS quoting, the git-config neutralization -- carries a CVE or GHSA. Operators who rely on advisory feeds or `npm audit` will see nothing for any of it. That absence is itself the finding, and it is why every security item above is anchored to a commit rather than an advisory ID.
- The official docs site (https://google-gemini.github.io/gemini-cli/docs/) shows no changelog or what's-new surface and did not move materially in the window; `git log --since=2026-08-03 -- docs/` returns six commits, of which four are auto-generated changelog dumps and two are agent-authored one-liners. No doc, README, or roadmap entry exists anywhere in the repo for the caretaker-agent / SSR pipeline: `grep -rli 'caretaker|SSR agent|pr-generator' docs/ README.md ROADMAP.md` matches only the generated changelogs. There is therefore no docs-surface receipt for the window's biggest governance change, and I did not manufacture one.
- I did not run gemini-cli locally, so nothing here rests on a reproducible local probe. The git-config attack path in v0.55.1 is asserted from code reading plus the maintainers' own validation steps in #28792 ('set a custom pager, execute a git operation through Gemini CLI'), not from an executed exploit. If this lane's finding gets promoted to a signal, that probe is the obvious next verification step and would upgrade it from code-read to demonstrated.
- One unresolved smell I could not settle and am not reporting as a change: agent-authored #28811 rewrote `delete process.env['CODER_AGENT_WORKSPACE_PATH']` as `vi.stubEnv('CODER_AGENT_WORKSPACE_PATH', '')` in the a2a-server tests. Unset and empty-string are not the same value, and this is the package whose environment isolation the v0.53.0 RCE fix depends on. Every affected assertion happens to be truthiness-based, so the tests still cover what they claim to; but it is a machine-introduced semantic drift in a security-relevant test file, and it is the kind of thing worth watching as the SSR volume grows.
- Nightly tags were enumerated but deliberately not harvested, per the source notes' instruction not to over-weight nightly churn. Every nightly in the window maps to a main commit already covered above.

## Surfaces checked

- sources/gemini-cli.yml (source contract, read first)
- sources/gemini-cli.notes.md
- GitHub releases API: repos/google-gemini/gemini-cli/releases (full pagination)
- GitHub tags API: repos/google-gemini/gemini-cli/tags
- Release bodies for v0.54.0, v0.54.4, v0.55.1
- google-gemini/gemini-cli default branch commit log 2026-08-03..2026-08-17 (blobless clone, git log/git tag --contains)
- Merged and closed PRs #28431-#28884 (targeted), incl. all 29 [SSR Agent] PRs
- Issue #28761 (capacity-exhaustion regression report)
- GitHub security advisories: repos/google-gemini/gemini-cli/security-advisories (empty) and /advisories?ecosystem=npm&affects=@google/gemini-cli
- npm registry: @google/gemini-cli dist-tags, versions, publication times
- Official docs site https://google-gemini.github.io/gemini-cli/docs/
- docs/ tree in repo (git log --since=2026-08-03 -- docs/)
- Source read at pinned SHAs: packages/core/src/utils/trust.ts, packages/cli/src/config/settings.ts, packages/cli/src/config/trustedFolders.ts, packages/a2a-server/src/config/settings.ts, packages/a2a-server/src/config/config.ts, packages/a2a-server/src/agent/executor.ts, packages/a2a-server/src/http/app.ts, packages/core/src/utils/gitUtils.ts, packages/core/src/policy/policy-engine.ts, packages/core/src/availability/modelAvailabilityService.ts, packages/core/src/services/FolderTrustDiscoveryService.ts
