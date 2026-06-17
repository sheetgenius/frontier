# Contributing to Bitter Frontier

Bitter Frontier runs on one rule: no claim without a receipt. Contributions are
held to it too. Read [METHOD.md](./METHOD.md) first; it explains the object
grammar this guide assumes.

## What we want most

1. **Corrections.** If a claim is wrong, stale, or misread its source, open an
   issue or a pull request with the primary source that corrects it: a changelog
   entry, commit, release, or pull request a reader can open. A correction with a
   receipt beats ten without. We fix fast and credit you in the run artifact.
2. **Channel corrections.** Our sharpest discipline is "released is not merged."
   If we said a fix shipped in a tagged release and it is actually only on a
   default branch, or the reverse, that is the highest-value report you can file.
3. **Coverage gaps.** A material change at a watched provider that we missed in
   its window. Bring the receipt and the date.
4. **New source proposals.** A coding agent or harness worth watching. Open an
   issue making the case; see [`sources/`](./sources/) for what a source contract
   requires.

## What stays with the maintainers

The receipts are open; the editorial judgment is not crowdsourced. What becomes a
**signal** (an accepted finding that should change an operator's next action), the
weekly cross-provider synthesis, and the voice are set by the maintainers. This
keeps the brief coherent and keeps its neutrality defensible. A rejected finding
is normal and is not a judgment of the contributor.

## How a claim is structured

Every published claim is a chain: `source -> finding -> signal -> digest`. A
**finding** is one sourced observation of what changed. A **signal** is a finding
that changes what an operator does. Cite the source on the claim-bearing words,
never as a bare link dump at the end.

## Filing a correction

- **Issue:** link the primary source, name the digest or signal it concerns, and
  state what is wrong. Title format: `correction: <provider> <what>`.
- **Pull request:** edit the digest or profile, add the receipt inline on the
  claim-bearing words, and note the change in the relevant `runs/` audit note if
  one applies. Run the checks below before opening.

## Validation

Before opening a PR, from the repo root:

```sh
node site/scripts/check-integrity.mjs     # finding/signal/profile references resolve
npm --prefix site run build               # builds clean, internal link graph intact
```

Both must pass.

## House style

ASCII punctuation (no em dashes). Operator-first. Skeptical. No hype, and no
vendor pitch, ours included. If a change is a marketing claim dressed as news,
say so.

## Ground rules

Be precise and be kind. We optimize for being correct in public, which means
making it safe to be corrected in public.
