---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-incremental-tools-and-coordinated-mcp-oauth-refresh-now-default
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/c953dacb42d2773d0ca9cc25a01129bba2ca36a8
    precision: commit
  - url: https://github.com/openai/codex/commit/35757adb728b268a1e75eabeb3e4cf9a6def5c18
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs
    precision: tagged_commit_file
---
# 2026-10-24-codex-incremental-tools-and-coordinated-mcp-oauth-refresh-now-default

Incremental tools and coordinated MCP OAuth refresh now default on. [Responses Lite tool catalog updates enter request history by default](https://github.com/openai/codex/commit/c953dacb42d2773d0ca9cc25a01129bba2ca36a8), and [MCP OAuth refresh coordination also becomes stable/default-on](https://github.com/openai/codex/commit/35757adb728b268a1e75eabeb3e4cf9a6def5c18). These are two distinct default changes, not activation of ranked Code Mode discovery or live MCP catalog refresh.

Channel: tagged-release. Half: capability. Date: 2026-10-23.

Operator consequence: Test request-history compatibility as catalogs change and refresh credentials through multiple clients. Compare native coordination with token-refresh wrappers before deleting the latter; no latency or refresh-rate benchmark was run.

## Receipt
- https://github.com/openai/codex/commit/c953dacb42d2773d0ca9cc25a01129bba2ca36a8
- https://github.com/openai/codex/commit/35757adb728b268a1e75eabeb3e4cf9a6def5c18
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs
