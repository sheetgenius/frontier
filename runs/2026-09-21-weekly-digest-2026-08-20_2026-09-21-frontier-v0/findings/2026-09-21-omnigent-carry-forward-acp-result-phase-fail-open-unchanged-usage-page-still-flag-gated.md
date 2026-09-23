---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-09-21-omnigent-carry-forward-acp-result-phase-fail-open-unchanged-usage-page-still-flag-gated
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-20
  end: 2026-09-21
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/inner/qwen_executor.py
    precision: tagged_commit_file
---
# 2026-09-21-omnigent-carry-forward-acp-result-phase-fail-open-unchanged-usage-page-still-flag-gated

Carry-forward: ACP result-phase fail-open unchanged; Usage page still flag-gated. Carry-forward: ACP result-phase fail-open unchanged; Usage page still flag-gated

Channel: tagged-release. Half: neither (unchanged). Date: re-read at v0.14.0.

Operator consequence: Same as August. Do not treat v0.14.0 as a fix for ACP delegated file I/O policy; call-phase is the only enforceable gate for those writes. Set `OMNIGENT_FEATURES=usage_page` to see spend. `deny_tag_push` still defaults true: github.py blob 23d5197e identical v0.10.0 through v0.14.0.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.14.0/omnigent/inner/qwen_executor.py
