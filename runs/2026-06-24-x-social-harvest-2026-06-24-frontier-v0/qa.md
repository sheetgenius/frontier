# QA Report — 2026-06-24 X Social Harvest

## Scope
This run performed discovery-only harvesting of X posts for all 10 watchlist projects. No claims were promoted to findings.

## Checks Performed

### Date / Channel Verification
- All event dates resolved to full ISO YYYY-MM-DD (day precision) via XAPI x_search on exact post IDs/URLs. Previously imprecise month_only/year_only entries updated with exact posted_at from public X.
- Reproducibility: every claim includes primary_url (public X post) + now exact event_date; verify/x-post-dates.md documents the lookup method and per-cluster results.
- Channel uniformly x.com.
- No private data referenced.

### Evidence Kind
- Primary evidence_kind used: `maintainer_authored_post`, `official_account_post`, `community_discussion`.
- Social claims flagged as `single-source-unconfirmed` unless multiple independent posts found.
- For product/version claims (e.g. codex v0.142.0), added secondary_receipts, crosscheck_status=verified_secondary, channel=tagged-release where public GitHub surfaced in X thread.

### Refuted / Downgraded
- Several early hype claims around OpenClaw and Gemini CLI noted as having cooled significantly.
- No product version claims accepted without cross-reference to GitHub releases where possible.
- operator_consequence kept to cautious discovery language only; no "upgrade immediately" unless primary source verifies version/channel.

### Limitations
- GitHub cross-checks performed only where X threads publicly linked releases (e.g. codex); full verification of all version claims requires separate source-contract pass.
- Specific X post content beyond primary_url not persisted; reproduction requires visiting public URLs.
- All artifacts public and reproducible from X search + GitHub public surfaces using generic tools; no Hermes-specific or private session artifacts referenced.

## Files Added/Changed in This Pass
- harvest/*.md: exact event_date + date_precision=day for all previously imprecise X posts.
- verify/x-post-dates.md: per-cluster verification notes (what checked, why, public sources only).
- qa.md: updated to reflect full date resolution and crosscheck additions.

## Recommendation
This run should be treated strictly as discovery input. A follow-up run should be scheduled to convert high-potential claims into receipted findings with GitHub primary sources. Future Frontier runs can now pick candidates from this harvest with confidence in X evidence existence, exact timestamps, and public primary source cross-check status.