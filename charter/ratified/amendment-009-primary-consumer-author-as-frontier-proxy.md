---
schema_version: bitter.frontier_charter_amendment.v0
amendment_id: 009
title: "Primary consumer reframes from Bitter-the-machine to the author as cold-context proxy for a wide frontier-curious audience"
status: ratified
proposed: 2026-05-31
ratified: 2026-05-31
rejected: null
applied_in_commit: adc1b1d
proposed_by: conversation (michael-ruescher, claude-opus-4-8)
supersedes: []
superseded_by: null
---

# Amendment 009: The reader is the author's own cold-context self

## Summary

The publication's primary consumer reframes from **Bitter, the
meta-harness** (per amendment 004) to **the author as cold-context
proxy for a wide audience of people who want to understand the frontier
of what is possible with AI agents.**

Bitter does not stop consuming the structured signal stream. It moves
from *primary* consumer to *a* downstream consumer. The primary consumer
becomes the author returning to the repo with no context — and, through
the author, the wide frontier-curious audience the author is
representative of.

This is not a cosmetic reordering. Machine-primary / human-secondary was
always in tension with the charter's own standing requirement that the
work "stand on its own merits to a reader who has never heard of Bitter"
(`CHARTER.md`, Public Posture) and that "a reader who clones the repo
should be able to understand what was studied." This amendment resolves
that tension by collapsing the two readers into one: **the stranger is
the author's own cold-context self.** "Read it cold" and "build it for
me" are the same discipline. Building for the author stays legible to
everyone else precisely because a future self arriving with no context
is the proxy for the stranger.

## Why

Four pressures, one reframe.

**First — the existing ordering contradicted standing doctrine.**
Amendment 004 ratified "the primary consumer is Bitter; the secondary
consumer is the human reader," and grounded the schema discipline on
Bitter's need to query structured fields. But three other parts of the
charter already asserted the opposite primacy:

- Public Posture: "The research has to stand on its own merits to a
  reader who has never heard of Bitter. If a digest or profile requires
  familiarity with Bitter to be useful, the demonstration has failed."
- R&D Demonstration: "a reader can examine the repo and understand both
  *what* was found at the frontier and *how* the loop operated."
- North Star + Primary Judge: both are written for "a serious operator"
  reading the digest or landing on a profile — a human, not a query
  engine.

Machine-primary was the stated doctrine; human-legible-to-a-stranger was
the enforced doctrine. This amendment makes the stated and the enforced
agree.

**Second — "for the author" is the strongest available resolution, and
it kills the treadmill.** A publication built for an external audience
dies when the author's interest lapses; it runs on subscriber obligation.
Notes the author writes to stay current at the frontier survive the
author's own indifference — they would get written anyway, because the
author needs them. Audience becomes *upside*, not *obligation*. The
engine runs on fuel that does not depend on anyone subscribing. This is
the same reason the loop re-reads its own doctrine each cycle: the
artifact exists to keep a cold-context intelligence oriented, and the
author is the first and most reliable such intelligence.

**Third — the author genuinely contains both readers, which is why "for
me" does not narrow the audience.** The wide frontier-curious audience
splits into two reading postures, and the author holds both:

- The **operator** posture: "what do I reconfigure?" Served by the
  per-signal operator consequence — "audit managed settings before
  upgrading to 2.1.152," "route Codex CLI through `hermes proxy`."
- The **pattern-thinker** posture: "where is this heading?" Served by
  cross-provider synthesis — "three providers shipped default-on
  autonomy in the same fortnight; policy is moving into versioned
  files." This is the unit nobody else produces, because nobody else
  reads nine primaries a cycle through this filter.

Both postures already live in the product (Operator Brief vs. the
digest thesis; signal pages vs. section landing pages). The author is
representative of the wide audience *because the pattern-thinker half of
the author is that audience.* Building for the author therefore builds
for the audience — on the condition stated in the seam below.

**Fourth — schema discipline survives the reframe on a second
justification, not a weaker one.** Amendment 004 justified structured
fields as "the deliverable, because Bitter queries them." Under this
amendment that justification still holds (Bitter still queries), but it
is no longer the load-bearing one. The receipts, dates, and structured
consequence blocks are what make a *cold-context read* trustworthy: the
author six weeks later cannot re-derive why a claim was made from prose
alone; the structure is the proof the cold reader needs. Schema-first
doctrine is *strengthened*, not weakened — it now serves the primary
consumer directly rather than only the demoted one.

## The seam, and the rule that protects it

"For me" and "a wide audience who wants to understand what's possible"
pull apart in exactly one place, and the amendment must address it or it
will drift.

