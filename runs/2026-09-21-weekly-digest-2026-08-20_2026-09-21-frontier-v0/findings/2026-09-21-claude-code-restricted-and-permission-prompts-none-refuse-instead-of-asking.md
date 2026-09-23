---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-restricted-and-permission-prompts-none-refuse-instead-of-asking
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.248
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.259
    precision: github_release
  - url: https://code.claude.com/docs/en/cli-reference
    precision: official_docs
---
# 2026-09-21-claude-code-restricted-and-permission-prompts-none-refuse-instead-of-asking

2.1.248 (2026-08-27) added --restricted (CLAUDE_CODE_RESTRICTED=1): it removes the built-in tools that run commands or code and WebFetch unless named in --tools, fences file tools to the working directory, refuses bypassPermissions, refuses cloud sessions, and loads only managed settings and --settings. 2.1.259 (2026-09-02) added --permission-prompts none: anything that would prompt is denied while the active permission mode, including auto mode, keeps deciding. 2.1.268 made PermissionRequest hooks fire under --print; 2.1.269 made stream-json permission_denials include path-scoped Read, Edit and Write denials; 2.1.277 made -p exit 1 on an internal error instead of hanging.

Channel: tagged-release (2.1.248 and 2.1.259; both on stable 2.1.267). Half: capability.

Operator consequence: Use --restricted -p for graders and untrusted-input review jobs; the --tools allowlist is the only way to restore a removed tool. Use --permission-prompts none for cron and CI where an ask must fail closed. Adapters that reconciled permission_denials were undercounting before 2.1.269.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.248
- https://github.com/anthropics/claude-code/releases/tag/v2.1.259
- https://code.claude.com/docs/en/cli-reference
