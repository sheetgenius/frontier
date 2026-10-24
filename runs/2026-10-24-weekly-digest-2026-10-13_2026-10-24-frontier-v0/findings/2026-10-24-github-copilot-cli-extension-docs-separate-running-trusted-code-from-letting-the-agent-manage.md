---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-extension-docs-separate-running-trusted-code-from-letting-the-agent-manage
source: github-copilot-cli
source_contract: sources/github-copilot-cli.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/github/docs/commit/4dc0b8276c24e2e24fe45b1bde0747c5da3cce10
    precision: commit
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1346-L1372
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/data/reusables/copilot/copilot-cli/cli-extensions-experimental.md
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-extension-docs-separate-running-trusted-code-from-letting-the-agent-manage

Extension docs separate running trusted code from letting the agent manage it. The experimental extension docs now describe Load & Augment as the default mode, granting extension-management tools as well as running extensions. Load Only retains existing extension tools without letting the agent scaffold or reload extensions. Disabled stops extension processes and removes their tools in the current session, persists for future sessions, and does not affect other sessions already running.

Channel: docs-only. Half: both. Date: 2026-10-20.

Operator consequence: For a fixed reviewed extension set, evaluate Load Only instead of disabling useful tools or maintaining a wrapper that hides management actions. Check each already-running session when disabling extensions. These docs identify a useful separation of authority, but do not establish its first shipped version or make arbitrary extension code subject to ordinary tool approval prompts.

## Receipt
- https://github.com/github/docs/commit/4dc0b8276c24e2e24fe45b1bde0747c5da3cce10
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L1346-L1372
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/data/reusables/copilot/copilot-cli/cli-extensions-experimental.md
