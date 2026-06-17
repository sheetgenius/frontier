---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-pi-coding-agent-git-path-traversal
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
  - label: "Commit a98e087 'fix(coding-agent): harden git package install paths' implements defense-in-depth validation rejecting traversal attempts like '../../victim/repo' and throws 'Refusing to use path outsi"
    url: https://github.com/earendil-works/pi/commit/a98e087
    precision: commit
---
# Git package installation path traversal protection

## What Changed

Added decodeForValidation() and hasUnsafeGitInstallPart() functions to reject git URLs with directory traversal sequences (.., null bytes, backslashes, leading slashes) at parse time. Implemented resolveManagedPath() in package manager to verify all resolved paths remain within their designated root directories.

## Operator Implication

Prevents attackers from escaping package install directories via crafted git URLs. Defense-in-depth validates at both parsing and path resolution stages.

## Receipt

- [Commit a98e087 'fix(coding-agent): harden git package install paths' implements defense-in-depth validation rejecting traversal attempts like '../../victim/repo](https://github.com/earendil-works/pi/commit/a98e087)
