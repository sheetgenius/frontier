---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-06-pi-thin-harness-provider-churn
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window: 2026-04-22..2026-05-06
status: accepted_signal
confidence: high
receipts:
  - https://github.com/badlogic/pi-mono/releases/tag/v0.69.0
  - https://github.com/badlogic/pi-mono/releases/tag/v0.70.0
  - https://github.com/badlogic/pi-mono/releases/tag/v0.71.0
  - https://github.com/badlogic/pi-mono/releases/tag/v0.71.1
  - https://github.com/badlogic/pi-mono/releases/tag/v0.72.0
  - https://github.com/badlogic/pi-mono/releases/tag/v0.73.0
evidence:
  - label: v0.73.0 changelog highlights
    url: https://github.com/badlogic/pi-mono/blob/v0.73.0/packages/coding-agent/CHANGELOG.md#L3-L9
    precision: line
  - label: OpenAI Codex websocket transport and compact rendering fixes
    url: https://github.com/badlogic/pi-mono/blob/v0.73.0/packages/coding-agent/CHANGELOG.md#L25-L31
    precision: line
  - label: Removed Gemini CLI and Antigravity support
    url: https://github.com/badlogic/pi-mono/blob/v0.73.0/packages/coding-agent/CHANGELOG.md#L68-L79
    precision: line
  - label: Provider timeout/retry controls
    url: https://github.com/badlogic/pi-mono/blob/v0.73.0/packages/coding-agent/CHANGELOG.md#L198-L209
    precision: line
---

# Pi Coding Agent: Thin Harness, Fast Provider Churn, and Extension Contracts

## What Changed

Pi shipped multiple releases inside the sprint window. Highlights include:

- TypeBox 1.x migration and TypeBox-native validation for extensions and SDKs
- stacked extension autocomplete providers
- terminating tool results
- searchable auth-provider login
- GPT-5.5 Codex support
- provider retry and timeout controls
- DeepSeek, Cloudflare Workers AI, Cloudflare AI Gateway, Moonshot, Mistral,
  Azure Cognitive Services, and Xiaomi MiMo providers
- removal of built-in Google Gemini CLI and Google Antigravity support
- cached Codex websocket transport for ChatGPT subscription auth
- custom provider base URLs
- model thinking-level metadata
- incremental bash output streaming and compact read rendering

## Operator Consequence

Pi is acting like a deliberately minimal but very active terminal harness. The
provider layer is fluid: new providers appear, built-in integrations disappear,
transports change, and extension contracts carry much of the product's
durability.

That is a useful lesson for operators. Worker adapters should be thin,
versioned, and disposable. The durable layer should not be a worker's provider
list.

## Frontier Implication

A durable loop can learn from Pi's extension discipline and terminal UX,
especially incremental bash streaming and compact read rendering, but keep
governance outside the worker harness.

Adapter work should record:

- exact Pi version
- provider selected
- transport selected
- session directory
- extension set and schema version
- thinking-level or reasoning metadata
- whether a provider integration is native, external, or removed

## Signal

The harness frontier rewards extensibility and provider churn. The durable move
is to wrap harnesses through normalized run receipts instead of relying on any
worker's integrations as stable doctrine.
