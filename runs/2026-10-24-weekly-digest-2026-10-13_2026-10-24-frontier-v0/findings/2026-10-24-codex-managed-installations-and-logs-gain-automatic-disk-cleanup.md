---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-managed-installations-and-logs-gain-automatic-disk-cleanup
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/0960e379a5555f1b6d7b97d7980039902213c26c
    precision: commit
  - url: https://github.com/openai/codex/commit/89461ea6833832b0551ce24ee32205824d5c108d
    precision: commit
  - url: https://github.com/openai/codex/commit/6bae551093d24ad6539a7daba2d9a13b80b28d15
    precision: commit
  - url: https://github.com/openai/codex/releases/tag/rust-v0.164.0
    precision: github_release
---
# 2026-10-24-codex-managed-installations-and-logs-gain-automatic-disk-cleanup

Managed installations and logs gain automatic disk cleanup. The release [prunes old managed installations and marketplace cache material and bounds managed app-server/updater stderr logs](https://github.com/openai/codex/releases/tag/rust-v0.164.0), adding native maintenance for state that accumulates during repeated updates and long-running use. The [managed logger can drop oversized or queued-out records and trims files above 1 MiB to a 256 KiB tail](https://github.com/openai/codex/commit/6bae551093d24ad6539a7daba2d9a13b80b28d15); this is not a transcript-retention guarantee or a measured desktop disk reduction.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Inspect retained versions and log retention on 0.164.0 before keeping external cleanup jobs. Export evidence that needs longer retention to a controlled destination. Less janitorial work is useful, but bounded local logs change what a later incident review can recover.

## Receipt
- https://github.com/openai/codex/commit/0960e379a5555f1b6d7b97d7980039902213c26c
- https://github.com/openai/codex/commit/89461ea6833832b0551ce24ee32205824d5c108d
- https://github.com/openai/codex/commit/6bae551093d24ad6539a7daba2d9a13b80b28d15
- https://github.com/openai/codex/releases/tag/rust-v0.164.0
