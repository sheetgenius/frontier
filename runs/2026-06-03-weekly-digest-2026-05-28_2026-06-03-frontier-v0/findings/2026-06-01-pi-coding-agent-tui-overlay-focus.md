---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-01-pi-coding-agent-tui-overlay-focus
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Commit 91a2f86 'fix(tui): harden overlay focus restoration' adds handle.focus(), handle.unfocus(), and handle.unfocus({target}) methods for explicit overlay focus control"
    url: https://github.com/earendil-works/pi/commit/91a2f86
    precision: commit
---
# TUI overlay focus control hardening

## What Changed

Enhanced OverlayHandle API with focus() and unfocus() methods for explicit focus management. Focused visible overlays maintain input ownership across temporary non-overlay UI, with ability to reclaim input after temporary UI closes. Improved focus persistence logic.

## Operator Implication

Terminal UI overlays now properly maintain focus state across temporary UI interactions. Improves interactive UX stability when overlays open transient components.

## Receipt

- [Commit 91a2f86 'fix(tui): harden overlay focus restoration' adds handle.focus(), handle.unfocus(), and handle.unfocus({target}) methods for explicit overlay foc](https://github.com/earendil-works/pi/commit/91a2f86)
