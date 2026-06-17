# Bitter Frontier Charter

Last revised: 2026-06-02

## Mission

Bitter Frontier is the public research surface for Bitter's frontier-intake
loop. The repository is open source by design and is itself a worked
example of Bitter operating as an automated R&D environment driven by the
Bitter CLI.

The brief is concrete:

1. **Study the frontier** of agentic software harnesses. The current
   watchlist is Codex, Claude Code, Gemini CLI, Hermes Agent, Pi coding
   agent, OpenClaw, Paperclip, Agent Zero, and OpenHands. The canonical
   index lives in `sources/`.
2. **Build and maintain a profile per framework** — an evergreen
   per-provider register of current state and posture, refreshed by each
   research cycle.
3. **Publish weekly cross-provider digests** that turn what changed into
   what a serious reader should do or understand — the per-provider
   operator consequence and the cross-provider pattern.
4. **Demonstrate Bitter** as a first-class autonomous R&D environment by
   doing the above visibly: with source-backed findings, doctrine that
   evolves under pressure, council-reviewed prototypes, and audit notes
   that record what the loop learned.

## Public Posture

The published surface is not only the weekly digest. The repository's
diffs, run artifacts, council dossiers, source contracts, profiles, and
doctrine documents are part of the publication.

A reader who clones the repo should be able to understand what was studied
in a given window, what evidence was used, which claims are current versus
retired, and how the research loop produced the result.

Demonstrating the Bitter auto-research loop is part of the brief. Use of
the Bitter CLI (council, learn, methods, factory, log) should be visible
in run artifacts when it shaped the outcome.

The research has to stand on its own merits to a reader who has never
heard of Bitter. That reader is, in the first instance, the author's own
cold-context self returning to the repo without context; building for
that reader is what keeps the work legible to everyone else (see Primary
Consumer). If a digest or profile requires familiarity with Bitter to be
useful, the demonstration has failed.

## R&D Demonstration

Bitter Frontier operates as a long-horizon, mostly-autonomous Bitter
research function. That operation is itself part of what the repo
publishes.

The autonomous loop:

- Reads the doctrine before each iteration to re-orient from cold
  context.
- Runs partial cycles per provider (read profile, novelty pass,
  harvest, finding, signal, digest fragment, profile update).
- Records its own audit notes when a cycle surfaces doctrine gaps or
  rough edges.
- Uses `bitter council` to pressure-test prototypes when stakes
  warrant it, preserving the dossier alongside the cycle artifacts.
- Commits each iteration's work as a stand-alone unit, so the diff
  history is legible to a stranger reading the repo cold.

The loop may propose charter or research-contract edits in audit notes
or in `charter/` amendment drafts (see Amendments) when it surfaces a
question it cannot resolve. The loop must not self-commit changes to
`CHARTER.md` or `RESEARCH_CONTRACT.md`; durable doctrine changes are
reviewed and applied by a subsequent human-or-conversational pass. This
keeps the steering documents load-bearing rather than drift-prone.

The R&D demonstration succeeds when a reader — including the author's own
cold-context self, the publication's primary consumer — can examine the
repo and understand both *what* was found at the frontier and *how* the
loop operated to find it.

## North Star

Make the agentic software frontier legible enough that a serious reader —
operator or frontier-curious pattern-thinker — knows what changed, what
matters, what got easier, where the frontier is heading, what to do next,
and what Bitter should test or adapt.

There are two reader products:

- **The weekly digest**: cross-provider editorial synthesis for a given
  window. Answers "what changed this week, and what should I do?"
- **The provider profile**: per-provider evergreen register of current
  state and posture. Answers "what is this tool right now?"

The research trail is the collection of source-backed findings underneath
both. The internal product is a structured frontier signal stream that
Factory and Bitter can consume.

## Primary Consumer

The primary consumer of Bitter Frontier is **the author returning to the
repo with no context** — and, through the author, the wide audience of
people who want to understand the frontier of what is possible with AI
agents. The author is representative of that audience because the
pattern-thinking half of the author *is* that audience: the reader who
wants to know where the frontier is heading, not only what to
reconfigure.

