# QA -- 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0

## Coverage (computed from the run tree)

- Harvest files: 22, one per watched source
- Crosschecks: 22 (3 by Claude verifiers, 19 by gpt-6-astra)
- Findings: 494
- Profiles refreshed: 22, each with one "Where it stands, 2026-10-13" posture
- Synthesis: six lens analyses, SYNTHESIS.md, 22 directive files, set-review.md
- Lane B: 15/15 feeds, 161 items, offered to researchers as leads
- Lane C (X): down during the profile refresh (the grok CLI was not signed
  in), so no profile quotes a post. Restored on 2026-10-14 after the operator
  approved a device login: banter plus 9 source sweeps (340 posts read, all
  exit 0), 36 URLs chosen and captured URL-only, 36/36, 0 unavailable.
- Signals: 14 written (5 capability), adversarially verified: 6 kept, 8
  corrected, 0 dropped (verify/signals.crosscheck.md). Integrity indexes them.
- Social cards: 24, every fragment sliced from the capture; all placed in the
  issue.
- Wire: 6 relayed items (content/wire/2026-10-14.yml), each URL copied from
  the feed artifact and re-checked by a second model.

## Outage and cutover

The Claude research batches stopped when the coordinator hit its usage limit
and the session restarted. All 22 harvests and 3 crosschecks were on disk; the
rest of the run (19 crosschecks, write-ups, synthesis, drafting, judging) ran on
Codex CLI 0.162.1 with gpt-6.1-sol and gpt-6-astra. One Codex final-draft call
exited early and succeeded on retry. The 07:00 target was missed; drafting
finished at 10:53 MDT and the set was installed at about 11:40 MDT on 2026-10-14.

## Judges

Every profile went through two rounds of three judges, each followed by a fix
pass: cold read (gpt-6.1-sol), receipts (gpt-6-astra, opens the
claim-bearing links), house bar (gpt-6.1-sol, all fourteen exemplar points plus
the EDITORIAL.md profile bar). Pass requires a score of 8 or more and no
must-fix item. Scores below are cold / receipts / bar.

| Profile | Round 1 | Round 2 | Set-review issues |
| :--- | :--- | :--- | :--- |
| agent-flywheel | fail 6 / pass 10 / fail 7 | fail 7 / pass 10 / fail 7 | 1 |
| agent-zero | fail 7 / pass 10 / fail 7 | fail 7 / fail 8 / fail 7 | 0 |
| antigravity | fail 7 / pass 10 / fail 7 | fail 8 / fail 9 / fail 8 | 1 |
| claude-code | fail 7 / fail 8 / fail 7 | fail 8 / fail 8 / fail 8 | 0 |
| codex | fail 7 / fail 9 / fail 7 | fail 7 / fail 9 / fail 8 | 1 |
| cursor | fail 7 / fail 8 / fail 7 | fail 7 / pass 9 / fail 8 | 1 |
| deepseek-harness | fail 7 / pass 10 / fail 7 | fail 7 / fail 9 / fail 8 | 0 |
| eve | fail 7 / fail 9 / fail 7 | fail 8 / fail 9 / fail 7 | 1 |
| flue | fail 8 / fail 8 / fail 7 | fail 8 / pass 10 / fail 8 | 1 |
| gemini-cli | fail 7 / fail 8 / fail 7 | fail 8 / pass 9 / fail 8 | 0 |
| github-copilot-cli | fail 7 / pass 10 / fail 7 | fail 8 / fail 9 / fail 8 | 0 |
| grok-build | fail 8 / pass 10 / fail 7 | fail 7 / fail 8 / fail 8 | 2 |
| hermes-agent | fail 7 / fail 8 / fail 7 | fail 7 / fail 8 / fail 8 | 1 |
| heypi | fail 6 / pass 10 / fail 7 | fail 7 / fail 9 / fail 8 | 1 |
| omnigent | fail 7 / pass 10 / fail 8 | fail 8 / fail 9 / fail 7 | 0 |
| omp | fail 7 / pass 10 / fail 7 | fail 8 / pass 9 / fail 8 | 0 |
| openclaw | fail 7 / pass 10 / fail 7 | fail 8 / fail 9 / fail 8 | 1 |
| openhands | fail 7 / pass 10 / fail 7 | fail 8 / pass 9 / fail 8 | 0 |
| paperclip | fail 7 / pass 10 / fail 7 | fail 8 / pass 10 / fail 8 | 0 |
| pi-coding-agent | fail 7 / fail 8 / fail 7 | pass 9 / pass 9 / fail 8 | 1 |
| temporal-agent-harness | fail 7 / fail 9 / fail 7 | fail 8 / pass 10 / fail 8 | 1 |
| unreal-agent | fail 7 / pass 10 / fail 7 | fail 8 / pass 9 / fail 8 | 2 |

