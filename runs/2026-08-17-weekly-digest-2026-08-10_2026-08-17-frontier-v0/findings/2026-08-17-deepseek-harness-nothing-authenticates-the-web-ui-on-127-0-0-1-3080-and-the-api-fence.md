---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-nothing-authenticates-the-web-ui-on-127-0-0-1-3080-and-the-api-fence
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/packages/client/connection/src/api-request-trust.ts
    precision: official_docs
---
# 2026-08-17-deepseek-harness-nothing-authenticates-the-web-ui-on-127-0-0-1-3080-and-the-api-fence

Nothing authenticates the Web UI on 127.0.0.1:3080, and the /api fence says so in its own header comment.

The answer to "what authenticates a request to the Web UI" is: nothing, and DeepSeek documents that rather than implying otherwise. packages/client/connection/src/api-request-trust.ts opens with "Network reachability and authentication stay out of scope: binding policy belongs to the webserver config, and this fence is not an auth layer." What `isTrustedApiRequest()` does is check the Host header against loopback or a declared `trustedHosts` authority, refuse an explicit `sec-fetch-site: cross-site`, and require any attached Origin to match the Host  --  a DNS-rebinding and cross-site fence, not an identity check; an absent Origin passes. docs/subsystems/web-server.md is equally plain about the carrier: "there is no TLS, auth, or origin policy, so a non-loopback bind exposes the server to that network." The consequence is that any local process, any other user on a shared machine, and anything that can run `curl` against 127.0.0.1:3080 has the full API  --  sessions, agents, and the bash tool behind them.

Channel: preview-or-beta. Ancestry: Both files read at tag commit 99f6f02fecdb7dff40c3fbc9470f5907c29f74ca, which `git ls-remote --tags` shows is the sole tag and which the release API flags `prerelease: true`. The fence's last change, 0a42836fbb (2026-08-13), compares `behind` / `ahead_by 0` against that tag.

Operator consequence: Re-audit, and treat port 3080 as a shell. On a multi-user or shared-tenant host, `dsh web` hands every local account the agent's command execution. Do not add `--trusted-host` to make a LAN bind work  --  that flag exists to satisfy the rebinding fence, and satisfying the fence is not authenticating anyone. Until an auth layer lands, the only defensible deployment is a single-user machine on loopback, reached remotely by SSH tunnel.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/99f6f02fecdb7dff40c3fbc9470f5907c29f74ca/packages/client/connection/src/api-request-trust.ts
