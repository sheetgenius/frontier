---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-temporal-agent-harness-in-the-coding-example-opencode-always-maps-to-remember-true-which-allow-lists-the-tool-by
source: temporal-agent-harness
source_contract: sources/temporal-agent-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/examples/callback_tools/coding_agent/opencode_shim/harness_backend.py#L273-L303
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/examples/callback_tools/coding_agent/opencode_shim/backend.py#L230
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1517-L1520
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L103-L124
    precision: tagged_commit_file
  - url: https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1635-L1656
    precision: tagged_commit_file
---
# 2026-09-21-temporal-agent-harness-in-the-coding-example-opencode-always-maps-to-remember-true-which-allow-lists-the-tool-by

In the coding example, OpenCode "always" maps to `remember=True`, which allow-lists the tool by name: one "always" on bash approves every later bash command with any arguments. Nothing changed in-window beyond the example first shipping in a tag; this is the first read. The code confirms the contract's first operator question. The shim hands OpenCode `always=[<the bash command>]`, so the dialog frames "always" as covering that command pattern. The shim then discards the pattern and posts `remember: true` to `/api/approve`; the harness adds `bash` to `auto_approve_tools` by name, and `auto_approves` never looks at arguments. Every later `bash` call in that session, with any command, auto-approves, and any other `bash` call already parked at the gate is released in the same step. The same holds for `edit`, and `write` (which the shim presents as an `edit` prompt, #L237-L240, but remembers under the tool name `write`). The allow-list lives on the live session policy and is surfaced on `AgentStatus.approval_policy` "so a client can persist it and replay it into the next session" (agent_interface.py#L90-L94).

Channel: preview-or-beta (example code; the README says examples/ is not shipped in the wheel, T/README.md#L189-L192). Half: defect. Date: present at 0.4.0 (2026-09-16) and unchanged on main d7a55f8855.

Operator consequence: If you run the coding example, never answer "always" to bash, edit or write: it is a session-wide blank check for that tool, not the pattern OpenCode shows. Re-audit any session where someone did: `GET /api/status/{id}` shows `approval_policy.auto_approve_tools`. The fix the evidence would settle: a pattern-scoped remember in the harness, or the shim mapping "always" to `remember=false`. Neither exists at 0.4.0 or d7a55f8855.

## Receipt
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/examples/callback_tools/coding_agent/opencode_shim/harness_backend.py#L273-L303
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/examples/callback_tools/coding_agent/opencode_shim/backend.py#L230
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1517-L1520
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_protocol/agent_interface.py#L103-L124
- https://github.com/temporal-community/temporal-agent-harness/blob/e4bde4beb078d7ec3432c84b71e64e1efd554752/temporal_agent_harness/harness/agent_workflow.py#L1635-L1656
