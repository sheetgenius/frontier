---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-heypi-gondolin-0-13-0-overrides-require-explicit-compatibility-checks
source: heypi
source_contract: sources/heypi.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/gondolin/blob/v0.13.0/CHANGELOG.md#L9-L40
    precision: tagged_commit_file
  - url: https://github.com/earendil-works/gondolin/releases/tag/v0.13.0
    precision: github_release
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/package.json#L28-L41
    precision: tagged_commit_file
  - url: https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/src/index.ts#L65-L82
    precision: tagged_commit_file
---
# 2026-10-13-heypi-gondolin-0-13-0-overrides-require-explicit-compatibility-checks

Gondolin 0.13.0 overrides require explicit compatibility checks. The release that fixes hookless internal egress also removes guest XDG_CACHE_HOME, XDG_CONFIG_HOME, XDG_DATA_HOME and UV_CACHE_DIR overrides, lowers upstream Node's minimum to 22.19.0, drops the generated CommonJS shim and makes VM.close() terminal. HTTP-hook secret placeholders now use a shared random marker plus secret name by default, with secretPlaceholderMode: unique to retain unique random placeholders. The same release fixes long-running VM resource/network problems and adds image/cache management. These are upstream changes, not newly shipped heypi behavior.

Channel: tagged-release Gondolin 0.13.0; excluded by heypi beta adapter ^0.12.0. Half: both. Date: 2026-10-04 (upstream release).

Operator consequence: Before an override, test guest cache locations, VM lifecycle, module loading, secret placeholder assumptions and guest-image-dependent features. Do not lower heypi's Gondolin adapter requirement from >=23.6 merely because upstream changed its own minimum. HTTP-hook configuration on the admitted 0.12.0 remains an alternative to a version override. No override compatibility run was performed.

## Receipt
- https://github.com/earendil-works/gondolin/blob/v0.13.0/CHANGELOG.md#L9-L40
- https://github.com/earendil-works/gondolin/releases/tag/v0.13.0
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/package.json#L28-L41
- https://github.com/hunvreus/heypi/blob/436da22ceab0bc4e2db133e8626649b4bf76286d/packages/heypi-runtime-gondolin/src/index.ts#L65-L82
