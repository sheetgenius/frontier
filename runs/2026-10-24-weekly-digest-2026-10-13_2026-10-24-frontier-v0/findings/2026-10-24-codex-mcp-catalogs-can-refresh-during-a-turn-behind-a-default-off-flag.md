---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-mcp-catalogs-can-refresh-during-a-turn-behind-a-default-off-flag
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/0df4aa67781ae45a3c97befa4db48b734afe46d9
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs
    precision: tagged_commit_file
---
# 2026-10-24-codex-mcp-catalogs-can-refresh-during-a-turn-behind-a-default-off-flag

MCP catalogs can refresh during a turn behind a default-off flag. [mcp_tool_list_changed](https://github.com/openai/codex/commit/0df4aa67781ae45a3c97befa4db48b734afe46d9) lets ordinary MCP tool-list notifications refresh catalogs before subsequent discovery or binding within the same turn. It coalesces refreshes, retains the prior catalog on failure, and backs off before retrying. The feature defaults off.

Channel: tagged-release. Half: capability. Date: 2026-10-23.

Operator consequence: Trial changing catalogs before keeping reconnect scaffolding. Test failed and paginated refreshes and whether stale tools remain callable; enabling incremental request catalogs does not itself enable this separate feature.

## Receipt
- https://github.com/openai/codex/commit/0df4aa67781ae45a3c97befa4db48b734afe46d9
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs
