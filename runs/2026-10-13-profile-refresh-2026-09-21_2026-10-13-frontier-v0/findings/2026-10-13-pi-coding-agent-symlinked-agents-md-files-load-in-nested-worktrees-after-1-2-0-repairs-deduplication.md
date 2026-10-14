---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-pi-coding-agent-symlinked-agents-md-files-load-in-nested-worktrees-after-1-2-0-repairs-deduplication
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/commit/f1b2e77f5b13b2a199b1052cb79c235451afe7d7
    precision: commit
---
# 2026-10-13-pi-coding-agent-symlinked-agents-md-files-load-in-nested-worktrees-after-1-2-0-repairs-deduplication

Symlinked AGENTS.md files load in nested worktrees after 1.2.0 repairs deduplication. A nested worktree whose AGENTS.md symlinked to the main repository's copy could load no project context file. Deduplication now compares the walked directory's real path plus filename rather than the symlink target alone.

Channel: tagged-release. Half: defect. Date: 2026-10-12.

Operator consequence: Upgrade such worktrees to 1.2.0 and verify the intended instructions are loaded. This is an instruction-loading repair, not a change to context files loading outside project trust.

## Receipt
- https://github.com/earendil-works/pi/commit/f1b2e77f5b13b2a199b1052cb79c235451afe7d7
