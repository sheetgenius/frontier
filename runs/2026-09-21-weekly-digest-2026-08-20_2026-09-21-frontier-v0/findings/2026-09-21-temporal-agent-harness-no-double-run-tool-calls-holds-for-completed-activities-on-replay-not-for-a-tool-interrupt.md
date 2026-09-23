---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-temporal-agent-harness-no-double-run-tool-calls-holds-for-completed-activities-on-replay-not-for-a-tool-interrupt
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/README.md#L204-L209
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L2577-L2716
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/docs/internal/agents-as-subagents.md#L467-L471
    precision: tagged_commit_file
---
# 2026-09-21-temporal-agent-harness-no-double-run-tool-calls-holds-for-completed-activities-on-replay-not-for-a-tool-interrupt

"No double-run tool calls" holds for completed activities on replay, not for a tool interrupted mid-run; nothing enforces idempotency. Answers operator question 4. An activity-backed tool gets a 30-second start-to-close timeout and no retry policy from the harness. With no policy, the Temporal service's default applies: retries with backoff and no attempt cap. That is a Temporal behaviour, not a harness one. Replay after a worker crash does not re-run an activity whose completion is in history, and that is what the README claim rests on. An activity that was running when the worker died, or that exceeded 30 seconds, is scheduled again and `user_fn` runs again with the same arguments. A long `bash`-like activity tool can therefore run twice purely because of the default timeout. Nothing in the harness requires or checks that a tool is idempotent, and no `idempotent` flag or doc guidance exists at the tag (`git grep -i idempot` hits only subagent and approval-decision internals). Callback tools, the coding example's six, are different: the result submission is idempotent per `tool_id` (coding_agent/README.md "How it maps to the harness"), but the side effect runs on the laptop before submission.

Channel: preview-or-beta. Half: defect. Date: present at 0.4.0; default unchanged at d7a55f8855 (M agent_workflow.py line 2855).

Operator consequence: Make every activity-backed tool with side effects idempotent yourself, or set `activity_config` with `RetryPolicy(maximum_attempts=1)` and a realistic timeout. Read "no double-run" as "no re-run of completed work on replay". This is a harness-plus-Temporal-service claim, and the harness does not cover tool side effects (contract rejected evidence: `temporal_platform_guarantee_assumed_to_cover_tool_side_effects`).

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/README.md#L204-L209
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L2577-L2716
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/docs/internal/agents-as-subagents.md#L467-L471
