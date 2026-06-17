---
title: Research arc synthesis — what we know on 2026-05-14
author: claude-opus-4-7 (synthesizing four parallel subagent surveys)
date: 2026-05-14
status: working notes
purpose: ground a fresh session in where Bitter Frontier is *across* doctrine, research, and publication before launching the next CLI ergonomics push.
---

# Research arc synthesis — 2026-05-14

Before launching the next codex session against the Bitter CLI ergonomics queue, I sent four subagents to read disjoint slices of this repo in parallel: the doctrine/charter arc (`AGENTS.md` + four ratified amendments), the Loop2 R1–R10 round notes (`research/loop2-result.md` plus per-round commits), the live research journals (`research/` ex-Loop2 ex-codex-goal-output), and the published editorial surface (`content/digests/`, `content/profiles/`, `content/backstage/`). What follows is what I now believe is true about the research arc, where the four surveys disagreed, and what that implies for what we ship next.

## The project in one paragraph

Bitter Frontier is an autonomous research-and-publication loop targeting a named watchlist of ten agent harnesses (Codex, Claude Code, Gemini CLI, Hermes Agent, Pi Coding Agent, OpenClaw, Paperclip, Agent Zero, OpenHands; Flue at Tier 2). Per Amendment 004, the publication is structured *first* — a data product for Bitter, the meta-harness above the watched harnesses — and editorially polished *second* for the human operators Bitter wants to convince. Output objects come in five grammars: **findings** (raw observations with receipts), **signals** (action-bearing claims), **digests** (rolled-up periodic synthesis), **profiles** (evergreen per-harness backgrounders), **run artifacts** (the trail of how a cycle ran). The house rule (`AGENTS.md:29–40`) is: no frontier claim without an operator consequence, no operator consequence without a receipt, no signal unless it can change the next action.

## The doctrine arc — four amendments, four gates

Four amendments are ratified; `charter/proposed/` is empty, `charter/rejected/` is empty. The arc is short but load-bearing:

- **001 (2026-05-11, applied `63d2b0e`)** — established the amendment convention itself. `charter/proposed → ratified → rejected` as a directory-state lifecycle, three-digit numbering, immutability after ratification, and the rule that the autonomous loop may write to `proposed/` but cannot self-commit transitions. Closed the "charter edits leave only commit traces" gap.
- **002 (2026-05-11, applied `63d2b0e`)** — sharpened the mission for autonomous cold-start. Replaced narrative mission with a concrete four-part brief, codified the R&D-demonstration framing, promoted profile to co-equal reader product with the digest, added profile-orientation to Primary Judge.
- **003 (2026-05-12, applied `9594d4a`)** — closed Codex partial-cycle audit gaps. Added `commit` as a precision level between `commit_diff_reviewed` and `release_note`; relaxed the "one canonical exemplar" rule; pinned a six-condition convergence target (coverage, depth, freshness, doctrine convergence, external review, synthesis) for the autonomous loop.
- **004 (2026-05-13, applied `cb6f17d`)** — established the three durable publication sections **Control Plane / Runtime / Platform** plus four cross-cutting axes (authority, evidence, accessibility, security). Added the `section` field, the `accessibility_consequence` block (`what_got_easier`, `who_can_use_now`, `authority_visibility`), and the `security_consequence` block (`threat_blocked_or_opened`, `attacker_model`, `enforcement`, `cost_to_operator`, `residual`) — with the `authority_visibility` and `cost_to_operator` bridge fields making the security-vs-accessibility tradeoff structurally visible from both directions. Formally restated Bitter as the primary consumer.

What's noteworthy about the amendment *process* is that it has implicit gates. Amendment 004 went through four: deep-research council proposal (Control Plane / **Workcell** / Platform), pressure-test council (renamed Platform → Platform Adoption with Rule 5 against catch-all), industry-vocabulary pass (Workcell → Runtime, drop "Adoption" because OpenHands and Hermes call themselves "agent platform"), then ratification. The doctrine doesn't ship as a single proposal; it passes through reviewers and reality before it sticks.

## The research arc — Loop1 → Loop2 → now

Loop1 (earlier, not directly surveyed here) shipped the *what* of publication: signal pages, Operator Brief, profile stance, llms.txt, link-graph check, front-door trust. Loop2 (2026-05-13) ran ten rounds against the *editorial structure*, *page-level completeness*, and *quality gates*:

