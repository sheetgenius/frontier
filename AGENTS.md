# AGENTS.md

Start here.

Bitter Frontier is documentation-first right now. It is the proposed research
and publication surface for `frontier.bitter.sh`, plus the frontier-intake loop
that can later feed Bitter and Factory. Do not treat this repo as an app,
crawler, database, or dashboard until the research contract proves itself.

## Document Authority

Read the root docs in this order:

1. `CHARTER.md` defines the durable operating shape: mission, truth ownership,
   refusal lines, research biases, authority, and evidence standard.
2. `RESEARCH_CONTRACT.md` defines the v0 operational grammar: durable objects,
   source contracts, finding/signal/digest formats, backtest modes, QA rules,
   and editorial voice.
3. `PROPOSAL.md` preserves the concept, architecture direction, first
   milestone, and likely repository layout.
4. `AGENTS.md` is the working entrypoint for future agents.

`CLAUDE.md` must remain a pointer to this file, not a competing policy surface.

## Core Rule

Preserve the house rule:

```text
No frontier claim without an operator consequence.
No operator consequence without a receipt.
No signal unless it can change the next action.
```

Also preserve the accessibility rule:

```text
No capability signal is complete until it names what got easier, who can use
the tool now, and whether authority stayed visible.
```

"Operator consequence" is read at two altitudes (per amendment 009): the
config altitude (what an operator reconfigures, upgrades, audits) and the
frontier altitude (what becomes possible, or who becomes included, at the
frontier). The frontier altitude is a legitimate consequence for the
pattern-thinking reader and is held to the same receipt discipline as the
config altitude. The publication's primary consumer is the author
returning with no context — the cold-context proxy for a wide
frontier-curious audience — with Bitter as a downstream consumer of the
signal stream.

This repo is not for generic AI news, hype summaries, model fandom, uncited
roadmap speculation, or release-note paraphrase. The work is useful only when a
source-backed change can help a serious reader — an operator deciding what to
test, adapt, ignore, publish, or route into Bitter, or a frontier-curious
reader understanding where the frontier is heading.

## Artifact Grammar

The durable object chain is:

```text
source material -> finding -> signal -> digest -> profile (refreshed)
  -> backstage note -> run artifact
```

- `Finding`: source-backed observation of what changed. A finding is not
  automatically public and is not automatically important.
- `Signal`: accepted finding that can change an action. Signals are rarer than
  findings.
- `Digest`: weekly editorial synthesis across providers. This is the primary
  reader product.
- `Profile`: evergreen per-provider register of current state and posture,
  refreshed after each digest as an editorial pass. Experimental as of
  2026-05-11; see `RESEARCH_CONTRACT.md` for the schema and discipline.
- `Backstage note`: internal product intake for Bitter and Factory. This is
  where Bitter-specific implications, tests, run caveats, and receipt paths
  belong.
- `Run artifact`: reproducible proof of how a run generated findings, signals,
  digests, profile updates, QA notes, and exports.

Do not collapse these objects. The distinction between finding and signal is
load-bearing. The distinction between digest (cross-provider, weekly) and
profile (per-provider, evergreen) is also load-bearing.

## Current Milestone

The first milestone — one manual gold week — was completed in the
2026-04-23 to 2026-05-07 commit-harvest run. The current milestone is
profile coverage plus autonomous-loop demonstration:

1. Build and maintain an evergreen profile for each watchlist provider
   (Codex, Claude Code, Gemini CLI, Hermes Agent, Pi coding agent,
   OpenClaw, Paperclip, Agent Zero, OpenHands; plus Flue at Tier 2).
2. Refresh profiles on each cycle, binding to the profile doctrine in
   `RESEARCH_CONTRACT.md`.
3. Operate the loop autonomously where possible. Surface unresolved
   doctrine questions in audit notes and `charter/proposed/`
   amendments; do not self-commit charter or research-contract
   changes.

Profile doctrine remains experimental as of 2026-05-11; expect the
schema to continue evolving as more providers stress-test it.

### Operational Target For The Autonomous Run

The autonomous loop converges to satisfaction when all of the following
are true:

1. **Coverage**: profiles exist in `content/profiles/` for all nine
   watchlist providers.
2. **Depth**: each profile has at least three active claims, each
   anchored to evidence at or above its `evidence_floor`.
3. **Freshness**: each profile has been refreshed by at least one
   harvest cycle in addition to its initial build, so no profile is
   only seeded from inherited finding state.
