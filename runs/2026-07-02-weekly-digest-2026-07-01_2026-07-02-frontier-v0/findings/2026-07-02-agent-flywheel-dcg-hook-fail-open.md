---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-dcg-hook-fail-open
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
---
# The Antigravity DCG hook fails open when checks are indeterminate

The Antigravity `dcg` pre-tool hook in `agy_locked.py` emits `allow` when hook
input is malformed, no command can be extracted, `dcg` is unavailable or times
out, or its output does not produce a blocking decision. Channel: tagged-release
intake baseline. Operator consequence: DCG is useful defense in normal operation,
but a failed or indeterminate guard does not stop the Antigravity command path.
This was observed during intake, not introduced inside the July 1-2 window.

## Receipt
- https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/scripts/lib/agy_locked.py
