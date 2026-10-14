---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-worktree-commands-gain-jujutsu-compatibility
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
    precision: official_docs
---
# 2026-10-13-grok-build-worktree-commands-gain-jujutsu-compatibility

Worktree commands gain Jujutsu compatibility. The supported worktree command workflow expands beyond the Git-only case described in earlier posture. The receipt is a compatibility announcement, not a tested guarantee for all repository layouts.

Channel: tagged-release (included in stable 1.0.52 notes). Half: capability. Date: 2026-10-09 (1.0.51 note).

Operator consequence: Try bounded worktree creation/listing/removal on a disposable Jujutsu repository with 1.0.52 before using valuable working state. Keep the separately documented non-stable fork-working-directory fix in view.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
