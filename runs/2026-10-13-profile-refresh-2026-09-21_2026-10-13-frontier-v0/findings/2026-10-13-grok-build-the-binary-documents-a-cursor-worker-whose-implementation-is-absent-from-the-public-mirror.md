---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-the-binary-documents-a-cursor-worker-whose-implementation-is-absent-from-the-public-mirror
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell/src/leader/cursor_worker_stub.rs#L1-L24
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell/src/leader/mod.rs#L54-L55
    precision: tagged_commit_file
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.45-linux-x86_64?generation=1790661872193104
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
    precision: official_docs
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/README.md#L31-L35
    precision: tagged_commit_file
---
# 2026-10-13-grok-build-the-binary-documents-a-cursor-worker-whose-implementation-is-absent-from-the-public-mirror

The binary documents a Cursor worker whose implementation is absent from the public mirror. The shipped artifacts expose a packaging/source discrepancy and a documented execution-backend capability for Cursor Cloud Agents. Private Cursor and Grove paths are absent from public history. Source-location strings do not prove every path is reachable. The probes do not establish when this capability was introduced or that no code changed during the window.

Channel: tagged-release (text and source-location strings in inspected 1.0.45, 1.0.46, 1.0.50 and 1.0.52 artifacts); account-gated and off by default. Half: both. Date: 2026-10-13 (packaging observation, not an introduction date).

Operator consequence: Leave worker startup off on credential-bearing hosts until its authority is understood. Leaving any_repo off alone does not establish a repository allowlist because of the documented clone-pool door. Verify both doors and actual command confinement before enabling the worker. Public permission crates are readable, but they are not a complete account of the installed binary.

## Receipt
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell/src/leader/cursor_worker_stub.rs#L1-L24
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-shell/src/leader/mod.rs#L54-L55
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.45-linux-x86_64?generation=1790661872193104
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/README.md#L31-L35
