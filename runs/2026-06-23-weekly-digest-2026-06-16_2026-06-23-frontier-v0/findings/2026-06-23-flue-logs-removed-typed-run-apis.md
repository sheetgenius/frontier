---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-23-flue-logs-removed-typed-run-apis
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-06-16
  end: 2026-06-23
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
    precision: release_note
---
# 2026-06-23-flue-logs-removed-typed-run-apis

Index stub for the 2026-06-16..2026-06-23 run. Full receipted detail (what
changed, operator implication, accessibility and security consequence, and
release-channel status) lives in harvest/flue.md, with the curated signal in
signals/frontier-signals.yml.

## Receipt
- https://github.com/withastro/flue/blob/main/CHANGELOG.md
