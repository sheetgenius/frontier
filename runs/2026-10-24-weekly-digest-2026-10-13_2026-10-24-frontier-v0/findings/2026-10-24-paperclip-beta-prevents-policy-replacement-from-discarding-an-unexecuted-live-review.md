---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-beta-prevents-policy-replacement-from-discarding-an-unexecuted-live-review
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/880d4ae60fa691305a4703d4e25e367b63c2a7d7
    precision: commit
---
# 2026-10-24-paperclip-beta-prevents-policy-replacement-from-discarding-an-unexecuted-live-review

Beta prevents policy replacement from discarding an unexecuted live review. The 2026-10-15 fix rejects a combined execution-policy replacement and done request when regenerated stage IDs would discard a pending or changes-requested review. Previously the task could be marked complete through a review that never ran. The guard returns unexecuted_review_stage; deliberate cancellation and ordinary policy edits retain their prior behavior. The fix is absent from current stable and present in beta. No advisory or independent exploitation is established.

Channel: preview-or-beta. Half: defect. Date: 2026-10-23.

Operator consequence: If staged review is load-bearing, retain an explicit stable limitation and trial 2026.1023.0-beta.0 against the exact policy-edit/completion sequence. Inspect whether the stored reviewer actually completed its stage rather than trusting Done alone. The narrow guard preserves a deliberate accountability boundary; it does not establish universal review-gate correctness.

## Receipt
- https://github.com/paperclipai/paperclip/commit/880d4ae60fa691305a4703d4e25e367b63c2a7d7
