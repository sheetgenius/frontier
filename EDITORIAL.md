# The Bitter Frontier editorial standard

[THESIS.md](./THESIS.md) defines why Bitter Frontier exists.
[METHOD.md](./METHOD.md) defines the evidence and publication contract. This
document defines what a public artifact must do for a human reader.

[docs/editorial-voice-research.md](./docs/editorial-voice-research.md) records
the craft study behind parts of this standard. It is research, not a second
authority.

The publication is featured on the
[SheetGenius company page](https://company.sheetgenius.com/) and is part of
Bitter's public credibility surface. A first-time visitor may use one page to
judge the standards of the whole company. Every artifact should therefore be
simple on first contact and impressively deep only when the reader pulls on the
receipts.

## The job

Frontier absorbs research complexity and returns a decision-bearing read.

The reader should not have to inspect every upstream repository, learn the
publication's schemas, or remember what another provider shipped three months
ago. Frontier does that work and gives the reader:

1. a concrete event;
2. the nearest precedent or meaningful divergence;
3. the operator consequence;
4. the larger system interpretation;
5. the receipt and remaining uncertainty.

The first editorial obligation is accurate, useful reporting. The highest-order
ambition is to use that record to make the
[Bitter Lesson](https://frontier.bitter.sh/bitter-lesson/) and
[Amdahl's law](https://frontier.bitter.sh/amdahls-law/) legible,
understandable, and actionable for people building software and companies in
the AI age. Provider changes are evidence for that work. They are not the whole
definition of actionability.

The unit of value is verified progress per unit of scarce human attention. The
publication should consume less attention than it saves.

An actionable conclusion may concern provider choice, but it may also change
what a reader builds, delegates, measures, batches, verifies, keeps human, or
stops doing. "Try this harness" is one action among many.

## Name the lens clearly

**Bitter Lesson Maxing** means building where improving general agents compound
your advantage, not where their next release erases it.

**Amdahl Maxing** means designing the enterprise so scarce human attention is
spent on the decisions where it has the highest marginal value.

These are public concepts and may appear in the homepage, About page, thesis
page, and editorials when they materially clarify the case. Define them in plain
language on first use. Never use either phrase as a knowing wink or a substitute
for analysis.

`Bitter-pilled engineering` is acceptable as a colloquial description of a
specific design decision that builds with the slope. It is color, not a formal
category. The case must earn the phrase before the phrase appears.

In every public artifact except the canonical explainer itself, the first
substantive mention of Bitter Lesson Maxing links to `/bitter-lesson/`, and the
first substantive mention of Amdahl Maxing or Amdahl's law links to
`/amdahls-law/`. Repository authority documents use the absolute site URLs. A
reader arriving from search should be one click from the canonical explanation.

## The premium editorial unit

A release note can say that one provider added a feature. Frontier should be
able to say what that feature means because it remembers the field.

The premium unit is:

> Event + precedent or divergence + operator consequence.

The comparison should answer a real question. Did another project solve the same
problem earlier? Is the shared label hiding different defaults or enforcement?
Did one fix reach stable while another remains on a branch? Did one design reduce
human review while the other only create more work to inspect?

There are three useful forms of synthesis:

- **Concurrent pattern:** several providers independently move on the same
  problem inside the window.
- **Historical precedent:** a current change becomes legible because another
  provider tried it earlier and the record shows what followed.
- **Structural divergence:** providers use similar language while putting
  authority, state, cost, or human attention in materially different places.

Comparison must earn its place. Do not force a second provider into a paragraph
when it does not change the interpretation.

## The decision packet

Every signal and every Operator Brief entry should make the following scannable:

- affected provider, audience, versions, and channel;
- the exact change;
- the authority, exposure, workflow, or bottleneck that moved;
- the next action or verification;
- the human attention saved or newly required;
- the cost in compatibility, money, capability, or review;
- residual uncertainty;
- the comparison that changes the read, if one exists.

"Re-audit" is not an action until the prose names what to inspect. "Watch" is not
an action until it names the evidence that would settle the question. "Upgrade"
is not complete until it names the fixed release and the trade that may change.

## The three editorial passes

### 1. Story pass

- Does the opening contain a concrete event, person, command, failure, or
  decision?
- Is the cost visible inside the case?
- Is the title an argument a reader could dispute?
- Does the piece make one argument rather than enumerate the watchlist?
- Does the ending resolve the tension introduced by the title?

### 2. Utility pass

- Can the affected reader identify their action in under a minute?
- Does the piece distinguish stable, preview, cloud-only, and unreleased states?
- Does it identify who owns the next decision?
- Does it say what human attention the change saves or consumes?
- Does it distinguish a local speedup from an end-to-end improvement?
- Does uncertainty state exactly what is unknown and what would settle it?

### 3. Language pass

- Can a technically informed reader understand the piece without knowing the
  repository taxonomy?
- Does each unfamiliar term buy more precision than it costs in attention?
- Can a shorter concrete sentence replace an abstraction?
- Does every paragraph stay at one main altitude: event, system, or consequence?
- Would the prose sound natural read aloud?
- Can a reader arriving from search understand every heading without prior
  installment context?

## Reader vocabulary and backstage vocabulary

Public prose normally says:

- "in the release you run," not "channel resolution";
- "the rule did not block the command," not "the authority layer failed to
  bind";
- "we did not elevate this change," or simply omits it, rather than "not
  promoted";
- "we checked the source," not "adversarial verify stage";
- "earlier issue" or a linked title, not "parent window carry-forward."

The terms `finding_id`, `harvest`, `promotion`, `source contract`, schema names,
and run paths belong in methodological pages and research artifacts. They do not
belong in a cold reader's way.

Some house terms are earned and may stay: receipt, signal, watchlist, stable,
preview, beta, main, release, and channel. Define any term whose ordinary meaning
would mislead.

## Color is part of the voice

Frontier should sound like a technically serious person who has seen the failure
up close, not an institution sanding every sentence flat. Color, wit, analogy,
rhythm, and colloquial language are welcome when they make the mechanism easier
to see or the consequence harder to forget.

- Prefer a concrete image such as "the human becomes the message queue" when it
  compresses the actual system behavior.
- Let the writer react to an absurd default, a quiet failure, or a genuinely good
  design. Skepticism does not require emotional vacancy.
- Vary sentence length. A short sentence should land a fact or turn the argument,
  not merely imitate importance.
- Use one memorable phrase where it earns its keep. Do not manufacture a row of
  aphorisms.
- Keep personality outside the receipt. The source proves the event; the writer
  makes its meaning legible.

Color must never inflate certainty, invent motive, conceal a caveat, or turn a
vendor into a caricature. The test is whether the sentence becomes less precise
when the color is removed. If not, the color is decoration and should probably go.

## Severity and skepticism

Write like a skeptical engineer, not a press release and not a sneering critic.

- Put the receipt on the claim-bearing words.
- Let a severe fact land in a flat sentence.
- Concede real progress before naming the boundary it does not cover.
- Translate vendor language into configuration-altitude reality.
- State inference as inference.
- Reserve alarm language for a confirmed mechanism and operator impact.
- Correct the record without turning correction into a performance.

The house uses ASCII punctuation, no em dashes, no hype, and no emoji in
published artifacts.

## The digest bar

A strong digest has:

1. a thesis of no more than three sentences;
2. an Operator Brief that can stand alone;
3. a lede built around one receipted case;
4. one cross-project argument rather than a project catalog;
5. project notes only where Frontier has judgment to add;
6. one home for each fact, with links instead of repetition;
7. a closing verdict;
8. no repeated template refrain borrowed from recent issues.

The digest is an editorial, not a dump of everything the research found.

## The profile bar

A profile is a dated operator posture, not a cumulative notebook.

It should make use, avoidance, authority, current channel, important open
questions, and the last material change easy to find. It must not imply freshness
beyond its displayed date. When the prose grows, old facts should be retired or
collapsed rather than allowed to bury the current read.

## The trust firewall

The Bitter Lesson and Amdahl's law determine questions, not conclusions. A good
piece may show that a specialized method remains useful, that autonomy made the
whole system slower, or that a human gate is the correct design.

Bitter is the disclosed publisher. Its product stays outside the analysis.
Commercial attribution and any invitation to learn about Bitter are visually and
editorially separate from the reported argument. The publication must provide
complete value to a reader who never becomes a customer.

## A living editorial doctrine

The thesis and this standard are maintained objects. Models improve, provider
harnesses absorb new layers, organizational bottlenecks move, and Bitter learns
from operating real software. Frontier should revise its concepts when the
evidence changes the read.

Material refinements must be explicit in repository history. The goal is not to
protect a slogan. It is to make the concepts more precise and more useful over
time.

## Final cold-read test

Before publishing, ask:

> If this is the only SheetGenius publication someone reads, what do they
> conclude about the company's judgment, care, and respect for their attention?

Then read the artifact once without opening a receipt and once as a skeptic who
opens every claim-bearing link. It must work both ways.
