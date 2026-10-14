---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-defaults-that-flipped-an-unconfigured-agent-now-runs-gpt-6-luna-fast-at-high-reasoning-and
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/commit/3d96b698e14391437b3886e27cd3a1380837396f
    precision: commit
  - url: https://github.com/vercel/eve/commit/47c2844b7fa17a10440d174ffcb2497dbabd03a9
    precision: commit
  - url: https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/setup/vercel-trace-sampling.ts
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/pull/4010
    precision: merged_pr
  - url: https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/shared/default-agent-model.ts#L7-L8
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/shared/default-agent-model.ts#L5
    precision: tagged_commit_file
  - url: https://github.com/vercel/eve/pull/4540
    precision: merged_pr
  - url: https://github.com/vercel/eve/pull/3734
    precision: merged_pr
---
# 2026-10-13-eve-defaults-that-flipped-an-unconfigured-agent-now-runs-gpt-6-luna-fast-at-high-reasoning-and

Defaults that flipped: an unconfigured agent now runs GPT-6 Luna Fast at high reasoning, and Eve attempts 100% trace sampling on newly created Vercel projects. Unconfigured agents ran GPT-5.6 Luna Fast at 0.63.0, Grok 4.7 from 0.64.0, then GPT-6 Luna Fast with high reasoning from 0.69.0. This changes the default route and reasoning settings, not a measured performance or cost result. Eve deploy (0.66.2), and link/integration project creation from 0.75.1, attempt 100% trace sampling on newly created Vercel projects. The helper catches setup failures and warns; existing projects retain their settings. The opt-out is documented for `eve deploy --no-trace-sampling`, not every creation command. The runtime audience-to-content table stayed unchanged: development content for any audience, preview/production content only for public conversations. Datadog eval export has a separate, changed default (section 16).

Channel: tagged-release. Half: both. Date: 2026-09-22 (eve@0.64.0), 2026-09-24 (eve@0.66.2), 2026-10-01 (eve@0.69.0), 2026-10-08 (eve@0.75.1).

Operator consequence: Pin model and reasoning when cost, latency or eval baselines matter, and rerun evals after changing the route. For newly created Vercel projects, inspect actual sampling settings and setup warnings instead of assuming every trace was sampled. Review runtime trace policy separately from eval reporter content options.

## Receipt
- https://github.com/vercel/eve/commit/3d96b698e14391437b3886e27cd3a1380837396f
- https://github.com/vercel/eve/commit/47c2844b7fa17a10440d174ffcb2497dbabd03a9
- https://github.com/vercel/eve/blob/eve%400.79.0/packages/eve/src/setup/vercel-trace-sampling.ts
- https://github.com/vercel/eve/pull/4010
- https://github.com/vercel/eve/blob/eve%400.78.0/packages/eve/src/shared/default-agent-model.ts#L7-L8
- https://github.com/vercel/eve/blob/eve%400.63.0/packages/eve/src/shared/default-agent-model.ts#L5
- https://github.com/vercel/eve/pull/4540
- https://github.com/vercel/eve/pull/3734
