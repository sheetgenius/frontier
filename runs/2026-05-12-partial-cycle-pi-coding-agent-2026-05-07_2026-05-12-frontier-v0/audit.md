# Pi Coding Agent Partial Cycle Audit: 2026-05-07 -- 2026-05-12

This run built the first Pi Coding Agent profile. Pi is the deliberately
minimal harness source. The research question is what a thin harness refuses
to own by design, and what that refusal reveals about Bitter's wedge.

## Format and Evidence Floor Assessment

Pi has `surface_class: open_source_commits` with github_repo and npm as primary
surfaces. This cycle's evidence is release notes (v0.74.0, v0.73.1) plus one
commit diff for the harness stream configuration change. The weakest evidence
is release notes, so `evidence_floor: release_note` is accurate.

Note: The source contract points to `badlogic/pi-mono`. This window reveals
that Pi is mid-migration to `earendil-works/pi-mono` (and then `earendil-works/pi`).
The source contract should be updated to the new canonical URL once the migration
completes. This is documented as a pending source-contract update in the profile's
"What To Watch Next" section. It is not a doctrine gap -- the old URL still
resolves and the releases are still published there -- but it should be tracked.

Note: The manual finding for Pi was missing a `finding_id`. Added retroactively
as `2026-05-06-pi-thin-harness-provider-churn` (same Gap 10 pattern).

## Observation: Provider Churn as Design Intent

This window's releases continue the pattern: new providers added (Together AI,
various OAuth paths), JSONC parsing for operator ergonomics, OAuth improvements.
Pi's provider surface is intentionally fluid. The releases confirm that the
deliberate minimalism noted in prior findings is not an absence of investment;
it is an active design choice.

The Earendil Works migration signals that Pi's maintainer is formalizing the
project. The next cycle for Pi should watch whether the organizational transition
changes the governance surface (e.g., terms of service, pricing, enterprise
tier) or only the packaging/identity.

## Zero New Doctrine Gaps

This cycle surfaced no new doctrine-level questions. The source-contract URL
update is operational, not doctrinal.

## Productivity Check

The Pi Coding Agent partial cycle took approximately 30 minutes (smaller
footprint because this window was lower-velocity than Hermes or OpenHands).
Outputs:
- 1 finding accepted as signal (`2026-05-12-pi-earendil-migration-and-harness-sdk`)
- 7 profile claims (4 seeded from prior findings, 3 new from current window)
- 0 new doctrine gaps
- 1 digest fragment (`pi-coding-agent-fragment.md`)
- 1 retroactive finding_id fix (2026-05-06-pi-thin-harness-provider-churn)

Seven providers now have profiles:
- `gemini-cli.md` (`open_source_commits`, commit_diff_reviewed floor)
- `codex.md` (`mixed_official_docs`)
- `claude-code.md` (`closed_source_release_notes`)
- `openclaw.md` (`open_source_commits`, release_note floor)
- `openhands.md` (`mixed_official_docs`, release_note floor)
- `hermes-agent.md` (`open_source_commits`, release_note floor)
- `pi-coding-agent.md` (`open_source_commits`, release_note floor -- this cycle)

Remaining: Paperclip, Agent Zero (two remaining).
