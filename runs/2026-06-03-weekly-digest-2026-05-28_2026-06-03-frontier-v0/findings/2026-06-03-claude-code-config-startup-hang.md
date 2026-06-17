---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-claude-code-config-startup-hang
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.162"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: medium
actionability: observe
evidence:
  - label: "Bug Fixes: Fixed silent startup hang when config directory is read-only or unwritable \u2014 now starts with in-memory config and surfaces errors"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Read-Only Config Directory Startup Fix

## What Changed

Fixed silent startup hang when config directory is read-only or unwritable — now starts with in-memory config and surfaces errors

## Operator Implication

Improves robustness in restricted environments (sandboxed, read-only mounts, containers); startup now succeeds and surfaces errors instead of hanging

## Receipt

- [Bug Fixes: Fixed silent startup hang when config directory is read-only or unwritable — now starts with in-memory config and surfaces errors](https://code.claude.com/docs/en/changelog)
