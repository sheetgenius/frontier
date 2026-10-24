---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-compaction-commits-only-completed-summaries-and-resume-restores-more-state
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/commit/7c9bfb910ef65c8f4a957c53affbd43d5fac2882
    precision: commit
  - url: https://github.com/openai/codex/commit/76ed3b484d62ccceb9fa512ff4dd139f421814c3
    precision: commit
  - url: https://github.com/openai/codex/commit/430a16799d90e296fb27b1e94f206023902b7e56
    precision: commit
---
# 2026-10-24-codex-compaction-commits-only-completed-summaries-and-resume-restores-more-state

Compaction commits only completed summaries and resume restores more state. The [compaction attempt buffers output and records it only on response completion](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890); a failed attempt no longer leaves a partial summary in history. [Background-compaction failure can fall back to the blocking path](https://github.com/openai/codex/commit/e8aa7c1678caa9a368243d72bf0e9b7859d97f15), although async compaction remains default-off. Resume now handles compressed rollouts and saved model/settings more consistently. The earlier [cold-resume change restores permissions and network grants while preserving explicit overrides and managed restrictions](https://github.com/openai/codex/commit/7c9bfb910ef65c8f4a957c53affbd43d5fac2882).

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: For long runs, test interruption during compaction, restart from a compressed rollout, and compare the restored model, effort, and permission state with the intended run contract. These fixes reduce recovery supervision; they do not establish automatic recovery from every capacity error, cache persistence, or the Windows helper regression in section 14.

## Receipt
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/core/src/compact.rs#L858-L890
- https://github.com/openai/codex/commit/7c9bfb910ef65c8f4a957c53affbd43d5fac2882
- https://github.com/openai/codex/commit/76ed3b484d62ccceb9fa512ff4dd139f421814c3
- https://github.com/openai/codex/commit/430a16799d90e296fb27b1e94f206023902b7e56
