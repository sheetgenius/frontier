---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-worker-and-sdk-requests-gain-an-explicit-team-identity
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/sdk#oct-20-2026
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
  - url: https://cursor.com/docs/cli/changelog#oct-22-2026
    precision: official_docs
---
# 2026-10-24-cursor-worker-and-sdk-requests-gain-an-explicit-team-identity

Worker and SDK requests gain an explicit team identity. Worker registration/debug uses the team chosen at login or team switch instead of the account default. The TypeScript SDK adds `teamId` to agent and account operations and sends it as `x-cursor-team-id` for local settings/run requests and cloud HTTP calls. It accepts a positive safe integer; invalid or absent values omit the header and retain the ambient team. The option is neither persisted nor read from CLI configuration, so callers must pass it again on resume and later operations.

Channel: tagged-release. Half: both. Date: 2026-10-20 SDK; 2026-10-22 CLI.

Operator consequence: Make team identity an explicit field in embedding configuration and verify settings and usage attribution after a worker switch. This reduces manual account routing, but treating an omitted or malformed ID as a hard error is the embedder's job. Neither the option nor this inspection proves which cost ceiling a particular Project inherits.

## Receipt
- https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz
- https://cursor.com/docs/release-notes/sdk#oct-20-2026
- https://downloads.cursor.com/lab/2026.10.22-27dcf5f/darwin/arm64/agent-cli-package.tar.gz
- https://cursor.com/docs/cli/changelog#oct-22-2026
