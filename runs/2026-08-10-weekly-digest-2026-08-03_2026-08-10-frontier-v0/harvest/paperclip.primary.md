---
schema_version: bitter.frontier_harvest.v0
provider: paperclip
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/paperclip.yml
channels_present: [tagged-release]
window_volume: 3 material changes, 3 capability-bearing, 0 defect-bearing, 2 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- paperclip (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Standard-trust agents got default-open write access to any company-visible issue they can read

- **Date:** 2026-08-04T14:18:44Z (#10804) and 2026-08-04T18:17:50Z (#10837)
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #10804 merge commit dfcda67650d4fc60b1cca537efca7fc9d52c718c, merged 2026-08-04T14:18:44Z, base master; compare dfcda676...v2026.817.0 -> ahead, ahead_by=90, behind_by=0. PR #10837 merge commit f91a6e27c0feb7f92dcde981c9a741b869484e83; compare -> ahead, ahead_by=86, behind_by=0. Both listed under 'Breaking Changes' in the v2026.817.0 release body.
- **Receipt:** https://github.com/paperclipai/paperclip/pull/10804
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Four issue-write channels -- comments, field updates, child-task creation, and assignment -- were unified under one default-open rule keyed on issue visibility: if a standard-trust agent can read the issue and the responsible user is also authorised, it can write. Previously each channel applied its own narrow ownership, parent or mention grant. The PR is explicit that this 'intentionally broadens write access', and its own Risks section says 'Standard-trust agents gain broader write influence on issues that they can already read.' Company boundaries, low-trust and skill_test/task_bridge scopes, the responsible-user ceiling, checkout, lifecycle, pause and budget gates are stated as unchanged, and #10837 contains and attributes cross-issue side effects.

**Operator consequence.** Re-audit before upgrading. This is a permission loosening shipping inside a routine-looking calendar release, and the surface it loosens is the one Paperclip's whole coordination model runs on. If you relied on per-channel ownership grants to keep an agent from editing or reassigning work it could merely see, that constraint is gone; issue visibility is now the authorization boundary.

## 2. Agents can hand credentials to Paperclip as inert proposals that only a human can activate

- **Date:** 2026-08-06T02:49:40Z (merge); released 2026-08-17/18
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #9934 merge commit e43f187cad3b05c9f00d1b9d4e924f43f7ab125e, merged 2026-08-06T02:49:40Z, base master. gh api repos/paperclipai/paperclip/compare/e43f187c...v2026.817.0 -> ahead, ahead_by=51, behind_by=0. Credited in the v2026.817.0 release body under 'Human-approved secret proposals'.
- **Receipt:** https://github.com/paperclipai/paperclip/pull/9934
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** A propose/review/approve/reject lifecycle for secrets. Agent-authored proposals are stored outside the live secret tables, each proposed value is encrypted and exact-value redaction is registered the moment Paperclip receives it, and nothing becomes a live secret or an env binding until an authorised human approves -- at which point the write executes through the normal secret-create and protected agent-config paths as the human approver. Binding proposals can target only the proposer or its downward reporting chain under the V1 policy. The PR explicitly rejected the obvious alternative of live secrets with a 'proposed' status because that would put untrusted rows in resolver, list and sync paths and allow uniqueness squatting.

**Operator consequence.** Try it if you have been letting agents paste credentials into work artifacts. This closes the loop opened by run-bound secret access in v2026.722.0: the agent can now hand a credential in without ever holding authority to make it live, and the approval is attributable to a named human.

## 3. The Audit page and the Activity list merged into one attributed feed

- **Date:** 2026-08-05T04:30:24Z (#10838), 2026-08-05T04:07:39Z (#10831), 2026-08-05T04:02:51Z (#10843)
- **Channel:** `tagged-release` (in a stable tag an operator can install)
- **Ancestry evidence:** PR #10838 merge commit 8142e54150f263815100e52cc3db43b16d630122; compare -> ahead, ahead_by=70, behind_by=0. PR #10831 merge commit 68ddd6a7a -> ahead. PR #10843 merge commit e8ae5286e -> ahead. All base master, all contained in v2026.817.0.
- **Receipt:** https://github.com/paperclipai/paperclip/pull/10838
- **Half:** capability | **Confidence:** high

**What changed.** The separate basic Activity list and Audit page became a single Activity page built on the audit feed: full history, filters, a scope toggle for all actors versus agent actions only, and a per-agent audit tab on agent detail. Privileged controls are hidden from members without the audit permission. #10843 makes cross-task agent writes carry attribution, audit receipts, and denial messages that say what to do about them.

**Operator consequence.** This is the read surface for the question the 2026-07-27 harvest carried forward -- whether Paperclip's audit trails are queryable by an operator or only written. They are queryable now. Pair it with the default-open issue-write change above: broader agent write authority landed in the same release as the page that lets you see who used it.

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