- **R1** (priority-map council) seeded R2–R5. Not a discrete artifact; referenced in subsequent commits.
- **R2** (`4d55f26`) made run and finding pages render their full contracts and added blob links.
- **R3** (`de4281f`) shipped signal-index discovery (`SignalList.astro` with month-grouping + source filter chips) and `FindingFooter` metadata block.
- **R4** (`d521128`) tagged 41 signals across 19 run YAMLs with four candidate "track" labels — rendered as chips but deliberately *not* linked, so taxonomy could be tested by data over weeks before nav was locked.
- **R5** (`7a689d4`) rewrote the Sources page as 12-field contract cards.
- **R6** (`b6cbe49`) had a deep-research council reject the four invented tracks and name three doctrine-grounded sections (Control Plane / Workcell / Platform). Wrote `charter/proposed/amendment-004`. Also seeded `research/codex-goal-output/ergonomics-journal.md` with eight CLI pain points.
- **R7** (`7291afe`) pressure-tested the proposed sections via a Codex council. Renamed Platform → Platform Adoption with Rule 5 (platform-shaped changes whose consequence is evaluation/governance/authority route to Control Plane; sandbox/runtime to Workcell; only adoption-direct stays in Platform Adoption).
- **R8** (`5919ce5`) shipped two parallel councils: an *integrity checker* (`site/scripts/check-integrity.mjs` + `npm run check:integrity`) and the `accessibility_consequence` triad schema requirement after a council noted the scalar `accessibility_impact` was too weak to enforce the doctrine.
- **R9** (`65743c9`) shipped the external-links checker (`site/scripts/check-external-links.mjs` + `npm run check:links`). First run caught Paperclip citing a never-tagged `v2026.511.0`; fixed to `v2026.512.0` in finding + three digest references.
- **R10** (`657f717`) ran final integration verify (all three checks clean) and wrote `loop2-result.md`.

The trajectory across Loop2: **surface polish → structural completeness → editorial doctrine → quality gates**. Two recurring patterns made the arc fast: (a) **parallel-council-while-shipping** — kick off a council in the background, ship work that doesn't depend on its outcome, return to read the dossier; (b) **pressure-test every proposed amendment with a fresh council** before ratifying — R7 caught a catch-all risk in R6's proposal; R8 caught a scalar-vs-triad schema weakness in the accessibility axis. Doctrine that survives councils makes it to ratification.

## What's actually published

- **Digests: 3.** `2026-04-22_2026-05-06-frontier-rollup.md` (Coding Agents Are Becoming Working Environments — 5 sources, essayistic builder-coaching voice), `2026-04-23_2026-05-07-frontier-rollup-expanded.md` (The Harness Leaves The Chat Box — expanded watchlist, denser receipts, introduces "visible computer" and "accessibility is frontier capability" framings), `2026-05-12-weekly.md` (Governance Becomes Enforcement — full nine-provider watchlist, structured `operator_brief` frontmatter and `not_promoted` block, named CVE-style alerts).
- **Profiles: 10.** All `status: active_watch`, all share the same `schema_version: bitter.frontier_profile.v0` shape (claims block, three-lens posture_basis, stance, Operator Read, Open Questions, What To Watch Next, Profile Hygiene). Last review dates clustered 2026-05-12 through 2026-05-13.
- **Backstage: 1.** Paired with digest 2 only, makes the Bitter-product-intake explicit: "This note is product intake for Bitter. The public digest should be useful to any serious builder; this page records what Bitter should learn from the same research." Lists implications for Bitter CLI, BitterGrid, BitterPass, Factory. The mechanism is established but not consistently applied across digests.
- **Signals: rendered, not on-disk.** The site survey reported `find ... */signals/*.md` returns zero. That's literally correct but conclusionally misleading — signals are rendered statically from finding YAML in `runs/<run>/findings/<slug>.yaml` via `site/src/pages/signals/[id].astro` and `site/src/lib/frontier.ts`. There are 27 findings across 22 run directories that materialize as signal pages on the published site. *No* markdown source files for signals exist; they're dynamic over YAML. This is a deliberate architecture choice (signals are structured records), not a gap.

Editorial voice across all three digests is consistent: **opinionated-but-disciplined builder journalism**. Imperatives ("Do not design cloud-control workflows around API-key-only auth"), thesis-as-paragraph-opener ("The frontier is not one winning agent. The frontier is the environment around agents getting thicker"), builder-question framing ("What could this agent read, change, execute, install, send, or leak?"), and conservative epistemic discipline ("native review is still evidence, not truth"). Profiles enforce the *editorial* rule: cross-provider editorial belongs in the weekly digest, not in profile bodies.

## The live frontier — what's investigating, not yet doctrine

Three live threads sit outside the ratified amendments and outside the Loop2 ship list:

1. **Agent receipt spec posture** (`research/agent-receipt-spec-survey-2026-05-11.md`). A four-bucket receipt taxonomy — past-tense observability (OTel GenAI converging), proof-tense accountability (fragmented: Agent Receipts/W3C VC, AAR, IETF ACTA), manifest-tense declaration (early/competing: AgentSpec, A2A Cards), and **future-tense corrective signal** ("what did this run teach the next?") which is the bucket *no one else is occupying* and where Bitter's `bitter.macro_run.v0` already lives. The recommended posture is Option C hybrid: emit OTel GenAI for past-tense interop *and* publish `bitter.run.receipt.v0` (Apache 2.0, neutral-named) for the unclaimed future-tense bucket; then propose OTel SIG extensions (`gen_ai.lesson.recorded`, `gen_ai.harness.diff`, `gen_ai.repeat_failure.detected`) after 2–3 months of evidence. This is potentially the most distinctive contribution Bitter can make to the wider ecosystem.

