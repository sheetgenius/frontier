---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-claude-code-windows-permission-paths
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.162"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Bug Fixes: Fixed Windows permission rules with backslashes or case-variant paths not matching"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Windows Permission Path Matching

## What Changed

Fixed Windows permission rules with backslashes or case-variant paths not matching

## Operator Implication

Permission rules now reliably match Windows paths regardless of case or separator style, improving Windows policy enforcement

## Receipt

- [Bug Fixes: Fixed Windows permission rules with backslashes or case-variant paths not matching](https://code.claude.com/docs/en/changelog)
