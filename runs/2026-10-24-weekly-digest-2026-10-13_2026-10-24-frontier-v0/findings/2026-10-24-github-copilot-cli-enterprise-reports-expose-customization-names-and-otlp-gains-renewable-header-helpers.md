---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-enterprise-reports-expose-customization-names-and-otlp-gains-renewable-header-helpers
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-usage-metrics/copilot-usage-metrics.md#L311-L352
    precision: tagged_commit_file
  - url: https://github.com/github/docs/commit/8562ce861fa0760cdab713ecc7dbabc779b5b749
    precision: commit
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1762-L1789
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L291-L305
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-enterprise-reports-expose-customization-names-and-otlp-gains-renewable-header-helpers

Enterprise reports expose customization names, and OTLP gains renewable header helpers. With usage metrics policy enabled, reports can identify custom skills, agents, MCP servers, commands, and plugins by configured name, including per-user exports. Prompt/app/ACP reporting requires CLI 1.0.97+; SDK reporting requires 1.0.21+, with overridden CLI also 1.0.97+. In per-user 1-day and aggregated 1-day reports, each customization array retains up to 25 named entries plus a trailing other entry; the same cap applies to each day_totals record in aggregated 28-day reports. Names are limited to 128 characters, and old days are not backfilled. Separately, `telemetry.headersProvider` can run a user or managed helper for fresh HTTP OTLP headers; repository settings cannot supply it. It has a 30-second deadline, defaults to 29-minute refreshes, and blocks dependent exports after a failed refresh.

Channel: docs-only. Half: both. Date: 2026-10-23.

Operator consequence: Review customization names and report recipients before sharing usage exports. Use them for adoption trends, not an exhaustive inventory or proof that only approved tools ran. A renewable helper can remove manual collector-token rotation, but its failure creates an observability gap to monitor. Keep helper ownership in user/device policy and distinguish those exports from the first-party opt-out in section 10.

## Receipt
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-usage-metrics/copilot-usage-metrics.md#L311-L352
- https://github.com/github/docs/commit/8562ce861fa0760cdab713ecc7dbabc779b5b749
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1762-L1789
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md#L291-L305
