---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-hermes-agent-tui-snapshot
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "post-v0.15.2"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Commit June 3: e02a603 'fix(tui): save TUI /save snapshots under Hermes home with system prompt (#38251)' by austinpickett and cursoragent"
    url: https://github.com/NousResearch/hermes-agent/commits/main
    precision: commit
---
# TUI /save snapshot storage under Hermes home

## What Changed

TUI /save snapshots now saved under Hermes home with system prompt, improving session reproducibility and file organization.

## Operator Implication

Session snapshots now properly organized within Hermes home directory structure. Operators managing snapshots will see improved file organization.

## Receipt

- [Commit June 3: e02a603 'fix(tui): save TUI /save snapshots under Hermes home with system prompt (#38251)' by austinpickett and cursoragent](https://github.com/NousResearch/hermes-agent/commits/main)
