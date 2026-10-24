---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-credentials-follow-the-execution-host-or-the-optional-console-gateway
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/providers.mdx
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/credential/sql.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/credential.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/provider/opencode.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/providers.mdx
    precision: tagged_commit_file
---
# 2026-10-24-opencode-credentials-follow-the-execution-host-or-the-optional-console-gateway

Credentials follow the execution host or the optional Console gateway. V2 stores saved API keys and OAuth credentials in its server SQLite database, normally under the OpenCode data directory, rather than continuing to write V1 `auth.json`; `opencode debug paths` resolves the actual installation paths. The credential schema uses a JSON-valued text column and the inspected write path does not encrypt each credential into an OS keychain. Environment and command-based credentials are separate options. `auth export`/`auth import` arrived in 2.0.20 in the retrospective. The Console plugin has a device OAuth flow with access/refresh tokens and refresh rotation; a visible legacy API key is not the only authentication path. 2.1.2 fixes forwarding credentials from the old Console domain, and 2.1.3 fixes configured provider base URLs losing to catalog endpoints. Separately, optional Console provider routing stores upstream credentials in the hosted gateway and lets members use models without seeing those keys.

Channel: tagged-release. Half: both. Date: 2026-10-22.

Operator consequence: Protect and back up the actual server data directory, and treat credential exports as secrets. A remote client does not imply credentials stay on its laptop; a Console-connected provider additionally places custody in that service. Test custom endpoint routing and authentication after migration. Console provider removal is documented as removing that gateway entry and its models; it is not evidence of revocation at the upstream provider. The gateway can remove per-developer key distribution, but it concentrates credential and billing responsibility in a separate service.

## Receipt
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/providers.mdx
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/credential/sql.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/credential.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/plugin/provider/opencode.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/providers.mdx
