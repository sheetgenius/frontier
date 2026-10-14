---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-ide-companion-shutdown-repair-is-in-v0-65-0-preview-source
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/11db29e66045f56ae6ed4ac263a691610fce4c69
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0-preview.0/packages/vscode-ide-companion/src/ide-server.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0
    precision: github_release
---
# 2026-10-13-gemini-cli-ide-companion-shutdown-repair-is-in-v0-65-0-preview-source

IDE companion shutdown repair is in v0.65.0 preview source. IDE companion shutdown closes MCP transports before the HTTP listener and drops remaining connections, rather than waiting indefinitely for open SSE sessions to drain. Concurrent stop calls share a promise, and generation checks avoid a late shutdown removing a newer server's state. This is source in a CLI repository preview tag, not verified delivery of a VS Code extension update.

Channel: preview-or-beta. Half: defect. Date: 2026-10-13.

Operator consequence: Integrators maintaining the companion should test shutdown with open MCP sessions. Verify the installed Marketplace extension's version/source separately; upgrading the npm CLI does not establish that the companion received this fix.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/11db29e66045f56ae6ed4ac263a691610fce4c69
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0-preview.0/packages/vscode-ide-companion/src/ide-server.ts
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0
