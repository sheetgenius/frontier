# Loop 2 Result — Deeper Improvements Loop

Ten rounds of council-guided improvement over Loop 1's foundation. Loop 1
shipped the architecture (signal pages, Operator Brief, profile stance,
llms.txt, link-graph check, front-door trust). Loop 2 went deeper: editorial
section structure, page-level completeness, quality gates, and CLI ergonomics
for the council itself.

## Round-by-round summary

| Round | Subject                                                  | Key ship                                                                                       |
|------:|----------------------------------------------------------|------------------------------------------------------------------------------------------------|
|     1 | Priority-map council                                     | Ranked 5 highest-leverage remaining gaps + 5 rejected + 1 missed                              |
|     2 | Run/Evidence page + profile claim links                  | `Artifact contents` section, sources/contracts/signals back-link block, claims → finding pages |
|     3 | Signal index discovery + finding pages                   | Source filter chips, month grouping, per-source pages, FindingFooter metadata block            |
|     4 | Sources page expansion + track tagging                   | 12-field source contract cards; 41 signals tagged with 4 candidate tracks                      |
|     5 | (Tracks shipped in R4)                                   | Track chips render on signal cards, no nav lock-in yet                                         |
|     6 | Sections doctrine proposal                               | `charter/proposed/amendment-004-establish-publication-sections.md` written from deep research  |
|     7 | Amendment 004 refined from pressure-test council         | Platform → Platform Adoption + Rule 5 (evaluation/governance routes to Control Plane)         |
|     8 | Integrity checker + accessibility_consequence schema     | `npm run check:integrity` ships; amendment adds accessibility triad requirement                |
|     9 | External link health checker                             | `npm run check:links` ships; caught and fixed first real broken receipt (paperclip v2026.511.0)|
|    10 | Integration verify + result                              | This document. All three checks (integrity, link-graph, build) clean.                          |

## What's now live

### New pages and surfaces (all built, deployed via `git push`)

- `/runs/[id]/` shows the full artifact contract — sources harvested, source
  contracts, accepted signals, file-by-file artifact listing with both internal
  and GitHub blob links.
- `/findings/[finding]/` and `/findings/[runId]/[finding]/` carry a metadata
  block with confidence/actionability/accessibility/relevance fields plus
  back-links to signals citing the finding and profiles citing it.
- `/signals/` has source filter chips at the top + month grouping below.
- `/signals/source/[slug]/` ships per provider (10 pages).
- `/profiles/[slug]/` Active Claims and Open Questions are now links to their
  supporting finding pages.
- `/sources/` shows the full 12-field source contract per source (primary
  surfaces with watch focus, accepted/rejected evidence, default actionability,
  research lenses, high-signal patterns, discovery state, open questions,
  footer with GitHub blob + profile + signals links).

### Quality gates

- `npm run check:integrity` — offline internal reference checker. Validates
  profile claims, posture_basis, signal finding_ids, supporting_findings,
  digest top_signal_ids, Operator Brief inline signal links, not_promoted
  entries. Currently: clean. 25 findings + 32 signals indexed.
- `npm run check:links` — external receipt health checker. Discovers ~190
  outbound URLs across content/runs/sources, segments by trust class
  (evidence vs markdown vs yaml), fetches with per-origin throttling +
  caching, classifies status (ok/redirected/broken/auth_wall/retry), adds
  GitHub-specific diagnostics. Reports to `runs/link-health/latest.json`
  and `.md`. Currently: 0 evidence-class broken, 0 redirected; remaining
  issues are markdown-class or auth-walled (npm 403s).
- Build-time link-graph check (Loop 1) still runs from the homepage
  frontmatter: `[link-graph] clean` on every build.

### Doctrine in flight

- `charter/proposed/amendment-004-establish-publication-sections.md` —
  proposes three canonical editorial sections (Control Plane, Workcell,
  Platform Adoption), routing rules for ambiguous signals, the
  `accessibility_consequence` schema requirement, the editorial commitment
  to cover all sections every cycle. Three councils informed the amendment:
  deep-research synthesis from doctrine, pressure-test that renamed
  Platform → Platform Adoption, accessibility-axis council that added the
  triad requirement. Status: **proposed, awaiting human ratification**.
  When ratified, it triggers schema migration (`tracks:` → `section:`),
  digest body restructure, section landing pages, llms.txt update.

