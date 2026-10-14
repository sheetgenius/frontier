---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-0-5-0-adds-inspectable-agent-dag-scripts-and-code-mode-preflight-checks
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/commit/2d2a4b3841050190599e08e947d85b3c5d8323b7
    precision: commit
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/workflow.py#L59-L97
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/workflow.py#L170-L214
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/README.md#L45-L69
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/tool.py#L208-L224
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/monty_stepper.py#L289-L317
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/step_agent.py#L62-L66
    precision: tagged_commit_file
---
# 2026-10-13-temporal-agent-harness-0-5-0-adds-inspectable-agent-dag-scripts-and-code-mode-preflight-checks

0.5.0 adds inspectable agent DAG scripts and Code Mode preflight checks. A model writes or revises a Python flow in the browser editor; a separate execute handler runs it after the user presses Run. Each run_agent starts a fresh subagent with per-step name, instructions, tools and model; asyncio.gather permits parallel steps. The packaged code_mode_type_check API reports syntax/type errors against host signatures without dispatching host tools. At T6 it briefly starts a clean script until first suspension or a short limit and discards it; checking does not mean no script instructions execute. The example uses simulated step tools and defaults its step agent to skip-all.

Channel: preview-or-beta (DAG Studio is a repository example; preflight API is packaged). Half: capability. Date: 2026-09-30.

Operator consequence: Try this when the useful review unit is the generated plan before execution. Inspect the script and per-step tool/model configuration, and set real tool authorization before replacing simulated tools. Preflight validates the executable contract, not the plan's correctness or authority.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/commit/2d2a4b3841050190599e08e947d85b3c5d8323b7
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/workflow.py#L59-L97
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/workflow.py#L170-L214
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/README.md#L45-L69
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/tool.py#L208-L224
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/code_mode/monty_stepper.py#L289-L317
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/examples/agent_dag/step_agent.py#L62-L66
