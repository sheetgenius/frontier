---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-pi-coding-agent-provider-zai-china
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
  - label: "Commit 51df39b 'feat(ai): add ZAI Coding Plan China provider' adds 'zai-coding-cn' endpoint with 5 GLM models and corresponding environment variable"
    url: https://github.com/earendil-works/pi/commit/51df39b
    precision: commit
---
# ZAI Coding Plan China provider integration

## What Changed

Added 'zai-coding-cn' provider variant for China region pointing to https://open.bigmodel.cn/api/coding/paas/v4 with ZAI_CODING_CN_API_KEY environment variable. Includes five GLM models (GLM-4.5-Air, GLM-4.7, GLM-5-Turbo, GLM-5.1, GLM-5V-Turbo) with reasoning support and context windows.

## Operator Implication

Expands provider support to China region users via BigModel API endpoint. Operators can now select ZAI Coding Plan China variant for region-specific deployments.

## Receipt

- [Commit 51df39b 'feat(ai): add ZAI Coding Plan China provider' adds 'zai-coding-cn' endpoint with 5 GLM models and corresponding environment variable](https://github.com/earendil-works/pi/commit/51df39b)
