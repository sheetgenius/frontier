---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-deepseek-harness-a-cli-version-pin-does-not-freeze-ranged-dependencies-in-deepseek-s-vendored-cordis-stack
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/943af81a185ea4d70eda2b36598938857b1f851b
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/vendor/README.md#L5-L40
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.1.5-rc.2
    precision: package_registry
  - url: https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.2.0-rc.2
    precision: package_registry
  - url: https://registry.npmjs.org/@earendil-works%2Fpi-ai
    precision: package_registry
---
# 2026-10-13-deepseek-harness-a-cli-version-pin-does-not-freeze-ranged-dependencies-in-deepseek-s-vendored-cordis-stack

A CLI version pin does not freeze ranged dependencies in DeepSeek's vendored Cordis stack. The 0.2 CLI requests its internal components at exact versions while intentionally permitting selected vendor patch updates. Pinning the CLI version does not freeze dependencies expressed as ranges. Commit a reviewed lockfile; the current rc still permits vendor patch updates. DeepSeek source-vendors, modifies and publishes Cordis from the harness repository. The alpha pi-ai range permits compatible later versions; that is not an observed installation result.

Channel: preview-or-beta; package manifests and registry history. Half: both. Date: 2026-09-22 (vendor releases and 0.1.5-rc.3).

Operator consequence: Replace the prior version-string-only advice with a reviewed lockfile and reproducible install procedure. Record resolved Cordis and pi-ai versions in evaluation baselines. Review DeepSeek's vendor changes when a plugin-lifecycle defect appears; its framework patch train can change a fresh install without a new harness tag. Do not claim exact package totals, duplicate copies or hoisting from manifests alone.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/943af81a185ea4d70eda2b36598938857b1f851b
- https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/vendor/README.md#L5-L40
- https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.1.5-rc.2
- https://registry.npmjs.org/@deepseek-ai%2Fdsh/0.2.0-rc.2
- https://registry.npmjs.org/@earendil-works%2Fpi-ai
