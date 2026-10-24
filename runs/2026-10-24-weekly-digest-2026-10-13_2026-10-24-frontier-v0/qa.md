# QA -- 2026-10-24-weekly-digest-2026-10-13_2026-10-24-frontier-v0

## Coverage (computed from the run tree)

- Harvest files: 12 core sources, one each; the Origin companion
  `harvest/cursor.origin.md`; one light scan of the other 8 watched sources
  (`harvest/watchlist-scan.md`)
- Crosschecks: 12, one per core harvest (gpt-6.1-sol)
- Findings: 321
- Profiles refreshed: 12, each with one "Where it stands, 2026-10-24"
  posture; OpenCode is new. The 8 scanned profiles stay dated 2026-10-13.
- Watchlist: 23 sources in `sources/index.yml`; 20 active, 3 retired on
  2026-10-24 (heypi, Temporal Agent Harness, Agent Flywheel), 1 added
  (OpenCode)
- Synthesis: three lens analyses (consistency, lens, thread), SYNTHESIS.md,
  12 directive files
- Lane B: 109 items from 10 feeds with posts in the window, offered to
  researchers as leads
- Lane C (X): banter, 13 source sweeps and 4 topic sweeps (Origin, the
  agent landscape, challenger harnesses, the Pi ecosystem): 18 sweeps, 542
  posts read, all exit 0. The social editor chose 44 URLs; the capture pass
  fetched them URL-only, 44/44, 0 unavailable.

## Usage choices

The operator asked to keep usage proportionate. Compared with the 2026-10-13
run: 12 full refreshes instead of 22, three synthesis lenses instead of six,
one judge round per profile instead of two, and one Claude agent (the Origin
deep-dive). Research, verification, writing and judging ran on Codex CLI
(gpt-6-astra and gpt-6.1-sol); the X lane ran on the grok CLI.

## Profile judges

One round of three judges per profile, then one fix pass and an independent
gpt-6-astra recheck of every fact the fix changed: cold read (gpt-6.1-sol),
receipts (gpt-6-astra, opens the claim-bearing links), house bar
(gpt-6.1-sol). Pass requires 8 or more and no must-fix item. Scores are
cold / receipts / bar.

| Profile | Round 1 | Final |
| :--- | :--- | :--- |
| claude-code | fail 7 / pass 10 / fail 8 | v7, gate clean |
| codex | fail 6 / fail 9 / fail 7 | v7, gate clean |
| cursor | fail 7 / fail 9 / fail 7 | v7, gate clean |
| deepseek-harness | fail 7 / pass 10 / fail 7 | v7, gate clean |
| gemini-cli | fail 7 / pass 10 / fail 7 | v7, gate clean |
| github-copilot-cli | fail 7 / pass 10 / fail 8 | v7, gate clean |
| hermes-agent | fail 7 / pass 9 / fail 7 | v7, gate clean |
| openclaw | fail 7 / pass 10 / fail 8 | v7, gate clean |
| opencode | fail 7 / pass 9 / fail 8 | v7, gate clean |
| openhands | fail 7 / pass 10 / fail 7 | v7, gate clean |
| paperclip | fail 8 / fail 9 / fail 7 | v7, gate clean |
| pi-coding-agent | fail 7 / pass 10 / fail 8 | v7, gate clean |

No profile cleared all three judges in its single round. The fixes it asked
for were applied once and rechecked for receipts; the profiles were not
re-judged. That is the cost of the lighter setting, recorded here rather than
hidden.

## Coordinator checks after install

- Mechanical gate clean on all 12 installed profiles (finding ids resolve,
  one dated posture, ASCII, pinned GitHub receipts, no backstage vocabulary).
- Labels and opening titles restored to product names where the editors had
  written headlines (Hermes heading; DeepSeek label and heading); OpenHands'
  internal section renamed to exactly `## Profile hygiene`.
- OpenCode: lead reordered to open on the 20 October public-contract break;
  a package list that appeared twice now appears once; `first_published`
  set. The 17 October Console incident post was captured URL-only and the
  profile now reports what it says, as a statement.
- Taglines: nine rewritten. Left alone, the set had returned to a shared
  "can do more, but the operator still owns it" construction.
- `npm --prefix site run build`, `check-integrity.mjs` and
  `check-static-links.mjs`: clean. Rendered checks: retired profiles show the
  "No longer tracked" notice, the homepage watchlist lists 20 active
  sources, and /sources/ shows OpenCode active and the three retirements.

## Dates

The cutoff is each source's recorded read on 2026-10-24 UTC, not the end of
the UTC day. Window notes in the issue and the cards say so.

## The issue: "The Owner Can Be an Agent"

Signals were written from the findings (gpt-6.1-sol, max effort) and then
attacked by an independent verifier (gpt-6-astra) that reopened each receipt:
0 kept as written, 14 corrected (nine substantive wording or channel
corrections, five date qualifications or added delivery receipts), 0
dropped. The coordinator retitled the Pi adapter signal: the adapter that
deleted its interpreter is a third-party package, not Pi itself.

Social: the social editor chose 44 posts from the 18 sweeps for what they
carry, including counter-reads, and wrote their URLs to two files. A
separate capture pass fetched those URLs without seeing why they were chosen
or what they were expected to say: 44/44, 0 unavailable. The card editor
sliced every quoted fragment from that capture programmatically,
adjudicated each claim card against a pinned primary receipt, and built 28
cards. The coordinator dropped one (a Chinese-language post the issue could
not quote without translating it) and removed gendered pronouns the editor
had inferred for four quoted people, leaving 27. All 27 are placed in the
issue. Avatars: 22 of the 25 quoted accounts have one; three use a monogram (two returned
placeholder images, one was rate-limited on two retries).

Drafting: two drafts written independently from the same record; a chief
editor merged them. Then serial passes: structure, fact check against
harvest, crosscheck and profiles, language.

Judges (pass at 8 or more with nothing to fix; receipts scored out of 100):

| Round | Version | Cold read | Receipts | House bar | Then |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | v4 | fail 7 | fail 88 | fail 7 | fix pass |
| 2 | v5 | fail 7 | fail 94 | fail 7 | fix pass |
| 3 | v6 | fail 7 | fail 85 | fail 7 | fix pass, receipts recheck (v8) |
| 4 | v9 | fail 7 | fail 90 | - | readability pass first; fix pass, receipts recheck |
| 5 | v11 | fail 7 | - | - | coordinator edits, installed |

No round passed. The receipts failures were precision items (a dropped
condition, a moving registry link standing in for a dated channel, a
statement worded as a verified repair), each applied and rechecked. The
house-bar judge's blocking points were the brief's length (19 entries in
v6, 12 at install) and facts told twice. The cold reader held at 7 across
five rounds on the same impression: careful technical judgment that asks
more scanning of the reader than it should, with stalls on undefined terms.

Coordinator edits after the judges:

- Removed gendered pronouns the editors had inferred for five quoted
  people.
- Defined Origin's three code-owner review modes (Off, Classic, Agentic) at
  first use, receipted to the Origin release note.
- Rewrote the Origin CI advice: the risk is that a skipped or neutral agent
  result satisfies a required check, so test that and keep a check that
  passes only by running.
- Explained sec-default and its verdict holds in the brief (checked against
  the v2.1.310 README) and dated the stable-selector reading to 24 October.
- Placed five built-but-unplaced cards where the prose already made their
  point (Tibo and Noah replace paraphrases; Cloudflare, ClaudeDevs and
  Thariq where the argument names them).
- Restored capitals on two names.

`npm --prefix site run build`, `check-integrity.mjs` and
`check-static-links.mjs`: clean after install.
