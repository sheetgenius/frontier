---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-claude-code-2-1-251-repository-settings-lose-tracing-env-and-a-symlink-toctou-closes
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.251
    precision: github_release
---
# 2026-09-21-claude-code-2-1-251-repository-settings-lose-tracing-env-and-a-symlink-toctou-closes

2.1.251 (2026-08-28) fixes file tools following a symlink swapped inside the working directory after the permission check, which could read or write outside the approved location. Project settings can no longer enable detailed beta tracing or raw API body logging, a lower-scope tracing endpoint can no longer bypass a managed OTLP collector, and project env can no longer set CLAUDE_CONFIG_DIR or the temp directories. Server-managed settings that terminate sandbox TLS, proxy sandbox traffic or inject credentials now require approval. Claude in Chrome actions always go through Claude Code's permission checks. The auto-mode default offer can no longer be accepted by a stray keypress or by the Enter that sends a prompt. PreModelSwitch and PostModelSwitch hook events are added.

Channel: tagged-release (2.1.251; on stable 2.1.267). Half: both.

Operator consequence: Grep cloned repositories for env and tracing keys in .claude/settings.json; those were live controls until 2.1.251. Rotate anything a project-level raw-body log could have captured. Consent-by-keystroke is now three consecutive fixes (2.1.235, 2.1.236, 2.1.251); do not run interactive builds in unattended panes.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.251
