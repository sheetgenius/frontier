---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-pi-coding-agent-provider-ant-ling
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Commit 25a4a8e 'Add Ant Ling provider' adds three Ant Ling models with reasoning capabilities and ANT_LING_API_KEY support"
    url: https://github.com/earendil-works/pi/commit/25a4a8e
    precision: commit
---
# Ant Ling provider with reasoning support

## What Changed

Added Ant Ling as built-in OpenAI-compatible provider with three models: Ling 2.6 Flash, Ling 2.6 1T, and Ring 2.6 1T (with reasoning). Configured with base URL https://api.ant-ling.com/v1, 262,144 token context window, ANT_LING_API_KEY environment variable.

## Operator Implication

Operators gain access to Ant Ling inference models including reasoning-enabled Ring variant. Useful for operators in regions/orgs with Ant Ling agreements.

## Receipt

- [Commit 25a4a8e 'Add Ant Ling provider' adds three Ant Ling models with reasoning capabilities and ANT_LING_API_KEY support](https://github.com/earendil-works/pi/commit/25a4a8e)
