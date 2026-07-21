---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-codex-v0-142-5-trace-payload-scrub
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.142.5
    precision: github_release
---
# Codex v0.142.5 stops logging full Responses WebSocket payloads

Codex `rust-v0.142.5` says full Responses WebSocket request payloads are no
longer written to trace logs. Channel: tagged-release. Operator consequence:
upgrade if traces may be retained, shared, or shipped into centralized logging;
old traces may already contain prompts, repository content, or secret-bearing tool
inputs and should be restricted or purged.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.142.5
