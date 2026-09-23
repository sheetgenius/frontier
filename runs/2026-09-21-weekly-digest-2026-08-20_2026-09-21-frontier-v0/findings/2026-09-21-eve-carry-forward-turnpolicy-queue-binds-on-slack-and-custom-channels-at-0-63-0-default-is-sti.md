---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-eve-carry-forward-turnpolicy-queue-binds-on-slack-and-custom-channels-at-0-63-0-default-is-sti
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/execution/session/input-queue.ts#L322-L331
    precision: tagged_commit_file
---
# 2026-09-21-eve-carry-forward-turnpolicy-queue-binds-on-slack-and-custom-channels-at-0-63-0-default-is-sti

Carry-forward: turnPolicy queue binds on Slack and custom channels at 0.63.0; default is still steer. Nothing regressed the 0.39.3 repair: configured queue
reaches the inbox on Slack and custom `defineChannel` channels. The queue's
contents are now split by auth context (finding 3). The eve dev TUI switched
Enter-during-turn to steer by default in 0.57.0.

Channel: tagged-release. Half: both. Date: 2026-09-19 (pin read).

Operator consequence: Keep `turnPolicy: "queue"` if you set it; it binds
at 0.63.0. You must set it explicitly per channel, since the default remains
steer. Upgrade past 0.52.5 before relying on queue in any multi-user channel.

## Receipt
- https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/execution/session/input-queue.ts#L322-L331
