---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-eve-chat-channel-approvals-private-slack-dm-routing-telegram-and-chat-sdk-hitl-pending-approva
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.54.5
    precision: github_release
---
# 2026-09-21-eve-chat-channel-approvals-private-slack-dm-routing-telegram-and-chat-sdk-hitl-pending-approva

Chat-channel approvals: private Slack DM routing, Telegram and Chat SDK HITL, pending approvals stop blocking. The approval surface widened to more channels and got a
private path. A parked approval no longer freezes the conversation.

Channel: tagged-release. Half: both. Date: 2026-08-24 to 2026-09-14.

Operator consequence: For Slack agents where the approval request itself
is sensitive (it shows tool input), route it to DM with `approvalChannel`.
Because unrelated work now proceeds while an approval is parked (0.45.0), do
not assume a pending approval pauses the agent; if you relied on that as a
brake, add an explicit block.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.54.5
