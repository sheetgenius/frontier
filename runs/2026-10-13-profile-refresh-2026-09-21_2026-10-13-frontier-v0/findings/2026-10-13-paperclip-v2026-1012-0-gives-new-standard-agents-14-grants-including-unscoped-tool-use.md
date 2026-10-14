---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-v2026-1012-0-gives-new-standard-agents-14-grants-including-unscoped-tool-use
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L69-L76
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agents.ts#L948-L961
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agents.ts#L1173-L1183
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L1466-L1480
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/companies.ts#L18-L20
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/runner-created-skills.md#L3-L26
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/pull/13852
    precision: merged_pr
---
# 2026-10-13-paperclip-v2026-1012-0-gives-new-standard-agents-14-grants-including-unscoped-tool-use

v2026.1012.0 gives new standard agents 14 grants including unscoped tool use. New activated standard agents receive agents:configure, agents:suggest-changes, skills:create, skills:suggest-changes, tools:manage_connections, tools:manage_profiles, tools:view_audit, audit:view_agent_actions, tools:use, tools:manage_runtime, inbox:manage, tasks:assign, tasks:assign_scope and tasks:manage_active_checkouts. Only tasks:assign_scope (own subtree) and inbox:manage (responsible user) are scoped. Pending-approval agents wait for activation; low-trust and built-in agents are excluded. Explicit tools:use grants are evaluated after matching policies but before tool profiles, so the default unscoped grant can outrank profile exclusions on a reachable connection. Connection access and earlier policy decisions remain prerequisites. New non-low-trust agents can hire unless overridden; company hire approval defaults off. Native hire_agent copies validated provider/model/permission settings. Agent keys may not create/change/restore host-executed command settings. Native update_skill also ships with company policy, expected-version checks and idempotent audit.

Channel: tagged-release. Half: both. Date: 2026-10-12.

Operator consequence: Enable board approval for new hires if hiring must stop at a person, or set canCreateAgents: false or low trust where appropriate. For new standard agents restricted by tool profiles, remove or scope the broad tools:use grant, or use block/require-approval policies. This removes manual permission setup for routine agent, skill and tool configuration, while making those intentional restrictions an operator responsibility. Do not mistake the human Operator preset in section 11 for these agent grants.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L3-L28
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agent-permissions.ts#L69-L76
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agents.ts#L948-L961
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/agents.ts#L1173-L1183
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/server/src/services/tool-access-policy.ts#L1466-L1480
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/packages/db/src/schema/companies.ts#L18-L20
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/runner-created-skills.md#L3-L26
- https://github.com/paperclipai/paperclip/pull/13852
