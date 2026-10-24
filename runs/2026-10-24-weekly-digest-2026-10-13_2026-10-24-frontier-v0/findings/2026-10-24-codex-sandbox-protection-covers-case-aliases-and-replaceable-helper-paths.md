---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-sandbox-protection-covers-case-aliases-and-replaceable-helper-paths
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/3bae578af33e43268e7bc2d6d5d0266f704bb554
    precision: commit
  - url: https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/sandboxing/src/bwrap.rs#L179-L310
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/commit/d34f104c22ae815fc213641b8a637c5947f14ac1
    precision: commit
  - url: https://github.com/openai/codex/releases/tag/rust-v0.164.0
    precision: github_release
---
# 2026-10-24-codex-sandbox-protection-covers-case-aliases-and-replaceable-helper-paths

Sandbox protection covers case aliases and replaceable helper paths. The macOS policy [accounts for case aliases of protected repository metadata](https://github.com/openai/codex/commit/3bae578af33e43268e7bc2d6d5d0266f704bb554). Linux helper lookup [checks both the alias and canonical path, including whether ancestors can be replaced](https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/sandboxing/src/bwrap.rs#L239-L310). [Windows sandbox provisioning now rejects clients without an installed Codex package identity; the debug foreground-mode exception remains](https://github.com/openai/codex/commit/d34f104c22ae815fc213641b8a637c5947f14ac1). These are separate mechanisms; no matching new public CVE/GHSA was found in the advisory inventories checked.

Channel: tagged-release. Half: defect. Date: 2026-10-23.

Operator consequence: Use 0.164.0 for tests involving hostile repositories and protected metadata. On macOS exercise case variants; on Linux exercise replaceable symlinks and writable parents; on Windows check package identity before depending on provisioning; unpackaged clients can now be rejected. A release-note security fix is a reason to retest a boundary, not evidence that the entire boundary is now proven.

## Receipt
- https://github.com/openai/codex/commit/3bae578af33e43268e7bc2d6d5d0266f704bb554
- https://github.com/openai/codex/blob/rust-v0.164.0/codex-rs/sandboxing/src/bwrap.rs#L179-L310
- https://github.com/openai/codex/commit/d34f104c22ae815fc213641b8a637c5947f14ac1
- https://github.com/openai/codex/releases/tag/rust-v0.164.0
