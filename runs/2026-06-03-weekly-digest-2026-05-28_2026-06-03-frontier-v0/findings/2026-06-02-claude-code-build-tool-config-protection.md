---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-claude-code-build-tool-config-protection
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.160"
status: accepted_signal
change_type: security
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "acceptEdits Mode: Now prompts before writing build-tool config files granting code execution (`.npmrc`, `.yarnrc*`, `bunfig.toml`, `.bazelrc`, `.pre-commit-config.yaml`, `.devcontainer/`, etc.)"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Build Tool Config Write Protection

## What Changed

acceptEdits Mode now prompts before writing build-tool config files granting code execution (.npmrc, .yarnrc*, bunfig.toml, .bazelrc, .pre-commit-config.yaml, .devcontainer/, etc.)

## Operator Implication

Build tool configuration files that grant code execution now require confirmation even in acceptEdits mode, mitigating supply-chain attacks

## Receipt

- [acceptEdits Mode: Now prompts before writing build-tool config files granting code execution (`.npmrc`, `.yarnrc*`, `bunfig.toml`, `.bazelrc`, `.pre-commit-conf](https://code.claude.com/docs/en/changelog)
