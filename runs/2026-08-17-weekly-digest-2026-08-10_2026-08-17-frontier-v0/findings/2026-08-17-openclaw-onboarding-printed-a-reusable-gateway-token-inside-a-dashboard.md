---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-openclaw-onboarding-printed-a-reusable-gateway-token-inside-a-dashboard
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/124687
    precision: merged_pr
---
# 2026-08-17-openclaw-onboarding-printed-a-reusable-gateway-token-inside-a-dashboard

Onboarding printed a reusable Gateway token inside a dashboard URL.

Classic onboarding could print a reusable Gateway token embedded in a dashboard URL, including through a headless SSH formatter path  --  output that survives in terminal transcripts, shell history, session recordings, CI logs and support bundles. The fix deletes the authenticated-URL builder, the unused SSH token parameter and the token-specific onboarding copy, and prints only the uncredentialed Control UI URL plus `openclaw dashboard --no-open` as the recovery command. The separate `openclaw dashboard` command is unchanged and keeps its short-lived one-time `browserUrl`.

Channel: main-unreleased. Ancestry: Merge commit 44e8b6f12b0c5de77c60e75a468bd34b34df3d87 (PR #124687, merged 2026-08-17T23:23:17Z, base main). compare/v2026.8.1-beta.2...44e8b6f12 -> status=diverged, ahead_by=885 (not contained). compare/v2026.7.1-2...44e8b6f12 -> diverged, ahead_by=15026. compare/v2026.6.34...44e8b6f12 -> diverged, ahead_by=18179. In no tag.

Operator consequence: Go look at your own artifacts. If you onboarded a Gateway through the classic flow on any released version, a long-lived credential may be sitting in a terminal transcript, a support bundle you sent someone, or a recorded setup walkthrough  --  rotate on that assumption rather than waiting for a release. The fix is on main only, so a fresh install today still prints it.

## Receipt
- https://github.com/openclaw/openclaw/pull/124687
