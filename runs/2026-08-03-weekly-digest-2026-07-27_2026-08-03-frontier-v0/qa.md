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

## Not done in this pass

- **No post is quoted.** Capture discipline requires every quotation to be
  independently re-fetched by URL in a second pass given no expected text.
  WebFetch cannot reach x.com (HTTP 402), so that pass runs back through the
  Hermes lane and had not completed when the digest was written. The broad sweep
  returned 127 real posts and at least two are strong candidates -- Anthropic's
  cybersecurity-eval incident disclosure and OpenAI's Codex Security CLI release
  -- and the Anthropic verbatim came back visibly truncated, which is exactly the
  failure mode the rule exists for. Nothing is quoted until it is re-fetched.
- **Social cards not built**, for the same reason. No card is placed, so the
  build's card-placement guard has nothing to fail on.
- **Antigravity, eve, Flue, heypi and agent-flywheel** got release-level reads
  only, not full surface sweeps.

## Known limits

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
