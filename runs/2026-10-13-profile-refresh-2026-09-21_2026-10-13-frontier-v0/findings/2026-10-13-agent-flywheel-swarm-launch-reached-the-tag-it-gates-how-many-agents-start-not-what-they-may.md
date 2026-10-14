---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-swarm-launch-reached-the-tag-it-gates-how-many-agents-start-not-what-they-may
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/swarm-launch.md#L1-L21
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/swarm_launch.sh#L184-L188
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L9748-L9765
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs/zsh/acfs.zshrc#L633-L642
    precision: tagged_commit_file
---
# 2026-10-13-agent-flywheel-swarm-launch-reached-the-tag-it-gates-how-many-agents-start-not-what-they-may

Swarm launch reached the tag: it gates how many agents start, not what they may do. v0.10.0 is the first tag with `acfs swarm launch`. It previews by default, with live ACFS and NTM resource admission, then a separate hash-bound `--launch` starts 1 to 32 native Claude and Codex agents in a new tmux session and writes a durable launch receipt. Warnings need `--accept-warnings`; pressure or a hard blocker always stops it. The tag also ships `acfs swarm assign`, which proves non-overlap only among declared file scopes, and fleet capacity probes over SSH. What it does not gate is authority. The doc says NTM's configured commands and "normal permission policy remain in effect", and the NTM config ACFS writes on a fresh host now spells out Codex as `--dangerously-bypass-approvals-and-sandbox` at gpt-6-astra with xhigh effort. The `cod` alias moved to the same model on the tag, so tag and main now agree on the model. Executing launches across several hosts is absent from stable; 99c91d71 is contained in the mirror source tree (section 10).

Channel: tagged-release. Half: both. Date: 2026-10-03.

Operator consequence: Before the first `--launch`, decide what a Codex pane may do. Edit `~/.config/ntm/config.toml` (ACFS writes it only when absent) if you do not want approvals and the sandbox bypassed, and remember the doc's warning that launching "can start paid provider processes", up to 32 per host. The human gate moved from starting each agent to approving one hash-bound launch and reviewing packets before dispatch. It batches launch decisions, but no measured attention saving was established, and the agents still run with the configured bypass flags. `cod` and NTM Codex panes now use gpt-6-astra on the tag; override both in `~/.zshrc.local` and the NTM config if your evals depend on another model.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/swarm-launch.md#L1-L21
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/scripts/lib/swarm_launch.sh#L184-L188
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/install.sh#L9748-L9765
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/acfs/zsh/acfs.zshrc#L633-L642
