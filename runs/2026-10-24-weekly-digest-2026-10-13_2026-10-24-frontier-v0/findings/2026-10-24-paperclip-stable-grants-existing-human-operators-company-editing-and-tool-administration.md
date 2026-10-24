---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-paperclip-stable-grants-existing-human-operators-company-editing-and-tool-administration
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/commit/582911ba74350dbe9029eb132d69a257edd9d26a
    precision: commit
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/company-member-roles.ts#L57-L73
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135
    precision: tagged_commit_file
---
# 2026-10-24-paperclip-stable-grants-existing-human-operators-company-editing-and-tool-administration

Stable grants existing human Operators company editing and tool administration. Human Operators gain fourteen default grants spanning agent creation/configuration, skills, environments, invitations, task assignment, pipelines, connections, tools and audit. Join approval and member-permission management remain excluded. Startup and Cloud sign-in compatibility seeding can insert missing grants for existing active human members. `onConflictDoNothing` preserves an existing grant's scope; it does not prevent insertion when that permission row is absent. This is separate from the already released defaults for newly activated agents, which are not backfilled the same way.

Channel: tagged-release. Half: both. Date: 2026-10-24.

Operator consequence: Before v2026.1023.0 starts, inspect human membership roles and stored grant scopes. Members intended to observe rather than configure work should not remain Operators. Code-derived implication: deleting a preset grant alone can let later seeding recreate it; use the appropriate role or an intentionally restrictive stored scope, and verify the result after startup/sign-in. The upgrade removes configuration handoffs, but also moves the attention cost to deciding which people may configure agents and connections. No live before/after member database was exercised here.

## Receipt
- https://github.com/paperclipai/paperclip/commit/582911ba74350dbe9029eb132d69a257edd9d26a
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/company-member-roles.ts#L57-L73
- https://github.com/paperclipai/paperclip/blob/v2026.1023.0/server/src/services/principal-access-compatibility.ts#L17-L135
