---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-tool-text-fields-gain-a-non-configurable-65536-byte-cap
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/29451
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/constants.ts#L18
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/scheduler/tool-executor.ts#L202-L213
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/scheduler/tool-executor.ts#L320-L405
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/tool-utils.ts#L185-L278
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/context/chatCompressionService.ts#L495-L509
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.60.0/packages/core/src/scheduler/tool-executor.ts#L200-L262
    precision: tagged_commit_file
---
# 2026-10-13-gemini-cli-tool-text-fields-gain-a-non-configurable-65536-byte-cap

Tool text fields gain a non-configurable 65536-byte cap. A 65,536-byte cap now applies to individual handled text strings, parts and response fields in the truncation path. It is not an aggregate ceiling on every result: two 40 KB text parts can both survive, binary/non-plain objects are outside the recursive string treatment, and experimental context management takes a separate distiller branch. A truncated field keeps its head with the explanatory suffix inside the byte budget. Saving the original is best-effort; disk errors are swallowed and some calls have no saved path. The old truncateToolOutputThreshold setting cannot raise this constant. The PR's 512 KB/50,000-token compression watermark is not implemented; compression uses a configured fraction of model context, default 0.5. The compression service also protects three recent tool turns and reduces older eligible responses to 2 KB previews, with retrieval exceptions.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: Re-test large file/web/MCP text fields and workflows that previously raised or disabled truncation. Paginate or explicitly preserve full output outside model history when completeness matters. Check that a saved path exists before relying on it; a truncation note is not a durable receipt. The cap bounds handled text without promising either an aggregate payload budget or recoverable omitted content.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/29451
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/constants.ts#L18
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/scheduler/tool-executor.ts#L202-L213
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/scheduler/tool-executor.ts#L320-L405
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/utils/tool-utils.ts#L185-L278
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/core/src/context/chatCompressionService.ts#L495-L509
- https://github.com/google-gemini/gemini-cli/blob/v0.60.0/packages/core/src/scheduler/tool-executor.ts#L200-L262
