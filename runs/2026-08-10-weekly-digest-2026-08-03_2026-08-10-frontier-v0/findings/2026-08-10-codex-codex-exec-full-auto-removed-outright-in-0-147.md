---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-codex-codex-exec-full-auto-removed-outright-in-0-147
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/pull/36054
    precision: merged_pr
---
# 2026-08-10-codex-codex-exec-full-auto-removed-outright-in-0-147

`codex exec --full-auto` removed outright in 0.147.0.

The deprecated `--full-auto` flag is gone from `codex exec`. The release notes direct operators to `--sandbox workspace-write` instead.

Channel: tagged-release. Ancestry: grep of the rust-v0.146.0...rust-v0.147.0 compare commit list finds 1c5f336c4057f1724fc0dc1cb27f971a9fc887bc 'Remove legacy `--full-auto` handling from `codex exec` (#36054)'. PR #36054 merged 2026-07-30T01:22:46Z; first non-prerelease tag containing it is rust-v0.147.0. The 0.147.0 release body lists it under Chores.

Operator consequence: Adapt now. Any CI job, Makefile, cron, or wrapper script still passing `codex exec --full-auto` breaks on upgrade to 0.147.0 or later. This is filed under Chores in the release notes rather than as a breaking change, so it will not announce itself to anyone reading the headline sections. Grep your automation for the string before you bump.

## Receipt
- https://github.com/openai/codex/pull/36054
