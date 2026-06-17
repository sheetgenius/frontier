---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-30-claude-code-auto-mode-bedrock-vertex
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.158"
status: accepted_signal
change_type: capability
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "Auto Mode Availability: Now available on Bedrock, Vertex, and Foundry for Opus 4.7 and Opus 4.8. Opt in with `CLAUDE_CODE_ENABLE_AUTO_MODE=1`"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Auto Mode Expansion to Bedrock and Vertex

## What Changed

Auto Mode now available on Bedrock, Vertex, and Foundry for Opus 4.7 and Opus 4.8. Opt in with CLAUDE_CODE_ENABLE_AUTO_MODE=1

## Operator Implication

Auto mode permission handling now works on cloud provider APIs (AWS Bedrock, Google Vertex, others) enabling production deployments without permission prompts

## Receipt

- [Auto Mode Availability: Now available on Bedrock, Vertex, and Foundry for Opus 4.7 and Opus 4.8. Opt in with `CLAUDE_CODE_ENABLE_AUTO_MODE=1`](https://code.claude.com/docs/en/changelog)
