---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-pi-1-x-does-not-reach-heypi-s-0-79-x-dependency-range
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent/0.79.10
    precision: official_docs
  - url: https://github.com/earendil-works/pi/releases/tag/v1.0.0
    precision: github_release
  - url: https://github.com/earendil-works/pi/releases/tag/v0.80.8
    precision: github_release
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/pnpm-lock.yaml#L404
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/model.ts#L1-L13
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/pi.ts#L147-L152
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/sdk.ts#L48-L55
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent/1.2.0
    precision: official_docs
---
# 2026-10-13-heypi-pi-1-x-does-not-reach-heypi-s-0-79-x-dependency-range

Pi 1.x does not reach heypi's 0.79.x dependency range. Pi shipped 1.0.0 and 1.2.0 in the window without an accompanying heypi release. heypi 0.3.0-beta.2 declares >=0.79.6 <0.80.0; its repository lockfile and an ordinary fresh resolution select 0.79.10. Existing consumer lockfiles can retain another allowed 0.79.x version. Pi 0.79.10 declares Node >=22.19.0 in its registry record and published package.json, so the core's own Node >=22 declaration is not the complete fresh dependency requirement. The lockfile establishes resolution, not a successful compatibility test. Pi 0.80.8 documents removal of AuthStorage and replacement of authStorage/modelRegistry session options with modelRuntime. The checked 0.80.8 and 1.2.0 exports cannot satisfy heypi's named ESM import. heypi's re-exported tool/extension APIs also come from its embedded Pi line. The four published Pi advisory ranges checked by the verifier exclude 0.79.10; that is not a complete transitive vulnerability assessment.

Channel: tagged-release upstream; embedded heypi preview-or-beta. Half: both. Date: 2026-10-01 (Pi 1.0.0); Pi 1.2.0 published 2026-10-12.

Operator consequence: The old profile's claim that Pi breaking changes automatically reach heypi was backwards for normal npm resolution. The narrow range blocks both those releases and their improvements. Do not lift Pi to 1.2.0 with an override: the checked exports would fail ESM linking, and session construction needs a port. Use the API of the Pi version actually resolved, and assess ecosystem extension compatibility individually. A heypi release porting the imports and session API would settle the integration gap; no runtime compatibility test was run here.

## Receipt
- https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent/0.79.10
- https://github.com/earendil-works/pi/releases/tag/v1.0.0
- https://github.com/earendil-works/pi/releases/tag/v0.80.8
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/package.json#L64
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/pnpm-lock.yaml#L404
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/model.ts#L1-L13
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi/src/pi.ts#L147-L152
- https://github.com/earendil-works/pi/blob/v1.2.0/packages/coding-agent/src/core/sdk.ts#L48-L55
- https://registry.npmjs.org/%40earendil-works%2Fpi-coding-agent/1.2.0
