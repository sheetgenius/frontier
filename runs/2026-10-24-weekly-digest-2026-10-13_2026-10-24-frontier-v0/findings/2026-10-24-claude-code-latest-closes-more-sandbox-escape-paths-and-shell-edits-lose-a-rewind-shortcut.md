---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-latest-closes-more-sandbox-escape-paths-and-shell-edits-lose-a-rewind-shortcut
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.299
    precision: github_release
  - url: https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L32-L89
    precision: tagged_commit_file
  - url: https://web.archive.org/web/20261023145040/https://code.claude.com/docs/en/sandboxing
    precision: official_docs
---
# 2026-10-24-claude-code-latest-closes-more-sandbox-escape-paths-and-shell-edits-lose-a-rewind-shortcut

Latest closes more sandbox escape paths, and shell edits lose a rewind shortcut. Version 299 protects `--plugin-dir` code from sandboxed writes before its unsandboxed reload and repairs macOS denied-path symlink resolution and allow-glob root rechecking. Version 309 stops shell startup files running outside the sandbox before each command, protects `--mcp-config` from sandboxed commands and auto-accepted edits, repairs symlinked `denyWrite` globs, and keeps Linux denials on background commands. Additional shell/worktree checks cover redirections, wrapped git commands, locale prefixes and zsh arithmetic. Separately, 309 runs `sed -i` as an ordinary Bash command, whose edits are no longer restored by `/rewind`.

Channel: tagged-release. Half: defect. Date: 2026-10-22.

Operator consequence: Test 310 where sandbox containment is part of the deployment contract; selecting stable currently misses the 309 repairs. Exercise symlink destinations, shell startup and the exact MCP/plugin config paths. Keep a real diff or version-control recovery route for shell edits. A worktree separates files, and a classifier judges tool calls; neither substitutes for an OS boundary around code that must not escape.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.299
- https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L32-L89
- https://web.archive.org/web/20261023145040/https://code.claude.com/docs/en/sandboxing
