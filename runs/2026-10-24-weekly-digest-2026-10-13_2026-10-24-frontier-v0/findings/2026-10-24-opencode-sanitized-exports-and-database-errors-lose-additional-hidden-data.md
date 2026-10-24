---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-sanitized-exports-and-database-errors-lose-additional-hidden-data
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/a8fc567c5c2a0af0b6069e6b87293d2d420cd668
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/706a688994c2343243615b0bd38083fc8fe69671
    precision: commit
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/session/transfer.ts
    precision: tagged_commit_file
---
# 2026-10-24-opencode-sanitized-exports-and-database-errors-lose-additional-hidden-data

Sanitized exports and database errors lose additional hidden data. [Database query-error parameters are redacted](https://github.com/anomalyco/opencode/commit/a8fc567c5c2a0af0b6069e6b87293d2d420cd668), first v2.0.30. [Completed compaction replay context is omitted from sanitized exports](https://github.com/anomalyco/opencode/commit/706a688994c2343243615b0bd38083fc8fe69671), first v2.0.31. The latter prevents hidden replay payloads surviving sanitization of visible summary text. At [v2.1.4 the sanitizer handles native compaction data](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/session/transfer.ts).

Channel: tagged-release. Half: defect. Date: 2026-10-16.

Operator consequence: Regenerate sanitized support exports on the fixed version and inspect the actual export/error path before treating it as safe to share. This is a concrete data-disclosure repair, not a claim that every diagnostic artifact is secret-free. It belongs beside the sharing and credential discussion.

## Receipt
- https://github.com/anomalyco/opencode/commit/a8fc567c5c2a0af0b6069e6b87293d2d420cd668
- https://github.com/anomalyco/opencode/commit/706a688994c2343243615b0bd38083fc8fe69671
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/session/transfer.ts
