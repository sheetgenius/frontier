---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-hosted-github-bridge-authentication-surfaces-are-narrowed-or-removed
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/f9098c96105bf5f6cbdb859c6e9f2045666d07d7
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/0c6be8694894dc96b87c5a7b773d52e57ddaa1b2
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/17ebb66d2557be741275b8d14f4e0997885f80d0
    precision: commit
---
# 2026-10-24-opencode-hosted-github-bridge-authentication-surfaces-are-narrowed-or-removed

Hosted GitHub/bridge authentication surfaces are narrowed or removed. [GitHub App tokens are scoped to the verified repository](https://github.com/anomalyco/opencode/commit/f9098c96105bf5f6cbdb859c6e9f2045666d07d7). The [unauthenticated Feishu bridge route is removed](https://github.com/anomalyco/opencode/commit/0c6be8694894dc96b87c5a7b773d52e57ddaa1b2), as is the [PAT-to-installation-token exchange route](https://github.com/anomalyco/opencode/commit/17ebb66d2557be741275b8d14f4e0997885f80d0). All first appear in v2.1.3, absent from v2.1.2. GitHub mock execution changes from MOCK_TOKEN exchange to direct TOKEN use; ordinary Actions retain OIDC exchange.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Adapt self-hosted automation that calls removed routes and check the actual deployed token audience/scope. This is primary evidence of attack-surface reduction and a compatibility change. It does not establish the Console incident's cause, affected keys, remediation time, or deployment completion.

## Receipt
- https://github.com/anomalyco/opencode/commit/f9098c96105bf5f6cbdb859c6e9f2045666d07d7
- https://github.com/anomalyco/opencode/commit/0c6be8694894dc96b87c5a7b773d52e57ddaa1b2
- https://github.com/anomalyco/opencode/commit/17ebb66d2557be741275b8d14f4e0997885f80d0
