---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-provider-changes-chatgpt-sign-in-on-the-openai-provider-short-lived-anthropic-credentials
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/releases/tag/v0.99.0
    precision: github_release
  - url: https://github.com/earendil-works/pi/releases/tag/v0.99.2
    precision: github_release
  - url: https://github.com/earendil-works/pi/releases/tag/v1.0.3
    precision: github_release
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/providers.md#L104-L114
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/releases/tag/v0.99.1
    precision: github_release
  - url: https://github.com/earendil-works/pi/blob/v1.0.3/packages/ai/CHANGELOG.md#L5-L11
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-provider-changes-chatgpt-sign-in-on-the-openai-provider-short-lived-anthropic-credentials

Provider changes: ChatGPT sign-in on the OpenAI provider, short-lived Anthropic credentials, Radius in `/login`, and a breaking Azure rename. ChatGPT sign-in arrived on the regular openai provider in 0.99.0; standalone binaries needed the missing-module fix in 0.99.1. The old Codex-subscription provider is labelled legacy. Anthropic workload identity federation is used when its environment is configured and no existing API key/OAuth token takes precedence, allowing CI short-lived access. Radius is documented first on the providers page, and the vendor describes it as an early-alpha gateway with organization controls/analytics. Its verified client integration is a top-level /login entry placed last, plus an offer to configure its MCP server; server-side governance effectiveness was not audited. OpenAI Codex defaults to GPT-6.1 Sol from 0.99.1 and xAI to Grok 4.7 from 0.87.1. The Azure provider ID changed in 1.0.3; old-provider sessions fall back and lose prompt-cache reuse.

Channel: tagged-release (v0.87.1 to v1.0.3). Half: capability. Date: 2026-09-29.

Operator consequence: Change Azure provider keys/references to azure in auth/configuration before going past 1.0.2; keep API ID azure-openai-responses and AZURE_OPENAI_* variables unchanged. SDK imports become providers/azure, azureProvider, and AZURE_MODELS. Pin models explicitly for comparable costs; section 25 adds the missed default changes. Federation requires clearing higher-precedence credentials where appropriate. Treat Radius controls/analytics as vendor-described until service enforcement is checked; section 26 verifies a narrower client-catalog correction.

## Receipt
- https://github.com/earendil-works/pi/releases/tag/v0.99.0
- https://github.com/earendil-works/pi/releases/tag/v0.99.2
- https://github.com/earendil-works/pi/releases/tag/v1.0.3
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/docs/providers.md#L104-L114
- https://github.com/earendil-works/pi/releases/tag/v0.99.1
- https://github.com/earendil-works/pi/blob/v1.0.3/packages/ai/CHANGELOG.md#L5-L11
- https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/CHANGELOG.md
