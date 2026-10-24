---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-startup-approval-policy-precedence-is-repaired-only-on-main
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/398500106707f0a3217c7cf83edc2bf226cc342f
    precision: commit
---
# 2026-10-24-codex-startup-approval-policy-precedence-is-repaired-only-on-main

Startup approval-policy precedence is repaired only on main. The [main-only change sends explicit approval-policy overrides and otherwise adopts the server-returned policy before queued input](https://github.com/openai/codex/commit/398500106707f0a3217c7cf83edc2bf226cc342f), preserving explicit profile exceptions and granular override semantics. Neither stable nor alpha.1 contains it.

Channel: main-unreleased. Half: defect. Date: 2026-10-23.

Operator consequence: Inspect effective first-turn approval policy separately from model and reviewer selection. Wait for a containing tag, then test queued input and deliberate overrides before relying on this repair.

## Receipt
- https://github.com/openai/codex/commit/398500106707f0a3217c7cf83edc2bf226cc342f
