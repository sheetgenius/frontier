---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-the-google-cloud-provider-is-in-preview-while-public-availability-remains-prospective
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/blob/rust-v0.165.0-alpha.1/codex-rs/model-provider-info/src/lib.rs
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/commit/3fd148a20c18cfc72beb7dedfa52951b1f9c4cb1
    precision: commit
  - url: https://github.com/openai/codex/commit/970111f6cb62cc02fe36a82ea7d71b37a2889c97
    precision: commit
  - url: https://openai.com/index/openai-models-google-cloud/
    precision: official_docs
---
# 2026-10-24-codex-the-google-cloud-provider-is-in-preview-while-public-availability-remains-prospective

The Google Cloud provider is in preview while public availability remains prospective. Alpha.1 includes [a `gcp` provider using Responses over HTTP without OpenAI authentication, WebSockets, or standalone web search](https://github.com/openai/codex/blob/rust-v0.165.0-alpha.1/codex-rs/model-provider-info/src/lib.rs). The later project/location configuration is main-only. OpenAI's [2026-10-21 Google Cloud announcement](https://openai.com/index/openai-models-google-cloud/) describes general availability in coming weeks. The announcement proves vendor intent; the preview proves a client path exists. Neither proves a particular operator can obtain service access today.

Channel: preview-or-beta. Half: capability. Date: 2026-10-23.

Operator consequence: Teams already approved for that environment can assess the preview's authentication and transport limits before building a provider shim. Others should wait for actual service availability and a stable client tag. Keep Cloud contract, model entitlement, and client version as separate rollout decisions.

## Receipt
- https://github.com/openai/codex/blob/rust-v0.165.0-alpha.1/codex-rs/model-provider-info/src/lib.rs
- https://github.com/openai/codex/commit/3fd148a20c18cfc72beb7dedfa52951b1f9c4cb1
- https://github.com/openai/codex/commit/970111f6cb62cc02fe36a82ea7d71b37a2889c97
- https://openai.com/index/openai-models-google-cloud/
