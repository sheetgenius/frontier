---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-fullscreen-transcripts-become-the-default-terminal-presentation
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/5106a5234ff10f49f2403e84b1f668ac2b4a61b5
    precision: commit
---
# 2026-10-13-codex-fullscreen-transcripts-become-the-default-terminal-presentation

Fullscreen transcripts become the default terminal presentation. tui.fullscreen_transcript defaults true even without a tui section and applies from the first frame. Alternate-screen restrictions still take precedence.

Channel: tagged-release. Half: capability. Date: 2026-09-25 (0.157.0).

Operator consequence: Set tui.fullscreen_transcript=false to retain terminal scrollback. This visible default flip changes presentation, not session or approval authority.

## Receipt
- https://github.com/openai/codex/commit/5106a5234ff10f49f2403e84b1f668ac2b4a61b5
