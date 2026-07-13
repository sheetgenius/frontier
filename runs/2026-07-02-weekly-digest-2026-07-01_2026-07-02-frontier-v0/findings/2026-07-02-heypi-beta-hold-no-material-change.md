---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-heypi-beta-hold-no-material-change
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/hunvreus/heypi/tree/0.2.0-beta.0
    precision: git_tag_tree
---
# heypi remains on beta with no material in-window change

heypi had no material in-window change. `0.2.0-beta.0` remains the active beta,
and the harvested `main` commit matched the beta tag during this cycle. Channel:
preview-or-beta hold. Operator consequence: the governance-shell profile from the
2026-06-23..2026-06-24 intake window still stands.

## Receipt
- https://github.com/hunvreus/heypi/tree/0.2.0-beta.0
