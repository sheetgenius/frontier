---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-stable-updater-locking-now-excludes-root-and-user-runs-targeting-the-same-home
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/4501dd0a47ccb90f31d1abe98966589df43694a8
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L61-L125
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/updater-locking.md
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-stable-updater-locking-now-excludes-root-and-user-runs-targeting-the-same-home

Stable updater locking now excludes root and user runs targeting the same home. The updater locks the resolved target-home directory before discovery, logging, self-update or component work. Root and target-user invocations against that home now contend; missing prerequisites or lock errors stop work. Busy returns 75 rather than a successful skip. Different target homes can still proceed independently. The guide requires all older updater processes, including queued runs, to finish before mixing in the new protocol. This is cooperative exclusion, not a sandbox against installed tools.

Channel: tagged-release. Half: both. Date: 2026-10-03.

Operator consequence: Teach update automation that 75 means no update ran, distinct from exit 2 partial failure. Drain old updater processes before deploying the new runtime; different lock identities cannot exclude each other across versions.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/4501dd0a47ccb90f31d1abe98966589df43694a8
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/update.sh#L61-L125
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/updater-locking.md
