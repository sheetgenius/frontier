---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-gateway-tool-search-and-provider-native-monitors-absorb-more-integration-code
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.304
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.305
    precision: github_release
  - url: https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L3-L6
    precision: tagged_commit_file
---
# 2026-10-24-claude-code-gateway-tool-search-and-provider-native-monitors-absorb-more-integration-code

Gateway tool search and provider-native monitors absorb more integration code. Tool search is on by default behind a custom `ANTHROPIC_BASE_URL` from 304. Version 305 fixes that release's failures when endpoints reject tool search or ToolSearch is excluded: the client retries without it. Version 310 retries without unsupported effort beta values or mid-conversation system messages. It also makes Monitor and plugin monitors available on Bedrock, Vertex, Foundry and telemetry/nonessential-traffic-disabled sessions; those sessions now block long foreground sleeps too.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Re-test a gateway before removing custom tool discovery or polling wrappers. Record whether the search fallback loaded tools conventionally, since the resulting context cost can differ. Monitor broadens native support for waiting on work, but scripts that depended on long foreground sleeps need adaptation. This is provider coverage and compatibility, not evidence that every third-party endpoint implements every native feature.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.304
- https://github.com/anthropics/claude-code/releases/tag/v2.1.305
- https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L3-L6
