# Bitter Frontier Proposal

Last revised: 2026-05-07

## Working Identity

Bitter Frontier is a research publication and signal machine for the agentic
software frontier.

Public surface:

```text
frontier.bitter.sh
```

The site tracks changes in coding agents, model CLIs, terminal harnesses,
agent runtimes, sandboxes, protocols, browser-control tools, and operator
workflows. It turns those changes into findings, weekly digests, and
structured frontier signals that can feed Factory and improve Bitter.

The point is not AI news. The point is operator leverage.

That includes accessibility. Bitter Frontier should study not only what became
more powerful, but what became easier to reach and understand.

```text
The frontier changes.
Your loop should compound.
```

## Why This Exists

Bitter is frontier-adaptive and operator-grounded.

It should use whatever the frontier is offering as the strongest available
tool at the moment: Codex, Claude Code, Gemini CLI, Hermes, Pi, OpenClaw,
Paperclip, Agent Zero, OpenHands, future open source agents, local runtimes,
hosted sandboxes, browser-control primitives, or whatever comes next.

To do that honestly, Bitter needs a durable research intake loop. It must
observe the frontier, study changes from primary sources, understand operator
implications, and convert material findings into product changes, evals,
adapter updates, capability-profile changes, charter updates, and allocation
decisions.

Bitter Frontier is the public renderer for that loop.

## Initial Watchlist

Start with nine sources:

| Source | Why It Matters |
| --- | --- |
| Codex | OpenAI-native coding agent surface and provider frontier signal. |
| Claude Code | Anthropic-native coding agent surface and provider frontier signal. |
| Gemini CLI | Google-native terminal agent surface and provider frontier signal. |
| Hermes Agent | Broad self-improving personal/agent platform with memory, skills, automations, and subagents. |
| Pi coding agent | Minimal extensible terminal coding harness with explicit philosophy and packageable extensions. |
| OpenClaw | Accessibility and distribution signal for making agent harnesses reachable to everyday people. |
| Paperclip | Coordination and economic-control signal for making agent labor governable as operating state. |
| Agent Zero | Workcell-autonomy signal for agents acting inside real computer environments. |
| OpenHands | Productized software-agent platform signal across SDK, CLI, GUI, cloud, enterprise, integrations, sandboxing, and evaluation. |

This watchlist is intentionally small. It is enough to prove the machine
without turning the first version into a generic crawler.

## Publication Model

### Findings

Findings are the source-backed research trail.

They answer:

```text
What changed?
```

A finding should be short, cited, and useful. It should preserve the source
material and explain why a serious software operator might care.

Expected fields:

- date
- source
- source URL or commit/release/changelog reference
- change type
- what changed
- operator implication
- Bitter implication
- Factory implication, when relevant
- confidence
- receipts

Findings are not automatically public obligations. The machine may run daily,
but the weekly digest is the primary reader product. Findings are the evidence
trail underneath it.

### Signals

Signals are accepted findings that can change an action.

A finding becomes a signal only when it plausibly changes operator behavior,
Bitter adapter assumptions, eval coverage, capability profiles, run contracts,
charters, Factory allocation assumptions, or operating context.

Not every finding should become a signal.

### Weekly Digest

Weekly digests are the primary reader product.

They answer:

```text
So what?
```

The weekly digest should synthesize the accepted findings into a readable
operator-facing artifact:

- what changed this week
- what matters
- what operators should try, ignore, or watch
- what Bitter should test or change
- what remains uncertain
- which findings support the digest

The weekly digest is the artifact most people should subscribe to. Daily
findings are the evidence trail underneath it.

## Backtest Mode

The machinery should be backtestable.

Given a historical window, it should be possible to run the same research
contract over past source material and generate findings plus weekly
digests.

Initial backtest target:

```text
window: last three months
grain: daily machine cadence
rollup: weekly digest
sources:
  - Codex
  - Claude Code
  - Gemini CLI
  - Hermes Agent
  - Pi coding agent
  - OpenClaw
  - Paperclip
  - Agent Zero
  - OpenHands
```

The backtest proves whether the machine would have produced a useful research
publication if it had been running already.

It also creates an evaluation loop for prompts, models, thresholds, and
editorial rules:

```text
same source window
same source material
different prompt/model/editorial contract
-> compare findings
-> compare weekly digest
-> choose the better machine
```

