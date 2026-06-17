---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-agent-zero-xpra-desktop-hardening
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v1.19"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "v1.19 release notes under Computer Use & Desktop: 'Hardened Xpra desktop control with structured workflows', 'Fixed Xpra canvas sizing from backend-normalized dimensions', 'Background tool contract ex"
    url: https://github.com/agent0ai/agent-zero/releases
    precision: release_note
---
# Hardened Xpra desktop control with structured workflows and canvas sizing fixes

## What Changed

Hardened Xpra desktop control with structured workflows. Fixed Xpra canvas sizing from backend-normalized dimensions. Added background tool contract exposing window listing and element dispatch.

## Operator Implication

Improved stability and correctness of desktop automation through Xpra. Canvas sizing fixes prevent rendering misalignment. Background tool contract standardizes desktop interaction API.

## Receipt

- [v1.19 release notes under Computer Use & Desktop: 'Hardened Xpra desktop control with structured workflows', 'Fixed Xpra canvas sizing from backend-normalized d](https://github.com/agent0ai/agent-zero/releases)
