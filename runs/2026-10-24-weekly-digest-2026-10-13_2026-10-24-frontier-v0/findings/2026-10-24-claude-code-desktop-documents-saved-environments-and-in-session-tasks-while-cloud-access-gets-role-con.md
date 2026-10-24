---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-desktop-documents-saved-environments-and-in-session-tasks-while-cloud-access-gets-role-con
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://web.archive.org/web/20261023144411/https://code.claude.com/docs/en/desktop
    precision: official_docs
  - url: https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L19-L25
    precision: tagged_commit_file
---
# 2026-10-24-claude-code-desktop-documents-saved-environments-and-in-session-tasks-while-cloud-access-gets-role-con

Desktop documents saved environments and in-session tasks, while cloud access gets role controls. The Code tab documents saved local/SSH/cloud environments, parallel sessions and, inside a session, subagents, background shell commands and dynamic workflows in the tasks pane, and worktree choices for isolation. Its current and earlier layouts differ; some third-party deployments retain the earlier layout. Worktree use is optional, not universal isolation. The 310 product notes separately add cloud-session and Remote Control permissions to Enterprise custom roles, with confirmation listing affected roles when access is enabled.

Channel: docs-only. Half: capability. Date: 2026-10-24.

Operator consequence: Test the Code tab as a native supervision surface before building another session dashboard. Cross-session supervision covers Desktop-run local/SSH/WSL sessions, excluding cloud, terminal CLI and VS Code sessions; it cannot replace a dashboard covering those other surfaces. Choose the execution host and worktree policy explicitly. A saved environment saves setup attention; it does not establish permission parity or better results than the CLI. SSH work can outlive a connection, but credential expiry, reconnection rules and Desktop-mediated tools can still stop it. Do not interpret an interface launch as a guarantee of unattended overnight completion.

## Receipt
- https://web.archive.org/web/20261023144411/https://code.claude.com/docs/en/desktop
- https://github.com/anthropics/claude-code/blob/v2.1.310/CHANGELOG.md#L19-L25
