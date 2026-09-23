# Researcher brief -- Lane A, primary sources

Run: 2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0
Window: 2026-08-20 (exclusive of what the parent brief already recorded through
that date) to 2026-09-21 inclusive. Events on or after 2026-09-22 are OUT and
are recorded only in a short "Observed after window close" list at the end.
Today is 2026-09-22. Verify every date to the year. It is 2026.

You are READ-ONLY on the repository except for ONE file: your assigned
`harvest/<source-id>.primary.md`. Never run git write commands (no add, commit,
stash, reset, checkout, push). Never touch another file. Never build the site.

## Read first

1. `sources/<id>.yml` (the contract: surfaces, accepted and rejected evidence,
   operator questions, actionability rules) and `sources/<id>.notes.md`.
2. `content/profiles/<id>.md` (the dated posture you are advancing from).
3. The parent harvest for your source, if it exists:
   `runs/2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0/harvest/<id>.primary.md`.
   It is your baseline. Do not re-report what it recorded unless the channel
   changed (for example a main-only item reached a tag).
4. The specimen for the file you will write:
   `runs/2026-08-20-brief-2026-08-17_2026-08-20-frontier-v0/harvest/codex.primary.md`.
   Match its frontmatter and section shape exactly.

## The four rules

1. No claim without a receipt. Every fact links to a primary source a reader can
   open: release page, tag, commit, PR, docs page. PIN receipts to a tag or SHA,
   never to a moving main/HEAD (a blob URL at a tag or SHA, not at main).
2. No finding without a consequence. Say what an operator does differently
   (upgrade, re-audit and what to inspect, try, watch and what evidence settles
   it, ignore), and what human attention it saves or creates.
3. Released is not merged. Resolve the channel of EVERY change by git ancestry
   for inspectable repos: `tagged-release` (in a non-prerelease tag's history),
   `main-unreleased` (on default branch, in no tag), `preview-or-beta` (only in a
   prerelease tag). Show the ancestry evidence (`gh api repos/O/R/compare/A...B`
   ahead_by/behind_by/status, or `git merge-base`). Closed sources (Claude Code,
   Cursor, Copilot CLI, Grok Build) use the versioned channel evidence the
   contract names: official changelog entries, npm publish times
   (`npm view <pkg> time --json`), release notes pages. Mark those `docs-only`
   when a doc changed with no versioned artifact.
4. Nothing is quoted from social posts. If a post matters, record its URL and a
   gist in your own words; the coordinator captures it separately.

## What to record

Every MATERIAL change in the window: releases and tags (with dates and
prerelease flags), breaking changes, security fixes and advisories (resolve any
CVE or GHSA to what it actually allows), permission/approval/sandbox/policy
changes, capability additions, defaults that flipped, docs that changed what an
operator is told, channel facts (npm dist-tags, tags without releases, main
ahead of tag by N). Separate marketing (landing page, blog) from substance
(docs, code, tags) explicitly.

BOTH HALVES. The instrument is a defect detector; you must also ask what became
possible: what scaffolding got deleted, what setting was removed rather than
added, what an operator can now do that they could not on 2026-08-20. Tag each
change `Half: capability | defect | both`.

Answer your assigned carry-forward checks with ancestry evidence, including a
negative answer.

Read the contract's `operator_questions` and answer any the window settles.

Use `gh api` and `gh release list`, raw file reads at pinned refs
(`gh api repos/O/R/contents/<path>?ref=<tag>` with Accept raw), `npm view`,
`curl` for docs. Prefer the API over guessing. Record every surface you checked
in a final "## Surfaces checked" section, and a "## Not reached" list for
anything you could not open.

Identity check first: confirm the repo in the contract's `primary_surfaces` is
the project you are reading. Names are untrusted.

## Volume

This is a 32-day window, so expect many releases. Do not list every alpha. Cut
to what is material: the stable tags, the channel facts, the changes that move
authority/exposure/capability, and anything the contract's high_signal_patterns
name. A long window still yields a short list of things that matter. Aim for
the 5 to 15 changes that would change what an operator does, each with pinned
receipts, plus a compact "Release ledger" table (tag, date, prerelease flag,
ahead_by from previous stable) so the coordinator can count without re-fetching.

## Output

Write `runs/2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0/harvest/<id>.primary.md`
in the specimen's shape. ASCII punctuation only, no em dashes. Then return a
summary of at most 25 lines: the 3 to 6 most decision-bearing changes with
channel and receipt, carry-forward answers, and anything you could not verify.
