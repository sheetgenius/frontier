---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-v1-worktree-deletion-remains-unresolved-while-v2-requires-a-stored-worktree
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://nvd.nist.gov/vuln/detail/CVE-2026-88624
    precision: official_docs
  - url: https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/worktree/index.ts#L388-L413
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/worktree.ts#L257-L269
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/opencode.ts#L181-L200
    precision: tagged_commit_file
---
# 2026-10-24-opencode-v1-worktree-deletion-remains-unresolved-while-v2-requires-a-stored-worktree

V1 worktree deletion remains unresolved while V2 requires a stored worktree. Historical triage for this first profile: NVD records a report of arbitrary recursive directory deletion through Worktree.remove in v1.18.26. Its linked external report returned 404 to the crosschecker, leaving the entry point, authorization conditions and fixed version unresolved. At v1.19.4, if a caller's canonical directory is absent from git's worktree list but exists, the implementation still calls cleanDirectory, which recursively removes it. That source behavior does not establish an unauthenticated current-version exploit. V2.1.4 instead requires a stored project worktree with a strategy and otherwise returns InvalidDirectoryError; the model-facing removal tool also checks edit. The old report does not prove an exposed V2.1.4 exploit.

Channel: docs-only. Half: defect. Date: 2026-09-24.

Operator consequence: Gate destructive V1 worktree removal and inspect the supplied directory before relying on it. Do not claim that V1.19.4 fixes the historical report simply because it is newer, or apply the V1 report to V2 without proving a reachable path. A recovered technical report plus a versioned reproduction and fixed-release mapping would settle V1 exposure.

## Receipt
- https://nvd.nist.gov/vuln/detail/CVE-2026-88624
- https://github.com/anomalyco/opencode/blob/v1.19.4/packages/opencode/src/worktree/index.ts#L388-L413
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/worktree.ts#L257-L269
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/tool/plugin/opencode.ts#L181-L200
