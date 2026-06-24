# X Post Date Verification Notes

## Method
- Used x_search tool (XAPI via Grok) with exact status ID or URL queries + date range 2026-01-01 to 2026-12-31 to resolve posted_at for every primary_url in harvest/*.md that previously carried month_only or year_only.
- All claims now have day-precision event_date where X post date was publicly resolvable.
- No private data; all resolutions cite public X post IDs/URLs.
- For claims where secondary sources (e.g. GitHub releases) surfaced in X thread, noted in crosscheck fields on the claim.

## Per-Cluster Results

### claude-code
- primary_url ID 2039450834853916811 resolved to 2026-04-01 (was year_only).
- Note: April 1 2026 post about Anthropic DMCA / GitHub takedown incident. Community discussion only; no product version claim.

### agent-zero
- ID 2067583909815087601 resolved to 2026-06-18 (was month_only).
- Official @Agent0ai post on governance vote.

### codex
- ID 2069246911841022200 (@songguoxiansen) resolved to 2026-06-23: disk bug report.
- ID 2069185685131804760 (@CodexReleases) resolved to 2026-06-22: v0.142.0 release notes.
  - Secondary receipt surfaced: https://github.com/openai/codex/releases/tag/rust-v0.142.0
  - crosscheck_status: verified_secondary, channel: tagged-release (added to claim).

### flue
- ID 2066962296119959581 resolved to 2026-06-16: Flue 1.0 Beta announcement by maintainer @FredKSchott.
  - Linked blog: https://flueframework.com/blog/flue-1-0-beta/ (public secondary).

### hermes-agent
- ID 2069526242236182697 (@NousResearch) resolved to 2026-06-23: /learn feature.
- ID 2053028341431820608 (@sudoingX) resolved to 2026-05-09: OpenRouter ranking claim (community).
- ID 2069299802903654611 (@clawdb0t) resolved to 2026-06-23: drama thread (community_discussion).

### openclaw
- ID 2068961217524490739 (@steipete) resolved to 2026-06-22: founder post on non-profit vs VC (maintainer_authored).
- Shared ID with hermes drama resolved as above.

### openhands
- ID 2067698787082973390 resolved to 2026-06-18 (already had day but confirmed via X).

### paperclip
- ID 2067801977447137332 resolved to 2026-06-19: Plan-of-Plans tip by @dotta (maintainer).

### pi-coding-agent
- ID 2069592942206243149 resolved to 2026-06-24: pi-token-goat extension (community).

### gemini-cli
- Already had 2026-06-18; no change needed.

## Downgrades / Cautions Applied
- All social-only claims retain status: single-source-unconfirmed or community_discussion.
- No operator_consequence language upgraded to "upgrade immediately"; kept as discovery notes.
- Version claims (e.g. codex v0.142.0) now carry explicit secondary_receipts + crosscheck_status where public GH tag confirmed via X thread.
- No new vague claims added; only exact-URL + exact-timestamp posts considered.

## Files Not Modified (per discovery boundary)
- content/digests, content/profiles, signals/, source-contracts/ left untouched.
- Only harvest/*.md, qa.md (expanded), and new verify/ touched.

Reproducible: rerun x_search with the listed IDs/URLs on public X surfaces.