---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-flue-main-unreleased-contract-rewrite
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/076fa5c5bfe089c1021833364f3b32ee423eeec8/CHANGELOG.md
    precision: git_blob_sha
---
# 2026-07-02-flue-main-unreleased-contract-rewrite

Flue has no tag after `v1.0.0-beta.9`, but the `Unreleased` changelog at commit
`076fa5c5bfe089c1021833364f3b32ee423eeec8` removes direct prompt result-await,
removes `client.agents.prompt()`, makes `wait()` completion-only, unifies input as
`DeliveredMessage`, bumps storage schema v5 with reset-only migration, and
validates signal `tagName`. Channel: main-unreleased. Operator consequence:
adapter code will have to change, but there is no release tag to adopt yet.

## Receipt
- https://github.com/withastro/flue/blob/076fa5c5bfe089c1021833364f3b32ee423eeec8/CHANGELOG.md
