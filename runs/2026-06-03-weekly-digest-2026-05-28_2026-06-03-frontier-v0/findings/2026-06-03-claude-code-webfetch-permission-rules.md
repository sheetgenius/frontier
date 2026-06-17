---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-claude-code-webfetch-permission-rules
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.162"
status: accepted_signal
change_type: reliability
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Bug Fixes: Fixed WebFetch permission rules not applying to built-in preapproved domains"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# WebFetch Permission Rules Enforcement

## What Changed

Fixed WebFetch permission rules not applying to built-in preapproved domains

## Operator Implication

Custom permission rules now correctly override preapproved domain whitelist for WebFetch, improving policy enforcement consistency

## Receipt

- [Bug Fixes: Fixed WebFetch permission rules not applying to built-in preapproved domains](https://code.claude.com/docs/en/changelog)
