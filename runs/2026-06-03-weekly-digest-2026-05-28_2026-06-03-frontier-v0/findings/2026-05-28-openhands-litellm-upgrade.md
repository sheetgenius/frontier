---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-05-28-openhands-litellm-upgrade
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "1.84.1"
status: accepted
change_type: runtime
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Commit 1505caa (2026-05-28T06:03:06Z): 'Upgrade LiteLLM to 1.84.1 (#14396)' - Major dependency upgrade across pyproject.toml, poetry.lock (enterprise and root directories), and uv.lock with 137 additi"
    url: https://github.com/OpenHands/OpenHands/commit/1505caa
    precision: commit
---
# Dependency: Upgrade LiteLLM to 1.84.1

## What Changed

Upgraded LiteLLM language model library to version 1.84.1. Major version update affecting model interface and functionality across enterprise and root project configurations.

## Operator Implication

Operators should test LiteLLM 1.84.1 compatibility with their model configurations. Major version upgrade may affect model inference, token counting, or API compatibility. Review LiteLLM release notes for breaking changes.

## Receipt

- [Commit 1505caa (2026-05-28T06:03:06Z): 'Upgrade LiteLLM to 1.84.1 (#14396)' - Major dependency upgrade across pyproject.toml, poetry.lock (enterprise and root d](https://github.com/OpenHands/OpenHands/commit/1505caa)
