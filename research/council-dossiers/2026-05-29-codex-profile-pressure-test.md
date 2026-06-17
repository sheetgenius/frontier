# Council Dossier: macro_64266fc0-8c9e-417c-a3d2-bb3aa87c827e

## Context
- question_source: file
- question_file: /tmp/bitter-council-prompts/codex.md
- cwd: /Users/c3po/co/bitterfrontier
- model_policy: {"codex_model":null,"codex_config":["model_reasoning_effort=xhigh"],"synthesis_codex_model":null,"synthesis_codex_config":["model_reasoning_effort=xhigh"],"claude_model":null,"gemini_model":null,"reviewers":["codex"],"synthesizer":"codex","child_timeout_ms":900000,"name":"codex-profile-2026-05-29"}

## Question
# Bitter Frontier — Codex profile council pressure-test

## Context

Bitter Frontier (`https://frontier.bitter.sh`) is a research-and-publication
surface watching frontier coding-agent harnesses. The house rule is:

> No frontier claim without an operator consequence.
> No operator consequence without a receipt.
> No signal unless it can change the next action.

The Codex profile (`content/profiles/codex.md` in the `bitterfrontier` repo)
carries `surface_class: mixed_official_docs` and
`evidence_floor: release_note`. The convergence target for the autonomous
loop requires at least one external-review council pressure-test per
surface_class.

This council is that pressure-test for `mixed_official_docs`. You are
asked to act as an independent reviewer (Codex, xhigh reasoning effort).

## Current stance (paraphrased from the profile)

- **Use it for**: teams watching closed-source coding-agent platforms for
  what's coming next. Codex is where you see how OpenAI thinks about
  long-running goals, plugin permissions, and making authority state
  visible at a glance — before any of it shows up in your tool of choice.
- **Avoid it for**: anyone who needs to fork or audit the agent itself
  — Codex is watched as platform behavior, not a CLI you own. Hook
  authors using PreToolUse rewrites should re-test after v0.130.x;
  the rewrite path now actually rewrites.
- **Watch next**: how plugin sharing evolves once role-aware access
  lands in operator hands, and whether bundled Linux sandboxing
  extends to other host OSes.

## Three claims to pressure-test

Defend or refute each claim below. For each, name either a missed nuance
in the editorial prose or a piece of overclaim, and give one operator-facing
recommendation.

### Claim 1 — "Permission profile inheritance + managed `requirements.toml` is a structural shift, not feature polish."

The 2026-05-27 digest framed Codex 0.134.0's permission profile
inheritance + an organization-managed `requirements.toml` enforcement
file as a structural policy-substrate shift, not a feature release.
The signal `2026-05-27-codex-permission-profile-inheritance-and-managed-requirements`
makes this claim explicit.

Defend or refute: does framing this as a structural shift over-credit
a feature that may end up being one team's enforcement model, not a
category move? Or is the inheritance + managed-policy pair genuinely
the kind of policy substrate that enterprise operators have been
waiting for?

### Claim 2 — "Goal mode default-on across app, IDE, and CLI is the new persistent-objective baseline."

The profile names `/goal` as a "persistent objective, not a prompt
extension." The 2026-05-27 signal
`2026-05-27-codex-goal-mode-graduated-and-remote-computer-use`
frames goal-mode graduation as a category move toward stateful
agent operation.

Defend or refute: is this a correct read of the Codex 26.519
launch, or is the profile trafficking in Codex marketing framing
("graduated default-on") rather than testing what changed for the
operator who already used `/goal` in preview?

### Claim 3 — "Remote computer use after Mac lock is a new authority decision."

The Codex 0.134.0 / 26.519 launch added remote computer use that
continues operating against the locked host after the operator's
Mac locks the screen. The signal treats this as a new authority
decision — a locked host is now a surface an operator must
explicitly permit or constrain.

Defend or refute: is the locked-host surface materially different
from prior remote agent execution? Or is the locked-state framing
a small operational change being treated as a category event?

## Bonus question (worth answering)

The profile carries `surface_class: mixed_official_docs` today. Recent
Codex changelogs are increasingly release-note-shaped; PRs and commits
are no longer visible in the same primary-source way OpenAI initially
maintained. Is `mixed_official_docs` still the right classification?
Should Codex move to `closed_source_release_notes` alongside Claude
Code?

The classification decision has downstream consequences for the
`evidence_floor` field and for what counts as a defensible claim in
this profile.

## Required answer shape

- Per claim: verdict (sustain / refute / partial), reasoning, operator-facing
  recommendation.
- A single overall verdict on whether the profile's current stance is
  defensible as written for the next refresh cycle.
- Any missed nuance the profile should add.
- Any over-claim the profile should retract.
- Bonus answer: surface_class classification verdict.

## Source handles

- Profile: `content/profiles/codex.md` in `bitterfrontier`.
- Recent signals:
  - `2026-05-27-codex-goal-mode-graduated-and-remote-computer-use`
  - `2026-05-27-codex-permission-profile-inheritance-and-managed-requirements`
- Source contract: `sources/codex.yml` and `sources/codex.notes.md`
  (if present).
- Digest: `content/digests/2026-05-13_2026-05-27-weekly.md`.
- House rules: `CHARTER.md`, `RESEARCH_CONTRACT.md`, `AGENTS.md`.

## Quality target

Surface at least one finding the editor should fix, reword, or sharpen
in the next refresh cycle. A no-issues verdict is fine if you reach it
with genuine consideration of each claim — but the convergence target
benefits more from a useful correction than a polite confirmation.

## Research Outputs
- research_codex: ok -> child_runs/research_codex/output.jsonl

## Review Outputs
- review_codex: ok -> child_runs/review_codex/output.jsonl

## Synthesis
I’ll anchor the review in the repo’s doctrine and the named Codex artifacts, then give the operator-facing council answer without making any file changes.The governing docs confirm the key test: these claims only survive if they change an operator action and carry receipts. I’m now checking the Codex-specific profile, source contract, digest, and signal artifacts for what the repo actually says.The council result is not a no-issues confirmation. The profile is broadly defensible, but it should tighten two claims and avoid a premature `surface_class` migration.

**Claim 1: Partial Sustain**
Permission profile inheritance plus managed `requirements.toml` is structural inside Codex. The receipts support that: CLI 0.133.0 added inheritance, managed requirements support, runtime refresh, and profile discovery; 0.134.0 made `--profile` canonical and rejected legacy profile configs. That is more than polish.

The overclaim is category certainty. The profile can say “Codex now has a real policy substrate,” but not yet “this is the enterprise category model” without distribution, signing, subtraction semantics, and adoption evidence.

Recommendation: tell enterprise operators to prototype base profiles plus team derivations, but do not rely on managed `requirements.toml` as enforceable policy until the trust path and inheritance merge semantics are verified.

**Claim 2: Partial**
Goal mode as a persistent objective is supported. The weak part is “new baseline” if the reader already used `/goal` in preview. The real change is default exposure, stable API posture, dedicated storage, progress tracking, and automatic continuation moving out of the experimental lane.

Recommendation: reword from “new persistent-objective baseline” to “stable, default-exposed persistent-objective baseline.” Operators should retest existing goal workflows against CLI 0.133.0+ and verify where permission constraints now live.

**Claim 3: Sustain, Narrowly**
Remote computer use after Mac lock is materially different from ordinary remote execution because it crosses the locked-host boundary. OpenAI’s docs say it must be enabled, is scoped to active trusted computer-use turns, uses short-lived authorization, covers displays, and relocks on local input. That makes it a new authority decision.

The overclaim would be calling it a broad category event. It is a narrow, opt-in locked-host authority surface.

Recommendation: default-deny it for sensitive hosts, then allow only scoped task classes after verifying stop, relock, display-cover, and app-permission behavior.

**Overall Verdict**
The Codex profile stance is defensible for the next refresh cycle, but not as written at full strength. The “Codex is where you see what is coming next before it shows up in your tool” line should be softened. That is a directional editorial claim, not a receipt-backed operator claim.

Missed nuance to add: the same 2026-05-21/26.519 bundle produced several distinct operator decisions: goal defaulting, locked-host computer use, plugin marketplace sharing, and permission substrate. The current signal shape risks compressing multiple action verbs into one signal.

Overclaim to retract: “policy substrate the goal-default-on move requires” is too causal. The safer claim is that default-on goals and policy-profile formalization shipped together and are operationally complementary.

**Bonus: Surface Class**
Keep `surface_class: mixed_official_docs` for now. Do not move Codex to `closed_source_release_notes` yet. The official changelog and GitHub releases are now dominant, but PR-level receipts remain visible for important claims, including inheritance and managed requirements. Keep `evidence_floor: release_note`, but require PR or docs corroboration for semantics-heavy profile claims.

## Smallest Implementation Target

Update `content/profiles/codex.md` to soften the “what is coming next” stance, narrow goal mode to “stable/default-exposed,” frame locked-host use as opt-in authority surface, and add an open question for when Codex should be reclassified from `mixed_official_docs` to `closed_source_release_notes`.

## Use
- Treat this dossier as research input, not authority by itself.
- Source-check accepted and rejected claims before launching a worker.
