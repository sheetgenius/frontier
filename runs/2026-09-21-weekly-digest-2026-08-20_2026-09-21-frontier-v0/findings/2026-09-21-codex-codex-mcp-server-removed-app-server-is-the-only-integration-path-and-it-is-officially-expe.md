---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-codex-codex-mcp-server-removed-app-server-is-the-only-integration-path-and-it-is-officially-expe
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.154.0
    precision: github_release
  - url: https://github.com/openai/codex/pull/42993
    precision: merged_pr
  - url: https://learn.chatgpt.com/docs/changelog
    precision: official_docs
---
# 2026-09-21-codex-codex-mcp-server-removed-app-server-is-the-only-integration-path-and-it-is-officially-expe

`codex mcp-server` removed; app server is the only integration path, and it is officially experimental. The MCP-server mode of Codex (Codex as a tool other agents call) is deleted. Codex as an MCP client (`codex mcp`) stays. The SDK docs (https://learn.chatgpt.com/docs/codex-sdk, retrieved 2026-09-23) point to the app server for "authentication, conversation history, approvals, and streamed agent events". That matches the vendor's "app owns approvals" posture from the parent window. Yet the same vendor's changelog calls that app server unsupported for production.

Channel: tagged-release (removal); docs-only (deprecation notice 2026-08-24, removal notice 2026-09-05, which predates the stable carrying it). Half: both. Date: 2026-08-24 (deprecation, docs-only) -> 2026-09-09 (removed in 0.154.0).

Operator consequence: Anything that launches `codex mcp-server` or `codex-mcp-server` breaks on >=0.154.0. Pin <=0.153.4 or migrate. If you embed Codex, you now build on an interface the vendor labels experimental. Wrap it and pin versions. Treat protocol changes as breaking (see item 6).

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.154.0
- https://github.com/openai/codex/pull/42993
- https://learn.chatgpt.com/docs/changelog
