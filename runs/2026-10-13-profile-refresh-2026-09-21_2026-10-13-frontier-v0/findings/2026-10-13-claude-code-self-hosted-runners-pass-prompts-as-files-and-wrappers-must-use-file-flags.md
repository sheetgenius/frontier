---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-self-hosted-runners-pass-prompts-as-files-and-wrappers-must-use-file-flags
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1479
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.281
    precision: github_release
---
# 2026-10-13-claude-code-self-hosted-runners-pass-prompts-as-files-and-wrappers-must-use-file-flags

Self-hosted runners pass prompts as files and wrappers must use file flags. A large runner system prompt can now launch without depending on command-line argument length. The private-file delivery changes the contract for wrappers and command hooks that add prompt text.

Channel: tagged-release (on stable). Half: both. Date: 2026-09-23 (2.1.281).

Operator consequence: Change runner integrations to `--system-prompt-file` and `--append-system-prompt-file`, with prompt text in the referenced file. Check wrapper and hook paths before updating runner images. The launch improvement and adapter change are on stable.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1479
- https://github.com/anthropics/claude-code/releases/tag/v2.1.281
