---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-flue-v091-sdk-types-and-retention
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.9.1"
status: accepted
change_type: capability
confidence: high
accessibility_impact: medium
actionability: test
evidence:
  - label: "From CHANGELOG.md v0.9.1 (2026-06-02): 'SDK: Export reusable option types. `@flue/sdk` now exports option types...' and 'Workflow run stores no longer prune completed histories implicitly after 50 run"
    url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
    precision: release_note
---
# SDK option types export and workflow run retention behavior change

## What Changed

Two changes: (1) `@flue/sdk` now exports reusable option types for direct agent invocation, socket prompts, workflow-run event retrieval/streaming, admin run listing, plus `RunStatus` type. (2) Workflow run stores no longer prune completed histories implicitly after 50 runs; retention is now owned by deployment or configured store.

## Operator Implication

Operators must now explicitly manage workflow run retention policies; implicit 50-run pruning no longer occurs. SDK consumers can now reuse published types.

## Receipt

- [From CHANGELOG.md v0.9.1 (2026-06-02): 'SDK: Export reusable option types. `@flue/sdk` now exports option types...' and 'Workflow run stores no longer prune com](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
