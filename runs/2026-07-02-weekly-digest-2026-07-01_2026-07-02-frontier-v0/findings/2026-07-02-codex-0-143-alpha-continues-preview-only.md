---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-codex-0-143-alpha-continues-preview-only
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/compare/rust-v0.143.0-alpha.31...rust-v0.143.0-alpha.34
    precision: github_compare
---
# Codex 0.143 remains alpha-only

The Codex 0.143 line stayed alpha-only through `rust-v0.143.0-alpha.34` in this
window. Alpha changes include WebSocket liveness bounds, multi-agent/tool timing
telemetry, TTFT telemetry, and a `quick-xml` advisory fix. Channel:
preview-or-beta. Operator consequence: the runtime/observability work is real, but
there is no stable 0.143 tag to upgrade to.

## Receipt
- https://github.com/openai/codex/compare/rust-v0.143.0-alpha.31...rust-v0.143.0-alpha.34
