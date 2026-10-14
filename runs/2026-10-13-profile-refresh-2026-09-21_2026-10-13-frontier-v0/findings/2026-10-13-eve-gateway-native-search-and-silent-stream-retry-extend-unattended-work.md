---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-gateway-native-search-and-silent-stream-retry-extend-unattended-work
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/f8ea556b508c967ecf109287b3cdd60daf2172f6
    precision: commit
  - url: https://github.com/vercel/eve/commit/b56b4ff2a8617b8d9e037d008ada4d1db68eb20b
    precision: commit
  - url: https://github.com/vercel/eve/releases/tag/eve%400.76.0
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.77.0
    precision: github_release
---
# 2026-10-13-eve-gateway-native-search-and-silent-stream-retry-extend-unattended-work

Gateway-native search and silent-stream retry extend unattended work. webSearch with provider native uses OpenAI, Anthropic or Gemini 3+ hosted search through AI Gateway. Unsupported Gateway models need an explicit fallback, and pre-3 Gemini loses Google Search because it interfered with other tools. After ten minutes without model-stream output, Eve abandons and retries the call; tool-work time is excluded, and exhausted retries still fail the turn. ai >=7.0.137 is required.

Channel: tagged-release. Half: both. Date: 2026-10-09 (eve@0.76.0), 2026-10-11 (eve@0.77.0).

Operator consequence: Check the selected model route and configure a fallback rather than assuming every agent has search. Pin the AI SDK peer version and test silent-stream recovery without counting long-running tool work as a stall. This removes one manual recovery task; it does not establish uninterrupted completion.

## Receipt
- https://github.com/vercel/eve/commit/f8ea556b508c967ecf109287b3cdd60daf2172f6
- https://github.com/vercel/eve/commit/b56b4ff2a8617b8d9e037d008ada4d1db68eb20b
- https://github.com/vercel/eve/releases/tag/eve%400.76.0
- https://github.com/vercel/eve/releases/tag/eve%400.77.0