No profile cleared all three judges in either round. The bar judge demands every
exemplar point at once and moved from 7 to 7-8; the cold reader moved from 6-8 to
7-9. Round-2 receipt failures were precision items (a dropped qualifier, a
receipt moved off its claim-bearing words, an unpinned live doc page), applied in
the second fix pass. After that pass, a polish stage applied the set review and an
independent gpt-6-astra recheck reopened every fact changed since the judges'
last read; it corrected receipt placement, a scope qualifier or a navigation
link in 20 profiles and found nothing to correct in OpenHands and Pi.

## Set review

No cross-profile factual contradiction. Three set-level defects, all applied:
ten taglines sharing a "capability, but the operator still owns it" refrain,
four body headings using "Try X before maintaining Y", and an Unreal comparison
without comparator versions. The coordinator rewrote two taglines the reviser
had narrowed to a single bug fix (Grok Build, heypi).

## Coordinator checks after install

- Mechanical gate clean on all 22 installed profiles (finding ids resolve, one
  dated posture, ASCII, pinned GitHub receipts, no backstage vocabulary).
- Restored each profile's `label` to the product name; the editors had turned
  14 labels into headlines. Dropped `artifact_version` values the drafts had
  invented; Agent Flywheel's moved from 5 to 6.
- Normalized the opening title to `# <label>` (the template strips it) and the
  internal section to exactly `## Profile hygiene` (the template strips from it).
- The profile template rendered bodies with marked, which assigned no heading
  ids, and the static link check skipped fragments. A rendered-page check found
  20 unresolved in-page links. The site now gives every rendered heading a
  GitHub-style id and the static link check fails on any same-page fragment
  with no target; the explicit ids added at install were converted back to
  plain Markdown headings. 60 in-page links on profile pages, 0 unresolved.
  The new check also caught card note markers on 11 older run pages pointing
  at notes that render only on the digest page; they now link there.
- npm publish times: Codex 0.162.1 (2026-10-09) and Claude Code 2.1.296
  (2026-10-09) are the newest releases in the window; Grok 1.0.52 is npm
  `latest`, with 1.0.53 to 1.0.58 on alpha or enterprise, as the profile says.
- `npm --prefix site run build`, `check-integrity.mjs` and
  `check-static-links.mjs`: clean.

## Dates

The cutoff is the full UTC day 2026-10-13. Hermes v0.22.0 (published
2026-10-14T03:21:46Z) is out of window and named as such. Harvests are dated to
the 2026-10-13 read.

## The issue: "The Handoff Has an API"

Signals were written from the findings (gpt-6.1-sol, max effort) and then
attacked by an independent verifier (gpt-6-astra) that reopened each receipt:
6 kept as written, 8 corrected (channel, scope or wording), 0 dropped.

Social: the social editor chose 36 posts from the sweeps for what they carry,
including counter-reads, and wrote their URLs to two files. A separate capture
pass fetched those URLs without seeing why they were chosen or what they were
expected to say. The card editor sliced every quoted fragment from that capture
programmatically, adjudicated each claim card against a pinned primary receipt,
and kept 24 cards.

Drafting: two drafts written independently from the same record ("The Handoff
Is Becoming Agent Work", "The Handoff Has an API"); a chief editor took B's
spine and A's strongest passages. Then serial passes: structure, fact check
against harvest, crosscheck and profiles, language (humanizer and slop test).

Judges (pass at 8 or more with nothing to fix; receipts scored out of 100):

| Round | Version | Cold read | Receipts | House bar | Then |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | v4 | fail 7 | fail 92 | fail 7 | fix pass |
| 2 | v5 | fail 7 | fail 92 | fail 7 | fix pass |
| 3 | v6 | fail 7 | pass 98 | pass 8 | fix pass, receipts recheck (no corrections) |
| 4 | v9 | pass 8 | fail 85 | - | fix pass, receipts recheck |
| 5 | v11 | pass 8 | - | - | installed |

The cold reader failed three rounds on the same complaint: technical
compression that asks a newcomer to supply context. It was also reading quote
markers without their text. Round 4 followed a dedicated readability pass and
gave the cold reader the quote text inline. That pass decompressed the
reference sections (each note now opens with who is affected and what to do)
and removed gendered pronouns the editors had inferred for quoted people. The
receipts judge then caught six places where plainer wording had overstated a
protection or detached a receipt. All six were repaired. A final recheck
narrowed one more claim and added direct receipts to three.

Coordinator edits at install: two posts promoted to featured cards to break up
the densest stretches, one quote lead-in rewritten, last_updated set to the
publication date. The same pronoun fix was applied to seven card verdicts
(build.mjs and x-cards.yml, regenerated identically) and to the wire.
