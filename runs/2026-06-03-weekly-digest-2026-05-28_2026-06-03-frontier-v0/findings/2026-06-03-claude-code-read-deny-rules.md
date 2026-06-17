---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-claude-code-read-deny-rules
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
  - label: "Bug Fixes: Fixed Read deny rules not hiding files from Glob/Grep results"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Read Deny Rules Glob/Grep Filtering

## What Changed

Fixed Read deny rules not hiding files from Glob/Grep results

## Operator Implication

File access control policies now consistently apply across Read, Glob, and Grep tools, preventing policy bypass

## Receipt

- [Bug Fixes: Fixed Read deny rules not hiding files from Glob/Grep results](https://code.claude.com/docs/en/changelog)
