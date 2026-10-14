---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-october-13-canary-hides-agent-created-task-rows-by-default-without-changing-read-acls
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/be380ba15574bd9bcb877174477444f1a48a702d/packages/shared/src/issue-creation-source.ts
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/be380ba15574bd9bcb877174477444f1a48a702d/ui/src/hooks/useShowAgentCreatedTasks.ts#L5-L20
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
    precision: official_docs
---
# 2026-10-13-paperclip-october-13-canary-hides-agent-created-task-rows-by-default-without-changing-read-acls

October 13 canary hides agent-created task rows by default without changing read ACLs. Task collection preferences show agent-created work only when showAgentCreatedTasks is explicitly true; missing fields, older saved views and malformed preferences default false. The classifier includes agent-created work, work without a human creator and origins outside manual/onboarding, including system/chat-channel tasks. Hierarchy context and inbox participation remain. This is a row-visibility default, not a new task-read ACL.

Channel: preview-or-beta (2026.1013.0-canary.16; absent from stable, beta and October 13 nightly). Half: both. Date: 2026-10-13.

Operator consequence: Enable Show agent-created tasks when auditing queues or reconciling assignments after adopting this canary. A missing row need not mean missing work or stopped execution. Less dashboard noise can reduce browsing effort, but task activity should not be inferred from the default visible rows.

## Receipt
- https://github.com/paperclipai/paperclip/blob/be380ba15574bd9bcb877174477444f1a48a702d/packages/shared/src/issue-creation-source.ts
- https://github.com/paperclipai/paperclip/blob/be380ba15574bd9bcb877174477444f1a48a702d/ui/src/hooks/useShowAgentCreatedTasks.ts#L5-L20
- https://registry.npmjs.org/paperclipai/2026.1013.0-canary.16
