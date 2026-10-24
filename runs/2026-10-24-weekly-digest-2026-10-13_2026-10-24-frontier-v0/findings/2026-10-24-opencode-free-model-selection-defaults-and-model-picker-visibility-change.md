---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-free-model-selection-defaults-and-model-picker-visibility-change
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/8db638c53ca568028c915e593277b1a14a1e03fe
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/4cce6aef4e6578a2f72afd82b7fdadc9a5733df1
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/a70eaa759b7857f89241c6262dd2cab00fbc3844
    precision: commit
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/model.ts
    precision: tagged_commit_file
---
# 2026-10-24-opencode-free-model-selection-defaults-and-model-picker-visibility-change

Free-model selection defaults and model-picker visibility change. [Default selection begins preferring Big Pickle when only free OpenCode models are available](https://github.com/anomalyco/opencode/commit/8db638c53ca568028c915e593277b1a14a1e03fe), followed by [an explicit preference order](https://github.com/anomalyco/opencode/commit/4cce6aef4e6578a2f72afd82b7fdadc9a5733df1). Both first reach v2.0.31. [Free models also become visible beside paid twins by default](https://github.com/anomalyco/opencode/commit/a70eaa759b7857f89241c6262dd2cab00fbc3844), first v2.1.0. The [v2.1.4 implementation](https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/model.ts) preserves the conditional free-only ordering.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: Pin a provider/model when routing or retention matters. The free-model exclusion flag in section 10 is only half of the selection story. The default ordering change is not proof that every signed-in or explicitly selected session switches models.

## Receipt
- https://github.com/anomalyco/opencode/commit/8db638c53ca568028c915e593277b1a14a1e03fe
- https://github.com/anomalyco/opencode/commit/4cce6aef4e6578a2f72afd82b7fdadc9a5733df1
- https://github.com/anomalyco/opencode/commit/a70eaa759b7857f89241c6262dd2cab00fbc3844
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/core/src/model.ts
