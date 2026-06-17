# Council Dossier: macro_a54b7267-8857-4fc0-bf01-92dd17af5923

## Context
- question_source: file
- question_file: /Users/c3po/co/bitterfrontier/research/codex-goal-output/question-02-integrity-checker.md
- cwd: /Users/c3po/co/bitterfrontier
- model_policy: {"codex_model":"gpt-5.5","codex_config":["reasoning_effort=high"],"synthesis_codex_model":"gpt-5.5","synthesis_codex_config":["reasoning_effort=high"],"claude_model":null,"gemini_model":null,"reviewers":["claude","codex","gemini"],"synthesizer":"codex","child_timeout_ms":900000}

## Question
# Council 02: pressure-test the integrity checker target

Context:

`research/council-dossiers/round-8-review.md` proposes a structural integrity
audit for Bitter Frontier. Its smallest target is to fix dead signal references
in provider profiles; its bolder target is a validation script for signal,
finding, digest, and profile references.

The current operator question is narrower:

Should the next file-backed quality tool be an internal integrity checker, an
external link checker, or a small shared script that starts with one and leaves
room for the other?

Read:

- `/Users/c3po/co/bitterfrontier/research/council-dossiers/round-8-review.md`
- `/Users/c3po/co/bitterfrontier/RESEARCH_CONTRACT.md`
- `/Users/c3po/co/bitterfrontier/AGENTS.md`
- `/Users/c3po/co/bitterfrontier/site/src/lib/frontier.ts`
- `/Users/c3po/co/bitterfrontier/site/src/components/SourceTrail.astro`
- `/Users/c3po/co/bitterfrontier/content/profiles/gemini-cli.md`
- `/Users/c3po/co/bitterfrontier/content/profiles/openclaw.md`

Answer:

1. Which checker catches the most operator-relevant failure first: internal
   reference integrity, external link health, or both?
2. What is the smallest script target that fits Bitter Frontier's
   documentation-first doctrine without turning the repo into an app?
3. What must the checker report so an agent can fix issues without guessing?
4. What should be explicitly out of scope for the first script?

Required output:

- bottleneck ranking
- accepted target
- rejected target(s)
- exact files the first implementation should touch
- verification command

End with:

## Smallest Implementation Target

One concrete script or content-fix target, with no database and no site
architecture changes.

## Research Outputs
- research_claude: ok -> child_runs/research_claude/output.jsonl
- research_codex: ok -> child_runs/research_codex/output.jsonl
- research_gemini: ok -> child_runs/research_gemini/output.jsonl

## Review Outputs
- review_claude: ok -> child_runs/review_claude/output.jsonl
- review_codex: ok -> child_runs/review_codex/output.jsonl
- review_gemini: ok -> child_runs/review_gemini/output.jsonl

## Synthesis
I’ll ground the recommendation in the required files and check whether the dossier’s named failures still exist before choosing a target.The initial read confirms the doctrine favors file-backed QA over site-first enforcement. I’m checking the current renderer and profiles now, because the dossier’s proposed content fix may already be stale.The named Gemini/OpenClaw dead-reference fix is stale: both profiles now use finding IDs in `claims` and `posture_basis`, and the cited finding IDs are current-looking. The remaining question is whether to expose the existing internal checks as a runnable quality gate, and what scope to hold back.Internal reference integrity is the first bottleneck. It protects the artifact chain the doctrine actually depends on: finding -> signal -> digest -> profile. External link health matters, but it is second because it adds network noise, rate limits, redirects, and flaky failures before the repo has a failing offline graph check.

**Bottleneck Ranking**

1. Internal reference integrity: highest operator relevance. A broken `finding_id`, `top_signal_ids`, or profile `posture_basis` breaks the evidence chain even if every external URL still works.
2. External link health: important for receipts, but should be a later opt-in/network mode.
3. Both immediately: too broad for the first quality tool. It risks turning a doctrine QA helper into a crawler-shaped maintenance surface.

**Accepted Target**

Add a small offline integrity script that checks internal references first, with room for a later external-link mode. The existing `linkGraphIssues()` in [frontier.ts](/Users/c3po/co/bitterfrontier/site/src/lib/frontier.ts:410) already points in the right direction, but it is only logged from the homepage render and does not fail as a standalone quality gate.

The script should validate:

- profile `claims[].finding_id` -> existing finding
- profile `posture_basis.*[]` -> existing finding
- signal `finding_ids[]` -> existing finding
- digest `top_signal_ids[]` -> existing signal
- operator brief `/signals/.../` links -> existing signal

**Rejected Targets**

Reject the Round 8 “fix Gemini/OpenClaw dead signal refs” as the next target. Those profiles now cite finding IDs, and the named finding IDs exist in current run artifacts.

Reject external link checking first. It checks receipt availability, not whether Bitter Frontier’s own research objects still compose.

Reject “both” for the first script. Add the extension point later, not the network behavior.

Reject source-label refactors and `SourceTrail` UI work for this target. Useful maybe, but they do not catch broken research authority.

**First Files To Touch**

- [site/scripts/check-integrity.mjs](/Users/c3po/co/bitterfrontier/site/scripts/check-integrity.mjs) new standalone checker
- [site/package.json](/Users/c3po/co/bitterfrontier/site/package.json) add `check:integrity`

No database, no renderer changes, no `SourceTrail` changes, no site architecture changes.

**Checker Report Requirements**

Each issue should print: `kind`, `file`, object context, field path, missing ref, expected namespace, and fix hint. Example shape:

`profile-claim-missing-finding | content/profiles/openclaw.md | claim per-sender-tool-policies | claims[].finding_id | 2026-... | expected finding_id`

Exit `0` when clean, nonzero when errors exist.

**Verification Command**

`cd /Users/c3po/co/bitterfrontier/site && npm run check:integrity`

## Smallest Implementation Target

Create `site/scripts/check-integrity.mjs` and add `check:integrity` in `site/package.json`; implement only offline internal reference validation for findings, signals, digests, and profiles.

## Use
- Treat this dossier as research input, not authority by itself.
- Source-check accepted and rejected claims before launching a worker.

## CLI Ergonomics Observations From This Run

- `bitter macro progress <id>` showed the full transition from research to
  review to synthesis without needing `events --json`; it was enough to decide
  when to stop tailing `research_codex` and wait for synthesis.
- `bitter macro tail --child research_codex` was calmer than default
  `tail last` during fanout and is the right workflow when following one
  provider lane.
- Trying `bitter macro tail --child synthesis` during review exposed a live
  observability gap: future child IDs failed fast before their artifact
  directory existed. Closed in Bitter commit `acfdb48` by waiting for explicit
  future children while the macro is still running.
