---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-claude-code-v2-1-197-claude-sonnet-5-becomes-the-default-model-in-cl
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.197
    precision: github_release
---
# 2026-07-01-claude-code-v2-1-197-claude-sonnet-5-becomes-the-default-model-in-cl

v2.1.197: Claude Sonnet 5 becomes the default model in Claude Code, with native 1M-token context and promotional pricing of $2/$10 per Mtok through 2026-08-31 (then $3/$15). (channel: tagged-release, 2026-06-30). Operator consequence: Default model silently changes on upgrade. Operators must re-audit: cost accounting (new $2/$10 promo rate, reverting to $3/$15 on 2026-08-31), context-window assumptions (1M native, 128k max output), and any evals/capability profiles pinned to Sonnet 4.6. If you pin models via org config or ANTHROPIC_MODEL, confirm whether Sonnet 5 is allowed/desired before rollout. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.197
