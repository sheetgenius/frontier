# Omnigent — source notes

Added 2026-08-02. Apache-2.0, Python, `omnigent-ai/omnigent`, ~8.1k stars at
intake. Its own description: "an open-source AI agent framework and
meta-harness: orchestrate Claude Code, Codex, Cursor, Pi, and custom agents."
Landing-page tagline: "The open-source meta-harness for all your AI agents."

## Why it is on the watchlist

Every other project we track is a harness. This one sits above them, and that
is the entire reason to watch it.

The publication's standing argument is that a control which exists only as an
intention is not a control. A meta-harness is where that argument gets its
hardest test, because there are now two governance layers with a claim on the
same action. Omnigent ships policies, spend caps and access controls; the
harness it is driving ships its own permission system underneath. An operator
who writes a deny rule has to know which layer refuses, and what happens when
the two disagree.

Nobody in this field has answered that in public. It is the most interesting
open question on the watchlist.

## What is checkable

- **Releases are frequent and pre-1.0.** v0.2.0 through v0.7.0 landed between
  2026-06-19 and 2026-07-27, roughly weekly. Breaking changes are expected, so
  the tag-to-tag diff carries more than the release note.
- **v0.7.0 (2026-07-27)** added scheduled tasks, first-class projects, voice
  dictation with optional server-side transcription, and routing that picks both
  harness and model. Two of those are worth a second look: server-side
  transcription is a new data path off the operator's machine, and a router that
  chooses the harness means the governance layer an action lands under can now
  change without the operator choosing it.
- **Spend caps** are unusual on this watchlist because they are a control with a
  number attached. Enforced-before-the-call and reconciled-after-the-call are
  very different products, and the distinction should be establishable from the
  code rather than the docs.

## Handling rules

- It is a **Tier 2, weekly** source. Do not promote it to daily on the strength
  of release velocity alone.
- **Do not confuse it with the harnesses it wraps.** A finding about Claude Code
  behaviour observed through Omnigent is a finding about the pair, not about
  either alone, and must say so.
- Adapter lag is a legitimate finding but is **not** a defect in the underlying
  harness. Attribute it to the adapter.
- Standard channel discipline applies: check whether governance work is in the
  tag an operator installs or sitting on main.

## Comparison set

`paperclip`, `openhands`, `hermes-agent` — the other projects that position as a
layer above rather than a coding agent proper. Paperclip is the closest
comparison and the useful contrast: it manages an org of agents it owns, whereas
Omnigent orchestrates agents it does not.
