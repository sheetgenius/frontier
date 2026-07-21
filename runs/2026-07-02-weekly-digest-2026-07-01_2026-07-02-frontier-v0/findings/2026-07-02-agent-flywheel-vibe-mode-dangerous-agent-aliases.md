---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-vibe-mode-dangerous-agent-aliases
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-07-01
  end: 2026-07-02
observation_kind: intake_baseline
event_date: 2026-06-26
corrected_on: 2026-07-12
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/acfs/zsh/acfs.zshrc#L526-L532
    precision: commit_line_range
  - url: https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/README.md
    precision: tagged_raw_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/install.sh#L5209-L5237
    precision: commit_line_range
---
# Agent Flywheel's dangerous shortcuts are installed in both modes

In `v0.7.0`, ACFS installs and sources one shared zsh configuration in both
`vibe` and `safe` modes. That file defines `cc` with
`--dangerously-skip-permissions`, `cod` with
`--dangerously-bypass-approvals-and-sandbox`, and `agy`/`gmi` through the
`agy-locked` wrapper without checking the selected mode. The README frames those
flags as vibe-mode behavior and says safe mode keeps standard confirmations.
Channel: tagged-release intake baseline. Operator consequence: even on a fresh
host where safe mode skips ACFS's passwordless-sudo write, it does not remove the
dangerous agent shortcuts in this tag. Safe mode also does not revoke prior or
provider-supplied passwordless sudo. This was observed during the July 2 intake,
not introduced inside the July 1-2 window.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/acfs/zsh/acfs.zshrc#L526-L532
- https://raw.githubusercontent.com/Dicklesworthstone/agentic_coding_flywheel_setup/v0.7.0/README.md
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/edaee4f6ceff772d4f56d42eda65b1d659fead73/install.sh#L5209-L5237
