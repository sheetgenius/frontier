---
schema_version: bitter.frontier_harvest.v0
provider: agent-zero
window: 2026-08-03..2026-08-10
run: 2026-08-10-weekly-digest-2026-08-03_2026-08-10-frontier-v0
source_contract: sources/agent-zero.yml
channels_present: [docs-only]
window_volume: 1 material changes, 0 capability-bearing, 0 defect-bearing, 0 security-relevant
lane: primary sources, read-only researcher, channel resolved by git ancestry
---

# Harvest -- agent-zero (primary sources)

Punctuation is normalized to ASCII per house style. Every receipt below is
pinned to a tag or a SHA. Nothing here is published until it clears the
adversarial receipt pass.

## 1. Spynel announced as a preview: an orchestration layer over Codex, Claude Code, Agent Zero and others, with no code shipped

- **Date:** 2026-08-09
- **Channel:** `docs-only` (a documentation or marketing surface, no code channel)
- **Ancestry evidence:** Marketing/announcement surface only. The article sits on the vendor's own site at https://www.agent-zero.ai/p/articles/meet-spynel-one-conversation-many-agents/ and self-reports a publication timestamp of 2026-08-09 15:27 UTC; the article index orders it between the v2.8 (2026-08-01) and v2.9 (2026-08-12) posts, consistent with that date. No corresponding repository, tag, release, or commit exists under agent0ai for Spynel, and no code channel changed. The site sitemap carries a uniform lastmod of 2026-08-12 across all pages, which is a site-rebuild stamp and not usable as an authoring date -- the in-page timestamp is the only date evidence.
- **Receipt:** https://www.agent-zero.ai/p/articles/meet-spynel-one-conversation-many-agents/
- **Half:** neither | **Confidence:** high

