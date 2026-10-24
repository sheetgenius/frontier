---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-configured-reasoning-options-generate-model-variants-in-both-majors
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/d12161eecd9886b820fc438921c06a0b3ca58d3b
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/d889cb20447f3b31d88719786f46a1a75ed2e6fa
    precision: commit
---
# 2026-10-24-opencode-configured-reasoning-options-generate-model-variants-in-both-majors

Configured reasoning options generate model variants in both majors. [V1 commit d12161eecd9886b820fc438921c06a0b3ca58d3b](https://github.com/anomalyco/opencode/commit/d12161eecd9886b820fc438921c06a0b3ca58d3b) first ships in v1.19.3, absent from v1.19.2. V1 uses configured reasoning_options; V2 uses capabilities.reasoning. In each major, configured reasoning regenerates the base variants before explicit variant overrides apply. [V2 commit d889cb20447f3b31d88719786f46a1a75ed2e6fa](https://github.com/anomalyco/opencode/commit/d889cb20447f3b31d88719786f46a1a75ed2e6fa) first ships in v2.0.31, absent from v2.0.30.

Channel: tagged-release. Half: capability. Date: 2026-10-16.

Operator consequence: Custom/provider-compatible models can expose reasoning controls through configuration instead of a custom adapter. Recheck variant names and provider request settings when adopting this behavior. This is the V1.19.3 capability omitted even though its release appears in the ledger.

## Receipt
- https://github.com/anomalyco/opencode/commit/d12161eecd9886b820fc438921c06a0b3ca58d3b
- https://github.com/anomalyco/opencode/commit/d889cb20447f3b31d88719786f46a1a75ed2e6fa
