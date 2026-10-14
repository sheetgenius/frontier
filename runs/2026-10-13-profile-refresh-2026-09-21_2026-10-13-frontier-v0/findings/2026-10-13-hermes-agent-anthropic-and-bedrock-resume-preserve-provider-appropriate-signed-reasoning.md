---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-anthropic-and-bedrock-resume-preserve-provider-appropriate-signed-reasoning
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/79b45d1647f6b5680768d851c4c406e8cc550a1e
    precision: commit
---
# 2026-10-13-hermes-agent-anthropic-and-bedrock-resume-preserve-provider-appropriate-signed-reasoning

Anthropic and Bedrock resume preserve provider-appropriate signed reasoning. Anthropic last-turn-only reasoning lost the latest assistant thinking when a resumed turn closed the tool loop. Bedrock Converse replay for non-Claude reasoning models could drop signatures and fail request validation; streamed reasoning could also be duplicated. The fix preserves latest-turn Anthropic blocks, records the Bedrock issuing model for signature replay, and joins streamed reasoning per block. The change names deepseek.v3 as an affected model route; that is not evidence about the separate DeepSeek Harness product.

Channel: tagged-release (first stable v0.21.7). Half: both. Date: 2026-10-11.

Operator consequence: Use v0.21.7 for resumed conversations on those provider routes and verify a representative resume before unattended work. Preserving signatures improves continuity, but this is not a cross-model portability guarantee or a measured completion-rate result.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/79b45d1647f6b5680768d851c4c406e8cc550a1e
