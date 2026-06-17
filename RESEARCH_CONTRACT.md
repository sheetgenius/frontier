# Bitter Frontier Research Contract

Last revised: 2026-05-13

## Purpose

This document defines the v0 operational grammar for the Bitter Frontier
research machine.

It is not the website implementation. It is the contract that lets humans and
agents produce comparable research runs.

## House Rule

```text
No frontier claim without an operator consequence.
No operator consequence without a receipt.
No signal unless it can change the next action.
```

No capability signal is complete until it names its accessibility consequence:
what got easier, who can use the tool now, and whether authority stayed
visible.

No security-relevant signal is complete until it names its security
consequence: the threat blocked or opened, the attacker model, whether the
change operates at policy or runtime, and what the change cost existing
operators. Authority asks *is this allowed?*; security asks *is this
enforceable?* They are paired but distinct.

## Sections and Cross-Cutting Axes

Per `charter/ratified/amendment-004`, accepted signals carry a `section`
field placing them in one of three durable editorial lanes:

- `control-plane` — operating-state changes (goals, permissions, schedules,
  approvals, budgets, routing). Authority structure.
- `runtime` — execution environment (sandbox, session, terminal, browser,
  persistence). Where the agent actually runs.
- `platform` — adoption and distribution (install paths, SDKs, plugins,
  packaging). How the tool reaches operators.

Routing rules for ambiguous signals, including Rule 5 (platform-shaped
changes whose operator consequence is evaluation/governance/authority go
to control-plane; sandbox/runtime go to runtime), are in amendment 004.

Four axes are required on every signal but are *not* sections: authority,
evidence, accessibility, security. The two structured ones are below.

## Durable Objects

### Finding

A finding is a source-backed observation of what changed.

A finding is **source-event-shaped**: it captures one source event,
which may itself be a release, a coordinated commit cluster, a single
PR, or any other concrete source object. A release-shaped finding may
enumerate multiple distinct operator consequences in its body — but
the consequences live in the signals the finding produces, not in the
finding's identity. (Per amendment 005.)

Not every finding is important. Not every finding becomes a signal.
Some findings refresh existing claims without producing a signal; that
is permitted.

Required fields:

- id
- date observed
- source
- source URL, release, commit, changelog entry, doc, or observed behavior
- window covered
- what changed
- change type
- accessibility impact: `none`, `low`, `medium`, or `high`
- operator implication
- confidence
- receipts

Optional fields:

- Bitter implication
- Factory relevance: `none`, `low`, `medium`, or `high`
- Factory implication
- uncertainty
- candidate actions
- `composes: [<source_id>, ...]` — array of other source ids
  (watchlist or adjacent) whose operator surface this finding
  materially touches. Per amendment 006; each entry resolves against
  `sources/index.yml` ∪ `sources/adjacent.yml` per the integrity
  checker.

### Signal

A signal is an accepted finding that can change an action.

A signal is **operator-consequence-shaped**: one signal carries one
operator decision. A decision is the question "should I do X, and if
so, what?" — answered by one verb against one operator class with one
verification path. A composite finding (one source event with multiple
distinct consequences) produces N signals via the existing
`finding_ids: [...]` multiplicity; each signal carries its own
section, accessibility/security consequence blocks, and
`why_action_bearing`. (Per amendment 005.)

The decomposition test: a signal should split if its
`why_action_bearing` items describe **more than one operator-action
verb** AND **more than one operator persona class**; or if the same
persona has different verbs that require different sections,
different `security_change` values, or different verification work.
Bullet count is a smell test, not the rule. Single-consequence
composites — security advisories with multiple sub-fixes that all
gate on "upgrade past X," suite-shaped changes with one operator
audience — stay as one signal because their *consequence* is
singular.

A finding may become a signal only if it plausibly changes at least one of:

- operator behavior
- Bitter adapter assumptions
- eval coverage
- capability-profile assumptions
- run-contract design
- charter or doctrine
- Factory allocation or operating context
- cost, reliability, or security posture
- accessibility, distribution, or market legibility

