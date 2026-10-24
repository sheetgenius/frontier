---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-agents-window-3-26-removes-browser-bookmark-controls
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/release-notes/agents-window#oct-20-2026
    precision: official_docs
  - url: https://downloads.cursor.com/production/df132ffba90dfc15a12e6b8f020ba4e5d026c4be/darwin/arm64/Cursor-darwin-arm64.dmg
    precision: official_docs
---
# 2026-10-24-cursor-agents-window-3-26-removes-browser-bookmark-controls

Agents Window 3.26 removes browser bookmark controls. The built-in browser removes its bookmarks bar, favorites/history sidebar and Cmd+D bookmark shortcut. History remains in address-bar suggestions and the new-tab menu.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: Move durable review destinations out of that UI. This is a removed capability with a concrete migration cost, not evidence that review became faster.

## Receipt
- https://cursor.com/docs/release-notes/agents-window#oct-20-2026
- https://downloads.cursor.com/production/df132ffba90dfc15a12e6b8f020ba4e5d026c4be/darwin/arm64/Cursor-darwin-arm64.dmg
