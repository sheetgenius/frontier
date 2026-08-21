---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-agent-flywheel-optional-ee-fmd-pi-pfr-stack-on-main-no-new-tag
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/f3a089ce95992433c4e4e7ed2b52536afca228e4
    precision: git_commit
---
# 2026-08-20-agent-flywheel-optional-ee-fmd-pi-pfr-stack-on-main-no-new-tag

Last tag remains v0.7.0 (2026-06-26). compare v0.7.0...HEAD ahead_by=163. Commit f3a089ce (2026-08-19) adds optional eidetic_engine_cli, franken_markdown, pi_agent_rust, and power_failure_resumer with installers and checksums. pi_agent_rust is this stack's wrapper, not a Pi Coding Agent release. Installer 429 retry and Postgres 18 fallback are also main-only.

Channel: main-unreleased. Half: capability.

Operator consequence: a v0.7.0 install does not get these tools. Run main only if you accept untagged installer changes.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/f3a089ce95992433c4e4e7ed2b52536afca228e4
