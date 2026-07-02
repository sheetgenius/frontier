---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-dcg-hook-fail-open
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/agy_locked.py
    precision: tagged_raw_file
---
# 2026-07-02-agent-flywheel-dcg-hook-fail-open

The Antigravity `dcg` pre-tool hook in `agy_locked.py` emits `allow` if `dcg` is
unavailable or times out, with a fail-open reason. Channel: tagged-release.
Operator consequence: DCG is useful defense in normal operation, but a missing or
timed-out guard does not stop the Antigravity command path.

## Receipt
- https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/agy_locked.py
