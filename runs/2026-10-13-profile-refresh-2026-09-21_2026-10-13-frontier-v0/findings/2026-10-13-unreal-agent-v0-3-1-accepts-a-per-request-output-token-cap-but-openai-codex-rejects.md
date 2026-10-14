---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-accepts-a-per-request-output-token-cap-but-openai-codex-rejects
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/commit/d3f2f383e83c369d29d11d88175656bac17048e4
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/usage.go#L18-L20
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L272-L275
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L598-L601
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openaicodex/client.go#L73-L78
    precision: tagged_commit_file
---
# 2026-10-13-unreal-agent-v0-3-1-accepts-a-per-request-output-token-cap-but-openai-codex-rejects

v0.3.1 accepts a per-request output-token cap, but openai-codex rejects it. A positive JSON max_output_tokens field now reaches the model request without a library host having to send a settings-control input. It is a per-request output limit, not a run-wide token or money budget. The usage text excludes openai-codex, and that client rejects any non-nil output cap before making the request. The TUI's default provider therefore cannot be assumed to support the new runner control.

Channel: tagged-release. Half: capability. Date: 2026-10-06.

Operator consequence: CLI hosts using a supporting provider can bound output per model request. Leave max_output_tokens unset for openai-codex, or choose another provider when that control is required. Keep a separate total-cost and tool-runtime budget.

## Receipt
- https://github.com/unreallabsai/unreal-agent/commit/d3f2f383e83c369d29d11d88175656bac17048e4
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/usage.go#L18-L20
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L272-L275
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/cmd/internal/agentrunner/run.go#L598-L601
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/clients/openaicodex/client.go#L73-L78
