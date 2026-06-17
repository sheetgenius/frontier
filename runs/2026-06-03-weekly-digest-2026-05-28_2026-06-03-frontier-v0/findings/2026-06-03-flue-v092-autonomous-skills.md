---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-flue-v092-autonomous-skills
source: flue
source_contract: sources/flue.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.9.2"
status: accepted_signal
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "From CHANGELOG.md v0.9.2 (2026-06-03): 'Activate matching skills autonomously. Sessions with configured skills now expose an `activate_skill` tool so agents can load full skill instructions on demand "
    url: https://github.com/withastro/flue/blob/main/CHANGELOG.md
    precision: release_note
---
# Autonomous skill activation

## What Changed

Sessions with configured skills now expose an `activate_skill` tool enabling agents to load full skill instructions on demand before performing matching work. Workspace skills are reread when activated, preserving lazy loading and picking up edits during active sessions.

## Operator Implication

Operators can now configure skills that agents can autonomously activate, enabling dynamic skill loading with lazy evaluation of workspace changes.

## Receipt

- [From CHANGELOG.md v0.9.2 (2026-06-03): 'Activate matching skills autonomously. Sessions with configured skills now expose an `activate_skill` tool so agents can](https://github.com/withastro/flue/blob/main/CHANGELOG.md)
