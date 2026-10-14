---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-memory-saving-turns-retain-their-persistence-only-tool-boundary
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/1a4c6b4d1a429ce152cb3ced1d87454ac19630b8
    precision: commit
  - url: https://github.com/openclaw/openclaw/compare/1a4c6b4d1a429ce152cb3ced1d87454ac19630b8...v2026.10.1
    precision: git_compare
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.1/CHANGELOG/2026.10.1.md
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/pull/166650
    precision: merged_pr
---
# 2026-10-13-openclaw-memory-saving-turns-retain-their-persistence-only-tool-boundary

Memory-saving turns retain their persistence-only tool boundary. Hidden pre-compaction memory-saving turns could regain execution or MCP tools after selecting a memory-only surface, allowing unrelated project work while a user's request waited. 10.1 keeps the persistence restriction through host-tool collection, client/MCP assembly and final harness presentation. File-backed saves keep read and the append-only daily-memory writer; provider-backed saves keep read and the selected plugin's declared persistence/lookup tools. Normal foreground tooling remains available.

Channel: tagged-release, retained at 10.3. Half: defect. Date: 2026-10-10 first stable 2026.10.1.

Operator consequence: Include this fixed assembly path when depending on background memory work staying within its role. A memory-saving label alone was not an enforcement boundary. The fix requires no configuration or state migration and is included in the 10.3 stable pin.

## Receipt
- https://github.com/openclaw/openclaw/commit/1a4c6b4d1a429ce152cb3ced1d87454ac19630b8
- https://github.com/openclaw/openclaw/compare/1a4c6b4d1a429ce152cb3ced1d87454ac19630b8...v2026.10.1
- https://github.com/openclaw/openclaw/blob/v2026.10.1/CHANGELOG/2026.10.1.md
- https://github.com/openclaw/openclaw/pull/166650
