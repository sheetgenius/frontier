---
schema_version: bitter.frontier_charter_amendment.v0
amendment_id: 003
title: "Close Codex audit gaps, relax exemplar rule, pin autonomous-run target"
status: ratified
proposed: 2026-05-12
ratified: 2026-05-12
rejected: null
applied_in_commit: 9594d4a
proposed_by: conversation (michael-ruescher, claude-opus-4-7)
supersedes: []
superseded_by: null
---

# Amendment 003: Close Codex Audit Gaps, Relax Exemplar Rule, Pin Autonomous-Run Target

## Summary

Three doctrine refinements before the autonomous Bitter Frontier loop
begins its long-horizon run:

1. Add `commit` as a recognized precision level in the Profile
   `evidence_floor` enum, between `commit_diff_reviewed` and
   `release_note`. Codifies a precision level already in active use in
   findings.
2. Add a clarifying note that profiles with
   `surface_class: mixed_official_docs` typically set
   `evidence_floor: release_note`, while
   `surface_class: open_source_commits` profiles typically set
   `commit_diff_reviewed`. This is correlation, not requirement; the
   floor should match the strictest precision the source can be
   reasonably harvested at.
3. Relax the "maintain only one canonical exemplar" rule. After two
   exemplars (Gemini CLI, Codex) and six closed doctrine gaps, the
   doctrine is settled enough that the autonomous loop is authorized
   to build profiles for the remaining seven watchlist providers.

This amendment also pins the operational target for the autonomous
run that begins immediately after ratification.

## Why

The 2026-05-11 Codex partial cycle audit
(`runs/2026-05-11-partial-cycle-codex-2026-05-08_2026-05-11-frontier-v0/audit.md`)
surfaced three gaps. Gaps 7 and 8 are real specification holes; gap 9
is the merge-to-default rule working as intended and needs no fix.

Gap 7 will block the next provider's profile if not closed. Claude
Code in particular is expected to use `closed_source_release_notes`
evidence that maps cleanly to neither `commit_diff_reviewed` nor
`release_note`. Adding `commit` to the enum gives findings and
profiles the precision level they already need.

Gap 8 is more about expectations than a strict rule. Documenting it
keeps future profile authors from over-tightening floors on sources
with multiple priority-1 surfaces.

The "one canonical exemplar" rule was a guardrail for the experimental
period. Two cycles, six gap fixes, and a converging doctrine mean the
guardrail has served its purpose. Removing it now lets the loop scale
without an artificial constraint.

The operational target pins what "done" actually means for the
autonomous run. Without it, the loop has a stop boundary but no
convergence signal.

## Changes Applied

Edits to `RESEARCH_CONTRACT.md`:

- `evidence_floor` enum becomes
  `commit_diff_reviewed | commit | release_note | official_docs |
  observed_behavior`. `commit` denotes a commit URL whose diff has not
  been individually reviewed.
- Add a clarifying sentence linking `surface_class` to typical
  `evidence_floor` values, as correlation rather than requirement.
- Replace "maintain only one canonical exemplar" with "maintain a
  small number of exemplars while doctrine remains experimental, and
  document the doctrine evolution via the amendment convention."
- Bump `Last revised` to 2026-05-12.

Edits to `AGENTS.md`:

- Add an "Operational Target For The Autonomous Run" subsection under
  Current Milestone defining the six-condition convergence target
  (coverage, depth, freshness, doctrine convergence, external review,
  synthesis). The target is the only stop condition; there is no time
  anchor.

## Operational Target For The Autonomous Run

The autonomous loop converges to satisfaction when all of the
following are true:

1. **Coverage**: profiles exist in `content/profiles/` for all nine
   watchlist providers (Codex, Claude Code, Gemini CLI, Hermes Agent,
   Pi coding agent, OpenClaw, Paperclip, Agent Zero, OpenHands).
2. **Depth**: each profile has at least three active claims, each
   anchored to evidence at or above its `evidence_floor`.
3. **Freshness**: each profile has been refreshed by at least one
   harvest cycle in addition to its initial build (so no profile is
   only seeded from inherited finding state).
4. **Doctrine convergence**: all audit gaps surfaced by the loop are
   closed via ratified amendments, OR explicitly deferred with a draft
   in `charter/proposed/` and a documented reason. The most recent two
   cycles raise zero new doctrine-level questions.
5. **External review**: at least one `bitter council` pressure-test
   has been run during the autonomous run on a profile from each
   surface_class present in the watchlist
   (`open_source_commits`, `mixed_official_docs`,
   `closed_source_release_notes` — three council runs minimum).
6. **Synthesis**: one cross-provider weekly digest covering the
   autonomous-run window has been published.

The loop is not time-budgeted. It runs until the target is reached to
satisfaction.

## Implications

- The Codex profile's `evidence_floor: release_note` remains accurate
  but is now optionally upgradable to `commit` if a future cycle
  diff-reviews more of its commits.
- The Claude Code profile (next likely to be built) is expected to set
  `surface_class: closed_source_release_notes` and
  `evidence_floor: release_note`.
- The autonomous loop is now authorized to build profiles for all
  seven remaining providers (Claude Code, Hermes Agent, Pi coding
  agent, OpenClaw, Paperclip, Agent Zero, OpenHands).
- The amendment convention extends de facto to cover related
  steering-doc edits (RESEARCH_CONTRACT.md, AGENTS.md) when they are
  the implementation of a doctrine-level decision. Amendment 002
  already set this precedent by editing AGENTS.md.

## Applied_In_Commit Note

Marked `pending`; the standard small follow-up commit fills in this
commit's hash.
