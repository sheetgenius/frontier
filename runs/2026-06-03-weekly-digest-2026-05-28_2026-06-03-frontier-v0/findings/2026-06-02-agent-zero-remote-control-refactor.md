---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-agent-zero-remote-control-refactor
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v1.19"
status: accepted_signal
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "v1.19 release notes: 'Renamed Remote Link to Remote Control' with refactored tunnel providers (Cloudflare, Microsoft Dev Tunnels, Serveo, Tailscale). Version advertisement in connector handshakes for "
    url: https://github.com/agent0ai/agent-zero/releases
    precision: release_note
---
# Remote Link renamed to Remote Control with multiple tunnel providers

## What Changed

Renamed Remote Link to Remote Control with refactored tunnel providers (Cloudflare, Microsoft Dev Tunnels, Serveo, Tailscale). Added version advertisement in connector handshakes for CLI client compatibility detection.

## Operator Implication

Operators managing Agent Zero deployments need to update remote connectivity terminology and can now select from multiple tunnel providers. Version compatibility detection improves client-server coordination for distributed deployments.

## Receipt

- [v1.19 release notes: 'Renamed Remote Link to Remote Control' with refactored tunnel providers (Cloudflare, Microsoft Dev Tunnels, Serveo, Tailscale). Version ad](https://github.com/agent0ai/agent-zero/releases)
