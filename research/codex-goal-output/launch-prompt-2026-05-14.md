# Codex goal session launch prompt — 2026-05-14

Working directory: `/Users/c3po/co/bitter`
Launch command: `codex exec --enable goals --dangerously-bypass-approvals-and-sandbox -c reasoning_effort=high -`
Prompt below was fed via stdin.

---

GOAL: Ship four Tier-1 CLI ergonomics fixes in /Users/c3po/co/bitter on a single feature branch with passing tests and one PR — (1) `bitter --help` and `bitter macro --help` discoverability, (2) `bitter council --dry-run`, (3) `bitter council --name "<slug>"` plus a derived listing title for `bitter macro` lists, (4) `bitter macro tail --mode sticky`. Append friction to `/Users/c3po/co/bitterfrontier/research/codex-goal-output/ergonomics-journal.md` in flight.

BRIEFING:

You are continuing CLI ergonomics work that started in PR #2 (already merged) which shipped `bitter macro progress` and `bitter macro tail`. The proven pattern is dual-mandate: ship CLI improvements while exercising real Bitter Frontier councils that benefit from them. PR #2 used this pattern and produced the four most useful entries in the existing journal (#9–12).

Worklist source: `/Users/c3po/co/bitterfrontier/research/codex-goal-output/ergonomics-journal.md` — the section "Open Ergonomics Gaps — worklist for next codex session (2026-05-14)" is your queue. Read it first. Tier 1 is your scope; Tier 2 is informational so you can size correctly.

Tier 1 details:

1. **`bitter --help` and `bitter macro --help` return `Unknown flag`.** Fix top-level help to enumerate macro subcommands with one-line descriptions. Pattern after the existing help conventions in the kernel.

2. **`bitter council --dry-run` does not exist.** Should print backend, model, reviewer roster, rendered prompt, and estimated token budget — then exit without fanning out. Cost-aware operation. Reuse any existing budget-estimation code in the council command if present.

3. **No way to name a council; `bitter macro` listings are opaque** (twenty macros all read `council.research.v1`). Add `bitter council --name "<slug>"` stored on the macro_run record; surface a derived title in listings (first non-blank line of question file, truncated). Make finding "the council that pressure-tested sections" tractable.

4. **`bitter macro tail` switches lanes during fanout** (see entries #11–12 in the journal). Add `tail --mode sticky` to lock onto the first attached child until it finishes, then move on. Default stays `latest` for backwards compatibility.

Bitter Frontier context (for your dual mandate): `/Users/c3po/co/bitterfrontier/AGENTS.md` is canonical doctrine. `/Users/c3po/co/bitterfrontier/research/research-arc-synthesis-2026-05-14.md` is a one-page status of where the research sits. Three sections (Control Plane / Runtime / Platform) and four cross-cutting axes (authority, evidence, accessibility, security) just ratified in amendment 004.

Dual mandate: as you ship each fix, exercise it on a real Bitter Frontier question. Example pairings:
- Tier-1 #2 (`--dry-run`): use it to plan a council on the open agent receipt spec proposal (`research/agent-receipt-spec-survey-2026-05-11.md`) — what would Phase 1 (OTel-emit + `bitter.run.receipt.v0`) actually require?
- Tier-1 #3 (`--name`): name several historical councils to test the listing-title rendering on real data.
- Tier-1 #4 (`--mode sticky`): exercise on any new fan-out council you launch.

Save council outputs as markdown under `/Users/c3po/co/bitterfrontier/research/council-dossiers/` with descriptive filenames.

Working directory: `/Users/c3po/co/bitter`. Untracked from prior session: `docs/bitter_lesson.pdf` and `packages/kernel/test/macro/dossier.test.ts`. The dossier.test.ts looks like real test work — decide whether to commit it on your branch or split into a separate PR; do not leave it orphaned.

Deliverables:
- One feature branch (suggest `codex/cli-tier1-ergonomics-2026-05-14` or similar).
- All tests passing: `bun test` in `packages/kernel` and any other affected packages.
- One open PR with a clear summary of each shipped fix.
- Updated `ergonomics-journal.md` with any new friction observed during the work (entries 13+).
- Council dossiers saved under `research/council-dossiers/` if the dual mandate produced them.

Operating discipline:
- Append friction to the journal during work, not after.
- If a Tier-1 fix turns out larger than expected, prefer 3 well over 4 poorly — note the deferred one in the PR description.
- Open questions get raised in the PR description, not silently deferred.
- Use `bitter macro progress` / `tail` / `dossier` (your own previously-shipped surfaces) to observe the councils you run for the dual mandate.

Begin by reading the worklist section of the journal and `AGENTS.md`, then choose your starting fix.
