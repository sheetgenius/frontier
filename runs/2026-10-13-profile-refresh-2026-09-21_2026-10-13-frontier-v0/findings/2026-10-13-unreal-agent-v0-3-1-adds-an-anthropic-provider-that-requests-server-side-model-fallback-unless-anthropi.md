---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-adds-an-anthropic-provider-that-requests-server-side-model-fallback-unless-anthropi
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/providers/providers.go#L95-L118
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/messagesapi/adapter.go#L92-L105
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/messagesapi/request.go#L17-L40
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/commit/20b14c090bb72e2ee461179e9bb5c0fc39a92596
    precision: commit
---
# 2026-10-13-unreal-agent-v0-3-1-adds-an-anthropic-provider-that-requests-server-side-model-fallback-unless-anthropi

v0.3.1 adds an Anthropic provider that requests server-side model fallback unless ANTHROPIC_FALLBACK=false. `UNREAL_HARNESS_LLM_PROVIDER=anthropic` (or `-provider anthropic` in the TUI) uses the Messages API with `ANTHROPIC_API_KEY`; the default model is `claude-opus-5-5`. When `ANTHROPIC_FALLBACK` is unset, the adapter adds the header `Anthropic-Beta: server-side-fallback-2026-07-01` and the body field `"fallbacks": "default"` to every request ("Nil enables server-side fallback", adapter.go L54). It accepts a `fallback` output block, which must name a from model and a to model. The setting moved from opt-in (2026-09-30) to on by default (2026-10-02) within the v0.3.0 Go-tag range, first available as a binary in v0.3.1, and usage is now recorded per model (`Usage.ByModel`). Requests default to 128,000 max output tokens, and `ANTHROPIC_CACHE_TTL` accepts 5m or 1h. The adapter answers each tool call once and sends later progress for that call as text (request.go L239-L240), which on this provider avoids the duplicate-result rejection behind #11. I did not read Anthropic's documentation for the beta. What a fallback actually serves is Anthropic's behavior; this record covers only what the harness sends and parses.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: If a run has to stay on one Claude model (for evals, a cost ceiling or a data-handling rule), set `ANTHROPIC_FALLBACK=false`. The default requests fallback and the adapter recognizes returned fallback blocks. The beta's service availability, substitute-model selection and billing are unverified; do not turn request construction into a guarantee about the service. Check per-model usage in the session output before you compare costs across runs. The runner README does not list this provider, so read providers.go for its switches.

## Receipt
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/providers/providers.go#L95-L118
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/messagesapi/adapter.go#L92-L105
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/messagesapi/request.go#L17-L40
- https://github.com/unreallabsai/unreal-agent/commit/20b14c090bb72e2ee461179e9bb5c0fc39a92596
