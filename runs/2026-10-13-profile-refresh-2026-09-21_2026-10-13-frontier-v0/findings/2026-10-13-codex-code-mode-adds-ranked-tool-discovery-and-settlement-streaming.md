---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-code-mode-adds-ranked-tool-discovery-and-settlement-streaming
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/4d15794336668d6098c0e36eb8e96cbbbfdb1d2d
    precision: commit
  - url: https://github.com/openai/codex/commit/28a264fbc766a59f2b550b8318f88e4a4b8dffe1
    precision: commit
---
# 2026-10-13-codex-code-mode-adds-ranked-tool-discovery-and-settlement-streaming

Code Mode adds ranked tool discovery and settlement streaming. Opt-in code_mode_tool_search exposes BM25-ranked tools.tool_search when the model supports it. Results are filtered through current nested-tool policy before the result limit. New as_settled and stream_settled JavaScript helpers expose fulfilled and rejected concurrent results in settlement order instead of waiting for the slowest input.

Channel: tagged-release (code_mode_tool_search off by default). Half: capability. Date: 2026-10-08 (0.162.0).

Operator consequence: Try ranked discovery for large permitted catalogs and settlement helpers for uneven tool latencies on 0.162.0 or later. These remove catalog-scanning and promise-orchestration scaffolding without granting additional tool authority; no end-to-end throughput gain was measured.

## Receipt
- https://github.com/openai/codex/commit/4d15794336668d6098c0e36eb8e96cbbbfdb1d2d
- https://github.com/openai/codex/commit/28a264fbc766a59f2b550b8318f88e4a4b8dffe1
