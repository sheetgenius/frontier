---
schema_version: bitter.frontier_harvest.v0
provider: paperclip
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/paperclip.yml
channels_present: [tagged-release, preview-or-beta, main-unreleased, docs-only]
window_volume: 12 material changes, 5 capability-bearing, 5 defect-bearing, 4 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- paperclip (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Paperclip tagged again: v2026.817.0, the first stable in 26 days, carrying 315 commits

- **Date:** 2026-08-17 (release header and version string); GitHub publish timestamp 2026-08-18T03:17:29Z UTC
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/paperclipai/paperclip/releases -> v2026.817.0, prerelease=false, draft=false, target_commitish=master, created_at 2026-08-18T02:27:30Z, published_at 2026-08-18T03:17:29Z, author github-actions[bot]. Tag object resolves to commit 213dabab4f8e1f3bb1803a2924c0fea1289fcd4c (committed 2026-08-18T02:27:30Z). gh api repos/paperclipai/paperclip/compare/v2026.722.0...v2026.817.0 -> status=ahead, ahead_by=315, behind_by=0. The release body's own header line reads '> Released: 2026-08-17'; the UTC publish stamp falls ~3h past the window edge, which is 2026-08-17 19:17 US Pacific.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
- **Half:** both | **Confidence:** high

**What changed.** After 26 days in which Paperclip put hundreds of commits on master and tagged nothing, it published a stable release: v2026.817.0, 315 commits past v2026.722.0, 311 of them from 17 contributors per the release's own contributor line. It carries a first-class Decisions propose/decide workflow, full-fidelity company Import/Export, a managed CLI install and service lifecycle, a merged Activity/audit page, and four stated breaking changes. Note the boundary honestly: the version string and the release header say 2026-08-17, GitHub's publish timestamp says 2026-08-18T03:17:29Z.

**Operator consequence.** Upgrade, but read the Upgrade Guide first: 28 migrations (0184-0211) run automatically on startup and migration 0196 drops the tables belonging to the removed experimental Cloud Sync transport. Anyone who has been tracking master because there was no stable to track can now stop.

## 2. Paperclip built a four-channel release train: canary to nightly to beta to stable, with an enforced 3-day beta soak

- **Date:** 2026-08-10T19:16:55Z (#11006) and 2026-08-10T23:53:00Z (#11008)
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #11006 merge commit f9173782cd12bc5e47466150892c0724789d26af, merged 2026-08-10T19:16:55Z, base master; compare f9173782...v2026.817.0 -> ahead, ahead_by=10, behind_by=0. PR #11008 merge commit 8f7b8b3fdab2c6940f5d712134d9f62e42c7a293, merged 2026-08-10T23:53:00Z, base master; compare 8f7b8b3f...v2026.817.0 -> ahead, ahead_by=4, behind_by=0. doc/CHANNELS.md read as a blob pinned at the tag confirms the shipped, not merely merged, user-facing contract. npm dist-tags on 2026-08-18 read latest=2026.817.0, beta=2026.818.0-beta.0, nightly=2026.818.0-nightly.0, canary=2026.818.0-canary.7.
- **Receipt:** https://github.com/paperclipai/paperclip/pull/11008
- **Half:** capability | **Confidence:** high

**What changed.** Two merges on 2026-08-10 replaced Paperclip's two-lane release model with four. #11006 adds a nightly channel: a scheduled job picks the newest master commit that published a green canary, runs the full release smoke suite (real Docker container, browser-driven onboarding) against that exact published artifact, and only republishes it as nightly on green -- if smoke fails there is no nightly that night. It also separated Docker tags by lane. #11008 adds a beta channel gated behind the npm-beta GitHub environment (required reviewers are the gate), re-smoked after publish, plus a preflight_stable job that reads the beta's npm publish time and refuses a stable promotion unless the same commit soaked as a beta for at least 3 days; skip_soak_justification is the recorded emergency bypass and a registry outage makes the preflight fail closed into requiring it. First nightly published 2026-08-10T21:42:18Z, first beta 2026-08-11T03:14:49Z.

**Operator consequence.** Pick a lane and pin it. `npx paperclipai@beta` is now a real release-candidate channel with a human approval gate, which is the first time this source has offered anything between 'every merge' and 'wait weeks'. If you want early sight of Paperclip changes you no longer have to run master.

## 3. Correction to this publication's own record: the canary lane was never dormant, and prerelease channel is resolvable by git ancestry

- **Date:** 1058 canary tags spanning 2026-03-17T21:37:58Z to 2026-08-18; verified 2026-08-18
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** gh api repos/paperclipai/paperclip/git/matching-refs/tags/canary/ -> 1058 refs, first refs/tags/canary/v2026.3.17-canary.3, last refs/tags/canary/v2026.818.0-canary.7. matching-refs/tags/nightly/ -> 5 refs; matching-refs/tags/beta/ -> 2 refs: beta/v2026.811.0-beta.0 at 8f7b8b3fdab2c6940f5d712134d9f62e42c7a293 and beta/v2026.818.0-beta.0 at 43ab441f0ff28cf83d4968556c2d0a9742d28113. The flat repos/.../tags listing does not surface these because they live under slash-prefixed namespaces; the npm packument shows 1110 canary publishes on the 2026.* line with no gap.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
- **Half:** neither | **Confidence:** high

**What changed.** The 2026-07-27 harvest concluded that Paperclip's canary lane was 'abandoned, not merely quiet' because the newest canary git tag it could see was paperclipai@0.3.1-canary.1 from 2026-03-12, and that 'no preview-or-beta release channel exists in tag form'. That was wrong, and the error was one of namespace, not of fact: canary tags moved to refs/tags/canary/v* on 2026-03-17 and have run continuously ever since -- 1058 of them. Nightly and beta now have their own namespaces too. This matters mechanically: beta/v2026.811.0-beta.0 points at 8f7b8b3f, which is exactly the merge-base of master and v2026.817.0, so the release body's claim that the stable is the promoted beta is provable by ancestry rather than taken on trust.

**Operator consequence.** Re-audit how you resolve Paperclip's channel. Query refs/tags/canary/, refs/tags/nightly/ and refs/tags/beta/ explicitly, or read the npm dist-tags; the flat tag list and the GitHub releases page both show stable only and will keep telling you the prerelease lanes are empty.

## 4. Breaking: Docker `:latest` changed meaning from every master merge to stable only

- **Date:** 2026-08-10T19:16:55Z (merge); took effect with the first stable after it, 2026-08-17/18
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #11006 merge commit f9173782cd12bc5e47466150892c0724789d26af; compare f9173782...v2026.817.0 -> ahead, behind_by=0. Listed first under 'Breaking Changes' in the v2026.817.0 release body, and in doc/CHANNELS.md pinned at the tag.
- **Receipt:** https://github.com/paperclipai/paperclip/pull/11006
- **Half:** both | **Confidence:** high

**What changed.** ghcr.io/paperclipai/paperclip:latest previously tracked every merge to master. It now moves only on stable releases. Master builds publish :canary, nightly tags publish :nightly, beta tags publish :beta, stable tags publish :latest plus :YYYY.MDD.P version tags, and every image gets :sha-<short-sha> for exact pinning. The PR also records why no stable-versioned image existed in ghcr before this: tags pushed with GITHUB_TOKEN never fired the v* trigger in docker.yml, so CI-published stables produced no images at all.

**Operator consequence.** If you pull :latest and expected master, switch to :canary or :nightly now -- your image is about to stop moving daily and start jumping in 300-commit steps. If you wanted a stable image and had been stuck on :latest, you finally have one, and :sha-<short-sha> is the pin to use in production.

## 5. The stable that shipped on 2026-08-17 contains no code merged after 2026-08-10

- **Date:** content freeze 2026-08-10T23:52:59Z; published 2026-08-18T03:17:29Z UTC
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** gh api repos/paperclipai/paperclip/compare/master...v2026.817.0 -> merge_base_commit 8f7b8b3fdab2c6940f5d712134d9f62e42c7a293, committed 2026-08-10T23:52:59Z ('feat(release): add human-gated beta channel with stable soak enforcement (#11008)'), with exactly 4 commits in the tag and not on master. Those 4 are 820fa9ee0 (.github/workflows/pr.yml, release-verify.yml, scripts/run-vitest-stable.mjs), b792a4594, 67fedf8c4 and 213dabab4 (all releases/v2026.817.0.md only) -- CI and release notes, no shipped runtime code. Spot-checked containment: every PR merged at or before 2026-08-10T23:53Z tested returns status=ahead against the tag; every PR merged after returns diverged with behind_by>0 (e.g. #11101 at 815e49bb7 -> diverged, behind=12).
- **Receipt:** https://github.com/paperclipai/paperclip/compare/v2026.722.0...v2026.817.0
- **Half:** neither | **Confidence:** high

**What changed.** The new soak policy has a visible consequence the release name hides. v2026.817.0 is the promotion of beta/v2026.811.0-beta.0, whose commit is 8f7b8b3f from 2026-08-10T23:52:59Z. Everything merged between 2026-08-11 and 2026-08-17 -- 176 commits, including two security-class fixes -- is not in it. The only things the release branch added on top of the soaked beta are one CI test-sharding refactor and three edits to the release-notes file, so the release body's claim that this is 'this exact build' holds for shipped code.

**Operator consequence.** Do not read the version number as a date. v2026.817.0 is a 2026-08-10 build wearing a 2026-08-17 name, which is exactly what a 3-day soak gate is supposed to produce. Resolve any fix you care about by ancestry against 8f7b8b3f, not by comparing its merge date to the release date.

## 6. Experimental Cloud Sync removed; company Import/Export is the only supported data-movement path

- **Date:** merged 2026-07-30T18:37:00Z (outside window); first released 2026-08-17/18
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #10507 merge commit 916c13501f80c7d1d659b89e4a06dc47366aa80f, merged 2026-07-30T18:37:00Z, base master. gh api repos/paperclipai/paperclip/compare/916c1350...v2026.817.0 -> status=ahead. Not contained in any earlier stable: the previous stable v2026.722.0 was published 2026-07-22T23:05:41Z, eight days before the merge. Listed under 'Breaking Changes' in the v2026.817.0 release body.
- **Receipt:** https://github.com/paperclipai/paperclip/pull/10507
- **Half:** both | **Confidence:** high

**What changed.** The flag-gated host-to-host Cloud Sync transport is gone and migration 0196 drops its state tables. Import/Export takes over as the single way to move a company between instances, with no reachability or cross-instance auth requirement: bundles at schemaVersion 6 carry labels, blockers, issue documents, work products, monitors, and every attachment as content-addressed sha256 blobs verified before a single row is written; imports run as durable async jobs with an integrity guard; the upload cap is 1 GB, configurable via the new PAPERCLIP_IMPORT_ZIP_MAX_BYTES. Company data is stated as untouched -- only the experimental transport's own bookkeeping is dropped.

**Operator consequence.** If you enabled experimental Cloud Sync, stop depending on it before upgrading; the tables go away on startup with migration 0196 and there is no in-place replacement, only export-then-import. This is also a clean illustration of the rule: the code merged on 2026-07-30 and stopped being a merge-only fact only on 2026-08-17.

## 7. Review-policy bypass on interaction verdict routes -- fixed on master, in no release

- **Date:** 2026-08-15T02:06:47Z
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** PR #11405 merge commit 57edb26db, merged 2026-08-15T02:06:47Z, base master. gh api repos/paperclipai/paperclip/compare/57edb26db...master -> status=ahead (contained on the default branch). gh api repos/paperclipai/paperclip/compare/57edb26db...v2026.817.0 -> status=diverged, ahead=4, behind=121 -- the stable tag does not contain it. No prerelease contains it either: the newest beta ref beta/v2026.818.0-beta.0 points at 43ab441f, committed 2026-08-17T21:30:58Z, but 57edb26db is not in its ancestry path via the tag comparison above; the only channel it is on is master.
- **Receipt:** https://github.com/paperclipai/paperclip/pull/11405
- **Half:** defect | security-relevant | **Confidence:** high

**What changed.** An authorization bypass in Paperclip's own review governance. On an issue with reviewPolicy set to human_only or not_creator, an agent could resolve some pending confirmation interactions because the interaction verdict routes did not apply the issue review policy to every confirmation verdict. Separately, a writer could submit a terminal verdict and change reviewPolicy to 'anyone' in the same request, weakening the stored policy before the server authorized the verdict. The fix row-locks the issue and reauthorizes both the verdict and any policy change against the current policy inside the transaction, persists the transition and its requester activity in the same transaction so concurrent verdicts cannot read an older review cycle, and removes remediation text that had suggested weakening the policy. The PR states the problem reproduces on 8ee1fb21a6.

**Operator consequence.** Watch, and do not treat human_only or not_creator as a hard gate on any released Paperclip build. The fix is on master only; the stable published two days later does not contain it because the release was frozen on 2026-08-10. If you rely on a restricted-actor review policy today, verify approvals out of band until this reaches a tag.

## 8. Command-injection-class fix (CWE-78) in Paperclip's own CLI guidance -- on master, not in any release

- **Date:** 2026-08-15T05:11:17Z (#11400); groundwork #11343 merged 2026-08-13T23:43:22Z
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** PR #11400 merge commit fdb9a4880, merged 2026-08-15T05:11:17Z, base master. compare fdb9a4880...master -> ahead. compare fdb9a4880...v2026.817.0 -> diverged, ahead=4, behind=123 (not contained in the stable). PR #11343 merge commit 5ca7b4c1f, merged 2026-08-13T23:43:22Z, likewise diverged from the tag. No GitHub security advisory has been published for either: gh api repos/paperclipai/paperclip/security-advisories returns 12 advisories, newest GHSA-x8hx-rhr2-9rf7 published 2026-07-22T23:12:15Z.
- **Receipt:** https://github.com/paperclipai/paperclip/pull/11400
- **Half:** defect | security-relevant | **Confidence:** medium

**What changed.** Paperclip's copyable CLI guidance used the `pnpm paperclipai <sub> --flag "$VALUE"` form, which re-parses argument values through a shell -- so a command substitution inside a quoted value executes on the host before the CLI starts. The fix routes all guidance through the inert-argv `npx paperclipai` form, forbids host-derived values in copyable commands, and adds regression coverage. The PR classes it explicitly as CWE-78 and says it affects all deployment modes that show or use the affected guidance. Confidence is medium on impact only: the PR does not name the concrete path by which a hostile value reaches the guidance string, and no advisory has been filed.

**Operator consequence.** Watch. Until this tags, do not paste Paperclip-generated `pnpm paperclipai ...` commands into a shell without reading them, particularly any command whose arguments contain values an agent produced. The safe form is `npx paperclipai`.

## 9. Agents got a read-only secrets catalog endpoint that returns names and UUIDs without board access

- **Date:** 2026-08-13T22:43:43Z
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** PR #9530 merge commit 0819cac4c, merged 2026-08-13T22:43:43Z, base master. compare 0819cac4c...master -> status=ahead. compare 0819cac4c...v2026.817.0 -> diverged, ahead=4, behind=98 -- not in the stable.
- **Receipt:** https://github.com/paperclipai/paperclip/pull/9530
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** A new GET /companies/:companyId/secrets/catalog returns id, name, key and status for every active company secret, guarded by assertBoardOrAgent plus assertCompanyAccess -- so an agent, not only a board member, can resolve a secret name like HOMEBOX_API_KEY to the UUID that adapterConfig.env requires. No values, no provider configuration, no version history. The existing board-only full-detail list endpoint is unchanged. The stated motivation is that operators were previously reading UUIDs out of browser network traffic.

**Operator consequence.** Watch, then re-audit when it tags. This is real friction removed, but it also hands every agent in a company a complete inventory of that company's secret names -- useful reconnaissance if an agent is compromised or prompt-injected, and a new consideration for how you name secrets. It is on master only; the current stable does not have it.

## 10. The gap reopened the day the release shipped: master is 176 commits past the stable

- **Date:** measured 2026-08-18 against master HEAD b446ff59bfd4c22ce8042f0a8a5daad5c7adc02c (2026-08-18T05:02:16Z)
- **Channel:** `main-unreleased` (on the default branch, in no tag)
- **Ancestry evidence:** gh api repos/paperclipai/paperclip/compare/8f7b8b3fdab2c6940f5d712134d9f62e42c7a293...master -> status=ahead, ahead_by=176, behind_by=0, where 8f7b8b3f is the content freeze of v2026.817.0. gh api repos/paperclipai/paperclip/compare/v2026.817.0...master -> diverged, ahead_by=176, behind_by=4 (the 4 being the release-branch CI and notes commits). 268 PRs merged into master between 2026-08-03 and 2026-08-17 per the search API.
- **Receipt:** https://github.com/paperclipai/paperclip/compare/v2026.817.0...master
- **Half:** neither | **Confidence:** high

**What changed.** Tagging v2026.817.0 did not close Paperclip's merged-versus-released gap; the release froze on 2026-08-10 and 176 commits accumulated behind it before it was even published. Among them: chat-style tasks became the default experience rather than an experiment (#11101, merged 2026-08-11T16:06:22Z, merge commit 815e49bb7, diverged from the tag with behind=12), the Decision Training UI was removed (#11225, 2026-08-11T18:23:57Z), a sandbox provider capability contract with fail-closed effective resolution landed (#11463, 2026-08-17T17:55:41Z), and #11557 (2026-08-17T20:25:31Z, merge commit 3061ce690, diverged with behind=154) made the verified capability snapshot the only streaming decision and dropped three operator configuration flags, rendering removed keys inert in saved configs.

**Operator consequence.** Keep resolving Paperclip by ancestry, not by release date. The new soak gate means the stable you install is always about a week behind master by construction, and the beta channel -- not the stable tag -- is where the current week's work is visible. If you configured the three dropped sandbox streaming flags, they become inert whenever #11557 reaches a channel you run.

## 11. The official site and docs still say v2026.722.0 and do not mention the release channels at all

- **Date:** surfaces fetched 2026-08-18, after v2026.817.0 published
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** Fetched https://paperclip.ing/ -- 'Latest release v2026.722.0 (July 22, 2026)'. Fetched https://docs.paperclip.ing/reference/changelog/ -- newest entry v2026.722.0 (2026-07-22), then v2026.720.0 and v2026.707.0. Fetched https://docs.paperclip.ing/guides/getting-started/installation/ -- shows only `npx paperclipai onboard --yes`, `npx paperclipai run`, `npx paperclipai auth bootstrap-ceo`, with no channel specifier and no channel explanation. The four-channel contract exists only as doc/CHANNELS.md inside the repository, verified as a blob at v2026.817.0.
- **Receipt:** https://github.com/paperclipai/paperclip/releases/tag/v2026.817.0
- **Half:** neither | **Confidence:** high

**What changed.** Nothing, on the marketing and docs surfaces, and that is the finding. Hours after publishing a 315-commit stable that introduces four install channels and changes what Docker `:latest` means, paperclip.ing advertises v2026.722.0 as the latest release and docs.paperclip.ing's changelog stops at the same version. The installation guide teaches a bare `npx paperclipai` with no channel and never explains that channels now exist. Positioning on the site is otherwise unchanged: 'the app people use to manage AI agents for work', 'Open source. Self-hosted.', users as 'the board of directors', with a waitlist link and no pricing.

**Operator consequence.** Ignore paperclip.ing and docs.paperclip.ing for currency; treat the repository releases page, doc/CHANNELS.md and the npm dist-tags as canonical. This answers the source contract's own open question about which surface wins when they diverge: on this evidence the site and docs lag the repository by at least one full release, and the docs do not describe the install channels their own install guide now depends on.

## 12. No new security advisory published in the window

- **Date:** checked 2026-08-18; newest advisory published 2026-07-22T23:12:15Z
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** gh api repos/paperclipai/paperclip/security-advisories -> 12 published advisories. Newest is GHSA-x8hx-rhr2-9rf7 (critical, DNS-rebinding drive-by RCE, published 2026-07-22T23:12:15Z), already recorded in the 2026-07-27 harvest. Eight of the remaining eleven were published 2026-04-16, one 2026-04-10. Nothing published between 2026-08-03 and 2026-08-17.
- **Receipt:** https://github.com/paperclipai/paperclip/security/advisories
- **Half:** neither | security-relevant | **Confidence:** high

**What changed.** Paperclip filed no repository security advisory during the window, despite merging at least two security-class fixes to master in it: the review-policy bypass (#11405) and the CWE-78 CLI guidance fix (#11400). Both are described in their PR bodies in vulnerability-report form -- 'What happened', 'Steps to reproduce', affected commit -- without a corresponding advisory.

**Operator consequence.** Do not use Paperclip's advisory feed as your exposure signal. The 2026-07-27 harvest already showed it running three months behind the fix; this window shows security-class fixes going out through PR titles with no advisory at all. Watch merged PRs prefixed `fix(security)` and `security(...)` on master instead.

## Researcher lane notes

Complete harvest; no surface was unreachable. Every ancestry claim was resolved with the GitHub compare API against pinned SHAs, never by date.

BOUNDARY CALL YOU MAY WANT TO OVERRIDE. v2026.817.0's UTC publish timestamp is 2026-08-18T03:17:29Z, which is strictly outside the window as defined. I tagged it w2 because the version string encodes 2026-08-17, the release body's own header reads "> Released: 2026-08-17", and 03:17Z is 19:17 on 2026-08-17 US Pacific. Every timestamp is in the change records, so downgrade it to `outside` if you want strict UTC. Dropping it entirely would be wrong either way -- it is the direct answer to the carry-forward question and the biggest thing this source has done in a month.

CORRECTION TO OUR OWN PUBLISHED RECORD, flagged for the exemplar/verify lane. The 2026-07-27 harvest (runs/2026-07-27-.../harvest/paperclip.primary.md, section 10) concluded the canary lane was "abandoned, not merely quiet" and that "no preview-or-beta release channel exists in tag form", because the flat repos/.../tags listing showed the newest canary tag as paperclipai@0.3.1-canary.1 from 2026-03-12. That conclusion was wrong. Canary tags moved to the refs/tags/canary/v* namespace on 2026-03-17 and have run without a gap since -- 1058 refs, plus 1110 canary publishes on npm. The flat tag listing does not surface slash-namespaced refs. Anything published on the "Paperclip has no prerelease channel" line should be corrected. The method fix: query git/matching-refs/tags/<prefix>/ per namespace, do not trust a single flat /tags page.

CONFIDENCE NOTES. #11400 (CWE-78) is marked medium confidence on impact only: the fix and its classification are the maintainer's own words in the PR, but the PR does not name the concrete path by which a hostile value reaches the guidance string, and no advisory was filed. Everything else here is high confidence with a primary receipt.

SCOPE NOT COVERED. I read all 268 in-window merged PR titles and pulled bodies for the 20 highest-signal ones; the long tail of UI, performance and adapter fixes is summarized in the v2026.817.0 release body rather than individually verified. Two things I did not chase and would suggest for next window: whether the Decisions desk produces enforceable authority or a queue (the release describes propose/decide, audited effect execution and stale-target detection, all of which read as real, but I did not read the propose-mode code); and whether the npm-beta GitHub environment actually carries required reviewers -- #11008's own Risks section says GitHub silently auto-creates an unprotected environment on first reference, which would mean betas publish with no approval gate at all. That is unverifiable from outside the org, and it is the single load-bearing assumption under the whole "human-gated beta" claim.

CONTRACT QUESTIONS TOUCHED. "Which source is canonical if site, docs and repo diverge?" -- answered empirically this window: the repository. Both public surfaces still advertise v2026.722.0 after v2026.817.0 shipped, and neither documents the install channels the product now depends on. "Which governance primitives are enforceable rather than descriptive?" -- the review-round cap and the 3-day soak gate are both genuinely executable (a counter with a server default, and a preflight job that reads npm publish times and fails closed); the review policy was descriptive enough to bypass until #11405, which is still unreleased.

## Surfaces checked

- sources/paperclip.yml (source contract, read first) and sources/paperclip.notes.md
- GitHub releases API: repos/paperclipai/paperclip/releases (20 total, zero marked prerelease)
- GitHub git refs: refs/tags/v* (18 stable), refs/tags/canary/* (1058), refs/tags/nightly/* (5), refs/tags/beta/* (2)
- GitHub compare API for every channel claim (<merge_sha>...<tag> and <sha>...master)
- GitHub search API: repo:paperclipai/paperclip is:pr is:merged merged:2026-08-03..2026-08-17 -> 268 merged PRs, all titles read
- GitHub repository security advisories API (12 advisories, newest 2026-07-22)
- npm registry packument for paperclipai: dist-tags and full publish-time series (1135 versions)
- doc/CHANNELS.md read as a git blob pinned at v2026.817.0
- https://paperclip.ing/ (official site)
- https://docs.paperclip.ing/ , /guides/getting-started/installation/ , /reference/changelog/
