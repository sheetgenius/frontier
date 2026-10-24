---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-automatic-session-deletion-returns-to-explicit-opt
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/968c87f6bc28de96a84763e0004e8b07f85f4e1b
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/config_defaults.py#L2276-L2305
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/prune_advisor.py
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-automatic-session-deletion-returns-to-explicit-opt

Automatic session deletion returns to explicit opt-in. `sessions.auto_prune` defaults to false again. When the operator has not made an explicit choice, low disk space triggers a retention question on interactive surfaces or the owning gateway home channel. `/autoprune on|off|later|status` answers it; on/off persist a decision, later snoozes. The default retention period is 90 inactive days for ended sessions; open, pinned, and mid-turn sessions are excluded. Explicit saved configuration still controls an existing installation.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Set retention policy deliberately for both forensic history and disk capacity. An upgrade changing a default does not erase a previously saved opt-in. The agent can manage routine cleanup after that choice, while the decision to delete history stays with the operator. Keep a separate policy for checkpoint pruning, whose default remains on.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/968c87f6bc28de96a84763e0004e8b07f85f4e1b
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/config_defaults.py#L2276-L2305
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/prune_advisor.py
