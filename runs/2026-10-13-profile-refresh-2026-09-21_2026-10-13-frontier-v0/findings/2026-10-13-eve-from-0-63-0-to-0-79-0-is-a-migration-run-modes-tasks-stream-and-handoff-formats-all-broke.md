---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-eve-from-0-63-0-to-0-79-0-is-a-migration-run-modes-tasks-stream-and-handoff-formats-all-broke
source: eve
source_contract: sources/eve.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/vercel/eve/releases/tag/eve%400.69.0
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.70.0
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.75.0
    precision: github_release
  - url: https://github.com/vercel/eve/releases/tag/eve%400.67.0
    precision: github_release
---
# 2026-10-13-eve-from-0-63-0-to-0-79-0-is-a-migration-run-modes-tasks-stream-and-handoff-formats-all-broke

From 0.63.0 to 0.79.0 is a migration: run modes, tasks, stream and handoff formats all broke, and three releases block handing sessions back. Between the profile's pin and 0.78.0, minor versions replaced object-form sandbox definitions with provider environments (0.64.0), removed the conversation/task run mode and `outputSchema` on agent definitions and replaced `eve dev <url>` with `eve remote connect` (0.67.0), replaced background tasks, removed the `subagent.*` events and hooks, moved Slack `events` to `renderers`, and bumped the message stream to version 26, "which older eve clients reject" (0.69.0), made remote agents check a protocol version (0.69.0, which still serves callers on 0.66 to 0.68), renamed decision and instrumentation APIs (0.72.0), and reserved the `eve` namespace (0.76.0). Three releases changed the session handoff checkpoint: 0.69.0 rejects handoffs across its boundary "in both directions", 0.70.0 changed the checkpoint shape (0.70.1 then let newer deployments import checkpoints written by 0.66.0 and later), and 0.75.0 gives every session a new checkpoint version, "so sessions cannot hand off to deployments running an older version." 0.76.2 added `ctx.session.predecessor` so a session that replaces a stranded one can read the earlier transcript.

Channel: tagged-release. Half: both. Date: 2026-09-22 (eve@0.64.0) to 2026-10-13 (eve@0.79.0).

Operator consequence: Plan 0.63.0 to 0.79.0 as a migration, not a version bump: read the 0.65.0, 0.67.0, 0.69.0, 0.72.0 and 0.76.0 notes, rebuild extensions, upgrade clients with the server, and upgrade remote agents and their callers together. Do not roll back across the 0.69.0, 0.70.0 or 0.75.0 checkpoint boundaries while sessions are live, because they cannot hand off to the older deployment; keep the old deployment up until its sessions end. Also migrate 0.75.0 sandbox lifecycle hooks, experimental schedule providers and payload ownership, and 0.79.0 reporters whose assertion fields became optional. The 0.72.0 evaluation-to-decision rename is an API break, not new custom-model support; model instances were already accepted at 0.63.0. The answer to the contract's stability question is unchanged: sessions, tasks, approvals and sandbox APIs all broke on minors again, so treat eve's API as watch-only.

## Receipt
- https://github.com/vercel/eve/releases/tag/eve%400.69.0
- https://github.com/vercel/eve/releases/tag/eve%400.70.0
- https://github.com/vercel/eve/releases/tag/eve%400.75.0
- https://github.com/vercel/eve/releases/tag/eve%400.67.0
