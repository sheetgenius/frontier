---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/acfs/zsh/acfs.zshrc
    precision: tagged_raw_file
  - url: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/README.md
    precision: tagged_raw_file
---
# 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases

In `v0.7.0`, ACFS writes shell aliases that put Claude Code behind
`--dangerously-skip-permissions`, Codex behind
`--dangerously-bypass-approvals-and-sandbox`, and Antigravity behind the
`agy-locked` wrapper. The README calls these vibe-mode aliases and frames vibe
mode as throwaway-VPS operation. Channel: tagged-release. Operator consequence:
the one-command bootstrap is also a third-party authority decision for three
tier-1 agents.

## Receipt
- https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/acfs/zsh/acfs.zshrc
- https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/README.md
