---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-pi-coding-agent-v0-80-3-adds-two-ui-editor-settings-outputpad-horizontal
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.80.3
    precision: github_release
---
# 2026-07-01-pi-coding-agent-v0-80-3-adds-two-ui-editor-settings-outputpad-horizontal

v0.80.3 adds two UI/editor settings: outputPad (horizontal message padding) and externalEditor override for Ctrl+G (channel: tagged-release, 2026-06-30). Operator consequence: Optional cosmetic/config tweak only, no re-audit needed. externalEditor lets Ctrl+G use a configured editor before $VISUAL/$EDITOR fallbacks (Notepad on Windows, nano elsewhere); outputPad controls horizontal padding for user/assistant/thinking blocks. Nice-to-have for operators who customize the TUI or scripting environment. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.80.3
