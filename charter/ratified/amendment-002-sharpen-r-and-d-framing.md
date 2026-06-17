---
schema_version: bitter.frontier_charter_amendment.v0
amendment_id: 002
title: "Sharpen charter for autonomous R&D operation"
status: ratified
proposed: 2026-05-11
ratified: 2026-05-11
rejected: null
applied_in_commit: 63d2b0e
proposed_by: conversation (michael-ruescher, claude-opus-4-7)
supersedes: []
superseded_by: null
---

# Amendment 002: Sharpen Charter For Autonomous R&D Operation

## Summary

Sharpen the charter so that an autonomous Bitter loop operating on this
repository for hours-to-days at a time can pick up cold and produce
coherent work. Four content changes:

1. Mission becomes concrete: study the frontier of a named watchlist,
   build and maintain a profile per framework, publish weekly digests,
   and demonstrate Bitter as a first-class automated R&D environment.
2. A new **R&D Demonstration** section codifies the autonomous-loop
   discipline (re-orient from doctrine each iteration, run partial
   cycles, audit gaps, use council for pressure-testing, commit as
   stand-alone units, do not self-commit doctrine).
3. North Star names both the weekly digest and the provider profile
   as primary reader products, rather than treating the profile as a
   derivative.
4. Primary Judge gains a second judgment surface: would a serious
   operator land on a profile and come away oriented?

## Why

The previous charter centered the weekly digest as "the reader product"
and treated profiles as research trail. As the experimental Profile
doctrine landed (2026-05-11) and the partial-cycle pattern proved out
on two providers (Gemini CLI, Codex), it became clear that profiles
deserve co-equal status. Separately, the brief now includes running
this as a worked example of automated R&D — the operating loop is
itself part of what the repository publishes. A 24-hour autonomous run
is the immediate forcing function: the charter must be clear enough
that a fresh autonomous iteration can re-orient from cold context.

## Changes Applied

Edits to `CHARTER.md`:

- **Mission**: replaced narrative with four-part concrete brief
  (study the frontier of a named watchlist, build profiles, publish
  digests, demonstrate Bitter as an automated R&D environment); named
  the watchlist explicitly; pointed at `sources/`.
- **R&D Demonstration**: new section between Public Posture and North
  Star, codifying the autonomous-loop discipline and the
  no-self-commit rule for doctrine.
- **North Star**: replaced "the reader product is the weekly digest"
  with a two-reader-product framing (digest + profile).
- **Primary Judge**: added the profile-orientation criterion as a
  co-equal judgment surface.

Edits to `AGENTS.md`:

- **Current Milestone**: updated to reflect the actual state (manual
  gold week complete; current focus is profile coverage plus
  autonomous-loop demonstration).
- **Operating Cadence**: new section defining the per-iteration shape
  and stopping conditions for the autonomous loop, plus the rule that
  doctrine-change proposals go into `charter/proposed/` rather than
  direct edits to steering documents.

## Implications

- Existing profiles (Gemini CLI, Codex) are already consistent with the
  sharper framing; no edits required.
- The remaining seven providers (Claude Code, Hermes Agent, Pi coding
  agent, OpenClaw, Paperclip, Agent Zero, OpenHands) need profiles
  built. The autonomous loop is now authorized to build them.
- `AGENTS.md#Operating Cadence` is the working entrypoint for the
  loop; `CHARTER.md` provides the binding constraints.
- The amendment convention from Amendment 001 is the mechanism by
  which the loop can propose further charter changes without
  self-committing them.

## Applied_In_Commit Note

Marked `pending`; a small follow-up commit fills in the actual hash.
