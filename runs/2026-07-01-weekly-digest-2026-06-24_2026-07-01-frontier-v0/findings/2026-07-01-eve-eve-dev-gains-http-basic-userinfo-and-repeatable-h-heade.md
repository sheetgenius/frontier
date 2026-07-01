---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-eve-eve-dev-gains-http-basic-userinfo-and-repeatable-h-heade
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: medium
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve@0.17.0
    precision: github_release
---
# 2026-07-01-eve-eve-dev-gains-http-basic-userinfo-and-repeatable-h-heade

eve dev gains HTTP Basic userinfo and repeatable -H/--header support for targeting protected remote deployments; subagent tool descriptions no longer injected into child prompts (channel: tagged-release, 2026-06-29). Operator consequence: Minor developer-workflow and prompt-hygiene improvements. Lets operators point eve dev at auth-protected deployments and reduces prompt bloat in delegated child runs. Low operational urgency; noted for completeness rather than as an action trigger. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve@0.17.0
