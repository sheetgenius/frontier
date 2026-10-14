---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-claude-code-mods-ship-on-by-default-in-2-1-286-and-can-approve-tool-calls-deny-rules-hold-over-them
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.287
    precision: github_release
  - url: https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/sec-default/hooks/register.ts#L67-L114
    precision: tagged_commit_file
  - url: https://code.claude.com/docs/en/permissions#extend-permissions-with-hooks
    precision: official_docs
  - url: https://code.claude.com/docs/en/plugins/mods/admin
    precision: official_docs
---
# 2026-10-13-claude-code-mods-ship-on-by-default-in-2-1-286-and-can-approve-tool-calls-deny-rules-hold-over-them

Mods ship on by default in 2.1.286 and can approve tool calls; deny rules hold over them only where the guard loads. A plugin can now carry a mod: JavaScript or TypeScript handlers that run inside the Claude Code process on its events, including `tool.call` (rewrite any tool call), `prompt.submit` and `tool.check` (the permission verdict). Mods run unsandboxed as the user. Several of Claude Code's own features now ship as built-in mods, and the source of four (AGENTS.md loading, `/diff`, telemetry and an organization guard) is public. The permission model moved with it: a mod's `tool.check` answer comes after deny and ask rules and settings hooks and can replace them, so an installed mod can approve a call an ask rule would prompt for or a non-managed PreToolUse hook blocked, and in auto mode its approval skips the classifier. Deny rules hold over a user's mod only where the guard loads (managed settings present, or a Team or Enterprise sign-in); on a Pro or Max laptop, or an API-key, Bedrock, Vertex or Foundry machine without managed settings, a mod can approve a call a deny rule refuses. Mods went from flag-off early access to on by default in 2.1.286, and 2.1.287 stopped honoring the early-access off switch, and one approval lets every mod Claude writes in that session load and reload.

Channel: tagged-release (2.1.286 and 2.1.287, on stable since 2026-10-08 and 2026-10-09 respectively); the guard fixes in 2.1.289 to 2.1.295 are latest only. Half: both. Date: 2026-09-30 (2.1.286, latest: rollout default on, env var still honored); 2026-10-01 (2.1.287: Added Claude Mods, env var ignored); 2026-10-08 (2.1.286 reaches stable); 2026-10-09 (2.1.287 reaches stable).

Operator consequence: Managed fleets: set `pluginConfigs["cc-plugin-sec-default@builtin"].options.allowManagedModsOnly: true` (read only from managed settings, fails closed) and `disableSideloadFlags` (stops `--plugin-dir`, `--plugin-url` and Claude-written mods, and also rejects `--agents` and `--mcp-config`). Check CI invocations before applying that lock. A fleet that set `CLAUDE_CODE_ENABLE_FUNCTION_HOOKS=0` has had mods on since it reached 2.1.287. Stable 2.1.287 lacks the guard fixes from 2.1.289 through 2.1.295, so on stable the option is the control and the guard's deny holding is not; managed fleets that allow mods should set managed `requiredMinimumVersion` to 2.1.295 or later. Unmanaged machines: a deny rule no longer stops an installed mod, so review plugins with `claude plugin validate` (the `hooks:` line names `tool.check`), or use `--safe-mode`/`disableAllHooks`, which do not stop built-in mods. A Read deny never covered a mod's own `$.fs.read`. The review burden moved: approving a plugin now means reading code that runs in-process with permission authority.

## Receipt
- https://github.com/anthropics/claude-code/releases/tag/v2.1.287
- https://github.com/anthropics/claude-code/blob/2301018b1f61/mods/sec-default/hooks/register.ts#L67-L114
- https://code.claude.com/docs/en/permissions#extend-permissions-with-hooks
- https://code.claude.com/docs/en/plugins/mods/admin
