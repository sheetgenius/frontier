# Audit: 2026-06-16 .. 2026-06-23 weekly digest ("Protected on Paper")

Process and doctrine observations. Per the operating cadence, unresolved
questions are recorded here; charter/research-contract changes are drafted in
`charter/proposed/`, not self-committed.

## 1. Channel as a first-class evidence property — now drafted (amendment 010)

For the second consecutive window, the dominant editorial hazard was not date
accuracy but **release-channel** accuracy: a fix merged to a default branch, a
preview tag, or a later version is not a fix in the binary an operator runs.
This window it was structural, not incidental — five of ten providers had their
sharpest work off the release channel (OpenHands' entire cluster two windows
unreleased; Gemini's security fix preview-only a second window; Hermes' and
Paperclip's newest work on main/master past a fresh tag; Flue's headline staged
in `## Unreleased`).

The 2026-06-16 audit recommended channel resolution by git ancestry as a
standing process step; this run did it for every claim. The recommendation has
now earned the move from process convention to **doctrine**: findings and signals
should carry an explicit `channel` field, and the house rule's "no operator
consequence without a receipt" should be read to include "a receipt names the
channel." Drafted as **amendment 010** in `charter/proposed/`. The loop does not
self-commit it.

## 2. Declared vs enforced — a distinct evidence sub-type (doctrine question)

Claude Code disclosed that two announced authority features (the subagent depth
cap and `Agent()` permission rules) did not actually *bind* until fixes this
window. This is a different failure mode from the channel gap: the feature was in
the shipped binary, but unenforced. It raises a doctrine question the loop cannot
resolve alone: should an authority claim in a profile distinguish "announced /
present" from "enforcement verified," and should signals carry an
`enforcement: declared | verified` qualifier? Recommend the next council pass
pressure-test this against the Claude Code profile's new enforcement-gap claims.
Not drafted as an amendment yet — the schema shape is unclear (it may fold into
amendment 010's channel field, or it may be orthogonal).

## 3. Amendment 007 is strongly motivated by this window

Every security advisory this window is sharply deployment-class-scoped: "shared
or cloud-tenant pool" (Paperclip), "if you expose a dashboard or API server"
(Hermes), "a build from main" (OpenHands), "stable users installing third-party
skills" (Gemini). The flat `security_advisory: true` boolean that amendment 007
proposes to scope would over-claim each of these as a blanket upgrade imperative.
This run's signal authoring carried the scoping in prose by hand. Recommend
**prioritizing amendment 007 for ratification** — it is no longer a single-case
refinement but a recurring need.

## 4. Single-source extraordinary claims — attribution worked; codify it?

The Hermes "in-the-wild campaign" was the run's one extraordinary claim resting
on a single project-controlled source (the maintainer's own commit narrative).
The pipeline handled it correctly: the dedicated verifier flagged it
UNCONFIRMED-SINGLE-SOURCE, and the digest attributes rather than asserts it, with
a caveat subsection and an operator action that holds regardless. Worth
considering a small doctrine line: an extraordinary claim (active exploitation,
breach, "in the wild") whose only source is the affected project gets attributed
to that source, never stated as independently confirmed. Candidate for a future
amendment; surfaced here, not drafted.

## 5. Agent Zero — "silent" is channel-scoped, not project-scoped

The silent-window result is honest for what operators run (zero in-window commits
to the default branch), but a non-default `ready` branch took 23 in-window
commits. The profile and digest both now caveat this. Minor doctrine note: a
"silent window" declaration should specify the surface (default branch / release
channel), because off-branch staging is invisible to a release-channel harvest
yet material to next cycle's expectations.

## 6. Process: the pyramid held, with two recovered failures

Harness shape: 10 Opus harvesters (sub-spawn authorized) -> 5 Opus adversarial
verifiers (one dedicated to the lede) -> coordinator synthesis -> 1 signals
author + 9 profile refreshers (Opus). The adversarial verify stage did real work:
it forced the Hermes campaign attribution, dropped a mis-attributed Hermes commit,
caught the Flue staged-vs-shipped misframe, corrected an OpenHands merge-SHA
transcription error, and fixed two Claude Code version/framing precision errors —
all before publication.

Two subagents hit transient mid-response API errors: the first signals-author
(died before writing the file — re-run cleanly) and the OpenHands profile editor
(died *after* its Write; the file was verified structurally complete and
YAML-valid, so no re-run needed). Lesson reinforced from the prior cycle: instruct
subagents to write durable artifacts EARLY and place the complete result in the
file, treating the final chat message as disposable — a connection drop should
never lose work. Both recovered without data loss.

## 7. Freshness / coverage status

All ten profiles refreshed to `last_updated: 2026-06-23` (Agent Zero a
light-touch silent-window note; the other nine substantive editorial passes).
Coverage and depth remain met. This is the providers' second-or-later refresh
beyond initial build, so the Freshness operational-target condition stays
satisfied.

## 8. Amendments 007 and 010 ratified (conversational pass)

Both ratified and absorbed into `RESEARCH_CONTRACT.md`: 007 adds
`affected_deployment_class` + `exploit_precondition` to `security_consequence`
when `security_advisory: true`; 010 adds `channel` (tagged-release |
main-unreleased | preview-or-beta) as a required field on findings and signals.
Files moved `proposed/ -> ratified/`; 008 (composition relation subtypes) was
explicitly held — bigger rendering/migration lift, not exercised this window.

Backfill scope (honest, not retroactive-fabrication): the new advisory
sub-fields were populated on every `security_advisory: true` signal in the two
files this pass touched — the 2026-06-23 run (4) and the 2026-05-27 run (2,
including the Honcho signal using 007's supplied verbatim language). The
2026-06-03 and 2026-06-16 runs' advisory signals are grandfathered as whole
untouched units; `channel` is likewise grandfathered before 2026-06-16. The
discipline binds going forward; git history is the audit trail.

## 9. Integrity checker is red and structurally stale — follow-up (NOT caused by ratification)

`site/scripts/check-integrity.mjs` reports **132 reference-integrity issues** at
HEAD, and did so *before* this ratification. Root cause is unrelated to the
amendments: the checker indexes findings only from `runs/*/findings/*.md`, but
runs since 2026-06-16 record findings in consolidated `harvest/<provider>.md`
files. So every `finding_id` reference from the 2026-06-16 and 2026-06-23
profiles, signals, and digests fails to resolve (51 profile-claim, 53
profile-posture, 25 signal, 3 not-promoted).

Consequence for ratification: the integrity-checker enforcement step in 007's
and 010's "Applied To" is **deferred**. Adding `security_advisory`/`channel`
required-field gates to a checker that cannot read the current run format would
gate nothing. Recommended follow-up (separate from doctrine): teach
`check-integrity.mjs` to index harvest-format findings (parse finding ids from
`harvest/*.md`, or have runs also emit per-finding stubs), bring it back to
green, *then* add the two new schema validations. Tracked here for the next
maintenance pass; not bundled into the ratification commit.
