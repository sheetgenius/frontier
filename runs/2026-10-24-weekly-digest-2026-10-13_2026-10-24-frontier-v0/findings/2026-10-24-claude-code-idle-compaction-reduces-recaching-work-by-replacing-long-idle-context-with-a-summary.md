---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-idle-compaction-reduces-recaching-work-by-replacing-long-idle-context-with-a-summary
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L504-L508
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.302
    precision: github_release
  - url: https://web.archive.org/web/20261019080610/https://code.claude.com/docs/en/settings-reference
    precision: official_docs
---
# 2026-10-24-claude-code-idle-compaction-reduces-recaching-work-by-replacing-long-idle-context-with-a-summary

Idle compaction reduces recaching work by replacing long idle context with a summary. Eligible interactive terminal conversations on a one-hour prompt-cache TTL, with Anthropic feature-flag fetching available, compact after about 54 idle minutes once context reaches the configured threshold, 200,000 tokens by default, while the computer is awake. A normal 200K context window compacts before reaching that default idle threshold; lowering it can make the session eligible, with a 100,000-token minimum. `idleCompaction: false` disables it; `CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS` changes the threshold. The later settings UI makes the choice discoverable. On return, the model receives a summary instead of all previous context.

Channel: tagged-release. Half: both. Date: 2026-10-14.

Operator consequence: Native compaction can replace a timer or manual cleanup habit around long sessions. For a debugging thread where exact earlier details matter, choose the threshold or disable the behavior and retain external evidence. The expected saving is less full-context recaching; no measured quota reduction or accuracy result was established here. Do not use this mechanism as an explanation for the separate usage-drain complaints.

## Receipt
- https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L504-L508
- https://github.com/anthropics/claude-code/releases/tag/v2.1.302
- https://web.archive.org/web/20261019080610/https://code.claude.com/docs/en/settings-reference
