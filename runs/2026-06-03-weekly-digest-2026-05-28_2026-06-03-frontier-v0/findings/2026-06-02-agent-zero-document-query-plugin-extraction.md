---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-agent-zero-document-query-plugin-extraction
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
  - label: "v1.19 release notes under Document Query Plugin: 'Extracted into standalone plugin with parser strategy pattern', 'LiteParse added as preferred parser with legacy fallback support', 'Automatic OCR dis"
    url: https://github.com/agent0ai/agent-zero/releases
    precision: release_note
---
# Document Query Plugin extracted to standalone plugin with parser strategy pattern

## What Changed

Document Query Plugin extracted into standalone plugin with parser strategy pattern. Added LiteParse as preferred parser with legacy fallback support. Progressive skill loading for long tool instructions. Expanded settings panel with parser and OCR controls. Automatic OCR disabling for large documents.

## Operator Implication

Operators can now independently manage document query capabilities with configurable parser strategies. OCR auto-disabling for large documents reduces computational overhead. Plugin extraction enables modularity.

## Receipt

- [v1.19 release notes under Document Query Plugin: 'Extracted into standalone plugin with parser strategy pattern', 'LiteParse added as preferred parser with lega](https://github.com/agent0ai/agent-zero/releases)
