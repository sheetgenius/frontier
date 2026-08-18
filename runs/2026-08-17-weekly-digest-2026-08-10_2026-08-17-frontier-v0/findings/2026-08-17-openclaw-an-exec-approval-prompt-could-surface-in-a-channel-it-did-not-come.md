---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openclaw-an-exec-approval-prompt-could-surface-in-a-channel-it-did-not-come
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/122517
    precision: merged_pr
---
# 2026-08-17-openclaw-an-exec-approval-prompt-could-surface-in-a-channel-it-did-not-come

An exec approval prompt could surface in a channel it did not come from.

A foreign-channel exec approval could fall through native approval routing and be delivered to Telegram whenever Telegram held the sole eligible account, exposing an approval prompt outside its source channel. Root cause named in the PR: `doesApprovalRequestSelectChannelAccount` preferred recorded account bindings and configured forwarding targets, but its final sole-account fallback ignored a conflicting `turnSourceChannel`. The fix rejects only the unbound foreign-channel fallback at the shared approval-account owner boundary; recorded bindings and explicit forwarding targets keep precedence, and Telegram and Matrix regression tests encode the same shared contract. Issue #122495.

Channel: preview-or-beta. Ancestry: Merge commit d8a1ebbb492749fa56f47393fe8438dae6e03306 (PR #122517, merged 2026-08-14T07:41:04Z, base main). compare/v2026.8.1-beta.2...d8a1ebbb4 -> status=behind, ahead_by=0 (contained in the beta tag). compare/v2026.7.1-2...d8a1ebbb4 -> diverged, ahead_by=13923. In no stable tag.

Operator consequence: If you run a multi-channel Gateway where Telegram is the only configured account for some agents, assume approval prompts have leaked across channel boundaries on stable and check who could see them. The containment is in beta only. This is also a reminder that OpenClaw's approval routing is a function of your account topology, not just your channel bindings  --  one sole-eligible account is enough to change where a prompt lands.

## Receipt
- https://github.com/openclaw/openclaw/pull/122517
