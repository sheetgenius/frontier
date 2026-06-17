---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-agent-zero-memory-staleness-guidance
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v1.19"
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "v1.19 release notes under Additional Updates: 'Memory improvements'. Commit messages: 'Guide memory staleness with timestamps', 'more explicit memory_forget usage guidance', 'Improve auto-memory extra"
    url: https://github.com/agent0ai/agent-zero/releases
    precision: release_note
---
# Enhanced memory management with staleness tracking and explicit forget guidance

## What Changed

Memory management improved with timestamp-based staleness tracking. Enhanced memory_forget usage guidance with explicit staleness indicators. Improved auto-memory extraction quality.

## Operator Implication

Operators deploying long-running agents benefit from clearer memory lifecycle management. Timestamp-based staleness helps agents distinguish fresh vs. stale context.

## Receipt

- [v1.19 release notes under Additional Updates: 'Memory improvements'. Commit messages: 'Guide memory staleness with timestamps', 'more explicit memory_forget usa](https://github.com/agent0ai/agent-zero/releases)
