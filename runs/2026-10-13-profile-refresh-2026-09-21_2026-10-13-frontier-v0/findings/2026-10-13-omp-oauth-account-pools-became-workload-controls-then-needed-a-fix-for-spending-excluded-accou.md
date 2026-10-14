---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-oauth-account-pools-became-workload-controls-then-needed-a-fix-for-spending-excluded-accou
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/6aafbc0924366f1d146502955913fd13ab1c4910
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/e31a0e43dbc353af2f54c49604ce34224c969f3f
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/commit/6e0be09b632c2133c22e9847b3dbfc0373e9f6ee
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/task-agent-discovery.md
    precision: tagged_commit_file
---
# 2026-10-13-omp-oauth-account-pools-became-workload-controls-then-needed-a-fix-for-spending-excluded-accou

OAuth account pools became workload controls, then needed a fix for spending excluded accounts reset credits. task.agentAccountPools maps exact named agents and listed providers to allowed OAuth identities. For those providers the child refuses other accounts and API keys; an empty list permits none. Pools choose identities, not providers; model and retry policy still choose providers, and a custom SDK getApiKey resolver bypasses pools. A quota-blocked session could nevertheless redeem a saved reset credit for an account it could not use. v18.9.0 checks pool membership both when planning that restore and immediately before spending it. This is an excluded-account credit-consumption defect, not evidence of task inference under that identity.

Channel: tagged-release. Half: both. Date: 2026-10-07 (v18.8.1); 2026-10-11 (v18.9.0).

Operator consequence: Configure workload identity pools deliberately and use v18.9.0 or later for the blocked-reset fix, preferably 18.10.4. Check model/fallback policy separately and audit SDK custom key resolvers. Inspect reset-credit history for excluded identities when earlier versions handled quota recovery.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/6aafbc0924366f1d146502955913fd13ab1c4910
- https://github.com/can1357/oh-my-pi/commit/e31a0e43dbc353af2f54c49604ce34224c969f3f
- https://github.com/can1357/oh-my-pi/commit/6e0be09b632c2133c22e9847b3dbfc0373e9f6ee
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/task-agent-discovery.md
