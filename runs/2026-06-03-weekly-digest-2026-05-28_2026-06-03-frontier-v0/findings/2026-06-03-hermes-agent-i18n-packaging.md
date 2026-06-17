---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-hermes-agent-i18n-packaging
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "post-v0.15.2"
status: accepted
change_type: capability
confidence: high
accessibility_impact: medium
actionability: test
evidence:
  - label: "Commit June 3: c349eca by alt-glitch 'fix(packaging): ship locales/ i18n catalogs in wheel, sdist, and Nix (#38383)'"
    url: https://github.com/NousResearch/hermes-agent/commits/main
    precision: commit
---
# i18n locales distribution in Python packaging

## What Changed

locales/ i18n catalogs now shipped in wheel, sdist, and Nix packages, enabling proper internationalization across all distribution formats.

## Operator Implication

Non-English language support now functional across all package types. Operators deploying to non-English locales should verify localization after upgrade.

## Receipt

- [Commit June 3: c349eca by alt-glitch 'fix(packaging): ship locales/ i18n catalogs in wheel, sdist, and Nix (#38383)'](https://github.com/NousResearch/hermes-agent/commits/main)
