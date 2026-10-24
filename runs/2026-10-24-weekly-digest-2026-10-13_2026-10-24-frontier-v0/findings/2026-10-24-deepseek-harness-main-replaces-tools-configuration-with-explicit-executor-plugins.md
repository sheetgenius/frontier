---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-deepseek-harness-main-replaces-tools-configuration-with-explicit-executor-plugins
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/commit/1c6c5584325b3325cd2d87a7da5877d6794a8203
    precision: commit
  - url: https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/upgrade-guide/v0.2.1-rc.2/tool-executor-plugins/guide.md
    precision: tagged_commit_file
---
# 2026-10-24-deepseek-harness-main-replaces-tools-configuration-with-explicit-executor-plugins

Main replaces tools configuration with explicit executor plugins. Main rejects removed `tools.mode` and `tools.maxParallelSubCalls` fields, moves the parallel-subcall limit to the PTC executor, and stops reading `DSH_TOOLS_MODE`. Native and PTC execution require explicit executor plugins; shipped profiles mount them, while custom compositions must do so. Invalid executor configuration or a missing required runtime provider can stop startup. The guide's rc.2 directory name is not evidence of publication in rc.2 or rc.3.

Channel: main-unreleased. Half: both. Date: 2026-10-21.

Operator consequence: When testing main, migrate custom compositions, environment selectors and extension imports together, then confirm tool results reach the saved session. An explicit execution component offers a cleaner composition seam but adds migration work; no current rc requires this main-only migration.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/commit/1c6c5584325b3325cd2d87a7da5877d6794a8203
- https://github.com/deepseek-ai/deepseek-harness/blob/22ddee3792402c3e70ec5f86a63c3e3e895a2f60/docs/upgrade-guide/v0.2.1-rc.2/tool-executor-plugins/guide.md
