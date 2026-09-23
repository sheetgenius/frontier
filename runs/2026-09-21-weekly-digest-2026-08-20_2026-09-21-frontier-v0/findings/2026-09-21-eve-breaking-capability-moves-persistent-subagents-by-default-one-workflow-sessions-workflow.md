---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-eve-breaking-capability-moves-persistent-subagents-by-default-one-workflow-sessions-workflow
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.57.0
    precision: github_release
---
# 2026-09-21-eve-breaking-capability-moves-persistent-subagents-by-default-one-workflow-sessions-workflow

Breaking capability moves: persistent subagents by default, one-workflow sessions, workflow-only background tools. Durable human pauses became a tool-level primitive
(`ask()` inside a workflow tool), subagents remember by default, and the
execution model changed under running sessions.

Channel: tagged-release. Half: capability. Date: 2026-08-26 to 2026-09-19.

Operator consequence: Do not roll back across 0.57.0 with live sessions.
If you need data minimization, 0.53.1 retention 0 is the first knob that
deletes workflow payloads at run end. Answers the contract's primitive-stability
question: sessions, subagents, and background tools were all still breaking in
September; watch-only as architecture precedent.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.57.0
