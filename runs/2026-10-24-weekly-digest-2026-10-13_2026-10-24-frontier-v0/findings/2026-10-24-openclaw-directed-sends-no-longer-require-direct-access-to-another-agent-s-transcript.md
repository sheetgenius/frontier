---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-directed-sends-no-longer-require-direct-access-to-another-agent-s-transcript
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/6de5ce9777a6c9816d70f9947e99eb0295253289
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/sessions-and-subagents.md#L33-L103
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-directed-sends-no-longer-require-direct-access-to-another-agent-s-transcript

Directed sends no longer require direct access to another agent's transcript. `agents.entries.<agentId>.tools.agentToAgent.send` grants outgoing request-and-reply access to selected agents while session visibility remains `agent`, `tree`, or `self`. It does not grant list, history, search, status, or session-control access. An empty per-agent `send` denies sends, unlike an empty global `allow`, which is treated as unset. Current policy is rechecked immediately before target input is accepted; it cannot retract already accepted input.

Channel: tagged-release. Half: capability. Date: 2026-10-18.

Operator consequence: Replace broad transcript visibility used only to enable specialist handoffs with an explicit send list. Keep the global participant policy and narrower visibility in place. This removes unnecessary coordination exposure, but a privileged recipient can still disclose information or act on a request. It is a collaboration primitive within a trusted Gateway, not tenant isolation.

## Receipt
- https://github.com/openclaw/openclaw/commit/6de5ce9777a6c9816d70f9947e99eb0295253289
- https://github.com/openclaw/openclaw/blob/v2026.10.7/docs/gateway/config-tools/sessions-and-subagents.md#L33-L103
