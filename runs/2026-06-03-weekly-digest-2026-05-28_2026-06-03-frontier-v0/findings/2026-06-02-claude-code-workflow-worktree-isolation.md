---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-claude-code-workflow-worktree-isolation
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.161"
status: accepted
change_type: reliability
confidence: high
accessibility_impact: none
actionability: observe
evidence:
  - label: "Bug Fixes: Fixed Workflow agents with `isolation: \"worktree\"` being blocked from editing their own worktree files"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Workflow Agent Worktree File Editing

## What Changed

Fixed Workflow agents with isolation: 'worktree' being blocked from editing their own worktree files

## Operator Implication

Workflow agents can now modify files within their isolated worktree directory, enabling self-modifying automation

## Receipt

- [Bug Fixes: Fixed Workflow agents with `isolation: "worktree"` being blocked from editing their own worktree files](https://code.claude.com/docs/en/changelog)
