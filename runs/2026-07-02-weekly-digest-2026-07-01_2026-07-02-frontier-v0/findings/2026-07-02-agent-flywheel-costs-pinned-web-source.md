---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-costs-pinned-web-source
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-07-01
  end: 2026-07-02
observation_kind: intake_baseline
event_date: 2026-06-26
corrected_on: 2026-07-12
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/apps/web/app/page.tsx#L819-L873
    precision: commit_line_range
---
# Agent Flywheel publishes a reference budget, not an install requirement

The `v0.7.0` web app source presents a project-authored reference budget: Cloud
VPS at `$40-56/month`, Claude Max at `$200/month` with a `$400` two-account note,
ChatGPT Pro at `$200/month`, and an estimated total of `$440-656/month`. Channel:
tagged-release intake baseline. Operator consequence: this is an attributed
example stack, not independent pricing or a technically enforced minimum for the
installer. The high end assumes the two-account Claude line. This was observed
during intake, not introduced inside the July 1-2 window.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/apps/web/app/page.tsx#L819-L873
