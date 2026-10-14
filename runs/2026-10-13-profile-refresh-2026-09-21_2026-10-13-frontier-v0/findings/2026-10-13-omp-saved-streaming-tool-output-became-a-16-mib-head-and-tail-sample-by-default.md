---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-saved-streaming-tool-output-became-a-16-mib-head-and-tail-sample-by-default
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/cbf7898ce150c8a903db24fabe8f111567a3dc97
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L615
    precision: tagged_commit_file
  - url: https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/tui/src/tools/streaming-output.ts
    precision: tagged_commit_file
---
# 2026-10-13-omp-saved-streaming-tool-output-became-a-16-mib-head-and-tail-sample-by-default

Saved streaming tool output became a 16 MiB head-and-tail sample by default. Bash, Python and JavaScript eval artifact files now default to a 16 MiB cap. Larger output retains its beginning and recent tail around a truncation notice; an artifact URL no longer implies the full raw stream is saved. tools.artifactMaxBytes: 0 restores unlimited output.

Channel: tagged-release. Half: both. Date: 2026-10-01 (v18.4.9).

Operator consequence: If saved tool output is an audit log or parser input, inspect truncation notices and set an explicit retention policy. Unlimited output preserves completeness at the cost of storage growth.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/cbf7898ce150c8a903db24fabe8f111567a3dc97
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/docs/settings.md#L615
- https://github.com/can1357/oh-my-pi/blob/v18.10.4/packages/tui/src/tools/streaming-output.ts
