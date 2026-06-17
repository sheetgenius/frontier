---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-claude-code-parallel-bash-fault-isolation
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.161"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Parallel Tools: Failed Bash command no longer cancels other calls in same batch"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Parallel Tool Execution Fault Isolation

## What Changed

Failed Bash command no longer cancels other calls in same batch

## Operator Implication

Batch tool execution now completes all operations even if one fails, improving resilience of multi-tool workflows

## Receipt

- [Parallel Tools: Failed Bash command no longer cancels other calls in same batch](https://code.claude.com/docs/en/changelog)
