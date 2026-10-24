---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-managed-policy-refresh-and-hosted-transport-settings-gain-stricter-boundaries
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.299
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.300
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.304
    precision: github_release
---
# 2026-10-24-claude-code-managed-policy-refresh-and-hosted-transport-settings-gain-stricter-boundaries

Managed policy refresh and hosted transport settings gain stricter boundaries. 299 repairs a locally changed stored plan suppressing policy fetch under forceLoginOrgUUID and preserves machine forceLoginOrgUUID/Method over server policy. 300 ignores settings-sourced CA-bundle, tool-proxy and git TLS/config variables in host-managed sessions, limited to project settings under Desktop. It also applies managed settings in the named Anthropic-operated Desktop gateway case and makes unsupported desktop gateway policy keys stop startup. 304 refreshes organization policy after startup API-key approval or account-source changes.

Channel: tagged-release. Half: both. Date: 2026-10-19.

Operator consequence: Inspect policy loading after login changes and test gateway deployments with their real CA/proxy/git variables. A stricter startup failure can require configuration changes. Verify the executing account loaded policy before reasoning about the guard's options.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.299
- https://github.com/anthropics/claude-code/releases/tag/v2.1.300
- https://github.com/anthropics/claude-code/releases/tag/v2.1.304
