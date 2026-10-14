---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-hermes-agent-hermes-update-follows-published-releases-from-v0-21-7-before-that-an-unconfigured-source
source: hermes-agent
source_contract: sources/hermes-agent.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7
    precision: github_release
  - url: https://github.com/NousResearch/hermes-agent/commit/6a92a2aa4928175041e6bb04922d69d3f6e49eda
    precision: commit
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/update_channel.py#L140-L200
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/getting-started/updating.md#L33-L50
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v0.21.7/scripts/install.sh#L23-L25
    precision: tagged_commit_file
  - url: https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/main_install_repair.py#L1275-L1277
    precision: tagged_commit_file
---
# 2026-10-13-hermes-agent-hermes-update-follows-published-releases-from-v0-21-7-before-that-an-unconfigured-source

`hermes update` follows published releases from v0.21.7; before that an unconfigured source updater defaulted to main, and the installer still installs main. Before v0.21.7 an unconfigured source updater defaulted to main; explicit branch selection already existed. From v0.21.7, an unconfigured official-origin checkout defaults to stable, resolving the official stable release record, with GitHub release fallback and tag verification. Forks and mirrors retain main, package installs retain their baked channel, and explicit source choices survive. Implicit selection only moves forward, so an install already ahead of stable stays on its commit until a newer release passes it. `hermes update --set-channel stable` explicitly permits landing on the current stable commit. The audited installer still starts from main.

Channel: tagged-release (updater default); installer behavior identical on v0.21.7 and main. Half: both. Date: 2026-10-12.

Operator consequence: Select the channel once on each host and record the resolved commit. At the October 13 UTC cutoff stable meant v0.21.7; the moving stable command is not a permanent v0.21.7 pin. To reproduce this dated read, use the installer's `--commit 71d34bad1045610252eda02ee79549436896e784` argument. Re-check earlier unconfigured source updates by commit rather than assuming their installed code matched a release tag.

## Receipt
- https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.7
- https://github.com/NousResearch/hermes-agent/commit/6a92a2aa4928175041e6bb04922d69d3f6e49eda
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/hermes_cli/update_channel.py#L140-L200
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/website/docs/getting-started/updating.md#L33-L50
- https://github.com/NousResearch/hermes-agent/blob/v0.21.7/scripts/install.sh#L23-L25
- https://github.com/NousResearch/hermes-agent/blob/v2026.9.21/hermes_cli/main_install_repair.py#L1275-L1277
