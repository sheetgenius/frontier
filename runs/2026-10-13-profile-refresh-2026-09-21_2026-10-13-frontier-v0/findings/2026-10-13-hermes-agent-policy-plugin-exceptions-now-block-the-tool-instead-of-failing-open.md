---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-policy-plugin-exceptions-now-block-the-tool-instead-of-failing-open
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/89de6083171d0f70e5356bef05105231344e371d
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/plugins_dispatch.py#L215-L245
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/plugins_dispatch.py#L511-L520
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-policy-plugin-exceptions-now-block-the-tool-instead-of-failing-open

Policy-plugin exceptions now block the tool instead of failing open. A pre_tool_call callback that raised previously logged the error and returned no veto, so a broken security plugin could allow execution. The fix adds a block directive for policy exceptions; both synchronous and asynchronous paths retain fail-closed handling at v0.21.7. This is separate from the shell-hook response grammar in section 11.

Channel: tagged-release (first stable v2026.9.24). Half: defect. Date: 2026-09-22.

Operator consequence: Guard-plugin users need v2026.9.24 or later. Inspect callback-failure warnings on earlier runs and test the exception path, not only successful veto responses.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/89de6083171d0f70e5356bef05105231344e371d
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/plugins_dispatch.py#L215-L245
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/plugins_dispatch.py#L511-L520
