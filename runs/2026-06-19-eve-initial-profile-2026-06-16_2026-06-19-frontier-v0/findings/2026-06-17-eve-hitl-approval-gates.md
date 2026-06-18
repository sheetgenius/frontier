---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-17-eve-hitl-approval-gates
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-16
  end: 2026-06-19
versions_covered: "eve@0.11.0..eve@0.11.2"
status: accepted
confidence: high
accessibility_impact: medium
operator_relevance: high
actionability: study
evidence:
  - label: "Eve docs: tools (human-in-the-loop approval)"
    url: https://eve.dev/docs/tools
    precision: official_docs
  - label: "eve@0.11.0 -- emit a rejected action.result stream event when a tool call is denied at the HITL approval gate"
    url: https://github.com/vercel/eve/releases/tag/eve@0.11.0
    precision: tagged_release
  - label: "eve@0.11.2 -- fix dynamic connection tools so approval gates are preserved when tools are exposed to the model"
    url: https://github.com/vercel/eve/releases/tag/eve@0.11.2
    precision: tagged_release
---
# Eve human-in-the-loop approval gates (the authority surface)

## What this is

Eve has a [human-in-the-loop approval gate for tool calls](https://eve.dev/docs/tools):
an operator can pause, approve, or deny a tool call before the agent proceeds.
Two releases in the window harden this surface:

- [eve@0.11.0](https://github.com/vercel/eve/releases/tag/eve@0.11.0) emits a
  `rejected` `action.result` stream event when a tool call is denied at the HITL
  approval gate, so a denial is an observable event, not a silent drop.
- [eve@0.11.2](https://github.com/vercel/eve/releases/tag/eve@0.11.2) fixes
  dynamic connection tools so approval gates are preserved when tools are exposed
  to the model, closing a gap where a tool reaching the model could have bypassed
  its gate.

## Why it matters

This is the authority axis. The question a harness answers on this axis is who
decides what an agent may actually do, and where that decision is recorded. Eve's
answer is an explicit gate: a tool call can be held for a human, and the outcome
(including a denial) is surfaced as a stream event. The 0.11.2 fix matters
because an approval gate is only a control if it cannot be routed around; keeping
the gate attached to dynamically exposed connection tools is what makes the
control trustworthy.

## Operator consequence

- Operators can gate specific tool calls behind a human approval before the agent
  acts, and can observe denials via the `rejected` stream event.
- The gate's value depends on its coverage: the 0.11.2 fix shows the surface was
  still being made airtight during the window, so verify gate coverage against
  the version in use.

## Open question

- End to end, what does the approval surface look like: who approves, where the
  pause is recorded, and what an operator sees while a call is held? This is an
  open registration question in `sources/eve.yml`.
