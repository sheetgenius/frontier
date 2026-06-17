# Contributing to Bitter Frontier

Bitter Frontier is an open, readable research record with a closed editorial
voice. The repository is public and corrections are crowdsourced; the judgment
is not. This document draws that line precisely, so a first-time contributor
knows, before opening a tab, whether the change they have in mind is one we will
merge or one we will thank them for and decline.

Read [METHOD.md](./METHOD.md) first. It defines the three rules and the object
grammar (finding, signal, digest, profile) that this guide assumes.

## The one rule that governs everything

```text
No claim without a receipt.
No signal without a consequence.
Released is not merged.
```

Every claim you contribute carries a primary-source receipt, or it is rejected
the same way any unsourced claim is rejected. This is not negotiable, and it is
not waived for anyone, including the maintainers of the tools we cover. A pull
request from the Claude Code, Codex, Gemini CLI, OpenHands, or any other watched
team that asserts a capability without an in-window primary-source link is
treated exactly like an anonymous one with no link: it does not merge. Vendors
are welcome here as correctors of the record, not as authors of it. "Trust me, I
work on it" is stale model memory with a lanyard.

If you remember one thing: bring the receipt, and bring the date.

## What you can change (crowdsourceable)

These are the contributions we want, can verify mechanically, and will merge on
the strength of the evidence rather than on whose judgment they express.

### 1. Corrections to the receipted record

The factual substrate beneath a finding, signal, or profile: a receipt URL, an
ISO date, a version or tag, a release-channel status, an owner or homepage, a
broken or redirected link. If the published record says a fix shipped in a
tagged release and it is actually only merged to a default branch, that is a
correction we need and will merge once verified. See the `correction` issue and
PR templates.

A correction must carry:

- the receipt URL, the primary source that proves the corrected fact;
- the in-window date, the full ISO date (`YYYY-MM-DD`), confirmed to the year,
  that falls inside the artifact's window (see "Dates" below);
- what is wrong: the exact field, file, and current-versus-correct values.

### 2. Coverage gaps

A real, dated, source-backed change inside a published window that the digest,
signals, or a profile missed. This is recall feedback, and it is valuable: the
machine is scored on what it failed to find. A coverage-gap report is a
candidate finding, not a finished one. You supply the receipt and the
window-anchoring; the maintainers decide whether it rises to a signal. See the
`coverage-gap` template.

