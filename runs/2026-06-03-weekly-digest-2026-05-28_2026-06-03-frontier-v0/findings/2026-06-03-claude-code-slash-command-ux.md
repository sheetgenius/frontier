---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-claude-code-slash-command-ux
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.162"
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Slash Command UX: Clicking a slash command in autocomplete menu now fills it into your prompt instead of running immediately; press Enter to run"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Slash Command Autocomplete Behavior

## What Changed

Clicking a slash command in autocomplete menu now fills it into your prompt instead of running immediately; press Enter to run

## Operator Implication

Reduces accidental command execution by requiring explicit confirmation, allowing for review before running

## Receipt

- [Slash Command UX: Clicking a slash command in autocomplete menu now fills it into your prompt instead of running immediately; press Enter to run](https://code.claude.com/docs/en/changelog)
