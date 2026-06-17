---
schema_version: bitter.frontier_charter_amendment.v0
amendment_id: 001
title: "Establish charter amendment convention"
status: ratified
proposed: 2026-05-11
ratified: 2026-05-11
rejected: null
applied_in_commit: 63d2b0e
proposed_by: conversation (michael-ruescher, claude-opus-4-7)
supersedes: []
superseded_by: null
---

# Amendment 001: Establish Charter Amendment Convention

## Summary

Define the convention by which the Bitter Frontier charter changes over
time. Charter edits move through a directory-as-state lifecycle in
`charter/`: drafts begin in `charter/proposed/`, transition to
`charter/ratified/` when applied, or to `charter/rejected/` if turned
down. Ratified amendments remain on disk as the historical record;
`CHARTER.md` at the repository root absorbs their effect and is always
the binding current state.

## Why

Until now, charter edits left only commit-message and diff traces. The
diff is honest, but it does not narrate intent — why a change was
proposed, what trade-offs were considered, who weighed in. As the
repository operates more autonomously (per Amendment 002), the loop
needs a place to *propose* charter changes without self-committing them.
A formal amendment convention gives both human operators and the
autonomous loop a shared protocol for evolving the charter under
pressure.

## Rules

1. **Directory is state.** Each amendment lives in exactly one of
   `charter/proposed/`, `charter/ratified/`, or `charter/rejected/`.
   The directory is the authoritative state; the `status` field in the
   frontmatter is redundant but kept for read-in-isolation clarity.
2. **Numbering is global and sequential.** `amendment-NNN-<slug>.md`,
   three-digit prefix for sort order. Numbers are never reused. An
   amendment retains its number through any state transition.
3. **Ratification and absorption happen in the same commit.** Moving
   a file from `proposed/ → ratified/` must be accompanied by the
   `CHARTER.md` edits that absorb the change. The amendment's
   `applied_in_commit:` field names that commit.
4. **Superseded amendments stay in `ratified/`** with a
   `superseded_by:` header note pointing at the superseder. There is
   no separate `superseded/` directory; removing historical amendments
   would be revisionist.
5. **The autonomous loop may write to `charter/proposed/`** but must
   not self-commit transitions to `ratified/` or `rejected/`, and must
   not edit `CHARTER.md` directly. Durable doctrine changes are
   reviewed and applied by a subsequent human-or-conversational pass.
6. **Amendment files are immutable once moved out of `proposed/`,**
   except for narrow metadata edits (adding a `superseded_by:`
   reference, fixing a typo). The diff stays in git history; the file
   on disk does not silently drift.

## Schema

Every amendment file carries this frontmatter:

```yaml
---
schema_version: bitter.frontier_charter_amendment.v0
amendment_id: <integer>
title: <short human title>
status: proposed | ratified | rejected
proposed: <YYYY-MM-DD>
ratified: <YYYY-MM-DD or null>
rejected: <YYYY-MM-DD or null>
applied_in_commit: <hash or null>
proposed_by: <free-form attribution>
supersedes: [<amendment_id>, ...]
superseded_by: <amendment_id or null>
---
```

## Body Structure

Each amendment body should include:

- **Summary**: one paragraph of what changes.
- **Why**: the motivation, ideally with reference to a specific
  pressure (audit gap, council recommendation, observed failure).
- **Changes Applied** (for ratified amendments): the specific edits to
  `CHARTER.md` and related files.
- **Implications**: downstream artifacts that should update — profiles,
  doctrine docs, AGENTS.md, source contracts.
- **Why Rejected** (for rejected amendments only): the substantive
  reason for declining.

## Applied To

This amendment establishes the convention itself. The changes applied
in the ratification commit are:

- Created `charter/` with `proposed/`, `ratified/`, and `rejected/`
  subdirectories.
- Wrote `charter/README.md` documenting the convention.
- Added an `## Amendments` section to `CHARTER.md` pointing at the
  convention.

No other `CHARTER.md` content was modified by this amendment; Amendment
002 (ratified in the same session) handled the substantive R&D-framing
edits.

## Out Of Scope

Pre-existing charter changes (before this amendment was ratified) are
not retroactively recorded as amendments. The git history is sufficient
for changes made before the convention existed.

## Applied_In_Commit Note

The `applied_in_commit:` field is marked `pending` at the time the
amendment file is written because the commit hash is unknowable from
inside the same commit. A small follow-up commit fills in the actual
hash. Future amendments may inherit this two-step pattern or work
around it; either is acceptable.
