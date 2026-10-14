---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-2-0-to-2-2-2-carried-two-regressions-ai-gateway-claude-ids-fixed-the-same-afternoon-and
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L11-L28
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.1
    precision: github_release
  - url: https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.2
    precision: github_release
  - url: https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/session.ts#L1633-L1675
    precision: tagged_commit_file
---
# 2026-10-13-flue-2-2-0-to-2-2-2-carried-two-regressions-ai-gateway-claude-ids-fixed-the-same-afternoon-and

2.2.0 to 2.2.2 carried two regressions: AI Gateway Claude ids (fixed the same afternoon) and stale finish-hook state (fixed only in 2.3.0). The Pi 0.87.1 bump brought in Pi's 0.84.3 rename of AI Gateway Claude ids to dotted versions. `cloudflare-ai-gateway/claude-sonnet-4-6` stopped resolving in 2.2.0, resolved but got a 404 from Anthropic in 2.2.1, and worked in 2.2.2: three stables in under three hours. Separately, from 2.2.0 a `useAgentFinish` callback saw agent state from before the response's final turn. The documented `usePersistentState` guard ("append a reminder once") therefore never saw its own write and re-appended on every cycle, each cycle a further model turn, until the 32-cycle ceiling failed the response.

Channel: tagged-release. Half: defect. Date: 2026-09-28 (2.2.0, 2.2.1, 2.2.2) to 2026-10-12 (2.3.0).

Operator consequence: Skip 2.2.0 and 2.2.1 if you route Claude through `cloudflare-ai-gateway`. Skip all of 2.2.x if any agent has a finish hook with a persistent-state guard, because on those versions it can burn up to 32 extra model turns and then fail. 2.3.0 fixes both. npm will not warn you off any of these versions.

## Receipt
- https://github.com/withastro/flue/blob/v2.3.0/CHANGELOG.md#L11-L28
- https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.1
- https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.2.2
- https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/session.ts#L1633-L1675
