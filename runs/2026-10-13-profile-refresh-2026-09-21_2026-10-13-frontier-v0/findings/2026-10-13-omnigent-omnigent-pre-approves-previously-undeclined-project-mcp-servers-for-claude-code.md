---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omnigent-omnigent-pre-approves-previously-undeclined-project-mcp-servers-for-claude-code
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/harnesses/claude_native/bridge.py#L2555-L2572
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/pull/7946
    precision: merged_pr
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/harnesses/claude_native/bridge.py#L1850-L1945
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.18.0/CHANGELOG.md#L634
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/pull/8509
    precision: merged_pr
---
# 2026-10-13-omnigent-omnigent-pre-approves-previously-undeclined-project-mcp-servers-for-claude-code

Omnigent pre-approves previously undeclined project MCP servers for Claude Code. Since v0.15.0 every Claude Code launch Omnigent makes, including the interactive `omnigent claude` wrapper, writes `enableAllProjectMcpServers: true` into its per-session settings file, to pre-approve project MCP servers; PR #7946 reports on Claude Code 2.1.269 that previously declined servers stay disabled. That is a maintainer observation on one version, not an independently reproduced guarantee for all Claude Code versions. The PR calls this a deliberate trade-off: "Approval means those server processes are started at launch." It joins the pre-accepted bypass consent and the folder-trust pre-seed, and the latter is not session-scoped: it writes `hasTrustDialogAccepted` for the workspace path into Claude Code's global config file. v0.18.0 also switches off auto mode's "teach auto mode about your environment" offer, because only the terminal could answer it. The Codex side showed the cost of driving a harness by keystroke: until v0.17.0 Omnigent switched Codex approval modes by pressing hard-coded digits in Codex's `/permissions` popup, whose rows differ by platform and Guardian flags (Read Only is absent on macOS and Linux "across every release from rust-v0.89.0", per #8509); v0.17.0 reads the rendered labels and waits for Codex's "Permissions updated to" confirmation.

Channel: tagged-release. Half: both. Date: 2026-09-22 (v0.15.0); 2026-10-13 (v0.18.0 auto-mode change); 2026-10-06 (v0.17.0 Codex switcher).

Operator consequence: Local stdio declarations in an unfamiliar repository's `.mcp.json` may start processes on the launch host before tool-call approval; an HTTP MCP declaration is not itself a local command. Read `.mcp.json` before launching on unfamiliar repos, keep such repos on sandboxed hosts, and decline unwanted servers once in Claude Code (the PR says a declined server stays disabled). Inference from code, not reproduced: Edit collaborators can write workspace files (section 4), so a collaborator could add a stdio server that starts at the session's next launch. The meta-harness is removing every startup consent the harness asks for because nobody is at the terminal to answer; that saves attention only where the answer would always have been yes.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/harnesses/claude_native/bridge.py#L2555-L2572
- https://github.com/omnigent-ai/omnigent/pull/7946
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/omnigent/harnesses/claude_native/bridge.py#L1850-L1945
- https://github.com/omnigent-ai/omnigent/blob/v0.18.0/CHANGELOG.md#L634
- https://github.com/omnigent-ai/omnigent/pull/8509
