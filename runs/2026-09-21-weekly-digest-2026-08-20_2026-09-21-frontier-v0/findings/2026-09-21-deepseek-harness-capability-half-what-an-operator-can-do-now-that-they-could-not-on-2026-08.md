---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-deepseek-harness-capability-half-what-an-operator-can-do-now-that-they-could-not-on-2026-08
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-rc.1
    precision: github_release
---
# 2026-09-21-deepseek-harness-capability-half-what-an-operator-can-do-now-that-they-could-not-on-2026-08

Capability half: what an operator can do now that they could not on 2026-08-20. The harness became drivable from editors (ACP) and scripts (headless NDJSON), gained a remote-workspace mode, and gained a subagent depth limit by default.

Channel: preview-or-beta. Half: capability. Date: 2026-08-27 to 2026-09-17.

Operator consequence: Try ACP and headless NDJSON on the rc pin. Treat SSH remote workspace and Computer Use as alpha-only experiments. The product subagents still default to wrapper-owned non-interactive modes; check them in `--dump-config` after each upgrade, since the wrapped CLIs moved versions.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-rc.1
