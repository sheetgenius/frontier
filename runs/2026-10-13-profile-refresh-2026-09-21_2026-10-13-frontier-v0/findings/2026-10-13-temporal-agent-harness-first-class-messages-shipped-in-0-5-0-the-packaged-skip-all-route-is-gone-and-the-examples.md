---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-first-class-messages-shipped-in-0-5-0-the-packaged-skip-all-route-is-gone-and-the-examples
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.5.0
    precision: github_release
  - url: https://github.com/temporal-community/temporal-agent-harness/commit/e62c778b4abbde588204c0ac294f35d4d46bfa33
    precision: commit
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/monty/conversational_workflow.py#L179-L191
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/auto_mode/workflow.py#L257-L284
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/subagent_toolset.py#L18-L29
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/subagent_toolset.py#L101-L103
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L651-L660
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L2624-L2655
    precision: tagged_commit_file
---
# 2026-10-13-temporal-agent-harness-first-class-messages-shipped-in-0-5-0-the-packaged-skip-all-route-is-gone-and-the-examples

First-class messages shipped in 0.5.0: the packaged skip-all route is gone, and the examples rebuilt it as handlers that `model_callable=False` does not hide. The packaged slash commands, `/approvals skip` among them, are deleted. Every inbound path now runs through `@agent.accepts` handlers that declare `mid_turn` (`ENQUEUE`, `ACCEPT`, or `REJECT` by default); events carry `message_id`; `expected_turn`, `is_message_queuing_enabled` and the `reply`, `error`, `message_queued` and `operator_command_*` events are gone, replaced by `message_accepted` and `message_handler_start`/`_end`/`_error`; agents are defined with `@agent.defn` and `@agent.init` (#150, #155). So the wheel no longer ships an HTTP route to the skip-all layer. But the two examples that let a user change posture do it with `@agent.accepts(mid_turn=MidTurn.ACCEPT, model_callable=False)` handlers whose choices include `dangerously_skip_all`, and a posture change releases every parked call the new policy allows. `model_callable=False` only keeps a handler out of a parent agent's generated toolset. It hides nothing from `POST /api/messages`, which takes any handler name, from the chat-server, which offers every handler (section 7), or from a parent built with `SubagentToolPolicy.dangerously_allow_all()`. The code comment that a child's approval policy "stays operator-owned even under ``dangerously_allow_all()``" holds for the `tool_approval` update and not for a policy handler the author wrote. HTTP session creation still passes an empty `AgentConfig()`, so an HTTP caller cannot choose the starting policy; a Temporal client still can.

Channel: preview-or-beta. Half: both. Date: 2026-09-30.

Operator consequence: Clients written for 0.4.0 break on 0.5.0: key on `message_id`, drop `expected_turn`, replace `is_message_queuing_enabled` with per-handler `mid_turn`, and move agents to the `agent.*` decorators. Do not treat `model_callable=False` as access control. A handler that moves the guardrail belongs to whoever reaches the server or the chat thread. If you copy the examples, drop the skip-all choice or gate the handler in your own app layer, and never give a parent `dangerously_allow_all()` over a child that has such a handler. The capability half: one dispatch path with typed, self-describing handlers replaces the operator-command channel the last read flagged, so there is less harness surface to lock down and the remaining risk sits in code the agent author controls.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.5.0
- https://github.com/temporal-community/temporal-agent-harness/commit/e62c778b4abbde588204c0ac294f35d4d46bfa33
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/monty/conversational_workflow.py#L179-L191
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/auto_mode/workflow.py#L257-L284
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/subagent_toolset.py#L18-L29
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/subagent_toolset.py#L101-L103
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L651-L660
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L2624-L2655
