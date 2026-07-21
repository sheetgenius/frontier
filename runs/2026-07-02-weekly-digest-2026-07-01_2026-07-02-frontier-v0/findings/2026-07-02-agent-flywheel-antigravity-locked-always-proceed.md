---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-antigravity-locked-always-proceed
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
  - url: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/agy_locked.py
    precision: tagged_raw_file
  - url: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/acfs.manifest.yaml
    precision: tagged_raw_file
---
# The locked Antigravity launcher restores ACFS policy on every run

The `v0.7.0` Antigravity launcher writes pinned settings including
`toolPermission: always-proceed`, `artifactReviewPolicy: always-proceed`,
`enableTerminalSandbox: false`, and `allowNonWorkspaceAccess: true`. It launches
the real `agy` with `--dangerously-skip-permissions` and strips user-provided
model, sandbox, and dangerous-skip overrides before invocation. Channel:
tagged-release. Operator consequence: the wrapper normalizes Antigravity toward
ACFS policy, not toward the operator's ad hoc CLI flags. This was observed
during intake, not introduced inside the July 1-2 window.

## Receipt
- https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/agy_locked.py
- https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/acfs.manifest.yaml
