---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-local-execution-does-not-imply-zero-telemetry-or-uniform-model-retention
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/index.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/util/src/observability/otlp.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/packages/desktop/src/renderer/startup/sentry.ts
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/.github/workflows/publish.yml
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/update/README.md
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/models.mdx
    precision: tagged_commit_file
  - url: https://github.com/anomalyco/opencode/commit/a95d9c0fe46909a0d5ac8dc323fcdce51436604f
    precision: commit
---
# 2026-10-24-opencode-local-execution-does-not-imply-zero-telemetry-or-uniform-model-retention

Local execution does not imply zero telemetry or uniform model retention. At 2.1.4, CLI OTLP logging/tracing returns an empty layer without an explicitly supplied endpoint; desktop can initialize Sentry from build-time DSN variables supplied by its publish workflow. This establishes different paths, not a measurement of what a downloaded binary transmitted. The updater source documents unsampled request events containing IP, user agent, path, method and location metadata, excluding query strings, bodies, cookies and authorization headers. Model traffic is separate again. Console docs list retention/training exceptions, including free models and 30-day retention for some APIs; they do not support a universal zero-retention claim. On October 14 the Cat Jam Free documentation was corrected to no training with 30-day safety retention, in V1.19.1 and V2.0.29. Newer V2 docs have their own current model list. The 2.1.2 `OPENCODE_DISABLE_FREE_MODELS` control removes zero-cost models from OpenCode/Go catalogs, defaults and fallbacks.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Choose the provider, model and gateway deliberately, and disable free-model selection where its terms or routing are unsuitable. Recheck live service terms before sending sensitive material; a tagged documentation snapshot is not a guarantee about a later hosted service deployment. Inspect desktop observability separately from CLI configuration and include update/model-catalog requests in any network audit. The new control reduces model-selection surprises, but pricing, retention and inference quality still require separate evidence. No blanket telemetry-off or local-only claim is supported.

## Receipt
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/cli/src/index.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/util/src/observability/otlp.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/packages/desktop/src/renderer/startup/sentry.ts
- https://github.com/anomalyco/opencode/blob/v2.1.4/.github/workflows/publish.yml
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/update/README.md
- https://github.com/anomalyco/opencode/blob/v2.1.4/services/www/src/docs/content/console/models.mdx
- https://github.com/anomalyco/opencode/commit/a95d9c0fe46909a0d5ac8dc323fcdce51436604f
