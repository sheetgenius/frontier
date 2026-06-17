---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-hermes-agent-docs-remote-desktop
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "post-v0.15.2"
status: accepted
change_type: workflow
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Commit June 3: 3c73d18 'docs: remote desktop connect needs --tui on the backend (#38350)' by teknium1"
    url: https://github.com/NousResearch/hermes-agent/commits/main
    precision: commit
---
# Documentation clarification for remote desktop connectivity

## What Changed

Documentation clarified that remote desktop connect requires --tui flag on backend.

## Operator Implication

Operators deploying remote desktop connectivity should note --tui requirement for backend instances.

## Receipt

- [Commit June 3: 3c73d18 'docs: remote desktop connect needs --tui on the backend (#38350)' by teknium1](https://github.com/NousResearch/hermes-agent/commits/main)
