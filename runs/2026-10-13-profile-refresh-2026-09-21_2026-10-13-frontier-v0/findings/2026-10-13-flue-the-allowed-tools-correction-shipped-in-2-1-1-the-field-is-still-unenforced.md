---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-the-allowed-tools-correction-shipped-in-2-1-1-the-field-is-still-unenforced
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.1.1
    precision: github_release
  - url: https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/types.ts#L214-L219
    precision: tagged_commit_file
  - url: https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/skills.md#L58-L60
    precision: tagged_commit_file
---
# 2026-10-13-flue-the-allowed-tools-correction-shipped-in-2-1-1-the-field-is-still-unenforced

The `allowed-tools` correction shipped in 2.1.1; the field is still unenforced. The docs and the type comment now match the behavior: a skill's `allowed-tools` lists what its author expects to use and restricts nothing. The fix has left main and is in a release.

Channel: tagged-release (it was main-unreleased when the parent harvest closed). Half: defect. Date: 2026-09-23.

Operator consequence: Behavior did not change, so the earlier re-audit still applies. Any restriction a skill relied on has to live in tool code or an approval gate (section 11).

## Receipt
- https://github.com/withastro/flue/releases/tag/%40flue/runtime%402.1.1
- https://github.com/withastro/flue/blob/v2.3.0/packages/runtime/src/types.ts#L214-L219
- https://github.com/withastro/flue/blob/v2.3.0/apps/docs/src/content/docs/guide/skills.md#L58-L60
