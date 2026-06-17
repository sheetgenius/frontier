# OpenHands Partial Cycle Audit: 2026-05-07 -- 2026-05-12

This run built the first OpenHands profile. OpenHands is the productized
platform calibration source. The research question is not only what OpenHands
can do but where a full agent platform makes work genuinely easier and where
it begins to own authority the operator should retain.

## Format and Evidence Floor Assessment

OpenHands has `surface_class: mixed_official_docs` with github_repo, official
site, docs, and releases as primary surfaces. The current evidence is two merged
PRs (#14122, #14133) plus the v1.7.0 release notes. The `merged_pr` precision
level maps above `release_note` in the method's enum; the release
notes are the weakest evidence in this cycle, so `evidence_floor: release_note`
is accurate.

The prior finding (`2026-05-07-openhands-platform-hardening`) used
`commit_diff_reviewed` and `commit` precision evidence. Those four claims
(secret-injection-subprocess, api-key-redaction, sandbox-grouping-ui,
self-hosted-gitlab) can be carried into this profile at the floor, since the
floor is release_note and their evidence at commit precision is above the
floor. This is consistent with the method's discipline.

## Observation: Opt-In Gating vs. Default-On Surface

The two new claims illustrate opposite gating philosophies that are both
present in OpenHands' current design:

- Sub-agent delegation (`enable_sub_agents`): default off. Operators enable
  deliberately. This protects against unintended cost and authority escalation.
- Critic evaluation display: default on for new users. OpenHands bets that
  evaluation visibility is net positive by default.

Neither is wrong. They reflect different risk asymmetries: a runaway sub-agent
loop is expensive and hard to notice; a critic display showing a low score is
visible feedback that an operator can act on. The distinction is worth naming
in the posture commentary because it maps to a design decision any operator loop
will face when deciding what to surface by default.

## Observation: Platform-Level vs. Model-Level Authority

OpenHands' sub-agent routing is platform-level, not model-level. The orchestrator
routes to sub-agents with structurally narrower tool surfaces. This is a
different pattern than prompting a single model to self-limit. Both patterns
exist across the watchlist; this is the clearest example of the structural
approach. The posture section notes this without prescribing an answer.

## Zero New Doctrine Gaps

This cycle surfaced no new doctrine-level questions. The opt-in vs. default-on
observation is editorial posture commentary, not a schema or evidence question.
The loop is operating cleanly.

## Productivity Check

The OpenHands partial cycle took approximately 50 minutes. Outputs:
- 1 finding accepted as signal (`2026-05-12-openhands-subagent-delegation-and-critic-evaluation`)
- 6 profile claims (4 seeded from prior finding, 2 new from current window)
- 0 new doctrine gaps
- 1 digest fragment (`openhands-fragment.md`)

Five providers now have profiles:
- `gemini-cli.md` (`open_source_commits`, commit_diff_reviewed floor)
- `codex.md` (`mixed_official_docs`)
- `claude-code.md` (`closed_source_release_notes`)
- `openclaw.md` (`open_source_commits`, release_note floor)
- `openhands.md` (`mixed_official_docs`, release_note floor -- this cycle)

Remaining: Hermes Agent, Pi coding agent, Paperclip, Agent Zero (four remaining).
Per the Operating Cadence, the next iteration should build one of these. Hermes
Agent is the highest-priority among the remaining four (no profile, no prior finding).
