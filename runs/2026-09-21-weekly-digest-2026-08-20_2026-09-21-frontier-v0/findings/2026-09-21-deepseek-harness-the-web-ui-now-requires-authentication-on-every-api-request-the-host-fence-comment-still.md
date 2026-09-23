---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-deepseek-harness-the-web-ui-now-requires-authentication-on-every-api-request-the-host-fence-comment-still
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/fb2c4b9e698e30edb738bca4cf0618587db7d203/packages/client/connection/src/rpc-host.ts
    precision: tagged_commit_file
---
# 2026-09-21-deepseek-harness-the-web-ui-now-requires-authentication-on-every-api-request-the-host-fence-comment-still

The Web UI now requires authentication on every /api request; the Host fence comment still says it is not an auth layer. Carry-forward answered yes: the Web UI has an authentication layer, a bearer launch token turned into a 30-day cookie, applied to loopback too. It is still a plugin package (`@deepseek-ai/dsh-client-connection`), and architecture.md still says any row can be replaced (section 3).

Channel: preview-or-beta. Half: both. Date: first in dsh-v0.1.2-alpha.1 (2026-08-27); in rc since dsh-v0.1.2-rc.1 (2026-09-03).

Operator consequence: Upgrade any exposed rc.8 or 0.1.1 install to >= 0.1.2-rc.1; before that, anything that could reach the port could drive the agent. Treat the launch URL printed by `dsh web` as a credential: it lands in terminal scrollback and logs, and any browser that opens it holds a 30-day session. `trustedHosts` still only widens which Host headers pass; it grants no login. Discussion #3006 (auth for 0.0.0.0), open at parent, is now answered in code; its thread was not re-read.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/fb2c4b9e698e30edb738bca4cf0618587db7d203/packages/client/connection/src/rpc-host.ts
