---
schema_version: bitter.frontier_charter_amendment.v0
amendment_id: 008
title: "Composition relation subtypes — `composes:` grows from a flat id list to a named relation so 'compose' stops conflating routes-through with fronts with modifies"
status: proposed
proposed: 2026-05-30
ratified: null
rejected: null
applied_in_commit: null
proposed_by: autonomous-loop (claude-opus-4-7, surfaced by Codex xhigh external-review council on hermes-agent profile 2026-05-29)
supersedes: []
superseded_by: null
---

# Amendment 008: Composition relation subtypes

## Summary

Amendment 006 introduced `composes: [id, id, ...]` on findings under
the framing:

> Composition is when one product's change materially depends on or
> defers to another product's surface.

The 2026-05-29 external-review council on the `hermes-agent` profile
sustained the `composes: [codex, aider, cline, continue]` array on the
v0.14.0 foundation-release finding *under current doctrine*, but
surfaced the underlying semantic question explicitly:

> The nuance is semantic: "compose" here means "routing target /
> authority path," not "Hermes modifies Codex." This surfaces
> amendment-006 refinement work: add a relation subtype or clarify
> that routing-target composition is first-class.

The pattern: amendment-006's flat `composes: [id, id, ...]` array
conflates at least four operationally distinct relationships:

1. **Routes through.** Tool A exposes an endpoint that tool B speaks
   to as if it were B's normal upstream. Hermes proxy ↔ Codex CLI.
   Authority transfer happens at config time, not at runtime
   modification.
2. **Fronts.** Tool A is a UI shell whose actions are executed by tool
   B's runtime. OpenHands ACP ↔ Claude Code. The front-end's job is
   greyed-out under the back-end's authority.
3. **Defers to.** Tool A reads tool B's settings or permission files
   as authoritative input. Paperclip ACPX ↔ `~/.claude/settings.json`.
   No modification; passive deference.
4. **Modifies.** Tool A directly changes tool B's state, configuration,
   or behavior. Rare in the current corpus; the relationship most
   people *intuitively* mean by "compose."

These are not the same relationship. Filtering signals by `composes:
claude-code` returns all four kinds, but an operator reading the list
needs different things from each:

- For *routes through*: "what credential / authority transfer happened
  at config time?"
- For *fronts*: "what does the front-end disable when active?"
- For *defers to*: "which of my files are now load-bearing for this
  tool?"
- For *modifies*: "what state of mine changed without my hand on the
  keyboard?"

The flat list cannot answer those questions. This amendment grows
`composes:` from a flat id list to a list of `{id, relation}` objects.

## Why

Three pressures.

**First — the v0.14.0 corpus exemplifies all four relations
simultaneously.** Within a single window, the corpus has:

- `hermes-agent` → `codex` (routes_through): hermes proxy.
- `openhands` → `claude-code` / `codex` / `gemini-cli` (fronts): ACP UI.
- `paperclip` → `claude-code` (defers_to): ACPX-Claude respects
  `~/.claude/settings.json`. (Currently deferred from the
  `composes:` array per amendment-006's Paperclip resolution; a clean
  relation subtype is one of the conditions for un-deferring it.)
- No clean `modifies` example in the current window, but the relation
  shape is foreseeable as harnesses gain cross-product configuration
  authority.

**Second — the operator query is ambiguous as posed.** An operator on
`/profiles/claude-code/` who lands on the "Inbound composition" block
expects different reading depending on the relation. The current
profile rendering uses a single "signals from other watched providers
whose finding declares it composes with X" caption. Splitting the
inbound block by relation lets the operator skim the relations they
care about and skip the ones they don't.

