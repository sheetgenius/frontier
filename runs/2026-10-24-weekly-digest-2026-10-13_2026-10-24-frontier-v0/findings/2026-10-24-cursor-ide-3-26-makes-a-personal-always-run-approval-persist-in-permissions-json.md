---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-cursor-ide-3-26-makes-a-personal-always-run-approval-persist-in-permissions-json
source: cursor
source_contract: sources/cursor.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://cursor.com/docs/release-notes/ide#oct-20-2026
    precision: official_docs
  - url: https://cursor.com/docs/release-notes/ide#oct-9-2026
    precision: official_docs
  - url: https://cursor.com/docs/reference/permissions
    precision: official_docs
---
# 2026-10-24-cursor-ide-3-26-makes-a-personal-always-run-approval-persist-in-permissions-json

IDE 3.26 makes a personal Always Run approval persist in permissions.json. When the user's own `~/.cursor/permissions.json` manages the terminal allowlist, Always Run now writes the command to that file's `terminalAllowlist`. The button remains unavailable when an administrator controls the allowlist. The current general reference still says the button is hidden when the file controls it, so the versioned 3.26 note is more specific than that older blanket description.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: Review the resulting persistent allowlist when upgrading or approving a command. This removes repeated prompts for a personal rule without pretending an admin override succeeded. It does not answer the different question of which `permissions.json` field constrains Run Everything; that remains open.

## Receipt
- https://cursor.com/docs/release-notes/ide#oct-20-2026
- https://cursor.com/docs/release-notes/ide#oct-9-2026
- https://cursor.com/docs/reference/permissions
