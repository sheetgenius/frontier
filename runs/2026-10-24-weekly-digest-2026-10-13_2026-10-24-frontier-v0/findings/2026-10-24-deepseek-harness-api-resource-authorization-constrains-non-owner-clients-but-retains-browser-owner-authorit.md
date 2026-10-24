---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-api-resource-authorization-constrains-non-owner-clients-but-retains-browser-owner-authorit
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/api/remote-access/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/rpc-host.ts
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-api-resource-authorization-constrains-non-owner-clients-but-retains-browser-owner-authorit

API resource authorization constrains non-owner clients but retains browser-owner authority. Remote access now provides explicit action grants on resources for non-owner principals. Missing grants and evaluation failures deny; a global grant does not imply every resource grant. API connections have their own participation controls. Exact HTTP routes default to owner-only. However, authenticated browser requests still use an owner principal, and owner access bypasses the non-owner grant checks. The persistent cookie-signing secret is still obtained from the credential provider.

Channel: preview-or-beta. Half: both. Date: 2026-10-14.

Operator consequence: Use the new API grants to reduce authority granted to integrations, then inspect coverage of the particular resource and action. Do not count this as closure of the profile's same-user boundary: a command that can read the owner's signing secret and reach the owner API remains outside the protection this change supplies. [Local credential persistence](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/credentials/credentials-local/src/index.ts), [Linux profile read rules](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/sandbox/sandbox-local/src/profiles.ts). No cookie forgery was executed in this research. The improvement is delegated API scope, with separate review still needed for local execution authority.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/api/remote-access/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/rpc-host.ts
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/client/connection/src/browser-auth.ts
