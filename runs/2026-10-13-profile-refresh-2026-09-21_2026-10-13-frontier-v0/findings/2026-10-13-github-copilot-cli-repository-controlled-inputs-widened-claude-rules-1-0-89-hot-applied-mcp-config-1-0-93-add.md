---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-repository-controlled-inputs-widened-claude-rules-1-0-89-hot-applied-mcp-config-1-0-93-add
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L123
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L43
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L6
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L153
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md?plain=1#L959-L965
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L142
    precision: tagged_commit_file
  - url: https://github.com/github/docs/commit/9bc3914265fa9ea8f34b56e69d5e79f7c3d0b415
    precision: commit
  - url: https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L142
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-repository-controlled-inputs-widened-claude-rules-1-0-89-hot-applied-mcp-config-1-0-93-add

Repository-controlled inputs widened: .claude/rules (1.0.89), hot-applied MCP config (1.0.93), /add-dir as a sandbox grant (1.0.96). Four changes widened what a repository or a session can steer. 1.0.89 reads Claude Code rule files `.claude/rules/**/*.md` from the Git root and cwd as custom instructions, scoped by `paths` or `applyTo` frontmatter (L123; docs L959-L965); they join CLAUDE.md, AGENTS.md, `.claude/agents` and `.claude/settings.json`, which the CLI already read. In 1.0.93, MCP server configuration changes apply between turns without restarting the session (L43). In 1.0.96, `/add-dir` grants sandbox access to the added directory for the session (L6), on top of loading its `.github/skills` and `.github/agents` as trusted configuration (cli-command-reference.md L540); the sandbox troubleshooting page had said this did not grant sandbox access (using L142 at the older snapshot), but the 2026-10-13 correction now says it grants session-only read/write access subject to managed policy (closing snapshot L142). In 1.0.89, direct plugin installs recorded as disabled "now stop loading" (L153); before that, a disabled direct install kept loading.

Channel: tagged-release. Half: both. Date: 2026-09-28 to 2026-10-12.

Operator consequence: Re-audit what a cloned repo can steer. `.claude/rules` files are now supported as Copilot instructions. No receipt establishes that they load before folder trust; that behavior is unclaimed. A session's MCP set can change mid-run when config files change. On 1.0.96 or later, treat `/add-dir` as a sandbox grant as well as a trust grant. If you disabled a directly installed plugin before 1.0.89, it was still loading; check `copilot plugin list`. Cross-harness note for synthesis: Copilot keeps absorbing Claude Code's repo config surface, so one repo's rule files now steer two vendors' agents.

## Receipt
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L123
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L43
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L6
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L153
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-command-reference.md?plain=1#L959-L965
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L142
- https://github.com/github/docs/commit/9bc3914265fa9ea8f34b56e69d5e79f7c3d0b415
- https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing.md?plain=1#L142
