---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-project-approvals-persist-while-managed-policy-can-deny-a-configured-tool-or-integration
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/permission.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/permission/saved.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/config/plugin/policy.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/managed-policy.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/module.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/policies.mdx
    precision: tagged_commit_file
---
# 2026-10-24-opencode-project-approvals-persist-while-managed-policy-can-deny-a-configured-tool-or-integration

Project approvals persist, while managed policy can deny a configured tool or integration. Policy enforcement arrived in 2.0.25 in the retrospective; top-level `policies` and managed precedence reached 2.0.29 in this weekly window. Ordinary permission rules are ordered, last-match-wins; unmatched actions ask, though permissive base rules normally match. Session rules follow resolved agent rules. An explicit configured deny is checked before project-scoped saved allows. Choosing always persists an approval; saved actions/resources became editable in 2.1.0. Policy hooks can turn the permission result into deny, and filter providers, MCP servers and skills. Plugin admission checks `integration.use` before loading an external module. Global policy follows project policy, then connected Console organization policy follows both. The two policy/Console built-ins are [guarded against configuration removal](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/internal.ts). Malformed local policy statements are dropped with a warning; the Console decoder also omits action/effect values that an old client does not understand.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: Inspect saved approvals as durable project state and test a denied action on the actual client/server version before relying on organization policy. Deny untrusted plugin installation as an integration decision; an admitted plugin is executable host code and permission hooks are not a confinement mechanism for it. These paths establish ordinary mediation and configuration precedence, not complete enforcement against arbitrary trusted plugins or every shell side effect. The useful primitive is centrally expressed policy; its cost is maintaining policy compatibility and a small, representative denial test, not approving every repeated call.

## Receipt
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/permission.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/permission/saved.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/config/plugin/policy.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/managed-policy.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/module.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/policies.mdx
