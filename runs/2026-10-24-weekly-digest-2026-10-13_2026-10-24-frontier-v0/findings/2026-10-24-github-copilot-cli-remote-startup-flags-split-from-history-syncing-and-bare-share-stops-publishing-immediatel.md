---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-remote-startup-flags-split-from-history-syncing-and-bare-share-stops-publishing-immediatel
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
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.100
    precision: github_release
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L650-L750
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L480-L500
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-remote-startup-flags-split-from-history-syncing-and-bare-share-stops-publishing-immediatel

Remote startup flags split from history syncing, and bare share stops publishing immediately. `--no-remote` is removed. Interactive and prompt-mode startup no longer support `--remote`; the docs retain it for legacy SDK `--server`/`--headless` startup. `--remote-export` and its negative form become `--sync-session=on|off`, which controls read-only history sync. Remote control uses `/remote on|off`; `remoteSessions` defaults false, while `remoteExport` defaults true when sync is available, and enabling remote control overrides an export opt-out. Bare `/share` opens a menu; `/share link` is the explicit publishing action. Reconnected cloud replies preserve full text in 1.0.103.

Channel: tagged-release. Half: both. Date: 2026-10-22.

Operator consequence: Migrate wrapper flags before moving to 1.0.103. For local-only history, verify `--sync-session=off` and the remote-control setting together instead of treating one old flag as both controls. Update share automation to request the intended action explicitly. This removes accidental publication from opening the share UI while leaving the operator responsible for account-level sync availability and remote authority.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.103
- https://github.com/github/copilot-cli/releases/tag/v1.0.100
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-command-reference.md#L650-L750
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L480-L500
