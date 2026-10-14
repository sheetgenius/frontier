---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-invalid-policy-now-has-distinct-startup-errors-skipped-entries-and-retained-rules
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.53.external.md?generation=1791827231375569
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.46-linux-x86_64?generation=1790805950398756
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.50-linux-x86_64?generation=1791324290710388
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
    precision: official_docs
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/10-hooks.md#L234-L240
    precision: tagged_commit_file
---
# 2026-10-13-grok-build-invalid-policy-now-has-distinct-startup-errors-skipped-entries-and-retained-rules

Invalid policy now has distinct startup errors, skipped entries and retained rules. Some invalid policy now stops startup; other invalid entries are skipped while valid entries remain. The requirements-file startup refusal is documented by 1.0.50, absent from the inspected 1.0.46 guide, with its exact implementation debut unproven. Signed-file edits and parse failures have different consequences; the prior blanket fail-closed account was too broad.

Channel: tagged-release (1.0.50 and 1.0.52); preview-or-beta (disabled-hooks-file fix in enterprise/non-stable 1.0.53). Half: defect. Date: 2026-10-06..2026-10-12 (notes; requirements behavior documented by 1.0.50).

Operator consequence: Use stable 1.0.52 or the separately tested enterprise channel, run grok inspect and read skipped entries. Keep fail_closed=true for signed requirements. Exercise wrong types, malformed individual rules, unreadable files and environment-table errors independently; a typo does not have one universal policy result.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.53.external.md?generation=1791827231375569
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.46-linux-x86_64?generation=1790805950398756
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.50-linux-x86_64?generation=1791324290710388
- https://storage.googleapis.com/grok-build-public-artifacts/cli/grok-1.0.52-linux-x86_64?generation=1791762841427964
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/docs/user-guide/10-hooks.md#L234-L240
