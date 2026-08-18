---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-10-codex-approve-for-me-puts-a-model-not-a-human-in-the-approval
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-03
  end: 2026-08-10
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/pull/36373
    precision: merged_pr
---
# 2026-08-10-codex-approve-for-me-puts-a-model-not-a-human-in-the-approval

`--approve-for-me` puts a model, not a human, in the approval seat.

A new `--approve-for-me` flag on the interactive and `exec` commands routes approval requests through automatic review instead of prompting the operator. It sets `approval_policy="on-request"` with the `workspace-write` sandbox, and propagates across root, `exec`, `resume`, and `fork` argument handling while preserving later subcommand permission overrides.

Channel: tagged-release. Ancestry: grep of the rust-v0.146.0...rust-v0.147.0 compare commit list finds exactly one match: b7a61066081644e0d8b2c0b4dbfd7408ac1514df 'Add an `--approve-for-me` CLI flag (#36373)'. PR #36373 merged 2026-07-31T18:28:24Z; first non-prerelease tag containing it is rust-v0.147.0.

Operator consequence: Watch, and decide deliberately before enabling it in CI. This is the flag that converts Codex's approval prompt from a human checkpoint into a model checkpoint on a single command-line switch, and it also silently pins the sandbox to workspace-write. If your governance story rests on 'a person approved every escalation', add `--approve-for-me` to whatever you lint agent invocations with. Note the ordering trap: subcommand permission overrides still win, so the effective policy is not always what the flag implies.

## Receipt
- https://github.com/openai/codex/pull/36373
