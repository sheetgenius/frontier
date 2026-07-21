---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-passwordless-sudo-vibe-default
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
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/install.sh#L4861-L4870
    precision: commit_line_range
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/scripts/providers/hetzner-cloud-init.yml#L41-L46
    precision: commit_line_range
---
# Vibe mode writes passwordless sudo; safe mode does not revoke it

The active `v0.7.0` installer writes `/etc/sudoers.d/90-ubuntu-acfs` with
`$TARGET_USER ALL=(ALL) NOPASSWD:ALL` in vibe mode, chmods it to 440, and validates
the file with `visudo`. A safe-mode run skips that write. It does not delete the
file left by an earlier vibe-mode run or revoke another passwordless-sudo rule;
the tagged Hetzner cloud-init example itself creates one. Channel: tagged-release
intake baseline. Operator consequence: safe mode is not a sudo-remediation step.
On a fresh host with no other `NOPASSWD` rule it does not create the ACFS rule, but
an operator changing modes must inspect and remove prior/provider rules separately.
This was an intake baseline, not a July 1-2 product change.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/install.sh#L4861-L4870
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/scripts/providers/hetzner-cloud-init.yml#L41-L46
