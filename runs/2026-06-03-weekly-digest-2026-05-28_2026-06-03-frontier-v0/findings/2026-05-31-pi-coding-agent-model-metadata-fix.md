---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-31-pi-coding-agent-model-metadata-fix
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: reliability
confidence: medium
accessibility_impact: none
actionability: observe
evidence:
  - label: "Commit f429ddb 'Fix OpenAI GPT-5.5 thinking metadata' corrects model configuration for extended thinking support"
    url: https://github.com/earendil-works/pi/commit/f429ddb
    precision: commit
---
# OpenAI GPT-5.5 thinking metadata correction

## What Changed

Fixed OpenAI GPT-5.5 model thinking metadata to correctly reflect extended thinking capabilities and parameters.

## Operator Implication

Ensures GPT-5.5 extended thinking features are correctly configured and available to users.

## Receipt

- [Commit f429ddb 'Fix OpenAI GPT-5.5 thinking metadata' corrects model configuration for extended thinking support](https://github.com/earendil-works/pi/commit/f429ddb)
