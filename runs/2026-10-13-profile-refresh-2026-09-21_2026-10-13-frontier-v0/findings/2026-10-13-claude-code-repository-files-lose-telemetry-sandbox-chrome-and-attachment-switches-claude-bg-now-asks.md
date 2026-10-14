---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-repository-files-lose-telemetry-sandbox-chrome-and-attachment-switches-claude-bg-now-asks
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1310
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1015
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1377
    precision: tagged_commit_file
---
# 2026-10-13-claude-code-repository-files-lose-telemetry-sandbox-chrome-and-attachment-switches-claude-bg-now-asks

Repository files lose telemetry, sandbox, Chrome and attachment switches; claude --bg now asks for workspace trust. The 2.1.251 pattern continued: a cloned repository's settings can no longer turn on OpenTelemetry export or content capture, point it at their own endpoint, exempt their commands from a strict sandbox, widen an admin sandbox, enable Claude in Chrome or switch off attachments. Trust gaps closed too: `claude --bg` ran a repository's project hooks before workspace trust until 2.1.281, rules symlinked into `.claude/rules` skipped the external-import approval until 2.1.284, and repository skills and third-party plugins pre-approved their own tools under `allowManagedPermissionRulesOnly` until 2.1.282 and 2.1.284.

Channel: tagged-release (2.1.281 to 2.1.285 on stable; 2.1.290 and 2.1.293 latest only). Half: defect. Date: 2026-09-23 (2.1.281), 2026-09-24 (2.1.282), 2026-09-28 (2.1.284), 2026-09-29 (2.1.285), 2026-10-05 (2.1.290), 2026-10-07 (2.1.293).

Operator consequence: Re-grep the repositories your fleet clones for `OTEL_`, `CLAUDE_CODE_ENABLE_TELEMETRY`, `sandbox`, `excludedCommands` and Chrome keys in `.claude/settings*.json`: they were live controls before 2.1.282 and 2.1.285, and the Chrome and attachment switches stay live on stable until 2.1.290 reaches it. Anyone who ran `claude --bg` in a fresh clone before 2.1.281 executed its hooks without a trust prompt; treat that as code execution on clone. The 2.1.282 startup notice that names ignored telemetry variables is a cheap audit of which repositories tried.

## Receipt
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1310
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1015
- https://github.com/anthropics/claude-code/blob/2301018b1f61/CHANGELOG.md?plain=1#L1377
