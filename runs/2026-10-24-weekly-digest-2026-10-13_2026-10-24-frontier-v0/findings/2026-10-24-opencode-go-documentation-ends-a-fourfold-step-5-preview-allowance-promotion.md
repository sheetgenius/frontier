---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-go-documentation-ends-a-fourfold-step-5-preview-allowance-promotion
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/3a1f9a934fef659d4cfd6bd3964da6340cf0c3e9
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/4d5965762ec5e0d1a0b14630553fc62b51a11fba
    precision: commit
---
# 2026-10-24-opencode-go-documentation-ends-a-fourfold-step-5-preview-allowance-promotion

Go documentation ends a fourfold Step 5 Preview allowance promotion. [Commit 3a1f9a934fef659d4cfd6bd3964da6340cf0c3e9](https://github.com/anomalyco/opencode/commit/3a1f9a934fef659d4cfd6bd3964da6340cf0c3e9) changes the documented Step 5 Preview Go allowance from promotional $60 to $15, and Go Plus from promotional $240 to $60, with corresponding request estimates reduced fourfold. [The Go FAQ separately removes its 200 requests/day free-model claim](https://github.com/anomalyco/opencode/commit/4d5965762ec5e0d1a0b14630553fc62b51a11fba). Both first appear in v2.1.3's source, absent from v2.1.2.

Channel: docs-only. Half: defect. Date: 2026-10-21.

Operator consequence: Recheck model-specific entitlement and the actual workspace's live limits before budgeting a run. These are documented allowance/policy changes, not proof of an account's billing, deployed enforcement time, or the CLI performing less efficiently. Optional subscriptions are more than a standing product-name list this window.

## Receipt
- https://github.com/anomalyco/opencode/commit/3a1f9a934fef659d4cfd6bd3964da6340cf0c3e9
- https://github.com/anomalyco/opencode/commit/4d5965762ec5e0d1a0b14630553fc62b51a11fba
