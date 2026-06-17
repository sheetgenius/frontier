---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-01-pi-coding-agent-extension-mode-context
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Commit e56521e 'Add extension mode context' adds ctx.mode field allowing extensions to check 'tui', 'rpc', 'json', or 'print' execution modes"
    url: https://github.com/earendil-works/pi/commit/e56521e
    precision: commit
---
# Extension mode context detection

## What Changed

Added ctx.mode to extension contexts allowing extensions to distinguish execution modes: 'tui' (Terminal UI), 'rpc' (RPC protocol), 'json' (JSON event stream), 'print' (print mode). Enables guards for terminal-only features like custom(), component factories, and direct TUI rendering.

## Operator Implication

Extensions can now properly handle mode-specific behavior. Replaces runtime checks for hasUI with explicit mode detection, improving robustness.

## Receipt

- [Commit e56521e 'Add extension mode context' adds ctx.mode field allowing extensions to check 'tui', 'rpc', 'json', or 'print' execution modes](https://github.com/earendil-works/pi/commit/e56521e)
