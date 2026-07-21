---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-codex-0-143-0-remains-alpha-only-through-window-end-alpha-31-d
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/compare/rust-v0.142.4...rust-v0.143.0-alpha.31
    precision: commit_diff
---
# 2026-07-01-codex-0-143-0-remains-alpha-only-through-window-end-alpha-31-d

0.143.0 remains alpha-only through window end (alpha.31); did NOT ship stable — alpha train adds OTEL service_tier/reasoning-effort telemetry, Codex Apps MCP consolidation, Responses Lite tool handling (channel: preview-or-beta, 2026-06-29). Operator consequence: Confirmed: no stable rust-v0.143.0 exists (every 0.143.0-alpha.N is prerelease=true in the API). Nothing to upgrade to. Watch-only. Notable in-flight, alpha-only work: OTEL now exposes service_tier + model_reasoning_effort on response.completed (#29155, useful for cost/usage observability once it lands stable); host-owned Codex Apps MCP connector handling is being centralized/de-duplicated (#29518, #29528); Responses Lite moves to input-items + additional_tools with forced tool namespacing flagged as a follow-up (#27946). Re-check when 0.143.0 promotes to stable. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/openai/codex/compare/rust-v0.142.4...rust-v0.143.0-alpha.31
