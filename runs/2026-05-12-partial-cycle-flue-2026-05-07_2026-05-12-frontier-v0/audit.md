# Flue Partial Cycle Audit: 2026-05-07 -- 2026-05-12

This run built the initial Flue profile. Flue was added to the watchlist
as a Tier 2 (weekly cadence) source in the same commit that added sources/flue.yml
and updated AGENTS.md. The Coverage condition was re-opened; this cycle closes
it again.

## Source Verification

Confirmed:
- Repo: `withastro/flue` (confirmed withastro org ownership)
- License: Apache-2.0 (confirmed)
- Stars: 3,266 as of 2026-05-12 (good traction for 3 months old)
- No formal GitHub releases page. Version history tracked via commit messages.
- Current version: v0.5.3 (2026-05-12)
- Active development: multiple releases per day in this window

## Format and Evidence Floor Assessment

Flue has `surface_class: open_source_commits` (GitHub repo as primary surface).
Flue does not publish formal releases, so the evidence_floor is set to `commit`
rather than `release_note`. This is consistent with the method
("the floor should match the strictest precision the source can be reasonably
harvested at"). The README constitutes `official_docs` precision for
architectural claims.

Evidence floor `commit` is lower than `commit_diff_reviewed` for this initial
pass. Individual commit diffs were not reviewed for all claims; commit messages
and the README were the primary evidence.

## Window Coverage

The window (2026-05-07..2026-05-12) covers v0.4.0 through v0.5.3:
- v0.4.0 (2026-05-10): sandbox, app.ts, API renames, breaking changes
- v0.4.1 (2026-05-10): shell env redaction (security fix)
- v0.5.0 (2026-05-11): run observability (run IDs, flue logs, streaming)
- v0.5.1-0.5.3 (2026-05-11-12): session affinity, AI Gateway, observe()

## Observation: Minimal Governance by Design

Flue has no permission surfaces, no approval gates, no secret vaults.
The operator owns the run, the isolation boundary, and the log retention.
This is coherent for a headless CI/deployment-first framework.

The contrast with Hermes, Paperclip, and OpenClaw (all of which shipped
governance additions this week) is stark. Flue's position is: the
harness is the abstraction; governance is an application-level concern
for the operator to implement on top.

Watch whether this posture shifts as Flue approaches 1.0 and broader
adoption.

## Observation: Connector Trust Model Is Unspecified

The `flue add <connector> | <agent>` pattern pipes Markdown instructions
to a coding agent, which writes a TypeScript adapter into the project.
There is no mention of connector signing, review, or sandboxing. This is
the same pattern that OpenClaw gates (skill archive upload, default-closed)
and OpenHands specifies partially (sub-agent tool surfaces via TaskToolSet).

For Flue, the connector surface is completely operator-trust-only at this
point. A malicious connector instruction is the operator's problem.

This is worth flagging in the Open Questions and What To Watch for future
cycles.

## Operational Target Status (post-Flue profile)

1. **Coverage**: MET -- 10/10 profiles (9 original + Flue).
2. **Depth**: MET -- all profiles have >= 3 active claims (Flue: 6 claims).
3. **Freshness**: NOT MET -- no profile refreshed beyond initial build.
4. **Doctrine convergence**: APPROACHES MET -- zero new doctrine gaps across
   five cycles. This audit surfaces two observations (governance posture
   contrast, connector trust) as commentary, not doctrine gaps.
5. **External review**: MET -- three external review runs completed in prior iteration.
6. **Synthesis**: MET -- weekly digest published.

## Next Priority

Freshness is the only remaining unmet condition. Each of the 10 profiles
needs at least one harvest cycle beyond its initial build. The loop should
now run refresh cycles.

Doctrine convergence condition: five cycles with zero new gaps. Two more
zero-gap cycles will satisfy this condition.

## Zero New Doctrine Gaps

This cycle surfaced no new doctrine-level questions. The governance posture
observation and connector trust observation are editorial commentary, not
schema or evidence standard gaps.
