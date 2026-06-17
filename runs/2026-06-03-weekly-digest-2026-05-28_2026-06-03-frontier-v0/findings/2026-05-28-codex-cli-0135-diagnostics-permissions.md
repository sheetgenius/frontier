---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-28-codex-cli-0135-diagnostics-permissions
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "0.135.0"
status: accepted
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "May 28, 2026: Codex CLI 0.135.0 - Major updates include enhanced diagnostics via `codex doctor` command, improved Vim mode with text-object editing and custom interrupt bindings, and permission profil"
    url: https://developers.openai.com/codex/changelog
    precision: release_note
---
# Codex CLI 0.135.0 - Enhanced diagnostics and permission profiles

## What Changed

CLI 0.135.0 introduces enhanced diagnostics via codex doctor command, improved Vim mode with text-object editing and custom interrupt bindings. Permission profiles now support named permission profiles with custom configurations display. Packaged builds discover bundled zsh helpers; Python SDK exposes sandbox presets; installers support non-interactive mode.

## Operator Implication

Operators gain richer diagnostic capabilities for troubleshooting and support cases, improved editor ergonomics, and more granular permission management. Non-interactive installer support reduces friction for automation and CI/CD deployment.

## Receipt

- [May 28, 2026: Codex CLI 0.135.0 - Major updates include enhanced diagnostics via `codex doctor` command, improved Vim mode with text-object editing and custom i](https://developers.openai.com/codex/changelog)
