---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-patched-zsh-and-retired-feature-switches-leave-less-configuration-to-maintain
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/cd85a26cae00385a0dd9247381ef5d1d7ffe9ef3
    precision: commit
  - url: https://github.com/openai/codex/commit/a645742bb5615026ae673c9527f146ee551d4949
    precision: commit
  - url: https://github.com/openai/codex/commit/bb64b894fd67158be0f874872e6d7bfe717e7368
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs
    precision: tagged_commit_file
---
# 2026-10-24-codex-patched-zsh-and-retired-feature-switches-leave-less-configuration-to-maintain

Patched zsh and retired feature switches leave less configuration to maintain. Codex [removes the patched-zsh execution backend and stops bundling that patched shell](https://github.com/openai/codex/commit/a645742bb5615026ae673c9527f146ee551d4949). This is not removal of zsh support: section 2's snapshot work includes zsh. The worktree and realtime-conversation flags [become removed compatibility entries](https://github.com/openai/codex/commit/bb64b894fd67158be0f874872e6d7bfe717e7368), rather than switches operators should rely on to disable those capabilities.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Remove obsolete patched-shell assumptions and test shell snapshots and command policy on the supported path. Audit configuration-management templates for retired feature flags; use actual permissions and platform controls where a capability must be constrained. A deleted switch reduces setup surface only if operators stop mistaking it for a working control.

## Receipt
- https://github.com/openai/codex/commit/cd85a26cae00385a0dd9247381ef5d1d7ffe9ef3
- https://github.com/openai/codex/commit/a645742bb5615026ae673c9527f146ee551d4949
- https://github.com/openai/codex/commit/bb64b894fd67158be0f874872e6d7bfe717e7368
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs
