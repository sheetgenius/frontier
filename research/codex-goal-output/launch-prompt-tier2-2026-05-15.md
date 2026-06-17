# Codex goal session launch prompt — Tier 2 CLI ergonomics

Prepared: 2026-05-15. **Launch held** pending a clean `/Users/c3po/co/bitter` worktree
(uncommitted grid-plugin work was present at prep time; not this session's to touch).

Working directory: `/Users/c3po/co/bitter`
Launch command: `codex exec --enable goals --dangerously-bypass-approvals-and-sandbox -c model_reasoning_effort=xhigh -`
Prompt below is fed via stdin.

Scope decision: this session ships Tier-2 items **#5, #7, #8** — the "make macro
state legible" trio. Item **#6 (`bitter council resume`) is explicitly deferred**
to its own session: resume is a lifecycle-state problem (idempotency, partial-artifact
handling, the macro state machine), not a surfacing problem, and bundling it risks
both being half-done.

---

GOAL: Ship three Tier-2 CLI ergonomics fixes in /Users/c3po/co/bitter on a single feature branch with passing tests and one PR — (1) live per-child input tokens and a cost estimate in `bitter macro progress`, (2) `bitter macro events` default summarized rendering with `--json` as the opt-in for full transport truth, (3) `bitter macro inspect --summary` for a ~10-line reader view. Append friction to `/Users/c3po/co/bitterfrontier/research/codex-goal-output/ergonomics-journal.md` in flight. Do NOT start item #6 (`bitter council resume`).

BRIEFING:

You are continuing CLI ergonomics work that shipped in PR #2 (`bitter macro progress`/`tail`) and PR #3 (Tier-1: `--help` discoverability, `council --dry-run`, `council --name`, `macro tail --mode sticky`) — both merged to main. The proven pattern is dual-mandate: ship CLI improvements while exercising real Bitter Frontier councils that benefit from them.

Worklist source: `/Users/c3po/co/bitterfrontier/research/codex-goal-output/ergonomics-journal.md` — the section "Open Ergonomics Gaps", Tier 2. Read it first, plus the in-flight friction entries #13–15 from the Tier-1 session for context on where the macro surfaces stand.

Your scope is items #5, #7, #8. Item #6 is OUT OF SCOPE for this session — do not begin it.

Item details:

1. **#5 — live token + cost in `bitter macro progress` (the centerpiece).** Today `bitter macro progress` shows an approximate output-only `tokens~5662`. Operators need per-child *input* tokens and a `cost ≈ $X.XX` estimate, per-child and total. This requires adapter accounting work, not just rendering: the backend adapters (`packages/kernel/src/runtime/backend-adapter-*.ts`) need to surface token usage from provider responses into the event/artifact stream, and the `macro progress` renderer needs to roll it up. If real provider usage numbers are not reliably available from every adapter, a clearly-labeled estimate (chars/4 heuristic, like the Tier-1 `--dry-run` estimator) is acceptable as a first slice — but say so explicitly in the output and the PR. This item is doctrinally load-bearing: Bitter is the meta-harness above all watched harnesses, so cost-visibility across the harness layer is a primary Bitter capability.

2. **#7 — `bitter macro events` default rendering.** Today `bitter macro events` (no flags) prints a one-line count and exits (journal entries #1, #4). The default should print something useful: the last N events summarized — current phase, recent child transitions, current child + delta count. `--json` becomes the opt-in for full transport truth. Do NOT change or break the existing `--json` output shape; scripts depend on it.

3. **#8 — `bitter macro inspect --summary`.** Today `bitter macro inspect` is a wall of verification/contract state — great for post-mortem debugging, hostile for "what actually happened in this run." Add a `--summary` flag for a ~10-line reader-friendly view: what macro ran, the phases, per-child state, status, elapsed, and the key artifact paths. The existing default `inspect` output stays unchanged.

Bitter Frontier context (for your dual mandate): `/Users/c3po/co/bitterfrontier/AGENTS.md` is canonical doctrine. `/Users/c3po/co/bitterfrontier/research/research-arc-synthesis-2026-05-14.md` is a one-page status of where the research sits.

Dual mandate: as you ship each fix, exercise it on a real Bitter Frontier council. Pairings:
- #5: run a real council (`--backend real --confirm-cost`) and use the new token/cost view to actually report what that council cost — capture it as a dossier. A good question to run: the deferred Tier-2 item #6 itself — "What would `bitter council resume <macro_run_id>` require? Name the macro-lifecycle state it must reconstruct and the smallest safe resume slice." That produces real research that seeds the *next* session while validating #5.
- #7 / #8: use the improved `events` and `inspect --summary` output to observe and post-mortem the councils you run.

Save council outputs as markdown under `/Users/c3po/co/bitterfrontier/research/council-dossiers/` with descriptive filenames.

Working directory: `/Users/c3po/co/bitter`. File-staging discipline: stage only your own files explicitly by path. Do NOT run `git add -A` or `git add .`. If you find uncommitted changes you did not make (e.g. anything under `packages/grid-plugin/`, or a stray `docs/bitter_lesson.pdf`), do not touch, stage, stash, or commit them — they belong to other work.

Test discipline: scope your test runs to the packages you change — `bun test` in `packages/kernel` and `packages/contracts`, or targeted test files. Do not run unrelated plugin suites. Note that the kernel suite has ~13 known pre-existing failures in interactive/TTY and exec-runtime tests that are unrelated to macro/council surfaces — do not try to fix those; just confirm your changes don't add new failures.

Deliverables:
- One feature branch (suggest `codex/cli-tier2-ergonomics-2026-05-15` or similar).
- Passing targeted tests in `packages/kernel` and `packages/contracts`.
- One open PR (DRAFT is fine) with a clear summary of each shipped fix and an explicit note on whether #5's token/cost numbers are real provider usage or labeled estimates.
- Updated `ergonomics-journal.md` with new friction observed during the work (entries #16+).
- Council dossiers saved under `research/council-dossiers/` from the dual mandate.

Operating discipline:
- Append friction to the journal during work, not after.
- If #5 turns out larger than expected, ship #5 well and report #7/#8 status honestly in the PR — prefer depth on the centerpiece over breadth.
- Open questions get raised in the PR description, not silently deferred.
- Use `bitter macro progress` / `tail` / `events` / `inspect` (your own surfaces) to observe the councils you run for the dual mandate.

Begin by reading the Tier-2 worklist and friction entries #13–15 in the journal, then `AGENTS.md`, then choose your starting fix.
