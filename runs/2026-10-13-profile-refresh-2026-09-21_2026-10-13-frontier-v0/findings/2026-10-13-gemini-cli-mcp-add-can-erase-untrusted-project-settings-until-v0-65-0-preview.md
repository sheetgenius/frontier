---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-mcp-add-can-erase-untrusted-project-settings-until-v0-65-0-preview
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/pull/29583
    precision: merged_pr
  - url: https://github.com/google-gemini/gemini-cli/issues/29465
    precision: official_docs
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settings.ts#L374-L380
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/commands/mcp/add.ts#L161-L165
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/commands/mcp/remove.ts#L24-L34
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0-preview.0/packages/cli/src/config/settings.ts#L377-L383
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0
    precision: github_release
---
# 2026-10-13-gemini-cli-mcp-add-can-erase-untrusted-project-settings-until-v0-65-0-preview

MCP add can erase untrusted project settings until v0.65.0 preview. In an untrusted or not-yet-trusted folder, stable 0.64.0 keeps an empty in-memory workspace settings object with a writable project file path. Default project-scoped gemini mcp add can write that object back and erase existing keys in .gemini/settings.json. Issue #29465 reports this on 0.60.0. Stable mcp remove instead finds an empty server map and returns before writing; the evidence does not support a destructive remove claim. Preview 0.65.0-preview.0 marks the empty workspace read-only and rejects project-scoped add/remove with a trust error.

Channel: preview-or-beta. Half: defect. Date: 2026-10-13.

Operator consequence: On stable, back up project settings and use mcp add with --scope user, or deliberately trust the folder before project-scoped add. Inspect the resulting settings file. Test 0.65.0-preview.0 if write refusal is needed now; upgrading only to 0.64.0 does not deliver this repair.

## Receipt
- https://github.com/google-gemini/gemini-cli/pull/29583
- https://github.com/google-gemini/gemini-cli/issues/29465
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/config/settings.ts#L374-L380
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/commands/mcp/add.ts#L161-L165
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/cli/src/commands/mcp/remove.ts#L24-L34
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0-preview.0/packages/cli/src/config/settings.ts#L377-L383
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0-preview.0
