---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-acp-permissions-correlate-with-tools-and-stable-v0-64-0-reports-usage
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/29439
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0
    precision: github_release
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L753-L782
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L379-L390
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L483-L489
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/pull/29549
    precision: merged_pr
---
# 2026-10-13-gemini-cli-acp-permissions-correlate-with-tools-and-stable-v0-64-0-reports-usage

ACP permissions correlate with tools and stable v0.64.0 reports usage. Since v0.62.0 ACP clients receive a pending tool_call update before permission requests and a failed update on denial; MCP titles separate the explanation. v0.63.0 resolves sessions before initialization and avoids same-minute filename collisions. Stable v0.64.0 adds PromptResponse.usage fields for input/output/cached-read/thought tokens, usage_update turn/context notifications, and exact-ID session recovery with listener cleanup. The PR's approximate billing savings were not measured here.

Channel: tagged-release. Half: capability. Date: 2026-09-29.

Operator consequence: Editor adapters on 0.64.0 can correlate permission requests with tools and consume usage/context reports without a preview dependency. Recheck request IDs, denial completion and resumed-session identity in the adapter. Use the reported usage for observability, not as independent proof of claimed savings.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/29439
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L753-L782
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L379-L390
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/acp/acpSession.ts#L483-L489
- https://github.com/google-gemini/gemini-cli/pull/29549
