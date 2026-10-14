---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-gemini-cli-a2a-settings-migrate-to-nested-controls-in-memory
source: gemini-cli
source_contract: sources/gemini-cli.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/google-gemini/gemini-cli/commit/c88b0a6ee58da76e63bab65d268cedf952abb88c
    precision: commit
  - url: https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
    precision: github_release
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/a2a-server/src/config/settings.ts
    precision: tagged_commit_file
  - url: https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/a2a-server/src/config/config.ts
    precision: tagged_commit_file
---
# 2026-10-13-gemini-cli-a2a-settings-migrate-to-nested-controls-in-memory

A2A settings migrate to nested controls in memory. The A2A server loads legacy flat settings, resolves variables, migrates them to nested fields in memory and validates the result. Config consumers read security.folderTrust, general.checkpointing, tools, context.fileFiltering and logging fields. The reviewed load path does not write an on-disk migration. This repairs compatibility between legacy and nested configuration without proving every old deployment's effective settings remain identical.

Channel: tagged-release. Half: both. Date: 2026-10-13.

Operator consequence: Inspect effective trust, checkpointing, tool and file-filtering controls after upgrading the A2A server to 0.64.0. Test legacy and nested inputs with your deployment wrapper. A migrated in-memory object is not proof that a settings file was rewritten or that an old flag still has its intended effect.

## Receipt
- https://github.com/google-gemini/gemini-cli/commit/c88b0a6ee58da76e63bab65d268cedf952abb88c
- https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/a2a-server/src/config/settings.ts
- https://github.com/google-gemini/gemini-cli/blob/v0.64.0/packages/a2a-server/src/config/config.ts
