---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-the-preview-removes-the-assisted-experimental-gate-and-changes-background-task-waiting
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.104-0
    precision: github_release
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.104-2
    precision: github_release
  - url: https://registry.npmjs.org/@github/copilot/1.0.104-2
    precision: official_docs
---
# 2026-10-24-github-copilot-cli-the-preview-removes-the-assisted-experimental-gate-and-changes-background-task-waiting

The preview removes the Assisted experimental gate and changes background-task waiting. 1.0.104-0 exposes Assisted Permissions without enabling experimental mode and falls back to Auto's default preference when a saved preference becomes unavailable. 1.0.104-2 repairs managed `fusion` startup and applies fusionTier. Interactive and SDK Autopilot sessions keep waiting for attached background tasks past `COPILOT_TASK_WAIT_TIMEOUT_SECONDS`; `-p --autopilot` still honors that timeout. 1.0.104-1 has only a generic release body.

Channel: preview-or-beta. Half: both. Date: 2026-10-24.

Operator consequence: Keep these changes out of stable rollout claims. A bounded preview trial can check managed Auto startup, permission-mode availability, and background-task completion. Removing the experimental prerequisite does not mean Assisted is the default permission mode. An interactive or SDK watchdog that relied on the task-wait timeout needs its own explicit stop condition; unattended prompt-mode semantics remain different.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.104-0
- https://github.com/github/copilot-cli/releases/tag/v1.0.104-2
- https://registry.npmjs.org/@github/copilot/1.0.104-2
