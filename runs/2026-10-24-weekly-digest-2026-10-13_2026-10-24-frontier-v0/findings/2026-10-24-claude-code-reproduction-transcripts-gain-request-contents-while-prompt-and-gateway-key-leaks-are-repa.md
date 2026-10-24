---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-reproduction-transcripts-gain-request-contents-while-prompt-and-gateway-key-leaks-are-repa
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L413-L479
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.299
    precision: github_release
---
# 2026-10-24-claude-code-reproduction-transcripts-gain-request-contents-while-prompt-and-gateway-key-leaks-are-repa

Reproduction transcripts gain request contents while prompt and gateway-key leaks are repaired. Local transcripts now include each API request's system prompt, tools and parameters, improving request reproduction while expanding what a shared transcript contains. A mod-rewritten or dropped prompt no longer leaks its original text through the OTel user-prompt event, interaction span or title request. Version 299 stops third-party gateway keys accompanying several requests to Anthropic, including flag/startup/profile/feedback requests and the managed-settings case. Anthropic API keys remain intentionally sent to Anthropic.

Channel: tagged-release. Half: both. Date: 2026-10-14.

Operator consequence: Revisit diagnostic-export and retention rules before asking colleagues to upload whole session files. Keep redaction on both `prompt` and `prompt_text`; the repaired rewrite path does not remove either field. These named fixes establish specific exposure paths. They do not establish or fix the separate practitioner allegation about personal information in web-request headers.

## Receipt
- https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L413-L479
- https://github.com/anthropics/claude-code/releases/tag/v2.1.299
