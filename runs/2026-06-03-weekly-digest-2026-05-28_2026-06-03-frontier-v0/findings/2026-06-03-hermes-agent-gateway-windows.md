---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-hermes-agent-gateway-windows
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "post-v0.15.2"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Commits June 3: 973decc 'fix(gateway): decode schtasks output with locale encoding on Windows' by xxxigm and teknium1; 9666305 'fix(dashboard): clamp PTY resize dimensions for WSL2 winsize garbage (#3"
    url: https://github.com/NousResearch/hermes-agent/commits/main
    precision: commit
---
# Windows schtasks locale-safe encoding and PTY resize hardening

## What Changed

schtasks output decoded with locale encoding on Windows; PTY resize dimensions clamped for WSL2 garbage input; stale HERMES_MAX_ITERATIONS .env ghost detection and repair.

## Operator Implication

Windows and WSL2 deployments see improved stability. Locale-aware schtasks handling benefits international Windows deployments. PTY resize fix prevents gateway crashes.

## Receipt

- [Commits June 3: 973decc 'fix(gateway): decode schtasks output with locale encoding on Windows' by xxxigm and teknium1; 9666305 'fix(dashboard): clamp PTY resize](https://github.com/NousResearch/hermes-agent/commits/main)
