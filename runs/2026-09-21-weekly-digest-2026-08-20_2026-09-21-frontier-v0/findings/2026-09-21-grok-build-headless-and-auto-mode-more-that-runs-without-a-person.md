---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-grok-build-headless-and-auto-mode-more-that-runs-without-a-person
source: grok-build
source_contract: sources/grok-build.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/changelogs/1.0.11.md
    precision: tagged_commit_file
---
# 2026-09-21-grok-build-headless-and-auto-mode-more-that-runs-without-a-person

Headless and auto mode: more that runs without a person. Unattended runs got longer and quieter. The 1.0.22 line shows auto mode was running `git checkout --` (discarding local changes) without review before that build.

Channel: tagged-release. Half: both. Date: 2026-08-26 (1.0.11), 2026-09-04 (1.0.19), 2026-09-07 (1.0.22).

Operator consequence: If you ran auto mode before 1.0.22 and lost uncommitted work, this is the likely cause; upgrade. Audit how your headless jobs set the "auto-allow" startup hint. For ACP wrappers (Omnigent drives `grok agent stdio`), 1.0.29 is the first build where parallel stdio agents on one home directory are stable; the tool policy that refuses is still Grok's own permission pipeline, and the wrapper sits outside it.

## Receipt
- https://github.com/xai-org/grok-build/blob/4247f661689354b831191f11eeeac8424993fe3d/crates/codegen/xai-grok-shell/changelogs/1.0.11.md
