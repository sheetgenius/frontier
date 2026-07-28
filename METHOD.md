# How Bitter Frontier works

Bitter Frontier is a receipted editorial publication on coding agents and the
harnesses around them. It asks what general agents just made possible, what
became the new bottleneck, and where operators should spend scarce human
attention.

[THESIS.md](./THESIS.md) explains why the publication exists and the two
constraints behind its lens: the
[Bitter Lesson](https://frontier.bitter.sh/bitter-lesson/) and
[Amdahl's law](https://frontier.bitter.sh/amdahls-law/). This document defines
how Frontier turns that lens into a trustworthy record.

## The lens is a question, not a verdict

Frontier expects general models and provider harnesses to absorb more specialized
software work. It also expects human attention to remain the scarce serial
resource in a company whose agents can produce work in parallel.

Those are operating assumptions, not conclusions the reporting is required to
confirm. A specialized method may remain valuable. More autonomy may reduce
throughput. A human approval gate may be the correct accountability boundary.
The receipt decides what Frontier can say.

Every material change is investigated at three altitudes:

1. **The event:** what changed, for whom, and in which release or channel?
2. **The system:** what general capability, durable operating layer, or
   end-to-end workflow moved?
3. **The attention cost:** what human judgment did it save, create, concentrate,
   or exhaust?

Cross-provider comparison is part of the system read. It appears only when a
precedent or divergence changes the meaning of the event. Similar feature names
do not establish similar defaults, enforcement, authority, release status, or
operator cost.

## The three rules

Three commitments shape everything published here.

- **No claim without a receipt.** Every statement of fact links to a primary
  source that a reader can open and check: a changelog entry, commit, release,
  pull request, official document, canonical advisory, or reproducible local
  observation. The link sits on the claim-bearing words. A moving official page
  may support a current-posture claim when the source contract accepts docs, but
  it cannot prove what that page said in a past window. A social summary and
  model memory do not become evidence because they are convenient.
- **No signal without a consequence.** A change earns scarce reader attention
  only if it can change what someone should stop building, start delegating,
  upgrade, re-audit, try, watch, or ignore. Consequence is read at two levels:
  the operator's immediate decision and the larger shift in what agents can
  operate or what humans must still decide.
- **Released is not merged.** A fix on a default branch is not a fix in the
  binary an operator runs. Every security-relevant change states its release
  channel. The gap between merged and released is where a reader gets a false
  sense of safety.

These rules are independent of the company thesis. A claim that flatters Bitter
faces the same evidence bar as one that contradicts it.

## The object grammar

The publication is file-backed and built from small reviewable units. The
distinctions between them are load-bearing.

- **Source contract** names where Frontier watches a project, what counts as
  evidence there, and what is refused. The dated profile states its ordinary
  evidence floor.
- **Finding** is one source-backed observation of what changed. Most findings
  never go further.
- **Signal** is a finding accepted because it can change an operator's decision
  or the architecture around agent work. Signals are deliberately rarer than
  findings. The gap is the editing and protects human attention.
- **Digest** is the editorial synthesis. It makes one cross-project argument,
  then states what to upgrade or check, try, watch, ignore, and leave uncertain.
- **Profile** answers "what is this tool as of the stated date." It changes when
  the provider's material posture changes. A profile must never imply currency
  beyond the date and receipts it displays.
- **Run artifact** is the reproducible record of a research cycle: what was read,
  what was found, what was accepted, how receipts and channels were verified,
  and what remained uncertain.
- **Social claim** is something a person said in public, captured with the post's
  URL and date. It is evidence of a statement and never, on its own, evidence of
  the thing stated. Every social claim carries a verification status against the
  primary record.
- **Person** answers "who is arguing this, and what did they actually say." Like a
  profile it is a dated posture; unlike a profile its subject is a human being,
  which makes the restraints tighter rather than looser.

The public reader should benefit from this grammar without needing to learn it.
Findings, schemas, and run vocabulary stay behind the glass until a reader asks
to audit the work.

## The capability lane

The release-tracking apparatus is a defect detector. Changelogs, advisory
databases and channel comparisons emit a record when something went wrong and
stay silent when something went right, so a cycle that only runs those lanes can
only produce a defect log.

The capability lane exists to ask the other question, on the same evidence
standard:

- What became possible this window that was not possible before it?
- What scaffolding got deleted, and what does its removal say about what the
  model can now be trusted to do unassisted?
- What did somebody build, or ship, or measure, that is worth an operator's
  attention?
- Which constraint stopped being the binding one?

The receipts are the same kind: a changelog entry removing a workaround, a
release that deletes a setting rather than adding one, a maintainer describing
what they stopped needing, a practitioner who measured their own system rather
than repeating a number. A vendor's enthusiasm is not a capability, and a
capability claim is adjudicated against the primary record exactly like a defect
claim.

The lane has a specific failure mode worth naming: it is easy to fill with
vendor announcements, which are marketing with a version number attached. The
test is whether an operator could act differently on Monday because of it.

## The conversation layer

Frontier sweeps public developer discussion across the watchlist each cycle,
because the alternative is what most operators do now: read a timeline, hope the
useful thing crosses it, and never learn what was missed. A systematic sweep
replaces that lottery, and it does so under one rule that does not bend.

Harvest is not capture. The discovery lane returns posts that are real but not
exact: in a 108-post run it silently expanded `t.co` links to their targets,
dropped trailing hashtags, and truncated long posts. None of that is fabrication
and none of it is visible without a second look, which is what makes it
dangerous -- a quotation assembled from harvest output can be wrong in the
characters while being right in the substance.

So nothing is quoted from a harvest. Every post that reaches a page is re-fetched
by URL in an independent pass that is given no expected text to anchor on, and
that second copy is the one stored as `verbatim`. Posts that cannot be re-fetched
are dropped rather than quoted. Of 108 posts checked this way, 108 were real and
9 differed from the harvest -- all of them in the direction above.

A sweep that reaches every project is the intent, not a standing fact. What any
given cycle actually covered is computed from the run by `sweepCoverage()` and
rendered wherever the publication states it. This document does not carry a
number, because a number in a doctrine file is a number nobody updates.

> A post is a receipt for what was said. It is never a receipt for what is true.

That distinction is what lets a source-cited publication report rumor, argument,
complaint, and gossip without lowering its evidence bar. Those are not held to a
weaker standard. They are a different kind of object. A post fully establishes
that an account said something on a date. It establishes nothing about the
software, so the statement may be reported with confidence as a statement while
the claim underneath it stays unverified until a primary source settles it.

Where the conversation and the receipts disagree, that gap is usually the story,
and it is more informative than either half alone.

Four commitments govern the lane:

- Every social claim carries a public post URL, a full ISO date, and a
  verification status. Product, version, and capability claims start unverified
  and must be cleared against a primary source before entering the record.
- Claims about a person's conduct, motives, or character are not published
  without a direct primary receipt for the exact claim. Criticism targets
  systems, defaults, and institutions rather than individuals.
- Any cluster of user pain or public argument gets a counterweight search before
  it is written up: maintainer replies, subsequent fixes, disconfirming posts. A
  one-sided pile-on is not reporting.
- Rendered posts are static, built from repository data, and make no request to
  any platform when a reader loads the page.

The lane is worth running for what it is, not for what it was assumed to be. It
does not reliably run ahead of changelogs. What it does supply is the only
running summary when a vendor stops publishing one, misreadings that diagnose
what changed underneath users, and measurable silence: because the sweep is
systematic, the absence of a topic is itself a finding.

## The minimum signal packet

Every accepted signal must let a cold-context reader answer:

1. What changed?
2. Who is affected?
3. Which versions and channels contain the change or fix?
4. What authority, exposure, or workflow moved?
5. What exact action or verification follows?
6. What does that action cost in attention, compatibility, money, or capability?
7. What remains uncertain?
8. Which cross-project precedent changes the interpretation, if any?

"Re-audit" and "watch" are incomplete unless the signal names what to inspect or
what evidence would settle the question. A CVE identifier is not a consequence;
the reader should not have to look it up to learn what the vulnerability allows.

The unit of value is not agent activity. It is verified progress per unit of
scarce human attention. A feature that produces ten times more work and a
hundred times more review may be a regression at the system level.

Trying or replacing a provider is only one kind of consequence. A signal may
instead change company architecture, a human escalation policy, what gets
measured, which layer remains deliberately human, or what a builder should stop
owning. The watchlist supplies evidence. The publication's larger job is to make
the Bitter Lesson and Amdahl's law actionable.

## The synthesis standard

A digest is not the union of its findings. It is the reading across them.

The thesis should identify a shared movement or meaningful divergence that no
single project release note can supply. Useful synthesis often asks:

- Which provider already tried this, and what happened next?
- Are two projects solving the same bottleneck or different local tasks?
- Did a change expand the agent-operable portion of the full workflow?
- Where did coordination, verification, approval, or exception handling move?
- Which human gate is deliberate, and which is accidental serial work?
- Did the improvement reach stable, preview, cloud-only, or only a branch?
- What handcrafted layer became less defensible because a general capability
  moved upstream?

Comparison must earn its space. Frontier does not force a reference to another
project into every project note. It compares only when the comparison changes
the operator's model or next decision.

The weekly digest follows a fixed reader shape:

1. a standfirst that states the thesis in no more than three sentences;
2. an Operator Brief with upgrade or check, try, watch, ignore, and uncertainty;
3. a concrete lede whose cost is visible inside the case;
4. the cross-project argument;
5. a closing verdict that resolves the tension in the title.

A weekly digest advances a declared weekly window. Shorter research cycles may
produce findings, signals, and profile changes. When a short window merits public
synthesis, label it a **Bitter Frontier Brief** in its metadata and rendered
surface. A one-day window must not masquerade as the regular weekly edition.

## The voice

Source-backed, operator-first, skeptical, and clear about what it does not know.
Not a release-note bot and not a vendor blog. When a change is a marketing claim
dressed as news, Frontier says so. When evidence cannot settle a question, it
states exactly what is unverified and what would settle it.

Pleasant human reading is part of the method, not decoration. The publication
absorbs technical and procedural complexity so the reader does not have to.

- Lead with what happened and why a person should care.
- Prefer "in the release you run" to "channel resolution."
- Prefer "the rule did not block the command" to "the authority layer failed to
  bind" when the plainer sentence carries the same precision.
- Introduce internal terminology only when it buys real understanding.
- Keep each paragraph at one altitude when possible: event, system, or
  consequence.
- Read every public artifact as if the reader arrived from search and knows none
  of the publication's history.
- Use color, wit, analogy, and colloquial language when they sharpen the mechanism
  or consequence. Accuracy does not require a bloodless voice.

The house style uses ASCII punctuation, no em dashes, no hype, and no sneer.
Severity lands in flat language and on the same paragraph as its receipt.

**Bitter Lesson Maxing** and **Amdahl Maxing** are earned public terms, not
backstage jargon. Define each in plain language on first use. The terms should
create curiosity and compress a real argument; they should never substitute for
explaining what changed in the case at hand.

`Bitter-pilled engineering` may be used colloquially for a concrete design that
builds with the slope. It is not a schema field or a label to apply by reflex.

Link the first substantive mention to the canonical explainer:
`/bitter-lesson/` or `/amdahls-law/`. Those pages are living interpretations and
must be revised when the evidence changes the read. The canonical explainer
itself is the obvious exception; repository documents use absolute site URLs.

## How to read the publication

Start with the latest digest. The Operator Brief is the scarce-attention layer;
read it in a minute and go deeper only where it touches your stack.

Follow a signal for the atomic decision packet and primary receipts. Read a
profile for a provider's dated posture. Open the run artifact only when you want
to inspect how the research was produced.

## Who makes it

Bitter Frontier is edited by Michael Ruescher and published by
[Bitter](https://bitter.sh), which builds a harness-agnostic operating
environment for coding agents. Michael previously built a [long-horizon agent at
Blueshift](https://blueshift.com/blog/phasehandoff-long-horizon-agents/), work
that led to Bitter's decision not to compete with provider harnesses at the
reasoning-loop layer.

Bitter works in this space, which is why it reads the field through this lens.
That relationship is disclosed. Bitter's own product is not an analytic subject,
provider ranking is not bent toward it, and a reader should receive full value
without becoming a customer.

## Corrections and contributions

Corrections and coverage gaps are welcome. The receipts are open to everyone.
The editorial judgment -- what becomes a signal, which comparison matters, and
what the week's synthesis says -- stays with the maintainers.

See [CONTRIBUTING.md](./CONTRIBUTING.md).
