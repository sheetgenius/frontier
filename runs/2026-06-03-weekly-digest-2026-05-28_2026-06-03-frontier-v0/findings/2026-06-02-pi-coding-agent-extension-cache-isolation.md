---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-06-02-pi-coding-agent-extension-cache-isolation
source: pi-coding-agent
source_contract: sources/pi-coding-agent.yml
window:
  start: 2026-05-28
  end: 2026-06-03
status: accepted
change_type: security
confidence: high
accessibility_impact: low
actionability: test
evidence:
  - label: "Commit ea3465a 'fix(coding-agent): move temporary extension cache (#5345)' moves cache from system /tmp to ~/.pi/agent/tmp/extensions with 0o700 permissions"
    url: https://github.com/earendil-works/pi/commit/ea3465a
    precision: commit
---
# Extension cache moved to user-private directory

## What Changed

Relocated temporary extension package installs from world-accessible os.tmpdir()/pi-extensions to ~/.pi/agent/tmp/extensions with 0700 permissions (owner-only read/write/execute). Added getExtensionTempFolder() function with permission enforcement.

## Operator Implication

Prevents other local users and system services from accessing temporary extension packages during installation. Improves isolation of installed extensions.

## Receipt

- [Commit ea3465a 'fix(coding-agent): move temporary extension cache (#5345)' moves cache from system /tmp to ~/.pi/agent/tmp/extensions with 0o700 permissions](https://github.com/earendil-works/pi/commit/ea3465a)
