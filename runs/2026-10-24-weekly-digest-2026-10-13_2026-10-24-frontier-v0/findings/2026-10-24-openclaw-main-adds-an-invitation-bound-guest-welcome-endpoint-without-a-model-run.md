---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-main-adds-an-invitation-bound-guest-welcome-endpoint-without-a-model-run
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/280c7c7d494a796cc870fbd794088b84df1e53dc
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/280c7c7d494a796cc870fbd794088b84df1e53dc/extensions/visitor-access/src/welcome.ts#L44-L129
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/280c7c7d494a796cc870fbd794088b84df1e53dc/extensions/visitor-access/src/welcome.ts#L193-L258
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-main-adds-an-invitation-bound-guest-welcome-endpoint-without-a-model-run

Main adds an invitation-bound guest welcome endpoint without a model run. Visitor Access adds `visitor-access.welcome.ensure`, bound to the connection's admitted visitor grant and signed-in profile. It reserves a stable session key, creates a guest-owned session, and appends a greeting using an idempotency key without a model run. The greeting reflects role capabilities, inviter, note, and expiry. Retries reuse the reserved session. Source establishes the onboarding backend, not a tested frontend cold load or live invitation journey.

Channel: main-unreleased. Half: capability. Date: 2026-10-24.

Operator consequence: Inspect the selected guest role when evaluating this source path, and wait for a published version before treating it as ordinary delivery. Guest explanation and retry handling can move into the harness; owners still decide what the invited role may do.

## Receipt
- https://github.com/openclaw/openclaw/commit/280c7c7d494a796cc870fbd794088b84df1e53dc
- https://github.com/openclaw/openclaw/blob/280c7c7d494a796cc870fbd794088b84df1e53dc/extensions/visitor-access/src/welcome.ts#L44-L129
- https://github.com/openclaw/openclaw/blob/280c7c7d494a796cc870fbd794088b84df1e53dc/extensions/visitor-access/src/welcome.ts#L193-L258
