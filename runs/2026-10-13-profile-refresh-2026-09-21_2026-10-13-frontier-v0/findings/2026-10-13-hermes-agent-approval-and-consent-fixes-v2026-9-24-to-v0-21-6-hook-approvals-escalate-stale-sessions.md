---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-approval-and-consent-fixes-v2026-9-24-to-v0-21-6-hook-approvals-escalate-stale-sessions
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/30b38d139b1fd91670e3b5bd88cd50f71287a12f
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/ba5bec3f2c9ae2eceac81d3dc6841e67b808adf3
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/c42c90552ecb0f0062e91c8bc0a048c1b4d44ea5
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/447fb4955d1af040dd7b6da98aa71fe77fdb3fcc
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/user-guide/security.md#L931-L939
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-approval-and-consent-fixes-v2026-9-24-to-v0-21-6-hook-approvals-escalate-stale-sessions

Approval and consent fixes, v2026.9.24 to v0.21.6: hook approvals escalate, stale sessions stop flipping YOLO globally, Desktop batches re-gate. (a) A shell pre_tool_call hook printing the documented `{"action": "approve"}` parsed to nothing, so the tool ran with no prompt while `hermes hooks doctor` stayed green; v2026.9.24 routes that exact action response to the approval gate, whereas the distinct existing `{"decision":"approve"}` response means allow, and a plugin's block now outranks an earlier plugin's approve. (b) On the TUI and Desktop gateway, a config.set carrying a stale session id fell through to the session-less branch: a per-chat YOLO toggle set HERMES_YOLO_MODE in the backend's process env, inherited by every child started afterwards, and a per-chat Fast toggle rewrote the profile's service tier; fixed in v2026.9.24. (c) Desktop terminal batches collect approvals for every command up front; before v0.21.6 a later command still used its pre-made approval after an earlier one failed, and switching YOLO or "Approvals: off" back off mid-batch did not re-gate the rest. (d) In v0.21.6, MCP and vault consent prompts decline at once when no user can answer, and the protected-instruction gate no longer hangs -q sessions. (e) The v2026.9.24 docs now state that gateway hooks in `<profile home>/hooks/` load at startup with no prompt, are not skipped by HERMES_SAFE_MODE, and sit outside the file tools' protected-write list.

Channel: tagged-release (v2026.9.24 for a, b and e; v0.21.6 for c and d). Half: defect. Date: 2026-09-24.

Operator consequence: A shell hook returning `{"action":"approve"}` requests human approval from v2026.9.24. The distinct existing `{"decision":"approve"}` response means allow; re-run `hermes hooks test` on each hook after upgrading. If you toggled per-chat YOLO from Desktop on v2026.9.21 or earlier, restart the backend to clear an inherited YOLO environment. Add `ls ~/.hermes/hooks/` to every audit: anything that can write the profile home, including the agent's own file tools on a local backend, can add code the gateway imports at its next start.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/30b38d139b1fd91670e3b5bd88cd50f71287a12f
- https://github.com/NousResearch/hermes-agent/commit/ba5bec3f2c9ae2eceac81d3dc6841e67b808adf3
- https://github.com/NousResearch/hermes-agent/commit/c42c90552ecb0f0062e91c8bc0a048c1b4d44ea5
- https://github.com/NousResearch/hermes-agent/commit/447fb4955d1af040dd7b6da98aa71fe77fdb3fcc
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/user-guide/security.md#L931-L939
