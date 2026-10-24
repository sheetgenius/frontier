---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-sdk-1-0-40-wires-nested-claude-hook-denials-into-the-local-execution-gate
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.37.tgz
    precision: official_docs
  - url: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/sdk#oct-20-2026
    precision: official_docs
---
# 2026-10-24-cursor-sdk-1-0-40-wires-nested-claude-hook-denials-into-the-local-execution-gate

SDK 1.0.40 wires nested Claude hook denials into the local execution gate. Cursor reports that a Claude-compatible PreToolUse hook could return nested `hookSpecificOutput.permissionDecision` denial while a local SDK agent still executed the call. The artifact comparison corroborates the missing enablement and the repaired rejection path in 1.0.40. This is stronger than finding a parser symbol in both versions, but remains static inspection rather than a live denied-tool test.

Channel: tagged-release. Half: defect. Date: 2026-10-20.

Operator consequence: Upgrade local SDK embedders using Claude-format hooks and test a denial with an observable, harmless target. Review earlier work that depended on that response shape. Portable hook files remove some harness-specific glue only when their refusal semantics survive the adapter; the human check belongs at that boundary, not at whether the file loaded.

## Receipt
- https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.37.tgz
- https://registry.npmjs.org/@cursor/sdk/-/sdk-1.0.40.tgz
- https://cursor.com/docs/release-notes/sdk#oct-20-2026
