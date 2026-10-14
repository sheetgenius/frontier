---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-prompt-length-pricing-tiers-stop-disappearing-from-model-cost-estimates
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/943a10e744b87d9a593f3dca7406d4671910f490
    precision: commit
  - url: https://github.com/earendil-works/pi/blob/v1.1.0/packages/ai/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-10-13-pi-coding-agent-prompt-length-pricing-tiers-stop-disappearing-from-model-cost-estimates

Prompt-length pricing tiers stop disappearing from model cost estimates. Model-catalog loaders preserve prompt-length pricing tiers for OpenCode, OpenCode Go, OpenRouter, Vercel AI Gateway, Google, MiniMax, and other models.dev providers. Dropping those tiers undercounted some long-prompt costs. OpenRouter time-of-day overrides are still not modeled.

Channel: tagged-release. Half: defect. Date: 2026-10-07.

Operator consequence: Rebaseline long-context cost comparisons with 1.1.0 or newer accounting. Distinguish a corrected estimate from a provider price change or proof of the final bill.

## Receipt
- https://github.com/earendil-works/pi/commit/943a10e744b87d9a593f3dca7406d4671910f490
- https://github.com/earendil-works/pi/blob/v1.1.0/packages/ai/CHANGELOG.md
