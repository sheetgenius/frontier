---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-17-eve-durable-execution-workflow-sdk
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-16
  end: 2026-06-19
status: accepted
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: study
evidence:
  - label: "Eve docs: durable, resumable, crash-safe sessions across tool calls, subagent delegation, and human pauses"
    url: https://eve.dev/docs
    precision: official_docs
  - label: "Workflow SDK (open source)"
    url: https://workflow-sdk.dev
    precision: official_docs
---
# Eve durable execution on the Workflow SDK

## What this is

Eve sessions are [multi-turn, resumable, and crash-safe](https://eve.dev/docs),
built on the open-source [Workflow SDK](https://workflow-sdk.dev). The
durability spans [tool calls, subagent delegation, and human
pauses](https://eve.dev/docs): a session can survive a crash and resume, and it
can hold across a human-in-the-loop pause rather than being torn down.

## Why it matters

Durable, resumable execution turns the harness from an ephemeral runner into
recoverable stateful infrastructure. For an operator, the relevant promise is
about recovery and pauses: a long-running agent that delegates to subagents and
waits for a human decision can be interrupted and continued without losing the
run. The durability is a property of the runtime, carried by the Workflow SDK,
not bolted on per agent.

## Operator consequence

- Crash recovery and human pauses become a runtime guarantee rather than
  caller-implemented retry logic.
- The Workflow SDK dependency is a thing to understand: it is where execution
  state lives, which bears on where agents can be hosted and recovered.

## Open question

- What exactly is persisted, where, and for how long across a pause or crash? The
  hosting and recovery story (and any constraint the Workflow SDK imposes) is an
  open registration question in `sources/eve.yml`.
