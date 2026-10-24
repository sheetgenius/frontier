---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-openclaw-headless-agent-exec-dispatches-blocking-policy-hooks-from-stable-10
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/commit/f33247464b02bd0bd04a215158a24150ac1f003a
    precision: commit
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/runtime-plugins.ts
    precision: tagged_commit_file
  - url: https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/hook-runner-global.ts
    precision: tagged_commit_file
---
# 2026-10-24-openclaw-headless-agent-exec-dispatches-blocking-policy-hooks-from-stable-10

Headless agent exec dispatches blocking policy hooks from stable 10.5. Headless `openclaw agent exec` could load a scoped plugin registry without creating the process-wide hook runner, silently skipping a blocking `before_tool_call` plugin. Stable initializes the runner even without a process registry root; dispatch still reads the live scoped registry. This repairs a missing enforcement path, distinct from final-argument binding after approval. The commit includes attributed end-to-end probes; none was rerun here.

Channel: tagged-release. Half: defect. Date: 2026-10-18.

Operator consequence: Upgrade headless policy-plugin hosts to 10.7 and test the actual `openclaw agent exec` entry point with a harmless denied operation. A policy-plugin check through the Gateway alone does not establish that standalone dispatch works.

## Receipt
- https://github.com/openclaw/openclaw/commit/f33247464b02bd0bd04a215158a24150ac1f003a
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/agents/runtime-plugins.ts
- https://github.com/openclaw/openclaw/blob/v2026.10.7/src/plugins/hook-runner-global.ts
