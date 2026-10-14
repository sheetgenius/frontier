---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-v2026-1005-0-lets-an-agent-record-a-user-chat-reply-as-a-confirmation-decision
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/confirmation-comment-resolution.ts#L12-L96
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/issue-thread-interaction-resolution.ts#L158-L177
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/issue_thread_interactions.ts#L25-L32
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/pull/14613
    precision: merged_pr
  - url: https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
    precision: github_release
---
# 2026-10-13-paperclip-v2026-1005-0-lets-an-agent-record-a-user-chat-reply-as-a-confirmation-decision

v2026.1005.0 lets an agent record a user chat reply as a confirmation decision. An active responding run can resolve a confirmation by citing the latest user message from the conversation user after the card. The server records the agent interpretation and evaluates the resolver policy as that agent; the comment is provenance, not server-verified consent. Governed actions must retain their dedicated approval mechanisms. Under anyone the creator can resolve its own card. human_only requires a human resolver; not_creator bars only the creator and can still allow another eligible agent. v2026.1001.0 also queued answers and approvals during active runs rather than bouncing them (#13539).

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: Use human_only where a human resolver is required, and retain dedicated spend/tool/hiring approvals for governed actions. Use not_creator only where creator self-resolution is the boundary you intend. In ordinary chat, this lets a person answer once instead of repeating a click; audit the agent decision through the recorded comment ID. The trade is consent interpretation by the model, not conversion of that comment into a human credential.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1005.0/server/src/services/confirmation-comment-resolution.ts#L12-L96
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/issue-thread-interaction-resolution.ts#L158-L177
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/issue_thread_interactions.ts#L25-L32
- https://github.com/paperclipai/paperclip/pull/14613
- https://github.com/paperclipai/paperclip/releases/tag/v2026.1005.0
