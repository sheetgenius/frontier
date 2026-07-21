# QA -- 2026-07-01 weekly ("Patched for Whom")

## Automated
- `node site/scripts/check-integrity.mjs`: clean -- 312 findings, 146 signals, 13 watchlist sources, 3 adjacent. All profile claims, signal finding_ids, and digest not_promoted references resolve.
- `npm --prefix site run build`: exit 0. New digest page, Antigravity profile, and all 8 signal pages rendered; internal link graph (digest -> /signals/, /profiles/) passed.

## Quality gates
- channel_by_ancestry: pass -- every signal carries a channel resolved by tag ancestry, not date.
- dates_verified_to_year: pass -- all in-window dates are 2026 and inside the window.
- signals_rarer_than_findings: pass -- 8 signals / 60 findings.
- every_signal_receipt_adversarially_verified: pass -- all 47 signal candidates were re-fetched by an independent verifier; only holding ones were eligible. Codex Remote GA was refuted (no repo/tag receipt) and demoted to a finding.
- cross_provider_synthesis_thesis: pass -- channel-split hardening; Gemini->Antigravity lead.
- marketing_vs_substance_separated: pass -- Antigravity's changelog cited, not its landing page; the developer-site-only Codex Remote GA was not promoted.

## Residual risk / open
- **Antigravity is closed source.** Its approval/sandbox claims (strict Always-Approve matching, subagent auto-approve, proceed-in-sandbox) are quoted from a changelog and were not confirmed by a local probe. Flagged in the digest's "uncertain" and the profile's open-question claim.
- **OpenHands CVE severities** are read from release notes and a commit title; the fixes are verified present, but the individual advisories were not independently resolved, and there is no fixed OSS tag.
- **Non-cloud tag URLs** for OpenHands cloud releases and Antigravity release tags were cited to the releases listing where the exact tag string was uncertain; check-external-links should confirm before/at publish.
