---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-pi-coding-agent-provider-routing-and-cache-behavior-changed-without-a-model-quality-guarantee
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v1.3.0/packages/ai/CHANGELOG.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/ai/CHANGELOG.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/CHANGELOG.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/providers.md
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/commit/adc5fa9f800bee587e35b1a7b316e4b11a8aef24
    precision: commit
---
# 2026-10-24-pi-coding-agent-provider-routing-and-cache-behavior-changed-without-a-model-quality-guarantee

Provider routing and cache behavior changed without a model-quality guarantee. Kimi Coding uses Chat Completions at a `/v1` endpoint, allowing tools added mid-conversation without invalidating its cache; custom base URLs must include `/v1`. GPT-6 API-key requests preserve cache across supported thinking-level changes, and 1.4 preserves Responses caching when tools are removed. Switching models drops the old model's thinking instead of converting it into visible reply text. Provider repairs cover OpenCode endpoints/protocols, Gemini thinking, image-bearing Claude error results, retryable gateway failures and the Codex route's 500K context declaration. The 1.4 defaults move GitHub Copilot to `gpt-6.1-sol`, NVIDIA to `nvidia/nemotron-3.5-super-vl-120b-a12b`, and Xiaomi routes to `mimo-v2.6-pro`; `openai-codex/gpt-5.5` and `gpt-5.3-codex-spark` are removed because that backend rejects them. MiniMax M3.1 Flash is added, and classifier cost estimates stop listing Jev as free. Attribution headers now originate in pi-ai, so CLI `before_provider_headers` handlers no longer see already-inserted attribution headers; an explicit null removal still applies.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Update Kimi overrides, pin model/provider IDs and retest extension header policy. Compare cache usage on the actual route after upgrading rather than budgeting from model names alone. No matched-task quality or cost evaluation was run here; source changes establish request behavior, not the social claim that Pi always uses fewer tokens or that a particular provider performs better in it.

## Receipt
- https://github.com/earendil-works/pi/blob/v1.3.0/packages/ai/CHANGELOG.md
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/ai/CHANGELOG.md
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/CHANGELOG.md
- https://github.com/earendil-works/pi/blob/v1.4.0/packages/coding-agent/docs/providers.md
- https://github.com/earendil-works/pi/commit/adc5fa9f800bee587e35b1a7b316e4b11a8aef24
