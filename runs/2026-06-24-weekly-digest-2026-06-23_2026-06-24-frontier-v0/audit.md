# Run Audit — 2026-06-23..2026-06-24 ("Governance, Sold Separately")

Doctrine questions and gaps surfaced by this cycle. Per AGENTS.md, the loop does
not self-commit charter/contract changes; unresolved items are drafted as
proposed amendments or recorded here.

## Gaps and questions

1. **Watchlist expansion is a doctrine change the loop cannot self-commit.**
   heypi was added to `sources/index.yml` (tier 1, daily) by explicit operator
   direction. But the canonical watchlist is enumerated in `AGENTS.md`,
   `CHARTER.md`, and `RESEARCH_CONTRACT.md` (the original nine + Flue). Adding a
   source to the index is operational; amending the canonical watchlist is
   doctrine. Resolution: drafted `charter/proposed/amendment-011-heypi-and-the-
   authority-shell-facet.md` rather than editing the steering docs. Needs a
   human/doctrine ratification pass.

2. **A research facet may be missing: "authority shell as product."** heypi does
   not cleanly fit the existing calibration facets (accessibility/OpenClaw,
   control-plane/Paperclip, workcell/Agent Zero, platform/OpenHands). It is the
   governance/approval/audit layer sold separately from the harness. Proposed as a
   named facet in amendment 011, with heypi as its calibration source.

3. **Enforcement-state of a governance claim is not a schema field.** This window
   produced three distinct states for the same nominal feature ("approvals"):
   on-by-default, opt-in-primitive (heypi), and marketing-only/undocumented (EVE).
   The digest and profile handle this in prose, but a recurring qualifier
   (on-by-default | opt-in | marketing-only | undocumented) on capability claims
   may be worth a future schema note if it appears again. Recorded, not drafted.

4. **Adjacent-tool registration for EVE.** EVE (`vercel/eve`) is now referenced in
   a profile and digest as a differentiation foil but is not on the watchlist and
   has no `composes:` linkage. It is a named existing tool used as editorial
   contrast, not a finding subject, so it does not require an `adjacent.yml` entry
   under amendment 006 (which governs `composes:` resolution). Flagged for
   awareness; no action required unless a future finding `composes:` it.

5. **Flue canonical repo slug.** Harvest resolved Flue's changelog under
   `github.com/withastro/flue`. Content matches the Tier-2 Flue contract, but the
   source contract's `homepage`/repo should be confirmed against this slug in a
   maintenance pass.

## Corrections applied this cycle (historical body)

- **Prior-run integrity regression fixed.** The 2026-06-16..2026-06-23 run never
  materialized its `findings/*.md` index stubs; 132 cross-references dangled and
  `check-integrity.mjs` failed. 48 stubs created; integrity now clean. No published
  prose changed. (See JOURNAL.md and the historical-correction commit.)
- **Flue observability framing superseded.** "Protected on Paper" described Flue's
  private-by-default observability rewrite as staged in an Unreleased changelog
  section; it shipped in 0.11.0 (2026-06-09). Corrected forward in this digest's
  body, not by rewriting the published prior digest. Git history is the record.

## Standing recommendation

Run `check-integrity.mjs` at the START of each cycle, not only before publishing —
this cycle inherited a 132-issue regression from the prior run that should have
been caught at that run's close.