2. **Provider profile prototype council** (`research/council-2026-05-11-provider-profile-prototype.md`). The document poses six pressure-test prompts to a council on format generalization across nine providers, per-claim citation readability, duplication risk between profile / source-contract / digest, harvester bias, posture-section citation discipline, 12-month failure modes. The council's responses are *not* in this file; subagent C noted that the three council-dossiers (`loop2-round-1-fresh-visitor.md`, `round-4-review.md`, `round-8-review.md`) address *adjacent* questions, not these six prompts directly. The provider profile schema therefore remains `experimental as of 2026-05-11` (per `AGENTS.md:91–92`).

3. **CLI ergonomics journal** (`research/codex-goal-output/ergonomics-journal.md`). Eight seeded pain points (R6) grew through the prior codex goal session and produced PR #2 in `/Users/c3po/co/bitter` (shipped `bitter macro progress` + `bitter macro tail`). Open items at the end of Loop2 included `bitter --help` discoverability, `bitter macro --help`, default text-mode `events`, JSON pipe-buffer warning, **live token/cost in `progress`**. The last item is doctrinally load-bearing: if Bitter is the meta-harness above all watched harnesses, then cost-visibility across the harness layer is a primary Bitter capability, not a CLI nicety.

## What this implies for the next move

The CLI ergonomics queue I prepared (14 candidates, three tiers) sits *inside* the meta-harness identity that Amendment 004 just made explicit. Tier-1 items are discoverability and council-budget-awareness; Tier-2 is the cost/accounting layer that ties to the meta-harness story directly. Choosing Tier-1 first is correct: those are the surfaces an operator hits first, and shipping them produces the friction notes that improve Tier-2 design.

Concretely, the next codex session should:

- Open `research/codex-goal-output/ergonomics-journal.md` *first* and treat its entries as work items, not narrative.
- Ship Tier-1 fixes on one feature branch in `/Users/c3po/co/bitter` with passing tests and a single PR.
- Run real Bitter Frontier councils through the new flags as validation (dual mandate, same pattern that worked for PR #2).
- Append new friction observations to the journal *during* the work, not retroactively.
- Surface, before merge, any Tier-2 friction encountered while shipping Tier-1 — these become inputs to the next session.

The synthesis-level point: the research is not separate from the CLI work. The CLI is *how* the research runs. Every digest and profile in the surveyed list was produced by councils that used the CLI surfaces being upgraded.

## Reconciliations and gaps in the four surveys

A few places where the surveys needed adjustment against canonical sources:

- **Workcell vs. Runtime.** Subagent B (Loop2) reported R6 council named "Control Plane / Workcell / Platform" and R7 renamed to "Platform Adoption." Subagent A (Doctrine) reported the final ratified names as "Control Plane / Runtime / Platform." Both are correct at their respective gates. Amendment 004 explicitly explains the rename (`amendment-004:63–72`): an industry-vocabulary pass between pressure-test and ratification replaced Workcell (a Bitter-internal term from `BITTER_ATLAS_BRIEF.md`) with Runtime (OpenHands' explicit term, the unifying industry usage), and dropped "Adoption" once Rule 5 already excluded evaluation/governance/runtime from Platform.

- **Signal pages "missing."** Subagent D reported zero signal markdown sources on disk. That's literally correct. The signal pages are generated at build time from finding YAML files in `runs/<run>/findings/` via `site/src/pages/signals/[id].astro`. There is no signal-page authoring gap; signals are a structured-data product by design, consistent with Amendment 004's "schema fields are not editorial tax; they are the deliverable" framing.

- **Provider profile council response.** Subagent C noted the provider profile prototype council document (2026-05-11) contains the six pressure-test prompts but not the responses, and that the three loop2 council-dossiers address adjacent topics. This is a real gap in the research artifact set — the profile schema doctrine is still genuinely open, not closed-but-undocumented.

- **Digest index staleness.** Subagent D flagged that `content/digests/index.md` lists only 2 of the 3 published digests (the expanded rollup is unindexed). This is a publication hygiene gap, not a research gap, but worth recording.

## What I know that I didn't before

1. **Bitter Frontier is a perception apparatus for Bitter** — that's the line in Amendment 004 (`:74–83`) and it changes how I should weight CLI work. The CLI lets Bitter perceive; the publication makes that perception externally legible.
2. **The amendment process has implicit gates** — propose → pressure-test → industry-vocabulary pass → ratify. Skipping any gate produces fragile doctrine.
3. **The receipt taxonomy proposal is the biggest unbuilt thing** — future-tense corrective signal is an empty bucket in the external ecosystem and Bitter's `macro_run.v0` already lives there. If Phase 1 of that playbook ships, it could be the most influential thing this project does.
4. **Loop2 ran in 2–3× the rate of serial work** because of parallel-council-while-shipping. Worth applying that same pattern to the codex session: kick off a council on a low-bandwidth thread (e.g., next provider profile, next digest) while the CLI fixes are being built.
5. **The integrity and link-health checkers are doctrine, not tooling.** They enforce the house rule mechanically. Any future schema change has to extend these checkers, not just the renderers.

— claude-opus-4-7, 2026-05-14
