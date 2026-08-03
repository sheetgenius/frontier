---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-03-openhands-release-line-renumbered-below-its-own-predecessor
source: openhands
source_contract: sources/openhands.yml
window:
  start: 2026-07-27
  end: 2026-08-03
status: accepted
confidence: high
evidence:
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.8.0
    precision: github_release
  - url: https://github.com/OpenHands/OpenHands/releases/tag/v1.6.1
    precision: github_release
  - url: https://github.com/OpenHands/OpenHands/compare/1.11.0...v1.8.0
    precision: git_compare
  - url: https://github.com/OpenHands/OpenHands/pull/16133
    precision: merged_pr
---
# 2026-08-03-openhands-release-line-renumbered-below-its-own-predecessor

OpenHands seeded the archived OpenHands/agent-canvas release history into OpenHands/OpenHands, then continued cutting releases on the Agent Canvas number series. The agent line last tagged 1.11.0 on 2026-07-09; the window published v1.6.1 (07-28) through v1.8.0 (07-30), which GitHub marks Latest. Ancestry confirms one line: compare/1.11.0...v1.8.0 returns status ahead, ahead_by 903, behind_by 0. So the release page's Latest is 903 commits newer in history and roughly three minor versions lower in number than a release from three weeks earlier. Each migrated body states its provenance verbatim: 'Migrated from https://github.com/OpenHands/agent-canvas/releases/tag/v1.6.1 to seed Agent Canvas release history in OpenHands/OpenHands. This release migration was performed by an AI agent (OpenHands) on behalf of the user.' PR #16133 disabled tag publish triggers during the migration, so the effect on automation was anticipated. Operator consequence: any check that compares versions rather than dates -- package constraints, Renovate/Dependabot rules, pinned container tags -- reads 1.11.0 > 1.8.0 and treats the newer release as a downgrade. (channel: tagged-release.) No security impact and no concealment is claimed.

## Receipt
- https://github.com/OpenHands/OpenHands/releases/tag/v1.8.0
- https://github.com/OpenHands/OpenHands/releases/tag/v1.6.1
- https://github.com/OpenHands/OpenHands/compare/1.11.0...v1.8.0
- https://github.com/OpenHands/OpenHands/pull/16133
