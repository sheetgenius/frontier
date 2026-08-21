---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-codex-0-149-0-is-npm-latest-and-restores-permission-profile-on-resume
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.149.0
    precision: github_release
---
# 2026-08-20-codex-0-149-0-is-npm-latest-and-restores-permission-profile-on-resume

Codex 0.149.0 published 2026-08-20T21:04:55Z as prerelease=false. npm dist-tag latest=0.149.0. Compare rust-v0.148.0...rust-v0.149.0 reports ahead_by=242. Release notes add `codex agents`, `codex queue`, and `/cd` `/pwd` `/cwd`, and state that resumed and forked threads restore their active permission profile instead of silently falling back to current defaults (#39153).

Channel: tagged-release. Half: both.

Operator consequence: default install is 0.149.0. Two stables in 48 hours. If you jumped from 0.147.0, regression-test permission profile on resume.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.149.0
