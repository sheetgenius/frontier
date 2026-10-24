---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-one-session-folder-trust-replaces-persistent-setup-while-trusted-repository-inputs-do-more
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.100
    precision: github_release
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md#L51
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L959-L1015
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L585-L615
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-one-session-folder-trust-replaces-persistent-setup-while-trusted-repository-inputs-do-more

One-session folder trust replaces persistent setup, while trusted repository inputs do more. `--trust-folder` trusts the working directory's hooks, workspace MCP servers, and repository plugin settings for one new `-p` or piped-input session. It does not persist trustedFolders, cover neighboring directories, or grant tool/path/URL permissions; resume, continue, and explicit session IDs cannot be combined with it. In 1.0.100, trusted repository plugins install/update before chat, managed plugin activation changes reach existing sessions, and matching root `.github/instructions` files are delivered on reads or edits. GitHub install links can install Skills/plugins. 1.0.101 also adds Team-assigned plugins from Team marketplaces; docs distinguish optional defaults from enforced managed plugins. [1.0.102 adds git-subdir marketplace sources](https://github.com/github/copilot-cli/releases/tag/v1.0.102).

Channel: tagged-release. Half: both. Date: 2026-10-19.

Operator consequence: Replace automation that permanently edits trustedFolders with a reviewed, one-run trust decision where appropriate. Inspect hooks, MCP configuration, repository marketplaces, and newly selected instruction files before using it. Trust removes setup friction by loading executable configuration; it does not substitute for narrow grants or verified plugin provenance. The Plugin4Shell checkout question remains separate from these activation and distribution changes.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.100
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-programmatic-reference.md#L51
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L959-L1015
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L585-L615
