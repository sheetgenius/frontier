---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-approval-requests-fail-closed-while-approver-lists-remain-optional
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L342-L390
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L366-L506
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L274-L291
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/approvals.md#L3-L24
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L1040-L1049
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/telegram.ts#L412-L414
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v0.79.10/packages/coding-agent/src/core/extensions/runner.ts#L862-L882
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v0.79.10/packages/coding-agent/src/core/agent-session.ts#L415-L433
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v0.79.10/packages/agent/src/agent-loop.ts#L578-L625
    precision: tagged_commit_file
---
# 2026-10-13-heypi-approval-requests-fail-closed-while-approver-lists-remain-optional

Approval requests fail closed while approver lists remain optional. For calls entering the interactive approval-request path, heypi records the request before showing UI and the resolution before continuing. Missing audit context, required write failure, failed UI posting or a non-approved result blocks execution; checked Pi handler exceptions also block. Approvals remain opt-in per tool. With neither admins nor approvers configured, approvalActorAllowed returns true, accompanied by a warning when a policy exists. With lists configured it matches resolvedById and resolvedBy, plus roles/groups; Telegram supplies a username alias alongside numeric ID. This is not exclusively immutable-ID matching or a broad no-spoofing proof. once() remembers approval by tool within the Pi session, not by individual later invocation or requester.

Channel: preview-or-beta heypi 0.3.0-beta.2 with Pi 0.79.10 source checked. Half: both. Date: 2026-07-21 (historical beta.0 implementation); re-verified for the 2026-10-13 profile.

Operator consequence: Specify eligible approvers/admins and opt each consequential tool into a policy; configuring names alone does not create a gate. For shared threads needing per-call decisions, use always() rather than relying on a prior once() approval. Do not call the ledger complete per-call execution proof, and do not describe this isolated source check as best on the watchlist. These deliberate identity and decision boundaries can remain valuable even if upstream recovery improves.

## Receipt
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L342-L390
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L366-L506
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/approval.ts#L274-L291
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/docs/configuration/approvals.md#L3-L24
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/app.ts#L1040-L1049
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/telegram.ts#L412-L414
- https://github.com/earendil-works/pi/blob/v0.79.10/packages/coding-agent/src/core/extensions/runner.ts#L862-L882
- https://github.com/earendil-works/pi/blob/v0.79.10/packages/coding-agent/src/core/agent-session.ts#L415-L433
- https://github.com/earendil-works/pi/blob/v0.79.10/packages/agent/src/agent-loop.ts#L578-L625
