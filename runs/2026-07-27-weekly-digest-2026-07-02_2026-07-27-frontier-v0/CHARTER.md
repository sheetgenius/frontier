# Session charter: the X-native mega-digest

Read this first, every time. It is the standing brief for this session. When a
turn ends and another begins, resume from here rather than re-deciding the
mission.

## The mission

One digest covering **2026-07-02 to 2026-07-27**, the longest window this
publication has ever run, plus the overhaul that makes Bitter Frontier X-native.
The publication has shipped nothing since July 2. Ending that is the point of the
session. Everything else is subordinate.

Two deliverables, both required:

1. **The mega-digest.** 25 days, 14 watched sources, one cross-provider argument.
   Not a catalog. The length is the opportunity: patterns visible over 25 days
   that a 7-day window cannot show, including which "coming soon" actually
   shipped and whose main-unreleased fix is still unreleased almost a month later.
2. **The X-native overhaul.** The conversation layer becomes a first-class part
   of the publication, designed properly, not bolted on.

## The goal, and the condition that ends it

**GOAL: publish the 2026-07-02..2026-07-27 mega-digest and the X-native
overhaul, live on frontier.bitter.sh.**

That sentence is the stop condition. Not "make progress," not "do some research."
The session ends when every line below is true, and not before:

- [ ] `content/digests/2026-07-02_2026-07-27-*.md` exists, with an operator brief,
      one cross-provider argument, and a closing verdict that resolves its title.
- [ ] Every claim in it carries a primary-source receipt on the claim-bearing words.
- [ ] Every social claim carries a post URL, an ISO date, and a resolved
      `crosscheck_status`. No product or version claim rides on a post alone.
- [ ] Signals are curated and rarer than findings.
- [ ] The X-native presentation is designed and rendering: post-shaped cards,
      correct light and dark treatment, readable at every width, self-hosted from
      repo data with no runtime dependency on X.
- [ ] `node site/scripts/check-integrity.mjs` clean.
- [ ] `npm --prefix site run build` clean.
- [ ] `content/digests/index.md` updated.
- [ ] Merged to `main`, pushed, and verified live on frontier.bitter.sh.

Publishing is authorized and expected. The editor's standing instruction: this
publication is primarily for our own consumption, open and public as part of the
funnel, with low stakes on shipping. Do not hold back, do not queue a merge for
approval, do not treat publishing as a gate. Merge and push whenever the tree is
green. Validate before pushing (`main` auto-deploys), but validation is the only
precondition.

## Anti-stall rules

The failure mode of a long autonomous session is not crashing. It is quietly
deciding it is finished when it is not. Guard against that:

1. **Never end a turn in an undecided state.** Either the stop condition above is
   fully met, or the loop is re-armed. There is no third option.
2. **Route around failures, do not halt on them.** A refused API, a dead agent, a
   403 from the Grok lane, a source that will not yield: record the gap in
   `JOURNAL.md`, mark it degraded, and move to the next incomplete step. A missing
   source is a line in the digest's uncertainty section, not a reason to stop.
3. **A blocked step never blocks the session.** If something genuinely needs the
   editor, do every unblocked thing first and leave the decision queued in
   `JOURNAL.md` with the options laid out. Idling while waiting is the one
   unacceptable outcome.
4. **Partial beats pending.** Prefer a committed draft to an uncommitted perfect
   one. Every turn should leave the tree green and the work durable.
5. **Re-check the goal, not the vibe.** On re-entry, walk the checklist above
   literally. "Feels close" is not a completion criterion.
6. **Do not expand the goal.** New ideas go to `JOURNAL.md` as follow-ups. The
   session ships this digest and this overhaul. Scope growth is another way to
   never finish.

## What good looks like (the editor's own words)

> I get a lot of my alpha from X, but it is a crapshoot. I do not search for it,
> it just happens to cross my timeline. Ideally you read Frontier when a digest
> is published and get a much better sense of what is going on in the Twitterverse
> with regard to these agentic frameworks.

That is the product definition. The job is **replacing timeline serendipity with
a systematic sweep**. The reader should finish the digest confident they did not
miss the thing they would have wanted to catch. Completeness of the conversation
layer is the deliverable, not a highlight reel.

