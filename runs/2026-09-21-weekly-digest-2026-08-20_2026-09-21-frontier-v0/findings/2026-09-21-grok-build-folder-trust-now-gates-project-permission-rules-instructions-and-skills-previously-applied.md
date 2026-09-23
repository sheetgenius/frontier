---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-grok-build-folder-trust-now-gates-project-permission-rules-instructions-and-skills-previously-applied
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L559
    precision: tagged_commit_file
  - url: https://github.com/xai-org/grok-build/blob/19d42e35c07a9c9244f03f6df0c4c353f970d4f9/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md
    precision: tagged_commit_file
---
# 2026-09-21-grok-build-folder-trust-now-gates-project-permission-rules-instructions-and-skills-previously-applied

Folder trust now gates project permission rules, instructions, and skills (previously applied with no trust prompt). Before about 1.0.24, a cloned repo could ship `.grok/config.toml` or `.claude/settings.json` `allow` rules that took effect without any trust prompt. Now they wait for folder trust, and headless runs need `--trust`.

Channel: tagged-release (in the build joined to sync 75810042ca27, crate 1.0.24); not in any release note. Half: defect. Date: between 2026-09-01 and 2026-09-08 (builds 1.0.17 to 1.0.24).

Operator consequence: Upgrade past 1.0.24. Headless CI that relied on repo-local allow rules will now need `--trust`; add it only for repos you control. Anyone who ran `grok` in an untrusted checkout on 1.0.16 or earlier should assume the repo's own allow rules were live. No advisory was published for this; the only record is the doc diff.

## Receipt
- https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L559
- https://github.com/xai-org/grok-build/blob/19d42e35c07a9c9244f03f6df0c4c353f970d4f9/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md