Most of the frontier-curious audience **cannot act the way an operator
acts.** They have no CI to break, no managed `settings.json` to migrate,
no enterprise permission file to re-audit. The operator-consequence rule
— "no frontier claim without an operator consequence" — was written for
an operator. Left unchecked, the ship-this-by-Friday operator half
dominates, because it is the half protected by a house rule and a QA
gate, while the pattern-thinker half is unprotected editorial craft.
That asymmetry is the drift mechanism: the enforced thing crowds out the
optional thing. The publication goes dense for people who want to know
*where this is heading*, not *what to reconfigure*.

The author contains both readers, so the claim holds — but only if the
pattern-half is *weighted*, not merely tolerated. This amendment
therefore makes one structural change beyond the consumer reordering:

**The accessibility axis is elevated from a required-when-relevant axis
to the structural bridge between the operator reader and the
pattern-thinker reader, and the cross-provider synthesis obligation is
named as a first-class editorial deliverable that QA protects — not
optional craft that yields under cadence pressure.**

Concretely (full wording deferred to the Applied To edits):

1. The cross-provider synthesis thesis is a required digest element, not
   an emergent one. A digest that lists per-provider operator
   consequences without naming the cross-provider pattern (or explicitly
   stating that no cross-provider pattern emerged this window) fails the
   editorial bar, the same way a missing receipt fails the evidence bar.
2. The accessibility axis ("what got easier, who can use the tool now")
   is the operator-to-pattern bridge: "who can use the tool now" is the
   question that serves the frontier-curious reader directly, independent
   of whether *they* will reconfigure anything. It is weighted
   accordingly in editorial judgment, not treated as Platform-lane
   polish.

The operator-consequence house rule is **not** repealed. A claim still
needs an operator consequence to be a signal. But "operator consequence"
is read to include "this changes what is possible / who is included at
the frontier," not only "this changes a config you maintain." The
pattern-thinker's question — *where is this heading* — is a legitimate
operator consequence at the level of the frontier, not just the install.

## What this changes in the charter

On ratification, the following `CHARTER.md` sections are revised (the
edits land in the ratification commit, not here):

- **Primary Consumer** — rewritten. Bitter Frontier is a structured
  research product *for the author as cold-context proxy for a wide
  frontier-curious audience*, with Bitter as a downstream consumer of the
  signal stream. The "structured-first when Bitter would query" default
  is preserved but re-grounded: structured-first because the cold-context
  reader needs the proof, *and* because Bitter queries it.
- **North Star / Primary Judge** — the two reader products (weekly
  digest, provider profile) stand. The Primary Judge gains an explicit
  second judge alongside the operator: the frontier-curious
  pattern-thinker who lands on a digest thesis or a section page and
  comes away understanding *where the frontier is heading*, not only what
  to reconfigure. Both judges are the author.
- **Public Posture / R&D Demonstration** — the "stands on its own to a
  stranger" requirement is re-grounded explicitly: the stranger is the
  author's own cold-context self, and that is *why* building for the
  author stays legible to everyone else. The contradiction these
  sections held against the old Primary Consumer section is removed.
- **Cross-Cutting Axes** — accessibility is named as the structural
  bridge between the operator reader and the pattern-thinker reader, and
  weighted as load-bearing rather than desirable-when-relevant. The
  cross-provider synthesis obligation is named.
- **House Rule** — unchanged in text. "Operator consequence" is
  clarified (in surrounding prose, not in the boxed rule) to include
  frontier-level consequence — what becomes possible or who becomes
  included — not only operator-config consequence.

## Relationship to amendment 004

This amendment **revises the "Bitter as the primary consumer" subsection
of amendment 004; it does not supersede amendment 004.** Amendment 004's
durable contributions — the three sections (Control Plane, Runtime,
Platform), the four cross-cutting axes, the `accessibility_consequence`
and `security_consequence` schema blocks, the tension doctrine — all
stand unchanged. Only the consumer *ordering* moves: Bitter from primary
to downstream, the author-as-frontier-proxy to primary.

Because the revision is to one subsection of a multi-topic amendment,
amendment 004 is **not** marked `superseded_by`. The historical record
of 004 stays intact; this amendment is the record of how the consumer
ordering changed after it. (Same pattern as amendment 008 refining 006's
`composes:` schema without superseding 006.)

The "schema fields are the deliverable, not editorial tax" claim from
004 is preserved and re-justified, not reversed — see Why, fourth
pressure.

## Residual — what this does not solve

The author's cold-context self is a **strong proxy for legibility** and
a **weak proxy for relevance.** It reliably catches "I did not preserve
enough context for a stranger to follow this" — that is exactly the
failure mode "read it cold" is built to surface. It cannot catch "this
is uninteresting or useless to someone unlike me," because the
six-weeks-later author shares all of the present author's blind spots,
priors, and taste. Choosing "for me" over "for an external audience"
buys treadmill-immunity at the cost of a relevance blind spot.

