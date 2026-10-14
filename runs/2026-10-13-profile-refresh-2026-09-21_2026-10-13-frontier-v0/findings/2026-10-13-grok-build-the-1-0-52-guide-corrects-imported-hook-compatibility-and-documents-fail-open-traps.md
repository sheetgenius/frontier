---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-the-1-0-52-guide-corrects-imported-hook-compatibility-and-documents-fail-open-traps
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
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.42.external.md?generation=1790446548796174
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
    precision: official_docs
  - url: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-hooks/src/matcher.rs#L22-L70
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-hooks/src/matcher.rs#L22-L70
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L430
    precision: tagged_commit_file
---
# 2026-10-13-grok-build-the-1-0-52-guide-corrects-imported-hook-compatibility-and-documents-fail-open-traps

The 1.0.52 guide corrects imported-hook compatibility and documents fail-open traps. The stable guide changes the compatibility promise, rather than proving a newly introduced SessionStart regression or historical ineffective Cursor execution. It now explicitly names new/load and rejects native Cursor reply compatibility. The package-root path trap is documented at 1.0.52; its first affected version is unknown. General fail-open behavior has specific exceptions for oversized gate replies and invalid input rewrites.

Channel: tagged-release (shipped 1.0.50/1.0.52 guides and versioned notes). Half: both. Date: 2026-10-11 (1.0.52 documentation; selected notes from 2026-09-26 and 2026-10-09).

Operator consequence: Re-test migrated hooks on 1.0.52: translate SessionStart matchers, convert Cursor entries to Grok-supported matcher groups and point package hooks at scripts that exist. Review package/subfolder hook sources. Make reachable script error paths return explicit deny, while recognizing that a missing script or failed request cannot return one. Do not use a fallible hook as the only boundary.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.50-linux-x86_64?generation=1791324290710388
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.42.external.md?generation=1790446548796174
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.51.external.md?generation=1791580490548989
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
- https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-hooks/src/matcher.rs#L22-L70
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-hooks/src/matcher.rs#L22-L70
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L430
