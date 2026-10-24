---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-canary-removes-browser-extension-control-apis-and-configuration
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/b87977caddafb4dd1842d782ae4ae7e3af98e575
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/0f8bbed1ed3b0272c1f7ece147ea823b79789918
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/commit/b04f5a38bb659bccf57dea4232554e33f093e9cc
    precision: commit
---
# 2026-10-24-hermes-agent-canary-removes-browser-extension-control-apis-and-configuration

Canary removes browser extension control APIs and configuration. The canary series removes `/v1/browser-control`, `/v1/artifacts`, and `browser.controller.*` RPC/events alongside the legacy browser tools. The v52 migration removes `browser.extension_control`; documentation points to `browser.cdp_url`. These interfaces remain outside this series' stable availability through v0.22.5.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Audit browser extension and remote-controller adapters as well as tool-name allowlists before switching to canary. A tool rename audit alone misses the removed transport. Test the replacement CDP connection and intentional host access separately.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/b87977caddafb4dd1842d782ae4ae7e3af98e575
- https://github.com/NousResearch/hermes-agent/commit/0f8bbed1ed3b0272c1f7ece147ea823b79789918
- https://github.com/NousResearch/hermes-agent/commit/b04f5a38bb659bccf57dea4232554e33f093e9cc
