---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-hermes-delegation-docs-still-say-50-and-3-at-v2026-8-18
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/blob/v2026.8.18/website/docs/user-guide/features/delegation.md
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v2026.8.18/hermes_cli/config_defaults.py
    precision: tagged_commit_file
---
# 2026-08-20-hermes-delegation-docs-still-say-50-and-3-at-v2026-8-18

Parent reported stale delegation numbers against v2026.8.16.2. They did not move in v2026.8.18. website/docs/user-guide/features/delegation.md at the tag (blob 15d27cc2) still says maximum concurrency 3 (line 120), iteration limit default 50 (line 188), cost warning 3x3x3=27 (line 361), and the config sample max_iterations: 50 / max_concurrent_children: 3 (lines 445-446). hermes_cli/config_defaults.py at the same tag (blob 29ae25d7) has delegation.max_iterations 250 (line 1840) and max_concurrent_children 10 (line 1865). agent.max_turns is 500 (line 46). The unlimited-max_turns change is not in this tag.

Channel: tagged-release (the mismatch is in the tag). Half: defect.

Operator consequence: do not size a delegation budget from the docs. Dump effective config at the tag you run.

## Receipt
- https://github.com/NousResearch/hermes-agent/blob/v2026.8.18/website/docs/user-guide/features/delegation.md
- https://github.com/NousResearch/hermes-agent/blob/v2026.8.18/hermes_cli/config_defaults.py
