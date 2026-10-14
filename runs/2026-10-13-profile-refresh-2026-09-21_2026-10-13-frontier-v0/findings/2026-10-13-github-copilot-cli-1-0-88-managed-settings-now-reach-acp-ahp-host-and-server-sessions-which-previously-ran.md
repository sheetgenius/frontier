---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-github-copilot-cli-1-0-88-managed-settings-now-reach-acp-ahp-host-and-server-sessions-which-previously-ran
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L172
    precision: tagged_commit_file
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.88
    precision: github_release
  - url: https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L618
    precision: tagged_commit_file
  - url: https://github.com/github/docs/commit/6c2c8cdcebf9fc0887c96220a6a5b616da300983
    precision: commit
  - url: https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L463-L471
    precision: tagged_commit_file
---
# 2026-10-13-github-copilot-cli-1-0-88-managed-settings-now-reach-acp-ahp-host-and-server-sessions-which-previously-ran

1.0.88: managed settings now reach ACP, AHP-host and --server sessions, which previously ran with no managed MCP, permission or plugin policy. The 1.0.88 note says enterprise managed settings "now apply to sessions opened in ACP mode (`copilot --acp`), by AHP hosts (`copilot --ahp-host`), and by the published `--server` session, which previously ran with no managed MCP, permission, or plugin policy". ACP is the mode editors and wrappers use to drive the agent; `--server` is the headless runtime the Copilot SDK connects to. The CLI reference now says managed settings apply across interactive, `-p`, `--acp`, `--ahp-host` and `--server` sessions, "so enterprise MCP, permission, and plugin policy can't be bypassed by starting a session through a different entry point" (L618). Three ACP fixes followed: sessions stay connected when a client pauses reading large responses (1.0.89, L141), custom agents launched through ACP task calls now resolve (1.0.92, L62), and `--context` applies to new and resumed ACP sessions "instead of silently using the default" (1.0.95, L17). In 1.0.94 the CLI shows "update guidance when managed settings request a newer CLI version without blocking normal prompts" (L28), which describes that update-guidance path, not every minimum-version requirement. Docs added on 2026-10-13 separately say managed sandbox settings block connections from CLI versions below 1.0.93; see the new minimum-version item below.

Channel: tagged-release. Half: defect. Date: 2026-09-22.

Operator consequence: Upgrade to 1.0.97 and check the managed policy in each entry point you operate: ACP, Agent Host and SDK server sessions. The release describes these modes as previously lacking managed MCP, permission and plugin policy. 1.0.88 is the entry-point repair; it does not satisfy the closing docs' managed-sandbox minimum of 1.0.93. The older ACP revoke repair preserves an explicit --allow-all-* launch baseline (1.0.81, L413); client per-request approval does not revoke that baseline. These are vendor-described policy semantics, not results from an enforcement probe.

## Receipt
- https://github.com/github/copilot-cli/blob/a3f560eca2c0/changelog.md?plain=1#L172
- https://github.com/github/copilot-cli/releases/tag/v1.0.88
- https://github.com/github/docs/blob/602021b0ba16/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md?plain=1#L618
- https://github.com/github/docs/commit/6c2c8cdcebf9fc0887c96220a6a5b616da300983
- https://github.com/github/docs/blob/d67ced7268844cdf7d856f4eb0b9b2018406da29/content/copilot/reference/enterprise-administrators/enterprise-managed-settings.md?plain=1#L463-L471
