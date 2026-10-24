---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-daybreak-s-cli-and-api-key-gates-are-now-stable-defaults
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7
    precision: commit
  - url: https://github.com/openai/codex/commit/6cc7d9cc5c702c0ca133f7ea48432166e0b880be
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1449-L1459
    precision: tagged_commit_file
  - url: https://learn.chatgpt.com/docs/cyber-safety
    precision: official_docs
---
# 2026-10-24-codex-daybreak-s-cli-and-api-key-gates-are-now-stable-defaults

Daybreak's CLI and API-key gates are now stable defaults. Stable now defaults [both `cli_daybreak` and `api_key_cyber_access_programs` to true](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1449-L1459). That does not grant a model entitlement. Current [cyber-safety documentation](https://learn.chatgpt.com/docs/cyber-safety), read 2026-10-24, describes separate approvals for GPT-Daybreak-Blue and GPT-Daybreak-Red and scopes access to the approved identity, organization/workspace, model, and surface. It does not make a CLI feature flag permission to ignore organization policy or supply automatic ZDR.

Channel: tagged-release. Half: capability. Date: 2026-10-15.

Operator consequence: Replace the profile's stable-off warning with a stable-on, eligibility-qualified description. Eligible security teams can test the released CLI path without adopting an alpha solely for this gate. Confirm the actual account and model approval; do not infer access from a picker, a social model name, or the enabled flag.

## Receipt
- https://github.com/openai/codex/commit/6fbfc352cafb50332d62dbdc8720cb5d7fe3b7c7
- https://github.com/openai/codex/commit/6cc7d9cc5c702c0ca133f7ea48432166e0b880be
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1449-L1459
- https://learn.chatgpt.com/docs/cyber-safety
