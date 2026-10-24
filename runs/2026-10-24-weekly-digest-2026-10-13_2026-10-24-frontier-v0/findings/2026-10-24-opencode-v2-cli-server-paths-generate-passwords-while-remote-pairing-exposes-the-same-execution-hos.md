---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-v2-cli-server-paths-generate-passwords-while-remote-pairing-exposes-the-same-execution-hos
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/server-process.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/services/standalone.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/server/src/auth.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/server/src/middleware/authorization.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/server/src/pairing.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/web.mdx
    precision: tagged_commit_file
---
# 2026-10-24-opencode-v2-cli-server-paths-generate-passwords-while-remote-pairing-exposes-the-same-execution-hos

V2 CLI server paths generate passwords, while remote pairing exposes the same execution host. The V2 managed service and foreground CLI server choose a configured password or generate 32 random bytes, reject an empty password, and pass it to the HTTP server; service mode saves the generated credential. The TUI-owned standalone child gets its own random lease password and an ephemeral port. The normal host default is loopback. Pairing codes contain 16 random bytes, expire after five minutes, and are removed on consumption. Browser sessions last 30 days and are signed from the server password, so rotation revokes them. Remote pairing uses OpenTunnel to reach that server and first requests consent. The lower-level server auth layer still defaults to no password when used without a configured password layer: do not universalize the CLI guarantee. `SECURITY.md` retains the older opt-in `OPENCODE_SERVER_PASSWORD` description, which does not describe these V2 CLI launch paths. Windows managed-service port moved to 28894 in 2.1.3; the other documented default is 49374.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Inventory launch mode, listener address, password ownership and remote pairing on the actual host. A phone/browser/second client can operate the same sessions without a custom SSH dashboard, but the host still executes commands and stores credentials. Treat pairing as granting access to that authority, rotate the server password when sessions must be invalidated, and configure authentication explicitly for a custom network embedding. The documentation conflict is resolved for the inspected CLI paths; its editorial cause and all historical desktop migrations remain unverified.

## Receipt
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/server-process.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/services/standalone.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/server/src/auth.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/server/src/middleware/authorization.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/server/src/pairing.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/cli/web.mdx
