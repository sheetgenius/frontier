---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-v0-7-0-tagged-release
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
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0
    precision: github_release
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/tree/edaee4f6ceff772d4f56d42eda65b1d659fead73
    precision: git_commit
---
# Agent Flywheel v0.7.0 was a pre-window update-reliability release

Agent Flywheel's first Bitter harvest pinned the source to `v0.7.0`, published
2026-06-26, dereferenced to commit `edaee4f6ceff772d4f56d42eda65b1d659fead73`.
The release itself focused on update reliability: Agent Mail readiness recovery,
DCG update repair, Antigravity update-path completion, checksum provenance, and
a release gate reporting 42 verified installers. Channel: tagged-release intake
baseline. Operator consequence: all posture claims in this run use the tagged
source rather than the README's moving `main` install URL. This was not a product
change inside the July 1-2 research window.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/tree/edaee4f6ceff772d4f56d42eda65b1d659fead73
