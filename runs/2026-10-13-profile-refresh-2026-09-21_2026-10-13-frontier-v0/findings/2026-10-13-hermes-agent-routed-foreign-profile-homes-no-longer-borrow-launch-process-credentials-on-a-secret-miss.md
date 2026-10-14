---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-routed-foreign-profile-homes-no-longer-borrow-launch-process-credentials-on-a-secret-miss
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/2c3a75beaaf0fabc5a5dcc932d57f4be70efa3d5
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/secret_scope.py#L219-L247
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-routed-foreign-profile-homes-no-longer-borrow-launch-process-credentials-on-a-secret-miss

Routed foreign profile homes no longer borrow launch-process credentials on a secret miss. With multiplexing off, a missing secret in a routed foreign home could fall back to the launch process environment. Desktop, cron, MCP and kanban work could use another home's credentials. The fix stamps bound secret scopes with their home and refuses launch-environment fallback for a foreign home; own-home environment overlays remain intentional.

Channel: tagged-release (first stable v2026.9.24). Half: defect. Date: 2026-09-23.

Operator consequence: Audit profile-specific runs and credential use before v2026.9.24. A fix to multiplexed email reads did not settle all foreign-home scope paths.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/2c3a75beaaf0fabc5a5dcc932d57f4be70efa3d5
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/agent/secret_scope.py#L219-L247
