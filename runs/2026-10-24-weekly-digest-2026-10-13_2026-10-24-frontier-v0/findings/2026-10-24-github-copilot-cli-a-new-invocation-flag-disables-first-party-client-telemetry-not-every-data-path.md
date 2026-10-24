---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-github-copilot-cli-a-new-invocation-flag-disables-first-party-client-telemetry-not-every-data-path
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
  - url: https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli.md#L280-L293
    precision: tagged_commit_file
  - url: https://github.com/github/docs/commit/8bebcac020dee52f1a71fc30ab5da6da47586d00
    precision: commit
---
# 2026-10-24-github-copilot-cli-a-new-invocation-flag-disables-first-party-client-telemetry-not-every-data-path

A new invocation flag disables first-party client telemetry, not every data path. `--disable-client-telemetry` disables both restricted and unrestricted first-party telemetry uploads for that invocation. It is not saved. It leaves server-side session/telemetry collection, operator-configured OpenTelemetry exports, and explicitly enabled SDK-host telemetry forwarding unchanged.

Channel: tagged-release. Half: capability. Date: 2026-10-19.

Operator consequence: Put the flag in each relevant 1.0.103 launch path if that is the intended first-party telemetry policy, and inspect the remaining exporters separately. This supplies a direct opt-out without removing an organization's own observability. It is not a local-only switch or proof that no session data leaves the host.

## Receipt
- https://github.com/github/copilot-cli/releases/tag/v1.0.100
- https://github.com/github/docs/blob/02c25d16369fe27f9bdb28d1201f6b452f0d21dd/content/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli.md#L280-L293
- https://github.com/github/docs/commit/8bebcac020dee52f1a71fc30ab5da6da47586d00
