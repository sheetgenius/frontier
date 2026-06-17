---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-01-flue-v090-major-refactor
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.9.0"
status: accepted_signal
change_type: protocol
confidence: high
accessibility_impact: high
actionability: observe
evidence:
  - label: "From CHANGELOG.md v0.9.0 (2026-06-02): Multiple breaking change sections: 'Move application routing imports out of `@flue/runtime/app`...'; 'Check your authored source directory...'; 'Use provider IDs"
    url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
    precision: release_note
---
# Major API refactor: routing imports, source discovery, provider ID, SDK mount paths, and Cloudflare migrations ownership

## What Changed

Multiple breaking changes: (1) Routing imports moved from `@flue/runtime/app` to `@flue/runtime/routing`; provider APIs and `observe` from `@flue/runtime`; Workers AI types from `@flue/runtime/cloudflare`. (2) Source directory selection now prioritizes `.flue/`, `src/`, then project root. (3) Provider model values use `provider-id/model-id` format; `registerProvider()` and `configureProvider()` use same ID; cloudflare models report provider ID `cloudflare`. (4) SDK mount paths configured through `baseUrl` pathname. (5) Cloudflare Durable Object migrations now user-owned in project Wrangler config (no longer auto-appended). (6) Interrupted Cloudflare workflows no longer auto-retry; explicit retry required. (7) Persisted beta session state rejected; clear before upgrading.

## Operator Implication

Operators must update application configuration imports, review Cloudflare Durable Object migration setup, adopt explicit retry patterns for interrupted workflows, and clear persisted session state before upgrading from earlier beta versions.

## Receipt

- [From CHANGELOG.md v0.9.0 (2026-06-02): Multiple breaking change sections: 'Move application routing imports out of `@flue/runtime/app`...'; 'Check your authored](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
