---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-pi-coding-agent-compaction-docs-now-match-the-package-session-compact-failed-shipped-in-0-84
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/src/core/agent-session.ts#L583-L584
    precision: tagged_commit_file
---
# 2026-09-21-pi-coding-agent-compaction-docs-now-match-the-package-session-compact-failed-shipped-in-0-84

Compaction docs now match the package: `session_compact_failed` shipped in 0.84.3. The parent's docs-ahead-of-package gap is closed. Same release: `/model` and `/thinking` no longer persist globally unless you press Ctrl+S (#5263); compaction and branch-summary requests no longer expose tools to the provider; `auth.json` and `models-store.json` writes stop clobbering admin-set permissions and ACLs (#7779); session shares now include the current system prompt and active tool definitions.

Channel: tagged-release. Half: both. Date: 2026-08-24.

Operator consequence: Upgrade from 0.84.2 if you wrote handlers against the live compaction page; on 0.84.3+ they fire. If you share sessions, note shares now carry your system prompt and tool definitions; check what your prompt contains before sharing.

## Receipt
- https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/src/core/agent-session.ts#L583-L584
