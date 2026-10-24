---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-deletion-prompts-narrow-while-unavailable-sandbox-write-fallbacks-are-refused
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
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.309
    precision: github_release
---
# 2026-10-24-claude-code-deletion-prompts-narrow-while-unavailable-sandbox-write-fallbacks-are-refused

Deletion prompts narrow while unavailable sandbox write fallbacks are refused. 299 stops prompting for rm built at runtime inside a script the client cannot read unless CLAUDE_CODE_STRICT_INLINE_SHELL_RM_PROMPT=1 is set. 309 changes the dangerous rm/rmdir prompt in Desktop and VS Code bypass mode to immediate denial with a rewrite hint. For commands excluded from an enabled but unavailable sandbox, writes to sandbox write-list paths now ask and the unsandboxed fallback is refused there.

Channel: tagged-release. Half: both. Date: 2026-10-22.

Operator consequence: Re-test deletion policies that depended on a prompt and decide whether the strict inline-shell setting is needed. Check bypass jobs for the new denial path and exercise sandbox-unavailable writes. Reduced waiting does not mean those commands became approved.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.299
- https://github.com/anthropics/claude-code/releases/tag/v2.1.309
