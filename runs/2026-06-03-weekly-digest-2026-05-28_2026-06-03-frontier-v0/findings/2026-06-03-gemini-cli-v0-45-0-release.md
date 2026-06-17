---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-03-gemini-cli-v0-45-0-release
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "v0.45.0"
status: accepted_signal
change_type: reliability
confidence: high
accessibility_impact: low
actionability: observe
evidence:
  - label: "Release v0.45.0 published 2026-06-03T01:05:14Z includes fixes for Termux loops, session context filtering, PTY resize EBADF suppression, and MCP blacklist bypass prevention per release notes"
    url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0
    precision: release_note
---
# v0.45.0 Stable Release

## What Changed

Stable release combining PTY hardening, editor validation, context filtering, blacklist bypass prevention, and routing fixes. 18 commits addressing terminal environment issues (Termux relaunch/resize loops), session context cleanup during history resumption, sequential tool execution for update_topic, MCP security controls, and Vim keybinding improvements.

## Operator Implication

Stable production release addressing multiple reliability and security issues. Consolidates terminal environment hardening and MCP control enhancements. Ready for general user deployment.

## Receipt

- [Release v0.45.0 published 2026-06-03T01:05:14Z includes fixes for Termux loops, session context filtering, PTY resize EBADF suppression, and MCP blacklist bypas](https://github.com/google-gemini/gemini-cli/releases/tag/v0.45.0)
