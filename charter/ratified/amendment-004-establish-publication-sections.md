---
schema_version: bitter.frontier_charter_amendment.v0
amendment_id: 004
title: "Establish three canonical publication sections and the cross-cutting tension schema"
status: ratified
proposed: 2026-05-13
ratified: 2026-05-13
rejected: null
applied_in_commit: cb6f17d
proposed_by: conversation (michael-ruescher, claude-opus-4-7, council research, codex pressure-test)
supersedes: []
superseded_by: null
---

# Amendment 004: Three Sections, Cross-Cutting Axes, and Bitter as the Primary Consumer

## Summary

Bitter Frontier becomes a sectioned publication with three durable
editorial lanes — **Control Plane**, **Runtime**, and **Platform** —
grounded in the industry-standard vocabulary that frontier labs and the
most-adopted OSS projects already use. Each weekly digest covers all
three sections (or names a silent section and why). Signals carry a
`section` field tying them to one of the three lanes.

Four cross-cutting axes are formally named — **authority**, **evidence**,
**accessibility**, **security** — none of which are sections. Two get
structured schema treatment because they capture tradeoffs that Bitter,
the publication's primary consumer, needs to query: every signal with
non-trivial accessibility impact carries an `accessibility_consequence`
block, and every signal with non-trivial security impact carries a
`security_consequence` block. Both blocks include a bridge field naming
the cost to the *other* axis, so the security-vs-accessibility tension
is structurally visible from both directions instead of one.

The amendment also restates Bitter Frontier's identity. The publication
is a structured data product for Bitter (the meta-harness above all
watched harnesses), with editorial polish as the human-readable surface.
Schema fields are not editorial tax; they are the deliverable.

## Why

Three pressures, one ratification.

**First**, reader navigation drifted toward provider-first (Profiles row,
filter-by-source on `/signals/`) and time-first (recent signals,
chronological digests). A concern-first navigation path — "I care about
permission models across all providers" — has no surface. Prior loop work
tagged signals with four invented track labels (authority, long-horizon,
verification, workshell) as a stopgap; the tags rendered as chips but
didn't navigate, and the names came from eyeballing the data rather than
from doctrine or industry usage.

**Second**, a deep-research council (gpt-5.5 high reasoning, doctrine
read-only) explicitly rejected the four-track labels and named three
sections drawn from existing doctrine: Control Plane, Workcell, and
Platform. A pressure-test council then renamed *Platform* to *Platform
Adoption* with Rule 5 to prevent the section becoming a catch-all. An
accessibility-axis council added the `accessibility_consequence` schema
block so the scalar `accessibility_impact` field stopped letting
accessibility silently collapse into the broad Platform lane.

A final industry-vocabulary pass replaced *Workcell* with *Runtime* and
dropped the *Adoption* suffix from Platform. Workcell is a Bitter-internal
term (from `BITTER_ATLAS_BRIEF.md`); no frontier lab or major OSS project
uses it. OpenHands uses "runtime" explicitly. Codex, Claude Code, Hermes,
Agent Zero, and Paperclip all use sub-concepts (sandbox, session,
container, execution targets) that resolve to Runtime as the unifying
industry term. Platform stands on its own because Rule 5 already routes
evaluation/governance to Control Plane and sandbox/runtime to Runtime —
the Adoption suffix was self-imposed disambiguation that didn't match how
OpenHands and Hermes describe themselves ("agent platform").

**Third**, the publication's identity needed restating. Bitter Frontier
exists because Bitter is a meta-harness wrapping every harness on the
watchlist (Claude Code, Codex, Gemini CLI, OpenHands, Hermes Agent, Agent
Zero, Flue, OpenClaw, Paperclip, Pi Coding Agent). Bitter's value to its
customers is deep situational awareness of what each harness is becoming.
The publication is Bitter's perception apparatus, made externally legible
for the operators Bitter wants to convince. The primary consumer is
Bitter; the secondary consumer is the human reader. This reordering
matters: schema fields stop looking like editorial tax and start looking
like the actual deliverable.

