# QA -- 2026-10-13-profile-refresh-2026-09-21_2026-10-13-frontier-v0

## Coverage (computed from the run tree)

- Harvest files: 22, one per watched source
- Crosschecks: 22 (3 by Claude verifiers, 19 by gpt-6-astra)
- Findings: 494
- Profiles refreshed: 22, each with one "Where it stands, 2026-10-13" posture
- Synthesis: six lens analyses, SYNTHESIS.md, 22 directive files, set-review.md
- Lane B: 15/15 feeds, 161 items, offered to researchers as leads
- Lane C (X): down. The grok CLI was not signed in and the device-code login
  needs a person. No capture pass ran, so no profile quotes a post. Restore with
  `grok login --device-code` before the next cycle.
- Signals, digest, wire and social cards: none; this run refreshes profiles only.

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
- The profile template renders bodies with marked, which assigns no heading ids,
  and the static link check skips fragments. A rendered-page check found 20
  unresolved in-page links; the target headings now carry explicit ids. 60
  in-page links, 0 unresolved.
- npm publish times: Codex 0.162.1 (2026-10-09) and Claude Code 2.1.296
  (2026-10-09) are the newest releases in the window; Grok 1.0.52 is npm
  `latest`, with 1.0.53 to 1.0.58 on alpha or enterprise, as the profile says.
- `npm --prefix site run build`, `check-integrity.mjs` and
  `check-static-links.mjs`: clean.

## Dates

The cutoff is the full UTC day 2026-10-13. Hermes v0.22.0 (published
2026-10-14T03:21:46Z) is out of window and named as such. Harvests are dated to
the 2026-10-13 read.
