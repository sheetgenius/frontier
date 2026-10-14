---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-remote-input-has-its-own-execution-capable-permission
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/a2dc9dc8d74e5011b2bbf4c2cf3630481581215e
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/tools/input_remote.py
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/tool_policy.py#L161-L194
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/a0-connector/blob/v2.13/src/agent_zero_cli/remote_exec.py#L800-L823
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/a0-connector/blob/v2.13/tests/test_remote_exec.py#L405-L425
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_exec.py#L588-L603
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_code_execution/tools/input.py
    precision: tagged_commit_file
---
# 2026-10-13-agent-zero-remote-input-has-its-own-execution-capable-permission

Remote input has its own execution-capable permission ID. code_execution_remote no longer accepts runtime=input. The replacement input_remote dispatches runtime=terminal with framework-owned _allow_running=True. Running shells receive input; idle or missing shells execute the text as a command. Canonical policy IDs are matched independently, so blocking plugin:_a0_connector:code_execution_remote while leaving Tools default allow does not block plugin:_a0_connector:input_remote. It still requires the host connector's exec and write grants. The local input tool also has a separate ID from code_execution_tool. Interactive CLI exec defaults off; ACP connection defaults differ (section 9).

Channel: tagged-release. Half: both. Date: 2026-09-23 (first stable; implementation 2026-09-12).

Operator consequence: Block both remote execution/input IDs wherever host commands are forbidden, and both local IDs where local commands are forbidden; alternatively default Tools to block and allow deliberately. Verify denial through a subagent. Migrate old runtime=input scripts and upgrade the host CLI with the framework. The new chat namespace is state separation, not a permission fix.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/a2dc9dc8d74e5011b2bbf4c2cf3630481581215e
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/tools/input_remote.py
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/tool_policy.py#L161-L194
- https://github.com/agent0ai/a0-connector/blob/v2.13/src/agent_zero_cli/remote_exec.py#L800-L823
- https://github.com/agent0ai/a0-connector/blob/v2.13/tests/test_remote_exec.py#L405-L425
- https://github.com/agent0ai/a0-connector/blob/v2.14/src/agent_zero_cli/remote_exec.py#L588-L603
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_code_execution/tools/input.py
