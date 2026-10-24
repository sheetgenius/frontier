---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-unattended-retry-can-bound-a-usage-wait-and-recheck-an-early-limit-lift
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.301
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.305
    precision: github_release
---
# 2026-10-24-claude-code-unattended-retry-can-bound-a-usage-wait-and-recheck-an-early-limit-lift

Unattended retry can bound a usage wait and recheck an early limit lift. 301 adds CLAUDE_CODE_RETRY_WATCHDOG_MAX_USAGE_LIMIT_WAIT_MS to end an unattended retry request when its usage reset is too far away. 305 adds CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS to notice a limit lifted before the advertised reset.

Channel: tagged-release. Half: capability. Date: 2026-10-20.

Operator consequence: Configure native unattended retry before maintaining a usage-limit polling wrapper. Set a maximum wait that matches the job deadline. These controls manage waiting and establish neither the cause nor a fix for separate usage-drain reports.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.301
- https://github.com/anthropics/claude-code/releases/tag/v2.1.305
