---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-codex-python-sdk-0-154-0-external-content-with-tool-level-authority-not-user-authority
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/python-v0.154.0
    precision: github_release
  - url: https://github.com/openai/codex/pull/44086
    precision: merged_pr
---
# 2026-09-21-codex-python-sdk-0-154-0-external-content-with-tool-level-authority-not-user-authority

Python SDK 0.154.0: external content with tool-level authority, not user authority. `ExternalMessage` on `run()`/`turn()` lets an embedding app inject content from other agents, tools, or services as function output with tool-level authority. The release says it "does not grant user authorization". There is also `include_turns` on resume/fork and per-turn `turn_service_tier`. Breaking migrations: `HookMetadata` now wraps its handler in `.root`. Previously unknown notifications get typed payloads. Late-joining turn handles do not replay earlier output. It requires CLI >=0.151.0.

Channel: tagged-release (python-v0.154.0, prerelease=false). Half: capability. Date: 2026-09-10.

Operator consequence: Embedders can now route multi-agent or webhook input without spoofing it as a user turn. This is the first SDK-level authority boundary for injected content. Update hook-reading code (`hook.command` -> `hook.root.command`) before upgrading. No Codex primary surface in the window mentions OpenAI's "Agents API" (2026-09-10). The only cross-link is the auto-review page, which sends "custom API or Agents SDK harnesses" to the API guardrails guide.

## Receipt
- https://github.com/openai/codex/releases/tag/python-v0.154.0
- https://github.com/openai/codex/pull/44086
