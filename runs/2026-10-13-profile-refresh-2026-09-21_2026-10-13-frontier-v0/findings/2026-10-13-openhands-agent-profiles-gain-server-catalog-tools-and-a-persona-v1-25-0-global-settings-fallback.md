---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-agent-profiles-gain-server-catalog-tools-and-a-persona-v1-25-0-global-settings-fallback
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/pull/17516
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17843
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/hooks/mutation/use-create-conversation.ts#L166-L280
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-sdk/openhands/sdk/tool/defaults.py#L27-L55
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/skills_service.py#L435-L459
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/.agents/skills/verify-openhands/references/feature-map/F13-agent-profiles.md#L85
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/issues/17991
    precision: official_docs
---
# 2026-10-13-openhands-agent-profiles-gain-server-catalog-tools-and-a-persona-v1-25-0-global-settings-fallback

Agent profiles gain server-catalog tools and a persona (v1.25.0); global-settings fallback is conditional on secret scope. On local backends, a profile's tools now come from the server's tool catalog, either "Standard tools" (terminal, file_editor, task_tracker, browser when available, switch_llm) or a chosen subset, and the separate sub-agent and LLM-switching switches are deleted. Sub-agents are the task_tool_set pick, outside the standard set. A local profile persona replaces the identity and coding-workflow prompt while keeping security policy and risk guidance. The local OpenHands default profile falls back to global settings only when its fetched detail has no secret_refs array; an explicit allow-list, including an empty array, keeps the profile path, and a failed detail fetch avoids fallback. ACP and Cloud have separate paths. A home model pill that differs from a named profile's model can similarly trigger a global-settings launch and drop tools/MCP selection, unless explicit secret_refs keeps it on the profile path. This does not override every explicit profile launch. The editor hides tools/persona sections on default and #17991 remains open. Named profiles load every public/user skill minus their own deny-list, rather than the global Skills selection. Delegated tool/MCP restrictions also needed the in-window SDK repair in section 14.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: For local catalog/persona controls on v1.25.0 or later, use a named profile, choose tools and MCP servers, and set an explicit secret allow-list, including empty when appropriate. Confirm launched_agent_profile on the resulting conversation; do not infer it from a home model choice. Global Skills selection does not constrain named profiles. The terminal key path in section 4 remains independent of this launch guard. The server-owned catalog replaces overlapping switches, while preserving a human duty to check the effective launch.

## Receipt
- https://github.com/OpenHands/OpenHands/pull/17516
- https://github.com/OpenHands/OpenHands/pull/17843
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/hooks/mutation/use-create-conversation.ts#L166-L280
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-sdk/openhands/sdk/tool/defaults.py#L27-L55
- https://github.com/OpenHands/software-agent-sdk/blob/v1.54.0/openhands-agent-server/openhands/agent_server/skills_service.py#L435-L459
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/.agents/skills/verify-openhands/references/feature-map/F13-agent-profiles.md#L85
- https://github.com/OpenHands/OpenHands/issues/17991
