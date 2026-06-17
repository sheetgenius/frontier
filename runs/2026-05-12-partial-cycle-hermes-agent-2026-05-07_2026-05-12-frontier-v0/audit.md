# Hermes Agent Partial Cycle Audit: 2026-05-07 -- 2026-05-12

This run built the first Hermes Agent profile. Hermes is the self-improving
personal-agent platform source. The research question is whether a
self-managing, multi-surface agent environment can be made governable, and
what the receipts for that governance look like.

## Format and Evidence Floor Assessment

Hermes Agent has `surface_class: open_source_commits` with github_repo and
releases as primary surfaces. The v0.13.0 release (864 commits, 588 PRs) is
the primary harvest source; selected PRs were reviewed for specifics. The
weakest evidence in this cycle is the release notes (`release_note`), so
`evidence_floor: release_note` is accurate.

Note: The prior manual finding (`2026-05-06-hermes-curator-and-service-surfaces`)
was missing a `finding_id` -- the same Gap 10 pattern identified in the Claude
Code cycle. The field was added to that finding file retroactively. The commit
message for this cycle records the fix.

## Observation: Hallucination Gate as Evidence Contract

The Kanban hallucination gate (PR #20232) is the most theoretically interesting
addition in this window. It requires that a worker's claimed completion be
verified before the task state transitions. This is a deployed instance of
"evidence required before state change" in a multi-agent context.

Bitter's receipt model applies the same principle at the session/claim level.
The Hermes Kanban gate and the Bitter receipt are solving the same problem at
different scopes: neither system accepts a claim without evidence. This
convergence is worth naming in the posture section.

## Observation: Security Defaults as Product Posture

Secret redaction being ON by default is a governance default change, not just
a security fix. The prior state (opt-in redaction) put the security burden on
operators who might not know to turn it on. The new state (default-on) makes
security the path of least resistance.

This is the same pattern as OpenClaw's `skills.install.allowUploadedArchives`
(default closed) and WhatsApp's default-reject-strangers (now explicit). The
direction of defaults is a governance statement, not just a configuration
detail. Bitter should apply the same principle to its own credential handling.

## Zero New Doctrine Gaps

This cycle surfaced no new doctrine-level questions. The `evidence_floor`
for a high-commit-volume open-source provider using release notes as primary
harvest is already covered by prior doctrine (same as OpenClaw). The missing
finding_id fix is operational, not doctrinal.

## Productivity Check

The Hermes Agent partial cycle took approximately 55 minutes. Outputs:
- 1 finding accepted as signal (`2026-05-12-hermes-tenacity-kanban-and-security`)
- 9 profile claims (5 seeded from prior findings, 4 new from current window)
- 0 new doctrine gaps
- 1 digest fragment (`hermes-agent-fragment.md`)
- 1 retroactive finding_id fix (2026-05-06-hermes-curator-and-service-surfaces)

Six providers now have profiles:
- `gemini-cli.md` (`open_source_commits`, commit_diff_reviewed floor)
- `codex.md` (`mixed_official_docs`)
- `claude-code.md` (`closed_source_release_notes`)
- `openclaw.md` (`open_source_commits`, release_note floor)
- `openhands.md` (`mixed_official_docs`, release_note floor)
- `hermes-agent.md` (`open_source_commits`, release_note floor -- this cycle)

Remaining: Pi coding agent, Paperclip, Agent Zero (three remaining).
Per the Operating Cadence, the next iteration should build one of these.
All three have source contracts; none have prior findings.
