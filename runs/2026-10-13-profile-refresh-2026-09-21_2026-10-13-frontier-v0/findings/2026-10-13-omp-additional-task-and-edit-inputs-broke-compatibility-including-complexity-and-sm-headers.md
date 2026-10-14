---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-omp-additional-task-and-edit-inputs-broke-compatibility-including-complexity-and-sm-headers
source: omp
source_contract: sources/omp.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.3.0
    precision: github_release
  - url: https://github.com/can1357/oh-my-pi/commit/2b4af27b5124359c538f16fccba6c47d8354bc74
    precision: commit
  - url: https://github.com/can1357/oh-my-pi/releases/tag/v18.3.4
    precision: github_release
---
# 2026-10-13-omp-additional-task-and-edit-inputs-broke-compatibility-including-complexity-and-sm-headers

Additional task and edit inputs broke compatibility, including complexity and SM headers. v18.3.0 removed irc.timeoutMs and replaced SM-prefixed edit headers with Edit File, Find and Replace headers. v18.3.4 replaced task.complexity with solutionSpace; spawned-subagent auto effort is based on open-endedness alone rather than mechanical volume.

Channel: tagged-release. Half: both. Date: 2026-09-24 (v18.3.0); 2026-09-27 (v18.3.4).

Operator consequence: Update custom task/edit callers and saved prompts, remove irc.timeoutMs, and test the changed input contract before a version upgrade. Do not infer compatibility from a patch/minor number.

## Receipt
- https://github.com/can1357/oh-my-pi/commit/f89a6db15e9de4db1f08f6eb4ec8d1a901ca07f7
- https://github.com/can1357/oh-my-pi/releases/tag/v18.3.0
- https://github.com/can1357/oh-my-pi/commit/2b4af27b5124359c538f16fccba6c47d8354bc74
- https://github.com/can1357/oh-my-pi/releases/tag/v18.3.4
