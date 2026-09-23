---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-hermes-agent-capability-and-defaults-in-v2026-9-21-skills-auto-load-stream-json-one-shot-footprint-cura
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/1b8e4c513d6a55c6a6bdf8779b43544456cb89ef
    precision: commit
---
# 2026-09-21-hermes-agent-capability-and-defaults-in-v2026-9-21-skills-auto-load-stream-json-one-shot-footprint-cura

Capability and defaults in v2026.9.21: skills.auto_load, stream-json, one-shot footprint, curator stops pruning built-ins. Capability and defaults in v2026.9.21: skills.auto_load, stream-json, one-shot footprint, curator stops pruning built-ins

Channel: tagged-release. Half: capability. Date: 2026-09-14 to 2026-09-19 commits; tagged 2026-09-21.

Operator consequence: For teams wrapping Hermes as an agent engine (operator question 3), stream-json plus the one-shot footprint make headless runs cheaper and parseable; test `-q` runs against v2026.9.21 before comparing cost to other harnesses. The self-improvement loop is now explicitly scoped to interactive and gateway sessions. If skills vanished after an earlier update, check ~/.hermes/skills archive state; the curator was the cause.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/1b8e4c513d6a55c6a6bdf8779b43544456cb89ef
