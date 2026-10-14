---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-main-bounds-nightly-retry-windows-and-records-missed-updates
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/94ab0556cc6e70afe10d66ed722871de767e3d45
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/df893064f963fd7135088be19c9c128932bf0cc7
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/68cf92ca40dab944063b1a3b84a5c5986aeb39dc
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/nightly_update.sh#L420-L437
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/nightly_update.sh#L519-L534
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/templates/acfs-nightly-update.timer
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-main-bounds-nightly-retry-windows-and-records-missed-updates

Main bounds nightly retry windows and records missed updates. The resource-gated nightly now checks at most three times, serializes retry windows and retains skip/failure history until full success. Status and doctor expose missed runs and stale successes. Stable still schedules 04:00 local with up to five minutes of jitter, attempts tool/agent updates only when resource gates permit, and disables self-update unless ACFS_NIGHTLY_SELF_UPDATE=true. Holds, backoff, checksum refusal and install failure can prevent changes. A timer firing never guaranteed daily freshness.

Channel: main-unreleased. Half: both. Date: 2026-10-13.

Operator consequence: On stable, inspect execution logs and versions rather than timer activation alone. Watch the next tag for retained retry/health reporting. The branch fix neither forces updates on unsafe hosts nor proves a daily successful update.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/94ab0556cc6e70afe10d66ed722871de767e3d45
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/df893064f963fd7135088be19c9c128932bf0cc7
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/68cf92ca40dab944063b1a3b84a5c5986aeb39dc
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/nightly_update.sh#L420-L437
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/nightly_update.sh#L519-L534
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/templates/acfs-nightly-update.timer
