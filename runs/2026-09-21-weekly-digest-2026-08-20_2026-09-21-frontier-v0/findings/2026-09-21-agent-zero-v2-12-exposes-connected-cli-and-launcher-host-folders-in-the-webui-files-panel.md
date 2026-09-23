---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-agent-zero-v2-12-exposes-connected-cli-and-launcher-host-folders-in-the-webui-files-panel
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/4777c14d82
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/releases/tag/v2.12
    precision: github_release
---
# 2026-09-21-agent-zero-v2-12-exposes-connected-cli-and-launcher-host-folders-in-the-webui-files-panel

v2.12 exposes connected CLI and Launcher host folders in the WebUI Files panel. Capability: when the A0 CLI or Launcher is connected, the WebUI file browser and editor can list, upload, download and edit files in the host folders that connector exposes. Transfers go over authenticated HTTP with SHA-256 receipts and atomic writes, and the limits default to 10 MiB for editing and 100 MiB for transfers. The commit says it respects host permissions, and scope is still configured in the CLI or Launcher, not in the WebUI. Hardening: archive extraction now has expansion and entry budgets and rejects unsafe members. WebSocket payload ceilings are enforced, and remote connector tool payloads are bounded.

Channel: tagged-release. Half: both. Date: 2026-09-09.

Operator consequence: Whatever host root you expose to the CLI or Launcher can now also be reached from any browser session logged into the WebUI, not only through agent tools. Before you connect, check which folders the connector exposes and whether they are writable. Treat the WebUI login as a credential for those host files.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/4777c14d82
- https://github.com/agent0ai/agent-zero/releases/tag/v2.12
