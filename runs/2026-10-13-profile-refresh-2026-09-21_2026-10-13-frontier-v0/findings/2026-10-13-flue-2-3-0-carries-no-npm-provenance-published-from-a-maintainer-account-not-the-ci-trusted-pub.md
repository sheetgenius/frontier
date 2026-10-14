---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-flue-2-3-0-carries-no-npm-provenance-published-from-a-maintainer-account-not-the-ci-trusted-pub
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/@flue%2Fruntime/2.3.0
    precision: official_docs
  - url: https://registry.npmjs.org/-/npm/v1/attestations/@flue%2fruntime@2.2.2
    precision: official_docs
  - url: https://github.com/withastro/flue/blob/658325942b0f4eecd888f9698ab0bebb3b749163/.github/workflows/release.yml
    precision: tagged_commit_file
---
# 2026-10-13-flue-2-3-0-carries-no-npm-provenance-published-from-a-maintainer-account-not-the-ci-trusted-pub

2.3.0 carries no npm provenance: published from a maintainer account, not the CI trusted publisher that signed 2.0.7 to 2.2.2. From 2.0.7 to 2.2.2, every `@flue` package checked carried a signed statement tying the tarball to a public commit and a public workflow. 2.3.0 does not. Spot checks found the 2.3.0 tarballs well-formed. There are no raw `workspace:` specifiers (the 2.0.4 failure). Bundled docs are present in cli, runtime and sdk, 95 files each as in 2.2.2 (the 2.0.5 failure). The runtime dist contains the finish-hook early return that the public v2.3.0 source adds and 2.2.2 lacks. That is a consistency check, not a reproducible build.

Channel: tagged-release (registry fact). Half: defect. Date: 2026-10-12.

Operator consequence: If your install policy requires provenance, or your CI verifies attestations, 2.3.0 fails it, and the newest attested version is 2.2.2, which carries the regressions in section 6. Otherwise, pin 2.3.0 exactly and keep lockfile integrity hashes, and recognize that the registry supplies no signed linkage to the public build workflow for this release. The next release's registry document settles it: look for `trustedPublisher` and `dist.attestations`.

## Receipt
- https://registry.npmjs.org/@flue%2Fruntime/2.3.0
- https://registry.npmjs.org/-/npm/v1/attestations/@flue%2fruntime@2.2.2
- https://github.com/withastro/flue/blob/658325942b0f4eecd888f9698ab0bebb3b749163/.github/workflows/release.yml
