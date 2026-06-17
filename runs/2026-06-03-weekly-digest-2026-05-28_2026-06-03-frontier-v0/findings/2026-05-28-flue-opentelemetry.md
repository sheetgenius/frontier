---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-28-flue-opentelemetry
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.8.1"
status: accepted
change_type: capability
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "From CHANGELOG.md v0.8.1 (2026-05-28): 'OpenTelemetry tracing integration. Added `@flue/opentelemetry` for tracing Flue model turns through OpenTelemetry-compatible observability tooling.' Commit ab3a"
    url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
    precision: release_note
---
# OpenTelemetry tracing integration added

## What Changed

New `@flue/opentelemetry` package provides tracing for Flue model turns through OpenTelemetry-compatible observability tooling.

## Operator Implication

Operators can now wire Flue model turns into observability platforms supporting OpenTelemetry standards for enhanced tracing visibility.

## Receipt

- [From CHANGELOG.md v0.8.1 (2026-05-28): 'OpenTelemetry tracing integration. Added `@flue/opentelemetry` for tracing Flue model turns through OpenTelemetry-compat](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