This residual is accepted, not closed. The only mechanism that closes it
is real external readership — which is named here as *upside*, not as a
dependency. If the publication is ever shipped on a public cadence, the
relevance proxy strengthens for free; until then, the loop should treat
"would this orient a frontier-curious reader who is not me" as a question
it cannot fully answer from inside, and should not mistake "legible to my
cold-context self" for "useful to the wide audience." Naming the limit is
the honest posture; pretending the proxy is total is not.

## Applied To (ratification work)

When this amendment is ratified:

1. Move this file from `charter/proposed/` to `charter/ratified/`.
2. Rewrite the `CHARTER.md` **Primary Consumer** section per "What this
   changes in the charter" above; revise **North Star / Primary Judge**,
   **Public Posture / R&D Demonstration**, and **Cross-Cutting Axes** to
   match; add the frontier-level reading of "operator consequence" in
   the prose around the **House Rule** (the boxed rule text stays).
3. Reference this amendment from the revised Primary Consumer section,
   the way the current section references amendments 004/005/006.
4. Update `RESEARCH_CONTRACT.md` to (a) name the cross-provider synthesis
   thesis as a required digest element with a QA check, and (b) weight
   the accessibility axis as the operator-to-pattern bridge in the
   editorial-voice and QA sections.
5. Update `AGENTS.md` Core Rule / Editing Rules prose so the autonomous
   loop reads "operator consequence" as including frontier-level
   consequence, and treats the cross-provider synthesis as a protected
   deliverable rather than optional craft.
6. No schema field changes. This amendment changes *who the artifacts are
   for* and *what the editorial bar protects*, not the object grammar.

## Rejection criteria

Reject this amendment if any of the following hold at ratification time:

- The reframe proves to be a relabel with no teeth — i.e., on review, no
  editorial or QA behavior would actually change, and the amendment is
  pure doctrine cosmetics. (If so, either add the teeth or drop it; a
  consumer-ordering change that changes nothing downstream is noise.)
- Elevating the cross-provider synthesis to a required, QA-gated element
  proves unsustainable under loop cadence — i.e., windows where no
  honest cross-provider pattern exists become a forcing function for
  manufactured theses. If the "or explicitly state no pattern emerged"
  escape hatch does not prevent invented synthesis, the requirement is
  wrong and should be softened to an editorial-bias rather than a gate.
- The "operator consequence includes frontier-level consequence" reading
  proves to be a loophole that readmits the hype and roadmap-speculation
  the house rules exist to keep out. If pattern-level consequence cannot
  be held to the same receipt discipline as config-level consequence,
  the broadening is unsafe and should be withdrawn.

## Out of scope

- This amendment does not commit Bitter Frontier to public distribution,
  a cadence, an audience-growth strategy, or a business model. External
  readership is named as upside; it is not adopted as an obligation here.
- This amendment does not wire a downstream Bitter/Factory consumer
  end-to-end. Whether and how Bitter ingests the signal stream is a
  separate decision; demoting Bitter to "downstream consumer" does not
  resolve, and does not depend on, that integration.
- This amendment does not change any schema field, section, axis, or
  consequence block. It is a consumer-and-editorial-bar amendment, not a
  grammar amendment.
- This amendment does not retroactively re-judge existing digests or
  profiles against the new editorial bar. The new requirements begin with
  the next cycle.

## Source

- Conversation, 2026-05-31 (michael-ruescher, claude-opus-4-8). A
  context-dump request for a shareable overview surfaced the unresolved
  question the steering docs left open — *who is Bitter Frontier for?* —
  and the operator resolved it: "it should be for me, and I should be
  representative of a wide audience of people who want to understand the
  frontier of what's possible with AI agents."
- Standing tension this amendment resolves: `CHARTER.md` Public Posture /
  R&D Demonstration ("stand on its own to a reader who has never heard of
  Bitter") against `CHARTER.md` Primary Consumer ("primary consumer is
  Bitter; secondary is the human reader"), as restated by
  `charter/ratified/amendment-004-establish-publication-sections.md`,
  "Bitter as the primary consumer."

## Revisions

- 2026-05-31: initial proposal.
- 2026-05-31: ratified. Absorbed into `CHARTER.md` (Primary Consumer
  rewritten; North Star, Primary Judge, Public Posture, R&D
  Demonstration, Cross-Cutting Axes, and Evidence Standard revised),
  `RESEARCH_CONTRACT.md` (cross-provider synthesis named as a required,
  QA-gated digest element; accessibility axis weighted as the
  operator-to-pattern bridge), and `AGENTS.md` (Core Rule two-altitude
  reading of operator consequence; Editing Rules synthesis obligation).
