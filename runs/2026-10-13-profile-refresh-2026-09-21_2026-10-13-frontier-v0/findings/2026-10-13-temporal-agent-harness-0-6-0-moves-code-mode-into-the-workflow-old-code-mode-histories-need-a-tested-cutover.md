---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-0-6-0-moves-code-mode-into-the-workflow-old-code-mode-histories-need-a-tested-cutover
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0
    precision: github_release
  - url: https://github.com/temporal-community/temporal-agent-harness/pull/167
    precision: merged_pr
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/monty_stepper.py#L9-L14
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/monty_stepper.py#L84-L98
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/driver.py#L160-L182
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L562-L567
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml#L79-L84
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/harness/code_mode/activities.py#L15-L18
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/harness/code_mode/batch_models.py#L27-L29
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/plugin.py#L176-L180
    precision: tagged_commit_file
  - url: https://github.com/pydantic/monty/releases/tag/v1.1.0
    precision: github_release
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L3769-L3775
    precision: tagged_commit_file
---
# 2026-10-13-temporal-agent-harness-0-6-0-moves-code-mode-into-the-workflow-old-code-mode-histories-need-a-tested-cutover

0.6.0 moves Code Mode into the workflow; old Code Mode histories need a tested cutover. Through 0.5.0, code_start_batch and, after suspension, code_resume_batch activities carried serialized sandbox snapshots through history; code_type_check appeared only if the separate preflight API was called. 0.6.0 removes these Monty batch activities and steps a pooled pydantic-monty subprocess from the workflow. Host tools keep their own dispatch semantics through runner.run_tool; activity-backed tools remain activities. New execution stops putting sandbox snapshots in history, uses workflow time/randomness and durable timers for asyncio.sleep, and lets scripts catch host-call failures. A one-second watchdog bounds live computation between host interactions; replay has a separate three-second backstop. A missing code-mode extra now fails a workflow task instead of one tool call. The exact Monty pin changes from 0.0.18 to 1.0.0, making interpreter version a workflow-worker compatibility concern. Monty 1.1.0 changes script semantics, including boolean arithmetic; this is not an advisory. No old/new execution migration branch or continue-as-new implementation was found; patch markers concern aborts. The changed command sequence and removed activity registrations imply upgrade/replay risk for relevant old histories, but no replay failure was reproduced.

Channel: preview-or-beta. Half: both. Date: 2026-10-03.

Operator consequence: Keep existing Code Mode histories on compatible workers and replay-test/version the cutover before moving them to 0.6.0. No compatibility path was found in this change. A blind reset can replay the same incompatible prefix, so reset is not an established remedy. Install the code-mode extra on every workflow worker serving these agents and keep pydantic-monty at 1.0.0. If workflow and activity workers are separated, re-check the workflow hosts because model-written scripts now run there. Activity-backed tools still default to a 30-second start-to-close timeout without an explicit harness retry override; durable replay is not an exactly-once side-effect guarantee, so tools need an idempotency strategy. A representative 0.5.0 history replay against 0.6.0, with worker versions recorded, would settle the compatibility inference.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/releases/tag/0.6.0
- https://github.com/temporal-community/temporal-agent-harness/pull/167
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/monty_stepper.py#L9-L14
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/monty_stepper.py#L84-L98
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/driver.py#L160-L182
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/README.md#L562-L567
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/pyproject.toml#L79-L84
- https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/harness/code_mode/activities.py#L15-L18
- https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/harness/code_mode/batch_models.py#L27-L29
- https://github.com/temporal-community/temporal-agent-harness/blob/4cef523a285b0c585f169678e1dbbf5e7644c98f/temporal_agent_harness/plugin.py#L176-L180
- https://github.com/pydantic/monty/releases/tag/v1.1.0
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L3769-L3775
