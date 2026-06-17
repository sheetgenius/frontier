---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-pi-coding-agent-model-codex-removal
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Commit 83afcdc 'fix(ai): remove stale codex models' removes gpt-5.2 and gpt-5.3-codex entries, adds Mistral variants"
    url: https://github.com/earendil-works/pi/commit/83afcdc
    precision: commit
---
# Removal of stale Codex models

## What Changed

Removed two outdated OpenAI Codex model entries (gpt-5.2 and gpt-5.3-codex). Added new Mistral models (Devstral 2, Open Mistral Nemo) and updated Claude model pricing/token limits to 128,000 max output.

## Operator Implication

Prevents operators from selecting models that may no longer be available in OpenAI API. Cleans up stale model references.

## Receipt

- [Commit 83afcdc 'fix(ai): remove stale codex models' removes gpt-5.2 and gpt-5.3-codex entries, adds Mistral variants](https://github.com/earendil-works/pi/commit/83afcdc)
