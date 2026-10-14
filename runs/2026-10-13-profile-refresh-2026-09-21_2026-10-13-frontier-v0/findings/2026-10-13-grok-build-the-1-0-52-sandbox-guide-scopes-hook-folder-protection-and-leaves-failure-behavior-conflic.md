---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-the-1-0-52-sandbox-guide-scopes-hook-folder-protection-and-leaves-failure-behavior-conflic
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.50-linux-x86_64?generation=1791324290710388
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
    precision: official_docs
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/18-sandbox.md#L26-L61
    precision: tagged_commit_file
---
# 2026-10-13-grok-build-the-1-0-52-sandbox-guide-scopes-hook-folder-protection-and-leaves-failure-behavior-conflic

The 1.0.52 sandbox guide scopes hook-folder protection and leaves failure behavior conflicted. The hook-folder restriction is documented in 1.0.52, absent from the inspected 1.0.50 guide; these receipts do not prove its exact first implementation or a prior exploit. The prior profile's assertion that every sandbox protects Grok config must be narrowed to the named bases and derivatives, excluding devbox. The specific fail-closed requirement must survive the generic warn-and-continue conflict.

Channel: tagged-release (stable artifact documentation); default profile off. Half: defect. Date: 2026-10-11 (documented in 1.0.52, absent from inspected 1.0.50 guide).

Operator consequence: Select a protected base deliberately and inspect startup enforcement. Check descendant package hook folders after sandboxed runs. Use a custom deny list for sensitive files. Do not rely on a blanket fail-open or fail-closed statement until implementation or a controlled runtime failure probe resolves the conflicting guide passages; macOS child networking remains outside the documented network block.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.50-linux-x86_64?generation=1791324290710388
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/18-sandbox.md#L26-L61
