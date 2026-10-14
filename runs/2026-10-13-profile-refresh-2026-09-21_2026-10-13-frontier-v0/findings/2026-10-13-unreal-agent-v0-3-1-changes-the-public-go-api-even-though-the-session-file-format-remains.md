---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-unreal-agent-v0-3-1-changes-the-public-go-api-even-though-the-session-file-format-remains
source: unreal-agent
source_contract: sources/unreal-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/unreallabsai/unreal-agent/commit/2aef4bdccc2d7f44645a7292923624a6b10c0670
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/commit/045a1ff284cd59d85a9d259cca845dcabe00ccb8
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/commit/31f4fdadc54dd5061ae33959bc151d1b649c3a31
    precision: commit
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/tool/tool.go#L25-L37
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/model.go#L58-L63
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/itemjson.go
    precision: tagged_commit_file
  - url: https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/sessionstore/sessionstore.go#L78-L81
    precision: tagged_commit_file
---
# 2026-10-13-unreal-agent-v0-3-1-changes-the-public-go-api-even-though-the-session-file-format-remains

v0.3.1 changes the public Go API even though the session file format remains 2. ResultTranslator.TranslateResult returns the tool-owned tool.Result interface, requiring ToLLMResult(), instead of returning llm.ToolResult directly. ItemReasoning and Reasoning are replaced with ItemProvider and ProviderItem, whose raw payload is authoritative for replay. ResumeState.ExternalInputIDs becomes InputIDs. The legacy decoder upgrades serialized reasoning history; it does not preserve Go source compatibility. Session file format 2 therefore says nothing about whether an embedder's custom translators or history/resume code still compiles.

Channel: tagged-release. Half: both. Date: 2026-10-06.

Operator consequence: Adapt custom translators to the result interface and update history and resume consumers before upgrading the library. Preserve authoritative provider payloads when replaying. Verify session migration separately from Go API migration; they are different compatibility obligations.

## Receipt
- https://github.com/unreallabsai/unreal-agent/commit/2aef4bdccc2d7f44645a7292923624a6b10c0670
- https://github.com/unreallabsai/unreal-agent/commit/045a1ff284cd59d85a9d259cca845dcabe00ccb8
- https://github.com/unreallabsai/unreal-agent/commit/31f4fdadc54dd5061ae33959bc151d1b649c3a31
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/tool/tool.go#L25-L37
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/model.go#L58-L63
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/llm/itemjson.go
- https://github.com/unreallabsai/unreal-agent/blob/v0.3.1/harness/sessionstore/sessionstore.go#L78-L81
