---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-claude-code-the-published-guard-now-holds-policy-asks-and-environment-pins-over-user-mods
source: claude-code
source_contract: sources/claude-code.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/held-verdict/verdicts/holds-over.ts
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/policy/pinned-names.ts
    precision: tagged_commit_file
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.299
    precision: github_release
  - url: https://github.com/anthropics/claude-code/releases/tag/v2.1.304
    precision: github_release
---
# 2026-10-24-claude-code-the-published-guard-now-holds-policy-asks-and-environment-pins-over-user-mods

The published guard now holds policy asks and environment pins over user mods. The parent's main-only guard is delivered. The code preserves a deny, or an ask backed by a rule, hook, setting, policy plugin, ceiling or host callback, when the user tier weakens or relabels it. An ordinary mode-owned dialog ask is not universally protected. Environment pins cover managed environment entries, the configured process wrapper, nine policy/sign-in variables and ten child-code-loading variables. Version 299 also stops user-mod environment changes from rewriting managed command-hook execution and stops hook/mod approvals from authorizing plan-mode writes. Version 304 adds `decider: "person"` and `e.isReadOnly`: a person-only ask requires a dialog or host callback and is refused when neither can answer.

Channel: tagged-release. Half: both. Date: 2026-10-14.

Operator consequence: Raise a guard-dependent fleet above 296; both today's stable selector and latest contain this delivery. Keep `allowManagedModsOnly: true` where user code must not participate. This deletes a wait-for-release condition, not the need to choose admitted code: mods execute unsandboxed, the guard must be seated, and an administrator can deliberately relax its verdict holds. Regenerate installed mod types before using the new decider; the [public type mirror at 310](https://github.com/anthropics/claude-code/blob/v2.1.310/mods/types/claude-code.d.ts#L10130) still describes `ToolCheckDecider` as `'host'` despite the 304 release note. Published Linux x64 packages at 299, 308 and 310 passed registry SHA-512 checks and contain the guard's refusal text and policy markers. That corroborates delivery; no enforcement probe was run.

## Receipt
- https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/held-verdict/verdicts/holds-over.ts
- https://github.com/anthropics/claude-code/blob/v2.1.310/mods/sec-default/hooks/policy/pinned-names.ts
- https://github.com/anthropics/claude-code/releases/tag/v2.1.299
- https://github.com/anthropics/claude-code/releases/tag/v2.1.304
