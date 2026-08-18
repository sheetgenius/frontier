---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-deepseek-harness-rc-7-s-actual-contents-plugin-owned-settings-cards-low-reasoning-effort
source: deepseek-harness
source_contract: sources/deepseek-harness.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.7
    precision: github_release
---
# 2026-08-17-deepseek-harness-rc-7-s-actual-contents-plugin-owned-settings-cards-low-reasoning-effort

rc.7's actual contents: plugin-owned settings cards, low reasoning effort, and a Job Panel for Codex and Claude Code subagents.

The first public release note, four days after the repo appeared, covers the range from rc.6 (2026-08-13) to rc.7 (2026-08-17). Capability side: plugins can now register their own settings cards (merge 8f998186a9, branch `feat/plugin-owned-settings-surface`)  --  a real widening of the plugin contract, since a plugin previously could not own UI in the settings surface; Codex and Claude Code subagent tasks are managed through the Job Panel; MCP and ACP gained durable image attachments with nested image forwarding in PTC Mode; and DeepSeek models gained a `low` reasoning effort with `high` still the default (226600147e). Defect side: persistent Bash latency in minimal mode, stack overflows in large-history pagination, sessions lost after max-token truncation, Safari composer cursor misalignment, and a node-pty 1.2-beta upgrade for broader PTY compatibility. One naming change an operator will notice: the English `Code mode` preset is renamed `PTC mode`. The notes are published bilingually, Chinese first.

Channel: preview-or-beta. Ancestry: The release notes belong to tag dsh-v0.1.0-rc.7 (`prerelease: true`), and the named commits are ancestors of it: `compare/dsh-v0.1.0-rc.7...8f998186a9` and `...226600147e` both return `"status":"behind", "ahead_by":0`. The notes close with the compare range `fb82698709c39f1860b0ab0ed147e1fa30c1d5d0...99f6f02fecdb7dff40c3fbc9470f5907c29f74ca`, i.e. everything since rc.6.

Operator consequence: Observe, and if you are already running dsh, take rc.7  --  the max-token truncation fix alone recovers sessions that previously became unusable. Plugin authors should read docs/cookbook/adding-a-settings-card.md before designing configuration UI, because the surface it targets did not exist in rc.6. Note the node-pty dependency is a beta, so terminal behaviour is the first place to look if rc.7 regresses on your platform. And expect the `Code mode` to `PTC mode` rename to break any documentation or automation of yours that names the preset.

## Receipt
- https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.0-rc.7
