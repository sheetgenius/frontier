---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-flue-v091-cwd-scoping-fix
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.9.1"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "From CHANGELOG.md v0.9.1 (2026-06-02): 'Fixed relative cwd double-scoping in custom sandbox connectors. Flue now applies a created agent's `cwd` exactly once during `init()`...' Commit 4cc5b46 (2026-0"
    url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
    precision: release_note
---
# Fixed relative cwd double-scoping in custom sandbox connectors

## What Changed

Flue now applies a created agent's `cwd` exactly once during `init()`, relative to the connector's provider-owned base directory. `SandboxFactory.createSessionEnv()` now receives only `{ id }`; connector implementations should stop consuming `cwd` parameter.

## Operator Implication

Custom sandbox connector implementations must stop expecting `cwd` parameter in `createSessionEnv()` and update their code accordingly.

## Receipt

- [From CHANGELOG.md v0.9.1 (2026-06-02): 'Fixed relative cwd double-scoping in custom sandbox connectors. Flue now applies a created agent's `cwd` exactly once du](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
