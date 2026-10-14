---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-rollouts-extends-agent-work-into-deploy-verification-without-autonomous-rollback
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/changelog/rollouts-and-security-reviewer
    precision: official_docs
  - url: https://cursor.com/docs/rollouts
    precision: official_docs
  - url: https://cursor.com/docs/security-agents
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/bugbot#sep-28-2026
    precision: official_docs
---
# 2026-10-13-cursor-rollouts-extends-agent-work-into-deploy-verification-without-autonomous-rollback

Rollouts extends agent work into deploy verification without autonomous rollback. Rollouts writes a monitoring plan on the pull request, wakes at deploy and at later intervals, inspects telemetry, opens a regression issue and can hand a fix to a cloud agent. It does not autonomously merge or roll back. Security Review reports attack paths and proposed fixes. For GitHub pull requests, .cursor/config/bugbot.yaml overrides team settings and can lower Autofix but cannot turn it on.

Channel: docs-only (hosted capabilities described by vendor). Half: capability. Date: 2026-09-23; GitHub Bugbot config note week of 2026-09-28.

Operator consequence: Trial deploy monitoring with a read-only telemetry connection and an appropriately scoped service-account key. The suggested privilege choices are operator judgment, not enforced defaults established here. Human attention can move from dashboard watching to monitoring-plan review and issue triage; rollback ownership remains human. Inspect GitHub repository overrides if team Bugbot settings matter.

## Receipt
- https://cursor.com/changelog/rollouts-and-security-reviewer
- https://cursor.com/docs/rollouts
- https://cursor.com/docs/security-agents
- https://cursor.com/docs/release-notes/bugbot#sep-28-2026