This is thesis-aligned, not a concession to it. Scrolling a timeline hoping for
alpha is textbook accidental serial work, the exact pattern Amdahl Maxing exists
to kill. Systematizing it is the publication practicing what it argues.

## The line that keeps the drama credible

Gossip, rumor, and drama are wanted. They are what bring the publication to life.
They do not get a lower evidence bar; they get **a different object**.

> A post is a receipt for **what was said**. It is never a receipt for **what is
> true**.

"@user claims Codex ships X" is fully receipted as a *statement* the moment its
URL is attached. It is not evidence that Codex ships X. Report the conversation
with total confidence and the underlying claim with exactly the confidence the
primary sources support. When those two diverge, that gap *is* the story, and it
is more interesting than either half.

Practical consequences:

- Every social claim carries its post URL, an ISO date, and a `crosscheck_status`.
- Product, version, and capability claims stay `needs_primary_crosscheck` until a
  changelog, commit, release, or docs page clears them.
- Reputational or conduct claims about named people stay journal-only unless a
  direct primary receipt supports the exact claim. Punch at systems, defaults,
  and institutions, never at hobbyists or individuals.
- User-pain and drama clusters get a counterweight search: maintainer replies,
  fixes, issue threads, disconfirming posts. A one-sided pile-on is not reporting.
- When the crowd is wrong, saying so with a receipt is the highest-value output
  the lane can produce.

## The reader test, applied to every paragraph

Why should they care, and why is it relevant? If a sentence cannot answer both,
cut it. Specifically:

- What changed, and is it in the release they run?
- What did it cost the people already running it?
- What should they do, watch, or stop believing?
- What does the conversation reveal that the changelog conceals?

## Research posture: follow curiosity, from many angles

Do not run one query per source and call it swept. Attack each source from
several directions and let interesting threads pull: maintainer intent, adoption
and migration, user pain and workarounds, benchmark and ranking discourse,
rivalry and ecosystem tension, security chatter, hiring and funding signals,
notable public exchanges. Then chase what surfaces. A lead that opens a better
question is worth more than a tidy record.

Use `ops/hermes/grok-harvest.sh harvest <source> <start> <end>` for the standard
sweep, and drive `hermes -z` directly for follow-up questions that the standard
prompt does not cover. The point is learning what happened, not filling a form.

## The bar for the X presentation

Snippets should look like posts and feel like Frontier. Genuinely designed:
tweet-shaped cards with correct light and dark treatment, real typographic care,
readable at every width, integrated with the house voice rather than pasted into
it. Static and self-hosted from repo data. No runtime dependency on X, no
external embeds, and nothing that violates the CSP.

## The loop

1. **Harvest.** Primary sources for what shipped. Hermes/Grok on X for what it
   cost and what the field is saying. Both lanes, every source.
2. **Cross-check.** Every product claim against a primary source. Record what the
   receipt does and does not support.
3. **Edit.** Findings to signals. Rarer than findings, always. This is the product.
4. **Synthesize.** One argument. The conversation layer sharpens the technical
   case rather than decorating it.
5. **Design.** Build the X-native presentation to the bar above.
6. **Ship.** Integrity check, build, then publish.

Commit continuously. Every commit leaves the tree green. Never leave the session
with work only in the working tree.

## Standing constraints

- ASCII punctuation only. No em dashes, no smart quotes, no emoji. This repo is
  public and publishes that rule; violating it in public artifacts is a defect.
- No credentials in the repo. Ever.
- Never a metered provider API key. Subscriptions, with Claude driving agents.
- `main` auto-deploys. Work on `research/hermes-x-insights`; merging to main is
  publishing and needs the editor's explicit go-ahead.
- Verify with `node site/scripts/check-integrity.mjs` and
  `npm --prefix site run build` before any push.
- The thesis chooses the questions, never the answers. Evidence that cuts against
  Bitter stays in the story. If the X sweep surfaces practitioners reporting that
  more autonomy made them slower, or that a human gate was load-bearing, that is
  a lede, not an inconvenience.

## Resume protocol

On re-entry: read this file, then `JOURNAL.md` in this run directory for where the
last turn stopped, then continue at the next incomplete loop step. Log every
meaningful decision to `JOURNAL.md` as you go, so a cold start loses nothing.
