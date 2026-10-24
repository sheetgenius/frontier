---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-read-only-calls-can-overlap-and-full-history-forks-preserve-their-prefix
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/c9e0fffbbc05c36478686444f6ab1edbadfe2768
    precision: commit
  - url: https://github.com/openai/codex/commit/72c959528ee4ca74abdb8575fbbc4e36960a8c47
    precision: commit
  - url: https://github.com/openai/codex/commit/e1b9c9457ceca75a99b034a5df39ac48c3998d15
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/feature_configs.rs#L316-L319
    precision: tagged_commit_file
---
# 2026-10-24-codex-read-only-calls-can-overlap-and-full-history-forks-preserve-their-prefix

Read-only calls can overlap and full-history forks preserve their prefix. Native execution can [overlap eligible read-only calls](https://github.com/openai/codex/commit/c9e0fffbbc05c36478686444f6ab1edbadfe2768) and cancel CodeMode work when interrupted. In 0.164.0, full-history subagent forks [preserve the parent prefix by default, with a documented legacy-compaction exception](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/feature_configs.rs#L316-L319). This supports reuse of existing context; the code does not prove a particular cache-hit rate or quota saving. Fresh-child dynamic-tool inheritance remains [a separate default-off feature](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/lib.rs#L1525-L1529).

Channel: tagged-release. Half: capability. Date: 2026-10-23.

Operator consequence: Compare native parallel reads and forks against catalog-scanning, reinjection, and scheduling wrappers before retaining those layers. Measure accepted results, interruption latency, and context volume. Do not turn a prefix-preservation implementation into a claim that caching lasts forever or that child work is free.

## Receipt
- https://github.com/openai/codex/commit/c9e0fffbbc05c36478686444f6ab1edbadfe2768
- https://github.com/openai/codex/commit/72c959528ee4ca74abdb8575fbbc4e36960a8c47
- https://github.com/openai/codex/commit/e1b9c9457ceca75a99b034a5df39ac48c3998d15
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/features/src/feature_configs.rs#L316-L319
