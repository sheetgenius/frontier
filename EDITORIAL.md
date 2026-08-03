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

## The slop test

A per-sentence check, named so the cycle skill and any editor can invoke it by
name. Run it in the language pass. A sentence dies if:

- it could appear in an article on any other topic -- no name, number, version,
  or date anywhere in it;
- it hedges both directions and lands nowhere;
- it restates the sentence before it in different words;
- it is the third item in a list of three and the third is filler;
- deleting it changes nothing;
- it contains any of: landscape, testament, crucial, robust, delve, underscores,
  highlights the importance, it's worth noting, in today's.

A section dies if you cannot say in one sentence what it is for. Try deleting
each one outright; if the piece survives, it stays deleted.

Then read every paragraph aloud. Machine prose has flat rhythm and uniform
paragraph length; vary it deliberately. A three-word paragraph after a long one
is a tool.

### Ablate self-defence

The reflex this catches is writing for an auditor rather than a reader. Cut:

- methods appendices inside an issue -- calibration lives in `METHOD.md`;
- provenance stated before a finding, rather than the finding;
- take-backs, where a positive result is retracted in the same paragraph that
  reports it;
- explaining a quotation immediately after quoting it (if it needs the gloss, it
  was the wrong quotation);
- explaining a term of art to an audience that uses it daily;
- more than one evidence-quality clause per issue. Keep the one that changes how
  much weight a reader should give a claim; cut the rest.

Removing penance is not removing doubt. A publication that hedges nothing is its
own kind of slop.

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

## How the field actually writes

Read from a verified corpus of 42 posts harvested 2026-07-28 across the
watchlist and its commentators. Every quotation below was independently
re-fetched before being reproduced here. This section exists because a
publication about a community that does not sound like that community reads
as an outsider describing it, however good the reporting is.

