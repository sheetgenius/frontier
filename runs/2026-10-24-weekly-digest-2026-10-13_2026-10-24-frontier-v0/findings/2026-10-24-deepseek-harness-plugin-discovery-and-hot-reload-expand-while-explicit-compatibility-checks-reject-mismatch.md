---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-plugin-discovery-and-hot-reload-expand-while-explicit-compatibility-checks-reject-mismatch
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/app-boot/src/plugin-compatibility.ts
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-manager/README.md
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-market/README.md
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/@deepseek-ai%2Fdsh-agent/0.2.1-rc.2
    precision: official_docs
  - url: https://registry.npmjs.org/@deepseek-ai%2Fdsh-agent/0.2.1-rc.3
    precision: official_docs
---
# 2026-10-24-deepseek-harness-plugin-discovery-and-hot-reload-expand-while-explicit-compatibility-checks-reject-mismatch

Plugin discovery and hot reload expand, while explicit compatibility checks reject mismatched versions. Custom plugin indexes can be added; none is configured by default. Their metadata is untrusted and unsigned, redirects are rejected, and installation validates the package manifest separately. Hot reload can replace eligible updated packages and otherwise requests restart. Compatibility now prioritizes a package's own `engines.dsh`; without it, every DSH peer range is compared with the running harness version, including prereleases. Published core agent peers are exact rc.2 or rc.3 requirements. A mixed rc.3 runtime/rc.2 plugin installation can therefore be rejected; this proves the mismatch mechanism, not a universal rc.3 startup regression. An exemption binds one exact package version to one exact runtime version. These admission checks belong to DeepSeek's boot/manager code, not an inferred upstream Cordis security guarantee.

Channel: preview-or-beta. Half: both. Date: 2026-10-15.

Operator consequence: Keep the runtime and admitted plugin versions together and inspect the reported incompatible requirement before granting an exemption. Index discovery saves manual searching but does not turn plugins into sandboxed extensions: they remain in-process Host code, and Creator's mutation tools require Full access or per-call approval. Check restart-required results rather than assuming an update is live. Custom integrations also need the rc.1 migrations for removed `./invariant` exports, subpath metadata and the split `activity`/`usage` composer entries. [rc.1 migration list](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.1-rc.1), [manager mutation and exemption implementation](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-manager/src/index.ts). Admission and compatibility replace some hand wiring; code review and version ownership remain the attention cost.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/app-boot/src/plugin-compatibility.ts
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-manager/README.md
- https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/plugin-market/README.md
- https://registry.npmjs.org/@deepseek-ai%2Fdsh-agent/0.2.1-rc.2
- https://registry.npmjs.org/@deepseek-ai%2Fdsh-agent/0.2.1-rc.3
