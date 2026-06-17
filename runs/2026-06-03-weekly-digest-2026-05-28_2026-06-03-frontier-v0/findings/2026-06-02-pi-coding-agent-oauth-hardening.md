---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-pi-coding-agent-oauth-hardening
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted_signal
change_type: security
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "Commit ba6e529 'fix(oauth): harden browser launch handling' validates verification URIs and uses spawn() instead of exec() to prevent shell metacharacter injection"
    url: https://github.com/earendil-works/pi/commit/ba6e529
    precision: commit
---
# OAuth browser launch URI validation and shell-safe spawning

## What Changed

Hardened OAuth verification URI handling by adding URI parsing validation to reject non-HTTP(S) protocols before browser launch, and replaced shell exec() with process spawn() to prevent command injection from attacker-controlled URLs.

## Operator Implication

Eliminates command injection risk in OAuth flows where malicious OAuth servers could inject shell commands like '$(id>/tmp/pwned)' via verification URIs. Uses process spawning without shell interpretation.

## Receipt

- [Commit ba6e529 'fix(oauth): harden browser launch handling' validates verification URIs and uses spawn() instead of exec() to prevent shell metacharacter inject](https://github.com/earendil-works/pi/commit/ba6e529)
