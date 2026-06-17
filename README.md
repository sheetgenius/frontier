# Bitter Frontier

**A weekly, receipted brief on the AI coding agents and the harnesses around
them, written for the people who run them in production.**

Every week, Bitter Frontier reads what changed across the major coding agents and
their harnesses and turns it into what it costs you: what to upgrade, what to
re-audit, what to try, what to watch, what to ignore. Every claim links to a
primary source you can open and check.

**Read the latest issue: https://frontier.bitter.sh**

---

## Why you can trust it

**Released is not merged.** A fix on a default branch is not a fix in the release
you run. Most write-ups blur the two. We resolve the channel of every
security-relevant change, *shipped in version X* or *on `main`, unreleased*. An
operator who thinks a hole is patched when it is only merged is the reader this
brief is built for.

**No claim without a receipt.** Every statement of fact links to a changelog
entry, commit, release, or pull request. If you cannot open it and check it, we
do not publish it.

**No signal without an operator consequence.** A change earns your attention only
if it changes what you should do. We do not paraphrase release notes.

**Independent, on purpose.** Bitter Frontier is published by
[Bitter](https://bitter.sh), which builds infrastructure for running AI agents in
production. Bitter is never a subject of the analysis: no provider ranking, no
"Bitter vs. them," no product pitch.

### One claim, start to finish

This is what every line in a digest looks like underneath:

> Before June 13, Hermes Agent denied an agent from redirecting output into
> `~/.ssh/authorized_keys`, but said nothing about *copying* a file there, so
> `cp evil ~/.ssh/authorized_keys` (an SSH-key implant) sailed past a guardrail
> that on paper existed.
> **Receipt:** the fix commit, whose message calls the unpaired deny "theater"
> ([NousResearch/hermes-agent@da28d5d11](https://github.com/NousResearch/hermes-agent/commit/da28d5d11)).
> **Consequence:** if you run an exposed Hermes gateway this matters, but the fix
> is on `main`, not in the v0.16.0 release binary. Run `main` or wait for the
> next tag.

Every claim has that shape: the change, the receipt, the consequence, and the
channel it shipped on. The links are there so you can check us.

---

## What it covers

Ten coding agents and harnesses, read together every week. The source-of-truth
channel differs per provider, which is exactly why "released vs. merged" takes
work:

| Provider | Maker | What we watch |
| --- | --- | --- |
| Codex | OpenAI | changelog + app/CLI/iOS releases |
| Claude Code | Anthropic | changelog + docs |
| Gemini CLI | Google | releases + commits |
| OpenHands | OpenHands | releases + `main` commits |
| Hermes Agent | Nous Research | releases + post-release `main` |
| Pi coding agent | Earendil Works | releases + `main` commits |
| OpenClaw | OpenClaw | releases + betas |
| Paperclip | Paperclip | releases + `master` commits |
| Agent Zero | agent0 | releases |
| Flue | Astro | weekly, changelog |

The watched sources, and what counts as evidence for each, are defined as
checked-in **source contracts** in [`sources/`](./sources/).

---

## How to read one issue

A digest has a fixed shape. You can read the first block in a minute and go deep
only where it touches your stack:

1. **Operator brief**: the thesis in two sentences, plus the upgrade/check, try,
   watch, and uncertain lists. If you read one thing, read this.
2. **The cross-provider pattern**: the synthesis no single changelog can show
   you (for example, "nine of ten providers spent the fortnight deciding who is
   allowed to say yes").
3. **Security advisories**: what to patch now, and what is fixed but unreleased.
4. **Provider notes**: per provider; skim for the ones you run.
5. **Try / watch / uncertain**: concrete next actions and open questions.

Start with the [latest issue](https://frontier.bitter.sh). The archive is in
[`content/digests/`](./content/digests/).

---

## What's in this repo

Bitter Frontier is file-backed: the publication *is* the repository. Nothing is
hidden in a database.

- [`content/digests/`](./content/digests/): the weekly briefs.
- [`content/profiles/`](./content/profiles/): an evergreen register per provider,
  "what is this tool right now."
- [`sources/`](./sources/): source contracts, where we watch and what counts as
  evidence.
- [`runs/`](./runs/): the reproducible record of how each cycle was produced.
  What was read, what was found, what was accepted, how receipts were verified.
- [`METHOD.md`](./METHOD.md): the three rules and the object grammar.
- [`CONTRIBUTING.md`](./CONTRIBUTING.md): how to send a correction.

The object chain is `source -> finding -> signal -> digest -> profile`. A
**finding** is one sourced observation. A **signal** is a finding that should
change what an operator does. A **digest** is the weekly synthesis. The
distinctions are deliberate, and [`METHOD.md`](./METHOD.md) explains why.

---

## Contributing

Corrections and coverage gaps are welcome, and a correction that carries its
receipt is the most valuable thing you can send. The receipts are open to
everyone; the editorial judgment (what becomes a signal, the weekly synthesis,
the voice) stays with the maintainers, which keeps the brief coherent and its
neutrality defensible.

The single highest-value report is a **channel correction**: we said a fix was in
a release and it is only on a branch, or the reverse. See
[CONTRIBUTING.md](./CONTRIBUTING.md).
