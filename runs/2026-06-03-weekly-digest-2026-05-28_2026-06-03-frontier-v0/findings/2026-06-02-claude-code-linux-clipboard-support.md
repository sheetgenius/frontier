---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-claude-code-linux-clipboard-support
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.161"
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Clipboard Support: Fullscreen mode now uses `wl-copy`/`xclip`/`xsel` on Linux when available"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Linux Clipboard Tool Support

## What Changed

Fullscreen mode now uses wl-copy/xclip/xsel on Linux when available

## Operator Implication

Image copy/paste in fullscreen mode now works on Linux via Wayland (wl-copy) and X11 (xclip/xsel) clipboard managers

## Receipt

- [Clipboard Support: Fullscreen mode now uses `wl-copy`/`xclip`/`xsel` on Linux when available](https://code.claude.com/docs/en/changelog)
