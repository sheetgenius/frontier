# Claude Code Source Notes

Watch Claude Code as a provider-native coding environment whose native
capabilities may dissolve work Bitter should not clone.

High-signal areas:

- resume, recap, rewind, plan, and long-running session behavior
- hooks, permission modes, managed settings, and enterprise policy
- subagents, tasks, skills, plugins, and slash commands
- SDK, headless, telemetry, usage, and model-routing changes
- prompt caching, context management, compaction, and memory-like features
- MCP and connector behavior

Do not over-weight:

- tiny TUI fixes unless they affect Bitter terminal UX or adapter robustness
- bug-fix lists without a clear operator consequence
- social summaries that do not link to official docs or changelog entries
- claims about model quality without method, window, and reproducible context

## Security advisory discipline

Anthropic does **not** publish a separate security advisory page or feed
for Claude Code. Security-grade fixes (sandbox bypasses, permission
enforcement gaps, auth-pinning regressions) ship as ordinary entries
in `official_changelog`. Examples documented in the 2026-05-13 → 2026-05-27
window:

- v2.1.149 (2026-05-22): PowerShell built-in `cd` functions defeating
  the workspace boundary undetected; git worktree write allowlist
  over-scoping the main repository root.
- v2.1.148 (2026-05-21): Vertex AI provider bypass closure.
- v2.1.147 (2026-05-21): `forceLoginOrgUUID` and `forceLoginMethod`
  enforcement gaps against third-party-provider and API-key sessions.

Harvest rule for Claude Code: treat any changelog entry whose text
matches advisory-shape language (sandbox bypass, permission enforcement,
auth gap, credential leak, "fixed an issue where ... could read/write
outside ...") as a candidate `security_advisory: true` signal. The
changelog is the de-facto advisory surface; the source contract names
`official_changelog` as priority-1, and that prioritization carries the
advisory weight even when Anthropic does not separately mark the entry.

Harvesters running this provider should not block on a separate
advisory feed appearing — none is planned at time of writing. If a
separate advisory surface emerges in the future, update this notes
file and the source contract `primary_surfaces` accordingly.

Reference: audit note for the 2026-05-27 weekly digest run, doctrine
question #3.
