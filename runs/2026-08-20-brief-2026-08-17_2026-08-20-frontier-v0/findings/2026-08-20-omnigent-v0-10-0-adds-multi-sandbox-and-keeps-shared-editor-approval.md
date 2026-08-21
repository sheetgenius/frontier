---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-omnigent-v0-10-0-adds-multi-sandbox-and-keeps-shared-editor-approval
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/releases/tag/v0.10.0
    precision: github_release
---
# 2026-08-20-omnigent-v0-10-0-adds-multi-sandbox-and-keeps-shared-editor-approval

v0.10.0 published 2026-08-19T04:34:41Z. Capability: several sandbox providers at once, Devin as a built-in harness, Usage page. Breaking: shared-session approval-authority remains reverted; session approvals are again available to any shared editor (#4318).

Channel: tagged-release. Half: both.

Operator consequence: try v0.10.0 for multi-provider sandboxes. Do not share a session if you needed owner-only approval. Do not attribute Devin behavior to Omnigent's loop.

## Receipt
- https://github.com/omnigent-ai/omnigent/releases/tag/v0.10.0
