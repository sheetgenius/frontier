---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-cursor-read-access-needs-a-team-boundary-and-control-over-user-extensions
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/agent/security/run-modes#read-access
    precision: official_docs
  - url: https://cursor.com/docs/reference/sandbox
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/ide#oct-1-2026
    precision: official_docs
  - url: https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
    precision: official_docs
---
# 2026-10-13-cursor-read-access-needs-a-team-boundary-and-control-over-user-extensions

Read Access needs a team boundary and control over user extensions. The documented IDE setting requires 3.23 and adds a Workspace choice that asks before outside reads. System remains the default, including access to ~/.ssh for sandboxed commands. Repository settings replace a user's readBoundary and additionalReadPaths. Team Workspace policy outranks those choices, but member and repository allowlist extensions remain possible unless the admin disables them. The CLI server gate's false fallback does not establish its rollout to any particular account.

Channel: tagged-release (IDE setting requires 3.23; CLI plumbing in e373342); docs-only (admin policy semantics). Half: both. Date: 2026-10-01 (documented IDE 3.23 requirement); 2026-10-13 posture read, corroborated October 14.

Operator consequence: Use team Workspace policy and turn off Read Control User Extensions for an administrator-owned read boundary. Otherwise inspect repository sandbox.json and the effective allowlist. Confirm CLI behavior with a harmless outside-workspace read before depending on the gate. Expect more prompts and manage the allowed paths deliberately; Run Everything bypasses this control.

## Receipt
- https://cursor.com/docs/agent/security/run-modes#read-access
- https://cursor.com/docs/reference/sandbox
- https://cursor.com/docs/release-notes/ide#oct-1-2026
- https://downloads.cursor.com/lab/2026.10.01-e373342/darwin/arm64/agent-cli-package.tar.gz
