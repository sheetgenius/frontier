---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-01-flue-v090-env-config-reload
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.9.0"
status: accepted
change_type: workflow
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "From CHANGELOG.md v0.9.0 (2026-06-02): 'Load local environment values before configuration. Flue application commands load project-root `.env` values automatically...' and 'Restart `flue dev` after co"
    url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
    precision: release_note
---
# Automatic `.env` loading and dev reload on config changes

## What Changed

Flue now automatically loads project-root `.env` file before configuration resolution (can be overridden with `--env <path>`). Additionally, `flue dev` now restarts when auto-discovered `flue.config.*` files are created, edited, or deleted; explicit `--config <path>` files are also watched.

## Operator Implication

Operators can now rely on automatic `.env` loading for local development without explicit flags, and benefit from automatic dev server restart when configuration changes.

## Receipt

- [From CHANGELOG.md v0.9.0 (2026-06-02): 'Load local environment values before configuration. Flue application commands load project-root `.env` values automatica](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
