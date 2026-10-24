---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-managed-policy-docs-accept-registry-style-mcp-names-and-add-a-base64-image-requirement
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/docs/commit/92991ed6d17c5023f52e324ee70d36fe7c36dd7d
    precision: commit
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L678
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L755-L775
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L353-L360
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-managed-policy-docs-accept-registry-style-mcp-names-and-add-a-base64-image-requirement

Managed-policy docs accept registry-style MCP names and add a base64 image requirement. The documented MCP allowlist name grammar expands to accept dots and slashes, including registry-style `microsoft/playwright-mcp` names; matching remains case-sensitive and non-wildcard. A new `requireBase64ImageAttachments` managed key requires base64 attachments when true and leaves existing behavior when false/unset. A server name remains a user-chosen label, not an authenticated identity.

Channel: docs-only. Half: both. Date: 2026-10-20.

Operator consequence: Review managed lists that renamed registry servers merely to satisfy the older grammar, then test an allowed and denied server on the deployed runtime before removing the workaround. Prefer URL or exact command matching when identity matters. For image-handling policy, validate both URL and base64 requests before adopting the new key; the docs addition alone does not establish a minimum client version.

## Receipt
- https://github.com/github/docs/commit/92991ed6d17c5023f52e324ee70d36fe7c36dd7d
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L678
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L755-L775
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L353-L360
