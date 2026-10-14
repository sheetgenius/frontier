---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-symlink-writes-now-ask-about-where-they-land-instead-of-their-in-tree-spelling
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1524
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L789
    precision: tagged_commit_file
---
# 2026-10-13-claude-code-symlink-writes-now-ask-about-where-they-land-instead-of-their-in-tree-spelling

Symlink writes now ask about where they land instead of their in-tree spelling. Before 2.1.280 an in-tree spelling could earn automatic write approval when its symlink destination was outside the tree. The check now names and judges the destination. In 2.1.287 shell writes through committed symlinks to sensitive or out-of-tree targets also wait for a person. This is distinct from the older check-to-write race disclosed in GHSA-5j29; the mechanisms and fix dates differ.

Channel: tagged-release (both on stable; 2.1.280 from 2026-09-29). Half: defect. Date: 2026-09-22 (2.1.280), 2026-10-01 (2.1.287).

Operator consequence: Add an out-of-tree symlink destination in a disposable checkout to write-policy tests. Confirm the prompt names that destination in the permission mode your fleet uses. Stable carries both changes; an unlabeled fix still records an approval broader than the visible path.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1524
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L789
