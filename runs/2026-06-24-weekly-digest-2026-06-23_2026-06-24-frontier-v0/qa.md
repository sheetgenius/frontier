# QA — 2026-06-23..2026-06-24 ("Governance, Sold Separately")

Scored separately for recall and editorial quality per RESEARCH_CONTRACT Backtest
Modes, plus the mandatory cycle checks.

## Mandatory checks (RESEARCH_CONTRACT QA Discipline)

1. **Signals rarer than findings.** PASS. 5 signals / 13 findings (ratio 0.38).
   The decision-bearing heypi items (approvals-not-default, 0.2.0-beta breaking
   permissions, secrets-at-rest, runtime choice) plus the one material watchlist
   advisory (OpenHands CVE batch). Onboarding, the governance-shell thesis, channel
   discipline, and durability were carried as findings/profile, not promoted.

2. **Dates verified to the year, in-window.** PASS. heypi 0.2.0-beta.0 = 2026-06-23
   (CHANGELOG + tags). OpenHands CVE commits = 2026-06-23 (main). Codex alpha tags,
   Agent Zero ready commits, Flue @flue/react beta = 2026-06-23. Flue 0.11.0 =
   2026-06-09 (cited as a prior-window correction, explicitly out-of-window and
   labeled as such). HN Show HN date corrected to 2026-05-29 via the HN Firebase
   API (a prior WebFetch hallucinated 2024; discarded). No 2026-06-24 entries
   existed on any surface; the window's substance is all 2026-06-23.

3. **Every promoted signal's receipt adversarially verified.** PASS (after Codex
   critique + coordinator re-verification). A Codex high-reasoning critique
   (review/codex-review.md) flagged three P1s: mutable `main` receipts, the
   "nothing requires approval" overstatement, and the OpenHands CVE batch resting
   on a generic commits-page receipt. Codex itself ran in a read-only sandbox and
   its WebFetch re-reads were unreliable (it reported heypi pinned
   `@earendil-works/pi-coding-agent ^0.75.5` and latest tag `0.1.3` — both wrong),
   so the coordinator re-verified each disputed fact against immutable primary
   sources:
   - heypi package.json AT TAG 0.2.0-beta.0 confirms `^0.79.6` (Codex's ^0.75.5 was
     a sandbox artifact). All heypi receipts re-pinned from `main` to the
     `0.2.0-beta.0` tag (immutable).
   - tags page confirms 0.2.0-beta.0 is the most recent tag (2026-06-23).
   - agent docs confirm `instructions.md`/`system.md` (no SOUL.md) — profile correct.
   - OpenHands CVE batch confirmed with exact PRs/SHAs: #14943/dcb840b (CVE-2026-44727
     jupyter-server), #14872/0b7d2d4 (CVE-2026-49458 dompurify), #14944/d9cefcc
     (GHSA msgpack), #14946/f08e219 (CVE-2026-45409 idna), #14945/129584f (GHSA bleach).
     The signal, finding, and harvest now carry per-PR receipts; `security_advisory:
     true` is defensible. The overstated approval lines in the profile and digest
     were corrected ("no global approval posture" rather than "nothing requires
     approval", since the bash classifier does gate). Lesson: a read-only external
     critic catches discipline gaps even when its own fetches are unreliable; treat
     its factual assertions as hypotheses to re-verify, not findings to apply.

## Recall

- Coverage: all 11 sources checked for the 2026-06-23..2026-06-24 window; 6 of 10
  prior sources had no material change (recorded explicitly in harvest/watchlist.md
  with last-seen versions, not silently dropped).
- heypi initial build: tags 0.1.0..0.2.0-beta.0 enumerated with dates and channel;
  architecture, defaults, and governance posture sourced to docs + package.json +
  CHANGELOG.
- Known risk: the heypi getting-started/quickstart doc slugs 404'd at guessed
  paths; quickstart specifics rest on the docs nav + CHANGELOG + a search snippet,
  not a clean page fetch. Scaffolder claim (`npm create heypi`) is sourced to the
  0.1.3 CHANGELOG entry, which is solid. Pi-side numbers (stars/version) were
  summarizer paraphrase and deliberately NOT cited.

## Editorial

- Cross-provider synthesis thesis (amendment 009): PRESENT and explicit —
  "the agent loop is commoditizing; the authority shell is unbundling into its own
  product, and the saying-yes is opt-in, undocumented, or unreleased." Ties heypi
  (sells the shell, off by default), Pi (refuses governance), EVE (advertises
  undocumented approval gates), and OpenHands (CVE batch merged-not-shipped) into
  one frame that no single release shows alone.
- Accessibility question answered: who can use heypi now (a team with a developer,
  via `npm create heypi`, on one host), what got easier (a shared governed agent in
  existing channels), and the authority-visibility cost (headline controls off by
  default).
- Marketing-vs-substance separation (run-specific gate): PASS. The digest and
  profile explicitly distinguish heypi's landing-page claims from its docs
  (approvals not default; "audit trail" = trace events in a default-off panel;
  bold positioning lines live only on the landing page).
- Bitter not the protagonist: PASS. Bitter/Factory intake confined to the
  backstage note; the digest stands alone for a non-Bitter reader.
- Citation discipline: inline links on claim-bearing phrases; operator_brief uses
  the working inline `<a href="/signals/...">` pattern (NOT the trailing-bare-URL
  pattern that the site audit found broken in the two prior digests). Em-dashes
  avoided in new prose per the ASCII house rule.

## Integrity / build

- `check-integrity.mjs`: clean (244 findings, 139 signals, 11 watchlist sources).
- `npm run build`: completes; link-graph check clean once this run's manifest.yml
  is present (findings are manifest-gated in the site loader).
