---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-claude-code-tool-search-dedicated
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
  - label: "Tool Search: Explicitly listing Grep/Glob via `--tools` now provides dedicated search tools on native builds with embedded search"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Tool Search Enhancement for Grep/Glob

## What Changed

Explicitly listing Grep/Glob via --tools now provides dedicated search tools on native builds with embedded search

## Operator Implication

Native binary users can now explicitly enable dedicated Grep/Glob tools for more efficient code search operations

## Receipt

- [Tool Search: Explicitly listing Grep/Glob via `--tools` now provides dedicated search tools on native builds with embedded search](https://code.claude.com/docs/en/changelog)
