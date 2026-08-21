---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-deepseek-harness-still-prerelease-gate-still-a-plugin-ui-still-unauthenticated
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.8
    precision: github_release
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/docs/architecture.md
    precision: official_docs
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/packages/client/connection/src/api-request-trust.ts
    precision: tagged_commit_file
---
# 2026-08-20-deepseek-harness-still-prerelease-gate-still-a-plugin-ui-still-unauthenticated

dsh-v0.1.0-rc.8 published 2026-08-19T15:37:57Z, prerelease=true, SHA 141eb6fef83422698aef7a981029e843e8161534. No prerelease=false tag exists. architecture.md at that SHA still says every part is a plugin, there is no privileged core to patch, and any dump-config row can be replaced. api-request-trust.ts at that SHA still says the fence is not an auth layer. trustedHosts is a Host-header grant, not a login. rc.8 notes add Claude Code and Codex subagents as Profile Bundles with non-interactive permission modes; that is wrapper behavior.

Channel: preview-or-beta. Half: both (bundles are capability; gate and UI are unchanged posture).

Operator consequence: still a developer preview. Do not expose the port. Inspect a bundle's permission mode before installing one. Do not treat star counts as adoption.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.8
- https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/docs/architecture.md
- https://github.com/deepseek-ai/deepseek-harness/blob/141eb6fef83422698aef7a981029e843e8161534/packages/client/connection/src/api-request-trust.ts
