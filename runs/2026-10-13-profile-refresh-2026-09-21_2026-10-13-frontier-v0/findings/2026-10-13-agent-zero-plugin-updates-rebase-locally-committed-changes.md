---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-plugin-updates-rebase-locally-committed-changes
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/40a4303637de45c846dc77728df3d78b5537cc9a
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/git.py
    precision: tagged_commit_file
---
# 2026-10-13-agent-zero-plugin-updates-rebase-locally-committed-changes

Plugin updates rebase locally committed changes. The plugin updater replaces unspecified pull reconciliation with fetch/rebase of local commits onto upstream. It refuses an existing Git operation, attempts to abort conflicts and restore local state, and reports conflicting filenames in a persistent escaped toast. Local commit identities can change on a successful rebase. This describes the product's updater; no such write command was executed for this research.

Channel: tagged-release. Half: both. Date: 2026-09-23 (first stable; implementation 2026-09-15T22:44:04Z).

Operator consequence: Before updating a locally modified plugin, preserve its patch/commits and inspect the conflict report. Plan for rebased local history instead of assuming commit IDs survive. Pair this with v2.14's changed plugin precedence when auditing custom extensions.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/40a4303637de45c846dc77728df3d78b5537cc9a
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/git.py
