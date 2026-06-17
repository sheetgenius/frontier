---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-29-hermes-agent-packaging-hotfix
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.15.2 (v2026.5.29.2)"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Release notes: 'Packaging): ship bundled plugin.yaml manifests in wheel and sdist' - commit 827f7f07825be57108cbea18325e8f5e9fb5d2f2"
    url: https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29.2
    precision: release_note
---
# v0.15.2 Packaging Hotfix - Plugin manifest distribution fix

## What Changed

Bundled plugin.yaml manifests now ship in wheel and sdist distributions, fixing package completeness issue introduced in v0.15.0.

## Operator Implication

Distribution fix ensures plugin systems work correctly when installed from wheel/sdist. Minimal operational impact but necessary for fresh installs.

## Receipt

- [Release notes: 'Packaging): ship bundled plugin.yaml manifests in wheel and sdist' - commit 827f7f07825be57108cbea18325e8f5e9fb5d2f2](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29.2)
