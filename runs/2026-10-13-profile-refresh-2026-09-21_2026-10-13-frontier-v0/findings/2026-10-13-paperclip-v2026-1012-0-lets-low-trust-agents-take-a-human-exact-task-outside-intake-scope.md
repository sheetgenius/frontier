---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-paperclip-v2026-1012-0-lets-low-trust-agents-take-a-human-exact-task-outside-intake-scope
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/LOW-TRUST-PRESETS.md
    precision: tagged_commit_file
  - url: https://github.com/paperclipai/paperclip/commit/0829d94af2a2381d39dfa5eac4b80dac8539dff0
    precision: commit
---
# 2026-10-13-paperclip-v2026-1012-0-lets-low-trust-agents-take-a-human-exact-task-outside-intake-scope

v2026.1012.0 lets low-trust agents take a human exact task outside intake scope. An authenticated board user can direct a low-trust agent through owner chat or exact task assignment outside the normal intake boundary. Dispatch and API authorization recheck the active run and current task using server-owned wake provenance. Plugin sender attribution and an agent assertion do not qualify. The exception permits that exact task, not descendants, a whole project, secrets, runtime management or general instruction/configuration authority. Sandbox and isolated-workspace requirements remain. Owner-chat self-instruction edits are a separate qualified exception described in section 9.

Channel: tagged-release. Half: both. Date: 2026-10-12.

Operator consequence: Audit direct human assignments as explicit intake exceptions. Do not assume low trust means a task can never leave its initial project boundary, or that one human-directed task expands the entire trust scope. Use the live run/task provenance when investigating what it could access.

## Receipt
- https://github.com/paperclipai/paperclip/blob/v2026.1012.0/doc/LOW-TRUST-PRESETS.md
- https://github.com/paperclipai/paperclip/commit/0829d94af2a2381d39dfa5eac4b80dac8539dff0