Backtesting should score two different failure modes:

- recall backtest: did the machine find the important changes?
- editorial backtest: did the machine turn changes into useful operator
  judgment?

## Run Artifacts

Generated runs should be reproducible and comparable.

Candidate layout:

```text
runs/
  2026-05-06-backtest-2026-02-01_2026-05-01-opus-v1/
    manifest.yml
    raw/
    findings/
      2026-02-01.md
      2026-02-02.md
    weekly/
      2026-W06.md
      2026-W07.md
    audit.md
```

Each run should record:

- mode: `backtest` or `live`
- source window
- sources included
- prompts used
- models used
- quality gates
- source receipts
- generated findings
- generated weekly digests
- audit notes

## Architecture Doctrine

Bitter Frontier should start static, file-backed, and batch-oriented.

Canonical state should be checked-in files: source contracts, prompts, run
manifests, raw captures or receipts, findings, accepted signals, digests, QA
notes, and JSONL exports.

Databases may appear later as derived caches for comparison, scoring, local
analytics, or operational workflow. They should not become the source of truth
until the publication loop proves it needs live querying, multi-user review
state, subscriptions, notifications, or Factory-facing operational queries.

Progression:

```text
v0: Git + Markdown/YAML/JSONL + static site + scheduled batch runs
v1: SQLite or DuckDB as a derived comparison cache
v2: Postgres only if live workflow or Factory querying requires it
```

## Prompt Stages

The first version can be prompt-steered rather than over-engineered.

Suggested stages:

### Harvest

Given source material and a time window, identify changes that occurred within
the window. Ignore changes outside it. Preserve source URLs and dates.

### Finding

Convert harvested changes into findings. Each finding must include what
changed, operator implication, Bitter implication, confidence, and receipts.

### Weekly Digest

Read accepted findings for a week. Distill what changed, what matters,
what operators should do, what Bitter should test or change, and what remains
uncertain.

### QA

Check that claims cite receipts, dates fit the window, findings roll up
into the weekly digest, and no unsupported claims appear.

## Quality Tests

The machine is working when it produces research that is:

- source-attributed
- date-faithful
- useful to serious operators
- readable in weekly digest form
- strict about uncertainty
- light on generic release-note sludge
- able to identify Bitter implications
- comparable across prompt/model runs
- able to feed Factory as structured frontier signal

Backtest scoring questions:

- Did it find known major releases or changes?
- Did findings land in the correct date windows?
- Were important claims backed by receipts?
- Would the weekly digest be worth reading?
- Did it identify actionable operator implications?
- Did it identify plausible Bitter or Factory implications?
- Did it avoid hype and non-actionable noise?
- Which prompt/model run produced the best editorial artifact?

## First Milestone

The next step is not a database, crawler, or dynamic app.

The next step is one manual gold week:

1. Pick one week from the initial watchlist.
2. Manually produce findings, accepted signals, and a weekly digest.
3. Run the prompt pipeline against the same week.
4. Compare manual vs generated findings, signals, and digest.
5. Adjust source contracts, prompts, and editorial rules.
6. Only then expand to the three-month backtest.

The first proof is one week of research good enough that we would want to
subscribe to it ourselves.

## Relationship To Factory

Factory consumes frontier signals as one class of estate input.

Bitter Frontier should not become Factory's allocation layer. It should produce
source-backed research artifacts and structured signals that Factory can factor
into operating context, allocation posture, product-intake implications, and
run-contract decisions.

The relationship is:

```text
Bitter Frontier observes and publishes.
Factory factors and allocates.
Bitter adapts.
```

## Anti-Boundary

Bitter Frontier is not:

- a generic AI news site
- a hype feed
- a benchmark lab
- Factory's allocation engine
- BitterBench
- BitterLearn memory
- a replacement for primary source changelogs
- a ranking site for model fandom
- a place for uncited claims

Its job is to metabolize frontier movement into operator-relevant research and
Bitter-relevant signals.

## Initial Build Principle

Start static and research-forward.

The first valuable artifact is not a complex app. It is a reproducible
editorial machine with:

- a small source watchlist
- a finding grammar
- a weekly digest grammar
- a backtestable run manifest
- source receipts
- prompt/model comparability

The publishing stack should stay simple until the research loop proves itself.
