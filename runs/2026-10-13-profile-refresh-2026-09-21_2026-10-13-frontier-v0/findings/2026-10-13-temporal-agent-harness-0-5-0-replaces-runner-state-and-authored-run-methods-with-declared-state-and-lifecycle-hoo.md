---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-temporal-agent-harness-0-5-0-replaces-runner-state-and-authored-run-methods-with-declared-state-and-lifecycle-hoo
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/commit/c0f8ca01bf550cf1da349b02c84e0ac545c2c1d2
    precision: commit
  - url: https://github.com/temporal-community/temporal-agent-harness/commit/faec13de3ee346597f179ee8cb9c8e474beeb03b
    precision: commit
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/state/decl.py#L105-L116
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L993-L1011
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L1051-L1095
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L1130-L1139
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L1216-L1235
    precision: tagged_commit_file
---
# 2026-10-13-temporal-agent-harness-0-5-0-replaces-runner-state-and-authored-run-methods-with-declared-state-and-lifecycle-hoo

0.5.0 replaces runner.state and authored run methods with declared state and lifecycle hooks. Observable state moves from runner.state registration to class-declared agent.state. agent.defn generates the workflow run method and rejects an author-defined run at import; setup/teardown hooks take one-time async work. Required/optional typed initialization is validated before the constructor. Invalid or missing input becomes a non-retryable workflow failure instead of a workflow-task retry loop. Teardown runs after draining close or on cancellation if setup completed, not on failure.

Channel: preview-or-beta (T5 and T6). Half: both. Date: 2026-09-30 (released; implementations 2026-09-25 and 2026-09-29).

Operator consequence: Migrate observable-state declarations, remove the old authored run wrapper and stacked workflow.defn, and move async lifecycle work into agent.setup/agent.teardown. Handle rejected initialization as a terminal start failure. Do not put essential failure cleanup only in teardown. This supplements the message/event migration in section 2; unchanged migrated examples are not alleged to fail.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/commit/c0f8ca01bf550cf1da349b02c84e0ac545c2c1d2
- https://github.com/temporal-community/temporal-agent-harness/commit/faec13de3ee346597f179ee8cb9c8e474beeb03b
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/state/decl.py#L105-L116
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L993-L1011
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L1051-L1095
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L1130-L1139
- https://github.com/temporal-community/temporal-agent-harness/blob/04a49d1b037de46da2cba31676d2aa2f4c59118f/temporal_agent_harness/harness/agent_workflow.py#L1216-L1235
