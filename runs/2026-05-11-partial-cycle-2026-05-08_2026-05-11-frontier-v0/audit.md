# Partial Cycle Audit: 2026-05-08 → 2026-05-11

This run tested the experimental Profile durable object introduced in the
2026-05-11 doctrine update. Single provider (Gemini CLI), single 4-day
window, partial pipeline. Below are the doctrine gaps the cycle surfaced.

## Doctrine Gaps

### Gap 1: New claim vs refresh of existing claim

The v0.41.0 changelog introduced headless workspace trust enforcement and a
core-tools allowlist for shell validation. These touch the same high-signal
patterns (`workspace trust`, `shell`, `permission`) as existing claims
(`workspace-trust-visible-mcp`, `shell-safety-evals`) but cover materially
different surfaces: UI listing visibility vs headless enforcement; pattern
safety evals vs explicit allowlist mechanics.

The doctrine does not specify when to add a new claim ID vs refresh
`last_verified` on an existing claim. This cycle resolved it pragmatically:
new claim when the surface, behavior, or operator-visible mechanism is
materially distinct; refresh otherwise.

**Proposed addition to RESEARCH_CONTRACT.md#profile under Hygiene:**

> A finding refreshes an existing claim only when it targets the same
> surface, behavior, and operator-visible mechanism. A claim covering an
> adjacent or expanded surface should be added as a new claim, even when
> the source contract groups them under the same high-signal pattern.

### Gap 2: Release tag dated before harvest window

Stable v0.41.0 was published 2026-05-05, before the window start
(2026-05-08), but the changelog commit merged on 2026-05-08 inside the
window. Underlying PRs #25814 and #25720 had merged 2026-04-23 — *inside the
prior window*. They were not captured by the previous finding.

This cycle treated them as in-window because the operator-visible release
artifact (the merged changelog + the cut release tag) became salient in the
window. The earlier merges were silently absorbed by the new finding rather
than retroactively amending the prior finding.

**Open question:** Is the doctrinally correct move to (a) include them in
the new finding (this cycle's approach), (b) retroactively amend the prior
finding, or (c) issue a separate "missed-in-prior-window" finding? Each has
tradeoffs for chronology, evidence integrity, and reader experience.

**Proposed default:** in-window evidence anchors to the merge-to-default
date. If a finding misses an in-window change, prefer a new finding in the
next cycle citing the original commit and noting the gap, over editing the
previous finding. The git history makes this honest.

### Gap 3: Posture clause citation format

The doctrine says posture clauses naming a specific feature, behavior change,
comparison, or quantitative comparison "must cite a finding ID." It does not
specify the citation format. This cycle adopted an end-of-section attribution
line: `*Findings: <id-1>, <id-2>.*`

Alternatives considered: per-clause inline `(finding-id)`, footnotes,
sup-tagged references. End-of-section was chosen because the `posture_basis`
frontmatter already carries the per-lens index, and per-clause inline
citations cluttered the prose.

**Proposed addition to RESEARCH_CONTRACT.md#profile under Prose rules:**

> Finding-ID citation in posture sections takes the form of an italic
> attribution line at the end of each lens: `*Findings: <id>, <id>.*`.
> Per-clause inline finding citations are discouraged; let the
> `posture_basis` frontmatter carry the per-lens index.

### Gap 4: `last_verified` semantics for open-question claims

`long-horizon-goal-primitive` is an `open_question` claim — it asserts the
absence of a feature. This cycle did not produce a finding that resolves it
either way, but the cycle did look. The cycle updated `last_verified:
2026-05-11` to reflect "we checked and the answer is still no."

The doctrine implicitly assumed `last_verified` is touched only when a
finding establishes or refreshes a claim. For `open_question` claims, the
verifying event is *the absence of a resolving finding after a cycle that
would have caught one*.

**Proposed addition under Hygiene:**

> For claims with `status: open_question`, `last_verified` updates when a
> harvest cycle completes that would plausibly have produced a resolving
> finding, even if no such finding was produced. The semantic is "we looked
> and the answer is still unknown" rather than "a finding refreshed this."

### Gap 5: Partial-cycle digest artifact placement

This cycle produced a "digest fragment" rather than a weekly digest. The
current doctrine treats Digest as a weekly cross-provider artifact; partial
cycles have no defined home for synthesis.

This cycle placed the fragment at `runs/<id>/weekly/gemini-fragment.md` with
a header marking it `not_published` and naming it a fragment. The doctrine
should either:

- Declare partial cycles produce only finding + signal + profile updates,
  with no digest artifact (the fragment becomes a private working document),
  or
- Define a `Digest Fragment` durable object type for partial cycles, with
  schema sketch and placement rules.

**Recommendation:** the second. Fragments are useful as a forcing function
for the "write the digest, then update the profile" sequence even on partial
cycles, and they make the testing of the loop explicit.

### Gap 6: Evidence floor and citations of varying precision in one finding

The new finding cites both commit URLs (precision `commit_diff_reviewed`) and
the v0.41.0 release tag (precision `release_note`). The release tag is below
the profile's `evidence_floor: commit_diff_reviewed`. The release tag is
useful context (it shows what surfaced these claims) but cannot be the sole
support for a claim under the floor.

This cycle handled it by citing the underlying commit URLs for each claim
(meeting the floor) and including the release tag as context evidence.

**Proposed clarification:**

> `evidence_floor` is the minimum acceptable precision for the *primary*
> citation supporting a claim. Lower-precision citations may appear as
> supporting context but cannot stand alone as the only evidence for a
> claim listed in the profile.

## Mechanics That Worked

- Read-profile-first plus the novelty pass surfaced the AgentProtocol and
  session export commits as genuinely novel within minutes of harvest.
- The `surface_class: open_source_commits` and `evidence_floor:
  commit_diff_reviewed` fields made it obvious which harvest method was
  appropriate (gh API + diff review) and which evidence quality to require.
- Per-claim YAML entries made the profile update an obvious diff: 4 new
  claims, 0 refreshes (none of this window's findings hit existing claim
  surfaces), 1 cycle-completion update on the open_question claim.
- Inline source links plus the claims-block frontmatter read cleanly
  together. The prose did not feel cluttered.
- The partial-cycle scope (single provider, single window) was small enough
  to test the doctrine end-to-end without spinning up the full pipeline.

## Citation Discipline Issues Found

Beyond doctrine gaps, the cycle surfaced a citation issue in the prior run:

- The 2026-05-07 finding `gemini-reviewable-memory-and-trust` should have
  included PR #25814 (`feat(cli): secure .env loading and enforce workspace
  trust in headless mode`, merged 2026-04-23) and PR #25720 (`feat(core):
  enhance shell command validation and add core tools allowlist`, merged
  2026-04-23). Both fell in the previous window and would have raised the
  prior finding's recall score. Per Gap 2 above, these are absorbed into
  the new finding rather than retroactively edited into the old one.

## Productivity Check

The cycle took roughly 45 minutes of focused attention end-to-end. Outputs:

- 1 finding accepted as signal
- 4 new profile claims (`workspace-trust-headless-enforcement`,
  `shell-tools-allowlist`, `subagent-protocol-pluggable`,
  `session-export-import`)
- 1 cycle-completion update to `long-horizon-goal-primitive`
- 6 discrete doctrine gaps documented above
- 1 citation-discipline observation about the prior run

None of the gaps are blocking. Each is a specification clarification rather
than a structural redesign. The loop is productive enough to scale to two or
three providers in the next cycle.
