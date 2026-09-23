---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-antigravity-headless-became-a-first-class-driver-unlimited-default-timeout-structured-errors-backgroun
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-09-21-antigravity-headless-became-a-first-class-driver-unlimited-default-timeout-structured-errors-backgroun

Headless became a first-class driver: unlimited default timeout, structured errors, background daemons kept alive. A headless run no longer dies at five minutes, reports machine-readable failure codes, and can leave processes behind on purpose.

Channel: tagged-release. Half: capability. Date: 2026-09-09 to 2026-09-18.

Operator consequence: CI wrappers that relied on the 5-minute cap as a runaway guard must now pass `--print-timeout` explicitly (>= 1.2.6). Handle exit code 3 and parse `AGY_ERROR`. Note that a timed-out run exits 0 since 1.1.28; check stderr, not the code. Reap leftover daemon processes on shared runners.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.2.6/CHANGELOG.md