## The three sections

### 1. Control Plane

**Scope:** Control Plane covers provider changes that make agent labor
governable as operating state: goals, roles, budgets, approvals,
permission manifests, capability profiles, credential scopes, cost
summaries, blockers, schedulers, triggers, sub-agent routing, kanban
orchestration, and the surfaces that let the agent *decide when to act
on its own*.

**Industry usage:** Paperclip's stance band literally calls itself a
"control plane." Kubernetes, service meshes, and agent orchestration
platforms all use the term. Claude Code uses "policy" and "permissions";
Codex uses "approval-mode" and "permission profiles"; Gemini CLI uses
"workspace trust." The unifying industry term is *control plane*.

**Doctrine anchors:**
- Bitter Frontier `CHARTER.md:187` names "coordination/control-plane
  changes" as a distinct facet.
- Bitter Frontier `RESEARCH_CONTRACT.md:529` defines the facet
  "Coordination And Economic Control" and asks whether agent labor can
  be represented as "goals, roles, budgets, accountability, and approval
  state."
- Factory `CHARTER.md:7` grounds the section as the "deterministic
  coordination layer."

**Opening framing:**
> Agent labor becomes operational only when the surface shows who asked
> for it, what it may touch, what it costs, and what receipt it owes.

**Why durable:** As agents get more capable, operators will still need
to know who authorized the work, what it could touch, what it cost,
what blocked it, and what receipt it left. This section also owns the
proactivity question — when the agent decides to act on its own (goals,
schedulers, triggers, remote control) is a coordination receipt the
operator needs to see.

### 2. Runtime

**Scope:** Runtime covers the move from chat or tool calls into bounded
execution: terminal, filesystem, browser, code execution, tool creation,
sandboxing, persistence, cleanup, runtime bundles, leases, session
harvest, and the environment the agent actually operates inside.

