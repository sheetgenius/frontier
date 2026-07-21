---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-eve-recursive-subagent-delegation-depth-capped-default-maxsu
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/pull/409
    precision: merged_pr
---
# 2026-07-01-eve-recursive-subagent-delegation-depth-capped-default-maxsu

Recursive subagent delegation depth capped (default maxSubAgentDepth=3) with model-visible + dispatch guards; over-limit calls return SUBAGENT_DEPTH_LIMIT_REACHED (channel: main-unreleased, 2026-06-30). Operator consequence: Adds a safety bound on runaway subagent recursion, configurable via defineAgent({ limits: { maxSubAgentDepth } }). Relevant to operators delegating across subagents who need a hard ceiling. Not yet tagged; carry forward to confirm which release ships it. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/vercel/eve/pull/409