This resolves a tension the charter carried for its first month. The
requirement that the work "stand on its own merits to a reader who has
never heard of Bitter" (see Public Posture) was always uneasy against an
earlier framing that named Bitter-the-machine as the primary consumer.
Amendment 009 collapses the two: the stranger who must be able to read
the repo cold is the author's own cold-context self. "Read it cold" and
"build it for me" are one discipline. Building for the author stays
legible to everyone else precisely because a future self arriving with no
context is the proxy for the stranger.

**Bitter is a downstream consumer, not the primary one.** Bitter still
consumes both the prose (for context and synthesis) and the structured
fields (`section`, `accessibility_consequence`, `security_consequence`,
`finding_id`, `signal.id`) to maintain situational awareness across the
harness watchlist. That consumption is real and the schema serves it —
but it no longer sets the publication's primary purpose.

Schema fields are still the deliverable, not editorial tax — now on a
stronger justification. Receipts, dates, and the structured consequence
blocks are what make a *cold-context read* trustworthy: the author six
weeks later cannot re-derive why a claim was made from prose alone, so
the structure is the proof the cold reader needs. Future schema decisions
default to **structured-first** when the cold-context reader needs the
proof, or when Bitter would query against the field.

The author contains two readers, and the publication serves both: the
**operator** ("what do I reconfigure?"), served by the per-signal
operator consequence; and the **pattern-thinker** ("where is this
heading?"), served by cross-provider synthesis. The operator half is
protected by the house rule and QA; the pattern half must be weighted
deliberately so it is not crowded out (see Cross-Cutting Axes). A known
limit, accepted not closed: the author's cold-context self is a strong
proxy for legibility and a weak proxy for relevance — it catches "I did
not preserve enough context," not "this is uninteresting to someone
unlike me." Only real external readership closes that gap; it is named as
upside, not adopted as an obligation.

See `charter/ratified/amendment-009-primary-consumer-author-as-frontier-proxy.md`
for the consumer reframe and the editorial-bar changes it carries. See
`charter/ratified/amendment-004-establish-publication-sections.md` for
the three sections, four axes, and consequence-block schema (its
consumer-ordering subsection is revised by amendment 009; the rest
stands). See
`charter/ratified/amendment-005-finding-signal-granularity.md` for the
finding-vs-signal granularity rule (findings are source-event-shaped;
signals are operator-consequence-shaped) and
`charter/ratified/amendment-006-composition-findings.md` for the
`composes:` field and the `sources/adjacent.yml` referent index.

## Editorial Sections

Weekly digests cover three durable editorial lanes, named using
industry-standard vocabulary that frontier labs and the most-adopted OSS
projects already use:

- **Control Plane** — provider changes that make agent labor governable
  as operating state: goals, roles, budgets, approvals, permission
  manifests, capability profiles, credential scopes, cost summaries,
  blockers, schedulers, triggers, sub-agent routing, kanban
  orchestration. Where authority over what an agent does and when lives.
- **Runtime** — the move from chat or tool calls into bounded
  execution: terminal, filesystem, browser, code execution, tool
  creation, sandboxing, persistence, cleanup. Where the agent actually
  operates.
- **Platform** — how agent harnesses become usable products and
  ecosystems for new operators: install paths, distribution, packages,
  plugins, skills, SDK/CLI/GUI shape, cloud and enterprise packaging,
  integrations. Where adoption decisions are made.

Every weekly digest covers all three sections. When a section had no
qualifying movement in the window, the section header appears with one
sentence naming the silence — the absence is itself editorial signal.

Signals carry a `section: control-plane | runtime | platform` field (or
`sections: [...]` array for cross-cutting theses). The full scope, the
routing rules for ambiguous signals (including Rule 5 on
platform-shaped-but-not-adoption signals), and the rejected candidates
are in `charter/ratified/amendment-004-establish-publication-sections.md`.

## Cross-Cutting Axes

Four axes are required on every signal but are **not** sections:

- **Authority** — *is this allowed?* Captured in prose on every signal
  and structurally in the `accessibility_consequence.authority_visibility`
  field.
- **Evidence** — every signal traces to a primary-source receipt. The
  publication's house rule.
- **Accessibility** — *what got easier, who can use the tool now, did
  authority stay visible?* Structured as the `accessibility_consequence`
  block on every signal with `accessibility_impact ≥ low`. Accessibility
  is also the **structural bridge** between the publication's two readers
  (see Primary Consumer): "who can use the tool now" serves the
  frontier-curious pattern-thinker directly, independent of whether they
  will reconfigure anything. It is weighted as load-bearing, not as
  Platform-lane polish (per amendment 009).
- **Security** — *is this enforceable, regardless of policy?*
  Structured as the `security_consequence` block on every signal with
  `security_impact ≥ low`, including a `cost_to_operator` bridge field
  that names what the security change broke for existing operators.

These axes are deliberately in tension with each other. The publication
takes a doctrinal stance: authority and security visibility are
non-negotiable; accessibility and usability are desirable; when they
conflict, the structured fields surface the tradeoff for the reader to
decide. The publication does not pick a winner per signal.

One editorial obligation follows from the two-reader identity and is
protected at the same bar as the evidence rule: **every weekly digest
must name the cross-provider pattern** — the synthesis thesis that no
single provider's release shows on its own ("three providers shipped
default-on autonomy in one fortnight; policy is moving into versioned
files") — or explicitly state that no honest cross-provider pattern
emerged in the window. This is the unit the pattern-thinker reads for,
and the unit nobody else produces. A digest that lists per-provider
operator consequences without the synthesis fails the editorial bar (per
amendment 009). The QA detail lives in `RESEARCH_CONTRACT.md`.

## Owned Primitive

Bitter Frontier owns the frontier research artifact chain:

```text
source material
-> finding
-> signal
-> digest
-> profile (refreshed)
-> run artifact
```

Definitions:

- **Finding**: source-backed observation of what changed.
- **Signal**: accepted finding that can change an action.
- **Digest**: weekly editorial synthesis for humans across providers.
- **Profile**: evergreen per-provider register of current state and posture,
  refreshed after each digest. Experimental as of 2026-05-11.
- **Backstage note**: internal product-intake companion to a public digest.
- **Run artifact**: reproducible proof of how the machine generated findings,
  signals, digests, and profile updates.

## Truth Owned

Bitter Frontier owns source-attributed claims about frontier changes and their
implications — operator-facing at the config altitude, and frontier-level
(what becomes possible, who becomes included) for the pattern-thinking reader.

It may say:

```text
this source changed in this window
this change appears material for operators
this change shifts what is possible, or who is included, at the frontier
this finding became a signal because it can change an action
this digest is the editorial synthesis supported by these findings
```

## Truth Not Owned

Bitter Frontier does not own:

- Factory allocation decisions
- Bitter adapter implementation
- BitterBench benchmark truth
- BitterLearn memory or WakePackets
- provider roadmap truth beyond cited public evidence
- product-local implementation authority
- uncited claims about model or agent superiority

It cites primary sources and preserves uncertainty.

## Primary Judge

Bitter Frontier works on three judgment surfaces:

1. **A serious operator would actually read the weekly digest** and come
   away with a clearer sense of what changed in the agentic software
   frontier, which changes matter, who can realistically use the tool
   now, whether the change affects Control Plane, Runtime, or Platform,
   what to try, ignore, or watch, what remains uncertain, and what
   Bitter should test or adapt.
2. **A serious operator would land on a provider profile** and come away
   oriented: what is this tool right now, what authority surfaces it
   exposes, what current-state claims are backed by what evidence, and
   what is still open.
3. **A frontier-curious reader would land on a digest thesis or a
   section page** and come away understanding *where the frontier is
   heading* — the cross-provider pattern ("three providers shipped
   default-on autonomy in one fortnight"), not only what to reconfigure.
   This reader cannot necessarily act like an operator, and the
   publication must still orient them. The author is all three readers.

Factory is a secondary judge: accepted signals should be structured enough
to inform operating context, product intake, eval design, adapter work,
capability-profile assumptions, charter updates, or run-contract decisions.

Neither the public digest nor the profile should require the reader to
understand Bitter's internal ontology. Bitter and Factory implications
belong in backstage notes unless they also clarify the public operator
consequence.

## Hill-Climb

Turn frontier movement into operator judgment, frontier legibility for the
pattern-thinking reader, and Bitter product intake.

Future work should improve source coverage, recall of important changes,
editorial usefulness, cross-provider synthesis quality, accessibility
judgment, citation discipline, actionability, prompt/model comparability,
and the ability to backtest the research machine against known historical
windows.

## Search and Research Biases

Agents working on Bitter Frontier should prefer research paths that:

- start from primary changelogs, release notes, commits, docs, or observed
  behavior
- distinguish routine noise from changes that affect operator behavior
- ask who a change makes the tool usable for, and what complexity moved out of
  the way
- route changes into the canonical sections (Control Plane / Runtime /
  Platform) using the routing rules in amendment 004
- surface the cross-provider pattern across the window, not only
  per-provider changes (the synthesis is a protected deliverable; see
  Cross-Cutting Axes)
- preserve dates, source URLs, commit ranges, and uncertainty
- separate findings from accepted signals
- identify whether a change affects adapters, evals, capability profiles,
  run contracts, charters, costs, reliability, or operator workflow
- compare generated output against a manual gold week before expanding scope
- improve recall and editorial usefulness separately

Agents should avoid:

- generic AI commentary
- uncited claims
- hype-driven rankings
- forcing every finding into Factory relevance
- treating every finding as a signal
- treating daily findings as a public obligation before the weekly digest is
  worth reading
- building app infrastructure before the research compiler proves itself

## Authority

Bitter Frontier may:

- harvest configured public source surfaces
- preserve raw source snapshots and receipts
- generate candidate findings
- promote accepted findings into signals
- synthesize weekly digests
- emit structured artifacts that Factory can consume
- compare prompt, model, and editorial runs over the same source window

Bitter Frontier must not:

- claim allocation authority
- change Bitter adapters directly
- write Factory posture directly
- treat uncited inference as evidence
- become a generic benchmark lab or AI news site

## Evidence Standard

A serious Bitter Frontier run should leave:

- source window
- source contracts used
- raw source receipts or source references
- prompts and models used
- candidate findings
- accepted signals
- weekly digest
- backstage note
- QA notes
- unsupported or uncertain claims
- comparison notes when multiple runs are evaluated

No frontier claim without an operator consequence. No operator consequence
without a receipt. No signal unless it can change the next action.

"Operator consequence" is read at two altitudes (per amendment 009): the
**config** altitude — what an operator reconfigures, upgrades, or audits
— and the **frontier** altitude — what becomes possible, or who becomes
included, at the frontier. The frontier altitude is a legitimate operator
consequence for the pattern-thinking reader; it is held to the same
receipt discipline as the config altitude, so the broadening does not
readmit hype or uncited roadmap speculation.

No capability signal is complete until it names what got easier, who can use
the tool now, and whether authority stayed visible. These are captured in
prose on every signal and structurally in the `accessibility_consequence`
block when `accessibility_impact ≥ low`.

No security-relevant signal is complete until it names the threat blocked or
opened, the attacker model, whether enforcement is policy or runtime, and
what the change cost existing operators. These are captured in the
`security_consequence` block when `security_impact ≥ low`.

## Refusal Lines

Bitter Frontier is not:

- generic AI news
- a hype feed
- a model fandom ranking site
- BitterBench
- Factory's allocation engine
- BitterLearn memory
- a replacement for primary source changelogs
- a dynamic app before the file-backed research loop proves itself
- a Bitter product brochure

## Compounding Role

Bitter Frontier keeps its primary consumer — the author, as proxy for a
wide frontier-curious audience — oriented to the changing frontier, and
keeps Bitter, a downstream consumer, awake to it.

It turns external capability movement into structured research artifacts that
a serious reader can act on or learn from, and that Bitter can metabolize into
adapter updates, evals, charter changes, run-contract changes,
capability-profile assumptions, and Factory signals. The compounding is first
in the reader's own judgment — sharper build and allocation calls because they
are wired to a curated frontier — and second in Bitter's product intake.

## Amendments

Charter changes are recorded as numbered amendments in `charter/`. Each
amendment moves through a directory-as-state lifecycle:

- `charter/proposed/` — drafts awaiting review
- `charter/ratified/` — applied to this charter, permanent record
- `charter/rejected/` — declined, kept as record of what was considered

`CHARTER.md` at the repository root is always the binding current state;
ratified amendments are the historical record of how it got there.
Numbering is global and sequential (`amendment-NNN-<slug>.md`).
Ratification and absorption happen in the same commit: moving a file
from `proposed/ → ratified/` is accompanied by the `CHARTER.md` edits
that absorb it. The autonomous loop may write to `charter/proposed/`
but must not self-commit state transitions or edit `CHARTER.md`
directly. See `charter/README.md` for the full convention.
