# OpenClaw Partial Cycle Audit: 2026-05-07 -- 2026-05-12

This run built the first OpenClaw profile, exercising the pipeline on a
high-velocity open-source project (8000+ commits per window). OpenClaw is
the accessibility calibration source; the primary research lens is not
capability alone but whether agentic work is becoming more reachable without
hiding authority.

## Format and Evidence Floor Assessment

The major format question was evidence_floor. OpenClaw is `surface_class:
open_source_commits` per its source contract, which typically implies
`evidence_floor: commit_diff_reviewed`. But the prior commit-harvest finding
recorded `commit_count: 8210` for a two-week window -- roughly 400 commits per
day. Diff-reviewing individual commits at that volume is not feasible as a
primary harvest method.

This cycle's approach:
- Used GitHub release notes (v2026.5.10-beta.5) as the primary harvest surface.
- Set `evidence_floor: release_note` in the profile, with a prose note explaining
  the decision and the path for upgrading claims in a future cycle.
- The release notes are clearly official and cover the operator-visible changes
  coherently.

This is doctrinally consistent with the method's clarification (Gap 8
resolution): "the floor should match the strictest precision the source can be
reasonably harvested at." No amendment needed; the doctrine already covers this.

## Observation: Open Source + Release-Note Floor = Valid but Less Precise

Setting `evidence_floor: release_note` on an `open_source_commits` provider is
honest about what was done, but it means the profile cannot distinguish between
"this feature shipped in a stable release" and "this feature was in a beta
release." All v2026.5.10 evidence in this cycle is from beta releases. The
profile records beta status in the "What To Watch Next" section.

The next cycle for OpenClaw should target stable 2026.5.10 and compare it
against the beta notes, and should diff-review the two or three most
operator-significant commits to upgrade specific claims to `commit_diff_reviewed`
precision.

## Observation: Release Note Volume and Signal Selection

The v2026.5.10-beta.5 release notes contain approximately 60 line items. This
cycle selected 7 for the finding and 8 for the profile (some overlap). Selection
criteria:
- Per the source contract's high_signal_patterns: permission, approval, visibility,
  memory, onboarding, skill, background agent
- Per the accessibility calibration lens: what became usable without expert terminal
  knowledge; what made authority more visible

Changes not included in the finding/profile:
- Build tooling improvements (pnpm 11 upgrade, oxlint, vitest rules): operator-invisible
- Provider-specific fixes (MiniMax, fal, xAI): provider-scope, not core gateway
- Telegram/Slack/Discord mechanics fixes: bug fixes without operator consequence
- QA/Mantis infrastructure additions: internal tooling

No doctrine gap here -- the source contract says to ignore noise patterns. The
selection is defensible.

## Mechanics That Worked

- GitHub API access to releases gave clean, structured release notes in one call.
- Reading existing profiles before harvest provided the novelty baseline: the
  accessibility and governance posture OpenClaw was building in the prior window
  was already well-understood, so this cycle focused on what extended it.
- The accessibility lens kept the finding grounded: the per-agent restrictions
  and onboarding wayfinding are the most important changes for OpenClaw's mission,
  even though transcript streaming has the most dramatic technical metric (90%
  memory reduction).

## Zero New Doctrine Gaps

This cycle surfaced no new doctrine-level questions. The evidence_floor /
open_source observation is an application of existing doctrine (the strictest
precision at reasonable scale), not a gap. The loop is operating cleanly.

## Productivity Check

The OpenClaw partial cycle took approximately 45 minutes. Outputs:
- 1 finding accepted as signal (`2026-05-12-openclaw-agent-permissions-and-onboarding`)
- 8 profile claims (3 seeded from prior finding, 5 new from current window)
- 0 new doctrine gaps
- 1 digest fragment (`openclaw-fragment.md`)

Four providers now have profiles:
- `gemini-cli.md` (`open_source_commits`, commit_diff_reviewed floor)
- `codex.md` (`mixed_official_docs`)
- `claude-code.md` (`closed_source_release_notes`)
- `openclaw.md` (`open_source_commits`, release_note floor -- this cycle)

Remaining: Hermes Agent, Pi coding agent, Paperclip, Agent Zero, OpenHands
(five remaining). Per the Operating Cadence, the next iteration should build
one of these. OpenHands (productized platform calibration source) is the
highest strategic priority among the remaining five.
