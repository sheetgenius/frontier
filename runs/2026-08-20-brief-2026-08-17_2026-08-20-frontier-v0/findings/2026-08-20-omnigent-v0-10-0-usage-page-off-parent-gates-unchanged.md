---
schema_version: bitter.frontier_finding.v0
finding_id: 2026-08-20-omnigent-v0-10-0-usage-page-off-parent-gates-unchanged
source: omnigent
source_contract: sources/omnigent.yml
window:
  start: 2026-08-17
  end: 2026-08-20
status: accepted
confidence: high
evidence:
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.10.0/omnigent/server/feature_flags.py
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.10.0/omnigent/policies/builtins/cost.py
    precision: tagged_commit_file
  - url: https://github.com/omnigent-ai/omnigent/blob/v0.10.0/omnigent/inner/qwen_executor.py
    precision: tagged_commit_file
---
# 2026-08-20-omnigent-v0-10-0-usage-page-off-parent-gates-unchanged

v0.10.0 ships a Usage page and Devin as a built-in harness, but the parent governance defects did not move. cost.py blob SHA 5b4ca596 is identical at v0.9.0 and v0.10.0; max_cost_usd is still a downgrade gate; None or [] for expensive_models still sets block_all_models=True. types.py blob SHA 1c4a0862 is identical; FAIL_CLOSED_PHASES is still ("PHASE_TOOL_CALL", "PHASE_REQUEST"); PHASE_TOOL_RESULT is still "intentionally NOT here." qwen_executor.py at v0.10.0 _fs_result_policy_denies returns False on eval error (comment: result phase fails open) and a write-result denial refuses the response without undoing the write. OMNIGENT_FEATURES at v0.10.0 feature_flags.py: unset or empty means every release feature is off, including usage_page. CHANGELOG.md at the v0.10.0 tag still starts at ## [v0.9.0].

Channel: tagged-release. Half: both (Usage page is capability and off; the gates are unchanged defects).

Operator consequence: do not read the Usage page as a ceiling, and do not treat v0.10.0 as a fix for ACP file I/O policy or the spend cap. Set OMNIGENT_FEATURES=usage_page if you want the page. Shared-editor approval remains any-editor.

## Receipt
- https://github.com/omnigent-ai/omnigent/blob/v0.10.0/omnigent/server/feature_flags.py
- https://github.com/omnigent-ai/omnigent/blob/v0.10.0/omnigent/policies/builtins/cost.py
- https://github.com/omnigent-ai/omnigent/blob/v0.10.0/omnigent/inner/qwen_executor.py
- https://github.com/omnigent-ai/omnigent/blob/v0.10.0/omnigent/policies/types.py