**Third — Paperclip's deferred composes case clears under this
amendment.** Amendment 006 deferred Paperclip's composes array because
the finding's multi-vector shape over-claims any relation when the
union is finding-level. With explicit relation subtypes, the
multi-vector finding can carry
`composes: [{id: claude-code, relation: defers_to}]` honestly — the
relation makes clear that *one* vector defers to Claude Code, without
forcing the other vectors to inherit a misleading "composes with Claude
Code" framing. (The decomposition under amendment-005 is still the
cleaner long-term fix, but this amendment cuts the deferred case
sooner.)

## The schema change

`composes:` grows from `Array<string>` to `Array<{id: string, relation: string}>`.

```yaml
# Before (amendment-006 shape)
composes:
  - codex
  - aider
  - cline
  - continue

# After (this amendment)
composes:
  - {id: codex, relation: routes_through}
  - {id: aider, relation: routes_through}
  - {id: cline, relation: routes_through}
  - {id: continue, relation: routes_through}
```

### The relation enum

Initial enum (closed set; future amendments can add):

- `routes_through` — A exposes an endpoint that B speaks to. Credential
  / authority transfer happens at config time.
- `fronts` — A is a UI / shell whose actions are executed by B's
  runtime. A's surfaces grey out under B's authority.
- `defers_to` — A reads B's settings, permission files, or other
  declarative state as authoritative input.
- `modifies` — A directly changes B's state, configuration, or
  behavior.

Each relation is a verb on the *originating finding's source*. The
finding says: *we (source X) compose-with-relation Y onto target Z.*

### Integrity check semantics

The integrity checker grows three validations:

1. **Each entry must be an object with `id` and `relation`.** A bare
   string id fails QA. The migration is mechanical (see Applied To
   below); this is enforced as a hard validation, not a warning.
2. **The relation must be one of the enum values.** Typos or invented
   relations fail QA.
3. **The existing amendment-006 validations are preserved.** Every
   `id` must resolve to `sources/index.yml` ∪ `sources/adjacent.yml`.
   No self-composition.

The signal-level derived union also updates: a signal's composes is
now a deduplicated array of `{id, relation}` objects across its
referenced findings. Two findings declaring
`{id: claude-code, relation: routes_through}` collapse to one entry;
one finding declaring `routes_through` and another declaring
`fronts` for the same id remain as two entries.

### Rendering semantics (post-ratification)

- **Signal cards:** the "composes with: X, Y" line groups by relation
  when more than one relation is present:
  - `composes with: routes_through codex, aider; fronts claude-code`
  - When all entries share one relation, the relation appears once:
    `routes through: codex, aider, cline, continue`.
- **Signal pages:** the existing "Composition" sub-section under
  Receipts gains a relation column. The current display
  (watchlist/adjacent + notes) stays; the new column sits before it.
- **`/signals/` index filter facet:** the "Filter by composition"
  chip list stays per-id but the per-id page (`/signals/composes-with/[slug]/`)
  groups its results by relation. An operator filtering by
  `claude-code` sees:
  - Routes through `claude-code`: ...
  - Fronts `claude-code`: ...
  - Defers to `claude-code`: ...
  - Modifies `claude-code`: ...
  Empty groups are not rendered.
- **Provider profile pages:** the "Inbound composition" block groups
  inbound signals by relation, same shape as the filter page.

The rendering changes are larger than amendment-006's were; they
should land as one site PR after this amendment ratifies.

### Migration: from flat id list to object list

The existing `composes:` arrays in the corpus need a one-shot
migration. The migration is mechanical given the council's reading and
the corpus shape:

- **`2026-05-27-openhands-acp-ui-and-org-llm-profiles`** —
  `composes: [claude-code, codex, gemini-cli]` →
  `composes: [{id: claude-code, relation: fronts}, {id: codex, relation: fronts}, {id: gemini-cli, relation: fronts}]`.
  The ACP UI fronts the named back-ends.
- **`2026-05-27-hermes-v0.14.0-foundation-release`** —
  `composes: [codex, aider, cline, continue]` →
  `composes: [{id: codex, relation: routes_through}, {id: aider, relation: routes_through}, {id: cline, relation: routes_through}, {id: continue, relation: routes_through}]`.
  All four are routing targets for `hermes proxy`.

