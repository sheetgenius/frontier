---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-pi-coding-agent-auth-file-permissions
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: security
confidence: high
accessibility_impact: none
actionability: test
evidence:
  - label: "Commit 135fb54 'fix(coding-agent): set auth file mode on creation' sets { encoding: 'utf-8', mode: 0o600 } on all auth file creation/lock operations"
    url: https://github.com/earendil-works/pi/commit/135fb54
    precision: commit
---
# Authentication file mode set at creation time

## What Changed

Introduced AUTH_FILE_WRITE_OPTIONS constant with mode 0o600 (owner read/write only) applied to all FileAuthStorageBackend writeFileSync() calls. Reduces the security window where auth files could exist with insecure permissions before subsequent chmod operations.

## Operator Implication

Hardens credential storage by ensuring authentication files never briefly exist with world-readable permissions. Closes temporal window for permission escalation.

## Receipt

- [Commit 135fb54 'fix(coding-agent): set auth file mode on creation' sets { encoding: 'utf-8', mode: 0o600 } on all auth file creation/lock operations](https://github.com/earendil-works/pi/commit/135fb54)
