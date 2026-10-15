# Journal -- 2026-10-13 profile refresh

## 2026-10-13 01:50 PDT -- scope

Operator request: bring every watched harness to its latest released state,
with in-depth research, then per-source write-ups, then a cross-watchlist
synthesis, then final drafting with heavy editing passes. Target finish around
07:00 PDT.

Scope is the 22 profiles in `content/profiles/`. This run publishes no digest
and no signals: it refreshes findings and profiles only (frontier-cycle step 9,
run for the whole watchlist). Baseline: each profile's "Where it stands,
2026-09-21" posture (Unreal Agent: 2026-09-23) and the parent run
`2026-09-21-weekly-digest-2026-08-20_2026-09-21-frontier-v0`, whose
"Observed after window close" lists are the first leads.

Window: 2026-09-21..2026-10-13 (22 days).

## 2026-10-13 01:58 -- lanes

- Lane B (writing): `node ops/wire/harvest-feeds.mjs --since 2026-09-21` ->
  `feeds/writing.json`. 15/15 feeds live, 161 items (sshh, crawshaw, swyx
  returned 0 items in the window).
- Lane C (X): down. `ops/grok/x-sweep.sh doctor` reports the grok CLI is not
  signed in, and that needs an interactive device-code login that the
  unattended run cannot do. No capture pass, so profiles quote nobody. Primary
  sources carry the run.

## 2026-10-13 02:10 -- research launched

Harness shape: coordinator plus, per source, a pipeline of three max-effort
agents: researcher (writes `harvest/<id>.primary.md` per
`RESEARCHER-BRIEF.md`), adversarial verifier (writes
`verify/<id>.crosscheck.md`), write-up author (applies the crosscheck,
generates `findings/` with `findings-spec/fromharvest.mjs`, writes an internal
memo and a first profile draft outside the repository). Two parallel batches
of 11 sources. Upstream clones live outside the repository; agents may write
only their own run files and never run git write commands in the repository.

## 2026-10-14 05:24 MDT -- cutover to Codex

The Claude batches stopped when the coordinator hit its usage limit and the
session restarted. On disk: all 22 harvests complete (each with Install
today, numbered changes, prior-claims re-check and surfaces checked) and 3
complete crosschecks (antigravity, claude-code, flue). No findings and no
drafts. The scratch directory under /private/tmp was cleared by the restart,
so the gate and orchestrator were rebuilt under the gitignored
`tmp/refresh-2026-10-13/`.

At the operator's direction the rest of the run is driven through Codex CLI
0.162.1 (`codex exec`): `gpt-6-astra` for adversarial verification,
fact-checking and receipt judging; `gpt-6.1-sol` for write-ups, synthesis,
drafting, editing and the bar and cold-read judges. Orchestrator:
`tmp/refresh-2026-10-13/codex/orchestrate.mjs` (not committed). Order:
verify the 19 unchecked harvests and write up all 22 -> six synthesis lenses
and a merge -> per profile: final draft, structural edit, fact-check,
language pass, three-judge panel, up to two fix rounds -> whole-set review.
The harvests stay dated to the 2026-10-13 read; the profiles are dated
2026-10-13.

## 2026-10-14 06:50 MDT -- write-ups complete

All 22 sources verified and written up: 494 findings generated from the
corrected harvests, 22 first drafts, every one clean on the mechanical gate.
No stage failed in this phase.

## 2026-10-14 07:58 -- synthesis complete

Six lenses returned (consistency, lens, thread, utility, skeptic, comparison);
the merge wrote SYNTHESIS.md and one directive file per profile (112 lens
directives merged into 88 edits). Where lenses disagreed on a fact, the owning
harvest decided; the resolutions are listed at the end of SYNTHESIS.md.

The orchestrator was restarted between synthesis and drafting to drop its
08:45 deadline, which would otherwise have skipped the judges' fix rounds.
The 07:00 target was already lost to the usage-limit pause; quality was kept
over the clock.

## 2026-10-14 10:53 -- drafting complete

Per profile: final draft (with the synthesis directives), structural edit,
fact-check against harvest and crosscheck, language pass, then two rounds of
the three-judge panel (cold read, receipts, house bar), each followed by a fix
pass. One Codex final-draft call exited early and succeeded on retry. No profile cleared all three judges in either round: the bar judge
requires all fourteen exemplar points, and scores rose from about 7 to about 8
between rounds. Round-2 receipt failures were precision items (a dropped
qualifier, a receipt moved off its claim-bearing words, an unpinned live doc),
not wrong facts; they were applied in the second fix pass.

## 2026-10-14 11:11 -- set review and polish

The whole-set review found no cross-profile contradiction and three set-level
defects: ten taglines sharing one cautionary refrain, four body headings using
the same "Try X before maintaining Y" formula, and an Unreal comparison that
named no comparator versions. The review recorded these in prose but returned
an empty list, so the coordinator parsed them into per-profile issues. A last
pass per profile applies them, normalizes headings and in-page links, and then
an independent receipts check re-opens every fact changed since the judges'
last read.

## 2026-10-14 11:40 -- installed

All 22 polished profiles installed in content/profiles. Coordinator fixes after
install: labels restored to product names (14 had become headlines), invented
artifact_version values dropped, opening title and Profile hygiene headings
normalized to what the template strips, explicit ids on 20 heading targets of
in-page links (the template's renderer assigns none), two taglines rewritten.
npm publish times spot-checked for Codex, Claude Code and Grok. Build,
integrity, static links and a rendered-page anchor check are clean. Committed
locally; not pushed.

## 2026-10-15 09:00 -- issue published

The X lane came back on 2026-10-14 after the operator approved a device login.
Signals (14, verified 6 kept / 8 corrected), sweeps (10), pick (36), blind
capture (36/36), cards (24), wire (6). Two drafts, chief merge, structure, fact
and language passes, three judge rounds; the cold reader stayed at 7. A
readability pass with quote text visible to the cold reader brought it to 8;
the receipts judge failed that pass on six overstatements, all repaired and
rechecked. Coordinator: two featured cards, pronoun fixes in the issue, card
verdicts and wire. Build, integrity and static links clean.
