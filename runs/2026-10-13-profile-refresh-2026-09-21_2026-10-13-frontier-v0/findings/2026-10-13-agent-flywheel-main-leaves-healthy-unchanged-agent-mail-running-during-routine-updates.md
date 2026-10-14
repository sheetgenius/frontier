---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-main-leaves-healthy-unchanged-agent-mail-running-during-routine-updates
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/ba279de19b300f3f153a6f063ca21aafc08a9f62
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/f405ac94b84104ebcbf721fb0e4f6345a0ee154d/scripts/lib/stack.sh#L1861-L1923
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-main-leaves-healthy-unchanged-agent-mail-running-during-routine-updates

Main leaves healthy unchanged Agent Mail running during routine updates. Routine updates previously restarted the shared Agent Mail server even when its binary and unit had not changed. The maintainer reports a midday interruption and more than 90 seconds of reload on large mailboxes. The untagged fix leaves an unchanged healthy service running and still restarts after binary/unit changes, failed readiness, inactivity or missing PID. No service or reload duration was measured here.

Channel: main-unreleased. Half: both. Date: 2026-10-13.

Operator consequence: Schedule stable updates around shared mail use rather than assuming no-op tool updates leave coordination untouched. Watch for a stable release containing conditional restart and verify service readiness after updates.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/ba279de19b300f3f153a6f063ca21aafc08a9f62
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/f405ac94b84104ebcbf721fb0e4f6345a0ee154d/scripts/lib/stack.sh#L1861-L1923
