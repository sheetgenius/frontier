# Agent Zero Partial Cycle Audit: 2026-05-07 -- 2026-05-12

This run built the first Agent Zero profile. Agent Zero is the workcell-autonomy
source. The research question is what happens when an agent gets a real computer
environment -- terminal, browser, files, desktop, documents -- and can grow tools
inside that environment.

## Format and Evidence Floor Assessment

Agent Zero has `surface_class: open_source_commits` with github releases and
repo as primary surfaces. The current window (2026-05-07..2026-05-12) has zero
commits -- Agent Zero was quiet in this period. The primary evidence is v1.11-v1.13
(published May 2-5), which shipped just before the window and were not included
in the prior finding. All three releases are harvested from GitHub release notes
(`precision: release_note`), so `evidence_floor: release_note` is accurate.

This is a harvesting gap, not a doctrine gap: the prior finding
(`2026-05-07-agent-zero-full-computer-workcell`) focused on v1.10's native browser
introduction and did not enumerate v1.11-v1.13. The current cycle covers those
releases to complete the profile.

## Observation: Structured Actions as Receipt Pattern

The v1.13 guidance "prefer structured over coordinate clicks" is worth elevating
beyond an Agent Zero-specific observation. The principle is general: named,
described actions (cell_edit, app_launch, form_submit) leave a clearer audit
trail than positional actions (click(x=423, y=187)). Positional actions are also
brittle across sessions (layout changes break them).

For Bitter's receipt model, this maps directly: a receipt that describes what
was done in terms of named operations is more useful for replay, audit, and
verification than one that records raw coordinates. This is not a new idea, but
Agent Zero deploying it as explicit guidance in a production agent skill is
useful evidence.

## Observation: ODF as Governance Default

ODF-first document defaults are a governance posture choice. The decision puts
open format above compatibility by default, reversing the previous implicit
OOXML-first assumption. Operators can override it, but must do so explicitly.

The pattern (safe/open default, risky/proprietary opt-in) is consistent with
the trend across multiple watchlist providers: Hermes redaction-on-by-default,
OpenClaw skill-install-gates default-closed, Paperclip `in_review` restriction,
and now Agent Zero ODF-first. Default posture is converging toward
explicit-opt-in-for-risky-behavior.

## Coverage Complete

With this profile, all nine watchlist providers now have profiles. The
Operational Target's Coverage condition is met.

Remaining conditions to evaluate:
1. **Depth**: All profiles have ≥3 active claims (confirmed).
2. **Freshness**: No profile has been refreshed beyond its initial build yet.
   The loop must run refresh cycles for each profile.
3. **Doctrine convergence**: Last two cycles (Paperclip + Agent Zero) raise
   zero new doctrine gaps. Condition satisfied if the next two cycles also
   raise zero gaps.
4. **External review**: No bitter council pressure-tests have been run yet.
   Three runs minimum (one per surface_class).
5. **Synthesis**: No cross-provider weekly digest yet. This is the next
   high-priority deliverable.

The loop should address Freshness, External review, and Synthesis before
declaring the Operational Target met.

## Zero New Doctrine Gaps

This cycle surfaced no new doctrine-level questions. The ODF default and
structured-vs-coordinate-clicks observations are posture commentary, not schema
or evidence questions.

## Productivity Check

The Agent Zero partial cycle took approximately 35 minutes. Outputs:
- 1 finding accepted as signal (`2026-05-12-agent-zero-browser-multitab-and-document-formats`)
- 7 profile claims (3 seeded from prior finding, 4 new from v1.11-v1.13)
- 0 new doctrine gaps
- 1 digest fragment (`agent-zero-fragment.md`)

All nine providers now have profiles:
- `gemini-cli.md` (`open_source_commits`, commit_diff_reviewed floor)
- `codex.md` (`mixed_official_docs`)
- `claude-code.md` (`closed_source_release_notes`)
- `openclaw.md` (`open_source_commits`, release_note floor)
- `openhands.md` (`mixed_official_docs`, release_note floor)
- `hermes-agent.md` (`open_source_commits`, release_note floor)
- `pi-coding-agent.md` (`open_source_commits`, release_note floor)
- `paperclip.md` (`open_source_commits`, release_note floor)
- `agent-zero.md` (`open_source_commits`, release_note floor -- this cycle)

Coverage condition MET. Next priority: cross-provider weekly digest (Synthesis),
then Freshness (refresh cycles), then External review (council pressure-tests).