4. **Doctrine convergence**: all audit gaps surfaced by the loop are
   closed via ratified amendments, OR explicitly deferred with a draft
   in `charter/proposed/` and a documented reason. The most recent two
   cycles raise zero new doctrine-level questions.
5. **External review**: at least one `bitter council` pressure-test has
   been run during the autonomous run on a profile from each
   surface_class present in the watchlist
   (`open_source_commits`, `mixed_official_docs`,
   `closed_source_release_notes` — three council runs minimum).
6. **Synthesis**: one cross-provider weekly digest covering the
   autonomous-run window has been published.

The loop is not time-budgeted. It runs until the target is reached to
satisfaction. Per the Operating Cadence section below, the loop may
defer a question to `charter/proposed/` rather than block on it, but
cannot self-commit doctrine changes.

## Operating Cadence

The autonomous loop is paced by partial cycles. Each iteration:

1. Reads `CHARTER.md`, this file, and `RESEARCH_CONTRACT.md` to
   re-orient from cold context.
2. Lists existing profiles (`content/profiles/*.md`) and reads the
   most recent audit notes (`runs/*-partial-cycle-*/audit.md`).
3. Picks one of the following work items, in priority order:
   - Apply an unresolved doctrine gap from a recent audit when fixing
     it would retroactively clean up multiple profiles or block
     future ones.
   - Build the next missing profile when no high-value doctrine gap
     is pending.
   - Refresh an existing profile from a recent harvest window.
4. Produces the relevant artifacts per the partial-cycle pipeline
   defined in `RESEARCH_CONTRACT.md` (finding, signal, digest
   fragment, profile update, audit note).
5. Commits the iteration's work as a stand-alone unit. The diff must
   be legible to a stranger reading the repo cold.

The loop stops when either: all watchlist providers have profiles
*and* the most recent two cycles surface zero new doctrine gaps; or a
time budget passed by the operator is exhausted.

When the loop surfaces a question it cannot resolve — a contradiction
in doctrine, a missing schema field, an ambiguous case — it writes
the question into an audit note. If the question is a charter or
research-contract change, the loop drafts an amendment in
`charter/proposed/` rather than editing the steering documents
directly. Durable doctrine changes are applied by a subsequent
human-or-conversational pass.

## Architecture Doctrine

Use the staging from `PROPOSAL.md`:

```text
v0: Git + Markdown/YAML/JSONL + static site + scheduled batch runs
v1: SQLite or DuckDB as a derived comparison cache
v2: Postgres only if live workflow or Factory querying requires it
```

Canonical state is checked-in files: source contracts, prompts, run manifests,
raw captures, receipts, findings, accepted signals, weekly digests, QA notes,
JSONL exports, and static content. Databases are derived caches only at this
stage.

The v0 pipeline is:

```text
source contracts -> profiles (read for dedupe) -> source material
  -> findings -> accepted signals -> weekly digest
  -> profile updates (editorial pass) -> backstage note -> QA
  -> static publication -> Factory signal export
```

Read source contracts before profiles. Reading profiles first biases the
harvester toward confirming existing claims. After reading profiles,
explicitly enumerate what is novel in the window relative to current
profiles. Profile updates are written after the digest, not auto-derived
from findings.

Keep the prompt stages separable: `Harvest`, `Finding`, `Weekly Digest`, and
`QA`. Do not replace them with one opaque mega-prompt.

## Source Contracts

The initial watchlist is intentionally small:

- Codex
- Claude Code
- Gemini CLI
- Hermes Agent
- Pi coding agent
- OpenClaw
- Paperclip
- Agent Zero
- OpenHands
- Flue (Tier 2, weekly)

Each source needs a source contract before automation depends on it. Source
contracts should define primary surfaces, accepted evidence, rejected evidence,
change types, ambiguity handling, and citation requirements.

OpenClaw is the accessibility calibration source. Watch it for product posture:
onboarding, familiar surfaces, gateway behavior, visible state, and any move
that makes agentic work more reachable without hiding authority.

Paperclip is the Factory/control-plane calibration source. Watch it for goals,
roles, budgets, accountability, approvals, and whether agent labor becomes real
operating state.

Agent Zero is the Grid/workcell calibration source. Watch it for real computer
access, terminal/browser/filesystem use, isolation, persistence, cleanup,
subagents, and agent-created tools.

