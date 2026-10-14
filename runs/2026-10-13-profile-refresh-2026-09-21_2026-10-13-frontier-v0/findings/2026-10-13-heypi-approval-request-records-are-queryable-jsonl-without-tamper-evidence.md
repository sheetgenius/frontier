---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-approval-request-records-are-queryable-jsonl-without-tamper-evidence
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/admin.md#L47-L53
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/channel.ts#L191-L194
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L309-L395
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L468-L484
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L975-L985
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/channel.ts#L356-L374
    precision: tagged_commit_file
---
# 2026-10-13-heypi-approval-request-records-are-queryable-jsonl-without-tamper-evidence

Approval-request records are queryable JSONL without tamper evidence. This replaces the older typed-trace-events description. heypi's conversation JSONL is a queryable authorization/routing ledger; Pi's transcript is the separate execution trace. The approval-request path records requester, approver, canonical-input hash, displayed action and decision, and required write failures block that path. Calls with no policy, policies returning allow/block and reused once() approvals do not each enter this audit path. A decision hash does not prove subsequent execution. The file writes are not tamper-evident.

Channel: preview-or-beta heypi 0.3.0-beta.2. Half: both. Date: 2026-07-21 (historical beta.0 ledger); re-verified for the 2026-10-13 profile.

Operator consequence: Use these records to reconstruct decisions that entered the request path, not as a complete per-call execution ledger. Export them to independently protected append-only storage if state writers must not be able to rewrite evidence. An OS crash may lose unflushed records. The loader drops a malformed unterminated final line and rejects earlier JSON syntax errors, but cannot authenticate well-formed edits. Under host execution, the service account may also let the agent edit this state.

## Receipt
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/admin.md#L47-L53
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/channel.ts#L191-L194
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L309-L395
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L468-L484
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L975-L985
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/channel.ts#L356-L374
