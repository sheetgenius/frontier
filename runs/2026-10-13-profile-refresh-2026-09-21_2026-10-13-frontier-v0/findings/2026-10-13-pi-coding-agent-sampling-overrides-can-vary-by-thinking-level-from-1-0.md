---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-sampling-overrides-can-vary-by-thinking-level-from-1-0
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/76dfb88f63ce51ff2e3fe2ead4fcf1f65f71f121
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.0.2/packages/coding-agent/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-sampling-overrides-can-vary-by-thinking-level-from-1-0

Sampling overrides can vary by thinking level from 1.0.2. models.json gains samplingParamsByThinkingLevel for per-thinking-level sampling overrides on OpenAI-compatible requests. A cost or behavior comparison can change through sampling configuration even if the provider/model stays fixed.

Channel: tagged-release. Half: capability. Date: 2026-10-04.

Operator consequence: Record thinking level and its sampling overrides with model/version when comparing outcomes. Use the released 1.0.2 contract rather than inferring first availability from where a changelog edit landed.

## Receipt
- https://github.com/earendil-works/pi/commit/76dfb88f63ce51ff2e3fe2ead4fcf1f65f71f121
- https://github.com/earendil-works/pi/blob/v1.0.2/packages/coding-agent/CHANGELOG.md
