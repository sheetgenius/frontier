---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-hermes-agent-desktop-session
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
  - label: "Commits June 3: 0caa237 'fix(desktop): prevent IME Enter from splitting messages and viewport resize from disarming scroll anchor (#38333)'; b91c382 'Merge pull request #38393 from NousResearch/hermes"
    url: https://github.com/NousResearch/hermes-agent/commits/main
    precision: commit
---
# Desktop client session management and connectivity hardening

## What Changed

Desktop client fixes: IME Enter key no longer splits messages; viewport resize no longer disarms scroll anchor; reconnect socket guarding added; session search precision improved; branch search results deduplicated; session pins now persist across restarts; auto-reconnect after sleep.

## Operator Implication

Desktop application stability improved. IME input handling fix benefits CJK/Japanese input users. Session persistence and auto-reconnect reduce manual intervention.

## Receipt

- [Commits June 3: 0caa237 'fix(desktop): prevent IME Enter from splitting messages and viewport resize from disarming scroll anchor (#38333)'; b91c382 'Merge pull](https://github.com/NousResearch/hermes-agent/commits/main)
