---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-claude-code-agent-progress-display
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.161"
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Agent Progress: `claude agents` rows now show `done/total` before detail when work is fanned out"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Agent Progress Counter in Agent View

## What Changed

claude agents rows now show done/total before detail when work is fanned out

## Operator Implication

Improved visibility into parallel work progress; operators can see completion status across fanned-out subagent tasks

## Receipt

- [Agent Progress: `claude agents` rows now show `done/total` before detail when work is fanned out](https://code.claude.com/docs/en/changelog)
