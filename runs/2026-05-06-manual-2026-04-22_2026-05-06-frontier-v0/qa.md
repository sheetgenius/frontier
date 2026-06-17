# QA Review

Run: `2026-05-06-manual-2026-04-22_2026-05-06-frontier-v0`

Window: `2026-04-22..2026-05-06`

## Recall Backtest

This was a manual first sprint, not an automated recall benchmark. The run
covered the five initial tier-1 source contracts and found material changes for
all five.

Covered:

- Codex official changelog and GitHub release for `0.128.0`
- Claude Code Week 17 notes and current changelog surface
- Gemini CLI GitHub releases across stable, preview, and nightly channels
- Hermes Agent releases `v2026.4.23` and `v2026.4.30`, plus recent commit stream
- Pi Coding Agent releases `v0.69.0` through `v0.73.0`, plus recent commit stream

Known gaps:

- No full commit-by-commit scoring across all repos.
- No local probes were run against the tools.
- Claude Code changelog extraction was manual from official docs HTML rather
  than a clean structured feed.
- Social and third-party commentary were intentionally excluded.

## Editorial Backtest

The digest passes the v0 editorial bar if it is useful to an operator deciding
how Bitter should wrap frontier workers.

Pass:

- Distinguishes findings from accepted action-bearing signals.
- Avoids forcing every change into a Factory allocation story.
- Preserves the main operator implication: use worker-native capability, but
  keep the durable loop operator-owned.
- Converts source observations into concrete Bitter next actions.

Watch:

- "Provider-native state" is a strong theme, but future runs should break it
  into clearer subtypes: goal state, recap state, memory state, skill state,
  and session/resume state.
- "Verification is becoming a worker capability" needs probes before it should
  drive product decisions beyond adapter receipt vocabulary.

## Acceptance Gate

Accepted for first public/internal roll-up.

This run is suitable as the first static digest and as a gold-ish artifact for
future prompt/backtest comparisons, but it should not be treated as a completed
automation test.

## Receipt Traceability Pass

Each major digest signal now resolves through:

```text
finding -> signal -> digest section -> operator/Bitter action
```

Traceability map:

- `2026-05-06-worker-native-goals`
  - findings: `codex`
  - action: probe Codex `/goal`, define `worker_goal` receipt fields, and
    settle worker goals against `CHARTER.md` and run mandates
- `2026-05-06-worker-native-memory`
  - findings: `claude-code`, `gemini-cli`, `hermes-agent`
  - action: define and probe worker-native memory/state receipt fields
- `2026-05-06-fragmented-authority-semantics`
  - findings: `codex`, `claude-code`, `gemini-cli`, `pi-coding-agent`
  - action: add permission/trust probes and receipt exact worker authority state
- `2026-05-06-worker-verification`
  - findings: `claude-code`, `codex`, `gemini-cli`, `hermes-agent`
  - action: compare provider-native review with local verification receipts
- `2026-05-06-plugin-extension-skill-surface`
  - findings: all five sources
  - action: add plugin/extension/skill surface fields to adapter receipts
- `2026-05-06-worker-integrations-not-doctrine`
  - findings: `pi-coding-agent`, `gemini-cli`, `codex`
  - action: keep worker adapters thin, versioned, and source-contracted

Remaining traceability weakness:

- Public digest links currently point to checked-in run findings. A future
  static renderer should publish each finding as a public receipt page and
  rewrite these links to rendered URLs.

## Editorial Weighting Lesson

The first digest initially grouped Codex `/goal` under generic worker-native
state. That underweighted the change.

Future runs should treat persistent objectives as long-horizon autonomy
primitives, not ordinary memory features. Any frontier change that introduces
persistent objectives, cross-session mission continuity, resumable intent,
agent-owned task memory, or long-horizon planning should be high Bitter
relevance by default and should receive its own signal unless the evidence is
weak.

Suggested taxonomy:

```yaml
change_type:
  - capability
  - workflow
  - long_horizon_state
frontier_area:
  - coding_agent
  - worker_goals
  - autonomous_development
operator_relevance: high
actionability: test
```

Doctrine:

```text
The worker may carry a goal.
The operator owns the charter.
Bitter receipts the mapping.
```