### Receipt fix surfaced by the loop

- The paperclip finding cited "v2026.511.0" which was never tagged in the
  upstream repo. The link health checker flagged the 404; investigation
  showed the actual release was v2026.512.0. Corrected in the finding, the
  May 12 digest's three references, with a self-documenting note in the
  finding body. Run audit, manifest, and weekly fragment left frozen as
  historical artifacts.

### Bitter CLI improvements (a side effect)

While running this loop, a parallel goal-driven codex agent shipped two
new bitter macro subcommands that make council observability tractable:

- `bitter macro progress` — phase / per-child state / delta counts /
  approximate tokens / elapsed, in one terse command.
- `bitter macro tail [--child <id>]` — `tail -f`-style live stream of the
  currently-streaming child or a named child.

Committed at /Users/c3po/co/bitter as `6c1d974`, `1542c93`, `acfdb48`.
All 1904 tests pass.

## Councils run this loop

| # | Topic                                              | Outcome                                                          |
|--:|----------------------------------------------------|------------------------------------------------------------------|
| 1 | Priority-mapping for remaining gaps                | 5 ranked priorities; signal discovery + finding pages + sources + link health + run pages |
| 2 | Signal index design + finding-page metadata        | Option D (per-source pages + chip row); finding metadata block spec |
| 3 | Sources page expansion design                      | 12 ordered fields, header framing, 3 explicit skips              |
| 4 | External link health checker design                | Node CLI, JSON-first reports, GitHub diagnostics, "Soft-OK drift" |
| 5 | **Deep research: 3 sections from doctrine**        | Control Plane / Workcell / Platform, rejected Authority/Evidence/Accessibility |
| 6 | Pressure-test the sections (codex-goal session)    | Platform → Platform Adoption + Rule 5                            |
| 7 | Integrity checker target (codex-goal session)      | Internal first, external second, smallest target named           |
| 8 | Accessibility axis (codex-goal session)            | accessibility_consequence triad schema requirement               |

## What's left for the next session

These were named in this loop but not shipped:

- **Ratify Amendment 004** (sections taxonomy). Currently in `proposed/`.
  When ratified, requires: schema migration on signals, digest body
  restructure for the next cycle, section landing page builds, llms.txt
  update, signal track→section remap per the amendment's table.
- **Restructure the next digest body** around named sections. Editorial
  pattern: thesis at top → operator brief → `## Control Plane` /
  `## Workcell` / `## Platform Adoption` sections (each named even if
  silent) → Top Signals → What We Didn't Promote → source trail.
- **Section landing pages** at `/sections/[slug]/` with one-paragraph
  framing and month-grouped signals. Stance summary paragraph deferred
  until 2+ cycles of section-organized digests are out.
- **Profile body cross-references to sections.** Profile prose may
  reference sections where editorially useful; not required.
- **Live token/cost in `bitter macro progress`.** Codex documented this
  as a deferred ergonomics gap — needs adapter or macro-run accounting
  work, not only rendering.
- **`bitter macro --help` discoverability.** Default text-mode `events`,
  `watch` error messages, JSON pipe-buffer warning. All documented in the
  ergonomics journal; not yet fixed.

## Loop-on-loop pattern that emerged

A pattern worth keeping. Each loop iteration ran:
1. Kick off a council in the background with a focused prompt
2. Do parallel productive work that doesn't depend on the council outcome
3. Read the dossier when it lands; ship its smallest implementation target
4. Schedule wake matched to the next council's runtime

The parallel-council-while-shipping pattern was 2-3x more productive than
serial council-then-ship. The codex goal session inside this loop
demonstrated the same pattern at a higher abstraction: one agent ran
three councils in series while also building CLI subcommands and
documenting ergonomics issues — a single goal made the work compose.

The biggest single lesson: **the loop catches receipts that drift.** The
external link health checker found a published finding citing a
non-existent release version. Internal integrity checks catch broken
references between objects; external link checks catch broken references
to the world. Both are now wired as `npm run` scripts that any future
session can use to validate state before publishing.

---

Total commits this loop: 9 (one per round) + 3 in `/Users/c3po/co/bitter`
(CLI work). All pushed to main.
