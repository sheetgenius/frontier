---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-07-02-agent-flywheel-v0-7-0-tagged-release
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-07-01
  end: 2026-07-02
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0
    precision: github_release
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/tree/edaee4f6ceff772d4f56d42eda65b1d659fead73
    precision: git_commit
---
# 2026-07-02-agent-flywheel-v0-7-0-tagged-release

Agent Flywheel's first Bitter harvest pinned the source to `v0.7.0`, published
2026-06-26, dereferenced to commit `edaee4f6ceff772d4f56d42eda65b1d659fead73`.
Channel: tagged-release. Operator consequence: all claims in this run use the
tagged source rather than the README's moving `main` install URL.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/releases/tag/v0.7.0
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/tree/edaee4f6ceff772d4f56d42eda65b1d659fead73
