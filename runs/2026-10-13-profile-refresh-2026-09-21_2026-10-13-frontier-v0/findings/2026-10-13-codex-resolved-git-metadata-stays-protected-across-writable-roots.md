---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-resolved-git-metadata-stays-protected-across-writable-roots
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/a92ccbde5328697894d09935a656f7c5f07a7d3f
    precision: commit
---
# 2026-10-13-codex-resolved-git-metadata-stays-protected-across-writable-roots

Resolved Git metadata stays protected across writable roots. A .git pointer could resolve inside another writable root and lose metadata protection through broader macOS grants or later Linux mounts. Resolved gitdirs, including symlink aliases, now remain read-only exclusions; explicit policy overrides remain possible.

Channel: tagged-release. Half: defect. Date: 2026-09-28 (0.158.0).

Operator consequence: Run 0.158.0 or later for linked worktrees and audit writable-root combinations and aliases. Verify metadata writes are denied while ordinary surrounding files remain writable.

## Receipt
- https://github.com/openai/codex/commit/a92ccbde5328697894d09935a656f7c5f07a7d3f
