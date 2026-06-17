---
schema_version: bitter.frontier_charter_amendment.v0
amendment_id: 005
title: "Finding granularity vs. signal granularity (closes amendment-004 latent routing conflict)"
status: ratified
proposed: 2026-05-27
ratified: 2026-05-27
rejected: null
applied_in_commit: 7cb3ce5
proposed_by: autonomous-loop (claude-opus-4-7, 2026-05-27 weekly digest run audit note doctrine question #1; revised after four-reviewer Claude pressure-test 2026-05-27 and Codex xhigh consult 2026-05-27)
supersedes: []
superseded_by: null
---

# Amendment 005: Findings May Be Source-Event-Shaped; Signals Must Be Operator-Consequence-Shaped

## Summary

**Finding shape is unchanged.** A finding remains a source-backed
observation of what changed, as `RESEARCH_CONTRACT.md` defines it.
Findings can describe a release, a coordinated commit cluster, or a
single PR — whatever the source event is.

**Signal granularity tightens.** Signals must be operator-consequence-shaped.
One *consequence* per signal, where a consequence is one operator-action
*verb* directed at one operator *persona class*. A composite finding
(one source event, multiple distinct consequences) produces N signals
via the existing `finding_ids: [...]` multiplicity; each signal carries
its own section, accessibility/security consequence blocks, and
`why_action_bearing`.

This amendment exists primarily because composite signals **already
violate amendment-004 doctrine by construction**, and the violations
silently corrupt the schema. The 2026-05-27 Hermes Foundation Release
signal is the canonical demonstration (see §Why, §Hermes worked
example).

## Why

Three pressures, one ratification target.

**First — composite signals carrying multiple distinct operator
consequences violate amendment-004 Rule 5 by construction.** Amendment 004
routes signals to exactly one of `control-plane | runtime | platform`
(or, rarely, multiple sections via the `sections:` array — and only when
the operator consequence in each is distinct enough to warrant the dual
tag). The constraint applies to *consequence multiplicity*, not bullet
count: a signal with multiple bullets describing one consequence
(e.g. a security advisory with several sub-fixes that all gate on
"upgrade past version X") routes cleanly to one section. A signal
bundling multiple *distinct* consequences each with a different
operator audience, action, and section does not.

The current Hermes v0.14.0 signal carries `section: platform` but its
four `why_action_bearing` bullets are four distinct consequences that
route under Rule 5 to:

- Distribution (PyPI, Windows beta) → **Platform** (adoption surface).
- Provider routing (`hermes proxy` credential router) → **Control
  Plane** (authority/credential routing per Rule 5's "evaluation /
  governance / authority" carve-out).
- Identity mapping (Honcho cache signatures, credential pool
  isolation) → **Control Plane** (authority isolation, cross-user
  contamination prevention).
- Kanban corruption hardening → **Runtime** (persistence primitive
  reliability).

A composite whose consequences span multiple sections but pretends to
be one section is misrouted by construction. Amendment 005 closes this
latent violation **for the multi-consequence case**. Single-consequence
composites (advisory or suite-shaped — see §Security advisory exemption)
do not violate Rule 5 and remain valid. The audit note that triggered
this amendment
(`runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/audit.md`,
doctrine question #1) named the awkward shape but did not name this
specific conflict; the four-reviewer pressure-test surfaced it.

**Second — composite signals make `security_change` incoherent.**
Amendment 004 declares `security_change: closes | opens | reframes`
as a single-enum field. The current Hermes signal reads
`security_change: closes` but its `threat_blocked_or_opened` field
lists both closes (cross-user contamination, credential bleed on
fallback) and opens ("Opens a local-loopback HTTP attack surface via
`hermes proxy` if the default bind is not loopback-only"). The
single-enum cannot honestly represent the composite. This is the
second hidden conflict with amendment-004's schema that the audit note
did not surface.

**Third — operator query promise.** Per amendment-004, Bitter Frontier
is a structured data product for Bitter (the meta-harness consumer)
with editorial polish secondary. The publication's queryability
promise is "show me all control-plane signals with
`security_advisory: true` in this window." Composite signals break the
query: the Hermes proxy bullet (`security_advisory: true` in spirit)
is buried inside a `section: platform` signal. Bitter cannot query for
it.

## The rule

```text
Findings: source-event-shaped. A finding captures one source event
(a release, a commit cluster, a single PR) and may enumerate multiple
distinct operator consequences in its body. Finding shape does not
change.

Signals: operator-consequence-shaped. One signal per distinct
operator consequence, where a consequence is one operator-action verb
directed at one operator persona class. A signal whose
why_action_bearing list contains multiple verbs across multiple
personas is two signals.

Reference: a signal points to one or more findings via finding_ids.
A finding may be referenced by zero, one, or many signals. The
integrity checker validates the reference graph already.
```

### The decomposition test

The earlier draft proposed `why_action_bearing > 3 items → consider
splitting`. The pressure-test data (13 finding/signal pairs reviewed)
showed this heuristic has roughly 50% precision and a ~30%
false-negative rate. It fires arbitrarily on signals where one
consequence is seen from multiple operator angles (e.g., a
configuration change that needs review by both admins and skill
authors — same verb, multiple personas, one consequence) and misses
signals where multiple genuine consequences are condensed into
three-or-fewer bullets.

The governing standard is **decision shape**: a signal carries one
operator decision. A decision is the question "should I do X, and if
so, what?" — answered by one verb against one operator class with one
verification path.

The operational test is **verb × persona multiplicity**:

```text
A signal should split if its why_action_bearing items describe:

  more than one operator-action verb (re-audit, upgrade, migrate,
  enable, configure, test, ...) AND

  more than one operator persona class (admin, developer, skill
  author, multi-tenant SaaS operator, ...)

OR if the same persona class has two different verbs that require
different section assignments, different security_change values, or
different verification work.

Multiple bullets describing the SAME verb for the SAME persona class,
with the SAME section and security shape, stay as one signal — that
is one decision seen from multiple angles or with multiple example
actions. Multiple verbs across multiple personas, or a single persona
with verbs that route to different sections / security_change values
/ verification work, split — that is multiple decisions.
```

Bullet count remains useful as a *smell test*: if a signal has more
than three bullets, check it for verb/persona multiplicity and
verification multiplicity. But count alone is not the rule.

### Concrete pattern

For a composite source event:

- **One finding** named after the source event (e.g.
  `2026-05-27-hermes-v0.14.0-foundation-release`). The finding body
  enumerates the distinct vectors with evidence URLs.
- **N signals** named after the distinct operator consequences,
  using a shared prefix from the finding ID and a distinct suffix
  per consequence: `<finding-id-prefix>-<consequence-slug>`. Each
  signal carries its own `section`, `accessibility_consequence`,
  `security_consequence`, and `why_action_bearing`, and each lists
  the same composite finding in `finding_ids: [...]`.

### Other granularity patterns remain valid

- **1-finding → 1-signal** stays correct when the source event
  contains a single distinct operator consequence (most CLI minor
  releases, most release-note entries covering one feature).
- **1-finding → 0-signals** is permitted: a refresh-the-claim or
  accumulation finding that updates `last_verified` on existing
  profile claims without rising to signal level (the
  `2026-05-27-claude-code-background-and-agent-view-hardening`
  candidate from the latest harvest is this shape — captured as
  "accumulation rather than category shift" and not promoted). The
  integrity checker does not warn on orphan findings; editorial
  judgment handles it.
- **N-findings → 1-signal** is also valid: cross-finding synthesis
  where multiple source events combine into one operator
  consequence. (Not yet used in the corpus; the pattern is
  permitted by the existing `finding_ids: [...]` plural field.)

### Security advisory exemption

A signal carrying `security_advisory: true` may bundle multiple sub-fixes
under one consequence when the **advisory frame is the consequence**
("upgrade past this version before deployment"). The
`claude-code-powershell-and-worktree-sandbox-fixes` signal is the
canonical example: three separate fixes (PowerShell `cd..`, worktree
allowlist over-scope, login pinning), one operator decision (upgrade).
Splitting it would produce three separate "upgrade past 2.1.149"
signals that say the same thing.

The decomposition test reads the advisory exemption naturally: the
verb (`upgrade`) and persona (`Windows operator with PowerShell
allowlists or worktree workflows`) are singular; only the underlying
fixes are multiple. The signal is one consequence.

## Field ownership: finding vs. signals it produces

Under 1-to-N decomposition, the finding and the signals it produces
divide the schema fields explicitly:

**Finding owns**:

- `finding_id`, `source`, `source_contract`, `window`, `versions_covered`,
  `status` (`accepted_signal` or `accepted` per existing convention),
  `confidence`, `evidence: [...]` (the source URLs).
- Narrative body enumerating the vectors. The body should mention
  each vector by name and link to the relevant evidence URL.
- The cross-cutting scalars (`operator_relevance`, `bitter_relevance`,
  `factory_relevance`, `actionability`) reflect the finding overall —
  the highest-weighted vector wins.

**Each signal owns**:

- `section` (and `sections:` if a single signal still cross-cuts,
  though decomposition usually eliminates this).
- `accessibility_impact` + `accessibility_consequence` block —
  per-consequence, not aggregate.
- `security_impact` + `security_change` + `security_consequence`
  block — per-consequence; the enum is honest because there is one
  consequence.
- `security_advisory: true` if the consequence is upgrade-driven.
- `why_action_bearing` — operator-facing imperatives for this
  consequence's verb + persona.
- `finding_ids: [<the composite finding id>]`.

Signals do not redeclare `evidence` — the evidence array lives on
the finding. The finding's URL list serves all derived signals.

## Applied To (ratification work)

When this amendment is ratified:

1. Move this file from `charter/proposed/` to `charter/ratified/`.
2. Update `RESEARCH_CONTRACT.md` "Finding" section to explicitly state
   that findings are source-event-shaped and may enumerate multiple
   consequences in their body.
3. Update `RESEARCH_CONTRACT.md` "Signal" section to state "one
   operator consequence, one signal" and define the
   decomposition test (verb × persona multiplicity, count as smell
   test).
4. Update `RESEARCH_CONTRACT.md` to add the ownership partition
   above ("Field ownership: finding vs. signals it produces").
5. No schema changes — `finding_ids: [...]` multiplicity is already
   present.
6. Apply the **Hermes retroactive decomposition** in the same
   ratification commit (worked example below).
7. Other current-run signals (e.g., the 2026-05-12
   `claude-code-agent-view-goal-and-governance` signal carrying 5
   bullets across 5 personas) get **audit-note flags** as candidates
   for the next editorial pass, **not** in-ratification rewrites.
   Limiting retroactive scope to Hermes keeps the ratification commit
   a mechanical apply rather than a sweep.

### Hermes retroactive decomposition (worked at ratification time)

The composite signal
`2026-05-27-hermes-v0.14.0-foundation-release` is replaced by four
signals, all referencing the same unchanged finding. The
specifications below name the **key fields** that distinguish each
signal; the **full schema applies at ratification** — each signal also
carries the required `accessibility_consequence` block (when
`accessibility_impact ≥ low`) and `security_consequence` block (when
`security_impact ≥ low`) per amendment-004's schema, drawn from the
finding's body prose and the four-reviewer dossiers.

**Signal 1: `2026-05-27-hermes-pypi-and-windows-beta-distribution`**
- `section: platform`
- `accessibility_impact: high` (with full `accessibility_consequence`
  block)
- `security_impact: low` (with full `security_consequence` block —
  supply-chain advisory checker is the closes; lazy install reframes
  the install posture)
- `security_change: reframes`
- `security_advisory:` omitted
- `why_action_bearing`: "Builders who bounced off the prior
  clone-and-shell installer should re-evaluate Hermes — `pip install`
  and Windows beta materially lower the floor."
- `finding_ids: [2026-05-27-hermes-v0.14.0-foundation-release]`

**Signal 2: `2026-05-27-hermes-proxy-credential-router`**
- `section: control-plane` (Rule 5: authority/credential routing
  surface is control-plane, not platform)
- `accessibility_impact: medium` (full block)
- `security_impact: medium` (full block — opens local-loopback HTTP
  attack surface if default bind is not loopback-only)
- `security_change: opens`
- `security_advisory:` **omitted**. The proxy consequence is
  "verify configuration before exposing," not "upgrade before
  deployment." Per the current advisory definition
  (`RESEARCH_CONTRACT.md:135–137`), `security_advisory: true` is
  reserved for upgrade-blocking changes. The proxy is operator-verify,
  not upgrade-gate. Future broadening of the advisory definition is
  out of scope for this amendment.
- `why_action_bearing`: "Operators routing through `hermes proxy`
  should confirm bind address and auth model before exposing it;
  default-loopback-only is the safe assumption to verify, not assume."
- `finding_ids: [2026-05-27-hermes-v0.14.0-foundation-release]`

**Signal 3: `2026-05-27-hermes-honcho-identity-and-credential-isolation`**
- `section: control-plane`
- `accessibility_impact: low` (full block)
- `security_impact: medium` (full block — closes cross-user
  contamination on shared threads; closes credential bleed on
  provider fallback)
- `security_change: closes`
- `security_advisory: true` (operators must upgrade past the
  2026-05-21+ Honcho commits and the 2026-05-27 credential-pool
  isolation commit before running multi-user gateway deployments)
- `why_action_bearing`: "Multi-user gateway operators should upgrade
  past the Honcho commits (week of 2026-05-21) and the credential-pool
  isolation commit (2026-05-27)."
- `finding_ids: [2026-05-27-hermes-v0.14.0-foundation-release]`

**Signal 4: `2026-05-27-hermes-kanban-corruption-hardening`**
- `section: runtime`
- `accessibility_impact: none` (no block)
- `security_impact: low` (full block — closes torn-write corruption
  vector and WAL downgrade vector)
- `security_change: closes`
- `security_advisory:` omitted (the consequence is "treat as
  integrity-floor baseline," not "upgrade before deploy")
- `why_action_bearing`: "Kanban-dependent multi-agent operators
  should treat the post-v0.14.0 line as the integrity-floor baseline;
  the corruption-hardening volume is the signal."
- `finding_ids: [2026-05-27-hermes-v0.14.0-foundation-release]`

**Downstream effects of the decomposition**:

- The published digest `content/digests/2026-05-13_2026-05-27-weekly.md`
  has the composite signal in `top_signal_ids` and in the operator
  brief inline links. The ratification commit must update those to
  list the per-consequence signals (probably keeping signals 1, 2, 3
  in `top_signal_ids` and demoting signal 4 to provider notes, since
  including all four in top tier would crowd the brief).
- The published digest's operator-brief inline `/signals/<id>/` links
  for Hermes need to be split across the four new signal IDs.
- The Hermes profile's `claims:` block (the 2026-05-27 refresh)
  references `2026-05-27-hermes-v0.14.0-foundation-release` as the
  finding for several claims. The finding ID is unchanged; profile
  claims need no edits.
- The integrity checker continues to pass; the schema does not
  change.

## Ordering with amendment-006

Amendment 006 proposes a `composes: [...]` field on findings (and, in
its revised text, no longer on signals — `composes:` is finding-only
with a derived union at the signal layer). Per-vector composition
benefits from amendment-005's signal decomposition because each
consequence-shaped signal can be queried independently with the
finding's composes context. **Ratification ordering preference: 005
before 006.** If both ratify together, the Hermes finding gets
`composes: [...]` and each of its four derived signals inherits the
union at render time.

## Rejection criteria

This amendment should be rejected if any of the following are true at
ratification time:

- The 1-to-N pattern produces noise in the publication (signal pages
  fragment information that operators would prefer to read in one
  place). If the retroactive Hermes decomposition makes the digest
  harder to scan, not easier, the rule is wrong. Empirically: read
  the decomposed Hermes signals as a stranger reading them cold; if
  it's worse than the composite, reject.
- The verb × persona multiplicity test produces arbitrary splits in
  practice more often than meaningful ones, **measured** in the next
  two cycles' retroactive audits. The pressure-test data already
  ruled out the bullet-count heuristic; the verb/persona test must
  itself prove out.
- Cross-signal navigation (an operator landing on
  `hermes-pypi-and-windows-beta-distribution` and wanting to see the
  related `hermes-proxy-credential-router`) becomes the dominant
  operator pattern. If so, the right move is *grouped* signal pages,
  not separate ones — this amendment should be re-proposed with
  grouping semantics.

## Out of scope

- This amendment does not propose schema changes. The existing
  `finding_ids: [...]` multiplicity is sufficient.
- This amendment does not change how findings are written. The
  finding shape stays source-event-shaped; the change is at signal
  promotion time.
- This amendment does not propose digest-level grouping of related
  signals. If grouping becomes important, that is a separate
  amendment.
- This amendment does not introduce a "supersedes" or "replaces"
  field for old composite signals that get decomposed. Decomposition
  is a one-shot ratification event; the old composite signal's ID
  ceases to exist after ratification.

## Source

- Audit note for the 2026-05-27 weekly digest run
  (`runs/2026-05-27-weekly-digest-2026-05-13_2026-05-27-frontier-v0/audit.md`),
  doctrine question #1.
- The composite finding/signal pair
  `2026-05-27-hermes-v0.14.0-foundation-release` is the canonical
  example and the basis for the retroactive worked example.
- Four-reviewer pressure-test pass on 2026-05-27:
  - `research/council-dossiers/2026-05-27-amendment-005-doctrinal-fit.md` — surfaced the Rule 5 conflict and `security_change` incoherence as the strongest doctrinal arguments for the amendment; recommended `ratify-with-revisions` with seven specific changes.
  - `research/council-dossiers/2026-05-27-amendment-005-edge-cases.md` — applied the proposed rule mechanically to 13 finding/signal pairs in the corpus; demonstrated the bullet-count heuristic's ~50% precision and ~30% false-negative rate; proposed the verb × persona multiplicity test as the replacement. Recommended `ratify-with-revisions` with seven specific changes.

## Revisions

- 2026-05-27: initial proposal (bullet-count heuristic, composite
  Hermes signal as motivating example, no field-ownership partition).
- 2026-05-27: pressure-test revision — reframed summary
  (finding shape unchanged; signal granularity tightens); promoted
  Rule 5 conflict and `security_change` enum incoherence to the lead
  arguments in §Why; replaced bullet-count heuristic with verb ×
  persona multiplicity test; added Field ownership section; added
  security advisory exemption; added explicit "1-finding → 0-signals"
  and "N-findings → 1-signal" notes; spelled out the Hermes
  retroactive decomposition with full per-signal frontmatter shapes;
  narrowed retroactive scope to Hermes only (others get audit-note
  flags); added ordering preference vs. amendment-006.
- 2026-05-27: Codex xhigh consult revision (see
  `research/council-dossiers/2026-05-27-amendments-005-006-codex-xhigh.md`).
  Softened lead claim from "composite signals violate Rule 5 by
  construction" to "composite signals carrying multiple distinct
  operator consequences violate Rule 5 by construction" — preserves
  the single-consequence-composite case the security advisory
  exemption already permits. Added decision-shape as the governing
  doctrinal standard with verb × persona as the operational test, and
  added a same-persona-different-verification-work clause. Rephrased
  the Hermes retroactive section to "key fields, full schema applied
  at ratification" since `security_impact ≥ low` requires the full
  `security_consequence` block per `RESEARCH_CONTRACT.md:101–113`.
  Removed `security_advisory: true` from the proxy signal — the
  proxy consequence is "verify before exposing," not "upgrade before
  deploy"; per the current advisory definition the flag does not
  fit.
