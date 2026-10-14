---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-stable-v0-61-0-rewrites-explicit-flash-model-ids
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/29443
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/commit/0e6fa774e01fdeb1c0945536c9d257a7fceac730
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/compare/v0.61.0-preview.0...v0.61.0
    precision: git_compare
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/models.ts#L144-L164
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/config.ts#L3585-L3618
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/core/modelMappingContentGenerator.ts#L44-L90
    precision: tagged_commit_file
---
# 2026-10-13-gemini-cli-stable-v0-61-0-rewrites-explicit-flash-model-ids

Stable v0.61.0 rewrites explicit Flash model IDs. Since v0.61.0 the client rewrites an outgoing gemini-3.5-flash or gemini-3-flash model ID to gemini-3.8-flash, and gemini-3.1-flash-lite to gemini-3.5-flash-lite, when latest-Flash access is enabled. API-key, Vertex and Gateway auth return true for that gate in client code; Google login uses experiment flags. No exposed setting opts these exact IDs out of the mapping. This establishes request rewriting, not a measured served model or improved quality/latency. Other IDs pass through this table unless the separate experimental dynamic-model configuration changes resolution. The v0.61.0 narrative changelog omitted the mapping change while highlighting versioned-model preservation.

Channel: tagged-release. Half: both. Date: 2026-09-23.

Operator consequence: Re-baseline Flash evaluations when upgrading past 0.60.0, even if the configured ID is unchanged. Record the request and returned modelVersion separately; the latter was not observed here. Retaining 0.60.0 also retains this report's older security/reliability defects, so it is not an unqualified remedy. Read preview cherry-picks rather than assuming every stable change had a week of preview exposure.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/29443
- https://github.com/google-gemini/gemini-cli/commit/0e6fa774e01fdeb1c0945536c9d257a7fceac730
- https://github.com/google-gemini/gemini-cli/compare/v0.61.0-preview.0...v0.61.0
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/models.ts#L144-L164
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/config/config.ts#L3585-L3618
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/core/modelMappingContentGenerator.ts#L44-L90
