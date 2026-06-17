---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-claude-code-telemetry-labels
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.161"
status: accepted
change_type: capability
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "Telemetry: `OTEL_RESOURCE_ATTRIBUTES` values now included as labels on metric datapoints for custom slicing (team, repo)"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Telemetry Metric Labels from OTEL Attributes

## What Changed

OTEL_RESOURCE_ATTRIBUTES values now included as labels on metric datapoints for custom slicing (team, repo)

## Operator Implication

Operators can now slice usage and performance metrics by custom attributes (team, repo) defined via OTEL_RESOURCE_ATTRIBUTES

## Receipt

- [Telemetry: `OTEL_RESOURCE_ATTRIBUTES` values now included as labels on metric datapoints for custom slicing (team, repo)](https://code.claude.com/docs/en/changelog)
