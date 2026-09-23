---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-grok-build-enterprise-enforcement-signed-requirements-toml-model-restriction-enforced-and-managed-onl
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/changelogs/1.0.16.md
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/10-hooks.md#L234
    precision: tagged_commit_file
---
# 2026-09-21-grok-build-enterprise-enforcement-signed-requirements-toml-model-restriction-enforced-and-managed-onl

Enterprise enforcement: signed requirements.toml, model restriction, enforced and managed-only hooks. Org policy gained a signature, a model allowlist, a managed-only hook switch, and a pre-write MCP/marketplace block.

Channel: tagged-release. Half: both. Date: 2026-09-01 (1.0.16), 2026-09-02 (1.0.18), 2026-09-17 (1.0.36).

Operator consequence: Admins: set `fail_closed = true`, or a user can edit `~/.grok/requirements.toml` and turn enforced hooks back into ordinary ones. The signed file only binds on the `enterprise` channel build you actually shipped; check which version that pointer serves (1.0.35 at observation, which predates the "Enforced hooks" doc and the 1.0.36 managed-only switch).

## Receipt
- https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/changelogs/1.0.16.md
- https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/10-hooks.md#L234
