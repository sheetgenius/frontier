---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-openclaw-codex-sandbox-stop-can-return-success-while-children-run
source: openclaw
source_contract: sources/openclaw.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/openclaw/openclaw/pull/125908
    precision: merged_pr
---
# 2026-08-20-openclaw-codex-sandbox-stop-can-return-success-while-children-run

PR #125908 merge fd8326c5 (2026-08-18T17:48:11Z) is on main. Terminating a Codex sandbox command could acknowledge a single SIGTERM while a TERM-resistant local wrapper, remote sandbox descendant, or backend lease stayed alive. The fix completes descendant cleanup, TERM-to-KILL, reaping, and backend finalization before termination is acknowledged, and fails closed when a process survives SIGKILL. compare vs v2026.8.1-beta.2 is diverged, ahead_by=1180. Not in v2026.7.1-2. No new GitHub Release or npm publish in this window.

Channel: main-unreleased. The hole is the standing behavior on released Codex sandbox installs. Half: defect | security-relevant.

Operator consequence: on latest, beta, and extended-stable, a successful stop or timeout is not proof the process tree is gone. Check the host after cancelled sandbox execs. The containment is main-only.

## Receipt
- https://github.com/openclaw/openclaw/pull/125908
