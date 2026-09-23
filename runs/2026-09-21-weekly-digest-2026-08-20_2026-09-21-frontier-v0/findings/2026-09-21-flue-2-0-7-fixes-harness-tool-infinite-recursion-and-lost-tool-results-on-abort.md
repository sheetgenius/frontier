---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-flue-2-0-7-fixes-harness-tool-infinite-recursion-and-lost-tool-results-on-abort
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.0.7
    precision: github_release
---
# 2026-09-21-flue-2-0-7-fixes-harness-tool-infinite-recursion-and-lost-tool-results-on-abort

2.0.7 fixes harness-tool infinite recursion and lost tool results on abort. A harness tool that invoked another harness tool (directly or
indirectly) could recurse without bound. An aborted submission dropped completed
tool results; now completed calls keep outcomes and unexecuted ones record as
interrupted. Truncated tool batches resume instead of erroring. Post-compaction
turns no longer fail with "Cannot continue from message role: assistant".

Channel: tagged-release. Half: defect. Date: 2026-09-15.

Operator consequence: Upgrade if you compose harness tools or abort
submissions; before 2.0.7 the durable record of an aborted batch was
incomplete, which matters to anyone auditing what a tool actually did.

## Receipt
- https://github.com/withastro/flue/releases/tag/%40flue%2Fruntime%402.0.7
