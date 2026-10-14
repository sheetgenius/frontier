---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-compaction-and-branch-summaries-omit-thinking-blocks-in-1-2
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/15e7bdc14cae38786c4cde24870ffce888e062cd
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/compaction/utils.ts
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-compaction-and-branch-summaries-omit-thinking-blocks-in-1-2

Compaction and branch summaries omit thinking blocks in 1.2.0. serializeConversation omits thinking blocks for compaction, branch summaries, and bug reports. Replayed thinking could make a summary request larger than the live context and cause repeated failures. The code changes summary inputs; it does not erase original session records or establish a measured general cost reduction.

Channel: tagged-release. Half: both. Date: 2026-10-12.

Operator consequence: Upgrade sessions that fail compaction with oversized summaries to 1.2.0 and inspect the new summary input. Do not rely on the omission as transcript redaction.

## Receipt
- https://github.com/earendil-works/pi/commit/15e7bdc14cae38786c4cde24870ffce888e062cd
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/compaction/utils.ts
