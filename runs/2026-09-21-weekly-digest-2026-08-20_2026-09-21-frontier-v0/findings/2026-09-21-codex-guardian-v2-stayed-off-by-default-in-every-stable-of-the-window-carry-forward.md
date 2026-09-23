---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-codex-guardian-v2-stayed-off-by-default-in-every-stable-of-the-window-carry-forward
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/features/src/lib.rs#L1593-L1596
    precision: tagged_commit_file
  - url: https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/features/src/lib.rs#L1563-L1566
    precision: tagged_commit_file
---
# 2026-09-21-codex-guardian-v2-stayed-off-by-default-in-every-stable-of-the-window-carry-forward

Guardian V2 stayed off by default in every stable of the window (carry-forward 1). The flag did not flip. The code behind it did change a lot. Guardian V2 got analytics: #42144 (merge 86b7d127, ancestor of rust-v0.153.0, ahead 13/behind 0) emits `codex_guardian_v2_classification` and `codex_guardian_v2_fast_decision` events and adds `guardian_v2_enabled` to turn analytics. #44164 (d3ffbbed, in rust-v0.155.0) adds `codex.guardian.context.request_tokens` telemetry and estimates of per-section context cost. #43462 (db0568db, in rust-v0.154.0) deletes the legacy `fast_decision`/`full_review` hooks and the duplicate Guardian V2 fast-approval path. That is scaffolding removal. The only Guardian default that flipped is `guardian_reuse_parent_compaction` -> Stable/true (#46522), which is in rust-v0.156.0 (OUT, 2026-09-22) and not in 0.155.1.

Channel: tagged-release (flag state), main-unreleased at window close (the one Guardian default that did flip). Half: defect (a negative). Date: 2026-08-24..2026-09-18 (every stable).

Operator consequence: Nothing auto-enables Guardian V2 through 0.155.1. If you turned it on, 0.153.0+ sends classification events with thread attribution to OpenAI analytics. Audit that against your telemetry policy. Watch 0.156.x for `/usage` and for any GuardianV2 default flip. Settle it by reading lib.rs at the next stable tag.

## Receipt
- https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/features/src/lib.rs#L1593-L1596
- https://github.com/openai/codex/blob/rust-v0.155.1/codex-rs/features/src/lib.rs#L1563-L1566
