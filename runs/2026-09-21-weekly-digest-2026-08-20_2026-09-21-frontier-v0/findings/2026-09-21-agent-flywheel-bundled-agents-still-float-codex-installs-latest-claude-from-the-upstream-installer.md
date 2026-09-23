---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-flywheel-bundled-agents-still-float-codex-installs-latest-claude-from-the-upstream-installer
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/acfs.manifest.yaml#L941
    precision: tagged_commit_file
---
# 2026-09-21-agent-flywheel-bundled-agents-still-float-codex-installs-latest-claude-from-the-upstream-installer

Bundled agents still float: Codex installs @latest, Claude from the upstream installer. Checksums of the installer scripts are pinned; the agent
versions those scripts fetch are not. Model defaults for Codex and Antigravity
are pinned in launchers.

Channel: tagged-release. Half: defect. Date: 2026-09-04 (tag read).

Operator consequence: A v0.9.0 install on two different days can land two
different Codex CLIs (released-is-not-merged inherited from upstream). Use
`acfs hold codex --version X` after install if you need fleet parity.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.9.0/acfs.manifest.yaml#L941
