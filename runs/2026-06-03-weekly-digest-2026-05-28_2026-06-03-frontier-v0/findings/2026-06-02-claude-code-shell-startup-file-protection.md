---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-claude-code-shell-startup-file-protection
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-05-28
  end: 2026-06-03
versions_covered: "2.1.160"
status: accepted
change_type: security
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "Security Changes: Added prompt before writing to shell startup files (`.zshenv`, `.zlogin`, `.bash_login`) and `~/.config/git/`"
    url: https://code.claude.com/docs/en/changelog
    precision: release_note
---
# Shell Startup File Write Protection

## What Changed

Added prompt before writing to shell startup files (.zshenv, .zlogin, .bash_login) and ~/.config/git/

## Operator Implication

Write operations to shell startup and git config files now require explicit confirmation, preventing accidental or malicious configuration changes

## Receipt

- [Security Changes: Added prompt before writing to shell startup files (`.zshenv`, `.zlogin`, `.bash_login`) and `~/.config/git/`](https://code.claude.com/docs/en/changelog)