OpenHands is the productized platform calibration source. Watch it for SDK,
CLI, GUI, cloud, enterprise, integrations, sandboxing, collaboration,
evaluation, and which surfaces Bitter should wrap or refuse.

Flue is the programmable harness / headless agent calibration source (Tier 2).
Watch it for the "model + harness" framing in the wild: how the ecosystem
separates sandbox, filesystem, skills, memory, sessions, and deployment from
the model call itself. Treat it as category evidence and possible integration
reference. APIs are self-described experimental; do not adopt as architectural
precedent until stable. Cadence: weekly.

When adding claims about current external projects, use current primary sources
such as official changelogs, release notes, commits, docs, and observed
behavior. Stale model memory is not evidence. If current facts matter, verify
them before writing.

## Backtest Quality

Backtests have two separate scores:

- `recall`: did the machine find the important changes?
- `editorial`: did it turn them into useful operator judgment?

Do not collapse these into one quality number. They fail in different ways and
should be improved separately.

## Factory Boundary

Bitter Frontier observes, analyzes, and publishes frontier signals. Factory can
later consume accepted signal packets as one input into operating context,
allocation posture, product intake, or run-contract decisions.

Do not make this repo the Factory allocator, BitterBench, BitterLearn, a provider
ranking surface, or the source of truth for Bitter adapter behavior. A finding
may have `factory_relevance: none`; that is normal.

## Repository Shape

Root docs are acceptable while this is doctrine-first. Future directories should
follow the file-backed compiler shape:

- `sources/` for source contracts
- `prompts/` for prompt contracts
- `runs/` for reproducible run artifacts
- `content/` for accepted public findings and digests
- `data/` for JSONL exports
- `site/` for the static renderer
- `tests/` only when there is code or a reproducible validation harness

New runs should follow the proposed layout:

```text
runs/<date>-<mode>-<window>-<model>-<version>/
```

Run manifests must record mode, source window, sources, prompts, models, quality
gates, receipts, generated findings, generated digests, and audit notes.

## Editing Rules

- Keep prose source-backed, operator-facing, concise, skeptical, and
  action-oriented.
- Public digests must be useful to builders who do not care about Bitter.
  Explain what changed, why it matters, what to try, what to watch, and what
  remains uncertain.
- Every public digest must name the cross-provider synthesis pattern (or
  explicitly state none emerged this window). It is a protected
  deliverable, not optional craft; do not let per-provider operator
  consequences crowd out the cross-provider thesis the pattern-thinking
  reader reads for. (Per amendment 009.)
- Do not make Bitter the protagonist of the public digest. Put Bitter and
  Factory implications in `content/backstage/` unless they directly help a
  non-Bitter reader understand the operator consequence.
- Cite evidence inline on the claim-bearing words. Prefer links such as
  [`/goal`](...), `Auto Memory`, `workspace trust`, `redaction`, `runtime
  specs`, or `plugins` over generic support blocks or visible internal paths.
- Public prose should say `coding agent`, `agent CLI`, `agentic harness`,
  `permissions`, `agent memory`, `review loop`, `audit trail`, and `evidence`
  before reaching for Bitter-internal terms.
- Preserve the terms `finding`, `signal`, `digest`, `run artifact`, and
  `source contract`.
- Prefer ASCII punctuation in new text.
- Do not add product claims without citations and dates.
- Do not force every source change into a Bitter or Factory implication.
- Do not build app infrastructure before the manual gold week and file-backed
  research loop are credible.

## Validation

Documentation changes use lightweight checks:

```bash
git status --short
git diff --check
rg "TODO|TBD|FIXME"
```

The static site lives in `site/` (Astro). Its build doubles as a content check:
`npm --prefix site run build` regenerates the digest/signal/profile pages and
runs the internal link-graph check, and `node site/scripts/check-integrity.mjs`
validates that finding/signal/profile cross-reference ids resolve. Run both
before publishing a cycle.

## Publishing

`frontier.bitter.sh` deploys on **commit and push to `main`** — there is no
manual deploy step. A GitHub `push` webhook notifies BitterGrid, which resolves
the pushed commit, builds `site/`, publishes a release, deploys it, and records
verification receipts (not GitHub Actions — BitterGrid owns deploy execution).
To publish a digest, profile, or doc change, just:

```bash
git add -A && git commit -m "..." && git push origin main
```

Manual fallback only if the webhook fails to fire: `bitter grid services source
reconcile frontier.bitter.sh --confirm --allow-deploy --host bittergrid-01`.
