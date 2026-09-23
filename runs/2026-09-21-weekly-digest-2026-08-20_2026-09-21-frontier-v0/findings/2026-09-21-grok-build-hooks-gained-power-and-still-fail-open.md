---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-grok-build-hooks-gained-power-and-still-fail-open
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L430
    precision: tagged_commit_file
---
# 2026-09-21-grok-build-hooks-gained-power-and-still-fail-open

Hooks gained power, and still fail open. Hooks can now ask, block prompts, and redact tool output before the model sees it. The failure mode did not change.

Channel: tagged-release. Half: both. Date: 2026-08-28 (1.0.13), 2026-08-31 (1.0.14), by 2026-09-19 (UserPromptSubmit blocking).

Operator consequence: A redaction or allowlist hook is a control only if it cannot crash: wrap it so every error path prints an explicit deny. In `auto` mode, L332 says allow rules are not a closed allowlist and the classifier can approve commands no rule mentions; use `deny` rules or a PreToolUse hook for hard limits.

## Receipt
- https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-pager/docs/user-guide/22-permissions-and-safety.md#L430
