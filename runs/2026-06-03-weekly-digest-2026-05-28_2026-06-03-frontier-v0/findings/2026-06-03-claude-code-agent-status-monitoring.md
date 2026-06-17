---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-claude-code-agent-status-monitoring
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.162"
status: accepted_signal
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Agent Status Monitoring: `claude agents --json` now includes `waitingFor` field showing what a waiting session is blocked on (e.g., permission prompt)"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Agent Status Monitoring Enhancement

## What Changed

claude agents --json now includes waitingFor field showing what a waiting session is blocked on (e.g., permission prompt)

## Operator Implication

Operators can now programmatically determine the specific reason a session is blocked, enabling better monitoring and debugging of stuck agent workflows

## Receipt

- [Agent Status Monitoring: `claude agents --json` now includes `waitingFor` field showing what a waiting session is blocked on (e.g., permission prompt)](https://code.claude.com/docs/en/changelog)