**What changed.** Jan Tomášek (Agent Zero's author) previews Spynel, described as an 'orchestration and control layer' rather than a model, which 'reuses established AI harnesses for reasoning, tools, MCP, skills, coding, and execution.' Named targets in priority order: Codex and Claude Code first, then Agent Zero, Pi, and OpenCode, 'and others through ACP compatibility.' 'Review-driven' is defined as an agentic developer-and-reviewer loop where a development agent implements a task and hands the result to a separate review pass: 'Agents can review the work, identify bugs, send it back for fixes, and repeat the cycle autonomously.' The article discloses that the interview itself was conducted by a Spynel AI communication agent. Availability is explicit: 'Release is planned in the coming weeks', with readers told to follow social channels.

**Operator consequence.** Ignore for now as a tool; note it as context. Nothing is downloadable, nothing is versioned, and a stated 'coming weeks' from a solo-led project is not a date. Its value this window is as the thing that explains two shipped changes: the ACP bundle staged on `ready` and the five-harness Migrate Agents plugin in v2.9 both make sense as groundwork for a layer that drives Agent Zero as one harness among several. If you are tracking where harness orchestration is heading, that is the signal -- the ACP commit is the receipt, the announcement is the intent. Do not cite the harness list as a compatibility matrix; it is a roadmap claim on a landing page, not a doc and not code.

## Researcher lane notes

Agent Zero moved substantially in this window. One stable release landed in w2 (v2.9, tagged 2026-08-12T13:03:44Z, published 13:58:33Z, prerelease=false) and it is a large one: 52 commits ahead of v2.8. Nothing landed in w1 on the code channel -- v2.8 published 2026-08-01T15:50:00Z, two days before the window opens, so it is 'outside' and I have reported it only in the carry-forward answer about the stop control.

Channel discipline notes. Every v2.9 finding is proved by ancestry, not date: for each key commit I ran gh api repos/agent0ai/agent-zero/compare/<sha>...v2.9 and required status=ahead with behind_by=0, which establishes the tag as a descendant. The annotated tag v2.9 (57d8e907e1) dereferences to commit baadd0dd0b, which is simultaneously the current main HEAD -- so at time of harvest there is no main-unreleased material at all on this source. That is unusual and worth stating plainly rather than leaving as an absence.

The branch topology is inverted from what the names imply and I want this on the record because it will mislead a future harvest: `development` is 0 ahead / 302 behind main, `testing` is 0 ahead / 758 behind -- both are stale and abandoned -- while `ready` is 9 ahead / 0 behind and carries all post-v2.9 work (2026-08-13 to 2026-08-16). Anyone checking `development` for what is coming next will conclude, wrongly, that nothing is. I have reported the `ready` work with channel 'unknown' rather than forcing it into the taxonomy: it is not main-unreleased (not on the default branch) and not preview-or-beta (no prerelease tag exists anywhere in this repo's release history -- every entry returns prerelease=false). Forcing either label would have been a false receipt, so the channel_evidence field carries the full compare output instead.

The SSRF item is the strongest finding and I want to be precise about what is and is not established. Established by primary evidence: the April fix (6397acc092, 2026-04-12) added helpers/network.py::fetch_public_http_resource and used it from helpers/document_query.py; the plugin extraction (6ccbae0712, 2026-05-29) created plugins/_document_query/helpers/fetch.py using raw aiohttp with allow_redirects=True and no guard; the v2.9 diff removes `import aiohttp` and reinstates the public-only fetcher. Established by ancestry: 6ccbae0712 is not in v1.18 but is in v1.19 and v2.8, and the fix is only in v2.9. NOT established, and I have not claimed it: that anyone exploited this, or that the maintainers knew the guard had been dropped before they found it. I have described it as lost in a refactor because the diff shows exactly that, not because anyone said so.

Two gaps recorded honestly. First, the vendor filed no GitHub repository security advisory for CVE-2026-4308 -- the security-advisories endpoint for the repo returns empty -- so the only vendor-side disclosure of the regression is one bullet in the v2.9 release notes. The GHSA that exists (GHSA-8g9j-3hrr-2hvm) is type 'unreviewed', sourced from VulDB via NVD, with no vulnerabilities array populated and no source_code_location, which means automated dependency scanning will not reliably flag an affected Agent Zero install. That is a real operator hazard and I have said so in the finding rather than only in these notes. Second, the site's sitemap.xml carries a uniform lastmod of 2026-08-12 on every page, which is a site-rebuild stamp, not authoring dates -- it is useless for dating content and I did not use it. The Spynel date (2026-08-09 15:27 UTC) comes from the in-page timestamp, cross-checked against the article index ordering (it sits between the v2.8 and v2.9 posts). /p/docs/release-articles/ returns HTTP 404 despite being linked from the docs index; the working path is /p/articles/.

On the capability/defect balance, which I checked deliberately rather than assuming: this harvest is not defect-only. Capability side -- scoped tool/MCP/skill policies, the Agent Editor, project-scoped profiles, the five-harness Migrate Agents plugin, and the staged ACP bridge and interactive Browser viewport. Defect side -- the SSRF regression and the total absence of Time Travel retention. Two items are genuinely 'both': the tool policy work shipped a capability and simultaneously fixed a fail-open shadowing bug in its own first implementation, and Time Travel retention is both a new control surface and the repair of a shipped-with-no-cleanup defect.

One editorial observation for the coordinator, offered as opinion and not as a receipted claim: the Time Travel commit message is the most useful primary source I read this window, because the maintainers wrote down the production numbers (518 shadow repositories, 12 GB, a permanently wedged workspace) instead of describing the fix abstractly. Paired with the SSRF regression, this window's Agent Zero story is coherent -- a project whose autonomy features consistently ship before their cleanup, revocation, and containment features, and which is now, visibly, backfilling all three at once.

## Surfaces checked

- https://github.com/agent0ai/agent-zero (repo identity confirmed: agent0ai/agent-zero, description "Agent Zero AI framework", default branch main, 18,901 stars, not a fork, not archived)
- https://github.com/agent0ai/agent-zero/releases (full paginated release list, 2024-10 through 2026-08)
- https://github.com/agent0ai/agent-zero/tags (v2.9 and v2.8 annotated tags dereferenced to commits)
- main-branch commit log since 2026-08-03 (52 commits; main HEAD == v2.9 tag commit)
- non-default branches: development, testing, ready (compared against main)
- merged PRs with mergedAt >= 2026-08-03 (#1820, #1775, #1770, #1763, #1710, #1694, #1533)
- GitHub repository security advisories endpoint (empty)
- GitHub Advisory Database: GHSA-8g9j-3hrr-2hvm
- NVD: CVE-2026-4308
- https://www.agent-zero.ai/ (official site landing)
- https://www.agent-zero.ai/p/docs/ (docs index)
- https://www.agent-zero.ai/p/docs/agent-profiles/
- https://www.agent-zero.ai/p/articles/ (article index)
- https://www.agent-zero.ai/p/articles/agent-zero-v2-9/
- https://www.agent-zero.ai/p/articles/meet-spynel-one-conversation-many-agents/
- https://www.agent-zero.ai/sitemap.xml (uniform 2026-08-12 lastmod; rebuild stamp, not authoring dates)
