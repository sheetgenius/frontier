---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-antigravity-changes-to-gemini-4-argon-late-on-october-13-without-changing-permission-postu
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/787a2359b0e08dac0be9c86559e643f343c941bd
    precision: commit
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/f405ac94b84104ebcbf721fb0e4f6345a0ee154d/scripts/lib/agy_locked.py#L491-L519
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/f405ac94b84104ebcbf721fb0e4f6345a0ee154d
    precision: commit
---
# 2026-10-13-agent-flywheel-antigravity-changes-to-gemini-4-argon-late-on-october-13-without-changing-permission-postu

Antigravity changes to Gemini 4 Argon late on October 13 without changing permission posture. The locked model becomes Gemini 4 Argon (High), with settings, shell guard, NTM template, manifest and readiness expectations moved together. The wrapper strips caller --effort alongside model overrides. Its permission bypass, terminal sandbox and workspace-access policies do not change. The follow-up repairs documentation that had retroactively renamed a historical full E2E; it does not claim that old E2E ran on Argon. No capability benchmark or independent provider run was established.

Channel: main-unreleased. Half: both. Date: 2026-10-13.

Operator consequence: Stable evaluations stay on the old locked model; main evaluations need model-specific acceptance and cannot treat the older complete E2E as qualification for Argon. Do not extend the morning model snapshot to the whole UTC window.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/787a2359b0e08dac0be9c86559e643f343c941bd
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/f405ac94b84104ebcbf721fb0e4f6345a0ee154d/scripts/lib/agy_locked.py#L491-L519
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/f405ac94b84104ebcbf721fb0e4f6345a0ee154d
