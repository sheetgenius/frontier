---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-opencode-idle-unload-control-and-quota-recovery-reduce-distinct-interruption-costs
source: opencode
source_contract: sources/opencode.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anomalyco/opencode/commit/d898c048ae8513e333c5dc88fd3351f14be7d8fd
    precision: commit
  - url: https://github.com/anomalyco/opencode/commit/86a0950c6194f4a848f37fa0c80f7b2c863f8bea
    precision: commit
  - url: https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md
    precision: tagged_commit_file
---
# 2026-10-24-opencode-idle-unload-control-and-quota-recovery-reduce-distinct-interruption-costs

Idle-unload control and quota recovery reduce distinct interruption costs. [experimental.location_idle_timeout](https://github.com/anomalyco/opencode/commit/d898c048ae8513e333c5dc88fd3351f14be7d8fd) accepts a duration or false, retaining 60 minutes as the default. [The TUI free-limit recovery change](https://github.com/anomalyco/opencode/commit/86a0950c6194f4a848f37fa0c80f7b2c863f8bea) restores a submitted prompt when the composer is empty and presents reset/model-switch actions instead of the generic failure path. Both first reach v2.1.2, absent from v2.1.1; [tagged release notes](https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md) corroborate the client behavior.

Channel: tagged-release. Half: both. Date: 2026-10-21.

Operator consequence: Choose unloading explicitly for idle workspaces and avoid retyping quota-rejected prompts. Keeping a location loaded indefinitely costs resources; it does not resolve a hung task. These controls are distinct from section 14's fixes that keep active jobs loaded.

## Receipt
- https://github.com/anomalyco/opencode/commit/d898c048ae8513e333c5dc88fd3351f14be7d8fd
- https://github.com/anomalyco/opencode/commit/86a0950c6194f4a848f37fa0c80f7b2c863f8bea
- https://github.com/anomalyco/opencode/blob/v2.1.4/CHANGELOG.md
