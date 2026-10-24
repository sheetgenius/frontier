---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-current-documentation-makes-chatgpt-authenticated-auto-review-free
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan
    precision: official_docs
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L57-L70
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs
    precision: tagged_commit_file
---
# 2026-10-24-codex-current-documentation-makes-chatgpt-authenticated-auto-review-free

Current documentation makes ChatGPT-authenticated auto-review free. The [current plan help says auto-review safety checks are free and do not consume plan limits when signed in with a ChatGPT account](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan), independently read on 24 October at approximately 10:30 UTC. This is current billing documentation, not proof of when that policy began. Optional Decisions comparison remains off and selects a separate API credential path.

Channel: docs-only. Half: capability. Date: 2026-10-24.

Operator consequence: Retire the broad open question about ordinary ChatGPT-authenticated review pricing. Obtain a request-matched billing record and provider terms for optional API-key comparison before generalizing the free-usage statement.

## Receipt
- https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/ext/guardian-v2/src/async_scorer/startup.rs#L57-L70
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs
