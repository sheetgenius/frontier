---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-zero-v2-12-makes-plugin-lifecycle-go-through-hooks-py-and-removes-disabled-capabilities-from
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/a13262324c
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/3400beccac
    precision: commit
---
# 2026-09-21-agent-zero-v2-12-makes-plugin-lifecycle-go-through-hooks-py-and-removes-disabled-capabilities-from

v2.12 makes plugin lifecycle go through hooks.py and removes disabled capabilities from system prompts. Plugin install and uninstall now have one declared hook file for dependencies, init and cleanup, so cleanup is something you can inspect. a13262324c changes only guidance (the a0-create-plugin and a0-manage-plugin skills), so an old execute.py plugin may still run. Separately, prompts no longer advertise tools, delegation or live Browser context that the profile's policy disables. Policy-filtered tool prompts are now the only source.

Channel: tagged-release. Half: capability. Date: 2026-09-09.

Operator consequence: Check plugins you wrote for hooks.py. When you audit what a profile can do, read the policy, not the prompt. The prompt now follows the policy instead of listing everything.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/a13262324c
- https://github.com/agent0ai/agent-zero/commit/3400beccac
