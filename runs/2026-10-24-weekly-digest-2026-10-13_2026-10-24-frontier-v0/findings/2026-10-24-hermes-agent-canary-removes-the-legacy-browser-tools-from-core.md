---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-canary-removes-the-legacy-browser-tools-from-core
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/68500d9ff9456b52036ae2eb50c73468a6c2bae2
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/toolsets.py
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/toolsets.py
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-canary-removes-the-legacy-browser-tools-from-core

Canary removes the legacy browser tools from core. Canary deletes the built-in navigate/snapshot/click/type/scroll/back/press/image/vision/console browser family and the bundled agent-browser/Camofox implementation. Core browser automation centers on `browser_exec`, with `browser_cdp`, `browser_dialog`, and `browser_vault` still present. Camofox becomes a catalog-plugin choice. The removed implementation is substantial, but line deletion itself does not prove better browser reliability or safety.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Stable v0.22.5 users should not rewrite working browser integrations based on the community recap. Canary/main users should audit skills, explicit tool-name allowlists, wrappers, and Camofox dependencies before switching. The general execution primitive replaces multiple hand-built wrappers; compatibility testing, vault scope, and destination control remain necessary.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/68500d9ff9456b52036ae2eb50c73468a6c2bae2
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/toolsets.py
- https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/toolsets.py
