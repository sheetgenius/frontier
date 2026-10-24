---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-native-model-request-hooks-observe-attempts-without-authorizing-them
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/70b3bb6d8814ab3f2045238b4ae14c43da99783b
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/events/model_request.rs#L142-L148
    precision: tagged_commit_file
---
# 2026-10-24-codex-native-model-request-hooks-observe-attempts-without-authorizing-them

Native model-request hooks observe attempts without authorizing them. [PreModelRequest and PostModelRequest cover attempts, retries, completion, failure, cancellation, and available usage](https://github.com/openai/codex/commit/70b3bb6d8814ab3f2045238b4ae14c43da99783b). Hook stdout is diagnostic, even if it resembles a control directive: these events cannot veto requests or rewrite model context. Synchronous post-hooks finish before tool dispatch; asynchronous observers allow dispatch to continue.

Channel: tagged-release. Half: capability. Date: 2026-10-23.

Operator consequence: Replace request-observation shims where the native event contract suffices. Keep authorization in an enforcing path and measure synchronous hook latency before putting exporters there.

## Receipt
- https://github.com/openai/codex/commit/70b3bb6d8814ab3f2045238b4ae14c43da99783b
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/events/model_request.rs#L142-L148
