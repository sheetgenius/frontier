---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-canary-lets-confining-terminal-backends-route-file-tools-through-the-backend
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/72fc7dfe9bb9555fc89d603f0cc8dd6217ea675d
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/tools/environments/base.py#L251-L282
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/tools/file_tools.py
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-canary-lets-confining-terminal-backends-route-file-tools-through-the-backend

Canary lets confining terminal backends route file tools through the backend. File-tool host shortcuts now consult `uses_host_filesystem` instead of assuming every LocalEnvironment subclass uses the host filesystem. A confining subclass can set it false to route reads, writes, patches and searches through the backend. This supplies the missing integration seam for a local terminal sandbox; it does not prove a particular plugin adopted it or that every tool is confined.

Channel: preview-or-beta. Half: both. Date: 2026-10-23.

Operator consequence: Keep stable v0.22.5 Bubblewrap file-tool assumptions unchanged. For a canary trial, require the plugin's explicit flag and denied-path read/write/search probes before claiming whole-workspace confinement. The abstraction reduces custom file adapters only after the actual backend uses it.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/72fc7dfe9bb9555fc89d603f0cc8dd6217ea675d
- https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/tools/environments/base.py#L251-L282
- https://github.com/NousResearch/hermes-agent/blob/e8abec1e9655d135df39e9440c98dec0e8a34137/tools/file_tools.py
