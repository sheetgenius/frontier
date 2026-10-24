---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-10-24-codex-permission-menus-hold-queued-prompts-and-active-grants-permit-stdin-review
source: codex
source_contract: sources/codex.yml
window:
  start: 2026-10-13
  end: 2026-10-24
status: accepted
confidence: high
evidence:
  - url: https://github.com/openai/codex/commit/7389eebf45df47895b386334bc1c5b9809eb9605
    precision: commit
  - url: https://github.com/openai/codex/commit/d292f721242ef355ce5a38da90e0e33edc4790e6
    precision: commit
---
# 2026-10-24-codex-permission-menus-hold-queued-prompts-and-active-grants-permit-stdin-review

Permission menus hold queued prompts and active grants permit stdin review. Stable [holds queued prompts while permission-menu discovery is pending and guards local permission commands](https://github.com/openai/codex/commit/7389eebf45df47895b386334bc1c5b9809eb9605). Separately, [active matching grants let terminal input reach review when granular sandbox prompts are disabled](https://github.com/openai/codex/commit/d292f721242ef355ce5a38da90e0e33edc4790e6). Each input still requires review; expired authority or Never rejects it. Filesystem grants must match including entry order, with active network authority when needed.

Channel: tagged-release. Half: both. Date: 2026-10-23.

Operator consequence: Test queued work during menu discovery and input after turn/session grant expiry. Clients must still handle approvals after a terminal starts; a matching grant is not unconditional permission for new input.

## Receipt
- https://github.com/openai/codex/commit/7389eebf45df47895b386334bc1c5b9809eb9605
- https://github.com/openai/codex/commit/d292f721242ef355ce5a38da90e0e33edc4790e6
