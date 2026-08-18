---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-eve-eve-0-36-0-moves-sveltekit-deployment-onto-vercel-s-stable-services
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.36.0
    precision: github_release
---
# 2026-08-17-eve-eve-0-36-0-moves-sveltekit-deployment-onto-vercel-s-stable-services

eve 0.36.0 moves SvelteKit deployment onto Vercel's stable services model and removes the experimentalServices escape hatch.

`eve/sveltekit` now deploys the agent through Vercel's stable services model. On Vercel builds it generates an eve Build Output service and a `/eve/v1/*` service route instead of writing legacy `experimentalServices` into `vercel.json`. The `configureVercelJson` and `servicePrefix` plugin options and the `EVE_SVELTEKIT_SERVICE_PREFIX` export are removed, and any generated `experimentalServices` block must be deleted from `vercel.json` by hand.

Channel: tagged-release. Ancestry: Same stable tag as the default-model change: `gh api 'repos/vercel/eve/compare/eve%400.35.0...eve%400.36.0'` returned dc8a261 0f359fe ee8943b 2714386 20a5201 b58b2f2, containing the minor-change commit 2714386  --  in the history of eve@0.36.0 (prerelease=false per `gh api repos/vercel/eve/releases`).

Operator consequence: A manual step on upgrade, not an automatic one: delete the `experimentalServices` block from `vercel.json` yourself, or your deployment carries a stale route definition the plugin no longer owns. If you set `servicePrefix` or `EVE_SVELTEKIT_SERVICE_PREFIX` to route eve somewhere other than `/eve/v1/*`, that control is gone  --  check what else on your domain was relying on the custom prefix before you upgrade.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.36.0
