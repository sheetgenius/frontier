---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-zero-file-patches-preserve-metadata-and-new-backups-exclude-orchestrator-state
source: agent-zero
source_contract: sources/agent-zero.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/agent0ai/agent-zero/commit/e9384d27483b8260994487f6e898aeaad02bc954
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/commit/a5feaec431a8da615dc4f624a6ae55417b7c8ace
    precision: commit
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/backup.py#L55-L68
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/chat_media.py#L24-L38
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/tools/computer_use_remote.py#L910-L946
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_orchestrator/README.md#L25-L36
    precision: tagged_commit_file
  - url: https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_orchestrator/README.md#L82-L97
    precision: tagged_commit_file
---
# 2026-10-13-agent-zero-file-patches-preserve-metadata-and-new-backups-exclude-orchestrator-state

File patches preserve metadata and new backups exclude Orchestrator state. The three editor patch methods now preserve existing mode and, when root, owner/group before replacement, instead of producing root-owned 0600 replacements on bind mounts. New backup patterns exclude usr/plugins/_orchestrator/data/** alongside Time Travel history; saved custom patterns are not rewritten. usr/** still includes hidden credentials, chat histories and durable host Computer Use screenshots. Orchestrator supplies adapters/guidance for Codex, Claude Code, Cursor CLI, Gemini CLI, Grok Build, Hermes Agent and OpenCode; it does not bundle proof that those CLIs are installed. Its documented Codex command bypasses approvals and sandbox, and its non-root Claude example uses bypassPermissions. This makes the execution environment, not the child CLI's ordinary prompts, the relevant delegation boundary.

Channel: tagged-release. Half: both. Date: 2026-09-23 (first stable; implementations 2026-09-14 and 2026-09-23).

Operator consequence: Repair owners and executable bits on files already damaged by older editor patches. Treat backups as credential archives and inspect saved include/exclude patterns; earlier backups can contain Orchestrator sign-in state. Before delegating to a coding CLI, inspect the actual command and choose host versus container deliberately. Do not assume selecting a familiar child agent restores its default sandbox or permission prompts.

## Receipt
- https://github.com/agent0ai/agent-zero/commit/e9384d27483b8260994487f6e898aeaad02bc954
- https://github.com/agent0ai/agent-zero/commit/a5feaec431a8da615dc4f624a6ae55417b7c8ace
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/backup.py#L55-L68
- https://github.com/agent0ai/agent-zero/blob/v2.14/helpers/chat_media.py#L24-L38
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_a0_connector/tools/computer_use_remote.py#L910-L946
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_orchestrator/README.md#L25-L36
- https://github.com/agent0ai/agent-zero/blob/v2.14/plugins/_orchestrator/README.md#L82-L97
