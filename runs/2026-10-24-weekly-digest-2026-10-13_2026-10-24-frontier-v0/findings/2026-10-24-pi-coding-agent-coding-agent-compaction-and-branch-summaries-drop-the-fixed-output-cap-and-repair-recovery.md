---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-coding-agent-compaction-and-branch-summaries-drop-the-fixed-output-cap-and-repair-recovery
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/6fcb48670fc0e6672a644f3b2691010321734426
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/adfc14461aa11adbf486efad9b0ede2dc0dab06a
    precision: commit
  - url: https://github.com/earendil-works/pi/commit/02726086d11c2911aa872959e308b90d69182392
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/compaction.ts
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/compaction.ts#L140-L151
    precision: tagged_commit_file
---
# 2026-10-24-pi-coding-agent-coding-agent-compaction-and-branch-summaries-drop-the-fixed-output-cap-and-repair-recovery

Coding-agent compaction and branch summaries drop the fixed output cap and repair recovery. Coding-agent compaction and branch summary requests use the model's output allowance instead of a Pi-imposed fixed `maxTokens`; their `reserveTokens` remains a compaction threshold/input-budget setting, not the summary-output cap. This does not extend to Pi Durable: its [summary request still caps `maxTokens` at the lower of `floor(0.8 * policy.reserveTokens)` and the model limit](https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/compaction.ts#L140-L151). Custom compaction instructions now reach the split-turn prefix summary as well as the main summary. Recovery from a truncated tool call discards its corresponding orphaned tool result, preserving protocol consistency.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Recheck compaction cost, output length and application-specific summary instructions on 1.4.0. A longer summary may preserve more working context but is not free, and these fixes do not repair the provenance-flattening issue in section 12. Human review should focus on whether the retained plan and permissions still match the original conversation, not merely whether the next provider request succeeds.

## Receipt
- https://github.com/earendil-works/pi/commit/6fcb48670fc0e6672a644f3b2691010321734426
- https://github.com/earendil-works/pi/commit/adfc14461aa11adbf486efad9b0ede2dc0dab06a
- https://github.com/earendil-works/pi/commit/02726086d11c2911aa872959e308b90d69182392
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/src/core/compaction/compaction.ts
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/durable/src/harness/compaction.ts#L140-L151
