---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-final-argument-approval-binding-reached-both-stable-lines
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.9.33/src/agents/agent-tools.before-tool-call.policy.ts#L330-L436
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/plugins/hooks/tool-policy.md#L64-L85
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-final-argument-approval-binding-reached-both-stable-lines

Final-argument approval binding reached both stable lines. The ordinary `before_tool_call` hook now receives an isolated copy of trusted-approved arguments. The owner retains the approved snapshot, compares the final candidate, and blocks changed arguments unless another approval covers the final parameters. Reading the newest function confirms the blocking branch and the `baseParams` passed into renewed approval. The previous profile's beta-only conclusion is obsolete; extended-stable also received a backport despite not containing the original donor SHA.

Channel: tagged-release. Half: defect. Date: 2026-10-18.

Operator consequence: Test transforming plugins against stable 10.7 and have them request approval for their final arguments. A beta Gateway is no longer necessary solely for this repair. This makes approval describe the operation actually submitted, removing a gap that human review could not reliably notice. It does not turn installed plugins into untrusted tenants.

## Receipt
- https://github.com/openclaw/openclaw/commit/34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436
- https://github.com/openclaw/openclaw/blob/v2026.9.33/src/agents/agent-tools.before-tool-call.policy.ts#L330-L436
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/plugins/hooks/tool-policy.md#L64-L85
