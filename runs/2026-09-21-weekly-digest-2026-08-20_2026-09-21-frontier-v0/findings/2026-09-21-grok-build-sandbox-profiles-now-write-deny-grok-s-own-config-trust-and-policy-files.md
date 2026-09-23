---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-grok-build-sandbox-profiles-now-write-deny-grok-s-own-config-trust-and-policy-files
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/18-sandbox.md#L28-L55
    precision: tagged_commit_file
---
# 2026-09-21-grok-build-sandbox-profiles-now-write-deny-grok-s-own-config-trust-and-policy-files

Sandbox profiles now write-deny Grok's own config, trust, and policy files. Under a sandbox profile, the agent could previously write its own settings, folder-trust list, and requirements file, which is a path to relax its own permissions for the next session. That path is now closed at the kernel level for the named files. Side effect: accepting folder trust, `/model`, and mode changes inside a sandboxed session no longer persist.

Channel: tagged-release (joined to sync a28ee2b20634, crate 1.0.35); the config write-deny has no release note. Half: defect. Date: between 2026-09-15 and 2026-09-17 (builds 1.0.33 to 1.0.35); `strict` narrowing in 1.0.14 (2026-08-31).

Operator consequence: If you use `--sandbox`, run 1.0.35 or later. Remember the default is `off`: none of this applies unless you pass a profile. Child-network blocking is Linux-only (documented as a no-op on macOS).

## Receipt
- https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/18-sandbox.md#L28-L55
