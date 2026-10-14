---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openhands-model-router-lets-a-classifier-pick-the-model-for-each-task-and-first-router-creation-atte
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/agent-server-adapter.ts#L380-L394
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/agent-server-adapter.ts#L1313-L1318
    precision: tagged_commit_file
  - url: https://github.com/OpenHands/OpenHands/pull/16147
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17797
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17840
    precision: merged_pr
  - url: https://github.com/OpenHands/OpenHands/pull/17279
    precision: merged_pr
  - url: https://github.com/OpenHands/docs/blob/9daa7e5b5cd49453ce0f571810859a747eab5334/openhands/usage/agent-canvas/release-notes/v1.25.0.mdx
    precision: tagged_commit_file
---
# 2026-10-13-openhands-model-router-lets-a-classifier-pick-the-model-for-each-task-and-first-router-creation-atte

Model Router lets a classifier pick the model for each task, and first-router creation attempts to turn routing on (v1.25.0). Model Router defines routers whose classifier selects a saved LLM profile through route_task_to_model. Templates are OpenHands Router Pro and Flash, with minimax-m3 the default classifier. Successful first-router creation activates the router and attempts to save Run on first message=true; a failed settings save can leave it off, and later routers leave the toggle alone. Canvas prompts eligible global-settings launches to call the router before answering. The agent has to start and comply with that instruction; routing is not enforced before it starts. Named-profile launches do not inherit the inline router configuration.

Channel: tagged-release. Half: capability. Date: 2026-10-06.

Operator consequence: After creating a first router, inspect Run on first message and the model actually used. Turn it off or use a named profile when a pinned cost/evaluation baseline matters. A classifier call costs attention, latency and inference only when the router is actually called; the source does not establish a compulsory call per conversation. Review the routing table and prompt rather than assume a pre-start gate.

## Receipt
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/agent-server-adapter.ts#L380-L394
- https://github.com/OpenHands/OpenHands/blob/v1.27.1/src/api/agent-server-adapter.ts#L1313-L1318
- https://github.com/OpenHands/OpenHands/pull/16147
- https://github.com/OpenHands/OpenHands/pull/17797
- https://github.com/OpenHands/OpenHands/pull/17840
- https://github.com/OpenHands/OpenHands/pull/17279
- https://github.com/OpenHands/docs/blob/9daa7e5b5cd49453ce0f571810859a747eab5334/openhands/usage/agent-canvas/release-notes/v1.25.0.mdx
