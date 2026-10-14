---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-after-stable-main-kept-the-composer-open-during-approval-and-denied-waiting-calls-when-ste
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/pull/15642
    precision: merged_pr
  - url: https://github.com/can1357/oh-my-pi/blob/b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c/docs/approval-mode.md#L102-L105
    precision: tagged_commit_file
---
# 2026-10-13-omp-after-stable-main-kept-the-composer-open-during-approval-and-denied-waiting-calls-when-ste

After stable, main kept the composer open during approval and denied waiting calls when steered. On the reconstructed complete-date main pin, the composer stays usable while approvals wait. Sending a steering message denies every pending approval and later approvals from the same batch before delivery, then tells the agent why. The patch changes compact details again and removes the newly introduced ApprovalDetailsOptions API. This is not in v18.10.4.

Channel: main-unreleased. Half: both. Date: 2026-10-13T22:39:57Z (merged; after v18.10.4).

Operator consequence: Keep stable approval behavior distinct. Main users and extension authors must handle the new denial/steering flow and removed details API; stable users should wait for a tagged release proving availability. Do not borrow 14 October changes for this window.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c
- https://github.com/can1357/oh-my-pi/pull/15642
- https://github.com/can1357/oh-my-pi/blob/b91db66e9b0b65a2c977e6a5bc74b0f4b1d58d1c/docs/approval-mode.md#L102-L105
