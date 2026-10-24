---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-durable-can-tune-compaction-policy-for-each-provider-and-model
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v1.3.0/packages/durable/README.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L565-L582
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/types.ts#L516-L522
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/compaction.ts#L261-L270
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/generation.ts#L173-L180
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-durable-can-tune-compaction-policy-for-each-provider-and-model

Durable can tune compaction policy for each provider and model. Durable 1.4.0 adds `compaction.modelOverrides`, keyed by exact provider/model ID. Each supplied field replaces the harness-wide policy for that model: automatic compaction, reserve, recent history and background threshold. The current model selects the policy at threshold checks, context overflow and summary selection. Durable still derives its summary-output cap from reserve tokens and the model limit; coding-agent's cap removal does not apply here.

Channel: tagged-release. Half: capability. Date: 2026-10-21.

Operator consequence: Hosts serving different context windows can replace one global budget with route-specific settings. Recheck retained history, blocking thresholds and summary spend for small and large models separately. This removes custom policy switching without promising better task outcomes or cheaper summaries.

## Receipt
- https://github.com/earendil-works/pi/blob/v1.3.0/packages/durable/README.md
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/README.md#L565-L582
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/types.ts#L516-L522
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/compaction.ts#L261-L270
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/generation.ts#L173-L180
