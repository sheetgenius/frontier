---
schema_version: bitter.frontier_harvest.v0
provider: codex
window: 2026-08-10..2026-08-17
run: 2026-08-17-weekly-digest-2026-08-10_2026-08-17-frontier-v0
source_contract: sources/codex.yml
channels_present: [preview-or-beta, docs-only]
window_volume: 5 material changes, 2 capability-bearing, 1 defect-bearing, 1 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- codex (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Nothing reached stable in the second week: 0.148.0 sat in alpha for ten days and 422 commits

- **Date:** 2026-08-17
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** gh api repos/openai/codex/releases --paginate shows the last prerelease=false release is rust-v0.147.0 at 2026-08-07T01:41:49Z. Every release after it is prerelease=true: rust-v0.148.0-alpha.1 (2026-08-07) through rust-v0.148.0-alpha.21 (2026-08-17T19:27:11Z), plus rust-v0.147.0-alpha.6.6 (2026-08-10). gh api repos/openai/codex/compare/rust-v0.147.0...rust-v0.148.0-alpha.21 reports total_commits=422. npm dist-tags confirm latest=0.147.0 and alpha=0.148.0-alpha.21.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21
- **Half:** neither | **Confidence:** high

**What changed.** Between the 0.147.0 stable tag on 2026-08-07 and the window close on 2026-08-17, OpenAI published twenty-one 0.148.0 alpha builds and zero stable releases. 422 commits accumulated on the unreleased line, 324 of them dated on or after 2026-08-10. The npm `latest` tag has not moved since 2026-08-07.

**Operator consequence.** Ignore the alpha channel and stay on 0.147.0. This is the clearest reading yet of Codex's actual cadence: the public repo moves every few hours, the shippable artifact moves roughly weekly, and this window it did not move at all after day four. Anyone benchmarking or writing about Codex from the default-branch commit log this fortnight is describing software no operator can install. When 0.148.0 does cut, expect a very large diff and treat it as a major upgrade rather than a point release.

## 2. Guardian V2 -- a model-driven risk classifier gating tool calls -- was built entirely inside the alpha line

- **Date:** 2026-08-14
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** grep -ci guardian over the commit list from gh api repos/openai/codex/compare/rust-v0.147.0...rust-v0.148.0-alpha.21 returns 41 matches; the same grep over the rust-v0.146.0...rust-v0.147.0 compare list confirms none of these SHAs are in the 0.147.0 tag. Representative commits: fe614a6304ef804be74a622e482fdd75977abcba 'Add Guardian V2 extension scaffold (#38336)' (2026-08-13), 1c4f42863c1f84eb5175a1a0cfffe84641a63df3 'Require automatic review for high-risk Guardian v2 actions (#38569)' (2026-08-14), 3360f4a909a920d2e534a63c508d98e91fe6655a 'Install Guardian V2 in the app server (#38597)' (2026-08-14). No non-prerelease tag exists after rust-v0.147.0.
- **Receipt:** https://github.com/openai/codex/commit/1c4f42863c1f84eb5175a1a0cfffe84641a63df3
- **Half:** capability | security-relevant | **Confidence:** high

**What changed.** Across roughly 41 commits dated 2026-08-13 to 2026-08-17, Codex grew a second-generation Guardian: an extension scaffold, a sampler, per-thread sampler initialization, tool-call classification with full tool action context, risk scores recorded on threads, bounded transcript rendering, pooled sampling WebSocket connections, priority for new classifications under load, and installation into the app server. #38569 makes automatic review mandatory for actions Guardian V2 classifies as high-risk. Guardian reviewer sessions are isolated from parent extensions (#38602) and Guardian reviews are constrained to parent filesystem permissions (#38377). Adjacent alpha work routes network access (#38299) and MCP tool calls (#38108) through the shared approval pipeline, and #38205 enforces a non-interactive approval policy for Codex delegates.

**Operator consequence.** Watch closely; do not plan around it yet. This is the architectural direction that matters more than anything that shipped: Codex is moving from static sandbox and approval policy toward a model that scores each tool action and can compel automatic review on its own classification. Every piece of it is alpha-only at window close, so any claim that Codex 'now' does risk-based gating is describing an unreleased build. When it lands, the governance question changes shape -- the reviewer becomes a model whose risk threshold you must be able to inspect and pin.

## 3. Config lockfile support removed on the unreleased line

- **Date:** 2026-08-11
- **Channel:** `preview-or-beta` (only in a prerelease tag)
- **Ancestry evidence:** grep for (#38011) over the rust-v0.147.0...rust-v0.148.0-alpha.21 compare list returns 279b93242cfef379e65da97e87e44b83c5934fd7 'Remove config lockfile support (#38011)' dated 2026-08-11T13:52:48Z. Absent from the rust-v0.146.0...rust-v0.147.0 list; no non-prerelease tag after rust-v0.147.0 exists.
- **Receipt:** https://github.com/openai/codex/commit/279b93242cfef379e65da97e87e44b83c5934fd7
- **Half:** defect | **Confidence:** medium

**What changed.** Config lockfile support was deleted on the 0.148.0 line, alongside removals of repository-local Codex skills (#38635, 2026-08-14) and the workspace settings gate for apps and plugins (#38994, 2026-08-17).

**Operator consequence.** Watch for the 0.148.0 release notes and check whether these removals are documented as breaking. Config lockfiles and repository-local skills are exactly the mechanisms a team would have standardised on to pin agent behaviour across a fleet; if you depend on either, the upgrade to 0.148.0 will not be routine. None of this is in a stable build yet, so there is nothing to do today except avoid building new process on top of these three surfaces.

## 4. The entire Codex documentation and changelog moved off developers.openai.com

- **Date:** unresolved (redirect observed 2026-08-17/18)
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** curl -sSI https://developers.openai.com/codex/changelog returns 'HTTP/2 308' with 'location: https://learn.chatgpt.com/docs/changelog'. curl -sSI https://developers.openai.com/codex returns 'HTTP/2 308' with 'location: https://learn.chatgpt.com/docs'. Both served by Vercel. This is a hosting/surface change with no code channel; no repository commit was located that dates the migration.
- **Receipt:** https://learn.chatgpt.com/docs/changelog
- **Half:** neither | **Confidence:** low

**What changed.** Both primary surfaces named in this publication's Codex source contract now permanently redirect: the changelog to learn.chatgpt.com/docs/changelog and the docs root to learn.chatgpt.com/docs. The destination is a merged ChatGPT-and-Codex changelog rather than a Codex-specific one, so Codex CLI releases now appear interleaved with ChatGPT desktop, iOS, and model-availability entries.

**Operator consequence.** Re-point your bookmarks, scrapers, and any citation you have pinned to developers.openai.com/codex. Two consequences beyond the URL: Codex release notes are now mixed into a consumer-product changelog, which makes it materially harder to see the CLI's cadence at a glance, and a 308 today is a 404 eventually. I could not establish the migration date from any primary source, so this entry is dated by observation, not by a receipt.

## 5. `/import` from Claude Code and Cursor announced on the changelog, but the code shipped a week earlier

- **Date:** 2026-08-11
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** The 2026-08-11 changelog entry at learn.chatgpt.com/docs/changelog states 'Codex CLI can also import supported setup and recent chats from Claude Code and Cursor with /import' and names no version. The underlying code is in the rust-v0.147.0 compare list: (#35623) 'Parse Claude and Cursor session records separately', bbbf396839b3bab872291354878980ba82ad4aee 'Sync updates to imported external agent sessions (#36356)', (#36361) Cursor skill import, e9a692d53ba55d981c353ced88650dd1595c2b5f 'Preserve working directories when importing external sessions (#36964)'. So: docs surface moved in w2, code channel was tagged-release on 2026-08-07.
- **Receipt:** https://github.com/openai/codex/releases/tag/rust-v0.147.0
- **Half:** capability | **Confidence:** high

**What changed.** The official changelog announced on 2026-08-11 that Codex CLI can import setup and recent chats from Claude Code and Cursor via `/import`. The 0.147.0 release notes describe the same capability as importing Cursor-managed skills and synchronizing changes to imported Claude and Cursor conversations without creating duplicates.

**Operator consequence.** Try it if you are moving a team between harnesses, and note the four-day gap between the tag and the announcement -- the changelog is a lagging indicator of what your installed binary can do. Two cautions. First, an import carries another harness's configuration into Codex's trust model, and imported skills and MCP connectors land under Codex's permissions, not the source harness's; review what came across rather than assuming equivalence. Second, this is a fact about the pair: behaviour observed in Claude Code or Cursor does not carry through the import.

## Researcher lane notes

Read sources/codex.yml before touching the open web, as required. Read-only throughout: no files written to the repo, no git mutations, no site build. All work via gh api, npm view, curl -I, and WebFetch.

CHANNEL METHOD. Every channel call was made by ancestry, never by date. The repo squash-merges with the PR number in the subject line and rewrites SHAs from an internal monorepo (commits carry GitOrigin-RevId trailers), so PR merge_commit_sha values do NOT appear in the public history -- I verified this and abandoned that approach. The reliable test is to enumerate `gh api repos/openai/codex/compare/<tag-A>...<tag-B> --paginate` and grep the commit subjects for `(#NNNNN)`. I built two commit inventories this way: rust-v0.146.0...rust-v0.147.0 (344 commits) and rust-v0.147.0...rust-v0.148.0-alpha.21 (422 commits). A PR present in the first is tagged-release; present only in the second is preview-or-beta, because no non-prerelease tag exists after rust-v0.147.0. Prerelease status was read from the `prerelease` field on each GitHub release, not inferred from the version string.

THE SHAPE OF THIS WINDOW. w1 carried everything: two stable tags on 2026-08-05 and 2026-08-07. w2 carried nothing installable -- 324 commits, twenty-one alpha builds, zero stable releases, npm `latest` frozen at 0.147.0 since 2026-08-07. This is a clean instance of the rule this publication is built on, and it is worth saying plainly in the digest: a reader following openai/codex commits during 10 -- 17 August saw Guardian V2, proxy MITM hardening, and three feature removals land, none of which any operator could install.

GAPS AND THINGS I COULD NOT RESOLVE, recorded rather than guessed:
1. The documentation migration date is unresolved. developers.openai.com/codex and /codex/changelog both return 308 to learn.chatgpt.com, verified by curl, but I found no primary source dating the move. That change is reported with confidence: low and a date string that says "unresolved" rather than a fabricated one. It also means sources/codex.yml has two stale primary_surface URLs -- a contract-maintenance item for the coordinator, not something I can fix from a read-only lane.
2. Alpha release bodies are empty. Every 0.148.0-alpha GitHub release body is literally "Release 0.148.0-alpha.N" -- there are no alpha release notes. Everything I report about the alpha line comes from commit subjects and PR bodies, which is weaker evidence than a release note and is why the config-lockfile removal is marked medium confidence. Any digest claim about what 0.148.0 will contain should be hedged accordingly: these are merged commits on an unreleased line, and OpenAI has revert latitude until the tag cuts.
3. A prior-window date to keep straight. The task brief described the network-authority wave as "reaching stable 0.146.0 on 2026-08-03". 0.146.0 was actually published 2026-07-29 (GitHub 01:42:51Z, npm 01:45:57Z); 2026-08-03 was the previous window's closing boundary. The prior finding file states 2026-07-29 correctly in its body, so this is a brief-summary artifact, not an error in the published record. No correction needed, but do not let 2026-08-03 propagate into new prose as a release date.
4. Guardian V2 internals are visible only through commit subjects and test descriptions. I can evidence that it classifies tool actions, records risk scores on threads, and can compel automatic review for high-risk actions (#38569); I cannot evidence what model performs the sampling, what the risk thresholds are, or whether an operator will be able to pin or inspect them. Do not let the digest imply otherwise.
5. Ordering caution on `--approve-for-me`: PR #36373 states that later subcommand permission overrides are preserved, so the flag does not unconditionally determine the effective policy. If the digest describes it, describe it as routing approvals through automatic review and pinning workspace-write by default, not as a guaranteed final say.

BOTH HALVES PRESENT. Capabilities: portable Agent Plugins with catalog search, `--approve-for-me`, opt-in MCP 2026-07-28, cross-harness `/import`, and (alpha) Guardian V2 and a durable user-message queue. Defects: bearer-token under-redaction, cyber-model permission defaults, proxy MITM path confusion, and three removals. Marked in capability_or_defect per change; five are flagged security_relevant, none required a CVE.

## Surfaces checked

- GitHub releases: gh api repos/openai/codex/releases --paginate (full list, 2026-07-21 through 2026-08-17)
- GitHub tags/ancestry: gh api repos/openai/codex/compare/rust-v0.146.0...rust-v0.147.0 (344 commits), .../compare/rust-v0.146.0...rust-v0.146.1 (2 commits), .../compare/rust-v0.147.0...rust-v0.148.0-alpha.21 (422 commits), plus per-alpha compares for alpha.1/5/6
- GitHub release bodies for rust-v0.146.1, rust-v0.147.0, rust-v0.148.0-alpha.1, rust-v0.148.0-alpha.21
- GitHub PRs #35724, #35725, #36037, #36054, #36373, #36544, #36893, #36908, #36960, #36967, #37027, #37055, #37057, #37132
- GitHub security advisories: gh api repos/openai/codex/security-advisories (only GHSA-w5fx-fh39-j5rw / CVE-2025-59532 from 2025; outside window)
- npm registry: npm view @openai/codex dist-tags time (latest=0.147.0, alpha=0.148.0-alpha.21)
- Official changelog: https://developers.openai.com/codex/changelog -> 308 -> https://learn.chatgpt.com/docs/changelog
- Official docs: https://developers.openai.com/codex -> 308 -> https://learn.chatgpt.com/docs
