---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-claude-code-accessibility-reduce-motion
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.161"
status: accepted
change_type: accessibility
confidence: high
accessibility_impact: medium
actionability: observe
evidence:
  - label: "Motion Settings: Fixed animations not honoring \"Reduce motion\" accessibility setting"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Accessibility: Reduce Motion Setting Honored

## What Changed

Fixed animations not honoring 'Reduce motion' accessibility setting

## Operator Implication

Animations now properly respect OS-level accessibility preferences, benefiting users sensitive to motion

## Receipt

- [Motion Settings: Fixed animations not honoring "Reduce motion" accessibility setting](https://code.claude.com/docs/en/changelog)
