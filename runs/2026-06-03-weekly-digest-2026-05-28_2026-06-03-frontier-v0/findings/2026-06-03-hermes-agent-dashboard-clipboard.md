---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-hermes-agent-dashboard-clipboard
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
  - label: "Commits June 3: c711146 'fix(desktop): dedupe clipboard image paste'; 7fb8a6b 'feat(dashboard): enrich profiles dashboard and de-dupe channel env vars (#37872)' by austinpickett and cursoragent; 1dca7"
    url: https://github.com/NousResearch/hermes-agent/commits/main
    precision: commit
---
# Dashboard and desktop client clipboard and UI enhancements

## What Changed

Desktop clipboard image paste deduplicated; profiles dashboard enriched with de-duped channel env vars; Node >=20.19/22.12 now required for desktop build.

## Operator Implication

Desktop build now requires newer Node version (>=20.19/22.12). Clipboard handling improved for image-heavy workflows. Dashboard profiles enrichment aids credential management.

## Receipt

- [Commits June 3: c711146 'fix(desktop): dedupe clipboard image paste'; 7fb8a6b 'feat(dashboard): enrich profiles dashboard and de-dupe channel env vars (#37872)'](https://github.com/NousResearch/hermes-agent/commits/main)
