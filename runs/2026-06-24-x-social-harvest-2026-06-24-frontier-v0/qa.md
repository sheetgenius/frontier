# QA Report — 2026-06-24 X Social Harvest

## Scope
This run performed discovery-only harvesting of X posts for all 10 watchlist projects. No claims were promoted to findings.

## Checks Performed

### Date / Channel Verification
- All event dates are full ISO YYYY-MM-DD dates. Dates were resolved from public X post IDs/URLs where possible; `verify/x-post-dates.md` records the per-claim resolution notes.
- Reproducibility: every claim includes `primary_url`, `observed_at`, `event_date`, `date_precision`, and `date_note`.
- `channel` records the evidence surface (`x.com`). `release_channel` records whether the claim is social-only, not applicable, or supported by a release-tag receipt.
- No private data referenced.

### Evidence Kind
- Primary evidence_kind used: `maintainer_authored_post`, `official_account_post`, `community_discussion`.
- Social claims flagged as `single-source-unconfirmed` unless multiple independent posts found.
- Each claim includes `crosscheck_status`. Most product/version claims remain `needs_primary_crosscheck`. The Codex v0.142.0 token-budget claim carries a public release-tag secondary receipt and `crosscheck_status=verified_secondary`.
- Static social cards are generated only from exact-dated scout/harvest items. They do not use live embeds, engagement metrics, or unverified paraphrases as quotes.
- A drama/code follow-up pass added a receipt-to-claim map in `verify/drama-code-followup.md`. A `verified_secondary` status now requires that the public secondary receipt prove the same bounded claim, not merely a nearby project claim.

### Refuted / Downgraded
- Several early hype claims around OpenClaw and Gemini CLI noted as having cooled significantly.
- No product version claims accepted without cross-reference to GitHub releases where possible.
- `operator_consequence` is cautious discovery language only. It does not direct upgrades or product decisions from social evidence alone.
- The scout/critic/editor loop rejected inferred-date and tracker-metric material from the social-card face. Those items remain journal/open-loop material until exact post dates and primary metric receipts are available.
- Gemini Antigravity was narrowed to transition-banner and migration-support receipts; hard-cutoff, closed-source-impact, and quota/backlash claims remain unverified social context.
- OpenHands ACP remained `needs_primary_crosscheck` despite release and PR receipts because those receipts verify only part of the broad social surface claim.
- Paperclip Maximizer mode remained maintainer intent; in-window Paperclip release receipts verify adjacent OpenClaw/Hermes interoperability work, not Maximizer itself.
- OpenClaw reliability complaints are paired with release-note counterweight in the verification record so the public research does not turn user-pain posts into an unbalanced verdict.

### Limitations
- Public secondary cross-checks were added only where discovered in this pass. Full verification of product/version claims requires a separate source-contract pass against GitHub releases, commits, docs, or changelogs.
- Specific X post content beyond primary_url not persisted; reproduction requires visiting public URLs.
- All artifacts public and reproducible from X search + GitHub public surfaces using generic tools; no tool-specific or private session artifacts referenced.

## Files Added/Changed in This Pass
- harvest/*.md: exact event_date + date_precision=day for all previously imprecise X posts.
- social-cards/x-cards.yml: static tweet-like receipt cards rendered from repo data only.
- research-journal.md: public R&D journal for scout, critic, editor decisions and open loops.
- verify/x-post-dates.md: per-cluster verification notes (what checked, why, public sources only).
- verify/drama-code-followup.md: drama/code follow-up receipt map and counterweight notes.
- qa.md: updated to reflect full date resolution and crosscheck additions.

## Recommendation
This run should be treated strictly as discovery input. A follow-up run should be scheduled to convert high-potential claims into receipted findings with GitHub primary sources. Future Frontier runs can now pick candidates from this harvest with confidence in X evidence existence, exact timestamps, and public primary source cross-check status.
