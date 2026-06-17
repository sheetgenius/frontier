---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-hermes-agent-portal-quicksetup
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "post-v0.15.2"
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Commits June 3: cd188b8 'feat(cli): make `hermes portal` run the full quick-setup Nous flow (model picker)'; 26a5746 'fix(cli): harden `hermes portal` SystemExit handling + finish model-pick doc sweep"
    url: https://github.com/NousResearch/hermes-agent/commits/main
    precision: commit
---
# Nous Portal quick-setup flow integration with model picker

## What Changed

`hermes portal` CLI command now runs the full quick-setup Nous flow with interactive model picker; SystemExit handling hardened; Portal login-failure retry hints improved; Portal login-failure alias added.

## Operator Implication

Portal onboarding streamlined with interactive model picker. Operators deploying Nous Portal infrastructure should test new `hermes portal` alias and verify SystemExit handling in automated deployments.

## Receipt

- [Commits June 3: cd188b8 'feat(cli): make `hermes portal` run the full quick-setup Nous flow (model picker)'; 26a5746 'fix(cli): harden `hermes portal` SystemExi](https://github.com/NousResearch/hermes-agent/commits/main)
