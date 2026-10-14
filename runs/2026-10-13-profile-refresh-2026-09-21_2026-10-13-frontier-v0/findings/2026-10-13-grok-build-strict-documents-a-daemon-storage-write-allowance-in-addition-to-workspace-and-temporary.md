---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-strict-documents-a-daemon-storage-write-allowance-in-addition-to-workspace-and-temporary
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
---
# 2026-10-13-grok-build-strict-documents-a-daemon-storage-write-allowance-in-addition-to-workspace-and-temporary

Strict documents a daemon storage write allowance in addition to workspace and temporary paths. The documented strict write surface includes a named daemon storage directory in sessions using that backend. This is a current documentation change, not proof that the implementation first gained it in 1.0.52.

Channel: tagged-release (stable artifact documentation). Half: capability. Date: 2026-10-11 (documented by the 1.0.52 artifact, absent from inspected 1.0.50 guide).

Operator consequence: Include the daemon directory when auditing writable session state, alongside CWD, ~/.grok/sessions and temporary directories. Inspect custom profiles for their named run directory and preserve the direct global config/hook protections; strict does not mean workspace-only writes.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.50-linux-x86_64?generation=1791324290710388
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
