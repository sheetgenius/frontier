# Audit: 2026-06-03 weekly digest

Process and doctrine observations from the first end-to-end multi-agent
workflow run. Per the operating cadence, unresolved questions are recorded here;
none are self-committed into doctrine.

## 1. Harvest decomposition ran hot (process gap)

The harvest produced **100 findings and 63 raw signals for a 7-day window**
(the prior 14-day digest had 11 findings / 14 signals). Cause: harvesters
treated individual commits as findings and promote-stage agents emitted a signal
per consequence without enough cross-checking against the decision-bearing bar.

The method already says a finding is source-event-shaped (a coherent
release is one finding) and signals should be *rarer* than findings. The harvest
honored the first rule unevenly (some providers grouped releases; others split
per commit) and the second not at all (63 signals : 100 findings is not "rarer").

The published set was curated by hand to 32 decision-bearing signals. **Open
question for a future cycle:** should the promote stage carry an explicit
"signals are rarer than findings; one operator decision each" instruction with a
ratio sanity-check in QA, rather than relying on post-hoc curation? This is a
prompt/QA-discipline fix, not a doctrine change — flagged here, not drafted as an
amendment.

## 2. Receipt hygiene is source-specific (source-contract follow-up)

Flue publishes **no GitHub Releases** — `github.com/withastro/flue/releases` is
empty. Its canonical receipt is the version-tagged `CHANGELOG.md`. Seven Flue
signals initially cited the empty `/releases` page and failed verification
purely on that; the facts were real. All were repointed to
`https://github.com/withastro/flue/blob/main/CHANGELOG.md`.

**Recommended follow-up (source contract, not doctrine):** update
`sources/flue.yml` `primary_surfaces` so the canonical receipt surface is
`CHANGELOG.md` (and/or release *tags*), not the empty `/releases` page. This is
a correctness fix to a machine contract and can be applied directly in a
follow-up commit; it was left out of this cycle commit to keep the run diff
focused.

## 3. Date verification must cross-check the YEAR (integrity lesson)

Pi v0.78.0's release page showed a **2024** date to one verifier while the
harvester recorded **2026**-05-29. The window filter is month/day-shaped in
practice; a stale or mis-rendered year slips through. The adversarial verifier
caught it, but the harvest should not have proposed it. **Lesson:** harvest and
verify prompts should require a full ISO date and an explicit year-in-window
check, not just "is it dated late May / early June." Worth folding into the
harvest prompt contract next cycle.

## 4. The "two commits, one operator action" composite (worked example, no change)

OpenHands shipped axios (CVE-2026-44492, commit 73d1d9a) and dompurify
(CVE-2026-41238, commit b025cd2) as two commits. The verifier correctly refuted
the "same single action / single receipt" framing. The resolution did **not**
need new doctrine: amendment-005's single-consequence-composite rule already
covers it — the operator consequence is singular ("rebuild the frontend bundle")
even though the source events are two, so it is one signal carrying *two*
receipts. This run is a clean worked example that the amendment-005 granularity
rule handles multi-commit, single-decision security clusters correctly.

## 5. Signal pages / internal linking deferred (divergence noted)

The prior digest's `operator_brief` linked to internal `/signals/<id>/` pages.
This run did not generate per-signal site pages, so the published `operator_brief`
links directly to external primary-source receipts instead. Consistent with the
v0 file-first posture (canonical state is the checked-in files; the static
renderer is downstream), but a divergence from the prior digest's rendered shape
worth reconciling when signal-page generation is wired.

## 6. The adversarial-verify stage earned its place (process win)

The verify stage refuted 23 of 63 receipts and is the only reason the integrity
failures did not ship. Recommend it as a standing stage in every harvest
workflow, not an optional one. It is the operational embodiment of "no operator
consequence without a receipt" — applied to the machine's own output.
