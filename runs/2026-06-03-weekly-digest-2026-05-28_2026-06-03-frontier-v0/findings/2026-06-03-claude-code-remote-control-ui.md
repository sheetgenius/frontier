---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-claude-code-remote-control-ui
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
  - label: "Remote Control UI: Now shows as a persistent footer pill with a link to the session instead of a startup message"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Remote Control UI Persistence

## What Changed

Remote control UI now shows as a persistent footer pill with a link to the session instead of a startup message

## Operator Implication

Improved visibility of remote control session links throughout a session, making it easier to share or track remote operations

## Receipt

- [Remote Control UI: Now shows as a persistent footer pill with a link to the session instead of a startup message](https://code.claude.com/docs/en/changelog)
