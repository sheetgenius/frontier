---
name: frontier-cycle
description: >-
  Run a Bitter Frontier research cycle on the agentic-coding watchlist: harvest
  what changed across the watched coding agents and harnesses, edit it down to the
  rare decision-bearing signals, synthesize what agents made cheaper and where
  human attention moved, and (for a weekly window) publish the digest. Use
  when asked to "study the frontier," "run the weekly digest," "do a research
  cycle," "harvest the watchlist," or otherwise produce findings, signals, or a
  digest. Enforces the publication's receipt discipline, channel-by-ancestry, and
  field-correspondent voice. Run from the canonical repo (sheetgenius/frontier).
---

# Bitter Frontier research cycle

Produce one reproducible cycle: a harvest of the watchlist, edited into
findings -> signals -> (weekly) a digest, all under the publication's receipt
discipline. The repository **is** the publication -- file-backed Markdown and
YAML, no hidden database.

## Read the contract first (authority, not background)

- `THESIS.md` -- why Frontier exists, the Bitter Lesson and Amdahl lens, the
  audience, and the safeguard against a predetermined corporate verdict.
- `METHOD.md` -- the three rules and the object grammar.
- `EDITORIAL.md` -- the public writing standard, comparison bar, decision packet,
  reader vocabulary, and cold-read test.
- `AGENTS.md` -- house style (ASCII punctuation only, no em dashes; operator-first,
  skeptical, no hype; receipts on the claim-bearing words) and the validate-before-
  push commands.
- `sources/index.yml` -- the watchlist, tiers, cadences, and `default_window`.
- The most recent `content/digests/*-weekly.md` and its `runs/*/manifest.yml` --
  the baseline you advance from, plus the `carry_forward_checks` (prior-window
  `main-unreleased` / preview-only items to confirm reached a tag this window).
- Each source's contract `sources/<id>.yml` **before** searching its surfaces -- it
  names the official surfaces, accepted/rejected evidence, and actionability rules.

## The three rules (non-negotiable)

1. **No claim without a receipt.** Every fact links to a primary source a reader
   can open -- a changelog entry, commit, release, or PR. **Pin receipts to a tag
   or SHA, never a moving `main`/`HEAD`** (a `main` URL drifts and stops proving
   the claim). Verify every date to the year.
2. **No signal without a consequence.** A change becomes a signal only if it
   changes what an operator does (upgrade / re-audit / try / watch / ignore), read
   at two altitudes: the operator's (what to reconfigure or patch) and the
   frontier's (what just became possible, and who can now reach it).
