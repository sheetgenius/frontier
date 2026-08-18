---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-17-omnigent-omnigent-now-gates-acp-harnesses-delegated-file-i-o-with-its-own-result
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-10
  end: 2026-08-17
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/pull/1222
    precision: merged_pr
---
# 2026-08-17-omnigent-omnigent-now-gates-acp-harnesses-delegated-file-i-o-with-its-own-result

Omnigent now gates ACP harnesses' delegated file I/O with its own result-phase policy  --  and it fails open.

For the qwen and goose ACP harnesses, file reads and writes that the harness delegates back to Omnigent's OSEnvironment now emit a paired ToolCallRequest/ToolCallComplete onto the turn stream (so they appear in history) and run the read or written bytes through PHASE_TOOL_RESULT policy. An explicit POLICY_ACTION_DENY refuses the operation  --  on read the bytes never reach the agent, on write the evaluation happens before OSEnvironment.write so the write never happens. The PR states the semantics plainly: it fails open otherwise, for an unwired policy, an evaluation error, or any non-deny verdict, because FAIL_CLOSED_PHASES contains PHASE_TOOL_CALL only. The gate is content-only: the server reads result-phase tool identity from request_data, which the harness policy round-trip does not carry.

Channel: tagged-release. Ancestry: PR #1222 merge commit 300c5fd9333cb12d217d120753cb204b76355a03, merged 2026-08-05T03:04:51Z. gh api repos/omnigent-ai/omnigent/compare/v0.9.0...300c5fd9333cb12d217d120753cb204b76355a03 -> status "behind", ahead_by 0; against v0.8.2 -> "diverged", ahead_by 75.

Operator consequence: This is the first receipted answer to the meta-harness question of which layer refuses, and the answer is conditional. For qwen and goose on v0.9.0, Omnigent's policy can now refuse a delegated file operation  --  but only on an explicit DENY, and an evaluation error or an unwired policy is an ALLOW. Test it rather than assume it, and do not generalise: this is two ACP harnesses, not the harness list. It is a fact about the Omnigent/qwen and Omnigent/goose pairs.

## Receipt
- https://github.com/omnigent-ai/omnigent/pull/1222
