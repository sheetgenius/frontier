---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-pi-coding-agent-defaulttools-makes-the-built-in-tool-set-configurable-per-project-the
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/settings.md
    precision: official_docs
---
# 2026-08-17-pi-coding-agent-defaulttools-makes-the-built-in-tool-set-configurable-per-project-the

`defaultTools` makes the built-in tool set configurable per project  --  the closest thing Pi has to a permission boundary.

A new `defaultTools` setting selects which built-in tools are enabled at startup, globally or per project. From docs/settings.md at v0.84.2: "`defaultTools` selects the built-in tools enabled at startup. Extension and SDK custom tools remain enabled... An empty array starts with no built-in tools while preserving extension and SDK custom tools. A project `defaultTools` array replaces the global array." It composes with the existing flags: `--tools` imposes a strict allowlist across all tools, `--no-tools` disables everything, `--no-builtin-tools` drops the built-in defaults, `--exclude-tools` filters the result. The same release fixed a first-cut bug where `defaultTools` dropped extension and SDK custom tools when selecting built-in defaults (commit 541045ae, 2026-08-12).

Channel: tagged-release. Ancestry: Commit 4d9aa837c2ec6e0ebc7599f7e724c7c19c06441e ("feat(coding-agent): add configurable default tools", authored 2026-08-12T13:26:42Z). `gh api repos/earendil-works/pi/compare/v0.84.2...4d9aa837` returned status=behind, behind_by=24  --  ancestor of the v0.84.2 tag. `gh api repos/earendil-works/pi/compare/v0.84.1...4d9aa837` returned status=ahead, ahead_by=113  --  not in v0.84.1. v0.84.2 is stable: prerelease=false, draft=false, published 2026-08-14T10:14:32Z; npm publish 2026-08-14T10:09:06Z as `latest`.

Operator consequence: Try it, and reach for it deliberately if you run Pi over repositories you do not control. Pi ships no sandbox and no permission prompts by design  --  docs/security.md at v0.84.2 states plainly that "Built-in tools can read files, write files, edit files, and run shell commands with the permissions of the pi process." Until now, narrowing that surface meant remembering a CLI flag on every invocation. `defaultTools` moves it into `settings.json`, including per-project, so a repo where the agent should read and edit but never spawn a shell can be configured once with `["read", "edit", "write"]`. This is the single most useful new lever in the window for anyone who has been asking Pi for a permission model.

## Receipt
- https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/settings.md