3. **Released is not merged.** Resolve and state the release-channel status of
   every change. For inspectable repositories, use **git ancestry, not date**:
   `tagged-release` (the commit is in a stable tag's history), `main-unreleased`
   (on the default branch, in no tag), or `preview-or-beta` (only in a prerelease
   tag). Closed and docs-driven sources use the versioned channel evidence named
   in their source contract. The gap between merged and released is where an
   operator gets a false sense of safety.

## The Frontier lens (required, not decorative)

The research cycle supplies evidence for a living thesis. Accurate reporting is
the first obligation; provider coverage is the evidence stream, not the limit of
what the publication should explain. Every candidate signal must be tested
against these questions:

1. What general capability improved?
2. Is it a durable primitive or a workaround for a current model limitation?
3. What handcrafted layer or workflow became less defensible?
4. Does it expand the fraction of an end-to-end workflow an agent can operate?
5. What human attention does it save, and what new review or coordination does
   it create?
6. Where did the bottleneck move?
7. Which human gate is deliberate, and which is accidental serial work?
8. What is the nearest cross-provider precedent or divergence?
9. What should a reader stop building, start delegating, measure differently,
   re-audit, try, watch, or ignore?

Trying a provider is one possible action, not the definition of actionability.
The thesis chooses the questions, not the verdict. Record evidence that cuts
against Bitter's assumptions.

## Steps

### 1. Scope the window
`live` = previous 24h; `weekly_digest` = previous calendar week; or an explicit
operator window. Set `run_id` = `<end-date>-weekly-digest-<start>_<end>-frontier-v0`
and `parent_window` = the prior window.

### 2. Scaffold the run
Create `runs/<run_id>/` containing `harvest/`, `findings/`, `signals/`,
`manifest.yml`, `audit.md`, `qa.md`, `JOURNAL.md`.

### 3. Harvest -- coordinator-led parallel fan-out
Use one **coordinator** with final editorial authority plus parallel frontier-model
researchers at high effort, one per source or small group. The specific model and
harness are replaceable; the required roles, evidence quality, and artifacts are
not. Commit frequently, cross-linking commit messages to `JOURNAL.md` entries.
Each researcher:
- loads `sources/<id>.yml`, then checks its primary surfaces -- changelog, `/tags`,
  `/releases`, default-branch commits, relevant PRs, docs;
- records every material change in `harvest/<id>.md` with a **pinned** receipt and
  its **channel by ancestry** (decide each: in a stable tag's history -> tagged; on
  `main` with no tag -> main-unreleased; only in a pre-release tag -> preview);
- separates marketing from substance (landing page vs docs) explicitly;
- logs to `JOURNAL.md`.
Run the prior manifest's `carry_forward_checks`: did last window's main-unreleased /
preview items reach a tag this window? Record the answer either way.

After source harvesting, run a comparison pass across prior signals, current
profiles, and recent digests. Identify the nearest precedent, concurrent pattern,
or structural divergence. Do not force a comparison when it does not change the
read.

### 4. Findings
For every source-backed observation write `findings/<finding_id>.md` -- an index
stub: frontmatter (`finding_id`, `source`, `source_contract`, `window`, `status`,
`confidence`, `evidence: [{url, precision}]`) plus a `## Receipt` list. The detail
lives in `harvest/`. `finding_id` = `<end-date>-<source>-<slug>`. Most findings
never become signals; that is expected.

### 5. Signals -- the editing (this is the product)
Curate the rare decision-bearing subset into `signals/frontier-signals.yml`. Per
signal: `section` (control-plane | runtime | platform), `channel`, `title`,
`finding_ids`, `why_action_bearing` (concrete operator actions or architectural
decisions),
`accessibility_consequence` and `security_consequence` (the two-altitude read:
what_got_easier / who_can_use_now / authority_visibility; and threat / attacker_model
/ enforcement / cost_to_operator / residual), `receipts`. **When a finding or signal
cites a CVE or GHSA, resolve the advisory and state in plain language what the
vulnerability actually allows -- its class and operator impact (XSS, RCE, auth
bypass, open redirect, DoS, SSRF) -- and link the canonical advisory (NVD or the
GHSA) as the receipt, not a blog aggregator. An ID is a receipt, not a consequence;
a reader should not have to look the CVE up to know what is at stake.** Each
signal must also name who is affected, the runnable channel, the human attention
saved or created, and the evidence that would settle remaining uncertainty.
**Signals must be rarer than findings** -- the gap is the editing and it is the point. **Adversarially
verify every signal receipt**: re-fetch it pinned, confirm it supports the exact
claim; default to dropping the signal if uncertain.

### 6. Digest (weekly)
Author `content/digests/<start>_<end>-weekly.md` on the fixed reader shape: a single
cross-provider **thesis** (what the window means, not a list of releases), then
`upgrade_check` / `try` / `watch` / `uncertain` in the `operator_brief` frontmatter,
then the body in the field-correspondent voice. Each operator-brief line links to
its signal. `not_promoted` records findings carried on a profile or in the body but
deliberately not signaled, each with a reason.

A nonweekly live window does not publish as `This Week in Agentic Harnesses`.
When the editor decides that a short window merits a standalone synthesis, label
the public `series` as `Bitter Frontier Brief` and make the short window visible
to the reader. Otherwise publish only findings, signals, and profile changes.

The digest must pass the exemplar bar
(`.claude/skills/exemplar-pass/SKILL.md`), most bindingly:
- **thesis <= 3 sentences** -- it renders first, as a standfirst, not an abstract;
- **the lede is a case** (one receipted event and the cost inside it), the title an
  argument a reader could dispute;
- **one home per fact** -- a fix appears in the brief OR an advisory OR a provider
  note OR what-to-try; the other mentions link to it;
- **provider notes carry judgment or die**: a provider gets prose only when the
  digest has something to say about it, otherwise one line ("no material change;
  last tag holds at X"). No ten-item comma-lists of shipped features;
- **not_promoted reasons in reader vocabulary** (no "promoted," "carry-forward,"
  "captured on the profile");
- **no template refrains**: before publishing, grep the previous two digests for
  any repeated formula ("Same X, N different Y", a recurring closer) and retire it.
- **the lens becomes action**: make clear what general capability moved, what
  local layer became less defensible, or where human attention moved. Do not add
  a paragraph about Sutton or Amdahl when the concrete case can carry the idea.
- **the prose has a pulse**: use color, wit, analogy, or colloquial language when
  it makes a receipted mechanism easier to see. Do not inflate certainty or
  manufacture a slogan.

### 7. Profiles
Refresh only the profiles that moved: bump `last_updated`, add or retire claims
(each with a resolvable `finding_id`), update `stance`. Leave untouched providers
alone.

### 8. Manifest, audit, qa
Write `manifest.yml` (`schema_version: bitter.frontier_run_manifest.v0` -- window,
sources, models, harness shape, `quality_gates`, `carry_forward_checks`, generated
artifacts). Record `audit.md` (what was read and decided) and `qa.md` (what was
checked).

### 9. Quality gates (all required)
- channel-by-ancestry resolved on every change;
- dates verified to the year;
- signals rarer than findings;
- every signal receipt adversarially verified;
- an explicit cross-provider synthesis thesis is present;
- marketing vs substance separated;
- nearest relevant cross-provider precedent considered;
- human-attention shift or whole-system consequence identified;
- public prose contains no unearned pipeline jargon;
- philosophy did not predetermine the verdict.

### 10. Validate and publish
- `node site/scripts/check-integrity.mjs` -> must be clean (every finding / signal /
  profile / digest cross-reference resolves).
- `npm --prefix site run build` -> must be clean (regenerates pages + internal link
  graph check).
- Add the digest to `content/digests/index.md`.
- Commit and push to `main` (auto-deploys). Keep Bitter's own product out of the
  analysis.

## Worked example
The `2026-06-24` run -- `runs/2026-06-24-weekly-digest-2026-06-23_2026-06-24-frontier-v0/`
(manifest, harvest, 13 findings, 5 signals) and its digest
`content/digests/2026-06-23_2026-06-24-weekly.md` ("Governance, Sold Separately") --
is a complete reference for every artifact this skill produces.
