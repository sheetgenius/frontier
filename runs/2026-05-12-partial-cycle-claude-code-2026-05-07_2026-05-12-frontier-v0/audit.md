# Claude Code Partial Cycle Audit: 2026-05-07 -- 2026-05-12

This run tested whether the profile pipeline generalizes to a provider with
`surface_class: closed_source_release_notes`. It is the first partial cycle
for Claude Code, establishing the third surface class alongside Gemini CLI
(`open_source_commits`) and Codex (`mixed_official_docs`). Findings were seeded
from the prior manual-run finding (2026-04-22..2026-05-06) plus a fresh harvest
of the current window.

## Format Generalization Assessment

The `closed_source_release_notes` format generalized cleanly:

- `evidence_floor: release_note` is honest: the changelog and official docs are
  the best available evidence, and every claim in the profile is grounded at or
  above that floor.
- The absence of commit-level evidence did not create schema gaps. The profile
  YAML works without `commit_count` or `precision: commit_diff_reviewed` fields.
- The eight profile claims cover two findings and two distinct windows cleanly.
  The claim/finding cross-reference mechanism works the same as in the commit-only
  case.
- The source contract's primary surfaces (changelog, What's New, docs, npm
  package) all contributed evidence without ambiguity.

Conclusion: the format handles closed-source release-note providers without
structural changes. The remaining notes are operational observations, not
doctrine gaps.

## Gap 10: Prior finding lacks `finding_id` field

The prior Claude Code finding
(`runs/2026-05-06-manual-2026-04-22_2026-05-06-frontier-v0/findings/claude-code.md`)
was written during the manual gold-week run before the `finding_id` field was
introduced as a convention. The profile's `claims:` block requires a `finding_id`
reference for each claim.

This cycle resolved it by:
1. Retroactively adding `finding_id: 2026-05-06-claude-code-review-recap-plugin-surfaces`
   to the prior finding's frontmatter (minimal, non-destructive edit).
2. Using that ID in the profile `claims:` block.

The approach is consistent with the git-history-as-audit-trail principle: the
edit is visible in `git log` as a distinct commit. The prior finding's substance
is unchanged.

**Recommendation:** when a future cycle encounters a finding without `finding_id`,
add the field in the same commit as the profile update. The slug convention is
`YYYY-MM-DD-<source>-<brief-theme>`.

## Observation: Research-Preview Claims and Evidence Floor

Two claims in this profile reference Research Preview features (agent view,
/ultrareview). Both are grounded in official changelog entries and/or official
docs at or above `release_note` precision. The research-preview label is part of
the operator consequence (behavior may change), not a precision question. No
doctrine adjustment needed; capturing it as a "What To Watch Next" item in the
profile is the right handling.

## Mechanics That Worked

- Reading the Codex and Gemini profiles before harvest produced a clear novelty
  baseline: no prior Claude Code profile existed, so the novelty pass was "what
  is currently true about this tool" rather than "what changed since the last
  profile."
- The two-finding seed structure (prior manual finding + current window finding)
  made the claims block straightforward: prior-window claims got `last_verified`
  from the prior window; current-window claims got today's date.
- The `continueOnBlock` feature initially appeared only in the changelog summary.
  Cross-checking the hooks documentation confirmed the mechanism but revealed the
  docs page did not yet fully document the option. The finding cites both sources;
  the profile notes the open question about hook-as-policy-advisor.
- The `worktree.baseRef` behavior change (reverts to `"fresh"` default from
  `"head"`) is noted in the finding as a breaking behavior change. The changelog
  entry was clear that this reverses the default established in v2.1.128.

## Productivity Check

The Claude Code partial cycle took approximately 45 minutes of focused attention.
Outputs:
- 1 finding accepted as signal (`2026-05-12-claude-code-agent-view-goal-and-governance`)
- 8 profile claims (6 new from current window, 2 seeded from prior finding)
- 1 audit observation (Gap 10: retroactive finding_id assignment)
- 1 prior finding updated with finding_id field
- 1 digest fragment (`claude-code-fragment.md`)

Three providers now have profiles:
- `gemini-cli.md` (`open_source_commits`)
- `codex.md` (`mixed_official_docs`)
- `claude-code.md` (`closed_source_release_notes`, this cycle)

Missing profiles: Hermes Agent, Pi coding agent, OpenClaw, Paperclip, Agent
Zero, OpenHands (six remaining). The next cycle should build one of these.
Priority per the Operational Target: the six remaining providers have no
`surface_class` constraint preference beyond variety. `openclaw` (accessibility
calibration source) and `openhands` (productized platform calibration source)
are the highest strategic priority per AGENTS.md.

The most recent two cycles (this cycle + Codex partial cycle) surface zero new
doctrine-level questions. Gap 10 is an operational note, not a doctrine change.
The loop is converging.
