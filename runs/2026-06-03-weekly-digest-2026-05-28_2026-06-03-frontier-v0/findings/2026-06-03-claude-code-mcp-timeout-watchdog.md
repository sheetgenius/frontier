---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-claude-code-mcp-timeout-watchdog
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.162"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Bug Fixes: Fixed MCP per-server `timeout` values below 1000ms being floored to 1-second watchdog"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# MCP Per-Server Timeout Enforcement

## What Changed

Fixed MCP per-server timeout values below 1000ms being floored to 1-second watchdog

## Operator Implication

Sub-second MCP timeouts now work as configured instead of being silently increased to 1-second, improving latency-sensitive integrations

## Receipt

- [Bug Fixes: Fixed MCP per-server `timeout` values below 1000ms being floored to 1-second watchdog](https://code.claude.com/docs/en/changelog)
