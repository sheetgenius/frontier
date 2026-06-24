# QA Report — 2026-06-24 X Social Harvest

## Scope
This run performed discovery-only harvesting of X posts for all 10 watchlist projects. No claims were promoted to findings.

## Checks Performed

### Date / Channel Verification
- All event dates are reported as "June 2026" or "recent" where exact post dates were not captured in the search results.
- Channel is uniformly "x.com / Twitter".
- No claims were accepted as verified without primary post URLs.

### Evidence Kind
- Primary evidence_kind used: `maintainer_authored_post`, `official_account_post`, `community_discussion`.
- Social claims are flagged as `single-source-unconfirmed` unless multiple independent posts were found.

### Refuted / Downgraded
- Several early hype claims around OpenClaw and Gemini CLI were noted as having cooled significantly.
- No product version claims (e.g. "v0.142.0") were accepted without cross-reference to GitHub releases.

### Limitations
- This run did not perform GitHub release note cross-checks or reproducible probes.
- Many specific post URLs from the x_search tool responses were not persisted in structured form in this first pass.
- Trailing whitespace issues from earlier reconnaissance files were not present in this run.

## Recommendation
This run should be treated strictly as discovery input. A follow-up run should be scheduled to convert high-potential claims into receipted findings with GitHub primary sources.