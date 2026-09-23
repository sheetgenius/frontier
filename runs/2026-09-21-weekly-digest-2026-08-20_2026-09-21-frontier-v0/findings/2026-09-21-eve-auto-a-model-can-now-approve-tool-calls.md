---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-eve-auto-a-model-can-now-approve-tool-calls
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/blob/eve%400.63.0/docs/tools/human-in-the-loop.md
    precision: tagged_commit_file
---
# 2026-09-21-eve-auto-a-model-can-now-approve-tool-calls

auto(): a model can now approve tool calls. A fourth approval helper between `once()` and `always()`:
routine calls run without a human, and a classifier decides what is routine.

Channel: tagged-release. Half: capability. Date: 2026-09-17.

Operator consequence: Try it only where a wrong "clear" is recoverable.
The classifier sees the tool name and input, not the downstream effect, and
tool input leaves your deployment for the evaluator's provider. It answers
the contract question "does the approval-gate model change how teams gate
tool calls?": yes, eve now ships a first-party model-judged gate, which
moves human attention from every call to the classifier's false negatives.

## Receipt
- https://github.com/vercel/eve/blob/eve%400.63.0/docs/tools/human-in-the-loop.md
