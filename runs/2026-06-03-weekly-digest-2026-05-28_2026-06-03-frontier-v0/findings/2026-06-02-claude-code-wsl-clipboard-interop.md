---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-claude-code-wsl-clipboard-interop
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.160"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Clipboard: Fixed copy-on-select not writing to Windows clipboard on WSL \u2014 now uses PowerShell interop instead of OSC 52"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# WSL Clipboard Interop Fix

## What Changed

Fixed copy-on-select not writing to Windows clipboard on WSL — now uses PowerShell interop instead of OSC 52

## Operator Implication

Image selection copy now works correctly on WSL by using PowerShell Bridge instead of terminal sequences, improving cross-platform workflows

## Receipt

- [Clipboard: Fixed copy-on-select not writing to Windows clipboard on WSL — now uses PowerShell interop instead of OSC 52](https://code.claude.com/docs/en/changelog)
