# Bitter Frontier

**Source-backed reporting on what coding agents just made cheaper, what became
the new bottleneck, and where operators should spend scarce human attention.**

Bitter Frontier reads the coding agents and harnesses together. It turns their
isolated release notes into a receipted editorial answer to five questions: what
changed, who it affects, whether it reached the version people run, what they
should do, and what the change reveals about the larger system.

**Read the latest issue: https://frontier.bitter.sh**

## What Frontier does that a release note cannot

A provider describes its own product in isolation. It rarely tells you that
another project tried the same design earlier, that the two implementations put
authority in different places, or that the fix exists on `main` but not in the
binary you run.

Frontier supplies that missing memory. It compares defaults, enforcement,
release channels, operator cost, and the human attention a change saves or
creates. The comparison is not ornamental. It appears only when it changes the
interpretation or the next action.

The publication is not general AI news and not a release-note bot. A change earns
attention when it alters an operating decision, the durable architecture around
an agent, or the amount and quality of human judgment required to produce a
verified outcome.

Accurate provider coverage is the first obligation. Frontier's larger editorial
ambition is to use that record to test a living, increasingly precise account of
how the Bitter Lesson and Amdahl's law apply to building software and companies
in the AI age.

## The lens

Bitter Frontier is grounded in two constraints.

The [Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)
says that general methods which improve through computation, learning, and
search repeatedly overtake systems built from handcrafted domain knowledge. The
business consequence is to avoid building a durable moat around something a
general model or provider harness is temporarily bad at.

[Amdahl's law](https://doi.org/10.1145/1465482.1465560) says that accelerating
one part of a fixed workload cannot overcome the fraction that remains serial.
For an agent-operated company, scarce human attention is the serial resource.
Faster artifact production is not useful when review, coordination, deployment,
support, and learning still queue behind the same people.

Together they produce the publication's governing question:

> What did general agents just make cheaper, which part of the end-to-end system
> can they now operate, and where did the human attention bottleneck move?

[THESIS.md](./THESIS.md) gives the complete company and editorial thesis,
including the safeguards that keep it from becoming a predetermined conclusion.

## Why you can trust it

Three non-negotiable rules govern the record.

**No claim without a receipt.** Every statement of fact links to a primary
source: a changelog entry, commit, release, pull request, official document, or
reproducible observation. If a reader cannot open it and check it, it does not
ship.

**No signal without a consequence.** A change becomes a signal only when it can
change what someone should stop building, start delegating, upgrade, re-audit,
try, watch, or ignore. Agent activity is not the unit of value. Verified progress
per unit of human attention is.

**Released is not merged.** A fix on a default branch is not a fix in the
release an operator runs. Security-relevant changes carry an explicit channel:
tagged release, preview or beta, or main and unreleased.

The public corrections ledger records errors rather than laundering them out of
the history. The run artifacts show what was read, what became a finding, what
earned attention as a signal, and what the review rejected.

## One signal, start to finish

Every accepted signal should answer a compact decision packet:

1. What changed?
2. Who is affected?
3. Which versions and channels contain the change or fix?
4. What authority, exposure, or workflow moved?
5. What should the operator do or verify?
6. What will that action cost in attention, compatibility, or capability?
7. What remains uncertain?
8. Which cross-project precedent changes the interpretation, if any?

The public prose leads with those answers. The schemas, findings, and source
contracts remain behind the glass for readers who want to audit the judgment.

## Who makes it

Bitter Frontier is published by [Bitter](https://bitter.sh), which provides a
harness-agnostic operating environment for coding agents. Bitter's founder,
Michael Ruescher, previously built a [long-horizon agent at Blueshift with
roughly 90 tools, deliberate compaction, and paged tool
access](https://blueshift.com/blog/phasehandoff-long-horizon-agents/). That work
led to the layer decision behind Bitter: the company is betting that provider
harnesses should remain replaceable while the operating environment and
accumulated company state stay durable.

Frontier is the upstream intelligence function that follows from that decision.
It watches the provider harnesses Bitter deliberately does not try to replace.

Bitter is disclosed as the publisher and kept out of the analysis. The
publication must remain useful to a reader who never becomes a customer. The
philosophy determines which questions Frontier asks, not which answers it is
allowed to publish.

## What it covers

The active watchlist is deliberately bounded because every source is a recurring
research commitment. Each source contract defines the official surfaces we
watch, the evidence we accept, and the evidence we refuse. Dated profiles state
the ordinary evidence floor for their claims.

The current watchlist lives in [`sources/index.yml`](./sources/index.yml). The
contracts themselves live in [`sources/`](./sources/). Those files, not a copied
provider count in this README, are the source of truth.

Coverage follows three durable lanes:

- **Control plane:** authority, permissions, budgets, approval, delegation, and
  the human decisions a system preserves or exhausts.
- **Runtime:** execution, tools, sandboxes, persistence, recovery, compaction,
  and the fraction of real work an agent can complete.
- **Platform:** deployment, observability, identity, billing, support,
  distribution, and the operating loop around the agent.

These lanes organize the evidence. Each digest or brief still makes one argument.

## How to read it

Start with the latest published digest or special brief. The Operator Brief gives
the thesis and the few upgrade, check, try, watch, and uncertainty decisions that
earned attention. The body makes the cross-project argument.

Use the other objects according to the job:

- [`content/digests/`](./content/digests/) contains weekly digests and clearly
  labeled special briefs.
- [`content/profiles/`](./content/profiles/) answers what each provider is, as of
  the date stated on the profile.
- Signal pages hold atomic, citeable operator judgments.
- [`runs/`](./runs/) contains the reproducible research trail.
- [`content/corrections.md`](./content/corrections.md) records corrections.
- [METHOD.md](./METHOD.md) defines the rules and object grammar.

The chain is `source -> finding -> signal -> digest -> profile`. Most findings
never become signals. The gap is the editing, and it protects reader attention.

## Contributing

Corrections, coverage gaps, new-source proposals, and mechanical fixes are
welcome. The receipts are open to everyone. Editorial judgment remains with the
maintainers so the publication keeps a coherent, accountable voice.

Read [THESIS.md](./THESIS.md), [METHOD.md](./METHOD.md),
[EDITORIAL.md](./EDITORIAL.md), and [CONTRIBUTING.md](./CONTRIBUTING.md) before
opening a pull request.
