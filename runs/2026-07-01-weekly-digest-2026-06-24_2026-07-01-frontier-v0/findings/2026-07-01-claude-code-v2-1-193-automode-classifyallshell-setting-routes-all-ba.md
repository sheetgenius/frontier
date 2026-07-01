---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-01-claude-code-v2-1-193-automode-classifyallshell-setting-routes-all-ba
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-06-24
  end: 2026-07-01
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.193
    precision: github_release
---
# 2026-07-01-claude-code-v2-1-193-automode-classifyallshell-setting-routes-all-ba

v2.1.193: `autoMode.classifyAllShell` setting routes all Bash/PowerShell commands through the auto-mode classifier, and auto-mode denial reasons are now surfaced in transcript, toast, and /permissions recent denials. (channel: tagged-release, 2026-06-25). Operator consequence: Permission-governance lever: operators wanting stricter shell gating can now force every shell command through the classifier rather than only arbitrary-code patterns. Denial reasons becoming visible aids audit of why the agent was blocked. Full receipted detail lives in harvest/watchlist.md.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.193
