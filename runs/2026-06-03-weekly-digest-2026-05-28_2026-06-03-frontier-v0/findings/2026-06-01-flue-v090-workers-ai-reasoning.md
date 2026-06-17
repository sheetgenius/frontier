---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-01-flue-v090-workers-ai-reasoning
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.9.0"
status: accepted
change_type: capability
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "From CHANGELOG.md v0.9.0 (2026-06-02): 'Forward Workers AI reasoning effort. Binding-backed `cloudflare/...` models now pass reasoning effort to `env.AI.run(...)` for models that support it.'"
    url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
    precision: release_note
---
# Workers AI reasoning effort forwarding

## What Changed

Binding-backed `cloudflare/...` models now pass reasoning effort to `env.AI.run(...)` for models that support it.

## Operator Implication

Operators deploying on Cloudflare can now leverage reasoning effort settings for improved model inference quality when supported.

## Receipt

- [From CHANGELOG.md v0.9.0 (2026-06-02): 'Forward Workers AI reasoning effort. Binding-backed `cloudflare/...` models now pass reasoning effort to `env.AI.run(...](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
