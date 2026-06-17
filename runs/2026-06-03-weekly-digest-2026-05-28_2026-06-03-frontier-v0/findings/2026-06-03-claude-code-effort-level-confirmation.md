---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-claude-code-effort-level-confirmation
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
  - label: "Effort Level: `/effort` command now confirms when your chosen level will persist as the default for new sessions"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Effort Level Default Persistence Confirmation

## What Changed

/effort command now confirms when your chosen level will persist as the default for new sessions

## Operator Implication

Clearer UX feedback for effort level configuration, reducing confusion about whether changes persist across sessions

## Receipt

- [Effort Level: `/effort` command now confirms when your chosen level will persist as the default for new sessions](https://code.claude.com/docs/en/changelog)
