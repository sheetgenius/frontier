---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-claude-code-v2-1-191-rewind-now-resumes-a-conversation-from-before-c
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.191
    precision: github_release
---
# 2026-07-01-claude-code-v2-1-191-rewind-now-resumes-a-conversation-from-before-c

v2.1.191: `/rewind` now resumes a conversation from before `/clear`; hooks with comma-separated matchers (e.g. 'Bash,PowerShell') that silently never fired are fixed; managed-settings `forceRemoteSettingsRefresh` now takes effect via MDM/file policy. (channel: tagged-release, 2026-06-24). Operator consequence: Three operator-relevant items: (1) session recovery across /clear improves resume reliability; (2) the comma-matcher hook fix means hooks that appeared configured but never ran will now fire - re-verify hook behavior after upgrade, as this can change enforcement; (3) MDM-pushed managed-settings refresh now actually applies, relevant to enterprise policy enforcement. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.191
