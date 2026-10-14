---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-in-conversation-secret-requests-are-merged-but-absent-from-canvas-v1-27
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/commit/da4c7564dcf460f80d1889fee1c951802c448c56
    precision: commit
  - url: https://github.com/OpenHands/OpenHands/blob/da4c7564dcf460f80d1889fee1c951802c448c56/src/services/secret-request.ts
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/compare/v1.27.1...0e9ce191390f535347ff17055038c45eeef3fedf
    precision: git_compare
---
# 2026-10-13-openhands-in-conversation-secret-requests-are-merged-but-absent-from-canvas-v1-27

In-conversation secret requests are merged but absent from Canvas v1.27.1. A request_secret client tool queues an in-conversation modal. An already-saved matching secret can be attached immediately; otherwise the user supplies or dismisses the form. The completion path updates conversation secrets and reports saved/not_saved/error status rather than the raw value in the tool result. This is a new collection/attachment path, not independent proof that every profile restriction holds.

Channel: main-unreleased. Half: capability. Date: 2026-10-13T17:30:05Z.

Operator consequence: Do not promise this flow to v1.27.1 users. Before adopting the first containing tag, test requesting an already-saved but excluded secret on both local and Docker profile launches, and inspect effective runtime credentials. The result message avoiding the raw value does not establish end-to-end scope enforcement.

## Receipt
- https://github.com/OpenHands/OpenHands/commit/da4c7564dcf460f80d1889fee1c951802c448c56
- https://github.com/OpenHands/OpenHands/blob/da4c7564dcf460f80d1889fee1c951802c448c56/src/services/secret-request.ts
- https://github.com/OpenHands/OpenHands/compare/v1.27.1...0e9ce191390f535347ff17055038c45eeef3fedf
