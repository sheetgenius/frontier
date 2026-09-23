---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-eve-cross-principal-authority-queued-messages-from-different-users-ran-under-the-last-sender
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/pull/3172
    precision: merged_pr
---
# 2026-09-21-eve-cross-principal-authority-queued-messages-from-different-users-ran-under-the-last-sender

Cross-principal authority: queued messages from different users ran under the last sender's auth. In a shared channel (Slack thread, group chat), queued
input from several people was coalesced into one turn and executed with the
last sender's user-scoped connections. That is a privilege-mixing bug, and it
sits exactly on the queue path the parent told operators to enable.

Channel: tagged-release. Half: defect. Date: 2026-08-21 to 2026-09-15.

Operator consequence: Anyone who set `turnPolicy: "queue"` on a
multi-user channel after the parent's 0.39.3 advice was exposed until 0.52.5.
Upgrade to >= 0.56.0 for all three fixes. Re-audit user-scoped connection
actions taken from shared threads between 0.39.3 and 0.52.5.

## Receipt
- https://github.com/vercel/eve/pull/3172
