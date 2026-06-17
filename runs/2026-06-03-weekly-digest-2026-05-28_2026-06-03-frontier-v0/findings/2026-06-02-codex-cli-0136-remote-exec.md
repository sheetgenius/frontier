---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-codex-cli-0136-remote-exec
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "0.136.0"
status: accepted_signal
change_type: capability
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "June 2, 2026: Codex CLI 0.136.0 - Key improvements include markdown rendering enhancements, thread archiving capability, app-server integrations can resume threads with initial turns page, and stabili"
    url: https://developers.openai.com/codex/changelog
    precision: release_note
---
# Codex CLI 0.136.0 - Session archiving and remote execution improvements

## What Changed

CLI 0.136.0 includes markdown rendering enhancements keeping web links clickable with OSC 8 metadata, thread archiving capability with archive protection for sessions, improved Windows sandboxing reliability and PowerShell execution. Remote exec-server authentication now supports API-key registration for approved hosts. App-server integrations can resume threads with initial turns page.

## Operator Implication

Operators can now manage session lifecycle with archiving, benefit from more reliable Windows execution for cross-platform deployments, and leverage API-key registration for secure remote host authentication without per-session credential entry.

## Receipt

- [June 2, 2026: Codex CLI 0.136.0 - Key improvements include markdown rendering enhancements, thread archiving capability, app-server integrations can resume thre](https://developers.openai.com/codex/changelog)
