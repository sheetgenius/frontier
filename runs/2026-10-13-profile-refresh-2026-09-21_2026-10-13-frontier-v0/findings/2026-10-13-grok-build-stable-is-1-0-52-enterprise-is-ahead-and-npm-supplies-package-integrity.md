---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-grok-build-stable-is-1-0-52-enterprise-is-ahead-and-npm-supplies-package-integrity
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/stable?generation=1791826035416926
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/enterprise?generation=1791828914730794
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
    precision: official_docs
  - url: https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140
    precision: official_docs
  - url: https://registry.npmjs.org/@xai-official/grok/1.0.52
    precision: official_docs
  - url: https://registry.npmjs.org/@xai-official/grok-linux-x64/1.0.52
    precision: official_docs
  - url: https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/npm/grok/package.json#L2
    precision: tagged_commit_file
---
# 2026-10-13-grok-build-stable-is-1-0-52-enterprise-is-ahead-and-npm-supplies-package-integrity

Stable is 1.0.52; enterprise is ahead, and npm supplies package integrity. Stable serves 1.0.52, and enterprise serves 1.0.53, reversing the earlier enterprise lag. Cumulative notes group intermediate changes into apparent stable targets, but do not prove intermediate versions were never stable. The baseline 1.0.40 stable value on 21 September is a reconstruction, not a recovered pointer. npm supplies package integrity, not proof that its binary matches the public source.

Channel: tagged-release (stable artifact channel, no GitHub tag); preview-or-beta (enterprise 1.0.53 and available non-stable builds). Half: capability. Date: 2026-09-22..2026-10-13.

Operator consequence: Install 1.0.52. npm checks the published package integrity; record the version and platform-package digest. Control the CLI updater separately to hold a version. Test enterprise as a channel ahead of stable. Keep alpha 1.0.55 as a morning observation and 1.0.56 as an available non-stable build (section 13), without inventing an end-of-day pointer.

## Receipt
- https://storage.googleapis.com/grok-build-public-artifacts/cli/stable?generation=1791826035416926
- https://storage.googleapis.com/grok-build-public-artifacts/cli/enterprise?generation=1791828914730794
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.52.external.md?generation=1791825995316875
- https://storage.googleapis.com/grok-build-public-artifacts/cli/changelogs/1.0.50.external.md?generation=1791475279605140
- https://registry.npmjs.org/@xai-official/grok/1.0.52
- https://registry.npmjs.org/@xai-official/grok-linux-x64/1.0.52
- https://github.com/xai-org/grok-build/blob/2bdd1d6a6369de0e8c68132ea4539e9abd9e14a8/crates/codegen/xai-grok-pager/npm/grok/package.json#L2