**Industry usage:** OpenHands uses "runtime" explicitly ("OpenHands
runtime"). Codex talks about "sandbox" and "session." Claude Code talks
about "session" and "worktree." Hermes uses "terminal backends" and
"session." Agent Zero uses "container" and "Xpra session." Paperclip uses
"sandbox providers" and "execution targets." The unifying industry term
is *runtime*; sandbox and session are sub-concepts within it.

**Doctrine anchors:**
- Bitter Frontier `RESEARCH_CONTRACT.md:544` defines "Workcell Autonomy"
  and asks what changes when an agent gets "terminal, filesystem,
  browser, code execution, and tool creation inside a real environment."
- Factory `docs/atlas/BITTER_ATLAS_BRIEF.md:204` defines a workcell as a
  "leased, auditable, resumable, repo-real environment" and locates
  BitterGrid as the "runtime and workcell truth plane."

The Bitter-internal term remains *workcell*; the publication renders it
as *Runtime* for industry-standard reader-legibility.

**Opening framing:**
> The frontier gets serious when an agent leaves the prompt and enters a
> computer that someone has to bound, inspect, and clean up.

**Why durable:** Future providers will keep gaining more real-computer
access; the permanent question is whether that access is bounded,
inspectable, reversible, and useful.

### 3. Platform

**Scope:** Platform covers how agent harnesses become usable products
and ecosystems for new operators: install paths, distribution, packages,
plugins, skills, SDK/CLI/GUI shape, cloud and enterprise packaging,
integrations, and the surfaces that decide who can pick the tool up at
all. This section is the adoption and distribution lane, **not** a
catch-all for everything platform-shaped. Evaluation, governance
defaults, authority visibility, and sandbox policy belong to Control
Plane or Runtime; see Rule 5 in routing.

**Industry usage:** OpenHands calls itself an "agent platform." Hermes
calls itself a "personal agent platform." Anthropic, OpenAI, and Google
all use SDK/CLI/GUI/cloud/enterprise as distribution surfaces. The
unifying industry term is *platform*.

**Doctrine anchors:**
- Bitter Frontier `RESEARCH_CONTRACT.md:558` defines "Productized Agent
  Platform" and asks how a serious harness packages "SDK, CLI, GUI,
  cloud, enterprise, integrations, sandboxing, collaboration, and
  evaluation" while preserving "evidence and authority." The
  *productization* aspect is what this section owns; the *preserving
  evidence and authority* aspect is what Rule 5 routes elsewhere.
- Bitter Frontier `RESEARCH_CONTRACT.md:489` makes accessibility
  non-optional: "Accessibility is not polish." Most accessibility
  stories land here because adoption surface is the dominant
  accessibility lever; the accessibility axis remains required on every
  signal regardless of section.

**Opening framing:**
> A coding agent becomes market infrastructure when its install path,
> plugins, UI, cloud surface, and defaults decide who can actually use
> it.

**Why durable:** Every important harness eventually becomes a
distribution, integration, and adoption problem, not just a capability
demo.

## Routing rules for ambiguous signals

These rules are how signals that could plausibly fit more than one
section are dispatched. They make routing reproducible — both editor and
Bitter should arrive at the same section for the same signal.

1. **Package and registry events** (scope migrations, dependency
   refactors, npm or PyPI changes) → **Platform** by default.

2. **Supply-chain quarantines** (e.g., a registry quarantine that forces
   a provider response) → **Control Plane** when the operator consequence
   is about trust, credentials, permissions, or authority; **Runtime**
   when the consequence is about the runtime environment itself.

3. **Accessibility consequences** are *not* a section. They are a
   required axis on every capability signal regardless of section. Most
   accessibility stories happen to land in Platform (because adoption
   surface is the dominant accessibility lever), but Runtime and Control
   Plane must also answer accessibility when the signal warrants.

4. **Cross-cutting theses** (signals that are genuinely about all three
   sections at once) may carry a `sections: [...]` array. The dual-track
   case is allowed but should be rare. If more than 20% of signals carry
   multiple sections, the routing rules are too vague.

5. **Platform-shaped, but not adoption.** When a signal is about a
   harness's evaluation surface, governance defaults, authority
   visibility, or sandbox policy — even if it ships as part of a
   platform release — route to **Control Plane** (for evaluation,
   governance, authority) or **Runtime** (for sandbox policy and runtime
   execution). Examples: a critic evaluation GUI is platform-shaped but
   its operator consequence is *how the platform evaluates work* →
   Control Plane. A sub-agent sandbox grouping UI is platform-shaped but
   its consequence is *what runtime boundaries the agent gets* →
   Runtime. Platform is reserved for changes that decide who can adopt
   the tool, not how the tool governs work after adoption.

6. **Proactivity is Control Plane.** Signals about the agent deciding
   when to act on its own — goals, schedulers, triggers, supervisor
   surfaces, remote control, sub-agent routing — route to Control Plane
   because *who decides when work happens* is an operating-state
   question. Persistence that makes proactivity possible (background
   sessions surviving terminal close, persistent desktops) is Runtime
   when the runtime fact is the operator consequence.

## The four cross-cutting axes

These are *not* sections. They are required axes that every signal must
answer when relevant. They are also the dimensions along which signals
trade off against each other.

### Authority

The doctrinal requirement that every capability signal must answer "did
authority stay visible?" `CHARTER.md:243`. Authority is *policy*: what
the agent is *allowed* to do, who authorized that, what receipt that
authorization left. Authority is captured in prose on every signal and
explicitly in the `accessibility_consequence.authority_visibility`
sub-field below.

Rejected as a section name because (a) every signal must answer
authority, and (b) Control Plane already covers authority-structural
signals. Naming Authority as a section would conflate the cross-cutting
axis with the structural lane.

### Evidence

The doctrinal requirement that every signal traces to a primary-source
receipt. Captured in `evidence[]` arrays on findings, in the Receipts
block on signal pages, in inline source links throughout. Rejected as a
section name because it is the publication's house rule — proof grammar,
not editorial structure.

### Accessibility

The doctrinal requirement that every capability signal must answer "what
got easier, who can use the tool now, and whether authority stayed
visible" `CHARTER.md:246`. `RESEARCH_CONTRACT.md:489`: *"Accessibility is
not polish."* Rejected as a section because it is a required axis;
collapsing it into one lane would let the other two lanes treat
accessibility as someone else's problem.

Structured schema: every signal with `accessibility_impact` above `none`
carries an `accessibility_consequence` block (see Schema below).

### Security

The fourth cross-cutting axis, ratified by this amendment alongside the
three above. Security is *enforceability*: what the agent (or an attacker
controlling the agent) is *able to do regardless of policy*. Authority
asks "is this allowed?"; security asks "is this enforceable?"

Security ratifies as an axis rather than a section because, like the
others, every signal must answer it when relevant. Most security content
distributes naturally across the three sections:

- **Control Plane** carries the *policy* side: per-sender tool policies
  (OpenClaw), default-on secret redaction (Hermes v0.13.0), Discord role
  allowlists with the CVSS 8.1 cross-guild bypass closed, API-key
  cloud-surface boundary (Claude Code), permission profiles (Codex), MCP
  OAuth TOCTOU fixes.
- **Runtime** carries the *enforceability* side: sandbox boundaries,
  container isolation, the Paperclip SSH host-env isolation fix (host
  env was being forwarded to remote SSH targets — runtime escape), KVM
  sandbox acceleration, scoped compaction.
- **Platform** carries the *supply chain* side: the Hermes mistralai
  PyPI quarantine response, Pi's Earendil package scope migration,
  OpenClaw's `skills.install.allowUploadedArchives` gate awaiting a
  documented signing and sandbox-isolation model.

Structured schema: every signal with `security_impact` above `none`
carries a `security_consequence` block (see Schema below).

## The tension doctrine

Security, accessibility, and usability are not independently optimizable.
Most security wins have an accessibility or usability cost; most
accessibility wins have a security cost. Aligned wins (Codex permissions
in status line; per-sender tool policies) are the exception, not the
rule.

The publication's stance on the tension, drawn from the existing
doctrine and now explicit:

> Authority/security visibility is non-negotiable. Accessibility and
> usability are desirable. When they conflict, the structured fields
> surface the tradeoff for the reader to decide; the publication does
> not pick a winner per signal.

To make the tradeoff structurally visible from both directions, each
consequence block includes a bridge field naming the cost to the *other*
axis:

- `accessibility_consequence.authority_visibility` — the bridge field
  from accessibility to security. Already in the schema from amendment
  004's accessibility-axis revision.
- `security_consequence.cost_to_operator` — the new bridge field from
  security to accessibility/usability. Every security improvement names
  what it broke for existing operators; every security regression names
  who has to act.

A signal that improves accessibility while opening security is now
structurally flagged in two places: its `accessibility_consequence`
block names how authority visibility changed, and its
`security_consequence` block names what was opened. A signal that
improves security while breaking workflows is flagged the same way
inverted. Bitter and human readers can both filter for tension cases
and read both fields together to see the full tradeoff.

## Schema

Two new fields are introduced on the `bitter.frontier_signals.v0`
schema. Both are required when the corresponding scalar is above `none`.

### Section field

```yaml
section: control-plane | runtime | platform
# or, for genuine cross-cutting theses:
sections:
  - control-plane
  - platform
```

`section` (singular) is the default; `sections` (plural) is used only
when the signal covers more than one lane and the operator consequence
in each is distinct enough to warrant the dual tag.

The existing `tracks: [...]` field, populated as part of prior loop
work, becomes obsolete on ratification. Each signal's `tracks` is
remapped to `section` via the table below, then `tracks` is removed.
No grace period.

### Accessibility consequence block

When `accessibility_impact ≥ low`:

```yaml
accessibility_impact: low | medium | high
accessibility_consequence:
  what_got_easier: "The concrete operator action that was friction before and is friction-reduced after — concrete enough to test."
  who_can_use_now: "The operator class that gained access, named in operator terms (not marketing personas)."
  authority_visibility: "Whether authority, credentials, evidence, or risk stayed visible. If anything became less visible, downgrade the impact rather than hide the loss."
```

When `accessibility_impact: none`, the block is omitted. Otherwise
required. A signal missing the block at impact ≥ `low` fails QA.

### Security consequence block

When `security_impact ≥ low`:

```yaml
security_impact: low | medium | high | critical
security_change: closes | opens | reframes
security_consequence:
  threat_blocked_or_opened: "What attack or abuse pattern this change addresses, or what new exposure it creates."
  attacker_model: "Which class of actor this matters against — operator, end user, third-party network, supply chain."
  enforcement: "policy | runtime | both — what level the change operates at."
  cost_to_operator: "What got harder, who can no longer do what they used to, what now requires explicit action. The bridge field naming the accessibility/usability cost."
  residual: "What's still exposed, unenforced, or undocumented after the change."
```

When `security_impact: none`, the block is omitted; otherwise required.
The `security_change` field is omitted only when `security_impact: none`.
A signal missing the block at impact ≥ `low` fails QA.

`security_advisory: true` may be added when an operator must upgrade
before the change is safe to deploy; this is the structured flag for the
recurring "Security Advisories" digest sub-section.

### Other schema fields

Profile, finding, and digest schemas do not change beyond the
`not_promoted[]` and `operator_brief` fields established in prior loop
work. Sections live on signals; profile and digest editorial reference
sections in prose.

## Bitter as the primary consumer

This amendment formally restates the publication's identity.

Bitter Frontier is a **structured data product for Bitter** — the
meta-harness above the ten watched harnesses — with editorial polish as
the human-readable surface. The primary consumer is Bitter; the
secondary consumer is the human reader (operators, platform engineers,
security teams who Bitter wants to reach).

Practical implications:

1. **Schema fields are the deliverable, not editorial tax.** Adding
   `accessibility_consequence` and `security_consequence` blocks is
   complete coverage for Bitter to query against, not bureaucracy for
   editors. An explicit "none" is part of the answer; absence is not.

2. **Bitter consumes both prose and structured data.** The publication
   may use industry-standard schema slugs (`control-plane`, `runtime`,
   `platform`, `security_change: closes`) and human-readable prose
   ("this closes a host-env leak that forwarded credentials to remote
   SSH targets") in parallel. They serve different consumers.

3. **The publication's voice optimizes for both consumers.** Schema
   labels are technical and stable. Editorial labels and prose are
   field-notes voice for senior operators. The two register together is
   the publication's distinctive identity.

4. **External operators read because Bitter reads.** Bitter Frontier's
   credibility with operators is derivative of its depth of harness
   awareness, which is in turn derivative of the structured discipline
   the publication enforces on every signal. Schema and prose reinforce
   each other; neither can be cut without weakening both consumers.

5. **Future amendments default to structured-first.** Decisions about
   whether to add new schema fields default toward adding them when
   Bitter would query against them. The previous frame — "schema is
   editorial tax, prose is the product" — is reversed by this amendment.

## Editorial commitment

Every weekly digest covers all three sections. If a section had no
qualifying movement in the window, the section header appears in the
body with one sentence naming the silence — for example, "No qualifying
Runtime movement this cycle: no provider shipped an execution-environment
change above the release_note floor." The silence is itself editorial
signal; readers learn that the publication would tell them if a section
stalled.

This commitment does not extend retroactively. The May 6, May 7, and
May 12 digests stay as historical artifacts. Section-organized body
prose begins with the next digest cycle.

## Site changes (post-ratification, applied in implementation passes)

These are implementation work that follows ratification. The amendment
*authorizes* them; the implementation is shipped in follow-up commits.

1. **Signal cards** render the section as a labelled chip linking to
   `/sections/<slug>/`. Replaces the prior track chip.

2. **Section landing pages** at `/sections/control-plane/`,
   `/sections/runtime/`, `/sections/platform/`. Each page carries:
   - The one-sentence opening framing.
   - A short paragraph of section scope and what's in / out.
   - Month-grouped signals tagged to the section.
   - (Deferred: a "Stance summary" paragraph maintained editorially after
     2+ cycles of section-organized digests.)

3. **Digest body** uses `## Control Plane`, `## Runtime`, `## Platform`
   as fixed top-level sections, with the thesis paragraph (the leader)
   above them and the Operator Brief, Top Signals, Security Advisories
   (when present), What We Didn't Promote, and Source Trail in the
   established order.

4. **Operator Brief stays action-organized** (try / upgrade / watch /
   uncertain). Sections do not leak into the brief.

5. **Security Advisories** appears in digests as a conditional
   sub-section whenever any signal in the digest's window carries
   `security_advisory: true`. Generated from the signals; not curated.
   Naming signals that operators must act on before next deployment.

6. **`/llms.txt`** adds a "Sections" subsection naming the three section
   pages and their opening framings, and a "Cross-cutting axes"
   subsection naming the four axes (authority, evidence, accessibility,
   security).

7. **Sitemap** adds the three section pages.

## Applied To (ratification work)

When this amendment is ratified (i.e., moved to `charter/ratified/`),
the following edits happen in the same commit:

1. Move this file from `charter/proposed/` to `charter/ratified/`.
2. Update `CHARTER.md` to name the three sections, the four cross-cutting
   axes, the Bitter-as-primary-consumer framing, and reference this
   amendment.
3. Update `RESEARCH_CONTRACT.md` to make `section` a required field on
   accepted signals, name the `accessibility_consequence` and
   `security_consequence` blocks as required at impact ≥ low, and
   integrate the cross-cutting-axes language.
4. Apply the `tracks` → `section` remapping below to all currently
   tagged signal YAMLs. Remove the `tracks:` field after.

### Tracks → section remap (applied at ratification)

The current four tracks map to three sections as follows. The mapping is
intentionally lossy: `verification` collapses into either Control Plane
(when the verification is policy-shaped — e.g., the Kanban hallucination
gate before state transition) or Runtime (when the verification is about
runtime artifacts — e.g., scoped compaction preserving session refs).
`long-horizon` covers content that lives in both Control Plane (goal
primitives as governance state) and Runtime (persistent desktops).

| Current track    | Default section | Override conditions                                                                   |
|------------------|-----------------|---------------------------------------------------------------------------------------|
| authority        | control-plane   | If the signal is purely a runtime sandbox change with no policy surface → runtime.    |
| long-horizon     | control-plane   | If the signal is specifically real-computer persistence (Xpra desktop, terminal sessions, browser tabs) → runtime. |
| verification     | control-plane   | If the verification is about a runtime artifact (compaction scope, session preservation) → runtime. |
| workshell        | runtime         | If the signal is about harness packaging that affects adoption (CLI/SDK shape, package distribution) → platform. Evaluation/governance/authority-visibility → control-plane regardless. |

A manual editorial pass at ratification time confirms each signal's
section, using the routing rules above as the default. The pass is
documented in the run audit notes for the ratification cycle.

## Implications

Documents and surfaces that update as a downstream consequence of
ratification:

- **`AGENTS.md`** references the three sections when describing signal
  acceptance, and the editor's commitment to cover all three sections
  every cycle.
- **`RESEARCH_CONTRACT.md`** updated per Applied To above.
- **Source contracts** do not change. They describe what they watch in
  their own terms; section assignment is a publication decision.
- **Existing profile bodies** do not change. Profile prose continues to
  be organized by operator decision (Operator Read → Run It Differently
  → ...); sections do not impose structure on profile prose. Profiles
  may *mention* sections where editorially useful.
- **The two older digests** (2026-04-22, 2026-04-23) stay unchanged.
  Section-organized body prose begins with the next cycle.
- **The Bitter-as-primary-consumer framing** is added to `CHARTER.md`
  near the existing publication-identity language; future schema
  amendments default to structured-first per the Bitter consumption
  framing.

## Out Of Scope

- This amendment does not propose a fourth section. The constraint of
  three is the editorial decision; if a fourth lane emerges from six-month
  review evidence, that will be a future amendment.
- This amendment does not retroactively restructure older digests.
- This amendment does not add per-section RSS feeds or subscription
  paths. Those are optional follow-ons.
- This amendment does not propose structured `authority_visibility` or
  `evidence_provenance` schemas as top-level signal fields. They remain
  required prose obligations and partial sub-fields. Future amendments
  may revisit if Bitter consumption needs structure there too.

## Rejection criteria

This amendment should be rejected if any of the following are true at
ratification time:

- The section names do not resonate as durable in editorial review
  ("Runtime" specifically should be pressure-tested — it's the most
  technical of the three).
- The routing rules leave more than 15% of current signals genuinely
  ambiguous between sections.
- The editorial commitment to cover all three sections every cycle is
  not sustainable under current loop cadence.
- A fourth lane (supply chain, accessibility, distribution) emerges as
  load-bearing through usage. In that case this amendment should be
  rejected and re-proposed with four sections.

## Source

Four councils informed this amendment:

1. **Deep-research council** (2026-05-13, doctrine read-only, three
   reviewer chain claude/codex/gemini → synthesis). Proposed the three
   sections, the rejected candidates (Authority, Evidence, Accessibility
   as sections), the routing rules, and the doctrine vocabulary.

2. **Pressure-test council** (2026-05-13, same chain). Asked: which
   section is weakest, which will split in six months, smallest wording
   change that prevents the split. Named Platform as the catch-all risk;
   recommended renaming to Platform Adoption + Rule 5. Both adopted.
   Dossier at `research/codex-goal-output/council-01-sections-taxonomy.md`.

3. **Accessibility-axis council** (2026-05-13, same chain). Asked:
   with three sections, does accessibility silently collapse into the
   adoption lane? Confirmed the doctrinal triad is strong enough to
   defend cross-cutting status; added the `accessibility_consequence`
   block to force the triad on every relevant signal. Dossier at
   `research/codex-goal-output/council-03-accessibility-axis.md`.

4. **Industry-vocabulary pass** (2026-05-13, conversation). Pushed back
   on the doctrinal-but-internal "Workcell" and the qualifier-laden
   "Platform Adoption." Surveyed actual frontier-lab and OSS-project
   usage (Paperclip uses "control plane"; OpenHands uses "runtime";
   OpenHands/Hermes use "platform"). Renamed to industry-standard
   trio: Control Plane / Runtime / Platform.

The cross-cutting tension treatment (security_consequence with
cost_to_operator bridge) emerged from the same conversation after
recognizing that the existing accessibility_consequence captured only
one direction of the tension (accessibility → security cost) but not
the other (security → accessibility cost). The symmetric schema makes
both directions visible in every signal that touches either axis.

## Revisions

- 2026-05-13: initial proposal with three sections (Control Plane,
  Workcell, Platform Adoption) and accessibility_consequence schema.
- 2026-05-13: Platform → Platform Adoption per pressure-test council;
  Rule 5 added.
- 2026-05-13: accessibility_consequence schema added per accessibility-
  axis council.
- 2026-05-13: industry-standard naming pass — Workcell → Runtime,
  Platform Adoption → Platform.
- 2026-05-13: security as fourth cross-cutting axis, security_consequence
  schema with cost_to_operator bridge field added. Bitter-as-primary-
  consumer framing restated. Tension doctrine formalized.
- 2026-05-13: ratified.
