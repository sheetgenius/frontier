---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-claude-code-edit-tool-grep-consistency
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.160"
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Edit Tool: No longer requires separate Read after grep; single-file grep/egrep/fgrep commands satisfy read-before-edit check"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Edit Tool Read Requirement Relaxation

## What Changed

Edit tool no longer requires separate Read after grep; single-file grep/egrep/fgrep commands satisfy read-before-edit check

## Operator Implication

Workflows no longer need explicit Read tool calls when grep is used to locate content before editing, simplifying tool chains

## Receipt

- [Edit Tool: No longer requires separate Read after grep; single-file grep/egrep/fgrep commands satisfy read-before-edit check](https://code.claude.com/docs/en/changelog)
