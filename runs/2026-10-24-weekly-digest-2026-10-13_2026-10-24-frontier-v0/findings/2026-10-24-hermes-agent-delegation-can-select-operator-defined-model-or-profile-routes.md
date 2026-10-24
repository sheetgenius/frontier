---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-delegation-can-select-operator-defined-model-or-profile-routes
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/919322f6c3aa2bad568a3312eb3cfbffa21db0a0
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/delegation_backends.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/advanced-delegation.yaml
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-delegation-can-select-operator-defined-model-or-profile-routes

Delegation can select operator-defined model or profile routes. Core supports pluggable delegation backends. The official plugin pinned at `b3825d097195b5748585b0491fab48c95d105c19` adds named model-map routes and named profile routes, plus configuration and `/delegation` controls. A session override changes routing on the next delegated call, but the cached tool schema follows the global configuration; incompatible stale parameters are refused with recovery instructions instead of silently using another backend's defaults. Profile routes use the selected profile's own model, credentials, skills, SOUL.md, and terminal policy. Optional literal model-route API keys live in plaintext configuration; using a provider reference preserves the normal credential store.

Channel: tagged-release. Half: capability. Date: 2026-10-23.

Operator consequence: Define a short allowed route list rather than building a separate supervisor merely to choose cheap, deep, or local subagents. Review each cross-profile route as a grant of that profile's authority. A global backend change may require a new session for its tool parameters. This provides a routing mechanism, not evidence that Kanban handbacks or end-to-end multi-agent coordination are reliable.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/919322f6c3aa2bad568a3312eb3cfbffa21db0a0
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/agent/delegation_backends.py
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/advanced-delegation.yaml
