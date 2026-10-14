---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-file-references-with-line-suffixes-resolve-in-v0-64
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/7336b08d2925233490a68e495e0c0d3ba58b6706
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
    precision: github_release
---
# 2026-10-13-gemini-cli-file-references-with-line-suffixes-resolve-in-v0-64

File references with line suffixes resolve in v0.64.0. @file resolution strips recognized trailing line/column/range suffixes when resolving the file, and checks ignore rules against its base path. The same commit prevents zero-progress ghost-text wrapping. A diagnostic such as @src/main.ts:10:5 can resolve without manual cleanup; the change does not establish that only the specified lines are supplied as context.

Channel: tagged-release. Half: capability. Date: 2026-10-13.

Operator consequence: Paste common diagnostic file references directly on 0.64.0, while inspecting the resulting context when a restricted line range matters. Keep ignore rules on the actual file path. Do not turn path-resolution convenience into a promise of payload minimization.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/7336b08d2925233490a68e495e0c0d3ba58b6706
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
