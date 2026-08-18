---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-codex-config-lockfile-support-removed-on-the-unreleased
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: medium
evidence:
  - url: https://github.com/openai/codex/commit/279b93242cfef379e65da97e87e44b83c5934fd7
    precision: commit
---
# 2026-08-17-codex-config-lockfile-support-removed-on-the-unreleased

Config lockfile support removed on the unreleased line.

Config lockfile support was deleted on the 0.148.0 line, alongside removals of repository-local Codex skills (#38635, 2026-08-14) and the workspace settings gate for apps and plugins (#38994, 2026-08-17).

Channel: preview-or-beta. Ancestry: grep for (#38011) over the rust-v0.147.0...rust-v0.148.0-alpha.21 compare list returns 279b93242cfef379e65da97e87e44b83c5934fd7 'Remove config lockfile support (#38011)' dated 2026-08-11T13:52:48Z. Absent from the rust-v0.146.0...rust-v0.147.0 list; no non-prerelease tag after rust-v0.147.0 exists.

Operator consequence: Watch for the 0.148.0 release notes and check whether these removals are documented as breaking. Config lockfiles and repository-local skills are exactly the mechanisms a team would have standardised on to pin agent behaviour across a fleet; if you depend on either, the upgrade to 0.148.0 will not be routine. None of this is in a stable build yet, so there is nothing to do today except avoid building new process on top of these three surfaces.

## Receipt
- https://github.com/openai/codex/commit/279b93242cfef379e65da97e87e44b83c5934fd7
