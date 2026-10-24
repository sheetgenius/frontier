---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-subagent-environments-and-idle-wakes-gain-separate-opt-in-controls
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/e389b2444c75cbc92d40b2135ca5db300d076979
    precision: commit
  - url: https://github.com/openai/codex/commit/8c076942cb70fba8e5c4732c23f1faabc4aed484
    precision: commit
  - url: https://github.com/openai/codex/commit/66d0de9983e82b266e89ee29523324c9d08a5472
    precision: commit
---
# 2026-10-24-codex-subagent-environments-and-idle-wakes-gain-separate-opt-in-controls

Subagent environments and idle wakes gain separate opt-in controls. [subagent_thread_environments](https://github.com/openai/codex/commit/e389b2444c75cbc92d40b2135ca5db300d076979) inherits configured bindings rather than temporary turn attachments and preserves them across eviction. Separately, [wake_on_agent_messages](https://github.com/openai/codex/commit/8c076942cb70fba8e5c4732c23f1faabc4aed484) can start a new turn in a completed root session; interrupted sessions, Plan mode, and children are excluded. Both flags default off. [MessageLifecycleContributor](https://github.com/openai/codex/commit/66d0de9983e82b266e89ee29523324c9d08a5472) captures publication state and notifies consumption before sampling.

Channel: tagged-release. Half: capability. Date: 2026-10-23.

Operator consequence: Test environment inheritance and post-completion mail as separate contracts before removing reinjection or wake supervisors. Neither opt-in feature establishes recovery from every stalled Goal or every dead host process.

## Receipt
- https://github.com/openai/codex/commit/e389b2444c75cbc92d40b2135ca5db300d076979
- https://github.com/openai/codex/commit/8c076942cb70fba8e5c4732c23f1faabc4aed484
- https://github.com/openai/codex/commit/66d0de9983e82b266e89ee29523324c9d08a5472
