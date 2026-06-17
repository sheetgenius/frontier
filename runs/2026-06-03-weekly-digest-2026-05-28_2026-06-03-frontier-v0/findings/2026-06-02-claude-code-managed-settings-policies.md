---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-claude-code-managed-settings-policies
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.161"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Bug Fixes: Fixed managed-settings policies blocking third-party provider sessions"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Managed Settings Policy Enforcement

## What Changed

Fixed managed-settings policies blocking third-party provider sessions

## Operator Implication

Third-party provider sessions (e.g., OpenAI, Bedrock) now work correctly even when managed settings policies are configured

## Receipt

- [Bug Fixes: Fixed managed-settings policies blocking third-party provider sessions](https://code.claude.com/docs/en/changelog)
