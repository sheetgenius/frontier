---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-openclaw-hooks-can-rewrite-approved-arguments-on-stable-binding-is-fixed-only-in-beta
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/142700
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/commit/34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.before-tool-call.policy.ts#L303-L411
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.5-beta.3/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.8.35/src/agents/agent-tools.before-tool-call.policy.ts#L277-L405
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/pull/169560
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/pull/168294
    precision: merged_pr
  - url: https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3
    precision: github_release
---
# 2026-10-13-openclaw-hooks-can-rewrite-approved-arguments-on-stable-binding-is-fixed-only-in-beta

Hooks can rewrite approved arguments on stable; binding is fixed only in beta. Stable through 10.3 and extended-stable 8.35 resolve a trusted inline approval before ordinary before_tool_call hooks can replace the final arguments. The beta fix isolates the approved snapshot and blocks a rewrite unless the hook requests approval for its final replacement parameters. It has been on the beta channel since beta.2 and is in current beta.3. The ordering was read in all three source trees; no exploit was executed. Beta.3 also carries fixes for network results reached through Tool Search or Code Mode not tainting the turn and unfinished reasoning becoming visible after a truncated tool stream. Those fixes are likewise absent from stable 10.3.

Channel: preview-or-beta and main-unreleased; affected stable through 2026.10.3 and extended-stable 2026.8.35. Half: defect. Date: 2026-10-11 main merge, 2026-10-12 first beta fix; retained in beta.3 published 2026-10-13.

Operator consequence: Until a stable release containing this fix is verified, inventory ordinary before_tool_call hooks on either stable line and remove or pin plugins you do not control. Test transforming hooks on beta.3: plugin authors must return requireApproval with final parameters or the rewritten call is blocked. A future version number or an issue's open/closed status is not proof of stable inclusion.

## Receipt
- https://github.com/openclaw/openclaw/pull/142700
- https://github.com/openclaw/openclaw/commit/34d07e7b0dc1b5f0ed54de67a9647d9e6b8c23de
- https://github.com/openclaw/openclaw/blob/v2026.10.3/src/agents/agent-tools.before-tool-call.policy.ts#L303-L411
- https://github.com/openclaw/openclaw/blob/v2026.10.5-beta.3/src/agents/agent-tools.before-tool-call.policy.ts#L291-L436
- https://github.com/openclaw/openclaw/blob/v2026.8.35/src/agents/agent-tools.before-tool-call.policy.ts#L277-L405
- https://github.com/openclaw/openclaw/pull/169560
- https://github.com/openclaw/openclaw/pull/168294
- https://github.com/openclaw/openclaw/releases/tag/v2026.10.5-beta.3
