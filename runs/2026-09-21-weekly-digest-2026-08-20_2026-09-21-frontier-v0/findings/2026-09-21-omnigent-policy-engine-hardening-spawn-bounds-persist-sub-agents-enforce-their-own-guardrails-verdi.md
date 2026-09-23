---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omnigent-policy-engine-hardening-spawn-bounds-persist-sub-agents-enforce-their-own-guardrails-verdi
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/4001
    precision: merged_pr
---
# 2026-09-21-omnigent-policy-engine-hardening-spawn-bounds-persist-sub-agents-enforce-their-own-guardrails-verdi

Policy engine hardening: spawn bounds persist, sub-agents enforce their own guardrails, verdicts are attributed. Before v0.14.0 the `spawn_bounds` fan-out cap reset on every deployed tool call because each call built a fresh engine with an empty counter; the count now persists per session. v0.13.0 enforces a sub-agent's own guardrails on its conversation. Policy API mutations are audit-logged and denials carry the owning workspace id.

Channel: tagged-release. Half: defect (closed). Date: v0.13.0 and v0.14.0.

Operator consequence: If you relied on `spawn_bounds` to limit fan-out on a deployed server before v0.14.0, it did not bind; re-check fleet cost for that period. On any tag through v0.14.0, a policy function that fails to resolve may not fail loudly (#6357 unreleased); test that each custom policy actually loads.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/4001