A coverage gap must carry the same receipt and in-window date as a correction,
plus which artifact should have caught it (which window's digest, which profile).

### 3. New-source proposals

A proposal to add a watchlist source contract (a new provider) or an
`adjacent.yml` referent (a tool that watched providers compose with but that is
not itself an editorial subject). The watchlist is deliberately small; a new
watchlist source is an editorial commitment to harvest it every cycle, so
proposals are evaluated, not auto-accepted. An `adjacent.yml` entry is lighter.
See the `new-source` template and "Proposing a new source" below.

### 4. Mechanical and infrastructure fixes

Schema corrections, integrity-checker or link-checker bugs, site build breakage,
dead internal references, typos, broken markdown, accessibility defects in the
rendered site. Anything where "is this an improvement" has an objective answer.
Open a normal PR; the templates above are for record changes, not code.

## What stays owned (editorial control retained)

We will read every well-formed proposal in these areas, and we are glad to be
argued with, but the decision is the maintainers', and a PR that simply makes
one of these changes will be closed with thanks, not merged.

- What becomes a signal. Promotion of a finding to a signal is the editorial act
  at the center of this publication. Signals are deliberately rarer than
  findings. You can give us a receipted finding the record is missing; whether it
  changes an operator's next action, and therefore becomes a signal, is ours to
  judge.
- The weekly synthesis. The cross-provider thesis, the digest narrative, the
  operator brief, the "what to try / watch / ignore" calls. This is the unit
  nobody else produces, because nobody else reads the whole watchlist through
  this filter each cycle. Corrections to facts inside a digest are
  crowdsourceable; the reading is not.
- The editorial voice. Tone, framing, what is emphasized, what is called hype,
  the house style. Bitter Frontier is skeptical, operator-facing, and allergic
  to vendor language by design.
- The method. [METHOD.md](./METHOD.md) defines how the publication works: the
  rules and the object grammar. It is not edited by drive-by PR. To propose a
  change, open an issue describing the gap or contradiction with a concrete
  example (ideally a case in the existing record the current method handles
  badly); a maintainer decides in a separate pass.
- Profiles as editorial objects. You can correct a fact or fill a claim's
  receipt in a profile. Rewriting a profile's posture prose, or deciding a
  claim's status, is an editorial pass the maintainers run after each digest.

The short version: you own the receipts; we own the reading. Disagreement about
a reading is welcome as an issue and unwelcome as a merge.

## The receipt requirement, concretely

A receipt is a link to a primary source. The accepted and rejected evidence
kinds are defined per provider in that provider's `sources/<id>.yml`
(`accepted_evidence` / `rejected_evidence`). Across all sources, these never
count as receipts on their own:

- a social-media claim with no primary link;
- a third-party summary or news article without the primary link;
- speculation, a roadmap hope, or "it was announced";
- model memory or recollection ("I'm pretty sure Codex added this");
- a benchmark number with no method;
- a vendor's own marketing page asserting a capability with no changelog,
  commit, release, or docs entry behind it.

### Evidence floor and precision

Every artifact has an `evidence_floor`, the minimum citation precision that can
stand alone as the only support for a claim. The precision ladder, highest to
lowest:

```text
commit_diff_reviewed  >  commit  >  release_note  >  official_docs  >  observed_behavior
```

- `commit_diff_reviewed`: a commit URL whose diff you actually read for the
  specific claim.
- `commit`: a commit URL whose diff has not been individually reviewed.
- `release_note`: a release or changelog entry.
- `official_docs`: an official docs page.
- `observed_behavior`: a reproducible local probe you can describe.

A contributed claim must cite at or above the floor of the artifact it touches.
Open-source-commit sources (Agent Zero, Hermes, OpenHands, OpenClaw, Paperclip,
Pi, Gemini CLI) typically floor at `commit_diff_reviewed`; docs-driven sources
(Claude Code, Codex) typically floor at `release_note`. The per-provider floor
lives in the source contract and the profile frontmatter; check it before you
file. A lower-precision link may ride along as supporting context, but it cannot
be the only thing holding a claim up.

### Channel status (read this before correcting a "shipped" claim)

The single most common correction this publication needs is channel: a fix
merged to a default branch is not a fix in the binary an operator runs. Signals
carry an explicit channel:

```text
tagged-release   in a released tag an operator can install
main-unreleased  merged to the default branch, not in any tag yet
preview-beta     in a preview/beta/nightly tag only
mixed            different parts of the change have different status
```

Channel is resolved by git ancestry, not by date. The authoritative test is
whether the commit is an ancestor of the release tag:

```bash
git merge-base --is-ancestor <commit-sha> <release-tag> && echo "in <tag>" || echo "NOT in <tag>"
# or, on a fork/clone of the provider repo:
git tag --contains <commit-sha>
```

If you are reporting that something "shipped," tell us which tag and how you
checked. If you are reporting that we called something shipped that is only on
main, that is a `channel-mismatch` correction, one of the highest-value reports
we get, because asserting an operator is protected when they are not violates the
house rule as badly as a missing receipt.

### Dates

In-window anchoring is by merge-to-default date, not release-tag date. A date
must be a full ISO date (`YYYY-MM-DD`) whose year is confirmed inside the
artifact's window. Watch for two traps the maintainers have hit:

- Rendered HTML lies. Some release pages render a prior year in the visible HTML
  while the API or changelog timestamp is correct. Trust the API/ISO timestamp
  (`published_at`, the changelog ISO date), not the rendered page.
- Tag date versus merge date. A tag dated before a window can legitimately
  surface material in-window when the change merged in-window. Cite the merge.

A claim whose only date is a plausible month and day with an unconfirmed or
out-of-window year is an out-of-window finding and will be dropped, never
asserted as in-window.

## How to propose each kind of change

### A correction

1. Open an issue with the Correction template (or go straight to a PR for a
   one-line factual fix).
2. Give the receipt URL, the in-window ISO date, and the exact field, file, and
   current-versus-correct value.
3. If it is a one-field fix (a date, a version, a channel, a URL), a PR editing
   the file directly is welcome; the template's fields become your PR body.
4. CI re-fetches the receipts your PR changed; if the adversarial verifier is
   enabled it posts a verdict. A green verdict is necessary but not sufficient; a
   maintainer still merges.

Corrections to findings edit the relevant `runs/<run>/findings/*.md` or harvest
file. Corrections to a signal's factual fields edit
`runs/<run>/signals/frontier-signals.yml`. Corrections to a profile fact edit
`content/profiles/<id>.md`. Corrections to a published digest's facts edit
`content/digests/*.md`, but a digest's reading is owned; keep the edit to the
fact. When in doubt, file the issue and let a maintainer point you at the file.

### A coverage gap

1. Open an issue with the Coverage gap template.
2. Provide the receipt, the in-window date, the provider, and which artifact
   (which window's digest or which profile) should have caught it.
3. Do not open a PR that writes the finding or promotes a signal; that is the
   editorial act. A maintainer (or the loop) will harvest it into a finding and
   decide on promotion. You are giving us recall feedback, and we are grateful
   for it.

### A new source

See "Proposing a new source" below; use the New source template.

### A change to the method

[METHOD.md](./METHOD.md) is owned (see above). Open an issue describing the gap
with a concrete example; do not send it as a PR.

## Proposing a new source

The watchlist (`sources/index.yml`) is intentionally small, because each entry
is a per-cycle harvest commitment. Two paths:

- Watchlist source (a new provider we harvest every cycle): open a New source
  issue arguing why this provider belongs on the frontier we cover, what its
  primary surfaces are, and what accepted and rejected evidence looks like. If a
  maintainer accepts, the source contract and the `sources/index.yml` entry are
  authored as an editorial act. You are welcome to draft the YAML in the PR, but
  adding a provider to the watchlist is a maintainer decision.
- Adjacent referent (`sources/adjacent.yml`): a tool that watched providers
  compose with but that we do not editorialize. This is lighter and more
  mergeable. It needs `id`, `label`, `canonical_url`, a `first_seen_finding_id`
  (a real finding that already references it), `last_seen`, and `status: active`.
  Note the integrity checker's no-orphan rule: every active adjacent entry must
  be referenced by at least one finding, so an adjacent entry only lands together
  with a finding that uses it.

## Working with the repo

This is a file-backed publication. There is no application to run for a content
change. Before opening a content or schema PR, run the same checks CI runs:

```bash
npm --prefix site ci                       # once, to install
npm --prefix site run build                # regenerates pages + internal link-graph check
node site/scripts/check-integrity.mjs      # validates cross-reference ids resolve offline
```

For pure prose, the lightweight checks suffice:

```bash
git diff --check                           # whitespace / conflict markers
rg "TODO|TBD|FIXME"                        # no placeholders in published artifacts
```

Style: prefer ASCII punctuation, no em dashes, no emoji in artifacts; keep prose
source-backed, concise, and skeptical. Cite on the claim-bearing words, not in
footnote blocks. If you are touching narrative prose, write like a skeptical
engineer, not a press release.

Deployment is not your concern and not part of CI: frontier.bitter.sh publishes
on commit-and-push to `main` after a maintainer merges. CI on your PR is a
verification gate, not a deploy.

## Provenance, licensing, and conduct

- Receipts must be public. Do not paste private, embargoed, or paywalled-only
  material as a receipt. If the primary source is not publicly linkable, it is
  not yet a receipt.
- No scraping dumps. Contribute the specific receipted claim, not a bulk re-host
  of a provider's changelog.
- Licensing. By contributing you agree your contribution may be published as
  part of Bitter Frontier under the repository's licenses: code under the MIT
  License, editorial content under Creative Commons Attribution 4.0 (CC BY 4.0).
  See [LICENSE](./LICENSE).
- Conduct. Be precise, be civil, argue the evidence. Bad-faith vendor astroturf,
  meaning unsourced capability claims dressed as corrections, will be closed and,
  if repeated, blocked.

## What happens to your contribution

1. CI runs the offline integrity checker and the site build. For PRs that change
   receipts, an adversarial verifier (when enabled) re-fetches the changed
   receipts and posts a verdict comment
   (`verified-in-window` / `unsupported` / `out-of-window` / `channel-mismatch`).
2. A maintainer reviews. For a correction, the bar is "the receipt supports the
   corrected fact, in-window." For a coverage gap, the maintainer decides harvest
   and promotion. For anything owned, the maintainer decides the editorial
   question.
3. Merged corrections are logged in the public corrections ledger
   ([content/corrections.md](./content/corrections.md)). Every fix to the record
   is itself part of the record. Being in that ledger is a credit, not a demerit:
   it is the publication keeping its own receipts.

Thank you for helping keep the record honest.
