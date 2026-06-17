---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-01-openclaw-5-31-beta4-tailscale-state-migration
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2026.5.31-beta.4"
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "openclaw 2026.5.31-beta.4 - Release Date: June 1, 2026 (02:04) - Pre-release adding Tailscale Serve service-name binding support and exposing Communication Notifications settings. Introduced SQLite-ba"
    url: https://github.com/openclaw/openclaw/releases
    precision: release_note
---
# OpenClaw 2026.5.31-beta.4 with Tailscale service-name binding and state migration

## What Changed

Beta 2026.5.31-beta.4 adding Tailscale Serve service-name binding support, exposing Communication Notifications settings, and introducing SQLite-backed state migration for iMessage and plugin install tracking.

## Operator Implication

Tailscale Serve integration enables new network binding patterns for deployment. Service-name binding simplifies endpoint configuration. Communication Notifications settings exposure affects notification delivery tuning. SQLite-backed state migration improves durability and auditability of iMessage and plugin state—operators should plan migration strategies and validate data integrity post-upgrade.

## Receipt

- [openclaw 2026.5.31-beta.4 - Release Date: June 1, 2026 (02:04) - Pre-release adding Tailscale Serve service-name binding support and exposing Communication Noti](https://github.com/openclaw/openclaw/releases)
