---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-runner-setup-gains-a-timeout-and-interrupted-remote-tool-outcomes-become-explicit
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.302
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.307
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.309
    precision: github_release
---
# 2026-10-24-claude-code-runner-setup-gains-a-timeout-and-interrupted-remote-tool-outcomes-become-explicit

Runner setup gains a timeout and interrupted remote tool outcomes become explicit. 307 stops checkout hooks after 30 minutes by default and fails session setup; --checkout-hook-timeout-min changes it and 0 disables it. 309 tells the model which tool call a runner move interrupted and marks its outcome unknown. Separately, 302 hosted notes repair a failed scheduled routine restarting from the beginning an hour or more later and potentially duplicating external work.

Channel: tagged-release. Half: both. Date: 2026-10-22.

Operator consequence: Set a deliberate checkout budget and investigate slow setup before extending it. On remote recovery, reconcile the action's external identity before retrying. The unknown-outcome notice improves the decision presented to the agent; it does not make remote effects exactly once.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.302
- https://github.com/anthropics/claude-code/releases/tag/v2.1.307
- https://github.com/anthropics/claude-code/releases/tag/v2.1.309
