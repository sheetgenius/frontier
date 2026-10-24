---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-compaction-gains-an-opt-in-background-summary-with-real-latency-and-inference-tradeoffs
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/session/compaction.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/compaction.mdx
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-10-24-opencode-compaction-gains-an-opt-in-background-summary-with-real-latency-and-inference-tradeoffs

Compaction gains an opt-in background summary with real latency and inference tradeoffs. 2.1.0 summarizes the whole conversation while retaining recent text verbatim; the documented defaults keep about 15,000 tokens and reserve a larger response buffer. In 2.1.4, `experimental.background_compaction: true` precomputes a summary before it is needed, only for compatible automatic summary compaction. Source triggers at 85 percent of the normal compaction threshold only after measured prompt tokens total at least 64,000. The work and cached result live in memory; an unfinished precomputation can still be awaited when compaction is required. This is not a guarantee that no foreground wait occurs. Another 2.1.4 repair shortens older tool output before dropping history when summarization itself overflows. Automatic compaction is enabled, but background precomputation remains off by default.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Try background compaction on a bounded long task and record summary requests, billed tokens, actual stalls and any lost constraints. Do not describe it as free latency reduction: a speculative summary may consume inference without being reused, and no restart durability for that in-memory precomputation was established. Persistent constraints still belong in explicit instructions and verification. This replaces some manual context bookkeeping, while the scarce judgment moves to whether the compressed state is sufficient to continue correctly.

## Receipt
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/session/compaction.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/compaction.mdx
- https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md
