<!--
Bitter Frontier PR. Read CONTRIBUTING.md first.
You own the receipts; the maintainers own the reading. A PR that makes an
editorial call (promotes a finding to a signal, rewrites synthesis or profile
posture, edits a digest's reading, or changes how the method works in METHOD.md)
will be closed with thanks, not merged. Open an issue or a Discussion for those
instead.
-->

## What this changes

<!-- One or two sentences. Link the issue if there is one (Fixes #NNN). -->

## Type of change

<!-- Check exactly one. -->

- [ ] **Correction**: a wrong fact in a finding / signal / profile / digest (date, version, channel, URL, owner)
- [ ] **Adjacent referent**: a `sources/adjacent.yml` entry that lands with a finding referencing it
- [ ] **Mechanical / infra**: schema, checker, site build, dead internal ref, typo, accessibility defect
- [ ] **Source-contract draft**: drafting YAML for a maintainer-accepted new watchlist source (link the accepted issue)
- [ ] Something else (explain; if it is editorial, meaning synthesis, promotion, voice, or method, stop and open an issue instead)

## Receipts (required for any change to the record)

<!-- One row per claim your PR adds or corrects. Skip only for pure infra/typo PRs. -->

| claim / field changed | receipt URL (primary source) | precision | event date (ISO) | channel |
|---|---|---|---|---|
| | | | | |

- **precision** uses the most specific truthful label described in CONTRIBUTING.md, such as `commit_line_range`, `tagged_commit_file`, `github_release`, `official_docs`, `primary_research_source`, or `observed_behavior`. It must meet the profile floor and source contract.
- **event date** is the full ISO `YYYY-MM-DD`, with its year confirmed from the API/changelog timestamp (not rendered HTML). For a coverage gap it must be in-window; for a correction it may prove that the original claim was out-of-window.
- **channel** is one of `tagged-release` / `main-unreleased` / `preview-beta` / `mixed`, resolved by git ancestry.

### Channel ancestry check (if you assert or correct "shipped")

<!-- Paste the verification, e.g. `git tag --contains <sha>` or `git merge-base --is-ancestor <sha> <tag>` and its result. -->

```
```

## Local checks

<!-- For content / schema PRs. Tick what you ran. -->

- [ ] `npm --prefix site run build` passes (regenerates pages + internal link-graph check)
- [ ] `node site/scripts/check-integrity.mjs` reports clean
- [ ] `git diff --check` clean; no `TODO` / `TBD` / `FIXME` left in published artifacts
- [ ] ASCII punctuation, no emoji; citations on the claim-bearing words

## Editorial-line self-check

- [ ] This PR corrects **facts** or fixes **infra**. It does **not** decide what becomes a signal, rewrite synthesis or profile posture, change the editorial reading of a digest, or change the method in `METHOD.md`.
- [ ] Every receipt above is a **public** primary source (nothing private, embargoed, or paywall-only).
- [ ] I am not asserting a vendor capability on the strength of "I work on it"; every claim carries a receipt, including for tools I maintain.

<!--
CI will run the offline integrity checker and the site build, and (if the
adversarial verifier is enabled and this PR changes receipts) re-fetch the
changed receipts and post a verdict comment: verified-in-window /
verified-correction / unsupported / out-of-window / channel-mismatch. A green verdict is necessary but not
sufficient; a maintainer still merges, and merged corrections are logged in
content/corrections.md.
-->
