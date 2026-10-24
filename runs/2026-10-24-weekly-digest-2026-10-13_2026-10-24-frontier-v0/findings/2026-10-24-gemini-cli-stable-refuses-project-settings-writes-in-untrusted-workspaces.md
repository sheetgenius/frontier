---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-gemini-cli-stable-refuses-project-settings-writes-in-untrusted-workspaces
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/f41d0bc8f7fe79563d353f97c7580ed4d8fd24d7
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/settings.ts#L365-L492
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/commands/mcp/add.ts#L45-L66
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/commands/mcp/remove.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0
    precision: github_release
  - url: https://registry.npmjs.org/@google%2fgemini-cli/0.65.0
    precision: official_docs
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/package.json
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.65.0/package.json
    precision: tagged_commit_file
---
# 2026-10-24-gemini-cli-stable-refuses-project-settings-writes-in-untrusted-workspaces

Stable refuses project-settings writes in untrusted workspaces. Stable now represents unloaded workspace settings as empty and read-only. The general settings writer rejects that object; project-scoped MCP add/remove also reject an untrusted or read-only workspace. Deliberately trusting the folder swaps in its real settings. This prevents the previously documented route from an empty in-memory object to overwriting existing `.gemini/settings.json` keys. It is a settings-persistence guard, not a read-only filesystem.

Channel: tagged-release. Half: both. Date: 2026-10-20.

Operator consequence: Upgrade stable installations to 0.65.0 before project-scoped MCP configuration. A preview is no longer required for this fix. In an untrusted folder, choose user scope or make an explicit trust decision; do not treat the refusal as permission to silently enable trust. The agent can now reject the dangerous operation itself, removing the manual backup-and-inspect workaround for this specific defect while leaving repository trust with the operator.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/f41d0bc8f7fe79563d353f97c7580ed4d8fd24d7
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/config/settings.ts#L365-L492
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/commands/mcp/add.ts#L45-L66
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/src/commands/mcp/remove.ts
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0
- https://registry.npmjs.org/@google%2fgemini-cli/0.65.0
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/packages/cli/package.json
- https://github.com/google-gemini/gemini-cli/blob/v0.65.0/package.json
