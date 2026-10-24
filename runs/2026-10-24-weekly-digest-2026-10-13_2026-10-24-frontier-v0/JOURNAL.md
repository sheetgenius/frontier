# Journal -- 2026-10-24 weekly digest

All times UTC on 2026-10-24.

## 09:00 -- scope

Operator request: reground Frontier on the latest date, with particular
attention to Cursor's Origin. Plan: refresh the profiles to 2026-10-24, run a
deep Origin read, then publish the weekly for 2026-10-13..2026-10-24 and a
wire, as in the previous cycle.

Window: strictly after 2026-10-13T23:59:59Z through each source's recorded
read on 2026-10-24 (11 reporting days). Parent: "The Handoff Has an API"
(2026-09-21..2026-10-13).

## 09:07 -- lanes

- Lane B (writing): `node ops/wire/harvest-feeds.mjs --since 2026-10-13` ->
  `feeds/writing.json`, 109 items from 10 feeds with in-window posts.
- Lane C (X): grok CLI signed in (`ops/grok/x-sweep.sh doctor` clean). Banter
  plus source sweeps and four topic sweeps (Origin, the agent landscape,
  challenger harnesses, the Pi ecosystem). 18 sweeps, 542 posts read, all
  exit 0 (`social/LANE-C.log`). Researchers got the sweeps as leads, never as
  receipts.

## 09:10 -- the operator narrows the run

A first launch covered all 22 watched sources at maximum research effort. The
operator asked to keep usage proportionate, to choose which harnesses are
worth tracking by what matters in the industry, to ground that choice in X
research, and to retire about three sources while adding one or two.

Decision, from adoption signals (GitHub stars, install counts, release
cadence) and the X sweeps' ranking of sustained discussion:

- Retired: heypi (no core release since 22 July, about 160 stars), Temporal
  Agent Harness (a community reference harness, about 120 stars) and Agent
  Flywheel (a setup script around agents tracked directly, about 1,700
  stars). Their profiles stay published with a "No longer tracked" notice;
  their ids stay in `sources/index.yml` so old findings and signals resolve.
- Added: OpenCode (tier 1, daily). It led the challenger sweep, had about
  221,000 GitHub stars at intake and about 2.5 million npm downloads across
  its two packages for 16-22 October (downloads count installs, not people;
  see `sources/opencode.notes.md`). Its V2 line shipped a public-contract
  break inside the window. Amp was the runner-up and is not added.
- Core for full refresh (12): Codex, Claude Code, Cursor, Copilot CLI,
  Gemini CLI, Pi, OpenClaw, Hermes, OpenHands, DeepSeek Harness, Paperclip,
  OpenCode. Paperclip moved into the core on its X discussion rank and
  adoption.
- Light scan (8): Eve, Grok Build, Antigravity, Omnigent, OMP, Agent Zero,
  Flue, Unreal Agent. One scan job (`harvest/watchlist-scan.md`); their
  profiles stay dated 13 October.

The operator also asked whether Pi was pointed at the wrong repository. It
is not: `earendil-works/pi` is the current home (the project moved from
badlogic's account), npm `@earendil-works/pi-coding-agent` 1.4.0 is `latest`,
and pi.dev's managed installer selects the same release. Pi got priority
depth in research and drafting.

## 09:09 -- research

Twelve researchers (gpt-6-astra, maximum effort, read-only) wrote
`harvest/<id>.primary.md`, each followed by an adversarial crosscheck
(gpt-6.1-sol) in `verify/`. One Claude Opus 5.5 agent wrote the Origin
companion `harvest/cursor.origin.md` (13 numbered changes, a feature case);
the Cursor crosscheck waited for it. Write-ups applied the crosschecks and
generated 321 findings with `findings-spec/fromharvest.mjs`.

Known trap recorded in the brief: Cursor's release-notes index lags its
per-product pages, so researchers read the per-product notes and archived
captures directly.

## 10:51 -- synthesis

Three lenses (cross-profile consistency, the window's patterns, continuity
with earlier issues), down from six last cycle, then a merge that read all 18
sweeps alongside the primary record. SYNTHESIS.md: six patterns, an Origin
feature-bar verdict (not yet), and twelve directive files.

## 11:18 -- profile drafting

Per profile: final draft, fact check against harvest and crosscheck, language
pass, one three-judge round (cold read, receipts, house bar), one fix pass,
then an independent receipts recheck of everything the fix changed. All 12
finished at v7 with a clean mechanical gate at 12:13.

## 12:15 -- install

Installed the 12 profiles. Coordinator edits: two headline-style labels and
headings restored to product names (Hermes, DeepSeek), one hygiene heading
normalized (OpenHands), OpenCode's lead reordered to open on the 20 October
break and its duplicated package list cut, `first_published` added for
OpenCode. Nine taglines rewritten to lead with each product's own news; the
set had fallen back into the "can do more, but the operator still owns it"
refrain the last set review removed. Build, integrity and static links clean.

## 12:17 -- signals

14 signals written (7 capability), then adversarially verified: 0 kept as
written, 14 corrected (nine substantive wording or channel corrections, five
date qualifications or added delivery receipts), 0 dropped.

## 12:31 -- social

Social pick: 44 URLs. Capture 44/44, 0 unavailable. Cards: 28 built; the
coordinator dropped a Chinese-language post and fixed inferred pronouns in
four card summaries and verdicts, leaving 27. Separately captured the 17
October @opencode incident post the OpenCode profile links; the profile now
reports what it says, as a statement.

## 12:50 -- issue drafting

Two drafts, a chief merge ("The Owner Can Be an Agent"), structure, fact and
language passes, then three judge rounds with fix passes and a receipts
recheck. Final v8 at 15:53; no round passed (cold 7, receipts 85-94, bar 7).

## 15:55 -- readability pass

Coordinator fixed five inferred pronouns and defined Origin's review modes,
then ran one readability pass with the cold reader's and the house-bar
judge's notes. Round 4: cold 7, receipts 90; fix and recheck. Round 5: cold
7. Stopped there rather than buy more rounds; the remaining complaints were
editorial and handled by hand (see qa.md).

## 16:45 -- install

Installed the issue, the index line and the 2026-10-24 wire (inferred
pronouns removed from the wire too). Placed five unplaced cards. Build,
integrity and static links clean.
