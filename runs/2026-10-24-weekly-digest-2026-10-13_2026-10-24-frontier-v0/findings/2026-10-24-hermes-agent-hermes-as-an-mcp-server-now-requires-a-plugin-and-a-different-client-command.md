---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-hermes-agent-hermes-as-an-mcp-server-now-requires-a-plugin-and-a-different-client-command
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/commit/e3a962d087c503ac089f1563430b2b5b885f5ed2
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/left_core_migration.py#L239-L278
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/mcp-serve.yaml
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-official-plugins/blob/6389dd08c1e485db708688c69e42c2b7a7360f4e/mcp-serve/README.md
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/agent-importers.yaml
    precision: tagged_commit_file
---
# 2026-10-24-hermes-agent-hermes-as-an-mcp-server-now-requires-a-plugin-and-a-different-client-command

Hermes-as-an-MCP-server now requires a plugin and a different client command. `hermes mcp serve` leaves core. Install `mcp-serve` in the profile the client launches, then change client arguments from `["mcp", "serve"]` to `["mcp-serve"]`. Core deliberately does not auto-install this plugin because an external client's configuration is not detectable as per-home use. The v0.22.5 catalog pins official plugin commit `6389dd08c1e485db708688c69e42c2b7a7360f4e`; its ten conversation-bridge tools retain their names. The bridge can read the active profile's conversation database, send through linked accounts, and respond to approvals. The optional general tool bridge remains off without `--tools`, and excludes terminal, file, code, process, Kanban, and delegation tools. Langfuse, Singularity, and agent import/OpenClaw migration also now live in catalog plugins. The pinned agent-importers catalog names OpenClaw, Claude Code, Codex CLI and Cursor setup import, previews before applying, and distinguishes OpenClaw's explicit secret-migration option from other agents' credential-file exclusions; detected existing configurations have migration paths, unlike an undetectable external MCP client.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Audit every launcher that embeds Hermes as an MCP server before moving to v0.22.5, including profile selection. Installing a plugin alone does not repair the old command spelling. Smaller core packaging transfers maintenance and pin review to an explicit plugin boundary; it does not reduce the authority of conversation read/send/approval access. Standalone Desktop installers did not update with this patch, so check actual version before applying a client migration.

## Receipt
- https://github.com/NousResearch/hermes-agent/commit/e3a962d087c503ac089f1563430b2b5b885f5ed2
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/hermes_cli/left_core_migration.py#L239-L278
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/mcp-serve.yaml
- https://github.com/NousResearch/hermes-official-plugins/blob/6389dd08c1e485db708688c69e42c2b7a7360f4e/mcp-serve/README.md
- https://github.com/NousResearch/hermes-agent/blob/v0.22.5/plugin-catalog/agent-importers.yaml
