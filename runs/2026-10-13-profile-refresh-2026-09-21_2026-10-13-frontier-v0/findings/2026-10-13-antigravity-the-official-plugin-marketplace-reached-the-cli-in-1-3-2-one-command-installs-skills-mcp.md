---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-antigravity-the-official-plugin-marketplace-reached-the-cli-in-1-3-2-one-command-installs-skills-mcp
source: antigravity
source_contract: sources/antigravity.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.2/CHANGELOG.md?plain=1#L9
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L10
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L11
    precision: tagged_commit_file
  - url: https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L9
    precision: tagged_commit_file
  - url: https://web.archive.org/web/20261010222428/https://antigravity.google/docs/marketplace
    precision: official_docs
---
# 2026-10-13-antigravity-the-official-plugin-marketplace-reached-the-cli-in-1-3-2-one-command-installs-skills-mcp

The official plugin marketplace reached the CLI in 1.3.2: one command installs skills, MCP servers, subagents, rules, hooks and agent-runnable binaries. 1.3.2 adds `/plugin` as "an interactive manager for the official Antigravity plugin marketplace" and `agy plugin install <plugin-name>@antigravity-plugins-official` from the shell. Plugins bundle "skills, MCP servers, subagents, rules, and hooks", can "ship command-line tools in a `bin/` folder that the agent can run by name", get a per-plugin `PLUGIN_DATA` folder, and show a settings form before turning on. 1.3.3 lets any MCP server mark a tool always loaded with `_meta: {"antigravity/alwaysLoad": true}` so the agent gets it directly, and lets plugins declare subagents in a root `agents.json`. 1.3.4 fixes `agy plugin list` showing only imported plugins; it now lists marketplace installs with version and enabled state and takes `--json`. 1.3.1 stops marketplace installs overwriting a plugin folder that came from a different source, and 1.2.11 starts plugins dropped into `~/.gemini/config/plugins` disabled when their MCP server needs configuration. The marketplace docs add that plugins installed in Antigravity 2.0 "are automatically updated" and appear in the CLI, and that `agy plugin install https://github.com/<owner>/<repo>` installs from any GitHub repository.

Channel: tagged-release; cross-surface plugin sync and GitHub-URL installs are docs-only. Half: both. Date: 2026-10-08 (1.3.2), with 1.2.11, 1.3.1, 1.3.3 and 1.3.4.

Operator consequence: Installing a plugin is installing code: its hooks run on lifecycle events, its MCP servers start, and its `bin/` tools become commands the agent can call by name; under `always-proceed`, the mode `--dangerously-skip-permissions` uses, every plugin MCP tool has run without a prompt since 1.1.21. Inventory with `agy plugin list --json` on 1.3.4, because earlier builds hid marketplace installs from that list. Plugins installed through the desktop app update themselves and change what the CLI loads without any CLI action, so disable the ones you need to audit. Review MCP servers you did not write for the `alwaysLoad` flag. The capability half is real: a versioned, one-command install replaces hand-copied skills and MCP config.

## Receipt
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.2/CHANGELOG.md?plain=1#L9
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L10
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.3/CHANGELOG.md?plain=1#L11
- https://github.com/google-antigravity/antigravity-cli/blob/1.3.4/CHANGELOG.md?plain=1#L9
- https://web.archive.org/web/20261010222428/https://antigravity.google/docs/marketplace
