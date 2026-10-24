---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-local-network-access-defaults-on-and-macos-gains-a-narrower-localhost-exception
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
  - url: https://github.com/github/copilot-cli/releases/tag/v1.0.101
    precision: github_release
  - url: https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L18-L95
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L504
    precision: tagged_commit_file
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L256-L272
    precision: tagged_commit_file
---
# 2026-10-24-github-copilot-cli-local-network-access-defaults-on-and-macos-gains-a-narrower-localhost-exception

Local-network access defaults on, and macOS gains a narrower localhost exception. 1.0.100 lets sandboxed commands reach localhost and private-network services by default. 1.0.101 adds direct localhost TCP connections on macOS when local access is enabled and no host filters apply. The profile's default-off local-network advice and its absolute proxy-active macOS self-connect warning are therefore superseded for these released cases. Current docs still list `allowLocalNetwork=false` and still give the older macOS explanation. The release does not promise unrestricted localhost connectivity with host filters present.

Channel: tagged-release. Half: both. Date: 2026-10-19.

Operator consequence: On 1.0.103, explicitly configure the intended local-network policy and test both a needed dev server and an unintended local/private service. A successful development loop is now possible in a documented case that previously needed workarounds, but enabling the sandbox is not a decision about which databases or local admin services it may reach. Preserve host filtering and platform-specific containment tests. Do not infer that every network restriction disappeared or that the documented Windows direct-connection limitation was repaired.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.100
- https://github.com/github/copilot-cli/releases/tag/v1.0.101
- https://github.com/github/copilot-cli/blob/v1.0.103/changelog.md#L18-L95
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/reference/copilot-cli-reference/cli-config-dir-reference.md#L504
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings.md#L256-L272
