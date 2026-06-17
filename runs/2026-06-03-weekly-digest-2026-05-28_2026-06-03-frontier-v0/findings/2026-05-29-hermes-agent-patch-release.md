---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-29-hermes-agent-patch-release
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.15.1 (v2026.5.29)"
status: accepted_signal
change_type: reliability
confidence: high
accessibility_impact: medium
actionability: observe
evidence:
  - label: "Release notes highlight: 'Dashboard 401 reload loop fixed \u2014 In loopback mode the dashboard's identity probe (`/api/auth/me`) returns 401 by design, but v0.15.0's stale-token reload guard treated every"
    url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29
    precision: release_note
---
# v0.15.1 Patch Release - Dashboard reload loop hotfix and Docker hardening

## What Changed

Critical fix for dashboard infinite-reload loop in loopback mode (Docker, hosted instances); Docker dashboard now requires explicit HERMES_DASHBOARD_INSECURE=1 env var instead of inferring from bind host; MCP bare commands (npx, npm, node) resolve correctly in Docker; Kanban worker SIGTERM termination restored; Skills catalog expanded from 858 to 19,932 entries via sitemap; URL redaction passthrough fixed.

## Operator Implication

Critical for Docker deployments: explicit HERMES_DASHBOARD_INSECURE=1 required for insecure binding; existing setups must update env configuration. Dashboard reload loop fix essential for loopback-mode deployments (Docker, hosted instances). MCP command resolution fix improves container compatibility.

## Receipt

- [Release notes highlight: 'Dashboard 401 reload loop fixed — In loopback mode the dashboard's identity probe (`/api/auth/me`) returns 401 by design, but v0.15.0'](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29)
