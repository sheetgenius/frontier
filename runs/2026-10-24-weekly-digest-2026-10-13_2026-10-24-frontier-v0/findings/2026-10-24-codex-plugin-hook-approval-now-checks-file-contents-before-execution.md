---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-plugin-hook-approval-now-checks-file-contents-before-execution
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/2bf2bdf82c33f4c66ba3f0767b8e4b6a933aac40
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/engine/plugin_trust.rs
    precision: tagged_commit_file
---
# 2026-10-24-codex-plugin-hook-approval-now-checks-file-contents-before-execution

Plugin hook approval now checks file contents before execution. The hook path [recomputes plugin content hashes and compares the trusted contents and declaration before running a hook](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/engine/plugin_trust.rs). A changed plugin requires approval again. The compatibility path matters: older declaration-only approvals are migrated by establishing a content baseline on first use; that migration is not retroactive proof that those bytes were previously reviewed.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: On 0.164.0, test approving a plugin, changing its hook file, and attempting the hook again. Re-audit existing approvals when upgrading, especially the first-use migration. The durable primitive is approval bound to contents; a one-time human review is useful only if its object stays the same.

## Receipt
- https://github.com/openai/codex/commit/2bf2bdf82c33f4c66ba3f0767b8e4b6a933aac40
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/hooks/src/engine/plugin_trust.rs
