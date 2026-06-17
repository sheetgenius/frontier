---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-agent-zero-plugin-visibility-toggleable
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v1.19"
status: accepted_signal
change_type: capability
confidence: high
accessibility_impact: medium
actionability: test
evidence:
  - label: "v1.19 release notes under Remote Control & Connectivity: 'Protected API endpoint exposing installed plugin toggles' and commit message 'Make Office, Desktop, and Editor toggleable'."
    url: https://github.com/agent0ai/agent-zero/releases
    precision: release_note
---
# Office, Desktop, and Editor plugins made toggleable with protected API endpoint

## What Changed

Office, Desktop, and Editor plugins are now toggleable. Protected API endpoint exposes installed plugin toggles. Chat tab metadata exposure through connector API.

## Operator Implication

Operators gain granular control over which plugin capabilities are available to deployed agents. Protected API endpoint requires authentication for plugin state queries, enabling role-based capability management.

## Receipt

- [v1.19 release notes under Remote Control & Connectivity: 'Protected API endpoint exposing installed plugin toggles' and commit message 'Make Office, Desktop, an](https://github.com/agent0ai/agent-zero/releases)
