# Codex Goal Session Result

Date: 2026-05-13

## New CLI Subcommands Shipped

Implemented and installed in the managed `bitter` launcher:

- `bitter macro progress [macro_run_id|last]`
  - Shows macro status, current phase/current child, per-child state, delta
    counts, approximate output tokens, and elapsed time.
- `bitter macro tail [macro_run_id|last] [--child <child_id>]`
  - Streams assistant output from the current or selected child via
    `output.jsonl`, without requiring `events --json` and Python parsing.

Discoverability:

- `bitter --help` lists `macro progress` and `macro tail`.
- `bitter macro help` lists live observation commands and examples.

Committed in `/Users/c3po/co/bitter/`:

- `6c1d974 feat(macro): add live progress and tail commands`
- `1542c93 fix(macro): wait for output before implicit tail`
- `acfdb48 fix(macro): wait for future explicit tail child`

Verification:

- `bun run build` passed.
- `bun run check` passed.
- `bun test` passed: 1904 pass, 32 skip, 0 fail.
- Managed launcher was rebuilt and installed from the local bundle.

Note: `bun run lint` remains blocked by pre-existing repo-wide Biome issues in
unrelated files; the changed macro path passed TypeScript, focused tests, full
tests, and `git diff --check`.

## Councils Run

### Council 01: Three-Section Taxonomy Pressure Test

Dossier: `research/codex-goal-output/council-01-sections-taxonomy.md`

Question: pressure-test the prior council's Control Plane / Workcell /
Platform taxonomy.

Recommendation:

- Strongest objection: Platform risks becoming a catch-all.
- Weakest section: Workcell, mostly because the term is technical and cadence
  may be sparse.
- Smallest target: tighten Amendment 004 so Platform routes only adoption,
  distribution, integration, and usable-packaging consequences; authority and
  runtime consequences route elsewhere.

CLI observations:

- `progress` made the Codex research bottleneck visible.
- Default `tail` during fanout can switch lanes; use `tail --child` when
  stable provider-lane following matters.

### Council 02: Integrity Checker Target

Dossier: `research/codex-goal-output/council-02-integrity-checker.md`

Question: pressure-test whether the next quality tool should be an internal
integrity checker, external link checker, or both.

Recommendation:

- Build internal reference integrity first.
- External link health should be a later opt-in/network mode.
- Smallest target: `site/scripts/check-integrity.mjs` plus
  `site/package.json` script `check:integrity`, validating local finding,
  signal, digest, and profile references.

CLI observations:

- `tail --child research_codex` was calmer than implicit tail during fanout.
- `tail --child synthesis` exposed a future-child wait gap; closed in
  `acfdb48`.

### Council 03: Accessibility Axis

Dossier: `research/codex-goal-output/council-03-accessibility-axis.md`

Question: keep accessibility cross-cutting under the section taxonomy rather
than letting it collapse into Platform.

Recommendation:

- The accessibility triad is the strongest rule: what got easier, who can use
  it now, whether authority stayed visible.
- Current signal artifacts often carry only `accessibility_impact`, which is
  too weak to enforce the triad.
- Smallest target: update Amendment 004 to require an
  `accessibility_consequence` block for accepted signals above `none`, and add
  QA failure language for scalar-only accessibility claims.

CLI observations:

- The fixed implicit tail no longer prints an empty header.
- Approximate output tokens are enough for orientation, but input tokens and
  cost remain missing.

## Open Ergonomics Gaps

- Live cost and input-token visibility are still missing. Deferred because the
  current event stream does not expose provider usage; this needs adapter or
  macro-run accounting work, not only rendering.
- Default `tail last` remains conceptually ambiguous during fanout. Deferred
  because `progress` plus `tail --child` is a working path; a future
  `tail --mode latest|sticky` flag would be cleaner if the switching remains
  noisy.
- Repo-wide `bun run lint` is not clean. Deferred because failures are
  pre-existing outside the macro observability slice.

## Recommended Next Session

Implement Council 02's internal integrity checker first:

1. Add `site/scripts/check-integrity.mjs`.
2. Wire `cd site && npm run check:integrity`.
3. Validate profile claim finding IDs, posture-basis finding IDs, signal
   finding IDs, digest top signal IDs, and operator brief signal links.
4. Leave external HTTP link health as a later opt-in mode.
