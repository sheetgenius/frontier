# QA -- 2026-07-27..2026-08-03

## Checked

- **Channel by ancestry, not date**, on every inspectable source. Two mattered:
  OpenClaw's fix is `ahead` of `v2026.7.2-beta.5` and absent from stable
  `v2026.7.1`; OpenHands' `1.11.0...v1.8.0` is `ahead_by 903, behind_by 0`,
  which is what proves the renumbering happened on one line and not across a
  fork.
- **Behaviour claims read at a tag ref.** `cost.py` and `risk_score.py` were
  fetched at `?ref=v0.7.0`, not from main, because the claim is about what an
  operator installs.
- **Dates verified to the year** on every release cited.
- **Two independent surfaces** for the Claude Code cadence claim: the published
  changelog and the npm registry's publish times and `dist-tags`.
- **A vendor claim adjudicated before being carried.** Omnigent's stateful-policy
  post was checked against the code at the tag; it was accurate.
- **Signals rarer than findings**: 13 findings, 7 signals, 6 explicitly
  not promoted with reasons recorded.
- **Both halves present.** Three carried-forward controls reached channels
  operators run; Hermes restored a limit it had removed; Agent Zero shipped a
  supervisory stop; Omnigent's cost gate fails closed on unpriced models. The
  window is not a list of defects.
- **Thread check run** and recorded in `audit.md`, with three connections to
  earlier issues, each said once.
- **House punctuation**: ASCII throughout our prose; two em dashes found and
  replaced.
- **Structure**: nine sections, reference material neither opens nor closes the
  issue, closing states the argument. Paragraph mean 49 words, longest 93, none
  at or above 130.
- **No body section duplicates the operator brief.**

## Capture verification and weaving (completed after the first publish)

- **21 URLs submitted, 21 returned ok, 9 selected and woven.** The verification
  pass ran back through the Hermes lane because WebFetch cannot reach x.com
  (HTTP 402). It was given URLs only and no expected text to anchor on, with an
  explicit UNAVAILABLE option, which is the whole point of the rule.
- **The rule earned its keep on the first post.** The discovery sweep's copy of
  Anthropic's cybersecurity-eval disclosure ended mid-sentence behind an
  ellipsis: a real post with inexact text. The verified copy carries a third
  paragraph and a link the harvest had dropped. Nothing was quoted from a
  harvest.
- **No fragment was retyped.** Each `quoted`/`inline` was cut from the stored
  verbatim with `ops/social/slice-quote.mjs`, which refuses ambiguous anchors,
  missing anchors, reversed anchors, and any slice crossing a line break. It
  refused nothing on this batch. `check-integrity.mjs` then confirmed every
  fragment is a contiguous run of its card's verbatim.
- **All nine cards are placed**: eight inline `[[q:]]`, one featured
  `<!--card:-->`. Claim posts were adjudicated before appearing as fact; voice
  posts assert only that they were said; each verdict names which.
- **One operator claim is carried as unestablished** -- that the Claude Code
  five-hour allowance was halved. Anthropic's published limits record no such
  change and one person's account of their own allowance is not evidence of one.
  It is in the issue as what the quiet looked like from outside, labelled as
  exactly that.
- **A duration error was caught in the woven draft**: "a fortnight of silence"
  for a ten-day gap. Every other duration in the issue was then checked against
  its dates (Hermes ten days, OpenClaw a fortnight, Omnigent six) and holds.

## Known limits

- **Three of nine card handles have no avatar** (`@omnigent_ai`, `@lydiahallie`,
  `@Teknium`): the image service rate-limited the batch with HTTP 429. Those
  cards render the monogram fallback, which is the designed behaviour, and a
  retry is queued. No card shows a gap or a broken image.
- **Antigravity, eve, Flue, heypi and agent-flywheel** got release-level reads
  only, not full surface sweeps.

## Source limits

- Omnigent's default-branch commit list was read at the API's 100-item page cap;
  the real in-window count is higher.
- The Codex network-authority items are attributed from release-note bullets, not
  from reading each PR.

## Exemplar-pass (run against the digest before publishing)

Five defects found and fixed:

1. **Title was not an argument.** "The Newest Thing You Can Install" is a noun
   phrase a reader cannot disagree with. Retitled **"Newer, Numbered Lower"**,
   which states the window's sharpest fact as a claim.
2. **Thesis ran to four sentences** against a three-sentence bar. Rewritten to
   three without losing either half.
3. **Pipeline vocabulary leaked into public prose**: "the carried-forward
   question" in the OpenClaw section. Rewritten in reader vocabulary.
4. **A provider note was a feature list.** The Pi entry enumerated
   `print-api-key`, `print-bearer-token`, OAuth refresh and a Copilot context
   window with no judgment attached. Rewritten to carry the judgment -- the
   commands print a live credential and the gating is unestablished -- which is
   the only reason the entry is there.
5. **One fact had two homes.** The brief's Pi entry and the breaking-changes
   section both enumerated the seven removed TypeBox APIs. The brief now carries
   the decision and points at the list.

Passing on the remaining points: the lede is a receipted case (OpenHands, July
30); receipts ride the claim-bearing words with no internal paths and no
receipt dumps -- the single bare URL in the body is inside OpenHands' own quoted
release text and stays verbatim; uncertainty is scoped in four specific
questions with what would settle each; severity without sneer (the OpenHands
finding states plainly that nothing was concealed and PR #16133 shows the effect
was anticipated); comparison is earned (Hermes borrowing a runaway cap from
Claude Code changes how to read it); no paragraph carries three dash-splices; no
template refrain from a prior issue; ASCII throughout.

Structure after the pass: nine sections, argument first, reference then provider
notes, closing on the argument. 2,123 words, paragraph mean 48, longest 93.
