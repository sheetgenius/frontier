---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-28-hermes-agent-velocity-release
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.15.0 (v2026.5.28)"
status: accepted_signal
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Release notes: 'The Velocity Release.' Hermes gets dramatically faster \u2014 to start, to run, to ship work, and to grow. The 16,083-line `run_agent.py` collapses to 3,821 (-76%) across 14 cohesive `agent"
    url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.28
    precision: release_note
---
# v0.15.0 Velocity Release - Agent architecture refactor and multi-agent platform

## What Changed

16,083-line run_agent.py refactored to 3,821 lines (-76%) across 14 modular agent/* components; Kanban evolved into multi-agent platform with auto-decomposition, swarm topology, per-task model overrides, and worktree-per-task; cold-start performance improved another 1 second; session_search rebuilt 4,500x faster with no LLM cost; Promptware defense added against Brainworm-class attacks; Bitwarden Secrets Manager integration replaces per-provider API keys; 19 security-tagged issues closed.

## Operator Implication

Dramatic performance improvements and architectural modernization. Operators deploying this release should validate Kanban workflows, verify Bitwarden Secrets Manager setup for credential rotation, and test Promptware defense patterns. Cold-start time improvements benefit resource-constrained deployments.

## Receipt

- [Release notes: 'The Velocity Release.' Hermes gets dramatically faster — to start, to run, to ship work, and to grow. The 16,083-line `run_agent.py` collapses t](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.28)
