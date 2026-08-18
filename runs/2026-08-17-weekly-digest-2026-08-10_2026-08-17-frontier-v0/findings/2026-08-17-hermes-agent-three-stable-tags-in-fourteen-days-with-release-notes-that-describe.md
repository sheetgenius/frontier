---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-hermes-agent-three-stable-tags-in-fourteen-days-with-release-notes-that-describe
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16.2
    precision: github_release
---
# 2026-08-17-hermes-agent-three-stable-tags-in-fourteen-days-with-release-notes-that-describe

Three stable tags in fourteen days, with release notes that describe nothing.

Between v0.20.0 (v2026.8.3) and v0.20.3 (v2026.8.16.2) the project cut three stable tags covering, by its own count, ~1,444 + ~967 + ~250 commits and ~656 + ~397 + ~125 merged PRs. None of the three release bodies itemizes a single change beyond a one-paragraph prose gloss; all three defer the actual changelog to an unshipped v0.21.0. v0.20.3's paragraph is the only one naming specific work (MCP 2.x, Bot Mode, Cua Driver 0.20, cron self-heal).

Channel: docs-only. Ancestry: GET repos/NousResearch/hermes-agent/releases returned v2026.8.13 (v0.20.1, 2026-08-13), v2026.8.16 (v0.20.2, 2026-08-16) and v2026.8.16.2 (v0.20.3, published 2026-08-17T18:43:27Z), all prerelease:false, draft:false. The code in each is genuinely tagged; the *notes* are the docs-only surface at issue. Each body states only aggregate counts and says 'Full curated release notes for this window will ship with v0.21.0'.

Operator consequence: Do not treat `hermes update` on these tags as a readable upgrade. An operator who needs to know what moved must diff the compare ranges and read merged PRs directly  --  the release page will not tell them. Watch for v0.21.0; until it lands, pin a tag and audit by PR rather than by release note.

## Receipt
- https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16.2
