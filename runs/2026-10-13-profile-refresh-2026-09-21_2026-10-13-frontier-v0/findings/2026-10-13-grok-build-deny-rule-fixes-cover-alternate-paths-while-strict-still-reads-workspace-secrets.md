---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-deny-rule-fixes-cover-alternate-paths-while-strict-still-reads-workspace-secrets
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.46.external.md?generation=1790815986081588
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
    precision: official_docs
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-permission-rules/src/policy/path_match.rs#L8-L73
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/18-sandbox.md#L26-L61
    precision: tagged_commit_file
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
    precision: official_docs
---
# 2026-10-13-grok-build-deny-rule-fixes-cover-alternate-paths-while-strict-still-reads-workspace-secrets

Deny-rule fixes cover alternate paths, while strict still reads workspace secrets. The notes describe separate gaps through symlinked cwd, .., dedicated delete tools, Grep, mentions and Auto redirects. Stable 1.0.52 includes the documented corrections and skips startup project instructions resolving outside the repository. Folder-trust gating holds as documentation, without runtime certification. Strict does not convert a Read deny on an in-repository secret into kernel denial.

Channel: tagged-release (changes documented in 1.0.46, 1.0.50, 1.0.51 and 1.0.52, available by stable 1.0.52). Half: defect. Date: 2026-09-30..2026-10-11.

Operator consequence: Upgrade to 1.0.52 and re-test sensitive denies through each affected route. Use strict to narrow reads outside the workspace, and a custom sandbox deny list for specific sensitive files, including secrets inside the workspace. Add --trust only to controlled CI repositories. Inspect the Grok requirements setting rather than assuming an imported Claude bypass lock applies.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.46.external.md?generation=1790815986081588
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-permission-rules/src/policy/path_match.rs#L8-L73
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/18-sandbox.md#L26-L61
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
