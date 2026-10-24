---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-background-restart-preserves-safe-mode-and-remote-mod-revocation-reaches-open-sessions
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.299
    precision: github_release
---
# 2026-10-24-claude-code-background-restart-preserves-safe-mode-and-remote-mod-revocation-reaches-open-sessions

Background restart preserves safe mode and remote mod revocation reaches open sessions. 299 stops restarted or woken background sessions silently leaving safe mode. Remotely disabled installed mods now unload between turns. The printed resume command uses a session ID instead of its name, preventing a crafted name executing when that line is pasted.

Channel: tagged-release. Half: both. Date: 2026-10-14.

Operator consequence: Verify safe mode after restart and remote revocation between turns. Keep launch and resume evidence together rather than assuming a launch-time restriction survived. ID-based resume output removes a reason to maintain a separate name-escaping wrapper.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.299
