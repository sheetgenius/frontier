---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-passwordless-sudo-vibe-default
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/user.sh
    precision: tagged_raw_file
---
# 2026-07-02-agent-flywheel-passwordless-sudo-vibe-default

The `v0.7.0` user setup library writes `/etc/sudoers.d/90-ubuntu-acfs` with
`$target ALL=(ALL) NOPASSWD:ALL` for the target user in vibe mode, chmods it to
440, and validates the file with `visudo`. Channel: tagged-release. Operator
consequence: an agent command that reaches shell execution on the target account
can inherit root escalation on the intended throwaway host.

## Receipt
- https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/user.sh