After migration, the Paperclip deferred case becomes addressable: if
the multi-vector Paperclip finding's ACPX vector is the only vector
that composes, the finding can carry
`composes: [{id: claude-code, relation: defers_to}]` — the relation
disambiguates which vector is at issue, so the union onto signals
representing *other* vectors of the same finding does not
mis-claim Claude Code composition.

## Applied To (ratification work)

When this amendment is ratified:

1. Move this file from `charter/proposed/` to `charter/ratified/`.
2. Update `RESEARCH_CONTRACT.md` Finding section to name the new
   `{id, relation}` shape; document the four-relation enum; reference
   this amendment as the parent of any future relation additions.
3. Update `site/scripts/check-integrity.mjs` to enforce the three new
   validations (object shape, valid relation, existing amendment-006
   checks preserved).
4. Migrate the two existing findings that carry `composes:` arrays
   from the flat id list to the object list per the migration table
   above.
5. Update `site/src/lib/frontier.ts` `composes` derivation to handle
   the object shape; keep the displayed-label / link logic, add the
   relation grouping logic for the rendering targets.
6. Update the three rendering surfaces from amendment 006
   (signal cards, signal pages, profile pages) to group by relation;
   update `/signals/composes-with/[slug]/` to group by relation.
7. Consider Paperclip un-deferral: once the migration is complete and
   relation-aware rendering ships, the deferred Paperclip composes
   array can be added with `relation: defers_to` for the ACPX vector.
   This is a separate editorial pass, not a ratification-time
   commitment.

## Ordering with amendment-006

Amendment 006 is already ratified. This amendment refines
amendment-006's `composes:` schema without changing what "compose"
*means* — only what shapes are storable. Findings that carried the
flat list are migrated mechanically; no claim is added or removed.

## Ordering with amendment-007

Amendment 007 (`security_advisory` deployment-class scoping) is also
proposed simultaneously. The two amendments are independent. Either
can ratify first or both can ratify together; this amendment does not
depend on amendment 007 in any way.

## Rejection criteria

This amendment should be rejected if any of the following are true at
ratification time:

- The four-relation enum proves too narrow and a *fifth* relation
  ships in the same window without obvious mapping to the existing
  four. If so, this amendment should be re-proposed with the wider
  enum; the four-relation cut was made on the current corpus and may
  not survive the next window's harvest.
- The migration of the two existing `composes:` arrays proves
  contentious — i.e., the council or editorial review disagrees with
  the `fronts` / `routes_through` assignment. If so, the
  classifications need to be re-debated before ratification.
- Operator feedback on the rendered output shows that the relation
  grouping clutters the signal card / index pages more than it
  clarifies. If readers prefer the flat list, the data shape can
  still be useful internally; consider rendering only the relation
  on signal *pages*, not cards or facets.

## Out of scope

- This amendment does not change the meaning of `source:` on
  findings.
- This amendment does not change `sources/adjacent.yml` semantics.
- This amendment does not propose bidirectional composition (an
  inbound-composition rendering question, which amendment-006 already
  handles via derived rendering).
- This amendment does not propose the missing relational fields
  (`supersedes`, `depends_on`, etc.). Each is its own amendment per
  amendment-006's "first structured relational field" discipline.

## Source

- External-review council pressure-test on the `hermes-agent`
  profile, 2026-05-29:
  `research/council-dossiers/2026-05-29-hermes-agent-profile-pressure-test.md`,
  Claim 4.
- Parent amendment:
  `charter/ratified/amendment-006-composition-findings.md`, which
  introduced `composes:` as a flat id list with no relation subtype.
- Corpus examples: `openhands`, `hermes-agent`, `paperclip`
  findings from the 2026-05-27 weekly digest run.

## Revisions

- 2026-05-30: initial proposal.
