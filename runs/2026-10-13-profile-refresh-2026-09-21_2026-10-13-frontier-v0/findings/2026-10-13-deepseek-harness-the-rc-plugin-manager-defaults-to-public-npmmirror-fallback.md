---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-the-rc-plugin-manager-defaults-to-public-npmmirror-fallback
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/src/index.ts#L184-L186
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/src/registry.ts#L40-L79
    precision: tagged_commit_file
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/README.md#L50
    precision: tagged_commit_file
---
# 2026-10-13-deepseek-harness-the-rc-plugin-manager-defaults-to-public-npmmirror-fallback

The rc Plugin Manager defaults to public npmmirror fallback. The newly rc-reachable Plugin Manager may ask registry.npmmirror.com when the preceding configured public registry cannot supply a package/version. It is ordered fallback, not fastest-mirror selection. An outside/private registry is queried alone; this is not indiscriminate public leakage of private package lookups.

Channel: preview-or-beta; default at rc.1 and both current heads. Half: both. Date: 2026-09-23 (first rc containing the manager).

Operator consequence: Set fallbackRegistries explicitly, including an empty list if only one approved registry may supply plugins. Include the mirror in package-origin and egress review for live Web installs. This behavior is separate from the CLI's initial npm installation.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/src/index.ts#L184-L186
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/src/registry.ts#L40-L79
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/boot/plugin-manager/README.md#L50
