---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-guardian-must-reassess-a-retry-that-requests-more-authority
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/4b9c24f98c6d886134fd2fc237355064708ff21f
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/orchestrator.rs#L484-L518
    precision: tagged_commit_file
---
# 2026-10-24-codex-guardian-must-reassess-a-retry-that-requests-more-authority

Guardian must reassess a retry that requests more authority. When execution fails under a sandbox and retries with escalation, [a prior Guardian approval no longer supplies the exemption used for explicit user or hook approvals](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/orchestrator.rs#L484-L518). The retry constructs an escalated approval request and clears the old additional-permissions field so review covers the authority actually requested. This is a specific retry-path correction, not proof that every approval source or Full Access mode now invokes Guardian.

Channel: tagged-release. Half: defect. Date: 2026-10-23.

Operator consequence: Test an initially allowed action that fails under containment and then asks to escalate. On 0.164.0, expect a fresh review rather than treating the first model approval as reusable authorization. This preserves automated review while putting human policy work at the change in authority, where it matters.

## Receipt
- https://github.com/openai/codex/commit/4b9c24f98c6d886134fd2fc237355064708ff21f
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/tools/orchestrator.rs#L484-L518
