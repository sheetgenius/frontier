# QA Report — 2026-06-24 X Social Harvest

## Scope
This run performed discovery-only harvesting of X posts for all 10 watchlist projects. No claims were promoted to findings.

## Checks Performed

### Date / Channel Verification
- All event dates use full ISO YYYY-MM-DD when the x_search result provided exact post date; otherwise event_date + date_precision: month_only (or year_only) with explicit date_note.
- Reproducibility: every claim includes primary_url (public X post) so any contributor can verify the source directly using public tools.
- Channel is uniformly "x.com / Twitter".
- No claims were accepted as verified without primary post URLs.
- No private session data, local paths, internal prompts, or non-reproducible details are referenced anywhere in the run artifacts.

### Evidence Kind
- Primary evidence_kind used: `maintainer_authored_post`, `official_account_post`, `community_discussion`.
- Social claims are flagged as `single-source-unconfirmed` unless multiple independent posts were found.

### Refuted / Downgraded
- Several early hype claims around OpenClaw and Gemini CLI were noted as having cooled significantly.
- No product version claims (e.g. "v0.142.0") were accepted without cross-reference to GitHub releases.

### Limitations
- No GitHub release/tag/commit cross-checks were performed for any product/version claims in this harvest (explicitly noted per high-value claims where applicable; follow-up required).
- Specific X post content beyond the primary_url was not persisted; reproduction requires visiting the public URLs with X search or browser.
- All artifacts are public and reproducible from X search + GitHub public surfaces using generic tools; no Hermes-specific or private session artifacts referenced.

## Recommendation
This run should be treated strictly as discovery input. A follow-up run should be scheduled to convert high-potential claims into receipted findings with GitHub primary sources.