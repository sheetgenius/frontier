---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-zero-v2-2-explicit-model-setup
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/releases/tag/v2.2
    precision: github_release
---
# Agent Zero v2.2 makes model setup explicit

Agent Zero `v2.2` makes model setup explicit in-thread, removes silent OAuth
model auto-population, sets the default main model to
`anthropic/claude-sonnet-5`, sets the Codex fallback to `gpt-5.5`, and fixes
LiteLLM/streaming fallback paths. Channel: tagged-release. Operator consequence:
model defaults keep moving; pin models if cost or behavior must stay stable.

## Receipt
- https://github.com/agent0ai/agent-zero/releases/tag/v2.2
