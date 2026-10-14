---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-13-agent-flywheel-reviewed-plugin-installs-shipped-in-v0-10-0-for-third-party-plugin-archives-only
source: agent-flywheel
source_contract: sources/agent-flywheel.yml
window:
  start: 2026-09-21
  end: 2026-10-13
status: accepted
confidence: high
evidence:
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L1-L13
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L186-L193
    precision: tagged_commit_file
  - url: https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/655ad8fc336b0f15b8eaaec116a5c33127051aef
    precision: commit
---
# 2026-10-13-agent-flywheel-reviewed-plugin-installs-shipped-in-v0-10-0-for-third-party-plugin-archives-only

Reviewed plugin installs shipped in v0.10.0, for third-party plugin archives only. `bun run plugin:install`, run from a trusted checkout's packages/manifest, previews by default and executes only with `--yes` and the exact `--accept-plan` fingerprint. The fingerprint binds archive provenance, the external review, the target OS, checksums, the selection, installer bytes and arguments, and a saved plan is never accepted as authority. The scope is narrow by design: target-user installs only, three baseline capabilities, root and current-user modules refused, default-enabled plugins refused. Installers run under `setpriv --no-new-privs`, which the doc says is not a filesystem or network sandbox. The flow does not touch the root installer, the bundled agents, the aliases or the Antigravity policy.

Channel: tagged-release. Half: capability. Date: 2026-10-03.

Operator consequence: This answers the profile's watch item: the approval step reached a tag, and it covers third-party plugins, not the agents ACFS installs. Use it if you add tools beyond the stock stack. It provides an exact-plan approval path for these plugins; no complete historical review establishes a first-ever claim. Do not read it as a sandbox, and do not expect it to change `cc`, `cod` or `agy`.

## Receipt
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L1-L13
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/blob/v0.10.0/docs/operations/plugin-review-workflow.md#L186-L193
- https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup/commit/655ad8fc336b0f15b8eaaec116a5c33127051aef
