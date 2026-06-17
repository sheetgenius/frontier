---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-claude-code-agents-output-width
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.162"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Bug Fixes: Fixed `claude agents` truncating status text at 60-120 columns; now uses full terminal width"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Agent Output Terminal Width

## What Changed

Fixed `claude agents` truncating status text at 60-120 columns; now uses full terminal width

## Operator Implication

Agent status displays now use available terminal width, improving readability in wide terminal configurations

## Receipt

- [Bug Fixes: Fixed `claude agents` truncating status text at 60-120 columns; now uses full terminal width](https://code.claude.com/docs/en/changelog)
