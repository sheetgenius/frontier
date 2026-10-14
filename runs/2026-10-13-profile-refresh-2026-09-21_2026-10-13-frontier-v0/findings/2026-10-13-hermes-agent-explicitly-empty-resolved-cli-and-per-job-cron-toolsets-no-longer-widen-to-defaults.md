---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-explicitly-empty-resolved-cli-and-per-job-cron-toolsets-no-longer-widen-to-defaults
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/b4969d8e2d0954b1938492b2f0a90321737f9164
    precision: commit
---
# 2026-10-13-hermes-agent-explicitly-empty-resolved-cli-and-per-job-cron-toolsets-no-longer-widen-to-defaults

Explicitly empty resolved CLI and per-job cron toolsets no longer widen to defaults. The Desktop/TUI path converted an empty resolved CLI selection into None, meaning no restriction. Cron create/update/storage and dispatch normalized a per-job [] away and could restore platform defaults, including MCP tools. The fix preserves explicit emptiness: an empty resolved CLI list returns [] without client-surface fold-in, and a per-job cron [] persists and returns zero toolsets without an MCP merge. Absent keys still select defaults; CLI MCP configuration must be inspected separately from an empty native selection.

Channel: tagged-release (first stable v0.21.6). Half: defect. Date: 2026-10-06.

Operator consequence: Upgrade to v0.21.6+ and review restricted jobs and sessions created on earlier tags. Inspect stored enabled_toolsets and the resolved CLI/MCP set; merely remembering that you selected nothing is insufficient.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/b4969d8e2d0954b1938492b2f0a90321737f9164
