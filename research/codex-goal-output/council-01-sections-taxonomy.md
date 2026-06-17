# Council Dossier: macro_cce7307c-a9e5-4e15-8074-4dd23ce482dc

## Context
- question_source: file
- question_file: /Users/c3po/co/bitterfrontier/research/codex-goal-output/question-01-sections-taxonomy.md
- cwd: /Users/c3po/co/bitterfrontier
- model_policy: {"codex_model":"gpt-5.5","codex_config":["reasoning_effort=high"],"synthesis_codex_model":"gpt-5.5","synthesis_codex_config":["reasoning_effort=high"],"claude_model":null,"gemini_model":null,"reviewers":["claude","codex","gemini"],"synthesizer":"codex","child_timeout_ms":900000}

## Question
# Council 01: pressure-test the three-section taxonomy

Use the completed council dossier at:

`/Users/c3po/.local/state/bitter/sessions/sess_d3c0c11a-9f7b-46cf-9671-7c905725c153/macro_runs/macro_22533a75-a68e-45c4-bbea-273731e2f044/dossier.md`

That council recommended three durable Bitter Frontier sections:

1. Control Plane
2. Workcell
3. Platform

It also rejected Evidence And Memory, Authority / Trust, and Accessibility as
standalone sections.

Question:

Pressure-test this taxonomy before it becomes a proposed doctrine amendment.

Answer these points:

1. Which of the three sections is weakest as a durable editorial section, and
   why?
2. Which section is most likely to split if held for six months of weekly
   digests?
3. What is the single smallest wording or routing-rule change that would make
   the taxonomy more durable without adding a fourth section?
4. Does the proposal preserve the Bitter Frontier house rule: no frontier claim
   without operator consequence, no operator consequence without a receipt, no
   signal unless it can change the next action?

Ground your answer in the local doctrine files:

- `/Users/c3po/co/bitterfrontier/CHARTER.md`
- `/Users/c3po/co/bitterfrontier/RESEARCH_CONTRACT.md`
- `/Users/c3po/co/bitter/AGENTS.md`
- `/Users/c3po/co/bitter/docs/architecture/cli-planes.md`
- `/Users/c3po/co/factory/CHARTER.md`
- `/Users/c3po/co/factory/docs/atlas/BITTER_ATLAS_BRIEF.md`

Required output:

- strongest objection
- weakest section
- likely six-month split point
- recommended smallest implementation target

End with:

## Smallest Implementation Target

One concrete file-backed change, no site build or schema changes.

## Research Outputs
- research_claude: ok -> child_runs/research_claude/output.jsonl
- research_codex: ok -> child_runs/research_codex/output.jsonl
- research_gemini: ok -> child_runs/research_gemini/output.jsonl

## Review Outputs
- review_claude: ok -> child_runs/review_claude/output.jsonl
- review_codex: ok -> child_runs/review_codex/output.jsonl
- review_gemini: ok -> child_runs/review_gemini/output.jsonl

## Synthesis
I’ll source-check this against the local doctrine and the completed dossier, keeping the answer read-only and focused on the editorial taxonomy rather than proposing schema work.The dossier’s original synthesis already leans toward the three sections, but the follow-up reviews disagree on the failure mode: one attacks Platform as a catch-all, one attacks mandatory cross-cutting checks as ritual, and one flags Workcell as under-tested. I’m checking the adjacent Bitter and Factory docs now so the final answer can reject the weaker objections rather than blend them.**Strongest Objection**

The strongest objection is **Platform as a catch-all**. The doctrine supports a platform lane, but the proposed scope is too broad: SDK, CLI, GUI, cloud, enterprise, integrations, sandboxing, collaboration, evaluation, plugins, packages, install paths, distribution, and adoption all sit under one label. That is defensible as a research lens, but weak as a durable editorial section.

I would reject the claim that “mandatory silence” is the strongest objection. It is a real implementation risk, especially for Workcell, but it is a cadence rule problem. It does not invalidate the three-section taxonomy. The Platform catch-all problem does.

**Weakest Section**

**Workcell** is the weakest durable editorial section. It is doctrinally real: Frontier asks what changes when agents get “terminal, filesystem, browser, code execution, and tool creation inside a real environment” in [RESEARCH_CONTRACT.md](/Users/c3po/co/bitterfrontier/RESEARCH_CONTRACT.md:548), and Atlas names BitterGrid the “runtime and workcell truth plane” in [BITTER_ATLAS_BRIEF.md](/Users/c3po/co/factory/docs/atlas/BITTER_ATLAS_BRIEF.md:204). But as public editorial language, “Workcell” is the most technical and the most likely to be silent in ordinary weekly cycles.

Do not drop it. The doctrine has enough support, and the operator consequence is clear: where the agent ran, what it could touch, how it was bounded, and whether it left inspectable runtime evidence.

**Likely Six-Month Split Point**

**Platform** is most likely to split after six months. The pressure will be between:

- adoption and distribution: install paths, UI, packages, plugins, cloud, enterprise packaging, who can use it now
- platform assurance: evaluation, collaboration controls, sandboxing, authority visibility, evidence, and governance defaults

The first belongs in Platform. The second often belongs in Control Plane or Workcell. Factory doctrine already keeps authority and run contracts explicit through manifests naming “which capabilities,” “which credential scopes,” “which runtime,” and “which evidence obligations” in [CHARTER.md](/Users/c3po/co/factory/CHARTER.md:223). Frontier doctrine also requires accessibility to stay cross-cutting, not isolated: capability signals must name what got easier, who can use the tool now, and whether authority stayed visible in [CHARTER.md](/Users/c3po/co/bitterfrontier/CHARTER.md:246).

The rejected standalone sections should stay rejected. **Evidence And Memory** is proof grammar, not a section; the house rule already binds every signal to receipts in [RESEARCH_CONTRACT.md](/Users/c3po/co/bitterfrontier/RESEARCH_CONTRACT.md:13). **Authority / Trust** duplicates Control Plane and also applies everywhere. **Accessibility** is mandatory editorial judgment across all sections, not a fourth lane.

The taxonomy preserves the house rule **if section assignment remains downstream of signal acceptance**. A section cannot rescue a weak finding. No signal should appear just because a digest needs to fill a section. Silent-section prose is acceptable only as harvest coverage, not as a promoted signal.

## Smallest Implementation Target

Edit `charter/proposed/amendment-004-establish-publication-sections.md` to rename **Platform** to **Platform Adoption** and add one routing rule: route to Platform Adoption only when the operator consequence is adoption, distribution, integration, or usable packaging; route authority/evaluation/governance consequences to Control Plane and runtime/sandbox/execution consequences to Workcell.

## Use
- Treat this dossier as research input, not authority by itself.
- Source-check accepted and rejected claims before launching a worker.

## CLI Ergonomics Observations From This Run

- `bitter macro progress last` made the live bottleneck obvious without JSON:
  Gemini and Claude finished research quickly while Codex remained live.
- `bitter macro tail last` proved useful for reading real streaming synthesis
  text, but the first run exposed an implicit-tail edge case: before any child
  emitted output, it printed an empty header for the first live child. Closed in
  Bitter commit `1542c93` by waiting for text before printing an implicit tail
  header.
- In a concurrent fanout phase, default `tail last` can switch between child
  lanes as newer output arrives. The practical workflow is `macro progress` to
  pick a child, then `macro tail --child <child_id>` when stable lane-following
  matters.