**They open at the point.** No warm-up clause, no "I've been thinking about."
Robert Nowell, on the two products' bypass flags: `codex's fully permissioned
mode being --yolo while claude code's is --dangerously-skip-permissions could
not be more on brand for both products.` The observation is the first thing in
the sentence.

**The literal invocation is the evidence.** They quote the flag, not a
description of the flag: `claude --permission-mode bypassPermissions`,
`codex --yolo`, `Read(/)`, `claude -p`, `--allowedTools`. Naming the command
is how you show you have run it. Prefer the string an operator would type over
our paraphrase of what it does.

**Confession is credibility, and it is one line long.** This is the most
useful thing in the corpus. rcmisk: `the honest reason i kept approving every
agent action by hand: i had no boundary, so every click was the boundary.`
ashkmb_tech opens with `I gave an AI agent passwordless sudo on a box in my
house, on purpose.` The admission comes first, flat, unhedged, and is never
apologised for. Our own error notes should sound like this -- "We filed it as
a feature. It was a fix." -- and not like a disclosure statement.

**Sections end on a couplet.** Two short parallel clauses, the second
correcting or completing the first. It is the single most repeated structure
in the corpus. Pillar Security: `The allowlist trusted a name. The risk was
always in the invocation.` omidsaffari: `A sandbox is useful containment. The
application still owns permission.` rcmisk: `safety is a wall, not a habit.`
We already do this occasionally by instinct ("An unenforced control emits
nothing"). Do it on purpose, at the ends of sections.

**Diagnose sequencing, not character.** rcmisk again: `wrong order. put the os
sandbox first, then auto approve inside it.` The failure is that two correct
things happened in the wrong order. That is nearly always the more accurate
and more useful reading, and it is the one this field reaches for.

**Numbers are exact or absent.** CVSS 8.6. v0.95.0. 40 CLI changes. Eleven
agents, ten bypassed. Nobody writes "several" or "a number of."

**Frustration is specific and unhedged.** _xjdr, to a vendor, in lowercase:
`creating a new, empty , read-only .git/ dir on every sandbox op breaks an
unbelievable amount of tooling. please dont do that . that is bad`. "That is
bad" is a complete verdict. We are allowed to reach a verdict.

**Humour is deadpan and comes from stating the absurd thing plainly.** Never a
constructed joke. maxi, in German: `wie soll man noch zeit zum kochen finden
wenn man den ganzen tag claude code permissions granten muss` -- how are you
supposed to find time to cook when you spend all day granting Claude Code
permissions.

**What they treat as settled, and we should stop explaining:** that most
people bypass the prompts; that the sandbox, not the prompt, is the boundary;
that the agent will eventually do something stupid. Explaining these reads as
condescension. Advisory locking does not need defining for this audience.

**The conversation is not in English.** Japanese, Arabic, German, and Chinese
posts all appear in a 42-post sample. A sweep that only reads English is
reading a fraction.

### What this does not license

Native is not imitation. A 3,000-word argument written in tweet register is
exhausting and reads as costume. Take the directness, the exact command
strings, the flat verdicts, and the closing couplets. Leave the lowercase
affectation, the fragments for their own sake, the in-group signalling, and
the dunking. The test is whether a sentence would embarrass the editor in a
year.

## Both halves of the frontier

A frontier is dangerous and it is also the place worth going. An issue that
carries only the danger is not the rigorous version of this publication. It is
the incomplete one.

We drifted. In the 2026-07-02 window, sixteen of the eighteen posts we quoted
were exhibits in a prosecution -- including posts whose authors were excited,
which we repurposed as evidence against them. We harvested 108 posts, 54 of them
people describing things they had built, and published none of it. We quoted a
practitioner complaining that the timeline is all complaining, and did not notice
he was describing us. Meanwhile the best story of the window sat unwritten: a
vendor deleting scaffolding because the model had outgrown it, which is this
publication's founding thesis happening in public, with receipts.

The cause is structural, not tonal, which is why it cannot be fixed by softening
prose. Our instrument is a defect detector. Release channels, changelogs and
advisory databases only emit when something went wrong, so an editorial layer
that faithfully reports what the instrument found will publish a defect log
forever. **An unenforced control emits nothing** is our own sentence about
selection bias in counting. It applies to what we choose to write about too.

The bar:

- **Every issue carries both halves, on the same receipts.** What became
  possible, and what stopped holding. If a cycle genuinely produced only one,
  say so and show what you looked for.
- **Report what became possible, not what got cheaper.** Cheaper connotes
  devaluation. The claim is that something is now within reach that was not, and
  that is the more interesting and more accurate framing.
- **A positive finding needs a receipt like any other.** Enthusiasm is not
  evidence and a vendor's excitement is not a capability. Adjudicate the good
  news against the primary record exactly as hard.
- **Do not title an issue like an indictment.** One gotcha title is a finding.
  Four consecutive ones are a posture, and readers correctly read a posture as
  bias. Title the finding, not the verdict on the vendor.
- **Quote builders, not only complainants.** If every voice in an issue is
  unhappy, the sweep was read selectively, because half the conversation is
  people shipping things.

The test: would somebody working at the frontier recognise their own week in
this, including the parts that went well? If the honest answer is that they would
recognise only their worst day, the issue is not finished.

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

## The shape of an issue

Sections run in this order, and the order is the argument:

    lede (one receipted case)
    -> operator brief (renders from frontmatter)
    -> argument sections
    -> reference: breaking changes / security advisories
    -> provider notes
    -> closing

Two rules do the work. **Reference material never opens an issue** -- the brief
already carries what an operator must act on today, so an advisory list at the
top delays the argument to say a second time what the page has said once.
**Reference material never closes one either.** The last section is the one a
reader leaves with; ending on a vendor list means ending on no judgment at all.
`check-integrity.mjs` fails the build on the second rule, because it regressed
silently once: cutting the brief-duplicating sections left provider notes
terminal in seven of eleven issues and nothing complained.

Provider notes earn prose by carrying judgment. Where the entry would only
enumerate what the changelog already says, it is one line -- the features are
findings records, and the digest links its full evidence set.

Register is uniform: section headings are declarative clauses in sentence case
("The authority that didn't bind"), never taxonomy nouns ("Control Plane") and
never Title Case. Inside a section, a labelled entry is a **bold run-in**, not
an `h3`.

Paragraphs run about 40 to 70 words. Past 130 the prose reads as a wall, and
uniform paragraph length is the most reliable tell of machine writing. Vary it
deliberately; a three-word paragraph after a long one is a tool.

## The profile bar

A profile is a dated operator posture, not a cumulative notebook.

It should make use, avoidance, authority, current channel, important open
questions, and the last material change easy to find. It must not imply freshness
beyond its displayed date. When the prose grows, old facts should be retired or
collapsed rather than allowed to bury the current read.

## The person bar

A person page is a dated posture about what someone said. Its subject is a human
being, which makes every restraint tighter than on a profile rather than looser.

Write one only when a person's public work is genuinely shaping how operators
build, and when the receipts support a page rather than a paragraph. One good
person page is worth more than three thin ones, and a thin one is worse than
none, because it implies a significance the evidence does not carry.

The bar:

- **Every claim is a statement, attributed and dated.** Link the post, give the
  date, and quote or summarize faithfully. A person's claim about their own
  software is not evidence about that software. Where a primary source checks it,
  the check sits beside it and the primary source wins.
- **Explain why this person, in the piece itself.** A reader should finish the
  first section knowing what makes the subject worth tracking. If that cannot be
  said plainly, the page should not exist.
- **Nothing about conduct, motive, or character.** Not without a direct primary
  receipt for the exact claim, which is a bar gossip about people almost never
  clears. Absent that, we do not speculate about why someone did something, and
  we do not characterize them.
- **Qualify narrowly and factually.** When a person's statement does not survive
  contact with a receipt, say exactly what the receipt shows and stop there.
  Bound the observation to the document or artifact that supports it, and decline
  the adjacent questions we cannot settle.
- **Steelman before you qualify.** Give the strongest version of what the person
  is arguing before naming where the evidence diverges. A page that only
  catalogues someone's errors is not reporting; it is a prosecution.
- **The subject can correct it.** Person pages carry a standing correction path
  and it is honored quickly. See [CONTRIBUTING.md](./CONTRIBUTING.md).

The test: would you be comfortable if the subject read the page, and would they
recognize their own position in it, including the parts they would dispute?

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
