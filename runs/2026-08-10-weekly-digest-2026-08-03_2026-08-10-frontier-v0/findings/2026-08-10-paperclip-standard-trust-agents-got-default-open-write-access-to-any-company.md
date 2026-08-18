---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-paperclip-standard-trust-agents-got-default-open-write-access-to-any-company
source: paperclip
source_contract: sources/paperclip.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/paperclipai/paperclip/pull/10804
    precision: merged_pr
---
# 2026-08-10-paperclip-standard-trust-agents-got-default-open-write-access-to-any-company

Standard-trust agents got default-open write access to any company-visible issue they can read.

Four issue-write channels -- comments, field updates, child-task creation, and assignment -- were unified under one default-open rule keyed on issue visibility: if a standard-trust agent can read the issue and the responsible user is also authorised, it can write. Previously each channel applied its own narrow ownership, parent or mention grant. The PR is explicit that this 'intentionally broadens write access', and its own Risks section says 'Standard-trust agents gain broader write influence on issues that they can already read.' Company boundaries, low-trust and skill_test/task_bridge scopes, the responsible-user ceiling, checkout, lifecycle, pause and budget gates are stated as unchanged, and #10837 contains and attributes cross-issue side effects.

Channel: tagged-release. Ancestry: PR #10804 merge commit dfcda67650d4fc60b1cca537efca7fc9d52c718c, merged 2026-08-04T14:18:44Z, base master; compare dfcda676...v2026.817.0 -> ahead, ahead_by=90, behind_by=0. PR #10837 merge commit f91a6e27c0feb7f92dcde981c9a741b869484e83; compare -> ahead, ahead_by=86, behind_by=0. Both listed under 'Breaking Changes' in the v2026.817.0 release body.

Operator consequence: Re-audit before upgrading. This is a permission loosening shipping inside a routine-looking calendar release, and the surface it loosens is the one Paperclip's whole coordination model runs on. If you relied on per-channel ownership grants to keep an agent from editing or reassigning work it could merely see, that constraint is gone; issue visibility is now the authorization boundary.

## Receipt
- https://github.com/paperclipai/paperclip/pull/10804