Signals should be rarer than findings. A finding may produce zero,
one, or many signals; a signal may reference one or many findings.

Factory relevance may be `none`. Do not force every signal into an allocation
story.

#### Field ownership: finding vs. signals it produces

Under 1-to-N decomposition (one finding produces multiple signals),
the finding and the signals partition the schema fields:

**Finding owns**: `finding_id`, `source`, `source_contract`, `window`,
`versions_covered`, `status`, `confidence`, `evidence: [...]`,
`composes: [...]`, the narrative body, and the cross-cutting scalars
(`operator_relevance`, `bitter_relevance`, `factory_relevance`,
`actionability`) reflecting the finding overall.

**Each signal owns**: `section` (and `sections:` for genuine
cross-cutting, though decomposition usually eliminates this);
`accessibility_impact` and `accessibility_consequence` block —
per-consequence; `security_impact`, `security_change`, and
`security_consequence` block — per-consequence; `security_advisory:
true` if the consequence is upgrade-driven (see definition below);
`why_action_bearing`; `finding_ids: [<the composite finding id>]`.

Signals do not redeclare `evidence` — the array lives on the finding.
Signals do not redeclare `composes:` — the signal-level composition
is computed as the derived union of its referenced findings' arrays
at render time. (Per amendment 006.)

#### Required signal fields

Beyond the basic identity (`id`, `title`, `source`, `finding_ids`,
`why_action_bearing`), every accepted signal must carry:

- `section: control-plane | runtime | platform` — section routing
  per amendment 004.
- `accessibility_impact: none | low | medium | high` — scalar.
- `accessibility_consequence` — block required when impact ≥ low.
- `security_impact: none | low | medium | high | critical` — scalar.
- `security_change: closes | opens | reframes` — required when
  security_impact ≥ low; omitted when impact is none.
- `security_consequence` — block required when impact ≥ low.

#### accessibility_consequence

```yaml
accessibility_consequence:
  what_got_easier: "The concrete operator action that was friction before and is friction-reduced after."
  who_can_use_now: "The operator class that gained access, named in operator terms."
  authority_visibility: "Whether authority, credentials, evidence, or risk stayed visible. If anything became less visible, downgrade the impact rather than hide the loss."
```

#### security_consequence

```yaml
security_consequence:
  threat_blocked_or_opened: "What attack or abuse pattern this change addresses or creates."
  attacker_model: "Which class of actor — operator, end user, third-party network, supply chain."
  enforcement: "policy | runtime | both"
  cost_to_operator: "What got harder, who can no longer do what they used to, what now requires explicit action. The bridge field naming the accessibility/usability cost."
  residual: "What's still exposed, unenforced, or undocumented after the change."
```

Optionally `security_advisory: true` for signals where operators must
upgrade before deployment is safe — this drives the conditional Security
Advisories digest sub-section. The advisory frame is reserved for
upgrade-blocking changes; signals whose consequence is "verify
configuration before exposing" or "audit pre-existing data" use the
`security_consequence` block without the advisory flag.

#### The cross-axis tension

The `authority_visibility` field on accessibility and the
`cost_to_operator` field on security are bridge fields: every
accessibility win names what it cost to authority/security visibility,
and every security win names what it cost to operator accessibility or
usability. Reading both blocks together exposes the tradeoff. The
publication does not pick a winner; it surfaces the tension for Bitter
and human readers to decide per-deployment.

The schema is *deliberately symmetric* so a tension case (accessibility
gain + security regression, or security gain + accessibility regression)
shows up structurally in both directions instead of one.

### Digest

A digest is editorial synthesis for humans.

The weekly digest is the primary reader product. It should be useful to a
serious builder who has no relationship to Bitter. It should answer:

```text
So what?
```

It should cite supporting findings in the flow of the prose and distinguish
strong conclusions from uncertainty.

The digest should not make Bitter the protagonist. Bitter may appear as the
publisher or as a quiet link to backstage notes, but the public article should
primarily explain what changed, why it matters, what builders should try, what
they should be cautious about, and what remains uncertain.

Every digest should answer at least one accessibility question:

```text
Who can realistically use this now?
What complexity moved out of the way?
Did the tool become more humane, or only more powerful?
```

Required cross-provider synthesis (per amendment 009):

Every weekly digest must name the **cross-provider pattern** — the thesis
that no single provider's release shows on its own, e.g. "three providers
shipped default-on autonomy in the same fortnight; policy is moving into
versioned files." This is the unit the frontier-curious reader reads for,
and the unit nobody else produces, because nobody else reads the full
watchlist through this filter each cycle. It is a first-class digest
deliverable, protected at the same bar as the evidence and accessibility
obligations — not optional craft that yields under cadence pressure.

When no honest cross-provider pattern emerged in the window, the digest
states that explicitly ("No cross-provider pattern this window: the
movement was provider-local") rather than manufacturing a thesis. The
escape hatch is mandatory so the requirement never becomes a forcing
function for invented synthesis. QA checks for the synthesis thesis (or
the explicit no-pattern statement) the way it checks for receipts.

### Backstage Note

A backstage note is internal product intake for Bitter and Factory.

It is separate from the public digest. The digest teaches builders. The
backstage note records what Bitter should learn from the same research.

Backstage notes may include:

- what Bitter should test next
- adapter implications
- BitterGrid, BitterPass, Bitter CLI, BitterLearn, or Factory implications
- charter or doctrine implications
- research quality notes
- run caveats
- prompt/model quality notes
- receipt paths and run artifact references

The public digest may link to the backstage note quietly. Do not require public
readers to sit inside the Bitter product-intake loop before they get value.

### Profile

A profile is an evergreen per-provider register of current state and
posture. It is the public landing page for "what is this tool right now."

Required frontmatter fields:

- profile_id
- label
- owner
- source_contract (path to the per-provider source contract)
- homepage
- surface_class: one of `open_source_commits`,
  `closed_source_release_notes`, `mixed_official_docs`, or
  `proprietary_observed_behavior`
- evidence_floor: minimum acceptable precision for the *primary* citation
  supporting any claim listed in the profile. One of
  `commit_diff_reviewed`, `commit`, `release_note`, `official_docs`, or
  `observed_behavior`. `commit` denotes a commit URL whose diff has not
  been individually reviewed; it ranks between `commit_diff_reviewed`
  (a commit URL whose diff has been reviewed for the specific claim) and
  `release_note` (a release or changelog entry). Lower-precision
  citations may appear as supporting context but cannot stand alone as
  the only evidence for a profile claim. Profiles with
  `surface_class: mixed_official_docs` typically set
  `evidence_floor: release_note`; profiles with
  `surface_class: open_source_commits` typically set `commit_diff_reviewed`.
  The floor should match the strictest precision the source can be
  reasonably harvested at, not a fixed value.
- status: `active_watch`, `dormant`, or `retired`
- last_updated
- last_full_review
- claims: a list of per-claim entries, each with `id`, `finding_id`,
  `last_verified`, and `status` (`active`, `stale`, `retired`, or
  `open_question`)
- posture_basis: per-lens list of finding IDs the current posture rests on

Prose rules:

- Every concrete claim in the prose must carry an inline source link on
  the claim-bearing phrase (per Citation Doctrine) and be present in the
  `claims:` frontmatter block.
- Posture sections may use interpretive prose without per-clause receipts.
  Any clause naming a specific feature, a behavior change, a comparison
  with another provider, or a quantitative comparison must cite a finding
  ID.
- Cross-provider editorial belongs in the weekly digest, not the profile.
- The profile may reference the source contract for open discovery
  questions, research lenses, and surface metadata. It must not duplicate
  those fields.
- Finding-ID citations in posture sections take the form of an italic
  attribution line at the end of each lens:
  `*Findings: <finding-id>, <finding-id>.*`. Per-clause inline finding
  citations are discouraged; let the `posture_basis` frontmatter carry
  the per-lens index.

Hygiene:

- Profiles are edited freely. Git history is the audit trail; no separate
  "stale claims" section is required. Removed claims live in `git log`.
- A claim is marked `stale` when its `last_verified` is older than two
  harvest cycles and no refreshing finding has landed.
- A claim is marked `retired` when the underlying behavior is no longer
  present.
- A claim is marked `open_question` when the profile asserts the absence
  of a feature based on the absence of supporting findings.
- A finding refreshes an existing claim only when it targets the same
  surface, behavior, and operator-visible mechanism. A claim covering an
  adjacent or expanded surface should be added as a new claim, even when
  the source contract groups them under the same high-signal pattern.
- For claims with `status: open_question`, `last_verified` updates when a
  harvest cycle completes that would plausibly have produced a resolving
  finding, even if no such finding was produced. The semantic is "we
  looked and the answer is still unknown."

Canonical ownership:

- Source contract owns where to look, what counts as evidence, and the
  rejected-evidence list.
- Finding owns what changed in a dated window, with receipts.
- Signal owns why a finding can change an action.
- Profile owns what is currently true for one provider.
- Digest owns weekly cross-provider editorial synthesis.
- Backstage note owns Bitter and Factory intake.
- Run artifact owns reproducible proof.

Status: Profile is **experimental** as of 2026-05-11. Doctrine may evolve
before broad rollout. While doctrine remains experimental, maintain a
small number of exemplars rather than a full sweep, and document the
doctrine evolution via the amendment convention in `charter/`.

### Run Artifact

A run artifact is reproducible proof of how the machine generated findings,
signals, digests, and profile updates.

It should include:

- run manifest
- source window
- source contracts
- raw source receipts or references
- prompts
- models
- generated findings
- accepted signals
- generated digest
- QA notes
- audit notes

## Source Contracts

Every watched source needs a small source contract before automation depends
on it.

Source contracts should define:

- canonical project name
- primary source surfaces
- acceptable evidence
- rejected evidence
- changelog or release cadence
- change types to track
- ambiguity handling
- expected blind spots
- known noise patterns

Initial source contracts:

- Codex
- Claude Code
- Gemini CLI
- Hermes Agent
- Pi coding agent
- OpenClaw
- Paperclip
- Agent Zero
- OpenHands

The v0 source contracts live in `sources/`, with `sources/index.yml` as the
harvest entrypoint and `schemas/source-contract.schema.json` as the schema
target. The `.yml` files are machine contracts. The `.notes.md` files are
human/editorial guidance.

## Source Contract Template

```yaml
schema_version: bitter.frontier_source_contract.v0
id: hermes-agent
label: Hermes Agent
owner: Nous Research
homepage: https://hermes-agent.nousresearch.com/docs
primary_surfaces:
  - id: repo
    kind: github_repo
    url: https://github.com/NousResearch/hermes-agent
    priority: 1
    watch:
      - releases
      - tags
      - commits
      - pull_requests
      - docs
      - examples
accepted_evidence:
  - official_changelog
  - official_docs
  - github_release
  - tagged_release
  - maintainer_commit
  - merged_pr
  - maintainer_authored_post
  - reproducible_local_probe
rejected_evidence:
  - unsourced_social_claim
  - third_party_summary_without_primary_link
  - speculation
  - stale_model_memory
  - benchmark_claim_without_method
  - duplicate_commentary
change_types:
  - capability
  - workflow
  - runtime
  - protocol
  - reliability
  - economics
  - security
  - ecosystem
  - evaluation
  - philosophy
  - accessibility
research_lenses:
  - capability
  - governance
  - accessibility
  - coordination_control_plane
  - workcell_autonomy
  - productized_agent_platform
high_signal_patterns:
  - memory
  - skills
  - subagent
  - sandbox
  - permission
  - credential
  - browser
  - terminal
  - resume
  - tool call
  - MCP
operator_questions:
  - Does this change how an operator should run or trust the tool?
  - Does this affect long-horizon autonomous work?
  - Does this affect verification, replay, resume, permissions, or memory?
  - Does this change whether Bitter should wrap, test, adapt, or ignore it?
  - Does this make the tool easier to start, inspect, or control without hiding authority?
default_actionability:
  release: test
  docs_change: observe
  security_change: test
  breaking_change: adapt
  ecosystem_package: observe
discovery:
  last_verified: 2026-05-06
  verified_by: manual
  confidence: medium
  open_questions:
    - Is there an official changelog separate from GitHub releases?
notes: >
  Short source-specific guidance for agents. This should say what to pay
  attention to, what not to over-weight, and what role this source plays in
  Bitter's frontier-intake loop.
```

## Backtest Modes

### Recall Backtest

Question:

```text
Did we find the important changes?
```

Scoring concerns:

- known important changes found
- important changes missed
- source coverage
- date fidelity
- duplicate or stale findings
- false positives

### Editorial Backtest

Question:

```text
Did we turn changes into useful operator judgment?
```

Scoring concerns:

- weekly digest readability
- usefulness to serious operators
- quality of operator implications
- quality of Bitter implications
- noise discipline
- uncertainty discipline
- citation quality

These are different failure modes and should be scored separately.

## V0 Pipeline

Start file-backed and batch-oriented.

```text
source contracts (read for harvest scope and high-signal patterns)
-> profiles (read for known-state dedupe, after source contracts)
-> source material
-> findings
-> accepted signals
-> weekly digest
-> profile updates (proposed and reviewed editorially)
-> backstage note
-> QA
-> static publication
-> Factory signal export
```

Profiles are read between source contracts and harvest to dedupe known
state, not before source contracts. Reading profiles first would bias the
harvester toward confirming existing claims and miss category-creating
changes. A novelty pass after profile read should explicitly ask: what is
in this window that the profile does not already describe?

Profile updates are an editorial pass after the weekly digest, not an
auto-derivation. Multiple findings frequently collapse into one
current-state claim, and that flattening is editorial work.

In-window anchoring is by merge-to-default date, not by release tag
date. A release tag dated before the window may legitimately surface
material in the window when the changelog merges in-window. If a finding
misses an in-window change, prefer a new finding in the next cycle that
cites the original commit and notes the gap, over editing the previous
finding. Git history is the record.

Partial cycles are permitted for doctrine testing. A partial cycle
exercises the loop on one provider and produces findings, signals, a
**digest fragment** (working artifact at
`runs/<id>/weekly/<source>-fragment.md` with `status: not_published` and
a `parent_run` reference), and profile updates. The fragment is not a
durable object; it exists to test the "write the digest, then update
the profile" sequencing. Partial cycles do not produce backstage notes
or a publication.

Canonical artifacts should be Markdown, YAML, and JSONL files. Databases are
derived caches only until the loop proves it needs live querying or workflow
state.

## First Milestone

Do not start with the full three-month backtest.

First:

1. Choose one manual gold week.
2. Manually produce findings, accepted signals, and a weekly digest for that
   week.
3. Run the prompt pipeline against the same week.
4. Compare manual vs generated findings, signals, and digest.
5. Adjust source contracts, prompts, and editorial rules.
6. Only then expand to the three-month backtest.

The first proof is not volume. The first proof is one week of research good
enough that we would want to subscribe to it ourselves.

## Factory Relevance

Factory implications should be conservative.

It is acceptable for a finding to say:

```yaml
factory_relevance: none
factory_implication: none
```

Factory relevance should appear only when the change plausibly affects:

- tool choice
- run contracts
- capability assumptions
- adapter work
- evals
- cost or reliability posture
- portfolio allocation
- operating context

Factory and Bitter implications belong in backstage by default. Put them in
the public digest only when they help a non-Bitter reader understand the wider
operator consequence.

## Accessibility Impact

Accessibility is not polish. It is a product constraint.

Accessibility is also the **structural bridge** between the publication's
two readers (per amendment 009): the operator who asks "what do I
reconfigure?" and the frontier-curious pattern-thinker who asks "where is
this heading?". The `who_can_use_now` question serves the pattern-thinker
directly — it is the answer to "who is included at the frontier now" —
independent of whether that reader will reconfigure anything. Weight it as
load-bearing, not as Platform-lane polish; do not let the operator-config
half of a signal crowd out its frontier-inclusion half.

Bitter Frontier should track whether a frontier change makes agentic software
work more reachable without making it less governable. This is the lesson from
OpenClaw: a harness may be strategically important because it lowers the
distance between frontier capability and everyday use.

Use:

```yaml
accessibility_impact: none | low | medium | high
```

Score `high` when a change:

- reduces first-run setup or terminal fluency requirements
- moves agent work into familiar surfaces or channels
- makes agent state, progress, permissions, or approvals easier to understand
- lets a less expert user succeed without hiding material risk
- hides setup complexity while preserving visible authority
- makes long-running work easier to start, pause, inspect, resume, or reverse

Score `low` or `none` when a change only adds power for already-expert users,
or when convenience comes by hiding authority, credentials, evidence, or risk.

Digest-level rule:

```text
Track capability and accessibility separately.
Power that users cannot reach will not move the market.
Ease that hides authority will not survive serious work.
```

## Additional Research Facets

The expanded watchlist adds three facets that should stay distinct from generic
capability tracking.

### Coordination And Economic Control

Paperclip is the calibration source for this facet.

Ask:

- Can agent labor be represented as goals, roles, budgets, accountability, and
  approval state?
- Does the surface produce real operating control, or only a company-themed
  dashboard?
- What did the agent do, what did it cost, what evidence did it leave, and what
  is blocked?

This facet maps most directly to Factory.

### Workcell Autonomy

Agent Zero is the calibration source for this facet.

Ask:

- What changes when the agent gets terminal, filesystem, browser, code
  execution, and tool creation inside a real environment?
- How is the environment isolated, persisted, inspected, reset, and cleaned up?
- Where does real computer access make the agent more useful, and where does it
  become dangerous or mysterious?

This facet maps most directly to BitterGrid and the workcell doctrine.

### Productized Agent Platform

OpenHands is the calibration source for this facet.

Ask:

- How does a serious agent harness package SDK, CLI, GUI, cloud, enterprise,
  integrations, sandboxing, collaboration, and evaluation?
- Which parts should Bitter wrap, which parts should Bitter adapt, and which
  parts should Bitter refuse to become?
- Does platform breadth make adoption easier while preserving evidence and
  authority?

This facet keeps Bitter honest about the market shape of full software-agent
platforms.

## Editorial Voice

Bitter Frontier should be:

- source-backed
- operator-facing
- concise
- skeptical
- action-oriented
- clear about uncertainty
- allergic to hype

It should not sound like a generic release-note bot.

Public language should stay close to how serious developers talk. Prefer
`coding agent`, `agent CLI`, `agentic harness`, `permissions`, `agent memory`,
`review loop`, `audit trail`, and `evidence`. Use Bitter-internal terms such as
`capability profile`, `run contract`, `wake packet`, and `settlement` only when
the article is explicitly about Bitter.

## Public / Backstage Doctrine

Every weekly run should produce two related artifacts:

```text
public digest  = what serious builders should learn
backstage note = what Bitter should change, test, or remember
```

The public digest should be able to stand alone as a high-quality editorial
piece. A reader should not need to understand Bitter, Factory, Grid, Pass,
WakePackets, charters, or receipt doctrine to benefit from it.

Use this division:

- Public digest: what changed, why it matters, what builders should try, what
  to watch, what remains uncertain, and source links.
- Backstage note: Bitter implications, Factory implications, adapter ideas,
  run-contract ideas, evidence-model ideas, QA notes, prompt/model notes, and
  receipt paths.

Avoid this failure mode:

```text
public article becomes a rendered internal architecture memo
```

The public article should say "what a builder should notice." The backstage
note can say "what Bitter should do about it."

## Citation Doctrine

Citations should be natural, contextual, and readable. Do not add generic
footnote blocks such as "Supported by: Codex finding". Do not expose internal
paths as visible prose unless the page is explicitly a run artifact.

Prefer this:

```md
Codex introduced [`/goal`](https://example.com), which turns a coding-agent
session into something closer to a persistent objective.
```

Avoid this:

```md
Codex introduced persistent objectives.

Supported by:
- Codex finding (/findings/codex/)
```

Inline links should usually sit on the sharpest semantic tag: one to three
words when possible. Link `/goal`, `Auto Memory`, `workspace trust`,
`redaction`, `runtime specs`, or `plugins`; do not highlight a whole clause
unless the phrase itself is the useful citation target.

The point is not to make the article look machine-readable. The point is to
make it genuinely legible. A future agent can follow a contextual link more
reliably when the linked words are the exact claim-bearing phrase.

## QA Discipline

QA is scored separately for recall and editorial quality (see Backtest
Modes). Three checks are mandatory each cycle; they were added after the
2026-05-28..2026-06-03 run surfaced them (see that run's `audit.md`):

1. **Signals stay rarer than findings.** A finding is source-event-shaped;
   a signal is one operator decision. If a cycle promotes more than roughly
   one signal per two findings, the promote stage is over-decomposing —
   curate to genuinely decision-bearing signals before publishing, not
   after. The ratio is a smell test, not a hard gate, but a cycle that
   inverts it (more signals than findings) fails QA until reconciled.

2. **Dates are verified to the year, in-window.** A receipt's date must be
   confirmed as a full ISO date whose year falls inside the run window, not
   just a plausible month/day. A stale or mis-rendered year (for example a
   release page showing a prior-year date) is an out-of-window finding and
   must be dropped or re-sourced, never asserted as in-window.

3. **Every promoted signal's receipt is adversarially verified.** Before a
   digest publishes, each accepted signal's receipt is re-fetched by an
   independent check instructed to refute it — confirm the primary source
   actually supports the claim and the change is in-window. A signal whose
   receipt returns unsupported or out-of-window does not publish until it is
   corrected, re-sourced, or dropped. This is the house rule ("no operator
   consequence without a receipt") applied to the machine's own output.

## Weekly Run Expectations

The next agent running a weekly digest should:

1. Load `AGENTS.md`, `CHARTER.md`, and this contract.
2. Use source contracts before open-ended search.
3. Read existing provider profiles to dedupe known state, then explicitly
   enumerate what is novel in the window relative to current profiles.
4. Harvest source-backed findings for the source window.
5. Promote only action-bearing findings into signals.
6. Write the public digest for builders, not for Bitter.
7. Embed source links in the claim-bearing words.
8. Update affected provider profiles as an editorial pass after the
   digest: revise current-state claims, update `last_verified`, change
   `status` where appropriate, and refresh `posture_basis` lists.
9. Move Bitter and Factory implications into a backstage note.
10. Run QA separately for recall, editorial quality, citation quality,
    cross-provider synthesis (the required pattern thesis or an explicit
    no-pattern statement, per amendment 009), and backstage usefulness.
11. Publish the canonical digest and preserve the run artifact.

The public reader should feel:

```text
I understand what changed this week in agentic harnesses.
I know what to try or watch.
I can see where the frontier is heading, not only what to reconfigure.
I can inspect the sources without decoding Bitter's internal ontology.
```
