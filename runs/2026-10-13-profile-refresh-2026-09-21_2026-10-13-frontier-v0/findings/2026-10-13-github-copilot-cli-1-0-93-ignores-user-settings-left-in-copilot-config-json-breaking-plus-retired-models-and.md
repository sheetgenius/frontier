---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-1-0-93-ignores-user-settings-left-in-copilot-config-json-breaking-plus-retired-models-and
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L45
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/1d0d9a86ebdb/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L62
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L62
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md?plain=1#L793
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-1-0-93-ignores-user-settings-left-in-copilot-config-json-breaking-plus-retired-models-and

1.0.93 ignores user settings left in ~/.copilot/config.json (breaking), plus retired models and a docs-only default-model change. 1.0.93 will "Read user settings only from ~/.copilot/settings.json; user-setting keys in ~/.copilot/config.json are ignored" (L45). The docs dropped the migration promise; config.json now holds only internal state such as installed plugins and trusted folders (L62, L138). There were other upgrade costs in window. 1.0.92 removes retired models from the model picker and supported selections (L89). 1.0.91 replaces `/sandbox ca install` with `create` and `trust` (L93). `/worktree new` is documented as deprecated in favor of `/new worktree` (cli-command-reference.md L633). The documented default model is now `claude-sonnet-5.5`.

Channel: tagged-release (L45, L89, L93); docs-only (default-model row, /worktree new deprecation). Half: defect. Date: 2026-10-01 to 2026-10-08.

Operator consequence: Adapt before a fleet moves to 1.0.93 or later. Grep for user settings that provisioning or dotfiles write into `~/.copilot/config.json`, and move them to `settings.json`. That includes sandbox opt-outs such as `allowDevToolAccess: false`, URL allow/deny lists, and a user-level `disableBypassPermissionsMode`; left in place they stop applying silently, and the security-relevant opt-outs go first. `copilot config --list` (1.0.92, L49) prints what `settings.json` holds. Pin `model` if your cost or eval baselines matter, because the documented default moved without a version line. Update scripts that call `/sandbox ca install` or `/worktree new`.

## Receipt
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L45
- https://github.com/github/docs/blob/1d0d9a86ebdb/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L62
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L62
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md?plain=1#L793
