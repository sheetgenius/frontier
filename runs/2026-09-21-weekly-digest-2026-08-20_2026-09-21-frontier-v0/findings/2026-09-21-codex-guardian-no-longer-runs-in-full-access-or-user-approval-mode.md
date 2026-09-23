---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-codex-guardian-no-longer-runs-in-full-access-or-user-approval-mode
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/releases/tag/rust-v0.153.0
    precision: github_release
---
# 2026-09-21-codex-guardian-no-longer-runs-in-full-access-or-user-approval-mode

Guardian no longer runs in Full Access or User approval mode. Full Access skips Guardian reviews for confirmation-only actions. User approval mode skips background Guardian scoring and prewarming. Sensitive-action checks and user-input requests keep their existing handling. Across 0.151 to 0.155, a series of hardening fixes landed: stale Guardian classifications can no longer authorize after permission-state changes (#41196, 0.151.0). Authorization evidence survives compaction (0.152.0, 0.153.0). Approvals invalidated by new user instructions are rejected (#43442, 0.154.0). Review failures are now distinguished from unsafe-action findings, and transient failures retry (#44482, 5d3fe48b, in 0.155.0).

Channel: tagged-release. Half: both. Date: 2026-09-03.

Operator consequence: In Full Access mode, the reviewer is not guarding confirmation-only actions. That makes Full Access what it says it is. In User approval mode you are the only reviewer and no scoring tokens are spent. If you relied on Guardian as a backstop under Full Access, move to `approval_policy = "on-request"` plus `approvals_reviewer = "auto_review"`. The auto-review page says `approval_policy = "never"`, `:danger-full-access`, or `--yolo` can avoid creating the request that review needs.

## Receipt
- https://github.com/openai/codex/releases/tag/rust-v0.153.0
