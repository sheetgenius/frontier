---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-gondolin-0-13-0-closes-hookless-internal-network-egress-outside-heypi-s-range
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/gondolin/blob/v0.13.0/CHANGELOG.md#L12
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/gondolin/commit/494cf18b7bd8cef7b63e1ae3665cb770c5ced0de
    precision: commit
  - url: https://github.com/earendil-works/gondolin/releases/tag/v0.13.0
    precision: github_release
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/package.json#L41
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/src/index.ts#L65-L82
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/gondolin/blob/v0.12.0/host/src/http/hooks.ts#L143-L147
    precision: tagged_commit_file
---
# 2026-10-13-heypi-gondolin-0-13-0-closes-hookless-internal-network-egress-outside-heypi-s-range

Gondolin 0.13.0 closes hookless internal-network egress outside heypi's range. Gondolin 0.13.0 blocks guest HTTP/TLS to loopback, private, link-local and other internal ranges even without HTTP hooks. In 0.12.0, the IP check was skipped when httpHooks.isIpAllowed was absent, despite the older network documentation claiming default blocking. heypi's ^0.12.0 range excludes 0.13.0, so ordinary fresh beta installs still select 0.12.0. The adapter installs no hooks itself. Hookless VMs could reach host-local services and cloud metadata endpoints, subject to host routing. No matching public Gondolin advisory was found in the crosscheck's 2026-10-14 searches.

Channel: tagged-release upstream; heypi Gondolin adapter preview-or-beta at 0.3.0-beta.2. Half: defect. Date: 2026-10-04 (upstream release; fix 2026-10-01).

Operator consequence: For heypi Gondolin deployments near private services or cloud metadata, supply createHttpHooks() with blockInternalRanges enabled; the 0.12.0 helper defaults it to true and the adapter forwards the hook. An explicit 0.13.0 dependency override is another source-supported route, but compatibility has not been executed or established. Test the network boundary and the changes listed in section 14. A normal heypi update within the declared range does not obtain this fix.

## Receipt
- https://github.com/earendil-works/gondolin/blob/v0.13.0/CHANGELOG.md#L12
- https://github.com/earendil-works/gondolin/commit/494cf18b7bd8cef7b63e1ae3665cb770c5ced0de
- https://github.com/earendil-works/gondolin/releases/tag/v0.13.0
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/package.json#L41
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/src/index.ts#L65-L82
- https://github.com/earendil-works/gondolin/blob/v0.12.0/host/src/http/hooks.ts#L143-L147
