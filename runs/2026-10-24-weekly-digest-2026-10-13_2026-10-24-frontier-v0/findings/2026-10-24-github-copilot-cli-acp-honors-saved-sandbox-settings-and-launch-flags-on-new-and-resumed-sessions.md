---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-acp-honors-saved-sandbox-settings-and-launch-flags-on-new-and-resumed-sessions
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.103
    precision: github_release
  - url: https://github.com/github/copilot-cli/blob/7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120/changelog.md#L4
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/acp-server.md#L37-L55
    precision: tagged_commit_file
  - url: https://registry.npmjs.org/@github/copilot/1.0.103
    precision: official_docs
---
# 2026-10-24-github-copilot-cli-acp-honors-saved-sandbox-settings-and-launch-flags-on-new-and-resumed-sessions

ACP honors saved sandbox settings and launch flags on new and resumed sessions. ACP sessions now honor saved sandbox settings and `--sandbox` / `--no-sandbox`, including resume. This is distinct from 1.0.88's repair of managed MCP, permission, and plugin policy across entry points. The current ACP reference says server-launch tool filters and reasoning settings seed every created or loaded session, while a managed sandbox requirement overrides `--no-sandbox`.

Channel: tagged-release. Half: defect. Date: 2026-10-22.

Operator consequence: Upgrade ACP-backed editors and wrappers to a runtime containing 1.0.103, then compare new and resumed sessions under the same saved sandbox policy. Record the server binary and launch arguments, not only the editor version. A wrapper's working approval UI was never evidence that the shell sandbox matched the terminal session. The repair reduces integration-specific configuration work; boundary tests still belong to the host operator.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.103
- https://github.com/github/copilot-cli/blob/7ea98dfc33c68aaf6443ea8fc054e20ff7fcd120/changelog.md#L4
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/acp-server.md#L37-L55
- https://registry.npmjs.org/@github/copilot/1.0.103
