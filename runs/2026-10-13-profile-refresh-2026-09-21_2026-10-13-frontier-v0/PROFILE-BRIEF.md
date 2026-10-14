# Profile brief -- write-up and drafting

Run: 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0
Posture date: 2026-10-13.

A profile is one dated operator posture, not a notebook (`EDITORIAL.md`, "The
profile bar"; `.claude/skills/exemplar-pass/SKILL.md`, bar point 14). Refreshing
it means rewriting it to the new date. The old "Where it stands, 2026-09-21"
section is replaced, never stacked under a new one.

## Read before drafting

- `EDITORIAL.md`: "The job", "The decision packet", "The three editorial
  passes", "The slop test", "Ablate self-defence", "Reader vocabulary and
  backstage vocabulary", "Color is part of the voice", "Both halves of the
  frontier", "Severity and skepticism", "The profile bar".
- `.claude/skills/exemplar-pass/SKILL.md` -- "The bar" (all fourteen points).
- Exemplars on disk: `content/profiles/temporal-agent-harness.md` (named
  exemplar) and `content/profiles/codex.md` (shape of a large profile).
- The verified harvest `runs/<run>/harvest/<id>.primary.md`, its crosscheck
  `runs/<run>/verify/<id>.crosscheck.md`, the generated findings
  `runs/<run>/findings/2026-10-13-<id>-*.md`, and the current profile
  `content/profiles/<id>.md`.

## The reader test

Someone opens this page on a Sunday morning. In under a minute they must know:
which version to install today and how; what is still preview, beta, flag-off,
or only on main; what changed since the last dated posture that they might have
to act on; and what to avoid. Every bolded paragraph answers one decision.

## Frontmatter

Keep every existing field and its order. Change only:

- `tagline`: one sentence, an argument a reader could disagree with, true on
  2026-10-13. Not a feature list.
- `last_updated: 2026-10-13` and `last_full_review: 2026-10-13`.
- `artifact_version`: increment by one if the field exists; do not add it.
- `claims`: for every new fact the prose relies on, add
  `{id: <short-kebab>, finding_id: <exact id from runs/<run>/findings>, last_verified: 2026-10-13, status: active}`.
  For each prior active claim the harvest says still holds, set
  `last_verified: 2026-10-13`. For each prior claim that no longer holds or
  that the new posture drops, set `status: retired` (keep the entry; never
  delete a claim). Never invent a finding_id: copy it from the findings
  directory.
- `posture_basis`: you may append new finding ids under the right lens.
- `stance.use_for` / `avoid_for` / `watch_next`: rewritten for 2026-10-13.
  `watch_next` names the evidence that would settle each item.
- `compared_with`: only comparisons the prose earns.

## Body

1. `# <Label>`, then the short "why it is on the watchlist" paragraph. Keep it
   unless it is wrong or stale; tighten it.
2. `## Where it stands, 2026-10-13`. Open with `**Channel.**`: the install an
   operator runs today, with the version linked to its release, how it
   installs, and what is preview, beta, nightly, flag-off, or only on main.
   Then bolded-lede paragraphs, one decision each, ordered by consequence.
   Facts from the prior posture that still hold stay only if they still change
   a decision, re-linked at the newest tag where possible. Facts that no
   longer hold are dropped from the body (their claims retire), or, when the
   reversal itself is the news, stated once in a forward-facing sentence.
3. `## What is unresolved` -- each bullet names what is unknown and the
   evidence that would settle it.
4. `## Profile hygiene` -- the existing paragraph, with the run link changed to
   `/runs/2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0/`.

## Rules that fail review

- Every factual sentence carries its receipt as an inline link on the
  claim-bearing words, pinned to a tag or SHA (GitHub blob/tree URLs never at
  main/HEAD). Release pages, PRs, advisories, registry pages and dated docs
  pages are fine.
- Only facts from the verified harvest and crosscheck. If the crosscheck
  refuted or could not verify something, it does not appear as fact.
- Dates in prose as "4 October" (year when ambiguous). Versions exact.
- Reader vocabulary: no finding_id, harvest, promoted, carry-forward, source
  contract, run paths, or schema names in the body.
- ASCII punctuation only. No em or en dashes, no `--` as a dash, no curly
  quotes. Bound dash-splices: rewrite as sentences.
- Bitter is the disclosed publisher and stays out of the analysis.
- A quiet window is a legitimate answer: say what is installed, that nothing
  material moved since the last dated read, and re-verify the posture at the
  newest release. Do not pad.
- Length: the current read must not be buried. A profile should usually get
  shorter or stay the same length when it is refreshed, unless the window was
  genuinely large.

## Mechanical gate

Run `node <scratch>/tools/check-profile.mjs <draft> runs/<run>/findings` and
fix everything it reports before you return. It checks YAML parse, finding
ids, the single dated posture heading, pinned GitHub links, ASCII, dash use,
internal paths, and banned words.
