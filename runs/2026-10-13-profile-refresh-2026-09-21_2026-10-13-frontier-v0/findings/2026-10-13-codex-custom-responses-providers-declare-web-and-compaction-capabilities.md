---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-codex-custom-responses-providers-declare-web-and-compaction-capabilities
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/c6049ebd9694c941386d85fb3e09acab2af289cb
    precision: commit
---
# 2026-10-13-codex-custom-responses-providers-declare-web-and-compaction-capabilities

Custom Responses providers declare web and compaction capabilities. Responses-compatible providers can set model_providers.<id>.capabilities.external_web_access and remote_compaction. external_web_access=false prevents live-web hosted search; remote_compaction accepts v2 or unsupported, which uses local compaction. Omitted fields preserve existing provider defaults.

Channel: tagged-release. Half: capability. Date: 2026-10-08 (0.162.0).

Operator consequence: Adapter authors can declare actual backend support without posing as the default provider. Test remote and local compaction and hosted-search behavior before selecting these capabilities on 0.162.0 or later.

## Receipt
- https://github.com/openai/codex/commit/c6049ebd9694c941386d85fb3e09acab2af289cb
